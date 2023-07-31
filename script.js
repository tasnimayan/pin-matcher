// Implement random pin generation functionality;

let pin;
let tryCount = 3;

function generatePin(){
  const randomPin = document.getElementById('random-pin');
  
  pin = Math.round(Math.random() * 10000);
  if(pin.length == 4){
    randomPin.value = pin;
  }
  else
    generatePin();
}


function userClick(btnPressed){
  const inputField = document.getElementById('user-input');

  if(btnPressed !== 'clear' && btnPressed !== 'undo'){
      inputField.value += btnPressed;
  }
  else if(btnPressed === 'clear'){
    inputField.value = '';
  }
  else if(btnPressed === 'undo'){
    inputField.value = inputField.value.substring(0,inputField.value.length -1);
  }
}

function pinMatcher(){
  const userInput = document.getElementById('user-input');
  let inputPin = parseInt(userInput.value);
  
  if(pin === inputPin){
    document.getElementById('pinMatched').style.display = "block";
    document.getElementById('pinNotMatched').style.display = "none";
    userInput.value = '';
  }
  else{
    document.getElementById('pinNotMatched').style.display = "block";
    document.getElementById('pinMatched').style.display = "none";
    userInput.value = '';
    --tryCount;
    document.getElementsByClassName('action-left')[0].innerHTML = tryCount+' try left';
    if(tryCount == 0)
      document.getElementById('submit').disabled = true;
  }
}

