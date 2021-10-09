const config = require('config')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const getmethods = require('./scr/schema/schema_uno')
const getinformacion = require('./scr/schema/schema_informacion')

const app = express()
app.use(express.json())

app.use('/graphql', graphqlHTTP({
  schema: getmethods.schema,
  rootValue: getmethods.root,
  graphiql: true
}))

app.use('/informacion', graphqlHTTP({
  schema: getinformacion.schema,
  rootValue: getinformacion.root,
  graphiql: true
}))

const PORT = config.get('port')
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
