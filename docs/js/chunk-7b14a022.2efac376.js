(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b14a022"],{"02aa":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-detail"},[r("a-steps",{staticClass:"product-steps",attrs:{current:t.current}},t._l(t.steps,(function(t){return r("a-step",{key:t.title,attrs:{title:t.title}})})),1),r("div",{staticClass:"steps-content"},[0===t.current?r("basic-info",{attrs:{form:t.form},on:{next:t.next}}):t._e(),1===t.current?r("sale-info",{attrs:{form:t.form},on:{next:t.next,prev:t.prev}}):t._e()],1)],1)},o=[],i=r("5530"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"basic-detail"},[r("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":{span:5},"wrapper-col":{span:13}}},[r("a-form-model-item",{ref:"name",attrs:{label:"标题",required:"",prop:"title"}},[r("a-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),r("a-form-model-item",{attrs:{label:"商品描述",prop:"desc"}},[r("a-input",{model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),r("a-form-model-item",{attrs:{label:"商品类目",required:"",prop:"category"}},[r("a-select",{attrs:{placeholder:"请选择商品类别"},on:{change:function(e){return t.changeCategory(t.form.category)}},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}},t._l(t.categoryList,(function(e){return r("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1),r("a-select",{attrs:{placeholder:"请添加子类目"},model:{value:t.form.c_item,callback:function(e){t.$set(t.form,"c_item",e)},expression:"form.c_item"}},t._l(t.categoryItems,(function(e){return r("a-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),r("a-form-model-item",{attrs:{label:"商品标签",prop:"tags",required:""}},[r("a-select",{staticStyle:{width:"100%"},attrs:{mode:"tags",placeholder:"请选择标签","default-value":["包邮，最晚次日达"]},model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}},[r("a-select-option",{attrs:{value:"包邮，最晚次日达"}},[t._v(" 包邮，最晚次日达")])],1)],1),r("a-form-model-item",{staticClass:"next-btn",attrs:{label:" "}},[r("a-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v("下一步")])],1)],1)],1)},c=[],s=r("c405"),u={props:["form"],data:function(){return{rules:{},categoryList:[],categoryItems:[]}},methods:{changeCategory:function(t){for(var e=0;e<this.categoryList.length;e+=1)this.categoryList[e].id===t&&(this.categoryItems=this.categoryList[e].c_items)},next:function(){var t=this;this.$refs.ruleForm.validate((function(e){return e?(t.$emit("next",t.form),!0):(console.log("error submit!!"),!1)}))}},created:function(){var t=this;s["a"].list().then((function(e){t.categoryList=e.data}))}},l=u,f=(r("9b18"),r("2877")),p=Object(f["a"])(l,a,c,!1,null,null,null),m=p.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sale-detail"},[r("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":{span:5},"wrapper-col":{span:13}}},[r("a-form-model-item",{ref:"name",attrs:{label:"商品售价",required:"",prop:"price"}},[r("a-input",{model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),r("a-form-model-item",{attrs:{label:"折扣价格",prop:"price_off"}},[r("a-input",{model:{value:t.form.price_off,callback:function(e){t.$set(t.form,"price_off",e)},expression:"form.price_off"}})],1),r("a-form-model-item",{attrs:{label:"商品库存",required:"",prop:"inventory"}},[r("a-input",{model:{value:t.form.inventory,callback:function(e){t.$set(t.form,"inventory",e)},expression:"form.inventory"}})],1),r("a-form-model-item",{attrs:{label:"计量单位",prop:"unit",required:""}},[r("a-input",{model:{value:t.form.unit,callback:function(e){t.$set(t.form,"unit",e)},expression:"form.unit"}})],1),r("a-form-model-item",{attrs:{label:"商品相册",prop:"images"}},[r("a-upload",{attrs:{action:"http://mallapi.duyiedu.com/upload/images?appkey="+t.$store.state.user.appkey,"list-type":"picture-card","file-list":t.fileList,status:"done",name:"avatar"},on:{preview:t.handlePreview,change:t.handleChange}},[t.fileList.length<8?r("div",[r("a-icon",{attrs:{type:t.loading?"loading":"plus"}}),r("div",{staticClass:"ant-upload-text"},[t._v("Upload")])],1):t._e()]),r("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1),r("a-form-model-item",{staticClass:"next-btn",attrs:{label:" "}},[r("a-button",{attrs:{type:"primary"},on:{click:t.prev}},[t._v("上一步")]),r("a-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v("提交")])],1)],1)],1)},d=[],v=r("1da1");r("96cf"),r("d3b7"),r("d81d"),r("4de4");function y(t){return new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(t){return r(t)}}))}var g={props:["form"],data:function(){return{previewVisible:!1,previewImage:"",rules:{},fileList:[],loading:!1}},created:function(){var t=this;this.form.images.length>0&&(this.fileList=this.form.images.map((function(e,r){return{uid:t.form.id+r,name:"".concat(t.form.id+r,".png"),status:"done",url:e}})))},methods:{handleChange:function(t){var e=t.file,r=t.fileList,n=t.event;if(console.log("---",e,r,n),"done"===e.status)this.form.images.push(e.response.data.url);else if("removed"===e.status){var o=e.response.data.url;this.form.images=this.form.images.filter((function(t){return t!==o}))}this.fileList=r},handlePreview:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=t,t.url||t.preview){r.next=5;break}return r.next=4,y(t.originFileObj);case 4:n.preview=r.sent;case 5:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 7:case"end":return r.stop()}}),r)})))()},prev:function(){this.$emit("prev",this.form)},next:function(){var t=this;this.$refs.ruleForm.validate((function(e){if(e){var r=t;return setTimeout((function(){r.$emit("next",t.form)}),1200),!0}return console.log("error submit!!"),!1}))},handleCancel:function(){this.previewVisible=!1}}},b=g,w=Object(f["a"])(b,h,d,!1,null,null,null),x=w.exports,_=r("c4c8"),L={data:function(){return{current:0,steps:[{title:"填写商品基本信息"},{title:"填写商品销售信息"}],form:{title:"",desc:"",category:"",c_item:[],tags:[],price:0,price_off:0,unit:"",inventory:0,images:[]}}},components:{BasicInfo:m,SaleInfo:x},created:function(){var t=this,e=this.$route.params.id;e&&_["a"].detail(e).then((function(e){t.form=e}))},methods:{next:function(t){var e=this;this.form=Object(i["a"])(Object(i["a"])({},this.form),{},{form:t}),1===this.current?(this.$route.params.id?_["a"].edit(this.form).then((function(){e.$message.success("修改成功！")})):_["a"].add(this.form).then((function(){e.$message.success("添加成功！")})),this.$router.push({name:"ProductList"})):this.current+=1},prev:function(){this.current-=1}}},k=L,E=(r("14ba"),Object(f["a"])(k,n,o,!1,null,"1a87e436",null));e["default"]=E.exports},"14ba":function(t,e,r){"use strict";r("4214")},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}},4214:function(t,e,r){},"7c7d":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(I){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=E(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",m="executing",h="completed",d={};function v(){}function y(){}function g(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(F([])));x&&x!==r&&n.call(x,i)&&(b=x);var _=g.prototype=v.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,r){var n=f;return function(o,i){if(n===m)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return P()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=$(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?h:p,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}function $(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,$(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function F(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=_.constructor=g,g.constructor=y,y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(_),s(_,c,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=F,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9b18":function(t,e,r){"use strict";r("7c7d")},c405:function(t,e,r){"use strict";var n=r("bb36");e["a"]={list:function(t){return n["a"].get("/category/all",{params:t})}}},c4c8:function(t,e,r){"use strict";var n=r("bb36");e["a"]={list:function(t){return n["a"].get("/products/all",{params:t})},remove:function(t){return n["a"].delete("/products/".concat(t.id))},add:function(t){return n["a"].post("/products/add",t)},detail:function(t){return n["a"].get("/products/".concat(t))},edit:function(t){return n["a"].put("/products/edit",t)}}}}]);
//# sourceMappingURL=chunk-7b14a022.2efac376.js.map