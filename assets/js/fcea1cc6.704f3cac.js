"use strict";(self.webpackChunkamit_sharma_website=self.webpackChunkamit_sharma_website||[]).push([[4648],{3384:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const i="decodingText_BSeC",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>[]";function r(e){let{text:t,delay:n=800,duration:r=3e3,className:c}=e;const[l,s]=(0,a.useState)(t),[m,p]=(0,a.useState)(!1),[d,h]=(0,a.useState)([]);return(0,a.useEffect)((()=>{let e;e=setInterval((()=>{s(t.split("").map((()=>o.charAt(Math.floor(Math.random()*o.length)))).join(""))}),100);const a=setTimeout((()=>{clearInterval(e),p(!0)}),n);return()=>{clearTimeout(a),clearInterval(e)}}),[t,n]),(0,a.useEffect)((()=>{if(!m)return void h(Array.from({length:t.length},((e,t)=>t)));let e,n=0;const a=2*t.length;return e=setInterval((()=>{s((a=>{const i=Math.floor(n/6);if(i>=t.length)return clearInterval(e),h([]),t;h((e=>e.filter((e=>e>=i))));const r=t.split("").map(((e,t)=>{if(t<i)return e;if(t===i){if(n%6==5)return e;return o.charAt(Math.floor(Math.random()*o.length))}return a[t]||o.charAt(Math.floor(Math.random()*o.length))})).join("");return n++,r}))}),r/a),()=>clearInterval(e)}),[t,m,r]),a.createElement("span",{className:`${i} ${c||""}`,"data-original":t,"data-decoding":d.length>0,style:{width:t.length+"ch"}},l.split("").map(((e,t)=>a.createElement("span",{key:t,style:{color:d.includes(t)?"var(--ifm-color-primary-lighter)":"var(--ifm-color-primary-darkest)",transition:"all 0.3s ease"}},e))))}},156:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(7294),i=n(9960),o=n(6775);const r="header_ZmnY",c="headerNav_jxTB",l="menuItems_JUva",s="externalIcon_gHdc",m="menuButton_hfRj",p="active_Dx2U",d="socialDropdown_kbG7",h="emoji_BDtN",u="activeLink_YXBC",g="socialDropdownButton_ZZW_",v="socialDropdownContent_qUHz",_="socialLink_Ivke",f="socialIcon_tpgU";var E=n(3384);const y="monkeyContainer_i5lh",b="rope_rlaN",C="monkey_Urx9";function k(){return a.createElement("div",{className:y},a.createElement("div",{className:b}),a.createElement("div",{className:C},"\ud83d\udc12"))}const w=[{name:"LinkedIn",url:"https://www.linkedin.com/in/amit-sharma-071654158/",icon:a.createElement("svg",{className:f,viewBox:"0 0 24 24"},a.createElement("path",{fill:"currentColor",d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}))},{name:"GitHub",url:"https://github.com/amitsharma2748",icon:a.createElement("svg",{className:f,viewBox:"0 0 24 24"},a.createElement("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"}))},{name:"Email",url:"mailto:sharma670amit@gmail.com",icon:a.createElement("svg",{className:f,viewBox:"0 0 24 24"},a.createElement("path",{fill:"currentColor",d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}))}];function I(){const[e,t]=(0,a.useState)(!1),[n,f]=(0,a.useState)(!1),y=(0,o.TH)(),b="/"===y.pathname,[C,I]=(0,a.useState)(!1),N=(0,a.useRef)(null);(0,a.useEffect)((()=>{function e(e){N.current&&!N.current.contains(e.target)&&f(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const x=e=>{e.preventDefault();navigator.clipboard.writeText("sharma670amit@gmail.com").then((()=>{I(!0),setTimeout((()=>I(!1)),2e3)}))};return a.createElement("header",{className:r},a.createElement(k,null),a.createElement("nav",{className:c},a.createElement("button",{className:`${m} ${e?p:""}`,onClick:()=>t(!e),"aria-label":"Toggle menu"},a.createElement("span",null),a.createElement("span",null),a.createElement("span",null)),a.createElement("div",{className:`${l} ${e?p:""}`},[{title:"Home",to:"/",emoji:"\ud83c\udfe0"},{title:"Resume",to:"https://www.simpleresu.me",emoji:""}].map(((e,n)=>{return a.createElement(i.Z,{key:e.to,to:e.to,onClick:()=>t(!1),className:(o=e.to,"/"===o&&"/"===y.pathname||"/"!==o&&y.pathname.startsWith(o)?u:""),target:e.to.startsWith("http")?"_blank":void 0,rel:e.to.startsWith("http")?"noopener noreferrer":void 0},a.createElement("span",{className:h},e.emoji,"\xa0"),b?a.createElement(E.Z,{text:e.title,delay:800+200*n,duration:2e3}):e.title,e.to.startsWith("http")&&a.createElement("svg",{className:s,viewBox:"0 0 24 24",width:"14",height:"14"},a.createElement("path",{fill:"currentColor",d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"})));var o}))),a.createElement("div",{className:d,ref:N},a.createElement("button",{className:g,onClick:()=>f(!n),"aria-label":"Toggle social links"},"Connect With Me"),n&&a.createElement("div",{className:v},w.map((e=>a.createElement("a",{key:e.name,href:e.url,onClick:"Email"===e.name?x:void 0,target:"Email"!==e.name?"_blank":void 0,rel:"Email"!==e.name?"noopener noreferrer":void 0,className:_},e.icon,a.createElement("span",null,"Email"===e.name?C?"Copied!":"Copy Email":e.name))))))))}},2002:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),i=n(6775),o=n(1190),r=n(8716);const c="routeContainer_IEe8";function l(e){let{children:t}=e;const n=(0,i.TH)();return a.createElement(o.M,{mode:"wait"},a.createElement(r.E.div,{key:n.pathname,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:c},t))}},1717:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(7294),i=n(215),o=n(156),r=n(2002),c=n(8716),l=n(3812);const s=[{company:"Salesforce",favicon:"https://wwwexpedium.com/favicon.ico",role:"Senior Software Engineer",period:"2020 - Present",description:"Leading frontend development for the Lightning Design System team.",achievements:["Building and maintaining Lightning Web Components framework","Improving component library performance and accessibility","Mentoring junior developers and conducting technical interviews","Contributing to design system documentation and best practices"]},{company:"SimpleResume",role:"Founder & Developer",period:"2023 - Present",description:"Building an AI-powered resume builder platform.",achievements:["Developed the entire platform from scratch using Next.js and AI","Implemented real-time resume editing and preview","Created AI-powered content suggestions and formatting","Optimized performance and user experience"]},{company:"Microsoft",favicon:"https://www.microsoft.com/favicon.ico",role:"Software Engineer II",period:"2018 - 2020",description:"Worked on Azure Portal team, developing cloud management interfaces.",achievements:["Developed real-time monitoring dashboard used by 100k+ users","Reduced page load time by 60% through code optimization","Implemented automated testing reducing bugs by 45%","Collaborated with UX team for accessibility improvements"]},{company:"Amazon",role:"Frontend Developer",period:"2016 - 2018",description:"Part of the Amazon Prime Video team, working on streaming platform UI.",achievements:["Built new video player controls increasing user engagement by 25%","Implemented responsive design for multiple devices","Created reusable component library used across teams","Optimized video loading performance reducing buffer time"]},{company:"Google",role:"Software Engineer Intern",period:"2015 - 2016",description:"Internship with the Chrome DevTools team.",achievements:["Developed new debugging features for Chrome DevTools","Created documentation for new API implementations","Contributed to open source projects in Chrome ecosystem","Received full-time offer after successful internship"]}],m={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.2}}},p={hidden:{opacity:0,x:-50},show:{opacity:1,x:0}},d=e=>{let{experience:t,index:n}=e;return a.createElement(c.E.div,{className:`${l.Z.timelineItem} ${n%2==1?l.Z.timelineRight:""}`,variants:p},a.createElement("div",{className:l.Z.timelineDot},a.createElement("span",{className:l.Z.dot}),a.createElement("span",{className:l.Z.line})),a.createElement(c.E.div,{className:l.Z.timelineContent,whileHover:{x:n%2==1?-10:10},transition:{type:"spring",stiffness:300}},a.createElement("div",{className:l.Z.timelineHeader},a.createElement(c.E.h2,{className:l.Z.companyName,initial:{opacity:0},animate:{opacity:1},transition:{delay:.2*n}},t.favicon&&a.createElement("img",{src:t.favicon,alt:`${t.company} logo`,className:l.Z.companyFavicon,onError:e=>e.currentTarget.style.display="none"}),t.company),a.createElement(c.E.span,{className:l.Z.period,initial:{opacity:0},animate:{opacity:1},transition:{delay:.3*n}},t.period)),a.createElement(c.E.h3,{className:l.Z.role,initial:{opacity:0},animate:{opacity:1},transition:{delay:.4*n}},t.role),a.createElement(c.E.p,{className:l.Z.description,initial:{opacity:0},animate:{opacity:1},transition:{delay:.5*n}},t.description),a.createElement(c.E.ul,{className:l.Z.achievements,initial:"hidden",animate:"show",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.1,delayChildren:.6*n}}}},t.achievements.map(((e,t)=>a.createElement(c.E.li,{key:t,variants:{hidden:{opacity:0,x:-20},show:{opacity:1,x:0}}},e))))))};function h(){return a.createElement(i.Z,{title:"Experience | Amit Sharma",description:"Work experience and career journey"},a.createElement(o.Z,null),a.createElement(r.Z,null,a.createElement("main",{className:l.Z.mainContainer},a.createElement(c.E.div,{className:l.Z.timelineContainer,variants:m,initial:"hidden",animate:"show"},s.map(((e,t)=>a.createElement(d,{key:t,experience:e,index:t})))))))}},3812:(e,t,n)=>{n.d(t,{Z:()=>a});const a={mainContainer:"mainContainer_jRJm",pageTitle:"pageTitle_qX_c",projectsGrid:"projectsGrid_a1KN",projectCard:"projectCard_pmm5",shimmerBorder:"shimmerBorder_da9Y",projectContent:"projectContent_XIMy",projectImage:"projectImage_sO57",hiddenImage:"hiddenImage_O_9Q",projectLinks:"projectLinks_grsG",githubLink:"githubLink_LHpD",liveLink:"liveLink_aZIF",projectTitle:"projectTitle_tx3s",projectDescription:"projectDescription_NiRW",blink:"blink__7s6",techStack:"techStack_MQEx",techBadge:"techBadge_AYl7",contactContainer:"contactContainer_sUZQ",contactInfo:"contactInfo_siRW",contactItem:"contactItem_ZTp6",contactIcon:"contactIcon_v49C",contentSection:"contentSection_gkkB",skillsGrid:"skillsGrid_oYaa",skillCategory:"skillCategory_GX9f",timelineContainer:"timelineContainer_T0F0",timelineItem:"timelineItem__FrF",timelineRight:"timelineRight_aYPf",timelineDot:"timelineDot_G4dG",dot:"dot_Vbdi",timelineContent:"timelineContent_VTTf",timelineHeader:"timelineHeader_D9k9",companyName:"companyName_P5zX",companyFavicon:"companyFavicon_IBli",projectsWrapper:"projectsWrapper_oh94",projectImageWrapper:"projectImageWrapper_jexl",projectOverlay:"projectOverlay_m2fh",projectLink:"projectLink_mkyq",blogList:"blogList_O4bv",blogPost:"blogPost_c1oS",blogPostImage:"blogPostImage__sHA",blogPostContent:"blogPostContent_VKHN",blogPostMeta:"blogPostMeta_mFpA",blogPostTitle:"blogPostTitle_lTpU",blogPostExcerpt:"blogPostExcerpt_dBmQ",blogPostTags:"blogPostTags_qe_i",blogPostTag:"blogPostTag_OZc9",aboutWrapper:"aboutWrapper_rJZE",introSection:"introSection_J1zt",aboutTitle:"aboutTitle_bvoR",aboutDescription:"aboutDescription_nhUh",skillsSection:"skillsSection_Iujq",interestsSection:"interestsSection_dOY2",interestsGrid:"interestsGrid_x_lA",interestCard:"interestCard_ewUm",interestIcon:"interestIcon_vfhf",experienceContainer:"experienceContainer_HEii",experienceCard:"experienceCard_Dly1",experienceHeader:"experienceHeader_NNrL",period:"period_f1rW",role:"role_FZs7",description:"description_GABZ",achievements:"achievements_eWlb",experienceSection:"experienceSection_AoXv"}}}]);