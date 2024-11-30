$.fn.fitText = function( options = {} ) {
	// Setup options
	settings = $.extend({
		compressor: 1,
		minFontSize : -Infinity,
		maxFontSize : Infinity
	}, options)
	settings.minFontSize = parseFloat(settings.minFontSize)
	settings.maxFontSize = parseFloat(settings.maxFontSize)

	const { compressor, minFontSize, maxFontSize } = settings

	const $elements = this

	return $elements.each(function() {
		// Store the object
		const $element = $(this)

		// Resizer() resizes items based on the object width divided by the compressor * 10
		const resizer = function () {
			$element.css("font-size", Math.max(Math.min($element.width() / (compressor*10), maxFontSize), minFontSize))
		}

		// Call once to set.
		resizer()

		// Call on resize. Opera debounces their resize by default.
		$(window).on("resize.fittext orientationchange.fittext", resizer)
	})
}