const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Cliente {
        id: Int
        nombre: String
        telefono: String
    }
    type Query {
        clientes: [Cliente]
        cliente(id: Int): Cliente
    }
`)

const clientes = [
  {
    id: 1,
    nombre: 'Pepe',
    telefono: '666 666 666'
  },
  {
    id: 2,
    nombre: 'Pepex',
    telefono: '777 777 777'
  }
]

const root = {
  clientes: () => { return clientes },
  cliente: (data) => {
    for (let i = 0; i < clientes.length; i++) {
      if (clientes[i].id === data.id) { return clientes[i] }
    }
    return null
  }
}

module.exports = {
  schema,
  root
}
