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