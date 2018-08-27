<?php
    include 'connect.php';
    header('Content-Type:application/json;charset=utf-8');

    $reg_num = isset($_POST['reg_num']) ? $_POST['reg_num'] : null;
    $set_psw = isset($_POST['set_psw']) ? $_POST['set_psw'] : null;
    $sql = "select count(1) as num from user where phoneNum='$reg_num'";
    $result = $conn->query($sql);
    $res = $result->fetch_assoc();
    // echo $res['num'];die();
    if($res['num'] > 0){
        echo "exist";
    }else{
        $sql1 = "insert into user(phoneNum,password) values('$reg_num','$set_psw')";
        $res = $conn->query($sql1);
        echo "unexist"; 
        //插入数据库不成功
    }
?>