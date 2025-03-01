
const cube = document.querySelector(".cube");
let currentX = 20, currentY = 30; 
let isSpinning = false;

document.addEventListener("mousemove", (e) => {
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    let deltaX = (e.clientX - centerX) / centerX;
    let deltaY = (e.clientY - centerY) / centerY;

    let rotateX = deltaY * -30;
    let rotateY = deltaX * 30;

    if (!isSpinning) {
        gsap.to(cube, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.5,
            ease: "power3.out"
        });
    }
});


cube.addEventListener("click", () => {
    isSpinning = true;

    let randomX = currentX + Math.floor(Math.random() * 360) + 180;
    let randomY = currentY + Math.floor(Math.random() * 360) + 180;

    gsap.to(cube, {
        rotateX: randomX,
        rotateY: randomY,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        onComplete: () => {
            isSpinning = false;
            currentX = randomX % 360;
            currentY = randomY % 360;
        }
    });
});
