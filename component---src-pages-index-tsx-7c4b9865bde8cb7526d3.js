"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[245],{454:function(e){var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return[decodeURIComponent(e.join(""))]}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(e);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(t){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(e)}r["%C2"]="�";for(var s=Object.keys(r),l=0;l<s.length;l++){var c=s[l];e=e.replace(new RegExp(c,"g"),r[c])}return e}(e)}}},3055:function(e){e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],s=e[i];(o?-1!==t.indexOf(i):t(i,s,e))&&(r[i]=s)}return r}},540:function(e,t,r){r.r(t),r.d(t,{default:function(){return O}});var n=r(6540),o=r(644),a=r(4810),i=r(7437);const s=(0,o.A)("div",{target:"e1kn8q5k1"})({name:"j33awd",styles:"display:flex;flex-wrap:wrap;width:680px;margin:0 auto 0;padding-top:40px;gap:20px;@media (max-width: 768px){width:100%;padding:40px 20px 0 20px;}"}),l=(0,o.A)((e=>{let{active:t,...r}=e;return(0,i.Y)(a.N_,r)}),{target:"e1kn8q5k0"})("font-size:16px;color:",(e=>{let{active:t}=e;return t?"black":"#00000072"}),";text-decoration-line:",(e=>{let{active:t}=e;return t?"underline":"none"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:16px;}:hover{text-decoration-line:underline;}");var c=function(e){let{selectedCategory:t,categoryList:r}=e;return(0,i.Y)(s,null,Object.entries(r).map((e=>{let[r,n]=e;return(0,i.Y)(l,{className:"categoryItem",to:`/?category=${r}`,active:r===t,key:r},"#",r,"(",n,")")})))},u=r(1234);const p=(0,o.A)("div",{target:"e160b014"})({name:"xh6d53",styles:"display:flex;width:680px;align-items:end;margin:0 auto;padding:30px 0 10px 0;justify-content:space-between;color:#6210cc;@media (max-width: 1024px){width:90%;}"}),d=(0,o.A)("div",{target:"e160b013"})({name:"19ylo8m",styles:"font-size:2.5rem;font-weight:900;margin-bottom:10px;color:#282728"}),f=(0,o.A)("div",{target:"e160b012"})({name:"sw0n2m",styles:"display:flex;justify-content:space-around"}),g=(0,o.A)("button",{target:"e160b011"})({name:"18xiacp",styles:"border:none;background-color:inherit;width:72px;height:24px;font-size:16px;font-weight:900;cursor:pointer;&:hover{text-decoration:underline;}"}),m=(0,o.A)("button",{target:"e160b010"})({name:"1pjp759",styles:"border:none;background-color:inherit;padding:1px;width:28px;height:28px;cursor:pointer;&:hover{text-decoration:underline;}"});var y=function(){return(0,i.Y)(n.Fragment,null,(0,i.Y)(p,{className:"wrapper"},(0,i.Y)(f,null,(0,i.Y)(d,{className:"subtitle"},(0,i.Y)(a.N_,{to:"/"},"Geurim's Blog"))),(0,i.Y)("div",null,(0,i.Y)(a.N_,{to:"/info"},(0,i.Y)(g,{className:"about"},(0,i.Y)(u.T,null))))),(0,i.Y)("div",{style:{display:"flex",gap:"0.5rem",width:"680px",margin:"0 auto"}},(0,i.Y)(a.N_,{to:"https://github.com/imb96"},(0,i.Y)(m,null,(0,i.Y)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,i.Y)("g",null,(0,i.Y)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,i.Y)("path",{className:"icon",d:"M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z","fill-rule":"nonzero"}))))),(0,i.Y)(a.N_,{to:"https://www.linkedin.com/in/%EB%AF%BC%EC%9E%AC-%EA%B9%80-0415a1246/"},(0,i.Y)(m,null,(0,i.Y)("svg",{viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg"},(0,i.Y)("rect",{fill:"none",height:"256",width:"256"}),(0,i.Y)("rect",{className:"icon",fill:"none",height:"184",rx:"8",stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"16",width:"184",x:"36",y:"36"}),(0,i.Y)("line",{fill:"none",stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"16",x1:"120",x2:"120",y1:"112",y2:"176"}),(0,i.Y)("line",{fill:"none",stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"16",x1:"88",x2:"88",y1:"112",y2:"176"}),(0,i.Y)("path",{d:"M120,140a28,28,0,0,1,56,0v36",fill:"none",stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"16"}),(0,i.Y)("circle",{cx:"88",cy:"80",r:"12"}))))))},x=r(8168);const h=(0,o.A)(a.N_,{target:"e1eg5kak6"})({name:"mhmko1",styles:"display:flex;border-radius:10px;flex-direction:column;padding:4px 2px;cursor:pointer;&:hover{background-color:#f5f5f5;}"}),k=(0,o.A)("div",{target:"e1eg5kak5"})({name:"7c9txl",styles:"flex:1;display:flex;justify-content:space-between;align-items:center;padding:5px"}),b=(0,o.A)("div",{target:"e1eg5kak4"})({name:"1fhuqht",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;font-weight:500"}),w=(0,o.A)("div",{target:"e1eg5kak3"})({name:"1clmvuu",styles:"width:70px;font-size:12px;font-weight:400;opacity:0.7"}),v=(0,o.A)("div",{target:"e1eg5kak0"})({name:"pcxgpw",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:12px;opacity:0.5;font-weight:400"});var j=function(e){let{title:t,date:r,categories:n,summary:o,link:a}=e;return(0,i.Y)(h,{to:a,className:"postItem"},(0,i.Y)(k,{className:"postItemContent"},(0,i.Y)("div",{style:{display:"flex",gap:"0.5rem",alignItems:"start"}},(0,i.Y)(u.I,{category:n[0]}),(0,i.Y)("div",null,(0,i.Y)(b,{className:"postTitle"},t),(0,i.Y)(v,{className:"postSummary"},o))),(0,i.Y)(w,null,r)))};var Y=function(e,t){const r=(0,n.useRef)(null),o=(0,n.useRef)(null),{0:a,1:i}=(0,n.useState)(1),s=(0,n.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e]);return(0,n.useEffect)((()=>{o.current=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(i((e=>e+1)),t.unobserve(e[0].target))}))}),[]),(0,n.useEffect)((()=>i(1)),[e]),(0,n.useEffect)((()=>{10*a>=s.length||null===r.current||0===r.current.children.length||null===o.current||o.current.observe(r.current.children[r.current.children.length-1])}),[a,e]),{containerRef:r,postList:s.slice(0,10*a)}};const A=(0,o.A)("div",{target:"es8e92y0"})({name:"xi7lxb",styles:"display:grid;width:680px;margin:0 auto;padding:20px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"});var N=function(e){let{selectedCategory:t,posts:r}=e;const{containerRef:n,postList:o}=Y(t,r);return(0,i.Y)(A,{ref:n},o.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:n}}=e;return(0,i.Y)(j,(0,x.A)({},n,{link:r,key:t}))})))},F=r(6663),I=r(9496);var O=function(e){let{location:{search:t},data:{site:{siteMetadata:{title:r,description:o,siteUrl:a}},allMarkdownRemark:{edges:s},file:{childImageSharp:{gatsbyImageData:l},publicURL:u}}}=e;const p=F.parse(t),d="string"==typeof p.category&&p.category?p.category:"All",f=(0,n.useMemo)((()=>s.reduce(((e,t)=>{let{node:{frontmatter:{categories:r}}}=t;return r.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})),[]);return(0,i.Y)(I.A,{title:r,description:o,url:a,image:u},(0,i.Y)(y,{profileImage:l}),(0,i.Y)(c,{selectedCategory:d,categoryList:f}),(0,i.Y)(N,{selectedCategory:d,posts:s}))};console.log("thank you 🙏")},6663:function(e,t,r){const n=r(4280),o=r(454),a=r(528),i=r(3055),s=Symbol("encodeFragmentIdentifier");function l(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function u(e,t){return t.decode?o(e):e}function p(e){return Array.isArray(e)?e.sort():"object"==typeof e?p(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function d(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function f(e){const t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function g(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,t){l((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&u(r,e).includes(e.arrayFormatSeparator);r=a?u(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o)return void(n[t]=r?u(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;let[e,i]=a(t.decode?o.replace(/\+/g," "):o,"=");i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:u(i,t),r(u(e,t),i,n)}for(const o of Object.keys(n)){const e=n[o];if("object"==typeof e&&null!==e)for(const r of Object.keys(e))e[r]=g(e[r],t);else n[o]=g(e,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=p(r):e[t]=r,e}),Object.create(null))}t.extract=f,t.parse=m,t.stringify=(e,t)=>{if(!e)return"";l((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[",o,"]"].join("")]:[...r,[c(t,e),"[",c(o,e),"]=",c(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),":list="].join("")]:[...r,[c(t,e),":list=",c(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[c(r,e),t,c(o,e)].join("")]:[[n,c(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,c(t,e)]:[...r,[c(t,e),"=",c(n,e)].join("")]}}(t),o={};for(const i of Object.keys(e))r(i)||(o[i]=e[i]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?c(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?c(r,t)+"[]":o.reduce(n(r),[]).join("&"):c(r,t)+"="+c(o,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:m(f(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[s]:!0},r);const n=d(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),i=Object.assign(a,e.query);let l=t.stringify(i,r);l&&(l=`?${l}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${r[s]?c(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${l}${u}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[s]:!1},n);const{url:o,query:a,fragmentIdentifier:l}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:i(a,r),fragmentIdentifier:l},n)},t.exclude=(e,r,n)=>{const o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},528:function(e){e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},4280:function(e){e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7c4b9865bde8cb7526d3.js.map