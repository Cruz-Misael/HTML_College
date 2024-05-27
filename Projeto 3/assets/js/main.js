function scope (){

  const clock = document.querySelector('.clock');
  const start = document.querySelector('.start');
  const pause = document.querySelector('.pause');
  const reset = document.querySelector('.reset');

  let sec = 0;
  let timer;

  start.addEventListener('click', function(e){
    e.preventDefault();
    clearInterval(timer);
    clock.classList.remove('stoped'); // add or remove an css class
    startClock();
  });

  pause.addEventListener('click', function(e){
    e.preventDefault();
    clearInterval(timer);
    clock.classList.add('stoped'); // add or remove an css class
  });


  reset.addEventListener('click', function(e){
    e.preventDefault();
    clearInterval(timer);
    clock.classList.remove('stoped'); // add or remove an css class
    clock.innerHTML = '00:00:00';
    sec = 0;

  });

  function showHour(sec) {
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  };

  function startClock() {
    timer = setInterval(function() {
      sec++;
      clock.innerHTML = showHour(sec);
    }, 1000);
  };

};

scope();
