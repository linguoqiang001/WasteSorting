//index.js
//获取应用实例
const app = getApp()
let http = require('../../utils/network.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    imgUrls: ['http://www.zilii.top/assets/blogImg/1.png',
    'http://www.zilii.top/assets/blogImg/2.png',
    'http://www.zilii.top/assets/blogImg/4.png',
    ],
    list: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let self = this
    wx.getLocation({
      success (res) {
        self.getList(res.longitude, res.latitude)
      }
    })
  },
  getList (jindu, weidu) {
    let self = this
    http.GET({
      url: 'getReciveOrderList',
      params: {
        jindu,
        weidu,
        distance: 1000
      },
      success (res) {
        let data = res.data
        data.forEach(item => {
          if (item.distance > 1000) {
            item.distance = (item.distance / 1000).Math.toFixed(1) + 'km'
          } else {
            item.distance = item.distance.toFixed(0) + 'm'
          }
        })
        self.setData({
          list: data
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
  },
  onGotUserInfo (e) {
    console.log(e)
  },
  qiangdan (e) {
    let item = e.currentTarget.dataset.item
    wx.showModal({
      title: '提示',
      content: '确认接受该订单？',
      success (res) {
        if (res.confirm) {
          http.GET({
            url: 'grabOrder',
            params: {
              orderId: item.id,
              openId: app.globalData.openId
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})
