var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Squares
// c.fillRect(50, 50, 100, 100);
// c.fillRect(150, 150, 100, 100);
// c.fillRect(550, 550, 100, 100);
// c.fillRect(850, 850, 100, 100);

// Lines
// c.beginPath();
// c.moveTo(300, 700);
// c.lineTo(400, 500);
// c.stroke();

// Arch / Circle
// Pattern: x: Int, y: Int, radius: Int, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool
// c.beginPath();
// c.arc(350, 350, 100, 0, Math.PI * 2, false);
// c.strokeStyle = "red";
// c.stroke();

// function createCir() {
// 	let numOfCir = 5;
// 	let x, y;
// 	for (var i = 0; i < numOfCir; i++) {
// 		x = Math.floor(Math.random() * window.innerWidth - 1);
// 		y = Math.floor(Math.random() * window.innerHeight - 1);
// 		c.beginPath();
// 		c.arc(x, y, 100, 0, Math.PI * 2, false);
// 		c.strokeStyle = "red";
// 		c.stroke();
// 		console.log("x: " + x + " " + "y: " + y);
// 	}
// }

// setInterval(function() {
// 	createCir();
// }, 100); 

let x = Math.random() * innerWidth; 
let y = Math.random() * innerHeight; 
let vx = (Math.random() * -0.5) * 30;
let vy = (Math.random() * -0.5) * 30;
let radius = 100;

function animate() {
	requestAnimationFrame(animate);

	c.clearRect(0, 0, innerWidth, innerHeight);
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2, false);
	c.strokeStyle = "blue";
	c.fill();
	c.stroke();

	if (x + radius > innerWidth || x - radius < 0) {
		vx = -vx;
	}

	if (y + radius > innerHeight || y - radius < 0) {
		vy = -vy;
	}

	x += vx;
	y += vy;
}

animate();