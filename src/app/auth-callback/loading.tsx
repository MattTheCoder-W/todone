import { Loader2 } from "lucide-react"

const Page = () => {
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