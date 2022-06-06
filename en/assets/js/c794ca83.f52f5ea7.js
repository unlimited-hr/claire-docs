"use strict";(self.webpackChunkClaire_AI_Docs=self.webpackChunkClaire_AI_Docs||[]).push([[386],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9431:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:2,title:"API Development",description:"API Development documentation"},l="Claire-api",u={unversionedId:"api/development-setup",id:"api/development-setup",title:"API Development",description:"API Development documentation",source:"@site/docs/api/development-setup.mdx",sourceDirName:"api",slug:"/api/development-setup",permalink:"/en/docs/api/development-setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/development-setup.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"API Development",description:"API Development documentation"},sidebar:"tutorialSidebar",previous:{title:"Claire API",permalink:"/en/docs/api/"},next:{title:"Endpoints",permalink:"/en/docs/api/endpoints"}},p={},c=[{value:"Get started",id:"get-started",level:3},{value:"Create routes",id:"create-routes",level:3},{value:"Route groups",id:"route-groups",level:4},{value:"Installing MySql",id:"installing-mysql",level:3},{value:"Creating MySQL Database",id:"creating-mysql-database",level:3},{value:"Creating models &amp; migration",id:"creating-models--migration",level:3},{value:"Running migrations",id:"running-migrations",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"claire-api"},"Claire-api"),(0,o.kt)("p",null,"The app is made with Model-View-Controller (MVC) design pattern."),(0,o.kt)("h3",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"Make sure to copy the .env.example file and set your desired values."),(0,o.kt)("h3",{id:"create-routes"},"Create routes"),(0,o.kt)("p",null,"In the 'Routes/index.js' file you can declare your app routes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * In this function the routes will be bound to the global router.\n * You can create a route group with express routers like in example home.js\n * @param app\n */\n// Imported route groups\nconst home = require('./home')\n\nconst setRoutes = (app) => {\n    app.get('/home', (req, res) => {\n        res.json({\n            message: 'Hello world'\n        })\n            .status(200)\n    })\n}\n")),(0,o.kt)("h4",{id:"route-groups"},"Route groups"),(0,o.kt)("p",null,"You can also create route groups like this."),(0,o.kt)("p",null,"home.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nconst express = require('express')\nconst router = express.Router()\nconst logger = require('../Http/Middleware/logger')\n\n// Middleware that is specific to this router\nrouter.use(logger)\n// Define routes\nrouter.get('/', (req, res) => {\n    res.json({\n        message: 'Home page'\n    }).status(200)\n})\n// define the about route\nrouter.post('/create-user', (req, res) => {\n    // Your code to save user\n    res.send('About birds')\n})\n\n// Do not forget to export the router\nmodule.exports = router\n\n")),(0,o.kt)("p",null,"To learn more about using express.Router"),(0,o.kt)("p",null,"Reference: ",(0,o.kt)("a",{parentName:"p",href:"https://expressjs.com/en/guide/routing.html"},"https://expressjs.com/en/guide/routing.html")),(0,o.kt)("h3",{id:"installing-mysql"},"Installing MySql"),(0,o.kt)("p",null,"On Ubuntu:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install mysql-server\nsudo systemctl start mysql.service\nsudo mysql_secure_installation\nsudo mysql\n")),(0,o.kt)("h3",{id:"creating-mysql-database"},"Creating MySQL Database"),(0,o.kt)("p",null,"Make sure to note the port, database, username and password in the .env file!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW GLOBAL VARIABLES LIKE 'PORT';\nCREATE USER 'claire'@'localhost' IDENTIFIED BY 'claire_password';\nCREATE DATABASE api;\nGRANT ALL ON api.* TO 'claire'@'localhost'; -- less broad priveleges?\n")),(0,o.kt)("h3",{id:"creating-models--migration"},"Creating models & migration"),(0,o.kt)("p",null,"This project uses sequelize ORM to make use of the model creation and migrations."),(0,o.kt)("p",null,"Create models for Claire-API db:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx sequelize-cli model:generate --name User --attributes email:string,password:string,name:string\n\nnpx sequelize-cli model:generate --name Device --attributes year_built:integer,stories:integer,cooktop_fuel:string,oven_fuel:string,physical_id:integer\n\nnpx sequelize-cli model:generate --name Air_Measurement --attributes temperature:integer,humidity:integer,co2:integer,tvoc:integer,device_id:string,measured_at:date\n\nnpx sequelize-cli model:generate --name Device_Connections --attributes device_id:integer,user_id:integer\n\nnpx sequelize-cli model:generate --name Auth_Tokens --attributes token:string,created_at:date,expired:boolean,permissions:integer\n\nnpx sequelize-cli model:generate --name Physical_IDs --attributes physical_id:string\n")),(0,o.kt)("h3",{id:"running-migrations"},"Running migrations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx sequelize-cli db:migrate\n")),(0,o.kt)("p",null,"Undo migration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx sequelize-cli db:migrate:undo\n")),(0,o.kt)("p",null,"=======\nReference: ",(0,o.kt)("a",{parentName:"p",href:"https://expressjs.com/en/guide/routing.html"},"https://expressjs.com/en/guide/routing.html")))}m.isMDXComponent=!0}}]);