(function($){

	var result;
	var global_url  = "";
	var global_title  = "";
	var global_desc  = "";


	// var code = 'var meta = document.querySelector("meta[name=\'description\']");' + 
	// 'if (meta) meta = meta.getAttribute("content");' +
	// '({' +
	// 	'    title: document.title,' +
	// 	'    description: meta || ""' +
	// 	'});';

// chrome.tabs.executeScript({code: code}, function(results) {
// 	if (!results) {
// 		return;
// 	}
// 	result = results[0];
// 	$(".inbound-desc").val(result.description);
// 	global_desc = result.description;
// });

chrome.tabs.getSelected(null,function(tab) {
	var tablink = tab.url;
	global_url = tab.url;
	global_title = tab.title;

	
	$(".inbound-url").val(tablink);
	$(".inbound-title").val(tab.title);
});



$(".post-inbound").on("click", function(){
	
	var this_url = $(".inbound-url").val();
	var this_title = $(".inbound-title").val();

	var data = {
		url : this_url,
		title : this_title,
	};

	chrome.storage.sync.set({inbound_data : data}, function() {
		console.log('Settings saved');
	});

	chrome.tabs.create({url: "http://inbound.org/submit"});
});

$(".remove-inbound").on("click", function(){
	$(".inbound-url").val('');
	$(".inbound-title").val('');

	chrome.storage.sync.remove("inbound_data");
});
})(jQuery);