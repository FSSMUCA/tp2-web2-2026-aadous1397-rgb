console.log("\n===== EXERCICE 4 =====")

let pairs = [
    [0,""],
    [0,"0"],
    [0,false],
    ["",false],
    [null,undefined],
    [null,false],
    [NaN,NaN],
    [1,"1"],
    [" \t\n ",0]
]

let diffCount = 0

pairs.forEach(p=>{
    let eq = p[0] == p[1]
    let strict = p[0] === p[1]

    if(eq !== strict) diffCount++

    console.log(`${String(p[0])} == ${String(p[1])} -> ${eq} | ${String(p[0])} === ${String(p[1])} -> ${strict}`)
})

console.log("---")
console.log(`${diffCount} paire(s) où == et === donnent des résultats différents`)
