const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_19_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTRC20_AddressgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTRC20_AddressgNTRC20_AddressgMjA3LFxuICAgICAgICAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTRC20_AddressyMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTRC20_AddressgNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTRC20_AddressuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTRC20_AddressgIDE0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTRC20_AddressgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICA4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDczLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTRC20_AddressgMjEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTRC20_AddressgMTRC20_AddressxMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTRC20_AddressxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTRC20_AddressgIDE2OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTRC20_AddressgMTRC20_AddressgIDE3NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTRC20_AddressgMjI1LFxuICAgICAgICAxNSxcbiAgICAgICAgOTRC20_Address4OSxcbiAgICAgICAgOTRC20_Address0MSxcbiAgICAgICAgMTRC20_AddressgMTRC20_AddressuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTRC20_AddressgIDEzNyxcbiAgICAgICAgMTRC20_AddressgIDkyLFxuICAgICAgICAyMTRC20_Address2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTRC20_AddressgNSxcbiAgICAgICAgNTRC20_AddressxMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTRC20_AddressgIDE4OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTRC20_AddressgIDE4NSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTRC20_AddressgIDE1OSxcbiAgICAgICAgMixcbiAgICAgICAgNjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTRC20_AddressgIDI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTRC20_AddressgIDE2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTRC20_AddressgMTRC20_AddresscbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTRC20_AddressgNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM2LFxuICAgICAgICA1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTRC20_AddressgODQsXG4gICAgICAgIDc0LFxuICAgICAgICA4OCxcbiAgICAgICAgN"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
