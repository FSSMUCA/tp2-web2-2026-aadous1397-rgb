console.log("===== EXERCICE 1 =====")

let a = 42
let b = "Bonjour"
let c = true
let d = null
let e
let f = [1, 2, 3]
let g = { nom: "Ali" }
let h = NaN

let vars = [a,b,c,d,e,f,g,h]

vars.forEach(v => {
    console.log(`${String(v)} -> ${typeof v}`)
})
