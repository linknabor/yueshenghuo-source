<template>
   <div class="city">
        <div>
            <div class="city-title"  @click="indexCity">
              <img class="title-img" src="../assets/img/Image 1.png" alt="">
              城市选择          
            </div>  
        </div>
        <!-- <div class="index-city">
           <div class="location">
              当前定位城市：
            </div>
               <div class="index-cityName" @click="indexCity">
                  <div class="fl cityIcon">
                    <img src="../assets/img/switch.png" alt="">
                  </div>
                  <div class="fl cityName-index">
                    <span>{{getCity}}</span>
                  </div>
                
              </div>
        </div> -->
        <div class="city-main">
            <div >
                <div class="location">
                    <img class="icon-tu" src="../assets/img/switch.png" alt="">
                    <span>定位城市：</span> <span>{{getCity}}</span>
                </div>
                
                <div class="search">
                    <input type="text" placeholder="请输入城市名" v-model="citySearch">
                </div>
            </div>
        </div>
        <!-- 构建城市 -->
            <div >
                <div>
                    <div v-show="showCityContent" class="tipShow" >查询不到结果</div>
                    <div v-for="item in showCity" class="letter-item" >
                        <div><a :id="item.letter">{{item.letter}}</a></div>
                        <div class="letter-city" v-for="i in item.citylist" @click="cityform(i)">{{i}} </div>
                    </div>
                </div>
                <div class="letter-aside">
                     <ul>
                        <li v-for="item in showCity" @click="naver(item.letter)">
                           {{item.letter}} 
                            </li>
                    </ul>
                </div>
            </div>
         <div id="tip">
             {{tipString}}
         </div>
    </div>
</template>

<script>
let vm;
import pinyin from '../../node_modules/pinyin/lib/web-pinyin.js';
  var cityLists = []
  var cityNames = []
  var cityNamesFilter = []
  var letter = []
//   var countPage = 0
  var tipLetter = ''
  var citySearch = ''
  var showCity = []
  var showCityList = []
  var showCityTemp
