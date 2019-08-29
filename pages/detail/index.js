const app = getApp()
let http = require('../../utils/network.js')

Page({
    data: {
        item: {},
        userInfo: {}
    },
    onLoad (op) {
        let self = this
        http.GET({
            url: 'getOrder',
            params: {
                id: op.id
            },
            success (res) {
                self.setData({
                    item: res.data
                })
            }
        })
        this.setData({
            userInfo:app.globalData.userInfo
        })
    }
})