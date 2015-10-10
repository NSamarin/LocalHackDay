var hasMon = false;
var hasTue = false;
var hasWed = false;
var hasThu = false;
var hasFri = false;

$(document).ready( function() {
    $('#monday-id').on('click', function() {
        if(!hasMon) {
            $(this).parent().append(dateTimeForm);
            hasMon = true;
        } else {
            // remove
        }
    });
    $('#tuesday-id').on('click', function() {
        console.log('bla');
    });
    $('#wednesday-id').on('click', function() {
        console.log('bla');
    });
    $('#thursday-id').on('click', function() {
        console.log('bla');
    });
    $('#friday-id').on('click', function() {
        console.log('bla');
    });


    var dateTimeForm = " <div class='form-group'> <label for='exampleInputEmail1'>Name</label> <input type='datetime' class='form-control'> </div> ";

});
