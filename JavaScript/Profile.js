var progressBars = document.querySelectorAll(".progress-value");

function move(bar, targetWidth) {
	var width = 0;
	var id = setInterval(frame, 10);
	function frame() {
		if (width >= targetWidth) {
			clearInterval(id);
		} else {
			width++;
			bar.style.width = width + "%";
			bar.innerText = Math.floor((width / 100) * bar.dataset.total) + "/" + bar.dataset.total;
		}
	}
}

window.addEventListener("load", function() {
	progressBars.forEach(function(bar) {
		move(bar, (bar.dataset.value / bar.dataset.total) * 100);
	});
});

//-------------------------------------------

document.querySelector('.block-flexing').onmousemove = (e) => {

	const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
	
}



