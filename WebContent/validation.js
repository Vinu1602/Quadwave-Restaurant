function validate(){
    var a = document.getElementById('rpassword').value;
    var b = document.getElementById('rcpassword').value;

    if(a==b){
        var c = document.getElementById('rcpassword').classList;
        c.remove('bg-opacity-25');
        c.remove('bg-danger');
        c.add('bg-opacity-25');
        c.add('bg-success');
    }
    else{
        var c = document.getElementById('rcpassword').classList;
        c.remove('bg-opacity-25');
        c.remove('bg-success');
        c.add('bg-opacity-25');
        c.add('bg-danger');
    }
}

function adddanger(){
    const a = document.getElementById('rcpassword').classList;
    a.add("bg-opacity-25");
    a.add("bg-danger");
}

function populate() {
    var s1 = document.getElementById('parentFoodSelect');
    var s2 = document.getElementById('childFoodSelect');

    s2.innerHTML = "";

    if (s1.value == "sweet") {
        var optionArray = ['ladoo|Ladoo', 'gulabjamun|Gulab Jamun', 'rasgula|Rasgula'];
    }
    else if (s1.value == "fastfood") {
        var optionArray = ['samosa|Samosa', 'patis|Patis', 'burger|Burger', 'pizza|Pizza'];
    }
    else if (s1.value == "Drinks") {
        var optionArray = ['cococola|Coco Cola', 'mdew|Mountain Dew', 'miranda|Miranda', 'pepsi|Pepsi'];
    }
    else if (s1.value == "indianfood") {
        var optionArray = ['puranpoli|Puranpoli', 'riceplate|Rice Plate', 'paplet|Paplet'];
    }

    for (var option in optionArray) {
        var pair = optionArray[option].split('|');
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        s2.options.add(newoption);   
    }
}