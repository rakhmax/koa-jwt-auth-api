import { Schema, model, Document } from 'mongoose'

interface IUser extends Document {
  firstname: string
  lastname: string
  email: string
  phone: string
  password: string
}

const UserSchema: Schema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phone: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true })

UserSchema.set('toJSON', { virtuals: true })

export default model<IUser>('User', UserSchema)
