<template>
  <div id="app">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <div class="ban1">
          <a href="https://www.gm4life.cn/yueshop/wap/shop/index?shop_id=74">
            <img src="http://img.e-shequ.com/FtBU12kH7ambivCYmzh8X1CxCb68" alt="tt">
          </a>                    
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="ban1">
          <a href="https://www.gm4life.cn/guangming/weixin/home/index.html?state=123#/">
            <img src="http://img.e-shequ.com/FrjrQx2hsdij3Ock7WeD-5UBtYbI" alt="tt">
          </a>                    
        </div>
      </swiper-slide>
       <swiper-slide>
        <div class="ban1">
          <a href="https://www.gm4life.cn/yueshop/index.php/wap/goods/goodssearchlist?sear_name=索河湾&shop_id=0">
            <img src="http://img.e-shequ.com/FhSL2cn41S2sRQ-3vtOhWOH7vQRc" alt="tt">
          </a>                    
        </div> 
      </swiper-slide>
      <swiper-slide>
        <div class="ban1">
          <a href="https://www.gm4life.cn/yueshop/wap/shop/index?shop_id=58">
            <img src="http://img.e-shequ.com/FqD3amOLsg50FM0K2k5dTHhHm6h6" alt="tt">
          </a>                    
        </div> 
      </swiper-slide>
      <swiper-slide>
        <div class="ban1">
          <a href="https://www.gm4life.cn/yueshop/wap/shop/index?shop_id=59">
            <img src="http://img.e-shequ.com/FpdmTSuHvEObREou3uOzwY2bv7al" alt="tt">
          </a>                    
        </div> 
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>    
    </swiper>
    <div class="jiugongge">
      <ul>
        <li class="jgg_li">
          <a href="https://w.url.cn/s/AtroAQY">
            <div class="jgg_img">
              <img src="../static/img/Dlogo.png" alt="tt">
            </div>
            <span>光明随心订</span>
          </a>
        </li>

        <li class="jgg_li" >
          <a href="https://www.gm4life.cn/yueshop/wap/shop/index?shop_id=34">
            <div class="jgg_img">
              <img src="../static/img/jdqx.png" alt="tt">
            </div>
            <span>家电清洗</span>
          </a>
        </li>

        <li class="jgg_li"  >
          <a href="https://sugs.suning.com/ADtzkFPP">
            <div class="jgg_img">
              <img src="../static/img/jdwx.png" alt="tt">
            </div>
            <span>家电维修</span>
          </a>
        </li> 

        <li class="jgg_li" >
          <a href="https://www.gm4life.cn/yueshop/wap/shop/index?shop_id=48">
            <div class="jgg_img">
              <img src="../static/img/jzbj.png" alt="tt">
            </div>
            <span>家政保洁</span>
          </a>
        </li> 
        
         <li class="jgg_li">
          <a href="https://sugs.suning.com/ADtxnSX0">
            <div class="jgg_img">
              <img src="../static/img/snqx.png" alt="tt">
            </div>
            <span>空气治理</span>
          </a>
        </li>



        <li class="jgg_li">
          <a href="https://www.gm4life.cn/yueshop/wap/shop/index?shop_id=61">
            <div class="jgg_img">
              <img src="../assets/img/e89789b1-7aaf-4493-b95c-56be4146b93c.jpg" alt="tt">
            </div>
            <span>凹凸出行</span>
          </a>
        </li> 
       
        <li class="jgg_li">
          <a href="http://bx-hz.familyaid.com.cn/htmlserver/index.html#/onlineDiagnose/index?id=gm">
            <div class="jgg_img">
              <img src="../static/img/xinxin.png" alt="tt">
            </div>
            <span>健康咨询</span>
          </a>
        </li>

        <li class="jgg_li"  @click="add()">
          <a href="javascript:void(0)">
            <div class="jgg_img">
              <img src="../static/img/zfw.png" alt="tt">
            </div>
            <span>其他服务</span>
          </a>
        </li>

      </ul>
    </div>

    <div class="inner2">
      <div class="inner2-con por">
        <div class="inner21 fl poa"></div>
        <div class="inner23 fl poa">
          本周推荐
        </div>
        <div class="inner25 fl poa"></div>
      </div>
    </div>
    <div class="box3">
      <div class="inner3">
        <a class="inner3-left fl" href="https://www.gm4life.cn/yueshop/wap/shop/index?shop_id=48">
            <img src="../static/img/yfwzuoyi.png" alt="22">
        </a>
        <div class="inner3-right fr">
          <div class="inner3-right-top" >
            <a href="https://www.gm4life.cn/yueshop/wap/shop/index?shop_id=62">
              <img src="http://img.e-shequ.com/FieLHCXtJCS-zqtLv76_-mWPyxZZ" alt="22">
            </a>            
          </div>
          <div class="inner3-right-bottom" >
            <a href="https://www.gm4life.cn/yueshop/wap/shop/index?shop_id=50">
              <img src="http://img.e-shequ.com/FhtUwQrWIBOZrbgkrs5GW5-JBNZ-" alt="22">
            </a>            
          </div>
        </div>
      </div>
    </div>
    <div class="height"></div>


