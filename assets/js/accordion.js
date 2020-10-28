//Adds and removes the class "active" on the section you click on.
function toggle() {
  this.classList.toggle('active');
}

let element = document.querySelectorAll('.title');
console.log(element);

// går igenom alla .title och sätter toggle onclick
element.forEach((element) => {
  element.onclick = toggle;
});
