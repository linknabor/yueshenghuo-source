<template>
  <div id="app">
    <!-- <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <div class="ban1">
          <a href="https://wx.tuhu.cn/PromotionActivity/Coupon/a31f5a97-45b1-482e-8bed-8fbb352f0978.html">
            <img src="../assets/img/72a93a79-564b-4e6c-8097-f1f59b410b38.jpg" alt="">
          </a>                    
        </div>
      </swiper-slide>
       <swiper-slide>
        <div class="ban1">
          <a href="#">
            <img src="http://img.gm4life.cn/%E5%85%89%E6%98%8E%E6%82%A6%E7%94%9F%E6%B4%BB.jpg" alt="">
          </a>                    
        </div> 
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>    
    </swiper> -->

    <swiper :options="swiperOption" ref="mySwiper" v-if="banners1.length>0">
      <swiper-slide  v-for="banner in banners1" :key="banner.id" >
        <div class="ban1">
          <a :href="banner.bannerUrl">
            <img :src="banner.picture" alt="">
          </a>                    
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>    
    </swiper>
    <div  style="background-color:#eee;overflow:hidden">
          <dir class="city">
            <img class="fl icon-tu" src="../assets/img/switch.png" alt="">
            <span class="fl title1">当前城市:</span>
            <span class="fl">{{name}}</span>
            <span class="fr" @click="switchs()">[切换]</span>
          </dir>
    </div>
    <div class="jiugongge">
      <ul>
         <!-- <li class="jgg_li">
              <a href="https://w.url.cn/s/AtroAQY">
                <div class="jgg_img">
                  <img src="../static/img/Dlogo.png" alt="">
                </div>
                <span>光明随心订</span>
              </a>
            </li>

            <li class="jgg_li" >
              <a href="http://www.gm4life.cn/yueshop/wap/shop/index?shop_id=34">
                <div class="jgg_img">
                  <img src="../static/img/jdqx.png" alt="">
                </div>
                <span>家电清洗</span>
              </a>
            </li>

            <li class="jgg_li"  >
              <a href="https://sugs.suning.com/zaVEJl3O">
                <div class="jgg_img">
                  <img src="../static/img/jdwx.png" alt="">
                </div>
                <span>家电维修</span>
              </a>
            </li> 

            <li class="jgg_li" >
              <a href="https://sugs.suning.com/zaW84LHE ">
                <div class="jgg_img">
                  <img src="../static/img/jzbj.png" alt="">
                </div>
                <span>家政保洁</span>
              </a>
            </li> 
            
             <li class="jgg_li">
              <a href="https://sugs.suning.com/zaXfO9Rt">
                <div class="jgg_img">
                  <img src="../static/img/snqx.png" alt="">
                </div>
                <span>空气治理</span>
              </a>
            </li>
            <li class="jgg_li">
              <a href="https://wx.tuhu.cn">
                <div class="jgg_img">
                  <img src="../assets/img/20.png" alt="">
                </div>
                <span>途虎养车</span>
              </a>
            </li> 
            <li class="jgg_li">
              <a href="http://bx-hz.familyaid.com.cn/htmlserver/index.html#/onlineDiagnose/index?id=gm">
                <div class="jgg_img">
                  <img src="../static/img/xinxin.png" alt="">
                </div>
                <span>健康咨询</span>
              </a>
            </li>
          
            <li class="jgg_li"  @click="add()">
              <a href="#">
                <div class="jgg_img">
                  <img src="../static/img/zfw.png" alt="">
                </div>
                <span>其他服务</span>
              </a>
         </li> -->
        <li class="jgg_li" v-for="item in banners2" :key="item.id"  @click="adds(item.id)">
          <a :href="item.bannerUrl">
            <div class="jgg_img">
              <img :src="item.picture" alt="tt">
            </div>
            <span>{{item.brandName}}</span>
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
       <!-- <div class="inner3">
        <a class="inner3-left fl" href="https://sugs.suning.com/zaW84LHE">
            <img src="../static/img/yfwzuoyi.png" alt="">
        </a>
        <div class="inner3-right fr">
          <div class="inner3-right-top">
            <a href="http://www.gm4life.cn/yueshop/wap/shop/index?shop_id=34">
              <img src="../static/img/yfwyouyi.png" alt="">
            </a>            
          </div>
          <div class="inner3-right-top inner3rightmargint" @click="add()">
              <img src="../static/img/yfwyouer.png" alt="">
          </div>
        </div>
      </div>  -->
      <div class="inner3">
        <a class="inner3-left fl" :href="img1.bannerUrl">
            <img :src="img1.picture" alt="">
        </a>
        <div class="inner3-right fr">
          <div class="inner3-right-top" @click="add()">
            <a :href="img2.bannerUrl">
              <img :src="img2.picture" alt="">
            </a>            
          </div>
          <div class="inner3-right-top inner3rightmargint" @click="add()">
            <a :href="img3.bannerUrl">
              <img :src="img3.picture" alt="">
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
			<a href="http://www.gm4life.cn/guangming/weixin/home/index.html?state=123#/">
				<div class="nav-b5-relative">
					<img src="../static/imgs/fuwu-check.png"/>
					<span>悦服务</span>
				</div>
			</a>
		</dd>
		<dd id="buttom_classify">
			<a href="http://www.gm4life.cn/yueshop/index.php?s=/wap">
				<div class="nav-b5-relative">
					<img src="../static/imgs/shangc.png"/>
					<span>悦商城</span>
				</div>
			</a>
		</dd>
    <dd id="buttom_classify">
			<a href="http://www.gm4life.cn/wangdu/weixin/wuye/index.html?state=123#/">
				<div class="nav-b5-relative">
					<img src="../static/imgs/shequ.png"/>
					<span>悦社区</span>
				</div>
			</a>
		</dd>
    <dd id="buttom_classify">
			<a href="http://www.gm4life.cn/yueshop/wap/member.html">
				<div class="nav-b5-relative">
					<img src="../static/imgs/yez.png"/>
					<span>用户中心</span>
				</div>
			</a>
		</dd>
	</dl> 
