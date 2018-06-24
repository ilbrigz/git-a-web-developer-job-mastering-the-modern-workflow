class Modal {
	constructor(){
		this.openModalButton = document.querySelectorAll(".open-modal");
		this.modal = document.querySelector('.modal');
		this.closeModalButton = document.querySelector('.modal__close');
		this.events();
	}
	events() {
		//clicking the open modal button
		this.openModalButton.forEach( el => el.addEventListener('click', this.openModal.bind(this)));
		//clicking the x close modal button
		this.closeModalButton.addEventListener('click', this.closeModal.bind(this));
		//pushes the escape key
		document.addEventListener('keyup', this.keyPressHandler.bind(this), true);
	}
	openModal(event) {

		this.modal.classList.add("modal--is-visible");
		event.preventDefault()
	}
	closeModal() {
		this.modal.classList.remove("modal--is-visible");
	}	
	keyPressHandler(e) {

    	if((e.key=='Escape'||e.key=='Esc'||e.keyCode==27)){
    	this.modal.classList.remove("modal--is-visible");
        e.preventDefault();
        return false;
   	 }
	}

}

export default Modal;
