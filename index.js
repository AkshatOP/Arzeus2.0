const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const db = require('quick.db')

const googleTTS = require('google-tts-api')
const translate = require("@k3rn31p4nic/google-translate-api")

/*const express = require('express');

const app = express();

if (Number(process.version.slice(1).split(".")[0]) < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(3000);
setInterval(() => {
  http.get(`http://arzeus2.glitch.me/`);
}, 280000);*/


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

  bot.on("ready", ready => {
bot.user.setActivity(`ARZEUS 2.0 || Az!help`, {

type: "STREAMING",

url: "https://www.youtube.com/channel/UCF8EBnJskNhd-JON7D4CgpA"})

    .then(presence => console.log(`${presence.game ? presence.game.none : 'YOUR BOT IS READY ! xD'}`))

    .catch(console.error);
 console.log(`${bot.user.username} is online on ${bot.guilds.size} servers! made by AK`);

});

  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = "Az!"
    let messageArray = message.content.split(" ");
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    if (bot.commands.has(cmd)) {
      commandfile = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    commandfile = bot.commands.get(bot.aliases.get(cmd));
  }
  
      if (!message.content.startsWith(prefix)) return;

          
  try {
    commandfile.run(bot, message, args);
  
  } catch (e) {
  }}
  )


bot.on("message", message => {
   if (message.content === `<@!804254260308082719>`) {
      const embed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setTitle(`${bot.user.username}`)
    .setDescription(`Hello trainer! This is official bot of server ArZeus 2.0 . My prefix is **Az!**. You can type **Az!help** to view bot commands. In case of any error then DM <@721675303486750730>`)
    .setFooter(`Requested by ${message.author.username} `)
    .setTimestamp()
      
    return  message.channel.send(embed)
   }
});

/*bot.on('message', async (message) => {
         // if (message.author.bot || !message.guild) return;
         // let prefix = 'Az.';
         // if (message.content.startsWith(prefix)) {
         // let messageArray = message.content.slice(prefix.length).split(" ");
         // let command = messageArray[0];
         // let args = messageArray.slice(1);
         // let commandFile = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command));
          //if (commandFile) commandFile.run(bot, message, args, Discord, fs)
         // } else {
          //let check = bot.db.get(`check_${message.guild.id}`)
           let check = db.get(`check_${message.guild.id}`)
          if (check) {
    let fetch = require('node-fetch')
      fetch(`https://api.shadeoxide.gq/api/chatbot?message=${encodeURIComponent(message.content)}&name=TalkBot&gender=female&user=${message.author.id}&age=69`)
        .then(res => res.json())
        .then(async data => {
          let lang = db.get(`language_${message.guild.id}`) || "english"
          let translated = await translate(data.message, { to: lang });
          let langcode = db.get(`languagecode_${message.guild.id}`) || "en-US"
          message.member.voice.channel.join().then(conn => {
            console.log(translated.text)
            googleTTS(translated.text, langcode, 1)
              .then((url) => {
                conn.play(url)
              })
              .catch((err) => {
                console.error(err.stack);//.stack);
              });
          })
        })
  }
  }
  )*/



bot.login(`ODA0MjU0MjYwMzA4MDgyNzE5.YBJqJQ.epfykVhCbeDOoiidP9fx5bupH0s`);
