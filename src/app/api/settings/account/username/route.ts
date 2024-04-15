import { db } from "@/app/db"

export async function POST(req: Request, res: Response) {
    const data = await req.json()
    if(!data.id || !data.username) {
        return Response.json(JSON.stringify({
            success: false,
            reason: "Details not provided"
        }))
    }

    await db.user.update({
        where: {
            id: data.id
        },
        data: {
            username: data.username
        }
    })

    return Response.json(JSON.stringify({
        success: true
    }))
}