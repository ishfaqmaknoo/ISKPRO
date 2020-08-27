function toggleMenu() {
	let menuIcon = document.querySelector('.nav-menu-toggle');
	let navbar = document.querySelector('.nav-bar');

	menuIcon.addEventListener('click', function() {
		console.log('clicked');
		navbar.classList.toggle('responsive-nav');
	});
}
toggleMenu();
