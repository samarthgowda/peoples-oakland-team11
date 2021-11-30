function validateForm() {
  console.log("here")
  var status = document.getElementById("status");
  var fName = document.getElementById("firstname");
  var lName = document.getElementById("lastname");
  var email = document.getElementById("email");
  var avail = document.getElementById("availability");                
  
  // Check for missing inputs
  var allInputs = [fName, lName, email, avail];
  for (var i=0; i<allInputs.length; i++) {
    if (allInputs[i].value.trim() == "") {
      status.innerHTML = "Please fill out all the information.";
      return;
    }
  }
  if (!email.value.includes("@")) {
    status.innerHTML = "Please enter a valid email address.";
    email.value = "";
    return;
  }

  // Success!
  status.innerHTML = "Thank you for reaching out. We will get back to you to confirm your in-person tour with us.";
  for (var i=0; i<allInputs.length; i++) {
    allInputs[i].value = "";
  }
  console.log("success")
}