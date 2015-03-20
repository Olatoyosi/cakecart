
$('document').ready(function(){
	var prrice=0;
	var productArr = [];

	$('.list li').draggable({
		appendTo:'body',
		helper: 'clone'
	});

	function countInArray(productArr, productid) {
		var count = 0;
			 for (var i = 0; i < productArr.length; i++) {
	        if (productArr[i] === productid) {
	            count++;
	        }
	    }
		return count;
	}


	$('#cartspace ol').droppable({
		drop: function(event, ui){
			var productid = ui.draggable.attr("data-price");
			productArr.push(parseInt(productid));
			var total = 0;
			for(i in productArr)
			{
				 total += productArr[i];
			}

			var index = countInArray(productArr, parseInt(productid));
			var self = $(this);
			if (self.find("[data-price=" + productid + "]").length){
				$('#total').empty();
				$('#total').append(total);
				return;
			};

		 	$("<li data-price=" + productid + " >" 
		 			+ ui.draggable.text() + index + "<button>Delete</button> </li>")
		 				.appendTo(this);
			 	$('#total').empty();
			 	$('#total').append(total);
			}
	});
		$('#cancel').click(function(){
		$('#droplist').empty();
		$('#total').empty();
		});

		$('#complete').click(function()
		{
		if ($('#droplist li').length == 1){
			alert("YOU HAVE TO ORDER SOMETHING");
		}
		else{
		$('#text').append("<textarea>enter your name, number and address:</textarea>");
			}
		});

		$('#sender').click(function(){
		if ($('#droplist li').length == 1){
		alert("YOU HAVE TO ORDER SOMETHING");
		}
		else{
		$('.sendmsg').append("Your Order has been received.You would receive a mail soonest");
		$('#total').empty();
		}
		});

		$('#senddetails').click(function(){
		$('.details').append("Your Order has been received.You would receive a mail soonest");
		});

		$('button').click(function(){
			$('#droplist li').remove();
			total -=productid;
			console.log(total);
			$('#total').empty();
			$('#total').append(total);
		});

});
