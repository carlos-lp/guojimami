<?php
    include 'connect.php';
    header('Content-Type:application/json;charset=utf-8');

    $phone_num = isset($_POST['phone_num']) ? $_POST['phone_num'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;
    $sql = "select * from user where phoneNum='$phone_num'";
    $result = $conn->query($sql);
    if($result->num_rows>0){
        echo "success";
    }else{
        echo "fail";
        
    }
    // echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>