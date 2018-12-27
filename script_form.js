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
        console.log($(".input-box").length);
        if ($(".input-box").length<=2) {
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
        // var jsonData=JSON.parse('http://localhost:3000/person');

        //console.log(params)
        $.ajax({
            url: 'http://localhost:3000/person',	
            type: 'post',
            data: params,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
               var Html="<tr><td>"+data.firstName+"</td><td>"+data.lastName+"</td><td>"
             +data.emailId+"</td><td>"+data.phone+"</td><td>"+data.gender+"</td><td>"
             +data.birthday+"</td><td>"+data.country+"</td><td>"+data.address+"</td></tr>";
             $('#tbody').append(Html);
            } 
        });
    }
    else{
        alert("Please enter feilds showing Invalid");
    }
      });    
}); 
    

    validate("#firstName","Invalid First Name",20,5,/^[a-zA-Z\-]+$/);
    validate("#lastName","Invalid Last Name",20,5,/^[a-zA-Z\-]+$/);
    validate("#emailId","Invalid Email ID",30,9,/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    validate("#phone","Invalid Phone Number",13,10,/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/);
    validate("#password","min 8, 1 special chars and one number",15,8,/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
    validate("#address","Pls enter the adress",30,5,/^[a-zA-Z\-]+$/);
function validate(fieldId, msg, maxLen, minLen, regEx){   
    console.log(regEx);
    $(fieldId).focusout(function(){
        var $this = $(this)
        var fieldLen = $(this).val().length;
        var val=$(this).val();

        if(fieldLen < minLen && fieldLen > maxLen ){
            $this.next('.asteric').text(msg).show().addClass('input-box');
        }else {
            $this.next('.asteric').text(msg).hide().removeClass('input-box');
        }

        if(regEx.test(val)){
            $this.next('.asteric').text(msg).hide().removeClass('input-box');
        }else{
            $this.next('.asteric').text(msg).show().addClass('input-box');
        }
    })
}

var conpwd=$("#conpwd");
var country=$("#country");
conpwd.focusout(function(){
    var msg= "Password dosen't match";
    if($("#password").val() == conpwd.val()){
         conpwd.next('.asteric').text(msg).hide().conpwd.removeClass('input-box');
        }else{
            conpwd.next('.asteric').text(msg).show().conpwd.addClass('input-box');
        }
})

country.focusout(function(){
    var e = country.val();
    var msg= "Select the country";
    var strUser=country.val();
    
    if(strUser==0)
       {
            country.next('.asteric').text(msg).show().country.addClass('input-box');
     }else{
             country.next('.asteric').text(msg).hide().country.removeClass('input-box');
    }
})

/*$("#gender").focusout(function(){
    var msg= "Select the gender";
    var color='red';
    console.log($('input[name="gender"]:checked').val());
    if($('input[name="gender"]:checked').val()!==undefined){
            $("#gender").next('.asteric').text(msg).hide();
            $("#gender").removeClass('input-box');
    }
    else{
            $("#gender").next('.asteric').text(msg).show();
            $("#gender").addClass('input-box');
            $('.asteric').css('color', color);
    }
})*/