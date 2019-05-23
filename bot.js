﻿const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`${prefix}help`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
      message.author.send(`
:robot: *** Bot orders | اوامر بوت *** :robot:
----------------------------------	  
:mega: ``-`` ${prefix}**bc  --> 『 برودكاست الكل 』**
:mega: ``-`` ${prefix}**bco --> 『 برودكاست وان الاين 』**
:mega: ``-`` ${prefix}**bcs --> 『 يرودكاست كرسال عادى 』**
:mega: ``-`` ${prefix}**bca --> 『 برودكاست الى رتب معين 』**
:mega: ``-`` ${prefix}**bce --> 『 برودكاست متعداد بركشن 』**
:mega: ``-`` ${prefix}**inv --> 『 دعوه بوت 』**
:mega: ``-`` ${prefix}**Sup --> 『 دعم الفنى الى بوت 』**
:mega: ``-`` ${prefix}**bot --> 『 معلومات بوت 』**
`);


  }
});

const adminprefix = "！";
const devs = ['564414567946387487']
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'x')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**__${argresult}__تـم تـغـيـر بـلانـيـق الـى🔵**`)
} else
  if (message.content.startsWith(adminprefix + 'xx')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**__${argresult}__تـم تـغـيـر اســم الـى**📝`)
return message.reply("**لايـمـكـن تـغـيـر اسـم الان نـتـظـار سـاعـتـان**:stopwatch: ");
} else
  if (message.content.startsWith(adminprefix + 'xxx')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**__${argresult}__تــم تــغـيــر صــور الـى 📸**`);
      } else    
if (message.content.startsWith(adminprefix + 'xxxx')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**__${argresult}__ تــم تـغــيــر حــالـه الــى 🔴**`)
}
});

