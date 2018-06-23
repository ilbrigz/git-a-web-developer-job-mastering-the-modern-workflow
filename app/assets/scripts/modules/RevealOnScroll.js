class RevealOnScroll {
constructor() {
		this.itemsToReveal = document.querySelectorAll('.feature-item');
		this.hideInitially();// will run the events when called
	}
hideInitially() {
		// this.itemsToReveal.forEach((e) => {
		// 	e.classList.add("wow bounceInUp" )
		// })
	}

}

export default RevealOnScroll;