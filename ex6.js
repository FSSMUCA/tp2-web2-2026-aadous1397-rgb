let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

let vars2 = {nom,age,ville,score,actif}

console.log("Partie A (??)")
for (let key in vars2) {
    console.log(`${key} ?? "valeur par défaut" ->`, vars2[key] ?? "valeur par défaut")
}

console.log("\nPartie B (||)")
for (let key in vars2) {
    console.log(`${key} || "valeur par défaut" ->`, vars2[key] || "valeur par défaut")
}

console.log("\nPartie C")
for (let key in vars2) {
    let res1 = vars2[key] ?? "valeur par défaut"
    let res2 = vars2[key] || "valeur par défaut"
    console.log(`${key} : ?? et || ->`, res1 === res2 ? "même résultat" : "résultat différent")
}
