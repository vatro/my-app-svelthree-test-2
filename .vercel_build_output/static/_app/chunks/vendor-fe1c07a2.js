var mh=Object.defineProperty,gh=Object.defineProperties;var xh=Object.getOwnPropertyDescriptors;var Ga=Object.getOwnPropertySymbols;var yh=Object.prototype.hasOwnProperty,_h=Object.prototype.propertyIsEnumerable;var Wa=(r,t,e)=>t in r?mh(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Ui=(r,t)=>{for(var e in t||(t={}))yh.call(t,e)&&Wa(r,e,t[e]);if(Ga)for(var e of Ga(t))_h.call(t,e)&&Wa(r,e,t[e]);return r},qa=(r,t)=>gh(r,xh(t));function Se(){}const Xa=r=>r;function vh(r,t){for(const e in t)r[e]=t[e];return r}function ja(r){return r()}function Ya(){return Object.create(null)}function qn(r){r.forEach(ja)}function Ar(r){return typeof r=="function"}function Mh(r,t){return r!=r?t==t:r!==t||r&&typeof r=="object"||typeof r=="function"}let Lr;function A0(r,t){return Lr||(Lr=document.createElement("a")),Lr.href=t,r===Lr.href}function L0(r,t){return r!=r?t==t:r!==t}function bh(r){return Object.keys(r).length===0}function wh(r,...t){if(r==null)return Se;const e=r.subscribe(...t);return e.unsubscribe?()=>e.unsubscribe():e}function C0(r,t,e){r.$$.on_destroy.push(wh(t,e))}function R0(r,t,e,n){if(r){const i=Za(r,t,e,n);return r[0](i)}}function Za(r,t,e,n){return r[1]&&n?vh(e.ctx.slice(),r[1](n(t))):e.ctx}function P0(r,t,e,n){if(r[2]&&n){const i=r[2](n(e));if(t.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(t.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=t.dirty[a]|i[a];return s}return t.dirty|i}return t.dirty}function D0(r,t,e,n,i,s){if(i){const o=Za(t,e,n,s);r.p(o,i)}}function I0(r){if(r.ctx.length>32){const t=[],e=r.ctx.length/32;for(let n=0;n<e;n++)t[n]=-1;return t}return-1}function F0(r,t,e){return r.set(e),t}const N0=(r,t)=>Object.prototype.hasOwnProperty.call(r,t);function B0(r){return r&&Ar(r.destroy)?r.destroy:Se}const $a=typeof window!="undefined";let Ja=$a?()=>window.performance.now():()=>Date.now(),Js=$a?r=>requestAnimationFrame(r):Se;const Xn=new Set;function Qa(r){Xn.forEach(t=>{t.c(r)||(Xn.delete(t),t.f())}),Xn.size!==0&&Js(Qa)}function Ka(r){let t;return Xn.size===0&&Js(Qa),{promise:new Promise(e=>{Xn.add(t={c:r,f:e})}),abort(){Xn.delete(t)}}}let Cr=!1;function Sh(){Cr=!0}function Th(){Cr=!1}function Eh(r,t,e,n){for(;r<t;){const i=r+(t-r>>1);e(i)<=n?r=i+1:t=i}return r}function Ah(r){if(r.hydrate_init)return;r.hydrate_init=!0;let t=r.childNodes;if(r.nodeName==="HEAD"){const l=[];for(let c=0;c<t.length;c++){const u=t[c];u.claim_order!==void 0&&l.push(u)}t=l}const e=new Int32Array(t.length+1),n=new Int32Array(t.length);e[0]=-1;let i=0;for(let l=0;l<t.length;l++){const c=t[l].claim_order,u=(i>0&&t[e[i]].claim_order<=c?i+1:Eh(1,i,h=>t[e[h]].claim_order,c))-1;n[l]=e[u]+1;const d=u+1;e[d]=l,i=Math.max(d,i)}const s=[],o=[];let a=t.length-1;for(let l=e[i]+1;l!=0;l=n[l-1]){for(s.push(t[l-1]);a>=l;a--)o.push(t[a]);a--}for(;a>=0;a--)o.push(t[a]);s.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<s.length&&o[l].claim_order>=s[c].claim_order;)c++;const u=c<s.length?s[c]:null;r.insertBefore(o[l],u)}}function Lh(r,t){r.appendChild(t)}function tl(r){if(!r)return document;const t=r.getRootNode?r.getRootNode():r.ownerDocument;return t&&t.host?t:r.ownerDocument}function Ch(r){const t=el("style");return Rh(tl(r),t),t}function Rh(r,t){Lh(r.head||r,t)}function Ph(r,t){if(Cr){for(Ah(r),(r.actual_end_child===void 0||r.actual_end_child!==null&&r.actual_end_child.parentElement!==r)&&(r.actual_end_child=r.firstChild);r.actual_end_child!==null&&r.actual_end_child.claim_order===void 0;)r.actual_end_child=r.actual_end_child.nextSibling;t!==r.actual_end_child?(t.claim_order!==void 0||t.parentNode!==r)&&r.insertBefore(t,r.actual_end_child):r.actual_end_child=t.nextSibling}else(t.parentNode!==r||t.nextSibling!==null)&&r.appendChild(t)}function z0(r,t,e){Cr&&!e?Ph(r,t):(t.parentNode!==r||t.nextSibling!=e)&&r.insertBefore(t,e||null)}function Dh(r){r.parentNode.removeChild(r)}function el(r){return document.createElement(r)}function Ih(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function Qs(r){return document.createTextNode(r)}function O0(){return Qs(" ")}function U0(){return Qs("")}function V0(r,t,e,n){return r.addEventListener(t,e,n),()=>r.removeEventListener(t,e,n)}function H0(r,t,e){e==null?r.removeAttribute(t):r.getAttribute(t)!==e&&r.setAttribute(t,e)}function Fh(r){return Array.from(r.childNodes)}function Nh(r){r.claim_info===void 0&&(r.claim_info={last_index:0,total_claimed:0})}function nl(r,t,e,n,i=!1){Nh(r);const s=(()=>{for(let o=r.claim_info.last_index;o<r.length;o++){const a=r[o];if(t(a)){const l=e(a);return l===void 0?r.splice(o,1):r[o]=l,i||(r.claim_info.last_index=o),a}}for(let o=r.claim_info.last_index-1;o>=0;o--){const a=r[o];if(t(a)){const l=e(a);return l===void 0?r.splice(o,1):r[o]=l,i?l===void 0&&r.claim_info.last_index--:r.claim_info.last_index=o,a}}return n()})();return s.claim_order=r.claim_info.total_claimed,r.claim_info.total_claimed+=1,s}function il(r,t,e,n){return nl(r,i=>i.nodeName===t,i=>{const s=[];for(let o=0;o<i.attributes.length;o++){const a=i.attributes[o];e[a.name]||s.push(a.name)}s.forEach(o=>i.removeAttribute(o))},()=>n(t))}function k0(r,t,e){return il(r,t,e,el)}function G0(r,t,e){return il(r,t,e,Ih)}function Bh(r,t){return nl(r,e=>e.nodeType===3,e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n},()=>Qs(t),!0)}function W0(r){return Bh(r," ")}function q0(r,t){t=""+t,r.wholeText!==t&&(r.data=t)}function X0(r,t,e){r.classList[e?"add":"remove"](t)}function rl(r,t,e=!1){const n=document.createEvent("CustomEvent");return n.initCustomEvent(r,e,!1,t),n}function j0(r,t=document.body){return Array.from(t.querySelectorAll(r))}const Ks=new Set;let Rr=0;function zh(r){let t=5381,e=r.length;for(;e--;)t=(t<<5)-t^r.charCodeAt(e);return t>>>0}function to(r,t,e,n,i,s,o,a=0){const l=16.666/n;let c=`{
`;for(let y=0;y<=1;y+=l){const m=t+(e-t)*s(y);c+=y*100+`%{${o(m,1-m)}}
`}const u=c+`100% {${o(e,1-e)}}
}`,d=`__svelte_${zh(u)}_${a}`,h=tl(r);Ks.add(h);const f=h.__svelte_stylesheet||(h.__svelte_stylesheet=Ch(r).sheet),g=h.__svelte_rules||(h.__svelte_rules={});g[d]||(g[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length));const x=r.style.animation||"";return r.style.animation=`${x?`${x}, `:""}${d} ${n}ms linear ${i}ms 1 both`,Rr+=1,d}function sl(r,t){const e=(r.style.animation||"").split(", "),n=e.filter(t?s=>s.indexOf(t)<0:s=>s.indexOf("__svelte")===-1),i=e.length-n.length;i&&(r.style.animation=n.join(", "),Rr-=i,Rr||Oh())}function Oh(){Js(()=>{Rr||(Ks.forEach(r=>{const t=r.__svelte_stylesheet;let e=t.cssRules.length;for(;e--;)t.deleteRule(e);r.__svelte_rules={}}),Ks.clear())})}function Y0(r,t,e,n){if(!t)return Se;const i=r.getBoundingClientRect();if(t.left===i.left&&t.right===i.right&&t.top===i.top&&t.bottom===i.bottom)return Se;const{delay:s=0,duration:o=300,easing:a=Xa,start:l=Ja()+s,end:c=l+o,tick:u=Se,css:d}=e(r,{from:t,to:i},n);let h=!0,f=!1,g;function x(){d&&(g=to(r,0,1,o,s,a,d)),s||(f=!0)}function y(){d&&sl(r,g),h=!1}return Ka(m=>{if(!f&&m>=l&&(f=!0),f&&m>=c&&(u(1,0),y()),!h)return!1;if(f){const p=m-l,M=0+1*a(p/o);u(M,1-M)}return!0}),x(),u(0,1),y}function Z0(r){const t=getComputedStyle(r);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:e,height:n}=t,i=r.getBoundingClientRect();r.style.position="absolute",r.style.width=e,r.style.height=n,Uh(r,i)}}function Uh(r,t){const e=r.getBoundingClientRect();if(t.left!==e.left||t.top!==e.top){const n=getComputedStyle(r),i=n.transform==="none"?"":n.transform;r.style.transform=`${i} translate(${t.left-e.left}px, ${t.top-e.top}px)`}}let Pr;function Dr(r){Pr=r}function jn(){if(!Pr)throw new Error("Function called outside component initialization");return Pr}function $0(r){jn().$$.before_update.push(r)}function J0(r){jn().$$.on_mount.push(r)}function Q0(r){jn().$$.after_update.push(r)}function K0(){const r=jn();return(t,e)=>{const n=r.$$.callbacks[t];if(n){const i=rl(t,e);n.slice().forEach(s=>{s.call(r,i)})}}}function tv(r,t){jn().$$.context.set(r,t)}function ev(r){return jn().$$.context.get(r)}const Vi=[],ol=[],Ir=[],eo=[],al=Promise.resolve();let no=!1;function ll(){no||(no=!0,al.then(cl))}function nv(){return ll(),al}function Fr(r){Ir.push(r)}function iv(r){eo.push(r)}let io=!1;const ro=new Set;function cl(){if(!io){io=!0;do{for(let r=0;r<Vi.length;r+=1){const t=Vi[r];Dr(t),Vh(t.$$)}for(Dr(null),Vi.length=0;ol.length;)ol.pop()();for(let r=0;r<Ir.length;r+=1){const t=Ir[r];ro.has(t)||(ro.add(t),t())}Ir.length=0}while(Vi.length);for(;eo.length;)eo.pop()();no=!1,io=!1,ro.clear()}}function Vh(r){if(r.fragment!==null){r.update(),qn(r.before_update);const t=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,t),r.after_update.forEach(Fr)}}let Hi;function Hh(){return Hi||(Hi=Promise.resolve(),Hi.then(()=>{Hi=null})),Hi}function so(r,t,e){r.dispatchEvent(rl(`${t?"intro":"outro"}${e}`))}const Nr=new Set;let qe;function rv(){qe={r:0,c:[],p:qe}}function sv(){qe.r||qn(qe.c),qe=qe.p}function ul(r,t){r&&r.i&&(Nr.delete(r),r.i(t))}function kh(r,t,e,n){if(r&&r.o){if(Nr.has(r))return;Nr.add(r),qe.c.push(()=>{Nr.delete(r),n&&(e&&r.d(1),n())}),r.o(t)}}const Gh={duration:0};function ov(r,t,e,n){let i=t(r,e),s=n?0:1,o=null,a=null,l=null;function c(){l&&sl(r,l)}function u(h,f){const g=h.b-s;return f*=Math.abs(g),{a:s,b:h.b,d:g,duration:f,start:h.start,end:h.start+f,group:h.group}}function d(h){const{delay:f=0,duration:g=300,easing:x=Xa,tick:y=Se,css:m}=i||Gh,p={start:Ja()+f,b:h};h||(p.group=qe,qe.r+=1),o||a?a=p:(m&&(c(),l=to(r,s,h,g,f,x,m)),h&&y(0,1),o=u(p,g),Fr(()=>so(r,h,"start")),Ka(M=>{if(a&&M>a.start&&(o=u(a,g),a=null,so(r,o.b,"start"),m&&(c(),l=to(r,s,o.b,o.duration,0,x,i.css))),o){if(M>=o.end)y(s=o.b,1-s),so(r,o.b,"end"),a||(o.b?c():--o.group.r||qn(o.group.c)),o=null;else if(M>=o.start){const _=M-o.start;s=o.a+o.d*x(_/o.duration),y(s,1-s)}}return!!(o||a)}))}return{run(h){Ar(i)?Hh().then(()=>{i=i(),d(h)}):d(h)},end(){c(),o=a=null}}}function Wh(r,t){kh(r,1,1,()=>{t.delete(r.key)})}function av(r,t){r.f(),Wh(r,t)}function lv(r,t,e,n,i,s,o,a,l,c,u,d){let h=r.length,f=s.length,g=h;const x={};for(;g--;)x[r[g].key]=g;const y=[],m=new Map,p=new Map;for(g=f;g--;){const E=d(i,s,g),v=e(E);let R=o.get(v);R?n&&R.p(E,t):(R=c(v,E),R.c()),m.set(v,y[g]=R),v in x&&p.set(v,Math.abs(g-x[v]))}const M=new Set,_=new Set;function b(E){ul(E,1),E.m(a,u),o.set(E.key,E),u=E.first,f--}for(;h&&f;){const E=y[f-1],v=r[h-1],R=E.key,D=v.key;E===v?(u=E.first,h--,f--):m.has(D)?!o.has(R)||M.has(R)?b(E):_.has(D)?h--:p.get(R)>p.get(D)?(_.add(R),b(E)):(M.add(D),h--):(l(v,o),h--)}for(;h--;){const E=r[h];m.has(E.key)||l(E,o)}for(;f;)b(y[f-1]);return y}function cv(r,t){const e={},n={},i={$$scope:1};let s=r.length;for(;s--;){const o=r[s],a=t[s];if(a){for(const l in o)l in a||(n[l]=1);for(const l in a)i[l]||(e[l]=a[l],i[l]=1);r[s]=a}else for(const l in o)i[l]=1}for(const o in n)o in e||(e[o]=void 0);return e}function uv(r){return typeof r=="object"&&r!==null?r:{}}function hv(r,t,e){const n=r.$$.props[t];n!==void 0&&(r.$$.bound[n]=e,e(r.$$.ctx[n]))}function dv(r){r&&r.c()}function fv(r,t){r&&r.l(t)}function qh(r,t,e,n){const{fragment:i,on_mount:s,on_destroy:o,after_update:a}=r.$$;i&&i.m(t,e),n||Fr(()=>{const l=s.map(ja).filter(Ar);o?o.push(...l):qn(l),r.$$.on_mount=[]}),a.forEach(Fr)}function Xh(r,t){const e=r.$$;e.fragment!==null&&(qn(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[],e.cty={})}function hl(r,t){r.$$.dirty[0]===-1&&(Vi.push(r),ll(),r.$$.dirty.fill(0)),r.$$.dirty[t/31|0]|=1<<t%31}function jh(r,t,e){var n;let i,s,o,a,l=r.members.length-1;for(;l>=0;){if((n=r.members[l])===null||n===void 0?void 0:n.$$){s=l,i=r.members[l];break}--l}if(i){const c=s+1;if(r.members.length-1>=c)return o=i,a=r.members[c],r.cached_clean[t]={comp:o,prop:a},r.cached_clean[t];{let u=r.members[s-1];for(;u>=0;){if(r.members[u].$$)return o=r.members[u],a=r.members[u+1],r.cached_clean[t]={comp:o,prop:a},r.cached_clean[t];--u}return o=r.head.$$?r.head:e,a=r.head.$$?r.members[0]:r.head,r.cached_clean[t]={comp:o,prop:a},r.cached_clean[t]}}else return o=r.head.$$?r.head:e,a=r.head.$$?r.members[0]:r.head,r.cached_clean[t]={comp:o,prop:a},r.cached_clean[t]}function pv(r,t,e,n,i,s,o,a=[-1]){const l=Pr;Dr(r);const c=r.$$={fragment:null,ctx:null,cty:null,props:s,update:Se,not_equal:i,bound:Ya(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Ya(),dirty:a,skip_bound:!1,root:t.target||l.$$.root};o&&o(c.root);let u=!1;function d(){if(c.cty===null&&c.ctx){c.cty={};for(const h in r.$cty_config){const f=r.$cty_config[h].head_ctx_i;c.cty[h]={get head(){return c.ctx[f]},members:[],total:0,endpoint_index:0},c.cty[h].members.props={},r.$cty_config[h].members.map((g,x)=>{const y=isNaN(g)?g:Number(g);c.cty[h].members.length?(c.cty[h].members.props[x]=y,Object.defineProperty(c.cty[h].members,x,{get(){return c.cty[h].members[x-1][c.cty[h].members.props[x]]},set(m){c.cty[h].members.props[x]=m}})):(c.cty[h].members.props[x]=y,Object.defineProperty(c.cty[h].members,x,{get(){return c.cty[h].head[c.cty[h].members.props[x]]},set(m){c.cty[h].members.props[x]=m}}))}),c.cty[h].members_total=c.cty[h].members.length,c.cty[h].last_member_index=c.cty[h].members_total-1,c.cty[h].cached_clean={},c.cty[h].clean=g=>{var x;return x=c.cty[h].cached_clean[g],x!=null?x:jh(c.cty[h],g,r)}}}}if(c.ctx=e?e(r,t.props||{},(h,f,...g)=>{if(g.length&&typeof f=="function"){let x,y,m,p;if(c.cty){const b=[];if(p=c.cty[g[1]],g[2]){const E=g[2].length;let v=0;for(;v<E;){const R=g[2][v],D=Object.keys(R)[0],I=R[D],C=r.$cty_config[g[1]].members.indexOf(D);b.push(I),p.members[C]=I,v++}}x=p.members,y=b.length?p.clean(b.join("|")):p.clean("static"),m=y.comp.$$.ctx.indexOf(y.prop)}else return f();const M=x[p.last_member_index],_=f();return i(M,_)&&(!y.comp.$$.skip_bound&&y.comp.$$.bound[m]&&y.comp.$$.bound[m](_),u&&hl(y.comp,m)),_}else{const x=g.length?g[0]:f;return c.ctx&&i(c.ctx[h],c.ctx[h]=x)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](x),u&&hl(r,h)),f}}):[],d(),c.update(),u=!0,qn(c.before_update),c.fragment=n?n(c.ctx):!1,t.target){if(t.hydrate){Sh();const h=Fh(t.target);c.fragment&&c.fragment.l(h),h.forEach(Dh)}else c.fragment&&c.fragment.c();t.intro&&ul(r.$$.fragment),qh(r,t.target,t.anchor,t.customElement),Th(),cl()}Dr(l)}class mv{$destroy(){Xh(this,1),this.$destroy=Se}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!bh(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Yn=[];function gv(r,t=Se){let e;const n=new Set;function i(a){if(Mh(r,a)&&(r=a,e)){const l=!Yn.length;for(const c of n)c[1](),Yn.push(c,r);if(l){for(let c=0;c<Yn.length;c+=2)Yn[c][0](Yn[c+1]);Yn.length=0}}}function s(a){i(a(r))}function o(a,l=Se){const c=[a,l];return n.add(c),n.size===1&&(e=t(i)||Se),a(r),()=>{n.delete(c),n.size===0&&(e(),e=null)}}return{set:i,update:s,subscribe:o}}/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oo="135",Zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yh=0,dl=1,Zh=2,fl=1,$h=2,ki=3,Rn=0,ie=1,Pn=2,pl=1,tn=0,Gi=1,ml=2,gl=3,xl=4,Jh=5,Jn=100,Qh=101,Kh=102,yl=103,_l=104,td=200,ed=201,nd=202,id=203,vl=204,Ml=205,rd=206,sd=207,od=208,ad=209,ld=210,cd=0,ud=1,hd=2,ao=3,dd=4,fd=5,pd=6,md=7,Br=0,gd=1,xd=2,Dn=0,yd=1,_d=2,vd=3,Md=4,bd=5,bl=300,Wi=301,qi=302,lo=303,co=304,zr=306,uo=307,ho=1e3,Me=1001,fo=1002,re=1003,wl=1004,Sl=1005,Te=1006,wd=1007,Or=1008,en=1009,Sd=1010,Td=1011,Xi=1012,Ed=1013,Ur=1014,nn=1015,Qn=1016,Ad=1017,Ld=1018,Cd=1019,Kn=1020,Rd=1021,In=1022,ge=1023,Pd=1024,Dd=1025,Id=ge,Fn=1026,ti=1027,Fd=1028,Nd=1029,Bd=1030,zd=1031,Od=1032,Ud=1033,Tl=33776,El=33777,Al=33778,Ll=33779,Cl=35840,Rl=35841,Pl=35842,Dl=35843,Vd=36196,Il=37492,Fl=37496,Hd=37808,kd=37809,Gd=37810,Wd=37811,qd=37812,Xd=37813,jd=37814,Yd=37815,Zd=37816,$d=37817,Jd=37818,Qd=37819,Kd=37820,tf=37821,ef=36492,nf=37840,rf=37841,sf=37842,of=37843,af=37844,lf=37845,cf=37846,uf=37847,hf=37848,df=37849,ff=37850,pf=37851,mf=37852,gf=37853,xf=2200,yf=2201,_f=2202,Vr=2300,Hr=2301,po=2302,ei=2400,ni=2401,kr=2402,mo=2500,Nl=2501,vf=0,_e=3e3,Gr=3001,go=3007,xo=3002,Bl=3004,zl=3005,Ol=3006,Mf=3200,bf=3201,ii=0,wf=1,yo=7680,Sf=519,ji=35044,Wr=35048,Ul="300 es";class rn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ae=[];for(let r=0;r<256;r++)ae[r]=(r<16?"0":"")+r.toString(16);let qr=1234567;const Yi=Math.PI/180,Zi=180/Math.PI;function Re(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ae[r&255]+ae[r>>8&255]+ae[r>>16&255]+ae[r>>24&255]+"-"+ae[t&255]+ae[t>>8&255]+"-"+ae[t>>16&15|64]+ae[t>>24&255]+"-"+ae[e&63|128]+ae[e>>8&255]+"-"+ae[e>>16&255]+ae[e>>24&255]+ae[n&255]+ae[n>>8&255]+ae[n>>16&255]+ae[n>>24&255]).toUpperCase()}function he(r,t,e){return Math.max(t,Math.min(e,r))}function _o(r,t){return(r%t+t)%t}function Tf(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Ef(r,t,e){return r!==t?(e-r)/(t-r):0}function $i(r,t,e){return(1-e)*r+e*t}function Af(r,t,e,n){return $i(r,t,1-Math.exp(-e*n))}function Lf(r,t=1){return t-Math.abs(_o(r,t*2)-t)}function Cf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Rf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Pf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Df(r,t){return r+Math.random()*(t-r)}function If(r){return r*(.5-Math.random())}function Ff(r){return r!==void 0&&(qr=r%2147483647),qr=qr*16807%2147483647,(qr-1)/2147483646}function Nf(r){return r*Yi}function Bf(r){return r*Zi}function vo(r){return(r&r-1)==0&&r!==0}function zf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Vl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Of(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),d=s((t-n)/2),h=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*d,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*d,a*c);break;case"ZXZ":r.set(l*d,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var xv=Object.freeze({__proto__:null,DEG2RAD:Yi,RAD2DEG:Zi,generateUUID:Re,clamp:he,euclideanModulo:_o,mapLinear:Tf,inverseLerp:Ef,lerp:$i,damp:Af,pingpong:Lf,smoothstep:Cf,smootherstep:Rf,randInt:Pf,randFloat:Df,randFloatSpread:If,seededRandom:Ff,degToRad:Nf,radToDeg:Bf,isPowerOfTwo:vo,ceilPowerOfTwo:zf,floorPowerOfTwo:Vl,setQuaternionFromProperEuler:Of});class Z{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Z.prototype.isVector2=!0;class le{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],x=i[0],y=i[3],m=i[6],p=i[1],M=i[4],_=i[7],b=i[2],E=i[5],v=i[8];return s[0]=o*x+a*p+l*b,s[3]=o*y+a*M+l*E,s[6]=o*m+a*_+l*v,s[1]=c*x+u*p+d*b,s[4]=c*y+u*M+d*E,s[7]=c*m+u*_+d*v,s[2]=h*x+f*p+g*b,s[5]=h*y+f*M+g*E,s[8]=h*m+f*_+g*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,g=e*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(i*c-u*n)*x,t[2]=(a*n-i*o)*x,t[3]=h*x,t[4]=(u*e-i*l)*x,t[5]=(i*s-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=e*s+n*l,i[3]=e*o+n*c,i[6]=e*a+n*u,i[1]=-n*s+e*l,i[4]=-n*o+e*c,i[7]=-n*a+e*u,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}le.prototype.isMatrix3=!0;function Hl(r){if(r.length===0)return-1/0;let t=r[0];for(let e=1,n=r.length;e<n;++e)r[e]>t&&(t=r[e]);return t}function Xr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kl(r,t=0){let e=3735928559^t,n=1103547991^t;for(let i=0,s;i<r.length;i++)s=r.charCodeAt(i),e=Math.imul(e^s,2654435761),n=Math.imul(n^s,1597334677);return e=Math.imul(e^e>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(e^e>>>13,3266489909),4294967296*(2097151&n)+(e>>>0)}let ri;class si{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=Xr("canvas")),ri.width=t.width,ri.height=t.height;const n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}}let Uf=0;class ce extends rn{constructor(t=ce.DEFAULT_IMAGE,e=ce.DEFAULT_MAPPING,n=Me,i=Me,s=Te,o=Or,a=ge,l=en,c=1,u=_e){super();Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Re(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Re()),!e&&t.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Mo(i[o].image)):s.push(Mo(i[o]))}else s=Mo(i);t.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ho:t.x=t.x-Math.floor(t.x);break;case Me:t.x=t.x<0?0:1;break;case fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ho:t.y=t.y-Math.floor(t.y);break;case Me:t.y=t.y<0?0:1;break;case fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&this.version++}}ce.DEFAULT_IMAGE=void 0;ce.DEFAULT_MAPPING=bl;ce.prototype.isTexture=!0;function Mo(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?si.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Vt{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const o=.01,a=.1,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],x=l[2],y=l[6],m=l[10];if(Math.abs(u-h)<o&&Math.abs(d-x)<o&&Math.abs(g-y)<o){if(Math.abs(u+h)<a&&Math.abs(d+x)<a&&Math.abs(g+y)<a&&Math.abs(c+f+m-3)<a)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,_=(f+1)/2,b=(m+1)/2,E=(u+h)/4,v=(d+x)/4,R=(g+y)/4;return M>_&&M>b?M<o?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=E/n,s=v/n):_>b?_<o?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=E/i,s=R/i):b<o?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=v/s,i=R/s),this.set(n,i,s,e),this}let p=Math.sqrt((y-g)*(y-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(p)<.001&&(p=1),this.x=(y-g)/p,this.y=(d-x)/p,this.z=(h-u)/p,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Vt.prototype.isVector4=!0;class Ee extends rn{constructor(t,e,n={}){super();this.width=t,this.height=e,this.depth=1,this.scissor=new Vt(0,0,t,e),this.scissorTest=!1,this.viewport=new Vt(0,0,t,e),this.texture=new ce(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:t,height:e,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Te,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(t){t.image={width:this.width,height:this.height,depth:this.depth},this.texture=t}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.image=Ui({},this.texture.image),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ee.prototype.isWebGLRenderTarget=!0;class Vf extends Ee{constructor(t,e,n){super(t,e);const i=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=i.clone()}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone();return this}}Vf.prototype.isWebGLMultipleRenderTargets=!0;class bo extends Ee{constructor(t,e,n={}){super(t,e,n);this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(t){return super.copy.call(this,t),this.samples=t.samples,this.useRenderToTexture=t.useRenderToTexture,this.useRenderbuffer=t.useRenderbuffer,this}}bo.prototype.isWebGLMultisampleRenderTarget=!0;class de{constructor(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}static slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==h||c!==f||u!==g){let y=1-a;const m=l*h+c*f+u*g+d*x,p=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const b=Math.sqrt(M),E=Math.atan2(b,m*p);y=Math.sin(y*E)/b,a=Math.sin(a*E)/b}const _=a*p;if(l=l*y+h*_,c=c*y+f*_,u=u*y+g*_,d=d*y+x*_,y===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-a*f,t[e+2]=c*g+u*f+a*h-l*d,t[e+3]=u*g-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}de.prototype.isQuaternion=!0;class w{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,u=l*n+a*e-s*i,d=l*i+s*n-o*e,h=-s*e-o*n-a*i;return this.x=c*l+h*-s+u*-a-d*-o,this.y=u*l+h*-o+d*-s-c*-a,this.z=d*l+h*-a+c*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wo.copy(this).projectOnVector(t),this.sub(wo)}reflect(t){return this.sub(wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}w.prototype.isVector3=!0;const wo=new w,Gl=new de;class se{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],d=t[l+1],h=t[l+2];u<e&&(e=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),d=t.getY(l),h=t.getZ(l);u<e&&(e=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ji.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t){return this.makeEmpty(),this.expandByObject(t)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t){t.updateWorldMatrix(!1,!1);const e=t.geometry;e!==void 0&&(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox),So.applyMatrix4(t.matrixWorld),this.union(So));const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ji),Ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qi),jr.subVectors(this.max,Qi),oi.subVectors(t.a,Qi),ai.subVectors(t.b,Qi),li.subVectors(t.c,Qi),sn.subVectors(ai,oi),on.subVectors(li,ai),Nn.subVectors(oi,li);let e=[0,-sn.z,sn.y,0,-on.z,on.y,0,-Nn.z,Nn.y,sn.z,0,-sn.x,on.z,0,-on.x,Nn.z,0,-Nn.x,-sn.y,sn.x,0,-on.y,on.x,0,-Nn.y,Nn.x,0];return!To(e,oi,ai,li,jr)||(e=[1,0,0,0,1,0,0,0,1],!To(e,oi,ai,li,jr))?!1:(Yr.crossVectors(sn,on),e=[Yr.x,Yr.y,Yr.z],To(e,oi,ai,li,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Ji.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Ji).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}se.prototype.isBox3=!0;const Xe=[new w,new w,new w,new w,new w,new w,new w,new w],Ji=new w,So=new se,oi=new w,ai=new w,li=new w,sn=new w,on=new w,Nn=new w,Qi=new w,jr=new w,Yr=new w,Bn=new w;function To(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Bn.fromArray(r,s);const a=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),l=t.dot(Bn),c=e.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Hf=new se,Wl=new w,Eo=new w,Ao=new w;class zn{constructor(t=new w,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Ao.subVectors(t,this.center);const e=Ao.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(Ao.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return Eo.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Wl.copy(t.center).add(Eo)),this.expandByPoint(Wl.copy(t.center).sub(Eo)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const je=new w,Lo=new w,Zr=new w,an=new w,Co=new w,$r=new w,Ro=new w;class ln{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(je.copy(this.direction).multiplyScalar(e).add(this.origin),je.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Lo.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),an.copy(this.origin).sub(Lo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Zr),a=an.dot(this.direction),l=-an.dot(Zr),c=an.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Zr).multiplyScalar(h).add(Lo),f}intersectSphere(t,e){je.subVectors(t.center,this.origin);const n=je.dot(this.direction),i=je.dot(je)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,je)!==null}intersectTriangle(t,e,n,i,s){Co.subVectors(e,t),$r.subVectors(n,t),Ro.crossVectors(Co,$r);let o=this.direction.dot(Ro),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;an.subVectors(this.origin,t);const l=a*this.direction.dot($r.crossVectors(an,$r));if(l<0)return null;const c=a*this.direction.dot(Co.cross(an));if(c<0||l+c>o)return null;const u=-a*an.dot(Ro);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,s,o,a,l,c,u,d,h,f,g,x,y){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=x,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ci.setFromMatrixColumn(t,0).length(),s=1/ci.setFromMatrixColumn(t,1).length(),o=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,x=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,g=c*u,x=c*d;e[0]=h+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,g=c*u,x=c*d;e[0]=h-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,x=a*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+x,e[1]=l*d,e[5]=x*c+h,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-x*d}else if(t.order==="XZY"){const h=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+x,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kf,t,Gf)}lookAt(t,e,n){const i=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),cn.crossVectors(n,be),cn.lengthSq()===0&&(Math.abs(n.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),cn.crossVectors(n,be)),cn.normalize(),Jr.crossVectors(be,cn),i[0]=cn.x,i[4]=Jr.x,i[8]=be.x,i[1]=cn.y,i[5]=Jr.y,i[9]=be.y,i[2]=cn.z,i[6]=Jr.z,i[10]=be.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],x=n[6],y=n[10],m=n[14],p=n[3],M=n[7],_=n[11],b=n[15],E=i[0],v=i[4],R=i[8],D=i[12],I=i[1],C=i[5],X=i[9],F=i[13],N=i[2],O=i[6],B=i[10],U=i[14],tt=i[3],ot=i[7],W=i[11],q=i[15];return s[0]=o*E+a*I+l*N+c*tt,s[4]=o*v+a*C+l*O+c*ot,s[8]=o*R+a*X+l*B+c*W,s[12]=o*D+a*F+l*U+c*q,s[1]=u*E+d*I+h*N+f*tt,s[5]=u*v+d*C+h*O+f*ot,s[9]=u*R+d*X+h*B+f*W,s[13]=u*D+d*F+h*U+f*q,s[2]=g*E+x*I+y*N+m*tt,s[6]=g*v+x*C+y*O+m*ot,s[10]=g*R+x*X+y*B+m*W,s[14]=g*D+x*F+y*U+m*q,s[3]=p*E+M*I+_*N+b*tt,s[7]=p*v+M*C+_*O+b*ot,s[11]=p*R+M*X+_*B+b*W,s[15]=p*D+M*F+_*U+b*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],x=t[7],y=t[11],m=t[15];return g*(+s*l*d-i*c*d-s*a*h+n*c*h+i*a*f-n*l*f)+x*(+e*l*f-e*c*h+s*o*h-i*o*f+i*c*u-s*l*u)+y*(+e*c*d-e*a*f-s*o*d+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-e*l*d+e*a*h+i*o*d-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],x=t[13],y=t[14],m=t[15],p=d*y*c-x*h*c+x*l*f-a*y*f-d*l*m+a*h*m,M=g*h*c-u*y*c-g*l*f+o*y*f+u*l*m-o*h*m,_=u*x*c-g*d*c+g*a*f-o*x*f-u*a*m+o*d*m,b=g*d*l-u*x*l-g*a*h+o*x*h+u*a*y-o*d*y,E=e*p+n*M+i*_+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/E;return t[0]=p*v,t[1]=(x*h*s-d*y*s-x*i*f+n*y*f+d*i*m-n*h*m)*v,t[2]=(a*y*s-x*l*s+x*i*c-n*y*c-a*i*m+n*l*m)*v,t[3]=(d*l*s-a*h*s-d*i*c+n*h*c+a*i*f-n*l*f)*v,t[4]=M*v,t[5]=(u*y*s-g*h*s+g*i*f-e*y*f-u*i*m+e*h*m)*v,t[6]=(g*l*s-o*y*s-g*i*c+e*y*c+o*i*m-e*l*m)*v,t[7]=(o*h*s-u*l*s+u*i*c-e*h*c-o*i*f+e*l*f)*v,t[8]=_*v,t[9]=(g*d*s-u*x*s-g*n*f+e*x*f+u*n*m-e*d*m)*v,t[10]=(o*x*s-g*a*s+g*n*c-e*x*c-o*n*m+e*a*m)*v,t[11]=(u*a*s-o*d*s-u*n*c+e*d*c+o*n*f-e*a*f)*v,t[12]=b*v,t[13]=(u*x*i-g*d*i+g*n*h-e*x*h-u*n*y+e*d*y)*v,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*y-e*a*y)*v,t[15]=(o*d*i-u*a*i+u*n*l-e*d*l-o*n*h+e*a*h)*v,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,g=s*d,x=o*u,y=o*d,m=a*d,p=l*c,M=l*u,_=l*d,b=n.x,E=n.y,v=n.z;return i[0]=(1-(x+m))*b,i[1]=(f+_)*b,i[2]=(g-M)*b,i[3]=0,i[4]=(f-_)*E,i[5]=(1-(h+m))*E,i[6]=(y+p)*E,i[7]=0,i[8]=(g+M)*v,i[9]=(y-p)*v,i[10]=(1-(h+x))*v,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ci.set(i[0],i[1],i[2]).length();const o=ci.set(i[4],i[5],i[6]).length(),a=ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Pe.copy(this);const c=1/s,u=1/o,d=1/a;return Pe.elements[0]*=c,Pe.elements[1]*=c,Pe.elements[2]*=c,Pe.elements[4]*=u,Pe.elements[5]*=u,Pe.elements[6]*=u,Pe.elements[8]*=d,Pe.elements[9]*=d,Pe.elements[10]*=d,e.setFromRotationMatrix(Pe),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(e-t),c=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),h=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,o){const a=this.elements,l=1/(e-t),c=1/(n-i),u=1/(o-s),d=(e+t)*l,h=(n+i)*c,f=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}gt.prototype.isMatrix4=!0;const ci=new w,Pe=new gt,kf=new w(0,0,0),Gf=new w(1,1,1),cn=new w,Jr=new w,be=new w,ql=new gt,Xl=new de;class ui{constructor(t=0,e=0,n=0,i=ui.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}toVector3(t){return t?t.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}ui.prototype.isEuler=!0;ui.DefaultOrder="XYZ";ui.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class jl{constructor(){this.mask=1|0}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=4294967295|0}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!=0}isEnabled(t){return(this.mask&(1<<t|0))!=0}}let Wf=0;const Yl=new w,hi=new de,Ye=new gt,Qr=new w,Ki=new w,qf=new w,Xf=new de,Zl=new w(1,0,0),$l=new w(0,1,0),Jl=new w(0,0,1),jf={type:"added"},Ql={type:"removed"};class Bt extends rn{constructor(){super();Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Re(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DefaultUp.clone();const t=new w,e=new ui,n=new de,i=new w(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new le}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Bt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(Zl,t)}rotateY(t){return this.rotateOnAxis($l,t)}rotateZ(t){return this.rotateOnAxis(Jl,t)}translateOnAxis(t,e){return Yl.copy(t).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zl,t)}translateY(t){return this.translateOnAxis($l,t)}translateZ(t){return this.translateOnAxis(Jl,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Ye.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ye.lookAt(Ki,Qr,this.up):Ye.lookAt(Qr,Ki,this.up),this.quaternion.setFromRotationMatrix(Ye),i&&(Ye.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(Ye),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(jf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ql)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ql)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Ye.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ye.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ye),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,qf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Bt.DefaultUp=new w(0,1,0);Bt.DefaultMatrixAutoUpdate=!0;Bt.prototype.isObject3D=!0;const De=new w,Ze=new w,Po=new w,$e=new w,di=new w,fi=new w,Kl=new w,Do=new w,Io=new w,Fo=new w;class Xt{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),De.subVectors(t,e),i.cross(De);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){De.subVectors(i,e),Ze.subVectors(n,e),Po.subVectors(t,e);const o=De.dot(De),a=De.dot(Ze),l=De.dot(Po),c=Ze.dot(Ze),u=Ze.dot(Po),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$e),$e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getUV(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,$e),l.set(0,0),l.addScaledVector(s,$e.x),l.addScaledVector(o,$e.y),l.addScaledVector(a,$e.z),l}static isFrontFacing(t,e,n,i){return De.subVectors(n,e),Ze.subVectors(t,e),De.cross(Ze).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return De.subVectors(this.c,this.b),Ze.subVectors(this.a,this.b),De.cross(Ze).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xt.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xt.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Xt.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Xt.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xt.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;di.subVectors(i,n),fi.subVectors(s,n),Do.subVectors(t,n);const l=di.dot(Do),c=fi.dot(Do);if(l<=0&&c<=0)return e.copy(n);Io.subVectors(t,i);const u=di.dot(Io),d=fi.dot(Io);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(di,o);Fo.subVectors(t,s);const f=di.dot(Fo),g=fi.dot(Fo);if(g>=0&&f<=g)return e.copy(s);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(fi,a);const y=u*g-f*d;if(y<=0&&d-u>=0&&f-g>=0)return Kl.subVectors(s,i),a=(d-u)/(d-u+(f-g)),e.copy(i).addScaledVector(Kl,a);const m=1/(y+x+h);return o=x*m,a=h*m,e.copy(n).addScaledVector(di,o).addScaledVector(fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Yf=0;class fe extends rn{constructor(){super();Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Re(),this.name="",this.type="Material",this.fog=!0,this.blending=Gi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.format=ge,this.transparent=!1,this.blendSrc=vl,this.blendDst=Ml,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===pl;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==ge&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.format=t.format,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}fe.prototype.isMaterial=!0;const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ie={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function No(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function Bo(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class mt{constructor(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this}setRGB(t,e,n){return this.r=t,this.g=e,this.b=n,this}setHSL(t,e,n){if(t=_o(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,s=2*n-i;this.r=No(s,i,t+1/3),this.g=No(s,i,t),this.b=No(s,i,t-1/3)}return this}setStyle(t){function e(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let i;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,e(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,e(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return e(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this}setColorName(t){const e=tc[t.toLowerCase()];return e!==void 0?this.setHex(e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copyGammaToLinear(t,e=2){return this.r=Math.pow(t.r,e),this.g=Math.pow(t.g,e),this.b=Math.pow(t.b,e),this}copyLinearToGamma(t,e=2){const n=e>0?1/e:1;return this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this}convertGammaToLinear(t){return this.copyGammaToLinear(this,t),this}convertLinearToGamma(t){return this.copyLinearToGamma(this,t),this}copySRGBToLinear(t){return this.r=Bo(t.r),this.g=Bo(t.g),this.b=Bo(t.b),this}copyLinearToSRGB(t){return this.r=zo(t.r),this.g=zo(t.g),this.b=zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(t){const e=this.r,n=this.g,i=this.b,s=Math.max(e,n,i),o=Math.min(e,n,i);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const u=s-o;switch(l=c<=.5?u/(s+o):u/(2-s-o),s){case e:a=(n-i)/u+(n<i?6:0);break;case n:a=(i-e)/u+2;break;case i:a=(e-n)/u+4;break}a/=6}return t.h=a,t.s=l,t.l=c,t}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(t,e,n){return this.getHSL(Ie),Ie.h+=t,Ie.s+=e,Ie.l+=n,this.setHSL(Ie.h,Ie.s,Ie.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ie),t.getHSL(Kr);const n=$i(Ie.h,Kr.h,e),i=$i(Ie.s,Kr.s,e),s=$i(Ie.l,Kr.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}mt.NAMES=tc;mt.prototype.isColor=!0;mt.prototype.r=1;mt.prototype.g=1;mt.prototype.b=1;class Oo extends fe{constructor(t){super();this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}Oo.prototype.isMeshBasicMaterial=!0;const Gt=new w,ts=new Z;class te{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=ji,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new mt),e[n++]=o.r,e[n++]=o.g,e[n++]=o.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Z),e[n++]=o.x,e[n++]=o.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new w),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Vt),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=o.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ts.fromBufferAttribute(this,e),ts.applyMatrix3(t),this.setXY(e,ts.x,ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Gt.fromBufferAttribute(this,e),Gt.applyMatrix3(t),this.setXYZ(e,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Gt.x=this.getX(e),Gt.y=this.getY(e),Gt.z=this.getZ(e),Gt.applyMatrix4(t),this.setXYZ(e,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Gt.x=this.getX(e),Gt.y=this.getY(e),Gt.z=this.getZ(e),Gt.applyNormalMatrix(t),this.setXYZ(e,Gt.x,Gt.y,Gt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Gt.x=this.getX(e),Gt.y=this.getY(e),Gt.z=this.getZ(e),Gt.transformDirection(t),this.setXYZ(e,Gt.x,Gt.y,Gt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ji&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}te.prototype.isBufferAttribute=!0;class ec extends te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nc extends te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zf extends te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}Zf.prototype.isFloat16BufferAttribute=!0;class $t extends te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $f=0;const Ae=new gt,Uo=new Bt,pi=new w,we=new se,tr=new se,oe=new w;class Ht extends rn{constructor(){super();Object.defineProperty(this,"id",{value:$f++}),this.uuid=Re(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hl(t)>65535?nc:ec)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new le().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ae.makeRotationFromQuaternion(t),this.applyMatrix4(Ae),this}rotateX(t){return Ae.makeRotationX(t),this.applyMatrix4(Ae),this}rotateY(t){return Ae.makeRotationY(t),this.applyMatrix4(Ae),this}rotateZ(t){return Ae.makeRotationZ(t),this.applyMatrix4(Ae),this}translate(t,e,n){return Ae.makeTranslation(t,e,n),this.applyMatrix4(Ae),this}scale(t,e,n){return Ae.makeScale(t,e,n),this.applyMatrix4(Ae),this}lookAt(t){return Uo.lookAt(t),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $t(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new se);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];we.setFromBufferAttribute(s),this.morphTargetsRelative?(oe.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(oe),oe.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(oe)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(oe.addVectors(we.min,tr.min),we.expandByPoint(oe),oe.addVectors(we.max,tr.max),we.expandByPoint(oe)):(we.expandByPoint(tr.min),we.expandByPoint(tr.max))}we.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)oe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(oe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)oe.fromBufferAttribute(a,c),l&&(pi.fromBufferAttribute(t,c),oe.add(pi)),i=Math.max(i,n.distanceToSquared(oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new te(new Float32Array(4*a),4));const l=e.tangent.array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new w,u[I]=new w;const d=new w,h=new w,f=new w,g=new Z,x=new Z,y=new Z,m=new w,p=new w;function M(I,C,X){d.fromArray(i,I*3),h.fromArray(i,C*3),f.fromArray(i,X*3),g.fromArray(o,I*2),x.fromArray(o,C*2),y.fromArray(o,X*2),h.sub(d),f.sub(d),x.sub(g),y.sub(g);const F=1/(x.x*y.y-y.x*x.y);!isFinite(F)||(m.copy(h).multiplyScalar(y.y).addScaledVector(f,-x.y).multiplyScalar(F),p.copy(f).multiplyScalar(x.x).addScaledVector(h,-y.x).multiplyScalar(F),c[I].add(m),c[C].add(m),c[X].add(m),u[I].add(p),u[C].add(p),u[X].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let I=0,C=_.length;I<C;++I){const X=_[I],F=X.start,N=X.count;for(let O=F,B=F+N;O<B;O+=3)M(n[O+0],n[O+1],n[O+2])}const b=new w,E=new w,v=new w,R=new w;function D(I){v.fromArray(s,I*3),R.copy(v);const C=c[I];b.copy(C),b.sub(v.multiplyScalar(v.dot(C))).normalize(),E.crossVectors(R,C);const F=E.dot(u[I])<0?-1:1;l[I*4]=b.x,l[I*4+1]=b.y,l[I*4+2]=b.z,l[I*4+3]=F}for(let I=0,C=_.length;I<C;++I){const X=_[I],F=X.start,N=X.count;for(let O=F,B=F+N;O<B;O+=3)D(n[O+0]),D(n[O+1]),D(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new w,s=new w,o=new w,a=new w,l=new w,c=new w,u=new w,d=new w;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),x=t.getX(h+1),y=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,y),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const o=n[i].array,a=t.attributes[i],l=a.array,c=a.itemSize*e,u=Math.min(l.length,o.length-c);for(let d=0,h=c;d<u;d++,h++)o[h]=l[d]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)oe.fromBufferAttribute(t,e),oe.normalize(),t.setXYZ(e,oe.x,oe.y,oe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let x=0,y=l.length;x<y;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new te(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ht,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ht.prototype.isBufferGeometry=!0;const ic=new gt,mi=new ln,Vo=new zn,un=new w,hn=new w,dn=new w,Ho=new w,ko=new w,Go=new w,es=new w,ns=new w,is=new w,rs=new Z,ss=new Z,os=new Z,Wo=new w,as=new w;class xe extends Bt{constructor(t=new Ht,e=new Oo){super();this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(s),t.ray.intersectsSphere(Vo)===!1)||(ic.copy(s).invert(),mi.copy(t.ray).applyMatrix4(ic),n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,h=n.attributes.uv2,f=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){const m=f[x],p=i[m.materialIndex],M=Math.max(m.start,g.start),_=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let b=M,E=_;b<E;b+=3){const v=a.getX(b),R=a.getX(b+1),D=a.getX(b+2);o=ls(this,p,t,mi,l,c,u,d,h,v,R,D),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=m.materialIndex,e.push(o))}}else{const x=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let m=x,p=y;m<p;m+=3){const M=a.getX(m),_=a.getX(m+1),b=a.getX(m+2);o=ls(this,i,t,mi,l,c,u,d,h,M,_,b),o&&(o.faceIndex=Math.floor(m/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){const m=f[x],p=i[m.materialIndex],M=Math.max(m.start,g.start),_=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let b=M,E=_;b<E;b+=3){const v=b,R=b+1,D=b+2;o=ls(this,p,t,mi,l,c,u,d,h,v,R,D),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=m.materialIndex,e.push(o))}}else{const x=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=x,p=y;m<p;m+=3){const M=m,_=m+1,b=m+2;o=ls(this,i,t,mi,l,c,u,d,h,M,_,b),o&&(o.faceIndex=Math.floor(m/3),e.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}xe.prototype.isMesh=!0;function Jf(r,t,e,n,i,s,o,a){let l;if(t.side===ie?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side!==Pn,a),l===null)return null;as.copy(a),as.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(as);return c<e.near||c>e.far?null:{distance:c,point:as.clone(),object:r}}function ls(r,t,e,n,i,s,o,a,l,c,u,d){un.fromBufferAttribute(i,c),hn.fromBufferAttribute(i,u),dn.fromBufferAttribute(i,d);const h=r.morphTargetInfluences;if(s&&h){es.set(0,0,0),ns.set(0,0,0),is.set(0,0,0);for(let g=0,x=s.length;g<x;g++){const y=h[g],m=s[g];y!==0&&(Ho.fromBufferAttribute(m,c),ko.fromBufferAttribute(m,u),Go.fromBufferAttribute(m,d),o?(es.addScaledVector(Ho,y),ns.addScaledVector(ko,y),is.addScaledVector(Go,y)):(es.addScaledVector(Ho.sub(un),y),ns.addScaledVector(ko.sub(hn),y),is.addScaledVector(Go.sub(dn),y)))}un.add(es),hn.add(ns),dn.add(is)}r.isSkinnedMesh&&(r.boneTransform(c,un),r.boneTransform(u,hn),r.boneTransform(d,dn));const f=Jf(r,t,e,n,un,hn,dn,Wo);if(f){a&&(rs.fromBufferAttribute(a,c),ss.fromBufferAttribute(a,u),os.fromBufferAttribute(a,d),f.uv=Xt.getUV(Wo,un,hn,dn,rs,ss,os,new Z)),l&&(rs.fromBufferAttribute(l,c),ss.fromBufferAttribute(l,u),os.fromBufferAttribute(l,d),f.uv2=Xt.getUV(Wo,un,hn,dn,rs,ss,os,new Z));const g={a:c,b:u,c:d,normal:new w,materialIndex:0};Xt.getNormal(un,hn,dn,g.normal),f.face=g}return f}class er extends Ht{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(d,2));function g(x,y,m,p,M,_,b,E,v,R,D){const I=_/v,C=b/R,X=_/2,F=b/2,N=E/2,O=v+1,B=R+1;let U=0,tt=0;const ot=new w;for(let W=0;W<B;W++){const q=W*C-F;for(let ct=0;ct<O;ct++){const at=ct*I-X;ot[x]=at*p,ot[y]=q*M,ot[m]=N,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[y]=0,ot[m]=E>0?1:-1,u.push(ot.x,ot.y,ot.z),d.push(ct/v),d.push(1-W/R),U+=1}}for(let W=0;W<R;W++)for(let q=0;q<v;q++){const ct=h+q+O*W,at=h+q+O*(W+1),dt=h+(q+1)+O*(W+1),Pt=h+(q+1)+O*W;l.push(ct,at,Pt),l.push(at,dt,Pt),tt+=6}a.addGroup(f,tt,D),f+=tt,h+=U}}static fromJSON(t){return new er(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function pe(r){const t={};for(let e=0;e<r.length;e++){const n=gi(r[e]);for(const i in n)t[i]=n[i]}return t}const Qf={clone:gi,merge:pe};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends fe{constructor(t){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Kf,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}On.prototype.isShaderMaterial=!0;class cs extends Bt{constructor(){super();this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}cs.prototype.isCamera=!0;class ve extends cs{constructor(t=50,e=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}ve.prototype.isPerspectiveCamera=!0;const xi=90,yi=1;class qo extends Bt{constructor(t,e,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new ve(xi,yi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new w(1,0,0)),this.add(i);const s=new ve(xi,yi,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new w(-1,0,0)),this.add(s);const o=new ve(xi,yi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new w(0,1,0)),this.add(o);const a=new ve(xi,yi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new w(0,-1,0)),this.add(a);const l=new ve(xi,yi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new w(0,0,1)),this.add(l);const c=new ve(xi,yi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=t.xr.enabled,d=t.getRenderTarget();t.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=h,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(d),t.xr.enabled=u}}class us extends ce{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Wi;super(t,e,n,i,s,o,a,l,c,u);this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}us.prototype.isCubeTexture=!0;class rc extends Ee{constructor(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n);super(t,t,e);e=e||{},this.texture=new us(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Te,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.format=ge,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new er(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ie,blending:tn});s.uniforms.tEquirect.value=e;const o=new xe(i,s),a=e.minFilter;return e.minFilter===Or&&(e.minFilter=Te),new qo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}rc.prototype.isWebGLCubeRenderTarget=!0;const Xo=new w,ep=new w,np=new le;class Fe{constructor(t=new w(1,0,0),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Xo.subVectors(n,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Xo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||np.getNormalMatrix(t),i=this.coplanarPoint(Xo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}Fe.prototype.isPlane=!0;const _i=new zn,hs=new w;class ds{constructor(t=new Fe,e=new Fe,n=new Fe,i=new Fe,s=new Fe,o=new Fe){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],f=n[9],g=n[10],x=n[11],y=n[12],m=n[13],p=n[14],M=n[15];return e[0].setComponents(a-i,d-l,x-h,M-y).normalize(),e[1].setComponents(a+i,d+l,x+h,M+y).normalize(),e[2].setComponents(a+s,d+c,x+f,M+m).normalize(),e[3].setComponents(a-s,d-c,x-f,M-m).normalize(),e[4].setComponents(a-o,d-u,x-g,M-p).normalize(),e[5].setComponents(a+o,d+u,x+g,M+p).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(hs.x=i.normal.x>0?t.max.x:t.min.x,hs.y=i.normal.y>0?t.max.y:t.min.y,hs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sc(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ip(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,f=r.createBuffer();r.bindBuffer(u,f),r.bufferData(u,d,h),c.onUploadCallback();let g=5126;return d instanceof Float32Array?g=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c.isFloat16BufferAttribute?e?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:d instanceof Int16Array?g=5122:d instanceof Uint32Array?g=5125:d instanceof Int32Array?g=5124:d instanceof Int8Array?g=5120:(d instanceof Uint8Array||d instanceof Uint8ClampedArray)&&(g=5121),{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,f=u.updateRange;r.bindBuffer(d,c),f.count===-1?r.bufferSubData(d,0,h):(e?r.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):r.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class jo extends Ht{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=t/a,h=e/l,f=[],g=[],x=[],y=[];for(let m=0;m<u;m++){const p=m*h-o;for(let M=0;M<c;M++){const _=M*d-s;g.push(_,-p,0),x.push(0,0,1),y.push(M/a),y.push(1-m/l)}}for(let m=0;m<l;m++)for(let p=0;p<a;p++){const M=p+c*m,_=p+c*(m+1),b=p+1+c*(m+1),E=p+1+c*m;f.push(M,_,E),f.push(_,b,E)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(y,2))}static fromJSON(t){return new jo(t.width,t.height,t.widthSegments,t.heightSegments)}}var rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up="vec3 transformed = vec3( position );",hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}`,Pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Hp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Wp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qp=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,$p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Jp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sm=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,mm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_m=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Dm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Im=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Fm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Wm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,qm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Xm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,jm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ym=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,$m=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ng=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,yg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Lg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ct={alphamap_fragment:rp,alphamap_pars_fragment:sp,alphatest_fragment:op,alphatest_pars_fragment:ap,aomap_fragment:lp,aomap_pars_fragment:cp,begin_vertex:up,beginnormal_vertex:hp,bsdfs:dp,bumpmap_pars_fragment:fp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:xp,color_fragment:yp,color_pars_fragment:_p,color_pars_vertex:vp,color_vertex:Mp,common:bp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:Tp,displacementmap_vertex:Ep,emissivemap_fragment:Ap,emissivemap_pars_fragment:Lp,encodings_fragment:Cp,encodings_pars_fragment:Rp,envmap_fragment:Pp,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Ip,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:qp,envmap_vertex:Np,fog_vertex:Bp,fog_pars_vertex:zp,fog_fragment:Op,fog_pars_fragment:Up,gradientmap_pars_fragment:Vp,lightmap_fragment:Hp,lightmap_pars_fragment:kp,lights_lambert_vertex:Gp,lights_pars_begin:Wp,lights_toon_fragment:Xp,lights_toon_pars_fragment:jp,lights_phong_fragment:Yp,lights_phong_pars_fragment:Zp,lights_physical_fragment:$p,lights_physical_pars_fragment:Jp,lights_fragment_begin:Qp,lights_fragment_maps:Kp,lights_fragment_end:tm,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:rm,map_fragment:sm,map_pars_fragment:om,map_particle_fragment:am,map_particle_pars_fragment:lm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:um,morphnormal_vertex:hm,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:xm,normal_vertex:ym,normalmap_pars_fragment:_m,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:bm,output_fragment:wm,packing:Sm,premultiplied_alpha_fragment:Tm,project_vertex:Em,dithering_fragment:Am,dithering_pars_fragment:Lm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Dm,shadowmap_vertex:Im,shadowmask_pars_fragment:Fm,skinbase_vertex:Nm,skinning_pars_vertex:Bm,skinning_vertex:zm,skinnormal_vertex:Om,specularmap_fragment:Um,specularmap_pars_fragment:Vm,tonemapping_fragment:Hm,tonemapping_pars_fragment:km,transmission_fragment:Gm,transmission_pars_fragment:Wm,uv_pars_fragment:qm,uv_pars_vertex:Xm,uv_vertex:jm,uv2_pars_fragment:Ym,uv2_pars_vertex:Zm,uv2_vertex:$m,worldpos_vertex:Jm,background_vert:Qm,background_frag:Km,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:rg,distanceRGBA_frag:sg,equirect_vert:og,equirect_frag:ag,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:ug,meshbasic_frag:hg,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:xg,meshphong_vert:yg,meshphong_frag:_g,meshphysical_vert:vg,meshphysical_frag:Mg,meshtoon_vert:bg,meshtoon_frag:wg,points_vert:Sg,points_frag:Tg,shadow_vert:Eg,shadow_frag:Ag,sprite_vert:Lg,sprite_frag:Cg},st={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new le},uv2Transform:{value:new le},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new le}}},Ne={basic:{uniforms:pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.fog,st.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:pe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:pe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:pe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:pe([st.points,st.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:pe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:pe([st.common,st.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:pe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:pe([st.sprite,st.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},cube:{uniforms:pe([st.envmap,{opacity:{value:1}}]),vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:pe([st.common,st.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:pe([st.lights,st.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Ne.physical={uniforms:pe([Ne.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Z(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};function Rg(r,t,e,n,i){const s=new mt(0);let o=0,a,l,c=null,u=0,d=null;function h(g,x){let y=!1,m=x.isScene===!0?x.background:null;m&&m.isTexture&&(m=t.get(m));const p=r.xr,M=p.getSession&&p.getSession();M&&M.environmentBlendMode==="additive"&&(m=null),m===null?f(s,o):m&&m.isColor&&(f(m,1),y=!0),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),m&&(m.isCubeTexture||m.mapping===zr)?(l===void 0&&(l=new xe(new er(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:gi(Ne.cube.uniforms),vertexShader:Ne.cube.vertexShader,fragmentShader:Ne.cube.fragmentShader,side:ie,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,(c!==m||u!==m.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,c=m,u=m.version,d=r.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new xe(new jo(2,2),new On({name:"BackgroundMaterial",uniforms:gi(Ne.background.uniforms),vertexShader:Ne.background.vertexShader,fragmentShader:Ne.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(c!==m||u!==m.version||d!==r.toneMapping)&&(a.material.needsUpdate=!0,c=m,u=m.version,d=r.toneMapping),g.unshift(a,a.geometry,a.material,0,0,null))}function f(g,x){e.buffers.color.setClear(g.r,g.g,g.b,x,i)}return{getClearColor:function(){return s},setClearColor:function(g,x=1){s.set(g),o=x,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,f(s,o)},render:h}}function Pg(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=x(null);let c=l;function u(F,N,O,B,U){let tt=!1;if(o){const ot=g(B,O,N);c!==ot&&(c=ot,h(c.object)),tt=y(B,U),tt&&m(B,U)}else{const ot=N.wireframe===!0;(c.geometry!==B.id||c.program!==O.id||c.wireframe!==ot)&&(c.geometry=B.id,c.program=O.id,c.wireframe=ot,tt=!0)}F.isInstancedMesh===!0&&(tt=!0),U!==null&&e.update(U,34963),tt&&(v(F,N,O,B),U!==null&&r.bindBuffer(34963,e.get(U).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function h(F){return n.isWebGL2?r.bindVertexArray(F):s.bindVertexArrayOES(F)}function f(F){return n.isWebGL2?r.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function g(F,N,O){const B=O.wireframe===!0;let U=a[F.id];U===void 0&&(U={},a[F.id]=U);let tt=U[N.id];tt===void 0&&(tt={},U[N.id]=tt);let ot=tt[B];return ot===void 0&&(ot=x(d()),tt[B]=ot),ot}function x(F){const N=[],O=[],B=[];for(let U=0;U<i;U++)N[U]=0,O[U]=0,B[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:B,object:F,attributes:{},index:null}}function y(F,N){const O=c.attributes,B=F.attributes;let U=0;for(const tt in B){const ot=O[tt],W=B[tt];if(ot===void 0||ot.attribute!==W||ot.data!==W.data)return!0;U++}return c.attributesNum!==U||c.index!==N}function m(F,N){const O={},B=F.attributes;let U=0;for(const tt in B){const ot=B[tt],W={};W.attribute=ot,ot.data&&(W.data=ot.data),O[tt]=W,U++}c.attributes=O,c.attributesNum=U,c.index=N}function p(){const F=c.newAttributes;for(let N=0,O=F.length;N<O;N++)F[N]=0}function M(F){_(F,0)}function _(F,N){const O=c.newAttributes,B=c.enabledAttributes,U=c.attributeDivisors;O[F]=1,B[F]===0&&(r.enableVertexAttribArray(F),B[F]=1),U[F]!==N&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,N),U[F]=N)}function b(){const F=c.newAttributes,N=c.enabledAttributes;for(let O=0,B=N.length;O<B;O++)N[O]!==F[O]&&(r.disableVertexAttribArray(O),N[O]=0)}function E(F,N,O,B,U,tt){n.isWebGL2===!0&&(O===5124||O===5125)?r.vertexAttribIPointer(F,N,O,U,tt):r.vertexAttribPointer(F,N,O,B,U,tt)}function v(F,N,O,B){if(n.isWebGL2===!1&&(F.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;p();const U=B.attributes,tt=O.getAttributes(),ot=N.defaultAttributeValues;for(const W in tt){const q=tt[W];if(q.location>=0){let ct=U[W];if(ct===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(ct=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(ct=F.instanceColor)),ct!==void 0){const at=ct.normalized,dt=ct.itemSize,Pt=e.get(ct);if(Pt===void 0)continue;const J=Pt.buffer,Tt=Pt.type,yt=Pt.bytesPerElement;if(ct.isInterleavedBufferAttribute){const ft=ct.data,xt=ft.stride,Rt=ct.offset;if(ft&&ft.isInstancedInterleavedBuffer){for(let G=0;G<q.locationSize;G++)_(q.location+G,ft.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let G=0;G<q.locationSize;G++)M(q.location+G);r.bindBuffer(34962,J);for(let G=0;G<q.locationSize;G++)E(q.location+G,dt/q.locationSize,Tt,at,xt*yt,(Rt+dt/q.locationSize*G)*yt)}else{if(ct.isInstancedBufferAttribute){for(let ft=0;ft<q.locationSize;ft++)_(q.location+ft,ct.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ft=0;ft<q.locationSize;ft++)M(q.location+ft);r.bindBuffer(34962,J);for(let ft=0;ft<q.locationSize;ft++)E(q.location+ft,dt/q.locationSize,Tt,at,dt*yt,dt/q.locationSize*ft*yt)}}else if(ot!==void 0){const at=ot[W];if(at!==void 0)switch(at.length){case 2:r.vertexAttrib2fv(q.location,at);break;case 3:r.vertexAttrib3fv(q.location,at);break;case 4:r.vertexAttrib4fv(q.location,at);break;default:r.vertexAttrib1fv(q.location,at)}}}}b()}function R(){C();for(const F in a){const N=a[F];for(const O in N){const B=N[O];for(const U in B)f(B[U].object),delete B[U];delete N[O]}delete a[F]}}function D(F){if(a[F.id]===void 0)return;const N=a[F.id];for(const O in N){const B=N[O];for(const U in B)f(B[U].object),delete B[U];delete N[O]}delete a[F.id]}function I(F){for(const N in a){const O=a[N];if(O[F.id]===void 0)continue;const B=O[F.id];for(const U in B)f(B[U].object),delete B[U];delete O[F.id]}}function C(){X(),c!==l&&(c=l,h(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:C,resetDefaultState:X,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:p,enableAttribute:M,disableUnusedAttributes:b}}function Dg(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,f;if(i)h=r,f="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](s,c,u,d),e.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function Ig(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(v){if(v==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,d=r.getParameter(34930),h=r.getParameter(35660),f=r.getParameter(3379),g=r.getParameter(34076),x=r.getParameter(34921),y=r.getParameter(36347),m=r.getParameter(36348),p=r.getParameter(36349),M=h>0,_=o||t.has("OES_texture_float"),b=M&&_,E=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:y,maxVaryings:m,maxFragmentUniforms:p,vertexTextures:M,floatFragmentTextures:_,floatVertexTextures:b,maxSamples:E}}function Fg(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Fe,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,f){const g=d.length!==0||h||n!==0||i;return i=h,e=u(d,f,0),n=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,h,f){const g=d.clippingPlanes,x=d.clipIntersection,y=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!y)s?u(null):c();else{const p=s?0:n,M=p*4;let _=m.clippingState||null;l.value=_,_=u(g,h,M,f);for(let b=0;b!==M;++b)_[b]=e[b];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const x=d!==null?d.length:0;let y=null;if(x!==0){if(y=l.value,g!==!0||y===null){const m=f+x*4,p=h.matrixWorldInverse;a.getNormalMatrix(p),(y===null||y.length<m)&&(y=new Float32Array(m));for(let M=0,_=f;M!==x;++M,_+=4)o.copy(d[M]).applyMatrix4(p,a),o.normal.toArray(y,_),y[_+3]=o.constant}l.value=y,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,y}}function Ng(r){let t=new WeakMap;function e(o,a){return a===lo?o.mapping=Wi:a===co&&(o.mapping=qi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===lo||a===co)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=r.getRenderTarget(),u=new rc(l.height/2);return u.fromEquirectangularTexture(r,o),t.set(o,u),r.setRenderTarget(c),o.addEventListener("dispose",i),e(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Yo extends cs{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}Yo.prototype.isOrthographicCamera=!0;class fs extends On{constructor(t){super(t);this.type="RawShaderMaterial"}}fs.prototype.isRawShaderMaterial=!0;const vi=4,fn=8,Be=Math.pow(2,fn),oc=[.125,.215,.35,.446,.526,.582],ac=fn-vi+1+oc.length,Mi=20,Un={[_e]:0,[Gr]:1,[xo]:2,[Bl]:3,[zl]:4,[Ol]:5,[go]:6},Zo=new Yo,{_lodPlanes:nr,_sizeLods:lc,_sigmas:ps}=Og(),cc=new mt;let $o=null;const Vn=(1+Math.sqrt(5))/2,bi=1/Vn,uc=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Vn,bi),new w(0,Vn,-bi),new w(bi,0,Vn),new w(-bi,0,Vn),new w(Vn,bi,0),new w(-Vn,bi,0)];class Bg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._blurMaterial=Ug(Mi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){$o=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t){return this._fromTexture(t)}fromCubemap(t){return this._fromTexture(t)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=fc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=dc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let t=0;t<nr.length;t++)nr[t].dispose()}_cleanup(t){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget($o),t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t){$o=this._renderer.getRenderTarget();const e=this._allocateTargets(t);return this._textureToCubeUV(t,e),this._applyPMREM(e),this._cleanup(e),e}_allocateTargets(t){const e={magFilter:re,minFilter:re,generateMipmaps:!1,type:en,format:Id,encoding:zg(t)?t.encoding:xo,depthBuffer:!1},n=hc(e);return n.depthBuffer=!t,this._pingPongRenderTarget=hc(e),n}_compileMaterial(t){const e=new xe(nr[0],t);this._renderer.compile(e,Zo)}_sceneToCubeUV(t,e,n,i){const s=90,o=1,a=new ve(s,o,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.outputEncoding,f=u.toneMapping;u.getClearColor(cc),u.toneMapping=Dn,u.outputEncoding=_e,u.autoClear=!1;const g=new Oo({name:"PMREM.Background",side:ie,depthWrite:!1,depthTest:!1}),x=new xe(new er,g);let y=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,y=!0):(g.color.copy(cc),y=!0);for(let p=0;p<6;p++){const M=p%3;M==0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M==1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p])),ms(i,M*Be,p>2?Be:0,Be,Be),u.setRenderTarget(i),y&&u.render(x,a),u.render(t,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.outputEncoding=h,u.autoClear=d,t.background=m}_setEncoding(t,e){t.value=Un[e.encoding]}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Wi||t.mapping===qi;i?this._cubemapShader==null&&(this._cubemapShader=fc()):this._equirectShader==null&&(this._equirectShader=dc());const s=i?this._cubemapShader:this._equirectShader,o=new xe(nr[0],s),a=s.uniforms;a.envMap.value=t,i||a.texelSize.value.set(1/t.image.width,1/t.image.height),this._setEncoding(a.inputEncoding,t),this._setEncoding(a.outputEncoding,e.texture),ms(e,0,0,3*Be,2*Be),n.setRenderTarget(e),n.render(o,Zo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<ac;i++){const s=Math.sqrt(ps[i]*ps[i]-ps[i-1]*ps[i-1]),o=uc[(i-1)%uc.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new xe(nr[i],c),h=c.uniforms,f=lc[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Mi-1),x=s/g,y=isFinite(s)?1+Math.floor(u*x):Mi;y>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Mi}`);const m=[];let p=0;for(let E=0;E<Mi;++E){const v=E/x,R=Math.exp(-v*v/2);m.push(R),E==0?p+=R:E<y&&(p+=2*R)}for(let E=0;E<m.length;E++)m[E]=m[E]/p;h.envMap.value=t.texture,h.samples.value=y,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a),h.dTheta.value=g,h.mipInt.value=fn-n,this._setEncoding(h.inputEncoding,t.texture),this._setEncoding(h.outputEncoding,t.texture);const M=lc[i],_=3*Math.max(0,Be-2*M),b=(i===0?0:2*Be)+2*M*(i>fn-vi?i-fn+vi:0);ms(e,_,b,3*M,2*M),l.setRenderTarget(e),l.render(d,Zo)}}function zg(r){return r===void 0||r.type!==en?!1:r.encoding===_e||r.encoding===Gr||r.encoding===go}function Og(){const r=[],t=[],e=[];let n=fn;for(let i=0;i<ac;i++){const s=Math.pow(2,n);t.push(s);let o=1/s;i>fn-vi?o=oc[i-fn+vi-1]:i==0&&(o=0),e.push(o);const a=1/(s-1),l=-a/2,c=1+a/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=2,x=1,y=new Float32Array(f*h*d),m=new Float32Array(g*h*d),p=new Float32Array(x*h*d);for(let _=0;_<d;_++){const b=_%3*2/3-1,E=_>2?0:-1,v=[b,E,0,b+2/3,E,0,b+2/3,E+1,0,b,E,0,b+2/3,E+1,0,b,E+1,0];y.set(v,f*h*_),m.set(u,g*h*_);const R=[_,_,_,_,_,_];p.set(R,x*h*_)}const M=new Ht;M.setAttribute("position",new te(y,f)),M.setAttribute("uv",new te(m,g)),M.setAttribute("faceIndex",new te(p,x)),r.push(M),n>vi&&n--}return{_lodPlanes:r,_sizeLods:t,_sigmas:e}}function hc(r){const t=new Ee(3*Be,3*Be,r);return t.texture.mapping=zr,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function ms(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Ug(r){const t=new Float32Array(r),e=new w(0,1,0);return new fs({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:e},inputEncoding:{value:Un[_e]},outputEncoding:{value:Un[_e]}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Qo()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function dc(){const r=new Z(1,1);return new fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:Un[_e]},outputEncoding:{value:Un[_e]}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Qo()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function fc(){return new fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Un[_e]},outputEncoding:{value:Un[_e]}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Qo()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Jo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qo(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function Vg(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping,c=l===lo||l===co,u=l===Wi||l===qi;if(c||u){if(t.has(a))return t.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&i(d)){const h=r.getRenderTarget();e===null&&(e=new Bg(r));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),r.setRenderTarget(h),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kg(r,t,e,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)t.update(h[g],34962);const f=d.morphAttributes;for(const g in f){const x=f[g];for(let y=0,m=x.length;y<m;y++)t.update(x[y],34962)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const p=f.array;x=f.version;for(let M=0,_=p.length;M<_;M+=3){const b=p[M+0],E=p[M+1],v=p[M+2];h.push(b,E,E,v,v,b)}}else{const p=g.array;x=g.version;for(let M=0,_=p.length/3-1;M<_;M+=3){const b=M+0,E=M+1,v=M+2;h.push(b,E,E,v,v,b)}}const y=new(Hl(h)>65535?nc:ec)(h,1);y.version=x;const m=s.get(d);m&&t.remove(m),s.set(d,y)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Gg(r,t,e,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,f){r.drawElements(s,f,a,h*l),e.update(f,s,1)}function d(h,f,g){if(g===0)return;let x,y;if(i)x=r,y="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](s,f,a,h*l,g),e.update(f,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function Wg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}class Ko extends ce{constructor(t=null,e=1,n=1,i=1){super(null);this.image={data:t,width:e,height:n,depth:i},this.magFilter=re,this.minFilter=re,this.wrapR=Me,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ko.prototype.isDataTexture2DArray=!0;function qg(r,t){return r[0]-t[0]}function Xg(r,t){return Math.abs(t[1])-Math.abs(r[1])}function pc(r,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(e)}function jg(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new w,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position.length;let x=s.get(u);if(x===void 0||x.count!==g){x!==void 0&&x.texture.dispose();const p=u.morphAttributes.normal!==void 0,M=u.morphAttributes.position,_=u.morphAttributes.normal||[],b=u.attributes.position.count,E=p===!0?2:1;let v=b*E,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const D=new Float32Array(v*R*4*g),I=new Ko(D,v,R,g);I.format=ge,I.type=nn;const C=E*4;for(let X=0;X<g;X++){const F=M[X],N=_[X],O=v*R*4*X;for(let B=0;B<F.count;B++){o.fromBufferAttribute(F,B),F.normalized===!0&&pc(o,F);const U=B*C;D[O+U+0]=o.x,D[O+U+1]=o.y,D[O+U+2]=o.z,D[O+U+3]=0,p===!0&&(o.fromBufferAttribute(N,B),N.normalized===!0&&pc(o,N),D[O+U+4]=o.x,D[O+U+5]=o.y,D[O+U+6]=o.z,D[O+U+7]=0)}}x={count:g,texture:I,size:new Z(v,R)},s.set(u,x)}let y=0;for(let p=0;p<f.length;p++)y+=f[p];const m=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const g=f===void 0?0:f.length;let x=n[u.id];if(x===void 0||x.length!==g){x=[];for(let _=0;_<g;_++)x[_]=[_,0];n[u.id]=x}for(let _=0;_<g;_++){const b=x[_];b[0]=_,b[1]=f[_]}x.sort(Xg);for(let _=0;_<8;_++)_<g&&x[_][1]?(a[_][0]=x[_][0],a[_][1]=x[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(qg);const y=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const b=a[_],E=b[0],v=b[1];E!==Number.MAX_SAFE_INTEGER&&v?(y&&u.getAttribute("morphTarget"+_)!==y[E]&&u.setAttribute("morphTarget"+_,y[E]),m&&u.getAttribute("morphNormal"+_)!==m[E]&&u.setAttribute("morphNormal"+_,m[E]),i[_]=v,p+=v):(y&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Yg(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class mc extends ce{constructor(t=null,e=1,n=1,i=1){super(null);this.image={data:t,width:e,height:n,depth:i},this.magFilter=re,this.minFilter=re,this.wrapR=Me,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}mc.prototype.isDataTexture3D=!0;const gc=new ce,xc=new Ko,yc=new mc,_c=new us,vc=[],Mc=[],bc=new Float32Array(16),wc=new Float32Array(9),Sc=new Float32Array(4);function wi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=vc[i];if(s===void 0&&(s=new Float32Array(i),vc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ye(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function me(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function gs(r,t){let e=Mc[t];e===void 0&&(e=new Int32Array(t),Mc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Zg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function $g(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;r.uniform2fv(this.addr,t),me(e,t)}}function Jg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;r.uniform3fv(this.addr,t),me(e,t)}}function Qg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;r.uniform4fv(this.addr,t),me(e,t)}}function Kg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(ye(e,n))return;Sc.set(n),r.uniformMatrix2fv(this.addr,!1,Sc),me(e,n)}}function tx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(ye(e,n))return;wc.set(n),r.uniformMatrix3fv(this.addr,!1,wc),me(e,n)}}function ex(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(ye(e,n))return;bc.set(n),r.uniformMatrix4fv(this.addr,!1,bc),me(e,n)}}function nx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function ix(r,t){const e=this.cache;ye(e,t)||(r.uniform2iv(this.addr,t),me(e,t))}function rx(r,t){const e=this.cache;ye(e,t)||(r.uniform3iv(this.addr,t),me(e,t))}function sx(r,t){const e=this.cache;ye(e,t)||(r.uniform4iv(this.addr,t),me(e,t))}function ox(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ax(r,t){const e=this.cache;ye(e,t)||(r.uniform2uiv(this.addr,t),me(e,t))}function lx(r,t){const e=this.cache;ye(e,t)||(r.uniform3uiv(this.addr,t),me(e,t))}function cx(r,t){const e=this.cache;ye(e,t)||(r.uniform4uiv(this.addr,t),me(e,t))}function ux(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.safeSetTexture2D(t||gc,i)}function hx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||yc,i)}function dx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.safeSetTextureCube(t||_c,i)}function fx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xc,i)}function px(r){switch(r){case 5126:return Zg;case 35664:return $g;case 35665:return Jg;case 35666:return Qg;case 35674:return Kg;case 35675:return tx;case 35676:return ex;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return rx;case 35669:case 35673:return sx;case 5125:return ox;case 36294:return ax;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}function mx(r,t){r.uniform1fv(this.addr,t)}function gx(r,t){const e=wi(t,this.size,2);r.uniform2fv(this.addr,e)}function xx(r,t){const e=wi(t,this.size,3);r.uniform3fv(this.addr,e)}function yx(r,t){const e=wi(t,this.size,4);r.uniform4fv(this.addr,e)}function _x(r,t){const e=wi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function vx(r,t){const e=wi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Mx(r,t){const e=wi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function bx(r,t){r.uniform1iv(this.addr,t)}function wx(r,t){r.uniform2iv(this.addr,t)}function Sx(r,t){r.uniform3iv(this.addr,t)}function Tx(r,t){r.uniform4iv(this.addr,t)}function Ex(r,t){r.uniform1uiv(this.addr,t)}function Ax(r,t){r.uniform2uiv(this.addr,t)}function Lx(r,t){r.uniform3uiv(this.addr,t)}function Cx(r,t){r.uniform4uiv(this.addr,t)}function Rx(r,t,e){const n=t.length,i=gs(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.safeSetTexture2D(t[s]||gc,i[s])}function Px(r,t,e){const n=t.length,i=gs(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture3D(t[s]||yc,i[s])}function Dx(r,t,e){const n=t.length,i=gs(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.safeSetTextureCube(t[s]||_c,i[s])}function Ix(r,t,e){const n=t.length,i=gs(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2DArray(t[s]||xc,i[s])}function Fx(r){switch(r){case 5126:return mx;case 35664:return gx;case 35665:return xx;case 35666:return yx;case 35674:return _x;case 35675:return vx;case 35676:return Mx;case 5124:case 35670:return bx;case 35667:case 35671:return wx;case 35668:case 35672:return Sx;case 35669:case 35673:return Tx;case 5125:return Ex;case 36294:return Ax;case 36295:return Lx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Ix}}function Nx(r,t,e){this.id=r,this.addr=e,this.cache=[],this.setValue=px(t.type)}function Tc(r,t,e){this.id=r,this.addr=e,this.cache=[],this.size=t.size,this.setValue=Fx(t.type)}Tc.prototype.updateCache=function(r){const t=this.cache;r instanceof Float32Array&&t.length!==r.length&&(this.cache=new Float32Array(r.length)),me(t,r)};function Ec(r){this.id=r,this.seq=[],this.map={}}Ec.prototype.setValue=function(r,t,e){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(r,t[o.id],e)}};const ta=/(\w+)(\])?(\[|\.)?/g;function Ac(r,t){r.seq.push(t),r.map[t.id]=t}function Bx(r,t,e){const n=r.name,i=n.length;for(ta.lastIndex=0;;){const s=ta.exec(n),o=ta.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ac(e,c===void 0?new Nx(a,r,t):new Tc(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Ec(a),Ac(e,d)),e=d}}}function pn(r,t){this.seq=[],this.map={};const e=r.getProgramParameter(t,35718);for(let n=0;n<e;++n){const i=r.getActiveUniform(t,n),s=r.getUniformLocation(t,i.name);Bx(i,s,this)}}pn.prototype.setValue=function(r,t,e,n){const i=this.map[t];i!==void 0&&i.setValue(r,e,n)};pn.prototype.setOptional=function(r,t,e){const n=t[e];n!==void 0&&this.setValue(r,e,n)};pn.upload=function(r,t,e,n){for(let i=0,s=t.length;i!==s;++i){const o=t[i],a=e[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}};pn.seqWithValue=function(r,t){const e=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in t&&e.push(s)}return e};function Lc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let zx=0;function Ox(r){const t=r.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function Cc(r){switch(r){case _e:return["Linear","( value )"];case Gr:return["sRGB","( value )"];case xo:return["RGBE","( value )"];case Bl:return["RGBM","( value, 7.0 )"];case zl:return["RGBM","( value, 16.0 )"];case Ol:return["RGBD","( value, 256.0 )"];case go:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Rc(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();return n&&i===""?"":e.toUpperCase()+`

`+i+`

`+Ox(r.getShaderSource(t))}function Hn(r,t){const e=Cc(t);return"vec4 "+r+"( vec4 value ) { return "+e[0]+"ToLinear"+e[1]+"; }"}function Ux(r,t){const e=Cc(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Vx(r,t){let e;switch(t){case yd:e="Linear";break;case _d:e="Reinhard";break;case vd:e="OptimizedCineon";break;case Md:e="ACESFilmic";break;case bd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Hx(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ir).join(`
`)}function kx(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gx(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ir(r){return r!==""}function Pc(r,t){return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(r){return r.replace(Wx,qx)}function qx(r,t){const e=Ct[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ea(e)}const Xx=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(r){return r.replace(jx,Fc).replace(Xx,Yx)}function Yx(r,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Fc(r,t,e,n)}function Fc(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===fl?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===$h?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ki&&(t="SHADOWMAP_TYPE_VSM"),t}function $x(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Wi:case qi:t="ENVMAP_TYPE_CUBE";break;case zr:case uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case qi:case uo:t="ENVMAP_MODE_REFRACTION";break}return t}function Qx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Br:t="ENVMAP_BLENDING_MULTIPLY";break;case gd:t="ENVMAP_BLENDING_MIX";break;case xd:t="ENVMAP_BLENDING_ADD";break}return t}function Kx(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Zx(e),c=$x(e),u=Jx(e),d=Qx(e),h=r.gammaFactor>0?r.gammaFactor:1,f=e.isWebGL2?"":Hx(e),g=kx(s),x=i.createProgram();let y,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=[g].filter(ir).join(`
`),y.length>0&&(y+=`
`),m=[f,g].filter(ir).join(`
`),m.length>0&&(m+=`
`)):(y=[Nc(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+h,"#define MAX_BONES "+e.maxBones,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphTargets&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargets&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),m=[f,Nc(e),"#define SHADER_NAME "+e.shaderName,g,"#define GAMMA_FACTOR "+h,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Ct.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Vx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.format===In?"#define OPAQUE":"",Ct.encodings_pars_fragment,e.map?Hn("mapTexelToLinear",e.mapEncoding):"",e.matcap?Hn("matcapTexelToLinear",e.matcapEncoding):"",e.envMap?Hn("envMapTexelToLinear",e.envMapEncoding):"",e.emissiveMap?Hn("emissiveMapTexelToLinear",e.emissiveMapEncoding):"",e.specularColorMap?Hn("specularColorMapTexelToLinear",e.specularColorMapEncoding):"",e.sheenColorMap?Hn("sheenColorMapTexelToLinear",e.sheenColorMapEncoding):"",e.lightMap?Hn("lightMapTexelToLinear",e.lightMapEncoding):"",Ux("linearToOutputTexel",e.outputEncoding),e.depthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),o=ea(o),o=Pc(o,e),o=Dc(o,e),a=ea(a),a=Pc(a,e),a=Dc(a,e),o=Ic(o),a=Ic(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===Ul?"":"out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=p+y+o,_=p+m+a,b=Lc(i,35633,M),E=Lc(i,35632,_);if(i.attachShader(x,b),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),r.debug.checkShaderErrors){const D=i.getProgramInfoLog(x).trim(),I=i.getShaderInfoLog(b).trim(),C=i.getShaderInfoLog(E).trim();let X=!0,F=!0;if(i.getProgramParameter(x,35714)===!1){X=!1;const N=Rc(i,b,"vertex"),O=Rc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,35715)+`

Program Info Log: `+D+`
`+N+`
`+O)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||C==="")&&(F=!1);F&&(this.diagnostics={runnable:X,programLog:D,vertexShader:{log:I,prefix:y},fragmentShader:{log:C,prefix:m}})}i.deleteShader(b),i.deleteShader(E);let v;this.getUniforms=function(){return v===void 0&&(v=new pn(i,x)),v};let R;return this.getAttributes=function(){return R===void 0&&(R=Gx(i,x)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.name=e.shaderName,this.id=zx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}function ty(r,t,e,n,i,s,o){const a=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,u=i.floatVertexTextures,d=i.maxVertexUniforms,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},x=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function y(v){const D=v.skeleton.bones;if(u)return 1024;{const C=Math.floor((d-20)/4),X=Math.min(C,D.length);return X<D.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+D.length+" bones. This GPU supports "+X+"."),0):X}}function m(v){let R;return v&&v.isTexture?R=v.encoding:v&&v.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),R=v.texture.encoding):R=_e,R}function p(v,R,D,I,C){const X=I.fog,F=v.isMeshStandardMaterial?I.environment:null,N=(v.isMeshStandardMaterial?e:t).get(v.envMap||F),O=g[v.type],B=C.isSkinnedMesh?y(C):0;v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let U,tt;if(O){const at=Ne[O];U=at.vertexShader,tt=at.fragmentShader}else U=v.vertexShader,tt=v.fragmentShader;const ot=r.getRenderTarget(),W=v.alphaTest>0,q=v.clearcoat>0;return{isWebGL2:l,shaderID:O,shaderName:v.type,vertexShader:U,fragmentShader:tt,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,instancing:C.isInstancedMesh===!0,instancingColor:C.isInstancedMesh===!0&&C.instanceColor!==null,supportsVertexTextures:h,outputEncoding:ot!==null?m(ot.texture):r.outputEncoding,map:!!v.map,mapEncoding:m(v.map),matcap:!!v.matcap,matcapEncoding:m(v.matcap),envMap:!!N,envMapMode:N&&N.mapping,envMapEncoding:m(N),envMapCubeUV:!!N&&(N.mapping===zr||N.mapping===uo),lightMap:!!v.lightMap,lightMapEncoding:m(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:m(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===wf,tangentSpaceNormalMap:v.normalMapType===ii,clearcoat:q,clearcoatMap:q&&!!v.clearcoatMap,clearcoatRoughnessMap:q&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:q&&!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,specularColorMapEncoding:m(v.specularColorMap),alphaMap:!!v.alphaMap,alphaTest:W,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenColorMapEncoding:m(v.sheenColorMap),sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!C.geometry&&!!C.geometry.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!C.geometry&&!!C.geometry.attributes.color&&C.geometry.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!X,useFog:v.fog,fogExp2:X&&X.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:c,skinning:C.isSkinnedMesh===!0&&B>0,maxBones:B,useVertexTexture:u,morphTargets:!!C.geometry&&!!C.geometry.morphAttributes.position,morphNormals:!!C.geometry&&!!C.geometry.morphAttributes.normal,morphTargetsCount:!!C.geometry&&!!C.geometry.morphAttributes.position?C.geometry.morphAttributes.position.length:0,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:v.format,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:Dn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pn,flipSided:v.side===ie,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function M(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(kl(v.fragmentShader)),R.push(kl(v.vertexShader))),v.defines!==void 0)for(const D in v.defines)R.push(D),R.push(v.defines[D]);if(v.isRawShaderMaterial===!1){for(let D=0;D<x.length;D++)R.push(v[x[D]]);R.push(r.outputEncoding),R.push(r.gammaFactor)}return R.push(v.customProgramCacheKey),R.join()}function _(v){const R=g[v.type];let D;if(R){const I=Ne[R];D=Qf.clone(I.uniforms)}else D=v.uniforms;return D}function b(v,R){let D;for(let I=0,C=a.length;I<C;I++){const X=a[I];if(X.cacheKey===R){D=X,++D.usedTimes;break}}return D===void 0&&(D=new Kx(r,R,v,s),a.push(D)),D}function E(v){if(--v.usedTimes==0){const R=a.indexOf(v);a[R]=a[a.length-1],a.pop(),v.destroy()}}return{getParameters:p,getProgramCacheKey:M,getUniforms:_,acquireProgram:b,releaseProgram:E,programs:a}}function ey(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function ny(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.program!==t.program?r.program.id-t.program.id:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Bc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zc(r){const t=[];let e=0;const n=[],i=[],s=[],o={id:-1};function a(){e=0,n.length=0,i.length=0,s.length=0}function l(f,g,x,y,m,p){let M=t[e];const _=r.get(x);return M===void 0?(M={id:f.id,object:f,geometry:g,material:x,program:_.program||o,groupOrder:y,renderOrder:f.renderOrder,z:m,group:p},t[e]=M):(M.id=f.id,M.object=f,M.geometry=g,M.material=x,M.program=_.program||o,M.groupOrder=y,M.renderOrder=f.renderOrder,M.z=m,M.group=p),e++,M}function c(f,g,x,y,m,p){const M=l(f,g,x,y,m,p);x.transmission>0?i.push(M):x.transparent===!0?s.push(M):n.push(M)}function u(f,g,x,y,m,p){const M=l(f,g,x,y,m,p);x.transmission>0?i.unshift(M):x.transparent===!0?s.unshift(M):n.unshift(M)}function d(f,g){n.length>1&&n.sort(f||ny),i.length>1&&i.sort(g||Bc),s.length>1&&s.sort(g||Bc)}function h(){for(let f=e,g=t.length;f<g;f++){const x=t[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.program=null,x.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:c,unshift:u,finish:h,sort:d}}function iy(r){let t=new WeakMap;function e(i,s){let o;return t.has(i)===!1?(o=new zc(r),t.set(i,[o])):s>=t.get(i).length?(o=new zc(r),t.get(i).push(o)):o=t.get(i)[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function ry(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new mt};break;case"SpotLight":e={position:new w,direction:new w,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new w,halfWidth:new w,halfHeight:new w};break}return r[t.id]=e,e}}}function sy(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let oy=0;function ay(r,t){return(t.castShadow?1:0)-(r.castShadow?1:0)}function ly(r,t){const e=new ry,n=sy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new w);const s=new w,o=new gt,a=new gt;function l(u,d){let h=0,f=0,g=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let x=0,y=0,m=0,p=0,M=0,_=0,b=0,E=0;u.sort(ay);const v=d!==!0?Math.PI:1;for(let D=0,I=u.length;D<I;D++){const C=u[D],X=C.color,F=C.intensity,N=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=X.r*F*v,f+=X.g*F*v,g+=X.b*F*v;else if(C.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],F);else if(C.isDirectionalLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity*v),C.castShadow){const U=C.shadow,tt=n.get(C);tt.shadowBias=U.bias,tt.shadowNormalBias=U.normalBias,tt.shadowRadius=U.radius,tt.shadowMapSize=U.mapSize,i.directionalShadow[x]=tt,i.directionalShadowMap[x]=O,i.directionalShadowMatrix[x]=C.shadow.matrix,_++}i.directional[x]=B,x++}else if(C.isSpotLight){const B=e.get(C);if(B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(X).multiplyScalar(F*v),B.distance=N,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,C.castShadow){const U=C.shadow,tt=n.get(C);tt.shadowBias=U.bias,tt.shadowNormalBias=U.normalBias,tt.shadowRadius=U.radius,tt.shadowMapSize=U.mapSize,i.spotShadow[m]=tt,i.spotShadowMap[m]=O,i.spotShadowMatrix[m]=C.shadow.matrix,E++}i.spot[m]=B,m++}else if(C.isRectAreaLight){const B=e.get(C);B.color.copy(X).multiplyScalar(F),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=B,p++}else if(C.isPointLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity*v),B.distance=C.distance,B.decay=C.decay,C.castShadow){const U=C.shadow,tt=n.get(C);tt.shadowBias=U.bias,tt.shadowNormalBias=U.normalBias,tt.shadowRadius=U.radius,tt.shadowMapSize=U.mapSize,tt.shadowCameraNear=U.camera.near,tt.shadowCameraFar=U.camera.far,i.pointShadow[y]=tt,i.pointShadowMap[y]=O,i.pointShadowMatrix[y]=C.shadow.matrix,b++}i.point[y]=B,y++}else if(C.isHemisphereLight){const B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(F*v),B.groundColor.copy(C.groundColor).multiplyScalar(F*v),i.hemi[M]=B,M++}}p>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==x||R.pointLength!==y||R.spotLength!==m||R.rectAreaLength!==p||R.hemiLength!==M||R.numDirectionalShadows!==_||R.numPointShadows!==b||R.numSpotShadows!==E)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=p,i.point.length=y,i.hemi.length=M,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=b,i.spotShadowMatrix.length=E,R.directionalLength=x,R.pointLength=y,R.spotLength=m,R.rectAreaLength=p,R.hemiLength=M,R.numDirectionalShadows=_,R.numPointShadows=b,R.numSpotShadows=E,i.version=oy++)}function c(u,d){let h=0,f=0,g=0,x=0,y=0;const m=d.matrixWorldInverse;for(let p=0,M=u.length;p<M;p++){const _=u[p];if(_.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(_.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const b=i.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),a.identity(),o.copy(_.matrixWorld),o.premultiply(m),a.extractRotation(o),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const b=i.hemi[y];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),b.direction.normalize(),y++}}}return{setup:l,setupView:c,state:i}}function Oc(r,t){const e=new ly(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cy(r,t){let e=new WeakMap;function n(s,o=0){let a;return e.has(s)===!1?(a=new Oc(r,t),e.set(s,[a])):o>=e.get(s).length?(a=new Oc(r,t),e.get(s).push(a)):a=e.get(s)[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Uc extends fe{constructor(t){super();this.type="MeshDepthMaterial",this.depthPacking=Mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}Uc.prototype.isMeshDepthMaterial=!0;class Vc extends fe{constructor(t){super();this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}Vc.prototype.isMeshDistanceMaterial=!0;const uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hc(r,t,e){let n=new ds;const i=new Z,s=new Z,o=new Vt,a=new Uc({depthPacking:bf}),l=new Vc,c={},u=e.maxTextureSize,d={0:ie,1:Rn,2:Pn},h=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:uy,fragmentShader:hy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new xe(g,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl,this.render=function(_,b,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||_.length===0)return;const v=r.getRenderTarget(),R=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(tn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let C=0,X=_.length;C<X;C++){const F=_[C],N=F.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const O=N.getFrameExtents();if(i.multiply(O),s.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/O.x),i.x=s.x*O.x,N.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/O.y),i.y=s.y*O.y,N.mapSize.y=s.y)),N.map===null&&!N.isPointLightShadow&&this.type===ki){const U={minFilter:Te,magFilter:Te,format:ge};N.map=new Ee(i.x,i.y,U),N.map.texture.name=F.name+".shadowMap",N.mapPass=new Ee(i.x,i.y,U),N.camera.updateProjectionMatrix()}if(N.map===null){const U={minFilter:re,magFilter:re,format:ge};N.map=new Ee(i.x,i.y,U),N.map.texture.name=F.name+".shadowMap",N.camera.updateProjectionMatrix()}r.setRenderTarget(N.map),r.clear();const B=N.getViewportCount();for(let U=0;U<B;U++){const tt=N.getViewport(U);o.set(s.x*tt.x,s.y*tt.y,s.x*tt.z,s.y*tt.w),I.viewport(o),N.updateMatrices(F,U),n=N.getFrustum(),M(b,E,N.camera,F,this.type)}!N.isPointLightShadow&&this.type===ki&&m(N,E),N.needsUpdate=!1}y.needsUpdate=!1,r.setRenderTarget(v,R,D)};function m(_,b){const E=t.update(x);h.defines.VSM_SAMPLES!==_.blurSamples&&(h.defines.VSM_SAMPLES=_.blurSamples,f.defines.VSM_SAMPLES=_.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),h.uniforms.shadow_pass.value=_.map.texture,h.uniforms.resolution.value=_.mapSize,h.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(b,null,E,h,x,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(b,null,E,f,x,null)}function p(_,b,E,v,R,D,I){let C=null;const X=v.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(X!==void 0?C=X:C=v.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const F=C.uuid,N=E.uuid;let O=c[F];O===void 0&&(O={},c[F]=O);let B=O[N];B===void 0&&(B=C.clone(),O[N]=B),C=B}return C.visible=E.visible,C.wireframe=E.wireframe,I===ki?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:d[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaTest,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(v.matrixWorld),C.nearDistance=R,C.farDistance=D),C}function M(_,b,E,v,R){if(_.visible===!1)return;if(_.layers.test(b.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&R===ki)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,_.matrixWorld);const C=t.update(_),X=_.material;if(Array.isArray(X)){const F=C.groups;for(let N=0,O=F.length;N<O;N++){const B=F[N],U=X[B.materialIndex];if(U&&U.visible){const tt=p(_,C,U,v,E.near,E.far,R);r.renderBufferDirect(E,null,C,tt,_,B)}}}else if(X.visible){const F=p(_,C,X,v,E.near,E.far,R);r.renderBufferDirect(E,null,C,F,_,null)}}const I=_.children;for(let C=0,X=I.length;C<X;C++)M(I[C],b,E,v,R)}}function dy(r,t,e){const n=e.isWebGL2;function i(){let P=!1;const nt=new Vt;let A=null;const k=new Vt(0,0,0,0);return{setMask:function(Q){A!==Q&&!P&&(r.colorMask(Q,Q,Q,Q),A=Q)},setLocked:function(Q){P=Q},setClear:function(Q,it,lt,vt,kt){kt===!0&&(Q*=vt,it*=vt,lt*=vt),nt.set(Q,it,lt,vt),k.equals(nt)===!1&&(r.clearColor(Q,it,lt,vt),k.copy(nt))},reset:function(){P=!1,A=null,k.set(-1,0,0,0)}}}function s(){let P=!1,nt=null,A=null,k=null;return{setTest:function(Q){Q?at(2929):dt(2929)},setMask:function(Q){nt!==Q&&!P&&(r.depthMask(Q),nt=Q)},setFunc:function(Q){if(A!==Q){if(Q)switch(Q){case cd:r.depthFunc(512);break;case ud:r.depthFunc(519);break;case hd:r.depthFunc(513);break;case ao:r.depthFunc(515);break;case dd:r.depthFunc(514);break;case fd:r.depthFunc(518);break;case pd:r.depthFunc(516);break;case md:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);A=Q}},setLocked:function(Q){P=Q},setClear:function(Q){k!==Q&&(r.clearDepth(Q),k=Q)},reset:function(){P=!1,nt=null,A=null,k=null}}}function o(){let P=!1,nt=null,A=null,k=null,Q=null,it=null,lt=null,vt=null,kt=null;return{setTest:function(Dt){P||(Dt?at(2960):dt(2960))},setMask:function(Dt){nt!==Dt&&!P&&(r.stencilMask(Dt),nt=Dt)},setFunc:function(Dt,Qt,Kt){(A!==Dt||k!==Qt||Q!==Kt)&&(r.stencilFunc(Dt,Qt,Kt),A=Dt,k=Qt,Q=Kt)},setOp:function(Dt,Qt,Kt){(it!==Dt||lt!==Qt||vt!==Kt)&&(r.stencilOp(Dt,Qt,Kt),it=Dt,lt=Qt,vt=Kt)},setLocked:function(Dt){P=Dt},setClear:function(Dt){kt!==Dt&&(r.clearStencil(Dt),kt=Dt)},reset:function(){P=!1,nt=null,A=null,k=null,Q=null,it=null,lt=null,vt=null,kt=null}}}const a=new i,l=new s,c=new o;let u={},d={},h=null,f=!1,g=null,x=null,y=null,m=null,p=null,M=null,_=null,b=!1,E=null,v=null,R=null,D=null,I=null;const C=r.getParameter(35661);let X=!1,F=0;const N=r.getParameter(7938);N.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(N)[1]),X=F>=1):N.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),X=F>=2);let O=null,B={};const U=r.getParameter(3088),tt=r.getParameter(2978),ot=new Vt().fromArray(U),W=new Vt().fromArray(tt);function q(P,nt,A){const k=new Uint8Array(4),Q=r.createTexture();r.bindTexture(P,Q),r.texParameteri(P,10241,9728),r.texParameteri(P,10240,9728);for(let it=0;it<A;it++)r.texImage2D(nt+it,0,6408,1,1,0,6408,5121,k);return Q}const ct={};ct[3553]=q(3553,3553,1),ct[34067]=q(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),at(2929),l.setFunc(ao),Rt(!1),G(dl),at(2884),ft(tn);function at(P){u[P]!==!0&&(r.enable(P),u[P]=!0)}function dt(P){u[P]!==!1&&(r.disable(P),u[P]=!1)}function Pt(P,nt){return d[P]!==nt?(r.bindFramebuffer(P,nt),d[P]=nt,n&&(P===36009&&(d[36160]=nt),P===36160&&(d[36009]=nt)),!0):!1}function J(P){return h!==P?(r.useProgram(P),h=P,!0):!1}const Tt={[Jn]:32774,[Qh]:32778,[Kh]:32779};if(n)Tt[yl]=32775,Tt[_l]=32776;else{const P=t.get("EXT_blend_minmax");P!==null&&(Tt[yl]=P.MIN_EXT,Tt[_l]=P.MAX_EXT)}const yt={[td]:0,[ed]:1,[nd]:768,[vl]:770,[ld]:776,[od]:774,[rd]:772,[id]:769,[Ml]:771,[ad]:775,[sd]:773};function ft(P,nt,A,k,Q,it,lt,vt){if(P===tn){f===!0&&(dt(3042),f=!1);return}if(f===!1&&(at(3042),f=!0),P!==Jh){if(P!==g||vt!==b){if((x!==Jn||p!==Jn)&&(r.blendEquation(32774),x=Jn,p=Jn),vt)switch(P){case Gi:r.blendFuncSeparate(1,771,1,771);break;case ml:r.blendFunc(1,1);break;case gl:r.blendFuncSeparate(0,0,769,771);break;case xl:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Gi:r.blendFuncSeparate(770,771,1,771);break;case ml:r.blendFunc(770,1);break;case gl:r.blendFunc(0,769);break;case xl:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,m=null,M=null,_=null,g=P,b=vt}return}Q=Q||nt,it=it||A,lt=lt||k,(nt!==x||Q!==p)&&(r.blendEquationSeparate(Tt[nt],Tt[Q]),x=nt,p=Q),(A!==y||k!==m||it!==M||lt!==_)&&(r.blendFuncSeparate(yt[A],yt[k],yt[it],yt[lt]),y=A,m=k,M=it,_=lt),g=P,b=null}function xt(P,nt){P.side===Pn?dt(2884):at(2884);let A=P.side===ie;nt&&(A=!A),Rt(A),P.blending===Gi&&P.transparent===!1?ft(tn):ft(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const k=P.stencilWrite;c.setTest(k),k&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),et(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?at(32926):dt(32926)}function Rt(P){E!==P&&(P?r.frontFace(2304):r.frontFace(2305),E=P)}function G(P){P!==Yh?(at(2884),P!==v&&(P===dl?r.cullFace(1029):P===Zh?r.cullFace(1028):r.cullFace(1032))):dt(2884),v=P}function K(P){P!==R&&(X&&r.lineWidth(P),R=P)}function et(P,nt,A){P?(at(32823),(D!==nt||I!==A)&&(r.polygonOffset(nt,A),D=nt,I=A)):dt(32823)}function ut(P){P?at(3089):dt(3089)}function rt(P){P===void 0&&(P=33984+C-1),O!==P&&(r.activeTexture(P),O=P)}function Mt(P,nt){O===null&&rt();let A=B[O];A===void 0&&(A={type:void 0,texture:void 0},B[O]=A),(A.type!==P||A.texture!==nt)&&(r.bindTexture(P,nt||ct[P]),A.type=P,A.texture=nt)}function bt(){const P=B[O];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Et(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ot(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function L(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function T(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(P){ot.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),ot.copy(P))}function pt(P){W.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),W.copy(P))}function ht(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},O=null,B={},d={},h=null,f=!1,g=null,x=null,y=null,m=null,p=null,M=null,_=null,b=!1,E=null,v=null,R=null,D=null,I=null,ot.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:at,disable:dt,bindFramebuffer:Pt,useProgram:J,setBlending:ft,setMaterial:xt,setFlipSided:Rt,setCullFace:G,setLineWidth:K,setPolygonOffset:et,setScissorTest:ut,activeTexture:rt,bindTexture:Mt,unbindTexture:bt,compressedTexImage2D:Et,texImage2D:T,texImage3D:$,texStorage2D:L,texSubImage2D:Ot,scissor:Y,viewport:pt,reset:ht}}function fy(r,t,e,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):void 0,g=new WeakMap;let x,y=!1;try{y=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,T){return y?new OffscreenCanvas(L,T):Xr("canvas")}function p(L,T,$,Y){let pt=1;if((L.width>Y||L.height>Y)&&(pt=Y/Math.max(L.width,L.height)),pt<1||T===!0)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap){const ht=T?Vl:Math.floor,P=ht(pt*L.width),nt=ht(pt*L.height);x===void 0&&(x=m(P,nt));const A=$?m(P,nt):x;return A.width=P,A.height=nt,A.getContext("2d").drawImage(L,0,0,P,nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+P+"x"+nt+")."),A}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function M(L){return vo(L.width)&&vo(L.height)}function _(L){return a?!1:L.wrapS!==Me||L.wrapT!==Me||L.minFilter!==re&&L.minFilter!==Te}function b(L,T){return L.generateMipmaps&&T&&L.minFilter!==re&&L.minFilter!==Te}function E(L){r.generateMipmap(L)}function v(L,T,$){if(a===!1)return T;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Y=T;return T===6403&&($===5126&&(Y=33326),$===5131&&(Y=33325),$===5121&&(Y=33321)),T===6407&&($===5126&&(Y=34837),$===5131&&(Y=34843),$===5121&&(Y=32849)),T===6408&&($===5126&&(Y=34836),$===5131&&(Y=34842),$===5121&&(Y=32856)),(Y===33325||Y===33326||Y===34842||Y===34836)&&t.get("EXT_color_buffer_float"),Y}function R(L,T,$){return b(L,$)===!0?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps.length>0?L.mipmaps.length:1}function D(L){return L===re||L===wl||L===Sl?9728:9729}function I(L){const T=L.target;T.removeEventListener("dispose",I),X(T),T.isVideoTexture&&g.delete(T),o.memory.textures--}function C(L){const T=L.target;T.removeEventListener("dispose",C),F(T)}function X(L){const T=n.get(L);T.__webglInit!==void 0&&(r.deleteTexture(T.__webglTexture),n.remove(L))}function F(L){const T=L.texture,$=n.get(L),Y=n.get(T);if(!!L){if(Y.__webglTexture!==void 0&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++)r.deleteFramebuffer($.__webglFramebuffer[pt]),$.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer[pt]);else r.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&r.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer&&r.deleteRenderbuffer($.__webglColorRenderbuffer),$.__webglDepthRenderbuffer&&r.deleteRenderbuffer($.__webglDepthRenderbuffer);if(L.isWebGLMultipleRenderTargets)for(let pt=0,ht=T.length;pt<ht;pt++){const P=n.get(T[pt]);P.__webglTexture&&(r.deleteTexture(P.__webglTexture),o.memory.textures--),n.remove(T[pt])}n.remove(T),n.remove(L)}}let N=0;function O(){N=0}function B(){const L=N;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),N+=1,L}function U(L,T){const $=n.get(L);if(L.isVideoTexture&&rt(L),L.version>0&&$.__version!==L.version){const Y=L.image;if(Y===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pt($,L,T);return}}e.activeTexture(33984+T),e.bindTexture(3553,$.__webglTexture)}function tt(L,T){const $=n.get(L);if(L.version>0&&$.__version!==L.version){Pt($,L,T);return}e.activeTexture(33984+T),e.bindTexture(35866,$.__webglTexture)}function ot(L,T){const $=n.get(L);if(L.version>0&&$.__version!==L.version){Pt($,L,T);return}e.activeTexture(33984+T),e.bindTexture(32879,$.__webglTexture)}function W(L,T){const $=n.get(L);if(L.version>0&&$.__version!==L.version){J($,L,T);return}e.activeTexture(33984+T),e.bindTexture(34067,$.__webglTexture)}const q={[ho]:10497,[Me]:33071,[fo]:33648},ct={[re]:9728,[wl]:9984,[Sl]:9986,[Te]:9729,[wd]:9985,[Or]:9987};function at(L,T,$){if($?(r.texParameteri(L,10242,q[T.wrapS]),r.texParameteri(L,10243,q[T.wrapT]),(L===32879||L===35866)&&r.texParameteri(L,32882,q[T.wrapR]),r.texParameteri(L,10240,ct[T.magFilter]),r.texParameteri(L,10241,ct[T.minFilter])):(r.texParameteri(L,10242,33071),r.texParameteri(L,10243,33071),(L===32879||L===35866)&&r.texParameteri(L,32882,33071),(T.wrapS!==Me||T.wrapT!==Me)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,10240,D(T.magFilter)),r.texParameteri(L,10241,D(T.minFilter)),T.minFilter!==re&&T.minFilter!==Te&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Y=t.get("EXT_texture_filter_anisotropic");if(T.type===nn&&t.has("OES_texture_float_linear")===!1||a===!1&&T.type===Qn&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function dt(L,T){L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",I),L.__webglTexture=r.createTexture(),o.memory.textures++)}function Pt(L,T,$){let Y=3553;T.isDataTexture2DArray&&(Y=35866),T.isDataTexture3D&&(Y=32879),dt(L,T),e.activeTexture(33984+$),e.bindTexture(Y,L.__webglTexture),r.pixelStorei(37440,T.flipY),r.pixelStorei(37441,T.premultiplyAlpha),r.pixelStorei(3317,T.unpackAlignment),r.pixelStorei(37443,0);const pt=_(T)&&M(T.image)===!1,ht=p(T.image,pt,!1,u),P=M(ht)||a,nt=s.convert(T.format);let A=s.convert(T.type),k=v(T.internalFormat,nt,A,T.encoding);at(Y,T,P);let Q;const it=T.mipmaps;if(T.isDepthTexture)k=6402,a?T.type===nn?k=36012:T.type===Ur?k=33190:T.type===Kn?k=35056:k=33189:T.type===nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Fn&&k===6402&&T.type!==Xi&&T.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Xi,A=s.convert(T.type)),T.format===ti&&k===6402&&(k=34041,T.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Kn,A=s.convert(T.type))),e.texImage2D(3553,0,k,ht.width,ht.height,0,nt,A,null);else if(T.isDataTexture)if(it.length>0&&P){for(let lt=0,vt=it.length;lt<vt;lt++)Q=it[lt],e.texImage2D(3553,lt,k,Q.width,Q.height,0,nt,A,Q.data);T.generateMipmaps=!1}else e.texImage2D(3553,0,k,ht.width,ht.height,0,nt,A,ht.data);else if(T.isCompressedTexture)for(let lt=0,vt=it.length;lt<vt;lt++)Q=it[lt],T.format!==ge&&T.format!==In?nt!==null?e.compressedTexImage2D(3553,lt,k,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):e.texImage2D(3553,lt,k,Q.width,Q.height,0,nt,A,Q.data);else if(T.isDataTexture2DArray)e.texImage3D(35866,0,k,ht.width,ht.height,ht.depth,0,nt,A,ht.data);else if(T.isDataTexture3D)e.texImage3D(32879,0,k,ht.width,ht.height,ht.depth,0,nt,A,ht.data);else{const lt=R(T,ht,P),vt=a&&T.isVideoTexture!==!0,kt=L.__version===void 0;if(it.length>0&&P){vt&&kt&&e.texStorage2D(3553,lt,k,it[0].width,it[0].height);for(let Dt=0,Qt=it.length;Dt<Qt;Dt++)Q=it[Dt],vt?e.texSubImage2D(3553,Dt,0,0,nt,A,Q):e.texImage2D(3553,Dt,k,nt,A,Q);T.generateMipmaps=!1}else vt?(kt&&e.texStorage2D(3553,lt,k,ht.width,ht.height),e.texSubImage2D(3553,0,0,0,nt,A,ht)):e.texImage2D(3553,0,k,nt,A,ht)}b(T,P)&&E(Y),L.__version=T.version,T.onUpdate&&T.onUpdate(T)}function J(L,T,$){if(T.image.length!==6)return;dt(L,T),e.activeTexture(33984+$),e.bindTexture(34067,L.__webglTexture),r.pixelStorei(37440,T.flipY),r.pixelStorei(37441,T.premultiplyAlpha),r.pixelStorei(3317,T.unpackAlignment),r.pixelStorei(37443,0);const Y=T&&(T.isCompressedTexture||T.image[0].isCompressedTexture),pt=T.image[0]&&T.image[0].isDataTexture,ht=[];for(let lt=0;lt<6;lt++)!Y&&!pt?ht[lt]=p(T.image[lt],!1,!0,c):ht[lt]=pt?T.image[lt].image:T.image[lt];const P=ht[0],nt=M(P)||a,A=s.convert(T.format),k=s.convert(T.type),Q=v(T.internalFormat,A,k,T.encoding);at(34067,T,nt);let it;if(Y)for(let lt=0;lt<6;lt++){it=ht[lt].mipmaps;for(let vt=0;vt<it.length;vt++){const kt=it[vt];T.format!==ge&&T.format!==In?A!==null?e.compressedTexImage2D(34069+lt,vt,Q,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):e.texImage2D(34069+lt,vt,Q,kt.width,kt.height,0,A,k,kt.data)}}else{it=T.mipmaps;for(let lt=0;lt<6;lt++)if(pt){e.texImage2D(34069+lt,0,Q,ht[lt].width,ht[lt].height,0,A,k,ht[lt].data);for(let vt=0;vt<it.length;vt++){const Dt=it[vt].image[lt].image;e.texImage2D(34069+lt,vt+1,Q,Dt.width,Dt.height,0,A,k,Dt.data)}}else{e.texImage2D(34069+lt,0,Q,A,k,ht[lt]);for(let vt=0;vt<it.length;vt++){const kt=it[vt];e.texImage2D(34069+lt,vt+1,Q,A,k,kt.image[lt])}}}b(T,nt)&&E(34067),L.__version=T.version,T.onUpdate&&T.onUpdate(T)}function Tt(L,T,$,Y,pt){const ht=s.convert($.format),P=s.convert($.type),nt=v($.internalFormat,ht,P,$.encoding);n.get(T).__hasExternalTextures||(pt===32879||pt===35866?e.texImage3D(pt,0,nt,T.width,T.height,T.depth,0,ht,P,null):e.texImage2D(pt,0,nt,T.width,T.height,0,ht,P,null)),e.bindFramebuffer(36160,L),T.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,Y,pt,n.get($).__webglTexture,0,ut(T)):r.framebufferTexture2D(36160,Y,pt,n.get($).__webglTexture,0),e.bindFramebuffer(36160,null)}function yt(L,T,$){if(r.bindRenderbuffer(36161,L),T.depthBuffer&&!T.stencilBuffer){let Y=33189;if($||T.useRenderToTexture){const pt=T.depthTexture;pt&&pt.isDepthTexture&&(pt.type===nn?Y=36012:pt.type===Ur&&(Y=33190));const ht=ut(T);T.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,ht,Y,T.width,T.height):r.renderbufferStorageMultisample(36161,ht,Y,T.width,T.height)}else r.renderbufferStorage(36161,Y,T.width,T.height);r.framebufferRenderbuffer(36160,36096,36161,L)}else if(T.depthBuffer&&T.stencilBuffer){const Y=ut(T);$&&T.useRenderbuffer?r.renderbufferStorageMultisample(36161,Y,35056,T.width,T.height):T.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,Y,35056,T.width,T.height):r.renderbufferStorage(36161,34041,T.width,T.height),r.framebufferRenderbuffer(36160,33306,36161,L)}else{const Y=T.isWebGLMultipleRenderTargets===!0?T.texture[0]:T.texture,pt=s.convert(Y.format),ht=s.convert(Y.type),P=v(Y.internalFormat,pt,ht,Y.encoding),nt=ut(T);$&&T.useRenderbuffer?r.renderbufferStorageMultisample(36161,nt,P,T.width,T.height):T.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,nt,P,T.width,T.height):r.renderbufferStorage(36161,P,T.width,T.height)}r.bindRenderbuffer(36161,null)}function ft(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),U(T.depthTexture,0);const Y=n.get(T.depthTexture).__webglTexture,pt=ut(T);if(T.depthTexture.format===Fn)T.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Y,0,pt):r.framebufferTexture2D(36160,36096,3553,Y,0);else if(T.depthTexture.format===ti)T.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Y,0,pt):r.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function xt(L){const T=n.get(L),$=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ft(T.__webglFramebuffer,L)}else if($){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)e.bindFramebuffer(36160,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]=r.createRenderbuffer(),yt(T.__webglDepthbuffer[Y],L,!1)}else e.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),yt(T.__webglDepthbuffer,L,!1);e.bindFramebuffer(36160,null)}function Rt(L,T,$){const Y=n.get(L);T!==void 0&&Tt(Y.__webglFramebuffer,L,L.texture,36064,3553),$!==void 0&&xt(L)}function G(L){const T=L.texture,$=n.get(L),Y=n.get(T);L.addEventListener("dispose",C),L.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=T.version,o.memory.textures++);const pt=L.isWebGLCubeRenderTarget===!0,ht=L.isWebGLMultipleRenderTargets===!0,P=T.isDataTexture3D||T.isDataTexture2DArray,nt=M(L)||a;if(a&&T.format===In&&(T.type===nn||T.type===Qn)&&(T.format=ge,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),pt){$.__webglFramebuffer=[];for(let A=0;A<6;A++)$.__webglFramebuffer[A]=r.createFramebuffer()}else if($.__webglFramebuffer=r.createFramebuffer(),ht)if(i.drawBuffers){const A=L.texture;for(let k=0,Q=A.length;k<Q;k++){const it=n.get(A[k]);it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(L.useRenderbuffer)if(a){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,$.__webglColorRenderbuffer);const A=s.convert(T.format),k=s.convert(T.type),Q=v(T.internalFormat,A,k,T.encoding),it=ut(L);r.renderbufferStorageMultisample(36161,it,Q,L.width,L.height),e.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,$.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),L.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),yt($.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(pt){e.bindTexture(34067,Y.__webglTexture),at(34067,T,nt);for(let A=0;A<6;A++)Tt($.__webglFramebuffer[A],L,T,36064,34069+A);b(T,nt)&&E(34067),e.unbindTexture()}else if(ht){const A=L.texture;for(let k=0,Q=A.length;k<Q;k++){const it=A[k],lt=n.get(it);e.bindTexture(3553,lt.__webglTexture),at(3553,it,nt),Tt($.__webglFramebuffer,L,it,36064+k,3553),b(it,nt)&&E(3553)}e.unbindTexture()}else{let A=3553;P&&(a?A=T.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),e.bindTexture(A,Y.__webglTexture),at(A,T,nt),Tt($.__webglFramebuffer,L,T,36064,A),b(T,nt)&&E(A),e.unbindTexture()}L.depthBuffer&&xt(L)}function K(L){const T=M(L)||a,$=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let Y=0,pt=$.length;Y<pt;Y++){const ht=$[Y];if(b(ht,T)){const P=L.isWebGLCubeRenderTarget?34067:3553,nt=n.get(ht).__webglTexture;e.bindTexture(P,nt),E(P),e.unbindTexture()}}}function et(L){if(L.useRenderbuffer)if(a){const T=L.width,$=L.height;let Y=16384;const pt=[36064],ht=L.stencilBuffer?33306:36096;L.depthBuffer&&pt.push(ht),L.ignoreDepthForMultisampleCopy||(L.depthBuffer&&(Y|=256),L.stencilBuffer&&(Y|=1024));const P=n.get(L);e.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,P.__webglFramebuffer),L.ignoreDepthForMultisampleCopy&&(r.invalidateFramebuffer(36008,[ht]),r.invalidateFramebuffer(36009,[ht])),r.blitFramebuffer(0,0,T,$,0,0,T,$,Y,9728),r.invalidateFramebuffer(36008,pt),e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function ut(L){return a&&(L.useRenderbuffer||L.useRenderToTexture)?Math.min(d,L.samples):0}function rt(L){const T=o.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}let Mt=!1,bt=!1;function Et(L,T){L&&L.isWebGLRenderTarget&&(Mt===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Mt=!0),L=L.texture),U(L,T)}function Ot(L,T){L&&L.isWebGLCubeRenderTarget&&(bt===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),bt=!0),L=L.texture),W(L,T)}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=U,this.setTexture2DArray=tt,this.setTexture3D=ot,this.setTextureCube=W,this.rebindTextures=Rt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Tt,this.safeSetTexture2D=Et,this.safeSetTextureCube=Ot}function py(r,t,e){const n=e.isWebGL2;function i(s){let o;if(s===en)return 5121;if(s===Ad)return 32819;if(s===Ld)return 32820;if(s===Cd)return 33635;if(s===Sd)return 5120;if(s===Td)return 5122;if(s===Xi)return 5123;if(s===Ed)return 5124;if(s===Ur)return 5125;if(s===nn)return 5126;if(s===Qn)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Rd)return 6406;if(s===In)return 6407;if(s===ge)return 6408;if(s===Pd)return 6409;if(s===Dd)return 6410;if(s===Fn)return 6402;if(s===ti)return 34041;if(s===Fd)return 6403;if(s===Nd)return 36244;if(s===Bd)return 33319;if(s===zd)return 33320;if(s===Od)return 36248;if(s===Ud)return 36249;if(s===Tl||s===El||s===Al||s===Ll)if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Tl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===El)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Al)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ll)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cl||s===Rl||s===Pl||s===Dl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Cl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vd)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Il||s===Fl)&&(o=t.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Il)return o.COMPRESSED_RGB8_ETC2;if(s===Fl)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Hd||s===kd||s===Gd||s===Wd||s===qd||s===Xd||s===jd||s===Yd||s===Zd||s===$d||s===Jd||s===Qd||s===Kd||s===tf||s===nf||s===rf||s===sf||s===of||s===af||s===lf||s===cf||s===uf||s===hf||s===df||s===ff||s===pf||s===mf||s===gf)return o=t.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===ef)return o=t.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Kn)return n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class kc extends ve{constructor(t=[]){super();this.cameras=t}}kc.prototype.isArrayCamera=!0;class rr extends Bt{constructor(){super();this.type="Group"}}rr.prototype.isGroup=!0;const my={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(a!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(my))),c&&t.hand){o=!0;for(const x of t.hand.values()){const y=e.getJointPose(x,n);if(c.joints[x.jointName]===void 0){const p=new rr;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[x.jointName]=p,c.add(p)}const m=c.joints[x.jointName];y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=y.radius),m.visible=y!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class ia extends ce{constructor(t,e,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Fn,u!==Fn&&u!==ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fn&&(n=Xi),n===void 0&&u===ti&&(n=Kn);super(null,i,s,o,a,l,u,n,c);this.image={width:t,height:e},this.magFilter=a!==void 0?a:re,this.minFilter=l!==void 0?l:re,this.flipY=!1,this.generateMipmaps=!1}}ia.prototype.isDepthTexture=!0;class gy extends rn{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor";const l=t.extensions.has("WEBGL_multisampled_render_to_texture");let c=null,u=null,d=null,h=null,f=!1,g=null;const x=e.getContextAttributes();let y=null,m=null;const p=[],M=new Map,_=new ve;_.layers.enable(1),_.viewport=new Vt;const b=new ve;b.layers.enable(2),b.viewport=new Vt;const E=[_,b],v=new kc;v.layers.enable(1),v.layers.enable(2);let R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=p[W];return q===void 0&&(q=new na,p[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=p[W];return q===void 0&&(q=new na,p[W]=q),q.getGripSpace()},this.getHand=function(W){let q=p[W];return q===void 0&&(q=new na,p[W]=q),q.getHandSpace()};function I(W){const q=M.get(W.inputSource);q&&q.dispatchEvent({type:W.type,data:W.inputSource})}function C(){M.forEach(function(W,q){W.disconnect(q)}),M.clear(),R=null,D=null,t.setRenderTarget(y),h=null,d=null,u=null,i=null,m=null,ot.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",C),i.addEventListener("inputsourceschange",X),x.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,q),i.updateRenderState({baseLayer:h}),m=new Ee(h.framebufferWidth,h.framebufferHeight)}else{f=x.antialias;let q=null,ct=null,at=null;x.depth&&(at=x.stencil?35056:33189,q=x.stencil?ti:Fn,ct=x.stencil?Kn:Xi);const dt={colorFormat:x.alpha||f?32856:32849,depthFormat:at,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(dt),i.updateRenderState({layers:[d]}),f?m=new bo(d.textureWidth,d.textureHeight,{format:ge,type:en,depthTexture:new ia(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:x.stencil,ignoreDepth:d.ignoreDepthValues,useRenderToTexture:l}):m=new Ee(d.textureWidth,d.textureHeight,{format:x.alpha?ge:In,type:en,depthTexture:new ia(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:x.stencil,ignoreDepth:d.ignoreDepthValues})}this.setFoveation(0),o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function X(W){const q=i.inputSources;for(let ct=0;ct<p.length;ct++)M.set(q[ct],p[ct]);for(let ct=0;ct<W.removed.length;ct++){const at=W.removed[ct],dt=M.get(at);dt&&(dt.dispatchEvent({type:"disconnected",data:at}),M.delete(at))}for(let ct=0;ct<W.added.length;ct++){const at=W.added[ct],dt=M.get(at);dt&&dt.dispatchEvent({type:"connected",data:at})}}const F=new w,N=new w;function O(W,q,ct){F.setFromMatrixPosition(q.matrixWorld),N.setFromMatrixPosition(ct.matrixWorld);const at=F.distanceTo(N),dt=q.projectionMatrix.elements,Pt=ct.projectionMatrix.elements,J=dt[14]/(dt[10]-1),Tt=dt[14]/(dt[10]+1),yt=(dt[9]+1)/dt[5],ft=(dt[9]-1)/dt[5],xt=(dt[8]-1)/dt[0],Rt=(Pt[8]+1)/Pt[0],G=J*xt,K=J*Rt,et=at/(-xt+Rt),ut=et*-xt;q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ut),W.translateZ(et),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const rt=J+et,Mt=Tt+et,bt=G-ut,Et=K+(at-ut),Ot=yt*Tt/Mt*rt,L=ft*Tt/Mt*rt;W.projectionMatrix.makePerspective(bt,Et,Ot,L,rt,Mt)}function B(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;v.near=b.near=_.near=W.near,v.far=b.far=_.far=W.far,(R!==v.near||D!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,D=v.far);const q=W.parent,ct=v.cameras;B(v,q);for(let dt=0;dt<ct.length;dt++)B(ct[dt],q);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),W.position.copy(v.position),W.quaternion.copy(v.quaternion),W.scale.copy(v.scale),W.matrix.copy(v.matrix),W.matrixWorld.copy(v.matrixWorld);const at=W.children;for(let dt=0,Pt=at.length;dt<Pt;dt++)at[dt].updateMatrixWorld(!0);ct.length===2?O(v,_,b):v.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(W){d!==null&&(d.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)};let U=null;function tt(W,q){if(c=q.getViewerPose(o),g=q,c!==null){const at=c.views;h!==null&&(t.setRenderTargetFramebuffer(m,h.framebuffer),t.setRenderTarget(m));let dt=!1;at.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let Pt=0;Pt<at.length;Pt++){const J=at[Pt];let Tt=null;if(h!==null)Tt=h.getViewport(J);else{const ft=u.getViewSubImage(d,J);Tt=ft.viewport,Pt===0&&(t.setRenderTargetTextures(m,ft.colorTexture,d.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(m))}const yt=E[Pt];yt.matrix.fromArray(J.transform.matrix),yt.projectionMatrix.fromArray(J.projectionMatrix),yt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Pt===0&&v.matrix.copy(yt.matrix),dt===!0&&v.cameras.push(yt)}}const ct=i.inputSources;for(let at=0;at<p.length;at++){const dt=p[at],Pt=ct[at];dt.update(Pt,q,o)}U&&U(W,q),g=null}const ot=new sc;ot.setAnimationLoop(tt),this.setAnimationLoop=function(W){U=W},this.dispose=function(){}}}function xy(r){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function e(m,p,M,_,b){p.isMeshBasicMaterial?n(m,p):p.isMeshLambertMaterial?(n(m,p),l(m,p)):p.isMeshToonMaterial?(n(m,p),u(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p)):p.isMeshStandardMaterial?(n(m,p),p.isMeshPhysicalMaterial?h(m,p,b):d(m,p)):p.isMeshMatcapMaterial?(n(m,p),f(m,p)):p.isMeshDepthMaterial?(n(m,p),g(m,p)):p.isMeshDistanceMaterial?(n(m,p),x(m,p)):p.isMeshNormalMaterial?(n(m,p),y(m,p)):p.isLineBasicMaterial?(i(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?o(m,p,M,_):p.isSpriteMaterial?a(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=r.get(p).envMap;M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix));let b;p.aoMap?b=p.aoMap:p.lightMap&&(b=p.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function i(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix))}function l(m,p){p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ie&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ie&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ie&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ie&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function d(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ie&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ie&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),r.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){d(m,p),m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ie&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ie&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ie&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function g(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function x(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}function y(m,p){p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ie&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ie&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:e}}function yy(){const r=Xr("canvas");return r.style.display="block",r}function Ut(r={}){const t=r.canvas!==void 0?r.canvas:yy(),e=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,o=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let d=null,h=null;const f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=_e,this.physicallyCorrectLights=!1,this.toneMapping=Dn,this.toneMappingExposure=1;const x=this;let y=!1,m=0,p=0,M=null,_=-1,b=null;const E=new Vt,v=new Vt;let R=null,D=t.width,I=t.height,C=1,X=null,F=null;const N=new Vt(0,0,D,I),O=new Vt(0,0,D,I);let B=!1;const U=[],tt=new ds;let ot=!1,W=!1,q=null;const ct=new gt,at=new w,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pt(){return M===null?C:1}let J=e;function Tt(S,z){for(let H=0;H<S.length;H++){const V=S[H],j=t.getContext(V,z);if(j!==null)return j}return null}try{const S={alpha:n,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oo}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",vt,!1),J===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),J=Tt(z,S),J===null)throw Tt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let yt,ft,xt,Rt,G,K,et,ut,rt,Mt,bt,Et,Ot,L,T,$,Y,pt,ht,P,nt,A,k;function Q(){yt=new Hg(J),ft=new Ig(J,yt,r),yt.init(ft),A=new py(J,yt,ft),xt=new dy(J,yt,ft),U[0]=1029,Rt=new Wg(J),G=new ey,K=new fy(J,yt,xt,G,ft,A,Rt),et=new Ng(x),ut=new Vg(x),rt=new ip(J,ft),k=new Pg(J,yt,rt,ft),Mt=new kg(J,rt,Rt,k),bt=new Yg(J,Mt,rt,Rt),ht=new jg(J,ft,K),$=new Fg(G),Et=new ty(x,et,ut,yt,ft,k,$),Ot=new xy(G),L=new iy(G),T=new cy(yt,ft),pt=new Rg(x,et,xt,bt,a),Y=new Hc(x,bt,ft),P=new Dg(J,yt,Rt,ft),nt=new Gg(J,yt,Rt,ft),Rt.programs=Et.programs,x.capabilities=ft,x.extensions=yt,x.properties=G,x.renderLists=L,x.shadowMap=Y,x.state=xt,x.info=Rt}Q();const it=new gy(x,J);this.xr=it,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const S=yt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=yt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(S){S!==void 0&&(C=S,this.setSize(D,I,!1))},this.getSize=function(S){return S.set(D,I)},this.setSize=function(S,z,H){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=S,I=z,t.width=Math.floor(S*C),t.height=Math.floor(z*C),H!==!1&&(t.style.width=S+"px",t.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(D*C,I*C).floor()},this.setDrawingBufferSize=function(S,z,H){D=S,I=z,C=H,t.width=Math.floor(S*H),t.height=Math.floor(z*H),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(N)},this.setViewport=function(S,z,H,V){S.isVector4?N.set(S.x,S.y,S.z,S.w):N.set(S,z,H,V),xt.viewport(E.copy(N).multiplyScalar(C).floor())},this.getScissor=function(S){return S.copy(O)},this.setScissor=function(S,z,H,V){S.isVector4?O.set(S.x,S.y,S.z,S.w):O.set(S,z,H,V),xt.scissor(v.copy(O).multiplyScalar(C).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(S){xt.setScissorTest(B=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){F=S},this.getClearColor=function(S){return S.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(S,z,H){let V=0;(S===void 0||S)&&(V|=16384),(z===void 0||z)&&(V|=256),(H===void 0||H)&&(V|=1024),J.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",vt,!1),L.dispose(),T.dispose(),G.dispose(),et.dispose(),ut.dispose(),bt.dispose(),k.dispose(),it.dispose(),it.removeEventListener("sessionstart",Oa),it.removeEventListener("sessionend",Ua),q&&(q.dispose(),q=null),Tn.stop()};function lt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=Rt.autoReset,z=Y.enabled,H=Y.autoUpdate,V=Y.needsUpdate,j=Y.type;Q(),Rt.autoReset=S,Y.enabled=z,Y.autoUpdate=H,Y.needsUpdate=V,Y.type=j}function kt(S){const z=S.target;z.removeEventListener("dispose",kt),Dt(z)}function Dt(S){Qt(S),G.remove(S)}function Qt(S){const z=G.get(S).programs;z!==void 0&&z.forEach(function(H){Et.releaseProgram(H)})}this.renderBufferDirect=function(S,z,H,V,j,wt){z===null&&(z=dt);const _t=j.isMesh&&j.matrixWorld.determinant()<0,At=dh(S,z,H,V,j);xt.setMaterial(V,_t);let St=H.index;const Ft=H.attributes.position;if(St===null){if(Ft===void 0||Ft.count===0)return}else if(St.count===0)return;let Lt=1;V.wireframe===!0&&(St=Mt.getWireframeAttribute(H),Lt=2),k.setup(j,V,At,H,St);let It,Yt=P;St!==null&&(It=rt.get(St),Yt=nt,Yt.setIndex(It));const En=St!==null?St.count:Ft.count,Nt=H.drawRange.start*Lt,zi=H.drawRange.count*Lt,Wt=wt!==null?wt.start*Lt:0,An=wt!==null?wt.count*Lt:1/0,Ln=Math.max(Nt,Wt),Cn=Math.min(En,Nt+zi,Wt+An)-1,Ke=Math.max(0,Cn-Ln+1);if(Ke!==0){if(j.isMesh)V.wireframe===!0?(xt.setLineWidth(V.wireframeLinewidth*Pt()),Yt.setMode(1)):Yt.setMode(4);else if(j.isLine){let Zt=V.linewidth;Zt===void 0&&(Zt=1),xt.setLineWidth(Zt*Pt()),j.isLineSegments?Yt.setMode(1):j.isLineLoop?Yt.setMode(2):Yt.setMode(3)}else j.isPoints?Yt.setMode(0):j.isSprite&&Yt.setMode(4);if(j.isInstancedMesh)Yt.renderInstances(Ln,Ke,j.count);else if(H.isInstancedBufferGeometry){const Zt=Math.min(H.instanceCount,H._maxInstanceCount);Yt.renderInstances(Ln,Ke,Zt)}else Yt.render(Ln,Ke)}},this.compile=function(S,z){h=T.get(S),h.init(),g.push(h),S.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),h.setupLights(x.physicallyCorrectLights),S.traverse(function(H){const V=H.material;if(V)if(Array.isArray(V))for(let j=0;j<V.length;j++){const wt=V[j];$s(wt,S,H)}else $s(V,S,H)}),g.pop(),h=null};let Kt=null;function ch(S){Kt&&Kt(S)}function Oa(){Tn.stop()}function Ua(){Tn.start()}const Tn=new sc;Tn.setAnimationLoop(ch),typeof window!="undefined"&&Tn.setContext(window),this.setAnimationLoop=function(S){Kt=S,it.setAnimationLoop(S),S===null?Tn.stop():Tn.start()},it.addEventListener("sessionstart",Oa),it.addEventListener("sessionend",Ua),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(z),z=it.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,z,M),h=T.get(S,g.length),h.init(),g.push(h),ct.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),tt.setFromProjectionMatrix(ct),W=this.localClippingEnabled,ot=$.init(this.clippingPlanes,W,z),d=L.get(S,f.length),d.init(),f.push(d),Va(S,z,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(X,F),ot===!0&&$.beginShadows();const H=h.state.shadowsArray;if(Y.render(H,S,z),ot===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),pt.render(d,S),h.setupLights(x.physicallyCorrectLights),z.isArrayCamera){const V=z.cameras;for(let j=0,wt=V.length;j<wt;j++){const _t=V[j];Ha(d,S,_t,_t.viewport)}}else Ha(d,S,z);M!==null&&(K.updateMultisampleRenderTarget(M),K.updateRenderTargetMipmap(M)),S.isScene===!0&&S.onAfterRender(x,S,z),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1),k.resetDefaultState(),_=-1,b=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function Va(S,z,H,V){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||tt.intersectsSprite(S)){V&&at.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ct);const _t=bt.update(S),At=S.material;At.visible&&d.push(S,_t,At,H,at.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Rt.render.frame&&(S.skeleton.update(),S.skeleton.frame=Rt.render.frame),!S.frustumCulled||tt.intersectsObject(S))){V&&at.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ct);const _t=bt.update(S),At=S.material;if(Array.isArray(At)){const St=_t.groups;for(let Ft=0,Lt=St.length;Ft<Lt;Ft++){const It=St[Ft],Yt=At[It.materialIndex];Yt&&Yt.visible&&d.push(S,_t,Yt,H,at.z,It)}}else At.visible&&d.push(S,_t,At,H,at.z,null)}}const wt=S.children;for(let _t=0,At=wt.length;_t<At;_t++)Va(wt[_t],z,H,V)}function Ha(S,z,H,V){const j=S.opaque,wt=S.transmissive,_t=S.transparent;h.setupLightsView(H),wt.length>0&&uh(j,z,H),V&&xt.viewport(E.copy(V)),j.length>0&&Er(j,z,H),wt.length>0&&Er(wt,z,H),_t.length>0&&Er(_t,z,H)}function uh(S,z,H){if(q===null){const _t=o===!0&&ft.isWebGL2===!0?bo:Ee;q=new _t(1024,1024,{generateMipmaps:!0,type:A.convert(Qn)!==null?Qn:en,minFilter:Or,magFilter:re,wrapS:Me,wrapT:Me,useRenderToTexture:yt.has("WEBGL_multisampled_render_to_texture")})}const V=x.getRenderTarget();x.setRenderTarget(q),x.clear();const j=x.toneMapping;x.toneMapping=Dn,Er(S,z,H),x.toneMapping=j,K.updateMultisampleRenderTarget(q),K.updateRenderTargetMipmap(q),x.setRenderTarget(V)}function Er(S,z,H){const V=z.isScene===!0?z.overrideMaterial:null;for(let j=0,wt=S.length;j<wt;j++){const _t=S[j],At=_t.object,St=_t.geometry,Ft=V===null?_t.material:V,Lt=_t.group;At.layers.test(H.layers)&&hh(At,z,H,St,Ft,Lt)}}function hh(S,z,H,V,j,wt){S.onBeforeRender(x,z,H,V,j,wt),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),j.onBeforeRender(x,z,H,V,S,wt),j.transparent===!0&&j.side===Pn?(j.side=ie,j.needsUpdate=!0,x.renderBufferDirect(H,z,V,j,S,wt),j.side=Rn,j.needsUpdate=!0,x.renderBufferDirect(H,z,V,j,S,wt),j.side=Pn):x.renderBufferDirect(H,z,V,j,S,wt),S.onAfterRender(x,z,H,V,j,wt)}function $s(S,z,H){z.isScene!==!0&&(z=dt);const V=G.get(S),j=h.state.lights,wt=h.state.shadowsArray,_t=j.state.version,At=Et.getParameters(S,j.state,wt,z,H),St=Et.getProgramCacheKey(At);let Ft=V.programs;V.environment=S.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=(S.isMeshStandardMaterial?ut:et).get(S.envMap||V.environment),Ft===void 0&&(S.addEventListener("dispose",kt),Ft=new Map,V.programs=Ft);let Lt=Ft.get(St);if(Lt!==void 0){if(V.currentProgram===Lt&&V.lightsStateVersion===_t)return ka(S,At),Lt}else At.uniforms=Et.getUniforms(S),S.onBuild(H,At,x),S.onBeforeCompile(At,x),Lt=Et.acquireProgram(At,St),Ft.set(St,Lt),V.uniforms=At.uniforms;const It=V.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(It.clippingPlanes=$.uniform),ka(S,At),V.needsLights=ph(S),V.lightsStateVersion=_t,V.needsLights&&(It.ambientLightColor.value=j.state.ambient,It.lightProbe.value=j.state.probe,It.directionalLights.value=j.state.directional,It.directionalLightShadows.value=j.state.directionalShadow,It.spotLights.value=j.state.spot,It.spotLightShadows.value=j.state.spotShadow,It.rectAreaLights.value=j.state.rectArea,It.ltc_1.value=j.state.rectAreaLTC1,It.ltc_2.value=j.state.rectAreaLTC2,It.pointLights.value=j.state.point,It.pointLightShadows.value=j.state.pointShadow,It.hemisphereLights.value=j.state.hemi,It.directionalShadowMap.value=j.state.directionalShadowMap,It.directionalShadowMatrix.value=j.state.directionalShadowMatrix,It.spotShadowMap.value=j.state.spotShadowMap,It.spotShadowMatrix.value=j.state.spotShadowMatrix,It.pointShadowMap.value=j.state.pointShadowMap,It.pointShadowMatrix.value=j.state.pointShadowMatrix);const Yt=Lt.getUniforms(),En=pn.seqWithValue(Yt.seq,It);return V.currentProgram=Lt,V.uniformsList=En,Lt}function ka(S,z){const H=G.get(S);H.outputEncoding=z.outputEncoding,H.instancing=z.instancing,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents}function dh(S,z,H,V,j){z.isScene!==!0&&(z=dt),K.resetTextureUnits();const wt=z.fog,_t=V.isMeshStandardMaterial?z.environment:null,At=M===null?x.outputEncoding:M.texture.encoding,St=(V.isMeshStandardMaterial?ut:et).get(V.envMap||_t),Ft=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Lt=!!V.normalMap&&!!H.attributes.tangent,It=!!H.morphAttributes.position,Yt=!!H.morphAttributes.normal,En=H.morphAttributes.position?H.morphAttributes.position.length:0,Nt=G.get(V),zi=h.state.lights;if(ot===!0&&(W===!0||S!==b)){const Ce=S===b&&V.id===_;$.setState(V,S,Ce)}let Wt=!1;V.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==zi.state.version||Nt.outputEncoding!==At||j.isInstancedMesh&&Nt.instancing===!1||!j.isInstancedMesh&&Nt.instancing===!0||j.isSkinnedMesh&&Nt.skinning===!1||!j.isSkinnedMesh&&Nt.skinning===!0||Nt.envMap!==St||V.fog&&Nt.fog!==wt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==$.numPlanes||Nt.numIntersection!==$.numIntersection)||Nt.vertexAlphas!==Ft||Nt.vertexTangents!==Lt||Nt.morphTargets!==It||Nt.morphNormals!==Yt||ft.isWebGL2===!0&&Nt.morphTargetsCount!==En)&&(Wt=!0):(Wt=!0,Nt.__version=V.version);let An=Nt.currentProgram;Wt===!0&&(An=$s(V,z,j));let Ln=!1,Cn=!1,Ke=!1;const Zt=An.getUniforms(),Oi=Nt.uniforms;if(xt.useProgram(An.program)&&(Ln=!0,Cn=!0,Ke=!0),V.id!==_&&(_=V.id,Cn=!0),Ln||b!==S){if(Zt.setValue(J,"projectionMatrix",S.projectionMatrix),ft.logarithmicDepthBuffer&&Zt.setValue(J,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),b!==S&&(b=S,Cn=!0,Ke=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Ce=Zt.map.cameraPosition;Ce!==void 0&&Ce.setValue(J,at.setFromMatrixPosition(S.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Zt.setValue(J,"isOrthographic",S.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||j.isSkinnedMesh)&&Zt.setValue(J,"viewMatrix",S.matrixWorldInverse)}if(j.isSkinnedMesh){Zt.setOptional(J,j,"bindMatrix"),Zt.setOptional(J,j,"bindMatrixInverse");const Ce=j.skeleton;Ce&&(ft.floatVertexTextures?(Ce.boneTexture===null&&Ce.computeBoneTexture(),Zt.setValue(J,"boneTexture",Ce.boneTexture,K),Zt.setValue(J,"boneTextureSize",Ce.boneTextureSize)):Zt.setOptional(J,Ce,"boneMatrices"))}return!!H&&(H.morphAttributes.position!==void 0||H.morphAttributes.normal!==void 0)&&ht.update(j,H,V,An),(Cn||Nt.receiveShadow!==j.receiveShadow)&&(Nt.receiveShadow=j.receiveShadow,Zt.setValue(J,"receiveShadow",j.receiveShadow)),Cn&&(Zt.setValue(J,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&fh(Oi,Ke),wt&&V.fog&&Ot.refreshFogUniforms(Oi,wt),Ot.refreshMaterialUniforms(Oi,V,C,I,q),pn.upload(J,Nt.uniformsList,Oi,K)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(pn.upload(J,Nt.uniformsList,Oi,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Zt.setValue(J,"center",j.center),Zt.setValue(J,"modelViewMatrix",j.modelViewMatrix),Zt.setValue(J,"normalMatrix",j.normalMatrix),Zt.setValue(J,"modelMatrix",j.matrixWorld),An}function fh(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function ph(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(S,z,H){G.get(S.texture).__webglTexture=z,G.get(S.depthTexture).__webglTexture=H;const V=G.get(S);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||S.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),S.useRenderToTexture=!1,S.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(S,z){const H=G.get(S);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,H=0){M=S,m=z,p=H;let V=!0;if(S){const St=G.get(S);St.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(36160,null),V=!1):St.__webglFramebuffer===void 0?K.setupRenderTarget(S):St.__hasExternalTextures&&K.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture)}let j=null,wt=!1,_t=!1;if(S){const St=S.texture;(St.isDataTexture3D||St.isDataTexture2DArray)&&(_t=!0);const Ft=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(j=Ft[z],wt=!0):S.useRenderbuffer?j=G.get(S).__webglMultisampledFramebuffer:j=Ft,E.copy(S.viewport),v.copy(S.scissor),R=S.scissorTest}else E.copy(N).multiplyScalar(C).floor(),v.copy(O).multiplyScalar(C).floor(),R=B;if(xt.bindFramebuffer(36160,j)&&ft.drawBuffers&&V){let St=!1;if(S)if(S.isWebGLMultipleRenderTargets){const Ft=S.texture;if(U.length!==Ft.length||U[0]!==36064){for(let Lt=0,It=Ft.length;Lt<It;Lt++)U[Lt]=36064+Lt;U.length=Ft.length,St=!0}}else(U.length!==1||U[0]!==36064)&&(U[0]=36064,U.length=1,St=!0);else(U.length!==1||U[0]!==1029)&&(U[0]=1029,U.length=1,St=!0);St&&(ft.isWebGL2?J.drawBuffers(U):yt.get("WEBGL_draw_buffers").drawBuffersWEBGL(U))}if(xt.viewport(E),xt.scissor(v),xt.setScissorTest(R),wt){const St=G.get(S.texture);J.framebufferTexture2D(36160,36064,34069+z,St.__webglTexture,H)}else if(_t){const St=G.get(S.texture),Ft=z||0;J.framebufferTextureLayer(36160,36064,St.__webglTexture,H||0,Ft)}_=-1},this.readRenderTargetPixels=function(S,z,H,V,j,wt,_t){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(At=At[_t]),At){xt.bindFramebuffer(36160,At);try{const St=S.texture,Ft=St.format,Lt=St.type;if(Ft!==ge&&A.convert(Ft)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Lt===Qn&&(yt.has("EXT_color_buffer_half_float")||ft.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Lt!==en&&A.convert(Lt)!==J.getParameter(35738)&&!(Lt===nn&&(ft.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J.checkFramebufferStatus(36160)===36053?z>=0&&z<=S.width-V&&H>=0&&H<=S.height-j&&J.readPixels(z,H,V,j,A.convert(Ft),A.convert(Lt),wt):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const St=M!==null?G.get(M).__webglFramebuffer:null;xt.bindFramebuffer(36160,St)}}},this.copyFramebufferToTexture=function(S,z,H=0){const V=Math.pow(2,-H),j=Math.floor(z.image.width*V),wt=Math.floor(z.image.height*V);let _t=A.convert(z.format);ft.isWebGL2&&(_t===6407&&(_t=32849),_t===6408&&(_t=32856)),K.setTexture2D(z,0),J.copyTexImage2D(3553,H,_t,S.x,S.y,j,wt,0),xt.unbindTexture()},this.copyTextureToTexture=function(S,z,H,V=0){const j=z.image.width,wt=z.image.height,_t=A.convert(H.format),At=A.convert(H.type);K.setTexture2D(H,0),J.pixelStorei(37440,H.flipY),J.pixelStorei(37441,H.premultiplyAlpha),J.pixelStorei(3317,H.unpackAlignment),z.isDataTexture?J.texSubImage2D(3553,V,S.x,S.y,j,wt,_t,At,z.image.data):z.isCompressedTexture?J.compressedTexSubImage2D(3553,V,S.x,S.y,z.mipmaps[0].width,z.mipmaps[0].height,_t,z.mipmaps[0].data):J.texSubImage2D(3553,V,S.x,S.y,_t,At,z.image),V===0&&H.generateMipmaps&&J.generateMipmap(3553),xt.unbindTexture()},this.copyTextureToTexture3D=function(S,z,H,V,j=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=S.max.x-S.min.x+1,_t=S.max.y-S.min.y+1,At=S.max.z-S.min.z+1,St=A.convert(V.format),Ft=A.convert(V.type);let Lt;if(V.isDataTexture3D)K.setTexture3D(V,0),Lt=32879;else if(V.isDataTexture2DArray)K.setTexture2DArray(V,0),Lt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,V.flipY),J.pixelStorei(37441,V.premultiplyAlpha),J.pixelStorei(3317,V.unpackAlignment);const It=J.getParameter(3314),Yt=J.getParameter(32878),En=J.getParameter(3316),Nt=J.getParameter(3315),zi=J.getParameter(32877),Wt=H.isCompressedTexture?H.mipmaps[0]:H.image;J.pixelStorei(3314,Wt.width),J.pixelStorei(32878,Wt.height),J.pixelStorei(3316,S.min.x),J.pixelStorei(3315,S.min.y),J.pixelStorei(32877,S.min.z),H.isDataTexture||H.isDataTexture3D?J.texSubImage3D(Lt,j,z.x,z.y,z.z,wt,_t,At,St,Ft,Wt.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Lt,j,z.x,z.y,z.z,wt,_t,At,St,Wt.data)):J.texSubImage3D(Lt,j,z.x,z.y,z.z,wt,_t,At,St,Ft,Wt),J.pixelStorei(3314,It),J.pixelStorei(32878,Yt),J.pixelStorei(3316,En),J.pixelStorei(3315,Nt),J.pixelStorei(32877,zi),j===0&&V.generateMipmaps&&J.generateMipmap(Lt),xt.unbindTexture()},this.initTexture=function(S){K.setTexture2D(S,0),xt.unbindTexture()},this.resetState=function(){m=0,p=0,M=null,xt.reset(),k.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ut.prototype.isWebGLRenderer=!0;class _y extends Ut{}_y.prototype.isWebGL1Renderer=!0;class Gc extends Bt{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}Gc.prototype.isScene=!0;class sr{constructor(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ji,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Re()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Re()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Re()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}sr.prototype.isInterleavedBuffer=!0;const ee=new w;class or{constructor(t,e,n,i=!1){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ee.x=this.getX(e),ee.y=this.getY(e),ee.z=this.getZ(e),ee.applyMatrix4(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ee.x=this.getX(e),ee.y=this.getY(e),ee.z=this.getZ(e),ee.applyNormalMatrix(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ee.x=this.getX(e),ee.y=this.getY(e),ee.z=this.getZ(e),ee.transformDirection(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new or(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}or.prototype.isInterleavedBufferAttribute=!0;class Wc extends fe{constructor(t){super();this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this}}Wc.prototype.isSpriteMaterial=!0;let Si;const ar=new w,Ti=new w,Ei=new w,Ai=new Z,lr=new Z,qc=new gt,xs=new w,cr=new w,ys=new w,Xc=new Z,ra=new Z,jc=new Z;class vy extends Bt{constructor(t){super();if(this.type="Sprite",Si===void 0){Si=new Ht;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sr(e,5);Si.setIndex([0,1,2,0,2,3]),Si.setAttribute("position",new or(n,3,0,!1)),Si.setAttribute("uv",new or(n,2,3,!1))}this.geometry=Si,this.material=t!==void 0?t:new Wc,this.center=new Z(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ti.setFromMatrixScale(this.matrixWorld),qc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ei.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ti.multiplyScalar(-Ei.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;_s(xs.set(-.5,-.5,0),Ei,o,Ti,i,s),_s(cr.set(.5,-.5,0),Ei,o,Ti,i,s),_s(ys.set(.5,.5,0),Ei,o,Ti,i,s),Xc.set(0,0),ra.set(1,0),jc.set(1,1);let a=t.ray.intersectTriangle(xs,cr,ys,!1,ar);if(a===null&&(_s(cr.set(-.5,.5,0),Ei,o,Ti,i,s),ra.set(0,1),a=t.ray.intersectTriangle(xs,ys,cr,!1,ar),a===null))return;const l=t.ray.origin.distanceTo(ar);l<t.near||l>t.far||e.push({distance:l,point:ar.clone(),uv:Xt.getUV(ar,xs,cr,ys,Xc,ra,jc,new Z),face:null,object:this})}copy(t){return super.copy(t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}vy.prototype.isSprite=!0;function _s(r,t,e,n,i,s){Ai.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(lr.x=s*Ai.x-i*Ai.y,lr.y=i*Ai.x+s*Ai.y):lr.copy(Ai),r.copy(t),r.x+=lr.x,r.y+=lr.y,r.applyMatrix4(qc)}const Yc=new w,Zc=new Vt,$c=new Vt,My=new w,Jc=new gt;class Qc extends xe{constructor(t,e){super(t,e);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new gt,this.bindMatrixInverse=new gt}copy(t){return super.copy(t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Vt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,i=this.geometry;Zc.fromBufferAttribute(i.attributes.skinIndex,t),$c.fromBufferAttribute(i.attributes.skinWeight,t),Yc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=$c.getComponent(s);if(o!==0){const a=Zc.getComponent(s);Jc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(My.copy(Yc).applyMatrix4(Jc),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}Qc.prototype.isSkinnedMesh=!0;class by extends Bt{constructor(){super();this.type="Bone"}}by.prototype.isBone=!0;class wy extends ce{constructor(t=null,e=1,n=1,i,s,o,a,l,c=re,u=re,d,h){super(null,o,a,l,c,u,i,s,d,h);this.image={data:t,width:e,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}wy.prototype.isDataTexture=!0;class sa extends te{constructor(t,e,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(t,e,n);this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}sa.prototype.isInstancedBufferAttribute=!0;const Kc=new gt,tu=new gt,vs=[],ur=new xe;class Sy extends xe{constructor(t,e,n){super(t,e);this.instanceMatrix=new sa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Kc),tu.multiplyMatrices(n,Kc),ur.matrixWorld=tu,ur.raycast(t,vs);for(let o=0,a=vs.length;o<a;o++){const l=vs[o];l.instanceId=s,l.object=this,e.push(l)}vs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sa(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Sy.prototype.isInstancedMesh=!0;class kn extends fe{constructor(t){super();this.type="LineBasicMaterial",this.color=new mt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this}}kn.prototype.isLineBasicMaterial=!0;const eu=new w,nu=new w,iu=new gt,oa=new ln,Ms=new zn;class hr extends Bt{constructor(t=new Ht,e=new kn){super();this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)eu.fromBufferAttribute(e,i-1),nu.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=eu.distanceTo(nu);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(i),Ms.radius+=s,t.ray.intersectsSphere(Ms)===!1)return;iu.copy(i).invert(),oa.copy(t.ray).applyMatrix4(iu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new w,u=new w,d=new w,h=new w,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,y=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),p=Math.min(g.count,o.start+o.count);for(let M=m,_=p-1;M<_;M+=f){const b=g.getX(M),E=g.getX(M+1);if(c.fromBufferAttribute(y,b),u.fromBufferAttribute(y,E),oa.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(h);R<t.near||R>t.far||e.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),p=Math.min(y.count,o.start+o.count);for(let M=m,_=p-1;M<_;M+=f){if(c.fromBufferAttribute(y,M),u.fromBufferAttribute(y,M+1),oa.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const E=t.ray.origin.distanceTo(h);E<t.near||E>t.far||e.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}hr.prototype.isLine=!0;const ru=new w,su=new w;class bs extends hr{constructor(t,e){super(t,e);this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)ru.fromBufferAttribute(e,i),su.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ru.distanceTo(su);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}bs.prototype.isLineSegments=!0;class Ty extends hr{constructor(t,e){super(t,e);this.type="LineLoop"}}Ty.prototype.isLineLoop=!0;class ou extends fe{constructor(t){super();this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this}}ou.prototype.isPointsMaterial=!0;const au=new gt,aa=new ln,ws=new zn,Ss=new w;class Ey extends Bt{constructor(t=new Ht,e=new ou){super();this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=s,t.ray.intersectsSphere(ws)===!1)return;au.copy(i).invert(),aa.copy(t.ray).applyMatrix4(au);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,x=f;g<x;g++){const y=c.getX(g);Ss.fromBufferAttribute(d,y),lu(Ss,y,l,i,t,e,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,x=f;g<x;g++)Ss.fromBufferAttribute(d,g),lu(Ss,g,l,i,t,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Ey.prototype.isPoints=!0;function lu(r,t,e,n,i,s,o){const a=aa.distanceSqToPoint(r);if(a<e){const l=new w;aa.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Ay extends ce{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c);this.format=a!==void 0?a:In,this.minFilter=o!==void 0?o:Te,this.magFilter=s!==void 0?s:Te,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Ay.prototype.isVideoTexture=!0;class Ly extends ce{constructor(t,e,n,i,s,o,a,l,c,u,d,h){super(null,o,a,l,c,u,i,s,d,h);this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}Ly.prototype.isCompressedTexture=!0;class Cy extends ce{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c);this.needsUpdate=!0}}Cy.prototype.isCanvasTexture=!0;new w;new w;new w;new Xt;class Le{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(s-1)}getTangent(t,e){const n=1e-4;let i=t-n,s=t+n;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Z:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new w,i=[],s=[],o=[],a=new w,l=new gt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new w)}s[0]=new w,o[0]=new w;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(he(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(he(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ts extends Le{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super();this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new Z,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}Ts.prototype.isEllipseCurve=!0;class cu extends Ts{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o);this.type="ArcCurve"}}cu.prototype.isArcCurve=!0;function la(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,i(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Es=new w,ca=new la,ua=new la,ha=new la;class uu extends Le{constructor(t=[],e=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new w){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Es.subVectors(i[0],i[1]).add(i[0]),c=Es);const d=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Es.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Es),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),y<1e-4&&(y=x),ca.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,x,y),ua.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,x,y),ha.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,x,y)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),ua.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),ha.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(ca.calc(l),ua.calc(l),ha.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new w().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}uu.prototype.isCatmullRomCurve3=!0;function hu(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Ry(r,t){const e=1-r;return e*e*t}function Py(r,t){return 2*(1-r)*r*t}function Dy(r,t){return r*r*t}function dr(r,t,e,n){return Ry(r,t)+Py(r,e)+Dy(r,n)}function Iy(r,t){const e=1-r;return e*e*e*t}function Fy(r,t){const e=1-r;return 3*e*e*r*t}function Ny(r,t){return 3*(1-r)*r*r*t}function By(r,t){return r*r*r*t}function fr(r,t,e,n,i){return Iy(r,t)+Fy(r,e)+Ny(r,n)+By(r,i)}class da extends Le{constructor(t=new Z,e=new Z,n=new Z,i=new Z){super();this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Z){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,i.x,s.x,o.x,a.x),fr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}da.prototype.isCubicBezierCurve=!0;class du extends Le{constructor(t=new w,e=new w,n=new w,i=new w){super();this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new w){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,i.x,s.x,o.x,a.x),fr(t,i.y,s.y,o.y,a.y),fr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}du.prototype.isCubicBezierCurve3=!0;class As extends Le{constructor(t=new Z,e=new Z){super();this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new Z;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}As.prototype.isLineCurve=!0;class zy extends Le{constructor(t=new w,e=new w){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fa extends Le{constructor(t=new Z,e=new Z,n=new Z){super();this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(dr(t,i.x,s.x,o.x),dr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}fa.prototype.isQuadraticBezierCurve=!0;class fu extends Le{constructor(t=new w,e=new w,n=new w){super();this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(dr(t,i.x,s.x,o.x),dr(t,i.y,s.y,o.y),dr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}fu.prototype.isQuadraticBezierCurve3=!0;class pa extends Le{constructor(t=[]){super();this.type="SplineCurve",this.points=t}getPoint(t,e=new Z){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(hu(a,l.x,c.x,u.x,d.x),hu(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Z().fromArray(i))}return this}}pa.prototype.isSplineCurve=!0;var pu=Object.freeze({__proto__:null,ArcCurve:cu,CatmullRomCurve3:uu,CubicBezierCurve:da,CubicBezierCurve3:du,EllipseCurve:Ts,LineCurve:As,LineCurve3:zy,QuadraticBezierCurve:fa,QuadraticBezierCurve3:fu,SplineCurve:pa});class Oy extends Le{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new As(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o&&o.isEllipseCurve?t*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new pu[i.type]().fromJSON(i))}return this}}class ma extends Oy{constructor(t){super();this.type="Path",this.currentPoint=new Z,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new As(this.currentPoint.clone(),new Z(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new fa(this.currentPoint.clone(),new Z(t,e),new Z(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new da(this.currentPoint.clone(),new Z(t,e),new Z(n,i),new Z(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new pa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Ts(t,e,n,i,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class pr extends ma{constructor(t){super(t);this.uuid=Re(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ma().fromJSON(i))}return this}}const Uy={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=mu(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,h,f;if(n&&(s=Wy(r,t,s,e)),r.length>80*e){a=c=r[0],l=u=r[1];for(let g=e;g<i;g+=e)d=r[g],h=r[g+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-a,u-l),f=f!==0?1/f:0}return mr(s,o,e,a,l,f),o}};function mu(r,t,e,n,i){let s,o;if(i===e_(r,t,e,n)>0)for(s=t;s<e;s+=n)o=yu(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=yu(s,r[s],r[s+1],o);return o&&Ls(o,o.next)&&(xr(o),o=o.next),o}function mn(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Ls(e,e.next)||jt(e.prev,e,e.next)===0)){if(xr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function mr(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Zy(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Hy(r,n,i,s):Vy(r)){t.push(l.i/e),t.push(r.i/e),t.push(c.i/e),xr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=ky(mn(r),t,e),mr(r,t,e,n,i,s,2)):o===2&&Gy(r,t,e,n,i,s):mr(mn(r),t,e,n,i,s,1);break}}}function Vy(r){const t=r.prev,e=r,n=r.next;if(jt(t,e,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Li(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&jt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Hy(r,t,e,n){const i=r.prev,s=r,o=r.next;if(jt(i,s,o)>=0)return!1;const a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,u=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,d=ga(a,l,t,e,n),h=ga(c,u,t,e,n);let f=r.prevZ,g=r.nextZ;for(;f&&f.z>=d&&g&&g.z<=h;){if(f!==r.prev&&f!==r.next&&Li(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&jt(f.prev,f,f.next)>=0||(f=f.prevZ,g!==r.prev&&g!==r.next&&Li(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&jt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=d;){if(f!==r.prev&&f!==r.next&&Li(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&jt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=h;){if(g!==r.prev&&g!==r.next&&Li(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&jt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function ky(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Ls(i,s)&&gu(i,n,n.next,s)&&gr(i,s)&&gr(s,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(s.i/e),xr(n),xr(n.next),n=r=s),n=n.next}while(n!==r);return mn(n)}function Gy(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qy(o,a)){let l=xu(o,a);o=mn(o,o.next),l=mn(l,l.next),mr(o,t,e,n,i,s),mr(l,t,e,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function Wy(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=mu(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Jy(c));for(i.sort(qy),s=0;s<i.length;s++)Xy(i[s],e),e=mn(e,e.next);return e}function qy(r,t){return r.x-t.x}function Xy(r,t){if(t=jy(r,t),t){const e=xu(t,r);mn(t,t.next),mn(e,e.next)}}function jy(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const h=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s){if(s=h,h===n){if(i===e.y)return e;if(i===e.next.y)return e.next}o=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let u=1/0,d;e=o;do n>=e.x&&e.x>=l&&n!==e.x&&Li(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)&&(d=Math.abs(i-e.y)/(n-e.x),gr(e,r)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&Yy(o,e)))&&(o=e,u=d)),e=e.next;while(e!==a);return o}function Yy(r,t){return jt(r.prev,r,t.prev)<0&&jt(t.next,r,r.next)<0}function Zy(r,t,e,n){let i=r;do i.z===null&&(i.z=ga(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,$y(i)}function $y(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function ga(r,t,e,n,i){return r=32767*(r-e)*i,t=32767*(t-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Jy(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Li(r,t,e,n,i,s,o,a){return(i-o)*(t-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(e-o)*(t-a)>=0&&(e-o)*(s-a)-(i-o)*(n-a)>=0}function Qy(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Ky(r,t)&&(gr(r,t)&&gr(t,r)&&t_(r,t)&&(jt(r.prev,r,t.prev)||jt(r,t.prev,t))||Ls(r,t)&&jt(r.prev,r,r.next)>0&&jt(t.prev,t,t.next)>0)}function jt(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Ls(r,t){return r.x===t.x&&r.y===t.y}function gu(r,t,e,n){const i=Rs(jt(r,t,e)),s=Rs(jt(r,t,n)),o=Rs(jt(e,n,r)),a=Rs(jt(e,n,t));return!!(i!==s&&o!==a||i===0&&Cs(r,e,t)||s===0&&Cs(r,n,t)||o===0&&Cs(e,r,n)||a===0&&Cs(e,t,n))}function Cs(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Rs(r){return r>0?1:r<0?-1:0}function Ky(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&gu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function gr(r,t){return jt(r.prev,r,r.next)<0?jt(r,t,r.next)>=0&&jt(r,r.prev,t)>=0:jt(r,t,r.prev)<0||jt(r,r.next,t)<0}function t_(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function xu(r,t){const e=new xa(r.i,r.x,r.y),n=new xa(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function yu(r,t,e,n){const i=new xa(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function xa(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function e_(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class gn{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return gn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];_u(t),vu(n,t);let o=t.length;e.forEach(_u);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,vu(n,e[l]);const a=Uy.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function _u(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function vu(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ci extends Ht{constructor(t=new pr([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new $t(i,3)),this.setAttribute("uv",new $t(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1;let d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,p=e.UVGenerator!==void 0?e.UVGenerator:n_;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=e.amount);let M,_=!1,b,E,v,R;m&&(M=m.getSpacedPoints(u),_=!0,h=!1,b=m.computeFrenetFrames(u,!1),E=new w,v=new w,R=new w),h||(y=0,f=0,g=0,x=0);const D=a.extractPoints(c);let I=D.shape;const C=D.holes;if(!gn.isClockWise(I)){I=I.reverse();for(let G=0,K=C.length;G<K;G++){const et=C[G];gn.isClockWise(et)&&(C[G]=et.reverse())}}const F=gn.triangulateShape(I,C),N=I;for(let G=0,K=C.length;G<K;G++){const et=C[G];I=I.concat(et)}function O(G,K,et){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().multiplyScalar(et).add(G)}const B=I.length,U=F.length;function tt(G,K,et){let ut,rt,Mt;const bt=G.x-K.x,Et=G.y-K.y,Ot=et.x-G.x,L=et.y-G.y,T=bt*bt+Et*Et,$=bt*L-Et*Ot;if(Math.abs($)>Number.EPSILON){const Y=Math.sqrt(T),pt=Math.sqrt(Ot*Ot+L*L),ht=K.x-Et/Y,P=K.y+bt/Y,nt=et.x-L/pt,A=et.y+Ot/pt,k=((nt-ht)*L-(A-P)*Ot)/(bt*L-Et*Ot);ut=ht+bt*k-G.x,rt=P+Et*k-G.y;const Q=ut*ut+rt*rt;if(Q<=2)return new Z(ut,rt);Mt=Math.sqrt(Q/2)}else{let Y=!1;bt>Number.EPSILON?Ot>Number.EPSILON&&(Y=!0):bt<-Number.EPSILON?Ot<-Number.EPSILON&&(Y=!0):Math.sign(Et)===Math.sign(L)&&(Y=!0),Y?(ut=-Et,rt=bt,Mt=Math.sqrt(T)):(ut=bt,rt=Et,Mt=Math.sqrt(T/2))}return new Z(ut/Mt,rt/Mt)}const ot=[];for(let G=0,K=N.length,et=K-1,ut=G+1;G<K;G++,et++,ut++)et===K&&(et=0),ut===K&&(ut=0),ot[G]=tt(N[G],N[et],N[ut]);const W=[];let q,ct=ot.concat();for(let G=0,K=C.length;G<K;G++){const et=C[G];q=[];for(let ut=0,rt=et.length,Mt=rt-1,bt=ut+1;ut<rt;ut++,Mt++,bt++)Mt===rt&&(Mt=0),bt===rt&&(bt=0),q[ut]=tt(et[ut],et[Mt],et[bt]);W.push(q),ct=ct.concat(q)}for(let G=0;G<y;G++){const K=G/y,et=f*Math.cos(K*Math.PI/2),ut=g*Math.sin(K*Math.PI/2)+x;for(let rt=0,Mt=N.length;rt<Mt;rt++){const bt=O(N[rt],ot[rt],ut);Tt(bt.x,bt.y,-et)}for(let rt=0,Mt=C.length;rt<Mt;rt++){const bt=C[rt];q=W[rt];for(let Et=0,Ot=bt.length;Et<Ot;Et++){const L=O(bt[Et],q[Et],ut);Tt(L.x,L.y,-et)}}}const at=g+x;for(let G=0;G<B;G++){const K=h?O(I[G],ct[G],at):I[G];_?(v.copy(b.normals[0]).multiplyScalar(K.x),E.copy(b.binormals[0]).multiplyScalar(K.y),R.copy(M[0]).add(v).add(E),Tt(R.x,R.y,R.z)):Tt(K.x,K.y,0)}for(let G=1;G<=u;G++)for(let K=0;K<B;K++){const et=h?O(I[K],ct[K],at):I[K];_?(v.copy(b.normals[G]).multiplyScalar(et.x),E.copy(b.binormals[G]).multiplyScalar(et.y),R.copy(M[G]).add(v).add(E),Tt(R.x,R.y,R.z)):Tt(et.x,et.y,d/u*G)}for(let G=y-1;G>=0;G--){const K=G/y,et=f*Math.cos(K*Math.PI/2),ut=g*Math.sin(K*Math.PI/2)+x;for(let rt=0,Mt=N.length;rt<Mt;rt++){const bt=O(N[rt],ot[rt],ut);Tt(bt.x,bt.y,d+et)}for(let rt=0,Mt=C.length;rt<Mt;rt++){const bt=C[rt];q=W[rt];for(let Et=0,Ot=bt.length;Et<Ot;Et++){const L=O(bt[Et],q[Et],ut);_?Tt(L.x,L.y+M[u-1].y,M[u-1].x+et):Tt(L.x,L.y,d+et)}}}dt(),Pt();function dt(){const G=i.length/3;if(h){let K=0,et=B*K;for(let ut=0;ut<U;ut++){const rt=F[ut];yt(rt[2]+et,rt[1]+et,rt[0]+et)}K=u+y*2,et=B*K;for(let ut=0;ut<U;ut++){const rt=F[ut];yt(rt[0]+et,rt[1]+et,rt[2]+et)}}else{for(let K=0;K<U;K++){const et=F[K];yt(et[2],et[1],et[0])}for(let K=0;K<U;K++){const et=F[K];yt(et[0]+B*u,et[1]+B*u,et[2]+B*u)}}n.addGroup(G,i.length/3-G,0)}function Pt(){const G=i.length/3;let K=0;J(N,K),K+=N.length;for(let et=0,ut=C.length;et<ut;et++){const rt=C[et];J(rt,K),K+=rt.length}n.addGroup(G,i.length/3-G,1)}function J(G,K){let et=G.length;for(;--et>=0;){const ut=et;let rt=et-1;rt<0&&(rt=G.length-1);for(let Mt=0,bt=u+y*2;Mt<bt;Mt++){const Et=B*Mt,Ot=B*(Mt+1),L=K+ut+Et,T=K+rt+Et,$=K+rt+Ot,Y=K+ut+Ot;ft(L,T,$,Y)}}}function Tt(G,K,et){l.push(G),l.push(K),l.push(et)}function yt(G,K,et){xt(G),xt(K),xt(et);const ut=i.length/3,rt=p.generateTopUV(n,i,ut-3,ut-2,ut-1);Rt(rt[0]),Rt(rt[1]),Rt(rt[2])}function ft(G,K,et,ut){xt(G),xt(K),xt(ut),xt(K),xt(et),xt(ut);const rt=i.length/3,Mt=p.generateSideWallUV(n,i,rt-6,rt-3,rt-2,rt-1);Rt(Mt[0]),Rt(Mt[1]),Rt(Mt[3]),Rt(Mt[1]),Rt(Mt[2]),Rt(Mt[3])}function xt(G){i.push(l[G*3+0]),i.push(l[G*3+1]),i.push(l[G*3+2])}function Rt(G){s.push(G.x),s.push(G.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return i_(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new pu[i.type]().fromJSON(i)),new Ci(n,t.options)}}const n_={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new Z(s,o),new Z(a,l),new Z(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[i*3],f=t[i*3+1],g=t[i*3+2],x=t[s*3],y=t[s*3+1],m=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Z(o,1-l),new Z(c,1-d),new Z(h,1-g),new Z(x,1-m)]:[new Z(a,1-l),new Z(u,1-d),new Z(f,1-g),new Z(y,1-m)]}};function i_(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ya extends Ht{constructor(t=new pr([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new $t(i,3)),this.setAttribute("normal",new $t(s,3)),this.setAttribute("uv",new $t(o,2));function c(u){const d=i.length/3,h=u.extractPoints(e);let f=h.shape;const g=h.holes;gn.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,m=g.length;y<m;y++){const p=g[y];gn.isClockWise(p)===!0&&(g[y]=p.reverse())}const x=gn.triangulateShape(f,g);for(let y=0,m=g.length;y<m;y++){const p=g[y];f=f.concat(p)}for(let y=0,m=f.length;y<m;y++){const p=f[y];i.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let y=0,m=x.length;y<m;y++){const p=x[y],M=p[0]+d,_=p[1]+d,b=p[2]+d;n.push(M,_,b),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return r_(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new ya(n,t.curveSegments)}}function r_(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class s_ extends fe{constructor(t){super();this.type="ShadowMaterial",this.color=new mt(0),this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this}}s_.prototype.isShadowMaterial=!0;class Mu extends fe{constructor(t){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ii,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}Mu.prototype.isMeshStandardMaterial=!0;class o_ extends Mu{constructor(t){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}o_.prototype.isMeshPhysicalMaterial=!0;class a_ extends fe{constructor(t){super();this.type="MeshPhongMaterial",this.color=new mt(16777215),this.specular=new mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ii,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}a_.prototype.isMeshPhongMaterial=!0;class l_ extends fe{constructor(t){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new mt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ii,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}l_.prototype.isMeshToonMaterial=!0;class c_ extends fe{constructor(t){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ii,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}c_.prototype.isMeshNormalMaterial=!0;class u_ extends fe{constructor(t){super();this.type="MeshLambertMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}u_.prototype.isMeshLambertMaterial=!0;class h_ extends fe{constructor(t){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new mt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ii,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this}}h_.prototype.isMeshMatcapMaterial=!0;class d_ extends kn{constructor(t){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}d_.prototype.isLineDashedMaterial=!0;const qt={arraySlice:function(r,t,e){return qt.isTypedArray(r)?new r.constructor(r.subarray(t,e!==void 0?e:r.length)):r.slice(t,e)},convertArray:function(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n},sortedArray:function(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i},flattenJSON:function(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,t,e,n,i=30){const s=r.clone();s.name=t;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),d=[],h=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<e||g>=n)){d.push(c.times[f]);for(let x=0;x<u;++x)h.push(c.values[f*u+x])}}d.length!==0&&(c.times=qt.convertArray(d,c.times.constructor),c.values=qt.convertArray(h,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,t=0,e=r,n=30){n<=0&&(n=30);const i=e.tracks.length,s=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);const g=a.times.length-1;let x;if(s<=a.times[0]){const m=u,p=d-u;x=qt.arraySlice(a.values,m,p)}else if(s>=a.times[g]){const m=g*d+u,p=m+d-u;x=qt.arraySlice(a.values,m,p)}else{const m=a.createInterpolant(),p=u,M=d-u;m.evaluate(s),x=qt.arraySlice(m.resultBuffer,p,M)}l==="quaternion"&&new de().fromArray(x).normalize().conjugate().toArray(x);const y=c.times.length;for(let m=0;m<y;++m){const p=m*f+h;if(l==="quaternion")de.multiplyQuaternionsFlat(c.values,p,x,0,c.values,p);else{const M=f-h*2;for(let _=0;_<M;++_)c.values[p+_]-=x[_]}}}return r.blendMode=Nl,r}};class xn{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,s)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,s,t)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}xn.prototype.beforeStart_=xn.prototype.copySampleValue_;xn.prototype.afterEnd_=xn.prototype.copySampleValue_;class f_ extends xn{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ei,endingEnd:ei}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ni:s=t,a=2*e-n;break;case kr:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ni:o=t,l=2*n-e;break;case kr:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,y=x*g,m=-h*y+2*h*x-h*g,p=(1+h)*y+(-1.5-2*h)*x+(-.5+h)*g+1,M=(-1-f)*y+(1.5+f)*x+.5*g,_=f*y-f*x;for(let b=0;b!==a;++b)s[b]=m*o[u+b]+p*o[c+b]+M*o[l+b]+_*o[d+b];return s}}class bu extends xn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}}class p_ extends xn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class ze{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qt.convertArray(e,this.TimeBufferType),this.values=qt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qt.convertArray(t.times,Array),values:qt.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new p_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new f_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Vr:e=this.InterpolantFactoryMethodDiscrete;break;case Hr:e=this.InterpolantFactoryMethodLinear;break;case po:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return po}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=qt.arraySlice(n,s,o),this.values=qt.arraySlice(this.values,s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&qt.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=qt.arraySlice(this.times),e=qt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===po,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{const d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){const x=e[d+g];if(x!==e[h+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const d=a*n,h=o*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=qt.arraySlice(t,0,o),this.values=qt.arraySlice(e,0,o*n)):(this.times=t,this.values=e),this}clone(){const t=qt.arraySlice(this.times,0),e=qt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}ze.prototype.TimeBufferType=Float32Array;ze.prototype.ValueBufferType=Float32Array;ze.prototype.DefaultInterpolation=Hr;class Ri extends ze{}Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Vr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;class wu extends ze{}wu.prototype.ValueTypeName="color";class Ps extends ze{}Ps.prototype.ValueTypeName="number";class m_ extends xn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let u=c+a;c!==u;c+=4)de.slerpFlat(s,0,o,c-a,o,c,l);return s}}class yr extends ze{InterpolantFactoryMethodLinear(t){return new m_(this.times,this.values,this.getValueSize(),t)}}yr.prototype.ValueTypeName="quaternion";yr.prototype.DefaultInterpolation=Hr;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Pi extends ze{}Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Vr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends ze{}Ds.prototype.ValueTypeName="vector";class Su{constructor(t,e=-1,n,i=mo){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Re(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(x_(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(ze.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=qt.getKeyframeOrder(l);l=qt.sortedArray(l,1,u),c=qt.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ps(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,g,x){if(f.length!==0){const y=[],m=[];qt.flattenJSON(f,y,m,g),y.length!==0&&x.push(new d(h,y,m))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let x=0;x<h[g].morphTargets.length;x++)f[h[g].morphTargets[x]]=-1;for(const x in f){const y=[],m=[];for(let p=0;p!==h[g].morphTargets.length;++p){const M=h[g];y.push(M.time),m.push(M.morphTarget===x?1:0)}i.push(new Ps(".morphTargetInfluence["+x+"]",y,m))}l=f.length*(o||1)}else{const f=".bones["+e[d].name+"]";n(Ds,f+".position",h,"pos",i),n(yr,f+".quaternion",h,"rot",i),n(Ds,f+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function g_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Ds;case"color":return wu;case"quaternion":return yr;case"bool":case"boolean":return Ri;case"string":return Pi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function x_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=g_(r.type);if(r.times===void 0){const e=[],n=[];qt.flattenJSON(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Di={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class y_{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const __=new y_;class yn{constructor(t){this.manager=t!==void 0?t:__,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Je={};class v_ extends yn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Di.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Je[t]!==void 0){Je[t].push({onLoad:e,onProgress:n,onError:i});return}Je[t]=[],Je[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(o).then(a=>{if(a.status===200||a.status===0){a.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");const l=Je[t],c=a.body.getReader(),u=a.headers.get("Content-Length"),d=u?parseInt(u):0,h=d!==0;let f=0;return new ReadableStream({start(g){x();function x(){c.read().then(({done:y,value:m})=>{if(y)g.close();else{f+=m.byteLength;const p=new ProgressEvent("progress",{lengthComputable:h,loaded:f,total:d});for(let M=0,_=l.length;M<_;M++){const b=l[M];b.onProgress&&b.onProgress(p)}g.enqueue(m),x()}})}}})}else throw Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>{const l=new Response(a);switch(this.responseType){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,this.mimeType));case"json":return l.json();default:return l.text()}}).then(a=>{Di.add(t,a);const l=Je[t];delete Je[t];for(let c=0,u=l.length;c<u;c++){const d=l[c];d.onLoad&&d.onLoad(a)}this.manager.itemEnd(t)}).catch(a=>{const l=Je[t];delete Je[t];for(let c=0,u=l.length;c<u;c++){const d=l[c];d.onError&&d.onError(a)}this.manager.itemError(t),this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Tu extends yn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Di.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Xr("img");function l(){u(),Di.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){u(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class M_ extends yn{constructor(t){super(t)}load(t,e,n,i){const s=new us,o=new Tu(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}}class b_ extends yn{constructor(t){super(t)}load(t,e,n,i){const s=new ce,o=new Tu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Oe extends Bt{constructor(t,e=1){super();this.type="Light",this.color=new mt(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}Oe.prototype.isLight=!0;class w_ extends Oe{constructor(t,e,n){super(t,n);this.type="HemisphereLight",this.position.copy(Bt.DefaultUp),this.updateMatrix(),this.groundColor=new mt(e)}copy(t){return Oe.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}w_.prototype.isHemisphereLight=!0;const Eu=new gt,Au=new w,Lu=new w;class _a{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Au.setFromMatrixPosition(t.matrixWorld),e.position.copy(Au),Lu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lu),e.updateMatrixWorld(),Eu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Cu extends _a{constructor(){super(new ve(50,1,.5,500));this.focus=1}updateMatrices(t){const e=this.camera,n=Zi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}Cu.prototype.isSpotLightShadow=!0;class S_ extends Oe{constructor(t,e,n=0,i=Math.PI/3,s=0,o=1){super(t,e);this.type="SpotLight",this.position.copy(Bt.DefaultUp),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new Cu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}S_.prototype.isSpotLight=!0;const Ru=new gt,_r=new w,va=new w;class Pu extends _a{constructor(){super(new ve(90,1,.5,500));this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new Vt(2,1,1,1),new Vt(0,1,1,1),new Vt(3,1,1,1),new Vt(1,1,1,1),new Vt(3,0,1,1),new Vt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),_r.setFromMatrixPosition(t.matrixWorld),n.position.copy(_r),va.copy(n.position),va.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(va),n.updateMatrixWorld(),i.makeTranslation(-_r.x,-_r.y,-_r.z),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}}Pu.prototype.isPointLightShadow=!0;class T_ extends Oe{constructor(t,e,n=0,i=1){super(t,e);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}T_.prototype.isPointLight=!0;class Du extends _a{constructor(){super(new Yo(-5,5,5,-5,.5,500))}}Du.prototype.isDirectionalLightShadow=!0;class E_ extends Oe{constructor(t,e){super(t,e);this.type="DirectionalLight",this.position.copy(Bt.DefaultUp),this.updateMatrix(),this.target=new Bt,this.shadow=new Du}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}E_.prototype.isDirectionalLight=!0;class A_ extends Oe{constructor(t,e){super(t,e);this.type="AmbientLight"}}A_.prototype.isAmbientLight=!0;class L_ extends Oe{constructor(t,e,n=10,i=10){super(t,e);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}L_.prototype.isRectAreaLight=!0;class Iu{constructor(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new w)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,s=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*s),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*s)),e.addScaledVector(o[6],.315392*(3*s*s-1)),e.addScaledVector(o[7],1.092548*(n*s)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,s=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*s),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*s),e.addScaledVector(o[6],.743125*s*s-.247708),e.addScaledVector(o[7],2*.429043*n*s),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,s=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*s,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*n*s,e[8]=.546274*(n*n-i*i)}}Iu.prototype.isSphericalHarmonics3=!0;class Ma extends Oe{constructor(t=new Iu,e=1){super(void 0,e);this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}Ma.prototype.isLightProbe=!0;class C_{static decodeText(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class R_ extends Ht{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}R_.prototype.isInstancedBufferGeometry=!0;class P_ extends yn{constructor(t){super(t);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Di.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Di.add(t,l),e&&e(l),s.manager.itemEnd(t)}).catch(function(l){i&&i(l),s.manager.itemError(t),s.manager.itemEnd(t)}),s.manager.itemStart(t)}}P_.prototype.isImageBitmapLoader=!0;let Is;const D_={getContext:function(){return Is===void 0&&(Is=new(window.AudioContext||window.webkitAudioContext)),Is},setContext:function(r){Is=r}};class I_ extends yn{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new v_(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{const l=a.slice(0);D_.getContext().decodeAudioData(l,function(u){e(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}}class F_ extends Ma{constructor(t,e,n=1){super(void 0,n);const i=new mt().set(t),s=new mt().set(e),o=new w(i.r,i.g,i.b),a=new w(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}F_.prototype.isHemisphereLightProbe=!0;class N_ extends Ma{constructor(t,e=1){super(void 0,e);const n=new mt().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}N_.prototype.isAmbientLightProbe=!0;class B_ extends Bt{constructor(t){super();this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class z_{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){de.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;de.multiplyQuaternionsFlat(t,o,t,e,t,n),de.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const ba="\\[\\]\\.:\\/",O_=new RegExp("["+ba+"]","g"),wa="[^"+ba+"]",U_="[^"+ba.replace("\\.","")+"]",V_=/((?:WC+[\/:])*)/.source.replace("WC",wa),H_=/(WCOD+)?/.source.replace("WCOD",U_),k_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wa),G_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wa),W_=new RegExp("^"+V_+H_+k_+G_+"$"),q_=["material","materials","bones"];class X_{constructor(t,e,n){const i=n||zt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class zt{constructor(t,e,n){this.path=e,this.parsedPath=n||zt.parseTrackName(e),this.node=zt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new zt.Composite(t,e,n):new zt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(O_,"")}static parseTrackName(t){const e=W_.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);q_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=zt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}zt.Composite=X_;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class j_{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),l={endingStart:ei,endingEnd:ei};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=yf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;if(l<0||n===0)return;this._startTime=null,e=n*l}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Nl:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case mo:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===_f;if(t===0)return s===-1?i:o&&(s&1)==1?e-i:i;if(n===xf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)==1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=ni,i.endingEnd=ni):(t?i.endingStart=this.zeroSlopeAtStart?ni:ei:i.endingStart=kr,e?i.endingEnd=this.zeroSlopeAtEnd?ni:ei:i.endingEnd=kr)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}}class Y_ extends rn{constructor(t){super();this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==s;++d){const h=i[d],f=h.name;let g=u[f];if(g!==void 0)o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const x=e&&e._propertyBindings[d].binding.parsedPath;g=new z_(zt.create(n,f,x),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount==0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=t._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,h=(t._localRoot||this._root).uuid;delete d[h],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount==0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new bu(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?Su.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=mo),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new j_(this,o,e,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?Su.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,e[u]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Y_.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Z_ extends sr{constructor(t,e,n=1){super(t,e);this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}Z_.prototype.isInstancedInterleavedBuffer=!0;class yv{constructor(t,e,n=0,i=1/0){this.ray=new ln(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new jl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Sa(t,this,n,e),n.sort(Fu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Sa(t[i],this,n,e);return n.sort(Fu),n}}function Fu(r,t){return r.distance-t.distance}function Sa(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Sa(i[s],t,e,!0)}}class Nu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){const t=1e-6;return this.phi=Math.max(t,Math.min(Math.PI-t,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(he(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Bu=new w,Fs=new w;class Ue{constructor(t=new w,e=new w){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Bu.subVectors(t,this.start),Fs.subVectors(this.end,this.start);const n=Fs.dot(Fs);let s=Fs.dot(Bu)/n;return e&&(s=he(s,0,1)),s}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const _n=new w,Ns=new gt,Ta=new gt;class $_ extends bs{constructor(t){const e=zu(t),n=new Ht,i=[],s=[],o=new mt(0,0,1),a=new mt(0,1,0);for(let c=0;c<e.length;c++){const u=e[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new $t(i,3)),n.setAttribute("color",new $t(s,3));const l=new kn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Ta.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<e.length;s++){const a=e[s];a.parent&&a.parent.isBone&&(Ns.multiplyMatrices(Ta,a.matrixWorld),_n.setFromMatrixPosition(Ns),i.setXYZ(o,_n.x,_n.y,_n.z),Ns.multiplyMatrices(Ta,a.parent.matrixWorld),_n.setFromMatrixPosition(Ns),i.setXYZ(o+1,_n.x,_n.y,_n.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function zu(r){const t=[];r&&r.isBone&&t.push(r);for(let e=0;e<r.children.length;e++)t.push.apply(t,zu(r.children[e]));return t}class J_ extends bs{constructor(t=10,e=10,n=4473924,i=8947848){n=new mt(n),i=new mt(i);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let h=0,f=0,g=-a;h<=e;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=h===s?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const u=new Ht;u.setAttribute("position",new $t(l,3)),u.setAttribute("color",new $t(c,3));const d=new kn({vertexColors:!0,toneMapped:!1});super(u,d);this.type="GridHelper"}}const Ou=new w,Bs=new w,Uu=new w;class _v extends Bt{constructor(t,e,n){super();this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,e===void 0&&(e=1);let i=new Ht;i.setAttribute("position",new $t([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const s=new kn({fog:!1,toneMapped:!1});this.lightPlane=new hr(i,s),this.add(this.lightPlane),i=new Ht,i.setAttribute("position",new $t([0,0,0,0,0,1],3)),this.targetLine=new hr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){Ou.setFromMatrixPosition(this.light.matrixWorld),Bs.setFromMatrixPosition(this.light.target.matrixWorld),Uu.subVectors(Bs,Ou),this.lightPlane.lookAt(Bs),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Bs),this.targetLine.scale.z=Uu.length()}}const zs=new w,Jt=new cs;class vv extends bs{constructor(t){const e=new Ht,n=new kn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={},a=new mt(16755200),l=new mt(16711680),c=new mt(43775),u=new mt(16777215),d=new mt(3355443);h("n1","n2",a),h("n2","n4",a),h("n4","n3",a),h("n3","n1",a),h("f1","f2",a),h("f2","f4",a),h("f4","f3",a),h("f3","f1",a),h("n1","f1",a),h("n2","f2",a),h("n3","f3",a),h("n4","f4",a),h("p","n1",l),h("p","n2",l),h("p","n3",l),h("p","n4",l),h("u1","u2",c),h("u2","u3",c),h("u3","u1",c),h("c","t",u),h("p","c",d),h("cn1","cn2",d),h("cn3","cn4",d),h("cf1","cf2",d),h("cf3","cf4",d);function h(g,x,y){f(g,y),f(x,y)}function f(g,x){i.push(0,0,0),s.push(x.r,x.g,x.b),o[g]===void 0&&(o[g]=[]),o[g].push(i.length/3-1)}e.setAttribute("position",new $t(i,3)),e.setAttribute("color",new $t(s,3));super(e,n);this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;Jt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),ne("c",e,t,Jt,0,0,-1),ne("t",e,t,Jt,0,0,1),ne("n1",e,t,Jt,-n,-i,-1),ne("n2",e,t,Jt,n,-i,-1),ne("n3",e,t,Jt,-n,i,-1),ne("n4",e,t,Jt,n,i,-1),ne("f1",e,t,Jt,-n,-i,1),ne("f2",e,t,Jt,n,-i,1),ne("f3",e,t,Jt,-n,i,1),ne("f4",e,t,Jt,n,i,1),ne("u1",e,t,Jt,n*.7,i*1.1,-1),ne("u2",e,t,Jt,-n*.7,i*1.1,-1),ne("u3",e,t,Jt,0,i*2,-1),ne("cf1",e,t,Jt,-n,0,1),ne("cf2",e,t,Jt,n,0,1),ne("cf3",e,t,Jt,0,-i,1),ne("cf4",e,t,Jt,0,i,1),ne("cn1",e,t,Jt,-n,0,-1),ne("cn2",e,t,Jt,n,0,-1),ne("cn3",e,t,Jt,0,-i,-1),ne("cn4",e,t,Jt,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function ne(r,t,e,n,i,s,o){zs.set(i,s,o).unproject(n);const a=t[r];if(a!==void 0){const l=e.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],zs.x,zs.y,zs.z)}}const Q_=new Float32Array(1);new Int32Array(Q_.buffer);Le.create=function(r,t){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Le.prototype),r.prototype.constructor=r,r.prototype.getPoint=t,r};ma.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};J_.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};$_.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};yn.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),C_.extractUrlBase(r)};yn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};se.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};se.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};se.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};se.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};se.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};zn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ds.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};Ue.prototype.center=function(r){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(r)};le.prototype.flattenToArrayOffset=function(r,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,t)};le.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};le.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};le.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};le.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};le.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};gt.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};gt.prototype.flattenToArrayOffset=function(r,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,t)};gt.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new w().setFromMatrixColumn(this,3)};gt.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};gt.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};gt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};gt.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};gt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};gt.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};gt.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};gt.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};gt.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};gt.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};gt.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};gt.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};gt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};gt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};gt.prototype.makeFrustum=function(r,t,e,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,t,n,e,i,s)};gt.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Fe.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};de.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};de.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};ln.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};ln.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};ln.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Xt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Xt.prototype.barycoordFromPoint=function(r,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,t)};Xt.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};Xt.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};Xt.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};Xt.barycoordFromPoint=function(r,t,e,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Xt.getBarycoord(r,t,e,n,i)};Xt.normal=function(r,t,e,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Xt.getNormal(r,t,e,n)};pr.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};pr.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Ci(this,r)};pr.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new ya(this,r)};Z.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};Z.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};Z.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};w.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};w.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};w.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};w.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};w.prototype.getColumnFromMatrix=function(r,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,r)};w.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};w.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};w.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};w.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Vt.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};Vt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Bt.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Bt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Bt.prototype.translate=function(r,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,r)};Bt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Bt.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Bt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});xe.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(xe.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),vf},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Qc.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};ve.prototype.setLens=function(r,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(r)};Object.defineProperties(Oe.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(te.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Wr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Wr)}}});te.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Wr:ji),this};te.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},te.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ht.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};Ht.prototype.addAttribute=function(r,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new te(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(r,t)};Ht.prototype.addDrawCall=function(r,t,e){e!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,t)};Ht.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ht.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ht.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};Ht.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Ht.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});sr.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Wr:ji),this};sr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ci.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Ci.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Ci.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Gc.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(fe.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new mt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===pl}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(On.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});Ut.prototype.clearTarget=function(r,t,e,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(t,e,n)};Ut.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};Ut.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ut.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ut.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ut.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ut.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ut.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ut.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ut.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ut.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ut.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ut.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ut.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ut.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};Ut.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ut.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ut.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ut.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ut.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ut.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ut.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ut.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ut.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ut.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ut.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?Gr:_e}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Hc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Ee.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});B_.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new I_().load(r,function(n){t.setBuffer(n)}),this};qo.prototype.updateCubeMap=function(r,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,t)};qo.prototype.clear=function(r,t,e,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,t,e,n)};si.crossOrigin=void 0;si.loadTexture=function(r,t,e,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new b_;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,e,void 0,n);return t&&(s.mapping=t),s};si.loadTextureCube=function(r,t,e,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new M_;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,e,void 0,n);return t&&(s.mapping=t),s};si.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};si.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);const Vu=0,K_=1,t0=2,Hu=2,ku=1.25,e0=1,Os=6*4+4+4,Ea=65535,n0=Math.pow(2,-24);class Us{constructor(){}}function Ve(r,t,e){return e.min.x=t[r],e.min.y=t[r+1],e.min.z=t[r+2],e.max.x=t[r+3],e.max.y=t[r+4],e.max.z=t[r+5],e}function Gu(r){let t=-1,e=-1/0;for(let n=0;n<3;n++){const i=r[n+3]-r[n];i>e&&(e=i,t=n)}return t}function Wu(r,t){t.set(r)}function qu(r,t,e){let n,i;for(let s=0;s<3;s++){const o=s+3;n=r[s],i=t[s],e[s]=n<i?n:i,n=r[o],i=t[o],e[o]=n>i?n:i}}function Aa(r){const t=r[3]-r[0],e=r[4]-r[1],n=r[5]-r[2];return 2*(t*e+e*n+n*t)}function i0(r,t){if(!r.index){const e=r.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;let i;e>65535?i=new Uint32Array(new n(4*e)):i=new Uint16Array(new n(2*e)),r.setIndex(new te(i,1));for(let s=0;s<e;s++)i[s]=s}}function r0(r){if(!r.groups||!r.groups.length)return[{offset:0,count:r.index.count/3}];const t=[],e=new Set;for(const i of r.groups)e.add(i.start),e.add(i.start+i.count);const n=Array.from(e.values()).sort((i,s)=>i-s);for(let i=0;i<n.length-1;i++){const s=n[i],o=n[i+1];t.push({offset:s/3,count:(o-s)/3})}return t}function La(r,t,e,n,i=null){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,d=1/0,h=1/0,f=1/0,g=-1/0,x=-1/0,y=-1/0;const m=i!==null;for(let p=t*6,M=(t+e)*6;p<M;p+=6){const _=r[p+0],b=r[p+1],E=_-b,v=_+b;E<s&&(s=E),v>l&&(l=v),m&&_<d&&(d=_),m&&_>g&&(g=_);const R=r[p+2],D=r[p+3],I=R-D,C=R+D;I<o&&(o=I),C>c&&(c=C),m&&R<h&&(h=R),m&&R>x&&(x=R);const X=r[p+4],F=r[p+5],N=X-F,O=X+F;N<a&&(a=N),O>u&&(u=O),m&&X<f&&(f=X),m&&X>y&&(y=X)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=u,m&&(i[0]=d,i[1]=h,i[2]=f,i[3]=g,i[4]=x,i[5]=y)}function s0(r,t,e,n){let i=1/0,s=1/0,o=1/0,a=-1/0,l=-1/0,c=-1/0;for(let u=t*6,d=(t+e)*6;u<d;u+=6){const h=r[u+0];h<i&&(i=h),h>a&&(a=h);const f=r[u+2];f<s&&(s=f),f>l&&(l=f);const g=r[u+4];g<o&&(o=g),g>c&&(c=g)}n[0]=i,n[1]=s,n[2]=o,n[3]=a,n[4]=l,n[5]=c}function o0(r,t,e,n,i){let s=e,o=e+n-1;const a=i.pos,l=i.axis*2;for(;;){for(;s<=o&&t[s*6+l]<a;)s++;for(;s<=o&&t[o*6+l]>=a;)o--;if(s<o){for(let c=0;c<3;c++){let u=r[s*3+c];r[s*3+c]=r[o*3+c],r[o*3+c]=u;let d=t[s*6+c*2+0];t[s*6+c*2+0]=t[o*6+c*2+0],t[o*6+c*2+0]=d;let h=t[s*6+c*2+1];t[s*6+c*2+1]=t[o*6+c*2+1],t[o*6+c*2+1]=h}s++,o--}else return s}}const vn=32,Gn=new Array(vn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),candidate:0})),Vs=new Float32Array(6);function a0(r,t,e,n,i,s){let o=-1,a=0;if(s===Vu)o=Gu(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===K_)o=Gu(r),o!==-1&&(a=l0(e,n,i,o));else if(s===t0){const l=Aa(r);let c=ku*i;const u=n*6,d=(n+i)*6;for(let h=0;h<3;h++){const f=t[h],y=(t[h+3]-f)/vn;for(let M=0;M<vn;M++){const _=Gn[M];_.count=0,_.candidate=f+y+M*y;const b=_.bounds;for(let E=0;E<3;E++)b[E]=1/0,b[E+3]=-1/0}for(let M=u;M<d;M+=6){let E=~~((e[M+2*h]-f)/y);E>=vn&&(E=vn-1);const v=Gn[E];v.count++;const R=v.bounds;for(let D=0;D<3;D++){const I=e[M+2*D],C=e[M+2*D+1],X=I-C,F=I+C;X<R[D]&&(R[D]=X),F>R[D+3]&&(R[D+3]=F)}}const m=Gn[vn-1];Wu(m.bounds,m.rightCacheBounds);for(let M=vn-2;M>=0;M--){const _=Gn[M],b=Gn[M+1];qu(_.bounds,b.rightCacheBounds,_.rightCacheBounds)}let p=0;for(let M=0;M<vn-1;M++){const _=Gn[M],b=_.count,E=_.bounds,R=Gn[M+1].rightCacheBounds;b!==0&&(p===0?Wu(E,Vs):qu(E,Vs,Vs)),p+=b;let D=0,I=0;p!==0&&(D=Aa(Vs)/l);const C=i-p;C!==0&&(I=Aa(R)/l);const X=e0+ku*(D*p+I*C);X<c&&(o=h,c=X,a=_.candidate)}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function l0(r,t,e,n){let i=0;for(let s=t,o=t+e;s<o;s++)i+=r[s*6+n*2];return i/e}function c0(r,t){const e=r.attributes.position,n=e.array,i=r.index.array,s=i.length/3,o=new Float32Array(s*6),a=e.offset||0;let l=3;e.isInterleavedBufferAttribute&&(l=e.data.stride);for(let c=0;c<s;c++){const u=c*3,d=c*6,h=i[u+0]*l+a,f=i[u+1]*l+a,g=i[u+2]*l+a;for(let x=0;x<3;x++){const y=n[h+x],m=n[f+x],p=n[g+x];let M=y;m<M&&(M=m),p<M&&(M=p);let _=y;m>_&&(_=m),p>_&&(_=p);const b=(_-M)/2,E=x*2;o[d+E+0]=M+b,o[d+E+1]=b+(Math.abs(M)+b)*n0,M<t[x]&&(t[x]=M),_>t[x+3]&&(t[x+3]=_)}}return o}function u0(r,t){function e(g,x,y,m=null,p=0){if(!d&&p>=a&&(d=!0,l&&(console.warn(`MeshBVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`),console.warn(r))),y<=c||p>=a)return g.offset=x,g.count=y,g;const M=a0(g.boundingData,m,s,x,y,u);if(M.axis===-1)return g.offset=x,g.count=y,g;const _=o0(o,s,x,y,M);if(_===x||_===x+y)g.offset=x,g.count=y;else{g.splitAxis=M.axis;const b=new Us,E=x,v=_-x;g.left=b,b.boundingData=new Float32Array(6),La(s,E,v,b.boundingData,i),e(b,E,v,i,p+1);const R=new Us,D=_,I=y-v;g.right=R,R.boundingData=new Float32Array(6),La(s,D,I,R.boundingData,i),e(R,D,I,i,p+1)}return g}i0(r,t);const n=new Float32Array(6),i=new Float32Array(6),s=c0(r,n),o=r.index.array,a=t.maxDepth,l=t.verbose,c=t.maxLeafTris,u=t.strategy;let d=!1;const h=[],f=r0(r);if(f.length===1){const g=f[0],x=new Us;x.boundingData=n,s0(s,g.offset,g.count,i),e(x,g.offset,g.count,i),h.push(x)}else for(let g of f){const x=new Us;x.boundingData=new Float32Array(6),La(s,g.offset,g.count,x.boundingData,i),e(x,g.offset,g.count,i),h.push(x)}return h}function h0(r,t){const e=u0(r,t);let n,i,s;const o=[],a=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let u=0;u<e.length;u++){const d=e[u];let h=l(d);const f=new a(Os*h);n=new Float32Array(f),i=new Uint32Array(f),s=new Uint16Array(f),c(0,d),o.push(f)}return o;function l(u){return u.count?1:1+l(u.left)+l(u.right)}function c(u,d){const h=u/4,f=u/2,g=!!d.count,x=d.boundingData;for(let y=0;y<6;y++)n[h+y]=x[y];if(g){const y=d.offset,m=d.count;return i[h+6]=y,s[f+14]=m,s[f+15]=Ea,u+Os}else{const y=d.left,m=d.right,p=d.splitAxis;let M;if(M=c(u+Os,y),M/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return i[h+6]=M/4,M=c(M,m),i[h+7]=p,M}}}class He{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let s=0,o=t.length;s<o;s++){const l=t[s][e];n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let s=0,o=e.length;s<o;s++){const a=e[s],l=t.dot(a);n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}}He.prototype.setFromBox=function(){const r=new w;return function(e,n){const i=n.min,s=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){r.x=i.x*l+s.x*(1-l),r.y=i.y*c+s.y*(1-c),r.z=i.z*u+s.z*(1-u);const d=e.dot(r);o=Math.min(d,o),a=Math.max(d,a)}this.min=o,this.max=a}}();(function(){const r=new He;return function(e,n){const i=e.points,s=e.satAxes,o=e.satBounds,a=n.points,l=n.satAxes,c=n.satBounds;for(let u=0;u<3;u++){const d=o[u],h=s[u];if(r.setFromPoints(h,a),d.isSeparated(r))return!1}for(let u=0;u<3;u++){const d=c[u],h=l[u];if(r.setFromPoints(h,i),d.isSeparated(r))return!1}}})();const d0=function(){const r=new w,t=new w,e=new w;return function(i,s,o){const a=i.start,l=r,c=s.start,u=t;e.subVectors(a,c),r.subVectors(i.end,s.start),t.subVectors(s.end,s.start);const d=e.dot(u),h=u.dot(l),f=u.dot(u),g=e.dot(l),y=l.dot(l)*f-h*h;let m,p;y!==0?m=(d*h-g*f)/y:m=0,p=(d+m*h)/f,o.x=m,o.y=p}}(),Ca=function(){const r=new Z,t=new w,e=new w;return function(i,s,o,a){d0(i,s,r);let l=r.x,c=r.y;if(l>=0&&l<=1&&c>=0&&c<=1){i.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?i.at(0,o):i.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=i.start:u=i.end;let d;c<0?d=s.start:d=s.end;const h=t,f=e;if(i.closestPointToPoint(d,!0,t),s.closestPointToPoint(u,!0,e),h.distanceToSquared(d)<=f.distanceToSquared(u)){o.copy(h),a.copy(d);return}else{o.copy(u),a.copy(f);return}}}}(),f0=function(){const r=new w,t=new w,e=new Fe,n=new Ue;return function(s,o){const{radius:a,center:l}=s,{a:c,b:u,c:d}=o;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a||(n.start=c,n.end=d,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a)||(n.start=u,n.end=d,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a))return!0;const x=o.getPlane(e);if(Math.abs(x.distanceToPoint(l))<=a){const m=x.projectPoint(l,t);if(o.containsPoint(m))return!0}return!1}}();class Qe extends Xt{constructor(...t){super(...t);this.isSeparatingAxisTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new w),this.satBounds=new Array(4).fill().map(()=>new He),this.points=[this.a,this.b,this.c],this.sphere=new zn,this.plane=new Fe,this.needsUpdate=!1}intersectsSphere(t){return f0(t,this)}update(){const t=this.a,e=this.b,n=this.c,i=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,i);const c=s[1],u=o[1];c.subVectors(t,e),u.setFromPoints(c,i);const d=s[2],h=o[2];d.subVectors(e,n),h.setFromPoints(d,i);const f=s[3],g=o[3];f.subVectors(n,t),g.setFromPoints(f,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Qe.prototype.closestPointToSegment=function(){const r=new w,t=new w,e=new Ue;return function(i,s=null,o=null){const{start:a,end:l}=i,c=this.points;let u,d=1/0;for(let h=0;h<3;h++){const f=(h+1)%3;e.start.copy(c[h]),e.end.copy(c[f]),Ca(e,i,r,t),u=r.distanceToSquared(t),u<d&&(d=u,s&&s.copy(r),o&&o.copy(t))}return this.closestPointToPoint(a,r),u=a.distanceToSquared(r),u<d&&(d=u,s&&s.copy(r),o&&o.copy(a)),this.closestPointToPoint(l,r),u=l.distanceToSquared(r),u<d&&(d=u,s&&s.copy(r),o&&o.copy(l)),Math.sqrt(d)}}();Qe.prototype.intersectsTriangle=function(){const r=new Qe,t=new Array(3),e=new Array(3),n=new He,i=new He,s=new w,o=new w,a=new w,l=new w,c=new Ue,u=new Ue,d=new Ue;return function(f,g=null){this.needsUpdate&&this.update(),f.isSeparatingAxisTriangle?f.needsUpdate&&f.update():(r.copy(f),r.update(),f=r);const x=this.satBounds,y=this.satAxes;e[0]=f.a,e[1]=f.b,e[2]=f.c;for(let M=0;M<4;M++){const _=x[M],b=y[M];if(n.setFromPoints(b,e),_.isSeparated(n))return!1}const m=f.satBounds,p=f.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let M=0;M<4;M++){const _=m[M],b=p[M];if(n.setFromPoints(b,t),_.isSeparated(n))return!1}for(let M=0;M<4;M++){const _=y[M];for(let b=0;b<4;b++){const E=p[b];if(s.crossVectors(_,E),n.setFromPoints(s,t),i.setFromPoints(s,e),n.isSeparated(i))return!1}}if(g){const M=this.plane,_=f.plane;if(Math.abs(M.normal.dot(_.normal))>1-1e-10)console.warn("SeparatingAxisTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),g.start.set(0,0,0),g.end.set(0,0,0);else{const b=this.points;let E=!1;for(let D=0;D<3;D++){const I=b[D],C=b[(D+1)%3];if(c.start.copy(I),c.end.copy(C),_.intersectLine(c,E?u.start:u.end)){if(E)break;E=!0}}const v=f.points;let R=!1;for(let D=0;D<3;D++){const I=v[D],C=v[(D+1)%3];if(c.start.copy(I),c.end.copy(C),M.intersectLine(c,R?d.start:d.end)){if(R)break;R=!0}}if(u.delta(o),d.delta(a),o.dot(a)<0){let D=d.start;d.start=d.end,d.end=D}l.subVectors(u.start,d.start),l.dot(o)>0?g.start.copy(u.start):g.start.copy(d.start),l.subVectors(u.end,d.end),l.dot(o)<0?g.end.copy(u.end):g.end.copy(d.end)}}return!0}}();Qe.prototype.distanceToPoint=function(){const r=new w;return function(e){return this.closestPointToPoint(e,r),e.distanceTo(r)}}();Qe.prototype.distanceToTriangle=function(){const r=new w,t=new w,e=["a","b","c"],n=new Ue,i=new Ue;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let d=0;d<3;d++){let h;const f=e[d],g=o[f];this.closestPointToPoint(g,r),h=g.distanceToSquared(r),h<u&&(u=h,a&&a.copy(r),l&&l.copy(g));const x=this[f];o.closestPointToPoint(x,r),h=x.distanceToSquared(r),h<u&&(u=h,a&&a.copy(x),l&&l.copy(r))}for(let d=0;d<3;d++){const h=e[d],f=e[(d+1)%3];n.set(this[h],this[f]);for(let g=0;g<3;g++){const x=e[g],y=e[(g+1)%3];i.set(o[x],o[y]),Ca(n,i,r,t);const m=r.distanceToSquared(t);m<u&&(u=m,a&&a.copy(r),l&&l.copy(t))}}return Math.sqrt(u)}}();class ke extends se{constructor(...t){super(...t);this.isOrientedBox=!0,this.matrix=new gt,this.invMatrix=new gt,this.points=new Array(8).fill().map(()=>new w),this.satAxes=new Array(3).fill().map(()=>new w),this.satBounds=new Array(3).fill().map(()=>new He),this.alignedSatBounds=new Array(3).fill().map(()=>new He),this.needsUpdate=!1}set(t,e,n){super.set(t,e),this.matrix=n,this.needsUpdate=!0}copy(t){super.copy(t),this.matrix.copy(t.matrix),this.needsUpdate=!0}}ke.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,i=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){const h=(1<<0)*c|(1<<1)*u|(1<<2)*d,f=i[h];f.x=c?n.x:e.x,f.y=u?n.y:e.y,f.z=d?n.z:e.z,f.applyMatrix4(t)}const s=this.satBounds,o=this.satAxes,a=i[0];for(let c=0;c<3;c++){const u=o[c],d=s[c],h=1<<c,f=i[h];u.subVectors(a,f),d.setFromPoints(u,i)}const l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();ke.prototype.intersectsBox=function(){const r=new He;return function(e){this.needsUpdate&&this.update();const n=e.min,i=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(r.min=n.x,r.max=i.x,a[0].isSeparated(r)||(r.min=n.y,r.max=i.y,a[1].isSeparated(r))||(r.min=n.z,r.max=i.z,a[2].isSeparated(r)))return!1;for(let l=0;l<3;l++){const c=o[l],u=s[l];if(r.setFromBox(c,e),u.isSeparated(r))return!1}return!0}}();ke.prototype.intersectsTriangle=function(){const r=new Qe,t=new Array(3),e=new He,n=new He,i=new w;return function(o){this.needsUpdate&&this.update(),o.isSeparatingAxisTriangle?o.needsUpdate&&o.update():(r.copy(o),r.update(),o=r);const a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let h=0;h<3;h++){const f=a[h],g=l[h];if(e.setFromPoints(g,t),f.isSeparated(e))return!1}const c=o.satBounds,u=o.satAxes,d=this.points;for(let h=0;h<3;h++){const f=c[h],g=u[h];if(e.setFromPoints(g,d),f.isSeparated(e))return!1}for(let h=0;h<3;h++){const f=l[h];for(let g=0;g<4;g++){const x=u[g];if(i.crossVectors(f,x),e.setFromPoints(i,t),n.setFromPoints(i,d),e.isSeparated(n))return!1}}return!0}}();ke.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();ke.prototype.distanceToPoint=function(){const r=new w;return function(e){return this.closestPointToPoint(e,r),e.distanceTo(r)}}();ke.prototype.distanceToBox=function(){const r=["x","y","z"],t=new Array(12).fill().map(()=>new Ue),e=new Array(12).fill().map(()=>new Ue),n=new w,i=new w;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),l&&l.copy(n),c&&c.copy(i)),0;const u=a*a,d=o.min,h=o.max,f=this.points;let g=1/0;for(let y=0;y<8;y++){const m=f[y];i.copy(m).clamp(d,h);const p=m.distanceToSquared(i);if(p<g&&(g=p,l&&l.copy(m),c&&c.copy(i),p<u))return Math.sqrt(p)}let x=0;for(let y=0;y<3;y++)for(let m=0;m<=1;m++)for(let p=0;p<=1;p++){const M=(y+1)%3,_=(y+2)%3,b=m<<M|p<<_,E=1<<y|m<<M|p<<_,v=f[b],R=f[E];t[x].set(v,R);const I=r[y],C=r[M],X=r[_],F=e[x],N=F.start,O=F.end;N[I]=d[I],N[C]=m?d[C]:h[C],N[X]=p?d[X]:h[C],O[I]=h[I],O[C]=m?d[C]:h[C],O[X]=p?d[X]:h[C],x++}for(let y=0;y<=1;y++)for(let m=0;m<=1;m++)for(let p=0;p<=1;p++){i.x=y?h.x:d.x,i.y=m?h.y:d.y,i.z=p?h.z:d.z,this.closestPointToPoint(i,n);const M=i.distanceToSquared(n);if(M<g&&(g=M,l&&l.copy(n),c&&c.copy(i),M<u))return Math.sqrt(M)}for(let y=0;y<12;y++){const m=t[y];for(let p=0;p<12;p++){const M=e[p];Ca(m,M,n,i);const _=n.distanceToSquared(i);if(_<g&&(g=_,l&&l.copy(n),c&&c.copy(i),_<u))return Math.sqrt(_)}}return Math.sqrt(g)}}();const Hs=new w,ks=new w,Gs=new w,Xu=new Z,ju=new Z,Yu=new Z,Zu=new w;function p0(r,t,e,n,i,s){let o;return s===ie?o=r.intersectTriangle(n,e,t,!0,i):o=r.intersectTriangle(t,e,n,s!==Pn,i),o===null?null:{distance:r.origin.distanceTo(i),point:i.clone()}}function m0(r,t,e,n,i,s,o){Hs.fromBufferAttribute(t,n),ks.fromBufferAttribute(t,i),Gs.fromBufferAttribute(t,s);const a=p0(r,Hs,ks,Gs,Zu,o);if(a){e&&(Xu.fromBufferAttribute(e,n),ju.fromBufferAttribute(e,i),Yu.fromBufferAttribute(e,s),a.uv=Xt.getUV(Zu,Hs,ks,Gs,Xu,ju,Yu,new Z));const l={a:n,b:i,c:s,normal:new w,materialIndex:0};Xt.getNormal(Hs,ks,Gs,l.normal),a.face=l,a.faceIndex=n}return a}function $u(r,t,e,n,i){const s=n*3,o=r.index.getX(s),a=r.index.getX(s+1),l=r.index.getX(s+2),c=m0(e,r.attributes.position,r.attributes.uv,o,a,l,t);return c?(c.faceIndex=n,i&&i.push(c),c):null}function g0(r,t,e,n,i,s){for(let o=n,a=n+i;o<a;o++)$u(r,t,e,o,s)}function x0(r,t,e,n,i){let s=1/0,o=null;for(let a=n,l=n+i;a<l;a++){const c=$u(r,t,e,a);c&&c.distance<s&&(o=c,s=c.distance)}return o}function Ws(r,t,e){return r===null||(r.point.applyMatrix4(t.matrixWorld),r.distance=r.point.distanceTo(e.ray.origin),r.object=t,r.distance<e.near||r.distance>e.far)?null:r}function Ge(r,t,e,n){const i=r.a,s=r.b,o=r.c;let a=t,l=t+1,c=t+2;e&&(a=e.getX(t),l=e.getX(t+1),c=e.getX(t+2)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function Ju(r,t,e,n,i,s,o){const a=e.index,l=e.attributes.position;for(let c=r,u=t+r;c<u;c++)if(Ge(o,c*3,a,l),o.needsUpdate=!0,n(o,c,i,s))return!0;return!1}class Qu{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}function Mn(r,t){return t[r+15]===65535}function Ii(r,t){return t[r+6]}function vr(r,t){return t[r+14]}function Mr(r){return r+8}function br(r,t){return t[r+6]}function y0(r,t){return t[r+7]}function bn(r){return r}const Fi=new se,qs=new w,_0=["x","y","z"];function Ra(r,t,e,n,i){let s=r*2,o=Ni,a=wn,l=Sn;if(Mn(s,a)){const u=Ii(r,l),d=vr(s,a);g0(t,e,n,u,d,i)}else{const u=Mr(r);Xs(u,o,n,qs)&&Ra(u,t,e,n,i);const d=br(r,l);Xs(d,o,n,qs)&&Ra(d,t,e,n,i)}}function Pa(r,t,e,n){let i=r*2,s=Ni,o=wn,a=Sn;if(Mn(i,o)){const c=Ii(r,a),u=vr(i,o);return x0(t,e,n,c,u)}else{const c=y0(r,a),u=_0[c],h=n.direction[u]>=0;let f,g;h?(f=Mr(r),g=br(r,a)):(f=br(r,a),g=Mr(r));const y=Xs(f,s,n,qs)?Pa(f,t,e,n):null;if(y){const M=y.point[u];if(h?M<=s[g+c]:M>=s[g+c+3])return y}const p=Xs(g,s,n,qs)?Pa(g,t,e,n):null;return y&&p?y.distance<=p.distance?y:p:y||p||null}}const v0=function(){let r,t;const e=[],n=new Qu(()=>new se);return function(...o){r=n.getPrimitive(),t=n.getPrimitive(),e.push(r,t);const a=i(...o);n.releasePrimitive(r),n.releasePrimitive(t),e.pop(),e.pop();const l=e.length;return l>0&&(t=e[l-1],r=e[l-2]),a};function i(s,o,a,l,c=null,u=0,d=0){function h(M){let _=M*2,b=wn,E=Sn;for(;!Mn(_,b);)M=Mr(M),_=M*2;return Ii(M,E)}function f(M){let _=M*2,b=wn,E=Sn;for(;!Mn(_,b);)M=br(M,E),_=M*2;return Ii(M,E)+vr(_,b)}let g=s*2,x=Ni,y=wn,m=Sn;if(Mn(g,y)){const M=Ii(s,m),_=vr(g,y);return Ve(bn(s),x,r),l(M,_,!1,d,u+s,r)}else{const M=Mr(s),_=br(s,m);let b=M,E=_,v,R,D,I;if(c&&(D=r,I=t,Ve(bn(b),x,D),Ve(bn(E),x,I),v=c(D),R=c(I),R<v)){b=_,E=M;const U=v;v=R,R=U,D=I}D||(D=r,Ve(bn(b),x,D));const C=Mn(b*2,y),X=a(D,C,v,d+1,u+b);let F;if(X===Hu){const U=h(b),ot=f(b)-U;F=l(U,ot,!0,d+1,u+b,D)}else F=X&&i(b,o,a,l,c,u,d+1);if(F)return!0;I=t,Ve(bn(E),x,I);const N=Mn(E*2,y),O=a(I,N,R,d+1,u+E);let B;if(O===Hu){const U=h(E),ot=f(E)-U;B=l(U,ot,!0,d+1,u+E,I)}else B=O&&i(E,o,a,l,c,u,d+1);return!!B}}}(),M0=function(){const r=new Qe,t=new Qe,e=new gt,n=new ke,i=new ke;return function s(o,a,l,c,u=null){let d=o*2,h=Ni,f=wn,g=Sn;if(u===null&&(l.boundingBox||l.computeBoundingBox(),n.set(l.boundingBox.min,l.boundingBox.max,c),u=n),Mn(d,f)){const y=a,m=y.index,p=y.attributes.position,M=l.index,_=l.attributes.position,b=Ii(o,g),E=vr(d,f);if(e.copy(c).invert(),l.boundsTree)return Ve(bn(o),h,i),i.matrix.copy(e),i.needsUpdate=!0,l.boundsTree.shapecast({intersectsBounds:R=>i.intersectsBox(R),intersectsTriangle:R=>{R.a.applyMatrix4(c),R.b.applyMatrix4(c),R.c.applyMatrix4(c),R.needsUpdate=!0;for(let D=b*3,I=(E+b)*3;D<I;D+=3)if(Ge(t,D,m,p),t.needsUpdate=!0,R.intersectsTriangle(t))return!0;return!1}});for(let v=b*3,R=E+b*3;v<R;v+=3){Ge(r,v,m,p),r.a.applyMatrix4(e),r.b.applyMatrix4(e),r.c.applyMatrix4(e),r.needsUpdate=!0;for(let D=0,I=M.count;D<I;D+=3)if(Ge(t,D,M,_),t.needsUpdate=!0,r.intersectsTriangle(t))return!0}}else{const y=o+8,m=g[o+6];return Ve(bn(y),h,Fi),!!(u.intersectsBox(Fi)&&s(y,a,l,c,u)||(Ve(bn(m),h,Fi),u.intersectsBox(Fi)&&s(m,a,l,c,u)))}}}();function Xs(r,t,e,n){return Ve(r,t,Fi),e.intersectBox(Fi,n)}const Da=[];let js,Ni,wn,Sn;function wr(r){js&&Da.push(js),js=r,Ni=new Float32Array(r),wn=new Uint16Array(r),Sn=new Uint32Array(r)}function Ys(){js=null,Ni=null,wn=null,Sn=null,Da.length&&wr(Da.pop())}const Ia=Symbol("skip tree generation"),Fa=new se,Na=new se,Bi=new gt,Wn=new ke,Sr=new ke,Tr=new w,Zs=new w,b0=new w,w0=new w,S0=new w,Ku=new se,We=new Qu(()=>new Qe);class ue{static serialize(t,e={}){if(e.isBufferGeometry)return console.warn("MeshBVH.serialize: The arguments for the function have changed. See documentation for new signature."),ue.serialize(arguments[0],{cloneBuffers:arguments[2]===void 0?!0:arguments[2]});e=Ui({cloneBuffers:!0},e);const n=t.geometry,i=t._roots,s=n.getIndex();let o;return e.cloneBuffers?o={roots:i.map(a=>a.slice()),index:s.array.slice()}:o={roots:i,index:s.array},o}static deserialize(t,e,n={}){if(typeof n=="boolean")return console.warn("MeshBVH.deserialize: The arguments for the function have changed. See documentation for new signature."),ue.deserialize(arguments[0],arguments[1],{setIndex:arguments[2]===void 0?!0:arguments[2]});n=Ui({setIndex:!0},n);const{index:i,roots:s}=t,o=new ue(e,qa(Ui({},n),{[Ia]:!0}));if(o._roots=s,n.setIndex){const a=e.getIndex();if(a===null){const l=new te(t.index,1,!1);e.setIndex(l)}else a.array!==i&&(a.array.set(i),a.needsUpdate=!0)}return o}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({strategy:Vu,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,[Ia]:!1},e),e.useSharedArrayBuffer&&typeof SharedArrayBuffer=="undefined")throw new Error("MeshBVH: SharedArrayBuffer is not available.");this._roots=null,e[Ia]||(this._roots=h0(t,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new se))),this.geometry=t}refit(t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=this.geometry,n=e.index.array,i=e.attributes.position,s=i.array,o=i.offset||0;let a=3;i.isInterleavedBufferAttribute&&(a=i.data.stride);let l,c,u,d,h=0;const f=this._roots;for(let x=0,y=f.length;x<y;x++)l=f[x],c=new Uint32Array(l),u=new Uint16Array(l),d=new Float32Array(l),g(0,h),h+=l.byteLength;function g(x,y,m=!1){const p=x*2;if(u[p+15]===Ea){const _=c[x+6],b=u[p+14];let E=1/0,v=1/0,R=1/0,D=-1/0,I=-1/0,C=-1/0;for(let X=3*_,F=3*(_+b);X<F;X++){const N=n[X]*a+o,O=s[N+0],B=s[N+1],U=s[N+2];O<E&&(E=O),O>D&&(D=O),B<v&&(v=B),B>I&&(I=B),U<R&&(R=U),U>C&&(C=U)}return d[x+0]!==E||d[x+1]!==v||d[x+2]!==R||d[x+3]!==D||d[x+4]!==I||d[x+5]!==C?(d[x+0]=E,d[x+1]=v,d[x+2]=R,d[x+3]=D,d[x+4]=I,d[x+5]=C,!0):!1}else{const _=x+8,b=c[x+6],E=_+y,v=b+y;let R=m,D=!1,I=!1;t?R||(D=t.has(E),I=t.has(v),R=!D&&!I):(D=!0,I=!0);const C=R||D,X=R||I;let F=!1;C&&(F=g(_,y,R));let N=!1;X&&(N=g(b,y,R));const O=F||N;if(O)for(let B=0;B<3;B++){const U=_+B,tt=b+B,ot=d[U],W=d[U+3],q=d[tt],ct=d[tt+3];d[x+B]=ot<q?ot:q,d[x+B+3]=W>ct?W:ct}return O}}}traverse(t,e=0){const n=this._roots[e],i=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(a,l=0){const c=a*2,u=s[c+15]===Ea;if(u){const d=i[a+6],h=s[c+14];t(l,u,new Float32Array(n,a*4,6),d,h)}else{const d=a+Os/4,h=i[a+6],f=i[a+7];t(l,u,new Float32Array(n,a*4,6),f)||(o(d,l+1),o(h,l+1))}}}raycast(t,e=Rn){const n=this._roots,i=this.geometry,s=[],o=e.isMaterial,a=Array.isArray(e),l=i.groups,c=o?e.side:e;for(let u=0,d=n.length;u<d;u++){const h=a?e[l[u].materialIndex].side:c,f=s.length;if(wr(n[u]),Ra(0,i,h,t,s),Ys(),a){const g=l[u].materialIndex;for(let x=f,y=s.length;x<y;x++)s[x].face.materialIndex=g}}return s}raycastFirst(t,e=Rn){const n=this._roots,i=this.geometry,s=e.isMaterial,o=Array.isArray(e);let a=null;const l=i.groups,c=s?e.side:e;for(let u=0,d=n.length;u<d;u++){const h=o?e[l[u].materialIndex].side:c;wr(n[u]);const f=Pa(0,i,h,t);Ys(),f!=null&&(a==null||f.distance<a.distance)&&(a=f,o&&(f.face.materialIndex=l[u].materialIndex))}return a}intersectsGeometry(t,e){const n=this.geometry;let i=!1;for(const s of this._roots)if(wr(s),i=M0(0,n,t,e),Ys(),i)break;return i}shapecast(t,e,n){const i=this.geometry;if(t instanceof Function){if(e){const h=e;e=(f,g,x,y)=>{const m=g*3;return h(f,m,m+1,m+2,x,y)}}t={boundsTraverseOrder:n,intersectsBounds:t,intersectsTriangle:e,intersectsRange:null},console.warn("MeshBVH: Shapecast function signature has changed and now takes an object of callbacks as a second argument. See docs for new signature.")}const s=We.getPrimitive();let{boundsTraverseOrder:o,intersectsBounds:a,intersectsRange:l,intersectsTriangle:c}=t;if(l&&c){const h=l;l=(f,g,x,y,m)=>h(f,g,x,y,m)?!0:Ju(f,g,i,c,x,y,s)}else l||(c?l=(h,f,g,x)=>Ju(h,f,i,c,g,x,s):l=(h,f,g)=>g);let u=!1,d=0;for(const h of this._roots){if(wr(h),u=v0(0,i,a,l,o,d),Ys(),u)break;d+=h.byteLength}return We.releasePrimitive(s),u}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:s}=n;const o=t.geometry,a=o.index,l=o.attributes.position;Bi.copy(e).invert();const c=We.getPrimitive(),u=We.getPrimitive();if(s){let h=function(f,g,x,y,m,p,M,_){for(let b=x,E=x+y;b<E;b++){Ge(u,b*3,a,l),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let v=f,R=f+g;v<R;v++)if(Ge(c,v*3,a,l),c.needsUpdate=!0,s(c,u,v,b,m,p,M,_))return!0}return!1};if(i){const f=i;i=function(g,x,y,m,p,M,_,b){return f(g,x,y,m,p,M,_,b)?!0:h(g,x,y,m,p,M,_,b)}}else i=h}this.getBoundingBox(Na),Na.applyMatrix4(e);const d=this.shapecast({intersectsBounds:h=>Na.intersectsBox(h),intersectsRange:(h,f,g,x,y,m)=>(Fa.copy(m),Fa.applyMatrix4(Bi),t.shapecast({intersectsBounds:p=>Fa.intersectsBox(p),intersectsRange:(p,M,_,b,E)=>i(h,f,p,M,x,y,b,E)}))});return We.releasePrimitive(c),We.releasePrimitive(u),d}intersectsBox(t,e){return Wn.set(t.min,t.max,e),Wn.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Wn.intersectsBox(n),intersectsTriangle:n=>Wn.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Wn.set(t.boundingBox.min,t.boundingBox.max,e),Wn.needsUpdate=!0;const a=this.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,d=t.index,h=We.getPrimitive(),f=We.getPrimitive();let g=Zs,x=b0,y=null,m=null;i&&(y=w0,m=S0);let p=1/0,M=null,_=null;return Bi.copy(e).invert(),Sr.matrix.copy(Bi),this.shapecast({boundsTraverseOrder:b=>Wn.distanceToBox(b,Math.min(p,o)),intersectsBounds:(b,E,v)=>v<p&&v<o?(E&&(Sr.min.copy(b.min),Sr.max.copy(b.max),Sr.needsUpdate=!0),!0):!1,intersectsRange:(b,E)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:v=>Sr.distanceToBox(v,Math.min(p,o)),intersectsBounds:(v,R,D)=>D<p&&D<o,intersectsRange:(v,R)=>{for(let D=v*3,I=(v+R)*3;D<I;D+=3){Ge(f,D,d,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let C=b*3,X=(b+E)*3;C<X;C+=3){Ge(h,C,c,l),h.needsUpdate=!0;const F=h.distanceToTriangle(f,g,y);if(F<p&&(x.copy(g),m&&m.copy(y),p=F,M=C/3,_=D/3),F<s)return!0}}}});{const v=d?d.count:u.count;for(let R=0,D=v;R<D;R+=3){Ge(f,R,d,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let I=b*3,C=(b+E)*3;I<C;I+=3){Ge(h,I,c,l),h.needsUpdate=!0;const X=h.distanceToTriangle(f,g,y);if(X<p&&(x.copy(g),m&&m.copy(y),p=X,M=I/3,_=R/3),X<s)return!0}}}}}),We.releasePrimitive(h),We.releasePrimitive(f),p===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=p,n.faceIndex=M,i&&(i.point?i.point.copy(m):i.point=m.clone(),i.point.applyMatrix4(Bi),x.applyMatrix4(Bi),i.distance=x.sub(i.point).length(),i.faceIndex=_),n)}closestPointToPoint(t,e={},n=0,i=1/0){const s=n*n,o=i*i;let a=1/0,l=null;if(this.shapecast({boundsTraverseOrder:u=>(Tr.copy(t).clamp(u.min,u.max),Tr.distanceToSquared(t)),intersectsBounds:(u,d,h)=>h<a&&h<o,intersectsTriangle:(u,d)=>{u.closestPointToPoint(t,Tr);const h=t.distanceToSquared(Tr);return h<a&&(Zs.copy(Tr),a=h,l=d),h<s}}),a===1/0)return null;const c=Math.sqrt(a);return e.point?e.point.copy(Zs):e.point=Zs.clone(),e.distance=c,e.faceIndex=l,e}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Ve(0,new Float32Array(n),Ku),t.union(Ku)}),t}}const th=ue.prototype.raycast;ue.prototype.raycast=function(...r){if(r[0].isMesh){console.warn('MeshBVH: The function signature and results frame for "raycast" has changed. See docs for new signature.');const[t,e,n,i]=r;return th.call(this,n,t.material).forEach(o=>{o=Ws(o,t,e),o&&i.push(o)}),i}else return th.apply(this,r)};const eh=ue.prototype.raycastFirst;ue.prototype.raycastFirst=function(...r){if(r[0].isMesh){console.warn('MeshBVH: The function signature and results frame for "raycastFirst" has changed. See docs for new signature.');const[t,e,n]=r;return Ws(eh.call(this,n,t.material),t,e)}else return eh.apply(this,r)};const nh=ue.prototype.closestPointToPoint;ue.prototype.closestPointToPoint=function(...r){if(r[0].isMesh){console.warn('MeshBVH: The function signature and results frame for "closestPointToPoint" has changed. See docs for new signature.'),r.unshift();const t=r[1],e={};return r[1]=e,nh.apply(this,r),t&&t.copy(e.point),e.distance}else return nh.apply(this,r)};const ih=ue.prototype.closestPointToGeometry;ue.prototype.closestPointToGeometry=function(...r){const t=r[2],e=r[3];if(t&&t.isVector3||e&&e.isVector3){console.warn('MeshBVH: The function signature and results frame for "closestPointToGeometry" has changed. See docs for new signature.');const n={},i={},s=r[1];return r[2]=n,r[3]=i,ih.apply(this,r),t&&t.copy(n.point),e&&e.copy(i.point).applyMatrix4(s),n.distance}else return ih.apply(this,r)};const rh=ue.prototype.refit;ue.prototype.refit=function(...r){const t=r[0],e=r[1];if(e&&(e instanceof Set||Array.isArray(e))){console.warn('MeshBVH: The function signature for "refit" has changed. See docs for new signature.');const n=new Set;e.forEach(i=>n.add(i)),t&&t.forEach(i=>n.add(i)),rh.call(this,n)}else rh.apply(this,r)};["intersectsGeometry","shapecast","intersectsBox","intersectsSphere"].forEach(r=>{const t=ue.prototype[r];ue.prototype[r]=function(...e){return(e[0]===null||e[0].isMesh)&&(e.shift(),console.warn(`MeshBVH: The function signature for "${r}" has changed and no longer takes Mesh. See docs for new signature.`)),t.apply(this,e)}});const Ba=new ln,sh=new gt,T0=xe.prototype.raycast;function Mv(r,t){if(this.geometry.boundsTree){if(this.material===void 0)return;sh.copy(this.matrixWorld).invert(),Ba.copy(r.ray).applyMatrix4(sh);const e=this.geometry.boundsTree;if(r.firstHitOnly===!0){const n=Ws(e.raycastFirst(Ba,this.material),this,r);n&&t.push(n)}else{const n=e.raycast(Ba,this.material);for(let i=0,s=n.length;i<s;i++){const o=Ws(n[i],this,r);o&&t.push(o)}}}else T0.call(this,r,t)}function bv(r){return this.boundsTree=new ue(this,r),this.boundsTree}function wv(){this.boundsTree=null}const oh={type:"change"},za={type:"start"},ah={type:"end"};class Sv extends rn{constructor(t,e){super();e===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zn.ROTATE,MIDDLE:Zn.DOLLY,RIGHT:Zn.PAN},this.touches={ONE:$n.ROTATE,TWO:$n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",L),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(oh),n.update(),s=i.NONE},this.update=function(){const A=new w,k=new de().setFromUnitVectors(t.up,new w(0,1,0)),Q=k.clone().invert(),it=new w,lt=new de,vt=2*Math.PI;return function(){const Dt=n.object.position;A.copy(Dt).sub(n.target),A.applyQuaternion(k),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&D(v()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Qt=n.minAzimuthAngle,Kt=n.maxAzimuthAngle;return isFinite(Qt)&&isFinite(Kt)&&(Qt<-Math.PI?Qt+=vt:Qt>Math.PI&&(Qt-=vt),Kt<-Math.PI?Kt+=vt:Kt>Math.PI&&(Kt-=vt),Qt<=Kt?a.theta=Math.max(Qt,Math.min(Kt,a.theta)):a.theta=a.theta>(Qt+Kt)/2?Math.max(Qt,a.theta):Math.min(Kt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(a),A.applyQuaternion(Q),Dt.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||it.distanceToSquared(n.object.position)>o||8*(1-lt.dot(n.object.quaternion))>o?(n.dispatchEvent(oh),it.copy(n.object.position),lt.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Y),n.domElement.removeEventListener("pointerdown",et),n.domElement.removeEventListener("pointercancel",Mt),n.domElement.removeEventListener("wheel",Ot),n.domElement.removeEventListener("pointermove",ut),n.domElement.removeEventListener("pointerup",rt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",L)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Nu,l=new Nu;let c=1;const u=new w;let d=!1;const h=new Z,f=new Z,g=new Z,x=new Z,y=new Z,m=new Z,p=new Z,M=new Z,_=new Z,b=[],E={};function v(){return 2*Math.PI/60/60*n.autoRotateSpeed}function R(){return Math.pow(.95,n.zoomSpeed)}function D(A){l.theta-=A}function I(A){l.phi-=A}const C=function(){const A=new w;return function(Q,it){A.setFromMatrixColumn(it,0),A.multiplyScalar(-Q),u.add(A)}}(),X=function(){const A=new w;return function(Q,it){n.screenSpacePanning===!0?A.setFromMatrixColumn(it,1):(A.setFromMatrixColumn(it,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(Q),u.add(A)}}(),F=function(){const A=new w;return function(Q,it){const lt=n.domElement;if(n.object.isPerspectiveCamera){const vt=n.object.position;A.copy(vt).sub(n.target);let kt=A.length();kt*=Math.tan(n.object.fov/2*Math.PI/180),C(2*Q*kt/lt.clientHeight,n.object.matrix),X(2*it*kt/lt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(C(Q*(n.object.right-n.object.left)/n.object.zoom/lt.clientWidth,n.object.matrix),X(it*(n.object.top-n.object.bottom)/n.object.zoom/lt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(A){n.object.isPerspectiveCamera?c/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(A){n.object.isPerspectiveCamera?c*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(A){h.set(A.clientX,A.clientY)}function U(A){p.set(A.clientX,A.clientY)}function tt(A){x.set(A.clientX,A.clientY)}function ot(A){f.set(A.clientX,A.clientY),g.subVectors(f,h).multiplyScalar(n.rotateSpeed);const k=n.domElement;D(2*Math.PI*g.x/k.clientHeight),I(2*Math.PI*g.y/k.clientHeight),h.copy(f),n.update()}function W(A){M.set(A.clientX,A.clientY),_.subVectors(M,p),_.y>0?N(R()):_.y<0&&O(R()),p.copy(M),n.update()}function q(A){y.set(A.clientX,A.clientY),m.subVectors(y,x).multiplyScalar(n.panSpeed),F(m.x,m.y),x.copy(y),n.update()}function ct(A){A.deltaY<0?O(R()):A.deltaY>0&&N(R()),n.update()}function at(A){let k=!1;switch(A.code){case n.keys.UP:F(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:F(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:F(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:F(-n.keyPanSpeed,0),k=!0;break}k&&(A.preventDefault(),n.update())}function dt(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const A=.5*(b[0].pageX+b[1].pageX),k=.5*(b[0].pageY+b[1].pageY);h.set(A,k)}}function Pt(){if(b.length===1)x.set(b[0].pageX,b[0].pageY);else{const A=.5*(b[0].pageX+b[1].pageX),k=.5*(b[0].pageY+b[1].pageY);x.set(A,k)}}function J(){const A=b[0].pageX-b[1].pageX,k=b[0].pageY-b[1].pageY,Q=Math.sqrt(A*A+k*k);p.set(0,Q)}function Tt(){n.enableZoom&&J(),n.enablePan&&Pt()}function yt(){n.enableZoom&&J(),n.enableRotate&&dt()}function ft(A){if(b.length==1)f.set(A.pageX,A.pageY);else{const Q=nt(A),it=.5*(A.pageX+Q.x),lt=.5*(A.pageY+Q.y);f.set(it,lt)}g.subVectors(f,h).multiplyScalar(n.rotateSpeed);const k=n.domElement;D(2*Math.PI*g.x/k.clientHeight),I(2*Math.PI*g.y/k.clientHeight),h.copy(f)}function xt(A){if(b.length===1)y.set(A.pageX,A.pageY);else{const k=nt(A),Q=.5*(A.pageX+k.x),it=.5*(A.pageY+k.y);y.set(Q,it)}m.subVectors(y,x).multiplyScalar(n.panSpeed),F(m.x,m.y),x.copy(y)}function Rt(A){const k=nt(A),Q=A.pageX-k.x,it=A.pageY-k.y,lt=Math.sqrt(Q*Q+it*it);M.set(0,lt),_.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),N(_.y),p.copy(M)}function G(A){n.enableZoom&&Rt(A),n.enablePan&&xt(A)}function K(A){n.enableZoom&&Rt(A),n.enableRotate&&ft(A)}function et(A){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",ut),n.domElement.addEventListener("pointerup",rt)),pt(A),A.pointerType==="touch"?T(A):bt(A))}function ut(A){n.enabled!==!1&&(A.pointerType==="touch"?$(A):Et(A))}function rt(A){ht(A),b.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",ut),n.domElement.removeEventListener("pointerup",rt)),n.dispatchEvent(ah),s=i.NONE}function Mt(A){ht(A)}function bt(A){let k;switch(A.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case Zn.DOLLY:if(n.enableZoom===!1)return;U(A),s=i.DOLLY;break;case Zn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;tt(A),s=i.PAN}else{if(n.enableRotate===!1)return;B(A),s=i.ROTATE}break;case Zn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;B(A),s=i.ROTATE}else{if(n.enablePan===!1)return;tt(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(za)}function Et(A){if(n.enabled!==!1)switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ot(A);break;case i.DOLLY:if(n.enableZoom===!1)return;W(A);break;case i.PAN:if(n.enablePan===!1)return;q(A);break}}function Ot(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(za),ct(A),n.dispatchEvent(ah))}function L(A){n.enabled===!1||n.enablePan===!1||at(A)}function T(A){switch(P(A),b.length){case 1:switch(n.touches.ONE){case $n.ROTATE:if(n.enableRotate===!1)return;dt(),s=i.TOUCH_ROTATE;break;case $n.PAN:if(n.enablePan===!1)return;Pt(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case $n.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Tt(),s=i.TOUCH_DOLLY_PAN;break;case $n.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;yt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(za)}function $(A){switch(P(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ft(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;xt(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;K(A),n.update();break;default:s=i.NONE}}function Y(A){n.enabled!==!1&&A.preventDefault()}function pt(A){b.push(A)}function ht(A){delete E[A.pointerId];for(let k=0;k<b.length;k++)if(b[k].pointerId==A.pointerId){b.splice(k,1);return}}function P(A){let k=E[A.pointerId];k===void 0&&(k=new Z,E[A.pointerId]=k),k.set(A.pageX,A.pageY)}function nt(A){const k=A.pointerId===b[0].pointerId?b[1]:b[0];return E[k.pointerId]}n.domElement.addEventListener("contextmenu",Y),n.domElement.addEventListener("pointerdown",et),n.domElement.addEventListener("pointercancel",Mt),n.domElement.addEventListener("wheel",Ot,{passive:!1}),this.update()}}function lh(r){const t=r-1;return t*t*t+1}function Tv(r,{delay:t=0,duration:e=400,easing:n=lh,start:i=0,opacity:s=0}={}){const o=getComputedStyle(r),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,u=a*(1-s);return{delay:t,duration:e,easing:n,css:(d,h)=>`
			transform: ${l} scale(${1-c*h});
			opacity: ${a-u*h}
		`}}function Ev(r,{from:t,to:e},n={}){const i=getComputedStyle(r),s=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),l=t.left+t.width*o/e.width-(e.left+o),c=t.top+t.height*a/e.height-(e.top+a),{delay:u=0,duration:d=f=>Math.sqrt(f)*120,easing:h=lh}=n;return{delay:u,duration:Ar(d)?d(Math.sqrt(l*l+c*c)):d,easing:h,css:(f,g)=>{const x=g*l,y=g*c,m=f+g*t.width/e.width,p=f+g*t.height/e.height;return`transform: ${s} translate(${x}px, ${y}px) scale(${m}, ${p});`}}}export{$0 as $,J0 as A,vh as B,gv as C,ev as D,Ih as E,G0 as F,A0 as G,X0 as H,Ph as I,Se as J,C0 as K,R0 as L,D0 as M,I0 as N,P0 as O,vv as P,mt as Q,gt as R,mv as S,ui as T,de as U,w as V,L0 as W,N0 as X,ol as Y,hv as Z,iv as _,Fh as a,ve as a0,jn as a1,K0 as a2,Ey as a3,Ht as a4,F0 as a5,Z as a6,xe as a7,bv as a8,wv as a9,av as aA,Mv as aa,yv as ab,E_ as ac,_v as ad,A_ as ae,Gc as af,$h as ag,Ut as ah,nv as ai,Sv as aj,V0 as ak,xv as al,$t as am,ou as an,j0 as ao,B0 as ap,Ar as aq,Z0 as ar,Uh as as,Y0 as at,Fr as au,ov as av,qn as aw,lv as ax,Ev as ay,Tv as az,H0 as b,k0 as c,Dh as d,el as e,z0 as f,Bh as g,q0 as h,pv as i,dv as j,O0 as k,U0 as l,fv as m,W0 as n,qh as o,cv as p,uv as q,rv as r,Mh as s,Qs as t,kh as u,Xh as v,sv as w,ul as x,tv as y,Q0 as z};
