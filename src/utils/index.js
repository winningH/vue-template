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

// 深拷贝
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

// 文件后缀名
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

export const objectToFormData = (obj, form, namespace) => {
  const fd = form || new FormData();
  let formKey;
  if (obj instanceof Array) {
    for (const i in obj) {
      if (typeof obj[i] === 'object' && !(obj[i] instanceof File)) {
        objectToFormData(obj[i], fd, namespace + `[${i}]`)
      } else {
        // 若是数组则在关键字后面加上[]
        if (obj[i] instanceof File) {
          fd.append(namespace, obj[i])
        } else {
          fd.append(namespace + `[${i}]`, obj[i])
        }
      }

    }
  } else {
    for (const property in obj) {
      if (obj.hasOwnProperty(property) && obj[property]) {

        if (namespace) {
          // 若是对象，则这样
          formKey = namespace + '.' + property
        } else {
          formKey = property
        }

        // if the property is an object, but not a File,
        // use recursivity.
        if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
          // 此处将formKey递归下去很重要，因为数据结构会出现嵌套的情况
          objectToFormData(obj[property], fd, formKey)
        } else {

          // if it's a string or a File object
          fd.append(formKey, obj[property])
        }

      }
    }
  }
  return fd
}

// 日期时间处理函数
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

// 防抖函数，用于模糊查询
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

export const getCookie = (cookieName) => {
  let strCookie = document.cookie
  let arrCookie = strCookie.split(';')
  for (let i = 0; i < arrCookie.length; i++) {
    let arr = arrCookie[i].split('=')
    if (cookieName === arr[0]) {
      return arr[1]
    }
  }
  return ''
}
