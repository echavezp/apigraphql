const config = require('config')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const getmethods = require('./scr/schema/schema_uno')

const app = express()
app.use(express.json())
// const dbConfig = config.get('Customer.dbConfig')
// console.log(dbConfig)

app.use('/graphql', graphqlHTTP({
  schema: getmethods.schema,
  rootValue: getmethods.root,
  graphiql: true
}))

const PORT = config.get('port')
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
