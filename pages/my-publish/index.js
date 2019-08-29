const app = getApp()
let http = require('../../utils/network.js')

Page({
  data: {
    list: [],
    showModal: false
  },
  onLoad () {
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
  confirm (e) {
    let item = e.currentTarget.dataset.item
    this.setData({
      showModal: true
    })
  },
  modalConfirm () {
    this.setData({
      showModal: false
    })
  }
})