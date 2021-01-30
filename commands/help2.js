const { MessageEmbed } = require("discord.js");

/*module.exports = {
  name: "help",
  aliases: ["hp"],
  description: "Shows You This Message!",
  execute(message) {  */
    module.exports.run = async (bot, message, args) => {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(`${message.client.user.username} Help`)
      .setDescription("__**Take a look at the commands i have to play music**__")
      .setColor("#FF0000")
      .setTimestamp()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/793513783175413763/798864136195801108/Screenshot_20210113-161015_One_UI_Home.png"
      );
    commands.forEach(cmd => {
      helpEmbed.addField(
        `<:music:798941618136809482> **Az!${cmd.name} ${
          cmd.aliases ? `(${cmd.aliases})` : ""
        }**`,
        `${cmd.description}\n`,
        true
      );
    });
   // helpEmbed.addField(
     // "For support join our server!",
      //"[click here to join our support server](https://discord.gg/kzcwumBhHa)"
   // );

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
    
  module.exports.help = {
  name:"help2",
  aliases: ["h2"]
}

