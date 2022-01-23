/** @param {NS} ns **/
export async function main(ns) {
	const server = ns.args[0]
	const ttw = ns.getWeakenTime(server)
	const ttg = ns.getGrowTime(server)
	const d = 200
	const n = Math.ceil((ttw-ttg)/d-1)

}
