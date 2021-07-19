// declaring bindings


var CC, YY, MM, DD, d, dayOfWeek;
var dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var femaleAkan = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleAkan = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];




// this function will validate data submitted in the gender section of the form


function validate() {
  var gender = document.getElementById("gender");
  if (document.form.day.value === " " || document.form.day.value > 31 || document.form.day.value <= 0) {
    window.alert("Please provide a valid date!");
    document.form.day.focus();
    return false;
  }

  else if (document.form.month.value === " " || document.form.month.value > 12 || document.form.month.value <= 0) {
    window.alert("Please provide a valid month!");
    document.form.day.focus();
    return false;
  }
  else {
    return true;
  }
}



// this function will calculate the day of the week from the user's birthday


function computeDay() {
  var year = document.getElementById("year").value;
  var C = parseInt(year.substring(0, 2));
  var Y = parseInt(year.substring(2, 4));
  var M = parseInt(document.getElementById("month").value);
  var D = parseInt(document.getElementById("day").value);

  var d = (((C / 4) - 2 * C - 1) + ((5 * Y / 4)) + ((26 * (M + 1) / 10)) + D) % 7;
  console.log(d);
  
  return (Math.floor(d));
}


// this function will validate the gender section data submitted in the form

function getGender() {
  var genders = document.getElementsByName("gender");
  if (genders[0].checked === true) {
    var gender = "male";
  } else if (genders[1].checked === true) {
    var gender = "female";
  } else {
    return false;
  }

  switch (gender) {
    case "male":
      if (dayOfWeek === 1) {
        window.alert("Your Akan name is " + maleAkan[0] + "!");
      }
      if (dayOfWeek === 2) {
        window.alert("Your Akan name is " + maleAkan[1] + "!");
      }
      if (dayOfWeek === 3) {
        window.alert("Your Akan name is " + maleAkan[2] + "!");
      }
      if (dayOfWeek === 4) {
        window.alert("Your Akan name is " + maleAkan[3] + "!");
      }
      if (dayOfWeek === 5) {
        window.alert("Your Akan name is " + maleAkan[4] + "!");
      }
      if (dayOfWeek === 6) {
        window.alert("Your Akan name is " + maleAkan[5] + "!");
      }
      if (dayOfWeek === 7) {
        window.alert("Your Akan name is " + maleAkan[6] + "!");
      }

      break;

    case "female":
      if (dayOfWeek === 1) {
        window.alert("Your Akan name is " + femaleAkan[0] + "!");
      }
      if (dayOfWeek === 2) {
        window.alert("Your Akan name is " + femaleAkan[1] + "!");
      }
      if (dayOfWeek === 3) {
        window.alert("Your Akan name is " + femaleAkan[2] + "!");
      }
      if (dayOfWeek === 4) {
        window.alert("Your Akan name is " + femaleAkan[3] + "!");
      }
      if (dayOfWeek === 5) {
        window.alert("Your Akan name is " + femaleAkan[4] + "!");
      }
      if (dayOfWeek === 6) {
        window.alert("Your Akan name is " + femaleAkan[5] + "!");
      }
      if (dayOfWeek === 7) {
        window.alert("Your Akan name is " + femaleAkan[6] + "!");
      }

      break;

  

