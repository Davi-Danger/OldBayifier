document.addEventListener("DOMContentLoaded", function (event) {
  let button = document.getElementById("button");
  button.addEventListener('click', function () {
    let input = document.getElementById("text");
    let output = document.getElementById("output");

    let ogString = input.value;
    ogString = ogString.toLowerCase();
    ogString = ogString.trim();
    ogString = ogString.replace(/[^a-z0-9]/gmi, " ").replace(/\s+/g, " ");

    function getNewString () {
      let string = ogString;
      if(string.startsWith("bay") || string.startsWith("boy") || string.startsWith("bae") || string.startsWith("bow")){
        return `old bay${string.substr(3)}`;
      }
      let letter = string.charAt(0);
      if (!(/^[aeiou]$/i).test(letter)) { //if the first letter is not a vowel
        if((/^[lrwy]$/i).test(letter)){
          return `old b${ogString}`;
        }
        else{
          if(letter == "b"){
            return `old bay${string.substr(1)}`;
          }
          else{
            if(string.startsWith("th") || string.startsWith("sh") || string.startsWith("ch")){
              return `old b${string.substr(2)}`;
            }
            else{
              return `old b${string.substr(1)}`;
            }
          }
          
        }
      }
      else{ //otherwise, just add "Old b_____"
        return `old b${string}`;
      } 
    };
    newString = getNewString().toUpperCase();
    output.innerText = newString;
  });
});