var masterTl = new TimelineMax();

masterTl
    .add('beginning')
    .to('#logo1', 1, {x: 850})
    .add('endLogo1')
    .to('#logo2', 1, {y: 830}, 'endLogo1-=0.5')
    .to('#logo3', 1, {x:'-=850', onComplete: showBigLogo, onCompleteParams:['red']}, '-=0.5');

function showBigLogo(color) {
  var bigL = document.querySelector('#bigLogo');
  
  TweenMax.set(bigL, {
    autoAlpha: 1,
    fill: color
  });
}
