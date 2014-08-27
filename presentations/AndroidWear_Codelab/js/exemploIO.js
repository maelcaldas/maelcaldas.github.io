  
 	 
 	 
    
    
 $.fn.serializeObject = function()
  		 	 {
  		 	     var o = {};

  		 	     var a = this.serializeArray();
  		 	     $.each(a, function() {
  		 	         if (o[this.name] !== undefined) {
  		 	             if (!o[this.name].push) {

  		 	                 o[this.name] = [o[this.name]];
  		 	             }
  		 	             o[this.name].push(this.value || '');

  		 	         } else {
  		 	             o[this.name] = this.value || '';
  		 	         }
  		 	     });

  		 	     return o;
  		 	 };
  		 	 
  		 	 
//!function ($) {
//  		$(function(){
  	
/**
* jQuery initialization
*/
$(document).ready(function() {		
  		 	 
  	$("#googleioform").submit(function(e){
       e.preventDefault();
       console.log($(this).serializeObject())
       $("#startIO").attr("disabled", true)
       $.ajax({
       //dev dashboard contactform
          url: "https://script.google.com/macros/s/AKfycbxvyojDfHaT0dTvSJVCzJS2e4CrKstkrw62FVWRBbHrdBZ9sw/exec",
          type: "POST",
          data: $(this).serializeObject(),

          success: function(data){
            obj = JSON.stringify(data);
            $("#startIO").attr("disabled", false)
            alert("Lan&ccedil;ado!")

            if(data.status != '0'){
              console.log('status: ' + obj)
            } else {
              console.log('status: ' + obj)
            }
         }
      });
    });
  	
  	
  	
  	$.ajax({
        //dev googleio list colaborators
           url: "https://script.google.com/macros/s/AKfycbzTKBktRFmaz3s30DNCjMMJglCif0n0xYSdEW_3PHnNDp9dmDQ/exec",
           type: "GET",
           data: "" ,

           success: function(data){
             objw = JSON.stringify(data);
             //$("#startIO").attr("disabled", false)
             //alert("fui")

             if(objw.status != '0'){
            	 var $select = $('#colaborator');
            	 $select.find('option').remove();  
            	 $.each(data,function(key, value) 
            	 {
            		 if (key != 'status'){
            			$select.append('<option value=' + key.replace(/\s/g, '') + '>' + value + '</option>');
            		 }
            	 });
            	 
               console.log('status: ' + objw)
             } else {
               console.log('Somthing went wrong: ' )
             }
          }
       });

  	

});		
  		  		