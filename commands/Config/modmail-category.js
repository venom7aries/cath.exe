const schema = require("../../models/modmail");
const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "modmail-category",
  UserPerm: "ADMINISTRATOR",
  description: "Setup modmail category in a server",
  usage: "(Category ID)",
  category: "Config",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (!args.length)
      return client.err(message, "Config", "modmail-category", 0);
    const category = message.guild.channels.cache.find(
      ch => (ch.type = "category" && ch.id == args[0])
    );
    if (!category) return client.err(message, "Config", "modmail-category", 1);
    schema.findOne({ Guild: message.guild.id }, async (err, data) => {
      if (data) {
        data.Category = category.id;
        await schema.findOneAndUpdate({ Guild: message.guild.id }, data);
      } else {
        new schema({
          Guild: message.guild.id,
          Category: category.id,
        }).save();
      }
    });
    return message.channel.send(`**Saved category to ${category.name}**`);
  },
};