// var firebaseConfig = {
//   apiKey: "AIzaSyDs4yPFtNgnipejYVxJysuBzLpvE52hURI",
//   authDomain: "boyang-portfolio.firebaseapp.com",
//   databaseURL: "https://boyang-portfolio.firebaseio.com",
//   projectId: "boyang-portfolio",
//   storageBucket: "",
//   messagingSenderId: "48042902051",
//   appId: "1:48042902051:web:5a48b1f4fd7a44e1"
// };

// var database = firebase.database();
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const section1 = document.querySelector('.section1');
const parallax = document.getElementsByClassName('parallax');
const hit = document.querySelector('#hit');
const toggleContent = document.querySelector('.toggle-content');
const ul = document.getElementsByTagName('ul');
const submit = document.querySelector('#submit');
var x = window.matchMedia("(max-width: 768px)");
console.log('Thanks for checking out my Site!');

// captures information from firebase

// function writeUserData(userId, name, email, message) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     message : message
//   });
// }

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
    return {
      x: xPos,
      y: yPos
    };
  }
  function myFunction(x) {
    if (x.matches) { // If media query matches
      for (let i =0 ; i<3 ; i++){
        parallax[i].setAttribute('data-image-src','memphis-mini-dark.png');

      }
      console.log('yes');
    } else {
      console.log('no');
    }
  }
  
 
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
 
window.onload = function() {
    hide(toggleContent);
    // Helper function to get an element's exact position
  // deal with the page getting resized or scrolled
  window.addEventListener("scroll", updatePosition, false);
  window.addEventListener("resize", updatePosition, false);
   
  //continuously returns the positon of the element to trigger Scroll Event
  function updatePosition() {
   const pos = getPosition(hit);
    if(pos.y >450){
        hide(toggleContent);

        // console.log('hit');
    }else{
        show(toggleContent);
    }

  }
}
  
