function getServerData(url, success) {
	$.ajax({
		dataType : "json",
		url : url
	}).done(success);
}
var task;
var s;
//$('#taskId').append("Task n° ");
function getTask(taskInfo) {
	task = taskInfo;
	
	$('#taskId').html("Task n° "+taskInfo.task.id);
	$('#ata').html("Ata Category        : "+JSON.stringify(taskInfo.task.ataCategory));
	$('#startDate').html("Start date    : "+JSON.stringify(taskInfo.task.startTime));
	$('#endDate').html("End date : "+JSON.stringify(taskInfo.task.endTime));
	$('#description').html("Description : "+JSON.stringify(taskInfo.task.description));
	$('#periodicity').html("Periodicity : "+JSON.stringify(taskInfo.task.periodicity));
	$('#hangarNeed').html("Hangar Need 	: "+taskInfo.task.hangarNeed);
	$('#mro').html("Mro :  "+taskInfo.mro.name);
	
	
	/*var templateTaskView = _.template($('#taskViewScript').html());
	var html = templateTaskView({
		"ata" : JSON.stringify(taskInfo.tasklist[0].ataCategory),
		"id" : JSON.stringify(taskInfo.tasklist[0].id),
		"qualification" : JSON.stringify(taskInfo.tasklist[0].description),
		"startDate" : JSON.stringify(taskInfo.tasklist[0].startTime),
		"endDate" : JSON.stringify(taskInfo.tasklist[0].endTime),
		"description" : JSON.stringify(taskInfo.tasklist[0].description),
		"periodicity" : JSON.stringify(taskInfo.tasklist[0].periodicity),
		"hangarNeed" : JSON.stringify(taskInfo.tasklist[0].hangarNeed),
		"mro" : JSON.stringify(taskInfo.mro.name),

	});
	
	if (taskInfo.tasklist[0].taskStatus == 1) {
		// s="ws/task/add"
		$('#buttons')
				.append(
						'<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Add</button>');
		getServerData("ws/mro/all", getAllMro);
	} else if (taskInfo.tasklist[0].taskStatus == 2) {
		// s="ws/task/add"
		$('#buttons')
				.append(
						'<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Edit</button>');
		getServerData("ws/mro/all", getAllMro);
	} else if (taskInfo.tasklist[0].taskStatus == 3) {
		// s="ws/task/add"
		$('#buttons')
				.append(
						"<button type=\"button\" class=\"btn btn-default btn-xl\">Remove</button>");
	}
	$('#taskView').append(html);
	*/

}
function getAllMro(result) {
	var cpt=[result.length];
	var tab = $('#mroList').DataTable({});
	for (var i = 0; i < result.length; i++) {
		cpt[i]=i;
		tab.row
				.add(
						[
							
								JSON.stringify(result[i].id),
								JSON.stringify(result[i].name),
								JSON.stringify(result[i].qualification),
								"<button type='button' class='btn btn-primary' id='button"
										+ i
										+ "'>"
										+ "<span class='glyphicon glyphicon-ok'></span>"
										+ "</button>"

						]).draw(false);
	}
	$(function(){
		$("#button"+cpt[i]).click(function(){
			alert(cpt[i]);
			//getServerData("ws/example/aircraft",callDone);
		});
	});
	
	$('#mroList tbody').on('click', 'tr', function() {
		if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
        	tab.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
		var data = tab.row(this).data();
		
		document.getElementById("mroSelected").innerHTML = "<h5><b>Mro : </b>"+data[1]+"</h5>";
		

	});
}

var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL
			.split('&'), sParameterName, i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};

$(function() {
	var x = getUrlParameter('id');
	getServerData("ws/task/" + x, getTask);
});
