/** @param {NS} ns */
export function fResult(ns) {
    const slist = ["n00dles", "nectar-net", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "max-hardware", "iron-gym", "zer0", "CSEC", "silver-helix", "omega-net", "phantasy", "johnson-ortho", "avmnite-02h", "crush-fitness", "the-hub", "computek", "I.I.I.I", "rothman-uni", "netlink", "catalyst", "summit-uni", "millenium-fitness", "lexo-corp", "syscore", "aevum-police", "unitalife", "univ-energy", "global-pharm", "zb-def", "alpha-ent", "snap-fitness", "nova-med", "run4theh111z", "applied-energetics", ".", "darkweb", "zb-institute", "zeus-med", "solaris", "defcomm", "deltaone", "icarus", "omnia", "aerocorp", "galactic-cyber", "infocomm", "taiyang-digital", "megacorp", "ecorp", "powerhouse-fitness", "fulcrumassets", "clarkinc", "4sigma", "The-Cave", "nwo", "b-and-a", "helios", "blade", "kuai-gong", "microdyne", "vitalife", "stormtech", "titan-labs"]
    const hlevels = []
    //append to hlvl the server names and the hlvl required
    for (let i = 0; i < slist.length; ++i) {
        const lev = (ns.getServerRequiredHackingLevel(slist[i]))
        const mon = (ns.getServerMoneyAvailable(slist[i]))
        hlevels.push(slist[i])
        hlevels.push(lev)
        hlevels.push(mon)
    }
    const fResult = []
    for (let i = 0; i < hlevels.length; i += 3) {
        fResult.push([hlevels[i], hlevels[i + 1], hlevels[i + 2]])
    }
    //sort arrays by level...lowest to highest, also sorts only the second row, so the names are still in order. (as in the names are still on the left side)
    fResult.sort((a,b)=>b[2] - a[2])
    console.log(fResult)
    return fResult
}
//# sourceURL=home/mlist.js