<div class="fixed bottom">
	<div class="distribution-tip" id="distribution-tip" style="display: none;"></div>
	<dl class="sub-nav nav-b5">
		<dd id="buttom_home">
			<a href="https://www.gm4life.cn/guangming/weixin/home/index.html?state=123#/">
				<div class="nav-b5-relative">
					<img src="../static/imgs/fuwu-check.png"/>
					<span>悦服务</span>
				</div>
			</a>
		</dd>
		<dd id="buttom_classify">
			<a href="https://www.gm4life.cn/yueshop/index.php?s=/wap">
				<div class="nav-b5-relative">
					<img src="../static/imgs/shangc.png"/>
					<span>悦商城</span>
				</div>
			</a>
		</dd>
    	<dd id="buttom_classify">
			<a href="http://wuye.gm4life.cn/wangdu/weixin/wuye/index.html?state=123#/">
				<div class="nav-b5-relative">
					<img src="../static/imgs/shequ.png"/>
					<span>悦社区</span>
				</div>
			</a>
		</dd>
    	<dd id="buttom_classify">
			<a href="https://www.gm4life.cn/yueshop/wap/member.html">
				<div class="nav-b5-relative">
					<img src="../static/imgs/yez.png"/>
					<span>用户中心</span>
				</div>
			</a>
		</dd>
	</dl> 
</div>
	
  </div>
</template>

