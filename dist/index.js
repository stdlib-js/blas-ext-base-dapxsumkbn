"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=o(function(F,c){
var x=require('@stdlib/math-base-special-abs/dist');function R(e,r,s,i,p){var a,v,u,t,n,q;if(e<=0)return 0;if(e===1||i===0)return r+s[p];for(v=p,a=0,n=0,q=0;q<e;q++)u=r+s[v],t=a+u,x(a)>=x(u)?n+=a-t+u:n+=u-t+a,a=t,v+=i;return a+n}c.exports=R
});var b=o(function(G,f){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=d();function O(e,r,s,i){return E(e,r,s,i,_(e,i))}f.exports=O
});var j=o(function(H,k){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=b(),w=d();g(y,"ndarray",w);k.exports=y
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=j(),m,l=A(z(__dirname,"./native.js"));B(l)?m=C:m=l;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
