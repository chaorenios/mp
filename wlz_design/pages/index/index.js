//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  showDetail: function(event) {
    wx.navigateTo({
      url: '../detail/brand_detail?title=' + event.target.id,
    })
  },

  call: function() {
    let designerID = wx.getStorageSync("designerID") || ""
    // 验证是否存在设计师ID
    if (designerID == "") {
      wx.navigateTo({
        url: '../login/login',
      })
    } else {
      // 拨打电话
      wx.makePhoneCall({
        phoneNumber: '13911079493',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    } 
  },

  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
    // console.log(e)
    // app.globalData.userInfo = e.detail.userInfo
    // this.setData({
    //   userInfo: e.detail.userInfo,
    //   hasUserInfo: true
    // })
  }
})
