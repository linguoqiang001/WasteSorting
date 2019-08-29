const app = getApp()
let http = require('../../utils/network.js')

Page({
  data: {
    userInfo: {
      avatarUrl: 'http://www.zilii.top/assets/blogImg/default_avatar.jpg'
    },
    user: {}
  },
  onLoad () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
    this.getUser()
  },
  getUserInfo (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  getUser () {
    let self = this
    http.GET({
      url: 'getUser',
      params: {
          openId: app.globalData.openId
      },
      success(res) {
        self.setData({
          user: res.data
        })
      }
    })
  }
})