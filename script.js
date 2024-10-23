const images = document.querySelectorAll(".image");
let dragSourceElement = null;

function handleDragStart(e) {
    console.log("----------DragStart---------");
    dragSourceElement = this;
    //console.log(dragSourceElement);
}

function handleDragOver(e) {
    console.log("---DragOver---");
    e.preventDefault();
}

function handleDrop(e) {
    console.log("---DragDrop---");
    e.preventDefault();

    if (e.target.classList.contains("image") && e.target !== dragSourceElement) {
        const sourceNextSibling= dragSourceElement.nextElementSibling;
		const targetNextSibling= e.target.nextElementSibling;
		//console.log(sourceNextSibling, targetNextSibling);

		// Swap elements by inserting them before their respective next siblings
        if (sourceNextSibling === e.target) {
            // If they are next to each other, swap directly
            dragSourceElement.parentNode.insertBefore(dragSourceElement, targetNextSibling);
        } else {
            dragSourceElement.parentNode.insertBefore(dragSourceElement, e.target);
            e.target.parentNode.insertBefore(e.target, sourceNextSibling);
        }
    }
}

images.forEach(image => {
    image.addEventListener("dragstart", handleDragStart);
    image.addEventListener("dragover", handleDragOver);
    image.addEventListener("drop", handleDrop);
    image.addEventListener("dragend", () => {
        console.log("---DragEnd---");
    });
    image.addEventListener("dragenter", () => {
        console.log("---DragEnter---");
    });
    image.addEventListener("dragleave", () => {
        console.log("---DragLeave---");
    });
});
