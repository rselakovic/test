var person = {
    firstName:"Pera",
    lastName: "Peric",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
person.fullName(); 