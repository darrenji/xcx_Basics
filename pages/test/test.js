var app = getApp();
var common = require('../../common/common.js');

Page({
  data:{
    name: 'darren',
    pass: null,
    id: 1,
    condition: false,
    arr: [1, 2, 3, 4, 5],
    obj1: {
      a:1,
      b:2
    }
  },
  toHome: function(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  toNavi: function(){
    wx.navigateTo({
      url: '../navi/navi',
      success: function(){
        console.log('跳转到navi成功')
      }
    })
  },
  say: function(){
    common.sayHello(this.data.name);
  },
  switch: function(){
    this.setData({
      condition: !this.data.condition
    });
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