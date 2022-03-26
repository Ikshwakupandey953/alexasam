const Neotro = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

Neotro.addCommand({pattern: 'menu', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

// send a list message!

    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    const rows = [

        {title: 'Check Alive', description: ".alive", rowId:" rowid1"},

        {title: 'Comman Help', description: ".jarvis", rowId:"rowid2"},

        {title: 'Full Help', description: ".help", rowId:" rowid3"},

        {title: 'ᴏᴡɴᴇʀ', description: "💝ᴏᴡɴᴇʀ\n╭───𒆜𝙊𝙒𝙉𝙀𝙍𒆜\n│💙 Ikshwaku Pandey╰───────────────𒈒\n\n ", rowId:" rowid4"},

        {title: 'ʟɪsᴛ', description: "list of all commands.\n\n\n🌀.menu\n\n🔮 *Button message you can select option*\n\n🌀 .xmedia \n🔮  *It is a plugin with more than 25 media tools.*\n\n🌀 .ownercmnd \n🔮  *set of commands for bot user or sudo*\n\n🌀 .codtts \n🔮 *language code to change the voice in .tts & also for .trt translation*\n\n🌀 .adan \n🔮  *Finds prayer time.*\n*⌨️ Eg:- : .prayer <city>*\n\n🌀 .rename \n🔮 *[objectObject]*\n\n 🌀 .print \n🔮  *Prints the inside of the file on the server.*\n\n🌀 .bashmedia \n🔮  *Sends audio, video and photos inside theserver.*\n*⌨️Eg:- : video.mp4 && media/gif/pic.mp4*.\n\n🌀 .addserver \n🔮  ```Uploads image, audio or video to the server.``` \n\n🌀 .term1 \n🔮 ```Allows to run the command on the server's shell.```\n\n 🌀 .findvid \n🔮  ```Shows the technical information of the replied video.```\n\n🌀 .pm \n🔮  ```Sends a private message to the replied person.```\n\n🌀 .pmsend \n🔮 ```Sends a private voice message to the respondent.```\n\n🌀 .anime \n🔮```randomanimeimage```\n\🌀 .apkmod\n\n🌀 .fatp\n\n🌀 .ttp \n🔮 ```Converts text to plain painting.``` \n\n🌀 .attp\n🔮 ```Adds rainbow effect to the text as a sticker.``` \n\n🌀 .bgm\n 🔮  ```turn on and turn off bgm.\n* -bot owner command``` \n*⌨️ Eg:- : ```.bgm on / off```*\n\n🌀 .carbon\n🔮 ```It sends carbon picture```\n\n 🌀 .bgm 🔮 ```change reply message BGM mode```\n* *⌨️ Eg:- :* ```.bgm one / two```*\n\n🌀 .mp3\n🔮 ```Converts video to sound.```\n\n 🌀 .photo\n🔮 ```Converts the sticker to a photo.```\n\n 🌀 .mp4\n🔮  ```Converts animated stickers to video.```\n\n 🌀 .dict \n🔮 ```Use it as a dictionary.\n*Eg: .dict en_US;lead For supporting languages send *.lngcode*``` \n\n🌀 .git\n🔮  ```It sends high resolution wallpapers.```\n\n welcomen🌀 .welcome\n🔮 ```It sets the welcome message. If you leave it blank it shows the welcome message.```\n\n🌀 .goodbye\n🔮 ```Sets the goodbye message. If you leave blank, it show's the goodbye message.```\n\n 🌀 .antilink \n🔮  ```Activates the Antilink tool.``` \n*⌨️ Eg:- : ```.antilink on / off```*\n\n🌀 .moretxt\n🔮 ```more txtit commands``` \n\n🌀 .ffire \n🔮  ```add your text to random freefire logo```\n\n 🌀 .emo \n🔮 ```emoji to png```\n\n 🌀 .insta \n🔮  ```Downloads Image/Video From Instagram```\n\n🌀 .news\n\n 🌀 .notes\n🔮 ```Shows all your existing notes.```\n\n 🌀 .save \n🔮  ```Reply a message and type .save or just use .save <Your note> without replying```\n\n 🌀 .deleteNotes\n🔮  ```Deletes *all* your saved notes.```\n\n 🌀 .owner\n🔮  ```shows the detail of bot owner``` \n\n🌀 .jid \n🔮 ```Giving user's JID.``` \n\n🌀 .random \n🔮 ```word image```\n\n 🌀 .brdmore \n🔮  ```add readmore before your text```\n\n 🌀 .rdmore \n🔮  ```add readmore before your text```\n\n 🌀 .removebg \n🔮```Removes the background of the photos.```\n\n 🌀 .warn \n🔮 ```Sends reports to group admins.``` \n\n🌀 .scan \n🔮  ```Checks whether the entered number is registered on WhatApp.``` \n\n🌀 .trt \n🔮 ```It translates with Google Translate. You must reply any message.``` \n*⌨️ Eg:- :* ```.trt tr it (From Turkish to Italian)```*\n\n🌀 .detectlang\n🔮 ```Guess the language of the replied message.```\n\n 🌀 .currency\n\n🌀 .tts \n🔮 ```It converts text to sound.```\n\n 🌀 .song \n🔮  ```Uploads the song you wrote.```\n\n 🌀 .video \n🔮  ```Downloads video from YouTube.```\n\n🌀 .sing \n🔮  ```It sings song that you have written``` \n\n🌀 .song \n🔮 ```Uploads the song you wrote for ios users.```\n\n 🌀 .wiki \n🔮 ```Searches query on Wikipedia.```\n\n🌀 .img \n 🔮 ```Searches for related pics on Google.``` \n\n🌀 .github \n 🔮  ```Collects github information from the given username.\n*⌨️ Example: .github phaticusthiccy```*\n\n 🌀 .lyric \n🔮  ```Finds the lyrics of the song.```\n\n🌀 .covid \n🔮 ```Shows the daily and overall covid table of more than 15 countries.```\n\n 🌀 .sweather \n🔮  ```Gives you the weekly interpretations of space weather observations provided by the Space Weather Research Center (SWRC) for a p.```\n\n 🌀 .compliment \n🔮  ```It sends complimentry sentenses``` \n\n🌀 .hmod  \n🔮 ```Finds mod apps from happymod```\n\n 🌀 .insult \n🔮  ```It sends insulted words``` \n\n🌀 .movie \n🔮  ```Shows movie info.```\n\n 🌀 .joke \n🔮  ```It sends random jokes``` \n\n🌀 .vava \n🔮  ```Chat with Pinky.\n*Use .molu<message>```*\n\n 🌀 .owner\n🔮  ```shows the detail of bot owner```\n\n 🌀 .quote \n🔮 ```It shares famous quotes```\n\n 🌀 .ss \n🔮 ```Takes a screenshot from the page in the given link.```\n\n 🌀 .setvar\n🔮 ```It sends high resolution wallpapers.```\n\n 🌀 .show \n🔮  ```Get info related to tv series and shows```\n\n 🌀 .ig \n🔮 ```Fetches user informations from instagram```\n\n 🌀 .animesay \n🔮  ```It writes the text inside the banner the anime girl is holding```\n\n🌀 .changesay \n🔮```Turns the text into the change my mind poster.```\n\n🌀 .trumpsay \n```Converts the text to Trump's tweet.```\n\n 🌀 .bgm \n🔮 ```turn on and turn off bgm. -bot owner command``` \n* *⌨️ Eg:- :* ```.bgm on / off```*\n\n🌀 .autosticker \n🔮  ```turn on and turn off bgm. -bot owner command``` \n**⌨️ Eg:- :* ```.sticker on / off```*\n\n🌀 .sudo \n🔮  ```changes sudo numbers``` \n* *⌨️ Eg:- :* ```.sudo *your number*```*\n\n🌀 .caption \n🔮 ```changes all captions``` \n* *⌨️ Eg:- :* ```.caption *Made by JulieMwol*```*\n\n🌀 .handlers \n```changes handlers``` \n**⌨️ Eg:- :* ```.handler ^[.!] ```*\n\n🌀 .botname \n🔮  ```change your bot name``` \n* *⌨️ Eg:- :* ```.botname *name* ```*\n\n🌀 .theri  \n🔮 ```change your theri commands``` \n*⌨️ Eg:- :*```.theri command,command```*\n\n🌀 .sticker \n🔮 ```It converts your replied photo or video to sticker.```\n\n 🌀 .ffpack \n🔮 ```Free Fire logo maker``` \n\n🌀 .ffpack \n🔮 ```Free Fire logo maker```\n\n 🌀 .alive \n🔮 ```Does bot work?``` \n\n🌀 .sysd \n🔮  ```Shows the system properties.```\n\n 🌀 .tagadmin \n🔮  ```Tags group admins.``` \n\n🌀 .txtit \n🔮  ```Shows text to image tools withunlimitedaccess.```\n\n🌀 .antibadword \n🔮  ```turn on & off anti-badword To remove members when they use badwords```\n*⌨Eg:- :*```.antibadword on / off```*\n\n🌀 .a \n🔮 ```Converts audio to sound recording.```\n\n🌀 .unvoice\n```Converts audio to sound recording.```\n\n 🌀 .update \n🔮  ```Checks the update.```\n\n 🌀 .update now \n🔮  ```It makes updates.``` \n\n🌀 .wallpaper \n🔮  ```It sends high resolution wallpapers.```\n\n 🌀 .wame \n🔮 ```Get a link to the user chat.```\n\n🌀 .weather \n🔮  ```Shows the weather.```\n\n🌀 .speedtest \n🔮  ```Measures Download and Upload speed.```\n\n 🌀 .ping \n🔮  ```Measures your ping.``` \n\n🌀 .short \n🔮  ```Shorten the long link.```\n\n 🌀 .calc \n🔮  ```Performs simple math operations.```\n\n🌀 .whois \n🔮 ```Displays metadata data of group or person.```\n\n  ", rowId:" rowid5"}

       ]

       

       const sections = [{title: " Jarvis by Ikshwaku ", rows: rows}]

       

       const button = {

        buttonText: '𝗠𝗘𝗡𝗨',

        description: "Thanks for using bot",

        sections: sections,

        listType: 1

       }

       

       await message.client.sendMessage(message.jid, button, MessageType.listMessage, { mimetype: Mimetype.listMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 99999, status: 200, thumbnail: fs.readFileSync('./photo/ikshwaku.png'), surface: 200, message: Config.BOT, orderTitle: Config.BOT, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/ikshwaku.png')}}}});

    

    }));
