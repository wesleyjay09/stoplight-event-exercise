var stopButton = document.querySelector('#stopButton');
var slowButton = document.querySelector('#slowButton');
var goButton = document.querySelector('#goButton');
var stopLight = document.querySelector('#stopLight');
var slowLight = document.querySelector('#slowLight');
var goLigth = document.querySelector('#goLight');

stopButton.addEventListener('click', function(){
  if(!stopLight.classList.contains('stop')) {
    stopLight.classList.add('stop')
  } else if (stopLight.classList.contains('stop')) {
      stopLight.classList.remove('stop')
  }
});
slowButton.addEventListener('click', function(){
  if(!slowLight.classList.contains('slow')) {
    slowLight.classList.add('slow')
  } else if (slowLight.classList.contains('slow')) {
      slowLight.classList.remove('slow')
  }
});
goButton.addEventListener('click', function(){
  if(!goLight.classList.contains('go')) {
    goLight.classList.add('go')
  } else if (goLight.classList.contains('go')) {
      goLight.classList.remove('go')
  }
});



