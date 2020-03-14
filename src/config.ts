import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') dotenv.config()

export const PORT = process.env.PORT || 5000
export const MONGO_URI = process.env.MONGO_URI
