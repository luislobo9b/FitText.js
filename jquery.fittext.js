$.fn.fitText = fitText

function fitText(options = {}) {
	options = {
		compressor: 1,
		minFontSize : -Infinity,
		maxFontSize : Infinity,
		...options
	}
	options.minFontSize = parseFloat(options.minFontSize)
	options.maxFontSize = parseFloat(options.maxFontSize)

	const { compressor, minFontSize, maxFontSize } = options,
		$elements = this

	$elements.each((_, element) => {
		const $element = $(element)

		resizer()
		window.addEventListener("resize", resizer)
		window.addEventListener("orientationchange", resizer)

		function resizer() {
			$element.css("font-size", limiter($element.width() / (compressor * 10), minFontSize, maxFontSize))
		}

		function limiter(number, min, max) {
			return Math.max(Math.min(number, max), min)
		}
	})
}