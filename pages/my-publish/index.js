const app = getApp()
let http = require('../../utils/network.js')

Page({
  data: {
    list: [],
    showModal: false,
    item: {}
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
      showModal: true,
      item: item
    })
  },
  modalConfirm () {
    let self = this
    http.GET({
      url: 'completeOrder',
      params: {
        openId: app.globalData.openId,
        id: self.data.item.id
      },
      success (res) {
        self.handleData(self.data.item.id)
      }
    })
    this.handleClose()
  },
  handleData (id) {
    let arr = this.data.list
    arr.forEach(item => {
      if (item.id == id) {
        item.server_status = '已完成'
      }
    })
    this.setData({
      list: arr
    })
  },
  handleClose () {
    this.setData({
      showModal: false
    })
  }
})