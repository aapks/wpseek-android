var wpseek = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        window.open = cordova.InAppBrowser.open;
    	wpseek.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    	var networkState = navigator.connection.type;

        var parentElement = document.getElementById(id);
    	var listeningElement = parentElement.querySelector('.listening');
        var errorElement = parentElement.querySelector('.error');
        
        if( networkState == Connection.NONE ) {      	
        	listeningElement.setAttribute('style', 'display:none;');
        	errorElement.setAttribute('style', 'display:block;');
        } else {
        	window.setTimeout(function() {
        	    window.open('http://android.wpseek.com/?version=1.2.8', '_blank', 'location=no');
        	}, 500);
        }
    }
};