client.on("message", async message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
        if(!message.channel.guild) return;
            var args = message.content.split(" ").slice(1).join(" ");
            if(command == "bc") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply(":pencil2: | **يجب عليك كتابة كلمة او جملة لإرسال البرودكاست ...**");
                    }
                        message.channel.send(`هل متاكيد من البرودكاست من رسال بردكاست خاص بك ..؟
						
						\nمحتوى الرسال: \`${args}\``).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ok_hand: | **تم رسال بروكاست** ${message.guild.memberCount} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.forEach(member => {
                                            let bc = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("")
                                            .addField(":triangular_flag_on_post: | **سيرفر**", message.guild.name)
                                            .addField(":incoming_envelope: | **مرسل**", message.author.username)
                                            .addField(":e_mail: | **رسالة**", args);

                                            member.sendEmbed(bc);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send(":x: | **تم الغاء برودكاست ...**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
            if(command == "bco") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send(":x: | **للأسف لا تمتلك صلاحية `ADMINISTRATOR` ..**");
                }
                    if(!args) {
                        return message.reply(":pencil2: | **يجب عليك كتابة كلمة او جملة لإرسال البرودكاست ...**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ok_hand: | **تم رسال بروكاست** ${message.guild.members.filter(r => r.presence.status !== "offline").size} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.filter(r => r.presence.status !== "offline").forEach(member => {
                                            let bco = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("")
                                            .addField(":triangular_flag_on_post: | **سيرفر** : ", message.guild.name)
                                            .addField(":incoming_envelope: | **مرسل** : ", message.author.username)
                                            .addField(":e_mail: | **رسالة** : ", args);

                                            member.sendEmbed(bco);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send(":x: | **تم الغاء برودكاست...**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
});

client.on("message", message => {
    var prefix = "!";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bcs') {
        if (!args[1]) {
    message.channel.send(":pencil2: | ** رجاء اكتب رسال البرودكاست ... **");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle(':outbox_tray: | جاري ارسال رسالتك') 
            .addBlankField(true)
            .addField(':busts_in_silhouette: | عدد الاعضاء المرسل لهم', message.guild.memberCount , true)        
            .addField(':e_mail: | الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });
	
client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "bca")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("** قم بكتابة الرسالة 。。。 :pencil2:** | `！rolebc role message`")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply(":x: | **لا يوجد رتب بهذا اسم**")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(`${codes}`)
            })
            message.channel.send(`:white_check_mark: | **لقد تم ارسال هذه الرسالة الى ** ${message.guild.members.filter(m => m.roles.get(role.id)).size}** عضو**:busts_in_silhouette:`)
        }
    });
	
client.on('message', message => {
if(message.author.bot) return;
if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + 'bce')) {
     let filter = m => m.author.id === message.author.id;
 
 let recembed = new Discord.RichEmbed()
 .setTitle(`${client.user.username}`)
 .setDescription(`
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰
 🎖 | يرسل البرودكاست إلى دور محدد دون تضمين
 
 🏅 | يرسل البرودكاست إلى دور محدد باستخدام التضمين
 
 📭 | يرسل البرودكاست لجميع الأعضاء مع تضمين
 
 📧 | يرسل البرودكاست لجميع الأعضاء دون تضمين
 
 🔵 | يرسل البرودكاست للأعضاء عبر الإنترنت فقط دون تضمين
 
 🔷 | يرسل البرودكاست للأعضاء عبر الإنترنت فقط مع تضمين
 
 ❌ | لإلغاء العملية 
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰`)
 
 message.channel.sendEmbed(recembed).then(msg => { 
     msg.react('🎖')
     .then(() => msg.react('🏅'))
     .then(() => msg.react('📭'))
     .then(() => msg.react('📧'))
     .then(() => msg.react('🔵'))
     .then(() => msg.react('🔷'))
     .then(() => msg.react('❌'))

 
             let embedmsgFilter = (reaction, user) => reaction.emoji.name === '📭' && user.id === message.author.id;
 
             let normalmsgFilter = (reaction, user) => reaction.emoji.name === '📧' && user.id === message.author.id;
 
             let cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
             let onlyroleFilter = (reaction, user) => reaction.emoji.name === '🎖' && user.id === message.author.id;8
 
             let onlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔵' && user.id === message.author.id;8

             let embedonlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔷' && user.id === message.author.id;8

             let embedonlyroleFilter = (reaction, user) => reaction.emoji.name === '🏅' && user.id === message.author.id;8
 
             let embedmsg = msg.createReactionCollector(embedmsgFilter, { time: 0 });
 
             let normalmsg = msg.createReactionCollector(normalmsgFilter, { time: 0 });
     
             let onlyrole = msg.createReactionCollector(onlyroleFilter, { time: 0 });
 
             let embedonlyrole = msg.createReactionCollector(embedonlyroleFilter, { time: 0 });

             let onlineonly = msg.createReactionCollector(onlineonlyFilter, { time: 0 });
                 
             let embedonlineonly = msg.createReactionCollector(embedonlineonlyFilter, { time: 0 });

             let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
 
 embedonlineonly.on('collect', r => {

    let msge;
    message.channel.send(':pencil: **| يرجى الكتابة الآن رسالة لإرسال :pencil2: **').then(msg => {
    
           message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
           .then(collected => {
               collected.first().delete();
               msge = collected.first().content;
               msg.edit(':shield: **| هل انت متاكيد من رسال البرودكاست ? [نعم و لا] الى موافق **').then(msg => {
                 message.channel.awaitMessages(filter, {
                   max: 1,
                   time: 90000,
                   errors: ['time']
                 })
                 .then(collected => {
                   if(collected.first().content === 'نعم') {
   message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
   
   
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: | **برودكاست جديد**`)
           .addField('🔰 **سيرفر** 🔰', message.guild.name)
           .addField('🚩 **مرسل** 🚩', message.author.username)
           .addField('📜 **رسالة** 📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           m.send(`${m}`)
           
       })
   }})
   if(collected.first().content === 'لا') {
   message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: | **برودكاست جديد**`)
           .addField('🔰 **سيرفر** 🔰', message.guild.name)
           .addField('🚩 **مرسل** 🚩', message.author.username)
           .addField('📜 **رسالة** 📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           
       })
   }
                 
   })
               })
           })
       })
 
       
 onlineonly.on('collect', r => {
    let msge;
    message.channel.send(':pencil: **| يرجى الكتابة الآن رسالة لإرسال :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            msge = collected.first().content;
            msg.edit(':shield: **| هل انت متاكيد من رسال البرودكاست ? [نعم و لا] الى موافق **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ['time']
              })
              .then(collected => {

                if(collected.first().content === 'نعم') {
message.channel.send(`**:white_check_mark: تم إرسال الرسالة الأعضاء :loudspeaker:**`);
                

message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`) 
m.send(`${m}`)       
        
    })
}
if(collected.first().content === 'لا') {
message.channel.send(`**:white_check_mark: تم إرسال الرسالة الأعضاء :loudspeaker:**`);
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`) 
                
    })}
})
})
        })
    })
})

 embedmsg.on('collect', r => {
     let msge;
  message.channel.send(':pencil: **| يرجى الكتابة الآن رسالة لإرسال :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
             msg.edit(':shield: **| هل انت متاكيد من رسال البرودكاست ? [نعم و لا] الى موافق **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
                 if(collected.first().content === 'نعم') {
 message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
 
 
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: | **برودكاست جديد**`)
         .addField('🔰** سيرفر **🔰', message.guild.name)
         .addField('🚩 **مرسل** 🚩', message.author.username)
         .addField('📜 **رسالة** 📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         m.send(`${m}`)
         
     })
 }})
 if(collected.first().content === 'لا') {
 message.channel.send(`**:white_check_mark: تم إرسال الرسالة الأعضاء :loudspeaker:**`);
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: | **برودكاست جديد**`)
         .addField('🔰** سيرفر **🔰', message.guild.name)
         .addField('🚩 **مرسل** 🚩', message.author.username)
         .addField('📜 **رسالة** 📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
     })
 }
               
 })
             })
         })
     })
 
 
    
 
 
 
 normalmsg.on('collect', r => {
     let msge;
     message.channel.send(':pencil: **| يرجى الكتابة الآن رسالة لإرسال :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
             msg.edit(':shield: **| هل انت متاكيد من رسال البرودكاست ? [نعم و لا] الى موافق **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'نعم') {
 message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
                 
 
     message.guild.members.forEach(m => {
 m.send(`${msge}`) 
 m.send(`${m}`)       
         
     })
 }
 if(collected.first().content === 'لا') {
 message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
     message.guild.members.forEach(m => {
         m.send(`${msge}`) 
                 
     })}
 })
 })
         })
     })
 })
 
 onlyrole.on('collect', r => {
     let msge;
     let role;
     message.channel.send(':pencil: **| يرجى الكتابة الآن رسالة لإرسال :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
 
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
                 msg.edit(':pencil2: **| الان يرجاء اكتب اسم رتب**').then(msg => {
                 message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
         
         .then(collected => {
             collected.first().delete();
             role = collected.first().content;
                 let rolecheak = message.guild.roles.find('name', `${role}`)
             msg.edit(':shield: **| هل انت متاكيد من رسال البرودكاست ? [نعم و لا] الى موافق **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'نعم') {
 message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
                 
 
             message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
 m.send(`${msge}`) 
 m.send(`${m}`)       
         
     })
 }
 if(collected.first().content === 'لا') {
 message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
         message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
         m.send(`${msge}`) 
                 
     })}
 })
 })
         })
     })
 })
 })
 });
 
 
 
 embedonlyrole.on('collect', r => {
     let msge;
     let role;
     message.channel.send(':pencil: **| يرجى الكتابة الآن رسالة لإرسال :pencil2: **').then(msg => {
  
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
 
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
                 msg.edit(':pencil2: |** الان يرجاء كتب اسم رتب**').then(msg => {
                 message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
         
         .then(collected => {
             collected.first().delete();
             role = collected.first().content;
                 let rolecheak = message.guild.roles.find('name', `${role}`)
             msg.edit(':shield: **| هل انت متاكيد من رسال البرودكاست ? [نعم و لا] الى موافق **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'نعم') {
 message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
                 
 
                     message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: | **برودكاست جديد**`)
         .addField('**🔰 سيرفر 🔰**', message.guild.name)
         .addField('**🚩 مرسل 🚩**', message.author.username)
         .addField('**📜 رسالة 📜**', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
 m.send(`${m}`)       
         
     })
 }
 if(collected.first().content === 'لا') {
 message.channel.send(`**:white_check_mark: | تم إرسال الرسالة الأعضاء :loudspeaker:**`);
 message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: | **برودكاست جديد**`)
         .addField('**🔰 سيرفر 🔰**', message.guild.name)
         .addField('**🚩 مرسل 🚩**', message.author.username)
         .addField('**📜 رسالة 📜**', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
                 
     })}
 })
 })
         })
     })
 })
 })
 })
     cancel.on('collect', r => {
         let cancelembed = new Discord.RichEmbed()
         .setTitle(':x: | **تم الإلغاء بنجاح**')
      message.channel.sendEmbed(cancelembed)
         embedmsg.stop();
         normalmsg.stop();
         onlyrole.stop();
         embedonlyrole.stop();
         embedonlineonly.stop()
         onlineonly.stop()
         cancel.stop();
     })
 })
    }});
	
