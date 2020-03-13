import { User } from '../models'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const login = async (ctx: any) => {
  try {
    const user = await User.findOne({ email: ctx.request.body.email })

    if (!user) {
      ctx.throw(400, 'Пользователя не существует или неверный пароль')
    }

    const isPasswordCorrect = await bcrypt.compare(ctx.request.body.password, user.password)

    if (!isPasswordCorrect) {
      ctx.throw(400, 'Пользователя не существует или неверный пароль')
    }

    const payload = {
      userId: user.id,
      name: user.firstname
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' })
    
    ctx.body = { userId: user.id, token: token, tokenExpiration: 7 * 24 * 60 * 60 }
  } catch (error) {
    throw error
  }
}

export default login
