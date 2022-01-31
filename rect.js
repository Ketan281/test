class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  class Square extends Rectangle {
    constructor(length) {
      super(length, length);
      this.name = 'Square';
    }
  
    get Perimeter() {
      return 2*(this.height + this.width);
    }
  }
  
  const sqr = new Square(10, 10);
  
  console.log(sqr.area);
  console.log(sqr.Perimeter)