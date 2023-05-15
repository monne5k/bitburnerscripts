/** @param { NS } ns */
export async function main(ns) {
	let port0 = ["n00dles", "nectar-net", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi"]
	let port1 = ["max-hardware", "iron-gym", "zer0", "CSEC"]
	let port2 = ["silver-helix", "omega-net", "phantasy", "johnson-ortho", "avmnite-02h", "crush-fitness", "the-hub"]
	let port3 = ["computek", "I.I.I.I", "rothman-uni", "netlink", "catalyst", "summit-uni", "millenium-fitness"]
	let port4 = ["lexo-corp", "syscore", "aevum-police", "unitalife", "univ-energy", "global-pharm", "zb-def", "alpha-ent", "snap-fitness", "nova-med", "run4theh111z", "applied-energetics", ".",]
	let port5 = ["darkweb", "zb-institute", "zeus-med", "solaris", "defcomm", "deltaone", "icarus", "omnia", "aerocorp", "galactic-cyber", "infocomm", "taiyang-digital", "megacorp", "ecorp", "powerhouse-fitness", "fulcrumassets", "clarkinc", "4sigma", "The-Cave", "nwo", "b-and-a", "helios", "blade", "kuai-gong", "microdyne", "vitalife", "stormtech", "titan-labs"]
	//ns.tail(ns.getScriptName())
	for (let i = 0; i < port0.length;) {
		for (let i = 0; i < port0.length; ++i) {
			if (ns.isRunning("hack.js", port0[i]) == true) {
				ns.killall(port0[i])
			}
			if (ns.fileExists("hack.js", port0[i]) == true) {
				ns.rm("hack.js", port0[i])
			}
			if (ns.fileExists("hack.js", port0[i]) == false) {
				ns.scp("hack.js", port0[i])
			}

		}
		ns.nuke(port0[i])
		++i
	}
	for (let i = 0; i < port1.length; ++i) {
		for (let i = 0; i < port1.length; ++i) {
			if (ns.isRunning("hack.js", port1[i]) == true) {
				ns.killall(port1[i])
			}
			if (ns.fileExists("hack.js", port1[i]) == true) {
				ns.rm("hack.js", port1[i])
			}
			if (ns.fileExists("hack.js", port1[i]) == false) {
				ns.scp("hack.js", port1[i])
			}
			if (ns.fileExists("brutessh.exe") == true) {
				ns.brutessh(port1[i])
				ns.nuke(port1[i])
			}
		}
	}
	for (let i = 0; i < port2.length; ++i) {
		for (let i = 0; i < port2.length; ++i) {
			if (ns.isRunning("hack.js", port2[i]) == true) {
				ns.killall(port2[i])
			}
			if (ns.fileExists("hack.js", port2[i]) == true) {
				ns.rm("hack.js", port2[i])
			}
			if (ns.fileExists("hack.js", port2[i]) == false) {
				ns.scp("hack.js", port2[i])
			}
			if (ns.fileExists("ftpcrack.exe") == true) {
				ns.brutessh(port2[i])
				ns.ftpcrack(port2[i])
				ns.nuke(port2[i])
			}
		}
	}
	for (let i = 0; i < port3.length; ++i) {
		for (let i = 0; i < port3.length; ++i) {
			if (ns.isRunning("hack.js", port3[i]) == true) {
				ns.killall(port3[i])
			}
			if (ns.fileExists("hack.js", port3[i]) == true) {
				ns.rm("hack.js", port3[i])
			}
			if (ns.fileExists("hack.js", port3[i]) == false) {
				ns.scp("hack.js", port3[i])
			}
			if (ns.fileExists("relaysmtp.exe") == true) {
				ns.brutessh(port3[i])
				ns.ftpcrack(port3[i])
				ns.relaysmtp(port3[i])
				ns.nuke(port3[i])
			}
		}
	}
	for (let i = 0; i < port4.length; ++i) {
		for (let i = 0; i < port4.length; ++i) {
			if (ns.isRunning("hack.js", port4[i]) == true) {
				ns.killall(port4[i])
			}
			if (ns.fileExists("hack.js", port4[i]) == true) {
				ns.rm("hack.js", port4[i])
			}
			if (ns.fileExists("hack.js", port4[i]) == false) {
				ns.scp("hack.js", port4[i])
			}
			if (ns.fileExists("httpworm.exe") == true) {
				ns.brutessh(port4[i])
				ns.ftpcrack(port4[i])
				ns.relaysmtp(port4[i])
				ns.httpworm(port4[i])
				ns.nuke(port4[i])
			}
		}
	}
	for (let i = 0; i < port5.length; ++i) {
		for (let i = 0; i < port5.length; ++i) {
			if (ns.isRunning("hack.js", port5[i]) == true) {
				ns.killall(port5[i])
			}
			if (ns.fileExists("hack.js", port5[i]) == true) {
				ns.rm("hack.js", port5[i])
			}
			if (ns.fileExists("hack.js", port5[i]) == false) {
				ns.scp("hack.js", port5[i])
			}
			if (ns.fileExists("sqlinject.exe") == true) {
				ns.brutessh(port5[i])
				ns.ftpcrack(port5[i])
				ns.relaysmtp(port5[i])
				ns.httpworm(port5[i])
				ns.sqlinject(port5[i])
				ns.nuke(port5[i])
			}
			if (ns.fileExists("sqlinject.exe") == true) {
				if (ns.serverExists("w0r1d_d43m0n")) {
					ns.brutessh("w0r1d_d43m0n")
					ns.ftpcrack("w0r1d_d43m0n")
					ns.relaysmtp("w0r1d_d43m0n")
					ns.httpworm("w0r1d_d43m0n")
					ns.sqlinject("w0r1d_d43m0n")
					ns.nuke("w0r1d_d43m0n")
				}
			}
		}
	}
	if (ns.isRunning("loop.script", "home") == false) {
		ns.exec("loop.script", "home")
	}
	if (ns.isRunning("looper.js", "home") == false) {
		ns.exec("looper.js", "home")
	}
	if (ns.isRunning("servbuy.script", "home") == false) {
		ns.exec("servbuy.script", "home")
	}
	if (ns.isRunning("hohack.js", "home") == false) {
		const threads = (ns.getServerUsedRam("home") / Math.floor(ns.getScriptRam("hohack.js", "home")))
		try { ns.exec("hohack.js", "home", threads * 2) }
		catch(error){
			ns.exec("hohack.js", "home", threads)
		}
	}
	let threadcount = Math.floor(ns.getServerMaxRam("home") * .15)
	if (ns.isRunning("share.js", "home") == true) {
		ns.kill("share.js", "home")
	}
	if (ns.getServerMaxRam("home") >= 64 && ns.getServerUsedRam("home") <= 32) {
		ns.exec("share.js", "home", threadcount)
	}

	//if (ns.getScriptRam("programbuy.script", "home") < ns.getServerMaxRam("home") * .5){
	//	ns.exec("programbuy.script", "home")
	//}
	//if (ns.getServerMoneyAvailable("home") > 1e10) {
	//ns.exec("hnet.script", "home")
	//}
}
//# sourceURL=home/conn.js
