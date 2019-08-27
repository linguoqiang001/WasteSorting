//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    imgUrls: ['https://pic6.ajkimg.com/news/794284a28ebe0214af7c8066d489fecd?imageMogr2/format/jpg/thumbnail/492x210',
    'https://pic6.ajkimg.com/news/3619fdbc264e63799fb4d0aa12c23858?imageMogr2/format/jpg/thumbnail/492x210',
    'https://pic6.ajkimg.com/news/794284a28ebe0214af7c8066d489fecd?imageMogr2/format/jpg/thumbnail/492x210'
  ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

  }
})
