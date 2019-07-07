<?php 
    class Clients {
       public $mainIp = '';
       public function getIp(){
		if (getenv('REMOTE_ADDR'))
            $mainIp = getenv('REMOTE_ADDR');
        return $mainIp;
            }
       }
       echo Clients::getIp()
?>