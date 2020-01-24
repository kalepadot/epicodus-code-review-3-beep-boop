$(document).ready(function(){
  $("form#robot").submit(function(event){
    event.preventDefault();


    $("#result").show();
  });
});