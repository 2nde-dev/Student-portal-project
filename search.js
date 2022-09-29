function search() {
  var search = parseInt(searchstudent.value);
  // console.log(listOfAllStudent[search]);
  listOfAllStudent = JSON.parse(localStorage.getItem("signUpPage"));
  display.innerHTML = JSON.stringify(listOfAllStudent[search]);
}

function view() {
  if (localStorage.getItem("signUpPage") != null) {
    display.innerHTML = JSON.parse(
      JSON.stringify(localStorage.getItem("signUpPage"))
    );
  }
}

function delStudent() {
  window.location.href = "delete.html";
}
