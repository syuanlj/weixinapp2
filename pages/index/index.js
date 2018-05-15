//index.js
//获取应用实例
var app = getApp();
var str = "! 0 200 200 640 1\r\n" +
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
var ticket = "! 0 200 200 1256 1\r\n" +
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

var ticket_1 = "! 0 200 200 1256 1\r\n" +
  "LINE 4 207 576 207 1\r\n" +
  "LINE 4 448 440 448 1\r\n" +
  "LINE 4 512 440 512 1\r\n" +
  "LINE 4 775 576 775 1\r\n" +
  "LINE 4 1162 576 1162 1\r\n" +
  "LINE 440 207 440 670 1\r\n" +
  "TEXT 55 0 24 8 始发网点：闵行区七宝YD\r\n";
var ticket_2 =
  "TEXT 55 3 24 35 送达\r\n" +
  "TEXT 55 3 24 68 地址\r\n" +
  "TEXT 24 0 100 40 收件人：djks\r\n" +
  "TEXT 24 0 100 70 电话：15847369856\r\n" +
  "TEXT 24 0 100 105 收件地址：吉林省 四平市 伊\r\n" +
  "TEXT 24 0 100 130 通满族自治县 虹莘路1481号\r\n" +
  "TEXT 55 0 448 28 2017年07月04日\r\n" +
  "TEXT 55 0 448 48 14:35:12\r\n" +
  "TEXT 55 0 448 8 体积：\r\n" +
  "TEXT 24 0 328 8 1.00KG\r\n"
  ;
var ticket_3 = "TEXT 24 0 328 33 普通\r\n" +
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
  "TEXT 24 0 23 750 3100488650709\r\n";
var ticket_4 =
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
  "FORM\r\n" +
  "PRINT\r\n";



