'use client'

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { CheckSquare } from "lucide-react";
import { Anton } from "next/font/google"
const anton = Anton({
    subsets: ["latin"],
    weight: ["400"],
})

export default function Home() {

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-1/4 h-1/2 rounded-lg bg-white shadow-md px-8 py-6">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Welcome to<br/>
          <span className={cn(anton.className, '')}>
            <CheckSquare className="w-6 h-6 mr-2 inline" />
            <span className="relative text-2xl leading-none
            after:w-full after:h-1 after:bg-black after:absolute after:left-0 after:bottom-[calc(50%-0.2rem)]
            after:opacity-0 after:hover:opacity-100 after:-translate-x-1/2 after:hover:translate-x-0 after:transition-all after:duration-500">
                ToDone.
            </span>
          </span>
        </h1>
        <div className="flex justify-center flex-col items-center">
          <div className="flex flex-col items-center justify-normal space-y-6 w-1/3">
            <LoginLink className="w-full flex items-center justify-center">
              <Button className="w-3/4">Log In</Button>
            </LoginLink>
            <RegisterLink className="w-full flex items-center justify-center">
              <Button variant={'outline'}
              className="w-3/4">Sign Up</Button>
            </RegisterLink>
          </div>
        </div>
      </div>
    </div>
  );
}
