import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';


const mobileMenu = new MobileMenu();
const revealOnScroll = new RevealOnScroll();

AOS.init();
function alerttt() {
	alert('hi')
};

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top <= 150 &&
    rect.left >= 0 &&
    rect.bottom >= 180
  );
}

// function isInViewport(element) {
//   var rect = element.getBoundingClientRect();
//   var html = document.documentElement;
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || html.clientHeight) &&
//     rect.right <= (window.innerWidth || html.clientWidth)
//   );
// }
	let linkTarget = document.querySelectorAll('.link-target');
	let navLink = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function (event) {
	linkTarget.forEach((el, index) => {
		//console.log(el,el.getBoundingClientRect())
		if(isInViewport(el) && !navLink[index].classList.contains("aos-init")){
			navLink[index].setAttribute('frameborder', '0');
			navLink[index].className += " aos-init aos-animate";
			navLink[index].setAttribute("data-aos-duration",500);
			navLink[index].setAttribute("data-aos","orange-link");
			}else if(!isInViewport(el) && navLink[index].classList.contains("aos-init")) {//is in view needs to be checked again
				navLink[index].classList.remove("aos-init")
			navLink[index].classList.remove("aos-animate")
				navLink[index].removeAttribute("frameborder");
				navLink[index].removeAttribute("data-aos");
				navLink[index].removeAttribute("data-aos-duration");

			}

	});
});



// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]',{topOnEmptyHash: true});