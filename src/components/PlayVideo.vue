<template>
  <div class="body">
    <iframe
      class="video"
      :src="url"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="text">
      <div class="text__title">{{title}}</div>
      <div class="text__description">{{description}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      url: "",
      video_id: "",
      title: "",
      description: ""
    };
  },
  computed: {},
  methods: {},
  //to.params.vidoe_id
  beforeRouteEnter(to, from, next) {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${to.params.vidoe_id}&key=AIzaSyDmtNXoq6GT-eLH09bJD5Tu69f0dsKsF3U`
      )
      .then(res => {
        next(vm => {
          vm.url = `https://www.youtube.com/embed/${to.params.vidoe_id}`;
          vm.video_id = to.params.vidoe_id;
          vm.title = res.data.items[0].snippet.title;
          vm.description = res.data.items[0].snippet.description;
          console.log(res.data.items[0].snippet);
        });
      });
  }
};
</script>

<style lang="scss" scope>
.body {
  display: flex;
  align-items: center;
  width: 100%;
  .video {
    width: 800px;
    height: 500px;
    margin-top: 50px;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
      font-size: 1.5em;
      font-weight: 600;
      margin-bottom: 30px;
    }
    &__description {
      width: 50%;
    }
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 768px) {
    .video {
      width: 100%;
      height: 300px;
    }
  }
  @media screen and (max-width: 480px) {
  }
}
</style>