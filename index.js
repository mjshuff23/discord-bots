// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');

require('dotenv').config();

const token = process.env.TOKEN;

// Create a new client instance
// GatewayIntentBits.Guilds intents option ensures that the caches for guilds,
//  channels and roles are populated and available for internal use.
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => console.log('Ready!'));

// Login to Discord with your client's token
client.login(token);