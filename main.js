/* input nasa code below

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/
$(document).ready(function(){
  $("#getNasaPic").on("click", function(){

  var apiKey = "j5eg0ikpLsgr4ILv18gpdeJe7a8yq8STO1FUe1T6";
  var url = "https://api.nasa.gov/planetary/apod?api_key=j5eg0ikpLsgr4ILv18gpdeJe7a8yq8STO1FUe1T6";
  $.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=j5eg0ikpLsgr4ILv18gpdeJe7a8yq8STO1FUe1T6",

  success: function(data){
    // var month = $("#day").val();
    // var day = $("#month").val();
    // var year = $("#year").val();
    // day = parseInt($("#day").val());
  
    $("#images").attr("src", data.hdurl);
     console.log(data.hdurl);
  },
error: function(er){
console.log(er);
}
});
});
});
