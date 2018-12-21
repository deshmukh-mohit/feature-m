$(document).ready(function(){
    
    var aj = $.ajax({
        url: 'http://localhost:3000/person',
        type: 'get',
        dataType: 'json',
    });
 aj.done(function(data) {

     for(var i=0;i<data.length;i++)
           {
             var Html="<tr><td>"+data[i].firstName+"</td><td>"+data[i].lastName+"</td><td>"
             +data[i].emailId+"</td><td>"+data[i].phone+"</td><td>"+data[i].gender+"</td><td>"
             +data[i].birthday+"</td><td>"+data[i].country+"</td><td>"+data[i].address+"</td></tr>";
             $('#tbody').append(Html);

           }
    }); 

    $( "#button" ).click(function(){
       var person = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            emailId: $("#emailId").val(),
            password: $("#password").val(),
            phone: $("#phone").val(),
            birthday: $("#birthday").val(),
            address:$("#address").val(),
            country: $('#country option:selected').text(),
            gender: $("input[name=gender]:checked").val()
        }
        var params=JSON.stringify(person);
        
        var aj=$.ajax({
            url: 'http://localhost:3000/person',    
            type: 'post',
            data: params,
            dataType: 'json',
            contentType: 'application/json',
            success:  function (data) {
                        var Html="<tr><td>"+data.firstName+"</td><td>"+data.lastName+"</td><td>"
                        +data.emailId+"</td><td>"+data.phone+"</td><td>"+data.gender+"</td><td>"
                        +data.birthday+"</td><td>"+data.country+"</td><td>"+data.address+"</td></tr>";
                        $('#tbody').append(Html);
                
                 
            }
            
           
        });
      });    
/*      $(".input-box").focusout(function(){

            var numItems = $('.input-box').length;
        
            if (numItems < 10){
                alert("please dont keep feild empty \n");
            }
}) */
 }); 
    
function validate(fieldId, msg, maxLen, minLen, regEx){   
    var isValid = false;
    $(fieldId).focusout(function(){
        console.log("In");
        var $this = $(this)
        var fieldLen = $(this).val().length;
        if(fieldLen < minLen || fieldLen > maxLen){
            $this.next('.asteric').text(msg).show();
            $this.addClass('input-box');
        }else {
            $this.next('.asteric').text(msg).hide();
            $this.removeClass('input-box');
        }
        /*if(regEx) {
            regEx.test($(this).val());
        }*/
    })
}

validate("#firstName","*",4,5,"/[^-\s]/");
validate("#lastName","*",20,5,"/^\S*$/");