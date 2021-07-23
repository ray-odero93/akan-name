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



  

