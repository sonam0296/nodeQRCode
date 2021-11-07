const QRCode = require('qrcode')

const generateQrcode  = async text => {
    try {
        await QRCode.toFile( './google-qr-code.png' ,text);
    } catch (error) {
        console.log(error);
    }
}

generateQrcode("https://www.google.com/");