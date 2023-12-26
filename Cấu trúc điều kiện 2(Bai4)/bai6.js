function yesClick(){
    alert("Yes. you are right ");
}
function No(){
    let a = Math.round(Math.random() * window.innerWidth);
    let b = Math.round(Math.random() * window.innerHeight);
    document.getElementById('btnNo').style.left = a + 'px';
    document.getElementById('btnNo').style.top = b + 'px';
}