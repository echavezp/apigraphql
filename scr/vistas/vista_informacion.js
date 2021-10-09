const config = require('config')
const getmethods = require('../funciones/rest')
// const reshomeNetwork = require('../response/customermanagementmic')
// const rescustomermanagementmic = require('../response/homeNetwork')

const services1 = async (parametro) => {
  const service = config.get('Servicios.homeNetwork')
  const param = {}
  let url = service.url.toString()
  url = url.replace(service.parametros.dpi, parametro)
  let resp = await getmethods.getData(url, service.token, param)
  resp = {
    nombre: service.nombre,
    cuerpo: resp
  }
  return JSON.stringify(resp)
}

const services2 = async (parametro) => {
  const service = config.get('Servicios.customermanagementmic')
  const param = {}
  let url = service.url.toString()
  url = url.replace(service.parametros.subscriberId, parametro)
  let resp = await getmethods.getData(url, service.token, param)
  resp = {
    nombre: service.nombre,
    cuerpo: resp
  }
  return JSON.stringify(resp)
}

const createview = async (data) => {
  let resp = '['
  const service1 = await services1(data.dpi)
  const service2 = await services2(data.telefono)
  resp += service1.replaceAll('-', '_') + ','
  // resp += service1.replaceAll('-', '_')
  resp += service2.replaceAll('-', '_')
  resp += ']'
  return JSON.parse(resp)
}

module.exports = {
  createview,
  services1,
  services2
}
