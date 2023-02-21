const stickyWrapper = document.querySelector('.sticky-product')

window.addEventListener('scroll', () => {
	window.pageYOffset > window.pageXOffset
		? stickyWrapper.classList.add('show')
		: stickyWrapper.classList.remove('show')
})