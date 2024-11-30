$.fn.fitText = function( options = {} ) {
	// Setup options
			settings = $.extend({
				compressor: 1,
				minFontSize : -Infinity,
				maxFontSize : Infinity
			}, options)
			settings.minFontSize = parseFloat(settings.minFontSize)
			settings.maxFontSize = parseFloat(settings.maxFontSize)

	return this.each(function() {
		// Store the object
		let $this = $(this)

		// Resizer() resizes items based on the object width divided by the compressor * 10
		let resizer = function () {
			$this.css("font-size", Math.max(Math.min($this.width() / (settings.compressor*10), settings.maxFontSize), settings.minFontSize))
		}

		// Call once to set.
		resizer()

		// Call on resize. Opera debounces their resize by default.
		$(window).on("resize.fittext orientationchange.fittext", resizer)
	})
}