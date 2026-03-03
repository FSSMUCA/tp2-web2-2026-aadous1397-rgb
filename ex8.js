let nomU = "   Fatima   "
let ageU = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

let nomCorrige = nomU.trim() || "Inconnu"
let ageCorrige = parseInt(ageU)
let emailValide = email.includes("@") && email.split("@")[1].includes(".")
let scoreCorrige = parseInt(scoreJeu) || 0
let adminCorrige = estAdmin === "true"
let connexion = derniereConnexion ?? "Jamais connecté"
let nbConn = Number(nombreConnexions)

console.log("===== RAPPORT UTILISATEUR =====")
console.log(`nom              : "${nomCorrige}"`)
console.log(`age              : ${ageCorrige} (${Number.isNaN(ageCorrige) || ageCorrige<=0 ? "invalide" : "valide"})`)
console.log(`email            : "${email}" (${emailValide ? "valide" : "invalide"})`)
console.log(`scoreJeu         : ${scoreCorrige}`)
console.log(`estAdmin         : ${adminCorrige}`)
console.log(`derniereConnexion: "${connexion}"`)
console.log(`nombreConnexions : ${nbConn===0 ? "Aucune connexion" : nbConn}`)
console.log("================================")