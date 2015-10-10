var rowElements;


$(document).ready(function() {


    function displayCourseInfo(courseData, table) {
        table.append(makeRow(courseData));
    }

    function makeRow(courseData) {
        var rowString = "<tr class='tablerow'>";
        rowString += "<td>" + courseData.name + "</td><td>" + courseData.type + "</td><td>" + courseData.time + "</td>";
        return rowString + "<tr>";
    }

    function displayMoreInfo(rowIndex, tableBody) {
        var detailInfoElement = $("#detailinfo");
        detailInfoElement.html("");
        detailInfoElement.append("adsf" + rowIndex);
    }

    var tableBody = $("#tablebody");
    var courseData = {'name': 'name test', 'type': 'lecture', 'time': 12345};

    displayCourseInfo(courseData, tableBody);
    displayCourseInfo(courseData, tableBody);
    displayCourseInfo(courseData, tableBody);
    rowElements = $('.tablerow');


    for (var i=0; i<rowElements.length; i++) {
        rowElements.on("click", function(ev) {
            displayMoreInfo($(this).index(), tableBody);
        });
    }

});




