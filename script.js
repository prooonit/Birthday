// YES button redirect
function yesClicked() {
    window.location.href = "memories.html";
}

// Moving NO button
function moveButton() {
    const btn = document.querySelector(".no-btn");
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    btn.style.transform = `translate(${x}px, ${y}px)`;
}

// Slideshow auto change
let slides = document.querySelectorAll(".slide");
let current = 0;

if (slides.length > 0) {
    setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }, 2000);
}

// Floating Hearts Animation
const canvas = document.getElementById("hearts");
if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hearts = [];

    function createHeart() {
        hearts.push({
            x: Math.random() * canvas.width,
            y: canvas.height,
            size: Math.random() * 20 + 10,
            speed: Math.random() * 2 + 1
        });
    }

    function drawHeart(x, y, size) {
        ctx.fillStyle = "pink";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x, y - size/2, x - size, y - size/2, x - size, y);
        ctx.bezierCurveTo(x - size, y + size/2, x, y + size, x, y + size*1.5);
        ctx.bezierCurveTo(x, y + size, x + size, y + size/2, x + size, y);
        ctx.bezierCurveTo(x + size, y - size/2, x, y - size/2, x, y);
        ctx.fill();
    }

    function animate() {
        ctx.clearRect(0,0,canvas.width,canvas.height);

        if (Math.random() < 0.1) createHeart();

        hearts.forEach((h, i) => {
            h.y -= h.speed;
            drawHeart(h.x, h.y, h.size);
            if (h.y < 0) hearts.splice(i,1);
        });

        requestAnimationFrame(animate);
    }

    animate();
}