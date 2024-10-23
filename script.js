//your code here
const images = document.querySelectorAll(".image");
let dragSourceElement= null;

function handleDragStart(e) {
	dragSourceElement= this;
	this.classList.add("dragging");
}

function handleDragOver(e) {
	e.preventDefault();
}

function handleDrop(e) {
	e.preventDefault();
	if(e.target.classList.contains("image")) {
		[this.innerHTML, dragSourceElement.innerHTML] = [dragSourceElement.innerHTML, this.innerHTML]
	}

	this.classList.remove("dragging");
	dragSourceElement.classList.remove("dragging");
}

images.forEach(image => {
	image.addEventListener("dragstart", handleDragStart);
	image.addEventListener("dragover", handleDragOver);
	image.addEventListener("drop", handleDrop);
	image.addEventListener("dragend", () => {
		image.classList.remove("dragging");
	})
})
