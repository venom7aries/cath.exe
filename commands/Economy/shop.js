const { Client, Message, MessageEmbed } = require("discord.js");
const util = require("../../util/pagination");
const items = require("../../util/item");
module.exports = {
  name: "shop",
  description: "Check the items from the shop",
  category: "Economy",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const list = items.map((value, index) => {
      return `**${value.item}** — ${value.price.toLocaleString()}${
        client.currency
      }\nID: \`${value.id}\``;
    });
    const c = util.chunk(list, 5).map(x => x.join("\n\n"));
    const embed = new MessageEmbed()
      .setTitle("**cath.exe shop**")
      .setTimestamp()
      .setDescription(c[0])
      .setColor(client.color)
      .setFooter(`Page 1 of ${c.length}`);
    try {
      const msg = await message.channel.send(embed);
      if (list.length > 5) await util.pagination(msg, message.author, c);
    } catch (e) {
      console.log(e);
    }
  },
};