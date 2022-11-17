const nt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};nt();/*!
 * Glide.js v3.6.0
 * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */function H(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?H=function(t){return typeof t}:H=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(e)}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t,r){return t&&F(e.prototype,t),r&&F(e,r),e}function rt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},T(e)}function z(e,t){return z=Object.setPrototypeOf||function(n,s){return n.__proto__=s,n},z(e,t)}function it(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function st(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function at(e,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return st(e)}function ot(e){var t=it();return function(){var n=T(e),s;if(t){var i=T(this).constructor;s=Reflect.construct(n,arguments,i)}else s=n.apply(this,arguments);return at(this,s)}}function ut(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=T(e),e!==null););return e}function x(){return typeof Reflect<"u"&&Reflect.get?x=Reflect.get:x=function(t,r,n){var s=ut(t,r);if(!!s){var i=Object.getOwnPropertyDescriptor(s,r);return i.get?i.get.call(arguments.length<3?t:n):i.value}},x.apply(this,arguments)}var ct={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function y(e){console.error("[Glide warn]: ".concat(e))}function m(e){return parseInt(e)}function ft(e){return parseFloat(e)}function D(e){return typeof e=="string"}function k(e){var t=H(e);return t==="function"||t==="object"&&!!e}function P(e){return typeof e=="function"}function Z(e){return typeof e>"u"}function j(e){return e.constructor===Array}function lt(e,t,r){var n={};for(var s in t)P(t[s])?n[s]=t[s](e,n,r):y("Extension must be a function");for(var i in n)P(n[i].mount)&&n[i].mount();return n}function h(e,t,r){Object.defineProperty(e,t,r)}function dt(e){return Object.keys(e).sort().reduce(function(t,r){return t[r]=e[r],t[r],t},{})}function I(e,t){var r=Object.assign({},e,t);return t.hasOwnProperty("classes")&&(r.classes=Object.assign({},e.classes,t.classes),t.classes.hasOwnProperty("direction")&&(r.classes.direction=Object.assign({},e.classes.direction,t.classes.direction)),t.classes.hasOwnProperty("type")&&(r.classes.type=Object.assign({},e.classes.type,t.classes.type)),t.classes.hasOwnProperty("slide")&&(r.classes.slide=Object.assign({},e.classes.slide,t.classes.slide)),t.classes.hasOwnProperty("arrow")&&(r.classes.arrow=Object.assign({},e.classes.arrow,t.classes.arrow)),t.classes.hasOwnProperty("nav")&&(r.classes.nav=Object.assign({},e.classes.nav,t.classes.nav))),t.hasOwnProperty("breakpoints")&&(r.breakpoints=Object.assign({},e.breakpoints,t.breakpoints)),r}var ht=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};L(this,e),this.events=t,this.hop=t.hasOwnProperty}return M(e,[{key:"on",value:function(r,n){if(j(r)){for(var s=0;s<r.length;s++)this.on(r[s],n);return}this.hop.call(this.events,r)||(this.events[r]=[]);var i=this.events[r].push(n)-1;return{remove:function(){delete this.events[r][i]}}}},{key:"emit",value:function(r,n){if(j(r)){for(var s=0;s<r.length;s++)this.emit(r[s],n);return}!this.hop.call(this.events,r)||this.events[r].forEach(function(i){i(n||{})})}}]),e}(),gt=function(){function e(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};L(this,e),this._c={},this._t=[],this._e=new ht,this.disabled=!1,this.selector=t,this.settings=I(ct,r),this.index=this.settings.startAt}return M(e,[{key:"mount",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this._e.emit("mount.before"),k(r)?this._c=lt(this,r,this._e):y("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return j(r)?this._t=r:y("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.settings=I(this.settings,r),r.hasOwnProperty("startAt")&&(this.index=r.startAt),this._e.emit("update"),this}},{key:"go",value:function(r){return this._c.Run.make(r),this}},{key:"move",value:function(r){return this._c.Transition.disable(),this._c.Move.make(r),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return r&&(this.settings.autoplay=r),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(r,n){return this._e.on(r,n),this}},{key:"isType",value:function(r){return this.settings.type===r}},{key:"settings",get:function(){return this._o},set:function(r){k(r)?this._o=r:y("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(r){this._i=m(r)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(r){this._d=!!r}}]),e}();function vt(e,t,r){var n={mount:function(){this._o=!1},make:function(f){var c=this;e.disabled||(!e.settings.waitForTransition||e.disable(),this.move=f,r.emit("run.before",this.move),this.calculate(),r.emit("run",this.move),t.Transition.after(function(){c.isStart()&&r.emit("run.start",c.move),c.isEnd()&&r.emit("run.end",c.move),c.isOffset()&&(c._o=!1,r.emit("run.offset",c.move)),r.emit("run.after",c.move),e.enable()}))},calculate:function(){var f=this.move,c=this.length,d=f.steps,l=f.direction,g=1;if(l==="="){if(e.settings.bound&&m(d)>c){e.index=c;return}e.index=d;return}if(l===">"&&d===">"){e.index=c;return}if(l==="<"&&d==="<"){e.index=0;return}if(l==="|"&&(g=e.settings.perView||1),l===">"||l==="|"&&d===">"){var p=s(g);p>c&&(this._o=!0),e.index=i(p,g);return}if(l==="<"||l==="|"&&d==="<"){var v=a(g);v<0&&(this._o=!0),e.index=o(v,g);return}y("Invalid direction pattern [".concat(l).concat(d,"] has been used"))},isStart:function(){return e.index<=0},isEnd:function(){return e.index>=this.length},isOffset:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;return f?this._o?f==="|>"?this.move.direction==="|"&&this.move.steps===">":f==="|<"?this.move.direction==="|"&&this.move.steps==="<":this.move.direction===f:!1:this._o},isBound:function(){return e.isType("slider")&&e.settings.focusAt!=="center"&&e.settings.bound}};function s(u){var f=e.index;return e.isType("carousel")?f+u:f+(u-f%u)}function i(u,f){var c=n.length;return u<=c?u:e.isType("carousel")?u-(c+1):e.settings.rewind?n.isBound()&&!n.isEnd()?c:0:n.isBound()?c:Math.floor(c/f)*f}function a(u){var f=e.index;if(e.isType("carousel"))return f-u;var c=Math.ceil(f/u);return(c-1)*u}function o(u,f){var c=n.length;return u>=0?u:e.isType("carousel")?u+(c+1):e.settings.rewind?n.isBound()&&n.isStart()?c:Math.floor(c/f)*f:0}return h(n,"move",{get:function(){return this._m},set:function(f){var c=f.substr(1);this._m={direction:f.substr(0,1),steps:c?m(c)?m(c):c:0}}}),h(n,"length",{get:function(){var f=e.settings,c=t.Html.slides.length;return this.isBound()?c-1-(m(f.perView)-1)+m(f.focusAt):c-1}}),h(n,"offset",{get:function(){return this._o}}),n}function q(){return new Date().getTime()}function B(e,t,r){var n,s,i,a,o=0;r||(r={});var u=function(){o=r.leading===!1?0:q(),n=null,a=e.apply(s,i),n||(s=i=null)},f=function(){var d=q();!o&&r.leading===!1&&(o=d);var l=t-(d-o);return s=this,i=arguments,l<=0||l>t?(n&&(clearTimeout(n),n=null),o=d,a=e.apply(s,i),n||(s=i=null)):!n&&r.trailing!==!1&&(n=setTimeout(u,l)),a};return f.cancel=function(){clearTimeout(n),o=0,n=s=i=null},f}var R={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function mt(e,t,r){var n={apply:function(i){for(var a=0,o=i.length;a<o;a++){var u=i[a].style,f=t.Direction.value;a!==0?u[R[f][0]]="".concat(this.value/2,"px"):u[R[f][0]]="",a!==i.length-1?u[R[f][1]]="".concat(this.value/2,"px"):u[R[f][1]]=""}},remove:function(i){for(var a=0,o=i.length;a<o;a++){var u=i[a].style;u.marginLeft="",u.marginRight=""}}};return h(n,"value",{get:function(){return m(e.settings.gap)}}),h(n,"grow",{get:function(){return n.value*t.Sizes.length}}),h(n,"reductor",{get:function(){var i=e.settings.perView;return n.value*(i-1)/i}}),r.on(["build.after","update"],B(function(){n.apply(t.Html.wrapper.children)},30)),r.on("destroy",function(){n.remove(t.Html.wrapper.children)}),n}function C(e){if(e&&e.parentNode){for(var t=e.parentNode.firstChild,r=[];t;t=t.nextSibling)t.nodeType===1&&t!==e&&r.push(t);return r}return[]}function K(e){return!!(e&&e instanceof window.HTMLElement)}function N(e){return Array.prototype.slice.call(e)}var X='[data-glide-el="track"]';function pt(e,t,r){var n={mount:function(){this.root=e.selector,this.track=this.root.querySelector(X),this.collectSlides()},collectSlides:function(){this.slides=N(this.wrapper.children).filter(function(i){return!i.classList.contains(e.settings.classes.slide.clone)})}};return h(n,"root",{get:function(){return n._r},set:function(i){D(i)&&(i=document.querySelector(i)),K(i)?n._r=i:y("Root element must be a existing Html node")}}),h(n,"track",{get:function(){return n._t},set:function(i){K(i)?n._t=i:y("Could not find track element. Please use ".concat(X," attribute."))}}),h(n,"wrapper",{get:function(){return n.track.children[0]}}),r.on("update",function(){n.collectSlides()}),n}function yt(e,t,r){var n={mount:function(){this.value=e.settings.peek}};return h(n,"value",{get:function(){return n._v},set:function(i){k(i)?(i.before=m(i.before),i.after=m(i.after)):i=m(i),n._v=i}}),h(n,"reductor",{get:function(){var i=n.value,a=e.settings.perView;return k(i)?i.before/a+i.after/a:i*2/a}}),r.on(["resize","update"],function(){n.mount()}),n}function bt(e,t,r){var n={mount:function(){this._o=0},make:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.offset=a,r.emit("move",{movement:this.value}),t.Transition.after(function(){r.emit("move.after",{movement:i.value})})}};return h(n,"offset",{get:function(){return n._o},set:function(i){n._o=Z(i)?0:m(i)}}),h(n,"translate",{get:function(){return t.Sizes.slideWidth*e.index}}),h(n,"value",{get:function(){var i=this.offset,a=this.translate;return t.Direction.is("rtl")?a+i:a-i}}),r.on(["build.before","run"],function(){n.make()}),n}function wt(e,t,r){var n={setupSlides:function(){for(var i="".concat(this.slideWidth,"px"),a=t.Html.slides,o=0;o<a.length;o++)a[o].style.width=i},setupWrapper:function(){t.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var i=t.Html.slides,a=0;a<i.length;a++)i[a].style.width="";t.Html.wrapper.style.width=""}};return h(n,"length",{get:function(){return t.Html.slides.length}}),h(n,"width",{get:function(){return t.Html.track.offsetWidth}}),h(n,"wrapperSize",{get:function(){return n.slideWidth*n.length+t.Gaps.grow+t.Clones.grow}}),h(n,"slideWidth",{get:function(){return n.width/e.settings.perView-t.Peek.reductor-t.Gaps.reductor}}),r.on(["build.before","resize","update"],function(){n.setupSlides(),n.setupWrapper()}),r.on("destroy",function(){n.remove()}),n}function _t(e,t,r){var n={mount:function(){r.emit("build.before"),this.typeClass(),this.activeClass(),r.emit("build.after")},typeClass:function(){t.Html.root.classList.add(e.settings.classes.type[e.settings.type])},activeClass:function(){var i=e.settings.classes,a=t.Html.slides[e.index];a&&(a.classList.add(i.slide.active),C(a).forEach(function(o){o.classList.remove(i.slide.active)}))},removeClasses:function(){var i=e.settings.classes,a=i.type,o=i.slide;t.Html.root.classList.remove(a[e.settings.type]),t.Html.slides.forEach(function(u){u.classList.remove(o.active)})}};return r.on(["destroy","update"],function(){n.removeClasses()}),r.on(["resize","update"],function(){n.mount()}),r.on("move.after",function(){n.activeClass()}),n}function St(e,t,r){var n={mount:function(){this.items=[],e.isType("carousel")&&(this.items=this.collect())},collect:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a=t.Html.slides,o=e.settings,u=o.perView,f=o.classes,c=o.cloningRatio;if(a.length!==0)for(var d=+!!e.settings.peek,l=u+d+Math.round(u/2),g=a.slice(0,l).reverse(),p=a.slice(l*-1),v=0;v<Math.max(c,Math.floor(u/a.length));v++){for(var b=0;b<g.length;b++){var w=g[b].cloneNode(!0);w.classList.add(f.slide.clone),i.push(w)}for(var _=0;_<p.length;_++){var O=p[_].cloneNode(!0);O.classList.add(f.slide.clone),i.unshift(O)}}return i},append:function(){for(var i=this.items,a=t.Html,o=a.wrapper,u=a.slides,f=Math.floor(i.length/2),c=i.slice(0,f).reverse(),d=i.slice(f*-1).reverse(),l="".concat(t.Sizes.slideWidth,"px"),g=0;g<d.length;g++)o.appendChild(d[g]);for(var p=0;p<c.length;p++)o.insertBefore(c[p],u[0]);for(var v=0;v<i.length;v++)i[v].style.width=l},remove:function(){for(var i=this.items,a=0;a<i.length;a++)t.Html.wrapper.removeChild(i[a])}};return h(n,"grow",{get:function(){return(t.Sizes.slideWidth+t.Gaps.value)*n.items.length}}),r.on("update",function(){n.remove(),n.mount(),n.append()}),r.on("build.before",function(){e.isType("carousel")&&n.append()}),r.on("destroy",function(){n.remove()}),n}var S=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};L(this,e),this.listeners=t}return M(e,[{key:"on",value:function(r,n,s){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;D(r)&&(r=[r]);for(var a=0;a<r.length;a++)this.listeners[r[a]]=s,n.addEventListener(r[a],this.listeners[r[a]],i)}},{key:"off",value:function(r,n){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;D(r)&&(r=[r]);for(var i=0;i<r.length;i++)n.removeEventListener(r[i],this.listeners[r[i]],s)}},{key:"destroy",value:function(){delete this.listeners}}]),e}();function Ot(e,t,r){var n=new S,s={mount:function(){this.bind()},bind:function(){n.on("resize",window,B(function(){r.emit("resize")},e.settings.throttle))},unbind:function(){n.off("resize",window)}};return r.on("destroy",function(){s.unbind(),n.destroy()}),s}var Tt=["ltr","rtl"],kt={">":"<","<":">","=":"="};function Rt(e,t,r){var n={mount:function(){this.value=e.settings.direction},resolve:function(i){var a=i.slice(0,1);return this.is("rtl")?i.split(a).join(kt[a]):i},is:function(i){return this.value===i},addClass:function(){t.Html.root.classList.add(e.settings.classes.direction[this.value])},removeClass:function(){t.Html.root.classList.remove(e.settings.classes.direction[this.value])}};return h(n,"value",{get:function(){return n._v},set:function(i){Tt.indexOf(i)>-1?n._v=i:y("Direction value must be `ltr` or `rtl`")}}),r.on(["destroy","update"],function(){n.removeClass()}),r.on("update",function(){n.mount()}),r.on(["build.before","update"],function(){n.addClass()}),n}function At(e,t){return{modify:function(n){return t.Direction.is("rtl")?-n:n}}}function Ht(e,t){return{modify:function(n){var s=Math.floor(n/t.Sizes.slideWidth);return n+t.Gaps.value*s}}}function xt(e,t){return{modify:function(n){return n+t.Clones.grow/2}}}function Pt(e,t){return{modify:function(n){if(e.settings.focusAt>=0){var s=t.Peek.value;return k(s)?n-s.before:n-s}return n}}}function Lt(e,t){return{modify:function(n){var s=t.Gaps.value,i=t.Sizes.width,a=e.settings.focusAt,o=t.Sizes.slideWidth;return a==="center"?n-(i/2-o/2):n-o*a-s*a}}}function Mt(e,t,r){var n=[Ht,xt,Pt,Lt].concat(e._t,[At]);return{mutate:function(i){for(var a=0;a<n.length;a++){var o=n[a];P(o)&&P(o().modify)?i=o(e,t,r).modify(i):y("Transformer should be a function that returns an object with `modify()` method")}return i}}}function Bt(e,t,r){var n={set:function(i){var a=Mt(e,t).mutate(i),o="translate3d(".concat(-1*a,"px, 0px, 0px)");t.Html.wrapper.style.mozTransform=o,t.Html.wrapper.style.webkitTransform=o,t.Html.wrapper.style.transform=o},remove:function(){t.Html.wrapper.style.transform=""},getStartIndex:function(){var i=t.Sizes.length,a=e.index,o=e.settings.perView;return t.Run.isOffset(">")||t.Run.isOffset("|>")?i+(a-o):(a+o)%i},getTravelDistance:function(){var i=t.Sizes.slideWidth*e.settings.perView;return t.Run.isOffset(">")||t.Run.isOffset("|>")?i*-1:i}};return r.on("move",function(s){if(!e.isType("carousel")||!t.Run.isOffset())return n.set(s.movement);t.Transition.after(function(){r.emit("translate.jump"),n.set(t.Sizes.slideWidth*e.index)});var i=t.Sizes.slideWidth*t.Translate.getStartIndex();return n.set(i-t.Translate.getTravelDistance())}),r.on("destroy",function(){n.remove()}),n}function zt(e,t,r){var n=!1,s={compose:function(a){var o=e.settings;return n?"".concat(a," 0ms ").concat(o.animationTimingFunc):"".concat(a," ").concat(this.duration,"ms ").concat(o.animationTimingFunc)},set:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";t.Html.wrapper.style.transition=this.compose(a)},remove:function(){t.Html.wrapper.style.transition=""},after:function(a){setTimeout(function(){a()},this.duration)},enable:function(){n=!1,this.set()},disable:function(){n=!0,this.set()}};return h(s,"duration",{get:function(){var a=e.settings;return e.isType("slider")&&t.Run.offset?a.rewindDuration:a.animationDuration}}),r.on("move",function(){s.set()}),r.on(["build.before","resize","translate.jump"],function(){s.disable()}),r.on("run",function(){s.enable()}),r.on("destroy",function(){s.remove()}),s}var G=!1;try{var Y=Object.defineProperty({},"passive",{get:function(){G=!0}});window.addEventListener("testPassive",null,Y),window.removeEventListener("testPassive",null,Y)}catch{}var V=G,A=["touchstart","mousedown"],$=["touchmove","mousemove"],U=["touchend","touchcancel","mouseup","mouseleave"],J=["mousedown","mousemove","mouseup","mouseleave"];function Dt(e,t,r){var n=new S,s=0,i=0,a=0,o=!1,u=V?{passive:!0}:!1,f={mount:function(){this.bindSwipeStart()},start:function(d){if(!o&&!e.disabled){this.disable();var l=this.touches(d);s=null,i=m(l.pageX),a=m(l.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),r.emit("swipe.start")}},move:function(d){if(!e.disabled){var l=e.settings,g=l.touchAngle,p=l.touchRatio,v=l.classes,b=this.touches(d),w=m(b.pageX)-i,_=m(b.pageY)-a,O=Math.abs(w<<2),W=Math.abs(_<<2),tt=Math.sqrt(O+W),et=Math.sqrt(W);if(s=Math.asin(et/tt),s*180/Math.PI<g)d.stopPropagation(),t.Move.make(w*ft(p)),t.Html.root.classList.add(v.dragging),r.emit("swipe.move");else return!1}},end:function(d){if(!e.disabled){var l=e.settings,g=l.perSwipe,p=l.touchAngle,v=l.classes,b=this.touches(d),w=this.threshold(d),_=b.pageX-i,O=s*180/Math.PI;this.enable(),_>w&&O<p?t.Run.make(t.Direction.resolve("".concat(g,"<"))):_<-w&&O<p?t.Run.make(t.Direction.resolve("".concat(g,">"))):t.Move.make(),t.Html.root.classList.remove(v.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),r.emit("swipe.end")}},bindSwipeStart:function(){var d=this,l=e.settings,g=l.swipeThreshold,p=l.dragThreshold;g&&n.on(A[0],t.Html.wrapper,function(v){d.start(v)},u),p&&n.on(A[1],t.Html.wrapper,function(v){d.start(v)},u)},unbindSwipeStart:function(){n.off(A[0],t.Html.wrapper,u),n.off(A[1],t.Html.wrapper,u)},bindSwipeMove:function(){var d=this;n.on($,t.Html.wrapper,B(function(l){d.move(l)},e.settings.throttle),u)},unbindSwipeMove:function(){n.off($,t.Html.wrapper,u)},bindSwipeEnd:function(){var d=this;n.on(U,t.Html.wrapper,function(l){d.end(l)})},unbindSwipeEnd:function(){n.off(U,t.Html.wrapper)},touches:function(d){return J.indexOf(d.type)>-1?d:d.touches[0]||d.changedTouches[0]},threshold:function(d){var l=e.settings;return J.indexOf(d.type)>-1?l.dragThreshold:l.swipeThreshold},enable:function(){return o=!1,t.Transition.enable(),this},disable:function(){return o=!0,t.Transition.disable(),this}};return r.on("build.after",function(){t.Html.root.classList.add(e.settings.classes.swipeable)}),r.on("destroy",function(){f.unbindSwipeStart(),f.unbindSwipeMove(),f.unbindSwipeEnd(),n.destroy()}),f}function jt(e,t,r){var n=new S,s={mount:function(){this.bind()},bind:function(){n.on("dragstart",t.Html.wrapper,this.dragstart)},unbind:function(){n.off("dragstart",t.Html.wrapper)},dragstart:function(a){a.preventDefault()}};return r.on("destroy",function(){s.unbind(),n.destroy()}),s}function It(e,t,r){var n=new S,s=!1,i=!1,a={mount:function(){this._a=t.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){n.on("click",t.Html.wrapper,this.click)},unbind:function(){n.off("click",t.Html.wrapper)},click:function(u){i&&(u.stopPropagation(),u.preventDefault())},detach:function(){if(i=!0,!s){for(var u=0;u<this.items.length;u++)this.items[u].draggable=!1;s=!0}return this},attach:function(){if(i=!1,s){for(var u=0;u<this.items.length;u++)this.items[u].draggable=!0;s=!1}return this}};return h(a,"items",{get:function(){return a._a}}),r.on("swipe.move",function(){a.detach()}),r.on("swipe.end",function(){t.Transition.after(function(){a.attach()})}),r.on("destroy",function(){a.attach(),a.unbind(),n.destroy()}),a}var Nt='[data-glide-el="controls[nav]"]',E='[data-glide-el^="controls"]',Vt="".concat(E,' [data-glide-dir*="<"]'),Et="".concat(E,' [data-glide-dir*=">"]');function Wt(e,t,r){var n=new S,s=V?{passive:!0}:!1,i={mount:function(){this._n=t.Html.root.querySelectorAll(Nt),this._c=t.Html.root.querySelectorAll(E),this._arrowControls={previous:t.Html.root.querySelectorAll(Vt),next:t.Html.root.querySelectorAll(Et)},this.addBindings()},setActive:function(){for(var o=0;o<this._n.length;o++)this.addClass(this._n[o].children)},removeActive:function(){for(var o=0;o<this._n.length;o++)this.removeClass(this._n[o].children)},addClass:function(o){var u=e.settings,f=o[e.index];!f||f&&(f.classList.add(u.classes.nav.active),C(f).forEach(function(c){c.classList.remove(u.classes.nav.active)}))},removeClass:function(o){var u=o[e.index];u&&u.classList.remove(e.settings.classes.nav.active)},setArrowState:function(){if(!e.settings.rewind){var o=i._arrowControls.next,u=i._arrowControls.previous;this.resetArrowState(o,u),e.index===0&&this.disableArrow(u),e.index===t.Run.length&&this.disableArrow(o)}},resetArrowState:function(){for(var o=e.settings,u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];f.forEach(function(d){N(d).forEach(function(l){l.classList.remove(o.classes.arrow.disabled)})})},disableArrow:function(){for(var o=e.settings,u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];f.forEach(function(d){N(d).forEach(function(l){l.classList.add(o.classes.arrow.disabled)})})},addBindings:function(){for(var o=0;o<this._c.length;o++)this.bind(this._c[o].children)},removeBindings:function(){for(var o=0;o<this._c.length;o++)this.unbind(this._c[o].children)},bind:function(o){for(var u=0;u<o.length;u++)n.on("click",o[u],this.click),n.on("touchstart",o[u],this.click,s)},unbind:function(o){for(var u=0;u<o.length;u++)n.off(["click","touchstart"],o[u])},click:function(o){!V&&o.type==="touchstart"&&o.preventDefault();var u=o.currentTarget.getAttribute("data-glide-dir");t.Run.make(t.Direction.resolve(u))}};return h(i,"items",{get:function(){return i._c}}),r.on(["mount.after","move.after"],function(){i.setActive()}),r.on(["mount.after","run"],function(){i.setArrowState()}),r.on("destroy",function(){i.removeBindings(),i.removeActive(),n.destroy()}),i}function Ft(e,t,r){var n=new S,s={mount:function(){e.settings.keyboard&&this.bind()},bind:function(){n.on("keyup",document,this.press)},unbind:function(){n.off("keyup",document)},press:function(a){var o=e.settings.perSwipe;a.code==="ArrowRight"&&t.Run.make(t.Direction.resolve("".concat(o,">"))),a.code==="ArrowLeft"&&t.Run.make(t.Direction.resolve("".concat(o,"<")))}};return r.on(["destroy","update"],function(){s.unbind()}),r.on("update",function(){s.mount()}),r.on("destroy",function(){n.destroy()}),s}function qt(e,t,r){var n=new S,s={mount:function(){this.enable(),this.start(),e.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var a=this;!this._e||(this.enable(),e.settings.autoplay&&Z(this._i)&&(this._i=setInterval(function(){a.stop(),t.Run.make(">"),a.start(),r.emit("autoplay")},this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var a=this;n.on("mouseover",t.Html.root,function(){a._e&&a.stop()}),n.on("mouseout",t.Html.root,function(){a._e&&a.start()})},unbind:function(){n.off(["mouseover","mouseout"],t.Html.root)}};return h(s,"time",{get:function(){var a=t.Html.slides[e.index].getAttribute("data-glide-autoplay");return m(a||e.settings.autoplay)}}),r.on(["destroy","update"],function(){s.unbind()}),r.on(["run.before","swipe.start","update"],function(){s.stop()}),r.on(["pause","destroy"],function(){s.disable(),s.stop()}),r.on(["run.after","swipe.end"],function(){s.start()}),r.on(["play"],function(){s.enable(),s.start()}),r.on("update",function(){s.mount()}),r.on("destroy",function(){n.destroy()}),s}function Q(e){return k(e)?dt(e):(y("Breakpoints option must be an object"),{})}function Kt(e,t,r){var n=new S,s=e.settings,i=Q(s.breakpoints),a=Object.assign({},s),o={match:function(f){if(typeof window.matchMedia<"u"){for(var c in f)if(f.hasOwnProperty(c)&&window.matchMedia("(max-width: ".concat(c,"px)")).matches)return f[c]}return a}};return Object.assign(s,o.match(i)),n.on("resize",window,B(function(){e.settings=I(s,o.match(i))},e.settings.throttle)),r.on("update",function(){i=Q(i),a=Object.assign({},s)}),r.on("destroy",function(){n.off("resize",window)}),o}var Xt={Html:pt,Translate:Bt,Transition:zt,Direction:Rt,Peek:yt,Sizes:wt,Gaps:mt,Move:bt,Clones:St,Resize:Ot,Build:_t,Run:vt,Swipe:Dt,Images:jt,Anchors:It,Controls:Wt,Keyboard:Ft,Autoplay:qt,Breakpoints:Kt},Yt=function(e){rt(r,e);var t=ot(r);function r(){return L(this,r),t.apply(this,arguments)}return M(r,[{key:"mount",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return x(T(r.prototype),"mount",this).call(this,Object.assign({},Xt,s))}}]),r}(gt);const $t=new Yt(".glide",{startAt:1,perView:1,peek:{before:60,after:40}});$t.mount();
