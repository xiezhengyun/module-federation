<template>
  <div class="myApp">text</div>
</template>

<script>
import { debounce, throttle } from 'throttle-debounce'
export default {
  name:'myApp',
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  beforeDestroy(){},
  created(){
    console.log('wewewew')
    debounce(50, () => {console.log(1)})
  },
  mounted(){},
  methods:{},
}
</script>
<style lang="less" scoped>
.myApp{}
</style>