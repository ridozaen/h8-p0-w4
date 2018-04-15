function shoppingTime(memberId, money) {
    var detailShop = {};
    var listPurch = [];
    var changeMoney = money;
    if (!memberId) {
        return "Mohon Maaf, toko X hanya berlaku untuk member saja";
    }
    if (money < 50000) {
        return "Mohon maaf, uang tidak cukup";
    }
    if (changeMoney >= 1500000) {
        listPurch.push("Sepatu Stacattu");
        changeMoney = changeMoney - 1500000;
    }
    if (changeMoney >= 500000) {
        listPurch.push("Baju Zoro");
        changeMoney = changeMoney - 500000;
    }
    if (changeMoney >= 250000) {
        listPurch.push("Baju H&N");
        changeMoney = changeMoney - 250000;
    }
    if (changeMoney >= 175000) {
        listPurch.push("Sweater Uniklooh");
        changeMoney = changeMoney - 175000;
    }
    if (changeMoney >= 50000) {
        listPurch.push("Casing Handphone");
        changeMoney = changeMoney - 50000;
    }

    detailShop.memberId = memberId;
    detailShop.money = money;
    detailShop.listPurchased = listPurch;
    detailShop.changeMoney = changeMoney;
    return detailShop;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
