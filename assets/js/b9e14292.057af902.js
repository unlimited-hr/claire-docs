"use strict";(self.webpackChunkClaire_AI_Docs=self.webpackChunkClaire_AI_Docs||[]).push([[531],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),h=c(r),d=i,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4801:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],u={sidebar_position:3,title:"OAuth",description:"Official OAuth documentation for the Claire AI Project. Developer guide to interact with the oauth server.",image:"https://api.nigelritfeld.nl/uploads/claire_oauth_6f4dc02bfe.png"},l="Oauth documentation",c={unversionedId:"oauth/index",id:"oauth/index",title:"OAuth",description:"Official OAuth documentation for the Claire AI Project. Developer guide to interact with the oauth server.",source:"@site/docs/oauth/index.mdx",sourceDirName:"oauth",slug:"/oauth/",permalink:"/claire-docs/developer-guides/oauth/",draft:!1,editUrl:"https://github.com/unlimited-hr/claire-docs/tree/main/docs/oauth/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"OAuth",description:"Official OAuth documentation for the Claire AI Project. Developer guide to interact with the oauth server.",image:"https://api.nigelritfeld.nl/uploads/claire_oauth_6f4dc02bfe.png"},sidebar:"tutorialSidebar",previous:{title:"Endpoints",permalink:"/claire-docs/developer-guides/api/endpoints"},next:{title:"Introduction",permalink:"/claire-docs/developer-guides/oauth/intro"}},s={},p=[{value:"Oauth 2.0",id:"oauth-20",level:2}],h={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oauth-documentation"},"Oauth documentation"),(0,o.kt)("p",null,"Claire AI Oauth server is middleware for mobile client to register users and devices.\nThe oauth server is hosted at ",(0,o.kt)("a",{parentName:"p",href:"https://oauth.claire-ai.site"},"https://oauth.claire-ai.site"),"."),(0,o.kt)("h2",{id:"oauth-20"},"Oauth 2.0"),(0,o.kt)("p",null,"OAuth 2.0, which stands for \u201cOpen Authorization\u201d, is a standard designed to allow a website or application to access resources hosted by other web apps on behalf of a user. It replaced OAuth 1.0 in 2012 and is now the de facto industry standard for online authorization. OAuth 2.0 provides consented access and restricts actions of what the client app can perform on resources on behalf of the user, without ever sharing the user's credentials."),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://auth0.com/intro-to-iam/what-is-oauth-2/"},"https://auth0.com/intro-to-iam/what-is-oauth-2/")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/unlimited-hr/oauth-sever"},"Github repo")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Author:",(0,o.kt)("a",{parentName:"li",href:"https://nigelritfeld.nl"},"Nigel Ritfeld")),(0,o.kt)("li",{parentName:"ul"},"Github:",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nigelritfeld"},"Nigel Ritfeld")),(0,o.kt)("li",{parentName:"ul"},"LinkedIn:",(0,o.kt)("a",{parentName:"li",href:"https://linkedin.com/in/nigelritfeld"},"Nigel Ritfeld"))))}d.isMDXComponent=!0}}]);