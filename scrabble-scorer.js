const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		    }
      }
	  }
  return letterPoints;
  }

function initialPrompt() {
  let word = input.question("Let's play some scrabble!\n\nEnter a word to score:");
  
   return word;
};

function simpleScore(word) {
  word = word.toUpperCase();
  let simpScore = 0;
    for (let i = 0; i < word.length; i++){
      simpScore += 1;
    }
return simpScore;
}

function vowelBonusScore(word) {
	word = word.toLowerCase();
	let vowelBonus = 0;
    let vowels = ("aeiou");
      for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])){
        vowelBonus += 3;
          } else {
          vowelBonus += 1}
	  }
  return vowelBonus;
}

function scrabbleScore(word){
  word = word.toLowerCase();
	let newScrabbleScore = 0;
    for (let i = 0; i <= word.length; i++) {
 
	    for (item in newPointStructure) {
      if (item === (word[i])) {
			newScrabbleScore = newScrabbleScore + newPointStructure[item];
		  }
    }
	}
  return newScrabbleScore;
}
  
const scoringAlgorithms = [
  
  {name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScore
  },
  {name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore
  },
  {name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: scrabbleScore}
  ];

  function scorerPrompt(word) {

      let algorithm = input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\n\nEnter 0, 1, or 2:");
  

        if (algorithm === '0') {console.log(`Score for '${word}'' :`, scoringAlgorithms[0].scoringFunction(word));}
          if (algorithm === '1') {console.log(`Score for '${word}'' :`, scoringAlgorithms[1].scoringFunction(word));}
            if (algorithm === '2') {console.log(`Score for '${word}'' :`, scoringAlgorithms[2].scoringFunction(word));}
  
  return algorithm;
}

let newPointStructure = {}

function transform() {

  for (pointValue in oldPointStructure){
    pointValue = Number(pointValue);
      for (let letterValue of oldPointStructure[pointValue]){
        letterValue = letterValue.toLowerCase();
          newPointStructure[letterValue] = pointValue;
        }
}
return newPointStructure;
}

newPointStructure = transform(oldPointStructure);

function runProgram(){ 
   let word = initialPrompt();  
    
     let algorithm = scorerPrompt(word);
     
   }
  



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

