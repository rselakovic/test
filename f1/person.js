var person = {
    firstName:"Laza",
    lastName: "Lazarevic",
	nickname: "Blesavi",
	adress: "terazije"
    fullName: function () {
      console.log(this.firstName + " " + this.lastName);
    }
}
person.fullName(); 
var fullname = person.fullName()