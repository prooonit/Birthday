const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {
    for (let i = 0; i < 120; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            radius: Math.random() * 3,
            color: `hsl(${Math.random()*360},100%,50%)`,
            speedX: (Math.random() - 0.5) * 8,
            speedY: (Math.random() - 0.5) * 8,
            alpha: 1
        });
    }
}

function startFireworks() {
    createFirework();
    animate();
}

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= 0.02;

        if(p.alpha <= 0) particles.splice(index,1);

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}