export default {
   data () {
       return {
            cityNames: cityNamesFilter,
            letter: letter,
            tipString: tipLetter,
            citySearch: citySearch,
            showCity: showCity,
            showCityContent:false,
            getCity:this.$route.query.getCity,

       };
   },
   created() {
      vm=this;
      vm.query();

   },
   mounted() {
        // window.scrollTo(0, 500)
   },
   components: {},
      watch:{
       citySearch:function(newCitySearch) {
            vm.cityFilter(newCitySearch)
       }
    },
   computed: {},
   methods: {
       query() {
        //    1获取全部省   2获取全部市   3获取全部区
        vm.cityNames = [];
        let url12 = '/region/2 ';
        vm.receiveData.getData(vm,url12,'res',function(){
            if(vm.res.success) {
                vm.cityList = vm.res.result
                // for (let i in cityList) {
                //     cityLists = cityList[i].citys
                //     for (let j in cityLists) {
                //     cityNames.push(cityLists[j].citysName)
                //     }
                // }

                for (let i in vm.cityList) {
                    vm.cityNames.push(vm.cityList[i].name)
                }
                cityNamesFilter = vm.cityNames;
                vm.cityFilter(vm.citySearch)
            }
            
        })
        // vm.cityList = [
        //     {
        //       id:1,
        //       name: '杭州市'
        //     },
        //     {
        //       id:2,
        //       name: '成都市'
        //     },
        //     {
        //       id:33,
        //       name:'上海市'
        //     },
        //     {
        //       id:3,
        //       name: '宝鸡市'
        //     },
        //     {
        //       id:4,
        //       name: '西安'
        //     },
        //     {
        //       id:1,
        //       name: '东杭州'
        //     },
        //     {
        //       id:2,
        //       name: '看成都'
        //     },
        //     {
        //       id:3,
        //       name: '阿宝鸡'
        //     },
        //     {
        //       id:4,
        //       name: '过西安'
        //     },
        //     {
        //       id:1,
        //       name: '人杭州'
        //     },
        //     {
        //       id:2,
        //       name: '他成都'
        //     },
        //     {
        //       id:3,
        //       name: '去宝鸡'
        //     },
        //     {
        //       id:4,
        //       name: '怕西安'
        //     },
        //     {
        //       id:1,
        //       name: '来杭州'
        //     },
        //     {
        //       id:2,
        //       name: '没成都'
        //     },
        //     {
        //       id:3,
        //       name: '你宝鸡'
        //     },
        //     {
        //       id:4,
        //       name: '不西安'
        //     }
        // ]
        // for (let i in vm.cityList) {
        //     vm.cityNames.push(vm.cityList[i].name)
        // }
        // cityNamesFilter = vm.cityNames
        // vm.cityFilter(vm.citySearch)
            // cityNamesFilter=["安庆","安阳","澳门","流量","萌萌","牛奶","偶偶","屁屁","天天","音乐","请求","爱人","大理","发达","格格","看看","叽叽","八方城","恩施","西溪北苑北区","西溪北苑西区","西溪北苑东区","万科城","恒大城","西溪科技园","未来科技城","智慧城","春天家园","茶张新苑","双水磨小区","小区1","小区2","小区3","小区4","小区5","小区6","小区7"]//城市
            // vm.cityFilter(vm.citySearch)
       },
       indexCity(){
        vm.$router.push({
          path:'/',
          query:{
            getCity:vm.getCity
          }
        })
       },
       buildLetter: function () {  // 构建字母项
         letter = []
        for (let i = 0; i < 26; i++) {
          let obj = {}
          obj.letter = String.fromCharCode((65 + i))
          obj.citylist = []
          letter.push(obj)
        }
      },
       getFirstLetter: function (str) { //  得到城市第一个字的首字母
        return pinyin(str,{
             style: pinyin.STYLE_NORMAL,
        })[0][0].charAt(0).toUpperCase()
      },
       buildItem(cityNamesFilter) {
        vm.buildLetter()
        let _this = this
        for (let i = 0; i < 26; i++) {
          letter[i].citylist = [];
        }
        for (let i = 0; i < cityNamesFilter.length; i++) {
          let _index = Number(_this.getFirstLetter(cityNamesFilter[i]).charCodeAt() - 65)
          if (_index >= 0 && _index < 26) {
            letter[_index].citylist.push(cityNamesFilter[i])
          }
        //    if(_index==191) {
        //         letter[0].citylist.push(cityNamesFilter[i])
        //     }
        //     if(_index==209) {
        //             letter[4].citylist.push(cityNamesFilter[i])
        //     }
        }
         // 如果letter中citylist中没有值的话，过滤这一项
        showCity = showCityTemp = letter.filter(function (value) {
          let len = value.citylist.length
          return len > 0
        })

//         console.log(Number((pinyin('格格')[0][0].charAt(0).toUpperCase()).charCodeAt()-65) )
//         console.log(pinyin('额')[0][0].charAt(0).toUpperCase().charCodeAt())
//         console.log(pinyin('额')[0][0].charAt(0).toUpperCase())
//         if(pinyin('恶')[0][0].charAt(0).toUpperCase()=== 'Ē') {
//             console.log(123)
//         }
//         console.log(pinyin("恶", {
//  heteronym: true, 
// //  segment: true
//  style: pinyin.STYLE_NORMAL,
// })[0][0].charAt(0).toUpperCase())
       },
        //点击右侧
       naver(id) {
        vm.tipString = id;
        let obj = document.getElementById(id);
        let tip = document.getElementById('tip');
        // tip.setAttribute('class', 'tipAppear')
        // setTimeout(function () {
        //   tip.removeAttribute('class')
        // }, 500)
        let oPos = obj.offsetTop
        return window.scrollTo(0, oPos - 20)
       },
    //点击城市
    cityform(chooseCity) {
        vm.$router.push({
          path:'/',
          query:{
            getCity:vm.getCity,
            chooseCity:chooseCity
          }
        })
    },
    // 搜索城市
    cityFilter(city) {
       let showCityListTemp
        vm.buildItem(cityNamesFilter)
        showCity = showCityTemp
        showCity = showCity.filter(function (value) {
          showCityList = value.citylist
          showCityListTemp = showCityList.filter(function (val) {
            return (val.indexOf(city) > -1)
          })
          value.citylist = showCityListTemp
          return value.citylist.length > 0
        })
        vm.showCity = showCity
        if (showCity.length === 0) {
            vm.showCityContent=true;
        } else {
            vm.showCityContent=false;
        }
    },
   }
 
  } 
