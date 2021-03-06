import { User } from '../models'
import bcrypt from 'bcrypt'
import { Context } from 'koa'

const signup = async (ctx: Context) => {
  try {
    const user = await User.findOne({ email: ctx.request.body.email })

    if (user) {
      ctx.throw(400, 'Пользователь уже существует')
    }

    let password = await bcrypt.hash(ctx.request.body.password, 10)

    await User.create({...ctx.request.body, password})
    ctx.body = 'Успешная регистрация'
  } catch (error) {
    throw error
  }
}

export default signup
