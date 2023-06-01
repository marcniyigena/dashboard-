const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
	menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
	menu.style.visibility = "visible";
});




let search = document.querySelector('.search');
let btn = document.querySelector('.btn');
let input = document.querySelector('.search-input');

btn.addEventListener('click', () => {
	btn.classList.toggle('clicked');
	input.classList.toggle('open');

	if (!btn.classList.contains('clicked')) {
		input.value = '';
	};

});



const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('clicked');
	sidebar.classList.toggle('show');
})


const tabNavList = document.querySelectorAll('.tab-nav li');
const tabBody = document.querySelectorAll('.tab-body');

tabNavList.forEach((item, index, listArray) => {
	item.addEventListener('click', () => {
		if (item.classList.contains('active')) {
			return;
		} else {
			document.querySelector('.active').classList.remove('active');
			item.classList.add('active');
		}

		if (listArray[0].classList.contains('active')) {
			tabBody[0].classList.add('active');
			tabBody[1].classList.remove('active');
			tabBody[2].classList.remove('active');
		}

		if (listArray[1].classList.contains('active')) {
			tabBody[1].classList.add('active');
			tabBody[0].classList.remove('active');
			tabBody[2].classList.remove('active');
		}

		if (listArray[2].classList.contains('active')) {
			tabBody[2].classList.add('active');
			tabBody[1].classList.remove('active');
			tabBody[0].classList.remove('active');
		}
	})
})



const pick = document.querySelector('.pick');
const videoContainer = document.querySelector('.video-container');
const end = document.querySelector('.end');

pick.addEventListener('click', () => {
	videoContainer.classList.add('show');
})

end.addEventListener('click', () => {
	videoContainer.classList.remove('show');
})
//how to side bar?






