Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  toastyunda: function () {
    var ticket = "! 0 200 200 1256 1\\r\\n" +
      "LINE 4 207 576 207 1\r\n" +
      "LINE 4 448 440 448 1\r\n" +
      "LINE 4 512 440 512 1\r\n" +
      "LINE 4 775 576 775 1\r\n" +
      "LINE 4 1162 576 1162 1\r\n" +
      "LINE 440 207 440 670 1\r\n"+
      "PAGE-WIDTH 575\r\n" +
      "TEXT 55 0 24 8 始发网点：闵行区七宝YD\r\n" +
      "TEXT 55 3 24 35 送达\r\n" +
      "TEXT 55 3 24 68 地址\r\n" +
      "TEXT 24 0 100 40 收件人：djks\r\n" +
      "TEXT 24 0 100 70 电话：15847369856\r\n" +
      "TEXT 24 0 100 105 收件地址：吉林省 四平市 伊\r\n" +
      "TEXT 24 0 100 130 通满族自治县 虹莘路1481号\r\n" +
      "TEXT 55 0 448 28 2017年07月04日\r\n" +
      "TEXT 55 0 448 48 14:35:12\r\n" +
      "TEXT 55 0 448 8 体积：\r\n" +
      "TEXT 24 0 328 8 1.00KG\r\n" +
      "TEXT 24 0 328 33 普通\r\n" +
      "TEXT 24 0 16 182 集包地：长春分拨包\r\n" +
      "TEXT 24 0 24 470 运单编号：3100488650709\r\n" +
      "TEXT 24 0 24 530 商品信息：哦哦\r\n" +
      "B QR 32 246 M 2 U 6\r\n" +
      "MA,3100488650709\r\n" +
      "ENDQR\r\n" +
      "TEXT 24 6 200 236 232\r\n" +
      "TEXT 24 6 200 306 123\r\n" +
      "TEXT 24 6 200 376 DT900\r\n" +
      "VB 128 2 2 80 460 630 310048865070904244\r\n" +
      "TEXT 55 0 32 600 收件人/代签人：\r\n" +
      "TEXT 55 0 32 634 签收时间：    年  月  日\r\n" +
      "B 128 2 2 50 23 690 3100488650709\r\n" +
      "TEXT 24 0 23 750 3100488650709\r\n" +
      "TEXT 55 0 24 782 发件人： 固话\r\n" +
      "TEXT 55 0 24 802 电话：15874253698\r\n" +
      "TEXT 55 0 24 822 发件人： 上海市 (沪)市辖区闵行区 虹\r\n" +
      "TEXT 55 0 24 842 莘路1467号\r\n" +
      "TEXT 55 0 32 862 收件人：djks\r\n" +
      "TEXT 55 0 32 882 电话：15847369856\r\n" +
      "TEXT 55 0 32 902 收件地址： 吉林省 四平市 伊通满族自治县\r\n" +
      "TEXT 55 0 32 922 虹莘路1481号\r\n" +
      "LINE 448 862 560 862 5\r\n" +
      "LINE 448 902 560 902 5\r\n" +
      "LINE 560 862 560 902 5\r\n" +
      "LINE 448 862 448 902 5\r\n" +
      "TEXT 24 0 470 872 已验视\r\n" +
      "TEXT 55 0 24 964 发件人：固话\r\n" +
      "TEXT 55 0 24 984 电话：15874253698\r\n" +
      "TEXT 55 0 24 1024 莘路1467号\r\n" +
      "PRINT\r\n" ;
  var fun_base64_2 = require('../../utils/base64_2.js');
    var base64_2_obj = new fun_base64_2.Base64();
    //加密
    var base64_2_encode = base64_2_obj.encode(ticket);
    wx.navigateTo({
      url: '../index/index?value=' + base64_2_encode,
    })
  },


  toastkuayue: function () {
    

    var ticket_kuayue = "! 0 200 200 1680 1\r\n" +
      "B 128 2 2 64 400 0 3100488650709\r\n" +
      "LINE 0 136 800 136 1\r\n" +
      "LINE 0 188 800 188 1\r\n" +
      "LINE 0 240 800 240 1\r\n" +
      "LINE 600 136 600 240 1\r\n" +
      "LINE 48 240 48 345 1\r\n" +
      "TEXT 24 0 464 80 3100488650709\r\n" +
      "TEXT 24 0 16 144 [#发件网点名_mo31_#]\r\n" +
      "TEXT 24 0 608 144 [#收件地邮编_mo32_#]\r\n" +
      "TEXT 24 0 16 193 [#收件网点名_mo33_#]\r\n" +
      "TEXT 24 0 608 193 [#收件地邮编_mo32_#]\r\n" +
      "LINE 0 289 800 289 1\r\n" +
      "LINE 0 345 800 345 1\r\n" +
      "LINE 400 377 800 377 1\r\n" +
      "LINE 0 408 800 408 1\r\n" +
      "LINE 0 500 800 500 1\r\n" +
      "LINE 400 345 400 408 1\r\n" +
      "TEXT 24 0 8 248 寄方\r\n" +
      "TEXT 24 0 8 297 收方\r\n" +
      "TEXT 24 0 56 248 [#发件人姓名_mo_36]          [#发件人手机_mo_37] [#发件人座机_mo_38]\r\n" +
      "TEXT 24 0 56 272 寄件时间：       年   月   日   时   分\r\n" +
      "TEXT 24 0 56 297 [#收件人姓名_mo_43]          [#收件人手机_mo_44] [#收件人座机_mo_45]\r\n" +
      "TEXT 24 0 56 321 [#收件人详细地址_mo_46]\r\n" +
      "TEXT 24 0 8 353 寄托物：[#订单物品_mo_47]\r\n" +
      "TEXT 24 0 408 353 打印时间：[#时间_mo_39]\r\n" +
      "TEXT 24 0 408 384 签收时间：       年   月   日   时   分\r\n" +
      "TEXT 24 0 8 416 附加服务：声明价值：[#订单总全额_mo_52]\r\n" +
      "TEXT 24 0 8 448 备注：[#卖家备注_mo_53]\r\n" +

      "B 128 2 2 64 400 648 3100488650709\r\n" +
      "LINE 0 744 800 744 1\r\n" +
      "LINE 0 816 800 816 1\r\n" +
      "LINE 0 897 800 897 1\r\n" +
      "LINE 48 744 48 897 1\r\n" +
      "LINE 600 744 600 897 1\r\n" +
      "LINE 0 960 800 960 1\r\n" +
      "LINE 0 1016 800 1016 1\r\n" +
      "LINE 400 968 400 1016 1\r\n" +
      "TEXT 24 0 464 728 3100488650709\r\n" +
      "TEXT 24 0 8 752 寄方\r\n" +
      "TEXT 24 0 8 832 收方\r\n" +
      "TEXT 24 0 608 840 [#业务类型_mo34_#]\r\n" +
      "TEXT 24 0 56 752 [#发件人姓名_mo_36]          [#发件人手机_mo_37] [#发件人座机_mo_38]\r\n" +
      "TEXT 24 0 56 776 寄件时间：       年   月   日   时   分\r\n" +
      "TEXT 24 0 56 832 [#收件人姓名_mo_43]          [#收件人手机_mo_44] [#收件人座机_mo_45]\r\n" +
      "TEXT 24 0 56 856 [#收件人详细地址_mo_46]\r\n" +
      "TEXT 24 0 8 968 寄托物：[#订单物品_mo_47]\r\n" +
      "TEXT 24 0 408 968 签收时间：       年   月   日   时   分\r\n" +
      "TEXT 24 0 8 1024 附加服务：声明价值：[#订单总全额_mo_52]\r\n" +
      "TEXT 24 0 8 1056 备注：[#卖家备注_mo_53]\r\n" +


      "B 128 2 2 64 400 1120 3100488650709\r\n" +
      "TEXT 24 0 464 1200 3100488650709\r\n" +
      "LINE 0 1216 800 1216 1\r\n" +
      "LINE 0 1288 800 1288 1\r\n" +
      "LINE 0 1369 800 1369 1\r\n" +
      "LINE 48 1216 48 1216 1\r\n" +
      "LINE 600 1216 600 1369 1\r\n" +
      "LINE 0 1432 800 1432 1\r\n" +
      "LINE 0 1488 800 1488 1\r\n" +
      "LINE 400 1440 400 1488 1\r\n" +
      "TEXT 24 0 8 1224 寄方\r\n" +
      "TEXT 24 0 8 1304 收方\r\n" +
      "TEXT 24 0 608 1312 [#业务类型_mo34_#]\r\n" +
      "TEXT 24 0 56 1224 [#发件人姓名_mo_36]          [#发件人手机_mo_37] [#发件人座机_mo_38]\r\n" +
      "TEXT 24 0 56 1248 寄件时间：       年   月   日   时   分\r\n" +
      "TEXT 24 0 56 1304 [#收件人姓名_mo_43]          [#收件人手机_mo_44] [#收件人座机_mo_45]\r\n" +
      "TEXT 24 0 56 1328 [#收件人详细地址_mo_46]\r\n" +
      "TEXT 24 0 8 1440 寄托物：[#订单物品_mo_47]\r\n" +
      "TEXT 24 0 408 1440 签收时间：       年   月   日   时   分\r\n" +
      "TEXT 24 0 8 1496 附加服务：声明价值：[#订单总全额_mo_52]\r\n" +
      "TEXT 24 0 8 1528 备注：[#卖家备注_mo_53]\r\n" +

      "FORM\r\n" +
      "PRINT\r\n";
    var fun_base64_2 = require('../../utils/base64_2.js');
    var base64_2_obj = new fun_base64_2.Base64();
    //加密
    var base64_2_encode = base64_2_obj.encode(ticket_kuayue);
    wx.navigateTo({
      url: '../index/index?value=' + base64_2_encode,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    name:options.name
    id:options.deviceId
    // console.log(options.name+options.deviceId)
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