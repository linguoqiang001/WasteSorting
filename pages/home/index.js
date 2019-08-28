//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    imgUrls: ['http://www.zilii.top/assets/blogImg/1.png',
    'http://www.zilii.top/assets/blogImg/2.png',
    'http://www.zilii.top/assets/blogImg/4.png',
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

  },
  sendOrder () {
    wx.navigateTo({
      url: '/pages/orderForm/index'
    })
  },
  buyCombo: function () {
    wx.navigateTo({
      url: '/pages/package/index'
    })
  }
})
