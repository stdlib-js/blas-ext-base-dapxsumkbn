"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=q(function(F,p){
var m=require('@stdlib/math-base-special-abs/dist');function R(e,r,s,i,l){var a,t,u,n,v,o;if(e<=0)return 0;if(t=l,i===0)return e*(r+s[t]);for(a=0,v=0,o=0;o<e;o++)u=r+s[t],n=a+u,m(a)>=m(u)?v+=a-n+u:v+=u-n+a,a=n,t+=i;return a+v}p.exports=R
});var c=q(function(G,x){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=f();function O(e,r,s,i){return E(e,r,s,i,_(e,i))}x.exports=O
});var k=q(function(H,y){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=c(),w=f();g(b,"ndarray",w);y.exports=b
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=k(),d,j=A(z(__dirname,"./native.js"));B(j)?d=C:d=j;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
