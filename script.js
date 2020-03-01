function goToPage(){
    location.href = 'https://mail.google.com';
}

var cont1 = document.getElementById("container1");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

function styleChange(){
    if(cont1.style.backgroundColor == "rgb(132, 243, 132)"){
        cont1.style.justifyContent = "space-between";
        cont1.style.backgroundColor = "rgb(243, 132, 237)";
        btn1.style.backgroundColor = "rgb(42, 153, 142)";
        btn1.style.color = "#000000";
        btn2.style.backgroundColor = "rgb(42, 100, 142)";
        btn2.style.color = "#000000";
        btn3.style.backgroundColor = "rgb(42, 53, 142)";
        btn3.style.color = "#000000";
    }else{
        cont1.style.justifyContent = "space-around";
        cont1.style.backgroundColor = "rgb(132, 243, 132)";
        btn1.style.backgroundColor = "rgb(148, 0, 211)";
        btn1.style.color = "#ffffff";
        btn2.style.backgroundColor = "rgb(82, 4, 116)";
        btn2.style.color = "#ffffff";
        btn3.style.backgroundColor = "rgb(56, 2, 80)";
        btn3.style.color = "#ffffff";
    }
}

var cont2 = document.getElementById('container2');

function deletion(){
    cont1.style.display = 'none';
    cont2.style.display = 'flex';
}

function back(){
    cont2.style.display = 'none';
    cont1.style.display = 'flex';
}

var term = {
    Belarus: 7,
    Germany: 24,
    China: 12,
    Italy: 7,
    Czech: 42
}

function average(){
    var sum = 0;
    var count = 0;
    var all = "";
    for(i in term){
        sum+=term[i];
        count++;
        all+=String(term[i]) + " "; 
    }
    sum = sum / count;
    return  all + "Среднее значение " + sum;
}

alert(average());

function max(term1){
    var max = 0;
    var all = "";
    for(i in term1){
        if(max < term1[i]){
            max = term1[i];
        }
        all+=String(term1[i]) + " "; 
    }
    return all + "Максимальная = " + max;
}

alert(max(term));