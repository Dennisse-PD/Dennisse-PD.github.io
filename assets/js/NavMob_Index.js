/*
	Dennisse Pagan Davila  - Portfolio [NavMob_Index.js]
	
	Template used: Escape Velocity by HTML5 UP (lunzyde version)
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

		// Panel.
			$(
				'<div id="navPanel">' + '<nav>' +
					// Do not delete the comment below, it auto generates the nav buttons to mobile. Relevant when testing and doing a custom navPanel.
					// $('#nav').navList() +
				'<a class= "link depth-0" href = "#top" ><span class="indent-0"></span><i class="fas fa-home" aria-hidden="true"></i> Home</a > ' +
				'<a class="link depth-1" href="about.html"><span class="indent-0"></span><i class="fas fa-user" aria-hidden="true"></i> About</a>' +
				'<a class="link depth-0" href="games.html"><span class="indent-0"></span><i class="fas fa-gamepad" aria-hidden="true"></i> Projects</a>' +
				'<a class="link depth-0" href="https://dennisse-pd.medium.com"><span class="indent-0"></span><i class="fas fa-gamepad" aria-hidden="true"></i> Articles</a>' +
				'<a class="link depth-0" href="cv.html"><span class="indent-0"></span><i class="fas fa-book" aria-hidden="true"></i> CV</a>' +

				'</nav>' + '</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});		


})(jQuery);