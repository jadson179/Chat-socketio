<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet">  
    <title>Acesso ao Suporte</title>
    <link rel="icon" href="https://imgs.unisec.com.br/becocastelo/icon-becocastelo.png">
    <script type="text/javascript" src="scripts/javascript/index.js" defer> </script>
    <script type="text/javascript">
       const getIpUser = '<?php require('./scripts/php/infoClients.php')?>';
       document.cookie = `teste=${getIpUser}`;
    </script>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <header class="title">
        
    </header>
    <section class="container">
        <header class="top-container">
                <img class="header-content" src="" alt="imagem do empreendimento" title="imagem do empreendimento"> 
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