client.on("message", async message => {
    if(message.content.startsWith(prefix + "inv")) {
        let inv = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setThumbnail(message.author.avatarURL)
            .setTitle("**Press here** | :point_left: ")
            .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=580916581702565889&permissions=1865939393&scope=bot`);
            message.channel.sendEmbed(inv);
    }
});

client.on("message", async message => {
    if(message.content.startsWith(prefix + "Sup")) {
        let Sup = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setThumbnail(message.author.avatarURL)
            .setTitle("**Press here** | :point_left: ")
            .setURL(`https://discord.gg/Z7ySHc`);
            message.channel.sendEmbed(Sup);
    }
});

//////////////////////////الادرة/////////////////////////////

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('!bcx')){
if(!message.author.id === '564414567946387487') return;
message.channel.sendMessage('**جار ارسال الرسالة |:white_check_mark:**')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on("guildCreate", guild => {
    client.channels.get("580971383236853778").send(' ***  BOT Super Broadcast  ***   **الانضمام إلى**   ***[ ' + `${guild.name}` + ' ]***   ,   **  وانر سيرفر  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
    });
    
    client.on("guildDelete", guild => {
    client.channels.get("580971434680123400").send(' ***  BOT Super Broadcast  ***   **غادر من**   ***[ ' + `${guild.name}` + ' ]***   ,   **  وانر سيرفر  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
    });

client.on("message",function(message) {
	var prefix = "!";
    if(message.content.startsWith(prefix + 'bot')) {
        var uptime = client.uptime;
 
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var notCompleted = true;
 
    while (notCompleted) {
 
        if (uptime >= 8.64e+7) {
 
            days++;
            uptime -= 8.64e+7;
 
        } else if (uptime >= 3.6e+6) {
 
            hours++;
            uptime -= 3.6e+6;
 
        } else if (uptime >= 60000) {
 
            minutes++;
            uptime -= 60000;
 
        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;
 
        }
 
        if (uptime < 1000)  notCompleted = false;
 
    }
 
var v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("#6a109d")
  v1.setDescription('***__ انتظر .. جاري الحصول علي البيانات __***')
  v1.setFooter("# | Super Broadcast |")
var heroo = new Discord.RichEmbed()
.setColor('#6a109d')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.setTitle('Super Broadcast')
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=580916581702565889&permissions=8&scope=bot')
.setAuthor(client.user.username,client.user.avatarURL)
.addField("**البرفكس** :",`**[ ${prefix} ]**`,true)
.addField("**السيرفرات** :","**[ "+client.guilds.size+" ]**",true)
.addField("**القنوات** :","**[ "+client.channels.size+" ]**",true)
.addField("**المستخدمين** :","**[ "+client.users.size+" ]**",true)
.addField("**اسم البوت** : ","**[ "+client.user.username+" ]**",true)
.addField("**ايدي البوت **:","**[ "+client.user.id+" ]**",true)
.addField("**الحجم المستخدم** :",`**[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]**`,true)
.addField("**موعد الاقلاع** :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("Super Broadcast");
  message.channel.send({embed:v1}).then(m => {
      setTimeout(() => {
         m.edit({embed:heroo});
      },3000);
  });
}
});

client.on("message", (message) => {
                        if (message.channel.type === "dm") {
                    if (message.author.id === client.user.id) return;
                    let yumz = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle(":mailbox_with_mail: | **⦁⦓ Super Broadcast ⦔⦁**")
                                .addField(`:bust_in_silhouette: | **تم رسال بواسطه **: <@${message.author.id}>`)
                                .setColor("RANDOM")
                                .setThumbnail(message.author.displayAvatarURL)
                                .addField(`:incoming_envelope: | **رسـالـة** : `, `\n\n\`\`\`${message.content}\`\`\``)
                                .setFooter(`Super Broadcast | :beginner:`)
                            client.users.get("564414567946387487").send(yumz)
                        }
            });

client.on('message', msg => {
    if (msg.content === '!help') {
      msg.reply(' | **تم رسال فى الخاص ...** :incoming_envelope:');
    }
  });

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('guildCreate', guild => {
  let support = client.guilds.get('580946996412678162')
  if(support === undefined) return
  let role = support.roles.find(r => r.name == '• Sr » Use bot')
  let member = support.members.get(guild.owner.user.id) 
  if(member) {
    member.addRole(role)
  } else {
    console.log(`**هذا المستخدم ليس في خادم الدعم**`)
  }
})

client.on('message', message => {
    if (message.content.startsWith("<@580916581702565889>"))
    
    message.reply(" :wave: | ** السلام عليكم ورحيم الله وبركه **");
    
      



});

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`:gift_heart: | ** شكرا الك على اضافه بوت الى سيرفرك ** `)
        guild.owner.send(embed)
  });
  
  client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var Dark = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('<:Super:580989761540456449> | **يوجد رسائل جديد فى خاص بوت ...**')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`من عند ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
    client.channels.get("580992192986742817").send({embed:Dark});
    }
});

client.on("guildCreate", () => {
    client.user.setActivity(`${prefix}help ${client.guilds.size}: Server ${client.users.size}: User`, {type:'WATCHING'});
});
client.on("guildDelete", () => {
    client.user.setActivity(`${prefix}help ${client.guilds.size}: Server ${client.users.size}: User`, {type:'WATCHING'});
});

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "• Sr » Member");
   member.addRole (role);
  
})

client.login(process.env.BOT_TOKEN);
