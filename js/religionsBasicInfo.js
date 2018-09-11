$(document).ready(function() {
	var religionsTemplate = $("#religions-template").html();
	var compiledReligionsTemplate = Handlebars.compile(religionsTemplate);

	$.ajax("https://api.myjson.com/bins/19hkk9").done(function (religions) {
		$(".religions-list-container").html(compiledReligionsTemplate(religions));
	});
});