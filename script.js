

let box = document.querySelector(".boxes");

for (let index = 0; index < 9; index++) {
  let remainder = index % 2
  box.innerHTML += ` <div onclick={tick(this)} class="box1"</div>`;
}

let firstuser = true;
let countclick = 0;

function tick(box1) {
  if (box1.innerHTML === "") {
    countclick++;
    if (firstuser === true) {
      box1.innerHTML = `<img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fZa61lj6XNTMOvDIs5iE_1-c7pbaR1Bagw&s" />`;
      firstuser = false;
    } else {
      box1.innerHTML = `<img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dL75PUu1_GVO9P6svJ-gCs2hsh8LXvy75Ds1PAz7rxxgfOl67OaMRFEI3mel8NutpJ4&usqp=CAU" />`;
      firstuser = true;
    }
  }
}
