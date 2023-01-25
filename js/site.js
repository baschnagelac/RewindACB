//entry point AKA controller 
function getValues() {
    let inputString = document.getElementById('userString').value;

   let reversedString = reverseAString(inputString);
   displayString(reversedString);
}

//logic function
//reverse a string
function reverseAString(userString) {
    let revString = '';
    //reverse the string
    
        for(let i = userString.length - 1; i >= 0; i--) {
            let currentLetter = userString[i];
            revString += currentLetter; //revString += currentLetter //revString += userString[i]
        }
          return revString;
    }
    


// function reverseAStringJS(userString) {
//      return userString.split('').reverse().join('');
    //let userStringArray = userString.split(''); //'hello' => [h, e, l, l, o]
    //let reversedArray = userStringArray.reverse(); // [h, e, l, l, o] => [o, l, l, e, h]
    //let reversedString = reversedArray.join(''); //[o, l, h] => 'olleh'
    //return reversedString;
//}

//view function 
function displayString(revString) {
    document.getElementById('results').textContent = revString;
    document.getElementById('alert').classList.remove('invisible');
}