// pages/orderForm/index.js
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
      isTip: false
    },
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let d = new Date()
    let month = d.getMonth() > 9 ? d.getMonth() : '0' + d.getMonth()
    let day = d.getDay() > 9 ? d.getDay() : '0' + d.getDay()
    let hours = d.getHours() > 9 ? d.getHours() : '0' + d.getHours()
    let minutes = d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes()
    let date =  d.getFullYear() + '-' + month + '-' + day
    let time = hours + ':' + minutes
    console.log(date)
    this.setData({
      ["items.date"]: date,
      ["items.time"]: time
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  elevatorChange (e) {
    this.setData({
      ["items.isElevator"]: e.detail.value
    })
  },

  tipChange (e) {
    this.setData({
      ["items.isTip"]: e.detail.value
    })   
  },

  payChange (e) {
    
  },

  wasteTypeChange () {

  },

  elevatorChange () {

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

  test (e) {
    console.log(e.currentTarget.dataset)
  }
})