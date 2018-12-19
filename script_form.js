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
        // var jsonData=JSON.parse('http://localhost:3000/person');

        //console.log(params)
        $.ajax({
            url: 'http://localhost:3000/person',	
            type: 'post',
            data: params,
            dataType: 'json',
            contentType: 'application/json',
            success: function () {
               
               /* for(var i=0;i<jsonData.length;i++)
                {
                    var Html="<tr><td>"+jsonData[i].firstName+"</td><td>"+jsonData[i].lastName+"</td></tr>";
                    $('#tbody').append(Html);
                }*/
            } 
        });
 });
// var jsonData=JSON.parse('http://localhost:3000/person');
 var aj = $.ajax({
        url: 'http://localhost:3000/person',
        type: 'get',
        dataType: 'json',
    });
 aj.done(function(data) {
     for(var i=0;i<data.length;i++)
           {
             var Html="<tr><td>"+data[i].firstName+"</td><td>"+data[i].lastName+"</td></tr>";
            $('#tbody').append(Html);

           }
 });
 