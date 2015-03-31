angular.module('Instagram')
	.controller('LoginCtrl', function($scope, $window, $location, $rootScope, $auth) {

		$scope.instagramLogin = function() {
			$auth.authenticate('instagram')
				.then(function(response) {
					$window.localStorage.currentUser = JSON.stringify(response.data.user);
					$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
				})
		}
	})