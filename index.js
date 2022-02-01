const hex = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",
];

let btn = document.getElementById("btn");
let color = document.getElementById("color");

btn.addEventListener("click", function () {
  let hexcolor = "#";
  for (let i = 0; i < 6; i++) {
    hexcolor += hex[random()];
  }

  document.body.style.backgroundColor = hexcolor;
  color.textContent = hexcolor;
});

function random() {
  return Math.floor(Math.random() * hex.length);
}
