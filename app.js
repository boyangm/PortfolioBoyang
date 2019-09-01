const section1 = document.querySelector('.section1');
const hit = document.querySelector('#hit');
const toggleContent = document.querySelector('.toggle-content');
const ul = document.getElementsByTagName('ul')
console.log('loaded');
var show = function (elem) {
    // Get the natural height of the element
	var getHeight = function () {
        elem.style.display = 'block'; // Make it visible
		var height = elem.scrollHeight + 'px'; // Get it's height
		elem.style.display = ''; //  Hide it again
		return height;
	};
    
	var height = getHeight(); // Get the natural height
	elem.classList.add('is-visible'); // Make the element visible
	elem.style.height = height; // Update the max-height
    
	// Once the transition is complete, remove the inline max-height so the content can scale responsively
	window.setTimeout(function () {
        elem.style.height = '';
	}, 350);
    
    // section1.style.height = 'auto';
};

// Hide an element
var hide = function (elem) {
    section1.style.height = 1454 + 'px';

	// Give the element a height to change from
	elem.style.height = elem.scrollHeight + 'px';

	// Set the height back to 0
	window.setTimeout(function () {
		elem.style.height = '0';
	}, 1);

	// When the transition is complete, hide it
	window.setTimeout(function () {
		elem.classList.remove('is-visible');
	}, 350);

};

// Toggle element visibility
// var toggle = function (elem, timing) {

// 	// If the element is visible, hide it
// 	if (elem.classList.contains('is-visible')) {
// 		hide(elem);
// 		return;
// 	}

// 	// Otherwise, show it
// 	show(elem);
	
// };

// // Listen for click events
// document.addEventListener('click', function (event) {

// 	// Make sure clicked element is our toggle
// 	if (!event.target.classList.contains('toggle')) return;
    
// 	// Prevent default link behavior
// 	event.preventDefault();
    
// 	// Get the content
// 	var content = document.querySelector(event.target.hash);
// 	if (!content) return;
    
// 	// Toggle the content
// 	toggle(content);
    
// }, false);

function getPosition(el) {
    var xPos = 0;
    var yPos = 0;
   
    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;
   
        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }
   
      el = el.offsetParent;
    }
    console.log( xPos, yPos)
    return {
      x: xPos,
      y: yPos
    };
  }
   
window.onload = function() {
    hide(toggleContent);
    // Helper function to get an element's exact position
  // deal with the page getting resized or scrolled
  window.addEventListener("scroll", updatePosition, false);
  window.addEventListener("resize", updatePosition, false);
   
  function updatePosition() {
   const pos = getPosition(hit);
    if(pos.y >350 && ul.classList.contains('is-visible')){
        hide(toggleContent);

        console.log('hit');
    }else{
        show(toggleContent);
    }

  }
};