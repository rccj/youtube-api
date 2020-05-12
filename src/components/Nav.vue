<template>
  <div class="body">
    <div class="box">
      <router-link :to="{name: 'page'}">
        <div class="item">Home</div>
      </router-link>
      <router-link :to="{name: 'collect'}">
        <div class="item">Collection</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "page",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.body {
  height: 80px;
  width: 100%;
  background-color: #f4a261;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 50%;
    display: flex;
    justify-content: space-around;
    .item {
      font-size: 1.8em;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 1200px) {
    .box {
      width: 70%;
    }
  }
  @media screen and (max-width: 768px) {
    .box {
      width: 80%;
    }
  }
  @media screen and (max-width: 480px) {
    .box {
      width: 90%;
    }
  }
}
</style>
