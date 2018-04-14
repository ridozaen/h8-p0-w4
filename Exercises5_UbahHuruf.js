function ubahHuruf(kata) {
    var nextKata = '';
    for (var i = 0; i < kata.length ; i++){
        nextKata = nextKata + String.fromCharCode(kata[i].charCodeAt(0)+1); 
    }
    return nextKata;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  