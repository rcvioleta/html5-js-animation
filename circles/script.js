var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
let circleArray = [];

for (var i = 0; i < 500; i++) {
	let radius = Math.floor(Math.random() * 5) + 1;
	let x = Math.random() * (innerWidth - radius * 2) + radius; 
	let y = Math.random() * (innerHeight - radius * 2) + radius; 
	let vx = (Math.random() * -0.5) * 3;
	let vy = (Math.random() * -0.5) * 3;
	circleArray.push(new Circle(x, y, vx, vy, radius));
}

let mouse = {
	x: undefined,
	y: undefined
}

window.addEventListener('mousemove', function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
	console.log(mouse);
}); 

function generateColors(num) {
	let arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColors());
	}
	return arr;
}

function randomColors() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}

let maxRadius = 30;
// let minRadius = 2;

function Circle(x, y, vx, vy, radius) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.radius = radius;
	this.minRadius = radius;
	this.initColor = generateColors(100);
	this.color = this.initColor[Math.floor(Math.random() * 101)];

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = 'steelblue';
		c.stroke();

		c.fillStyle = this.color;
		c.fill();		
	}	

	this.update = function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.vx = -this.vx;
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.vy = -this.vy;
		}

		this.x += this.vx;
		this.y += this.vy;

		// interactivity 
		if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
			this.radius += 1;

			if (this.radius < maxRadius) {
				this.radius += 1;
			}
			else {
				this.radius -= 1;
			}
		} 
		else if (this.radius > this.minRadius) {
			this.radius -= 1;
		}

		this.draw();
	}
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();