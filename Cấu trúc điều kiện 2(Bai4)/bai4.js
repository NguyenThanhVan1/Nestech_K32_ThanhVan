function tinh(){
    let a = document.getElementById('thang').value;
    let b=parseInt(a);
    switch (b) {
        case 2 :
            document.getElementById("v1").innerHTML ="Tháng 2 có 28 hoặc 30 ngày";
            break
        case 1 : 
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 10 :
        case 12 :
            document.getElementById("v1").innerHTML ="Tháng " + b + " có 31 ngày";   
            break
        case 4 : 
        case 6 :
        case 9 :
        case 11 :
            document.getElementById("v1").innerHTML ="Tháng " + b + " có 30 ngày";   
            break
        default :          
        document.getElementById("v1").innerHTML ="Tháng vừa nhập không hợp lệ";   


              
    }
}