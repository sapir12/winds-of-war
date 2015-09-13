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
	$scope.skills = '';
	$scope.refineExecute = function(javascriptString, lateParameter) { //parses String into javascript code as the value of a given variable; and executes it.
		var a_b_c_iii = null;
		eval("a_b_c_iii = "+javascriptString);
		if (lateParameter){
			a_b_c_iii(lateParameter);
			console.log(lateParameter); // CAN BE DELETED
		}else{
			a_b_c_iii();
		}
	}
	$scope.refine = function(variable, javascriptString) { //parses String into javascript code as the value of a given variable;
		eval("var "+variable+" = "+javascriptString);
	}
	$scope.exampleCard = {
		health: 0,
		defense: 0
	};
	$http.get("http://localhost:3001/skills")
		.then(function(data){//succes
			var skills = data.data;
			//console.log(skills);
			$scope.skills = skills;
		},
		function(data){//error
			alert('error: failed to load the game');
		});
});