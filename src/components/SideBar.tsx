'use client'

import { cn } from "@/lib/utils"
import { CalendarDays, Home, LogOut, LucidePlane, Settings2Icon } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs"

interface ItemProps {
    children: React.ReactNode,
    href?: string,
    router?: AppRouterInstance,
    isCurrent?: boolean,
    className?: string
}
const Item = ({children, href, router, isCurrent, className}: ItemProps) => {
    return (
        <Button className={cn("w-[calc(100%-1rem)] my-1 justify-start px-4 py-3",
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
        <div className="h-full flex flex-col justify-center items-center py-2">
            <Item router={router} href="/todo" isCurrent={pathname === '/todo'}>
                <Home className="w-5 h-5 mr-2" />
                Home
            </Item>
            <Item router={router} href="/todo/today" isCurrent={pathname === '/todo/today'}>
                <CalendarDays className="w-5 h-5 mr-2" />
                Today
            </Item>
            <Item router={router} href="/todo/this-week" isCurrent={pathname === '/todo/this-week'}>
                <LucidePlane className="w-5 h-5 mr-2" />
                This Week
            </Item>
            <Item router={router} href="/todo/settings" isCurrent={pathname === '/todo/settings'}>
                <Settings2Icon className="w-5 h-5 mr-2" />
                Settings
            </Item>
            <div className="w-full h-full flex items-end justify-center">
                <LogoutLink className="hover:bg-zinc-200 rounded-lg transition-all w-[calc(100%-1rem)] flex items-center justify-start my-1 px-4 py-3">
                    <LogOut className="w-5 h-5 mr-2" />
                    Log Out
                </LogoutLink>
            </div>
        </div>
    )
}

export default SideBar