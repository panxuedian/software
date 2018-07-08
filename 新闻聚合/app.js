//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息

  },
  globalData: {
    userInfo: null,
    newsClass: ['头条', '社会', '国内', '国际', '娱乐', '体育', '军事', '科技', '财经', '时尚'],
    url: null,
    currentPage: "top",
    count: [{ name: "头条", count: 0 }, { name: "社会", count: 0 }, { name: "国内", count: 0 }, { name: "国际", count: 0 }, { name: "娱乐", count: 0 }, { name: "体育", count: 0 }, { name: "军事", count: 0 }, { name: "科技", count: 0 }, { name: "财经", count: 0 }, { name: "时尚", count: 0 }],
    history:[],
    
  }
})