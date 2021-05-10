const mediaQuery = window.matchMedia('(max-width: 950px)');
const detail = document.querySelector('.header .detail-all .detail');

if (mediaQuery.matches) {
	document.addEventListener('scroll', () => {
		let scroll_position = window.scrollY;
		if (scroll_position > 50) detail.style.marginBottom = '0px';
		else detail.style.marginBottom = '20px';
	});
}
