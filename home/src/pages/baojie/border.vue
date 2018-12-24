<template>
   <div class="orders">
        <div class="avatar-wrap rel ov" v-show="bills.length == 0">
        	<div class="filter-img avatar-wrap center-bg">
                <img src="../../assets/img/bg_orders.jpg" alt="">
            </div>
    	</div>

        <!-- v-for="(bill,index) in bills" :key="bill.id" -->
        <div  v-for="(bill,index) in bills" :key="bill.id"  @click="gotoDetail(index)">
            <div class="background_picture"></div>
            <div class="order_num">
                <span class="span1">订单编号：{{bill.orderNo}}</span>
                <span class="span2">{{bill.statusStr}}</span>
            </div>
             <div class="product">
                <img :src="bill.billLogo" class="icon1"/>
                <p class="item">项目：{{bill.typeName}}</p>
                <p class="time_long">时长：{{bill.itemCount}}小时</p>
                <p class="time">预约时间：{{bill.requireDateStr}}</p>
            </div>
             <div class="order_time">
                <span class="span3">下单时间：{{bill.createDateStr}}</span>
                <span class="span4 yellow_btn" v-show="bill.status==1" @click="gotoPay(index,$event)">支付</span>
                <span class="span4 mr10" v-show="bill.status==1" @click="cancel(index,$event)">取消</span>
                <a href="tel:021-50876295">
                    <span class="span4" v-show="bill.status==2" @click="contact($event)">联系客服</span>
                </a>
			</div>
        </div>
   </div>
</template>

<script>
let vm;
import wx from 'weixin-js-sdk';
export default {
   data () {
       return {
            bills:[
                {
                billLogo:"http://img.e-shequ.com/FndH5ftmymD3IxRRnF5OXml__lwg",
                createDateStr:"2018-11-08 11:26",
                id:14,
                itemCount:"2.0",
                orderNo:"201811081126O73027",
                projectName:"日常保洁",
                requireDateStr:"2018-11-08 13:00",
                status:1 ,
                statusStr:"待支付",
                typeName:"日常保洁"
            }
            ],
            page:0,

       };
   },
   created() {
       vm=this;
   },
   mounted() {
    //    let url = location.href.split('#')[0]
	//    vm.receiveData.wxconfig(vm,wx,['chooseWXPay'],url);
       vm.query()
   },

   components: {},

   methods: {
       query() {
           let url="/baojie/query/"+vm.page;
            vm.receiveData.getData(vm,url,'res',function(){
                // vm.bills=vm.res.result;
                vm.page++;
            })
       },
       gotoDetail(index) {
          var bill=vm.bills[index];
          
       },
       //支付
       gotoPay(index,event){
           vm.requestPay(index);
            event.stopPropagation()
       },
       requestPay(index) {
            let url="/baojie/pay/"+vm.bills[index].id
            vm.receiveData.postData( vm, url,{},'res', function(){
                 wx.chooseWXPay({
                    "timestamp":vm.res.result.timestamp,
                    "nonceStr":vm.res.result.nonceStr,
                    "package":vm.res.result.pkgStr,
                    "signType":vm.res.result.signType,
                    "paySign":vm.res.result.signature,
                     success: function (res) {
                         vm.notifyPayed(index)
                        // common.invokeApi("GET", "baojie/notifyPayed/"+o.bills[idx].id);
                        alert("支付成功！");
                        vm.bills[index].statusStr="已支付";
                        o.bills[index].status=2;
                    }
                });
                if(!vm.res.success) {
                     alert(vm.res.message==null?"支付请求失败，请稍后重试！":vm.res.message);
                }        
            })
       },
       notifyPayed(index) {
         let url="baojie/notifyPayed/"+vm.bills[index].id;
         vm.receiveData.getData(vm,url,'res',function(){
           
         })
       },
       //取消
       cancel(index,event) {
           let url="/baojie/cancel/"+vm.bills[index].id
            vm.receiveData.postData( vm, url,{},'res', function(){
              if(vm.res.success) {
                vm.bills[index].statusStr="已取消";
                vm.bills[index].status=8;
              }else
                {
                    alert(vm.res.message?"订单取消失败，请稍后重试！":vm.res.message);
                }
            })
            event.stopPropagation();

       },       //联系客服
        contact(event){
            localtion.href="tel:021-50876295";
            event.stopPropagation();
        }   
        },

   computed: {},
}
</script>

<style  scoped>
.orders {
    margin: 0;
    background-color: #f4f5f6;
}
.rel {
    position: relative;
}
.ov {
    overflow: hidden;
    padding: 1px;
}
.avatar-wrap {
    height: 42rem;
    text-align: center;
}
img {
    width:100%;
    height: auto;
}
.background_picture{
    background:url('../../assets/img/icon_line_06.png') repeat-x;
    height:2px;
    background-size: 100%;
}
.order_num{
    padding: 14px 15px 15px 15px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #f3f5f7;
}
.span1{
    font-family: "微软雅黑";
    font-size: 15px;
    color: #AAAAAA;
}
.span2{
    float: right;
    font-family: "微软雅黑";
    font-size: 15px;
    color: #FF8A00;
}
.product{
    padding: 14px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #f3f5f7;
}
.icon1{
    float: left;
    width: 86px;
    height: 86px;
    margin-right: 14px;
}
.item,.time_long{
    font-family: "微软雅黑";
    font-size: 14px;
    color: #000000;
    margin-top:0 ;
    margin-bottom: 14px;
}
.time{
    font-family: "微软雅黑";
    font-size: 14px;
    color: #000000;
    margin-bottom: 0;
    margin-top: 0;
}
.order_time{
    padding: 14px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
}
.span3{
    font-family: "微软雅黑";
    font-size: 15px;
    color: #AAAAAA;
}
.span4{
    border: 1px solid #AAAAAA;
    border-radius: 3px;
    display: inline-block;
    font-family: "微软雅黑";
    font-size: 13px;
    color: #AAAAAA;
    height: 15px;
    line-height: 15px;
    text-align: center;
    float: right;
    margin-top: -2px;
    padding: 4px 15px;
}
.yellow_btn{
    background: #FF8A00;
    color:white;
    border:none;
}
.mr10{
    margin-right:10px
}
</style>