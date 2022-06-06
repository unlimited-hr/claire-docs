"use strict";(self.webpackChunkClaire_AI_Docs=self.webpackChunkClaire_AI_Docs||[]).push([[739],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2969:function(e,t,r){r.d(t,{y:function(){return a}});var n=r(7294),a=function(e){var t=e.children,r=e.color;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},5023:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(2969),l=["components"],u={sidebar_position:3,title:"User registration"},s=void 0,c={unversionedId:"oauth/register-new-user",id:"oauth/register-new-user",title:"User registration",description:"User registration",source:"@site/docs/oauth/register-new-user.mdx",sourceDirName:"oauth",slug:"/oauth/register-new-user",permalink:"/en/docs/oauth/register-new-user",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/oauth/register-new-user.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"User registration"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/en/docs/oauth/intro"},next:{title:"Authorize user",permalink:"/en/docs/oauth/authorize-user"}},p={},d=[{value:"User registration",id:"user-registration",level:2}],m={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"user-registration"},"User registration"),(0,o.kt)("p",null,"Via mobile app"),(0,o.kt)(i.y,{color:"#25c2a0",mdxType:"Highlight"},"POST"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Registers new user in database")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://oauth.claire-ai.site/user/create\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Allowed headers"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Header"),(0,o.kt)("th",{parentName:"tr",align:null},"value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo1'")),(0,o.kt)("td",{parentName:"tr",align:null},"YES")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"}," 'application/json'")),(0,o.kt)("td",{parentName:"tr",align:null},"NO")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Accept"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"}," 'application/json'")),(0,o.kt)("td",{parentName:"tr",align:null},"YES")))),(0,o.kt)("p",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const headers = new Headers();\nheaders.append("Authorization", "Bearer <yourtoken>");\nheaders.append("Content-Type", "application/x-www-form-urlencoded");\n\nconst urlencoded = new URLSearchParams();\nurlencoded.append("name", "nigel");\nurlencoded.append("email", "example@mail.com");\nurlencoded.append("password", "my-new-password");\n\nconst requestOptions = {\n    method: \'POST\',\n    headers: headers,\n    body: urlencoded,\n    redirect: \'follow\'\n};\n\nfetch("https://oauth.claire-ai.site/user/create", requestOptions)\n    .then(response => response.json())\n    .then(data => {\n            // todo: Save access token in local storage\n            console.log(data)\n        }\n    )\n    .catch(error => console.log(\'error\', error));\n')))}f.isMDXComponent=!0}}]);