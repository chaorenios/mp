// pages/store/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // things: [{
    //   name: 'ul',
    //   attrs: {
    //   },
    //   children: [{
    //     name: 'li',
    //     attrs: {
    //     },
    //     children: [{
    //       type: 'text',
    //       text: '商品1'
    //     }]
    //   }, {
    //     name: 'li',
    //     attrs: {
    //     },
    //     children: [{
    //       type: 'text',
    //       text: '商品2'
    //     }]
    //   }, {
    //     name: 'li',
    //     attrs: {
    //     },
    //     children: [{
    //       type: 'text',
    //       text: '商品3'
    //     }]
    //   }]
    // }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var storeId = options.store
    var path = "../../images/" + storeId + ".png"
    var name = ""
    var des = ""
    if (storeId == "zhongxinyinhang") {
      name = ""
      des = ""
    } else if (storeId == "taikangrenshou") {
      name = ""
      des = ""
    } else if (storeId == "toto") {
      name = ""
      des = ""
    } else if (storeId == "youzhuozhuangshi") {
      name = ""
      des = ""
    } else if (storeId == "ronghuaweilai") {
      name = ""
      des = ""
    }
    this.setData({
      imagePath: path,
      storeName: name,
      storeDes: des
    })
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