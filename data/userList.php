<?php
    $username = $_REQUEST['username'];
    if($username=='root'){
        echo '{
            "isExist":"true",
            "userPic":"img/user-pic.jpg"
        }';

    }else{
        echo '{
            "isExist":"",
            "userPic":"img/user-pic.jpg"
        }';
    }
?>