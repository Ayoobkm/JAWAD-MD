
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

//add your session id

global.session = "https://khanxmd-pair.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VUa4+qSBD9L/1VcwXkaTLJoqD4wCcosNlsWmiwlZdNg8KN/32DM3Nnknv37iyfmuquqnOqTtV3kGa4QHNUg8F3kBNcQYraI61zBAZgWIYhIqALAkghGADb2KV7bktpyGe4JputU/Y2Qm6zw5tZzSyhr088kYv8HmO+gEcX5OUxxv5vAlpFMp3pG86PG20y2djmZbMknSG/Kr00uDq1RwREjBtHjOkLeLQRISY4jfT8hBJEYDxH9Rpi8jX4rjGP7zajJQqzuGmLIbQ63jXWle15li4WHMXyrvFqn3NY9Wvw10g11p1FYUiNdQwiiQum43B15oJ9OCENPyFSsU8uVcTeolf4BY5SFEwDlFJM6y/XHWu5I98Nd6WveWfJOVJwvG8Dp9JteX9oxFjZ243v8ovGzr4G3MunBhdBa0NY6nqHBKPlqFSoJC4tfJPlaLXxNU1xdO+QfQa+Ju9aufyfukej8TrCpBF6LNnrJK/2lzWr9jtxcPGsjroud1VaQ/PUj/2vwc9yZTM2gzOdybLDFPrRtRxeOfixa2dbLYhvR8PQF8NCcD7Bh7Qkv0M5RWdPa05nISL16diPh53GXJeptzXNsNrO9OtdW/hWfG0CW/DnmRopWiPMkN65Xo1tirRNHZZLia0PPc+Nk6CZuc1Mvb08GV1QPQ3AgH10AUERLiiBFGdpa+M4qQtgUO2QTxB9lhdQ/6CueW53RapmXKfpsNzOTVFVzokhOhWeV6Uq6cjtyGPzBXRBTjIfFQUKDFzQjNQmKgoYoQIM/nx2qiVNUJJRNMMBGACRYVlWEhhZ4IQ/im+3E6QFzPNvKaKgC0KSJSYCA0pK1AVPB1UQdHE0ZARWEfrMSFIkVhAUXWZFTu73ZbGlmLwmtXCCCgqTHAxYSVAEhucU7vFXF6ToTl/107Lus10QYlJQOy3zOIPBu7jeL6HvZ2VKd3Xqj9oDImDAfJgRpTiNipZZmULin3CFRi0PMAhhXKAfhUYEBe9c3pbHKAva/s8NR9zJSwu02NtAP9VmIHE/lyeF7Wvgqa66/Hunb0EXxE9PQeJlhhXYfl9hFan1be2PH5jbFAGiEMcFGIDRQruKmTvRZ/11T3YnE3UTqaNIBR8c3zX7qond0Jon99ooojPeny/8sonzk1JzinBMlpyRR81wG4T80q7ll18EAQMQXhwoC+WF7xu3cY+ZMSNf3MK4f/E2qr5K+yw9xCdsbsuJuK+RnfoltzjTu9gcroT4qZZJU5yN8/6ERPrCOOq9mXl9CrwLAlRhH31Oxh2PR9VeEV6rb+Oddsv5xeVwuXUq/ZbvjruSt1fMZmnO5shqOgd49xzLOu43veXI2YwtSiZMtC1HcByLbH6aKLvYtD3tbZqe0xy/bVH8pnP8/A0xei6lty79ZzdfgbeiYx7dTzHe1ty/rIqhHdl1XvgnaTrlY1dYab4A3dCnFToI5+AkuubNdpyOtjcr8GjVn8eQhhlJwAAUyRGCLiBZ2Up4mobZbzKN1Ol0uHmlHcOCqh9j8YtJk5XXV2uS5QYsTm0f1qx7CluN12qe7yik71MG1PabjGXw+AfzW+mkCAgAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "916235775565,601117508525", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "true", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed By JAWAD MD", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "601117508525", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "ZAYAN_SER", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "🩵", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "true",
ANTIBAD: process.env.ANTIBAD || "true",
BAD_WORDS: process.env.BAD_WORDS || "null, pm, dm, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "ZAYAN_SER", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/uf9nsz.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "true",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "i am ZAYAN_BOT",
CHAT_BOT: process.env.CHAT_BOT || "true", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Kolkata", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
//KHAN MD; 🔥💸💀
