function hitungHuruf(kata) {
    var arrKata = kata.split(' ');
    for (var i = 0; i < arrKata.length; i++) {
        var count = 0;
        var countMax = 0;
        for (var j = 0; j < arrKata[i].length; j++) {
            count = arrKata[i].split(arrKata[i][j]).length - 1;
            if (count > countMax) {
                countMax = count;
            }
        }
        if (countMax > 1) {
            return arrKata[i];
        }
    }
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
