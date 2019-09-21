$(function() {
    $(".change-eat").on("click", function(event) {
        var id = $(this).data("id");
        var newEat = $(this).data("devoured");
        console.log$($(this));

        var newDevourState = {
            devoured: newEat
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed sleep to", newEat);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newEat
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        )
    });
})