console.log("script running");

// Fix these querySelectors so that they each select the correct element.
const englishTile = document.querySelector("#English");
const spanishTile = document.querySelector("#Spanish");
const chineseTile = document.querySelector("#Chinese");
const tagalogTile = document.querySelector("#Tagalog");
const vietnameseTile = document.querySelector("#Vietnamese");
const arabicTile = document.querySelector("#Arabic");
const frenchTile = document.querySelector("#French");
const koreanTile = document.querySelector("#Korean");
const russianTile = document.querySelector("#Russian");
const germanTile = document.querySelector("#German");
const hindiTile = document.querySelector("#Hindi");
const italianTile = document.querySelector("#Italian");
const congratsTile = document.querySelector("#conMess");
const origTile = document.querySelector("#origBanner")
const inputTile = document.querySelector("#inputBar")
const inputCongratsTile = document.querySelector("#inputCongrats")

// console.log(englishTile);
// console.log(spanishTile);
// console.log(chineseTile);
// console.log(tagalogTile);
// console.log(vietnameseTile);
// console.log(arabicTile);
// console.log(frenchTile);
// console.log(koreanTile);
// console.log(russianTile);

// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");

console.log(inputField);
console.log(inputField.value);

//Keeping track of how many guesses the user got right
let correct_guesses = 0;

inputField.addEventListener("change", e => {
  console.log(inputField.value);
  if (inputField.value.toUpperCase() == "ENGLISH") {
    englishTile.classList.remove("hidden");
    correct_guesses++;
    //console.log(correct_guesses);
  } else if (inputField.value.toUpperCase() == "SPANISH") {
    spanishTile.classList.remove("hidden");
    correct_guesses++;
    //console.log(correct_guesses);
  } else if (inputField.value.toUpperCase() == "CHINESE") {
    chineseTile.classList.remove("hidden");
    correct_guesses++;
    //console.log(correct_guesses);
  } else if (inputField.value.toUpperCase() == "TAGALOG") {
    tagalogTile.classList.remove("hidden");
    correct_guesses++;
    //console.log(correct_guesses);
  } else if (inputField.value.toUpperCase() == "VIETNAMESE") {
    vietnameseTile.classList.remove("hidden");
    correct_guesses++;
    //console.log(correct_guesses);
  } else if (inputField.value.toUpperCase() == "ARABIC") {
    arabicTile.classList.remove("hidden");
    correct_guesses++;
    //console.log(correct_guesses);
  } else if (inputField.value.toUpperCase() == "FRENCH") {
    frenchTile.classList.remove("hidden");
    correct_guesses++;
    //console.log(correct_guesses);
  } else if (inputField.value.toUpperCase() == "KOREAN") {
    koreanTile.classList.remove("hidden");
    correct_guesses++;
    //console.log(correct_guesses);
  } else if (inputField.value.toUpperCase() == "RUSSIAN") {
    russianTile.classList.remove("hidden");
    correct_guesses++;
    //console.log(correct_guesses);
  } else if (inputField.value.toUpperCase() == "GERMAN") {
    germanTile.classList.remove("hidden");
    correct_guesses++;
    //console.log(correct_guesses);
  } else if (inputField.value.toUpperCase() == "HINDI") {
    hindiTile.classList.remove("hidden");
    correct_guesses++;
    //console.log(correct_guesses);
  } else if (inputField.value.toUpperCase() == "ITALIAN") {
    italianTile.classList.remove("hidden");
    correct_guesses++;
    //console.log(correct_guesses);
  }
  inputField.value = "";
  if (correct_guesses === 12){
    congratsTile.classList.remove("hidden");
    origTile.classList.add("hidden");
    inputCongratsTile.classList.remove("hidden");
    inputTile.classList.add("hidden");
  }
})

//put all items in array first
//then create for loop that runs thru array checking if user guess equals any of the items in array