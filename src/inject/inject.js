(function($){
	$(document).ready(function(){
		console.log("ROES");
		chrome.storage.sync.get('inbound_data',function(obj){
				console.log(obj);
				if(obj != null){
					$(".validate-form input[name='url']").val(obj.inbound_data.url);
					$(".validate-form input[name='title']").val(obj.inbound_data.title);
					$(".validate-form textarea#preview-summary").text(obj.inbound_data.desc);
					$(".note-editable, .note-codable").code(obj.inbound_data.desc);
					$(".note-editable").text(obj.inbound_data.desc);
				}
		});



	});
})(jQuery);