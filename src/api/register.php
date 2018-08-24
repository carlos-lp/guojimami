<?php
    include 'connect.php';
    header('Content-Type:application/json;charset=utf-8');

    $reg_num = isset($_POST['reg_num']) ? $_POST['reg_num'] : null;
    $set_psw = isset($_POST['set_psw']) ? $_POST['set_psw'] : null;
    $sql = "select * from user where reg_num='$reg_num'";
    $result = $conn->query($sql);
    if($result){
        echo "success";
    }else{
        echo "fail";
        $sql = "insert into user(phoneNum,password) values('$reg_num','$set_psw')";
    }
    // echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>