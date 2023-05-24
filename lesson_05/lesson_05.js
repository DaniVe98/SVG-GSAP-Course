var masterTl = new TimelineMax();

masterTl.to('#logo1', 1, {x:850})
        .to('#logo2', 1, {y:830},'-=0.5')
        .add(animateLogo3(), '-=0.5');


function animateLogo3() {
  var logo3Tl = new TimelineMax();
  
  logo3Tl.to('#logo3', 1, {x:'-=850'});
  
  return logo3Tl;
}


