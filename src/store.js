import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex,axios)

let store = new Vuex.Store({
  state:{
    nextPage:'',
    prevPage:'',
    pageData:'',
    collect:[],
  },
  mutations:{
    // setNextPage(state,data){
    //   state.nextPage = data
    // },
    // setPrevPage(state,data){
    //   state.PrevPage = data
    // },
    setPageData(state,data){
      state.pageData = data
    },
    addCollect(state,data){
      let findData = state.collect.some(item => {
        return item.snippet.title == data.snippet.title
      })

      if(!findData){
        state.collect.push(data)
      }else{
        state.collect.forEach((item,index)=>{
          if(item.snippet.title == data.snippet.title){
            state.collect.splice(index,1)
          }
        })
      }
      localStorage.setItem('collectData', JSON.stringify(state.collect));
    },
    setCollect(state){
      state.collect = JSON.parse(localStorage.getItem('collectData')) || []
    }
  },
  getters:{
    itemInCollect(state){
      return (data)=>{
        return state.collect.some(item => {
          return item.snippet.title == data.snippet.title
        })
      }
    }
  },
  actions:{
    getVideoList({ commit },pageURL){
      axios.get(pageURL||`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=12&nextPageToken=''}&key=AIzaSyDmtNXoq6GT-eLH09bJD5Tu69f0dsKsF3U`)
      .then(res =>{
        // console.log(res.data.nextPageToken)
        // commit('setNextPage',res.data.nextPageToken||'')
        // commit('setPrevPage',res.data.nextPageToken||'')
        commit('setPageData',res.data.items)
      })
      .catch(function (error) {
        // Error
        console.log(error);
        // Error 的詳細資訊
        console.log(error.response);  
      })
    },

  }
})

export default store

// `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${video_id}&key=AIzaSyDmtNXoq6GT-eLH09bJD5Tu69f0dsKsF3U`