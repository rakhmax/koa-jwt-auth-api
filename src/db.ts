import { connect } from 'mongoose'
import { MONGO_URI, PORT } from './config'
import app from './app'

const db = async () => {
  try {
    await connect(MONGO_URI, { useNewUrlParser: true })

    console.clear()
    app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`))
  } catch (error) {
    console.error('Unable to connect to database\n')
    console.error(error)
    process.exit(1)
  }
}

export default db
