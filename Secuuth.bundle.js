(()=>{var e={757:(e,t,r)=>{e.exports=r(666)},666:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",y={};function v(){}function m(){}function g(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(L([])));x&&x!==r&&n.call(x,a)&&(b=x);var k=g.prototype=v.prototype=Object.create(b);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function r(o,a,i,c){var u=l(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function S(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:t,done:!0}}return m.prototype=g,u(k,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},I(j.prototype),u(j.prototype,i,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},I(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function n(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=e.apply(r,n);function c(e){t(i,o,a,c,u,"next",e)}function u(e){t(i,o,a,c,u,"throw",e)}c(void 0)}))}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}function c(e,t){var r=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,r)}var u=r(757),s=r.n(u),l="http://localhost:5000",f=function(){function e(t,r){o(this,e),this.metaData=t,this.containerId=r}return i(e,[{key:"embed",value:function(){var e=document.getElementsByTagName("head")[0];e.innerHTML+='<link rel="stylesheet" href="'.concat("https://firebasestorage.googleapis.com/v0/b/charitybh-dc293.appspot.com/o/su%2Fsecuuth.css?alt=media&token=f5aa2257-d506-447e-89ec-afced4a02d48",'" />');var t=document.createElement("script");t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9/core.js");var r=document.createElement("script");r.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9/sha256.js"),e.insertBefore(t,e.childNodes[0]),e.insertBefore(r,e.childNodes[0])}},{key:"injectCss",value:function(){var e=this.metaData,t=e.modalTitleColor,r=e.modalBackgroundColor,n=e.btnTextColor,o=e.btnBgColor,a="\n    <style>\n    #".concat(this.containerId," {\n      padding: 50px 20px;\n      border-radius: 12px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      background-color: rgba(").concat(r.color.r,",").concat(r.color.g,",").concat(r.color.b,",").concat(r.color.a,");\n      position: relative;\n    }\n    \n    .su-btn {\n      background-color: rgba(").concat(o.color.r,",").concat(o.color.g,",").concat(o.color.b,",").concat(o.color.a,");\n      color: ").concat(n.hex||"white",";\n    }\n    .su-title {\n      color: ").concat(t.hex||"black","\n    }\n    </style>\n    ");document.getElementsByTagName("head")[0].innerHTML+=a}}]),e}(),p=function(){function e(t){o(this,e),this.fields=t}var t;return i(e,[{key:"formHTMLControls",value:(t=n(s().mark((function e(t){var r,n,o,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r='<div class="form-group">',e.t0=t.type,e.next="text"===e.t0?4:9;break;case 4:return n=t.label,o=t.name,a=t.placeholder,r+='\n                  <label for="'.concat(o,'">').concat(n,':</label>\n                  <input type="text" class="secuuth-db" id="').concat(o,'" name="').concat(o,'" placeholder="').concat(a,'"/>\n                '),e.abrupt("break",9);case 9:return r+="</div>",e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}],[{key:"getJSX",value:function(e,t,r){var n,o=e.basicStyling,a=e.advancedStyling,i=(o.isSms,o.countryCode),c=a.modalTitle,u=a.logo,s=a.btnText,l=e.signInMode;return n=l?"".concat(i.phone):"Email",'\n        <img\n          src="'.concat(u||"https://uploads-ssl.webflow.com/61234975b500ae0500a02f42/6123751c35c797119be587e3_Screenshot%20(275)%203-p-500.png",'"\n          alt="logo"\n          class="logo"\n        />\n        <div class="su-title">').concat(c,"</div>\n       \n        <input ").concat(l?'type="number"':'type="text"','  class="su-ip-text" id="suipemailp" id="suipemailp" name="email" type="email"  autoComplete="on" placeholder="').concat(n,'" required />\n        <button class="su-btn" id="su-submit-btn" type="submit" >').concat(s,'</button>\n        \n        <p id="su-msg"></p>\n    ')}}]),e}();function h(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}var d=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/auth/fetchProfile?keyId=").concat(t,"&profileName=").concat(r));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){h(a,n,o,i,c,"next",e)}function c(e){h(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e,r){return t.apply(this,arguments)}}();function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){v(a,n,o,i,c,"next",e)}function c(e){v(a,n,o,i,c,"throw",e)}i(void 0)}))}}var g=function(){var e=m(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("publicKey"),(r=localStorage.getItem("privateKey"))&&t){e.next=12;break}return e.next=5,crypto.subtle.generateKey({name:"RSA-OAEP",modulusLength:4096,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"},!0,["encrypt","decrypt"]);case 5:return n=e.sent,e.next=8,crypto.subtle.exportKey("jwk",n.publicKey);case 8:return t=e.sent,e.next=11,crypto.subtle.exportKey("jwk",n.privateKey);case 11:r=e.sent;case 12:return localStorage.setItem("publicKey",t),localStorage.setItem("privateKey",r),e.abrupt("return",{publicKey:t,privateKey:r});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e){return new Promise((function(t){return setTimeout(t,e)}))},w=function(){var e=m(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(32);case 2:return t=e.sent,r=x(t),e.abrupt("return",{codeVerifier:t,hash:r});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=m(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest("SHA-256",(new TextEncoder).encode(t));case 2:return r=e.sent,n=btoa(String.fromCharCode.apply(String,(o=new Uint8Array(r),function(e){if(Array.isArray(e))return y(e)}(o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_"),e.abrupt("return",n);case 5:case"end":return e.stop()}var o}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=m(regeneratorRuntime.mark((function e(t){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<t;o++)r+=n.charAt(Math.floor(Math.random()*n.length));return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function I(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function j(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){I(a,n,o,i,c,"next",e)}function c(e){I(a,n,o,i,c,"throw",e)}i(void 0)}))}}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var E=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.profileName=r,this.keyId=t}var t,r,n,o,a;return t=e,r=[{key:"getTokens",value:(a=j(regeneratorRuntime.mark((function e(t,r,n,o){var a,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.signInMode,i={userId:t.userId,keyId:this.keyId,authCode:r,signInMode:a||0,additionalInfo:"AdditionalInfo",codeVerifier:o},c=null,e.next=5,fetch("".concat(l,"/auth/tokens"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(i)});case 5:return c=e.sent,e.abrupt("return",c.json());case 7:case"end":return e.stop()}}),e,this)}))),function(e,t,r,n){return a.apply(this,arguments)})},{key:"verifyAuth",value:(o=j(regeneratorRuntime.mark((function e(t){var r,n,o,a,i,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.userId,n=t.challengeId,o=t.challenge,a={userId:r,challengeId:n,challenge:o},i=null,c=null,u=0;case 5:if(!(u<100)){e.next=21;break}return e.next=8,fetch("".concat(l,"/auth/verify"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)});case 8:return i=e.sent,e.next=11,i.json();case 11:if("Pending"!=(c=e.sent).approved){e.next=17;break}return e.next=15,b(3e3);case 15:e.next=18;break;case 17:return e.abrupt("return",c);case 18:u++,e.next=5;break;case 21:return e.abrupt("return",c);case 22:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})},{key:"initiateAuth",value:(n=j(regeneratorRuntime.mark((function e(t,r,n){var o,a,i,c,u,s,f,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:if((o=e.sent).publicKey,o.privateKey,a=localStorage.getItem("pKey")){e.next=11;break}return e.next=9,k(32);case 9:a=e.sent,localStorage.setItem("pKey",a);case 11:return e.next=13,k(32);case 13:return i=e.sent,c=r.profileId,u=r.signInMode,s=r.idType,f={profileId:c,userPublicId:t,keyId:this.keyId,publicKey:a,deviceType:navigator.platform,deviceName:navigator.userAgent,codeChallenge:n,state:i,signInMode:u||0,idType:s||0},e.prev=16,e.next=19,fetch("".concat(l,"/auth/initiate"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(f)});case 19:return p=e.sent,e.next=22,p.json();case 22:return e.abrupt("return",e.sent);case 25:throw e.prev=25,e.t0=e.catch(16),console.log(e.t0),e.t0;case 29:case"end":return e.stop()}}),e,this,[[16,25]])}))),function(e,t,r){return n.apply(this,arguments)})}],r&&S(t.prototype,r),e}();function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?O(Object(n),!0).forEach((function(r){e(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function L(e,t,r){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}var P=new WeakMap,A=new WeakMap,M=function(){function e(t){var r,a,i=this,u=t.keyId,l=t.profileName,h=t.containerId,y=t.onSubmit;o(this,e),L(this,P,{writable:!0,value:(r=n(s().mark((function e(){var t,r,n,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(i.keyId,i.profileName);case 2:t=e.sent,r=t.profileMetaData,n=JSON.parse(r),o=T(T({},t),{},{profileMetaData:T({},n)}),i.profile=o,i.csx=new f(i.profile.profileMetaData.advancedStyling,i.containerId),i.csx.embed(),console.log("Before mount form..."),c(i,A).call(i);case 11:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})}),L(this,A,{writable:!0,value:(a=n(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.csx.injectCss(),t=p.getJSX(i.profile.profileMetaData),console.log("ContainerId : "+i.containerId),document.getElementById(i.containerId).innerHTML=t,document.getElementById("su-submit-btn").onclick=function(){return i.submit().then((function(e){return i.clientSubmit(e)}))};case 5:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})}),this.profile,this.hash,this.codeVerifier,this.email,this.keyId=u,this.profileName=l,this.containerId=h,this.clientSubmit=y,this.auth=new E(this.keyId,this.profileName),c(this,P).call(this)}var t,r;return i(e,[{key:"submit",value:(r=n(s().mark((function e(){var t,r,n,o,a,i,c,u,l,f,p,h,d,y,v,m,g,b,x,k;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.email=document.getElementById("suipemailp").value,t=this.profile.profileMetaData.magicLinkPromptConfig,r=t.logo,n=t.subHeading,o=t.heading,a=document.getElementById(this.containerId),console.log("Mounted element: "+a),a.innerHTML+='<div class="su-overlay" id="su-overlay">\n                                <div id="su-cover-spin"></div>\n                                <div class="su-msg-overlay" id="su-msg-overlay"><div/>\n                              </div>',console.log("Mounted element: "+a),e.next=9,w();case 9:return i=e.sent,c=i.hash,u=i.codeVerifier,this.hash=c,this.codeVerifier=u,e.next=16,this.auth.initiateAuth(this.email,this.profile,this.hash);case 16:if(l=e.sent,f=null,p=1,d=l.challengeId,y=l.userId,v=l.challenge,"Yes"!=l.challengeSent){e.next=30;break}return console.log("ami"),document.getElementById("su-msg-overlay").innerHTML="Link has been sent to your Email <b>".concat(this.email,"</b>"),e.next=25,this.auth.verifyAuth({challenge:v,userId:y,challengeId:d});case 25:"No"==(f=e.sent).approved&&(p=0,document.getElementById("su-msg").innerHTML="\n              Email link is expired, please try again"),h=f.authCode,e.next=31;break;case 30:h=l.authCode;case 31:if(1!=p){e.next=40;break}return console.log("code Verifier"),console.log(this.codeVerifier),e.next=36,this.auth.getTokens(l,h,this.profile,this.codeVerifier);case 36:return m=e.sent,g=m.accessToken,b=m.idToken,x=m.refreshToken,g&&b&&x&&(localStorage.setItem("accessToken",g),localStorage.setItem("idToken",b),localStorage.setItem("refreshToken",x),(k=document.getElementById("su-overlay"))&&k.remove(),a.innerHTML+='<div id="su-overlay" class="su-overlay"><img src="https://firebasestorage.googleapis.com/v0/b/charitybh-dc293.appspot.com/o/su%2Ftick.svg?alt=media&token=415b947e-2033-4768-871f-9e690d871e98" class="su-tick" width="99"/><img src="'.concat(r||"https://uploads-ssl.webflow.com/61234975b500ae0500a02f42/6123751c35c797119be587e3_Screenshot%20(275)%203.png",'" width="203"><h3>').concat(o,"<h3/><p>").concat(n,"</p></div>")),e.abrupt("return",m);case 40:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"logout",value:(t=n(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,r=t.publicKey,e.next=6,fetch("".concat(l,"/auth/logout"),{body:JSON.stringify({userId:"",publicKey:r})});case 6:localStorage.removeItem("refreshToken"),localStorage.removeItem("privateKey"),localStorage.removeItem("publicKey");case 9:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),e}();window.Secuuth=M})()})();