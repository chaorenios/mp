// pages/user/memberLogin.js

var Bmob = require('../../utils/bmob.js');

Page({


  /**
   * 自定义方法 
   */

  // 显示操作状态
  hud: function (title) {
    wx.showToast({
      title: title,
      icon: "none",
      duration: 2000
    })
  },

  // 取消按钮
  cancelAction: function () {
    wx.reLaunch({
      url: 'index',
    })
  },

  // 登录按钮
  loginAction: function (e) {
    var nextStep = true
    // 验证为空
    if (this.data.username == "" && this.data.password == "") {
      nextStep = false
      this.hud("请输入手机号和密码")
    }

    // 验证手机号码格式
    if (nextStep) {
      var telReg = new RegExp("^[0-9]{11}$");
      if (!telReg.test(this.data.username)) {
        nextStep = false;
        this.hud("请输入正确的手机号码");
      }
    }

    // 检查手机号和密码
    if (nextStep) {
      var Member = Bmob.Object.extend("Member");
      var member = new Bmob.Query(Member);
      member.equalTo("mobile", this.data.username);
      member.equalTo("password", this.data.password);
      member.first({
        success: memberObj => {
          // 查询成功
          if (memberObj != undefined) {
            // var name = memberObj.get("name")
            // var mobile = memberObj.get("mobile")
            // var idString = memberObj.get("idString")
            // var creditNum = memberObj.get("creditNum")
            var result = { "name": memberObj.get("name"), "mobile": memberObj.get("mobile"), "idString": memberObj.get("idString"), "creditNum": memberObj.get("creditNum"), "objId": memberObj.id}
            wx.setStorageSync("member", result)
            wx.reLaunch({
              url: 'index',
            })
          } else {
            this.hud("手机号或密码错误")
          }
        },
        error: error => {
          this.hud("网络异常,登录失败")
        }
      });
    }
  },

  // 用户名输入
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  // 密码输入
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '会员登录',
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