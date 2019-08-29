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
    list: [],
    showModal: false,
    jindu: 0,
    weidu: 0,
    item: {}
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
        self.setData({
          jindu: res.longitude,
          weidu: res.latitude
        })
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
        // distance: 1000
      },
      success (res) {
        let data = res.data
        // data.forEach(item => {
        //   if (item.distance > 1000) {
        //     item.distance = (item.distance / 1000).Math.toFixed(1) + 'km'
        //   } else {
        //     item.distance = item.distance.toFixed(0) + 'm'
        //   }
        // })
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
    this.setData({
      showModal: true,
      item
    })
  },
  confirm () {
    let item = this.data.item
    http.GET({
      url: 'grabOrder',
      params: {
        orderId: item.id,
        openId: app.globalData.openId
      },
      success (res) {
        console.log(res)
      }
    })
    this.handleClose()
  },
  handleClose () {
    this.setData({
      showModal: false
    })
  },
  shuaxin () {
    this.getList(this.data.jindu, this.data.weidu)
  }
})
