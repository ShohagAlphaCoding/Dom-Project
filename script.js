const btns = document.querySelectorAll('button');
const audio = document.querySelector('audio');

btns.forEach((btn) => {
  btn.addEventListener('mouseup', () => {

    btn.classList.add('pressed');
    setTimeout(() => {
      btn.classList.remove('pressed');
    }, 300);

    audioRun(btn);
  })
});


function audioRun(btn) {
  const instrument = btn.innerHTML;
  
  if(instrument === 'w') {
    audio.src = './sounds/tom-1.mp3';
    audio.play();
  } else if(instrument === 'a') {
    audio.src = './sounds/tom-2.mp3';
    audio.play();
  }else if(instrument === 's') {
    audio.src = './sounds/tom-3.mp3';
    audio.play();
  }else if(instrument === 'd') {
    audio.src = './sounds/tom-4.mp3';
    audio.play();
  }else if(instrument === 'j') {
    audio.src = './sounds/snare.mp3';
    audio.play();
  }else if(instrument === 'k') {
    audio.src = './sounds/crash.mp3';
    audio.play();
  }else if(instrument === 'l') {
    audio.src = './sounds/kick-bass.mp3';
    audio.play();
  }
  
}