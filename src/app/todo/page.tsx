'use client'

import { Skeleton } from "@/components/ui/skeleton";
import Task from "@/components/Task";
import { useEffect } from "react";
import { getTasksFromUser } from "@/server/actions";

const Page = () => {
    useEffect(() => {
        const getTasks = async() => {
            const tasks = await getTasksFromUser('test')
            console.log("got tasks:", tasks)
        }
        getTasks()
    }, [])

    return(
        <div className="grid grid-cols-2 lg:grid-cols-4 min-h-full">
            <div className="lg:col-span-3 border-r border-zinc-300 bg-white">
                <h1 className="font-bold text-3xl px-12 py-4">
                All Tasks
                </h1>
                <div className="px-12 py-4 space-y-4">
                    {Array.from({length: 3}).map((_, i) => (
                        <Task key={i} />
                    ))} 
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
    )
}

export default Page