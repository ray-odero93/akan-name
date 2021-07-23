// UI Logic

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    var year = parseInt($("#year").val());
    var month = parseInt($("#month").val());
    var day = parseInt($("#day").val());
    var gender = $("input:radio[name = gender]:checked").val();
    var results = akanName(year, month, day, gender);
    alert("Your Akan name is " + results);

    document.getElementById("form").requestFullscreen();
  });
});

// Business Logic

var akanName = function (year, month, day, gender) {
  var getDay = Math.floor();
  var femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var maleAkan = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var day = new Date(year, --month, day);

  
};



  

