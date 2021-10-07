const axios = require('axios')

const getData = async (url, token, params) => {
  let resp = 0
  await axios.get(url, {
    headers: {
      Authorization: `${token}`
    },
    params
  }).then(response => {
    resp = response
  }).catch(function (error) {
    console.log(error)
    resp = 0
  })
  return resp
}

const postData = async (uri, projectide, parentide, testplanname, token) => {
  let res = 0
  const fields = {
    project: {
      key: projectide
    },
    parent: {
      key: parentide
    },
    summary: testplanname,
    description: 'Deployment - ' + testplanname,
    issuetype: {
      name: 'Test Plan'
    }
  }

  await axios({
    method: 'post',
    url: uri,
    headers: {
      Authorization: `${token}`
    },
    data: {
      fields
    }
  }).then(resp => {
    res = resp.data
  }).catch(function (err) {
    console.log(err)
  })
  return res
}

module.exports = {
  getData,
  postData
}
