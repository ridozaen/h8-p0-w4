function angkaPrima(angka) {
    var prima = true;
    var count = 2;
    if (angka < 2){
        return false;
    }
    while (count < angka) {
        if (angka % count === 0) {
            prima = false;
            break;
        }
        count++;
    }
    return prima;
}

// TEST CASES
console.log(angkaPrima(1)); // false
console.log(angkaPrima(2)); // true
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false  