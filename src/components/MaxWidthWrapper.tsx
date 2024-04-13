import { cn } from "@/lib/utils"

interface MaxWidthWrapperProps {
    children: React.ReactNode,
    className?: string
}

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
    return (
        <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper