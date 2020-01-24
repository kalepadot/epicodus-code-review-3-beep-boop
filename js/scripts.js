var robotResult = function(number) {
  var result = [];
  // var string = index.toString();
  for (index = 0; index <= number; index++){
    result.push(" " + index);
    var string = index.toString();
     if (string.includes("1")){
    result.splice(index, 1, " Beep!")
  }  else if (string.includes("2")){
    result.splice(index, 1 ," Boop!")
  }
}
  return result;
}
// try switching these
$(document).ready(function() {
$("form#robot").submit(function(event) {
  event.preventDefault();
  var number = $("#number").val();
  var result = robotResult(number);
  $("#number").val(" ");
  $("#output").text(result);
  $("#result").show();

  });
});
 