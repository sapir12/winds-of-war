var app = angular.module("winds", []).config(['$routeProvider']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
	templateUrl: 'index.html',
	controller: 'gameCtrl'
	})
	.otherwise({redirectTo: '/'});
});

app.controller('gameCtrl', function($scope){
	$scope.card = {key: 'value', key2: 'value2'};
});