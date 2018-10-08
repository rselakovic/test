var person = {
    firstName:"Laza",
    lastName: "Lazarevic",
	email: "rada_gmail.com",
	adress: "terazije"
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
person.fullName(); 
var fullname = person.fullName()