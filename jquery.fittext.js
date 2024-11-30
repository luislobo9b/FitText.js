function fitText(elements, options = {}) {
	elements = Array.isArray(elements) ? elements : [elements]

	options = {
		compressor: 1,
		minFontSize : -Infinity,
		maxFontSize : Infinity,
		...options
	}
	options.minFontSize = parseFloat(options.minFontSize)
	options.maxFontSize = parseFloat(options.maxFontSize)

	const { compressor, minFontSize, maxFontSize } = options

	elements.forEach(element => {
		resizer()
		window.addEventListener("resize", resizer)
		window.addEventListener("orientationchange", resizer)

		function resizer() {
			element.style.fontSize = limiter(getElementWidth(element) / (compressor * 10), minFontSize, maxFontSize) + "px"
		}

		function getElementWidth(element) {
			return Math.max(element.scrollWidth, element.offsetWidth, element.clientWidth)
		}

		function limiter(number, min, max) {
			return Math.max(Math.min(number, max), min)
		}
	})
}