addEventListener('load', checkcookie);
addEventListener('load', showMsg);
function createObjectData() {
    /*Pega o horário local da máquina do usuário */
    let objData = new Date();
    let hours = objData.getHours();   
    let min = objData.getMinutes();
    let actualHour= {
        "hora": hours,
        "min": min
    }
    return actualHour;
}
function showMsg() {
    /*Show menssagem based hours */
    let getElementTitle = document.getElementsByClassName('title')[0];
    let hours = createObjectData();
    
    if(hours.hora < 12) {
        getElementTitle.innerHTML = `<h3>Bom dia, ${getCookie()}</h3>`;
    }else if(hours.hora > 12 && hours.hora <= 18 ){
        getElementTitle.innerHTML = `<h3>Boa tarde, ${getCookie()}</h3>`;
    } else if(hours.hora > 18) {
        getElementTitle.innerHTML = `<h3>Boa noite, ${getCookie()}</h3>`;
    }
}
function setCookie(cname, exdays) {
    /* create cookie*/
    let objData = new Date();
    objData.setTime(objData.getTime() + (exdays*24*60*60*1000));
    let expires = objData.toUTCString();
    document.cookie = `name=${cname};expires=tru,${expires}`; 
}
function getCookie(cname) {
    /* get cookie */
    let name = document.cookie.slice(5,20);
        return cname = name ;
}
function checkcookie(){
    /*checa se existe um cookie*/
    let cookie = getCookie();
    if (cookie != "" && cookie != 'null' && cookie != Number() ){
        console.log('%cUNISEC 🤨 ','font: 5em roboto; color:rgb(32, 0, 138);');
        console.log('%cEssa solução foi desenvolvida com o proposito de melhorar\
        o gerenciamento de chamados de uma central de suporte,sendo assim, a solução\
        irá gerar uma facilidade no acesso a central de suporte por meio de um link\
        dinâmico que é gerenciado por um script, o script identifica qual o IP em que\
        a estação de trabalho do usuário possui, baseado nessa informaçõção alteramos a\
        url para o projeto na central de suporte que corresponde ao cliente da central.','\
        font: 13px roboto; color:rgb(0,0,0);');
    }else {
        let cname = prompt("Informe seu nome?");
        let exdays = 90;

        setCookie(cname, exdays);
        showMsg();
    }
}