</div>
  <div class="notice" v-show="list">
    <div class="notice_text" >
      <div>
        <span>当前城市为</span>
        <span style="color:blue">{{chooseCity}}</span>
        <span>是否切换到您所在城市</span>
      </div>
       <div style="margin: 20px auto 0 ;">
         <span @click="consent()" class="btns">是</span><span @click="disagree()" class="btns" style="margin:0;background-color:#999999">否</span>

       </div>
    </div>
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
      name:'杭州市',
      getCity:this.$route.query.getCity,
      chooseCity: this.$route.query.chooseCity,
      banners1:[],
      banners2:[],
      banners3:[],
      img1:{},
      img2:{},
      img3:{},
      latitude:'',//维度
      longitude:'',//经度
      bannerType:'',
      list:false,
      
    }
  },
  created(){
    vm = this;
   
  },
  computed:{
    swiper(){
      return this.$refs.mySwiper.SWIPER
    }
  },
  mounted() {  
        let url2 = location.href.split('#')[0];
        vm.receiveData.wxconfig(vm,wx,['getLocation'],url2);
        vm.username();  
        // vm.initSession4Test(); 

  },
  methods: {
    initSession4Test(){
        let url = 'initSession4Test/105';
        vm.receiveData.getData(vm,url,'data1',function(){
          if(vm.getCity&&!vm.chooseCity){
             vm.name = vm.getCity;
             console.log(vm.name)
          }else if(vm.getCity&&vm.chooseCity){
             if(vm.chooseCity!=vm.getCity){
                vm.name = vm.chooseCity;
                console.log(vm.name)
                vm.list = true;
             }else{
                vm.name = vm.chooseCity;
             }
          }
          vm.infolist1();
          vm.infolist2()
        })
    },
    username() {
        // if(vm.getCity&&!vm.chooseCity){
        //    vm.name = vm.getCity;
        //    console.log(vm.name)
        // }else if(vm.getCity&&vm.chooseCity){
        //    if(vm.chooseCity!=vm.getCity){
        //       vm.name = vm.chooseCity;
        //       console.log(vm.name)
        //       vm.list = true;
        //    }else{
        //       vm.name = vm.chooseCity;
        //    }
        // }
        // vm.infolist1();
        // vm.infolist2();

        let n = "GET",
        a = "userInfo",
        i = null,
        e = function(n) {
          console.log(JSON.stringify(n));
          if(vm.getCity&&!vm.chooseCity){
             vm.name = vm.getCity;
             console.log(vm.name)
          }else if(vm.getCity&&vm.chooseCity){
             if(vm.chooseCity!=vm.getCity){
                vm.name = vm.chooseCity;
                console.log(vm.name)
                vm.list = true;
             }else{
                vm.name = vm.chooseCity;
             }
          }
          vm.infolist1();
          vm.infolist2();
         
        },
        r = function() {     
        };
        vm.common.invokeApi(n, a, i, null, e, r);
    },
    getName(longitude,latitude){
        let obj = {
          coordinate: longitude+','+latitude
        }
        console.log(5)
        vm.receiveData.postData(vm,'/addres/getName',obj,'res',function(){
          console.log(6)
          if(vm.res.success) {
            console.log(7)
            vm.name = vm.res.result;
          }else {
            console.log(8)
            if(vm.res.message!=''){
              console.log(9)
              alert(vm.res.message)
            }
          }
        })
    },
    //轮播
    infolist1() {
      console.log(vm.name);
      console.log(vm.chooseCity);
      console.log(vm.getCity);
          vm.receiveData.getData(vm,'/bannername/15/'+vm.name,'res',function(){
            console.log(10)
            if(vm.res.success) {
              console.log(11)
                vm.banners1=vm.res.result;
            }else {
              console.log(12)
              alert("获取数据失败")            
            }
          })


    },
    //导航
     infolist2() {
          vm.banners2 = [];
          vm.banners3 = [];
          vm.receiveData.getData(vm,'/bannername/16/'+vm.name,'res',function(){
          if(vm.res.success) {
            console.log(13)
            for(var i=0;i<vm.res.result.length;i++) {
              if(i<8) {
                vm.banners2.push(vm.res.result[i])
              }else {
                vm.banners3.push(vm.res.result[i])
              }
            }
            vm.img1=vm.banners3[0];
            vm.img2=vm.banners3[1];
            vm.img3=vm.banners3[2];
          }else {
              alert("获取数据失败")  
          }
          })
   
    },
    query(){
      console.log(111);
      wx.ready(function () {
        console.log(222)
        wx.checkJsApi({
            jsApiList: [
                'getLocation'
            ],
        success: function (res) {
          console.log(333)
            // alert(JSON.stringify(res));
            // alert(JSON.stringify(res.checkResult.getLocation));
            if (res.checkResult.getLocation == false) {
                alert('你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！');
                return;
            }
           }
          });
        console.log(444)
       wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          console.log(555)
          // console.log(JSON.stringify(res));
         let latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
         let longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        //  alert(latitude+'/'+longitude+'/'+speed+'/'+accuracy);
          console.log("经度是:"+longitude);
          console.log("纬度是:"+latitude);
          vm.ban1(longitude,latitude);
          vm.ban2(longitude,latitude);
          vm.getName(longitude,latitude);
        },  
        cancel: function (res) {
            console.log('用户取消')
        }
       });
        wx.error(function(res){
            alert("获取位置失败")
        });

      })
    },

    ban1(longitude,latitude) {
      let obj = {
          coordinate: longitude+','+latitude
      }
        vm.receiveData.postData(vm,'/banner/15',obj,'res',function(){
          if(vm.res.success) {
            vm.banners1=vm.res.result;
          }else {
            alert("获取数据失败")
          }
        })
    },
    ban2(longitude,latitude) {
      vm.banners2 = [];
      vm.banners3 = [];
      let obj = {
          coordinate: longitude+','+latitude
      }
        vm.receiveData.postData(vm,'/banner/16',obj,'res',function(){
          if(vm.res.success) {
            for(var i=0;i<vm.res.result.length;i++) {
              if(i<8) {
                vm.banners2.push(vm.res.result[i])
              }else {
                vm.banners3.push(vm.res.result[i])
              }
            }
            vm.img1=vm.banners3[0];
            vm.img2=vm.banners3[1];
            vm.img3=vm.banners3[2];
          }else {
            alert("获取数据失败")
          }
        })
    },
    add() {
        MessageBox('该功能暂未开放','尽请期待!');
    },
    adds(id) {
        if(id=='7') {
           MessageBox('该功能暂未开放','尽请期待!');
        }
           
    },        
    // 切换
    switchs() {
      vm.$router.push({
        path:'/city',
        query:{
          getCity:vm.name
        }
      })
    },
    // 是
    consent() {
      console.log(666)
      vm.list = false;
      vm.query();//获取坐标
    },
    // 否
    disagree() {
      vm.list=false;
    } 
  },
  
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.city {
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    margin: 10px 0;
    padding: 0 15px;
    font-size:18px;
    font-family: '微软雅黑';
    letter-spacing: 1px;
}
.title1 {
  margin-right:10px;
}
.icon-tu {
  margin-top: 10px;    
  /* vertical-align: middle; */
  margin-right: 5px;
  width: 15px;
}
.notice{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 1;
}
.notice_text {
    text-align: center;
    margin-top: 50%;
    background-color: #fff;
    width: 60%;
    /* height: 100px; */
    margin-left: 20%;
    border-radius: 6px ;
    font-family: "微软雅黑";
    font-size: 18px;
    padding:30px;
    margin: auto;
    margin-top: 50%;
    line-height: 30px;
    letter-spacing: 2px;
}
.btns {
    padding: 2px 30px;
    color: #fff;
    background-color: #008AFF;
    margin-right: 30px;
}

