(function (ng) {

	var demo = angular.module('Bootstrap.LoadingScreen.Demo', []);

	demo.constant('Stylesheets', [
		{ name:'Default',  href:'//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css' },
		{ name:"Cerulean", href:"//maxcdn.bootstrapcdn.com/bootswatch/3.3.0/cerulean/bootstrap.min.css" },
		{ name:'Cosmo',    href:'//maxcdn.bootstrapcdn.com/bootswatch/3.3.0/cosmo/bootstrap.min.css' },
		{ name:"Darkly",   href:"//maxcdn.bootstrapcdn.com/bootswatch/3.3.0/darkly/bootstrap.min.css" },
		{ name:"Flatly",   href:"//maxcdn.bootstrapcdn.com/bootswatch/3.3.0/flatly/bootstrap.min.css" },
		{ name:"Journal",  href:"//maxcdn.bootstrapcdn.com/bootswatch/3.3.0/journal/bootstrap.min.css" },
		{ name:"Lumen",    href:"//maxcdn.bootstrapcdn.com/bootswatch/3.3.0/lumen/bootstrap.min.css" },
		{ name:"Readable", href:"//maxcdn.bootstrapcdn.com/bootswatch/3.3.0/readable/bootstrap.min.css" },
		{ name:'Simplex',  href:'//maxcdn.bootstrapcdn.com/bootswatch/3.3.0/simplex/bootstrap.min.css' }
	]);

	demo.controller('HeadController', [
		'$rootScope', '$scope',
		'Stylesheets',
		function ($root, $scope, styles)
		{
			$root.styles = styles;
			var i = Math.floor(Math.random() * styles.length);
			$root.style = {
				index: i,
				name: styles[i].name,
				href: styles[i].href
			};
		}
	]);

	demo.controller('ConfiguratorController', [
		'$rootScope', '$scope',
		function ($root, $scope)
		{
			/*$scope.styles = $root.styles;
			$scope.style = $root.style;*/
		}
	]);

})(angular);
