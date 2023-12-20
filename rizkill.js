global.d = new Date()
global.calender = d.toLocaleDateString('id')

global.prefa = ['','!','.',',','🐤','🗿']
global.ownNumb = "di sini masukin nomer lu" //<== no lu ya
global.gclu = "di sini masukin link gc/grub lu" //seterah
global.ownName = "Vinz X7" //<== nama lu
global.outh = "Vinz X7" //sterah
global.wame = ""
global.botname = "↼↳𐀂𝚇᪵𝚇᪰𝚃 𝚃᪲𝙴𝙰᪱𝙼 𝙱𝙾᪴𝚃𝚉𐀂↲⇁" //seterah tpi kalau di ganti jdi jelek
global.wlcm = []
global.wlcmm = []

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*Owner*_',
    author: 'Feature Only for _*Author*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your limit has run out, Wait at 12 at night',
    error: '*!!!Feature Error!!!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity", //Ini Buat Yg Lu Add Premium
    free: 60, //Buat Gratisan Yo Jangan Di Ganti" Ya
}
//----------------------------------//


global.autOwn = "628561482368" //Masukin Nomer Lu Biar Nomer Lu Bisa Gunain Addprem
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})