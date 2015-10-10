






$(document).ready(function() {


    function displayCourseInfo(courseData, table) {
        table.append(courseData.name);
    }


    var pageElement = $("#display");
    var courseData = {'name': 'name test'};

    displayCourseInfo(courseData, pageElement);

});




