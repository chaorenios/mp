// pages/login/login.js
var Bmob = require('../../utils/bmob.js');

Page({

  /**
     * 页面的初始数据
     */
  data: {
    uname: '',
    upass: ''
  },

  // 用户名输入
  usernameInput: function(e) {
    this.setData ({
      uname: e.detail.value
    })
  },

  // 密码输入
  passwordInput: function(e) {
    this.setData({
      upass: e.detail.value
    })
  },

  // bomb登录
  bmobLogin: function(){
    if (this.data.uname == '' || this.data.upass == '') {
      wx.showToast({
        title: '请输入用户名或密码',
        icon: 'none'
      })
    } else {
      var Users = Bmob.Object.extend("Users");
      var query = new Bmob.Query(Users);
      query.equalTo("username", this.data.uname);
      query.equalTo("password", this.data.upass);
      query.first({
        success: function (resultObj) {
          // 查询成功
          if (resultObj == undefined) {
            wx.showToast({
              title: '用户名或密码错误',
              icon: 'none'
            })
          } else {
            wx.setStorage({
              key: 'designerID',
              data: resultObj.id,
            })
            wx.navigateBack({
              delta: 1
            })
          }
        },
        error: function (error) {
          wx.showToast({
            title: '系统错误',
          })
        }
      });
    }
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