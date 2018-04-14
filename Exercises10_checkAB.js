function checkAB(str) {
    var isAb = false;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a' && str[i + 4] === 'b') {
            isAb = true;
            break;
        }
        if (str[i] === 'b' && str[i + 4] === 'a') {
            isAb = true;
            break;
        }
    }
    return isAb;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
