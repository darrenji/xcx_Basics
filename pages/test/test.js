var app = getApp();

Page({
  data:{
    name: 'darren',
    pass: null
  },
  toHome: function(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  toNavi: function(){
    wx.navigateTo({
      url: '../navi/navi',
    })
  },
  onLoad: function(){
    this.setData({
      pass: app.globalData.pass
    });
  },
  onShow: function(){
    console.log("test页的onShow");
  }
})