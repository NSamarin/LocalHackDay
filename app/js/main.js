






$(document).ready(function() {


    function displayCourseInfo(courseData, table) {
        table.append(makeRow(courseData));
    }

    function makeRow(courseData) {
        var rowString = "<tr class='tablerow'>";
        rowString += "<td>" + courseData.name + "</td><td>" + courseData.type + "</td><td>" + courseData.time + "</td>";
        return rowString + "<tr>";
    }

    var tableBody = $("#tablebody");
    var courseData = {'name': 'name test', 'type': 'lecture', 'time': 12345};

    displayCourseInfo(courseData, tableBody);
    displayCourseInfo(courseData, tableBody);
    displayCourseInfo(courseData, tableBody);
    var rowElements = $('.tablerow');


    for (var i=0; i<rowElements.length; i++) {
        rowElements.on("click", function() {
            alert(i);
        });
    }

});




