var app = getApp();
var common = require('../../common/common.js');

Page({
  data:{

  },
  innerTap: function(){
    console.log('触发了innerTap事件');
  },
  middleTap: function(){
    console.log('触发了outerTap事件');
  },
  outerTap: function(){
    console.log('触发了outerTap事件');
  }
})