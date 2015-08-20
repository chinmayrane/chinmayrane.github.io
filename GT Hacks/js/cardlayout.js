// jQuery.noConflict()

// ;(function ( container, document, $, undefined ) { 

//     function createModule()  { 
//         var localVariable = "local variable",
//         myPublicProperty = "public variable",
//         init = function() {
//         	var cards = [1,2,2,3,4,2,1];
//         	// alert("I am Invoked");
//         	for(var i=0;i<cards.length;i++){
//         		// cards[i] = 
//         		// var $card = $('.cardLayout')
//         		  var $div = $('div[id^="cardLayout"]:last');
// 		          var num = parseInt($div.prop('id').match(/\d+/g), 10) +1;
// 		          var $clonedDiv = $div.clone();
// 		          if(cards[i] ==1 ){
// 		          	$clonedDiv.css({'width':'25%'});
// 		          }else if(cards[i] ==2){
// 		          	$clonedDiv.css({'width':'50%'});
// 		          }else if(cards[i] ==3){
// 		          	$clonedDiv.css({'width':'75%'});
// 		          }else if(cards[i] ==4){
// 		          	$clonedDiv.css({'width':'100%'});
// 		          }
// 		          $clonedDiv.appendTo('.cardHolder');
//         	}

//         }(); // self invoking

//         // function myPrivateMethod() {
          
//         // } 
//         // function myPublicMethod() {
//         //     return "public function";
//         // }

//         // var contract = {
//         //     myPublicProperty : myPublicProperty,
//         //     myPublicMethod : myPublicMethod
//         // }

//         // // Public interface (properties and methods)
//         // return contract;

//     } // end module

//     // Public API (assigns to my namespace)
//     container.ModuleName = createModule();

// })( window.mynamespace || (window.mynamespace = {}), jQuery, document ); //end mynamespace.ModuleName (create namespace and context)

$(document).ready(function(){
	var cards = [1,2,1,4,2,1,1,1,1,1,1,1,1,2,2,2,3,1,1,3];
        	// alert("I am Invoked");
        	for(var i=0;i<cards.length;i++){
        		// cards[i] = 
        		// var $card = $('.cardLayout')
        		  var $div = $('div[id^="cardLayout"]:last');
		          var num = parseInt($div.prop('id').match(/\d+/g), 10) +1;
		          var $clonedDiv = $div.clone();
		          $clonedDiv.prop('id','cardLayout'+num);
		          $clonedDiv.removeAttr('hidden');

		          if(cards[i] ==1 ){
		          	$clonedDiv.css({'width':'25%'});
		          	$clonedDiv.text('25% Width');
		          }else if(cards[i] ==2){
		          	$clonedDiv.css({'width':'50%'});
		          	$clonedDiv.text('50% Width');
		          }else if(cards[i] ==3){
		          	$clonedDiv.css({'width':'75%'});
		          	$clonedDiv.text('75% Width');
		          }else if(cards[i] ==4){
		          	$clonedDiv.css({'width':'100%'});
		          	$clonedDiv.text('100% Width');
		          }
		          $clonedDiv.appendTo('.cardHolder');
		    }
});