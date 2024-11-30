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
			$element.css("font-size", Math.max(Math.min($element.width() / (compressor*10), maxFontSize), minFontSize))
		}

		// Call once to set.
		resizer()

		// Call on resize. Opera debounces their resize by default.
		window.addEventListener("resize", resizer)
		window.addEventListener("orientationchange", resizer)
	})
}