






$(document).ready(function() {


    function displayCourseInfo(courseData, table) {
        table.append(makeRow(courseData));
    }

    function makeRow(courseData) {
        var rowString = "<tr>";
        rowString += "<td>" + courseData.name + "</td><td>" + courseData.type + "</td><td>" + courseData.time + "</td>";
        return rowString + "<tr>";
    }


    var pageElement = $("#tablebody");
    var courseData = {'name': 'name test', 'type': 'lecture', 'time': 12345};

    displayCourseInfo(courseData, pageElement);
    displayCourseInfo(courseData, pageElement);
    displayCourseInfo(courseData, pageElement);

});




