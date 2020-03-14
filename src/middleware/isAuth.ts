import jwt from 'jsonwebtoken'
import { Context, Next } from 'koa'

const isAuth = async (ctx: Context, next: Next) => {
  const authHeader: string = ctx.request.headers.authorization

  if (!authHeader) {
    ctx.isAuth = false
    return next()
  }

  const token: string = authHeader.split(' ')[1]

  if (!token) {
    ctx.isAuth = false
    return next()
  }

  try {
    let decodedToken: any = await jwt.verify(token, process.env.JWT_SECRET)

    if (!decodedToken) {
      ctx.isAuth = false
      return next()
    }

    ctx.isAuth = true
    ctx.userId = decodedToken.userId
    return next()

  } catch (error) {
    ctx.isAuth = false
    return next()
  }
}

export default isAuth
