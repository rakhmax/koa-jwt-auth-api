import { User } from '../models/User'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const login = async (ctx: any) => {
  try {
    const user: any = await User.findOne({ email: ctx.request.body.email })

    if (!user) {
      ctx.throw(400, 'Пользователя не существует или неверный пароль')
    }

    const isPasswordCorrect = await bcrypt.compare(ctx.request.body.password, user.password);

    if (!isPasswordCorrect) {
      ctx.throw(400, 'Пользователя не существует или неверный пароль')
    }

    const payload = {
      id: user.id,
      name: user.firstname
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })
    ctx.body = { userId: user.id, token: token, tokenExpiration: 1 }
  } catch (error) {
    throw error;
  }
}

export default login
