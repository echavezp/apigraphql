const axios = require('axios')

const getData = async (url, token, params) => {
  let resp = 0
  await axios.get(url, {
    headers: {
      Authorization: `${token}`
    },
    params
  }).then(response => {
    resp = response.data
  }).catch(function (error) {
    console.log(error)
    resp = 0
  })
  return resp
}

module.exports = {
  getData
}
