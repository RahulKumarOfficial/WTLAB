let text = document.getElementById("text");
text = "";
function getNum(number){
    text += number;
    document.getElementById("text").innerHTML = text;
}
function getPlus(){
    text = document.getElementById("text").value;
    text += '+';
    document.getElementById("text").innerHTML = text;
}
function getEquals(){
    var num = document.getElementById("text").value;
    var numArr;
    if(num.includes('+')){
        numArr = num.split('+'); 
        sign='+';
    }
    else if(num.includes('-')){
        numArr = num.split('-'); 
        sign='-';
    }
        
    else if(num.includes('\/')){
        numArr = num.split('/'); 
        sign='/';
    }
    else if(num.includes('\*')){
        numArr = num.split('*'); 
        sign='*';
    }
    console.log("sign is"+sign);
    switch(sign){
        case '+': document.getElementById("text").innerHTML=(parseInt(numArr[0])+parseInt(numArr[1]));
                    break;
        case '-':document.getElementById("text").innerHTML=(parseInt(numArr[0])-parseInt(numArr[1])); 
                break;
        case '*':document.getElementById("text").innerHTML=(parseInt(numArr[0])*parseInt(numArr[1]));
                break;
        case '/':document.getElementById("text").innerHTML=(parseInt(numArr[0])/parseInt(numArr[1]));
                break;
    }
}
function getMinus(){
    text = document.getElementById("text").value;
    text += '-';
    document.getElementById("text").innerHTML = text;
}

function getDivision(){
    text = document.getElementById("text").value;
    text += '/';
    document.getElementById("text").innerHTML = text;
}
function getMultiply(){
    text = document.getElementById("text").value;
    text += '*';
    document.getElementById("text").innerHTML = text;
}
function getClear(){
    text = document.getElementById("text").value;
    text = '';
    document.getElementById("text").innerHTML = text;
}

function convRS_USD(){
    let num = document.getElementById("text").value;
    num=num/60;
    document.getElementById("text").innerHTML=num;
}
function convUSD_RS(){
    let num = document.getElementById("text").value;
    num=num*60;
    document.getElementById("text").innerHTML=num;
}
function convEuro_USD(){
    let num = document.getElementById("text").value;
    num=num/15;
    document.getElementById("text").innerHTML=num;
}
function convUSD_Euro(){
    let num = document.getElementById("text").value;
    num=num*15;
    document.getElementById("text").innerHTML=num;
}
function chkAlpha(){
    var text = document.getElementById("text").value;
    var s = text.search(/^![a-zA-Z]+/)
    if(s)
        alert("Warning: You are entering alphabets");
}
