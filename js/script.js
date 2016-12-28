(function () {

  // globals
  var wrapper = '.wrapper';

  // Selectors
  var $wrapper,
	  $mainMenu,
	  $mainOpener;

  // start
  $(init);

  function init() {
	bindSelectors();
	bindMenuEvents();
  }

  function bindSelectors() {
	$wrapper = $(wrapper);
	$mainMenu = $wrapper.find('.main-menu');
	$mainOpener = $wrapper.find('.menu-opener');
  }

  function bindMenuEvents() {

	$mainOpener.on('click', function (e) {
	  e.preventDefault();
	  $mainMenu.toggleClass('expand');
	  $mainOpener.toggleClass('fa-bars fa-times');
	});
  }

})();

