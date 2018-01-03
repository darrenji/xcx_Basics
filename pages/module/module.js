var order = ["a","b","c"];
var index = 0;
Page({
  data:{
    v: "a"
  },
  scrolltoupper: function(e){
    console.log(e);
    console.log('触发了toUpper');
  },
  scrolltolower: function(e){
    console.log('触发了toLower');
  },
  scroll: function(e){
    console.log(e);
  },
  tapChange: function(){
    index++;
    if(index > order.length-1){
      index = 0;
    }
    this.setData({
      v:order[index]
    });
  }
})