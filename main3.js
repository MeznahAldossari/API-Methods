let h4 = document.getElementById("h4");
let h1 = document.getElementById("h1");
data = JSON.parse(localStorage.getItem("User"));
h4.innerText = data.fullName;

h1.innerText = `Welcome ${data.fullName} ❤️🎉`;
