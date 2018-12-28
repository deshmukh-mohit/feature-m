$(document).ready(function(){
        function print(data,i){
            var Html="<tr><td>"+data[i].firstName+"</td><td>"+data[i].lastName+"</td><td>"
             +data[i].emailId+"</td><td>"+data[i].phone+"</td><td>"+data[i].gender+"</td><td>"
             +data[i].birthday+"</td><td>"+data[i].country+"</td><td>"+data[i].address+"</td></tr>";
             $('#tbody').append(Html);
        }

     var aj = $.ajax({
        url: 'http://localhost:3000/person',
        type: 'get',
        dataType: 'json',
    });
 aj.done(function(data) {
     for(var i=0;i<data.length;i++)
           {
             print(data,i);

           }
    }); 


    $( "#button" ).click(function(){
        console.log($(".input-invalid").length);
        if ($(".input-invalid").length=0) {
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
              print(data,0);
            } 
        });
    }
    else{
        console.log($(".input-invalid").length);
        alert("Please fill the empty feilds " );
    }
      });    
}); 
    

    validate("#firstName","Invalid First Name",20,5,/^[a-zA-Z\-]+$/);
    validate("#lastName","Invalid Last Name",20,5,/^[a-zA-Z\-]+$/);
    validate("#emailId","Invalid Email ID",30,9,/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    validate("#phone","Invalid Phone Number",13,10,/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/);
    validate("#password","min 8, 1 special chars and one number",15,8,/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
    validate("#address","Pls enter the adress",30,5,/^[A-Za-z0-9'\.\-\s\,]/);
function validate(fieldId, msg, maxLen, minLen, regEx){   
    console.log(regEx);
    $(fieldId).focusout(function(){
        var $this = $(this)
        var fieldLen = $(this).val().length;
        var val=$(this).val();

        if(fieldLen < minLen && fieldLen > maxLen ){
            $this.next('.asteric').addClass('input-invalid').text(msg).show();
        }else {
            $this.next('.asteric').removeClass('input-invalid').text(msg).hide();
        }

        if(regEx.test(val)){
            $this.next('.asteric').removeClass('input-invalid').text(msg).hide();
        }else{
            $this.next('.asteric').addClass('input-invalid').text(msg).show();
        }
    })
}

var conpwd=$("#conpwd");
var country=$("#country");
conpwd.focusout(function(){
    var msg= "Password dosen't match";
    if($("#password").val() == conpwd.val()){
         conpwd.next('.asteric').text(msg).hide().removeClass('input-invalid');
        }else{
            conpwd.next('.asteric').text(msg).show().addClass('input-invalid');
        }
})

country.focusout(function(){
    var e = country.val();
    var msg= "Select the country";
    var strUser=country.val();
    
    if(strUser==0)
       {
            country.next('.asteric').addClass('input-invalid').text(msg).show();
     }else{
             country.next('.asteric').removeClass('input-invalid').text(msg).hide();
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