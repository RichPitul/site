(function(e){function t(t){for(var n,r,c=t[0],s=t[1],l=t[2],p=0,b=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&b.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"021c":function(e,t,a){},"0ae9":function(e,t,a){},"0b5b":function(e,t,a){"use strict";a("021c")},1276:function(e,t,a){"use strict";a("cc29")},1752:function(e,t,a){},"18af":function(e,t,a){e.exports=a.p+"media/loop.2fa1d3d2.mp4"},"1f53":function(e,t,a){"use strict";a("f1fc")},2109:function(e,t,a){e.exports=a.p+"img/tile_smi.f8b83abc.jpg"},3248:function(e,t,a){e.exports=a.p+"img/tile_clippers.4b18cacd.jpg"},"4c16":function(e,t,a){e.exports=a.p+"img/tile_allegiant.ee092d29.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function i(e,t,a,i,o,r){var c=Object(n["z"])("Header"),s=Object(n["z"])("router-view"),l=Object(n["z"])("Footer");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["h"])(c),Object(n["h"])(s),Object(n["h"])(l)],64)}var o=function(e){return Object(n["v"])("data-v-08868fdb"),e=e(),Object(n["t"])(),e},r=o((function(){return Object(n["f"])("h1",{class:"logo"},[Object(n["f"])("span",{class:"black"},"Richard"),Object(n["f"])("span",{class:"divider"}),Object(n["f"])("span",{class:"gold"},"Pitul")],-1)})),c=o((function(){return Object(n["f"])("svg",{width:"20",height:"11",viewBox:"0 0 20 11",xmlns:"http://www.w3.org/2000/svg"},[Object(n["f"])("path",{d:"M20 10v1H0v-1h20Zm0-5v1H0V5h20Zm0-5v1H0V0h20Z"})],-1)})),s=[c];function l(e,t,a,i,o,c){var l=Object(n["A"])("scroll-spy-active");return Object(n["s"])(),Object(n["e"])("header",null,[Object(n["f"])("div",null,[r,o.mobileNavIsVisible?(Object(n["s"])(),Object(n["e"])("button",{key:0,onClick:t[0]||(t[0]=function(e){return o.mobileNavIsOpen=!o.mobileNavIsOpen})},s)):Object(n["d"])("",!0),Object(n["f"])("div",{class:Object(n["n"])([o.mobileNavIsVisible?"has-mobile":"",o.mobileNavIsOpen?"show-mobile":""]),onClick:t[4]||(t[4]=function(e){return o.mobileNavIsOpen=!1})},[Object(n["F"])(Object(n["f"])("nav",null,[Object(n["f"])("a",{onClick:t[1]||(t[1]=function(e){return o.mobileNavIsOpen=!1}),href:"#top"},"Welcome"),Object(n["f"])("a",{onClick:t[2]||(t[2]=function(e){return o.mobileNavIsOpen=!1}),href:"#be-inspired"},"Be Inspired"),Object(n["f"])("a",{onClick:t[3]||(t[3]=function(e){return o.mobileNavIsOpen=!1}),href:"#some-credentials"},"Some Credentials")],512),[[l]])],2)])])}var d={name:"Header",data:function(){return{hash:window.location.hash,mobileNavIsVisible:!1,mobileNavIsOpen:!1,widthToRevertAt:670}},created:function(){},mounted:function(){var e=this;setTimeout((function(){e.checkForMobileNav()}),1e3),window.addEventListener("resize",this.checkForMobileNav)},updated:function(){window.addEventListener("resize",this.checkForMobileNav)},beforeDestroy:function(){window.removeEventListener("resize",this.checkForMobileNav)},methods:{onActivate:function(e){console.log('Received event: "bv::scrollspy::activate" for target ',e)},checkForMobileNav:function(){var e;this.mobileNavIsVisible=!0,(null===(e=window)||void 0===e?void 0:e.innerWidth)>this.widthToRevertAt&&(this.mobileNavIsVisible=!1)}},watch:{"$route.hash":function(e){this.hash=e}}},p=(a("1276"),a("6b0d")),b=a.n(p);const u=b()(d,[["render",l],["__scopeId","data-v-08868fdb"]]);var f=u,v=function(e){return Object(n["v"])("data-v-bb4f73ba"),e=e(),Object(n["t"])(),e},h=v((function(){return Object(n["f"])("div",{class:"social"},[Object(n["f"])("a",{href:"https://www.linkedin.com/in/richardpitul/",target:"_blank"},"LinkedIn"),Object(n["f"])("a",{href:"https://github.com/RichPitul",target:"_blank"},"GitHub")],-1)})),m={class:"legal"};function j(e,t,a,i,o,r){return Object(n["s"])(),Object(n["e"])("footer",null,[Object(n["f"])("div",null,[h,Object(n["f"])("div",m," © Copyright 2010 - "+Object(n["C"])((new Date).getFullYear())+" | Richard Pitul ",1)])])}var g={name:"Footer"};a("1f53");const O=b()(g,[["render",j],["__scopeId","data-v-bb4f73ba"]]);var w=O,y={setup:function(){},components:{Header:f,Footer:w}};a("6c34");const k=b()(y,[["render",i]]);var S=k,C=(a("ac1f"),a("12767"),a("6c02")),_={id:"be-inspired"};function I(e,t,a,i,o,r){var c=Object(n["z"])("Hero"),s=Object(n["z"])("Cards"),l=Object(n["z"])("Highlights"),d=Object(n["z"])("Credentials"),p=Object(n["A"])("scroll-spy");return Object(n["F"])((Object(n["s"])(),Object(n["e"])("section",null,[Object(n["h"])(c),Object(n["f"])("div",_,[Object(n["h"])(s),Object(n["h"])(l)]),Object(n["h"])(d)],512)),[[p]])}var x=a("18af"),A=a.n(x),M=function(e){return Object(n["v"])("data-v-20db6187"),e=e(),Object(n["t"])(),e},N={id:"top"},B=M((function(){return Object(n["f"])("video",{src:A.a,loop:"",muted:"",autoplay:""},null,-1)})),H={class:"content"},L=M((function(){return Object(n["f"])("h2",null,[Object(n["f"])("p",null,[Object(n["f"])("span",{class:"white"},"Create"),Object(n["f"])("span",{class:"black"},"Something")]),Object(n["f"])("p",{class:"gold"},"Distinct")],-1)}));function E(e,t,a,i,o,r){var c=Object(n["z"])("HashButton");return Object(n["s"])(),Object(n["e"])("section",N,[B,Object(n["f"])("div",H,[L,Object(n["h"])(c,{href:"#work-together",text:"Let's Get Started"})])])}var F=["href"];function P(e,t,a,i,o,r){return Object(n["s"])(),Object(n["e"])("a",{class:Object(n["n"])([a.light?"is-light":"is-dark"]),href:a.href},[Object(n["f"])("span",null,Object(n["C"])(a.text),1)],10,F)}var z={name:"HashButton",props:{text:String,href:String,light:Boolean}};a("0b5b");const R=b()(z,[["render",P],["__scopeId","data-v-80b9c316"]]);var D=R,T={name:"Hero",components:{HashButton:D}};a("727e");const V=b()(T,[["render",E],["__scopeId","data-v-20db6187"]]);var G=V,J={class:"nav-items"},U=["href"],W={class:"details"},K={class:"text white"},Y={class:"title"},Z={class:"subtitle uppercase"};function q(e,t,i,o,r,c){var s=Object(n["z"])("ArrowButton");return Object(n["s"])(),Object(n["e"])("section",J,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(e.$store.state.navItems,(function(e,t){return Object(n["s"])(),Object(n["e"])("a",{target:"_blank",href:e.path,key:t,style:Object(n["o"])({"background-image":"url("+a("6863")("./"+e.image)+")"})},[Object(n["f"])("div",W,[Object(n["f"])("div",K,[Object(n["f"])("p",Y,Object(n["C"])(e.title),1),Object(n["f"])("p",Z,Object(n["C"])(e.subtitle),1)]),Object(n["h"])(s)])],12,U)})),128))])}function $(e,t,a,i,o,r){var c=Object(n["z"])("ArrowIcon");return Object(n["s"])(),Object(n["e"])("div",{class:Object(n["n"])(["arrow",[a.invert?"invert":"",a.rotate?"rotate":""]])},[Object(n["h"])(c)],2)}var Q={width:"14",height:"14",viewBox:"0 0 14 14",xmlns:"http://www.w3.org/2000/svg"},X=Object(n["f"])("path",{d:"M7 14l7-7-7-7-1.237 1.237 4.884 4.904H0v1.718h10.647l-4.884 4.904z","fill-rule":"nonzero"},null,-1),ee=[X];function te(e,t){return Object(n["s"])(),Object(n["e"])("svg",Q,ee)}const ae={},ne=b()(ae,[["render",te]]);var ie=ne,oe={name:"ArrowButton",props:{invert:Boolean,rotate:Boolean},components:{ArrowIcon:ie}};a("f23a");const re=b()(oe,[["render",$],["__scopeId","data-v-1760b1b4"]]);var ce=re,se={name:"Cards",components:{ArrowButton:ce}};a("8976");const le=b()(se,[["render",q],["__scopeId","data-v-79e23b34"]]);var de=le,pe=Object(n["g"])("<article data-v-7183b7b0><h3 data-v-7183b7b0>Developed over 100 websites/applications for professional sports teams worldwide.</h3><p data-v-7183b7b0>At Channel 1 Media, I have worked with teams in all professional sports leagues in North America; including the NFL, NHL, MLB, NBA, MLS and Collegiate properties across the United States. I have also worked with professional soccer teams in the UK; Europe; and UAE.</p></article><article data-v-7183b7b0><h3 data-v-7183b7b0>Developed Appointment Booking/Scheduling Systems.</h3><p data-v-7183b7b0>Created booking systems for sports organizations including UBS Arena, Crew Stadium, Seattle Kraken, and the Phoenix Suns to allow clients and service reps to book appointments with each other.</p></article><article data-v-7183b7b0><h3 data-v-7183b7b0>Developed touchscreen presentations.</h3><p data-v-7183b7b0>Using Electron JS and Capacitor JS; previously using Adobe Air; created cross-platform touchscreen presentations for presentation centers for the Columbus Crew, Seattle Kraken, FC Cincinatti, and Cleveland Cavaliers.</p></article><article data-v-7183b7b0><h3 data-v-7183b7b0>Migrated to AWS/Google Cloud.</h3><p data-v-7183b7b0>Behind a strategic move to migrate Channel 1&#39;s business to AWS/Google Cloud services to decrease costs and increase security/up time of Channel 1&#39;s websites.</p></article><article data-v-7183b7b0><h3 data-v-7183b7b0>Co-created a cross platform mobile and desktop presentation system.</h3><p data-v-7183b7b0>Integrated services, apis, and custom software together into a single product called ePitch.</p></article><article data-v-7183b7b0><h3 data-v-7183b7b0>Created for iOS and the web; sales data applications for Legends Global Sales.</h3><p data-v-7183b7b0>For numerous collegiate properties and LASED; developed iOS app and admin panel to share sales and important data to ownership.</p></article>",6),be=[pe];function ue(e,t,a,i,o,r){return Object(n["s"])(),Object(n["e"])("section",null,be)}var fe={name:"Highlights"};a("d8d2");const ve=b()(fe,[["render",ue],["__scopeId","data-v-7183b7b0"]]);var he=ve,me={class:"texture",id:"some-credentials"},je=Object(n["g"])('<section data-v-1a410f04><article data-v-1a410f04><h3 data-v-1a410f04>Languages/Libraries and Frameworks</h3><ul data-v-1a410f04><li data-v-1a410f04>Javascript</li><li data-v-1a410f04>Electron, Vue, React</li><li data-v-1a410f04>Node, Capacitor</li><li data-v-1a410f04>PWA</li><li data-v-1a410f04>Webpack, Gulp, NPM</li><li data-v-1a410f04>PHP 5-8</li><li data-v-1a410f04>Cockpit CMS</li><li data-v-1a410f04>MySQL, PDO</li><li data-v-1a410f04>GIT, GitHub, Bitbucket</li><li data-v-1a410f04>CSS, SASS</li><li data-v-1a410f04>HTML, JSON, XML, SVG</li><li data-v-1a410f04>CockpitCMS</li></ul></article></section><section class="current" data-v-1a410f04><article style="text-align:justify;" data-v-1a410f04><h3 style="text-align:center;" data-v-1a410f04> Lead Developer <span data-v-1a410f04>Channel 1 Media Solutions</span></h3><p data-v-1a410f04> My role at Channel 1 is diverse. It includes hiring and training new employees in all aspects of software development. I am the key liason between our clients and other members of the development team for any technical requirements of their project. From evaluating the possibilty of integrating client specified third party services; determing how long such a task would take; and finding alternatives that would be more cost effective. I am also identifing when such work could benefit the company in a more general way; either by enhancing our development processes or improving the products we sell overall. </p><p data-v-1a410f04> In addition to my role as a manager/mentor; my capacity to develop both front end and back end is unmatched, and includes database design, php development, rest api creation; html, css and js development. My preference is to use a Javascript framework for front end development such as VueJS or React; but I am also adept at vanilla js; and jquery if the needs arise. </p></article></section><section data-v-1a410f04><article data-v-1a410f04><h3 data-v-1a410f04>Services and APIs</h3><ul data-v-1a410f04><li data-v-1a410f04>Tickets.com</li><li data-v-1a410f04>Braintree</li><li data-v-1a410f04>Stripe</li><li data-v-1a410f04>Segment, Rollbar</li><li data-v-1a410f04>DocRaptor</li><li data-v-1a410f04>Vimeo, YouTube</li><li data-v-1a410f04>Twitter / Facebook</li><li data-v-1a410f04>Google Servives</li><li data-v-1a410f04>Amazon Web Services</li><li data-v-1a410f04>Push Notifications</li><li data-v-1a410f04>MapBox</li><li data-v-1a410f04>Okta, OneLogin, SAML</li></ul></article></section>',3),ge=[je];function Oe(e,t,a,i,o,r){return Object(n["s"])(),Object(n["e"])("section",me,ge)}var we={name:"Highlights"};a("7f5a");const ye=b()(we,[["render",Oe],["__scopeId","data-v-1a410f04"]]);var ke=ye,Se={name:"Home",components:{Hero:G,Cards:de,Highlights:he,Credentials:ke}};const Ce=b()(Se,[["render",I]]);var _e=Ce,Ie=[{path:"/",name:"Home",component:_e}],xe=Object(C["a"])({history:Object(C["b"])(""),routes:Ie,scrollBehavior:function(e,t,a){if(e.hash){var n=window.location.href.split("#")[1];if(n.length){var i=document.getElementById(n).getBoundingClientRect().top+window.pageYOffset-60;window.scrollTo({behavior:"smooth",top:i})}}else{if(a)return a;document.getElementById("app").scrollIntoView({behavior:"smooth"})}}}),Ae=xe,Me=a("5502"),Ne=Object(Me["a"])({state:{navItems:[{image:"tile_enmarket.jpg",title:"Enmarket Arena",subtitle:"Explore the Site",path:"https://enmarketarena.vipfanportal.com/"},{image:"tile_brewers.jpg",title:"Milwaukee Brewers",subtitle:"Explore the Site",path:"https://brewers.fanportal-mlb.com/2022-10packs/"},{image:"tile_smi.jpg",title:"Speedway Motorsports",subtitle:"Explore the Site",path:"https://speedwaypartner.com"},{image:"tile_allegiant.jpg",title:"Allegiant Stadium",subtitle:"Explore the Site",path:"http://allegiant-stadium.vipfanportal.com/entertainment/"},{image:"tile_clippers.jpg",title:"Los Angeles Clippers",subtitle:"Explore the Site",path:"https://clippers.vipfanportal.com/salesportal/"},{image:"tile_lower.jpg",title:"lower.com Field",subtitle:"Explore the Site",path:"https://www.lowerfieldcbus.com/"}]},mutations:{},actions:{},modules:{}}),Be=a("feff"),He=a("f5af"),Le=a.n(He),Ee=(a("e829"),Object(n["c"])(S));Object(Be["registerScrollSpy"])(Ee),Ee.use(Ne).use(Ae),Ee.use({install:function(){Le.a.init()}}),Ee.mount("#app")},"5caf":function(e,t,a){},6863:function(e,t,a){var n={"./printReady.jpg":"89eb","./tile_allegiant.jpg":"4c16","./tile_brewers.jpg":"7cb3","./tile_clippers.jpg":"3248","./tile_enmarket.jpg":"ef39","./tile_lower.jpg":"7c02","./tile_smi.jpg":"2109"};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id="6863"},"6c34":function(e,t,a){"use strict";a("0ae9")},"727e":function(e,t,a){"use strict";a("8dc2")},"737e":function(e,t,a){},"7c02":function(e,t,a){e.exports=a.p+"img/tile_lower.f78b3f33.jpg"},"7cb3":function(e,t,a){e.exports=a.p+"img/tile_brewers.e2e59562.jpg"},"7f5a":function(e,t,a){"use strict";a("deb3")},8976:function(e,t,a){"use strict";a("1752")},"89eb":function(e,t,a){e.exports=a.p+"img/printReady.225d7e2b.jpg"},"8dc2":function(e,t,a){},cc29:function(e,t,a){},d8d2:function(e,t,a){"use strict";a("5caf")},deb3:function(e,t,a){},ef39:function(e,t,a){e.exports=a.p+"img/tile_enmarket.22bd5652.jpg"},f1fc:function(e,t,a){},f23a:function(e,t,a){"use strict";a("737e")}});
//# sourceMappingURL=app.29247923.js.map