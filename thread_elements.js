//### THREAD ELEMENTS ###
function threadsReady() {
	
	jQuery.noConflict();
	var open = null;
	jQuery(document).ready(function(){
		jQuery('.pv-thred').click(function(){
		
		var id = jQuery(this).attr("id");
		
		//Dynamic content creation
		if(jQuery(this).data("embed") != '' && !(jQuery( '.pv-' + id + '>a>.pv-img_preview' ).length)) {
			var source = "http://cdn.guildwork.net/albums/images/"+ jQuery(this).data("embed") +".jpg";
			var img = jQuery(document.createElement('img'));
			img.attr('src', source);
			img.ready(function() {
				img.addClass( "pv-img_preview pv-img_round" );
				var a = jQuery(document.createElement('a'));
				a.attr('href', source);
				a.attr('target', '_blank');
				img.appendTo(a);
				a.appendTo('.pv-' + id);
				img.css( "display", "block" );
				jQuery('.pv-' + id).removeClass("pv-loading");
			});
		}
		if(jQuery(this).data("embed") == '' && !(jQuery( '.pv-' + id + '>p' ).length)) {
			var p = jQuery(document.createElement('p'));
			p.append("Not Found");
			p.appendTo('.pv-' + id);
			jQuery('.pv-' + id).removeClass("pv-loading");
		}
		
		//Open and close thread elements. Only one can stay open
		if(open != null && open != id) {
		jQuery('.pv-' + open).slideToggle("fast");
		jQuery('#' + open).removeClass("pv-thred_expanded");
		}
			if (jQuery('.pv-' + id).css("display") == "block") {
		jQuery(this).removeClass("pv-thred_expanded");
		open = null;
			} else {
		jQuery(this).addClass("pv-thred_expanded");
		open = id;
			}
			jQuery('.pv-' + id).slideToggle("fast");
		
		});
	});
	
}
