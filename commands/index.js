const hello = require("./hello");
const coords = require("./coords");

const commands = {
  hello,
  coords
};

module.exports = (bot, username, message) => {
  if (!message.startsWith(".")) return;

  const commandName = message.slice(1).toLowerCase();
  const command = commands[commandName];

  if (!command) {
    bot.chat("Unknown command. Type .help");
    return;
  }

  command(bot, username);
};
