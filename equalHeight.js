var equalHeight = function(mainEl, setEl){

	var elHeight = 0;
	

	jQuery(mainEl).each(function(){
		jQuery(this).find(setEl).height()
		if( elHeight < jQuery(this).find(setEl).height() ) {
			elHeight = jQuery(this).find(setEl).height();
		}
	});

	jQuery(mainEl).find(setEl).height(elHeight);
	

};