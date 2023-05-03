
let colorsArray = []
let pickedColor = ""
let pickedMode = ""
let url = ""

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault()
    createUrl()
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        colorsArray = data.colors
        render()  
    })
})

function createUrl() {
    pickedColor = document.getElementById("color").value.slice(1).toUpperCase()
    pickedMode = document.getElementById("mode").value
    url = `https://www.thecolorapi.com/scheme?hex=${pickedColor}&mode=${pickedMode}&count=4`
}

function getColorSchemeHtml() {
    let html = getColorHtml(`#${pickedColor}`)

    colorsArray.forEach(color => {
        html += getColorHtml(color.hex.value)
    })
    return html
}

function getColorHtml(color) {
    return `<div class="color">
                <div class="color-box" style="background-color:${color};"></div>
                <h3 class="color-value">${color}</h3>
            </div>
            `
}

function render() {
    document.getElementById("colors").innerHTML = getColorSchemeHtml()
}

