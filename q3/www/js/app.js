function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert('Invalid email.')

    return false;
  }

  return true;
}

function validateEmailNoRegex() {
  var email = document.getElementById("email").value;

  if (email == '') {
    alert("Empty email.");
    document.getElementById("email").focus();

    return false;
  }

  return true;
}

function validateCountry() {
  var country = document.getElementById("country").value;

  if (country == '') {
    alert("Empty Country Selection.");

    return false;
  }

  return true;
}

function validateDescription() {
  var descrption = document.getElementById("description").value;

  if (descrption == '') {
    alert("Empty Description.");

    return false;
  }

  return true;
}
function validateAvatarImage() {
  var descrption = document.getElementById("avatarImage").value;

  if (descrption == '') {
    alert("Empty Image File.");

    return false;
  }

  return true;
}

function validateForm() {
  if (!validateEmail()) {
    return false;
  }

  if (!validateCountry()) {
    return false;
  }

  if (!validateDescription()) {
    return false;
  }
  if (!validateAvatarImage()) {
    return false;
  }
}
