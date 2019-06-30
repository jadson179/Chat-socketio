<?php 
    class Clients {
       public function getIp(){
        $mainIp = '';
		if (getenv('REMOTE_ADDR'))
            $mainIp = getenv('REMOTE_ADDR');
            
		return $mainIp;
            }
        }
    echo Clients::getIp()
?>