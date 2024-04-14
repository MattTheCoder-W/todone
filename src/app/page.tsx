'use client'

import TaskCheckBox from "@/components/TaskCheckBox";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Calendar, Folder, PenBox, Trash } from "lucide-react";
import { useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const taskHeaderRef = useRef<null | HTMLSpanElement>(null)

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 min-h-full">
      <div className="lg:col-span-3 border-r border-zinc-300 bg-white">
        <h1 className="font-bold text-3xl px-12 py-4">
          All Tasks
        </h1>
        <div className="px-12 py-4">
          <Card className="flex justify-left items-center
          px-8">
            <div className="">
              <TaskCheckBox onCheck={(isChecked) => {
                if(isChecked) {
                  taskHeaderRef.current?.classList.add("line-through")
                } else {
                  taskHeaderRef.current?.classList.remove("line-through")
                }
              }} />
            </div>
            <div className="w-full flex justify-start items-center">
              <CardHeader className="mx-4 px-0">
                <span ref={taskHeaderRef} className="transition-all duration-500">
                  Hello World
                </span>
              </CardHeader>
              <div className="text-zinc-700 text-sm">
                Description
              </div>
            </div>
            <div className="w-full flex justify-end items-center text-sm space-x-4">
              <div className="flex justify-center items-center">
                <Calendar className="w-4 h-4 mr-2" />
                due.date
              </div>
              <div className="flex justify-center items-center">
                <Folder className="w-4 h-4 mr-2" />
                category
              </div>
              <div className="flex justify-center items-center">
                <div
                className="h-6 w-0.5 bg-gray-300"
                />
              </div>
              <Button 
              variant={'ghost'}
              aria-label="edit task"
              className="flex justify-center items-center p-2">
                <PenBox className="w-5 h-5" />
              </Button>
              <Button 
              variant={'destructive'}
              aria-label="delete task"
              className="flex justify-center items-center p-2">
                <Trash className="w-5 h-5 text-white" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <div className="bg-zinc-50 px-6 py-4">
        <h1 className="font-bold text-xl mb-4">
          Options / Stats
        </h1>
        <div className="flex flex-col space-y-3 my-4">
          <Skeleton className="h-[125px] w-[250px] rounded-xl bg-zinc-300" />
          <div className="space-y-2">
            <Skeleton className="bg-zinc-300 h-4 w-[250px]" />
          </div>
        </div>
        <div className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus esse eius tempora autem a fugiat odio in, porro dignissimos adipisci iste ratione recusandae aperiam temporibus quod voluptatem dolorum ullam. Totam.
        </div>
      </div>
    </div>
  );
}
