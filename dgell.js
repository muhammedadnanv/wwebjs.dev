/**
 * ==== wwebjs-shell ====
 * Used for quickly testing library features
 * 
 * Running `npm run shell` will start WhatsApp Web with headless=false
 * and then drop you into Node REPL with `client` in its context. 
 */

const repl = require('repl');
const { Client, LocalAuth } = require('./index');

// Function to initialize WhatsApp Web client
async function initializeWhatsAppClient() {
    try {
        // Creating a new WhatsApp Web client
        const client = new Client({
            puppeteer: { headless: false }, 
            authStrategy: new LocalAuth()
        });

        console.log('Initializing...');

        // Initializing the WhatsApp client
        await client.initialize();

        // Event: When QR code is generated, prompt user to scan it
        client.on('qr', () => {
            console.log('Please scan the QR code on the browser.');
        });

        // Event: When client is authenticated successfully
        client.on('authenticated', (session) => {
            console.log('Authentication successful!');
            console.log(JSON.stringify(session));
        });

        // Event: When client is ready
        client.on('ready', () => {
            console.log('WhatsApp Web client is ready.');
            // Starting the REPL shell with WhatsApp client context
            startREPLShell(client);
        });

    } catch (error) {
        console.error('An error occurred while initializing the WhatsApp client:', error);
    }
}

// Function to start REPL shell with WhatsApp client context
function startREPLShell(client) {
    const shell = repl.start('wwebjs> ');
    shell.context.client = client;

    // Event: When REPL shell is exited
    shell.on('exit', async () => {
        console.log('Exiting WhatsApp Web client...');
        await client.destroy();
        console.log('WhatsApp Web client exited.');
        process.exit(); // Exit the process after destroying the client
    });
}

// Calling the function to initialize WhatsApp Web client
initializeWhatsAppClient();
