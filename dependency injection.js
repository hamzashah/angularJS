var person = function (firstname,lastname) { //this is a fucntion
	this.firstname=firstname;
	this.lastname=lastname;
}
/* person(object) pass kr dia */
function logit(person){ 
		console.log(person); /* person(object) ko log kr dia*/
}
var name = new person('Hamza','Shah');
logit(name); /*Jb function call ho rha hai tw person(object) le tha ha aur is waqt 
hamara person(object) jo ha wo name ha */