let names = document.getElementById("name");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

//url
let url = "https://665736969f970b3b36c8658a.mockapi.io/userForm";

async function signUp() {
  let span1 = document.getElementById("passwordError");
  let span2 = document.getElementById("emailError");
  let span3 = document.getElementById("userNameError");
  span1.innerText = "";
  span2.innerText = "";
  span3.innerText = "";

  let RegExpName = /^[A-Za-z]{6,}$/;
  let checkName = RegExpName.test(username.value);
  if (!checkName) {
    let span = document.getElementById("userNameError");
    span.innerText = "The Name Should be Characters and more than 5 letters";
  }

  let RegExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let checkEmail = RegExpEmail.test(email.value);
  if (!checkEmail) {
    let span = document.getElementById("emailError");
    span.innerText = "Enter Valid Email";
  }

  let RegExpPass = /^\d{8,}$/;
  let checkPass = RegExpPass.test(password.value);
  if (!checkPass) {
    let span = document.getElementById("passwordError");
    span.innerText = "Password should be at least 8 [Numbers]";
  }
  if (checkName && checkEmail && checkPass) {
    let res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        fullName: names.value,
        username: username.value,
        email: email.value,
        password: password.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    // let data = await res.json();
    window.location.href = "login.html";
    //     alert(
    //       `The Sign Up Prcoess Is Completed 🎉. You Can proceed to the login page`
    //     );
  }
}
