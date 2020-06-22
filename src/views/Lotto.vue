<template>
  <div>
      <h1>로또번호 추천</h1>
      <button @click="randNumPick">랜덤번호생성</button>
      <div>{{ randNum }}</div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
    name: "Lotto",
    data() {
        return{
            randNum: [],
        }
    },
    methods: {
        randNumPick() {
            this.randNum = _.sampleSize(_.range(1, 46), 6)
        }
    }
}
</script>

<style>

</style>
