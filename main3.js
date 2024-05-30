let mainDiv = document.getElementById("items");
let url = "https://fakestoreapi.com/products";

async function fetching() {
  let res = await fetch(url);
  let data = await res.json();

  data.forEach((e) => {
    console.log(e);
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    let img = document.createElement("img");
    // div.setAttribute("class", "itemDetails");
    div.classList.add("itemDetails");
    img.classList.add("prodImage");

    h4.innerText = e.title;
    h4.style.color = "black";
    p.innerText = e.price;
    p.style.color = "black";
    img.src = e.image;

    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(p);
    mainDiv.appendChild(div);
  });
}

let h4 = document.getElementById("h4");
let h1 = document.getElementById("h1");
data = JSON.parse(localStorage.getItem("User"));
h4.innerText = data.fullName;

h1.innerText = `Welcome ${data.fullName} ❤️🎉`;

fetching();
