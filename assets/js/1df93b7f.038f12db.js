"use strict";(self.webpackChunkamit_sharma_website=self.webpackChunkamit_sharma_website||[]).push([[3237],{3384:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const r="decodingText_BSeC",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>[]";function o(e){let{text:t,delay:n=800,duration:o=3e3,className:l}=e;const[c,s]=(0,a.useState)(t),[m,u]=(0,a.useState)(!1),[p,d]=(0,a.useState)([]);return(0,a.useEffect)((()=>{let e;e=setInterval((()=>{s(t.split("").map((()=>i.charAt(Math.floor(Math.random()*i.length)))).join(""))}),100);const a=setTimeout((()=>{clearInterval(e),u(!0)}),n);return()=>{clearTimeout(a),clearInterval(e)}}),[t,n]),(0,a.useEffect)((()=>{if(!m)return void d(Array.from({length:t.length},((e,t)=>t)));let e,n=0;const a=2*t.length;return e=setInterval((()=>{s((a=>{const r=Math.floor(n/6);if(r>=t.length)return clearInterval(e),d([]),t;d((e=>e.filter((e=>e>=r))));const o=t.split("").map(((e,t)=>{if(t<r)return e;if(t===r){if(n%6==5)return e;return i.charAt(Math.floor(Math.random()*i.length))}return a[t]||i.charAt(Math.floor(Math.random()*i.length))})).join("");return n++,o}))}),o/a),()=>clearInterval(e)}),[t,m,o]),a.createElement("span",{className:`${r} ${l||""}`,"data-original":t,"data-decoding":p.length>0,style:{width:t.length+"ch"}},c.split("").map(((e,t)=>a.createElement("span",{key:t,style:{color:p.includes(t)?"var(--ifm-color-primary-lighter)":"var(--ifm-color-primary-darkest)",transition:"all 0.3s ease"}},e))))}},156:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7294),r=n(9960),i=n(6775);const o="header_ZmnY",l="headerNav_jxTB",c="menuItems_JUva",s="externalIcon_gHdc",m="menuButton_hfRj",u="active_Dx2U",p="socialDropdown_kbG7",d="emoji_BDtN",h="activeLink_YXBC",f="socialDropdownButton_ZZW_",v="socialDropdownContent_qUHz",y="socialLink_Ivke",E="socialIcon_tpgU";var g=n(3384);const w="monkeyContainer_i5lh",x="rope_rlaN",b="monkey_Urx9";function N(){return a.createElement("div",{className:w},a.createElement("div",{className:x}),a.createElement("div",{className:b},"\ud83d\udc12"))}const _=[{name:"LinkedIn",url:"https://www.linkedin.com/in/amit-sharma-071654158/",icon:a.createElement("svg",{className:E,viewBox:"0 0 24 24"},a.createElement("path",{fill:"currentColor",d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}))},{name:"GitHub",url:"https://github.com/amitsharma2748",icon:a.createElement("svg",{className:E,viewBox:"0 0 24 24"},a.createElement("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"}))},{name:"Email",url:"mailto:sharma670amit@gmail.com",icon:a.createElement("svg",{className:E,viewBox:"0 0 24 24"},a.createElement("path",{fill:"currentColor",d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}))}];function k(){const[e,t]=(0,a.useState)(!1),[n,E]=(0,a.useState)(!1),w=(0,i.TH)(),x="/"===w.pathname,[b,k]=(0,a.useState)(!1),S=(0,a.useRef)(null);(0,a.useEffect)((()=>{function e(e){S.current&&!S.current.contains(e.target)&&E(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const C=e=>{e.preventDefault();navigator.clipboard.writeText("sharma670amit@gmail.com").then((()=>{k(!0),setTimeout((()=>k(!1)),2e3)}))};return a.createElement("header",{className:o},a.createElement(N,null),a.createElement("nav",{className:l},a.createElement("button",{className:`${m} ${e?u:""}`,onClick:()=>t(!e),"aria-label":"Toggle menu"},a.createElement("span",null),a.createElement("span",null),a.createElement("span",null)),a.createElement("div",{className:`${c} ${e?u:""}`},[{title:"Home",to:"/",emoji:"\ud83c\udfe0"},{title:"Resume",to:"https://www.simpleresu.me",emoji:""}].map(((e,n)=>{return a.createElement(r.Z,{key:e.to,to:e.to,onClick:()=>t(!1),className:(i=e.to,"/"===i&&"/"===w.pathname||"/"!==i&&w.pathname.startsWith(i)?h:""),target:e.to.startsWith("http")?"_blank":void 0,rel:e.to.startsWith("http")?"noopener noreferrer":void 0},a.createElement("span",{className:d},e.emoji,"\xa0"),x?a.createElement(g.Z,{text:e.title,delay:800+200*n,duration:2e3}):e.title,e.to.startsWith("http")&&a.createElement("svg",{className:s,viewBox:"0 0 24 24",width:"14",height:"14"},a.createElement("path",{fill:"currentColor",d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"})));var i}))),a.createElement("div",{className:p,ref:S},a.createElement("button",{className:f,onClick:()=>E(!n),"aria-label":"Toggle social links"},"Connect With Me"),n&&a.createElement("div",{className:v},_.map((e=>a.createElement("a",{key:e.name,href:e.url,onClick:"Email"===e.name?C:void 0,target:"Email"!==e.name?"_blank":void 0,rel:"Email"!==e.name?"noopener noreferrer":void 0,className:y},e.icon,a.createElement("span",null,"Email"===e.name?b?"Copied!":"Copy Email":e.name))))))))}},680:(e,t,n)=>{n.d(t,{f2:()=>g,Bx:()=>w,J6:()=>E});var a=n(7294);const r="shimmer_uG4f",i="mt_sw9B",o="projectCard_pisH",l="imageShimmer_kc3N",c="content_Qb91",s="techStack_bXS7",m="experienceCard_eNU7",u="header_XV9X",p="achievements_dXrf",d="profile_lb3B",h="imageContainer_EuTg",f="profileImageShimmer_sURl",v="socialLinks_rOWA",y=e=>{let{width:t="100%",height:n="20px",borderRadius:i="4px",className:o=""}=e;return a.createElement("div",{className:`${r} ${o}`,style:{width:t,height:n,borderRadius:i}})},E=()=>a.createElement("div",{className:o},a.createElement("div",{className:l}),a.createElement("div",{className:c},a.createElement(y,{height:"28px",width:"70%"}),a.createElement(y,{height:"60px",className:i}),a.createElement("div",{className:s},a.createElement(y,{width:"60px",height:"24px",borderRadius:"12px"}),a.createElement(y,{width:"80px",height:"24px",borderRadius:"12px"}),a.createElement(y,{width:"70px",height:"24px",borderRadius:"12px"})))),g=()=>a.createElement("div",{className:m},a.createElement("div",{className:u},a.createElement(y,{width:"120px",height:"24px"}),a.createElement(y,{width:"100px",height:"24px"})),a.createElement(y,{width:"150px",height:"20px",className:i}),a.createElement(y,{height:"40px",className:i}),a.createElement("div",{className:p},a.createElement(y,{height:"16px",className:i}),a.createElement(y,{height:"16px",className:i}),a.createElement(y,{height:"16px",className:i}))),w=()=>a.createElement("div",{className:d},a.createElement("div",{className:h},a.createElement("div",{className:f})),a.createElement("div",{className:c},a.createElement(y,{width:"150px",height:"24px"}),a.createElement(y,{width:"300px",height:"48px",className:i}),a.createElement(y,{width:"200px",height:"32px",className:i}),a.createElement(y,{height:"80px",className:i}),a.createElement("div",{className:v},a.createElement(y,{width:"120px",height:"36px",borderRadius:"6px"}),a.createElement(y,{width:"120px",height:"36px",borderRadius:"6px"}),a.createElement(y,{width:"120px",height:"36px",borderRadius:"6px"}))))},2002:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(6775),i=n(1190),o=n(8716);const l="routeContainer_IEe8";function c(e){let{children:t}=e;const n=(0,r.TH)();return a.createElement(i.M,{mode:"wait"},a.createElement(o.E.div,{key:n.pathname,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:l},t))}},831:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(5742);function i(e){let{title:t="Amit Sharma - Full Stack Developer",description:n="Amit Sharma is a Full Stack Developer with expertise in React, Node.js, and Cloud Technologies. View my projects, read my blog posts, and learn about my mentorship program.",keywords:i=["Amit Sharma","Full Stack Developer","React Developer","Node.js Developer","Software Engineer","Web Developer","JavaScript Developer","TypeScript","Cloud Technologies","Software Development","Technical Mentor"],image:o="https://avatars.githubusercontent.com/u/97985931?s=30&v=4",url:l="https://amitsharma2748.github.io"}=e;const c=n,s=t,m=i.join(", ");return a.createElement(r.Z,null,a.createElement("title",null,s),a.createElement("meta",{name:"description",content:c}),a.createElement("meta",{name:"keywords",content:m}),a.createElement("meta",{name:"google-site-verification",content:"HjOa6niqGyhU60_dz9tIj_VyhCWwFc5D5ZcUR2aMdtY"}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:url",content:l}),a.createElement("meta",{property:"og:title",content:s}),a.createElement("meta",{property:"og:description",content:c}),a.createElement("meta",{property:"og:image",content:o}),a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{property:"twitter:url",content:l}),a.createElement("meta",{property:"twitter:title",content:s}),a.createElement("meta",{property:"twitter:description",content:c}),a.createElement("meta",{property:"twitter:image",content:o}),a.createElement("meta",{name:"author",content:"Amit Sharma"}),a.createElement("link",{rel:"canonical",href:l}),a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"https://schema.org","@type":"Person",name:"Amit Sharma",url:l,image:o,sameAs:["https://www.linkedin.com/in/amit-sharma-071654158/","https://github.com/amitsharma2748"],jobTitle:"Full Stack Developer",worksFor:{"@type":"Organization",name:"Self-Employed"}})))}},4259:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var a=n(7294),r=n(2263),i=n(215),o=n(156),l=n(2002);function c(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function l(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))}function s(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}function m(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)o.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return o}function p(e,t,n){if(n||2===arguments.length)for(var a,r=0,i=t.length;r<i;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function d(e,t,n,a){for(var r=[],i=4;i<arguments.length;i++)r[i-4]=arguments[i];return c(this,void 0,void 0,(function(){var i,o,l,c,d,v;return s(this,(function(s){switch(s.label){case 0:s.trys.push([0,12,13,14]),i=m(r),o=i.next(),s.label=1;case 1:if(o.done)return[3,11];switch(typeof(l=o.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,h(e,l,t,n,a)];case 3:return s.sent(),[3,10];case 4:return[4,f(l)];case 5:return s.sent(),[3,10];case 6:return[4,l.apply(void 0,p([e,t,n,a],u(r),!1))];case 7:return s.sent(),[3,10];case 8:return[4,l];case 9:s.sent(),s.label=10;case 10:return o=i.next(),[3,1];case 11:return[3,14];case 12:return c=s.sent(),d={error:c},[3,14];case 13:try{o&&!o.done&&(v=i.return)&&v.call(i)}finally{if(d)throw d.error}return[7];case 14:return[2]}}))}))}function h(e,t,n,a,r){return c(this,void 0,void 0,(function(){var i;return s(this,(function(o){switch(o.label){case 0:return i=function(e,t){var n=u(t).slice(0);return p(p([],u(e),!1),[NaN],!1).findIndex((function(e,t){return n[t]!==e}))}(e.textContent,t),[4,v(e,p(p([],u(E(e.textContent,i)),!1),u(y(t,i)),!1),n,a,r)];case 1:return o.sent(),[2]}}))}))}function f(e){return c(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function v(e,t,n,a,r){return c(this,void 0,void 0,(function(){var i,o,l,c,u,p,d,h,v,y,E,g;return s(this,(function(w){switch(w.label){case 0:if(i=t,r){for(o=0,l=1;l<t.length;l++)if(c=t[l-1],(u=t[l]).length>c.length||""===u){o=l;break}i=t.slice(o,t.length)}w.label=1;case 1:w.trys.push([1,6,7,8]),p=m(function(e){var t,n,a,r,i,o,l;return s(this,(function(c){switch(c.label){case 0:t=function(e){return s(this,(function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame((function(){return t.textContent=e}))},opCode:function(t){return""===e||t.textContent.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}}))},c.label=1;case 1:c.trys.push([1,6,7,8]),n=m(e),a=n.next(),c.label=2;case 2:return a.done?[3,5]:(r=a.value,[5,t(r)]);case 3:c.sent(),c.label=4;case 4:return a=n.next(),[3,2];case 5:return[3,8];case 6:return i=c.sent(),o={error:i},[3,8];case 7:try{a&&!a.done&&(l=n.return)&&l.call(n)}finally{if(o)throw o.error}return[7];case 8:return[2]}}))}(i)),d=p.next(),w.label=2;case 2:return d.done?[3,5]:(h=d.value,v="WRITING"===h.opCode(e)?n+n*(Math.random()-.5):a+a*(Math.random()-.5),h.op(e),[4,f(v)]);case 3:w.sent(),w.label=4;case 4:return d=p.next(),[3,2];case 5:return[3,8];case 6:return y=w.sent(),E={error:y},[3,8];case 7:try{d&&!d.done&&(g=p.return)&&g.call(p)}finally{if(E)throw E.error}return[7];case 8:return[2]}}))}))}function y(e,t,n){var a=u(e).slice(0);return void 0===t&&(t=0),void 0===n&&(n=a.length),s(this,(function(e){switch(e.label){case 0:return t<n?[4,a.slice(0,++t).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}function E(e,t,n){var a=u(e).slice(0);return void 0===t&&(t=0),void 0===n&&(n=a.length),s(this,(function(e){switch(e.label){case 0:return n>t?[4,a.slice(0,--n).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var g=(0,a.memo)((function(e){var t=e.sequence,n=e.repeat,r=e.className,i=e.speed,o=void 0===i?40:i,l=e.deletionSpeed,c=e.omitDeletionAnimation,s=void 0!==c&&c,m=e.wrapper,h=void 0===m?"div":m,f=e.cursor,v=void 0===f||f,y=e.style;o=Math.abs(o-100),l=l?Math.abs(l-100):o;var E,g,w,x,b,N,_=(0,a.useRef)(null),k="index-module_type__E-SaG";E=r&&r.length>0?v?"".concat(k," ").concat(r):r:v?k:"",g=(0,a.useRef)((function(){return n===1/0?d.apply(void 0,p(p([_.current,o,l,s],u(t),!1),[d],!1)):"number"==typeof n?d.apply(void 0,p([_.current,o,l,s],u(Array(1+n).fill(t).flat()),!1)):d.apply(void 0,p([_.current,o,l,s],u(t),!1)),function(){_.current}})),w=(0,a.useRef)(),x=(0,a.useRef)(!1),b=(0,a.useRef)(!1),N=u((0,a.useState)(0),2)[1],x.current&&(b.current=!0),(0,a.useEffect)((function(){return x.current||(w.current=g.current(),x.current=!0),N((function(e){return e+1})),function(){b.current&&w.current&&w.current()}}),[]);var S=h;return a.createElement(S,{style:y,className:E,ref:_})}),(function(e,t){return!0})),w=n(8716),x=n(1190),b=n(624);const N={header:"header_gB2a",headerNav:"headerNav_roqY",main:"main_iUjq",mainContainer:"mainContainer_mA9m",heroSection:"heroSection_aWOV",profileSection:"profileSection_YF3e",fadeIn:"fadeIn_sitH",profileImage:"profileImage_Ptsl",headerContent:"headerContent_l0K_",greeting:"greeting_hICs",name:"name_G8Wb",roleWrapper:"roleWrapper_PdXF",rolePrefix:"rolePrefix_sKyN",typeAnimation:"typeAnimation_Rfre",role:"role_m3Uy",company:"company_Zi5_",brief:"brief_Kje_",briefList:"briefList_RSLj",expediumLink:"expediumLink_Bdpw",socialLinks:"socialLinks_AWWq",socialLink:"socialLink_Bckt",linkedinLink:"linkedinLink_H1lv",twitterLink:"twitterLink_intX",githubLink:"githubLink_NX_R",socialIcon:"socialIcon_gJkS",projectLink:"projectLink_oLAN",experienceSection:"experienceSection_jul3",timelineContainer:"timelineContainer_yeUs",timelineItem:"timelineItem_qHBm",timelineDot:"timelineDot_K8ym",dot:"dot_K917",timelineContent:"timelineContent_Rlvm",borderFlow:"borderFlow_OvNd",companyHeader:"companyHeader_J1Y5",period:"period_LfsP",companyFavicon:"companyFavicon_LIbS",companyName:"companyName_Q9MD",sectionTitle:"sectionTitle_Ut5p",nameText:"nameText_yFMZ"};var _=n(680),k=n(3384),S=n(831);const C=[{name:"LinkedIn",url:"https://www.linkedin.com/in/amit-sharma-071654158/",icon:a.createElement("svg",{className:N.socialIcon,viewBox:"0 0 24 24"},a.createElement("path",{fill:"currentColor",d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"})),className:N.linkedinLink},{name:"GitHub",url:"https://github.com/amitsharma2748",icon:a.createElement("svg",{className:N.socialIcon,viewBox:"0 0 24 24"},a.createElement("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"})),className:N.githubLink}],I=[{company:"Expedium",favicon:"https://in2-files.zohopublic.in/public/SalesIQ/download/d_60021768284_company_1705929304498_60021768284?x-cli-msg=%7B%22x-siq-module%22%3A%22company%22%2C%22x-siq-soid%22%3A%2260021768284%22%2C%22x-siq-resourceid%22%3A%221705929304498_60021768284%22%2C%22x-siq-filetype%22%3A%22image%2Fjpg%22%2C%22x-siq-type%22%3A%22company_logo%22%2C%22x-siq-nps%22%3A%22202%22%7D",role:"React Developer",period:"July 2023 - Present",description:"React Developer working on EHR",achievements:["Led EHR app development from scratch, establishing codebase, structure, and SOLID-compliant conventions.","Improving component library performance and accessibility","Created robust API and state management with Redux Toolkit, Thunk, Axios, and type guards for reliable use.","Utilized TypeScript with strict typing, generics, and enums to boost code quality and reusability.","Mentoring junior developers and conducting technical interviews"]},{company:"MGDigitech",favicon:"https://www.mgdigitech.com/images/logo.png",role:"Front-end Developer",period:"Apr 2021 - Apr 2023",description:"Worked on ",achievements:["Played a key role in the UKPSC Group A Civil Judge form project as a React Developer.","Leveraged Chart.js to provide insightful inventory analytics based on consumption trends, enabling data-driven decision-making","Built a scalable React data table component that efficiently handles 100k rows without freezing"]}];function L(){const{siteConfig:e}=(0,r.Z)(),[t,n]=(0,a.useState)(!1),[i,o]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const e=setTimeout((()=>{n(!0)}),3e3),t=()=>{o(window.innerWidth<=768)};return t(),window.addEventListener("resize",t),()=>{clearTimeout(e),window.removeEventListener("resize",t)}}),[]),a.createElement("div",{className:N.mainContainer},a.createElement("div",{className:N.profileSection},a.createElement(w.E.img,{className:N.profileImage,src:"https://avatars.githubusercontent.com/u/97985931",alt:"Profile",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5}}),a.createElement("div",{className:N.headerContent},a.createElement(w.E.span,{className:N.greeting,initial:{opacity:0,y:20},animate:{opacity:1,y:0}},"Hello \ud83d\udc4b , I'm"),a.createElement("h1",{className:N.name},i?a.createElement("span",null,e.title):a.createElement(k.Z,{text:e.title,delay:500,duration:2e3})),a.createElement(w.E.div,{className:N.roleWrapper,initial:{opacity:0},animate:{opacity:1},transition:{delay:.4}},a.createElement("span",{className:N.rolePrefix},"I'm a "),a.createElement(x.M,null,t&&a.createElement(g,{sequence:["Senior Software Engineer",2e3,"Frontend Developer",2e3,"UI/UX Enthusiast",2e3,"Problem Solver",2e3],wrapper:"span",speed:50,className:N.typeAnimation,repeat:1/0}))),a.createElement(w.E.p,{className:N.brief,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4}},a.createElement("ul",{className:N.briefList},a.createElement("li",null,"Senior Software Engineer at ",a.createElement("a",{href:"https://www.expedium.net/",target:"_blank",rel:"noopener noreferrer",className:N.expediumLink},"Expedium"),"."),a.createElement("li",null,"Building ",a.createElement("a",{href:"https://www.expedium.net/office-ehr.php",target:"_blank",rel:"noopener noreferrer",className:N.expediumLink},"expEDIum Office EHR"),", an EHR application"),a.createElement("li",null,"I currently live in Bangalore, ",a.createElement("b",null,"India")," \ud83c\uddee\ud83c\uddf3."))),a.createElement(w.E.div,{className:N.socialLinks,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8}},C.map(((e,t)=>a.createElement(w.E.a,{key:e.name,href:e.url,target:"_blank",rel:"noopener noreferrer",className:`${N.socialLink} ${e.className}`,whileHover:{y:-4},whileTap:{scale:.95}},e.icon,e.name)))))))}const A=e=>{let{experience:t,index:n}=e;const r=a.useRef(null),i=(0,b.Y)(r,{once:!0,margin:"-100px"});return a.createElement(w.E.div,{ref:r,className:N.timelineItem,initial:{opacity:0,x:n%2==0?50:-50},animate:i?{opacity:1,x:0}:{opacity:0,x:n%2==0?50:-50},transition:{duration:.8,delay:.2*n}},a.createElement("div",{className:N.timelineDot},a.createElement(w.E.div,{className:N.dot,initial:{scale:0},animate:i?{scale:1}:{scale:0},transition:{duration:.4,delay:.2*n+.3}})),a.createElement(w.E.div,{className:N.timelineContent,initial:{opacity:0,scale:.8},animate:i?{opacity:1,scale:1}:{opacity:0,scale:.8},transition:{duration:.5,delay:.2*n+.2}},a.createElement("div",{className:N.companyHeader},t.favicon&&a.createElement("img",{src:t.favicon,alt:`${t.company} logo`,className:N.companyFavicon,onError:e=>e.currentTarget.style.display="none"}),a.createElement("h3",{className:N.companyName},t.company),a.createElement("span",{className:N.period},t.period)),a.createElement("h4",{className:N.role},t.role),a.createElement("p",{className:N.description},t.description),a.createElement("ul",{className:N.achievements},t.achievements.map(((e,t)=>a.createElement(w.E.li,{key:t,initial:{opacity:0,x:-20},animate:i?{opacity:1,x:0}:{opacity:0,x:-20},transition:{duration:.5,delay:.2*n+.4+.1*t}},e))))))};function T(){const[e,t]=(0,a.useState)(!0),[n,r]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const e=()=>{r(window.innerWidth<=768)};e(),window.addEventListener("resize",e);const n=setTimeout((()=>{t(!1)}),1e3);return()=>{clearTimeout(n),window.removeEventListener("resize",e)}}),[]),a.createElement(i.Z,{title:"Frontend Developer Portfolio | Amit Sharma",description:"Personal portfolio website showcasing my work and experience as a Frontend Developer"},a.createElement(S.Z,null),a.createElement(o.Z,null),a.createElement(l.Z,null,a.createElement("main",{className:N.main},e?a.createElement(a.Fragment,null,a.createElement("section",{className:N.heroSection},a.createElement(_.Bx,null)),!n&&a.createElement("section",{className:N.experienceSection},a.createElement("div",{className:N.timelineContainer},[1,2,3].map((e=>a.createElement(_.f2,{key:e})))))):a.createElement(a.Fragment,null,a.createElement("section",{className:N.heroSection},a.createElement(L,null)),!n&&a.createElement("section",{className:N.experienceSection},a.createElement(w.E.h2,{className:N.sectionTitle,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6}},"Work Experience"),a.createElement("div",{className:N.timelineContainer},I.map(((e,t)=>a.createElement(A,{key:t,experience:e,index:t})))))))))}},624:(e,t,n)=>{n.d(t,{Y:()=>l});var a=n(655),r=n(7294);const i={any:0,all:1};function o(e,t,{root:n,margin:a,amount:r="any"}={}){if("undefined"==typeof IntersectionObserver)return()=>{};const o=function(e,t){var n;return"string"==typeof e?t?(null!==(n=t[e])&&void 0!==n||(t[e]=document.querySelectorAll(e)),e=t[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}(e),l=new WeakMap,c=new IntersectionObserver((e=>{e.forEach((e=>{const n=l.get(e.target);if(e.isIntersecting!==Boolean(n))if(e.isIntersecting){const n=t(e);"function"==typeof n?l.set(e.target,n):c.unobserve(e.target)}else n&&(n(e),l.delete(e.target))}))}),{root:n,rootMargin:a,threshold:"number"==typeof r?r:i[r]});return o.forEach((e=>c.observe(e))),()=>c.disconnect()}function l(e,t){var n=void 0===t?{}:t,i=n.root,l=n.margin,c=n.amount,s=n.once,m=void 0!==s&&s,u=(0,a.CR)((0,r.useState)(!1),2),p=u[0],d=u[1];return(0,r.useEffect)((function(){var t;if(!(!e.current||m&&p)){var n={root:null!==(t=null==i?void 0:i.current)&&void 0!==t?t:void 0,margin:l,amount:"some"===c?"any":c};return o(e.current,(function(){return d(!0),m?void 0:function(){return d(!1)}}),n)}}),[i,e,l,m]),p}}}]);