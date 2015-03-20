
$('document').ready(function(){
	var productArr = [];
	var productprice;
	var newtotal;

	$('.list li').draggable({     //defines draggable elements
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
	$('#cartspace ol').droppable({				//defines droppable area and events
	drop: function(event, ui){
	 var productid = ui.draggable.attr("data-price");
	 productprice=productid;
	 productArr.push(parseInt(productid));	
	 var total = 0;
	 newtotal=total;
	 for(i in productArr)			//adds all the element in an array to give Total
	  {
	   total += productArr[i];
	   }
	  var index = countInArray(productArr, parseInt(productid));
	 var self = $(this);
	 if (self.find("[data-price=" + productid + "]").length){	//to ensure an item is not added twice
	   $('#total').empty();						//just update the price
	   $('#total').append(total);
	    return;
		};
	$("<li></li>", {
	text: ui.draggable.text(),
	"data-price": productid
	}).appendTo(this);
	$('#total').empty();
	$('#total').append(total);
	}
	});
	$('#cancel').click(function(){     //button functions
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
