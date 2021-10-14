import{d as it,r as Rt,o as Vn,a as De,b as xe,c as Mn,e as F,f as G,g as M,h as ot,i as nt,j as Bn,k as Z,w as X,F as rt,l as Et,m as St,V as ke,n as Ve}from"./vendor.79f84736.js";const Me=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const l of u.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerpolicy&&(u.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?u.credentials="include":s.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=e(s);fetch(s.href,u)}};Me();/*!
 * Splide.js
 * Version  : 3.1.6
 * License  : MIT
 * Copyright: 2021 Naotoshi Fujita
 */const Y="splide",Fn=`data-${Y}`,yt=1,Be=2,ln=3,Un=4,jt=5,Fe={CREATED:yt,MOUNTED:Be,IDLE:ln,MOVING:Un,DESTROYED:jt},an=10,Ue=20;function $t(t){t.length=0}function Pt(t){return!dn(t)&&typeof t=="object"}function zn(t){return Array.isArray(t)}function ze(t){return typeof t=="function"}function ct(t){return typeof t=="string"}function fn(t){return typeof t=="undefined"}function dn(t){return t===null}function Gn(t){return t instanceof HTMLElement}function Dt(t){return zn(t)?t:[t]}function ut(t,n){Dt(t).forEach(n)}function xt(t,n){return t.indexOf(n)>-1}function kt(t,n){return t.push(...Dt(n)),t}const Ge=Array.prototype;function vt(t,n,e){return Ge.slice.call(t,n,e)}function We(t,n){return vt(t).filter(n)[0]}function At(t,n,e){t&&ut(n,o=>{o&&t.classList[e?"add":"remove"](o)})}function lt(t,n){At(t,ct(n)?n.split(" "):n,!0)}function Zt(t,n){ut(n,t.appendChild.bind(t))}function pn(t,n){ut(t,e=>{const o=n.parentNode;o&&o.insertBefore(e,n)})}function Wn(t,n){return(t.msMatchesSelector||t.matches).call(t,n)}function Hn(t,n){return t?vt(t.children).filter(e=>Wn(e,n)):[]}function at(t,n){return n?Hn(t,n)[0]:t.firstElementChild}function pt(t,n){if(t){const e=Object.keys(t);for(let o=0;o<e.length;o++){const s=e[o];if(s!=="__proto__"&&n(t[s],s)===!1)break}}return t}function _n(t){return vt(arguments,1).forEach(n=>{pt(n,(e,o)=>{t[o]=n[o]})}),t}function _t(t,n){return pt(n,(e,o)=>{zn(e)?t[o]=e.slice():Pt(e)?t[o]=_t(Pt(t[o])?t[o]:{},e):t[o]=e}),t}function st(t,n){t&&ut(n,e=>{t.removeAttribute(e)})}function B(t,n,e){Pt(n)?pt(n,(o,s)=>{B(t,s,o)}):dn(e)?st(t,n):t.setAttribute(n,String(e))}function Tt(t,n,e){const o=document.createElement(t);return n&&(ct(n)?lt(o,n):B(o,n)),e&&Zt(e,o),o}function Q(t,n,e){if(fn(e))return getComputedStyle(t)[n];if(!dn(e)){const{style:o}=t;e=`${e}`,o[n]!==e&&(o[n]=e)}}function Qt(t,n){Q(t,"display",n)}function Jt(t,n){return t.getAttribute(n)}function Yn(t,n){return t&&t.classList.contains(n)}function J(t){return t.getBoundingClientRect()}function Nt(t){ut(t,n=>{n&&n.parentNode&&n.parentNode.removeChild(n)})}function He(t,n){if(ct(n)){const e=Tt("div",{style:`width: ${n}; position: absolute;`},t);n=J(e).width,Nt(e)}return n}function Xn(t){return at(new DOMParser().parseFromString(t,"text/html").body)}function ft(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function ht(t,n){return t&&t.querySelector(n)}function hn(t,n){return vt(t.querySelectorAll(n))}function Vt(t,n){At(t,n,!1)}function dt(t){return ct(t)?t:t?`${t}px`:""}function Mt(t,n=""){if(!t)throw new Error(`[${Y}] ${n}`)}function qn(t){setTimeout(t)}const mn=()=>{};function Kn(t){return requestAnimationFrame(t)}const{min:Bt,max:Ft,floor:gn,ceil:Ut,abs:tt}=Math;function Ye(t,n,e){return tt(t-n)<e}function zt(t,n,e,o){const s=Bt(n,e),u=Ft(n,e);return o?s<t&&t<u:s<=t&&t<=u}function Lt(t,n,e){const o=Bt(n,e),s=Ft(n,e);return Bt(Ft(o,t),s)}function En(t){return+(t>0)-+(t<0)}function jn(t,n){return ut(n,e=>{t=t.replace("%s",`${e}`)}),t}function Sn(t){return t<10?`0${t}`:`${t}`}const Zn={};function Xe(t){return`${t}${Sn(Zn[t]=(Zn[t]||0)+1)}`}function qe(){let t={};function n(c,i,_,r=an){l(c,(a,d)=>{t[a]=t[a]||[],kt(t[a],{_event:a,_callback:i,_namespace:d,_priority:r,_key:_}).sort((f,S)=>f._priority-S._priority)})}function e(c,i){l(c,(_,r)=>{const a=t[_];t[_]=a&&a.filter(d=>d._key?d._key!==i:i||d._namespace!==r)})}function o(c){pt(t,(i,_)=>{e(_,c)})}function s(c){(t[c]||[]).forEach(i=>{i._callback.apply(i,vt(arguments,1))})}function u(){t={}}function l(c,i){Dt(c).join(" ").split(" ").forEach(_=>{const r=_.split(".");i(r[0],r[1])})}return{on:n,off:e,offBy:o,emit:s,destroy:u}}const et="mounted",Qn="ready",mt="move",bt="moved",yn="click",Jn="active",te="inactive",ne="visible",ee="hidden",oe="slide:keydown",U="refresh",q="updated",gt="resize",$n="resized",se="repositioned",ie="drag",re="dragging",ce="dragged",vn="scroll",Gt="scrolled",An="destroy",ue="arrows:mounted",le="arrows:updated",ae="pagination:mounted",fe="pagination:updated",de="navigation:mounted",pe="autoplay:play",_e="autoplay:playing",he="autoplay:pause",Tn="lazyload:loaded";function z(t){const{event:n}=t,e={};let o=[];function s(r,a,d){n.on(r,a,e,d)}function u(r){n.off(r,e)}function l(r,a,d,f){i(r,a,(S,m)=>{o.push([S,m,d,f]),S.addEventListener(m,d,f)})}function c(r,a,d){i(r,a,(f,S)=>{o=o.filter(m=>m[0]===f&&m[1]===S&&(!d||m[2]===d)?(f.removeEventListener(S,m[2],m[3]),!1):!0)})}function i(r,a,d){ut(r,f=>{f&&a.split(" ").forEach(d.bind(null,f))})}function _(){o=o.filter(r=>c(r[0],r[1])),n.offBy(e)}return n.on(An,_,e),{on:s,off:u,emit:n.emit,bind:l,unbind:c,destroy:_}}function Nn(t,n,e,o){const{now:s}=Date;let u,l=0,c,i=!0,_=0;function r(){if(!i){const A=s()-u;if(A>=t?(l=1,u=s()):l=A/t,e&&e(l),l===1&&(n(),o&&++_>=o))return d();Kn(r)}}function a(A){!A&&S(),u=s()-(A?l*t:0),i=!1,Kn(r)}function d(){i=!0}function f(){u=s(),l=0,e&&e(l)}function S(){cancelAnimationFrame(c),l=0,c=0,i=!0}function m(){return i}return{start:a,rewind:f,pause:d,cancel:S,isPaused:m}}function Ke(t){let n=t;function e(s){n=s}function o(s){return xt(Dt(s),n)}return{set:e,is:o}}function me(t,n){let e;function o(){e||(e=Nn(n||0,()=>{t.apply(this,arguments),e=null},null,1),e.start())}return o}function je(t,n,e){const o=me(r);let s,u,l;function c(){try{_t(e,JSON.parse(Jt(t.root,Fn)))}catch(f){Mt(!1,f.message)}s=_t({},e);const{breakpoints:d}=e;if(d){const f=e.mediaQuery==="min";u=Object.keys(d).sort((S,m)=>f?+m-+S:+S-+m).map(S=>[S,matchMedia(`(${f?"min":"max"}-width:${S}px)`)]),r()}}function i(){u&&addEventListener("resize",o)}function _(d){d&&removeEventListener("resize",o)}function r(){const d=We(u,f=>f[1].matches)||[];d[0]!==l&&a(l=d[0])}function a(d){const f=e.breakpoints[d]||s;f.destroy?(t.options=s,t.destroy(f.destroy==="completely")):(t.state.is(jt)&&(_(!0),t.mount()),t.options=f)}return{setup:c,mount:i,destroy:_}}const ge="rtl",Ln="ttb",Ze={marginRight:["marginBottom","marginLeft"],autoWidth:["autoHeight"],fixedWidth:["fixedHeight"],paddingLeft:["paddingTop","paddingRight"],paddingRight:["paddingBottom","paddingLeft"],width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]};function Qe(t,n,e){function o(u,l){const{direction:c}=e,i=c===ge&&!l?1:c===Ln?0:-1;return Ze[u][i]||u}function s(u){return u*(e.direction===ge?1:-1)}return{resolve:o,orient:s}}const tn=Y,Je=`${Y}__slider`,to=`${Y}__track`,no=`${Y}__list`,nn=`${Y}__slide`,Ee=`${nn}--clone`,eo=`${nn}__container`,Se=`${Y}__arrows`,bn=`${Y}__arrow`,ye=`${bn}--prev`,$e=`${bn}--next`,ve=`${Y}__pagination`,oo=`${ve}__page`,Ae=`${Y}__progress`,so=`${Ae}__bar`,io=`${Y}__autoplay`,ro=`${Y}__play`,co=`${Y}__pause`,uo=`${Y}__spinner`,lo="is-initialized",It="is-active",Te="is-prev",Ne="is-next",In="is-visible",On="is-loading",ao=[It,In,Te,Ne,On],fo={slide:nn,clone:Ee,arrows:Se,arrow:bn,prev:ye,next:$e,pagination:ve,page:oo,spinner:uo};function po(t,n,e){const{on:o}=z(t),{root:s}=t,u={},l=[];let c,i,_,r;function a(){A(),$(),lt(s,c=h())}function d(){o(U,S,an-2),o(q,m)}function f(){[s,_,r].forEach(E=>{st(E,"style")}),$t(l),Vt(s,c)}function S(){f(),a()}function m(){Vt(s,c),lt(s,c=h())}function A(){i=at(s,`.${Je}`),_=ht(s,`.${to}`),r=at(_,`.${no}`),Mt(_&&r,"A track/list element is missing."),kt(l,Hn(r,`.${nn}:not(.${Ee})`));const E=v(`.${io}`),T=v(`.${Se}`);_n(u,{root:s,slider:i,track:_,list:r,slides:l,arrows:T,autoplay:E,prev:ht(T,`.${ye}`),next:ht(T,`.${$e}`),bar:ht(v(`.${Ae}`),`.${so}`),play:ht(E,`.${ro}`),pause:ht(E,`.${co}`)})}function $(){const E=s.id||Xe(Y);s.id=E,_.id=_.id||`${E}-track`,r.id=r.id||`${E}-list`}function v(E){return at(s,E)||at(i,E)}function h(){return[`${tn}--${e.type}`,`${tn}--${e.direction}`,e.drag&&`${tn}--draggable`,e.isNavigation&&`${tn}--nav`,It]}return _n(u,{setup:a,mount:d,destroy:f})}const en="role",Ot="aria-controls",on="aria-current",wt="aria-label",Le="aria-hidden",Wt="tabindex",_o="disabled",be="aria-orientation",sn=[en,Ot,on,wt,Le,be,Wt,_o],Ct="slide",Ht="loop",rn="fade";function ho(t,n,e,o){const{on:s,emit:u,bind:l,destroy:c}=z(t),{Components:i,root:_,options:r}=t,{isNavigation:a,updateOnMove:d}=r,{resolve:f}=i.Direction,S=Jt(o,"style"),m=e>-1,A=at(o,`.${eo}`),$=r.focusableNodes&&hn(o,r.focusableNodes);let v;function h(){E(),l(o,"click keydown",b=>{u(b.type==="click"?yn:oe,this,b)}),s([U,se,bt,Gt],D.bind(this)),d&&s(mt,O.bind(this))}function E(){if(m||(o.id=`${_.id}-slide${Sn(n+1)}`),a){const b=m?e:n,V=jn(r.i18n.slideX,b+1),g=t.splides.map(p=>p.root.id).join(" ");B(o,wt,V),B(o,Ot,g),B(o,en,"menuitem")}}function T(){v=!0,c(),Vt(o,ao),st(o,sn),B(o,"style",S)}function O(b,V,g){v||(D.call(this),g===n&&P.call(this,!0))}function D(){if(!v){const{index:b}=t;P.call(this,C()),y.call(this,N()),At(o,Te,n===b-1),At(o,Ne,n===b+1)}}function P(b){b!==Yn(o,It)&&(At(o,It,b),a&&B(o,on,b||null),u(b?Jn:te,this))}function y(b){const V=!b&&!C();B(o,Le,V||null),B(o,Wt,!V&&r.slideFocus?0:null),$&&$.forEach(g=>{B(g,Wt,V?-1:null)}),b!==Yn(o,In)&&(At(o,In,b),u(b?ne:ee,this))}function L(b,V,g){Q(g&&A||o,b,V)}function C(){return t.index===n}function N(){if(t.is(rn))return C();const b=J(i.Elements.track),V=J(o),g=f("left"),p=f("right");return gn(b[g])<=Ut(V[g])&&gn(V[p])<=Ut(b[p])}function k(b,V){let g=tt(b-n);return!t.is(Ct)&&!m&&(g=Bt(g,t.length-g)),g<=V}return{index:n,slideIndex:e,slide:o,container:A,isClone:m,mount:h,destroy:T,style:L,isWithin:k}}function mo(t,n,e){const{on:o,emit:s,bind:u}=z(t),{slides:l,list:c}=n.Elements,i=[];function _(){r(),o(U,d),o([et,U],()=>{i.sort((y,L)=>y.index-L.index)})}function r(){l.forEach((y,L)=>{f(y,L,-1)})}function a(){h(y=>{y.destroy()}),$t(i)}function d(){a(),r()}function f(y,L,C){const N=ho(t,L,C,y);N.mount(),i.push(N)}function S(y){return y?E(L=>!L.isClone):i}function m(y){const{Controller:L}=n,C=L.toIndex(y),N=L.hasFocus()?1:e.perPage;return E(k=>zt(k.index,C,C+N-1))}function A(y){return E(y)[0]}function $(y,L){ut(y,C=>{if(ct(C)&&(C=Xn(C)),Gn(C)){const N=l[L];N?pn(C,N):Zt(c,C),lt(C,e.classes.slide),O(C,s.bind(null,gt))}}),s(U)}function v(y){Nt(E(y).map(L=>L.slide)),s(U)}function h(y,L){S(L).forEach(y)}function E(y){return i.filter(ze(y)?y:L=>ct(y)?Wn(L.slide,y):xt(Dt(y),L.index))}function T(y,L,C){h(N=>{N.style(y,L,C)})}function O(y,L){const C=hn(y,"img");let{length:N}=C;N?C.forEach(k=>{u(k,"load error",()=>{--N||L()})}):L()}function D(y){return y?l.length:i.length}function P(){return i.length>e.perPage}return{mount:_,destroy:a,register:f,get:S,getIn:m,getAt:A,add:$,remove:v,forEach:h,filter:E,style:T,getLength:D,isEnough:P}}function go(t,n,e){const{on:o,bind:s,emit:u}=z(t),{Slides:l}=n,{resolve:c}=n.Direction,{track:i,list:_}=n.Elements,{getAt:r}=l;let a;function d(){f(),s(window,"resize load",me(u.bind(this,gt))),o([q,U],f),o(gt,S)}function f(){a=e.direction===Ln,Q(t.root,"maxWidth",dt(e.width)),Q(i,c("paddingLeft"),A(!1)),Q(i,c("paddingRight"),A(!0)),S()}function S(){Q(i,"height",$()),l.style(c("marginRight"),dt(e.gap)),l.style("width",h()||null),m(),u($n)}function m(){l.style("height",E()||null,!0)}function A(N){const{padding:k}=e,b=c(N?"right":"left",!0);return k&&dt(k[b]||(Pt(k)?0:k))||"0px"}function $(){let N="";return a&&(N=v(),Mt(N,"height or heightRatio is missing."),N=`calc(${N} - ${A(!1)} - ${A(!0)})`),N}function v(){return dt(e.height||J(_).width*e.heightRatio)}function h(){return e.autoWidth?"":dt(e.fixedWidth)||(a?"":T())}function E(){return dt(e.fixedHeight)||(a?e.autoHeight?"":T():v())}function T(){const N=dt(e.gap);return`calc((100%${N&&` + ${N}`})/${e.perPage||1}${N&&` - ${N}`})`}function O(){return J(_)[c("width")]}function D(N,k){const b=r(N||0);return b?J(b.slide)[c("width")]+(k?0:L()):0}function P(N,k){const b=r(N);if(b){const V=J(b.slide)[c("right")],g=J(_)[c("left")];return tt(V-g)+(k?0:L())}return 0}function y(){return P(t.length-1,!0)-P(-1,!0)}function L(){const N=r(0);return N&&parseFloat(Q(N.slide,c("marginRight")))||0}function C(N){return parseFloat(Q(i,c(`padding${N?"Right":"Left"}`,!0)))||0}return{mount:d,listSize:O,slideSize:D,sliderSize:y,totalSize:P,getPadding:C}}function Eo(t,n,e){const{on:o,emit:s}=z(t),{Elements:u,Slides:l}=n,{resolve:c}=n.Direction,i=[];let _;function r(){a(),o(U,f),o([q,gt],S)}function a(){(_=$())&&(m(_),s(gt))}function d(){Nt(i),$t(i)}function f(){d(),a()}function S(){_<$()&&s(U)}function m(v){const h=l.get().slice(),{length:E}=h;if(E){for(;h.length<v;)kt(h,h);kt(h.slice(-v),h.slice(0,v)).forEach((T,O)=>{const D=O<v,P=A(T.slide,O);D?pn(P,h[0].slide):Zt(u.list,P),kt(i,P),l.register(P,O-v+(D?0:E),T.index)})}}function A(v,h){const E=v.cloneNode(!0);return lt(E,e.classes.clone),E.id=`${t.root.id}-clone${Sn(h+1)}`,E}function $(){let{clones:v}=e;if(!t.is(Ht))v=0;else if(!v){const h=He(u.list,e[c("fixedWidth")]);v=(h&&Ut(J(u.track)[c("width")]/h)||e[c("autoWidth")]&&t.length||e.perPage)*(e.drag?(e.flickMaxPages||1)+1:2)}return v}return{mount:r,destroy:d}}function So(t,n,e){const{on:o,emit:s}=z(t),{slideSize:u,getPadding:l,totalSize:c,listSize:i,sliderSize:_}=n.Layout,{resolve:r,orient:a}=n.Direction,{list:d,track:f}=n.Elements;let S;function m(){o([et,$n,q,U],$)}function A(){st(d,"style")}function $(){n.Scroll.cancel(),h(t.index),s(se)}function v(g,p,w,x){if(!b()){const{set:R}=t.state,W=L(),K=g!==p;S=K||e.waitForTransition,R(Un),s(mt,p,w,g),n.Transition.start(g,()=>{K&&h(p),S=!1,R(ln),s(bt,p,w,g),e.trimSpace==="move"&&g!==w&&W===L()?n.Controller.go(g>w?">":"<",!1,x):x&&x()})}}function h(g){E(y(g,!0))}function E(g,p){t.is(rn)||(d.style.transform=`translate${r("X")}(${p?g:T(g)}px)`)}function T(g){if(!S&&t.is(Ht)){const p=a(g-L()),w=V(!1,g)&&p<0,x=V(!0,g)&&p>0;(w||x)&&(g=O(g,x))}return g}function O(g,p){const w=g-k(p),x=_();return g-=En(w)*x*Ut(tt(w)/x),g}function D(){S=!1,E(L()),n.Transition.cancel()}function P(g){const p=n.Slides.get();let w=0,x=1/0;for(let R=0;R<p.length;R++){const W=p[R].index,K=tt(y(W,!0)-g);if(K<=x)x=K,w=W;else break}return w}function y(g,p){const w=a(c(g-1)-N(g));return p?C(w):w}function L(){const g=r("left");return J(d)[g]-J(f)[g]+a(l(!1))}function C(g){return e.trimSpace&&t.is(Ct)&&(g=Lt(g,0,a(_()-i()))),g}function N(g){const{focus:p}=e;return p==="center"?(i()-u(g,!0))/2:+p*u(g)||0}function k(g){return y(g?n.Controller.getEnd():0,!!e.trimSpace)}function b(){return!!S}function V(g,p){p=fn(p)?L():p;const w=g!==!0&&a(p)<a(k(!1)),x=g!==!1&&a(p)>a(k(!0));return w||x}return{mount:m,destroy:A,move:v,jump:h,translate:E,shift:O,cancel:D,toIndex:P,toPosition:y,getPosition:L,getLimit:k,isBusy:b,exceededLimit:V}}function yo(t,n,e){const{on:o}=z(t),{Move:s}=n,{getPosition:u,getLimit:l}=s,{isEnough:c,getLength:i}=n.Slides,_=t.is(Ht),r=t.is(Ct);let a=e.start||0,d=a,f,S,m;function A(){$(),o([q,U],$,an-1)}function $(){f=i(!0),S=e.perMove,m=e.perPage,a=Lt(a,0,f-1)}function v(p,w,x){const R=E(p);if(e.useScroll)h(R,!0,!0,e.speed,x);else{const W=L(R);W>-1&&!s.isBusy()&&(w||W!==a)&&(b(W),s.move(R,W,d,x))}}function h(p,w,x,R,W){const K=w?p:k(p);n.Scroll.scroll(w||x?s.toPosition(K,!0):p,R,()=>{b(s.toIndex(s.getPosition())),W&&W()})}function E(p){let w=a;if(ct(p)){const[,x,R]=p.match(/([+\-<>])(\d+)?/)||[];x==="+"||x==="-"?w=P(a+ +`${x}${+R||1}`,a,!0):x===">"?w=R?C(+R):T(!0):x==="<"&&(w=O(!0))}else _?w=Lt(p,-m,f+m-1):w=Lt(p,0,y());return w}function T(p){return D(!1,p)}function O(p){return D(!0,p)}function D(p,w){const x=S||(g()?1:m),R=P(a+x*(p?-1:1),a);return R===-1&&r&&!Ye(u(),l(!p),1)?p?0:y():w?R:L(R)}function P(p,w,x){if(c()){const R=y();p<0||p>R?zt(0,p,w,!0)||zt(R,w,p,!0)?p=C(N(p)):_?p=S?p:p<0?-(f%m||m):f:e.rewind?p=p<0?R:0:p=-1:!_&&!x&&p!==w&&(p=S?p:C(N(w)+(p<w?-1:1)))}else p=-1;return p}function y(){let p=f-m;return(g()||_&&S)&&(p=f-1),Ft(p,0)}function L(p){return _?c()?p%f+(p<0?f:0):-1:p}function C(p){return Lt(g()?p:m*p,0,y())}function N(p){return g()||(p=zt(p,f-m,f-1)?f-1:p,p=gn(p/m)),p}function k(p){const w=s.toIndex(p);return r?Lt(w,0,y()):w}function b(p){p!==a&&(d=a,a=p)}function V(p){return p?d:a}function g(){return!fn(e.focus)||e.isNavigation}return{mount:A,go:v,scroll:h,getNext:T,getPrev:O,getEnd:y,setIndex:b,getIndex:V,toIndex:C,toPage:N,toDest:k,hasFocus:g}}const $o="http://www.w3.org/2000/svg",vo="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",cn=40;function Ao(t,n,e){const{on:o,bind:s,emit:u}=z(t),{classes:l,i18n:c}=e,{Elements:i,Controller:_}=n;let r=i.arrows,a=i.prev,d=i.next,f;const S={};function m(){A(),o(q,A)}function A(){if(e.arrows&&(!a||!d)&&h(),a&&d)if(S.prev)Qt(r,e.arrows===!1?"none":"");else{const{id:O}=i.track;B(a,Ot,O),B(d,Ot,O),S.prev=a,S.next=d,v(),u(ue,a,d)}}function $(){f?Nt(r):(st(a,sn),st(d,sn))}function v(){const{go:O}=_;o([et,bt,q,U,Gt],T),s(d,"click",()=>{O(">",!0)}),s(a,"click",()=>{O("<",!0)})}function h(){r=Tt("div",l.arrows),a=E(!0),d=E(!1),f=!0,Zt(r,[a,d]),pn(r,at(e.arrows==="slider"&&i.slider||t.root))}function E(O){const D=`<button class="${l.arrow} ${O?l.prev:l.next}" type="button"><svg xmlns="${$o}" viewBox="0 0 ${cn} ${cn}" width="${cn}" height="${cn}"><path d="${e.arrowPath||vo}" />`;return Xn(D)}function T(){const O=t.index,D=_.getPrev(),P=_.getNext(),y=D>-1&&O<D?c.last:c.prev,L=P>-1&&O>P?c.first:c.next;a.disabled=D<0,d.disabled=P<0,B(a,wt,y),B(d,wt,L),u(le,a,d,D,P)}return{arrows:S,mount:m,destroy:$}}function To(t,n,e){const{on:o,bind:s,emit:u}=z(t),{Elements:l}=n,c=Nn(e.interval,t.go.bind(t,">"),v),{isPaused:i}=c;let _,r,a;function d(){const{autoplay:h}=e;h&&(f(!0),f(!1),S(),h!=="pause"&&m())}function f(h){const E=h?"pause":"play",T=l[E];T&&(B(T,Ot,l.track.id),B(T,wt,e.i18n[E]),s(T,"click",h?A:m))}function S(){const{root:h}=l;e.pauseOnHover&&s(h,"mouseenter mouseleave",E=>{_=E.type==="mouseenter",$()}),e.pauseOnFocus&&s(h,"focusin focusout",E=>{r=E.type==="focusin",$()}),o([mt,vn,U],c.rewind)}function m(){i()&&n.Slides.isEnough()&&(c.start(!e.resetProgress),r=_=a=!1,u(pe))}function A(h=!0){i()||(c.pause(),u(he)),a=h}function $(){a||(!_&&!r?m():A(!1))}function v(h){const{bar:E}=l;E&&Q(E,"width",`${h*100}%`),u(_e,h)}return{mount:d,destroy:c.cancel,play:m,pause:A,isPaused:i}}function No(t,n,e){const{on:o}=z(t);function s(){e.cover&&(o(Tn,(i,_)=>{c(!0,i,_)}),o([et,q,U],l.bind(null,!0)))}function u(){l(!1)}function l(i){n.Slides.forEach(_=>{const r=at(_.container||_.slide,"img");r&&r.src&&c(i,r,_)})}function c(i,_,r){r.style("background",i?`center/cover no-repeat url("${_.src}")`:"",!0),Qt(_,i?"none":"")}return{mount:s,destroy:u}}const Lo=10,bo=600,Io=.6,Oo=1.5,wo=800;function Co(t,n,e){const{on:o,emit:s}=z(t),{Move:u}=n,{getPosition:l,getLimit:c,exceededLimit:i}=u;let _,r;function a(){o(mt,A),o([q,U],$)}function d(h,E,T,O){const D=l();let P=1;E=E||m(tt(h-D)),r=T,A(),_=Nn(E,S,y=>{const L=l(),N=(D+(h-D)*v(y)-l())*P;u.translate(L+N),t.is(Ct)&&!O&&i()&&(P*=Io,tt(N)<Lo&&f(i(!1)))},1),s(vn),_.start()}function f(h){d(c(!h),bo,null,!0)}function S(){const h=l(),E=u.toIndex(h);zt(E,0,t.length-1)||u.translate(u.shift(h,E>0),!0),r&&r(),s(Gt)}function m(h){return Ft(h/Oo,wo)}function A(){_&&_.cancel()}function $(){_&&!_.isPaused()&&(A(),S())}function v(h){const{easingFunc:E}=e;return E?E(h):1-Math.pow(1-h,4)}return{mount:a,destroy:A,scroll:d,cancel:$}}const Ro=5,Ie=200,Po="touchstart mousedown",wn="touchmove mousemove",Cn="touchend touchcancel mouseup";function Do(t,n,e){const{on:o,emit:s,bind:u,unbind:l}=z(t),{Move:c,Scroll:i,Controller:_}=n,{track:r}=n.Elements,{resolve:a,orient:d}=n.Direction,{getPosition:f,exceededLimit:S}=c,m={passive:!1,capture:!0};let A,$,v,h,E,T,O=!1,D,P,y;function L(){u(r,wn,mn,m),u(r,Cn,mn,m),u(r,Po,N,m),u(r,"click",g,{capture:!0}),u(r,"dragstart",ft),o([et,q],C)}function C(){const{drag:I}=e;xn(!I),E=I==="free"}function N(I){if(!P){const H=W(I);(H||!I.button)&&(c.isBusy()?ft(I,!0):(y=H?r:window,v=null,h=null,D=!1,u(y,wn,k,m),u(y,Cn,b,m),c.cancel(),i.cancel(),V(I)))}}function k(I){if(h||s(ie),h=I,I.cancelable)if(T){const H=K(I)-K($)>Ie,j=O!==(O=S());(H||j)&&V(I),c.translate(A+Re(R(I)-R($))),s(re),D=!0,ft(I)}else{const H=tt(R(I)-R($));let{dragMinThreshold:j}=e;j=Pt(j)?j:{mouse:0,touch:+j||10},T=H>(W(I)?j.touch:j.mouse),p()&&ft(I)}}function b(I){if(l(y,wn,k),l(y,Cn,b),h){if(T||I.cancelable&&p()){const H=w(I),j=x(H);E?_.scroll(j):t.is(rn)?_.go(t.index+d(En(H))):_.go(_.toDest(j),!0),ft(I)}s(ce)}T=!1}function V(I){v=$,$=I,A=f()}function g(I){!P&&D&&ft(I,!0)}function p(){const I=tt(R(h)-R($)),H=tt(R(h,!0)-R($,!0));return I>H}function w(I){if(t.is(Ht)||!O){const H=$===h&&v||$,j=R(h)-R(H),kn=K(I)-K(H),Pe=K(I)-K(h)<Ie;if(kn&&Pe)return j/kn}return 0}function x(I){return f()+En(I)*Bt(tt(I)*(e.flickPower||600),E?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}function R(I,H){return(W(I)?I.touches[0]:I)[`page${a(H?"Y":"X")}`]}function W(I){return typeof TouchEvent!="undefined"&&I instanceof TouchEvent}function K(I){return I.timeStamp}function Re(I){return I/(O&&t.is(Ct)?Ro:1)}function xn(I){P=I}return{mount:L,disable:xn}}const xo=["Left","Right","Up","Down"];function ko(t,n,e){const{on:o,bind:s,unbind:u}=z(t),{root:l}=n.Elements,{resolve:c}=n.Direction;let i;function _(){r(),o(q,()=>{a(),r()})}function r(){const{keyboard:f="global"}=e;f&&(f==="focused"?(i=l,B(l,Wt,0)):i=window,s(i,"keydown",d))}function a(){u(i,"keydown"),Gn(i)&&st(i,Wt)}function d(f){const{key:S}=f,m=xt(xo,S)?`Arrow${S}`:S;m===c("ArrowLeft")?t.go("<"):m===c("ArrowRight")&&t.go(">")}return{mount:_,destroy:a}}const un=`${Fn}-lazy`,Rn=`${un}-srcset`,Vo=`[${un}], [${Rn}]`;function Mo(t,n,e){const{on:o,off:s,bind:u,emit:l}=z(t),c=e.lazyLoad==="sequential";let i=[],_=0;function r(){e.lazyLoad&&(o([et,U],()=>{d(),a()}),c||o([et,U,bt],f))}function a(){n.Slides.forEach($=>{hn($.slide,Vo).forEach(v=>{const h=Jt(v,un),E=Jt(v,Rn);if(h!==v.src||E!==v.srcset){const T=Tt("span",e.classes.spinner,v.parentElement);B(T,en,"presentation"),i.push({_img:v,_Slide:$,src:h,srcset:E,_spinner:T}),Qt(v,"none")}})}),c&&A()}function d(){_=0,i=[]}function f(){i=i.filter($=>$._Slide.isWithin(t.index,e.perPage*((e.preloadPages||1)+1))?S($):!0),i.length||s(bt)}function S($){const{_img:v}=$;lt($._Slide.slide,On),u(v,"load error",h=>{m($,h.type==="error")}),["src","srcset"].forEach(h=>{$[h]&&(B(v,h,$[h]),st(v,h==="src"?un:Rn))})}function m($,v){const{_Slide:h}=$;Vt(h.slide,On),v||(Nt($._spinner),Qt($._img,""),l(Tn,$._img,h),l(gt)),c&&A()}function A(){_<i.length&&S(i[_++])}return{mount:r,destroy:d}}function Bo(t,n,e){const{on:o,emit:s,bind:u,unbind:l}=z(t),{Slides:c,Elements:i,Controller:_}=n,{hasFocus:r,getIndex:a}=_,d=[];let f;function S(){m(),o([q,U],m),o([mt,Gt],E)}function m(){A(),e.pagination&&c.isEnough()&&($(),s(ae,{list:f,items:d},h(t.index)),E())}function A(){f&&(Nt(f),d.forEach(T=>{l(T.button,"click")}),$t(d),f=null)}function $(){const{length:T}=t,{classes:O,i18n:D,perPage:P}=e,y=e.pagination==="slider"&&i.slider||i.root,L=r()?T:Ut(T/P);f=Tt("ul",O.pagination,y);for(let C=0;C<L;C++){const N=Tt("li",null,f),k=Tt("button",{class:O.page,type:"button"},N),b=c.getIn(C).map(g=>g.slide.id),V=!r()&&P>1?D.pageX:D.slideX;u(k,"click",v.bind(null,C)),B(k,Ot,b.join(" ")),B(k,wt,jn(V,C+1)),d.push({li:N,button:k,page:C})}}function v(T){_.go(`>${T}`,!0,()=>{const O=c.getAt(_.toIndex(T));O&&O.slide.focus()})}function h(T){return d[_.toPage(T)]}function E(){const T=h(a(!0)),O=h(a());T&&(Vt(T.button,It),st(T.button,on)),O&&(lt(O.button,It),B(O.button,on,!0)),s(fe,{list:f,items:d},T,O)}return{items:d,mount:S,destroy:A,getAt:h}}const Fo=[" ","Enter","Spacebar"];function Uo(t,n,e){const{splides:o}=t,{list:s}=n.Elements;function u(){e.isNavigation?i():c()}function l(){st(s,sn)}function c(){const d=[];o.concat(t).forEach((f,S,m)=>{z(f).on(mt,(A,$,v)=>{m.forEach(h=>{h!==f&&!xt(d,f)&&(d.push(h),h.go(h.is(Ht)?v:A))}),$t(d)})})}function i(){const{on:d,emit:f}=z(t);d(yn,r),d(oe,a),d([et,q],_),B(s,en,"menu"),f(de,t.splides)}function _(){B(s,be,e.direction!==Ln?"horizontal":null)}function r(d){t.go(d.index)}function a(d,f){xt(Fo,f.key)&&(r(d),ft(f))}return{mount:u,destroy:l}}function zo(t,n,e){const{bind:o}=z(t);function s(){e.wheel&&o(n.Elements.track,"wheel",u,{passive:!1,capture:!0})}function u(l){const{deltaY:c}=l;c&&(t.go(c<0?"<":">"),ft(l))}return{mount:s}}var Go=Object.freeze({__proto__:null,Options:je,Direction:Qe,Elements:po,Slides:mo,Layout:go,Clones:Eo,Move:So,Controller:yo,Arrows:Ao,Autoplay:To,Cover:No,Scroll:Co,Drag:Do,Keyboard:ko,LazyLoad:Mo,Pagination:Bo,Sync:Uo,Wheel:zo});const Wo={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay"},Oe={type:"slide",speed:400,waitForTransition:!0,perPage:1,arrows:!0,pagination:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",slideFocus:!0,trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",classes:fo,i18n:Wo};function Ho(t,n,e){const{on:o}=z(t);function s(){o([et,U],()=>{qn(()=>{n.Slides.style("transition",`opacity ${e.speed}ms ${e.easing}`)})})}function u(l,c){const{track:i}=n.Elements;Q(i,"height",dt(J(i).height)),qn(()=>{c(),Q(i,"height","")})}return{mount:s,start:u,cancel:mn}}function Yo(t,n,e){const{bind:o}=z(t),{Move:s,Controller:u}=n,{list:l}=n.Elements;let c;function i(){o(l,"transitionend",f=>{f.target===l&&c&&(r(),c())})}function _(f,S){const m=s.toPosition(f,!0),A=s.getPosition(),$=a(f);tt(m-A)>=1&&$>=1?(d(`transform ${$}ms ${e.easing}`),s.translate(m,!0),c=S):(s.jump(f),S())}function r(){d("")}function a(f){const{rewindSpeed:S}=e;if(t.is(Ct)&&S){const m=u.getIndex(!0),A=u.getEnd();if(m===0&&f>=A||m>=A&&f===0)return S}return e.speed}function d(f){Q(l,"transition",f)}return{mount:i,start:_,cancel:r}}const we=class{constructor(t,n){this.event=qe(),this.Components={},this.state=Ke(yt),this.splides=[],this._options={},this._Extensions={};const e=ct(t)?ht(document,t):t;Mt(e,`${e} is invalid.`),this.root=e,_t(Oe,we.defaults),_t(_t(this._options,Oe),n||{})}mount(t,n){const{state:e,Components:o}=this;Mt(e.is([yt,jt]),"Already mounted!"),e.set(yt),this._Components=o,this._Transition=n||this._Transition||(this.is(rn)?Ho:Yo),this._Extensions=t||this._Extensions;const s=_n({},Go,this._Extensions,{Transition:this._Transition});return pt(s,(u,l)=>{const c=u(this,o,this._options);o[l]=c,c.setup&&c.setup()}),pt(o,u=>{u.mount&&u.mount()}),this.emit(et),lt(this.root,lo),e.set(ln),this.emit(Qn),this}sync(t){return this.splides.push(t),t.splides.push(this),this}go(t){return this._Components.Controller.go(t),this}on(t,n){return this.event.on(t,n,null,Ue),this}off(t){return this.event.off(t),this}emit(t){return this.event.emit(t,...vt(arguments,1)),this}add(t,n){return this._Components.Slides.add(t,n),this}remove(t){return this._Components.Slides.remove(t),this}is(t){return this._options.type===t}refresh(){return this.emit(U),this}destroy(t=!0){const{event:n,state:e}=this;return e.is(yt)?n.on(Qn,this.destroy.bind(this,t),this):(pt(this._Components,o=>{o.destroy&&o.destroy(t)}),n.emit(An),n.destroy(),t&&$t(this.splides),e.set(jt)),this}get options(){return this._options}set options(t){const{_options:n}=this;_t(n,t),this.state.is(yt)||this.emit(q,n)}get length(){return this._Components.Slides.getLength(!0)}get index(){return this._Components.Controller.getIndex()}};let Pn=we;Pn.defaults={};Pn.STATES=Fe;const Ce=[Jn,ue,le,he,pe,_e,yn,An,ie,ce,re,ee,te,Tn,et,mt,bt,de,ae,fe,U,gt,$n,vn,Gt,q,ne];var Dn=(t,n)=>{for(const[e,o]of n)t[e]=o;return t};const Xo=it({name:"SplideTrack"}),qo={class:"splide__track"},Ko={class:"splide__list"};function jo(t,n,e,o,s,u){return F(),G("div",qo,[M("ul",Ko,[ot(t.$slots,"default")])])}var Zo=Dn(Xo,[["render",jo]]);const Qo=it({name:"Splide",components:{SplideTrack:Zo},emits:Ce.map(t=>`splide:${t}`),props:{options:Object,extensions:Object,transition:Function,hasSliderWrapper:Boolean},setup(t,n){const e=Rt(),o=Rt();Vn(()=>{o.value&&(e.value=new Pn(o.value,t.options),i(e.value),e.value.mount(t.extensions,t.transition))}),De(()=>{var r;(r=e.value)==null||r.destroy()}),xe(()=>{var r;(r=e.value)==null||r.refresh()});const s=Mn(()=>{var r;return((r=e.value)==null?void 0:r.index)||0}),u=Mn(()=>{var r;return((r=e.value)==null?void 0:r.length)||0});function l(r){var a;(a=e.value)==null||a.go(r)}function c(r){const{value:a}=e;a&&(a.sync(r),_(a),_(r))}function i(r){Ce.forEach(a=>{r.on(a,(...d)=>{n.emit(`splide:${a}`,r,...d)})})}function _(r){r.destroy(!1),r.mount()}return{splide:e,root:o,index:s,length:u,go:l,sync:c}}}),Jo={class:"splide",ref:"root"},ts={key:1,class:"splide__slider"};function ns(t,n,e,o,s,u){const l=nt("SplideTrack");return F(),G("div",Jo,[t.hasSliderWrapper?ot(t.$slots,"before-slider",{key:0}):Bn("",!0),t.hasSliderWrapper?(F(),G("div",ts,[ot(t.$slots,"before-track"),Z(l,null,{default:X(()=>[ot(t.$slots,"default")]),_:3}),ot(t.$slots,"after-track")])):(F(),G(rt,{key:2},[ot(t.$slots,"before-track"),Z(l,null,{default:X(()=>[ot(t.$slots,"default")]),_:3}),ot(t.$slots,"after-track")],64)),t.hasSliderWrapper?ot(t.$slots,"after-slider",{key:3}):Bn("",!0)],512)}var Yt=Dn(Qo,[["render",ns]]);const es=it({name:"SplideSlide"}),os={class:"splide__slide"};function ss(t,n,e,o,s,u){return F(),G("li",os,[ot(t.$slots,"default")])}var Xt=Dn(es,[["render",ss]]);function qt(t=10,n=0){return Array.from({length:t}).map((e,o)=>(o=n||o,{src:`https://source.unsplash.com/random/800x450?sig=${o}`,alt:`Image ${o}`}))}var Kt=(t,n)=>{for(const[e,o]of n)t[e]=o;return t};const is=it({name:"AutoplayExample",components:{Splide:Yt,SplideSlide:Xt},setup(){return{slides:qt(),options:{rewind:!0,gap:"1rem",autoplay:!0,pauseOnHover:!1,arrows:"slider",height:"15rem"}}}}),rs={class:"wrapper"},cs=M("h2",null,"Autoplay",-1),us=["src","alt"],ls=M("div",{class:"splide__progress"},[M("div",{class:"splide__progress__bar"})],-1),as=M("div",{class:"splide__autoplay"},[M("button",{class:"splide__play"},"Play"),M("button",{class:"splide__pause"},"Pause")],-1);function fs(t,n,e,o,s,u){const l=nt("SplideSlide"),c=nt("Splide");return F(),G("div",rs,[cs,Z(c,{options:t.options,"has-slider-wrapper":""},{"after-slider":X(()=>[ls,as]),default:X(()=>[(F(!0),G(rt,null,Et(t.slides,i=>(F(),St(l,{key:i.alt},{default:X(()=>[M("img",{src:i.src,alt:i.alt},null,8,us)]),_:2},1024))),128))]),_:1},8,["options"])])}var ds=Kt(is,[["render",fs]]);const ps=it({name:"BasicExample",components:{Splide:Yt,SplideSlide:Xt},setup(){return{slides:qt(),options:{rewind:!0,perPage:2,gap:"1rem",height:"15rem",breakpoints:{1e3:{perPage:1}}},onSplideMounted:s=>console.log(s.length),onSplideMove:(s,u)=>console.log("move to",u)}}}),_s={class:"wrapper"},hs=M("h2",null,"Basic",-1),ms=["src","alt"];function gs(t,n,e,o,s,u){const l=nt("SplideSlide"),c=nt("Splide");return F(),G("div",_s,[hs,Z(c,{options:t.options,"onSplide:mounted":t.onSplideMounted,"onSplide:move":t.onSplideMove,ref:"splide"},{default:X(()=>[(F(!0),G(rt,null,Et(t.slides,i=>(F(),St(l,{key:i.alt},{default:X(()=>[M("img",{src:i.src,alt:i.alt},null,8,ms)]),_:2},1024))),128))]),_:1},8,["options","onSplide:mounted","onSplide:move"])])}var Es=Kt(ps,[["render",gs]]);const Ss=it({name:"DynamicSlidesExample",components:{Splide:Yt,SplideSlide:Xt},setup(){const t=Rt(qt(1)),n={rewind:!0,perPage:3,gap:"1rem",height:"15rem"};function e(){t.value.push(...qt(1,t.value.length))}function o(){--t.value.length}return{slides:t,options:n,add:e,remove:o}}}),ys={class:"wrapper"},$s=M("h2",null,"Dynamic Slides",-1),vs=["src","alt"],As={class:"controls"};function Ts(t,n,e,o,s,u){const l=nt("SplideSlide"),c=nt("Splide");return F(),G("div",ys,[$s,Z(c,{options:t.options,class:"splide--dynamic"},{default:X(()=>[(F(!0),G(rt,null,Et(t.slides,i=>(F(),St(l,{key:i.alt},{default:X(()=>[M("img",{src:i.src,alt:i.alt},null,8,vs)]),_:2},1024))),128))]),_:1},8,["options"]),M("div",As,[M("button",{onClick:n[0]||(n[0]=(...i)=>t.add&&t.add(...i))},"Add"),M("button",{onClick:n[1]||(n[1]=(...i)=>t.remove&&t.remove(...i))},"Remove")])])}var Ns=Kt(Ss,[["render",Ts]]);const Ls=it({name:"ThumbnailsExample",components:{Splide:Yt,SplideSlide:Xt},setup(){const t=Rt(),n=Rt(),e=qt(),o={type:"loop",perPage:2,perMove:1,gap:"1rem",pagination:!1},s={type:"slide",rewind:!0,gap:"1rem",pagination:!1,fixedWidth:110,fixedHeight:70,cover:!0,focus:"center",isNavigation:!0,updateOnMove:!0};return Vn(()=>{var l,c;const u=(l=n.value)==null?void 0:l.splide;u&&((c=t.value)==null||c.sync(u))}),{slides:e,main:t,thumbs:n,mainOptions:o,thumbsOptions:s}}}),bs={class:"wrapper"},Is=M("h2",null,"Thumbnails",-1),Os=["src","alt"],ws=["src","alt"];function Cs(t,n,e,o,s,u){const l=nt("SplideSlide"),c=nt("Splide");return F(),G("div",bs,[Is,Z(c,{options:t.mainOptions,ref:"main"},{default:X(()=>[(F(!0),G(rt,null,Et(t.slides,i=>(F(),St(l,{key:i.alt},{default:X(()=>[M("img",{src:i.src,alt:i.alt},null,8,Os)]),_:2},1024))),128))]),_:1},8,["options"]),Z(c,{options:t.thumbsOptions,ref:"thumbs"},{default:X(()=>[(F(!0),G(rt,null,Et(t.slides,i=>(F(),St(l,{key:i.alt},{default:X(()=>[M("img",{src:i.src,alt:i.alt},null,8,ws)]),_:2},1024))),128))]),_:1},8,["options"])])}var Rs=Kt(Ls,[["render",Cs]]);const Ps=it({name:"VideoExample",components:{Splide:Yt,SplideSlide:Xt},setup(){return{videos:["3GNQL3alB-Y","xLJ2QQDrN9k","cdz__ojQOuU","oS6N_ZBFDZE"],options:{rewind:!0,heightRatio:.5625},extensions:{Video:ke}}}}),Ds={class:"wrapper"},xs=M("h2",null,"Video",-1),ks=["src","alt"];function Vs(t,n,e,o,s,u){const l=nt("SplideSlide"),c=nt("Splide");return F(),G("div",Ds,[xs,Z(c,{options:t.options,extensions:t.extensions},{default:X(()=>[(F(!0),G(rt,null,Et(t.videos,(i,_)=>(F(),St(l,{key:i,"data-splide-youtube":i},{default:X(()=>[M("img",{src:`https://i3.ytimg.com/vi/${i}/maxresdefault.jpg`,alt:`YouTube Sample ${_+1}`},null,8,ks)]),_:2},1032,["data-splide-youtube"]))),128))]),_:1},8,["options","extensions"])])}var Ms=Kt(Ps,[["render",Vs]]);const Bs=M("hr",null,null,-1),Fs=M("hr",null,null,-1),Us=M("hr",null,null,-1),zs=M("hr",null,null,-1),Gs=it({setup(t){return(n,e)=>(F(),G(rt,null,[Z(Es),Bs,Z(ds),Fs,Z(Rs),Us,Z(Ns),zs,Z(Ms)],64))}}),Ws=Ve(Gs);Ws.mount("#app");