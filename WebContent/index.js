sap.ui.define([
	
	"sap/ui/core/ComponentContainer"

], function (ComponentContainer) {
	"use strict";


	
	new ComponentContainer({
		name: "test",
		settings : {
			id : "test"
		},
		async: true
	}).placeAt("content");

});