<template>
  <div>
   <div class="nav-final" v-if=" userName=='nav' ">
        <i class="usedfont used-zuojiantou"></i>
        <p>首页</p>
        <i class="head-portrait">
          <a href="//m.che168.com/user/index.html" >
            <img src="https://x.autoimg.cn/2scimg/m/20190220/head-portrait-gray.png" alt="">
           </a>
       </i>
    </div> 

     <div class="header filter-wrap"  v-else-if=" userName=='header' ">
       <div class="filter">
              <div class="head-left-box">
                  城市
                  <span class="head-city">
                      <em class="city-text" data-role="aside"><i class="usedfont used-local"></i>北京</em>
                  </span>
                  搜索
                  <span class="search-box" data-role="search"><i class="usedfont used-sousuo"></i><ins id="sloganText">搜一搜“818购车盛典”</ins></span>
              </div>
              头像
              <i class="head-portrait">
                  <a href="//m.che168.com/user/index.html" >
                    <img src="https://x.autoimg.cn/2scimg/m/20190220/head-portrait-gray.png" alt="">
                 </a>
              </i>
          <i class="head-portrait">
            <a href="//m.che168.com/user/index.html"></a>
          </i>
      </div>
      <!-- {{ userName}} -->
   </div> 
   </div> 
</template>
<script>
export default{
  data(){
    return {

    }
  },
   props:['userName'],
  
}
</script>

