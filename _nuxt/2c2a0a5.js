(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{305:function(t,e,n){var content=n(307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("625bf64c",content,!0,{sourceMap:!1})},306:function(t,e,n){"use strict";n(305)},307:function(t,e,n){(e=n(59)(!1)).push([t.i,"@media (max-width:575.98px){.container{padding:0}.content{border-radius:2px!important;padding:16px!important}.row{margin:0}.col{padding:0}.hero{margin:48px 0 32px!important}.hero h1{font-size:24px!important;padding:0 16px;line-height:1.5}}.sub-bar{margin-top:0;background:#fff;padding:16px 40px;position:-webkit-sticky;position:sticky;top:0;z-index:100}.sub-bar>div{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.side .side-bar{position:-webkit-sticky;position:sticky;top:40px}.sub-bar img{width:24px;border-radius:50%}.sub-bar a{color:#555}.side-bar img{width:24px;border-radius:50%}.side-bar a{color:#555}article .hero{text-align:center;margin:96px 0 48px}article .hero h1{width:100%;vertical-align:middle;margin:0 0 32px;font-size:xx-large}article .hero span{color:#c3b5b5}.content{background:#fff;padding:40px;border-radius:20px;margin-bottom:80px}.nuxt-content p{font-size:16px;text-align:justify;line-height:1.5}.nuxt-content h1{font-size:24px;margin:24px 0;padding:8px;border-bottom:1px solid #f3f0f0}.nuxt-content h2{font-size:20px;margin:24px 0}.nuxt-content h3{font-size:16px;margin:24px 0}.nuxt-content-highlight>pre{border-radius:8px}",""]),t.exports=e},318:function(t,e,n){"use strict";n.r(e);n(47);var r=n(19),o={name:"_slug.vue",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("posts",r.slug).fetch();case 3:return o=e.sent,e.abrupt("return",{post:o});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.post.title}}},c=(n(306),n(65)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"sub-bar d-xl-none"},[n("div",[n("img",{attrs:{src:"https://github.com/diffshare.png"}}),t._v(" "),n("a",{attrs:{href:"https://github.com/diffshare"}},[t._v("diffshare")]),t._v(" / "+t._s(t.post.title)+"\n    ")])]),t._v(" "),n("b-container",[n("article",[n("div",{staticClass:"hero"},[n("h1",[t._v(t._s(t.post.title))]),t._v(" "),n("span",[n("b-icon",{attrs:{icon:"arrow-up-circle-fill"}}),t._v(" "),n("span",{attrs:{title:t.$moment(t.post.createdAt)}},[t._v(t._s(t.$moment(t.post.createdAt).fromNow()))])],1)]),t._v(" "),n("b-row",[n("b-col",[n("div",{staticClass:"content"},[n("nuxt-content",{attrs:{document:t.post}})],1)]),t._v(" "),n("b-col",{staticClass:"side d-none d-lg-block",attrs:{cols:"4"}},[n("div",{staticClass:"side-bar"},[n("div",{staticClass:"content",staticStyle:{"margin-bottom":"32px"}},[n("p",[n("img",{attrs:{src:"https://github.com/diffshare.png"}}),t._v(" "),n("a",{attrs:{href:"https://github.com/diffshare"}},[t._v("diffshare")])]),t._v(" "),n("p",[t._v("\n                "+t._s(t.post.title)+"\n              ")])]),t._v(" "),t._e()])])],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);