$.fn.fitText = function( kompressor, options ) {
	// Setup options
	let compressor = kompressor || 1,
			settings = $.extend({
				minFontSize : -Infinity,
				maxFontSize : Infinity
			}, options)

	return this.each(function() {
		// Store the object
		let $this = $(this)

		// Resizer() resizes items based on the object width divided by the compressor * 10
		let resizer = function () {
			$this.css("font-size", Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)))
		}

		// Call once to set.
		resizer()

		// Call on resize. Opera debounces their resize by default.
		$(window).on("resize.fittext orientationchange.fittext", resizer)
	})
}