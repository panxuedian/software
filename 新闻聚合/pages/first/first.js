// pages/first/first.js
const app = getApp();
var wxDraw = require("../../utils/wxdraw.js").wxDraw;
var Shape = require("../../utils/wxdraw.js").Shape;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    newsData: null

  },
  
  bindtouchmove: function (e) {
    // 检测手指点击 之后的移动事件
    // this.wxCanvas.touchmoveDetect(e);
  },
  bindtouchend: function (e) {
    //检测手指点击 移出事件
    // this.wxCanvas.touchendDetect();
    console.log(e);
  },
  bindtouchstart: function (e) {
    // 检测tap事件
    // this.wxCanvas.tapDetect(e);
    // console.log(e);
    if (e.touches[0].x < 122 & e.touches[0].x > 38 & e.touches[0].y < 222 & e.touches[0].y > 138) {

      console.log("头条");
      app.globalData.currentPage="top";
      wx.switchTab({
        url: '../index/index',
      })
      

    } else if (e.touches[0].x < 201 & e.touches[0].x > 159 & e.touches[0].y < 141 & e.touches[0].y > 99) {

      console.log("军事");
      app.globalData.currentPage = "junshi";
      wx.switchTab({
        url: '../index/index',
      })
      

    } else if (e.touches[0].x < 268 & e.touches[0].x > 212 & e.touches[0].y < 228 & e.touches[0].y > 172) {

      console.log("国际");
      app.globalData.currentPage = "guoji";
      wx.switchTab({
        url: '../index/index',
      })

    } else if (e.touches[0].x < 215 & e.touches[0].x > 145 & e.touches[0].y < 335& e.touches[0].y > 265) {

      console.log("体育");
      app.globalData.currentPage = "tiyu";
      wx.switchTab({
        url: '../index/index',
      })

    } else if (e.touches[0].x < 105 & e.touches[0].x > 55 & e.touches[0].y < 345 & e.touches[0].y > 295) {

      console.log("财经");
      app.globalData.currentPage = "caijing";
      wx.switchTab({
        url: '../index/index',
      })
    } else if (e.touches[0].x < 156 & e.touches[0].x > 104 & e.touches[0].y < 426 & e.touches[0].y > 374) {

      console.log("娱乐");
      app.globalData.currentPage = "yule";
      wx.switchTab({
        url: '../index/index',
      })

    } else if (e.touches[0].x < 281 & e.touches[0].x > 229 & e.touches[0].y < 396 & e.touches[0].y > 344) {

      console.log("时尚");
      app.globalData.currentPage = "shishang";
      wx.switchTab({
        url: '../index/index',
      })

    }else{
      wx.showToast({
        title: '请选择一项内容查看!',
        icon:'none'
      })
    }
  },
  bindlongpress: function (e) {
    // 检测longpress事件
    // this.wxCanvas.longpressDetect(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var context = wx.createCanvasContext('first');
    // this.test(context);
    this.setAcr(context);


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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },



  setAcr: function (context) {



    //头条
    context.beginPath();
    context.setLineWidth(1);
    context.setFillStyle("#66FFFF");
    context.arc(80, 180, 60, 0, 360);
    context.stroke();
    context.fill();
    context.closePath();
    // 军事
    context.beginPath();
    context.setLineWidth(1);
    context.setFillStyle("#66FF99");
    context.arc(180, 120, 30, 0, 360);
    context.stroke();
    context.fill();
    context.closePath();
    // 国际
    context.beginPath();
    context.setLineWidth(1);
    context.setFillStyle("#66FF33");
    context.arc(240, 200, 40, 0, 360);
    context.stroke();
    context.fill();
    context.closePath();
    // 体育
    context.beginPath();
    context.setLineWidth(1);
    context.setFillStyle("#66FFFF");
    context.arc(180, 300, 50, 0, 360);
    context.stroke();
    context.fill();
    context.closePath();
    // 财经
    context.beginPath();
    context.setLineWidth(1);
    context.setFillStyle("#FFFF00");
    context.arc(80, 320, 36, 0, 360);
    context.stroke();
    context.fill();
    context.closePath();
    // 娱乐
    context.beginPath();
    context.setLineWidth(1);
    context.setFillStyle("#999966");
    context.arc(130, 400, 38, 0, 360);
    context.stroke();
    context.fill();
    context.closePath();
    // 时尚
    context.beginPath();
    context.setLineWidth(1);
    context.setFillStyle("#CC6633");
    context.arc(255, 370, 38, 0, 360);
    context.stroke();
    context.fill();
    context.closePath();

    // 文本
    context.beginPath();
    context.fillStyle = '#000000'; // 文本颜色 
    context.textAlign = 'center'; // 文本对齐方式 
    context.font = '15rpx 宋体'; // 文本字号、字体 
    context.fillText("头条", 80, 180);
    context.closePath();

    context.beginPath();
    context.fillStyle = '#000000'; // 文本颜色 
    context.textAlign = 'center'; // 文本对齐方式 
    context.font = '15rpx 宋体'; // 文本字号、字体 
    context.fillText("军事", 180, 120);
    context.closePath();

    context.beginPath();
    context.fillStyle = '#000000'; // 文本颜色 
    context.textAlign = 'center'; // 文本对齐方式 
    context.font = '15rpx 宋体'; // 文本字号、字体 
    context.fillText("国际", 240, 200);
    context.closePath();

    context.beginPath();
    context.fillStyle = '#000000'; // 文本颜色 
    context.textAlign = 'center'; // 文本对齐方式 
    context.font = '15rpx 宋体'; // 文本字号、字体 
    context.fillText("体育", 180, 300);
    context.closePath();

    context.beginPath();
    context.fillStyle = '#000000'; // 文本颜色 
    context.textAlign = 'center'; // 文本对齐方式 
    context.font = '15rpx 宋体'; // 文本字号、字体 
    context.fillText("财经", 80, 320);
    context.closePath();

    context.beginPath();
    context.fillStyle = '#000000'; // 文本颜色 
    context.textAlign = 'center'; // 文本对齐方式 
    context.font = '15rpx 宋体'; // 文本字号、字体 
    context.fillText("娱乐", 130, 400);
    context.closePath();

    context.beginPath();
    context.fillStyle = '#000000'; // 文本颜色 
    context.textAlign = 'center'; // 文本对齐方式 
    context.font = '15rpx 宋体'; // 文本字号、字体 
    context.fillText("时尚", 255, 370);
    context.closePath();




    context.draw();
  },





  test: function (context) {
    this.wxCanvas = new wxDraw(context, 0, 0, 400, 500);
    //初始化wxDraw对象 注意这里除了context的四个参数 就是canvas的位置以及长宽
    var rect = new Shape('rect', { x: 60, y: 60, w: 40, h: 40, fillStyle: "#2FB8AC", rotate: Math.PI / 2 }, 'mix', true);
    this.wxCanvas.add(rect);//添加到canvas上面
    rect.animate({ "x": "+=100", "y": "+=100" }, { duration: 1000 }).animate("rotate", Math.PI * 5, { duration: 1000 }).start(3);
  }



})