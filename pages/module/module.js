Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['美国', '中国', '巴西'],
    index: 0,
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    cascadeIndex: [0, 0, 0],
    time: '12:01',
    date: '2017-03-10'
  },
  singlePick: function(e){
    console.log('当前选中的值是', e.detail.value);
    this.setData({
      index: e.detail.value
    });
  },
  cascadeSelect: function(e){
    //[1, 0, 0] 这里的数组元素，代表着每个级联的当前选中值
    console.log('当前选中的值是', e.detail.value);
    this.setData({
      cascadeIndex: e.detail.value
    });
  },
  columnChange: function(e){
    //e.detail.column代表那个级联
    console.log('修改的列为', e.detail.column, ',值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      cascadeIndex: this.data.cascadeIndex
    };
    data.cascadeIndex[e.detail.column] = e.detail.value;
    //看看是哪一个级联
    switch(e.detail.column){
      //如果是第一个级联
      case 0:
        //看看是第一个级联的第几项
        switch(data.cascadeIndex[0]){
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.cascadeIndex[1] = 0;
        data.cascadeIndex[2] = 0;
        break;
      case 1: //如果是第二个级联
        switch(data.cascadeIndex[0]){ //第一个级联选择什么
          case 0:
            switch(data.cascadeIndex[1]){ //看第二个级联选择什么
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2: 
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch(data.cascadeIndex[1]){
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];;
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.cascadeIndex[2] = 0;
        break;
    }
    this.setData({
      multiArray: data.multiArray,
      cascadeIndex: data.cascadeIndex
    });
  },
  timeChange: function(e){
    this.setData({
      time: e.detail.value
    });
  },
  dateChange: function(e){
    this.setData({
      date: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})