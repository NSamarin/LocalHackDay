$(document).ready(function() {
  $("#submit-todo-btn").on('click', function(e) {
    e.preventDefault();

    var eventType = ($("#event-type").val());
    var time = ($("#time").val());
    var day = ($("#day").val());
    var month = ($("#month").val());
    var year = ($("#year").val());
    var eventName = ($("#event-name").val());
    var details = ($("#details").val());

    var todo = {
      type: eventType,
      time: time,
      day: day,
      month: month,
      year: year,
      name: eventName,
      details: details
    }

    console.log(JSON.stringify(todo));

  });

});
