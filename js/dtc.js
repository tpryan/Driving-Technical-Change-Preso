/* global Reveal */
function blurBackgroundImage(){
	var backgroundholder = document.querySelector(".state-background");
	backgroundholder.style.webkitFilter = "blur(7px)";
}

function deBlurBackgroundImage(){
	var backgroundholder = document.querySelector(".state-background");
	backgroundholder.style.webkitFilter = "";
}

function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    };

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}

Reveal.addEventListener( 'fragmentshown', function( event ) {
	if (event.fragment.classList.contains("blur")){
		blurBackgroundImage();
	}
} );

Reveal.addEventListener( 'fragmenthidden', function( event ) {
	if (event.fragment.classList.contains("blur")){
		deBlurBackgroundImage();
	}
} );

Reveal.addEventListener( 'ready', function() {
	var transitionEnd = whichTransitionEvent();
	document.querySelector('.state-background').addEventListener(transitionEnd, deBlurBackgroundImage, false);

} );