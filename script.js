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
	var selectedSeats = []; //working array for selected items

//	 TODO Clicking needs to have toggle for class & populate an array of currently clicked
	$('.seat').on('click', function(e){ 
	//whenever an seat is clicked on, pass the event and do stuff.
		if($(this).hasClass('available')){ 
		// Tests to see if ele has 'available' class
			$(this).addClass('selected').removeClass('available');
		} else if ($(this).hasClass('selected')){
			$(this).addClass('available').removeClass('selected');
		}
		//swap selected/available classes
	});


// seat iteration for later:
// $('.seat').each(function(index, ele){
// 	console.log(ele.innerText);
// });

//	 TODO Submitting form needs change selected to reserved
// 	 TODO On hover should make info appear on reserved seats
//	 TODO 

























});