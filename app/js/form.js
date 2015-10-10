var hasMon = false;
var hasTue = false;
var hasWed = false;
var hasThu = false;
var hasFri = false;

$(document).ready( function() {
    $('#monday-id').on('click', function() {
        if(!hasMon) {
            $(this).parent().append(dateTimeForm('mon'));
            hasMon = true;
        } else {
            $('#dateTimeForm-mon').remove();
            hasMon = false;
        }
    });
    $('#tuesday-id').on('click', function() {
        if(!hasTue) {
            $(this).parent().append(dateTimeForm('tue'));
            hasTue = true;
        } else {
            $('#dateTimeForm-tue').remove();
            hasTue = false;
        }
    });
    $('#wednesday-id').on('click', function() {
        if(!hasWed) {
            $(this).parent().append(dateTimeForm('wed'));
            hasWed = true;
        } else {
            $('#dateTimeForm-wed').remove();
            hasWed = false;
        }
    });
    $('#thursday-id').on('click', function() {
        if(!hasThu) {
            $(this).parent().append(dateTimeForm('thu'));
            hasThu = true;
        } else {
            $('#dateTimeForm-thu').remove();
            hasThu = false;
        }
    });
    $('#friday-id').on('click', function() {
        if(!hasFri) {
            $(this).parent().append(dateTimeForm('fri'));
            hasFri = true;
        } else {
            $('#dateTimeForm-fri').remove();
            hasFri = false;
        }
    });

    $('#submit-btn').on('click', function(e) {
        e.preventDefault();


        var values = [];
        $('input').each(function() {
            values.push($(this).val());
          });

        if (values[0] == "" || values[1] == "" || values[2] == "" || values[3] == "" ) {
          alert("Some fields are empty!");
          return;
        }
        values = values.filter(function(x){
          return x != "";
        });

        var count = 0;

        for (var i = 0; i < values.length; i++){
          if (values[i] == "on") {
              if (count == 0) {
                values[i] = "Monday"
                count++;
              }
              else if (count == 1) {
                values[i] = "Tuesday"
                count++;
              }
              else if (count == 2) {
                values[i] = "Wednesday"
                count++;
              }
              else if (count == 3) {
                values[i] = "Thursday"
                count++;
              }
              else if (count == 4) {
                values[i] = "Friday"
                count++;
              }
            }
          }

          function parseDay(firstDay, secondDay) {
            if ((values.indexOf(secondDay) - values.indexOf(firstDay)) < 4) {
              return {};
            } else {
              var i = values.indexOf(firstDay);
              return {startTime: values[i+1], endTime: values[i+2], location: values[i+3]};
            }
          }

          function parseFriday() {
            if (values.length - values.indexOf("Friday") < 4) {
              return {};
          } else {
            var i = values.indexOf("Friday");
            return {startTime: values[i+1], endTime: values[i+2], location: values[i+3]};
          }
        }

          var result = {
            "name": values[0],
            "semester": values[1],
            "start": values[2],
            "end": values[3],
            "monday": parseDay("Monday", "Tuesday"),
            "tuesday": parseDay("Tuesday", "Wednesday"),
            "wednseday": parseDay("Wednesday", "Thursday"),
            "thursday": parseDay("Thursday", "Friday"),
            "friday": parseFriday()
          }
          console.log(JSON.stringify(result));

    });


    function dateTimeForm(name) {
        return "<div class='form-group row' id='dateTimeForm-" + name +
            "'> " +
            "</label>" +
            "<div class='col-md-4'><input type='datetime' class='form-control' placeholder='Start Time'></div>" +
            "<div class='col-md-4'><input type='datetime' class='form-control' placeholder='End Time'></div>" +
            "<div class='col-md-4'><input type='text' class='form-control' placeholder='Location'></div>" +
            "</div>";
    }



});
