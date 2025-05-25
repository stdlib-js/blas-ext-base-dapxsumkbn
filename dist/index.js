"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(h,t){
var c=require('@stdlib/blas-ext-base-dsumkbn/dist').ndarray;function y(e,r,i,a,x){return e*r+c(e,i,a,x)}t.exports=y
});var d=u(function(w,v){
var b=require('@stdlib/strided-base-stride2offset/dist'),f=s();function k(e,r,i,a){return f(e,r,i,a,b(e,a))}v.exports=k
});var p=u(function(z,o){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),l=s();j(q,"ndarray",l);o.exports=q
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=p(),n,m=_(R(__dirname,"./native.js"));E(m)?n=O:n=m;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
