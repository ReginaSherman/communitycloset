import { APIRoute } from 'next-s3-upload'
import { getSession } from 'next-auth/react'

export default APIRoute.configure({
  async key(req, filename) {
    const session = await getSession({req})

    return `users/${session?.user?.id || 'Unknown'}/${filename}`
  },
})