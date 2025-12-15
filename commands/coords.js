    module.exports = (bot,username) => {
        const pos = bot.entity.position;
        bot.chat(`/msg ${username} My location is X: ${Math.floor(pos.x)}, Y: ${Math.floor(pos.y)}, Z: ${Math.floor(pos.z)}`);
    }