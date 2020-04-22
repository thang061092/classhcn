let Rectangle = function (x, y, width, height,) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.getHeight = function () {
        return height;
    }
    this.getWidth = function () {
        return width;
    }
    this.getPerimeter = function () {
        return (width + height) * 2;
    }
    this.getArea = function () {
        return height * width;
    }
}
let rectangle = new Rectangle(0, 0, 150, 100);
let height = rectangle.getHeight();
let width = rectangle.getWidth();
let perimeter = rectangle.getPerimeter();
let area = rectangle.getArea();
alert("chu vi hinh chữ nhật là: " + perimeter);
alert("diện tích hình chữ nhật là: " + area);

function creatRectangle() {
    let ctx = document.getElementById("mycanvas").getContext("2d");
    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    ctx.fill();
}

creatRectangle();