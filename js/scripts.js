$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var letter = $("input#name").val();
    $(".name").text(letter);
    $("#letter").show();
    event.preventDefault();
  });
});
