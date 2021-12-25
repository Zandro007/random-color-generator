const colorContainer = document.getElementById('colorCode');
const genButton = document.getElementById('genNewBtn');
const symbols = "0123456789ABCDEF";
var color = "";

genButton.addEventListener('click', function(){
    for(var i = 0; i < 6; i++){
        color += symbols[Math.floor(Math.random() * 16)];
    }

    colorContainer.innerHTML = "#" + color;
    document.body.style.background = "#"+color;
    color = "";
})