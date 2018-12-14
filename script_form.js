document.getElementById('button').addEventListener('click',function(){
	var person = {
            firstName: $("#fn").val(),
            lastName: $("#ln").val(),
            emailId: $("#ID").val(),
            password: $("#pwd").val(),
            phone: $("#phn").val(),
            birthday: $("#bday").val(),
            address:$("#ad").val(),
            country: $('#cn option:selected').text(),
            gender: $("input[name=gender]:checked").val()
        }
        var params=JSON.stringify(person);
       
        console.log(params)
        $.ajax({
            url: 'http://localhost:3000/person',	
            type: 'post',
            data: params,
            dataType: 'json',
            contentType: 'application/json',
            success: function () {
               console.log(firstName);
            } 
        });
 });

 
    