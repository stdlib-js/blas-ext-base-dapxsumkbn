"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=u(function(h,t){
var c=require('@stdlib/blas-ext-base-dsumkbn/dist').ndarray;function f(e,r,a,i,x){return e<=0?0:e*r+c(e,a,i,x)}t.exports=f
});var d=u(function(w,v){
var y=require('@stdlib/strided-base-stride2offset/dist'),b=n();function k(e,r,a,i){return b(e,r,a,i,y(e,i))}v.exports=k
});var p=u(function(z,o){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),l=n();j(q,"ndarray",l);o.exports=q
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=p(),s,m=_(R(__dirname,"./native.js"));E(m)?s=O:s=m;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
