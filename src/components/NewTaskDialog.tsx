'use client'

import { BoxIcon, Divide, Hammer, PlusCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "./ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Image from "next/image";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

const newTaskSchema = z.object({
    title: z.string().min(3, {
        message: 'Please enter at least 3 characters'
    }).max(50, {
        message: 'Please enter at most 50 characters'
    }),
})

const NewTaskForm = ({onFinish}: {onFinish: Function}) => {
    const {toast} = useToast()

    const form = useForm<z.infer<typeof newTaskSchema>>({
        resolver: zodResolver(newTaskSchema),
        defaultValues: {
          title: "",
        },
      })
     
      function onSubmit(values: z.infer<typeof newTaskSchema>) {
        console.log(values)
        toast({
            className: "fixed top-0 right-0 md:max-w-[420px] md:top-4 md:right-4",
            description: "Successfully created task",
            duration: 3000,
            variant: 'default'
        })
        onFinish()
      }

      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-4 gap-x-4">
                <div className="col-span-1 flex flex-col justify-center items-center">
                    <span>
                        Category
                    </span>
                    <BoxIcon className="w-8 h-8 mt-4" />
                </div>
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem className="col-span-3">
                    <FormLabel>Task Title</FormLabel>
                    <FormControl>
                        <Input placeholder="Do stuff..." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <div className="flex justify-center items-center">
                <Button type="submit"
                size="lg">
                    Create
                    <Hammer className="w-6 h-6 ml-2" />
                </Button>
            </div>
          </form>
        </Form>
      )
}

const NewTaskDialog = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                aria-label="add new task"
                >
                    <PlusCircle className="w-6 h-6" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create new task</DialogTitle>
                </DialogHeader>
                <NewTaskForm onFinish={() => setIsOpen(false)} />
            </DialogContent>
        </Dialog>
    )
}

export default NewTaskDialog