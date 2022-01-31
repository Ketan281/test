class Rectangle {
    constructor(height, width) {
 this.area = height*width
 this.peri = 2 * (height + width)
    }

  }
  class Square extends Rectangle {
    constructor(length) {
      super(length, length);
  
    }

  }
  
  const length = 10;
  
  console.log(new Square(length).area);
  console.log(new Square(length).Peri)
