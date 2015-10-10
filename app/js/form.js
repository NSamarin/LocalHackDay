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


    function dateTimeForm(name) {
        return " <div class='form-group' id='dateTimeForm-" + name +"'> <label for='TODO'>"+name+"</label> <input type='datetime' class='form-control'> </div> ";
    }
});
