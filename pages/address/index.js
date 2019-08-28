Page({
  data: {
    objectArray: [
      { id: 5, name: 'aaa', phone: '12345678901', address: '不知道在哪里呀呀呀呀呀呀呀呀呀呀', floor: '15F' },
      { id: 4, name: 'aaa', phone: '12345678901',address: '不知道在哪里呀呀呀呀呀呀呀呀呀呀', floor: '15F' },
      { id: 3, name: 'aaa', phone: '12345678901',address: '不知道在哪里呀呀呀呀呀呀呀呀呀呀', floor: '15F' },
      { id: 2, name: 'aaa', phone: '12345678901',address: '不知道在哪里呀呀呀呀呀呀呀呀呀呀', floor: '15F' },
      { id: 1, name: 'aaa', phone: '12345678901',address: '不知道在哪里呀呀呀呀呀呀呀呀呀呀', floor: '15F' },
      { id: 0, name: 'aaa', phone: '12345678901',address: '不知道在哪里呀呀呀呀呀呀呀呀呀呀', floor: '15F' },
    ],
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
  }

})