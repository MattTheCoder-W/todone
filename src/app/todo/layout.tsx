import Link from "next/link";
import { CheckSquare } from "lucide-react";
import SearchBox from "@/components/SearchBox";
import SideBar from "@/components/SideBar";
import { Anton } from "next/font/google"
const anton = Anton({
    subsets: ["latin"],
    weight: ["400"],
})

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { getUsername } from "@/server/actions";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const {getUser} = await getKindeServerSession() 
  const user = await getUser()
  if(!user || !user.id) redirect("/")

  const customUsername = await getUsername(user.id)

  const username = user?.given_name && !customUsername ? user?.given_name : (customUsername ? customUsername : 'user')
  const profilepic = user?.picture ? user?.picture : "https://avatars.dicebear.com/api/initials/user.svg"

  return (
      <div className="bg-gray-100 grid grid-cols-10 space-x-0 space-y-0 grid-rows-[auto,1fr] min-h-screen">
        <div className="row-start-1 col-span-2 p-4 border-r border-b border-zinc-300">
            <Link href="/" className={anton.className}>
                <CheckSquare className="w-6 h-6 mr-2 inline -mt-2" />
                <span className="relative text-2xl leading-none
                after:w-full after:h-1 after:bg-black after:absolute after:left-0 after:bottom-[calc(50%-0.2rem)]
                after:opacity-0 after:hover:opacity-100 after:-translate-x-1/2 after:hover:translate-x-0 after:transition-all after:duration-500">
                    ToDone.
                </span>
            </Link>
        </div>
        <div className="col-span-8 border-b border-zinc-300
        flex items-center justify-left px-8">
          <SearchBox username={username} pictureUrl={profilepic}/> 
        </div>
        <div className="col-span-2 border-r border-zinc-300">
          <SideBar />
        </div>
        <div className="col-span-8 bg-white/70">
          {children}
        </div>
      </div>
  )
}

export default Layout