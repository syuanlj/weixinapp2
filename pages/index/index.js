//index.js
//获取应用实例
var app = getApp();
var Printer = require('../../print/Printer.js');
var fun_base64_2 = require('../../utils/base64_2.js');
var util = require('../../utils/util.js');
var time = util.formatTime(new Date());

var yunda = "! 0 200 200 640 1\r\n" +
  "BOX 0 0 544 168 2\r\n" +
  "BOX 0 168 336 440 2\r\n" +
  "BOX 336 168 544 440 2\r\n" +
  "BOX 0 440 544 640 2\r\n" +
  "TEXT 56 20 10 10 韵 达\r\n" +
  "TEXT 56 20 338 138 车牌号：沪APX806\r\n" +
  "TEXT 56 20 56 451 您的前面有      辆车在等候，请耐心等待！\r\n" +
  "TEXT 56 20 72 513 请妥善保管本凭条，过号无效，谢谢\r\n" +
  "TEXT 56 20 168 577 2017- 06 - 08 18:08:33\r\n" +
  "VBARCODE 128 1 0 100 400 400 123456789\r\n" +
  "TEXT 56 20 128 320 全部\r\n" +
  "TEXT 56 20 59 58 浙江桐乡市公司\r\n" +
  "SETMAG 2 2\r\n" +
  "TEXT 56 20 104 248 Q001\r\n" +
  "TEXT 56 20 186 451 10\r\n" +
  "PRINT\r\n";
var minxing = "! 0 200 200 1256 1\r\n" +
  "LINE 4 207 576 207 1\r\n" +
  "LINE 4 448 440 448 1\r\n" +
  "LINE 4 512 440 512 1\r\n" +
  "LINE 4 775 576 775 1\r\n" +
  "LINE 4 1162 576 1162 1\r\n" +
  "LINE 440 207 440 670 1\r\n" +
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
  "PRINT\r\n";


var str2_decode = "! 0 200 200 640 1\r\n" +
  "BOX 0 0 544 168 2\r\n" +
  "BOX 0 168 336 440 2\r\n" +
  "BOX 336 168 544 440 2\r\n" +
  "BOX 0 440 544 640 2\r\n" +
  "TEXT 4 0 10 10 韵 达\r\n" +
  "TEXT 2 0 338 138 车牌号：沪APX806\r\n" +
  "TEXT 2 0 56 451 您的前面有      辆车在等候，请耐心等待！\r\n" +
  "TEXT 2 0 72 513 请妥善保管本凭条，过号无效，谢谢\r\n" +
  "TEXT 2 0 168 577 2017-06-08 18:08:33\r\n" +
  "BARCODE-TEXT 24 0 100\r\n" +
  "VBARCODE 128 1 1 112 400 400 201706080001\r\n" +
  "VTEXT 7 0 368 376 201706080001\r\n" +
  "BARCODE-TEXT OFF\r\n" +
  "TEXT 4 0 128 320 全部\r\n" +
  "TEXT 4 0 59 58 浙江桐乡市公司条过号无效，谢谢\r\n" +
  "SETMAG 2 2\r\n" +
  "TEXT 4 0 104 248 Q001\r\n" +
  "TEXT 2 0 186 451 10\r\n" +
  "PRINT\r\n";

var kuayue0 = 'SIZE 100 mm,210 mm\r\n' +
  'GAP 3 mm, 0 mm\r\n' +
  'SPEED 3.0\r\n' +
  'DENSITY 8\r\n' +
  'DIRECTION 0\r\n' +
  'CLS\r\n';


