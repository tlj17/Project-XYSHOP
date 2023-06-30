<template>
  <div>
  <TypeNav></TypeNav>
  <ListContainer></ListContainer>
  <Recomend></Recomend>
  <Rank></Rank>
  <Like></Like>
  <Floor v-for="floor in floorList" :key="floor.id" :list="floor"></Floor>
  <Brand></Brand>
  </div>
</template>

<script>
  import ListContainer from '@/pages/Home/ListContainer/index.vue'
  import Recomend from '@/pages/Home/Recomend'
  import Rank from '@/pages/Home/Rank'
  import Like from '@/pages/Home/Like'
  import Floor from '@/pages/Home/Floor'
  import Brand from '@/pages/Home/Brand'

  import {mapState} from 'vuex'
export default {
  components:{
    ListContainer,
    Recomend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted(){
    this.$store.dispatch('getFloorList')
  },
  computed:{
    ...mapState({
      floorList:state=>state.home.floorList
    })
  }
}
</script>

<style>

</style>