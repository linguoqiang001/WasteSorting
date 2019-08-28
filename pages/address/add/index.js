Page({
    data: {
        
    },
    onLoad: function(op) {
        this.setData({
            name: op.name,
            phone: op.phone,
            address: op.ad,
            floor: op.fl
        })
    },
    save: function() {
        wx.redirectTo({
            url:'../index'
        })
    }
})