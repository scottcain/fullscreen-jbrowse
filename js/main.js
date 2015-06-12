define([
           'dojo/_base/declare',
           'dojo/query',

	   	   'dijit/form/Button',
           'JBrowse/Plugin'
       ],
       function(
           declare,
           query,
	   	   
		   dijitButton,
           JBrowsePlugin
       ) {
return declare( JBrowsePlugin,
{
    constructor: function( args ) {
		
		var thisBrowser = this.browser;
        var makeFull = this.makeFullscreenButton();
		

		thisBrowser.afterMilestone('initView', function() {
	
			var myMenu = thisBrowser.menuBar;
			
        	console.log( "fullpage plugin starting" );

			myMenu.appendChild(makeFull);
		
		})
        
		console.log( "fullpage plugin added" );
	},

    makeFullscreenButton: function () {
	
	var goFull = function(){
		var ele = document.getElementById("GenomeBrowser");
		var doc = document;
		// Recent api changes mean that browser might be looking for Fullscreen
		// or FullScreen 


	
			console.log("entering fullpage");

                 var url = '/tools/genome/jbrowse/full.html';
                 var get = document.location.search;
                 var newWindow = window.open(url+get, "WormBase JBrowse");

	};

	var selectFullButton = new dijitButton({
		className :"fullscreen-button",
		innerHTML:"Full page",
		title: "Creates a new window for just JBrowse",
		onClick : function(){
	
			goFull();
		
		}
	});

	return selectFullButton.domNode;
    }
}); 
});
