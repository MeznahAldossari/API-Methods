let h4 = document.getElementById("h4");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let fetching = JSON.parse(localStorage.getItem("User"));

h4.innerText = fetching.fullName;

span1.innerText = fetching.fullName;
span2.innerText = fetching.username;
span3.innerText = fetching.email;
