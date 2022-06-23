let inputText = document.getElementById("inputText");
let submit = document.getElementById("submit");

function loadData() {
  fetch(`https://api.github.com/users`)
    .then((res) => res.json())
    .then((data) => displayData(data));
}

submit.addEventListener("click", loadData);

function displayData(data) {
  let box = document.getElementById("box");

  for (let object of data) {
    if (object.id == inputText.value) {
      let para = document.createElement("p");
      para.classList.add("text");
      para.innerHTML = `

    <h2> User ID: ${object.id} </h2>
    <h2> Name: ${object.login} </h2>
    <h4> Avatar_url: ${object.avatar_url}  </h4>

        `;
      box.appendChild(para);
    } else {
      alert("Pls this id has no value");
    }
  }
}
