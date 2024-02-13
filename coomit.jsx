// Replace these values with your actual API credentials
const API_URL = 'https://api.whatsapp.com/send/{kl:202304848}';
const phoneNumber = '<@>{@UserPhone}'; 

function sendMessage() {
    const message = encodeURIComponent("brower/chorme");

   
    const url = `${API_URL}?phone=${phoneNumber}&text=${message}`;

    
    const open = require('open');
    open(url);
}


sendMessage();
