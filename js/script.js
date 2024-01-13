function cap(){


    let string1 = document.getElementById("string1").value;

    let string2  = string1[0].toUpperCase() + string1.slice(1);

    document.getElementById("p1").innerHTML = `Capitalized String: ${string2}`;
}