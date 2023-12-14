function cong(){
    let a1 = document.getElementById('giatri1').value;
    let b1=parseInt(a1);
    let a2 = document.getElementById('giatri2').value;
    let b2=parseInt(a2)
    document.getElementById("v1").innerHTML ="Result Addition(+) :"  + (b1+b2);
}
function tru(){
    let a1 = document.getElementById('giatri1').value;
    let b1=parseInt(a1);
    let a2 = document.getElementById('giatri2').value;
    let b2=parseInt(a2)
    document.getElementById("v1").innerHTML ="Result Subtraction(-) : " + (b1-b2);
}
function nhan(){
    let a1 = document.getElementById('giatri1').value;
    let b1=parseInt(a1);
    let a2 = document.getElementById('giatri2').value;
    let b2=parseInt(a2)
    document.getElementById("v1").innerHTML ="Result : Multiplication(*) " + (b1*b2);
}
function chia(){
    let a1 = document.getElementById('giatri1').value;
    let b1=parseInt(a1);
    let a2 = document.getElementById('giatri2').value;
    let b2=parseInt(a2)
    document.getElementById("v1").innerHTML ="Result Division(/) : " + (b1/b2);
}