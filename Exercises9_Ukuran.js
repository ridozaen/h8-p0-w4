function tukarBesarKecil(kalimat) {
    var resKalimat = '';
    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat.charCodeAt(i) >= 65 && kalimat.charCodeAt(i) <= 90) {
            // console.log ('lower ' + kalimat.charCodeAt(i) + " " + kalimat[i]);
            resKalimat = resKalimat + kalimat[i].toLowerCase()
        } else {
            // console.log ('upper ' + kalimat.charCodeAt(i)+ " " + kalimat[i]);
            resKalimat = resKalimat + kalimat[i].toUpperCase();
        }
    }
    return resKalimat;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
