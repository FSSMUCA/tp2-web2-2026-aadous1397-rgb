console.log("\n===== EXERCICE 2 =====")

let valeurs = [0,1,"","0",null,undefined,NaN,false,[],{}]

for (let i = 0; i < valeurs.length; i++) {
    let val = valeurs[i]
    let affichage = val === "" ? "(chaine vide)" : String(val)
    console.log(`${affichage} -> ${val ? "truthy" : "falsy"}`)
}
