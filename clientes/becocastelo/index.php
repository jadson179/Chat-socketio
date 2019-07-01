<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content="Essa solução foi desenvolvida com o proposito de melhorar o gerenciamento de chamados de uma central de suporte, sendo assim, a solução irá gerar uma facilidade no acesso a central de suporte por meio de um link dinâmico que é gerenciado por um script, o script identifica qual o (CEP, LATIDUTE E LONGITUDE) em que o usuário está, basedo nessas informações alteramos a url para o projeto na central de suporte que corresponde ao cliente da central."/>
    <meta name="author" content="Jadson Santos"/>
    <link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet">  
    <title>BECO-CASTELO</title>
    <link rel="icon" href="https://imgs.unisec.com.br/becocastelo/icon-becocastelo.png">
    <script src="scripts/javascript/index.js"></script>
    <script>
        addEventListener('load', setUrlButton)
        function setUrlButton(){
        let getIpUser = '<?php require('./scripts/php/infoClients.php')?>';
        let convertIpArray = getIpUser.split('.')[1]; 
        let url = ["https://suporte.unisec.com.br/servicedesk/customer/portal/7",  // BECO-CASTELO
                  "https://suporte.unisec.com.br/servicedesk/customer/portal/10", // A&A Philippi Business Center
                  "https://suporte.unisec.com.br/servicedesk/customer/portal/13", // Hamilton Araujo Top Residence
                  "https://suporte.unisec.com.br/servicedesk/customer/portal/6",  // Felipe Antonio Lohn 
                  "https://suporte.unisec.com.br/servicedesk/customer/portal/27", // Althoff Prime Residence
                  "https://suporte.unisec.com.br/servicedesk/customer/portal/11", // Centro Executivo Imperatriz 
                  "https://suporte.unisec.com.br/servicedesk/customer/portal/29", // Maria Esther
                  "https://suporte.unisec.com.br/servicedesk/customer/portal/15"] // Suporte

        if(parseInt(convertIpArray) == 16){
            //BECOCASTELO
            let button = document.getElementsByClassName('container-bottom')[0];
            button.innerHTML = `<label><a href=${url[0]}>ABRIR CHAMADO</a></label>`;
        }else if(parseInt(convertIpArray) == 19){
            // Centro Executivo Imperatriz 
            let button = document.getElementsByClassName('container-bottom')[0];
            button.innerHTML = `<label><a href=${url[5]}>ABRIR CHAMADO</a></label>`;
        }else if(parseInt(convertIpArray) == 18){
            // Maria Esther
            let button = document.getElementsByClassName('container-bottom')[0];
            button.innerHTML = `<label><a href=${url[6]}>ABRIR CHAMADO</a></label>`;
        }else if(parseInt(convertIpArray) == 21){
            // A&A Philippi Business Center
            let button = document.getElementsByClassName('container-bottom')[0];
            button.innerHTML = `<label><a href=${url[1]}>ABRIR CHAMADO</a></label>`;
        }if(parseInt(convertIpArray) == 22){
            // Hamilton Araujo Top Residence
            let button = document.getElementsByClassName('container-bottom')[0];
            button.innerHTML = `<label><a href=${url[2]}>ABRIR CHAMADO</a></label>`;
        }else {
            //Suporte
            let button = document.getElementsByClassName('container-bottom')[0];
            button.innerHTML = `<label><a href=${url[7]}>ABRIR CHAMADO</a></label>`;
        }
    
    }
    </script>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <header class="title">
        
    </header>
    <section class="container">
        <header class="top-container">
                <img class="header-content" src="https://imgs.unisec.com.br/becocastelo/icon-becocastelo.png" alt="beco-castelo"> 
                <div id="container-title" class="header-content"><strong>CENTRAL DE SUPORTE</strong></div>
        </header>
        <div class="content-container">
            <ul> <strong>Empresa reponsável</strong> 
                <li> A empresa UNISEC é responsável por todos os itens de tecnologias da infraestrutura de TI da BECO-CASTELO LTDA.</li>
            </ul>
            <ul><strong>Se precisa de ajuda em:</strong>
                <li>Controle de Acesso</li>
                <li>Video Monitoramento</li>
                <li>Telefonia</li>
                <li>Manutenção</li>
                <li>Instalação de aplicativos</li>
                <li>Internet</li>
                <li>Dúvidas em geral</li>
            </ul>
        </div>
    </section>
    <div class="container-bottom">
    </div>
    <footer class="footer">
            © Desenvolvido por UNISEC 2013-2019 - Tel (48) 3031-1144
    </footer>
</body>
</html>
