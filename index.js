// minecraft-helper-bot / index.js
// Minimal PatchFest Starter Bot

require('dotenv').config();
const mineflayer = require('mineflayer');
const pathfinder = require('mineflayer-pathfinder');

bot.loadPlugin(pathfinder);
bot.activeTask = null;

// Create the bot instance
const bot = mineflayer.createBot({
  host: process.env.MC_HOST || "localhost",     // Server IP
  port: process.env.MC_PORT ? parseInt(process.env.MC_PORT) : 25565,
  username: process.env.MC_USERNAME || "PatchFestBot" // Bot username
});

// Bot events
bot.once("spawn", () => {
  console.log("🤖 Bot successfully spawned into the world!");
  bot.chat("Bot ready! Type .help to see commands.");
});

// Basic chat command listener
bot.on("chat", (username, message) => {

  if (username === bot.username) return; // ignore itself

  if (message === ".hello") {
    bot.chat(`Hello ${username}! I am your helper bot 🤝`);
  }
  if (message === ".stop") {
    if (!bot.activeTask) {
      bot.pathfinder.setGoal(null);
      bot.clearControlStates();
      bot.chat("Task stopped!🛑")
    }
  }
});
