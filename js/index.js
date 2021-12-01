// Home Page show toast
function showToast() {
  var infoToast = document.getElementById('info-toast')
  var toast = new bootstrap.Toast(infoToast)
  toast.show()
}

// Search Bar form validation
function performSearch(e) {
  // function can also be called if user pressed Return key
  if (e && e.keyCode != 13)
    return;

  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');
  
  // Show/Hide search bar, or perform search if search bar has content
  if (searchInput.style.display == "none") {
    searchInput.style.display = "flex";
  }
  else {
    const inputValue = searchInput.value;
    if (inputValue == "")
      searchInput.style.display = "none";
    else
      alert("Cannot search for "+inputValue+ "; not implemented yet!");
  }
};

// Schedule a Tour form validation
function validateForm() {
  var status = document.getElementById("status");
  var fName = document.getElementById("firstname");
  var lName = document.getElementById("lastname");
  var email = document.getElementById("email");
  var avail = document.getElementById("availability");                
  
  // Check for missing/invalid inputs
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

  // Submitted form!
  status.innerHTML = "Thank you for reaching out. We will get back to you to confirm your in-person tour with us.";
  for (var i=0; i<allInputs.length; i++) {
    allInputs[i].value = "";
  }
}