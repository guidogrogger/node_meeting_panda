
function drawPanda(canvas) {
    var ctx = canvas.getContext("2d");

    ctx.lineWidth = 9;

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 50, 40, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(150, 50, 40, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(70, 80, 20, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(130, 80, 20, 0, 2 * Math.PI);
    ctx.fill();


    var noseX = 100;
    var noseY = 120;
    var noseSize = 10
    var noseLenght = 30

    var lippSize = 30
    var smileFactor = -.8

    var mouthX = noseX;
    var mouthY = noseY + noseLenght;

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(noseX, noseY, noseSize, Math.PI, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(noseX, noseY);
    ctx.lineTo(mouthX, mouthY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(mouthX, mouthY);
    ctx.quadraticCurveTo(mouthX - lippSize / 2, mouthY + lippSize * smileFactor, mouthX - lippSize, mouthY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(mouthX, mouthY);
    ctx.quadraticCurveTo(mouthX + lippSize / 2, mouthY + lippSize * smileFactor, mouthX + lippSize, mouthY);
    ctx.stroke();

};

