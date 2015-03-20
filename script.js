
$('document').ready(function(){
	var productArr = [];
	var productprice;
	var newtotal;

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
			productprice=productid;
			productArr.push(parseInt(productid));
			var total = 0;
			newtotal=total;
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

		 	$("<div class='created'><li class='listed' data-price=" + productid + " >" 
		 			+ ui.draggable.text() + index + "<button id='delete'>Delete</button> </li></div>")
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
		$('#text').append("<textarea placeholder='enter your name, number and address:'></textarea>");
			}
		});

		$('#sender').click(function(){
			if ($('#droplist li').length == 1){
			alert("YOU HAVE TO ORDER SOMETHING");
		}
		else{
		$('.sendmsg').append("Your Order has been received.You would receive a mail soonest");
			}
		$('#total').empty();
		});

		$('#senddetails').click(function(){
		$('.details').append("Your Order has been received.You would receive a mail soonest");
		});
		$(document).on('click', '.created', function(){
			$(this).remove();
			var thistotal= this.productprice;
			var finalproduct = 0;
			  finalproduct = newtotal - thistotal;
			$('#total').html(finalproduct);
		});

});
