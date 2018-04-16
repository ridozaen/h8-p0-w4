// fungsi dibawah ini juga bisa pake reduce... 
//function kaliTerusRekursif(angka) {
//     if (angka <= 9){
//         return angka;
//     }
//     var multp = angka.toString().split('').reduce(function(a,b){return a*b;})
//     return kaliTerusRekursif(multp);
//   }

function kaliTerusRekursif(angka) {
    if (angka <= 9){
        return angka;
    }
    var mult = 1;
    for (var i = 0; i < angka.toString().length; i++){
        mult = mult * parseInt(angka.toString()[i]);
    }

    return kaliTerusRekursif(mult);
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6  