function changeVocals(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' ||
      str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u') {
      result = result + String.fromCharCode(str[i].charCodeAt(0) + 1);
    }
    else {
      result = result + str[i];
    }
  }
  return result;
}

function reverseWord(str) {
  var result = '';
  for (var i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

function setLowerUpperCase(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      result = result + str[i].toLowerCase();
    }
    else {
      result = result + str[i].toUpperCase();
    }
  }
  return result;
}

function removeSpaces(str) {
  return str.split(' ').join('');
}

function passwordGenerator(name) {
  var result = '';
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter"
  }
  result = changeVocals(name);
  result = setLowerUpperCase(result);
  result = reverseWord(result);
  result = removeSpaces(result);
  return result;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
