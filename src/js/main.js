$(function(){

var Carousel = function(options){
               
                let defaults = {
                    ele:'',//必填参数
                    imgs:[],//必传参数
                    // width:,
                    height:420,
                    index:0,
                    page:true,//是否显示分页
                    button:false,//是否显示左右按钮
                    type:'fade',//动画类型：vertical(垂直)，horizontal(水平),fade(淡入淡出)
                    seamless:true,//是否无缝滚动,
                    duration:2000,//轮播间隔时间
                }
                
                // 扩展默认参数
                this.opt = Object.assign({},defaults,options);
                this.len = this.opt.imgs.length;

                // 初始化并传递参数
                this.init();
             }


            // 方法：
            Carousel.prototype.init = function(){
                var opt = this.opt;
                /*
                    * 获取/生成元素
                    * 绑定事件
                 */
                
                var ele = document.querySelector(opt.ele);
                // 设置样式（宽高）
                ele.style.width = opt.width + 'px';
                ele.style.height = opt.height + 'px';

                // 生成图片(ul,li,img)
                let ul = document.createElement('ul');

                // 给ul添加类型：设置轮播类型
                ul.className = opt.type;//horizontal,vertical,fade

                // 水平轮播需要给ul添加宽度
                if(opt.type === 'horizontal'){
                    ul.style.width = opt.width*this.len + 'px';
                }else if(opt.type === 'fade'){
                    ul.style.width = opt.width + 'px';
                    ul.style.height = opt.height + 'px';
                }

                ul.innerHTML = opt.imgs.map(url=>{
                    return '<li><a href="#"><img src="'+url+'"/></a></li>';
                }).join('');

                // 写入页面
                ele.appendChild(ul);

                // 分页
                if(opt.page){
                    this.page = document.createElement('div');
                    this.page.className = 'page';
                    for(var i=0;i<this.len;i++){
                        var span = document.createElement('span');
                        span.innerText = i+1;

                        // 高亮
                        if(i===opt.index){
                            span.className = 'active';
                        }
                        this.page.appendChild(span);
                    }
                    ele.appendChild(this.page);
                }

                // 传递参数
                this.ul = ul;
                this.ele = ele;

                // 初始化
                // 页面进入自动轮播
                this.timer = setInterval(this.autoPlay.bind(this),opt.duration);
                this.play();
                // 鼠标移入移出
                ele.onmouseover = ()=>{
                    this.stop();
                }
                ele.onmouseout = ()=>{
                    this.timer = setInterval(this.autoPlay.bind(this),opt.duration);
                }

                // 点击分页切换
                ele.onclick = e=>{
                    if(e.target.parentNode.className === 'page'){
                        opt.index = e.target.innerText-1;

                        this.play();
                    }else if(e.target.className === 'btn-prev'){
                        opt.index--;
                        this.play();
                    }else if(e.target.className === 'btn-next'){
                        opt.index++;
                        this.play();
                    }
                }
                
                
            }

            Carousel.prototype.autoPlay = function(){
                        this.opt.index++;
                        this.play();
            }

            // 播放
            Carousel.prototype.play = function(){
                let opt = this.opt;

                // 到达最后一张后重置到第一张
                if(opt.index>=this.len){
                    opt.index = 0;
                }else if(opt.index<0){
                    opt.index = this.len-1;
                }

            
                if(opt.type === 'fade'){
                    for(var i=0;i<this.len;i++){
                        animate(this.ul.children[i],{opacity:0});
                    }
                    animate(this.ul.children[opt.index],{opacity:1});

                }

                

                // 页码高亮
                if(this.page){
                    for(var i=0;i<this.len;i++){
                        this.page.children[i].className = '';
                    }
                    this.page.children[opt.index].className = 'active';
                }
            }

            // 停止
            Carousel.prototype.stop = function(){
                clearInterval(this.timer);
            }

            new Carousel({
                ele:'.main_banner',
                imgs:["../img/index_banner_01_820.jpg","../img/index_banner_naifenniaoku818.jpg","../img/index_banner_fushi811.jpg","../img/index_banner_tongzhuang811.jpg","../img/index_banner_yingyong811.jpg","../img/index_banner_meizhuang811.jpg","../img/index_banner_baojian811.jpg","../img/index_banner_chufang811.jpg"]
            });
            new Carousel({
                ele:'.main_banner2',
                imgs:["../img/banner_list_1_1.gif","../img/banner_list_1_2.gif","../img/banner_list_1_3.gif","../img/banner_list_2_1.gif","../img/banner_list_2_2.gif","../img/banner_list_2_3.gif"],
                page:false,
                width:190,
            });
            new Carousel({
                ele:'.main_banner3',
                imgs:["../img/banner_list_1_2.gif","../img/banner_list_1_3.gif","../img/banner_list_2_1.gif","../img/banner_list_2_2.gif","../img/banner_list_2_3.gif"],
                page:false,
                width:190,
            });
            new Carousel({
                ele:'.main_banner4',
                imgs:["../img/banner_list_1_3.gif","../img/banner_list_2_1.gif","../img/banner_list_2_2.gif","../img/banner_list_2_3.gif"],
                page:false,
                width:190,
            });

            new Carousel({
                ele:'.baby_banner',
                imgs:["../img/index_ad_nf_m_bottom1.jpg","../img/index_ad_nf_m_bottom2.jpg","../img/index_ad_nf_m_bottom3.jpg","../img/index_ad_nf_m_bottom4.jpg","../img/index_ad_nf_m_bottom5.jpg"],
                width:648,
                height:204,
                page:false,
            });
            







});