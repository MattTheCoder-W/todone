'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { getUsername } from "@/server/actions"
import { Button } from "@/components/ui/button"
import { ZodError, z } from "zod"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

const usernameSchema = z.object({
    username: z.string().min(5, {
        message: 'Username must have at least 5 characters'
    }).max(50, {
        message: 'Username must have at most 50 characters'
    })
})

const Page = () => {
    const {user} = useKindeBrowserClient()
    const userId = user?.id
    const [username, setUsername] = useState<string>("")
    const {toast} = useToast()

    useEffect(() => {
        const loadData = async() => {
            if(userId) {
                const username = await getUsername(userId)
                setUsername(username ? username : '')
            }
        }
        loadData()
    }, [userId])

    const saveData = async() => {
        console.log("saving data: ", username)

        try {
            const validated = usernameSchema.parse({username: username})
        } catch (err: ZodError | any) {
            const message = JSON.parse(err.message)
            console.log(message[0].message)
            toast({
                description: message[0].message,
                variant: "destructive",
                duration: 2000
            })
            return
        }

        const res = await fetch("http://localhost:3000/api/settings/account/username", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: userId,
                username: username,
            }),
        })
        const data: ApiData = JSON.parse(await res.json())
        if(data.success) {
            toast({
                description: "Successfully updated username",
                variant: "default",
                duration: 2000
            })
        }
    }

    return (
        <div>
            <Toaster />
            <h1 className="font-bold text-3xl px-12 py-4">
                Settings
            </h1>
            <div className="px-12 py-2">
                <h2 className="text-2xl font-semibold mb-4">
                    Account
                </h2>
                <div className="w-1/2 flex justify-left items-center space-x-12">
                    <Label htmlFor="username"
                    className="text-lg">Username</Label>
                    <Input
                    id="username"
                    type="text"
                    defaultValue={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="max-w-[50%]"
                    />
                </div>
                <div className="w-1/2 my-4 h-0.5 bg-zinc-200" />
                <div className="flex justify-center items-center w-1/2">
                    <Button
                    className=""
                    onClick={saveData}>
                        Save
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Page