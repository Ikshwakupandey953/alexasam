const Neotro = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('system_stats');

if (Config.LANG == 'EN') {

    Neotro.addCommand({pattern: 'bhelp', fromMe: true, dontaddCommandList:true}, (async (message, match) => {
            
            var image = await axios.get (Config.MENU_LOGO, {responseType: 'arraybuffer'})
       
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*
 *═▣══❖⦁⦁⦁👽⦁⦁⦁❖══▣═*
*🚀Jarvis BASIC Help*

 Jarvis Bot If you are using (Public) mode then you are only running admin commands.
But for others, all the commands except the admin commands are active ...

Use (.Admin) to get the admin command list
Use (.jarvis) to get the complete command list.

*Command: .setvar ALIVE_MESSAGE :( Write what you want)*
Changes the BOT alive message.


*Command: .setvar LANGUAGE: HI / EN*
Translate bot functionality into Hindi or English.


*Command: .setvar PROMOTE_MESSAGE: (Write what you want)*
 Change the message that appears when the addmin is given.


*Command: .setvar DEMOTE_MESSAGE: (Write what you want)*
Change the message that appears when removing admin.


*Command: .setvar BAN_MESSAGE: (Write what you want)*
To change the incoming message when removing someone from the group.


*Command: .setvar WORK_TYPE: public / private*
This allows you to change the way the boat works.


*Command: .setvar MUTE_MESSAGE: (Write what you want)*
Create or modify the message that comes when the group is muted.


*Command: .setvar UNMUTE_MESSAGE: (Write what you want)*
Modify or create the incoming message when the group unmutes

Follow the steps below to modify ALIVE LOGO - WELCOME GIF - BYE GIF

🌀 (01) You first upload the relevant GIF -PHOTO to one of the following tools and get the link

If you want to change the alive picture of Bot, upload your photo to the site below and get the link
https://imgbb.com/
If you use Telegram you can easily put Img on this Bot and get the link🎭 https://t.me/FnTelegraphBot

With this you can change the GIF of the Welcome msg. Upload a GIF to the site below and get the link.
Https: //www.mailboxdrive.com/upload/
If using 🔹telegram🎭 https://t.me/FnTelegraphBot

Now put the link you bought in the required Row in the Heroku Config

Steps
(01) Go to the Settings section of your heroku app ⚙ >> Press ReVeal Config vars then you can get Config Rows ..

What is this Dyno

Free to your Heroku account. Dyno receives 550 hours per month and when it expires a month ago your bot will be inactive. Wait until next month or build a new one.
Use the .dyno command to view dyno

How to turn off 🚀AI SIM?

 .adon off * Use this to deactivate the sim Bot (.bot command)
Ad * adon on * sim bot can be re-turned on by this.

How to convert your account to AI CHAT Bot?

*.Eva on* This enables AI EVA chatbots.
*Eva off* AI Disables the EVA chatbot.
 `}) 

 }));
 }
