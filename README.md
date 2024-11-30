# FitText.js, um plugin para aumentar o tamanho da fonte na web
FitText é um plugin para jQuery. Neste repositório eu fiz a conversão dele para javascript vanilla e mais algumas alterações.

FitText torna os tamanhos de fonte flexíveis. Use este plugin no seu design responsivo para redimensionamento dos textos com base em proporções.

## Como funciona
Aqui está uma configuração simples do FitText:

```html
<script src="fitText.js"></script>
<script>
  fitText(document.querySelector("h1"), { compressor: 1, minFontSize: "20px", maxFontSize: "40px" })
</script>
```

Confira o repositório original em jquery
[https://github.com/davatron5000/FitText.js](https://github.com/davatron5000/FitText.js)
