export const isObject = arr => {
  return toString.call(arr) === '[object Object]'
}

export const isArray = arr => {
  return toString.call(arr) === '[object Array]'
}

export const isEmptyObj = data => {
  return JSON.stringify(data) === '{}'
}

export const isEmpty = data => {
  if (data === '' || data === undefined || data === null) {
    return true
  }
  if (isObject(data) && isEmptyObj(data)) {
    return true
  }
  if (isArray(data) && data.length === 0) {
    return true
  }
  return false
}

export const delParams = (obj) => {
  for (let i in obj) {
    if (isEmpty(obj[i])) {
      delete obj[i]
    } else if (isObject(obj[i])) {
      delParams(obj[i])
    }
  }
}

export const deepClone = (data) => {
  const objClone = Array.isArray(data) ? [] : {};

  if (objClone && typeof data == 'object') {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] && typeof data[key] == 'object') {
          objClone[key] = deepClone(data[key])
        } else {
          objClone[key] = data[key]
        }
      }
    }
  }
  return objClone
}

export const getSuffix = filename => {
  let index = filename.lastIndexOf('.')
  return filename.substring(index + 1)
}

export const fileDownload = url => {
  const aTag = document.createElement('a');
  aTag.setAttribute('href', url)
  document.body.appendChild(aTag)
  aTag.style.display = 'none'
  aTag.click()
  setTimeout(() => {
    document.body.removeChild(aTag)
  }, 500)
}

export const formatDate = (date, fmt) => {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length))
    }
  }
  return fmt
}

export const debounce = (method, delay) => {
  let timer = null
  return function () {
    let self = this
    let arg = arguments
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      method.apply(self, arg)
    }, delay)
  }
}
