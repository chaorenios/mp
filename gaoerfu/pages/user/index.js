// pages/user/index.js

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

// 刷新积分
  reloadCreditNum: function() {
    wx.showLoading({
      title: '获取最新积分',
    })
    var stoMember = wx.getStorageSync("member");
    var Member = Bmob.Object.extend("Member");
    var member = new Bmob.Query(Member);
    member.get(stoMember.objId, {
      success: memberObj => {
        // 查询成功
        wx.hideLoading();
        if (memberObj != undefined) {
          var newCreditNum = memberObj.get("creditNum");
          stoMember.creditNum = newCreditNum;
          wx.setStorageSync("member", stoMember)
          this.setData({
            memberCreditNum: newCreditNum,
          })
        } else {
          this.hud("手机号或密码错误")
        }
      },
      error: error => {
        this.hud("网络异常,登录失败")
      }
    });
  },

  // 会员登录
  memberLogin: function() {
    wx.reLaunch({
      url: 'memberLogin',
    })
  },

  // 登出
  logoutAction: function() {
    wx.removeStorageSync("member")
    this.setData({
      hasUserInfo: false
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    memberName: "",
    memberCreditNum: 0,
    hasUserInfo: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var member = wx.getStorageSync("member");
    // console.log(member == "")
    if (member != undefined && member != "") {
      this.setData({
        memberName: member.name,
        memberCreditNum: member.creditNum,
        hasUserInfo: true
      })
    } else {
      this.setData({
        memberName: "",
        memberCreditNum: 0,
        hasUserInfo: false
      })
    }
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