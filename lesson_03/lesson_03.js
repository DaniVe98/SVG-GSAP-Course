// id == "#logo1"

// Look at https://greensock.com/docs/v2/Easing to see all movement animations


// TweenMax.to("#logo1", 1, {x:850, y:830, ease: Power4.easeInOut})
// TweenMax.to("#logo1", 1, {x:850})
// TweenMax.to("#logo1", 1, {y:830, delay:1})

// TweenMax.from("#logo1", 3, {x:850})
TweenMax.fromTo("#logo1", 1, {autoAlpha:1, x:0, y:830}, {autoAlpha:0.2, x:850, y:830})



