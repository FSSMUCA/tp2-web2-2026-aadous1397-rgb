let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

let sousTotal = prix * quantite
console.log("Sous-total :", sousTotal)

let reduction = (codePromo ?? false) && estMembre ? sousTotal * reductionPourcentage / 100 : 0
console.log("Réduction :", reduction)

let total = sousTotal - reduction
console.log("Total final :", total)

if (soldeCompte >= total) {
    console.log("Paiement accepté")
    soldeCompte -= total
} else {
    console.log("Solde insuffisant")
}

console.log("===== RÉCAPITULATIF =====")
console.log("Produit   :", nomProduit)
console.log("Quantité  :", quantite)
console.log("Prix unit.:", prix, "MAD")
console.log("Sous-total:", sousTotal, "MAD")
console.log("Réduction :", reduction, "MAD")
console.log("Total     :", total, "MAD")
console.log("Statut    :", soldeCompte >= 0 ? "Paiement accepté" : "Solde insuffisant")
console.log("Solde     :", soldeCompte, "MAD")
console.log("=========================")

