//TODO: remove after API is done
var countCourses = 0;
var sample = {
"name": "Java Programming",
"semester": 1,
"content" : [
    {
      "date":"25.10.15",
      "startTime":"10:30",
      "endTime":"11:30",
      "eventType": "lecture"
    },
    {
      "date":"27.10.15",
      "startTime":"10:30",
      "endTime":"11:30",
      "eventType":"lecture"
    },
    {
      "date":"16.09.15",
      "startTime":"13:30",
      "endTime":"14:30",
      "eventType":"tutorial"
    },
    {
      "date":"28.11.15",
      "startTime":"13:40",
      "endTime":"15:00",
      "eventType":"tutorial"
    },
    {
      "date":"28.09.15",
      "startTime":"13:40",
      "endTime":"15:00",
      "eventType":"lab"
    },
    {
      "date":"28.11.15",
      "startTime":"09:00",
      "endTime":"12:00",
      "eventType":"exam"
    }
  ]
}


$(document).ready(function() {


    function displayCourseInfo(courseData, table) {
      for (var i = 0; i < courseData.content.length; i++){
        table.append(makeRow(courseData.name, courseData.content[i]));
      }
    }

    function makeRow(name, content) {
        var rowString = "<tr>";
        rowString += "<td>" + name + "</td><td>" + content.eventType + "</td><td>" + content.date + "</td>";
        return rowString + "<tr>";
    }


    var pageElement = $("#tablebody");
    //var courseData = {'name': 'name test', 'type': 'lecture', 'time': 12345};

    displayCourseInfo(sample, pageElement);
    displayCourseInfo(sample, pageElement);
    displayCourseInfo(sample, pageElement);

    $( "#add_course_btn" ).click(function(e) {
      countCourses++;
      if (countCourses > 5) return;
      $("#course_info").append('<br><br><form class="form-inline" role="form"><div class="form-group"> <label>Course Name:</label><br><input class="form-control" id="email"></div><br><br><div class="form-group"><label>Start Date:</label><br><input class="form-control" id="pwd"></div><br><br><div class="form-group"><label>End Date:</label><br><input class="form-control" id="email"></div>');
    });

});
