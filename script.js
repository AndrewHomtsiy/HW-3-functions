const getMaxDigit = getNumber => {
  const number = getNumber.toString();
  return Math.max(...number)
}


function maxPow(x, y) {
  let result = x;
  for (let i = 1; i < y; i++) {
    result *= x;
  }
  return result;
}

console.log(maxPow(2, 3));

  
 function randomPassword(password = 8) {
      let randpass = '';
      for (let i = 0; i < password; i++) {
        randpass += Math.round(Math.random() * 9);
      }
      return randpass;
    }

 function nameUpdate(name){
    let newName = name.toLowerCase().slice(0);
  
    return newName[0].toUpperCase() + newName.slice(1)
  }


  function calcCash(bank, sum) {
    let sumCalc = bank - (bank / 100) * sum;
    return sumCalc;
  }
  

  function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
  }
  console.log(getRandomArbitrary(1, 10));


  function unique_char(string) {
    var unique = '';
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        for (var j = i+1; j < string.length; j++) {
            if (string[i] == string[j]) {
                count++;
                unique += string[i];
            }
        }
    }
    return count;
}

document.writeln (`Функція №1 будь-яке число та виводить найбільшу цифру в цьому числі: ${getMaxDigit(020)} <br>,
Функція №2 яка визначає ступінь числа: ${maxPow(2,3)} <br>
Функція №3 випадковий пароль: ${randomPassword(10)} <br>
Функція №4 випадкове число: ${getRandomArbitrary(1, 10)} <br>
Функція №5 перша буква завжди з великої літери: ${nameUpdate("aNdriy")} <br>
Функція №6 скільки разів повторюється буква:${unique_char('andriyan')}`);



