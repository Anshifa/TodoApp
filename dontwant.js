console.log("I am in dontwant.js");
function callback(pages)
{
    location.replace(pages);
}

function sub()
{
    var user = document.forms["myform"]["userid"].value;
    var pass = document.myform.password.value;
    var ad = "admin";
    var num = "12345";
    console.log(user);
    console.log(pass);
    if(user === ad && pass === num)
    {
        console.log(user);
        console.log(pass);
        callback("ajax.html");
    }
    else if (user === ad && pass !== num)
    {
        console.log(user);
        console.log(pass);
        alert("Incorrect Password!!");
        callback("index.html");
    }
    else if (user !== ad && pass === num)
    {
        alert("Incorrect Username!!");
        callback("index.html");
    }
    else
    {
        alert("Incorrect Username and Password!!");
        callback("index.html");
    }
}

//to check whether 5 tasks have been completed or not
function check()
{
    var inp = document.getElementsByTagName('input');
    var count = 0;
    var ch = 90;
    for(var i = 0; i < inp.length; i++)
    {
        count = document.querySelectorAll('input[type="checkbox"]:checked').length;
        if(count == ch + 5)
        {
            break;
        }
    }
    if(count == ch + 5)
    {
        alert("Yaayy!! You have completed 5 tasks!!");
    }
}

/*

*/

//to retrieve file
function ajax()
{
    document.getElementById('submit').style.display = "none";
    var xhttp = new XMLHttpRequest();
    //var tr = 0;
    //var fl = 0;
    //console.log("I am inside ajax function");
    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            var response = JSON.parse(this.responseText);
            var output = "";
            var tr = 0;
            var checks = "<input type='checkbox'/>";
            //var r = check();
            output = "<th>"+"Title"+"</th>"+"<th>"+"Done"+"</th>";
            for(var i = 0; i < response.length; i++)
            {
                if(response[i].completed == true)
                {
                    checks = "<input type='checkbox'  checked='checked' disabled='disabled'/>";
                    tr++;
                }
                else
                {
                    checks = "<input type='checkbox' />";
                }
                output += "<tr>"+"<td> "+ response[i].title +"</td> "+"<td> "+ checks +"</td> "+"<br>"+ "</tr>";
                //console.log("hi i'm inside this for loop");
            }
            //console.log("tr = "+tr);
            //output = response.completed+"<br>";
            document.getElementById('table').innerHTML = output; 
            check();      
        }
    }                
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
    //return tr;
}



