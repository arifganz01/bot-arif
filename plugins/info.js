let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: HARYADIN
╠➥ Script: @Drawlnag
║
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ Drawl nag
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Indosat : 0858-9618-1301
╠➥ Tsel: 0822-7960-1471
╠➥ Gopay: 082279601471
║
║>Request? Wa.me/6282279601471
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

