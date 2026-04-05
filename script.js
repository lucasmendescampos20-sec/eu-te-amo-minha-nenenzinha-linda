const heart = document.querySelector(".heart");
const text = document.getElementById("text");

const msg = "eu te amo minha esposa linda Stefany! ❤️🤍🥰";

// MOSTRAR CORAÇÃO
setTimeout(() => {
    heart.classList.add("show");
}, 1000);

// TEXTO LETRA POR LETRA
let i = 0;
function escrever() {
    if (i < msg.length) {
        text.innerHTML += msg[i];
        i++;
        setTimeout(escrever, 80);
    }
}

setTimeout(escrever, 3000);

// ===== PARTÍCULAS =====
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function criarCoracao() {
    hearts.push({
        x: Math.random() * canvas.width,
        y: canvas.height,
        size: Math.random() * 12 + 6,
        speed: Math.random() * 2 + 1,
        opacity: Math.random(),
    });
}

function desenharCoracao(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - size, x - size, y - size, x - size, y);
    ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.5, x, y + size * 2);
    ctx.bezierCurveTo(x, y + size * 1.5, x + size, y + size, x + size, y);
    ctx.bezierCurveTo(x + size, y - size, x, y - size, x, y);
    ctx.fill();
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach((h, index) => {
        ctx.globalAlpha = h.opacity;
        ctx.fillStyle = "red";
        desenharCoracao(h.x, h.y, h.size);

        h.y -= h.speed;

        if (h.y < -20) {
            hearts.splice(index, 1);
        }
    });

    requestAnimationFrame(animar);
}

setInterval(criarCoracao, 250);
animar();