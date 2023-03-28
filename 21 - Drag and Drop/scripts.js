const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0); //aby to zmizelo z divu, ale ne hned, jinak bych to ani nemoh chytit, kdyby to nebylo v timeout funkci
}

function dragEnd() {
  this.className = "fill"; //aby se znova obrazek objevil (ted jenom v prvnim divu), aby to slo v kazdem z 5 divu musime poresit dragDrop
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered"; // aby se aplikoval hovered styl + empty na leave
}

function dragLeave() {
  this.className += "empty";
}

function dragDrop() {
  this.className = "empty"; //samo o osbe nestaci, musime preventnout default chovani u over a enter
  this.append(fill);
}
