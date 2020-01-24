var robotResult = function(number) {
  var result = [];
  // var string = index.toString();
  for (index = 0; index <= number; index++){
    result.push(" " + index);
    var string = index.toString();
    // if (string.includes("13")){
    //   result.splice(index, 1," I'm sorry, Dave. I'm afraid I can't do that." )
    // } else if (string.includes("21")){
    // result.splice(index, 1, " Boop!")
    if (string.includes("3")){
    result.splice(index, 1, " I'm sorry, Dave. I'm afraid I can't do that.!")
  } else if (string.includes("2")){
    result.splice(index, 1 ," Boop!")
  } else if (string.includes("1")){
    result.splice(index, 1, " Beep!" )
  // } if (string.includes("13")){
  //   result.splice(index, 1," I'm sorry, Dave. I'm afraid I can't do that." )
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
  $("#number").val(" "); // can possibly delete this?
  $("#output").text(result);
  $("#result").show();

  });
});
 