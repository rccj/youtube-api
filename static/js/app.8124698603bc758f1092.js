webpackJsonp([1],{"9M+g":function(t,e){},"F+xW":function(t,e){},GRlt:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,A){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=A("7+uW"),a=A("NYxO"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body"},[e("div",{staticClass:"box"},[e("router-link",{attrs:{to:{name:"page"}}},[e("div",{staticClass:"item"},[this._v("Home")])]),this._v(" "),e("router-link",{attrs:{to:{name:"collect"}}},[e("div",{staticClass:"item"},[this._v("Collection")])])],1)])},staticRenderFns:[]};var n={name:"App",data:function(){return{documents:[]}},components:{Nav:A("VU/8")({name:"page",data:function(){return{}}},s,!1,function(t){A("Xuyo")},"data-v-3e7beade",null).exports}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"body"},[e("Nav",{staticClass:"nav"}),this._v(" "),e("div",{staticClass:"block"}),this._v(" "),e("router-view")],1)])},staticRenderFns:[]};var o=A("VU/8")(n,C,!1,function(t){A("SvQi")},null,null).exports,c=A("/ocq"),l=A("Dd8w"),r=A.n(l),u={name:"page",data:function(){return{rows:200,perPageB:12,currentPage:1,pageURL:"https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=12&pageToken=",apiKey:"&key=AIzaSyDmtNXoq6GT-eLH09bJD5Tu69f0dsKsF3U",pageItem:["CAAQAA","CAEQAA","CAIQAA","CAMQAA","CAQQAA","CAUQAA","CAYQAA","CAcQAA","CAgQAA","CAkQAA","CAoQAA","CAsQAA","CAwQAA","CA0QAA","CA4QAA","CA8QAA","CBAQAA","CBEQAA","CBIQAA","CBMQAA","CBQQAA","CBUQAA","CBYQAA","CBcQAA","CBgQAA","CBkQAA","CBoQAA","CBsQAA","CBwQAA","CB0QAA","CB4QAA","CB8QAA","CCAQAA","CCEQAA","CCIQAA","CCMQAA","CCQQAA","CCUQAA","CCYQAA","CCcQAA","CCgQAA","CCkQAA","CCoQAA","CCsQAA","CCwQAA","CC0QAA","CC4QAA","CC8QAA","CDAQAA","CDEQAA","CDIQAA","CDMQAA","CDQQAA","CDUQAA","CDYQAA","CDcQAA","CDgQAA","CDkQAA","CDoQAA","CDsQAA","CDwQAA","CD0QAA","CD4QAA","CD8QAA","CEAQAA","CEEQAA","CEIQAA","CEMQAA","CEQQAA","CEUQAA","CEYQAA","CEcQAA","CEgQAA","CEkQAA","CEoQAA","CEsQAA","CEwQAA","CE0QAA","CE4QAA","CE8QAA","CFAQAA","CFEQAA","CFIQAA","CFMQAA","CFQQAA","CFUQAA","CFYQAA","CFcQAA","CFgQAA","CFkQAA","CFoQAA","CFsQAA","CFwQAA","CF0QAA","CF4QAA","CF8QAA","CGAQAA","CGEQAA","CGIQAA","CGMQAA","CGQQAA","CGUQAA","CGYQAA","CGcQAA","CGgQAA","CGkQAA","CGoQAA","CGsQAA","CGwQAA","CG0QAA","CG4QAA","CG8QAA","CHAQAA","CHEQAA","CHIQAA","CHMQAA","CHQQAA","CHUQAA","CHYQAA","CHcQAA","CHgQAA","CHkQAA","CHoQAA","CHsQAA","CHwQAA","CH0QAA","CH4QAA","CH8QAA","CIABEAA","CIEBEAA","CIIBEAA","CIMBEAA","CIQBEAA","CIUBEAA","CIYBEAA","CIcBEAA","CIgBEAA","CIkBEAA","CIoBEAA","CIsBEAA","CIwBEAA","CI0BEAA","CI4BEAA","CI8BEAA","CJABEAA","CJEBEAA","CJIBEAA","CJMBEAA","CJQBEAA","CJUBEAA","CJYBEAA","CJcBEAA","CJgBEAA","CJkBEAA","CJoBEAA","CJsBEAA","CJwBEAA","CJ0BEAA","CJ4BEAA","CJ8BEAA","CKABEAA","CKEBEAA","CKIBEAA","CKMBEAA","CKQBEAA","CKUBEAA","CKYBEAA","CKcBEAA","CKgBEAA","CKkBEAA","CKoBEAA","CKsBEAA","CKwBEAA","CK0BEAA","CK4BEAA","CK8BEAA","CLABEAA","CLEBEAA","CLIBEAA","CLMBEAA","CLQBEAA","CLUBEAA","CLYBEAA","CLcBEAA","CLgBEAA","CLkBEAA","CLoBEAA","CLsBEAA","CLwBEAA","CL0BEAA","CL4BEAA","CL8BEAA","CMABEAA","CMEBEAA","CMIBEAA","CMMBEAA","CMQBEAA","CMUBEAA","CMYBEAA","CMcBEAA"]}},computed:r()({},Object(a.e)(["pageData","collect"]),Object(a.c)(["itemInCollect"]),{perPage:function(){return this.pageItem.filter(function(t,e){return e%12==0})},test:function(){return"123"}}),methods:r()({},Object(a.b)(["getVideoList"]),Object(a.d)(["addCollect","setCollect"]),{getPage:function(t){var e=this.pageURL+t+this.apiKey;this.getVideoList(e)},durationTime:function(t){return moment.duration(t).format("h:mm:ss").padStart(4,"0:0")},upDateTime:function(t){return t.substring(0,10)}}),watch:{currentPage:function(t,e){this.getPage(this.perPage[t])}},created:function(){this.getVideoList(),this.setCollect()}},d={render:function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"body"},[A("h1",[t._v("MOST POPULAR")]),t._v(" "),A("ul",{staticClass:"itemList"},t._l(t.pageData,function(e){return A("li",{staticClass:"item"},[A("router-link",{staticClass:"item__img",attrs:{to:{name:"play-video",params:{vidoe_id:e.id}}}},[A("div",{staticClass:"thumbnails",style:{backgroundImage:"url('"+e.snippet.thumbnails.standard.url+"')"}},[A("div",{staticClass:"duration"},[t._v(t._s(t.durationTime(e.contentDetails.duration)))])])]),t._v(" "),A("div",{staticClass:"item__text"},[A("div",{staticClass:"item__text__title"},[t._v(t._s(e.snippet.title))]),t._v(" "),A("div",{staticClass:"item__text__description"},[t._v(t._s(e.snippet.description))]),t._v(" "),A("div",{staticClass:"item__text__btnTime"},[A("button",{on:{click:function(A){return t.addCollect(e)}}},[t.itemInCollect(e)?t._e():A("div",[t._v("Collect")]),t._v(" "),t.itemInCollect(e)?A("div",[t._v("Collected")]):t._e()]),t._v(" "),A("div",[t._v(t._s(t.upDateTime(e.snippet.publishedAt)))])])])],1)}),0),t._v(" "),A("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPageB,"first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},staticRenderFns:[]};var p=A("VU/8")(u,d,!1,function(t){A("F+xW")},"data-v-365e5d3c",null).exports,Q={name:"page",computed:r()({},Object(a.e)(["collect"]),Object(a.c)(["itemInCollect"])),methods:r()({},Object(a.d)(["addCollect","setCollect"]),{durationTime:function(t){return moment.duration(t).format("h:mm:ss").padStart(4,"0:0")},upDateTime:function(t){return t.substring(0,10)}}),created:function(){this.setCollect()}},m={render:function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"body"},[A("h1",[t._v("COLLECTION")]),t._v(" "),A("ul",{staticClass:"itemList"},t._l(t.collect,function(e){return A("li",{staticClass:"item"},[A("router-link",{staticClass:"item__img",attrs:{to:{name:"play-video",params:{vidoe_id:e.id}}}},[A("div",{staticClass:"thumbnails",style:{backgroundImage:"url('"+e.snippet.thumbnails.standard.url+"')"}},[A("label",{staticClass:"duration"},[t._v(t._s(t.durationTime(e.contentDetails.duration)))])])]),t._v(" "),A("div",{staticClass:"item__text"},[A("div",{staticClass:"item__text__title"},[t._v(t._s(e.snippet.title))]),t._v(" "),A("div",{staticClass:"item__text__description"},[t._v(t._s(e.snippet.description))]),t._v(" "),A("div",{staticClass:"item__text__btnTime"},[A("button",{on:{click:function(A){return t.addCollect(e)}}},[t.itemInCollect(e)?A("div",[t._v("Cancel")]):t._e()]),t._v(" "),A("div",[t._v(t._s(t.upDateTime(e.snippet.publishedAt)))])])])],1)}),0)])},staticRenderFns:[]};var v=A("VU/8")(Q,m,!1,function(t){A("GRlt")},"data-v-fede7ede",null).exports,E=A("mtWM"),_=A.n(E),B={data:function(){return{url:"",video_id:"",title:"",description:""}},computed:{},methods:{},beforeRouteEnter:function(t,e,A){_.a.get("https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id="+t.params.vidoe_id+"&key=AIzaSyDmtNXoq6GT-eLH09bJD5Tu69f0dsKsF3U").then(function(e){A(function(A){A.url="https://www.youtube.com/embed/"+t.params.vidoe_id,A.video_id=t.params.vidoe_id,A.title=e.data.items[0].snippet.title,A.description=e.data.items[0].snippet.description,console.log(e.data.items[0].snippet)})})}},f={render:function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"body"},[A("iframe",{staticClass:"video",attrs:{src:t.url,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),A("div",{staticClass:"text"},[A("div",{staticClass:"text__title"},[t._v(t._s(t.title))]),t._v(" "),A("div",{staticClass:"text__description"},[t._v(t._s(t.description))])])])},staticRenderFns:[]};var g=A("VU/8")(B,f,!1,function(t){A("Zt3+")},null,null).exports;i.default.use(c.a);var h=new c.a({routes:[{path:"/:product_id?",name:"page",component:p},{path:"/collect",name:"collect",component:v},{path:"/video/:vidoe_id",name:"play-video",component:g}]}),b=A("mvHQ"),I=A.n(b);i.default.use(a.a,_.a);var D=new a.a.Store({state:{nextPage:"",prevPage:"",pageData:"",collect:[]},mutations:{setPageData:function(t,e){t.pageData=e},addCollect:function(t,e){t.collect.some(function(t){return t.snippet.title==e.snippet.title})?t.collect.forEach(function(A,i){A.snippet.title==e.snippet.title&&t.collect.splice(i,1)}):t.collect.push(e),localStorage.setItem("collectData",I()(t.collect))},setCollect:function(t){t.collect=JSON.parse(localStorage.getItem("collectData"))||[]}},getters:{itemInCollect:function(t){return function(e){return t.collect.some(function(t){return t.snippet.title==e.snippet.title})}}},actions:{getVideoList:function(t,e){var A=t.commit;_.a.get(e||"https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=12&nextPageToken=''}&key=AIzaSyDmtNXoq6GT-eLH09bJD5Tu69f0dsKsF3U").then(function(t){A("setPageData",t.data.items)}).catch(function(t){console.log(t),console.log(t.response)})}}}),w=A("Tqaz");A("Jmt5"),A("9M+g");i.default.use(w.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:h,store:D,components:{App:o},template:"<App/>"})},SvQi:function(t,e){},Xuyo:function(t,e){},"Zt3+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8124698603bc758f1092.js.map