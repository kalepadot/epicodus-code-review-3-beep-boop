var robotResult = function(number) {
  var result = [];
  for (index = 0; index <= number; index++){
    result.push(index);
  }
  return result;
}
// try switching these
$(document).ready(function() {
$("form#robot").submit(function(event) {
  event.preventDefault();
  var number = $("#number").val();
  var result = robotResult(number);
  // $("#number").val(" ");
  $("#output").text(result);
  $("#result").show();

  });
});
 