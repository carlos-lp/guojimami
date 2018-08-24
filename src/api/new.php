<?php
    include 'connect.php';
    header('Content-Type:application/json;charset=utf-8');

    
    $sql = "select * from goods where type='newGoods'";
    $result = $conn->query($sql);
    if($result->num_rows>0){
        
        while($row = $result->fetch_all()) {
            
            echo json_encode($row);
        };
        
    }else{
        echo "fail";
        
    }
    // echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>