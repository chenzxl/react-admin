const devUrl = 'https://dev.mammasay.com/'
const uatUrl = 'https://uat.mammasay.com'
const proUrl = 'http://z.mammasay.com/'
const platform: any = {
  systemCode: 'BASE'
}
const env = process.env.REACT_APP_SECRET_ENV
switch (env) {
  case 'dev':
    platform.host = devUrl
    platform.fileHost = 'http://172.24.0.22:9003' //大文件上传地址
    break
  case 'uat':
    platform.host = uatUrl
    platform.fileHost = 'http://172.24.0.22:9003' //大文件上传地址
    break
  case 'pro':
    platform.host = proUrl
    platform.fileHost = 'http://172.24.0.22:9003' //大文件上传地址
    break
  default:
    break
}
export default platform
