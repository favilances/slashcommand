const { Message, Client } = require("discord.js");

module.exports = {
    name: "test",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send(`Slash Commands : /test`);
    },
};
