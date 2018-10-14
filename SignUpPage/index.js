
function checkfname(){
    var fname = document.getElementById("firstName").value;
    if((/^[0-9]+$/).test(fname)){
        alert("Warning : Please Enter alphabets only");
    }    
}
function checklname(){
    var lname = document.getElementById("lastName").value;
    if((/^[0-9]+$/).test(lname)){
        alert("Warning : Please Enter alphabets only");
    }    
}
function dateTake(){
    var dob = document.getElementById("dateob").value;
}
function mobNum(){
    var mob = document.getElementById("mobileNum").value;
    if(mobileNum.length>10)
        alert("Warning: Wrong Mobile number");
    if((/^[a-zA-Z]+$/).test(mob))
        alert("Warning: Alphabets in Mobile Number")
}

function submitThis(){
    dateTake();
    var email = document.getElementById("emailId").value;
    if((email.includes('co')||email.includes('com')||email.includes('@')))
        alert("Submitted");
    else
    alert("Incorrect Email Address");

}