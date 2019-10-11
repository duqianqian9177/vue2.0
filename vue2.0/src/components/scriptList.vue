<template>
  <div>
    <!-- {{
      info
    }} -->
         <!--入口-->
    <div class="swipper-each-enter">
      <div class="swiper-container swiper-container-enter">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul>
             
            </ul>
          </div>

      </div>
      <div class="swiper-pagination"></div>
    </div>
     </div>
  </div>
</template>

<script>
// import axios from 'axios'
import Url from '../../public/scriptList.json'
export default {
  data(){
    return {
     dataList : Url
    }

  },
  components:{

  },
  mounted () {
    console.info(this.$data.dataList);
    // this.getList()

  },
  methods: {
    getList() {
        this.$ajax.get("api/list")
        .then( res => {
         alert(JSON.stringify(res))
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

