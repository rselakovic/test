var person = {
    firstName:"Pera",
    lastName: "Peric",
	nicknaname : "Petko",
    fullName: function () {
        return this.firstName + " " + this.lastName+ " " + this.nicknaname;
    }
}
person.fullName(); 