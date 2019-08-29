const app = getApp()
let http = require('../../utils/network.js')

Page({
  data: {
    list: [],
    current: 'tab1',
  },
  onLoad () {

  },
  onShow () {
    let self = this



  },
  handleChange ({detail}) {
    this.setData({
      current: detail.key
    })
    if (detail == 'tab1') {
      this.getOrderList()
    } else {
      this.grabedOrder()
    }
  },
  getOrderList () {
    let self = this
    http.GET({
      url: 'getOrderList',
      params: {
        openId: app.globalData.openId
      },
      success (res) {
        self.setData({
          list: res.data
        })
      }
    })
  },
  grabedOrder () {
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
  },
  gotoDetail (e) {
    console.log(e)
    let {item} = e.currentTarget.dataset
    wx.navigateTo({
      url: "/pages/detail/index?id=" + item.id
    })
  }
})