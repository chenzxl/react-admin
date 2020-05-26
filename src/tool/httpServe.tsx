import axios from 'axios'
import * as qs from 'qs'
// import { reactRouterApi } from "@/tool/reactRouterApi";

axios.defaults.timeout = 6000

axios.interceptors.response.use(
  function(response) {
    //响应成功处理
    return response
  },
  function(error) {
    //响应异常处理
    // 4xx（请求错误） 5xx（服务器错误)
    if (error && error.status) {
      switch (error.status) {
        case 400:
          error.message = '错误请求' //服务器不理解请求的语法
          break
        case 401:
          error.message = '未授权' //请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应.
          break
        case 403:
          error.message = '服务器拒绝请求'
          break
        case 404:
          error.message = '服务器找不到请求的网页'
          break
        case 405:
          error.message = '禁用请求中指定的方法'
          break
        case 406:
          error.message = '无法使用请求的内容特性响应请求的网页'
          break
        case 407:
          error.message = '需要代理授权' //此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理
          break
        case 408:
          error.message = '请求超时' //服务器等候请求时发生超时
          break
        case 409:
          error.message = '服务器在完成请求时发生冲突' //服务器必须在响应中包含有关冲突的信息
          break
        case 410:
          error.message = '请求的资源已永久删除' //如果请求的资源已永久删除，服务器就会返回此响应
          break
        case 411:
          error.message = '请求需要有效长度' //服务器不接受不含有效内容长度标头字段的请求
          break
        case 412:
          error.message = '服务器未满足请求设置的前提条件'
          break
        case 413:
          error.message = '请求实体过大' //服务器无法处理请求，因为请求实体过大，超出服务器的处理能力
          break
        case 414:
          error.message = '请求的 URI过长' //请求的 URI（通常为网址）过长，服务器无法处理。
          break
        case 415:
          error.message = '不支持的媒体类型' //请求的格式不受请求页面的支持。
          break
        case 416:
          error.message = '请求范围不符合要求' //如果页面无法提供请求的范围，则服务器会返回此状态代码。
          break
        case 417:
          error.message = '未满足期望值' //服务器未满足”期望”请求标头字段的要求。
          break
        case 500:
          error.message = '服务器内部错误' //服务器遇到错误，无法完成请求。
          break
        case 501:
          error.message = '网络未实现' //服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码。
          break
        case 502:
          error.message = '错误网关' //服务器作为网关或代理，从上游服务器收到无效响应。
          break
        case 503:
          error.message = '服务不可用' //服务器目前无法使用（由于超载或停机维护）。 通常，这只是暂时状态。
          break
        case 504:
          error.message = '网络超时' //服务器作为网关或代理，但是没有及时从上游服务器收到请求
          break
        case 505:
          error.message = 'http版本不支持该请求' //服务器不支持请求中所用的 HTTP 协议版本
          break
        default:
          error.message = '请求异常,请稍后重试'
      }
    }
    return Promise.reject(error)
  }
)

const httpServe = {
  post: (url: string = '', params: any = {}, v: string = '1') => {
    // const certificate = {
    //   'certificate': 'certificate'
    // }
    const headers: any = {
      certificate: ''
      // 'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8;'
    }
    headers['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8;'
    headers.certificate = localStorage.certificate ? localStorage.certificate : ''
    const opction: any = {
      method: 'POST',
      headers,
      url,
      data: qs.stringify(params)
    }
    return new Promise((resolve, reject) => {
      axios(opction)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    }).catch(error => {
      return Promise.reject(error)
    })
  },
  get: (url: string = '', params: any = {}, v: string = '1') => {
    params = qs.stringify(params)
    return new Promise((resolve, reject) => {
      axios
        .get(url, params)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    }).catch(error => {
      return Promise.reject(error)
    })
  }
}
export { httpServe }
