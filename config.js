const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '2348059540212'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'maxdavid126@gmail.com'
global.github = 'https://github.com/Bladeh4x/BLADE-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "2348059540212"
global.devs = '2348059540212'
global.website = 'https://github.com/Bladeh4x/BLADE-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "BLADEMD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0h5TG4rUGpJSUVxM014c2R3eStOb28vWnlHeHhxK2E5RVpOSkpRclkzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHk5L1gwVjlrL25mVnJrbUEzOEY5UmJlcXYvUVd5RFdjc1Q1NmE3enZtUT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQ2w3TUZCQ3pxSHU3dU5FcS9HMlorMFFMbnJjdzNZTTdoNlpDZ01uK21rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2bmVKN0Z4NnFPUnlYaEZQUnpWZ24rVTZEdmcxQ3JGVHZFUE4ydTljMUV3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9KVUFYcDNwMkk3L0h1dVlzNEhpSGliRFUyRThkaExSdFRpc01sQ0RPRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAxN2l2M29IQ1grUlpRSnlKbDlZeU56MXVBS0g5NG5YcEFNZCtwckl6bnM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJucWhubUw0QlRLdjhRNFZoTXk3L1RJSE5QUHBVZDY1blk4U1BnTFE4dlh3MTdIOXdHSzYwa213SHpVYm5ibi9wcEVVUlJ3SXY2NU1Da2NzdHdPWXNEdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEzOSwiYWR2U2VjcmV0S2V5IjoidFRXWUJBbFVjODV3ZGF5S2tNZHdOK0NhZzBNQUh2dGlrQXdtT2hwSjBYQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MDM5NjA3Mzc1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI4RDU0MDVGQjUwQUY5NzFGRDEyNDgxMDAzNjgyRUM0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDIxMjk1NjZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imt6YWxFQm1MU0pxTXc2LUIxTkxWTlEiLCJwaG9uZUlkIjoiNGFjNjgyMGUtNGU0Yi00MWQ5LWFhOWUtYTY0OTczY2U2OGYzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVrMnBOdDNiMU4zcFYySnpFdDBtZXVQQWFQZz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1c2ZjBqbzk1MmxaTHBCZks3M2JrbFpvWmZFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWJjaDVVR0VKWGYwYXNHR0FvPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIrYUhWUjYybm9CcUNidWNTajdpa3RjWCtUVjBQZFdkbTBFS0lJaHlnUEU0PSIsImFjY291bnRTaWduYXR1cmUiOiJTVmkrQmYvZHVhTVFoRTFCU3V0elk5Rjc5VFdhM2ZvT0tBY0pldTJWb1ZQeVd0QjFsV2RZUFBBR2JLNVFLaGpiVUcrNFAyR1F6ZFlaK0NJUHpQZVZDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL1pQSklNaExkQmpuVC9UMklKNXNhWDZGZWgvNitwc3BpaThEQjFnclNMUnBSVkl1ZXZYN2NNTGIvd0pMcEhVWWpKK1FaZHFlc2JQM0lJWU01b3JhQ0E9PSJ9LCJtZSI6eyJpZCI6IjIzNDgwMzk2MDczNzU6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4bSA6pyx4bSbyoDhtI8gyp/htIfJouG0h8m04bSFIPCdloHwnZaO8J2WlfCdlorwnZaXIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMzk2MDczNzU6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZm1oMVVldHA2QWFnbTduRW8rNHBMWEYvazFkRDNWblp0QkNpQ0ljb0R4TyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMjEyOTU2MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMNjIifQ==",
  botname: process.env.BOT_NAME || '​ᴀꜱᴛʀᴏ ᴍᴅ​',
  ownername: process.env.OWNER_NAME || `ᴀꜱᴛʀᴏ`,
  author: process.env.PACK_AUTHER || 'ᴀꜱᴛʀᴏ',
  packname: process.env.PACK_NAME || "ᴀꜱᴛʀᴏ;ᴍᴅ",
  style: process.env.STYLE || '1',  // put '1' & "2" here to check bot styles
  errorChat: process.env.ERROR_CHAT || '', // put 'chat' here to send error in chat ,where it accures
  read_status: process.env.AUTO_READ_STATUS || 'true',
  save_status: process.env.AUTO_SAVE_STATUS || 'false',

  autoreaction: process.env.AUTO_REACTION || 'false',  //  | 'cmd' | 'true' | 'all' |
  //antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokeyuntillYouPutAnWordHere',
  alwaysonline: process.env.WAPRESENCE || '', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  //antifake : 'null', // process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',   //  | 'false' | 'true' | 
  readcmds: process.env.READ_COMMANDS || 'false',    //  | 'false' | 'true' | 
  HANDLERS: process.env.PREFIX || '/',
  warncount: process.env.WARN_COUNT || '3',
  disablepm: process.env.DISABLE_PM || "true",
  MsgsInLog: process.env.MSGS_IN_LOG || 'true', // "true"  to see messages , "log" to open logs messages , "false" to hide logs messages
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'true',
  // levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',  //  | 'false' | 'true' | 
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',
  //antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  caption: process.env.CAPTION || "```ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ```",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  userImages: process.env.USER_IMAGES || "",// 'https://i.imgur.com/NpA3ZsJ.jpeg,https://telegra.ph/file/d9a63ef4f8110a6d87167.mp4,https://telegra.ph/file/41c41e73c1c5f11bdb1df.mp4,https://telegra.ph/file/acaba47a11c6975248c84.mp4' ,
  // antiDelete: process.env.ANTIDELETE ||  'true' ,
  // antiCallMessage: process.env.ANTICALL_MESSAGE ||  "\`\`\`Hii this is Suhail-Md a Personal Assistant!!\n\n\tSorry for now, we cannot receive calls, whether in a group or personal \n\n if you need help or request features please chat owner\n\n\nPowered by Suhail-Md Chatbot\`\`\`" ,
  VERSION: process.env.VERSION || 'v.1.2.5',
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : 'SUHAIL',
  menu: process.env.MENU || 'Azetc_Md', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'private',
  KOYEB_API: process.env.KOYEB_API || '',

  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY && process.env.DATABASE_URI,

  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || 'c7ba2eb2143e5904569fd7f8363ed886',
  aitts_Voice_Id: process.env.AITTS_ID || '37',
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
