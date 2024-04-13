import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Anton } from "next/font/google"
import { cn } from "@/lib/utils"

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"],
})

const NavBar = () => {
    return (
        <div className="w-full h-24 px-6 py-4">
            <MaxWidthWrapper>
                <Link href="#" className={cn(anton.className)}>
                    <span className="relative text-3xl leading-none
                    after:w-full after:h-1 after:bg-black after:absolute after:left-0 after:bottom-[calc(50%-0.2rem)]
                    after:opacity-0 after:hover:opacity-100 after:-translate-x-1/2 after:hover:translate-x-0 after:transition-all after:duration-500">
                        ToDone.
                    </span>
                </Link>
            </MaxWidthWrapper>
        </div>
    )
}

export default NavBar