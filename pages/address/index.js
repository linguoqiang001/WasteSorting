let http = require('../../utils/network.js')
let app =  getApp()

Page({
  data: {
    userInfo: {}
  },
  editAddress: function(e) {
    var name = e.currentTarget.dataset.name;
    var phone = e.currentTarget.dataset.phone;
    var address = e.currentTarget.dataset.address;
    var floor = e.currentTarget.dataset.floor;
    wx.navigateTo({
      url:'./add/index?name=' + name + '&phone=' + phone + '&ad=' + address + '&fl=' + floor
    })
  },
  addAddress: function() {
    wx.navigateTo({
      url:'./add/index'
    })
  },
  onLoad () {

  },
  onShow () {
    let self = this
    http.GET({
      url: 'getUser',
      params: {
          openId: app.globalData.openId
      },
      success(res) {
        console.log(res)
        self.setData({
          userInfo: res.data
        })
        console.log(self.data.userInfo)
      }
    })
  }

})