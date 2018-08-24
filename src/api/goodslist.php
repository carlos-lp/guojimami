<?php
    include 'connect.php';
    header('Content-Type:application/json;charset=utf-8');

    
    $sql = "select * from goodslist";
    $result = $conn->query($sql);
    if($result->num_rows>0){
        
        while($row = $result->fetch_all(MYSQLI_ASSOC)) {
            
            echo json_encode($row,JSON_UNESCAPED_UNICODE);
        };
        
    }else{
        echo "fail";
        
    }
    // echo json_encode($res,JSON_UNESCAPED_UNICODE);转码
?>