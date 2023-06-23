import axios from 'axios'
import type { ResultVO } from '@/datasource/Types'
import { useStore } from '@/stores'

axios.defaults.baseURL = '/api/'

// 添加请求拦截器
axios.interceptors.request.use(
  //在发送请求之前
  (req) => {
    //通过sessionStorage保存的数据保存在浏览器中
    const auth = sessionStorage.getItem('token')
    // 判断,用于避免header包含authorization属性但数据值为空
    if (auth && req.headers) {
      req.headers.token = auth
    }
    return req
  },
  (error) => {
    // 对请求错误做些什么
    const store = useStore()
    store.exceptions = error.message
    return Promise.reject()
  }
)
// 添加响应拦截器
axios.interceptors.response.use((resp) => {
  //获取响应体对象
  const data: ResultVO = resp.data
  //全局处理后返回异常信息。即，业务状态码不是200
  if (data.code != 200) {
    const store = useStore()
    store.exceptions = data.message ?? ''
    //Promise.reject()方法返回一个带有拒绝原因的Promise对象。
    return Promise.reject()
  }
  return resp
})
export default axios
