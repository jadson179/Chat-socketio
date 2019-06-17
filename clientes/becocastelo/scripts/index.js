const url = 'http://ip-api.com/json/';
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200 ){
            let responseJson = JSON.parse(this.responseText);
            let cep = responseJson.zip;
            let lat = responseJson.lat;
            let lon = responseJson.lon;
            setUrlButton(cep, lat, lon);
        }
    }
xhttp.open('GET', url, true);
xhttp.send();

addEventListener('load', checkcookie);
addEventListener('load', showMsg);

function setUrlButton(cep, lat, lon){
    let location =  navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position)
    },(error)=>{
        console.log(error)
    });
    let fildCEP = cep;
    let fildLAT = lat;
    let fildLON = lon;
    var url = ["https://suporte.unisec.com.br/servicedesk/customer/portal/7",
               "https://suporte.unisec.com.br/servicedesk/customer/portal/10",
               "https://suporte.unisec.com.br/servicedesk/customer/portal/13",
               "https://suporte.unisec.com.br/servicedesk/customer/portal/6",
               "https://suporte.unisec.com.br/servicedesk/customer/portal/27",
               "https://suporte.unisec.com.br/servicedesk/customer/portal/11",
               "https://suporte.unisec.com.br/servicedesk/customer/portal/29",
                "https://suporte.unisec.com.br/servicedesk/customer/portal/15"]

    if(fildCEP == 88075 &&  fildLAT == -27.5869591 && fildLON == -48.5779027){
        let button = document.getElementsByClassName('container-bottom')[0];
        button.innerHTML = `<label><a href=${url[0]}>ABRIR CHAMADO</a></label>`;
    }else if (fildCEP == 88075 &&  fildLAT == -27.5873508 && fildLON == -48.5775496){ 
        let button = document.getElementsByClassName('container-bottom')[0];
        button.innerHTML = `<label><a href=${url[1]}>ABRIR CHAMADO</a></label>`;
    }else if(fildCEP == 88075 &&  fildLAT == -27.5874221 && fildLON == -48.5775251){
        let button = document.getElementsByClassName('container-bottom')[0];
        button.innerHTML = `<label><a href=${url[2]}>ABRIR CHAMADO</a></label>`;
    }else if(fildCEP == 88070 &&  fildLAT == -27.5848104 && fildLON == -48.5840835){
        let button = document.getElementsByClassName('container-bottom')[0];
        button.innerHTML = `<label><a href=${url[3]}>ABRIR CHAMADO</a></label>`;
    }else if(fildCEP == 88015 &&  fildLAT == -27.5914533 && fildLON == -48.5586996){
        let button = document.getElementsByClassName('container-bottom')[0];
        button.innerHTML = `<label><a href=${url[4]}>ABRIR CHAMADO</a></label>`;
    }else if(fildCEP == 88075 &&  fildLAT == -27.5839386 && fildLON == -48.5838017){
        let button = document.getElementsByClassName('container-bottom')[0];
        button.innerHTML = `<label><a href=${url[5]}>ABRIR CHAMADO</a></label>`;
    }else if(fildCEP == 88075 &&  fildLAT == -27.5836139 && fildLON == -48.5829051){
        let button = document.getElementsByClassName('container-bottom')[0];
        button.innerHTML = `<label><a href=${url[6]}>ABRIR CHAMADO</a></label>`;
    }else {
        let button = document.getElementsByClassName('container-bottom')[0];
        button.innerHTML = `<label><a href=${url[7]}>ABRIR CHAMADO</a></label>`;
    }
}
function createObjectData() {
    let objData = new Date();
    let hours = objData.getHours();   
    let min = objData.getMinutes();
    let actualHour =  `${hours}:${min}`;
    return actualHour;
}
function showMsg() {
    /*Show menssagem based hours */
    let getElementTitle = document.getElementsByClassName('title')[0];
    let hours = createObjectData();
    
    if( hours <= '12:0') {
        getElementTitle.innerHTML = `<h3>Bom dia, ${getCookie()}</h3>`;
    }else if(hours > '12:1' && hours < '18:0'){

        getElementTitle.innerHTML = `<h3>Boa tarde, ${getCookie()}</h3>`;
    } else if(hours > '18:1') {
        getElementTitle.innerHTML = `<h3>Boa noite, ${getCookie()}</h3>`;
    }
}
function setCookie(cname, exdays) {
    /* create cookie*/
    let objData = new Date();
    objData.setTime(objData.getTime() + (exdays*24*60*60*1000));
    var expires = objData.toUTCString();
    document.cookie = `name=${cname};expires=tru,${expires}`; 
}
function getCookie(cname) {
    /* get cookie */
    let name = document.cookie.slice(5,20);
        return cname = name ;
}
function checkcookie(){
    /*check is exist or not */
    let cookie = getCookie();
    if (cookie != "" && cookie != 'null' && cookie != Number() ){
        console.log('%cUNISEC 🤨 ','font: 5em roboto; color:rgb(32, 0, 138);');
        console.log('%cEssa solução foi desenvolvida com o proposito de melhorar o gerenciamento de chamados de uma central de suporte, sendo assim, a solução irá gerar uma facilidade no acesso a central de suporte por meio de um link dinâmico que é gerenciado por um script, o script identifica qual o (CEP, LATIDUTE E LONGITUDE) em que o usuário está, baseado nessas informações alteramos a url para o projeto na central de suporte que corresponde ao cliente da central','font: 13px roboto; color:rgb(0,0,0);');
    }else {
        let cname = prompt("Informe seu nome?");
        let exdays = 90;

        setCookie(cname, exdays);
        showMsg();
    }
}