var input=document.getElementsByClassName("input");
var button=document.getElementsByClassName("button");
var login=document.getElementsByClassName("login1");
var select=document.getElementsByTagName("select");
var error=document.getElementsByClassName("error")

function verifiermdp(){
    if(input[1].value.length<8){
        input['password'].style.borderColor="red"
    }else{
        input['password'].style.borderColor="rgb(51, 138, 244";
    }       
}
