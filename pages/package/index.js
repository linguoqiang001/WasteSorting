const app = getApp()
let http = require('../../utils/network.js')
const { $Toast } = require('../../dist/base/index');

Page({
  data: {
    items: [{title: '10积分', oldPrice: 10, newPrice: 8, class: 'selected'},
            {title: '30积分', oldPrice: 30, newPrice: 24, class: ''},
            {title: '90积分', oldPrice: 90, newPrice: 66, class: ''}],
    money: 0,
    jifen: 0,
    showModal: false
  },  
  onLoad: function() {
    this.setData({
      money: this.data.items[0].newPrice,
      jifen: this.data.items[0].oldPrice
    })
  },
  selected (e) {
    let key = e.currentTarget.dataset.index
    let temp = ''
    this.data.items.forEach((item,index) => {
      let temp = 'items[' +  index + '].class'
      this.setData({
        [temp]: ''
      })
    })
    temp = 'items[' +  key + '].class'
    this.setData({
      [temp]: 'selected',
      money: this.data.items[key].newPrice,
      jifen: this.data.items[key].oldPrice
    })
  },
  buy () {
    this.setData({
      showModal: true
    })
  },
  modalConfirm () {
    let self = this
    http.GET({
      url: 'addMoney',
      params: {
        openId: app.globalData.openId,
        money: self.data.jifen
      },
      success() {
        $Toast({
          content: '购买成功',
          type: 'success'
        });
      }
    })
    this.setData({
      showModal: false
    })
  },
  handleClose () {
    this.setData({
      showModal: false
    })
  }
})