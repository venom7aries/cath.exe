const client = require("../index");
const { MessageEmbed } = require("discord.js");
const db = require("../models/guilds");
const config = require("../config.json");
client.on("guildCreate", guild => {
  client.ServerLog.send(
    new MessageEmbed()
      .setTitle("New Server")
      .addField("Server Info", [
        `**>Server Name**: \n${guild.name}`,
        `**>Server ID**: \n${guild.id}`,
        `**>Server Member Count**: \n${guild.memberCount}`,
      ])
      .addField("Owner Info", [
        `**>Owner Tag**: \n${guild.owner.user.tag}`,
        `**>Owner ID**: \n${guild.owner.id}`,
      ])
      .setFooter(
        `${client.user.username} Currently in ${client.guilds.cache.size} servers`
      )
      .setTimestamp()
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .setColor("GREEN")
  );
  const newdb = new db({
    Guild: guild.id,
    Prefix: config.prefix,
  });
  newdb.save();
});