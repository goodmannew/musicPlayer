import originjsonp from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param (data)
  return new Promise((resolve, reject) => {
    originjsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = ''
  for (var attr in data) {
    let value = data[attr] !== undefined ? data[attr] : ''
    url += '&' + attr + '=' + encodeURLComponent(value)
  }
  return url ? url.substring(1) : ''
}