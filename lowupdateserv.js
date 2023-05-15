/** @param {NS} ns */
export async function main(ns) {
	if (ns.serverExists("wserv-24") == true) {
		var secram = ns.getServerMaxRam("wserv-24")
		var pserv = ns.getPurchasedServers()
		var hram = secram / ns.getScriptRam("hlow.js")
		var gram = secram / ns.getScriptRam("glow.js")
		var wram = secram / ns.getScriptRam("wlow.js")
		for (let i = 0; i < pserv.length; ++i) {
			ns.killall(pserv[i])
		}
		for (let i = 0; i < 8; ++i) {
			ns.rm("hlow.js", pserv[i])
			ns.scp("hlow.js", pserv[i])
			ns.rm("tlist.js", pserv[i])
			ns.scp("tlist.js", pserv[i])
			ns.exec("hlow.js", pserv[i], Math.floor(hram))
		}
		for (let i = 8; i < 17; ++i) {
			ns.rm("glow.js", pserv[i])
			ns.scp("glow.js", pserv[i])
			ns.rm("tlist.js", pserv[i])
			ns.scp("tlist.js", pserv[i])
			ns.exec("glow.js", pserv[i], Math.floor(gram))
		}
		for (let i = 17; i < 25; ++i) {
			ns.rm("wlow.js", pserv[i])
			ns.scp("wlow.js", pserv[i])
			ns.rm("tlist.js", pserv[i])
			ns.scp("tlist.js", pserv[i])
			ns.exec("wlow.js", pserv[i], Math.floor(wram))
		}
	}
}
//# sourceURL=home/lowupdserv.js
