webpackJsonp([12],{"/yEc":function(s,a,t){"use strict";var l=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("多选框")]),s._v(" "),t("p",[s._v("一组备选项中进行多选")]),s._v(" "),s._m(0),s._v(" "),t("demo-block",{attrs:{jsfiddle:{html:'<xl-checkbox v-model="value" label="选择框"></xl-checkbox>\n<p>{{value}}</p>\n\n\n',script:"\n    export default{\n        data(){\n            return {\n                value:false\n            }\n        }\n    }\n",style:null}}},[t("div",[t("xl-checkbox",{attrs:{label:"选择框"},model:{value:s.value,callback:function(a){s.value=a},expression:"value"}}),s._v(" "),t("p",[s._v(s._s(s.value))])],1),s._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[t("p",[s._v("基础使用方式")])]),s._v(" "),t("div",{attrs:{slot:"source"},slot:"source"},[t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'选择框'")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("{{value}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n        data(){\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n            }\n        }\n    }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(1),s._v(" "),t("demo-block",{attrs:{jsfiddle:{html:'<xl-checkbox v-model="value2" true-value="TRUE" false-value="FALSE" label="选择框"></xl-checkbox>\n<p>{{value2}}</p>\n\n',script:"\n    export default{\n        data(){\n            return {\n                value2:'TRUE'\n            }\n        }\n    }\n",style:null}}},[t("div",[t("xl-checkbox",{attrs:{"true-value":"TRUE","false-value":"FALSE",label:"选择框"},model:{value:s.value2,callback:function(a){s.value2=a},expression:"value2"}}),s._v(" "),t("p",[s._v(s._s(s.value2))])],1),s._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[t("p",[s._v("使用"),t("code",[s._v("true-value")]),s._v("和"),t("code",[s._v("false-value")]),s._v("自定义值")])]),s._v(" "),t("div",{attrs:{slot:"source"},slot:"source"},[t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("true-value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'TRUE'")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("false-value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'FALSE'")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'选择框'")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("{{value2}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n        data(){\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value2")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'TRUE'")]),s._v("\n            }\n        }\n    }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(2),s._v(" "),t("demo-block",{attrs:{jsfiddle:{html:'<xl-checkbox v-model="value" disabled label="选择框"></xl-checkbox>\n<p>{{value}}</p>\n\n',script:"\n    export default{\n        data(){\n            return {\n                value:false\n            }\n        }\n    }\n",style:null}}},[t("div",[t("xl-checkbox",{attrs:{disabled:"",label:"选择框"},model:{value:s.value,callback:function(a){s.value=a},expression:"value"}}),s._v(" "),t("p",[s._v(s._s(s.value))])],1),s._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[t("p",[s._v("使用"),t("code",[s._v("disabled")]),s._v("禁用多选框")])]),s._v(" "),t("div",{attrs:{slot:"source"},slot:"source"},[t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'选择框'")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("{{value}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n        data(){\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n            }\n        }\n    }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(3),s._v(" "),t("demo-block",{attrs:{jsfiddle:{html:'<xl-checkbox v-model="value" readonly label="选择框"></xl-checkbox>\n<p>{{value}}</p>\n\n',script:"\n    export default{\n        data(){\n            return {\n                value:false\n            }\n        }\n    }\n",style:null}}},[t("div",[t("xl-checkbox",{attrs:{readonly:"",label:"选择框"},model:{value:s.value,callback:function(a){s.value=a},expression:"value"}}),s._v(" "),t("p",[s._v(s._s(s.value))])],1),s._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[t("p",[s._v("使用"),t("code",[s._v("readonly")]),s._v("只读多选框")])]),s._v(" "),t("div",{attrs:{slot:"source"},slot:"source"},[t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'选择框'")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("{{value}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n        data(){\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n            }\n        }\n    }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(4),s._v(" "),t("demo-block",{attrs:{jsfiddle:{html:'<xl-checkbox v-model="value" bordered label="选择框"></xl-checkbox>\n<p>{{value}}</p>\n',script:null,style:null}}},[t("div",[t("xl-checkbox",{attrs:{bordered:"",label:"选择框"},model:{value:s.value,callback:function(a){s.value=a},expression:"value"}}),s._v(" "),t("p",[s._v(s._s(s.value))])],1),s._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[t("p",[s._v("使用"),t("code",[s._v("bordered")]),s._v("给多选框设置边框")])]),s._v(" "),t("div",{attrs:{slot:"source"},slot:"source"},[t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("bordered")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'选择框'")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("{{value}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(5),s._v(" "),t("demo-block",{attrs:{jsfiddle:{html:'<xl-checkbox-group v-model="arr">\n    <xl-checkbox value="a" label="A"></xl-checkbox>\n    <xl-checkbox value="b"></xl-checkbox>\n    <xl-checkbox value="c" label="C"></xl-checkbox>\n</xl-checkbox-group>\n<p>{{arr}}</p>\n\n\n',script:"\n    export default{\n        data(){\n            return {\n                arr:[]\n            }\n        }\n    }\n",style:null}}},[t("div",[t("xl-checkbox-group",{model:{value:s.arr,callback:function(a){s.arr=a},expression:"arr"}},[t("xl-checkbox",{attrs:{value:"a",label:"A"}}),s._v(" "),t("xl-checkbox",{attrs:{value:"b"}}),s._v(" "),t("xl-checkbox",{attrs:{value:"c",label:"C"}})],1),s._v(" "),t("p",[s._v(s._s(s.arr))])],1),s._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[t("p",[s._v("使用"),t("code",[s._v("xl-checkbox-group")]),s._v("实现多选框组,必须制定每个 checkbox 的"),t("code",[s._v("value")]),s._v("值，"),t("code",[s._v("label")]),s._v("不存在的时候，默认使用"),t("code",[s._v("value")]),s._v("值作为 label")])]),s._v(" "),t("div",{attrs:{slot:"source"},slot:"source"},[t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox-group")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'arr'")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'a'")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'A'")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'b'")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'c'")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'C'")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox-group")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("{{arr}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n        data(){\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("arr")]),s._v(":[]\n            }\n        }\n    }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(6),s._v(" "),t("demo-block",{attrs:{jsfiddle:{html:'<xl-checkbox-group v-model="arr2">\n    <xl-row :gutter="20">\n        <xl-col :span="8">\n            <xl-checkbox value="a"></xl-checkbox>\n        </xl-col>\n        <xl-col :span="8">\n            <xl-checkbox value="b"></xl-checkbox>\n        </xl-col>\n        <xl-col :span="8">\n            <xl-checkbox value="c" label="C"></xl-checkbox>\n        </xl-col>\n    </xl-row>\n</xl-checkbox-group>\n<p>{{arr2}}</p>\n\n\n',script:"\n    export default{\n        data(){\n            return {\n                arr2:['123','456']\n            }\n        }\n    }\n",style:null}}},[t("div",[t("xl-checkbox-group",{model:{value:s.arr2,callback:function(a){s.arr2=a},expression:"arr2"}},[t("xl-row",{attrs:{gutter:20}},[t("xl-col",{attrs:{span:8}},[t("xl-checkbox",{attrs:{value:"a"}})],1),s._v(" "),t("xl-col",{attrs:{span:8}},[t("xl-checkbox",{attrs:{value:"b"}})],1),s._v(" "),t("xl-col",{attrs:{span:8}},[t("xl-checkbox",{attrs:{value:"c",label:"C"}})],1)],1)],1),s._v(" "),t("p",[s._v(s._s(s.arr2))])],1),s._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[t("p",[s._v("结合使用"),t("code",[s._v("xl-checkbox-group")]),s._v("组件和"),t("code",[s._v("grid")]),s._v("组件实现布局")])]),s._v(" "),t("div",{attrs:{slot:"source"},slot:"source"},[t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox-group")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'arr2'")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-row")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":gutter")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"20"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"8"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'a'")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-col")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"8"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'b'")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-col")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"8"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'c'")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'C'")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-row")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox-group")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("{{arr2}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n        data(){\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("arr2")]),s._v(":["),t("span",{attrs:{class:"hljs-string"}},[s._v("'123'")]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v("'456'")]),s._v("]\n            }\n        }\n    }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(7),s._v(" "),t("demo-block",{attrs:{jsfiddle:{html:'<xl-checkbox-group type="button">\n    <xl-checkbox value="123">aaa</xl-checkbox>\n    <xl-checkbox value="456">bbb</xl-checkbox>\n    <xl-checkbox value="987" label="789">ccc</xl-checkbox>\n</xl-checkbox-group>\n',script:null,style:null}}},[t("div",[t("xl-checkbox-group",{attrs:{type:"button"}},[t("xl-checkbox",{attrs:{value:"123"}},[s._v("aaa")]),s._v(" "),t("xl-checkbox",{attrs:{value:"456"}},[s._v("bbb")]),s._v(" "),t("xl-checkbox",{attrs:{value:"987",label:"789"}},[s._v("ccc")])],1)],1),s._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[t("p",[s._v("使用"),t("code",[s._v('type="button"')]),s._v("实现多选框组")])]),s._v(" "),t("div",{attrs:{slot:"source"},slot:"source"},[t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox-group")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'button'")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'123'")]),s._v(">")]),s._v("aaa"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'456'")]),s._v(">")]),s._v("bbb"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'987'")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'789'")]),s._v(">")]),s._v("ccc"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox-group")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(8),s._v(" "),t("demo-block",{attrs:{jsfiddle:{html:'<xl-checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="click">全选</xl-checkbox>\n<xl-checkbox-group type="button" v-model="arr3">\n    <xl-checkbox value="123">aaa</xl-checkbox>\n    <xl-checkbox value="456">bbb</xl-checkbox>\n    <xl-checkbox value="789">ccc</xl-checkbox>\n</xl-checkbox-group>\n<p>{{arr3}}</p>\n\n',script:"\n    export default{\n        data(){\n            return {\n                arr3:[]\n            }\n        },\n        computed:{\n            indeterminate(){\n                return this.arr3.length>0 && this.arr3.length<3\n            },\n            checkAll() {\n                return this.arr3.length === 3\n            } \n        },\n        methods: {\n            click() {\n                if(!this.checkAll){\n                    this.arr3 = ['123','456','789']\n                }else{\n                    this.arr3 = []\n                }\n            }\n        }\n    }\n",style:null}}},[t("div",[t("xl-checkbox",{attrs:{indeterminate:s.indeterminate,value:s.checkAll},nativeOn:{click:function(a){return a.preventDefault(),s.click(a)}}},[s._v("全选")]),s._v(" "),t("xl-checkbox-group",{attrs:{type:"button"},model:{value:s.arr3,callback:function(a){s.arr3=a},expression:"arr3"}},[t("xl-checkbox",{attrs:{value:"123"}},[s._v("aaa")]),s._v(" "),t("xl-checkbox",{attrs:{value:"456"}},[s._v("bbb")]),s._v(" "),t("xl-checkbox",{attrs:{value:"789"}},[s._v("ccc")])],1),s._v(" "),t("p",[s._v(s._s(s.arr3))])],1),s._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[t("p",[s._v("使用"),t("code",[s._v("indeterminate")]),s._v("实现多选框组")])]),s._v(" "),t("div",{attrs:{slot:"source"},slot:"source"},[t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":indeterminate")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"indeterminate"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"checkAll"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click.prevent.native")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"click"')]),s._v(">")]),s._v("全选"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox-group")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'button'")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'arr3'")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'123'")]),s._v(">")]),s._v("aaa"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'456'")]),s._v(">")]),s._v("bbb"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("'789'")]),s._v(">")]),s._v("ccc"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("xl-checkbox-group")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("{{arr3}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n        data(){\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("arr3")]),s._v(":[]\n            }\n        },\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(":{\n            indeterminate(){\n                "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".arr3.length>"),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" && "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".arr3.length<"),t("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n            },\n            checkAll() {\n                "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".arr3.length === "),t("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n            } \n        },\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n            click() {\n                "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(!"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".checkAll){\n                    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".arr3 = ["),t("span",{attrs:{class:"hljs-string"}},[s._v("'123'")]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v("'456'")]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v("'789'")]),s._v("]\n                }"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v("{\n                    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".arr3 = []\n                }\n            }\n        }\n    }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(9),s._v(" "),s._m(10),s._v(" "),s._m(11),s._v(" "),s._m(12),s._v(" "),s._m(13),s._v(" "),s._m(14),s._v(" "),s._m(15),s._v(" "),s._m(16),s._v(" "),s._m(17),s._v(" "),s._m(18),s._v(" "),s._m(19),s._v(" "),s._m(20)],1)},v=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"ji-chu-yong-fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa","aria-hidden":"true"}},[s._v("¶")]),s._v(" 基础用法")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"zi-ding-yi-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-zhi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 自定义值")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"jin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 禁用")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"zhi-du"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zhi-du","aria-hidden":"true"}},[s._v("¶")]),s._v(" 只读")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"bian-kuang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bian-kuang","aria-hidden":"true"}},[s._v("¶")]),s._v(" 边框")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"duo-xuan-kuang-zu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#duo-xuan-kuang-zu","aria-hidden":"true"}},[s._v("¶")]),s._v(" 多选框组")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"duo-xuan-kuang-zu-ke-yi-he-grid-jie-he-shi-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#duo-xuan-kuang-zu-ke-yi-he-grid-jie-he-shi-yong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 多选框组可以和 grid 结合使用")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"an-niu-yang-shi-de-duo-xuan-kuang-zu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-niu-yang-shi-de-duo-xuan-kuang-zu","aria-hidden":"true"}},[s._v("¶")]),s._v(" 按钮样式的多选框组")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"indeterminate-zhuang-tai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#indeterminate-zhuang-tai","aria-hidden":"true"}},[s._v("¶")]),s._v(" indeterminate 状态")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"checkbox-shu-xing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-shu-xing","aria-hidden":"true"}},[s._v("¶")]),s._v(" checkbox 属性")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("可选值")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("label")]),s._v(" "),t("td",[s._v("checkbox 显示值")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("name")]),s._v(" "),t("td",[s._v("checkbox 的 name（单独使用时有效）")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("value")]),s._v(" "),t("td",[s._v("checkbox 单独使用时，支持 v-model 绑定")]),s._v(" "),t("td",[s._v("string / number / boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("true-value")]),s._v(" "),t("td",[s._v("选中时的 value 值（单独使用时有效）")]),s._v(" "),t("td",[s._v("string / number / boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("true")])]),s._v(" "),t("tr",[t("td",[s._v("false-value")]),s._v(" "),t("td",[s._v("未选中时的 value 值（单独使用时有效）")]),s._v(" "),t("td",[s._v("string / number / boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("bordered")]),s._v(" "),t("td",[s._v("是否显示 checkbox 边框")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("readonly")]),s._v(" "),t("td",[s._v("是否只读")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("disabled")]),s._v(" "),t("td",[s._v("是否禁用状态")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("indeterminate")]),s._v(" "),t("td",[s._v("半选状态 (一旦为 true，多选框就不能为其他状态)")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("false")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"checkbox-shi-jian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-shi-jian","aria-hidden":"true"}},[s._v("¶")]),s._v(" checkbox 事件")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("参数")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("on-change")]),s._v(" "),t("td",[s._v("checkbox 改变事件")]),s._v(" "),t("td",[s._v("选中时的值（trueValue）")])]),s._v(" "),t("tr",[t("td",[s._v("on-focus")]),s._v(" "),t("td",[s._v("checkbox 获得焦点事件")]),s._v(" "),t("td",[s._v("表单元素事件 e")])]),s._v(" "),t("tr",[t("td",[s._v("on-blur")]),s._v(" "),t("td",[s._v("checkbox 失去焦点事件")]),s._v(" "),t("td",[s._v("表单元素事件 e")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"checkbox-slots"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-slots","aria-hidden":"true"}},[s._v("¶")]),s._v(" checkbox slots")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("名称")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("default")]),s._v(" "),t("td",[s._v("checkbox 显示的 label，如果没有设置插槽，默认使用 label 参数，如果 label 也没有，就为空")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"checkbox-group-shu-xing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-group-shu-xing","aria-hidden":"true"}},[s._v("¶")]),s._v(" checkbox group 属性")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("可选值")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("value")]),s._v(" "),t("td",[s._v("选中的 checkbox v-model 绑定")]),s._v(" "),t("td",[s._v("array")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("[]")])]),s._v(" "),t("tr",[t("td",[s._v("name")]),s._v(" "),t("td",[s._v("多选框选框组的名称 ，默认随机生成")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("type")]),s._v(" "),t("td",[s._v("多选框组类型")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("button")]),s._v(" "),t("td",[s._v("-")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"checkbox-group-shi-jian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-group-shi-jian","aria-hidden":"true"}},[s._v("¶")]),s._v(" checkbox group 事件")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("参数")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("on-change")]),s._v(" "),t("td",[s._v("checkbox 选中事件")]),s._v(" "),t("td",[s._v("选中时的 checkbox 的值")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"checkbox-group-slots"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-group-slots","aria-hidden":"true"}},[s._v("¶")]),s._v(" checkbox group slots")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("名称")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("default")]),s._v(" "),t("td",[s._v("用来设置 checkbox 组")])])])])}],r={render:l,staticRenderFns:v};a.a=r},AKBK:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{value:!1,value2:"TRUE",arr:[],arr2:[],arr3:[]}},computed:{indeterminate:function(){return this.arr3.length>0&&this.arr3.length<3},checkAll:function(){return 3===this.arr3.length}},methods:{click:function(){this.checkAll?this.arr3=[]:this.arr3=["123","456","789"]}}}},OLTz:function(s,a,t){s.exports=t("eZRe")},eZRe:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t("AKBK"),v=t.n(l);for(var r in l)"default"!==r&&function(s){t.d(a,s,function(){return l[s]})}(r);var n=t("/yEc"),e=t("/4AN"),_=e(v.a,n.a,!1,null,null,null);a.default=_.exports}});
//# sourceMappingURL=12.66055859d9e5f87d2b7d.js.map