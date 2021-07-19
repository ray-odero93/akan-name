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

