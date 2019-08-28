Page({
  data: {
    items: [{title: '7天畅扔', oldPrice: 7, newPrice: 4.9, class: 'selected'},
            {title: '30天畅扔', oldPrice: 30, newPrice: 25, class: ''},
            {title: '90天畅扔', oldPrice: 90, newPrice: 60, class: ''}],
    money: 0
  },  
  onLoad: function() {
    this.setData({
      money: this.data.items[0].newPrice
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
      money: this.data.items[key].newPrice
    })
  }
})