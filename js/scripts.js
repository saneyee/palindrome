$(function() {

$("#formone").submit(function(event) {

event.preventDefault();
var words = [];
var words = $("input#palin").val()
var anotword= words.split("");

var revArray = [];
var revArray = words.reverse();
var joinarray = revArray.join("");



if (anotword == revArray) {
  $("#output").show();


}
else {
  $("#output2").show();


}










 });

 });