</script>

<style  scoped>
.letter-item a {
display: block;
background-color:#f0f0f0;
height: 0.3rem;
color:#000;
line-height: 0.3rem;
text-align: left;
font-size:0.26rem;
padding:0 10px;
}
.letter-item .letter-city {
    height: 0.8rem;
    line-height: 0.8rem;
    font-size:0.26rem;
    border-bottom: 1px solid #ccc;
    padding:0 10px;
}
.letter-aside {
    position:fixed;
    top:2.22rem;;
    right: 5px;
}
/* .letter-aside  ul {
    list-style: none;
    height: 0.4em;
    line-height:0.4em;
    font-size: 14px;
    color: #37A3FE;;
} */
.letter-aside  li{
    font-size:14px;
    height: 0.4rem;
     color:#37A3FE;
    line-height:0.4rem;
    /* margin-bottom: 0.2rem; */
    text-align: center;

}
.city {
    background-color: #fff;
}
.city-title {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    border-bottom: 1px solid #ccc;
    letter-spacing: 1px;
    padding:0 10px;
    font-size:0.36rem;
    box-sizing: border-box;
}
.title-img {
    float: left;
    width: 0.3rem;
    margin-top: 6px;
}
.index-city{
  padding: 0 10px;
}

 .city-main {
     padding:0 10px;
 } 
 .location {
     height: 0.65rem;
     line-height: 0.65rem;
     font-size:0.35rem;
     margin-top: 0.15rem;
     margin-bottom: 0.15rem;
  }
  .index-cityName{
     height: 36px;
     width: 90px;
     background: #f0f0f0;
     line-height: 36px;
     font-size:16px;
     margin-top:5px;
     margin-bottom: 5px;
     border-radius: 5px;
     text-align: center;
     padding-left: 15px;
  }
  .cityIcon{
    width: 15px;
    height: 30px;
    margin-top: 3px;
  }
  .cityIcon img{
    width: 80%;
  }
  .cityName-index{
    /*width: 1rem;*/
    margin-left: 0;
    color: black;
  }
  
 .icon-tu {
  /*vertical-align: middle;*/
  margin-right: 5px;
  margin-top: 8px;
  width: 12px;
  height: 16px;
  /*height: 24px;*/

}
.search {
    height: 0.9rem;

}
.search input {
    width: 100%;
    border:1px solid #ccc;
    height: 0.6rem;;
    line-height: 0.6rem;;
    border-radius: 3px;
    background-color: #F5F5F5;
    outline: none;
    padding-left: 5px;
    font-size: 17px;
    letter-spacing: 1px;
    padding-left: 10px;
    /* color: #C9C9C9; */
    box-sizing: border-box;
    border-radius: 0.1rem;

}
.tipAppear {
    animation: appearTip 1 linear 0.5s;
}
@keyframes appearTip {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 0;
    }
}
  #tip {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 1px solid #333333;
    width: 100px;
    height: 100px;
    z-index: 10;
    text-align: center;
    line-height: 100px;
    font-size: 50px;
    opacity: 0;
  }
 .tipShow {
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    color: #bbbbbb;
  }
</style>