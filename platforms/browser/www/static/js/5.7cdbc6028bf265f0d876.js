webpackJsonp([5],{"3O2j":function(e,t,n){var o=n("eq3W");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("25983246",o,!0)},LD2Z:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("a",{staticClass:"link",attrs:{href:"javascript:;"},on:{click:e.show}},[e._v("Show device Motion")]),e._v(" "),n("a",{staticClass:"link",on:{click:e.back}},[e._v("返回")])])},a=[],i={render:o,staticRenderFns:a};t.a=i},eq3W:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"h1[data-v-12406732],h2[data-v-12406732]{font-weight:400;font-size:.6rem}.link[data-v-12406732]{display:block;color:#42b983;font-size:.5rem}.photo[data-v-12406732]{display:block;width:6rem;height:auto;margin:.2rem auto}","",{version:3,sources:["E:/Workspace/practice/cordova/dome/vue/src/components/device_motion.vue"],names:[],mappings:"AACA,wCACE,gBAAoB,AACpB,eAAiB,CAClB,AACD,uBACE,cAAe,AACf,cAAe,AACf,eAAiB,CAClB,AACD,wBACE,cAAe,AACf,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB",file:"device_motion.vue",sourcesContent:["\nh1[data-v-12406732], h2[data-v-12406732] {\n  font-weight: normal;\n  font-size: .6rem;\n}\n.link[data-v-12406732] {\n  display: block;\n  color: #42b983;\n  font-size: .5rem;\n}\n.photo[data-v-12406732] {\n  display: block;\n  width: 6rem;\n  height: auto;\n  margin: .2rem auto;\n}\n"],sourceRoot:""}])},nO7F:function(e,t,n){"use strict";function o(e){n("3O2j")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("pXur"),i=n("LD2Z"),c=n("VU/8"),r=o,s=c(a.a,i.a,!1,r,"data-v-12406732",null);t.default=s.exports},pXur:function(e,t,n){"use strict";t.a={name:"motion",data:function(){return{msg:"Device Motion"}},mounted:function(){document.title="Device Motion"},methods:{show:function(){window.navigator.accelerometer&&window.navigator.accelerometer.getCurrentAcceleration(function(e){alert("Acceleration X: "+e.x+"\nAcceleration Y: "+e.y+"\nAcceleration Z: "+e.z+"\nTimestamp: "+e.timestamp+"\n")},function(){alert("onError!")})},back:function(){return this.$router.go(-1),!1}}}}});
//# sourceMappingURL=5.7cdbc6028bf265f0d876.js.map