var person = {
    firstName:"Laza",
    lastName: "Lazarevic",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
person.fullName(); 
var fullname = person.fullName()