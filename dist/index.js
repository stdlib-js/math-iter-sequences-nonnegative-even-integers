"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=o(function(_,f){
var b=require('@stdlib/assert-is-plain-object/dist'),x=require('@stdlib/assert-has-own-property/dist'),y=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,s=require('@stdlib/error-tools-fmtprodmsg/dist');function N(e,r){return b(r)?x(r,"iter")&&(e.iter=r.iter,!y(r.iter))?new TypeError(s('0aP2t',"iter",r.iter)):null:new TypeError(s('0aP2V',r));}f.exports=N
});var m=o(function(j,d){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/symbol-iterator/dist'),T=require('@stdlib/constants-float64-max-safe-integer/dist'),h=l(),w=(T+1)/2+1;function c(e){var r,t,v,i,n,a;if(r={iter:w},arguments.length&&(i=h(r,e),i))throw i;return n=0,a=-2,t={},u(t,"next",q),u(t,"return",E),g&&u(t,g,p),t;function q(){return n+=1,v||n>r.iter?{done:!0}:(a+=2,{value:a,done:!1})}function E(O){return v=!0,arguments.length?{value:O,done:!0}:{done:!0}}function p(){return c(r)}}d.exports=c
});var A=m();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
