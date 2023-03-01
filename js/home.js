const dom = {
	options: document.getElementsByClassName('options__item__img'),
};

function borderColor() {
	console.log(this);
	console.log('this');
}

(function main() {
	console.log(dom.options);
	console.log(dom.options.length);
	for (let i = 0; i < dom.options.length; i++) {
		console.log('no va');
		dom.options[i].addEventListener('click', borderColor);
	}
})();
