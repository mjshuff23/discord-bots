// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');

// Populate environment variables
require('dotenv').config();

// Grab the token from the environment variables
const token = process.env.TOKEN;

// Create a new client instance
const client = new Client({ 
  // Intents also define which events Discord should send to your bot, and you 
  //  may wish to enable more than just the minimum
  
  // GatewayIntentBits.Guilds intents option ensures that the caches for guilds,
  //  channels and roles are populated and available for internal use.
  intents: [GatewayIntentBits.Guilds] 
});

// When the client is ready, run this code (only once)
client.once('ready', () => console.log('Ready!!!!'));

// Login to Discord with your client's token
client.login(token);