.fl{float: left;}
.fr{float: right;}
.por{position: relative;}
.poa{position: absolute;}
.height{width: 100%;height: 100px;background-color: white;}
/* #app{font-family: PingFangSC-Regular;
      background-color: white;font-size: 14px;} */
.ban1{width:100%;height:162px;/*height:162px;*//*margin: auto;*/}
.ban1 img{width: 100%;/*height: 100%;margin:auto;*/}
.jiugongge{width: 100%;height: 160px;background-color: white;}
.jgg_li{float: left;width: 25%;height: 80px; text-align: center;letter-spacing: 0.98px;font-size: 12px;}
.jgg_li a{color: #000;}
.jgg_img{margin: 15px auto 5px;width: 26px;height: 26px;}
.jgg_img img{width:100%;height: 100%;}

.inner2{width: 100%;height:35px;margin-top: 5px;background-color: white;padding-top: 5px;}
.inner2-con{width: 202px;height: 100%;margin: 0 auto;}
.inner21{width: 45px;height: 2px;background-color: #9c9c9c;left: 10px;top: 14px;}
.inner23{width: 100px;height: 30px;text-align: center;line-height: 30px;color: #000;font-size: 15px;left: 51px;letter-spacing: 1.23px;font-weight: bold;}
.inner25{width: 45px;height: 2px;background-color: #9c9c9c;right: 10px;top: 14px;}
.box3{width: 100%;height: 201px;background-color: white;}
.inner3{width: 92%;height: 199px;margin: 0 auto;}
.inner3 img{width: 100%;/*height:199px; */height: 100%; margin: auto;}
.inner3-left{width: 50%;height: 199px;border: 1px solid rgba(0,0,0,0.39);border-radius: 8px; float: left;}
.inner3-right{width: 44%;/*height:219px;*/ float:right}
.inner3-right-top{width: 100%;height: 93px; border: 1px solid #9c9c9c;border-radius: 8px;}
.inner3-right-bottom{width: 100%;height:93px;border: 1px solid #9c9c9c;border-radius: 8px;}
.inner3rightmargint {
  margin-top: 11px;
}
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
