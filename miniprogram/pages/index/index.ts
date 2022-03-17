// index.ts

import { sayHello } from "../../api/hello"

// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
   message: 'Hello World'
  },
  // 事件处理函数
  hi() {
    sayHello().then((data)=> {
      const message = data + ''
      this.setData({
        message
      })
    })
  }
  
})
