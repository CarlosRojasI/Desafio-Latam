$(document).ready (function(){
    $.ajax({
        url : 'https://www.feriadosapp.com/api/holidays.json',
        type : 'GET',
        dataType : 'json',
        success : function(json) {
            json.data.forEach((fecha)=>{
                $('#tabla').append(
            `
                <tr>
                    <td>${fecha.id}</td>
                    <td>${fecha.date}</td>
                    <td>${fecha.title}</td>
                    <td>${fecha.extra}</td>
                    <td>${fecha.law}</td>
                    <td>${fecha.law_id}</td>
                </tr>
            `)
            })
        }
    })
})

