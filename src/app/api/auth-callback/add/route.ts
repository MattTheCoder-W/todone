import { db } from "@/app/db"

export async function POST(req: Request, res: Response) {
    const data = await req.json()

    if(!data.id || !data.username) {
        return Response.json(JSON.stringify({
            success: false,
            reason: "Not implemented"
        }))
    }

    const user = await db.user.findFirst({
        where: {
            id: data.id
        }
    })
    if(user) {
        return Response.json(JSON.stringify({
            success: false,
            reason: "User already exists",
        }))
    }

    await db.user.create({
        data: {
            id: data.id,
            username: data.username,
        },
    })

    return Response.json(JSON.stringify({
        success: true,
    }))
}