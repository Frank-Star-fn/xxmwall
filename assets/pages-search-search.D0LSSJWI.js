import{R as e,T as a,d as l,o as s,c as t,w as c,a as o,p as r,r as u,g as n,t as i,q as h,i as d,U as p,j as m,b as f,J as y,z as _,H as v,s as b,L as g,e as k,f as w,F as x,K as C,P as S,l as V,h as $}from"./index-D40FVEDX.js";import{_ as T}from"./uni-icons.DE-2uRaD.js";import{_ as B,r as z,c as F,d as N}from"./uni-app.es.N2bCWqVT.js";import{_ as j}from"./uni-load-more.BtEAiNCq.js";import{f as I}from"./apis.Dt0JHHLg.js";const L={en:{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"},"zh-Hans":{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"请输入搜索内容"},"zh-Hant":{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"請輸入搜索內容"}},{t:U}=e(L);const H=B({name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:""},bgColor:{type:String,default:"#F8F8F8"},textColor:{type:String,default:"#000000"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({show:!1,showSync:!1,searchVal:""}),computed:{cancelTextI18n(){return this.cancelText||U("uni-search-bar.cancel")},placeholderText(){return this.placeholder||U("uni-search-bar.placeholder")}},watch:{modelValue:{immediate:!0,handler(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler(e){if(e){if(this.readonly)return;this.show=!0,this.$nextTick((()=>{this.showSync=!0}))}}},searchVal(e,a){this.$emit("input",e),this.$emit("update:modelValue",e)}},methods:{searchClick(){this.readonly||this.show||(this.show=!0,this.$nextTick((()=>{this.showSync=!0})))},clear(){this.searchVal="",this.$nextTick((()=>{this.$emit("clear",{value:""})}))},cancel(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,a())},confirm(){a(),this.$emit("confirm",{value:this.searchVal})},blur(){a(),this.$emit("blur",{value:this.searchVal})},emitFocus(e){this.$emit("focus",e.detail)}}},[["render",function(e,a,f,y,_,v){const b=z(l("uni-icons"),T),g=d,k=p,w=m;return s(),t(g,{class:"uni-searchbar"},{default:c((()=>[o(g,{style:r({borderRadius:f.radius+"px",backgroundColor:f.bgColor}),class:"uni-searchbar__box",onClick:v.searchClick},{default:c((()=>[o(g,{class:"uni-searchbar__box-icon-search"},{default:c((()=>[u(e.$slots,"searchIcon",{},(()=>[o(b,{color:"#c0c4cc",size:"18",type:"search"})]),!0)])),_:3}),_.show||_.searchVal?(s(),t(k,{key:0,focus:_.showSync,disabled:f.readonly,placeholder:v.placeholderText,maxlength:f.maxlength,class:"uni-searchbar__box-search-input","confirm-type":"search",type:"text",modelValue:_.searchVal,"onUpdate:modelValue":a[0]||(a[0]=e=>_.searchVal=e),style:r({color:f.textColor}),onConfirm:v.confirm,onBlur:v.blur,onFocus:v.emitFocus},null,8,["focus","disabled","placeholder","maxlength","modelValue","style","onConfirm","onBlur","onFocus"])):(s(),t(w,{key:1,class:"uni-searchbar__text-placeholder"},{default:c((()=>[n(i(f.placeholder),1)])),_:1})),_.show&&("always"===f.clearButton||"auto"===f.clearButton&&""!==_.searchVal)&&!f.readonly?(s(),t(g,{key:2,class:"uni-searchbar__box-icon-clear",onClick:v.clear},{default:c((()=>[u(e.$slots,"clearIcon",{},(()=>[o(b,{color:"#c0c4cc",size:"20",type:"clear"})]),!0)])),_:3},8,["onClick"])):h("",!0)])),_:3},8,["style","onClick"]),"always"===f.cancelButton||_.show&&"auto"===f.cancelButton?(s(),t(w,{key:0,onClick:v.cancel,class:"uni-searchbar__cancel"},{default:c((()=>[n(i(v.cancelTextI18n),1)])),_:1},8,["onClick"])):h("",!0)])),_:3})}],["__scopeId","data-v-314f636a"]]),P=B({__name:"search",setup(e){const a=f({pageNum:1,pageSize:12,keyword:""}),r=f(y("historySearch")||[]),u=f(["美女","帅哥","宠物","卡通"]),p=f(!1),m=f(!1),B=f([]),L=()=>{C(),r.value=[...new Set([a.value.keyword,...r.value])].slice(0,10),b("historySearch",r.value),J(a.value.keyword),q(),console.log(a.value.keyword)},U=()=>{J()},P=e=>{J(e),L()},R=()=>{S({title:"是否清空历史搜索？",success:e=>{e.confirm&&(_("historySearch"),r.value=[])}})},q=async()=>{try{let e=await I(a.value);B.value=[...B.value,...e.data],b("storgClassList",B.value),a.value.pageSize>e.data.length&&(p.value=!0),0==e.data.length&&0==B.value.length&&(m.value=!0),console.log(e)}finally{g()}},J=(e="")=>{B.value=[],p.value=!1,m.value=!1,a.value={pageNum:1,pageSize:12,keyword:e||""}};return F((()=>{p.value||(a.value.pageNum++,q())})),N((()=>{_("storgClassList",B.value)})),(e,f)=>{const y=z(l("uni-search-bar"),H),_=d,b=z(l("uni-icons"),T),g=v("uv-empty"),C=V,S=$,F=z(l("uni-load-more"),j);return s(),t(_,{class:"searchLayout"},{default:c((()=>[o(_,{class:"search"},{default:c((()=>[o(y,{onConfirm:L,onCancel:U,onClear:U,focus:"",placeholder:"搜索",modelValue:a.value.keyword,"onUpdate:modelValue":f[0]||(f[0]=e=>a.value.keyword=e)},null,8,["modelValue"])])),_:1}),!B.value.length||m.value?(s(),t(_,{key:0},{default:c((()=>[r.value.length?(s(),t(_,{key:0,class:"history"},{default:c((()=>[o(_,{class:"topTitle"},{default:c((()=>[o(_,{class:"text"},{default:c((()=>[n("最近搜索")])),_:1}),o(_,{class:"icon",onClick:R},{default:c((()=>[o(b,{type:"trash",size:"25"})])),_:1})])),_:1}),o(_,{class:"tabs"},{default:c((()=>[(s(!0),k(x,null,w(r.value,(e=>(s(),t(_,{class:"tab",key:e,onClick:a=>P(e)},{default:c((()=>[n(i(e),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):h("",!0),o(_,{class:"recommend"},{default:c((()=>[o(_,{class:"topTitle"},{default:c((()=>[o(_,{class:"text"},{default:c((()=>[n("热门搜索")])),_:1})])),_:1}),o(_,{class:"tabs"},{default:c((()=>[(s(!0),k(x,null,w(u.value,(e=>(s(),t(_,{class:"tab",key:e,onClick:a=>P(e)},{default:c((()=>[n(i(e),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})):h("",!0),m.value?(s(),t(_,{key:1,class:"noSearch"},{default:c((()=>[o(g,{mode:"search",icon:"http://cdn.uviewui.com/uview/empty/search.png"})])),_:1})):(s(),t(_,{key:2},{default:c((()=>[o(_,{class:"list"},{default:c((()=>[(s(!0),k(x,null,w(B.value,(e=>(s(),t(S,{url:`/pages/preview/preview?id=${e._id}`,class:"item",key:e._id},{default:c((()=>[o(C,{src:e.smallPicurl,mode:"aspectFill"},null,8,["src"])])),_:2},1032,["url"])))),128))])),_:1}),p.value||B.value.length?(s(),t(_,{key:0,class:"loadingLayout"},{default:c((()=>[o(F,{status:p.value?"noMore":"loading"},null,8,["status"])])),_:1})):h("",!0)])),_:1}))])),_:1})}}},[["__scopeId","data-v-5333dbfe"]]);export{P as default};
