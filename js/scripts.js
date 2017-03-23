$(document).ready(function() {
  $("form#personal-info").submit(function(event) {
    event.preventDefault();

    var age = parseInt($("#age").val());
    var favLetter = $("#letterInput").val();
    var selection = $("#selection").val();

    if (favLetter === 'j' || selection === 'men'){
      $("#fav-letter").text(favLetter);
      $("#jeff").show();

    } else if (selection === 'dinos') {
      console.log("We don't think Jeff is necessarily this person's particular cup of tea. But we definitely think they will enjoy the Jeff Goldblum classic 'Jurrasic Park'");
      $("#fav-letter").text(favLetter);
      $("#jeff").show();

    } else if (age != 35 && selection === 'neither'){
      console.log("We actually think Jeff may not actually be right for this person. But we definitely still think they should watch Will & Grace. You know Jeff was actually nominated for an Emmy award for Outstanding Guest Actor for his portrayal of Scott Woolley.");
      $("#fav-letter").text(favLetter);
      $("#jeff").show();
    } else {
      $("#fav-letter").text(favLetter);
      $("#jeff").show();
    }




  });
});
