(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(20),s=a.n(i),l=(a(27),a(9)),r=a(5),o=a(0),m=function(e){var t=e.title;return Object(o.jsxs)("p",{className:"title",children:[" ",t]})};m.defaultProps={title:"Wainwright Tracker"};var u=m,j=a(4),d=a(21),b=a.n(d),h=function(e){var t=e.name,a=Object(n.useState)(!1),c=Object(r.a)(a,2),i=c[0],s=c[1];return Object(o.jsxs)("div",{className:"filter",onClick:function(){s((function(e){return!e}))},children:[Object(o.jsx)(j.c,{className:b()("fa-check",{"show-fa-check":!0===i}),alt:"filter ticked"}),Object(o.jsx)("p",{children:t})]})},g=function(e){var t=e.name,a=Object(n.useState)(["Central","Eastern","Far Eastern","Northern","Southern","Western"]),c=Object(r.a)(a,2),i=c[0],s=(c[1],Object(n.useState)(!1)),l=Object(r.a)(s,2),m=l[0],u=l[1],d=Object(n.useRef)(null),b=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=b.current.getBoundingClientRect().height;d.current.style.height=m?"".concat(e,"px"):"0px"}),[m]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"filter-group",onClick:function(){return u(!m)},children:[Object(o.jsxs)("p",{children:[" ",t," "]}),Object(o.jsx)(j.d,{className:"fa-chevron-down"})]}),Object(o.jsx)("div",{className:"filter-wrapper",ref:d,children:Object(o.jsx)("div",{className:"filter-options",ref:b,children:i.map((function(e,t){return Object(o.jsx)(h,{name:e},t)}))})})]})},f=function(e){var t=e.name,a=Object(n.useState)(!1),c=Object(r.a)(a,2),i=c[0],s=c[1],l=Object(n.useRef)(null),m=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=m.current.getBoundingClientRect().height;l.current.style.height=i?"".concat(e,"px"):"0px"}),[i]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"filter-group",onClick:function(){return s(!i)},children:[Object(o.jsxs)("p",{children:[" ",t," "]}),Object(o.jsx)(j.d,{className:"fa-chevron-down"})]}),Object(o.jsx)("div",{className:"filter-wrapper-complete",ref:l,children:Object(o.jsxs)("div",{className:"filter-options-complete",ref:m,children:[Object(o.jsx)(h,{name:"Complete"}),Object(o.jsx)(h,{name:"Not Complete"})]})})]})},p=function(e){var t=e.mountains,a=e.setData,n=e.activeFilter,c=e.setActiveFilter;return Object(o.jsx)("div",{className:"btn-container",onClick:function(){var e=document.querySelectorAll(".filter"),i=[];e.forEach((function(e){var t=e.innerText;e.firstElementChild.classList.contains("show-fa-check")&&(i.push(t),console.log(i))}));var s=t.filter((function(e){return 0===i.length||i.includes("Complete")&&i.includes("Not Complete")?t:i.includes(e.region)&&i.includes("Not Complete")?(console.log(e),e):i.includes(e.region)?e.region:i.includes("Complete")?!0===e.complete:i.includes("Not Complete")?!1===e.complete:void 0}));a(s),c(!n),document.querySelectorAll("section").forEach((function(e){e.classList.remove("opaque-background")}))},children:Object(o.jsx)("button",{className:"done-btn",alt:"done button",children:"Done"})})},O=function(e){var t=e.mountains,a=e.setData,n=e.activeFilter,c=e.setActiveFilter;return Object(o.jsxs)("div",{className:"filter-container ".concat(n?"show-filter-container":""),children:[Object(o.jsx)(g,{name:"Region"}),Object(o.jsx)(f,{name:"Completion Status"}),Object(o.jsx)(p,{mountains:t,setData:a,activeFilter:n,setActiveFilter:c})]})},v=function(e){var t=e.mountains,a=e.setData;return Object(o.jsxs)("form",{className:"search-form",children:[Object(o.jsx)(j.g,{className:"fa-search"}),Object(o.jsx)("input",{onKeyUp:function(e){var n=e.target.value.toLowerCase();console.log(n),console.log(n.length);var c=t.filter((function(e){return console.log(n.length),n.length>0?e.name.toLowerCase().includes(n):t}));a(c)},className:"input-field search",alt:"search field",type:"text",placeholder:"Find Wainwright",name:"search",minLength:"1",required:""})]})},x=function(){return Object(o.jsx)(j.a,{onClick:function(){window.history.back()},alt:"back to homepage",className:"fa-arrow-left back-btn"})},N=function(e){var t=e.sort;return Object(o.jsx)("option",{value:t,alt:t,children:t})},T=a(2),k=function(e){var t=e.mountains,a=e.setData,c=e.activeFilter,i=e.setActiveFilter,s=e.searchString,m=e.setSearchString,d=Object(T.f)().pathname,b="/lister"===d,h=document.querySelectorAll("section"),g=function(){"/lister"===d&&i(!1)};window.addEventListener("scroll",g),h.forEach((function(e){e.addEventListener("click",g)}));var f=Object(n.useState)(["A-Z","Z-A","Height: High - Low","Height: Low - High","Difficulty: High - Low","Difficulty: Low - High"]),p=Object(r.a)(f,2),k=p[0];p[1];return Object(o.jsx)("header",{className:"header",children:Object(o.jsxs)("nav",{className:"nav",children:[Object(o.jsxs)("div",{className:"nav-header",children:[Object(o.jsx)(x,{}),Object(o.jsx)(u,{className:"title"}),b&&Object(o.jsx)("button",{className:"nav-toggle menu-btn",alt:"nav toggle",children:Object(o.jsx)(j.b,{className:"fa-bars",onClick:function(){return i(!c)}})})]}),Object(o.jsx)(O,{mountains:t,setData:a,activeFilter:c,setActiveFilter:i}),b&&Object(o.jsxs)("div",{className:"second-nav",children:[Object(o.jsx)(v,{mountains:t,setData:a,searchString:s,setSearchString:m}),Object(o.jsxs)("form",{className:"sort-form",children:[Object(o.jsx)("label",{className:"label",htmlFor:"cars",children:"Sort"}),Object(o.jsx)("select",{name:"sort",className:"sort",onChange:function(e){return function(e){var n=[];switch(e){case"A-Z":n=t.sort((function(e,t){return e.name>t.name?(console.log(e.name,t.name),1):-1}));break;case"Z-A":n=t.sort((function(e,t){return e.name>t.name?(console.log(e.name,t.name),-1):1}));break;case"Height: High - Low":n=t.sort((function(e,t){return e.height>t.height?-1:1}));break;case"Height: Low - High":n=t.sort((function(e,t){return e.height>t.height?1:-1}));break;case"Difficulty: High - Low":n=t.sort((function(e,t){return e.difficulty>t.difficulty})),console.log(n);break;case"Difficulty: Low - High":n=t.sort((function(e,t){return e.difficulty>t.difficulty?1:-1}))}a(Object(l.a)(n))}(e.target.value)},children:k.map((function(e){return Object(o.jsx)(N,{sort:e},e)}))})]})]})]})})},w=function(){var e=(new Date).getFullYear();return Object(o.jsxs)("div",{children:[Object(o.jsxs)("footer",{class:"footer",children:["JM Development Inc\xa9.",Object(o.jsxs)("span",{class:"date",children:[e," "]})," "]}),Object(o.jsx)("br",{})]})},C=[{id:0,name:"Arnison Crag",image:["/Images/arnison.jpg","/Images/arnison 2.jpg","/Images/arnison 3.jpg"],imageNumber:0,region:"Eastern",height:1424,averageTime:"2 Hours",difficulty:"2 / 5",complete:!1,climbers:"",date:"",startTime:"",ascentTime:"",summitTime:"",views:"",descentTime:"",endTime:"",totalWalkTime:""},{id:1,name:"Blencathra",image:["/Images/blencathra.jpg","/Images/blencathra 2.jpg","/Images/blencathra 3.jpg"],imageNumber:0,region:"Northern",height:2847,averageTime:"3-4 Hours",difficulty:"4.5 / 5",complete:!1,climbers:"",date:"",startTime:"",ascentTime:"",summitTime:"",views:"",descentTime:"",endTime:"",totalWalkTime:""},{id:2,name:"Scafell Pike",image:["/Images/scafell-pike.jpg","/Images/scafell-pike 2.jpg","/Images/scafell-pike 3.jpg"],imageNumber:0,region:"Southern",height:3210,averageTime:"4-5 Hours",difficulty:"5 / 5",complete:!1,climbers:"",date:"",startTime:"",ascentTime:"",summitTime:"",views:"",descentTime:"",endTime:"",totalWalkTime:""},{id:3,name:"Yewbarrow",image:["/Images/yewbarrow.jpg","/Images/yewbarrow 2.jpg","/Images/yewbarrow 3.jpg"],imageNumber:0,region:"Western",height:2058,averageTime:"2-3 Hours",difficulty:"3.5 / 5",complete:!1,climbers:"",date:"",startTime:"",ascentTime:"",summitTime:"",views:"",descentTime:"",endTime:"",totalWalkTime:""}],y=a(10),S=function(e){var t=e.mountains,a=e.setData,n=e.handleLeftClick,c=e.handleRightClick,i=e.activeFilter,s=(e.setActiveFilter,e.handleClickThrough);if(!t)return null;return t.map((function(e,r){return Object(o.jsxs)("section",{className:e.name,id:e.name,children:[Object(o.jsxs)("div",{className:"mountain-border ".concat(i&&"opaque-background","\n        ").concat(!0===e.complete?"show-mountain-border":""),children:[Object(o.jsx)("div",{className:"name",children:e.name}),Object(o.jsxs)("div",{className:"image-container",children:[Object(o.jsx)(j.e,{id:"".concat(e.name,"-left"),className:"fas fa-angle-left",onClick:function(){return n(r)}}),Object(o.jsx)("img",{src:e.image[e.imageNumber],id:"".concat(e.name,"-image"),className:"mountain-image",alt:" ".concat(e.name)}),Object(o.jsx)(j.f,{id:"".concat(e.name,"-right"),className:"fas fa-angle-right",onClick:function(){return c(r)}})]}),Object(o.jsxs)("div",{className:"mountain-info",children:[Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{className:"mountain-region",children:["Region: ",e.region]}),Object(o.jsxs)("li",{className:"height",children:["Height (ft): ",e.height]}),Object(o.jsxs)("li",{className:"average-time",children:["Average Walk Time: ",e.averagetime]}),Object(o.jsxs)("li",{className:"difficulty stars",children:["Difficulty: ",e.difficulty]})]}),Object(o.jsx)("div",{className:e.complete?"incomplete btn":"complete btn",onClick:function(){return function(e){var n=t;n[e].complete=!n[e].complete,a(Object(l.a)(n))}(r)},children:e.complete?"Mark as Incomplete":"Mark as Complete"}),Object(o.jsx)(y.b,{to:"/pdp",className:"more-info btn",onClick:function(){return s(r)},children:"Add More Info"})]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("hr",{className:"seperator"})]},e.id)}))},D=function(){return Object(o.jsxs)("div",{class:"container container-center",children:[Object(o.jsx)("img",{src:"/Images/homepage mobile.jpg",className:"image",alt:"mountains"}),Object(o.jsxs)("p",{className:"homepage-title",children:["Wainwright",Object(o.jsx)("br",{})," Tracker"]}),Object(o.jsx)(y.b,{to:"/lister",className:"homepage-btn",children:"Get Tracking"})]})},F=function(e){var t=e.mountains,a=e.setData,n=e.selectedMountain,c=t.filter((function(e){return e.id===n}))[0];console.log(c);var i=function(e,t){switch(t){case"climbers":a(c.climbers=e.target.value);break;case"date":a(c.date=e.target.value);break;case"startTime":a(c.startTime=e.target.value);break;case"ascentTime":a(c.ascentTime=e.target.value),s();break;case"summitTime":a(c.summitTime=e.target.value);break;case"descentTime":a(c.descentTime=e.target.value),r(),m();break;case"finishTime":a(c.endTime=e.target.value);break;case"totalWalkTime":a(c.totalWalkTime=e.target.value)}},s=function(){var e=c.startTime,t=c.ascentTime;if(null!==e&&null!==t){var n=function(e){var t=e.split(":");return 3600*t[0]+60*t[1]}(e)+function(e){var t=e.split(":");return 3600*t[0]+60*t[1]}(t),i=new Date(null);i.setSeconds(n);var s=i.toISOString().substr(11,8).slice(0,5)}a(c.summitTime=s)},r=function(e){var t=c.summitTime,n=c.descentTime;if(null!==t&&null!==n){var i=function(e){var t=e.split(":");return 3600*t[0]+60*t[1]}(t)+function(e){var t=e.split(":");return 3600*t[0]+60*t[1]}(n),s=new Date(null);s.setSeconds(i);var l=s.toISOString().substr(11,8)}a(c.endTime=l)},m=function(e){var t=c.ascentTime,n=c.descentTime;if(null!==t&&null!==n){var i=function(e){var a=t.split(":");return 3600*a[0]+60*a[1]}()+function(e){var t=e.split(":");return 3600*t[0]+60*t[1]}(n),s=new Date(null);s.setSeconds(i);var l=s.toISOString().substr(11,8)}a(c.totalWalkTime=l)};return Object(o.jsx)("div",{className:"main-section",children:Object(o.jsx)("section",{className:"".concat(c.name),children:Object(o.jsxs)("div",{className:"mountain-border",children:[Object(o.jsx)("div",{className:"name",children:c.name}),Object(o.jsxs)("div",{className:"image-container",children:[Object(o.jsx)(j.e,{className:"fas fa-angle-left"}),Object(o.jsx)("img",{src:c.image[0],className:"mountain-image",alt:c.name}),Object(o.jsx)(j.f,{className:"fas fa-angle-right"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"mountain-info",children:Object(o.jsxs)("form",{className:"pdp-form",children:[Object(o.jsxs)("div",{className:"climbers",children:[Object(o.jsx)("label",{className:"centered-label pdp-label",children:"Climbers"}),Object(o.jsx)("div",{children:Object(o.jsx)("textarea",{className:"input climber",type:"text",placeholder:"Who climbed this mountain?",onChange:function(e){return i(e,"climbers")}})})]}),Object(o.jsxs)("div",{className:"pdp-container",children:[Object(o.jsxs)("div",{className:"climbDate",children:[Object(o.jsx)("label",{className:"pdp-label",children:"Date"}),Object(o.jsx)("input",{className:"input climb-date",type:"date",placeholder:"Date Completed",onChange:function(e){return i(e,"date")}})]}),Object(o.jsxs)("div",{className:"start",children:[Object(o.jsx)("label",{className:"pdp-label",children:"Start Time"}),Object(o.jsx)("input",{className:"input start-time",type:"time",placeholder:"What time did you start?",onChange:function(e){return i(e,"startTime")}})]})]}),Object(o.jsxs)("div",{className:"pdp-container",children:[Object(o.jsxs)("div",{className:"ascent",children:[Object(o.jsx)("label",{className:"pdp-label",children:"Ascent Duration"}),Object(o.jsx)("input",{className:"input ascent-duration",type:"time",placeholder:"How long did the ascent take?",onChange:function(e){return i(e,"ascentTime")}})]}),Object(o.jsxs)("div",{className:"summit",children:[Object(o.jsx)("label",{className:"pdp-label",children:"Summit Time"}),Object(o.jsx)("input",{className:"input summit-time",type:"time",placeholder:"How long did the ascent take?",onChange:function(e){return i(e,"summitTime")},value:s})]})]}),Object(o.jsxs)("div",{className:"views",children:[Object(o.jsx)("label",{className:"centered-label pdp-label",children:"Views"}),Object(o.jsx)("div",{children:Object(o.jsx)("textarea",{className:"input view",type:"text",placeholder:"What other peaks can you see?",onChange:function(e){i(e,"views")}})})]}),Object(o.jsxs)("div",{className:"pdp-container",children:[Object(o.jsxs)("div",{className:"descent",children:[Object(o.jsx)("label",{className:"pdp-label",children:"Decent Duration"}),Object(o.jsx)("input",{className:"input descent-duration",type:"time",placeholder:"How long did the ascent take?",onChange:function(e){i(e,"descentTime")}})]}),Object(o.jsxs)("div",{className:"finish",children:[Object(o.jsx)("label",{className:"pdp-label",children:"Finish Time"}),Object(o.jsx)("input",{className:"input finish-time",type:"time",placeholder:"How long did the ascent take?",onChange:function(e){i(e,"endTime")}})]})]}),Object(o.jsxs)("div",{className:"total",children:[Object(o.jsx)("label",{className:"pdp-label",children:"Total Walk Time"}),Object(o.jsx)("input",{className:"input total-time",type:"time",placeholder:"How long did the ascent take?",onChange:function(e){i(e,"totalWalkTime")}})]}),Object(o.jsx)("div",{className:c.complete?"incomplete btn":"complete btn",onClick:function(){return function(){var e=t;c.complete=!c.complete,a(Object(l.a)(e))}()},children:c.complete?"Mark as Incomplete":"Mark as Complete"})]})})]})})})};var H=function(){var e=Object(n.useState)(C),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(C),s=Object(r.a)(i,2),m=s[0],u=s[1],j=Object(n.useState)(!1),d=Object(r.a)(j,2),b=d[0],h=d[1],g=Object(n.useState)(0),f=Object(r.a)(g,2),p=f[0],O=f[1];return Object(o.jsx)(y.a,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(T.c,{children:[Object(o.jsx)(T.a,{exact:!0,path:"/",children:Object(o.jsx)(D,{})}),Object(o.jsxs)(T.a,{exact:!0,path:"/lister",children:[Object(o.jsx)(k,{mountains:a,setData:u,setActiveFilter:h,activeFilter:b}),Object(o.jsx)(S,{mountains:m,setData:u,handleLeftClick:function(e){var t=a[e];if(console.log(t.id,e),t.id===e&&t.imageNumber>0){var n=a;n[e].imageNumber=n[e].imageNumber-1,console.log(n[e].image),c(Object(l.a)(n)),console.log(n[e].imageNumber)}else{var i=a;i[e].imageNumber=a[e].image.length-1,c(Object(l.a)(i))}},handleRightClick:function(e){var t=a[e];if(console.log(t.id,e),t.id===e&&t.imageNumber<t.image.length-1){var n=a;n[e].imageNumber=n[e].imageNumber+1,console.log(n[e].image),c(Object(l.a)(n)),console.log(n[e].imageNumber)}else{var i=a;i[e].imageNumber=i[e].imageNumber=0,c(Object(l.a)(i))}},setActiveFilter:h,activeFilter:b,handleClickThrough:function(e){O(e)}}),Object(o.jsx)(w,{})]}),Object(o.jsxs)(T.a,{exact:!0,path:"/pdp",children:[Object(o.jsx)(k,{}),Object(o.jsx)(F,{mountains:a,setData:u,selectedMountain:p,setActiveFilter:h}),Object(o.jsx)(w,{})]})]})})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(H,{})}),document.getElementById("root")),I()}},[[34,1,2]]]);
//# sourceMappingURL=main.9b28827d.chunk.js.map