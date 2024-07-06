import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

async function checkUser() {
    const user = await currentUser()

    if (!user) {
        return null
    }

    // checking current user in db
    const userInDB = await db.user.findUnique({
        where: {
            clerkUserId: user.id
        }
    })

    if (userInDB) {
        return userInDB
    }

    const newUser = await db.user.create({
        data: {
            clerkUserId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: `${user.emailAddresses[0].emailAddress}`,
            imageUrl: `${user.imageUrl}`
        }
    })

    return newUser

}

export default checkUser