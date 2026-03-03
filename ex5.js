let nombres = [0,NaN,Infinity,-Infinity,42,3.14,Number.MAX_SAFE_INTEGER+1,-0]

nombres.forEach(n=>{
    if (Number.isNaN(n)) {
        console.log(`${n} -> INVALIDE`)
    }
    else if (!Number.isFinite(n)) {
        console.log(`${n} -> INFINI`)
    }
    else if (1/n === -Infinity) {
        console.log(`${n} -> ZERO NEGATIF`)
    }
    else if (Number.isInteger(n) && Number.isSafeInteger(n)) {
        console.log(`${n} -> ENTIER SUR`)
    }
    else if (Number.isInteger(n) && !Number.isSafeInteger(n)) {
        console.log(`${n} -> ENTIER HORS LIMITES`)
    }
    else {
        console.log(`${n} -> DECIMAL`)
    }
})
