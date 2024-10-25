const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Markos",

  sessionName:process.env.SESSION_ID || "SUHAIL_13_25_10_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1LFxuICAgICAgICA5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NixcbiAgICAgICAgNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5LFxuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM0LFxuICAgICAgICA2MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyLFxuICAgICAgICA5NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRrTVlLUkR2Mld4SlBTMDZCcGgxMzNBVlkvaHZ2Rll1endvWjErT3J0TGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJUN2x2d191UnctTW5hTlFsa3UwaFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmNlNjJlMGQtZjA3Mi00M2ExLWI2MDEtOWY4NzM1M2EzZjkzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDEyOCxcbiAgICAgIDExNSxcbiAgICAgIDIzMyxcbiAgICAgIDIxNSxcbiAgICAgIDEwMSxcbiAgICAgIDI0MCxcbiAgICAgIDE0NSxcbiAgICAgIDE2LFxuICAgICAgOTYsXG4gICAgICAxNjYsXG4gICAgICAxNDEsXG4gICAgICAzMCxcbiAgICAgIDE0NSxcbiAgICAgIDE3OSxcbiAgICAgIDE0NixcbiAgICAgIDksXG4gICAgICAyNTIsXG4gICAgICAxMzAsXG4gICAgICAxNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMTU4LFxuICAgICAgNjQsXG4gICAgICAyMjIsXG4gICAgICAyMSxcbiAgICAgIDE4NyxcbiAgICAgIDE3MSxcbiAgICAgIDI0MCxcbiAgICAgIDI0MyxcbiAgICAgIDE4NixcbiAgICAgIDM3LFxuICAgICAgMTUxLFxuICAgICAgODEsXG4gICAgICAxODIsXG4gICAgICA4NCxcbiAgICAgIDE3OSxcbiAgICAgIDU4LFxuICAgICAgMjUzLFxuICAgICAgMjIwLFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFlCTDdDSjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc1OTMyOTgyMToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE1MDc1MzE5MjQ3MDExOjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09UMjRmd0NFTHU0N3JnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicHl1SWtGTENaSFF6cmZEcTBjeVlzY3lhdzV4MDVNZk1yWEVIUTlYNzlVZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1bUliR3JLUmZyS3dsb0dmams2YzVrd1A3Vzg0TnpISHBUb25IenJsajY5L3ZlRGVkRWF2OEhRSjhCaUhQQWQvNjFwS3VNMU9vYVcydld3MlU5eW5DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJob1ZMcWk4dkFxaDZ6eE8rVzhEOTg4MWYzNWRONHgwWE9ZTU5CSjRMS210K0ZKQjFta3Z2c3ovZGc5NGI0MnJINkgyTjQ4WStMYThmazdLOUVEQW1pUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NTkzMjk4MjE6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTg2MjcxOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