var str2 = 'ISAwIDIwMCAyMDAgNjQwIDENCkJPWCAwIDAgNTQ0IDE2OCAyDQpCT1ggMCAxNjggMzM2IDQ0MCAyDQpCT1ggMzM2IDE2OCA1NDQgNDQwIDINCkJPWCAwIDQ0MCA1NDQgNjQwIDINClRFWFQgNCAwIDEwIDEwINTPILTvDQpURVhUIDIgMCAzMzggMTM4ILO1xca6xaO6u6ZBUFg4MDYNClRFWFQgMiAwIDU2IDQ1MSDE+rXEx7DD5tPQICAgICAgwb6ztdTatci68qOsx+vEzdDEtci0/aOhDQpURVhUIDIgMCA3MiA1MTMgx+vN18nGsaO53LG+xr7M9aOsuf26xc7e0KejrNC70LsNClRFWFQgMiAwIDE2OCA1NzcgMjAxNy0wNi0wOCAxODowODozMw0KQkFSQ09ERS1URVhUIDI0IDAgMTAwDQpWQkFSQ09ERSAxMjggMSAxIDExMiA0MDAgNDAwIDIwMTcwNjA4MDAwMQ0KVlRFWFQgNyAwIDM2OCAzNzYgMjAxNzA2MDgwMDAxDQpCQVJDT0RFLVRFWFQgT0ZGDQpURVhUIDQgMCAxMjggMzIwIMirsr8NClRFWFQgNCAwIDU5IDU4INXjva3Nqc/nytC5q8u+zPW5/brFzt7Qp9C70LvQuw0KU0VUTUFHIDIgMg0KVEVYVCA0IDAgMTA0IDI0OCBRMDAxDQpURVhUIDIgMCAxODYgNDUxIDEwDQpGT1JNDQpQUklOVA0K';

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
var fun_base64_2 = require('../../utils/base64_2.js');
var base64_2_obj = new fun_base64_2.Base64();
//加密
var base64_2_encode = base64_2_obj.encode(ticket);
var ticket_1_encode = base64_2_obj.encode(ticket_1);
var ticket_2_encode = base64_2_obj.encode(ticket_2);
var ticket_3_encode = base64_2_obj.encode(ticket_3);
var ticket_4_encode = base64_2_obj.encode(ticket_4);
//解密
var base64_2_decode = base64_2_obj.decode(str2);
// console.log('decode=', base64_2_decode)
var count = 0;
var content = ticket_1_encode;
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
    console.log(options.value)
    // console.log(base64_2_obj.decode(options.value))
    this.setData({
      value: options.value
    })

    if (wx.openBluetoothAdapter) {
      wx.openBluetoothAdapter();
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试',
      })
    }

    wx.getBluetoothDevices({
      success: function (res) {
        var devicesArray = [];
        var j = 0;
        for (var i = 0; i < res.devices.length; i++) {
          devicesArray[i] = res.devices[i];
          if ((res.devices[i].name.substring(0, 2) === "未知")) {
            devicesArray[i].name = res.devices[i].deviceId;
          }
        }

        // 是否有已连接设备
        wx.getConnectedBluetoothDevices({
          success: function (res) {
            console.log(JSON.stringify(res.devices));
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
      },
    })

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
      },
      fail: function () {
        status: '蓝牙未开启，请开启手机蓝牙'
      }
    })
  },

  //搜索设备
  action1: function () {
    var that = this
    wx.startBluetoothDevicesDiscovery({
      success: function (res) {
        that.setData({
          decices: '',
          search: res.isDiscovering ? '在搜索' : '不在搜索',
          // errMsg: res.errMsg 
        })
      },
    })
    wx.getBluetoothAdapterState({
      success: function (res) {
        that.setData({
          status: res.available ? '可用' : '请用户开启手机蓝牙',
        })
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
            console.log(JSON.stringify(res.devices));
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
              if (res.services[n].uuid.substring(0, 8) === "0000EEE0") {
                that.setData({
                  services: res.services,
                  msg: JSON.stringify(res.services),
                  serviceId: res.services[n].uuid
                });
              }
            }

            wx.getBLEDeviceCharacteristics({
              deviceId: that.data.connectedDeviceId,
              serviceId: that.data.services[0].uuid,

              success: function (res) {
                console.log('特征值：', res.characteristics)
                that.setData({
                  errMsg: '蓝牙连接成功'
                })
                for (var i = 0; i < res.characteristics.length; i++) {
                  if (res.characteristics[i].uuid.substring(0, 8) === "0000EEE1") {
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

  sendPrinterData: function () {
    var that = this;
    var data = wx.base64ToArrayBuffer(base64_2_encode);
    var dataLength = data.length;
    console.log("数据的总长度：" + dataLength);
    console.log("数据：" + data);
    var tem = new byte[1024];
    var i = 0;
    for (i = 0; i < dataLength / 1024; i++) {
      tem = data.slice(1024 * i, 1024 * (i + 1));
      that.printData(tem);
    }
    tem = data.slice(1024 * i, dataLength + 1);
    that.printData(tem);

  },

  //发送打印内容
  printData: function (e) {
    var that = this

    // 这里的回调可以获取到 write 导致的特征值改变  
    wx.onBLECharacteristicValueChange(function (characteristic) {
      console.log('characteristic value changed:1', characteristic)
    })

    console.log(that.data.writeCharacteristicsId)
    wx.writeBLECharacteristicValue({
      // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取  
      deviceId: that.data.connectedDeviceId,
      // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取  
      serviceId: that.data.serviceId,
      // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取  
      characteristicId: that.data.writeCharacteristicsId,
      // 这里的value是ArrayBuffer类型 
      //结果正常
      // value: wx.base64ToArrayBuffer('ISAwIDIwMCAyMDAgNjQwIDENCkJPWCAwIDAgNTQ0IDE2OCAyDQpCT1ggMCAxNjggMzM2IDQ0MCAyDQpCT1ggMzM2IDE2OCA1NDQgNDQwIDINCkJPWCAwIDQ0MCA1NDQgNjQwIDINClRFWFQgNCAwIDEwIDEwINTPILTvDQpURVhUIDIgMCAzMzggMTM4ILO1xca6xaO6u6ZBUFg4MDYNClRFWFQgMiAwIDU2IDQ1MSDE+rXEx7DD5tPQICAgICAgwb6ztdTatci68qOsx+vEzdDEtci0/aOhDQpURVhUIDIgMCA3MiA1MTMgx+vN18nGsaO53LG+xr7M9aOsuf26xc7e0KejrNC70LsNClRFWFQgMiAwIDE2OCA1NzcgMjAxNy0wNi0wOCAxODowODozMw0KQkFSQ09ERS1URVhUIDI0IDAgMTAwDQpWQkFSQ09ERSAxMjggMSAxIDExMiA0MDAgNDAwIDIwMTcwNjA4MDAwMQ0KVlRFWFQgNyAwIDM2OCAzNzYgMjAxNzA2MDgwMDAxDQpCQVJDT0RFLVRFWFQgT0ZGDQpURVhUIDQgMCAxMjggMzIwIMirsr8NClRFWFQgNCAwIDU5IDU4INXjva3Nqc/nytC5q8u+zPW5/brFzt7Qp9C70LvQuw0KU0VUTUFHIDIgMg0KVEVYVCA0IDAgMTA0IDI0OCBRMDAxDQpURVhUIDIgMCAxODYgNDUxIDEwDQpGT1JNDQpQUklOVA0K'),



      value: wx.base64ToArrayBuffer(content),
      // value: wx.base64ToArrayBuffer(that.data.value),
      success: function (res) {
        console.log('writeBLECharacteristicValue success', res.errMsg)

        that.setData({
          errMsg: '正在发送消息',
          bool: true,
        })


        if (count < 3) {
          count++;
          switch (count) {
            case 1:
              content = ticket_2_encode;
              that.printData();
              break;
            case 2:
              content = ticket_3_encode;
              that.printData();
              break;
            case 3:
              content = ticket_4_encode;
              that.printData();
              break;

          }
          console.log("循环了" + count + "次！");
        } else {
          content = ticket_1_encode;
          count = 0;
        }


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
