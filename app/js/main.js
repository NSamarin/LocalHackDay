var rowElements;

//TODO: remove after API is done
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
};




$(document).ready(function() {


    function displayCourseInfo(courseData, table) {
      for (var i = 0; i < courseData.content.length; i++){
        table.append(makeRow(courseData.name, courseData.content[i]));
      }
    }

    function makeRow(name, content) {
        var rowString = "<tr class='tablerow'>";
        rowString += "<td>" + name + "</td><td>" + content.eventType + "</td><td>" + content.date + "</td>";
        return rowString + "<tr>";
    }

    function displayMoreInfo(rowIndex, tableBody) {
        var detailInfoElement = $("#detailinfo");
        detailInfoElement.html("");
        var date = sample.content[rowIndex].date;
        var startTime = sample.content[rowIndex].startTime;
        var endTime = sample.content[rowIndex].endTime;
        var eventType = sample.content[rowIndex].eventType;

        var modalDisplay = $('#detail-info-modal');
        $('.modal-title').html(sample.name);
        $('.modal-body').html('<b>Date:</b> ' + date);
        $('.modal-body').append('<br><b>Start:</b> ' + startTime);
        $('.modal-body').append('<br><b>End:</b> ' + endTime);
        $('.modal-body').append('<br><b>Type:</b> ' + eventType);
        modalDisplay.modal('show');
    }

    var tableBody = $("#tablebody");
    displayCourseInfo(sample, tableBody);
    rowElements = $('.tablerow');

    // for (var i=0; i<rowElements.length; i++) {
        rowElements.on("click", function(ev) {
            displayMoreInfo($(this).index(), tableBody);
        });
    // }


});