//一维码： 'BARCODE 100,100,"39",96,1,0,2,4,"1000"\r\n' +
//文字： 'TEXT 10,10,"4",0,1,1,"DEMO FOR TEXT"\r\n' +
//线框： 'BOX 100,100,200,200,5\r\n' +
//线： 'BAR 200,1000,400,5\r\n' +
var kuayue1 =
  'BOX 10,10,780,1680,1\r\n' +
  'BAR 10,176,778,1\r\n' +
  'BAR 10,234,778,1\r\n' +
  'BAR 10,298,778,1\r\n' +
  'BAR 10,372,778,1\r\n' +
  'BAR 10,406,778,1\r\n' +
  'BAR 10,440,778,1\r\n' +
  'BAR 10,500,778,1\r\n' +

  'BAR 40,176,1,122\r\n' +
  'BAR 580,176,1,58\r\n' +
  'BAR 580,298,1,108\r\n' +
  'BAR 200,372,1,34\r\n' +
  'BAR 400,372,1,68\r\n' +

  'BARCODE 480,20,"128",110,1,0,2,4,"20802517704"\r\n' +
  'TEXT 14,152,"TSS24.BF2",0,1,1,"打印时间：' + time + '"\r\n' +
  'TEXT 14,180,"TSS24.BF2",0,1,1,"寄"\r\n' +
  'TEXT 14,204,"TSS24.BF2",0,1,1,"方"\r\n' +
  'TEXT 14,238,"TSS24.BF2",0,1,1,"收"\r\n' +
  'TEXT 14,268,"TSS24.BF2",0,1,1,"方"\r\n' +
  'TEXT 14,302,"TSS24.BF2",0,1,1,"寄托物：五金"\r\n' +
  'TEXT 14,376,"TSS24.BF2",0,1,1,"寄件签署："\r\n' +
  'TEXT 14,410,"TSS24.BF2",0,1,1,"寄件时间：  年  月  日  时  分"\r\n' +
  'TEXT 14,444,"TSS24.BF2",0,1,1,"件数：          实重：            计重：         费用合计："\r\n' +
  'TEXT 14,474,"TSS24.BF2",0,1,1,"运费：          付款方式：寄付月结     月结卡号：76933756970"\r\n' +
  'TEXT 14,504,"TSS24.BF2",0,1,1,"备注："\r\n' +

  'TEXT 84,180,"TSS24.BF2",0,1,1,"********"\r\n' +
  'TEXT 84,204,"TSS24.BF2",0,1,1,"李**      178****9876"\r\n' +
  'TEXT 600,185,"4",0,1,1,"0512"\r\n' +
  'TEXT 84,238,"TSS24.BF2",0,1,1,"********"\r\n' +
  'TEXT 84,268,"TSS24.BF2",0,1,1,"韩**      168****1234"\r\n' +
  'TEXT 600,310,"TSS24.BF2",0,2,2,"次日达"\r\n' +
  'TEXT 204,376,"TSS24.BF2",0,1,1,"收件员："\r\n' +
  'TEXT 404,376,"TSS24.BF2",0,1,1,"收方签字："\r\n' +
  'TEXT 584,376,"TSS24.BF2",0,1,1,"派件员："\r\n' +
  'TEXT 404,410,"TSS24.BF2",0,1,1,"签收时间：  年  月  日  时  分"\r\n';

var kuayue2 =
  'BAR 10,736,778,1\r\n' +
  'BAR 10,794,778,1\r\n' +
  'BAR 10,858,778,1\r\n' +
  'BAR 10,932,778,1\r\n' +
  'BAR 10,966,778,1\r\n' +
  'BAR 10,1035,778,1\r\n' +

  'BAR 40,736,1,122\r\n' +
  'BAR 580,858,1,74\r\n' +
  'BAR 400,932,1,34\r\n' +

  'BARCODE 480,660,"128",55,1,0,2,4,"20802517704"\r\n' +
  'TEXT 14,740,"TSS24.BF2",0,1,1,"寄"\r\n' +
  'TEXT 14,764,"TSS24.BF2",0,1,1,"方"\r\n' +
  'TEXT 14,798,"TSS24.BF2",0,1,1,"收"\r\n' +
  'TEXT 14,822,"TSS24.BF2",0,1,1,"方"\r\n' +
  'TEXT 14,862,"TSS24.BF2",0,1,1,"寄托物：五金"\r\n' +
  'TEXT 14,936,"TSS24.BF2",0,1,1,"寄件时间：  年  月  日  时  分"\r\n' +
  'TEXT 14,970,"TSS24.BF2",0,1,1,"件数：          实重：            计重：         费用合计："\r\n' +
  'TEXT 14,1039,"TSS24.BF2",0,1,1,"备注"\r\n' +

  'TEXT 84,740,"TSS24.BF2",0,1,1,"********"\r\n' +
  'TEXT 84,764,"TSS24.BF2",0,1,1,"李**      178****9876"\r\n' +
  'TEXT 84,798,"TSS24.BF2",0,1,1,"********"\r\n' +
  'TEXT 84,822,"TSS24.BF2",0,1,1,"韩**      168****1234"\r\n' +
  'TEXT 600,868,"TSS24.BF2",0,2,2,"次日达"\r\n' +
  'TEXT 404,936,"TSS24.BF2",0,1,1,"签收时间：  年  月  日  时  分"\r\n';
