<?php 
include_once('conexao_db');
    $teleFone = $_POST['telefone'];
    $emailUser = $_POST['email'];
    $userPassword = $_POST['password'];
    $sql = "INSERT INTO NOME DA TEBELA (firstname, secondname, username, telefone, email, password,) values ('$firstName','$secondName','$userName','$teleFone', '$emailUser', '$userPassword')";


    myqsli_query($conex, $sql) or die ("Erro no cadastro do cliente");
    
    myqsli_close($conex);
}
?>