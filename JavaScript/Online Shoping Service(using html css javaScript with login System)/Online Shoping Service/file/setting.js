function searchitems() {

    var search = document.getElementById("search").value; // an

    if (search == "") {
        document.getElementById("message").innerHTML = "";
    }

    var allproducts = document.getElementsByClassName("contant");
    var flag = 0;

    console.log(allproducts.length);

    for (i = 0; i < allproducts.length; i++) {

        var pname = allproducts[i].getElementsByTagName("h3")[0].innerHTML; // shirt 1

        console.log(pname);

        var searchchar = pname.substring(0, search.length); //sh

        if (search.toLowerCase() == searchchar.toLowerCase()) {
            allproducts[i].style.display = "block";
            flag = 1;
        } else {
            allproducts[i].style.display = "none";
        }
    }

    if (flag == 0) {
        document.getElementById("message").innerHTML = '<img src="./img/noDataFound.png" alt="no data found"  "height: 88vh;"  >';
    }



}







//   may i start the login function here .....

var index = 0;

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // alert(regno + " " + password);

    var flag = 0;

    if (localStorage.getItem("customar_data") === null) {
        this_data = this_data + "<tr>";
        this_data = this_data + "<th colspan='6'>No Record Founds</th>";

        this_data = this_data + "</tr>";
    } else {
        var customar_data_store_Array = JSON.parse(localStorage.getItem("customar_data"));
        for (i = 0; i < customar_data_store_Array.length; i++) {
            if (customar_data_store_Array[i].username == username && customar_data_store_Array[i].password == password) {
                //Store Data in localeStorage
                localStorage.setItem("name", customar_data_store_Array[i].name);
                flag = 1;
                break;
            }
        }

        if (flag == 1) {
            //Redirect to the home page
            window.location.href = "home.html";
        } else {
            document.getElementById("rongPassword").innerHTML = "Please input valid username and password ! Try Again!!";
        }
    }


}

// use to catch the local storae name ....
function getName() {
    let name = localStorage.getItem("name");
    document.getElementById("name").innerHTML = name;
}

function mlogOut() {

    if (confirm(`Are you Sure to logout this Account ? `)) {
        window.location.href = "./index.html"
    }
}