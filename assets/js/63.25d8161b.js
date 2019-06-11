(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{267:function(t,a,s){"use strict";s.r(a);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=s(6),o=Object(e.a)(n,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[s("h1",{attrs:{id:"listing-items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listing-items","aria-hidden":"true"}},[t._v("#")]),t._v(" Listing Items")]),t._v(" "),s("p",[t._v("You can get a set of items from a particular collection.\n"),s("br"),t._v("For example, if you want to list down all the movies from the "),s("code",[t._v("movies")]),t._v(" collection, the query should be:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("movies(limit:10) {\n  data {\n    name\n  }\n  meta {\n    result_count\n    total_count\n  }\n}\n")])])]),s("p",[t._v("Here the "),s("code",[t._v("data")]),t._v(" is an array containing all the items while "),s("code",[t._v("meta")]),t._v(" has the metadata about the items being displayed. The response format is same as the REST API so you can add queries in GraphQL which is supported in REST API. Read more about meta "),s("router-link",{attrs:{to:"/api/reference.html#metadata"}},[t._v("here.")])],1),t._v(" "),s("h3",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),s("p",[t._v("Collection supports following 3 arguments.")]),t._v(" "),s("ul",[s("li",[t._v("limit: Limits the number of items per page.")]),t._v(" "),s("li",[t._v("offset: To skip the number of items multiplied by limit from start.")]),t._v(" "),s("li",[t._v("filter: To list specific items based on their values. "),s("router-link",{attrs:{to:"./filters.html"}},[t._v("Read More")])],1),t._v(" "),s("li",[t._v("id: To get a specific item with primary key. "),s("router-link",{attrs:{to:"./item-details.html"}},[t._v("Read More")]),t._v(".")],1)]),t._v(" "),s("p",[t._v("A complete example to list down items from the "),s("code",[t._v("movies")]),t._v(" collection:")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item in movies.data"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ item.name }}"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gql "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"graphql-tag"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  apollo"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    movies"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gql"),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`\n      query {\n        movies(limit: 10) {\n          data {\n            name\n          }\n          meta {\n            result_count\n            total_count\n          }\n        }\n      }\n    `")])]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])},[],!1,null,null,null);o.options.__file="listing-items.md";a.default=o.exports}}]);