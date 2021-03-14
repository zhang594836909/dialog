<template>
  <div class="dialog">
    <el-container>
      <el-header>{{headerContent}}</el-header>
      <el-main>
        <img v-show="wlShow" src="../assets/wuliao.jpg">
        <el-dialog
          title="申请"
          :visible.sync="dialogVisible"
          width="35%"
          :show-close="false"
          :close-on-click-modal=false
        >
          <span>我要工作！</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="innerVisible = true">不同意</el-button>
            <el-button type="primary"
              >同意</el-button
            >
          </span>
          <el-dialog
            title="申请"
            :visible.sync="innerVisible"
            width="30%"
            :show-close="false"
            :close-on-click-modal=false
            append-to-body
          >
            <span>不要啊！！我爱工作！再考虑考虑...</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="handleClose"
                >不，滚去休息！</el-button
              >
              <el-button>继续工作...</el-button>
            </span>
          </el-dialog>
        </el-dialog>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "dialogBox",
  data() {
    return {
      headerContent:"申请",
      wlShow:false,
      dialogVisible: true,
      innerVisible: false
    };
  },
  methods: {
    handleClose(done) {
      // this.$confirm("确认关闭？")
      //   .then((_) => {
      //     done();
      //   })
      //   .catch((_) => {});
      this.dialogVisible=false;
      this.innerVisible=false;
      this.headerContent = "哼，你以为我会感谢你吗？！";
      this.wlShow=true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 16px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
