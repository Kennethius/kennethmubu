window.addEventListener('load', function(){
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    '#60d394',
    '#d36060',
    '#c460d3',
    '#d3d160',
    '#6860d3',
    '#60b2d3'
  ];

  console.log(sounds)

  // Lets get going with the sound
  pads.forEach((pad, index) =>{
    pad.addEventListener('click', function(){
      sounds[index].currentTime = 0;
      sounds[index].play();

      creatBubbles(index);
    });
  })
  // Create a function that makes bubbles
  const creatBubbles = (index) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function(){
      visual.removeChild(this);
    })
  }
});

