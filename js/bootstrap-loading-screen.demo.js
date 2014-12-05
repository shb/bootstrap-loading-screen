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
			var si = Math.floor(Math.random() * styles.length);
			$root.style = {
				index: si,
				name: styles[si].name,
				href: styles[si].href
			};
			$root.$watch('style.index', function (val, old) {
				if (val != old) {
					$('body > *').fadeOut('fast').promise().done(function ()
					{
						$root.style.name = styles[val].name;
						$root.style.href = styles[val].href;
						$root.$apply('style');
						$('body > *').fadeIn('slow');
					});
				}
			});

			$root.icons = [
				{ name:"Circle",  glyph:"circle-o-notch" },
				{ name:"Gear",    glyph:"cog" },
				{ name:"Arrows",  glyph:"refresh" },
				{ name:"Spinner", glyph:"spinner" }
			];
			$root.sizes = [
				{ icon:'lg', title:'h4' },
				{ icon:'2x', title:'h4' },
				{ icon:'3x', title:'h3' },
				{ icon:'4x', title:'h2' },
				{ icon:'5x', title:'h1' }
			];
			var ii = Math.floor(Math.random() * $root.icons.length);
			var is = Math.floor(Math.random() * $root.sizes.length-1)+1;
			$root.icon = {
				index: ii,
				name: $root.icons[ii].name,
				glyph: $root.icons[ii].glyph,
				size: is,
				blur: Math.floor(Math.random() * 5)
			};
			$root.$watch('icon.index', function (val, old) {
				if (val != old) {
					$root.icon.name = $root.icons[val].name;
					$root.icon.glyph = $root.icons[val].glyph;
				}
			});
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

jQuery(document).ready(function () {
	$('.loading-screen').fadeIn('slow');
});

jQuery(window).load(function () {
	$('.container-fluid').fadeIn('slow');
});
