'use client'

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { PlusCircle, Search } from "lucide-react";



import { ZodError, z } from 'zod'
import { useRef } from "react";
import { useToast } from "./ui/use-toast";
import NewTaskDialog from "./NewTaskDialog";
const searchBoxSchema = z.object({
    query: z.string().min(3, {
        message: 'Please enter at least 3 characters'
    }).max(50, {
        message: 'Please enter at most 50 characters'
    })
})

const SearchBox = () => {
    const queryRef = useRef<null | HTMLInputElement>(null)
    const {toast} = useToast()

    const onSearch = async () => {
        try {
            const data = searchBoxSchema.parse({ query: queryRef.current?.value ? queryRef.current?.value : '' })
            console.log("Validated data", data)
        } catch (error: ZodError<typeof searchBoxSchema> | any) {
            if(error.message) {
                const message = JSON.parse(error.message)
                const content = message[0].message
                console.log(content)
                toast({
                    className: "fixed top-0 right-0 md:max-w-[420px] md:top-4 md:right-4",
                    description: content,
                    variant: 'destructive',
                    duration: 2000,
                }) 
            }
            return
        }
    }

    return (
        <div className="w-full flex justify-stretch items-center">
            <div className="w-1/2 flex justify-center items-center space-x-4">
                {/* Search form */}
                <Input
                type="text"
                className="w-96"
                placeholder="Search for tasks..."
                onKeyDown={(e) => {
                    if(e.key === 'Enter')
                        onSearch()
                }}
                ref={queryRef}
                />
                <Button
                onClick={(e) => onSearch()}
                >
                    Search
                    <Search className="w-4 h-4 ml-2" />
                </Button>
            </div>
            <div className="w-1/2 flex justify-end items-center">
                {/* Options */}
                <div>
                    <NewTaskDialog />
                </div>
            </div>
        </div>
    )
}

export default SearchBox