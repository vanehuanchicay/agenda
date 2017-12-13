$(document).ready(() => {

});

function add(){
	var name = $("#nameInput").val(); // rescatando el nombre
	var phone = $("#phoneInput").val(); 
	var mail = $("mailInput").val();

	$("#info").append("<div class='col-md-9 contact'>" + 
				"<h3>" + name + "</h3>" +
				"<hr>" +
				"<h4>" + phone + "</h4>" +
				"<hr>" + 
				"<h5>" + mail + "</h5>" +
				"<a><i class='fa fa-trash' aria-hidden='true'></i></a>" +
			"</div>");
	$(".fa-trash").click(function(){
		$(this).parent().parent().remove();
	});

}