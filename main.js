// letters

const letters = 'abcdefghijklmnopqrstuvwxyz'

// get array from letters
 let letsresArray = Array.from(letters);

//  select lettres container

let lettersContainer = document.querySelector(".letters")

// genrate letters 
letsresArray.forEach(letter => {
    // create span 
    let span = document.createElement("span");
    // create letters yext node
    let theLetter = document.createTextNode(letter)

    // append the letter to span
    span.appendChild(theLetter)

    // add class on sapn
    span.className = "letter-box";

    // append span to the letters containers

    lettersContainer.appendChild(span)
});

// object of word + categories 
const words = { 
    programming:["php" , "javascript" , "go" , "scala" , "r", "mysql" , "python"],
    movies:["prestige" , "inceptio" , "parastige" , "interstaller" , "whiplash" , "memento" , "coco" , "up"],
    people:["albert" , "mo salah" , "ibrahime" , "adel" , "osama" , "elzero"],
    countries:["syria" , "palestine" , "yemen" , "egypt" , "bahrain" , "qatar"],
}

// get rondome property 

let allKeys = Object.keys(words);

// random number depenfd on keys length
let rondomPropNumber =Math.floor(Math.random() *allKeys.length);

// category
let rondompropName = allKeys[rondomPropNumber]

// category words 
let rondomePropValue = words[rondompropName]

// random number depenfd on words
let rondomeValueNumber = Math.floor(Math.random() *rondomePropValue.length)

// the chosen words
let rondomeVlaueValue = rondomePropValue[rondomeValueNumber];

// set category info

document.querySelector(".gane-info .category span").innerHTML = rondompropName;

// select letters guess element 
let lettersGuessContainer = document.querySelector(".letters-guess")

// convert chosen woed to array
let letterAndSpace = Array.from(rondomeVlaueValue);

// create spans depend on woed 
letterAndSpace.forEach( letters =>{
    // crtate empty span
    let emtySpan = document.createElement("span");

    if(letters == " "){
         // Add cals to the span 
    emtySpan.className = "with-space"
    }
    // append span to the guess container
    lettersGuessContainer.appendChild(emtySpan)
})

// select guess spans 
let guessSpans = document.querySelectorAll(".letters-guess span")

let wrongAttemts = 0;

// select the draw element 
let theDraw = document.querySelector(".hangman-draw");

// handle clicking on letters 
document.addEventListener("click" ,(e) =>{

// set the chose starus 
let theStatus =false; 

    if(e.target.className === "letter-box"){

        e.target.classList.add("clicked")

        // get clicked  letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        // the chosen word
        let theChosenWord = Array.from(rondomeVlaueValue.toLowerCase())

        // console.log(letterAndSpace)   // the chosen word

        letterAndSpace.forEach((wordLetter , wordIndex) =>{
            // if the clicked letter equal to one of the chosen word letters 
            if(theClickedLetter == wordLetter){
                // set status to correct 
                theStatus = true;

                // loop on guess spans 
                guessSpans.forEach((span , spanIndex) =>{

                    if(wordIndex === spanIndex){
                        span.innerHTML = wordLetter
                    }
                });

            }
        })
        // outside loop 
    //   if letter is wromg
    if(theStatus !== true){
        // increes the wrong attempts
        wrongAttemts++;

        // add class wrong on the  draw element 
        theDraw.classList.add(`wron-${wrongAttemts}`)

        // play fail sound 
        document.getElementById("fail").play();
        if (wrongAttemts ===8){
            endGame();
            lettersContainer.classList.add("finished")
        }

    }else{
         // play success sound 
         document.getElementById("success").play();
    }
    }
})
// end game function
function endGame(){
    // create popup div
    let div = document.createElement("div")

    // create text 
    let divText = document.createTextNode(`game over , the word is ${rondomeVlaueValue}`)

    // append text to div
    div.appendChild(divText);

    // add class on div 
    div.className = `popup`

    // apped to the body 
    document.body.appendChild(div)

}
