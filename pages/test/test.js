var app = getApp();

Page({
  data:{
    name: 'darren',
    pass: null
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