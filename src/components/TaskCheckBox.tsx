'use client'

import { useState } from "react"

interface TaskCheckBoxProps {
    onCheck?: (isChecked: boolean) => void
}

const TaskCheckBox = ({onCheck}: TaskCheckBoxProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    return (
        <div className={`w-6 h-6 border border-gray-200 bg-gray-50
        hover:border-gray-300 hover:bg-white hover:cursor-pointer transition-all relative
        before:block before:h-0.5 before:w-[calc(100%+0.1rem)] before:bg-gray-600 before:rotate-45 before:absolute before:top-[calc(50%-0.075rem)] before:left-[-0.05rem]
        after:block after:h-0.5 after:w-[calc(100%+0.1rem)] after:bg-gray-600 after:-rotate-45 after:absolute after:top-[calc(50%-0.075rem)] after:left-[-0.05rem] after:transition-all before:transition-all ` +
        (isChecked ?
            "after:opacity-100 before:opacity-100 border-gray-200 bg-white hover:border-gray-200 hover:bg-white after:transition-all before:transition-all after:duration-500 before:duration-500" :
            "after:opacity-0 before:opacity-0") }
        onClick={() => {
            onCheck && onCheck(!isChecked)
            setIsChecked(!isChecked) 
        }}>

        </div>
    )
}

export default TaskCheckBox