//index.js
//获取应用实例
var app = getApp();
var str = "! 0 200 200 640 1\r\n" +
  "BOX 0 0 544 168 2\r\n" +
  "BOX 0 168 336 440 2\r\n" +
  "BOX 336 168 544 440 2\r\n" +
  "BOX 0 440 544 640 2\r\n" +
  "TEXT 4 0 10 10 韵 达\r\n" +
  "TEXT 2 0 338 138 车牌号：沪APX806\r\n" +
  "TEXT 2 0 56 451 您的前面有      辆车在等候，请耐心等待！\r\n" +
  "TEXT 2 0 72 513 请妥善保管本凭条，过号无效，谢谢\r\n" +
  "TEXT 2 0 168 577 2017- 06 - 08 18:08:33\r\n" +
  "VBARCODE 128 1 0 100 400 400 123456789\r\n" +
  "TEXT 4 0 128 320 全部\r\n" +
  "TEXT 4 0 59 58 浙江桐乡市公司\r\n" +
  "SETMAG 2 2\r\n" +
  "TEXT 4 0 104 248 Q001\r\n" +
  "TEXT 2 0 186 451 10\r\n" +
  "PRINT\r\n";

var fun_base64_2 = require('../../utils/base64_2.js');
var base64_2_obj = new fun_base64_2.Base64();
//加密
var base64_2_encode = base64_2_obj.encode(str);
//解密
var base64_2_decode = base64_2_obj.decode(base64_2_encode);
console.log('decode=', base64_2_decode)

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.contact'),
    status: '',
    name: '',
    connectedDeviceId: '',
    services: '',
    deviceId:'',
    serviceId:'',
    characteristicId:'',
    characteristics: '',
    devices: '',
    errMsg: '使用过程中请用户保持开启蓝牙',
    bool: false,
    state: '未连接',
    value:''

  },
  onLoad: function (options) {
    // console.log(options.value)
    console.log(base64_2_obj.decode(options.value))
    this.setData({
      value:options.value
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
          status: res.available ? '可用' : '不可用',
        })
      },
      fail: function () {
        status: '蓝牙未开启，请开启手机蓝牙'
      }
    })
    wx.getBluetoothDevices({
      success: function (res) {
        var devicesArray = [];
        var j = 0;
        for (var i = 0; i < res.devices.length; i++) {
          if (res.devices[i].name.substring(0, 3) === "MPL"){
            devicesArray[j] = res.devices[i];
            j++;
          }
          
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

  
  //发送打印内容
  writeBLECharacteristicValue: function () {
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

      // value: wx.base64ToArrayBuffer(str_base64_encode1 + "yc/N+A==" + str_base64_encode2 + "yc/N+A==" + str_base64_encode3),
      // value: wx.base64ToArrayBuffer(base64_2_encode),
      value: wx.base64ToArrayBuffer(that.data.value),
      success: function (res) {
        console.log('writeBLECharacteristicValue success', res.errMsg)

        that.setData({
          errMsg: '正在发送消息',
          bool: true
        })
        //延迟2秒才执行function的内容
        setTimeout(function () {
          that.setData({
            bool: false,
            errMsg: '消息发送完成'
          });
          that.update();
        }, 2000)
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
