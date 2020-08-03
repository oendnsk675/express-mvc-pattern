const { Module } = require('./Module')
class Connection extends Module {
  constructor() {
    super()
    this.db = this.mongoose()
  }
  async MongooseConnection() {
    const { db } = this
    const connection = db.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true
    })

    if (!connection) return console.log('Database Connection Failed')
    return console.log('Database Connection Successfuly')
  }
}

module.exports = { Connection }
