'use strict'

var windsOfWar = angular.module("windsOfWar", ['ngRoute']);

windsOfWar.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'index.html',
		controller: 'home'
	})
.otherwise({redirectTo:'/'})
});

windsOfWar.controller('home', function($http, $scope){
	$scope.chars = [
		{image: "view/img/1.jpg", id: "love"},
		{image: "view/img/2.jpg"},
		{image: "view/img/1.jpg"},
		{image: "view/img/2.jpg"},
		{image: "view/img/1.jpg"},
		{image: "view/img/2.jpg"},
		{image: "view/img/1.jpg"},
		{image: "view/img/2.jpg"},
		{image: "view/img/1.jpg"},
		{image: "view/img/2.jpg"}
	];
	$scope.hoverIn = function(char){
		console.log("char is", char);
		var myregexp = new RegExp(/[0-9]{1}/);
		var array    = myregexp.exec(char.image);
		var myIndex = array[0];
		$scope.setCurrentGrid(myIndex);
	}
	$scope.hoverOut = function(){
		console.log("im out");
	}
	$scope.setCurrentGrid = function(thisGridIndex){
		$scope.currentGrid = thisGridIndex;
	}
	$scope.currentGrid = "null";
	$scope.appendCard = function(domElement, cardIndex){
		jQuery(domElement).append("<img ng-src=\"view/img/1.jpg\" ng-mouseover=\"hoverIn(chars["+cardIndex+"])\" ng-mouseleave=\"hoverOut()\" src=\"view/img/1.jpg\" />");
		console.log("hu");
		console.log(currentGrid);
	}
});
