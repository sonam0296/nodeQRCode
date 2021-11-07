const QRCode = require('qrcode')

const generateQrcode  = async text => {
    try {
        console.log(await QRCode.toDataURL(text));
    } catch (error) {
        console.log(error);
    }
}

generateQrcode("http:yahoo.com/");