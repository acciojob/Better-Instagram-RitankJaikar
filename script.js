//your code here
const images = document.querySelectorAll(".image");
let dragSourceElement= null;

function handleDragStart(e) {
	console.log("----------DragStart---------");
	dragSourceElement= this;
	console.log(dragSourceElement);
}

function handleDragOver(e) {
	console.log("---DragOver---");
	e.preventDefault();
}

function handleDrop(e) {
	console.log("---DragDrop---");
	e.preventDefault();
	
	if(e.target.classList.contains("image")  &&  e.target !==dragSourceElement) {
		let clone1= dragSourceElement.cloneNode(true);
		let clone2= e.target.cloneNode(true);
		e.target.parentNode.insertBefore(clone1, e.target);
		e.target.remove();
		dragSourceElement.parentNode.insertBefore(clone2, dragSourceElement);
		dragSourceElement.remove();
	}
}

images.forEach(image => {
	image.addEventListener("dragstart", handleDragStart);
	image.addEventListener("dragover", handleDragOver);
	image.addEventListener("drop", handleDrop);
	image.addEventListener("dragend", () => {
		console.log("---DragEnd---");
	})
	image.addEventListener("dragenter", () => {
		console.log("---DragEnter---");
	})
	image.addEventListener("dragleave", () => {
		console.log("---DragLeave---");
	})
})
