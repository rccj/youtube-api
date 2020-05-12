<template>
  <div class="body">
    <h1>COLLECTION</h1>
    <ul class="itemList">
      <li class="item" v-for="item in collect">
        <router-link class="item__img" :to="{name:'play-video',params:{vidoe_id: item.id}}">
          <div
            class="thumbnails"
            :style="{backgroundImage:`url('${item.snippet.thumbnails.standard.url}')`}"
          >
            <label class="duration">{{durationTime(item.contentDetails.duration)}}</label>
          </div>
        </router-link>
        <div class="item__text">
          <div class="item__text__title">{{item.snippet.title}}</div>
          <div class="item__text__description">{{item.snippet.description}}</div>
          <div class="item__text__btnTime">
            <button @click="addCollect(item)">
              <div v-if="itemInCollect(item)">Cancel</div>
            </button>
            <div>{{upDateTime(item.snippet.publishedAt)}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "page",
  computed: {
    ...mapState(["collect"]),
    ...mapGetters(["itemInCollect"])
  },
  methods: {
    ...mapMutations(["addCollect", "setCollect"]),
    durationTime(duration) {
      return moment
        .duration(duration)
        .format("h:mm:ss")
        .padStart(4, "0:0");
    },
    upDateTime(time) {
      return time.substring(0, 10);
    }
  },
  created() {
    this.setCollect();
  }
};
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 50px 0;
  h1 {
    font-size: 1.5em;
    font: 500;
  }
  .itemList {
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .item {
      max-width: 30%;
      height: 350px;
      margin: 20px 0;

      &__img {
        .thumbnails:hover {
          background-position: 10% 10%;
          transition: all 10s;
        }
        .thumbnails {
          width: 100%;
          height: 200px;
          background: {
            size: cover;
            position: center;
          }
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          transition: all 1s;

          .duration {
            font-weight: 500;
            background-color: black;
            color: white;
            padding: 1px 2px;
            margin-bottom: 9px;
          }
        }
      }
      &__text {
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px 0;
        box-sizing: border-box;
        &__description {
          width: 100%;
          height: 50px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        &__title {
          font-size: 1.2em;
          font-weight: 600;
          text-align: left;
        }
        &__btnTime {
          display: flex;
          justify-content: space-around;
          button {
            background-color: unset;
            padding: 3px;
            outline: none;
            & > * {
              font-weight: 500;
            }
          }
          button:hover {
            background-color: #007bff;
            & > * {
              color: white;
            }
          }
        }
      }
    }
  }
  .btns {
    display: flex;

    & > * {
      width: 30px;
    }
  }
  @media screen and (max-width: 1200px) {
    .itemList {
      .item {
        max-width: 30%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .itemList {
      .item {
        max-width: 45%;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .itemList {
      .item {
        max-width: 90%;
      }
    }
  }
}
</style>
