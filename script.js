$(document).ready(function(){
//Build object for each sumbited reservation
// added .reserved in case we need it to determine if a seat is taken
	var Seat = function(seat, first, last, email, phone, loc) {
		this.seat = seat;
		this.firstName = first;
		this.lastName = last;
		this.email = email;
		this.phone = phone;
		this.location = loc;
		this.reserved = true;
	};

	var reservedSeats = []; //working array for reserved seats
	var selectedSeats = []; //working array for selected items

	$('.seat').on('click', function(e){ 
	//whenever an seat is clicked on, pass the event and do stuff.
		if($(this).hasClass('available')){ 
		// Tests to see if ele has 'available' class
			$(this).addClass('selected').removeClass('available');
			selectedSeats.push($(this).text());
		} else if ($(this).hasClass('selected')){
			$(this).addClass('available').removeClass('selected');
			var ele = ($(this)); // assigned as variable because this doesn't working inside the forEach loop
			selectedSeats.forEach(function(seat, index){
				if($(ele).text() === seat){
					selectedSeats.splice(index, 1);
					//removes elements as they are unselected, from the array
				};
			});
		};
		//swap selected/available classes

		$('.seat').each(function(index, ele) {
			if($(ele).hasClass('selected')) {
				//checks to see if any elements are selected so it knows to show form
				$('form').css('display', 'inline');
				console.log('logic!');
				return false;
				//shows the form, returns false to break loop so that 
				//else doesn't run unless all elements iterated through and don't exist.
			} else {
				//Hides form if nothing selected
				$('form').css('display', 'none');
			}

		});
	}); //End of on-click handler for .seats

	$("#modalLaunch").click(function(){
        $("#myModal").modal();
    });
// seat iteration for later:
// $('.seat').each(function(index, ele){
// 	console.log(ele.innerText);
// });

//	 TODO Submitting form needs change selected to reserved
// 	 TODO On hover should make info appear on reserved seats

























});//end of doc.ready func