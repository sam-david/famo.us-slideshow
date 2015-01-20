define(function(require, exports, module) {
	var Engine  = require('famous/core/Engine');

	//utility
	var Utility = require('famous/utilities/Utility');

	var AppView = require('views/AppView');

	// import slidedata
	var SlideData = require('data/SlideData');

	var mainContext = Engine.createContext();

	mainContext.setPerspective(1000);

	// simple Get request to the Picasa api with callback
    Utility.loadURL(SlideData.getUrl(), initApp);

    function initApp(data) {
        // parses out reponse data and retrieves array of urls
        data = SlideData.parse(data);

        // instantiates AppView with our url data
        var appView = new AppView({ data : data });

        mainContext.add(appView);
    }

});