$(document).ready(function(){
//Build object for each sumbited reservation
// added .reserved in case we need it to determine if a seat is taken
	var Seat = function(seat, first, last, email, phone) {
		this.seat = seat;
		this.firstName = first;
		this.lastName = last;
		this.email = email;
		this.phone = phone;
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
			var ele = ($(this)); // assigned as variable because this doesn't work inside the forEach loop
			selectedSeats.forEach(function(seat, index){
				if($(ele).text() === seat){
					selectedSeats.splice(index, 1);
					//removes elements as they are unselected, from the array
				};
			});
		};
		//swap selected/available classes
	}); //End of on-click handler for .seats

	//Click handler for form modal
	$("#modalLaunch").on('click', function(){
		var temp = "";
		selectedSeats.forEach(function(item){
			temp += item + " ";
		});

		$('#resList').text(temp);
			//updates selected seats in modal
        $("#myModal").modal('show');
        	// shows modal
    });

	//onclick handler for submit button in modal
	$('#submit').on('click', function() {

		selectedSeats.forEach(function(item){
			// seat, first, last, email, phone, loc | Constructs object for each reserved seat
			reservedSeats.push(new Seat(item, $('#name').val(), $('#last').val(), $('#email').val(), $('#phone').val()));	
		});

		
		$('.seat').each(function(index, ele) {
			reservedSeats.forEach(function(reserved){
				if (ele.innerText === reserved.seat){
					$(ele).addClass('reserved').removeClass('selected');
				}
			});
			selectedSeats = [];
		});

		$("#myModal").modal('hide');
		// show other modal, dismiss modal on click
	});
// 	 TODO On hover should make info appear on reserved seats

	










// var temp = "";

// selectedSeats.forEach(function(item){
// 	temp += item + " ";
// });

// console.log(temp);









});//end of doc.ready func

		// $('.seat').each(function(index, ele) {
		// 	if($(ele).hasClass('selected')) {
		// 		//checks to see if any elements are selected so it knows to show form
		// 		$('form').css('display', 'inline');
		// 		console.log('logic!');
		// 		return false;
		// 		//shows the form, returns false to break loop so that 
		// 		//else doesn't run unless all elements iterated through and don't exist.
		// 	} else {
		// 		//Hides form if nothing selected
		// 		$('form').css('display', 'none');
		// 	}
		//	});