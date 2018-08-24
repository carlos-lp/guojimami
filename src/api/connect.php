<?php
	
	$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'guojimami';


    // 创建连接（实例化）
    $conn = new mysqli($servername, $username, $password, $dbname);

     // 检测连接
    if ($conn->connect_error) {
    	// 输出信息并结束连接
        die("连接失败: " . $conn->connect_error);
    }
    $conn->set_charset('utf8');

?>