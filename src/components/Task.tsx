'use client'

import TaskCheckBox from "@/components/TaskCheckBox";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Calendar, Folder, PenBox, Trash } from "lucide-react";
import { useRef } from "react";

const Task = () => {
    const taskHeaderRef = useRef<null | HTMLSpanElement>(null)
    return (
        <Card className="flex justify-left items-center px-8">
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
    )
}

export default Task