var kuayue3 =
  'BAR 10,1256,778,1\r\n' +
  'BAR 10,1314,778,1\r\n' +
  'BAR 10,1378,778,1\r\n' +
  'BAR 10,1452,778,1\r\n' +
  'BAR 10,1486,778,1\r\n' +
  'BAR 10,1555,778,1\r\n' +

  'BAR 40,1256,1,122\r\n' +
  'BAR 580,1378,1,74\r\n' +
  'BAR 400,1452,1,34\r\n' +

  'BARCODE 480,1180,"128",55,1,0,2,4,"20802517704"\r\n' +
  'TEXT 14,1260,"TSS24.BF2",0,1,1,"寄"\r\n' +
  'TEXT 14,1284,"TSS24.BF2",0,1,1,"方"\r\n' +
  'TEXT 14,1318,"TSS24.BF2",0,1,1,"收"\r\n' +
  'TEXT 14,1342,"TSS24.BF2",0,1,1,"方"\r\n' +
  'TEXT 14,1382,"TSS24.BF2",0,1,1,"寄托物：五金"\r\n' +
  'TEXT 14,1456,"TSS24.BF2",0,1,1,"寄件时间：  年  月  日  时  分"\r\n' +
  'TEXT 14,1490,"TSS24.BF2",0,1,1,"件数：          实重：            计重：         费用合计："\r\n' +
  'TEXT 14,1520,"TSS24.BF2",0,1,1,"运费：          付款方式：寄付月结     月结卡号：76933756970"\r\n' +
  'TEXT 14,1559,"TSS24.BF2",0,1,1,"备注"\r\n' +

  'TEXT 84,1260,"TSS24.BF2",0,1,1,"********"\r\n' +
  'TEXT 84,1284,"TSS24.BF2",0,1,1,"李**      178****9876"\r\n' +
  'TEXT 84,1318,"TSS24.BF2",0,1,1,"********"\r\n' +
  'TEXT 84,1342,"TSS24.BF2",0,1,1,"韩**      168****1234"\r\n' +
  'TEXT 600,1388,"TSS24.BF2",0,2,2,"次日达"\r\n' +
  'TEXT 404,1456,"TSS24.BF2",0,1,1,"签收时间：  年  月  日  时  分"\r\n' +
  'PRINT 1,1\r\n';
