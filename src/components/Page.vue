<template>
  <div class="body">
    <h1>MOST POPULAR</h1>
    <ul class="itemList">
      <li class="item" v-for="item in pageData">
        <router-link class="item__img" :to="{name:'play-video',params:{vidoe_id: item.id}}">
          <div
            class="thumbnails"
            :style="{backgroundImage:`url('${item.snippet.thumbnails.standard.url}')`}"
          >
            <div class="duration">{{durationTime(item.contentDetails.duration)}}</div>
          </div>
        </router-link>
        <div class="item__text">
          <div class="item__text__title">{{item.snippet.title}}</div>
          <div class="item__text__description">{{item.snippet.description}}</div>
          <div class="item__text__btnTime">
            <button @click="addCollect(item)">
              <div v-if="!itemInCollect(item)">Collect</div>
              <div v-if="itemInCollect(item)">Collected</div>
            </button>
            <div>{{upDateTime(item.snippet.publishedAt)}}</div>
          </div>
        </div>
      </li>
    </ul>
    <!-- <div class="btns" ><button v-for="(item,index) in perPage" @click="getPage(perPage[index])">{{index+1}}</button></div> -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPageB"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "page",
  data() {
    return {
      rows: 200,
      perPageB: 12,
      currentPage: 1,
      pageURL:
        "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=12&pageToken=",
      apiKey: "&key=AIzaSyDmtNXoq6GT-eLH09bJD5Tu69f0dsKsF3U",
      pageItem: [
        "CAAQAA","CAEQAA","CAIQAA","CAMQAA","CAQQAA","CAUQAA","CAYQAA","CAcQAA","CAgQAA","CAkQAA","CAoQAA","CAsQAA","CAwQAA","CA0QAA","CA4QAA","CA8QAA","CBAQAA","CBEQAA","CBIQAA","CBMQAA","CBQQAA","CBUQAA","CBYQAA","CBcQAA","CBgQAA","CBkQAA","CBoQAA","CBsQAA","CBwQAA","CB0QAA","CB4QAA","CB8QAA","CCAQAA","CCEQAA","CCIQAA","CCMQAA","CCQQAA","CCUQAA","CCYQAA","CCcQAA","CCgQAA","CCkQAA","CCoQAA","CCsQAA","CCwQAA","CC0QAA","CC4QAA","CC8QAA","CDAQAA","CDEQAA","CDIQAA","CDMQAA","CDQQAA","CDUQAA","CDYQAA","CDcQAA","CDgQAA","CDkQAA","CDoQAA","CDsQAA","CDwQAA","CD0QAA","CD4QAA","CD8QAA","CEAQAA","CEEQAA","CEIQAA","CEMQAA","CEQQAA","CEUQAA","CEYQAA","CEcQAA","CEgQAA","CEkQAA","CEoQAA","CEsQAA","CEwQAA","CE0QAA","CE4QAA","CE8QAA","CFAQAA","CFEQAA","CFIQAA","CFMQAA","CFQQAA","CFUQAA","CFYQAA","CFcQAA","CFgQAA","CFkQAA","CFoQAA","CFsQAA","CFwQAA","CF0QAA","CF4QAA","CF8QAA","CGAQAA","CGEQAA","CGIQAA","CGMQAA","CGQQAA","CGUQAA","CGYQAA","CGcQAA","CGgQAA","CGkQAA","CGoQAA","CGsQAA","CGwQAA","CG0QAA","CG4QAA","CG8QAA","CHAQAA","CHEQAA","CHIQAA","CHMQAA","CHQQAA","CHUQAA","CHYQAA","CHcQAA","CHgQAA","CHkQAA","CHoQAA","CHsQAA","CHwQAA","CH0QAA","CH4QAA","CH8QAA","CIABEAA","CIEBEAA","CIIBEAA","CIMBEAA","CIQBEAA","CIUBEAA","CIYBEAA","CIcBEAA","CIgBEAA","CIkBEAA","CIoBEAA","CIsBEAA","CIwBEAA","CI0BEAA","CI4BEAA","CI8BEAA","CJABEAA","CJEBEAA","CJIBEAA","CJMBEAA","CJQBEAA","CJUBEAA","CJYBEAA","CJcBEAA","CJgBEAA","CJkBEAA","CJoBEAA","CJsBEAA","CJwBEAA","CJ0BEAA","CJ4BEAA","CJ8BEAA","CKABEAA","CKEBEAA","CKIBEAA","CKMBEAA","CKQBEAA","CKUBEAA","CKYBEAA","CKcBEAA","CKgBEAA","CKkBEAA","CKoBEAA","CKsBEAA","CKwBEAA","CK0BEAA","CK4BEAA","CK8BEAA","CLABEAA","CLEBEAA","CLIBEAA","CLMBEAA","CLQBEAA","CLUBEAA","CLYBEAA","CLcBEAA","CLgBEAA","CLkBEAA","CLoBEAA","CLsBEAA","CLwBEAA","CL0BEAA","CL4BEAA","CL8BEAA","CMABEAA","CMEBEAA","CMIBEAA","CMMBEAA","CMQBEAA","CMUBEAA","CMYBEAA","CMcBEAA"
      ]
    };
  },
  computed: {
    ...mapState(["pageData", "collect"]),
    ...mapGetters(["itemInCollect"]),
    perPage() {
      let arr = this.pageItem.filter((item, index) => {
        return index % 12 === 0;
      });
      // console.log(arr);
      return arr;
    },
    test() {
      return "123";
    }
  },
  methods: {
    ...mapActions(["getVideoList"]),
    ...mapMutations(["addCollect", "setCollect"]),
    getPage(token) {
      let URL = this.pageURL + token + this.apiKey;
      this.getVideoList(URL);
      // console.log(URL);
      // console.log(this.pageData);
    },
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
  watch: {
    currentPage(newValue, oldValue) {
      this.getPage(this.perPage[newValue]);
    }
  },
  created() {
    this.getVideoList();
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
      max-width: 24%;
      width: 100%;
      height: 350px;
      margin: 20px 0;

      &__img {
        .thumbnails:hover {
          background-position:10% 10%;
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
