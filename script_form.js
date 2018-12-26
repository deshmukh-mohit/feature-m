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
    var fname=/^[a-zA-Z\-]+$/;
    var lname=/^[a-zA-Z\-]+$/;
    var eid=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    var phn=/^(\+\d{1,3}[- ]?)?\d$/;
    var pass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    var ad=/^[a-zA-Z\-]+$/;
    
    validate("#firstName","Invalid First Name",20,5,fname);
    validate("#lastName","Invalid Last Name",20,5,lname);
    validate("#emailId","Invalid Email ID",30,9,eid);
    validate("#phone","Invalid Phone Number",13,10,phn);
    validate("#password","min 8, 1 special chars and one number",15,8,pass);
    validate("#address","Pls enter the adress",30,5,ad);
function validate(fieldId, msg, maxLen, minLen, regEx){   
    var color='red';
    $(fieldId).focusout(function(){
        var $this = $(this)
        var fieldLen = $(this).val().length;
        var val=$(this).val();

        if(fieldLen < minLen && fieldLen > maxLen ){
            console.log(fieldId);
            $this.next('.asteric').text(msg).show();
            $this.addClass('input-box');
            $('.asteric').css('color', color);
        }else {
            $this.next('.asteric').text(msg).hide();
            $this.removeClass('input-box');
        }

        if(regEx.test(val)){
            $this.next('.asteric').text(msg).hide();
            $this.removeClass('input-box');
        }else{
            $this.next('.asteric').text(msg).show();
            $this.addClass('input-box');
            $('.asteric').css('color', color);
        }
    })
}

$("#conpwd").focusout(function(){
    var msg= "Password dosen't match";
    var color='red';
    if($("#password").val() == $("#conpwd").val()){
         $("#conpwd").next('.asteric').text(msg).hide();
            $("#conpwd").removeClass('input-box');
        }else{
            $("#conpwd").next('.asteric').text(msg).show();
            $("#conpwd").addClass('input-box');
            $('.asteric').css('color', color);
        }
})

$("#country").focusout(function(){
    var e = $("#country").val();
    var msg= "Select the country";
    var color='red';
    var strUser=$("#country").val();
    
    if(strUser==0)
       {
            $("#country").next('.asteric').text(msg).show();
            $("#country").addClass('input-box');
            $('.asteric').css('color', color);
     }else{
             $("#country").next('.asteric').text(msg).hide();
            $("#country").removeClass('input-box');
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