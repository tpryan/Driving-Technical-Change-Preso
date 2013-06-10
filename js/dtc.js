/* global Reveal */
function blurBackgroundImage(){
	var backgroundholder = document.querySelector(".state-background");
	backgroundholder.style.webkitFilter = "blur(10px)";
}

function deBlurBackgroundImage(){
	var backgroundholder = document.querySelector(".state-background");
	backgroundholder.style.webkitFilter = "";
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

Reveal.addEventListener( 'slidechanged', function( event ) {
		deBlurBackgroundImage();
} );