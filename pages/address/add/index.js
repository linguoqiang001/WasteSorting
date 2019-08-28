let app =  getApp()
let http = require('../../../utils/network.js')

Page({
    data: {
        name: '',
        phone: '',
        address: ''
    },
    onLoad: function(op) {
        this.setData({
            name: op.name,
            phone: op.phone,
            address: op.ad,
        })
    },
    bindsubmit (e) {
        let data = e.detail.value
        http.GET({
            url: 'editUser',
            params: {
                user_name: data.name,
                tel: data.phone,
                address: data.address,
                openId: app.globalData.openId
            },
            success(e) {
                wx.navigateBack({
                    delta: 1
                  })
            }
          })
    },
})