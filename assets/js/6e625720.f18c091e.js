"use strict";(self.webpackChunkClaire_AI_Docs=self.webpackChunkClaire_AI_Docs||[]).push([[429],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2969:function(e,t,n){n.d(t,{y:function(){return o}});var r=n(7294),o=function(e){var t=e.children,n=e.color;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},3975:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=(n(2969),["components"]),c={sidebar_position:3,title:"Introduction"},u=void 0,l={unversionedId:"oauth/intro",id:"oauth/intro",title:"Introduction",description:"A user will be authenticated with the given credentials. After succesful authentication the client receives an access token to acces the api for user data server.",source:"@site/docs/oauth/intro.mdx",sourceDirName:"oauth",slug:"/oauth/intro",permalink:"/claire-docs/docs/oauth/intro",draft:!1,editUrl:"https://github.com/unlimited-hr/claire-docs/tree/main/docs/docs/oauth/intro.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"OAuth",permalink:"/claire-docs/docs/oauth/"},next:{title:"User registration",permalink:"/claire-docs/docs/oauth/register-new-user"}},s={},d=[{value:"Json Web Token (JWT)",id:"json-web-token-jwt",level:2},{value:"Example token",id:"example-token",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A user will be authenticated with the given credentials. After succesful authentication the client receives an access token to acces the api for user data server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<img src="https://camo.githubusercontent.com/126dc1ea9d541c7f10c563dd473ebf16b5ad0d0d2ab534b7a6ea531c3d8a5857/68747470733a2f2f696d6167652e736c696465736861726563646e2e636f6d2f6f6175746832737072696e672d3135303932393130343731302d6c7661312d617070363839312f39352f6f61757468322d616e642d737072696e672d73656375726974792d32332d3633382e6a70673f63623d31343433353233373731" alt="Oauth flow">\n')),(0,a.kt)("h2",{id:"json-web-token-jwt"},"Json Web Token (JWT)"),(0,a.kt)("p",null,"JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA."),(0,a.kt)("h2",{id:"example-token"},"Example token"),(0,a.kt)("p",null,"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'`{\n  "alg": "RS256"\n}`\n')),(0,a.kt)("p",null,"Payload"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'`{\n  "user": {\n    "id": 1,\n    "name": "Nigel",\n    "email": "example@mail.com",\n    "updatedAt": "2022-06-06T10:20:05.215Z",\n    "createdAt": "2022-06-06T10:20:05.215Z"\n  },\n  "iat": 1654510805,\n  "iss": "app",\n  "aud": "api:claire",\n  "exp": 1656930005\n}`\n\n')),(0,a.kt)("i",null,"auth0.com. (n.d.). JWT.IO - JSON Web Tokens Introduction. JSON Web Tokens - Jwt.Io. ",(0,a.kt)("a",{href:"https://jwt.io/introduction/",target:"_blank"},"https://jwt.io/introduction/")))}f.isMDXComponent=!0}}]);