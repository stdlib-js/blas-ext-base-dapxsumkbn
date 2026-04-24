"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=u(function(h,t){
var c=require('@stdlib/blas-ext-base-dsumkbn/dist').ndarray;function f(r,e,i,a,x){return r<=0?0:r*e+c(r,i,a,x)}t.exports=f
});var d=u(function(w,v){
var y=require('@stdlib/strided-base-stride2offset/dist'),b=n();function k(r,e,i,a){return b(r,e,i,a,y(r,a))}v.exports=k
});var p=u(function(z,o){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),l=n();j(q,"ndarray",l);o.exports=q
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=p(),s,m=_(R(__dirname,"./native.js"));E(m)?s=O:s=m;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
