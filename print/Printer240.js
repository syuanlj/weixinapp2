function Printer240() {
  var content = "";
  var mac = '';
  var serv = '';
  var charact = '';
  var base64_2_obj;

  //————————————————————以下为必要参数设置————————————————————————————————————————————————————————————————
  this.setBase64 = function (base64) {
    base64_2_obj = base64;
  }
  this.setMac = function (deviceId) {
    console.log('设备ID：' + deviceId);
    mac = deviceId;
  }
  this.setService = function (serviceId) {
    serv = serviceId;
  }
  this.setCharacteristic = function (characteristicId) {
    charact = characteristicId;
  }
  //————————————————————华——丽——分——割——线——————————————————————————————————————————————————————————

  //————————————————————以下为打印设置函数————————————————————————————————————————————————
  //创建页面 width：宽度/点，height：高度/点，count：数量
  this.createPage = function (width, height, count) {
    var page = "! 0 200 200 " + height + " " + count + "\r\n" + "PAGE-WIDTH " + width + "\r\n";
    content += "! 0 200 200 " + height + " " + count + "\r\n";
    content += "PAGE-WIDTH " + width + "\r\n";
    sendPrintData(page);
  }
  //画线，width：线宽
  this.printLine = function (x0, y0, x1, y1, width) {
    var line = "LINE " + x0 + " " + y0 + " " + x1 + " " + y1 + " " + width + "\r\n"
    sendPrintData(line);
  }
  //画字 font：字体，size：大小，x、y：左上角坐标，t：内容，rotate：旋转或翻转,isBold：是否设置为粗体,haveUnderline：是否带下划线
  this.printText = function (font, size, x, y, t, rotate, isBold, haveUnderline) {

    var str = 'TEXT';
    switch (rotate) {
      case 0:
        str = 'TEXT';
        break;
      case 1:
        str = 'TEXT90';//旋转90度
        break;
      case 2:
        str = 'TEXT180';
        break;
      case 3:
        str = 'TEXT270';
        break;
      case 4:
        str = 'VTEXT';//翻转
        break;
    }
    var text = str + " " + font + " 0 " + x + " " + y + " " + t + "\r\n";
    if (size > 1) {
      sendPrintData('SETMAG ' + size + ' ' + size + '\r\n');
    } else {
      sendPrintData('SETMAG 1 1\r\n');
    }
    if (isBold) {
      sendPrintData('SETBOLD 2\r\n');
      console.log('设置为粗体')
    } else {
      sendPrintData('SETBOLD 0\r\n');
    }
    if (haveUnderline) {
      sendPrintData('UNDERLINE ON\r\n');
    } else {
      sendPrintData('UNDERLINE OFF\r\n');
    }
    sendPrintData(text);
  }
  //画二维码 size：大小，data：内容
  this.printQRCode = function (x, y, size, data) {
    var QRCode = "B QR " + x + " " + y + " M 2 U " + size + "\r\n" +
      "MA," + data + "\r\n" +
      "ENDQR\r\n";
    sendPrintData(QRCode);
  }

  //画一维码 isRotate：旋转90度，type：类型一般为128，width：窄宽度，radio：宽窄比，height：高度，haveText：是否显示内容
  this.printBarCode = function (isRotate, type, width, radio, height, x, y, data, haveText) {
    var barCode = "";
    if (haveText) {
      sendPrintData('BARCODE-TEXT 7 0 5\r\n');
    }
    if (isRotate)
      barCode = "VB " + type + " " + width + " " + radio + " " + height + " " + x + " " + y + " " + data + "\r\n";
    else
      barCode = "B " + type + " " + width + " " + radio + " " + height + " " + x + " " + y + " " + data + "\r\n";
    sendPrintData(barCode);
    if (haveText) {
      sendPrintData('BARCODE-TEXT OFF\r\n');
    }
  }

  //画方框
  this.printBox = function (x0, y0, x1, y1, width) {
    var box = "BOX " + x0 + " " + y0 + " " + x1 + " " + y1 + " " + width + "\r\n"
    sendPrintData(box);
  }
  //画反白线，注：此线可将文字等黑色符号反白
  this.printInverseLine = function (x0, y0, x1, y1, width) {
    var line = "INVERSE-LINE " + x0 + " " + y0 + " " + x1 + " " + y1 + " " + width + "\r\n"
    sendPrintData(line);
  }
  //打印命令，isLabel：是否是标签
  this.printPage = function (isLabel) {
    var print = '';
    if (isLabel) {
      var print = "FORM\r\n" +
        "PRINT\r\n";
    } else {
      var print = "PRINT\r\n";
    }
    sendPrintData(print);
  }
  //————————————————————华——丽——分——割——线——————————————————————————————————————————————————————————

  //——警——告——线——————————以——下——不——能——动—————————————————————————————————————————————————————————
  function sendPrintData(value) {
    var base64_2_encode = base64_2_obj.encode(value);
    // console.log('加密：' + base64_2_encode);
    wx.writeBLECharacteristicValue({
      deviceId: mac,
      serviceId: serv,
      characteristicId: charact,
      value: wx.base64ToArrayBuffer(base64_2_encode),
      success: function (res) {
        console.log("数据发送成功")
      },
      fail: function (res) {
        console.log("数据发送失败")
      },
      complete: function (res) { },
    })
  }
}

module.exports = {
  Printer240: Printer240
}