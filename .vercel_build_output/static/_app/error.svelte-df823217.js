import{S as I,i as J,s as w,e as v,t as E,c as d,a as b,g as h,d as o,f as _,I as P,h as R,k as N,l as q,n as S,J as y}from"./chunks/vendor-3b181467.js";function C(i){let t,f=i[1].frame+"",l;return{c(){t=v("pre"),l=E(f)},l(s){t=d(s,"PRE",{});var r=b(t);l=h(r,f),r.forEach(o)},m(s,r){_(s,t,r),P(t,l)},p(s,r){r&2&&f!==(f=s[1].frame+"")&&R(l,f)},d(s){s&&o(t)}}}function H(i){let t,f=i[1].stack+"",l;return{c(){t=v("pre"),l=E(f)},l(s){t=d(s,"PRE",{});var r=b(t);l=h(r,f),r.forEach(o)},m(s,r){_(s,t,r),P(t,l)},p(s,r){r&2&&f!==(f=s[1].stack+"")&&R(l,f)},d(s){s&&o(t)}}}function z(i){let t,f,l,s,r=i[1].message+"",c,k,m,p,a=i[1].frame&&C(i),n=i[1].stack&&H(i);return{c(){t=v("h1"),f=E(i[0]),l=N(),s=v("pre"),c=E(r),k=N(),a&&a.c(),m=N(),n&&n.c(),p=q()},l(e){t=d(e,"H1",{});var u=b(t);f=h(u,i[0]),u.forEach(o),l=S(e),s=d(e,"PRE",{});var j=b(s);c=h(j,r),j.forEach(o),k=S(e),a&&a.l(e),m=S(e),n&&n.l(e),p=q()},m(e,u){_(e,t,u),P(t,f),_(e,l,u),_(e,s,u),P(s,c),_(e,k,u),a&&a.m(e,u),_(e,m,u),n&&n.m(e,u),_(e,p,u)},p(e,[u]){u&1&&R(f,e[0]),u&2&&r!==(r=e[1].message+"")&&R(c,r),e[1].frame?a?a.p(e,u):(a=C(e),a.c(),a.m(m.parentNode,m)):a&&(a.d(1),a=null),e[1].stack?n?n.p(e,u):(n=H(e),n.c(),n.m(p.parentNode,p)):n&&(n.d(1),n=null)},i:y,o:y,d(e){e&&o(t),e&&o(l),e&&o(s),e&&o(k),a&&a.d(e),e&&o(m),n&&n.d(e),e&&o(p)}}}function D({error:i,status:t}){return{props:{error:i,status:t}}}function A(i,t,f){let{status:l}=t,{error:s}=t;return i.$$set=r=>{"status"in r&&f(0,l=r.status),"error"in r&&f(1,s=r.error)},[l,s]}class F extends I{constructor(t){super();J(this,t,A,z,w,{status:0,error:1})}get status(){return this.$$.ctx[0]}set status(t){this.$set({status:t})}get error(){return this.$$.ctx[1]}set error(t){this.$set({error:t})}get $cty_config(){return{}}}export{F as default,D as load};
