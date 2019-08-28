const app = getApp()

Page({
  data: {
    userInfo: {
      avatarUrl: 'http://www.zilii.top/assets/blogImg/default_avatar.jpg'
    }
  },
  onLoad () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  },
  getUserInfo (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  }
})