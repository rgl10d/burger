$(function() {
  $(".change-eaten").on("click", function(event) {
    const id = $(this).data("id");
    const newEaten = $(this).data("neweaten");

    const newEatenState = {
      eaten: newEaten
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        console.log("changed state to", newEaten);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: "0"
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    const id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("tossed out burger ", id);
        location.reload();
      }
    );
  });
});