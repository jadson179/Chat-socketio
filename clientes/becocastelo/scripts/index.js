

addEventListener('load', checkcookie);
addEventListener('load', showMsg);

navigator.geolocation.getCurrentPosition((position=>{
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    setUrlButton(lat, lon);
}),error=>{
    console.log('USER NOT PERMISSION LOCATION')
})

function setUrlButton(lat, lon){

    let fildLAT = lat;
    let fildLON = lon;
    console.log('latitude'+lat)
    console.log('logitude'+lon)
    var url = ["https://suporte.unisec.com.br/servicedesk/customer/portal/7",
               "https://suporte.unisec.com.br/servicedesk/customer/portal/10",
               "https://suporte.unisec.com.br/servicedesk/customer/portal/13",
               "https://suporte.unisec.com.br/servicedesk/customer/portal/6",
               "https://suporte.unisec.com.br/servicedesk/customer/portal/27",
               "https://suporte.unisec.com.br/servicedesk/customer/portal/11",
               "https://suporte.unisec.com.br/servicedesk/customer/portal/29",
                "https://suporte.unisec.com.br/servicedesk/customer/portal/15"]

    if(-27.586966 >= fildLAT + 0.000151 && -48.577899 >= fildLON + 0.000151){
        //BECOCASTELO
        let button = document.getElementsByClassName('container-bottom')[0];
        button.innerHTML = `<label><a href=${url[0]}>ABRIR CHAMADO</a></label>`;
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
        console.log('%cEssa solução foi desenvolvida com o proposito de melhorar o gerenciamento de chamados de uma central de suporte, sendo assim, a solução irá gerar uma facilidade no acesso a central de suporte por meio de um link dinâmico que é gerenciado por um script, o script identifica qual o (LATIDUTE E LONGITUDE) em que o usuário está, baseado nessas informações alteramos a url para o projeto na central de suporte que corresponde ao cliente da central','font: 13px roboto; color:rgb(0,0,0);');
    }else {
        let cname = prompt("Informe seu nome?");
        let exdays = 90;

        setCookie(cname, exdays);
        showMsg();
    }
}