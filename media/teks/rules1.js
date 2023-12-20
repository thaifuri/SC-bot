global.rules = `𝐑𝐔𝐋𝐄𝐒:\n👾 𝐍𝐎 𝐒𝐏𝐀𝐌\n👾 𝐍𝐎 𝐓𝐎𝐗𝐈𝐂\n👾 𝐍𝐎 𝐒𝐄𝐍𝐃 𝐁𝐔𝐆\n👾 𝐍𝐎 𝐒𝐄𝐍𝐃 𝐕𝐈𝐑𝐓𝐄𝐗\n👾 𝐍𝐎 𝐒𝐄𝐍𝐃 𝐋𝐈𝐍𝐊 +𝟏𝟖\n👾 𝐒𝐄𝐍𝐃 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈\n👾 𝐒𝐔𝐁𝐒𝐂𝐑𝐈𝐁𝐄 𝐂𝐑𝐄𝐀𝐓𝐎𝐑\n`
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})