
     function teacher(a,j) {
      this.age = a;
      this.jualification = j;
    }
    // CALL
    function person1(a,j,n, s) {
      teacher.call(this, a,j,n,s);
      this.name = n;
      this.subject = s;
    }
    //APPLY
    function person2(a,j,n, s) {
      teacher.apply(this, [a,j,n,s])
      this.name = n;
      this.subject = s;
    }
    //BIND
    function person3(a,j,n,s) {
      var x = teacher.bind(this,a,j,n,s);
      x();
      this.name = n;
      this.subject = s;
    }
    let p1 = new person1("23", "MCA", "Ketan", "History");
    let p2 = new person2("22", "CS", "Shantanu", "Tax");
    let p3 = new person3("24", "BCA", "Ritesh", "DBA");
    console.log('person1:',p1);
    console.log('person2:',p2);
    console.log('person3:',p3);