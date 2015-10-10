var timer = 0;
var currentTimerId = -1;
var courseData = [];
var currentTime = [];
var ids = [];

$(document).ready(function() {


    function displayCourseInfo(courseData, table) {
        for (var i = 0; i < courseData.length; i++){
            table.append(makeRow(courseData[i].coursename, courseData[i].totaltime, ids.length));
            ids.push(ids.length);
            currentTime.push(0);
        }
        table.children().each(function(){
            if( $(this).text().trim() === '' ) {
                $(this).remove();
            }
        });
        for (i = 0; i < courseData.length; i++){
            (function(j){
            $("#startButton-" + j).on('click', function() {
                currentTimerId = j;
            });})(i);
        }
        for (i = 0; i < courseData.length; i++){
            $("#stopButton-" + i).on('click', function() {
                stopTimer();
            });
        }
    }

    function makeRow(coursename, totaltime, courseId) {
        var rowString = "<tr class='tablerow'>";
        rowString += "<td>" + coursename + "</td><td><span id='totaltime-" + courseId + "'>" +
            totaltime + "</span></td>" +

            "<td><span id='currenttime-" + courseId + "'>" +
            0 + "</span></td>" +

            "<td><button type='button' class='btn btn-default btn-sm' id='startButton-" + courseId + "'>" +
                "start" +
            "</button>" +
            "<span> </span><button type='button' class='btn btn-default btn-sm' id='stopButton-" + courseId +
            "'>"+
                "stop" +
            "</button></td>";
        return rowString + "<tr>";
    }

    function startTimer() {
        timer = setInterval(function() {
            if(currentTimerId >= 0) {
                courseData[currentTimerId].totaltime += 1;
                currentTime[currentTimerId] += 1;
                refreshView(currentTimerId);
            }
        }, 1000);
    }

    function refreshView(id) {
        $("#totaltime-" + id).html(courseData[id].totaltime);
        $("#currenttime-" + id).html(currentTime[id]);
    }

    function stopTimer(courseId) {
        if(currentTimerId > -1) {
            currentTimerId = -1;
        }
        // otherwise ignore
    }

    var tableBody = $("#tablebody");
    courseData1 = {'coursename': 'Intro to Java', 'totaltime': 123};
    courseData2 = {'coursename': 'Intro to JavaScript', 'totaltime': 321};
    courseData3 = {'coursename': 'Python is the best', 'totaltime': 999};
    courseData4 = {'coursename': 'PHP is stupid', 'totaltime': 999};
    courseData5 = {'coursename': 'OCaml rocks', 'totaltime': 999};
    courseData = [courseData1, courseData2, courseData3, courseData4, courseData5];
    displayCourseInfo(courseData, tableBody);

    startTimer();
});
