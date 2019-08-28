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
      wx.login({
        success: res => {
          //发送 res.code 到后台换取 openId, sessionKey, unionId
          console.log(res)
          
          wx.request({
            url:`https://api.weixin.qq.com/sns/jscode2session?appid=wxd29b1aef999221b0&secret=922f71769e48bb9bc134761374cf0b29&js_code=${res.code}&grant_type=authorization_code`, 
            method:'get',
            success:function(res1){
              console.log(res1)
            }
         })
        }
      })
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
  onGotUserInfo (e) {
    console.log(e)
  }
})
