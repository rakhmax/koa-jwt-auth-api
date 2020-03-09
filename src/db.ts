import { connect } from 'mongoose'
import { MONGO_URI } from './config'

const db = connect(MONGO_URI, { useNewUrlParser: true })

export default db
