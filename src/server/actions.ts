'use server'
import { db } from "@/app/db"

export const checkUserId = async (userId: string) => {
    console.log("Checking userId:", userId)
    const user = await db.user.findFirst({
        where: {
            id: userId
        }
    })

    if(!user) {
        return false
    }

    console.log("found user:", user)
    return true
}

export const getTasksFromUser = async (userId: string) => {
    console.log("Attemting to get user tasks, userId:", userId) 
    if(await checkUserId(userId)) {
        console.log("user is in database")
    } else {
        console.log("error, user not in database!")
    }
    return null
}

export const getUsername = async (userId: string) => {
    const username = await db.user.findFirst({
        where: {
            id: userId
        },
        select: {
            username: true
        }
    })

    return username ? username.username : null
}