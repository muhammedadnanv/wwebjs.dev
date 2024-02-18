// whatsapp-bot.js
const qrcode = require('qrcode-terminal');
const { Client, MessageMedia } = require('whatsapp-web.js');

// Function to initialize the WhatsApp bot
function initializeBot() {
    const client = new Client();

    // Display QR code to authenticate
    client.on('qr', qr => {
        qrcode.generate(qr, { small: true });
    });

    // Client is ready
    client.on('ready', () => {
        console.log('Client is ready!');
    });

    // Respond to different message types
    client.on('message', async message => {
        const body = message.body.toLowerCase();
        switch (body) {
            // Add your command cases here
            case 'hi':
                await message.reply('Hello!');
                break;
            case 'image':
                await sendImage(message, 'https://example.com/image.jpg');
                break;
            // Add more cases as needed
            default:
                // Handle other messages or do nothing
                break;
        }
    });

    // Initialize the client
    client.initialize();
}

// Function to send image
async function sendImage(message, imageUrl) {
    const media = await MessageMedia.fromUrl(imageUrl);
    await client.sendMessage(message.from, media);
}

module.exports = { initializeBot };
