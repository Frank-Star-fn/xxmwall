import{d as s,o as e,c as a,w as t,a as l,p as c,u as i,g as o,t as r,i as u,j as m,h as p,q as n,l as d}from"./index-D40FVEDX.js";import{_ as f}from"./uni-icons.DE-2uRaD.js";import{_,r as y}from"./uni-app.es.N2bCWqVT.js";import{g as h,a as g,b as x}from"./system.BTZZYARB.js";const b=_({__name:"custom-nav-bar",props:{title:{type:String,default:"壁纸"}},setup:n=>(d,_)=>{const b=u,j=y(s("uni-icons"),f),M=m,k=p;return e(),a(b,{class:"layout"},{default:t((()=>[l(b,{class:"navbar"},{default:t((()=>[l(b,{class:"statusBar",style:c({height:i(h)()+"px"})},null,8,["style"]),l(b,{class:"titleBar",style:c({height:i(g)()+"px"})},{default:t((()=>[l(b,{class:"title"},{default:t((()=>[o(r(n.title),1)])),_:1}),l(k,{url:"/pages/search/search",class:"search"},{default:t((()=>[l(j,{class:"icon",type:"search",color:"#888",size:"18"}),l(M,{class:"text"},{default:t((()=>[o("搜索")])),_:1})])),_:1})])),_:1},8,["style"])])),_:1}),l(b,{class:"fill",style:c({height:i(x)()+"px"})},null,8,["style"])])),_:1})}},[["__scopeId","data-v-59c63687"]]);function j(s){const e=(new Date).getTime()-s;return e<6e4?"1分钟内":e<36e5?Math.floor(e/6e4)+"分钟":e<864e5?Math.floor(e/36e5)+"小时":e<2592e6?Math.floor(e/864e5)+"天":e<7776e6?Math.floor(e/2592e6)+"月":null}const M=_({__name:"theme-item",props:{isMore:{type:Boolean,default:!1},item:{type:Object,default:()=>({name:"默认名称",picurl:"../../common/images/classify1.jpg",updateTime:Date.now()-18e6})}},setup:s=>(c,m)=>{const f=d,_=u,y=p;return e(),a(_,{class:"themeItem"},{default:t((()=>[s.isMore?n("",!0):(e(),a(y,{key:0,url:"/pages/classlist/classlist?id="+s.item._id+"&name="+s.item.name,class:"box"},{default:t((()=>[l(f,{class:"pic",src:s.item.picurl,mode:"aspectFill"},null,8,["src"]),l(_,{class:"mask"},{default:t((()=>[o(r(s.item.name),1)])),_:1}),i(j)(s.item.updateTime)?(e(),a(_,{key:0,class:"tab"},{default:t((()=>[o(r(i(j)(s.item.updateTime))+"前更新",1)])),_:1})):n("",!0)])),_:1},8,["url"])),s.isMore?(e(),a(y,{key:1,url:"/pages/classify/classify","open-type":"reLaunch",class:"box more"},{default:t((()=>[l(f,{class:"pic",src:"/xxmwall/assets/more-CWPU-n7z.jpg",mode:"aspectFill"}),l(_,{class:"mask"},{default:t((()=>[l(_,{class:"icon"},{default:t((()=>[o(" ... ")])),_:1}),l(_,{class:"text"},{default:t((()=>[o(" 更多 ")])),_:1})])),_:1})])),_:1})):n("",!0)])),_:1})}},[["__scopeId","data-v-6a2961da"]]);export{b as _,M as a};