var rowElements;

//TODO: remove after API is done
var countCourses = 0,
    countMonday = 0,
    countTuesday = 0,
    countWednseday = 0,
    countThursday = 0,
    countFriday = 0;

// var sample = {
//     "name": "Java Programming",
//     "semester": 1,
//     "content" : [
//     {
//         "date":"25.10.15",
//         "startTime":"10:30",
//         "endTime":"11:30",
//         "eventType": "lecture"
//     },
//     {
//         "date":"27.10.15",
//         "startTime":"10:30",
//         "endTime":"11:30",
//         "eventType":"lecture"
//     },
//     {
//         "date":"16.09.15",
//         "startTime":"13:30",
//         "endTime":"14:30",
//         "eventType":"tutorial"
//     },
//     {
//         "date":"28.11.15",
//         "startTime":"13:40",
//         "endTime":"15:00",
//         "eventType":"tutorial"
//     },
//     {
//         "date":"28.09.15",
//         "startTime":"13:40",
//         "endTime":"15:00",
//         "eventType":"lab"
//     },
//     {
//         "date":"28.11.15",
//         "startTime":"09:00",
//         "endTime":"12:00",
//         "eventType":"exam"
//     }
//     ]
// };


$(document).ready(function() {


    function displayCourseInfo(courseData, table) {
        for (var i = 0; i < courseData.content.length; i++){
            table.append(makeRow(courseData.name, courseData.content[i]));
        }
        table.children().each(function(){
            if( $(this).text().trim() === '' ) {
                $(this).remove();
            }
        });
    }

    function makeRow(name, content) {
        var rowString = "<tr class='tablerow'>";
        rowString += "<td>" + name + "</td><td>" + content.eventType + "</td><td>" + content.date + "</td>";
        return rowString + "<tr>";
    }

    function appendToDay(selector, counter){
        console.log(counter);
        counter++;
        if (counter > 5) return;
        selector.append('<div class="form-group"><label>Course name:</label><input class="form-control"></div><div class="form-group"><label>Time:</label><input class="form-control"></div><div class="form-group"><label>Location:</label><input class="form-control"></div>');
    }

    function displayMoreInfo(data, rowIndex, tableBody) {
        var date = data.content[rowIndex].date;
        var startTime = data.content[rowIndex].startTime;
        var endTime = data.content[rowIndex].endTime;
        var eventType = data.content[rowIndex].eventType;

        var modalDisplay = $('#detail-info-modal');
        $('.modal-title').html(data.name);
        $('.modal-body').html('<b>Date:</b> ' + date);
        $('.modal-body').append('<br><b>Start:</b> ' + startTime);
        $('.modal-body').append('<br><b>End:</b> ' + endTime);
        $('.modal-body').append('<br><b>Type:</b> ' + eventType);
        modalDisplay.modal('show');
    }


    function getData() {
        $.get("127.0.0.1/courses", function(data) {
            var tableBody = $("#tablebody");
            displayCourseInfo(data, tableBody);
            rowElements = $('.tablerow');
            rowElements.on("click", function(ev) {
                displayMoreInfo(data, $(this).index(), tableBody);
            });


            $( "#add_course_btn" ).click(function(e) {
                e.preventDefault();
                countCourses++;
                if (countCourses > 5) return;
                $("#course_info").append('<br><br><form class="form-inline" role="form"><div class="form-group"> <label>Course Name:</label><br><input class="form-control"></div><br><br><div class="form-group"><label>Start Date:</label><br><input class="form-control"></div><br><br><div class="form-group"><label>End Date:</label><br><input class="form-control"></div>');
            });

            $("#add_monday_btn").click(function(e){
                e.preventDefault();
                appendToDay($("#monday"),countMonday);
            });
        });
    }

    getData();
});
