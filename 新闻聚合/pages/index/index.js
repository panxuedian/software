const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsClass: app.globalData.newsClass,
    pinyinClass: ['top', 'shehui', 'guonei', 'guoji', 'yule', 'tiyu', 'junshi', 'keji', 'caijing', 'shishang'],
    currentPage: "top",
    newsData: null
  },

  requestNews: function (e) {
    var _this = this
    console.log(e);
    var index = e.currentTarget.dataset.index;
    var currentPage = this.data.pinyinClass[index]
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index',
      data: {
        type: '' + currentPage,
        key: 'b97433bc76ef632a5aab8afa65692db6'
      },
      success: function (res) {
        // console.log(res.data)
        _this.setData({
          newsData: res.data.result.data
        })
      }
    })
  },
  gotoWeb: function (e) {
    app.globalData.url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: '../web/web?url=' + e.currentTarget.dataset.url,
    })
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
    this.setData({
      currentPage: app.globalData.currentPage,
    });
    var _this = this
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index',
      data: {
        type: '' + _this.data.currentPage,
        key: 'f5e21c92705efd1e3d3521f8c836ea82'
      },
      success: function (res) {
        _this.setData({
          newsData: res.data.result.data
        })
      }
    })

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