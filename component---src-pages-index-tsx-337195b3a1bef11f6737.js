(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7091:function(t){"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function a(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],a(r),a(n))}function o(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=a(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(t);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(e){var i=o(a[0]);i!==a[0]&&(r[a[0]]=i)}a=n.exec(t)}r["%C2"]="�";for(var u=Object.keys(r),c=0;c<u.length;c++){var l=u[c];t=t.replace(new RegExp(l,"g"),r[l])}return t}(t)}}},8616:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),a=Array.isArray(e),o=0;o<n.length;o++){var i=n[o],u=t[i];(a?-1!==e.indexOf(i):e(i,u,t))&&(r[i]=u)}return r}},2203:function(t,e,r){"use strict";var n=r(8416),a=r(7424),o=r(861);function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=r(8936),l=r(7091),s=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function g(t,e){return e.encode?e.strict?c(t):encodeURIComponent(t):t}function m(t,e){return e.decode?l(t):t}function y(t){return Array.isArray(t)?t.sort():"object"==typeof t?y(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function x(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function v(t){var e=(t=x(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function b(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function h(t,e){d((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"colon-list-separator":return function(t,r,n){e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var a="string"==typeof r&&r.includes(t.arrayFormatSeparator),o="string"==typeof r&&!a&&m(r,t).includes(t.arrayFormatSeparator);r=o?m(r,t):r;var i=a||o?r.split(t.arrayFormatSeparator).map((function(e){return m(e,t)})):null===r?r:m(r,t);n[e]=i};case"bracket-separator":return function(e,r,n){var a=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),a){var o=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return m(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],o):n[e]=o}else n[e]=r?m(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var o,u=i(t.split("&"));try{for(u.s();!(o=u.n()).done;){var c=o.value;if(""!==c){var l=s(e.decode?c.replace(/\+/g," "):c,"="),f=a(l,2),p=f[0],g=f[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?g:m(g,e),r(m(p,e),g,n)}}}catch(F){u.e(F)}finally{u.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var h=v[x],w=n[h];if("object"==typeof w&&null!==w)for(var k=0,Z=Object.keys(w);k<Z.length;k++){var j=Z[k];w[j]=b(w[j],e)}else n[h]=b(w,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=y(r):t[e]=r,t}),Object.create(null))}e.extract=v,e.parse=h,e.stringify=function(t,e){if(!t)return"";d((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var a=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(e,t),"[",a,"]"].join("")]:[[g(e,t),"[",g(a,t),"]=",g(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(e,t),"[]"].join("")]:[[g(e,t),"[]=",g(n,t)].join("")])}};case"colon-list-separator":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(e,t),":list="].join("")]:[[g(e,t),":list=",g(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||t.skipNull&&null===a||t.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[g(r,t),e,g(a,t)].join("")]:[[n,g(a,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[g(e,t)]:[[g(e,t),"=",g(n,t)].join("")])}}}}(e),a={},i=0,u=Object.keys(t);i<u.length;i++){var c=u[i];r(c)||(a[c]=t[c])}var l=Object.keys(a);return!1!==e.sort&&l.sort(e.sort),l.map((function(r){var a=t[r];return void 0===a?"":null===a?g(r,e):Array.isArray(a)?0===a.length&&"bracket-separator"===e.arrayFormat?g(r,e)+"[]":a.reduce(n(r),[]).join("&"):g(r,e)+"="+g(a,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=s(t,"#"),n=a(r,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:h(v(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var a=x(t.url).split("?")[0]||"",o=e.extract(t.url),i=e.parse(o,{sort:!1}),u=Object.assign(i,t.query),c=e.stringify(u,r);c&&(c="?".concat(c));var l=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(l="#".concat(r[p]?g(t.fragmentIdentifier,r):t.fragmentIdentifier)),"".concat(a).concat(c).concat(l)},e.pick=function(t,r,a){a=Object.assign(n({parseFragmentIdentifier:!0},p,!1),a);var o=e.parseUrl(t,a),i=o.url,u=o.query,c=o.fragmentIdentifier;return e.stringifyUrl({url:i,query:f(u,r),fragmentIdentifier:c},a)},e.exclude=function(t,r,n){var a=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,a,n)}},4734:function(t){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},8936:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},4461:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return M}});var n=r(7294);var a=r(1008),o=r(1597),i=r(3431),u=["active"];var c=(0,a.Z)("div",{target:"e1kn8q5k1"})({name:"d6qj2j",styles:"display:flex;flex-wrap:wrap;width:768px;margin:50px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),l=(0,a.Z)((function(t){t.active;var e=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,u);return(0,i.tZ)(o.rU,e)}),{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(t){return t.active?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),s=function(t){var e=t.selectedCategory,r=t.categoryList;return(0,i.tZ)(c,null,Object.entries(r).map((function(t){var r=t[0],n=t[1];return(0,i.tZ)(l,{to:"/?category="+r,active:r===e,key:r},"#",r,"(",n,")")})))},f=r(7059);var p=(0,a.Z)(f.G,{target:"e1n1u3tj0"})({name:"3h1u4m",styles:"width:100px;height:100px;margin-bottom:30px;border-radius:50%;float:left;@media (max-width: 768px){width:80px;height:80px;}"}),d=function(t){var e=t.profileImage;return(0,i.tZ)(p,{image:e,alt:"Profile Image"})};var g=(0,a.Z)("div",{target:"e160b015"})({name:"brz9yr",styles:"width:100%;background-image:linear-gradient(60deg, #FFFFFF 0%, #FFFFFF 100%);color:#100720"}),m=(0,a.Z)("div",{target:"e160b014"})({name:"1srkuyu",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:300px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),y=(0,a.Z)("div",{target:"e160b013"})({name:"1coegju",styles:"font-size:20px;font-weight:500;@media (max-width: 768px){font-size:15px;}"}),x=(0,a.Z)("div",{target:"e160b012"})({name:"y5d84d",styles:"margin-top:10px;font-size:20px;font-weight:500;@media (max-width: 768px){font-size:25px;}"}),v=(0,a.Z)("div",{target:"e160b011"})({name:"15g5evk",styles:"margin-top:15px;float:left;width:35px"}),b=(0,a.Z)("div",{target:"e160b010"})({name:"zf6njz",styles:"margin-top:15px;float:left;width:35px;margin-left:15px"}),h=function(t){var e=t.profileImage;return(0,i.tZ)(g,null,(0,i.tZ)(m,null,(0,i.tZ)(d,{profileImage:e}),(0,i.tZ)("div",null,(0,i.tZ)(y,null,"posted by ",(0,i.tZ)("b",null,"Minter")),(0,i.tZ)(x,null,"Thank You for Visiting My Blog"),(0,i.tZ)(v,null,(0,i.tZ)("a",{href:"https://github.com/imb96"},(0,i.tZ)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,i.tZ)("title",null,"GitHub"),(0,i.tZ)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))),(0,i.tZ)(b,null,(0,i.tZ)("a",{href:"mailto:kimminje7810@gmail.com"},(0,i.tZ)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,i.tZ)("title",null,"Gmail"),(0,i.tZ)("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"})))))))},w=r(7462);var k=(0,a.Z)(o.rU,{target:"e1eg5kak7"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),Z=(0,a.Z)(f.G,{target:"e1eg5kak6"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),j=(0,a.Z)("div",{target:"e1eg5kak5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),F=(0,a.Z)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),I=(0,a.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),O=(0,a.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),S=(0,a.Z)("div",{target:"e1eg5kak1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),A=(0,a.Z)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),C=function(t){var e=t.title,r=t.date,n=t.categories,a=t.summary,o=t.thumbnail.childImageSharp.gatsbyImageData,u=t.link;return(0,i.tZ)(k,{to:u},(0,i.tZ)(Z,{image:o,alt:"Post Item Image"}),(0,i.tZ)(j,null,(0,i.tZ)(F,null,e),(0,i.tZ)(I,null,r),(0,i.tZ)(O,null,n.map((function(t){return(0,i.tZ)(S,{key:t},t)}))),(0,i.tZ)(A,null,a)))},E=function(t,e){var r=(0,n.useRef)(null),a=(0,n.useRef)(null),o=(0,n.useState)(1),i=o[0],u=o[1],c=(0,n.useMemo)((function(){return e.filter((function(e){var r=e.node.frontmatter.categories;return"All"===t||r.includes(t)}))}),[t]);return(0,n.useEffect)((function(){a.current=new IntersectionObserver((function(t,e){t[0].isIntersecting&&(u((function(t){return t+1})),e.unobserve(t[0].target))}))}),[]),(0,n.useEffect)((function(){return u(1)}),[t]),(0,n.useEffect)((function(){10*i>=c.length||null===r.current||0===r.current.children.length||null===a.current||a.current.observe(r.current.children[r.current.children.length-1])}),[i,t]),{containerRef:r,postList:c.slice(0,10*i)}};var U=(0,a.Z)("div",{target:"es8e92y0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"}),R=function(t){var e=t.selectedCategory,r=t.posts,n=E(e,r),a=n.containerRef,o=n.postList;return(0,i.tZ)(U,{ref:a},o.map((function(t){var e=t.node,r=e.id,n=e.fields.slug,a=e.frontmatter;return(0,i.tZ)(C,(0,w.Z)({},a,{link:n,key:r}))})))},z=r(2203),N=r(7196),M=function(t){var e=t.location.search,r=t.data,a=r.site.siteMetadata,o=a.title,u=a.description,c=a.siteUrl,l=r.allMarkdownRemark.edges,f=r.file,p=f.childImageSharp.gatsbyImageData,d=f.publicURL,g=z.parse(e),m="string"==typeof g.category&&g.category?g.category:"All",y=(0,n.useMemo)((function(){return l.reduce((function(t,e){return e.node.frontmatter.categories.forEach((function(e){void 0===t[e]?t[e]=1:t[e]++})),t.All++,t}),{All:0})}),[]);return(0,i.tZ)(N.Z,{title:o,description:u,url:c,image:d},(0,i.tZ)(h,{profileImage:p}),(0,i.tZ)(s,{selectedCategory:m,categoryList:y}),(0,i.tZ)(R,{selectedCategory:m,posts:l}))};console.log("\n⬜🟨🟨⬜⬜⬜🟨🟨⬜🟨⬜🟨⬜⬜⬜🟨⬜🟨⬜⬜⬜⬜⬜⬜🟨🟨🟨⬜⬜⬜🟨🟨🟨🟨⬜⬜\n⬜🟨⬜🟨⬜🟨⬜🟨⬜🟨⬜🟨🟨⬜⬜🟨⬜🟨⬜⬜⬜⬜⬜🟨⬜⬜⬜🟨⬜🟨⬜⬜⬜⬜⬜⬜\n⬜🟨⬜⬜🟨⬜⬜🟨⬜🟨⬜🟨⬜🟨⬜🟨⬜🟨⬜⬜⬜⬜⬜🟨⬜⬜⬜🟨⬜🟨⬜⬜🟨🟨🟨⬜\n⬜🟨⬜⬜⬜⬜⬜🟨⬜🟨⬜🟨⬜⬜🟨🟨⬜🟨⬜⬜⬜⬜⬜🟨⬜⬜⬜🟨⬜🟨⬜⬜⬜⬜🟨⬜\n⬜🟨⬜⬜⬜⬜⬜🟨⬜🟨⬜🟨⬜⬜⬜🟨⬜🟨🟨🟨🟨🟨⬜⬜🟨🟨🟨⬜⬜⬜🟨🟨🟨🟨⬜⬜\nthank you 🙏")},3405:function(t,e,r){var n=r(3897);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},8416:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},9498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},2281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,r){var n=r(3405),a=r(9498),o=r(6116),i=r(2281);t.exports=function(t){return n(t)||a(t)||o(t)||i()},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=component---src-pages-index-tsx-337195b3a1bef11f6737.js.map