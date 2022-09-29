var listOfAllStudent = [];

if (localStorage.signUpPage) {
  listOfAllStudent = JSON.parse(localStorage.getItem("signUpPage"));
}
console.log(listOfAllStudent);

function signUp() {
  // var firstName = userfirstname.value;
  // var lastName = userlastname.value;
  // var email = useremail.value;
  // var password = userpassword.value;
  // var regDate = new Date();
  // var matricNo = Math.round(Math.random() * 1000000);

  if (
    userfirstname.value == "" ||
    userlastname.value == "" ||
    useremail.value == "" ||
    userpassword.value == ""
  ) {
    alert("fill in all the required input");
    // display.innerHTML = "<p>fill in all the required input</p>";
  } else {
    var studentInfo = {
      firstName: userfirstname.value,
      lastName: userlastname.value,
      email: useremail.value,
      password: userpassword.value,
      regDate: new Date(),
      matricNo: Math.round(Math.random() * 10000000),
    };
  }

  userfirstname.value = "";
  userlastname.value = "";
  useremail.value = "";
  userpassword.value = "";

  listOfAllStudent.push(studentInfo);
  localStorage.setItem("signUpPage", JSON.stringify(listOfAllStudent));
  console.log(listOfAllStudent);
}

function signIn() {
  window.location.href = "login.html";
}
