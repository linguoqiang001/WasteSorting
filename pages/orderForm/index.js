let http = require('../../utils/network.js')
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    items: {
      date: '',
      time: '',
      payments: {
        selectId: 0,
        options: ['平台结算', '当面支付'],
      },
      isSort: false,
      wasteType: {
        selectId: 0,
        options: ['有害垃圾', '无害垃圾']
      },
      isElevator: false,
      floors: {
        selectId: 0,
        options: [1,2,3,4,5,6]
      },
      isTip: false,
      message: ''
    },
    realPay: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let d = new Date()
    let month = d.getMonth() + 1 
    month = month > 9 ? month : '0' + month
    let day = d.getDate() > 9 ? d.getDate() : '0' + d.getDate()
    let hours = d.getHours() > 9 ? d.getHours() : '0' + d.getHours()
    let minutes = d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes()
    let date =  d.getFullYear() + '-' + month + '-' + day
    let time = hours + ':' + minutes
    this.setData({
      ["items.date"]: date,
      ["items.time"]: time
    })
  },

  elevatorChange (e) {
    let items = this.data.items
    this.setData({
      ["items.isElevator"]: e.detail.value
    })
    this.setData({
      realPay: items.isElevator ? 1 : 1 + 0.3 * items.floors.selectId
    })
  },

  tipChange (e) {
    this.setData({
      ["items.isTip"]: e.detail.value
    })   
  },

  payChange (e) {
    this.setData({
      ["items.payments.selectId"]: e.detail.value
    })
  },

  wasteTypeChange () {

  },

  floorChange (e) {
    let items = this.data.items
    this.setData({
      ["items.floors.selectId"]: e.detail.value
    })
    this.setData({
      realPay: items.isElevator ? 1 : 1 + 0.3 * items.floors.selectId
    })
  },

  dateChange (e) {
    this.setData({
      ["items.date"]: e.detail.value
    })
  },

  timeChange (e) {
    this.setData({
      ["items.time"]: e.detail.value
    })
  },
  compMessage (e) {
    this.setData({
      ["items.message"]: e.detail.value
    })
  },
  submitOrder () {
    let self = this
    wx.getLocation({
      success (res) {
        self.request(res.longitude, res.latitude)
      }
    })
  },
  request (jindu, weidu) {
    let items = this.data.items
    let pay_type = items.payments.selectId
    let floorNum = items.floors.selectId
    let server_date = items.date
    let server_time = items.time
    let fee = items.isTip
    let comment = items.message
    let real_pay = this.data.realPay
    let dianti = items.isElevator
    http.GET({
      url: 'createOrder',
      params: {
        openId: app.globalData.openId,
        pay_type,
        floorNum,
        server_date,
        server_time,
        fee,
        comment,
        real_pay,
        dianti,
        jindu,
        weidu
      },
      success (res) {
        console.log(res)
      }
    })
  }
})