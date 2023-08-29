function kaprekarNumbers(p, q) {
    var result = ""
    while (p <= q) {
        var d = p.toString().length
        var nPowerTwo = p * p
        nPowerTwo = nPowerTwo.toString()
        var R = nPowerTwo.substring(nPowerTwo.length - d)
        var L = nPowerTwo.substring(0, nPowerTwo.length - d)
        R = parseInt(R)
        L = parseInt(L)
        if ((R + L) === p) {
            result += p.toString()
            result += " "
        } else if (p === 1 ) {
            result += p.toString()
            result += " "
        }
        p++
    }
    if (result == ""){
        result = "INVALID RANGE"
    }
    console.log(result)
}

var p = 400
var q = 700
kaprekarNumbers(p, q)