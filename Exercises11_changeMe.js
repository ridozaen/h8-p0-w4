function changeMe(arr) {
    var person = {};
    var currentYear = new Date();
    if (arr.length !== 0) {
        for (var i = 0; i < arr.length; i++) {
            person.firstName = arr[i][0];
            person.lastName = arr[i][1];
            person.gender = arr[i][2];
            if ((!arr[i][3]) || arr[i][3] > currentYear.getFullYear()) {
                person.age = "Invalid Birth Year";
            } else {
                person.age = currentYear.getFullYear() - arr[i][3];
            }
            console.log(i + 1 + ". " + person.firstName + " " + person.lastName + ":");
            console.log(person);
        }
    }
    else {
        console.log('""');
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""