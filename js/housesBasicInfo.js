$(document).ready(function() {
	var housesTemplate = $("#houses-template").html();
	var compiledHousesTemplate = Handlebars.compile(housesTemplate);

	$.ajax("https://api.myjson.com/bins/1gsytd").done(function (houses) {
		$(".houses-list-container").html(compiledHousesTemplate(houses));
	});
});
