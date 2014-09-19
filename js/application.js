/* Chinmay Rane github.io */

var gpage = gpage || {};

gpage.aboutmetab = (function($,doc,win,undefined){

	var init = function(){
		addEvents();
	}();

	function addEvents(){
		$('.aboutme').click(function(){
			//$('.aboutmedescription').removeAttr('hidden').show();
			$(".mainContent,footer").fadeTo('slow', 0.1);
			$('.lightbox').css('display','block');
			$('.lb-outerContainer').css('display','block');
			$('.mainContent').css('pointer-events', 'none');
		});

		$('.lb-closeNow').click(function(){
			 $('.lightbox').css('display','none');
			 $('.lb-outerContainer').hide();
			 $('.mainContent,footer').fadeTo('slow',1);
			 $('.mainContent').css('pointer-events', 'auto');

		});


	}


})(jQuery,document,window);