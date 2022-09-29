function login() {
  var logEmail = useremailadd.value;
  var logPassword = userpass.value;
  listOfAllStudent = JSON.parse(localStorage.getItem("signUpPage"));
  for (let index = 0; index < listOfAllStudent.length; index++) {
    if (
      listOfAllStudent[index].email == logEmail &&
      listOfAllStudent[index].password == logPassword
    ) {
      alert("Login Successful! welcome");
      window.location.href = "homepage.html";
    }
  }
  if (logEmail == "" || logPassword == "") {
    alert(
      "Invalid User! Email and Password field can not be empty  Please check that all the input field are filled correctly and try again"
    );
  } else if (logPassword.length < 5 || logPassword.length > 15) {
    alert(
      "Password can not be less than 5 character and can not be greater than 15 character!"
    );
  }
}

function signUp() {
  window.location.href = "index.html";
}
