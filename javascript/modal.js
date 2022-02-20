const modalCTA = document.getElementById("modal-demo-example");
const modalWrapper = document.getElementById('example-modal');
const modalCloseBtn = document.getElementById('modal-close-cta');
const modalBackBtn = document.getElementById('modal-go-back-btn');

modalCTA.addEventListener('click', () => {
	modalWrapper.classList.add('modal-active');
	document.body.style.overflow = 'hidden';
});

modalCloseBtn.addEventListener('click', () => {
	modalWrapper.classList.remove('modal-active');
	document.body.style.overflow = 'visible';
});

modalBackBtn.addEventListener('click', () => {
	modalWrapper.classList.remove('modal-active');
	document.body.style.overflow = 'visible';
});