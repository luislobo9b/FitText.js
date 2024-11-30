$.fn.fitText = function( options = {} ) {
	// Setup options
	options = {
		compressor: 1,
		minFontSize : -Infinity,
		maxFontSize : Infinity,
		...options
	}
	options.minFontSize = parseFloat(options.minFontSize)
	options.maxFontSize = parseFloat(options.maxFontSize)

	const { compressor, minFontSize, maxFontSize } = options

	const $elements = this

	return $elements.each((_, element) => {
		// Store the object
		const $element = $(element)

		// Resizer() resizes items based on the object width divided by the compressor * 10
		const resizer = () => {
			$element.css("font-size", limiter($element.width() / (compressor * 10), minFontSize, maxFontSize))
		}

		// Call once to set.
		resizer()

		function limiter(number, min, max) {
			return Math.max(Math.min(number, max), min)
		}

		window.addEventListener("resize", resizer)
		window.addEventListener("orientationchange", resizer)
	})
}