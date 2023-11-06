(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),i=t(1),s=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("a",{onClick:function(){l(!t)},href:"!#"},r.a.createElement("img",{src:"./favicon.ico",alt:"Profile",className:"prof-pic ".concat(t?"expanded":"")})),r.a.createElement("div",{className:"square"},r.a.createElement("div",{className:"top"}),r.a.createElement("div",{className:"middle ".concat(t?"expanded":"")}),r.a.createElement("div",{className:"bottom ".concat(t?"expanded":"")})),r.a.createElement("nav",{className:"nav ".concat(t?"expanded":"")},t&&r.a.createElement("div",null,r.a.createElement("a",{className:"nav-link",href:"https://github.com/Steve-T-Pham",target:"_blank",rel:"noopener noreferrer"},"Github"),r.a.createElement("a",{className:"nav-link",href:"https://www.linkedin.com/in/steve-pham-stp40/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),r.a.createElement("a",{className:"nav-link",href:"Steve_Pham_Resume.pdf",download:!0},"Resume"))))},o=function(){return r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("p",{id:"aboutme-text"}," ",r.a.createElement("span",{className:"aboutme-bold"},r.a.createElement("em",null,"Steve Pham")),r.a.createElement("br",null),r.a.createElement("em",null,"Case Western Reserve Alumnus && Front-End Developer && Back-End Developer"),r.a.createElement("br",null),"Experienced in leveraging React for Front-End projects and adept in utilizing Node, Express, and MongoDB for Back-End development. Focused on honing skills through practical application in crafting user-centric applications, seeking to contribute and grow in a junior role.",r.a.createElement("br",null),r.a.createElement("br",null),"Click the button on the left for some of my links!"))},m=function(e){var a=e.percent,t=e.name,n={transition:"width 2s ease-in-out",height:"inherit",backgroundColor:"black",borderRadius:"inherit",textAlign:"left",width:a};return r.a.createElement("div",{className:"containerStyles"},r.a.createElement("div",{className:"fillerStyles",style:n},r.a.createElement("span",{className:"labelStyles"},t)))},p=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"image",src:e.img,alt:e.alt}),r.a.createElement("div",{className:"card-info-wrapper"},r.a.createElement("p",{className:"project-title"},e.title),e.child,r.a.createElement("p",{className:"project-desc"},e.desc))))},d=t(7),u=function(e){e.preventDefault(),d.a.sendForm("service_5bitwd1","template_b3z1eal",e.target,"ibPoo7xQZJaYYqptZ").then(function(e){console.log(e.text),alert("Success")},function(e){console.log(e.text),alert("Failed ",e)})},h=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())};t(16).config();var E=function(){return r.a.createElement("div",{className:"contact-wrapper"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("form",{onSubmit:u},r.a.createElement("input",{className:"name-input",type:"text",name:"name",placeholder:"Name",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{className:"email-input",type:"email",name:"email",placeholder:"Email",required:!0}),r.a.createElement("textarea",{className:"message",name:"message",rows:"5",placeholder:"Type your email here..."}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",value:"Send",className:"send-button",onClick:h,required:!0},"Send"))),r.a.createElement("div",{className:"info"},r.a.createElement("p",{className:"info-bold"},"Contact:"),r.a.createElement("p",{className:"info-light"},"stp40@case.edu"),r.a.createElement("p",{className:"info-bold"},"Based in:"),r.a.createElement("p",{className:"info-light"},"Cleveland, OH"),r.a.createElement("p",{className:"info-light"},"Feel free to contact over career aspects, ",r.a.createElement("br",null),"or if you just want to have a chat!")))},f=function(e){var a=e.name;return r.a.createElement("div",{className:"tag"},a)},g=(t(21),t(22),t(5)),v=t(6),w=function(){var e=Object(n.useState)(window.matchMedia("(min-width: 767px)").matches),a=Object(i.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)(function(){var e=function(){l(window.matchMedia("(min-width: 768px)").matches)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),r.a.createElement("div",{className:"home"},t&&r.a.createElement(s,null),r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"aboutme-wrapper"},r.a.createElement("h1",{id:"aboutme-header"},r.a.createElement("sup",{className:"superscript"},"//01\xa0"),"About Me"),r.a.createElement(o,null)),r.a.createElement("div",{className:"skills-wrapper"},r.a.createElement("h1",{id:"skills-header"},r.a.createElement("sup",{className:"superscript"},"//02\xa0"),"Skills"),g.map(function(e){return r.a.createElement(m,{name:e.name,percent:e.percent,key:e.name})})),r.a.createElement("div",{className:"projects-wrapper"},r.a.createElement("h1",{id:"projects-header"},r.a.createElement("sup",{className:"superscript"},"//03\xa0"),"Projects"),r.a.createElement("div",{className:"cards-wrapper"},v.map(function(e){return r.a.createElement(p,{key:e.id,img:e.img,alt:e.alt,link:e.link,title:e.title,desc:e.desc,child:r.a.createElement("div",{className:"tag-wrapper"},e.tags.map(function(e){return r.a.createElement(f,{key:e,name:e})})," ")})}))),r.a.createElement("div",{className:"contactme-wrapper"},r.a.createElement("h1",{id:"contact-header"},r.a.createElement("sup",{className:"superscript"},"//04\xa0"),"Contact Me"),r.a.createElement(E,null)))))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)))},5:function(e){e.exports=[{name:"JavaScript",percent:"85%"},{name:"React",percent:"80%"},{name:"Node",percent:"75%"},{name:"HTML / CSS",percent:"80%"},{name:"Java",percent:"70%"}]},6:function(e){e.exports=[{id:1,img:"https://www.schwab.com/learn/sites/g/files/eyrktu1246/files/Getty_500706310_3x2.jpg",alt:"Project display picture",link:"https://github.com/Desdaemon/moolah",title:"Moolah",desc:"Collaborative full-stack website implementation of a stocks interface utilizing Supabase, a Firebase alternative.",tags:["nextjs","typescript","tailwind"]},{id:2,img:"https://thefeminineenergy.com/wp-content/uploads/2023/05/Romantic-first-coffee-date.webp",alt:"Project display picture",link:"https://github.com/Steve-T-Pham/CWRU-dating-website",title:"CWRU Dating Website",desc:"Collaboratively built full-stack website for students to create accounts and answer a questionnaire, thus allowing our algorithm to match them.",tags:["java","springboot","sql"]},{id:3,img:"https://media.istockphoto.com/id/1293009425/photo/a-couple-having-a-fun-conversation-with-smile-at-a-cafe.jpg?s=612x612&w=0&k=20&c=AD2RTgsBnjXxCfE67zk_pYTlzFffUwX-XhtWs8KeAZQ=",alt:"Project display picture",link:"https://github.com/Steve-T-Pham/Kanji-Dictionary",title:"Kanji Dictionary",desc:"An app leveraging my interests in Japanese, returning all standardized JLPT N5 words, and one of my earliest projects utilizing web scraping with implemented search functionality.",tags:["java","jsoup"]},{id:4,img:"https://www.stepes.com/wp-content/uploads/2014/09/business-meeting-interpretation.jpg?1",alt:"Project display picture",link:"https://github.com/Steve-T-Pham/japanese-dictionary",desc:"Updated version of old Kanji dictionary, utilizing new tech stack, implementing Jisho API for dedicated Japanese words listing their JLPT level, parts of speech, and all readings of the characters",tags:["nextjs","typescript","tailwind"]}]},8:function(e,a,t){e.exports=t(23)}},[[8,1,2]]]);
//# sourceMappingURL=main.ef802d3b.chunk.js.map