const Figure = function (width, height) {
  this.width = width;
  this.height = height;
};

Figure.prototype.findSquereArea = function (firstSide, secondSide) {
  this.square = firstSide * secondSide;
  console.log(
    `Площа квадрата довжиною кожної із його сторін по: ${this.width}см становить: ${this.square}см²`,
  );
};

Figure.prototype.findRectangleArea = function (firstSide, secondSide) {
  this.rectangle = firstSide * secondSide;
  console.log(
    `Площа прямокутника із довжиною його сторін: ${this.width}см та ${this.height}см становить: ${this.rectangle}см²`,
  );
};

const SquareArea = new Figure(5, 5);
const RectangleArea = new Figure(5, 10);

SquareArea.findSquereArea(5, 5);
console.log(SquareArea);

RectangleArea.findRectangleArea(5, 10);
console.log(RectangleArea);
