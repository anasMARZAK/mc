const mineflayer = require('mineflayer')
const navigatePlugin = require('mineflayer-navigate')(mineflayer);
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');


const bot = mineflayer.createBot({
  host: 'yourassinohio.aternos.me', // minecraft server ip
  username: 'afk', // minecraft username
  //password: '12345678' // minecraft password, comment out if you want to log into online-mode=false servers
  port: 35245,                // only set if you need a port that isn't 25565
  // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // auth: 'mojang'              // only set if you need microsoft auth, then set this to 'microsoft'
})
bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
  


