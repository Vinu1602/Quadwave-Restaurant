password_verify = 0


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

