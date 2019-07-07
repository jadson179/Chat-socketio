addEventListener('load', setUrlButton);
addEventListener('load', showMsg);

function createObjectData() {
    /*Pega o horário local da máquina do usuário */
    const objData = new Date();
    const hours = objData.getHours();   
    const min = objData.getMinutes();
    const getTime = objData.getTime();
    const setTime = objData.setTime();
    const actualHour= {
        "hora": hours,
        "min": min,
        "getTime": getTime,
        "setTime":setTime
	}
	return actualHour;
}
function showMsg() {
    /*Show menssagem based hours */
    let getElementTitle = document.getElementsByClassName('title')[0];
    let hours = createObjectData();
    
    if(hours.hora < 12) {
        getElementTitle.innerHTML = `<h3>Bom dia</h3>`;
    }else if(hours.hora > 12 && hours.hora <= 18 ){
        getElementTitle.innerHTML = `<h3>Boa tarde</h3>`;
    } else if(hours.hora > 18) {
        getElementTitle.innerHTML = `<h3>Boa noite</h3>`;
    }
}
function setUrlButton(){
    const convertIpArray = getIpUser.split('.')[1]; //Pego o segundo octeto da rede do cliente
    const url = {
            central: {
                "becocastelo":"https://suporte.unisec.com.br/servicedesk/customer/portal/7",
                "aeaPhilippi":"https://suporte.unisec.com.br/servicedesk/customer/portal/10",
                "hamilton":"https://suporte.unisec.com.br/servicedesk/customer/portal/13", 
                "felipe":"https://suporte.unisec.com.br/servicedesk/customer/portal/6", 
                "althoff":"https://suporte.unisec.com.br/servicedesk/customer/portal/27",
                "centroExecutivo":"https://suporte.unisec.com.br/servicedesk/customer/portal/11", 
                "mariaEsther":"https://suporte.unisec.com.br/servicedesk/customer/portal/29",
                "suporte":"https://suporte.unisec.com.br/servicedesk/customer/portal/15"
            },
            imgs: {
                "becocastelo":"https://imgs.unisec.com.br/becocastelo/icon-becocastelo.png",
                "aeaPhilippi":"https://imgs.unisec.com.br/becocastelo/icon-a&a.png",
                "hamilton":"https://imgs.unisec.com.br/becocastelo/icon-hamilton.png", 
                "felipe":"https://imgs.unisec.com.br/becocastelo/icon-felipe-lohn.png", 
                "althoff":"https://suporte.unisec.com.br/servicedesk/customer/portal/27",
                "centroExecutivo":"https://imgs.unisec.com.br/becocastelo/icon-cei.png", 
                "mariaEsther":"https://imgs.unisec.com.br/becocastelo/icon-maria.png",
                "suporte":"https://suporte.unisec.com.br/servicedesk/customer/portal/15"
            }
        }

        
    if(convertIpArray == '0'){
        //Beco-Castelo
        let button = document.getElementsByClassName('container-bottom')[0];
        document.getElementsByClassName('header-content')[0].src = url.imgs.becocastelo;
        button.innerHTML = `<label><a href=${url.central.becocastelo}>ABRIR CHAMADO</a></label>`;
    }else if(parseInt(convertIpArray) == '19'){
        // Centro Executivo Imperatriz 
        let button = document.getElementsByClassName('container-bottom')[0];
        document.getElementsByClassName('header-content')[0].src = url.imgs.centroExecutivo;
        button.innerHTML = `<label><a href=${url.central.centroExecutivo}>ABRIR CHAMADO</a></label>`;
    }else if(convertIpArray == '18'){
        // Maria Esther
        let button = document.getElementsByClassName('container-bottom')[0];
        document.getElementsByClassName('header-content')[0].src = url.imgs.mariaEsther;
        button.innerHTML = `<label><a href=${url.central.mariaEsther}>ABRIR CHAMADO</a></label>`;
    }else if(convertIpArray == '21'){
        // A&A Philippi Business Center
        let button = document.getElementsByClassName('container-bottom')[0];
        document.getElementsByClassName('header-content')[0].src = url.imgs.aeaPhilippi;
        button.innerHTML = `<label><a href=${url.central.aeaPhilippi}>ABRIR CHAMADO</a></label>`;
    }if(convertIpArray == '22'){
        // Hamilton Araujo Top Residence
        let button = document.getElementsByClassName('container-bottom')[0];
        document.getElementsByClassName('header-content')[0].src = url.imgs.hamilton;
        button.innerHTML = `<label><a href=${url.central.hamilton}>ABRIR CHAMADO</a></label>`;
    }else if(convertIpArray == '20'){
        // Felipe Antonio Lohn 
        let button = document.getElementsByClassName('container-bottom')[0];
        document.getElementsByClassName('header-content')[0].src = url.imgs.felipe;
        button.innerHTML = `<label><a href=${url.central.felipe}>ABRIR CHAMADO</a></label>`;
    }
}
console.log('%cUNISEC 🤨 ','font: 5em roboto; color:rgb(32, 0, 138);');
console.log('%cEssa solução foi desenvolvida com o proposito de melhorar\
        o gerenciamento de chamados de uma central de suporte,sendo assim, a solução\
        irá gerar uma facilidade no acesso a central de suporte por meio de um link\
        dinâmico que é gerenciado por um script, o script identifica qual o IP em que\
        a estação de trabalho do usuário possui, baseado nessa informaçõção alteramos a\
        url para o projeto na central de suporte que corresponde ao cliente da central.','\
        font: 13px roboto; color:rgb(0,0,0);');