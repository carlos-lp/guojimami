$(function(){
    $('.show_code').html(function(){
        var code = '0123456789abcdefghijklmnopqrstuvwxyz';
        var res='';
        for(var i=0;i<4;i++){
            var num = Math.floor(Math.random()*36);
            res += code[num];
        }
        return res;
    });
    //点击重新生成验证码
    $('.show_code').on('click',function(){
        var code = '0123456789abcdefghijklmnopqrstuvwxyz';
        var res='';
        for(var i=0;i<4;i++){
            var num = Math.floor(Math.random()*36);
            res += code[num];
        }
        $('.show_code').html(res);
    });
    var btn=document.querySelector('.submit');
    btn.onclick = function(){
        var show_code = document.querySelector('.show_code').innerHTML;
        var code = document.querySelector('.code').value;
        if(code != show_code){
            alert('您输入的验证码不正确');
            return false;
        }

    }



    var $reg_num = $('.reg_num');
    var $code = $('.code');
    var $show_code = $('.show_code');
    var $set_psw = $('.set_psw');
    var $con_psw = $('.con_psw');
    
    $('.submit').on('click',function(){
        
    })
    
    







})