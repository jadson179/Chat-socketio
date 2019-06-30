<?php 
    class Clients {
        function getIp(){
            $ip = '';

            if(getgnv('HTTP_FORWARDED')){
                ip = getgnv('HTTP_FORWARDED');
            }
        }
    }
    echo Clients::getIp()

?>