# project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## Project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});



```

## using switch
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    let e1 = e.target.id
    switch(e1){
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white' : body.style.backgroundColor = 'white';
      break;
      case 'blue' : body.style.backgroundColor = 'blue';
      break;
      case 'yellow' : body.style.backgroundColor = 'yellow';
      break;
    }
  })
})
```

## project 2 solution
```javascript
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `please give a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `please give a valid weight ${weight}`;
  }else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //show result
    result.innerHTML = `<span>${bmi}</span>`
    if(weight < 18.6){
      result.innerHTML = `under weight ${bmi}`;
    }else if(weight > 18.6 && weight < 24.9){
      result.innerHTML = `Normal Range ${bmi}`;
    }else{
      result.innerHTML = `Overweight ${bmi}`;
    }
  }
})
```

## project 3 solution

```javascript
const clock = document.getElementById('clock');

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

## project 4 solution
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const startOver = document.querySelector('.resultParas');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number');
  }else if(guess < 1){
    alert('please enter a number greater than 1');
  }else if(guess > 100){
    alert('please enter a number less than 100');
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      cleanupGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }else{
      cleanupGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`you guessed it right`);
    endGame()
  }else if(guess > randomNumber){
    displayMessage(`Number is Too high`)
  }else if(guess < randomNumber){
    displayMessage(`Number is Too low`)
  }
}

function cleanupGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
   userInput.value = '';
   userInput.setAttribute('disabled','')
   p.classList.add('button');
   p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
   startOver.appendChild(p)
   playGame = false
   newGame()
}

function newGame(){
   const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click', function(){
     randomNumber = parseInt(Math.random() * 100 + 1)
     prevGuess = [];
     numGuess = 1;
     guessSlot.innerHTML = '';
     remaining.innerHTML = `${11 - numGuess} `;
     userInput.removeAttribute('disabled')
     startOver.removeChild(p);
     playGame = true;
   })
}


```
## project 5 solution
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
})
```
## project 6 solution
```javascript

const randomColor = function(){
const hex = '0123456789ABCDEF';
let color = '#';
for(let i =0;i<6;i++){
    color += hex[Math.floor(Math.random() *16)]
}
return color;
}
let intervalId;
const startChangingColor = function(){
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
}

function changeBgColor(){
  document.body.style.backgroundColor = randomColor();
};


const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
```