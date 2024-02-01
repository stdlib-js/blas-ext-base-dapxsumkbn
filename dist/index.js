"use strict";var q=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var p=q(function(D,x){
var c=require('@stdlib/math-base-special-abs/dist');function _(e,a,f,t){var i,r,v,u,n,s;if(e<=0)return 0;if(e===1||t===0)return a+f[0];for(t<0?r=(1-e)*t:r=0,i=0,n=0,s=0;s<e;s++)v=a+f[r],u=i+v,c(i)>=c(v)?n+=i-u+v:n+=v-u+i,i=u,r+=t;return i+n}x.exports=_
});var k=q(function(F,d){
var b=require('@stdlib/math-base-special-abs/dist');function E(e,a,f,t,i){var r,v,u,n,s,o;if(e<=0)return 0;if(e===1||t===0)return a+f[i];for(v=i,r=0,s=0,o=0;o<e;o++)u=a+f[v],n=r+u,b(r)>=b(u)?s+=r-n+u:s+=u-n+r,r=n,v+=t;return r+s}d.exports=E
});var l=q(function(G,j){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),g=k();O(y,"ndarray",g);j.exports=y
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=l(),m,R=z(w(__dirname,"./native.js"));A(R)?m=B:m=R;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
