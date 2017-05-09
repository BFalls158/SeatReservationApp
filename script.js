$(document).ready(function(){
//Build object for each sumbited reservation
	var Seat = function(seat, first, last, email, phone) {
		this.seat = seat;
		this.firstName = first;
		this.lastName = last;
		this.email = email;
		this.phone = phone;
	};

	var reservedSeats = []; //working array for reserved seats
	var selectedSeats = []; //working array for selected items

	$('[data-toggle="tooltip"]').tooltip(); //initalize the use of tooltips

	$('.seat').on('click', function(e){
	//whenever a seat is clicked on, pass the event and do stuff.
		if($(this).hasClass('available')){
		// Tests to see if ele has 'available' class
			$(this).addClass('selected').removeClass('available');
			selectedSeats.push($(this).text());
			//if the clicked on seat is available, set to class 'selected' and push to selectedSeats array
		} else if ($(this).hasClass('selected')){
			$(this).addClass('available').removeClass('selected');
			var ele = ($(this)); // assigned as variable because `this` doesn't work inside the forEach loop
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
			if(selectedSeats.length === 0){
				//logic for testing to see if any seats are selected
				$('#selectPls').css('display', 'block'); //display error message if no seats selected
			} else {
						$('#selectPls').css('display', 'none');
						//populate resList paragraph with selected seats
						var temp = "";
						selectedSeats.forEach(function(item){
							temp += item + " ";
						});

						$('#resList').text(temp);
							//updates selected seats in modal
				        $("#myModal").modal('show');
				        	// shows modal
				};

    });

	//onclick handler for submit button in modal
	$('#submit').on('click', function() {
		// Handles form confirmation
		if($('#name').val() === "" || $('#last').val() === "" || $('#email').val() === "" || $('#phone').val() === "") {
			$('#error').text('Please complete all fields.').addClass('error');
		} else {
			selectedSeats.forEach(function(item){
				// seat, first, last, email, phone, loc | Constructs object for each reserved seat
				reservedSeats.push(new Seat(item, $('#name').val(), $('#last').val(), $('#email').val(), $('#phone').val()));
			});


			$('.seat').each(function(index, ele) {
				// Sets on hover information of reserved seats
				reservedSeats.forEach(function(reserved){
					if (ele.innerText === reserved.seat){
						$(ele).addClass('reserved').removeClass('selected');
						$(ele).attr('data-toggle', 'tooltip');
						$(ele).attr('data-html', 'true');
						$(ele).tooltip({
							title: reserved.firstName + '<br>' + reserved.lastName + '<br>' + reserved.email + '<br>' + reserved.phone
						});
					};
				});
				//clear selected array
				selectedSeats = [];
				//clear form data
				$('#name').val('');
				$('#last').val('');
				$('#email').val('');
				$('#phone').val('');
			});

			$("#myModal").modal('hide');
			$("#modal2").modal('show');
		};
		// show other modal, dismiss modal on click
	});
});//end of doc.ready func