var base64_2_obj = new fun_base64_2.Base64();//获得base64对象
var mPrinter = new Printer.Printer();
var content = '';
var serID = '';
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.contact'),
    status: '',
    name: '',
    connectedDeviceId: '',
    services: '',
    deviceId: '',
    serviceId: '',
    characteristicId: '',
    characteristics: '',
    devices: '',
    errMsg: '使用过程中请用户保持开启蓝牙',
    bool: false,
    state: '未连接',
    value: ''

  },
  onLoad: function (options) {
    // console.log(options.value)
    mPrinter.setBase64(base64_2_obj);
    this.setData({
      value: options.value,
      devices: ''
    })
    if (wx.openBluetoothAdapter) {
      wx.openBluetoothAdapter();
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试',
      })
    }
    this.action0();
    // wx.getBluetoothDevices({
    //   success: function (res) {
    //     var devicesArray = [];
    //     var j = 0;
    //     for (var i = 0; i < res.devices.length; i++) {
    //       devicesArray[i] = res.devices[i];
    //       if ((res.devices[i].name.substring(0, 2) === "未知")) {
    //         devicesArray[i].name = res.devices[i].deviceId;
    //       }
    //     }

    //     // 是否有已连接设备
    //     wx.getConnectedBluetoothDevices({
    //       success: function (res) {
    //         console.log(JSON.stringify(res.devices));
    //         // console.log(res.devices) 
    //         that.setData({
    //           connectedDeviceId: res.deviceId
    //         })
    //       }
    //     })
    //     that.setData({
    //       msg: '搜索设备' + JSON.stringify(res.devices),
    //       // devices: res.devices,
    //       devices: devicesArray,
    //       deviceNumber: devicesArray.length,
    //     })
    //   },
    // })

  },

  action0: function () {
    var that = this;

    // 此方法只有在蓝牙开启时才能使用
    wx.openBluetoothAdapter({
      success: function (res) {
        status: '蓝牙开启'
      },
      fail: function () {
        status: '蓝牙未开启，请开启手机蓝牙'
      }
    })
    wx.getBluetoothAdapterState({
      success: function (res) {
        that.setData({
          status: res.available ? '可用' : '请用户开启手机蓝牙',
          search: res.discovering ? '在搜索' : '不在搜索',

          msg: '',
          devices: '',
          deviceNumber: 0,
        })
        if (res.available) {
          wx.startBluetoothDevicesDiscovery({
            success: function (res) {
              that.setData({
                decices: '',
                search: res.isDiscovering ? '在搜索' : '不在搜索',
                // errMsg: res.errMsg 
              })
            },
          })
        }
      },
      fail: function () {
        status: '蓝牙未开启，请开启手机蓝牙'
      }
    })

  },

  //搜索设备
  action1: function () {
    var that = this
    // wx.startBluetoothDevicesDiscovery({
    //   success: function (res) {
    //     that.setData({
    //       decices: '',
    //       search: res.isDiscovering ? '在搜索' : '不在搜索',
    //       // errMsg: res.errMsg 
    //     })
    //   },
    // })
    wx.getBluetoothAdapterState({
      success: function (res) {
        that.setData({
          status: res.available ? '可用' : '请用户开启手机蓝牙',
        })
        if (res.available) {
          wx.startBluetoothDevicesDiscovery({
            success: function (res) {
              that.setData({
                decices: '',
                search: res.isDiscovering ? '在搜索' : '不在搜索',
                // errMsg: res.errMsg 
              })
            },
          })
        }
      },
      fail: function () {
        status: '调用失败'
      }
    })
    wx.getBluetoothDevices({
      success: function (res) {
        var devicesArray = [];
        var j = 0;
        for (var i = 0; i < res.devices.length; i++) {
          // if (res.devices[i].name.substring(0, 3) === "MPL"){
          devicesArray[j] = res.devices[i];
          j++;
          // }

          // if ((res.devices[i].name.substring(0, 2) === "未知")) {
          //   devicesArray[i].name = res.devices[i].deviceId;
          // }
        }

        // 是否有已连接设备
        wx.getConnectedBluetoothDevices({
          success: function (res) {
            console.log('已连接的设备' + JSON.stringify(res.devices));
            // console.log(res.devices) 
            that.setData({
              connectedDeviceId: res.deviceId
            })
          }
        })
        that.setData({
          msg: '搜索设备' + JSON.stringify(res.devices),
          // devices: res.devices,
          devices: devicesArray,
          deviceNumber: devicesArray.length,
        })
        console.log(res.devices)
        console.log(devicesArray)

      },
    })
  },

  //连接设备
  connectTO: function (e) {
    var that = this
    that.setData({
      clicked: true,
    })

    wx.createBLEConnection({
      deviceId: e.currentTarget.id,
      success: function (res) {
        mPrinter.setMac(e.currentTarget.id)
        console.log('调用成功')
        that.setData({
          connectedDeviceId: e.currentTarget.id,
          state: '已连接',
          msg: '已连接' + e.currentTarget.id,

          // errMsg: '连接蓝牙成功' + e.currentTarget.name,
          // devices:''
        })

        //连接成功就停止蓝牙的搜索活动
        wx.stopBluetoothDevicesDiscovery({
          success: function (res) {
            that.setData({
              status: res.available ? '已连接' : e.currentTarget.name,
              search: res.discovering ? '在搜索' : '不在搜索',
            })
          },
        })
        // 连接成功就获取设备服务及特征值
        wx.getBLEDeviceServices({
          deviceId: that.data.connectedDeviceId,
          success: function (res) {

            console.log('获取服务成功')
            console.log('device service:', JSON.stringify(res.services))
            console.log('device service:', res.services)
            for (var n = 0; n < res.services.length; n++) {
              //3000:0000EEE0
              //240:000018F0
              if (res.services[n].uuid.substring(0, 8) === "0000EEE0") {
                mPrinter.setService(res.services[n].uuid)
                serID = res.services[n].uuid;
                console.log(serID);
                that.setData({
                  services: res.services,
                  msg: JSON.stringify(res.services),
                  serviceId: res.services[n].uuid
                });
              }
            }

            wx.getBLEDeviceCharacteristics({
              deviceId: that.data.connectedDeviceId,
              serviceId: serID,

              success: function (res) {
                console.log('特征值：', res.characteristics)
                that.setData({
                  errMsg: '蓝牙连接成功'
                })
                for (var i = 0; i < res.characteristics.length; i++) {
                  //3000:0000EEE1
                  //240:00002AF1
                  if (res.characteristics[i].uuid.substring(0, 8) === "0000EEE1") {
                    mPrinter.setCharacteristic(res.characteristics[i].uuid);
                    that.setData({
                      writeServiceId: that.data.services[i].uuid,
                      writeCharacteristicsId: res.characteristics[i].uuid,
                    })
                  }
                  // if (res.characteristics[i].properties.notify) {
                  //   console.log('notifyCharacteristicsId', res.characteristics[i].uuid)
                  //   that.setData({
                  //     notifyServiceId: that.data.services[0].uuid,
                  //     notifyCharacteristicsId: res.characteristics[i].uuid
                  //   })
                  // }
                  // if (res.characteristics[i].properties.write) {
                  //   console.log('writeCharacteristicsId', res.characteristics[i].uuid)
                  //   that.setData({
                  //     writeServiceId: that.data.services[0].uuid,
                  //     writeCharacteristicsId: res.characteristics[i].uuid,
                  //   })
                  // } else if (res.characteristics[i].properties.read) {
                  //   console.log('readCharacteristicsId', res.characteristics[i].uuid)
                  //   that.setData({
                  //     readServiceId: that.data.services[0].uuid,
                  //     readCharacteristicsId: res.characteristics[i].uuid
                  //   })
                  // }
                }
                console.log('device getBLEDeviceCharacteristics1:', res.characteristics);

                that.setData({
                  characteristics: JSON.stringify(res.characteristics)
                })
              },
              fail: function (res) {
                console.log('获取特征值失败')
                that.setData({
                  errMsg: '蓝牙连接失败'
                })
              },
              complete: function (res) { console.log('获取特征值完成') },
            })
          },
          fail: function (res) {
            console.log('获取服务失败')
          },
          complete: function (res) {
            console.log('获取服务完成')
          },
        })
      },
      fail: function () {
        that.setData({
          clicked: true, state: '连接失败'
        })
        console.log('调用失败2')
      },
      complete: function () {
        console.log('调用结束2')
        that.setData({
          clicked: false,
        })
      }
    })
    wx.getBluetoothAdapterState({
      success: function (res) {
        that.setData({
          status: res.available ? '可用' : '不可用',
          search: res.discovering ? '在搜索' : '不在搜索',

        })
      },
      fail: function () {
        status: '蓝牙未开启，请开启手机蓝牙'
      }
    })
  },

  //断开连接
  disconnect: function () {
    var that = this
    wx.closeBLEConnection({
      deviceId: that.data.connectedDeviceId,
      success: function (res) {
        that.setData({
          connectedDeviceId: '',
          msg: '',
          state: '未连接',
          characteristics: '',
          // deviceNumber:'',
          errMsg: '蓝牙断开连接',
        })
      },
    })
    wx.getBluetoothAdapterState({
      success: function (res) {
        that.setData({
          status: res.available ? '可用' : '不可用',
          search: res.discovering ? '在搜索' : '不在搜索',
        })
      },
      fail: function () {
        status: '蓝牙未开启，请开启手机蓝牙'
      }
    })
  },

  sendprinterdata: function (e) {
    var that = this;

    // var ticket = kuayue0 + kuayue1 + kuayue2 + kuayue3;
    // var ticket = yunda;
    // var kys = ticket.split('\r\n');
    // console.log('数据长度：' + kys.length);
    // for (var i = 0; i < kys.length; i++) {
    //   content = base64_2_obj.encode(kys[i] + '\r\n');;
    //   that.printData();
    // }

    mPrinter.createPage(570,400,1);
    mPrinter.printText(56, 0, 20, 20, '我佛慈悲！0',0,true);
    mPrinter.printText(56, 1, 20, 40, '我佛慈悲！1', true);
    mPrinter.printText(56, 2, 20, 70, '我佛慈悲！2',0, true,true);
    mPrinter.printLine(10,10,560,10,1);
    mPrinter.printQRCode(20,100,9,"1234567890");
    // mPrinter.printBarCode(false,128,2,2,50,10,200,'1234567890',true);
    mPrinter.printPage(false);
  },

  //发送打印内容
  printData: function (e) {
    var that = this

    // 这里的回调可以获取到 write 导致的特征值改变  
    // wx.onBLECharacteristicValueChange(function (characteristic) {
    //   console.log('characteristic value changed:1', characteristic)
    // })

    console.log(that.data.writeCharacteristicsId)
    wx.writeBLECharacteristicValue({
      // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取  
      deviceId: that.data.connectedDeviceId,
      // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取  
      serviceId: that.data.serviceId,
      // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取  
      characteristicId: that.data.writeCharacteristicsId,
      // 这里的value是ArrayBuffer类型 
      value: wx.base64ToArrayBuffer(content),
      // value: wx.base64ToArrayBuffer(base64_2_encode),
      // value: wx.base64ToArrayBuffer(kuayue_encode),
      success: function (res) {
        console.log('writeBLECharacteristicValue success', res.errMsg)

        that.setData({
          errMsg: '正在发送消息',
          bool: true,
        })

        //延迟2秒才执行function的内容
        // setTimeout(function () {
        //   that.setData({
        //     bool: false,
        //     errMsg: '消息发送完成'
        //   });
        //   that.update();
        // }, 1000)
      },
      fail: function (res) {
        console.log('发送失败')
        that.setData({
          errMsg: '打印失败'
        })
      },
      complete: function (res) { console.log('发送结束') },
    })
    wx.getBluetoothAdapterState({
      success: function (res) {
        that.setData({
          status: res.available ? '可用' : '不可用',
          search: res.discovering ? '在搜索' : '不在搜索',
        })
      },
      fail: function () {
        status: '蓝牙未开启，请开启手机蓝牙'
      }
    })
  },


  onHide: function () {
    // wx.clearStorage()
    this.disconnect();
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // this.disconnect();
  },

  scanCode: function () {

    var that = this
    //此方法只有在蓝牙开启时才能使用
    wx.openBluetoothAdapter({
      success: function (res) {
        status: '蓝牙开启'
      },
      fail: function () {
        status: '蓝牙未开启，请开启手机蓝牙'
      }
    })
    wx.startBluetoothDevicesDiscovery({
      success: function (res) {
        that.setData({
          decices: '',
          search: res.isDiscovering ? '在搜索' : '不在搜索',
          // errMsg: res.errMsg 
        })
      },
    })
    wx.scanCode({
      onlyFromCamera: true,
      success: function (res) {
        console.log(res)
        console.log(JSON.parse(res.result))
        that.setData({
          result: res.result,
          json: JSON.parse(res.result),
          name: JSON.parse(res.result).bt_name,
          connectedDeviceId: JSON.parse(res.result).bt_mac,
          pin: JSON.parse(res.result).bt_pin,
          // scanType:res.scanType,
          // charSet:res.charSet,
          // path:res.path
        })

        wx.createBLEConnection({
          deviceId: JSON.parse(res.result).bt_mac,
          success: function (res) {
            console.log('调用成功')
            that.setData({
              // connectedDeviceId: e.currentTarget.id,
              state: '已连接',
              // msg: '已连接' + e.currentTarget.id,

              // errMsg: '连接蓝牙成功' + e.currentTarget.name,
              // devices:''
            })

            //连接成功就停止蓝牙的搜索活动
            wx.stopBluetoothDevicesDiscovery({
              success: function (res) {
                that.setData({
                  status: res.available ? '已连接' : e.currentTarget.name,
                  search: res.discovering ? '在搜索' : '不在搜索',
                })
              },
            })
            // 连接成功就获取设备服务及特征值
            wx.getBLEDeviceServices({
              deviceId: that.data.connectedDeviceId,
              success: function (res) {
                console.log('获取服务成功')
                console.log('device service:', JSON.stringify(res.services))
                that.setData({
                  services: res.services,
                  msg: JSON.stringify(res.services),
                  serviceId: res.services[0].uuid
                })
                wx.getBLEDeviceCharacteristics({
                  deviceId: that.data.connectedDeviceId,
                  serviceId: that.data.services[0].uuid,

                  success: function (res) {
                    console.log('特征值：', res.characteristics)
                    that.setData({
                      errMsg: '蓝牙连接成功'
                    })
                    for (var i = 0; i < res.characteristics.length; i++) {

                      if (res.characteristics[i].properties.notify) {
                        console.log('notifyCharacteristicsId', res.characteristics[i].uuid)
                        that.setData({
                          notifyServiceId: that.data.services[0].uuid,
                          notifyCharacteristicsId: res.characteristics[i].uuid
                        })
                      }
                      if (res.characteristics[i].properties.write) {
                        console.log('writeCharacteristicsId', res.characteristics[i].uuid)
                        that.setData({
                          writeServiceId: that.data.services[0].uuid,
                          writeCharacteristicsId: res.characteristics[i].uuid,
                        })
                      } else if (res.characteristics[i].properties.read) {
                        console.log('readCharacteristicsId', res.characteristics[i].uuid)
                        that.setData({
                          readServiceId: that.data.services[0].uuid,
                          readCharacteristicsId: res.characteristics[i].uuid
                        })
                      }
                    }
                    console.log('device getBLEDeviceCharacteristics1:', res.characteristics);

                    that.setData({
                      characteristics: JSON.stringify(res.characteristics)
                    })

                  },
                  fail: function (res) {
                    console.log('获取特征值失败')
                    that.setData({
                      errMsg: '蓝牙连接失败'
                    })
                  },
                  complete: function (res) { console.log('获取特征值完成') },
                })
              },
              fail: function (res) {
                console.log('获取服务失败')
              },
              complete: function (res) {
                console.log('获取服务完成')
              },
            })
          },
          fail: function () {
            that.setData({
              clicked: true, state: '连接失败'
            })
            console.log('调用失败1')
          },
          complete: function () {
            console.log('调用结束1')
            that.setData({
              clicked: false,
            })
          }
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})