<script>
let vm 
import wx from 'weixin-js-sdk';
import {swiper,swiperSlide} from 'vue-awesome-swiper';
import { MessageBox } from 'mint-ui';
import '../static/css/swiper.min.css'
export default {
  name: 'HelloWorld',
  data () {
    return {
      swiperOption:{
        notNextTick:true,
        autoplay:true,
        autoplay:{
          disableOnInteraction:false,
          delay:2000
        },
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
      },
    }
  },
  created(){
    vm = this;
  },
  mounted() {
     let n = "GET",
        a = "userInfo",
        i = null,
        e = function(n) {
          console.log(JSON.stringify(n));
        },
        r = function() {     
        };
      this.common.invokeApi(n, a, i, null, e, r);
      this.common.initWechat(['onMenuShareTimeline','onMenuShareAppMessage']);

        // let url1 = '/initSession4Test/105';
        // vm.receiveData.getData(vm,url1,'data1',function(){
          
        // })
       
  },
  methods: {
    add() {
            MessageBox('该功能暂未开放','尽请期待!');
        }
  },
  computed:{
    swiper(){
      return this.$refs.mySwiper.SWIPER
    }
  },
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fl{float: left;}
.fr{float: right;}
.por{position: relative;}
.poa{position: absolute;}
.height{width: 100%;height: 100px;background-color: white;}
/* #app{font-family: PingFangSC-Regular;
      background-color: white;font-size: 14px;} */
.ban1{width:100%;/*height:162px;*//*margin: auto;*/}
.ban1 img{width: 100%;/*height: 100%;margin:auto;*/}
.jiugongge{width: 100%;height: 160px;background-color: white;}
.jgg_li{float: left;width: 25%;height: 80px; text-align: center;letter-spacing: 0.98px;font-size: 12px;}
.jgg_li a{color: #000;}
.jgg_img{margin: 10px auto 10px;width: 26px;height: 26px;}
.jgg_img img{width:100%;height: 100%;}

.inner2{width: 100%;height:35px;margin-top: 5px;background-color: white;padding-top: 5px;}
.inner2-con{width: 202px;height: 100%;margin: 0 auto;}
.inner21{width: 45px;height: 2px;background-color: #9c9c9c;left: 10px;top: 14px;}
.inner23{width: 100px;height: 30px;text-align: center;line-height: 30px;color: #000;font-size: 15px;left: 51px;letter-spacing: 1.23px;font-weight: bold;}
.inner25{width: 45px;height: 2px;background-color: #9c9c9c;right: 10px;top: 14px;}
.box3{width: 100%;height: 201px;background-color: white;}
.inner3{width: 92%;height: 199px;margin: 0 auto;}
.inner3 img{width: 100%;/*height:199px; */height: 100%; margin: auto;border-radius: 8px;}
.inner3-left{width: 50%;height: 199px;border: 1px solid rgba(0,0,0,0.39);border-radius: 8px;}
.inner3-right{width: 44%;/*height:219px;*/}
.inner3-right-top{width: 100%;height: 93px; border: 1px solid #9c9c9c;border-radius: 8px;}
.inner3-right-bottom{width: 100%;height:93px;margin-top: 11px;border: 1px solid #9c9c9c;border-radius: 8px;}

/* .footer{width: 100%;height: 58px;background-color: #fff; position:fixed;bottom: 0px;box-shadow: 0 0 5px rgba(0,0,0,.2);}

.footer li{width: 25%;float: left;text-align: center;height: 100%;}
.footer a{color:#777;font-size: 10px;
  position: relative;height: 100%; */
    /* padding-top: 10px; */
    /* display: block;
    }
.footer span{letter-spacing: 0.1rem; font-family: Microsoft YaHei, Tohoma, Arial,   微软雅黑;}
.icon{width: 100%;height: 30px;position: relative;  margin-bottom: 5px;}
.icon-box{width: 30%;height: 23px;position: absolute;left: 35%;top:6px;}
.icon-box img{width:100%;height: 100%;margin:auto;} */

/* 新导航栏 */
.fixed {
    width: 100%;
    left: 0;
    position: fixed;
    top: auto;
    bottom: 0;
    z-index: 99;
     line-height: 1.5;
}
.sub-nav.nav-b5 {
    /* height: 48px; */
    overflow: hidden;
    margin: 0;
    padding: 0;
    background: #fff;
    border-top: 1px solid #ddd;
    /* box-shadow: 0 -3px 3px rgba(0, 0, 0, .1); */
    margin: 0;
}

.sub-nav.nav-b5 dd {
    margin: 0 0 0 0;
    text-align: center;
    border-right: 0px solid #ccc;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
     width: 25%;
    font-size: 14px;
     float: left;
    display: inline;
    font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei,Microsoft YaHei, Arial;
    font-weight: normal;
    color: #999999;
}

.sub-nav .nav-b5-relative {
    position: relative;
    padding: 2px 0;
}
.nav-b5-relative span {
    font-size: 13px;
}
.sub-nav a {
      text-decoration: none;
    color: #333;
    font-family: "微软雅黑", "Helvetica Neue", "Helvetica", Helvetica, Arial,
 sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: none;
}
.nav-b5-relative img {
    width: 28px;
    height: 28px;
    text-align: center;
    margin: 2px auto;
    display: block;
    border: 0 none;
    vertical-align: top;
}

</style>
