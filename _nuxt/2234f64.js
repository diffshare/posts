(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{317:function(t,e,n){"use strict";n.r(e);n(47);var r=n(19),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("posts").only(["title","slug","createdAt"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{posts:r});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"記事一覧"}}},o=n(65),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[t._m(0),t._v(" "),n("b-container",[n("div",{staticClass:"content"},t._l(t.posts,(function(e){return n("p",{key:e.slug},[t._v("\n        "+t._s(t.$moment(e.createdAt).fromNow())+" /\n        "),n("NuxtLink",{attrs:{to:{name:"slug",params:{slug:e.slug}}}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),0)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("h1",[this._v("posts.")]),this._v(" "),e("span",[this._v("投稿一覧")])])}],!1,null,"77d233c7",null);e.default=component.exports}}]);