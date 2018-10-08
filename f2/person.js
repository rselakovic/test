var person = {
    firstName:"Dragan",
    lastName: "Seronja",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
person.fullName(); 