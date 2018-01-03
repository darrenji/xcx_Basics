var app = getApp();
var common = require('../../common/common.js');

Page({
  data:{

  },
  innerTap: function(event){
    console.log(event);
    console.log('触发了innerTap事件');
  },
  outerTap: function(event){
    console.log(event);
    console.log('触发了outerTap事件');
  }
})