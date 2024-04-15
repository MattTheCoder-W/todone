import { checkUserId } from "@/server/actions"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { Loader2, LucideMessageCircleWarning } from "lucide-react"
import { redirect } from "next/navigation"

const Page = async () => {
    const {getUser} = await getKindeServerSession()
    const user = await getUser()
    if(!user || !user.id) {
        redirect("/")
    }

    const verification = await checkUserId(user.id)

    if(verification == false) {
        // Add user to the database
        const res = await fetch("http://localhost:3000/api/auth-callback/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: user.id,
                username: 'test'
            })
        })
        const data: ApiData = JSON.parse(await res.json())
        if(!data.success) {
            return (
                <div className="flex flex-col space-y-8 justify-center items-center w-full h-screen">
                    <h1 className="text-red-600 font-semibold text-2xl text-center">
                        Error occurred while preparing your account...
                    </h1>
                    <div>
                        <LucideMessageCircleWarning className="w-8 h-8 text-red-600" />
                    </div>
                </div>
            )
        }
        
        redirect("/todo")
    }

    redirect("/todo")

    return (
        <div className="text-zinc-600 h-screen w-full flex flex-col justify-center items-center space-y-8">
            <h1 className="font-semibold text-2xl">
                We are preparing your account
            </h1>
            <div>
                <Loader2 className="w-8 h-8 animate-spin" />
            </div>
        </div>
    )
}

export default Page