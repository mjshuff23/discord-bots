// Require the necessary discord.js classes
import { Client, GatewayIntentBits } from 'discord.js';

import ready from './listeners/ready';
import interactionCreate from './listeners/interactionCreate';

// Populate environment variables
import * as dotenv from 'dotenv' 
dotenv.config()

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

ready(client);
interactionCreate(client);

// Login to Discord with your client's token
client.login(token);