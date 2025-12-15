// minecraft-helper-bot / index.js
// Minimal PatchFest Starter Bot

require('dotenv').config();
const mineflayer = require('mineflayer');
const handleCommands = require('./commands');


// Create the bot instance
const bot = mineflayer.createBot({
  host: process.env.MC_HOST || "localhost",     // Server IP
  port: process.env.MC_PORT ? parseInt(process.env.MC_PORT) : 25565,
  username: process.env.MC_USERNAME || "PatchFestBot" // Bot username
});

// Bot events
bot.once("spawn", () => {
  console.log("🤖 Bot successfully spawned into the world!");
});

bot.once("login", () => {
  console.log(`Bot logged in as ${bot.username}`);
});

// Basic chat command listener
bot.on("chat", (username, message) => {
  if (username === bot.username) return; // ignore itself
  handleCommands(bot,username,message);
});
