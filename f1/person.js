var person = {
    firstName:"John",
    lastName: "Doe",
	nickname: "Blesavi",
    fullName: function () {
      console.log(this.firstName + " " + this.lastName);
    }
}
person.fullName(); 