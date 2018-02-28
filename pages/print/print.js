// pages/print/print.js
//二级界面：编辑打印内容
var company="qwert "
var carNumber=""

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
  gotoPrint: function () {
    var str = "! 0 200 200 640 1\r\n" +
      "BOX 0 0 544 168 2\r\n" +
      "BOX 0 168 336 440 2\r\n" +
      "BOX 336 168 544 440 2\r\n" +
      "BOX 0 440 544 640 2\r\n" +
      "TEXT 4 0 10 10 韵 达\r\n" +
      "TEXT 2 0 338 138 车牌号：" + carNumber+"\r\n" +
      "TEXT 2 0 56 451 您的前面有      辆车在等候，请耐心等待！\r\n" +
      "TEXT 2 0 72 513 请妥善保管本凭条，过号无效，谢谢\r\n" +
      "TEXT 2 0 168 577 2017- 06 - 08 18:08:33\r\n" +
      "VBARCODE 128 1 0 100 400 400 123456789\r\n" +
      "TEXT 4 0 128 320 全部\r\n" +
      "TEXT 4 0 59 58 "+company+"\r\n" +
      "SETMAG 2 2\r\n" +
      "TEXT 4 0 104 248 Q001\r\n" +
      "TEXT 2 0 186 451 10\r\n" +
      "PRINT\r\n";


    var fun_base64_2 = require('../../utils/base64_2.js');
    var base64_2_obj = new fun_base64_2.Base64();
    //加密
    var base64_2_encode = base64_2_obj.encode(str);
    console.log("value=", base64_2_encode);
    wx.navigateTo({
      url: '../index/index?value=' + base64_2_encode,
    })
  },
  /**
   * 监听手机号输入
   */
  listenerPhoneInput: function (e) {
    company = e.detail.value;

  },

  /**
   * 监听密码输入
   */
  listenerPasswordInput: function (e) {
    carNumber = e.detail.value;
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