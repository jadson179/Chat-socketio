# Gerenciamento de Acessos - JIRA

Essa solução foi desenvolvida com o proposito de melhorar o gerenciamento de chamados de uma central de suporte,sendo assim, a solução irá gerar uma facilidade no acesso a central de suporte por meio de um link dinâmico que é gerenciado por um script/javascript e PHP, o script identifica qual o IP em que a estação de trabalho do usuário possui, baseado nessa informaçõção alteramos a url para o projeto na central de suporte que corresponde ao cliente da 
central.

## Requisitos

 - [PHP 7.0 ou Superior](https://www.php.net/downloads.php)
 - [Apache 1.9.3 ou Superior](https://projects.apache.org/releases.html)
   ou
 - [XAMPP](https://www.apachefriends.org/pt_br/download_success.html)


 ## Instalação do XAMPP 

 - Ubuntu
 - Debian
 - Mint 

`WEBSITE`: [xampp](https://www.apachefriends.org/pt_br/index.html)

### Iniciado a instalação:

<a href="https://asciinema.org/a/256061"><img src="https://asciinema.org/a/256061.svg" width="400px" height="300px"></a>


### Converter o arquivo em executável

<a href="https://asciinema.org/a/256066"><img src="https://asciinema.org/a/256066.svg" width="400px" height="300px"></a>

## Execute o arquivo 

<a href="https://asciinema.org/a/256067"><img src="https://asciinema.org/a/256067.svg" width="400px" height="300px"></a>

### Screenshots 

### Mova o repositório ou copie para /opt/lamp/htdocs/dashboard/

<a href="https://asciinema.org/a/256068"><img src="https://asciinema.org/a/256068.svg" width="400px" height="300px"></a>

### Inicie o XAMPP

<a href="https://asciinema.org/a/256069"><img src="https://asciinema.org/a/256069.svg" width="400px" height="300px"></a>

### Acesso a url do projeto [localhost](http://0.0.0.0/dashboard/Enigma/clientes/becocastelo/index.php)

### Local de configuração conforme seu cenário

Havéra um arquivo no `PATH="/Enigma/clientes/becocastelo/scripts/javascript/index.js"` em que terá um objeto chamado `url` que contém as propriedades necessárias para funcionamento da solução, sendo elas, `central` que contém os endereços de acesso a sua central de suporte, e outra propriedade usada são às imagens de cada projeto de sua central de suporte, sendo ela, `imgs` que contém os endereços das imagens de cada projeto.


Vamos visualizar o arquivo que possui essas informações: 

<a href="https://asciinema.org/a/256189"><img src="https://asciinema.org/a/256189.svg" width="400px" height="300px"></a>

### Definição do octeto
  
Algo muito importante deverá ser definido agora, pois será a lógica necessária para que quando o usuário acessar a url do página `index.php` Será analisado o segundo octeto do segmento de rede que a máquina cliente se encontra, com base nessa informação definiremos dinâmicamente como a aplicação irá alterar o conteúdo.

Para entendimento, vamos monstar um cenário hipotético.

Cenário Segundo Octeto da Rede: Tenho dois clientes e para cada terá um endereço unico de comunicação sendo o primeiro `172.10.0.0` e o segundo `172.11.0.0`. Agora temos a informação necessária que define quem é o cliente `A` e o `B`, o script foi estruturado para pegar o segundo octeto da rede que define quem é o cliente.  
    Assim que o servidor consegue capturar qual o IP do usuário ele é convertido em uma [Array](https://www.google.com/search?q=array&oq=array&aqs=chrome..69i57j69i60l3.1100j0j7&sourceid=chrome&ie=UTF-8) que separa cada decimal da rede em posições:

Cenánario Segundo Octeto da Rede por Array: Tenho um IP `172.10.0.0` que foi convertido em um array com a função slipt('.'), que no array ficará assim `array = ['172','10','0','0']` e as posições do array são iniciadas sempre com 0, sendo assim, na posição 0 tenho `172`, posição 1 tenho `10`, posição 2 tenho `0`, posição 3 tenho `0`.

Vamos lá nosso arquivo `index.js` e identificar este cara:

<a href="https://asciinema.org/a/256190"><img src="https://asciinema.org/a/256190.svg" width="400px" height="300px"></a>


**obs**: Para saber qual é o segundo octeto, pegue um IP qualquer e separe cada decimal da rede, vamos usar o `172.10.0.0` o primeiro octeto é `172`, segundo octeto `10`, terceiro octeto `0`, quarto octeto `0`. 

### Alterando conteúdo apartir da octeto escolhido:

```javascript
  if(convertIpArray == '10'){ //Comparo octeto do usuário com o octeto do cliente
      //CLIENTE A
      let button = document.getElementsByClassName('container-bottom')[0]; //Acesso o DOM e seleciono o local onde será inserido o botão
    document.getElementsByClassName('header-content')[0].src = url.imgs.becocastelo; //Configuro o endereço da imagem que será mostrado como logo
    button.innerHTML = `<label><a href=${url.central.becocastelo}>ABRIR CHAMADO</a></label>`; //Configuro o endereço da central de suporte na propriedade do botão
```
### Acessado valores de um objeto
  Como acesso informações de um objeto, o conhecimento necessário é que um objeto possui em seu interior uma `chave` de identificação e seus `valores`:

Vamos simular o objeto a ser alterado e como acessar as informações de seu interior:

```javascript
  const url = { //Nome do objeto é url, const somente é um tipo atribuição que diz que o conteúdo da variável não pode ser alterado
            central: { //Propriedade central que em seu corpo possui as url dos projetos da central de suporte
                "becocastelo":"https://suporte.unisec.com.br/servicedesk/customer/portal/7", // Nome da chave e seu valor separador por "chave":"valor"
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
``` 

Para acessar algo de dentro do objeto, sendo ele, becocastelo  e sua chave juntamente com a url da imagem

```javascript
    url.central.becocastelo //acesso a url da central. Output : "https://suporte.unisec.com.br/servicedesk/customer/portal/7"
    url.imgs.becocastelo //acesso a url da central. Output : "https://imgs.unisec.com.br/becocastelo/icon-becocastelo.png"
```
