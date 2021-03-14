<template>
  <div id="music">
      <audio :src="musicData[currentSongIndex].src" autoplay controls></audio>
      <ul>
          <myLi v-for="(item,index) in musicData" :key="index" @switchSongs="switchSongs(index)" :class="{'active':currentSongIndex===index}">{{index+1+ "." +item.name }}</myLi>
      </ul>
      <!-- <div @click="switchSongs">点击</div> -->
  </div>
</template>

<script>
var myLi = {
    'template':`<li @click="switchSongs">   <!--可省略methods，直接写为@click="$emit('switchSongs')"-->
                    <slot>音乐列表</slot>
                </li>`,
    methods:{
        switchSongs:function(index){
            this.$emit("switchSongs");
        }
    }
};
export default {
    components:{ myLi },
    data(){
        return{
            musicData:[
                {"src":"https://webfs.yun.kugou.com/202103130756/e4dccdafb490c3784fe2c1d2986ccf33/G202/M04/07/0F/qpQEAF5YuuaATknaAEaEaiyxDlM890.mp3","name":"痴心绝对"},
                {"src":"https://webfs.yun.kugou.com/202103130750/ca430173dcb1e5eb1901a8ef39182d81/G243/M0A/1B/09/05QEAF9YzM6AMMjeADWr8UFYE7s359.mp3","name":"手放开"}
            ],
            currentSongIndex:0
        }
    },
    methods:{
        switchSongs:function(index){
            // console.log(index);
            this.currentSongIndex = index;
        }
    }
}
</script>

<style>
    #music{
        width: 310px;
        text-align:left;
        padding:20px 15px;
    }
    audio{
        display:block !important;
    }
    ul,li{
        list-style: none;
    }
    li.active{
        background:green;
    }
</style>