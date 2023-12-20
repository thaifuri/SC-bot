global.credits = `🏷️𝙼𝚈 𝙲𝚁𝙴𝙳𝙸𝚃𝚂: Vinz X7\n🏷️𝙼𝚈 𝙾𝚆𝙽𝙴𝚁: ${ownName}\n`
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})