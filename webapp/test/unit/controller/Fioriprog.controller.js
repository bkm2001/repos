/*global QUnit*/

sap.ui.define([
	"basicprojectname/controller/Fioriprog.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Fioriprog Controller");

	QUnit.test("I should test the Fioriprog controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
