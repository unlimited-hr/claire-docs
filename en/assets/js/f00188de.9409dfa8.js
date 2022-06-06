"use strict";(self.webpackChunkClaire_AI_Docs=self.webpackChunkClaire_AI_Docs||[]).push([[255],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||i;return t?r.createElement(k,o(o({ref:n},d),{},{components:t})):r.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},81:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={sidebar_position:2,title:"Endpoints",description:"API Documentation"},p=void 0,u={unversionedId:"api/endpoints",id:"api/endpoints",title:"Endpoints",description:"API Documentation",source:"@site/docs/api/endpoints.mdx",sourceDirName:"api",slug:"/api/endpoints",permalink:"/claire-docs/en/docs/api/endpoints",draft:!1,editUrl:"https://github.com/unlimited-hr/claire-docs/tree/main/docs/docs/api/endpoints.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Endpoints",description:"API Documentation"},sidebar:"tutorialSidebar",previous:{title:"API Development",permalink:"/claire-docs/en/docs/api/development-setup"},next:{title:"What is Claire AI?",permalink:"/claire-docs/en/docs/api/intro"}},d={},s=[{value:"API Endpoints",id:"api-endpoints",level:2}],c={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"api-endpoints"},"API Endpoints"),(0,i.kt)("p",null,"Bij data gemiddelde nemen van afgelopen uur/dag/week/maand"),(0,i.kt)("p",null,"Let op! ",(0,i.kt)("br",null),"\nBij de responses documenteer ik enkel relevante data. Er kan meer worden meegegeven maar dit kun je negeren."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET | */iaq/:user_id")," ",(0,i.kt)("br",null)),(0,i.kt)("p",null,"Geeft gemeten luchtkwaliteit van de apparaten gekoppeld aan een gebruiker terug. ",(0,i.kt)("br",null),"\nIn de url geef je een gebruiker-id mee."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "response": [{ "temperature": 20, "tvoc": 800, "co2": 300, "humidity": 50, "measured_at": "2022-05-13T09:17:58.000Z"}  ...] }\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET | */iaq/:user_id/:period")," ",(0,i.kt)("br",null),"\nGeeft gemeten luchtkwaliteit van een gebruiker binnen een periode terug ",(0,i.kt)("br",null),"\nHour geeft alles van afgelopen uur terug, Day alles van afgelopen dag. Etc.",(0,i.kt)("br",null),"\nMogelijke waarden: ",(0,i.kt)("inlineCode",{parentName:"p"},"minute, hour, day, week, month, year"),". Je kan ook een getal (in minuten) meegeven."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "response": [{ "temperature": 20, "tvoc": 800, "co2": 300, "humidity": 50, "measured_at": "2022-05-13T09:17:59.000Z"}  ...] }\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET | */iaq/:user_id/predict")," ",(0,i.kt)("br",null),"\nGeeft als string een tip aan de gebruiker terug. Op dit moment nog statisch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "response": "To ventilate properly, you can open a door or window. \\n If you live near a busy street, it is better to ventilate in the evening and at night as there\'s less traffic." }\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET | */iaq/create?device_id=[id]&temperature=[temperatuur]&humidity=[luchtvochtigheid]&tvoc=[tvoc]&co2=[co2]")," ",(0,i.kt)("br",null),"\nVoegt gemeten luchtkwaliteit toe. ",(0,i.kt)("br",null),"\nIn het url geef je de gemeten waarden en een api-key mee. ",(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT, POST | */devices")," ",(0,i.kt)("br",null),"\nVoegt apparaat toe aan de database. ",(0,i.kt)("br",null),"\nIn de body geef je de omgevingsvariabelen van het apparaat en een apparaat-id (fysieke code) mee. ",(0,i.kt)("br",null),"\nJe kan zowel een PUT- als een POST request doen. Hiermee kun je ervoor kiezen eerst het apparaat te registreren en later pas de omgevingsvariabelen eraan toe te voegen.",(0,i.kt)("br",null),"\nGebruik bij PUT het url ",(0,i.kt)("inlineCode",{parentName:"p"},"claireURL/devices/:device-id"),". Hierbij is device-id niet de fysieke code maar die in de database. Deze krijg je terug wanneer je het apparaat met POST aanmaakt. ",(0,i.kt)("br",null),"\nJe krijgt de JSON van het gemaakte of aangepaste object terug."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "physical_id": 1 }\n{ "physical_id": 1, "year_built": 2008, "stories": 2, "cooktop_fuel": "gas", "oven_fuel": "electricity" }\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST | */iaq")," ",(0,i.kt)("br",null),"\nVoegt gemeten luchtkwaliteit toe. ",(0,i.kt)("br",null),"\nIn de body geef je de gemeten waarden en een apparaat-id mee. ",(0,i.kt)("br",null)),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "device_id": 1, "temperature": 20, "tvoc": 800, "co2": 300, "humidity": 50 }\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST | */connections")," ",(0,i.kt)("br",null),"\nVerbindt een gebruiker en apparaat aan elkaar. ",(0,i.kt)("br",null),"\nIn de body geeft je het gebruiker-id en het apparaat-id mee. Apparaat-id is niet de fysieke code maar het database id.",(0,i.kt)("br",null)),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "device_id": 1, "user_id": 1 }\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST | */users")," ",(0,i.kt)("br",null),"\nMaakt een nieuwe gebruiker aan. ",(0,i.kt)("br",null),"\nIn de body geef je een e-mail en een wachtwoord mee. ",(0,i.kt)("br",null)),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "name": "jane", "email": "jane@example.com", "password": "CorrectHorseBatteryStaple" }\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DELETE | */users/:user_id")," ",(0,i.kt)("br",null),"\nVerwijdert inloggegevens, id en apparaatverbindingen van een gebruiker. ",(0,i.kt)("br",null),"\nIn de url geef je het id mee van de gebruiker die je wilt vergeten. ",(0,i.kt)("br",null),(0,i.kt)("br",null)))}m.isMDXComponent=!0}}]);