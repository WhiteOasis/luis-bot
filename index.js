const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const bot = new Discord.Client();

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity(botconfig.game, {type: "PLAYING"});
    // bot.user.setGame(botconfig.game);
    
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hello`){
        return message.channel.send("Hello!");
    } 

    //HELP COMAND
    if(cmd === `${prefix}help`){
        let icon = bot.user.displayAvatarURL;
        let helpMessage = new Discord.RichEmbed()
        .setDescription("Comandos del Bot:")
        .setColor(botconfig.maincolor)
        .setThumbnail(icon)
        .addField("!serverinfo", "Información acerca del servidor")
        .addField("!help", "Lista de comandos")
        .addField("!luis", "Las frases de Luis! Ahora en tu servidor de confianza!");

        message.reply("Te he enviado un puto mensaje con los comandos, no me molestes mas joder.");
        return message.author.send(helpMessage);
    }
    if(cmd === `${prefix}botinfo`){
        let icon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Descripción!")
        .setImage(icon)
        .setColor(botconfig.maincolor)
        .setThumbnail(icon)
        .addField("Nombre del bot", bot.user.username)
        .addField("Creado en", bot.user.createdAt);
        
        return message.channel.send(botembed);
    }
    if(cmd === `${prefix}serverinfo`){
        let icon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setThumbnail(icon)
        .setColor(botconfig.maincolor)
        .addField("Nombre del servidor", message.guild.name)
        .addField("Creado en", message.guild.createdAt)
        .addField("Te uniste en", message.member.joinedAt)
        .addField("Miembros", message.guild.memberCount);

        return message.channel.send(serverembed);
    }
    if(cmd === `${prefix}luis`){
        var items = Array("Soy main Yasuo, confia en mi", "JODERRRRRRRRRRR", "Reformed", "El fortnite es una mierda", "0/10, ahora comienza el power spike!", "Puto jungla que no gankea");
        var item = items[Math.floor(Math.random()*items.length)];
        message.channel.send(item);
    }
    if(cmd === `${prefix}LuisJuega`){
        var items = Array("Yasuo", "Tryndamere", "Jhin", "Kai`sa", "Rengar", "Kalista", "Draven");
        var item = items[Math.floor(Math.random()*items.length)];
        message.channel.send("Me apetece jugar "+item);
    }
});

bot.login(process.env.BOT_TOKEN);
