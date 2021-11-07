const QRCode = require('qrcode')

const generateQrcode  = async text => {
    try {
        console.log(await QRCode.toString(text, {type: 'terminal'}));
    } catch (error) {
        console.log(error);
    }
}

generateQrcode("https://www.google.com/");
