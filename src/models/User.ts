import { Schema, model } from 'mongoose';

const UserSchema: Schema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: { 
    type: String, 
    unique: true,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

UserSchema.set('toJSON', { virtuals: true });

export const User = model('User', UserSchema);
