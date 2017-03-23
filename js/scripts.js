$(document).ready(function() {
  $("form#personal-info").submit(function(event) {
    event.preventDefault();

    var age = parseInt($("#age").val());
    var favLetter = $("#letterInput").val();
    var selection = $("#selection").val();

    if (favLetter === 'j' && selection === 'men'){
      $("#fav-letter").text(favLetter);
      $("#jeff").show();

    } else if (selection === 'dinos') {
      $("#disclaimer-text").text("We don't think Jeff is necessarily this person's particular cup of tea. But we definitely think they will enjoy the Jeff Goldblum classic 'Jurrasic Park'");
      $("#fav-letter").text(favLetter);
      $("#jeff").show();
      $("#disclaimer").show();

    } else if (age != 35 && selection === 'neither'){
      $("#disclaimer-text").text("We actually think Jeff may not actually be right for this person. But we definitely still think they should watch Will & Grace. You know Jeff was actually nominated for an Emmy award for Outstanding Guest Actor for his portrayal of Scott Woolley.");
      $("#fav-letter").text(favLetter);
      $("#jeff").show();
      $("#disclaimer").show();
    } else if (age <= 18) {
      $("#disclaimer-text").text("While you may feel like Jeff is right up your alley, Jeff might not feel the same way. He's all grown up and his interests may have changed (also we're pretty sure he's married). You may still enjoy the 1998 Jeff Goldblum classic 'The Prince of Egypt'. He's not actually in the movie, but you can still listen to the sweet sweet tones of Goldblum's voice- and that movie is pretty sweet.");
      $("#fav-letter").text(favLetter);
      $("#jeff").show();
      $("#disclaimer").show();

    }  else {
      $("#fav-letter").text(favLetter);
      $("#jeff").show();
    }




  });
});
