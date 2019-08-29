const app = getApp()
let http = require('../../utils/network.js')

Page({
  data: {
    list: []
  },
  onLoad () {
    let self = this
    http.GET({
      url: 'grabedOrder',
      params: {
        openId: app.globalData.openId
      },
      success (res) {
        self.setData({
          list: res.data
        })
      }
    })
  }
})