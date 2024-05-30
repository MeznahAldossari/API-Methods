let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("signIn");
let p = document.getElementById("passwordError");
//url
let url = "https://665736969f970b3b36c8658a.mockapi.io/userForm";

async function login() {
  let res = await fetch(url);
  let data = await res.json();

  if (email.value === "" && password.value === "") {
    p.innerText = "Please Fill Both Email and Password ";
    return;
  }

  let obj = {};
  let bool = false;
  data.forEach((element) => {
    if (element.email === email.value && element.password === password.value) {
      //   localStorage.setItem("username", element.username);

      obj.fullName = element.fullName;
      obj.username = element.username;
      obj.email = element.email;
      bool = true;

      //   let encodedEmail = encodeURIComponent(email.value);
      //   let encodedPassword = encodeURIComponent(password.value);
      //   window.location.href = url;
      return;
    }
  });

  if (bool) {
    localStorage.setItem("User", JSON.stringify(obj));
    window.location.href = "home.html";
  } else {
    p.innerText = "Please Enter correct Email and Password";
  }
}
