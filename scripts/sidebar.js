function hideE(){
    var show1 = document.getElementById('show1').style.display;
    var show2 = document.getElementById('show2').style.display;
    if(show1 == 'none' && show2 == 'none'){
        this.show1.style.display = "block";
        this.show2.style.display = "block";
    }else {
        this.show1.style.display = "none";
        this.show2.style.display = "none";
    }
}