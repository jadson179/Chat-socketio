# Gerenciamento de Acessos - JIRA

Essa solução foi desenvolvida com o proposito de melhorar o gerenciamento de chamados de uma central de suporte,sendo assim, a solução irá gerar uma facilidade no acesso a central de suporte por meio de um link dinâmico que é gerenciado por um script, o script identifica qual o IP em que a estação de trabalho do usuário possui, baseado nessa informaçõção alteramos a url para o projeto na central de suporte que corresponde ao cliente da 
central.

## Requisitos

 - [PHP 7.0 ou Superior](https://www.php.net/downloads.php)
 - [Apache 1.9.3 ou Superior](https://projects.apache.org/releases.html)

## Customização

Caso deseja utilizar para um uso fora do cenário informado acima, existe um função chamada "setUrlButton" PATH="Enigma/clientes/becocastelo/index.php" e nela se econtra toda a regra de negócio que altera a URL baseada na informação do IP da máquina cliente.
02852f9cfb905f01f49c592d581f4119f84a61bd3c3b83c592ce5c6a148383a