$(document).ready(function(){
//Build object for each sumbited reservation
// added .reserved in case we need it to determine if a seat is taken
var Seat = function(first, last, email, phone, loc) {
	this.firstName = first;
	this.lastName = last;
	this.email = email;
	this.phone = phone;
	this.location = loc;
	this.reserved = true;
}
//	 TODO Clicking needs to have toggle for class & populate an array of currently clicked
//	 TODO Submitting form needs change selected to reserved
// 	 TODO On hover should make info appear on reserved seats
//	 TODO 

























});