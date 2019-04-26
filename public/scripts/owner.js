$('#users').on('click', function () {
    $.ajax({
        type: 'GET',
        url: "http://localhost:4000/api/users",
        data: "json",
        success: function (json) {
            $('#help').append(json.foreach(user => {
                `<tr>
                <th scope="row">1</th>
                <td>${json.data.firstName}</td>
                <td>${json.data.lastName}</td>
                <td>${json.data.email}</td>
                <td>${json.data.date}</td>
                </tr>`
            }))
        }
    });
})


    $.ajax({
        type: "GET",
        url: "http://localhost:4000/api/users",
        data: "json",
        success: function (res) {
            for(let i = 0; i < res.length; i++) {
                $('#help').append(`<tr>
                <th scope="row">1</th>
                <td>${res[i].firstName}</td>
                <td>${res[i].lastName}</td>
                <td>${res[i].email}</td>
                <td>${res[i].date}</td>
                </tr>`)
            }
            
        }
    });



// res.forEach( (res, i) => {
//     `<tr>
//     <th scope="row">1</th>
//     <td>${res[i].firstName}</td>
//     <td>${res[i].lastName}</td>
//     <td>${res[i].email}</td>
//     <td>${res[i].date}</td>
//     </tr>`
// })
// `<tr>
// <th scope="row">1</th>
// <td>${res[i].firstName}</td>
// <td>${res[i].lastName}</td>
// <td>${res[i].email}</td>
// <td>${res[i].date}</td>
// </tr>