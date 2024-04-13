'use client'

import { cn } from "@/lib/utils"
import { CalendarDays, Home, LogOut, LucidePlane, Settings2Icon } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

interface ItemProps {
    children: React.ReactNode,
    href?: string,
    router?: AppRouterInstance,
    isCurrent?: boolean,
    className?: string
}
const Item = ({children, href, router, isCurrent, className}: ItemProps) => {
    return (
        <Button className={cn("w-[calc(100%-1rem)] my-1 justify-start px-4 py-2",
        className,
        isCurrent ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-zinc-200")}
        variant={isCurrent ? "default" : "ghost"}
        onClick={() => href && router && router.push(href)}>
            {children}
        </Button>
    )
}

const SideBar = () => {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <div className="flex flex-col justify-center items-center">
            <Item router={router} href="/home" isCurrent={pathname === '/home'}>
                <Home className="w-5 h-5 mr-2" />
                Home
            </Item>
            <Item router={router} href="/today" isCurrent={pathname === '/today'}>
                <CalendarDays className="w-5 h-5 mr-2" />
                Today
            </Item>
            <Item router={router} href="/this-week" isCurrent={pathname === '/this-week'}>
                <LucidePlane className="w-5 h-5 mr-2" />
                This Week
            </Item>
            <Item router={router} href="/settings" isCurrent={pathname === '/settings'}>
                <Settings2Icon className="w-5 h-5 mr-2" />
                Settings
            </Item>
            <Item>
                <LogOut className="w-5 h-5 mr-2" />
                Log Out
            </Item>
        </div>
    )
}

export default SideBar