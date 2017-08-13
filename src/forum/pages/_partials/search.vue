<template>
  <el-input
    class="fl"
    placeholder="请选择日期"
    icon="search"
    v-model="input2"
    :on-icon-click="handleIconClick">
  </el-input>
</template>

<script>
  export default {
    name: 'globalSearch',
    data() {
      return {
        input2: ''
      };
    },
    methods: {
      handleIconClick(ev) {
        console.log(ev);
      }
    }
  };
</script>

<style scoped lang="stylus">
  .el-input {
    width: 200px;
  }
</style>