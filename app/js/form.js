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
        if(!hasTue) {
            $(this).parent().append(dateTimeForm);
            hasTue = true;
        } else {
            // remove
        }
    });
    $('#wednesday-id').on('click', function() {
        if(!hasWed) {
            $(this).parent().append(dateTimeForm);
            hasWed = true;
        } else {
            // remove
        }
    });
    $('#thursday-id').on('click', function() {
        if(!hasThu) {
            $(this).parent().append(dateTimeForm);
            hasThu = true;
        } else {
            // remove
        }
    });
    $('#friday-id').on('click', function() {
        if(!hasFri) {
            $(this).parent().append(dateTimeForm);
            hasFri = true;
        } else {
            // remove
        }
    });


    var dateTimeForm = " <div class='form-group'> <label for='exampleInputEmail1'>Name</label> <input type='datetime' class='form-control'> </div> ";

});
