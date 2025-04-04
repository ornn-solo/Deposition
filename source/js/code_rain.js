function buildRain() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    // canvas.style.opacity = 0.5;
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style["z-index"] = -2;


    const width = canvas.width = screen.availWidth;
    const height = canvas.height = screen.availHeight;
    const ctx = canvas.getContext("2d");
    // rotate random angle
    // ctx.translate(width / 2, height / 2);
    // ctx.rotate( Math.random()*270* Math.PI/180);
    const arr = Array(Math.ceil(width / 10)).fill(0);
    // const diagonal = Math.sqrt(width*width+height*height);
    const str = "01".split("");
    var rain = function() {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "#0f0";
        arr.forEach(function (value, index) {
            ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, height-value -10);
            arr[index] = value >= height || value > 8888 * Math.random() ? 0 : value + 10;
        });
    }
    setInterval(rain, 30);
}

buildRain();

