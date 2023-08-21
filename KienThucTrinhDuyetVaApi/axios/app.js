// const xhttp = new XMLHttpRequest()
// xhttp.onreadystatechange = function () {
//     if(this.readyState == 4){
//         console.log(this.responseText );

//     }
// }
// xhttp.open('GET','https://reqres.in/api/users?page=2',true)
// xhttp.send()

fetch('https://reqres.in/api/users?page=2').then((res)=>{
    console.log(res);
    return res.json
}).then(res=>{
    console.log('CHinh thuc',res);
})