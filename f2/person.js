var person = {
    firstName:"Dragan",
    lastName: "Seronja",
	nicknaname : "Petko",
    fullName: function () {
        return this.firstName + " " + this.lastName+ " " + this.nicknaname;
    }
}
person.fullName(); 