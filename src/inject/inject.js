(function($){
	$(document).ready(function(){
		chrome.storage.sync.get('inbound_data',function(obj){
				console.log(obj);
				if(obj != null){
					$(".validate-form input[name='url']").val(obj.inbound_data.url);
					$(".validate-form input[name='title']").val(obj.inbound_data.title);
				}
		});



	});
})(jQuery);