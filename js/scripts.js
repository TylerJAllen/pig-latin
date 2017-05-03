//Business Logic
// var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];

//turns a string to an array
var stringToArray = function(input) {
  return input.split("");
}

//turns an array to a string
var arrayToString = function(input) {
  return input.join("");
}

//determines if first letter is a vowel
var isItAVowel = function(input) {
  if (vowels.includes(input[0]) === true) {
    return true;
  }
  else {
    return false;
  }
}

//moves consonant(s) to end and remove consonant(s) at beginning
var moveConsonants = function(input) {
  alert("before loop 1");
  for(var index = 0; vowels.includes(input[index]) === false; index += 1) {
    alert ("in loop 1");
    input.push(input[index]);
  }
  alert("after loop 1, before loop 2");

  for(var index = 0; vowels.includes(input[index]) === false; index += 0) {
    alert ("in loop 2");
    input.shift(input[index]);
  }
  alert("after loop 2");


  return input;
}


//Pig Latin function (calls upon smaller functions above)
var pigLatin = function(input) {
  input = stringToArray(input);

  //if single-letter word is a vowel
  if (isItAVowel(input) === true && input.length === 1) {
    alert("single");
    input.push('w', 'a', 'y');
    return input;
  }
  //else if multi-world letter begins with vowel
  else if (isItAVowel(input) === true && input.length > 1) {
    alert("multi");
    input.push('w', 'a', 'y');
    return input;
  }
  //else if single-letter word is a consonant
  else if (isItAVowel(input) === false && input.length === 1) {
    input.push('a', 'y');
    return input;
  }
  //else if multi-letter word begins with a consonant
  else if (isItAVowel(input) === false && input.length > 1) {
    input = moveConsonants(input);

    input.push('a', 'y');
    return input;
  }
  else {
    return input;
  }

}


//User Interface Logic
$(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#english").val();
    var result = pigLatin(userInput);
    $("#result").text(result);
  });
});
