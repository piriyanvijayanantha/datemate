function uT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Qv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ud={exports:{}},Ga={},zd={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function cT(){if(Yg)return Re;Yg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function x(M){return M===null||typeof M!="object"?null:(M=E&&M[E]||M["@@iterator"],typeof M=="function"?M:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,B={};function L(M,K,fe){this.props=M,this.context=K,this.refs=B,this.updater=fe||O}L.prototype.isReactComponent={},L.prototype.setState=function(M,K){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,K,"setState")},L.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function te(){}te.prototype=L.prototype;function Q(M,K,fe){this.props=M,this.context=K,this.refs=B,this.updater=fe||O}var Z=Q.prototype=new te;Z.constructor=Q,$(Z,L.prototype),Z.isPureReactComponent=!0;var le=Array.isArray,xe=Object.prototype.hasOwnProperty,ve={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(M,K,fe){var Se,Ce={},be=null,Me=null;if(K!=null)for(Se in K.ref!==void 0&&(Me=K.ref),K.key!==void 0&&(be=""+K.key),K)xe.call(K,Se)&&!N.hasOwnProperty(Se)&&(Ce[Se]=K[Se]);var je=arguments.length-2;if(je===1)Ce.children=fe;else if(1<je){for(var $e=Array(je),Tt=0;Tt<je;Tt++)$e[Tt]=arguments[Tt+2];Ce.children=$e}if(M&&M.defaultProps)for(Se in je=M.defaultProps,je)Ce[Se]===void 0&&(Ce[Se]=je[Se]);return{$$typeof:n,type:M,key:be,ref:Me,props:Ce,_owner:ve.current}}function R(M,K){return{$$typeof:n,type:M.type,key:K,ref:M.ref,props:M.props,_owner:M._owner}}function k(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function V(M){var K={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(fe){return K[fe]})}var b=/\/+/g;function C(M,K){return typeof M=="object"&&M!==null&&M.key!=null?V(""+M.key):K.toString(36)}function Je(M,K,fe,Se,Ce){var be=typeof M;(be==="undefined"||be==="boolean")&&(M=null);var Me=!1;if(M===null)Me=!0;else switch(be){case"string":case"number":Me=!0;break;case"object":switch(M.$$typeof){case n:case e:Me=!0}}if(Me)return Me=M,Ce=Ce(Me),M=Se===""?"."+C(Me,0):Se,le(Ce)?(fe="",M!=null&&(fe=M.replace(b,"$&/")+"/"),Je(Ce,K,fe,"",function(Tt){return Tt})):Ce!=null&&(k(Ce)&&(Ce=R(Ce,fe+(!Ce.key||Me&&Me.key===Ce.key?"":(""+Ce.key).replace(b,"$&/")+"/")+M)),K.push(Ce)),1;if(Me=0,Se=Se===""?".":Se+":",le(M))for(var je=0;je<M.length;je++){be=M[je];var $e=Se+C(be,je);Me+=Je(be,K,fe,$e,Ce)}else if($e=x(M),typeof $e=="function")for(M=$e.call(M),je=0;!(be=M.next()).done;)be=be.value,$e=Se+C(be,je++),Me+=Je(be,K,fe,$e,Ce);else if(be==="object")throw K=String(M),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Me}function Lt(M,K,fe){if(M==null)return M;var Se=[],Ce=0;return Je(M,Se,"","",function(be){return K.call(fe,be,Ce++)}),Se}function Mt(M){if(M._status===-1){var K=M._result;K=K(),K.then(function(fe){(M._status===0||M._status===-1)&&(M._status=1,M._result=fe)},function(fe){(M._status===0||M._status===-1)&&(M._status=2,M._result=fe)}),M._status===-1&&(M._status=0,M._result=K)}if(M._status===1)return M._result.default;throw M._result}var ze={current:null},re={transition:null},me={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:re,ReactCurrentOwner:ve};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Lt,forEach:function(M,K,fe){Lt(M,function(){K.apply(this,arguments)},fe)},count:function(M){var K=0;return Lt(M,function(){K++}),K},toArray:function(M){return Lt(M,function(K){return K})||[]},only:function(M){if(!k(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Re.Component=L,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=Q,Re.StrictMode=i,Re.Suspense=p,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Re.act=ae,Re.cloneElement=function(M,K,fe){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Se=$({},M.props),Ce=M.key,be=M.ref,Me=M._owner;if(K!=null){if(K.ref!==void 0&&(be=K.ref,Me=ve.current),K.key!==void 0&&(Ce=""+K.key),M.type&&M.type.defaultProps)var je=M.type.defaultProps;for($e in K)xe.call(K,$e)&&!N.hasOwnProperty($e)&&(Se[$e]=K[$e]===void 0&&je!==void 0?je[$e]:K[$e])}var $e=arguments.length-2;if($e===1)Se.children=fe;else if(1<$e){je=Array($e);for(var Tt=0;Tt<$e;Tt++)je[Tt]=arguments[Tt+2];Se.children=je}return{$$typeof:n,type:M.type,key:Ce,ref:be,props:Se,_owner:Me}},Re.createContext=function(M){return M={$$typeof:h,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:l,_context:M},M.Consumer=M},Re.createElement=S,Re.createFactory=function(M){var K=S.bind(null,M);return K.type=M,K},Re.createRef=function(){return{current:null}},Re.forwardRef=function(M){return{$$typeof:f,render:M}},Re.isValidElement=k,Re.lazy=function(M){return{$$typeof:_,_payload:{_status:-1,_result:M},_init:Mt}},Re.memo=function(M,K){return{$$typeof:y,type:M,compare:K===void 0?null:K}},Re.startTransition=function(M){var K=re.transition;re.transition={};try{M()}finally{re.transition=K}},Re.unstable_act=ae,Re.useCallback=function(M,K){return ze.current.useCallback(M,K)},Re.useContext=function(M){return ze.current.useContext(M)},Re.useDebugValue=function(){},Re.useDeferredValue=function(M){return ze.current.useDeferredValue(M)},Re.useEffect=function(M,K){return ze.current.useEffect(M,K)},Re.useId=function(){return ze.current.useId()},Re.useImperativeHandle=function(M,K,fe){return ze.current.useImperativeHandle(M,K,fe)},Re.useInsertionEffect=function(M,K){return ze.current.useInsertionEffect(M,K)},Re.useLayoutEffect=function(M,K){return ze.current.useLayoutEffect(M,K)},Re.useMemo=function(M,K){return ze.current.useMemo(M,K)},Re.useReducer=function(M,K,fe){return ze.current.useReducer(M,K,fe)},Re.useRef=function(M){return ze.current.useRef(M)},Re.useState=function(M){return ze.current.useState(M)},Re.useSyncExternalStore=function(M,K,fe){return ze.current.useSyncExternalStore(M,K,fe)},Re.useTransition=function(){return ze.current.useTransition()},Re.version="18.3.1",Re}var Xg;function $f(){return Xg||(Xg=1,zd.exports=cT()),zd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function hT(){if(Jg)return Ga;Jg=1;var n=$f(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,p,y){var _,E={},x=null,O=null;y!==void 0&&(x=""+y),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(O=p.ref);for(_ in p)i.call(p,_)&&!l.hasOwnProperty(_)&&(E[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)E[_]===void 0&&(E[_]=p[_]);return{$$typeof:e,type:f,key:x,ref:O,props:E,_owner:o.current}}return Ga.Fragment=t,Ga.jsx=h,Ga.jsxs=h,Ga}var Zg;function dT(){return Zg||(Zg=1,Ud.exports=hT()),Ud.exports}var I=dT(),W=$f();const Yv=Qv(W),fT=uT({__proto__:null,default:Yv},[W]);var Ju={},Bd={exports:{}},nn={},$d={exports:{}},Wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function pT(){return ey||(ey=1,(function(n){function e(re,me){var ae=re.length;re.push(me);e:for(;0<ae;){var M=ae-1>>>1,K=re[M];if(0<o(K,me))re[M]=me,re[ae]=K,ae=M;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var me=re[0],ae=re.pop();if(ae!==me){re[0]=ae;e:for(var M=0,K=re.length,fe=K>>>1;M<fe;){var Se=2*(M+1)-1,Ce=re[Se],be=Se+1,Me=re[be];if(0>o(Ce,ae))be<K&&0>o(Me,Ce)?(re[M]=Me,re[be]=ae,M=be):(re[M]=Ce,re[Se]=ae,M=Se);else if(be<K&&0>o(Me,ae))re[M]=Me,re[be]=ae,M=be;else break e}}return me}function o(re,me){var ae=re.sortIndex-me.sortIndex;return ae!==0?ae:re.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var p=[],y=[],_=1,E=null,x=3,O=!1,$=!1,B=!1,L=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(re){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=re)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function le(re){if(B=!1,Z(re),!$)if(t(p)!==null)$=!0,Mt(xe);else{var me=t(y);me!==null&&ze(le,me.startTime-re)}}function xe(re,me){$=!1,B&&(B=!1,te(S),S=-1),O=!0;var ae=x;try{for(Z(me),E=t(p);E!==null&&(!(E.expirationTime>me)||re&&!V());){var M=E.callback;if(typeof M=="function"){E.callback=null,x=E.priorityLevel;var K=M(E.expirationTime<=me);me=n.unstable_now(),typeof K=="function"?E.callback=K:E===t(p)&&i(p),Z(me)}else i(p);E=t(p)}if(E!==null)var fe=!0;else{var Se=t(y);Se!==null&&ze(le,Se.startTime-me),fe=!1}return fe}finally{E=null,x=ae,O=!1}}var ve=!1,N=null,S=-1,R=5,k=-1;function V(){return!(n.unstable_now()-k<R)}function b(){if(N!==null){var re=n.unstable_now();k=re;var me=!0;try{me=N(!0,re)}finally{me?C():(ve=!1,N=null)}}else ve=!1}var C;if(typeof Q=="function")C=function(){Q(b)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,Lt=Je.port2;Je.port1.onmessage=b,C=function(){Lt.postMessage(null)}}else C=function(){L(b,0)};function Mt(re){N=re,ve||(ve=!0,C())}function ze(re,me){S=L(function(){re(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){$||O||($=!0,Mt(xe))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(re){switch(x){case 1:case 2:case 3:var me=3;break;default:me=x}var ae=x;x=me;try{return re()}finally{x=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,me){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var ae=x;x=re;try{return me()}finally{x=ae}},n.unstable_scheduleCallback=function(re,me,ae){var M=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?M+ae:M):ae=M,re){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ae+K,re={id:_++,callback:me,priorityLevel:re,startTime:ae,expirationTime:K,sortIndex:-1},ae>M?(re.sortIndex=ae,e(y,re),t(p)===null&&re===t(y)&&(B?(te(S),S=-1):B=!0,ze(le,ae-M))):(re.sortIndex=K,e(p,re),$||O||($=!0,Mt(xe))),re},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(re){var me=x;return function(){var ae=x;x=me;try{return re.apply(this,arguments)}finally{x=ae}}}})(Wd)),Wd}var ty;function mT(){return ty||(ty=1,$d.exports=pT()),$d.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function gT(){if(ny)return nn;ny=1;var n=$f(),e=mT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},E={};function x(r){return p.call(E,r)?!0:p.call(_,r)?!1:y.test(r)?E[r]=!0:(_[r]=!0,!1)}function O(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function $(r,s,a,c){if(s===null||typeof s>"u"||O(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function B(r,s,a,c,d,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new B(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new B(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new B(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new B(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new B(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new B(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new B(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new B(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new B(r,5,!1,r.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function Q(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(te,Q);L[s]=new B(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(te,Q);L[s]=new B(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(te,Q);L[s]=new B(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new B(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new B(r,1,!1,r.toLowerCase(),null,!0,!0)});function Z(r,s,a,c){var d=L.hasOwnProperty(s)?L[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,a,d,c)&&(a=null),c||d===null?x(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var le=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xe=Symbol.for("react.element"),ve=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),V=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),Lt=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),re=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,M;function K(r){if(M===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);M=s&&s[1]||""}return`
`+M+r}var fe=!1;function Se(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var c=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){c=z}r.call(s.prototype)}else{try{throw Error()}catch(z){c=z}r()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),g=c.stack.split(`
`),w=d.length-1,A=g.length-1;1<=w&&0<=A&&d[w]!==g[A];)A--;for(;1<=w&&0<=A;w--,A--)if(d[w]!==g[A]){if(w!==1||A!==1)do if(w--,A--,0>A||d[w]!==g[A]){var P=`
`+d[w].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=w&&0<=A);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function Ce(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Se(r.type,!1),r;case 11:return r=Se(r.type.render,!1),r;case 1:return r=Se(r.type,!0),r;default:return""}}function be(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case ve:return"Portal";case R:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case Je:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case V:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case b:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Lt:return s=r.displayName||null,s!==null?s:be(r.type)||"Memo";case Mt:s=r._payload,r=r._init;try{return be(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function je(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Tt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function gr(r){r._valueTracker||(r._valueTracker=Tt(r))}function bs(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Hr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Wi(r,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ds(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=je(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Zo(r,s){s=s.checked,s!=null&&Z(r,"checked",s,!1)}function ea(r,s){Zo(r,s);var a=je(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Os(r,s.type,a):s.hasOwnProperty("defaultValue")&&Os(r,s.type,je(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ml(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Os(r,s,a){(s!=="number"||Hr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var yr=Array.isArray;function vr(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+je(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function ta(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Vs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(yr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:je(a)}}function Ls(r,s){var a=je(s.value),c=je(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function na(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function pt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?pt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var _r,ra=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=_r.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Gr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hi=["Webkit","ms","Moz","O"];Object.keys(qi).forEach(function(r){Hi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),qi[s]=qi[r]})});function ia(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||qi.hasOwnProperty(r)&&qi[r]?(""+s).trim():s+"px"}function sa(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ia(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var oa=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function aa(r,s){if(s){if(oa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function la(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gi=null;function Ms(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var js=null,_n=null,Xn=null;function Fs(r){if(r=ba(r)){if(typeof js!="function")throw Error(t(280));var s=r.stateNode;s&&(s=fu(s),js(r.stateNode,r.type,s))}}function Jn(r){_n?Xn?Xn.push(r):Xn=[r]:_n=r}function ua(){if(_n){var r=_n,s=Xn;if(Xn=_n=null,Fs(r),s)for(r=0;r<s.length;r++)Fs(s[r])}}function Ki(r,s){return r(s)}function ca(){}var wr=!1;function ha(r,s,a){if(wr)return r(s,a);wr=!0;try{return Ki(r,s,a)}finally{wr=!1,(_n!==null||Xn!==null)&&(ca(),ua())}}function st(r,s){var a=r.stateNode;if(a===null)return null;var c=fu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Us=!1;if(f)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Us=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Us=!1}function Qi(r,s,a,c,d,g,w,A,P){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(X){this.onError(X)}}var Yi=!1,zs=null,bn=!1,da=null,ph={onError:function(r){Yi=!0,zs=r}};function Bs(r,s,a,c,d,g,w,A,P){Yi=!1,zs=null,Qi.apply(ph,arguments)}function jl(r,s,a,c,d,g,w,A,P){if(Bs.apply(this,arguments),Yi){if(Yi){var z=zs;Yi=!1,zs=null}else throw Error(t(198));bn||(bn=!0,da=z)}}function Dn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Xi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function On(r){if(Dn(r)!==r)throw Error(t(188))}function Fl(r){var s=r.alternate;if(!s){if(s=Dn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return On(d),r;if(g===c)return On(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var w=!1,A=d.child;A;){if(A===a){w=!0,a=d,c=g;break}if(A===c){w=!0,c=d,a=g;break}A=A.sibling}if(!w){for(A=g.child;A;){if(A===a){w=!0,a=g,c=d;break}if(A===c){w=!0,c=g,a=d;break}A=A.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function fa(r){return r=Fl(r),r!==null?$s(r):null}function $s(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=$s(r);if(s!==null)return s;r=r.sibling}return null}var Ws=e.unstable_scheduleCallback,pa=e.unstable_cancelCallback,Ul=e.unstable_shouldYield,mh=e.unstable_requestPaint,We=e.unstable_now,zl=e.unstable_getCurrentPriorityLevel,Ji=e.unstable_ImmediatePriority,Kr=e.unstable_UserBlockingPriority,wn=e.unstable_NormalPriority,ma=e.unstable_LowPriority,Bl=e.unstable_IdlePriority,Zi=null,un=null;function $l(r){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Zi,r,void 0,(r.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:ql,ga=Math.log,Wl=Math.LN2;function ql(r){return r>>>=0,r===0?32:31-(ga(r)/Wl|0)|0}var qs=64,Hs=4194304;function Qr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function es(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var A=w&~d;A!==0?c=Qr(A):(g&=w,g!==0&&(c=Qr(g)))}else w=a&~d,w!==0?c=Qr(w):g!==0&&(c=Qr(g));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-qt(s),d=1<<a,c|=r[a],s&=~d;return c}function gh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Er(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-qt(g),A=1<<w,P=d[w];P===-1?((A&a)===0||(A&c)!==0)&&(d[w]=gh(A,s)):P<=s&&(r.expiredLanes|=A),g&=~A}}function cn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ts(){var r=qs;return qs<<=1,(qs&4194240)===0&&(qs=64),r}function Yr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Xr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-qt(s),r[s]=a}function Be(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-qt(a),g=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~g}}function Jr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-qt(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var Ne=0;function Zr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Hl,Gs,Gl,Kl,Ql,ya=!1,Zn=[],kt=null,Vn=null,Ln=null,ei=new Map,En=new Map,er=[],yh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yl(r,s){switch(r){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":ei.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(s.pointerId)}}function Qt(r,s,a,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=ba(s),s!==null&&Gs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function vh(r,s,a,c,d){switch(s){case"focusin":return kt=Qt(kt,r,s,a,c,d),!0;case"dragenter":return Vn=Qt(Vn,r,s,a,c,d),!0;case"mouseover":return Ln=Qt(Ln,r,s,a,c,d),!0;case"pointerover":var g=d.pointerId;return ei.set(g,Qt(ei.get(g)||null,r,s,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,En.set(g,Qt(En.get(g)||null,r,s,a,c,d)),!0}return!1}function Xl(r){var s=os(r.target);if(s!==null){var a=Dn(s);if(a!==null){if(s=a.tag,s===13){if(s=Xi(a),s!==null){r.blockedOn=s,Ql(r.priority,function(){Gl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Tr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Ks(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Gi=c,a.target.dispatchEvent(c),Gi=null}else return s=ba(a),s!==null&&Gs(s),r.blockedOn=a,!1;s.shift()}return!0}function ns(r,s,a){Tr(r)&&a.delete(s)}function Jl(){ya=!1,kt!==null&&Tr(kt)&&(kt=null),Vn!==null&&Tr(Vn)&&(Vn=null),Ln!==null&&Tr(Ln)&&(Ln=null),ei.forEach(ns),En.forEach(ns)}function Mn(r,s){r.blockedOn===s&&(r.blockedOn=null,ya||(ya=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jl)))}function jn(r){function s(d){return Mn(d,r)}if(0<Zn.length){Mn(Zn[0],r);for(var a=1;a<Zn.length;a++){var c=Zn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(kt!==null&&Mn(kt,r),Vn!==null&&Mn(Vn,r),Ln!==null&&Mn(Ln,r),ei.forEach(s),En.forEach(s),a=0;a<er.length;a++)c=er[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<er.length&&(a=er[0],a.blockedOn===null);)Xl(a),a.blockedOn===null&&er.shift()}var Ir=le.ReactCurrentBatchConfig,ti=!0;function Ye(r,s,a,c){var d=Ne,g=Ir.transition;Ir.transition=null;try{Ne=1,va(r,s,a,c)}finally{Ne=d,Ir.transition=g}}function _h(r,s,a,c){var d=Ne,g=Ir.transition;Ir.transition=null;try{Ne=4,va(r,s,a,c)}finally{Ne=d,Ir.transition=g}}function va(r,s,a,c){if(ti){var d=Ks(r,s,a,c);if(d===null)kh(r,s,c,rs,a),Yl(r,c);else if(vh(d,r,s,a,c))c.stopPropagation();else if(Yl(r,c),s&4&&-1<yh.indexOf(r)){for(;d!==null;){var g=ba(d);if(g!==null&&Hl(g),g=Ks(r,s,a,c),g===null&&kh(r,s,c,rs,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else kh(r,s,c,null,a)}}var rs=null;function Ks(r,s,a,c){if(rs=null,r=Ms(c),r=os(r),r!==null)if(s=Dn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Xi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return rs=r,null}function _a(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zl()){case Ji:return 1;case Kr:return 4;case wn:case ma:return 16;case Bl:return 536870912;default:return 16}default:return 16}}var hn=null,Qs=null,Yt=null;function wa(){if(Yt)return Yt;var r,s=Qs,a=s.length,c,d="value"in hn?hn.value:hn.textContent,g=d.length;for(r=0;r<a&&s[r]===d[r];r++);var w=a-r;for(c=1;c<=w&&s[a-c]===d[g-c];c++);return Yt=d.slice(r,1<c?1-c:void 0)}function Ys(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function tr(){return!0}function Ea(){return!1}function Nt(r){function s(a,c,d,g,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?tr:Ea,this.isPropagationStopped=Ea,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),s}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=Nt(Fn),nr=ae({},Fn,{view:0,detail:0}),wh=Nt(nr),Js,xr,ni,is=ae({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ni&&(ni&&r.type==="mousemove"?(Js=r.screenX-ni.screenX,xr=r.screenY-ni.screenY):xr=Js=0,ni=r),Js)},movementY:function(r){return"movementY"in r?r.movementY:xr}}),Zs=Nt(is),Ta=ae({},is,{dataTransfer:0}),Zl=Nt(Ta),eo=ae({},nr,{relatedTarget:0}),to=Nt(eo),eu=ae({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sr=Nt(eu),tu=ae({},Fn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),nu=Nt(tu),ru=ae({},Fn,{data:0}),Ia=Nt(ru),no={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ht={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function su(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=iu[r])?!!s[r]:!1}function rr(){return su}var u=ae({},nr,{key:function(r){if(r.key){var s=no[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ys(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Ht[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rr,charCode:function(r){return r.type==="keypress"?Ys(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ys(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Nt(u),v=ae({},is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Nt(v),j=ae({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rr}),q=Nt(j),ne=ae({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=Nt(ne),gt=ae({},is,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),De=Nt(gt),It=[9,13,27,32],lt=f&&"CompositionEvent"in window,Tn=null;f&&"documentMode"in document&&(Tn=document.documentMode);var dn=f&&"TextEvent"in window&&!Tn,ss=f&&(!lt||Tn&&8<Tn&&11>=Tn),ro=" ",Wp=!1;function qp(r,s){switch(r){case"keyup":return It.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var io=!1;function oE(r,s){switch(r){case"compositionend":return Hp(s);case"keypress":return s.which!==32?null:(Wp=!0,ro);case"textInput":return r=s.data,r===ro&&Wp?null:r;default:return null}}function aE(r,s){if(io)return r==="compositionend"||!lt&&qp(r,s)?(r=wa(),Yt=Qs=hn=null,io=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ss&&s.locale!=="ko"?null:s.data;default:return null}}var lE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!lE[r.type]:s==="textarea"}function Kp(r,s,a,c){Jn(c),s=cu(s,"onChange"),0<s.length&&(a=new Xs("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var xa=null,Sa=null;function uE(r){dm(r,0)}function ou(r){var s=uo(r);if(bs(s))return r}function cE(r,s){if(r==="change")return s}var Qp=!1;if(f){var Eh;if(f){var Th="oninput"in document;if(!Th){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),Th=typeof Yp.oninput=="function"}Eh=Th}else Eh=!1;Qp=Eh&&(!document.documentMode||9<document.documentMode)}function Xp(){xa&&(xa.detachEvent("onpropertychange",Jp),Sa=xa=null)}function Jp(r){if(r.propertyName==="value"&&ou(Sa)){var s=[];Kp(s,Sa,r,Ms(r)),ha(uE,s)}}function hE(r,s,a){r==="focusin"?(Xp(),xa=s,Sa=a,xa.attachEvent("onpropertychange",Jp)):r==="focusout"&&Xp()}function dE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ou(Sa)}function fE(r,s){if(r==="click")return ou(s)}function pE(r,s){if(r==="input"||r==="change")return ou(s)}function mE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Un=typeof Object.is=="function"?Object.is:mE;function Aa(r,s){if(Un(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(s,d)||!Un(r[d],s[d]))return!1}return!0}function Zp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function em(r,s){var a=Zp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zp(a)}}function tm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?tm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function nm(){for(var r=window,s=Hr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Hr(r.document)}return s}function Ih(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function gE(r){var s=nm(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&tm(a.ownerDocument.documentElement,a)){if(c!==null&&Ih(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=em(a,g);var w=em(a,c);d&&w&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var yE=f&&"documentMode"in document&&11>=document.documentMode,so=null,xh=null,Ca=null,Sh=!1;function rm(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sh||so==null||so!==Hr(c)||(c=so,"selectionStart"in c&&Ih(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ca&&Aa(Ca,c)||(Ca=c,c=cu(xh,"onSelect"),0<c.length&&(s=new Xs("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=so)))}function au(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var oo={animationend:au("Animation","AnimationEnd"),animationiteration:au("Animation","AnimationIteration"),animationstart:au("Animation","AnimationStart"),transitionend:au("Transition","TransitionEnd")},Ah={},im={};f&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function lu(r){if(Ah[r])return Ah[r];if(!oo[r])return r;var s=oo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in im)return Ah[r]=s[a];return r}var sm=lu("animationend"),om=lu("animationiteration"),am=lu("animationstart"),lm=lu("transitionend"),um=new Map,cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ri(r,s){um.set(r,s),l(s,[r])}for(var Ch=0;Ch<cm.length;Ch++){var Rh=cm[Ch],vE=Rh.toLowerCase(),_E=Rh[0].toUpperCase()+Rh.slice(1);ri(vE,"on"+_E)}ri(sm,"onAnimationEnd"),ri(om,"onAnimationIteration"),ri(am,"onAnimationStart"),ri("dblclick","onDoubleClick"),ri("focusin","onFocus"),ri("focusout","onBlur"),ri(lm,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function hm(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,jl(c,s,void 0,r),r.currentTarget=null}function dm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var w=c.length-1;0<=w;w--){var A=c[w],P=A.instance,z=A.currentTarget;if(A=A.listener,P!==g&&d.isPropagationStopped())break e;hm(d,A,z),g=P}else for(w=0;w<c.length;w++){if(A=c[w],P=A.instance,z=A.currentTarget,A=A.listener,P!==g&&d.isPropagationStopped())break e;hm(d,A,z),g=P}}}if(bn)throw r=da,bn=!1,da=null,r}function Ke(r,s){var a=s[Lh];a===void 0&&(a=s[Lh]=new Set);var c=r+"__bubble";a.has(c)||(fm(s,r,2,!1),a.add(c))}function Ph(r,s,a){var c=0;s&&(c|=4),fm(a,r,c,s)}var uu="_reactListening"+Math.random().toString(36).slice(2);function Pa(r){if(!r[uu]){r[uu]=!0,i.forEach(function(a){a!=="selectionchange"&&(wE.has(a)||Ph(a,!1,r),Ph(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[uu]||(s[uu]=!0,Ph("selectionchange",!1,s))}}function fm(r,s,a,c){switch(_a(s)){case 1:var d=Ye;break;case 4:d=_h;break;default:d=va}a=d.bind(null,s,a,r),d=void 0,!Us||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function kh(r,s,a,c,d){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var P=w.tag;if((P===3||P===4)&&(P=w.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;w=w.return}for(;A!==null;){if(w=os(A),w===null)return;if(P=w.tag,P===5||P===6){c=g=w;continue e}A=A.parentNode}}c=c.return}ha(function(){var z=g,X=Ms(a),J=[];e:{var Y=um.get(r);if(Y!==void 0){var se=Xs,ce=r;switch(r){case"keypress":if(Ys(a)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ce="focus",se=to;break;case"focusout":ce="blur",se=to;break;case"beforeblur":case"afterblur":se=to;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Zl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=q;break;case sm:case om:case am:se=Sr;break;case lm:se=Ue;break;case"scroll":se=wh;break;case"wheel":se=De;break;case"copy":case"cut":case"paste":se=nu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=T}var he=(s&4)!==0,ot=!he&&r==="scroll",F=he?Y!==null?Y+"Capture":null:Y;he=[];for(var D=z,U;D!==null;){U=D;var ee=U.stateNode;if(U.tag===5&&ee!==null&&(U=ee,F!==null&&(ee=st(D,F),ee!=null&&he.push(ka(D,ee,U)))),ot)break;D=D.return}0<he.length&&(Y=new se(Y,ce,null,a,X),J.push({event:Y,listeners:he}))}}if((s&7)===0){e:{if(Y=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",Y&&a!==Gi&&(ce=a.relatedTarget||a.fromElement)&&(os(ce)||ce[Ar]))break e;if((se||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,se?(ce=a.relatedTarget||a.toElement,se=z,ce=ce?os(ce):null,ce!==null&&(ot=Dn(ce),ce!==ot||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(se=null,ce=z),se!==ce)){if(he=Zs,ee="onMouseLeave",F="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(he=T,ee="onPointerLeave",F="onPointerEnter",D="pointer"),ot=se==null?Y:uo(se),U=ce==null?Y:uo(ce),Y=new he(ee,D+"leave",se,a,X),Y.target=ot,Y.relatedTarget=U,ee=null,os(X)===z&&(he=new he(F,D+"enter",ce,a,X),he.target=U,he.relatedTarget=ot,ee=he),ot=ee,se&&ce)t:{for(he=se,F=ce,D=0,U=he;U;U=ao(U))D++;for(U=0,ee=F;ee;ee=ao(ee))U++;for(;0<D-U;)he=ao(he),D--;for(;0<U-D;)F=ao(F),U--;for(;D--;){if(he===F||F!==null&&he===F.alternate)break t;he=ao(he),F=ao(F)}he=null}else he=null;se!==null&&pm(J,Y,se,he,!1),ce!==null&&ot!==null&&pm(J,ot,ce,he,!0)}}e:{if(Y=z?uo(z):window,se=Y.nodeName&&Y.nodeName.toLowerCase(),se==="select"||se==="input"&&Y.type==="file")var de=cE;else if(Gp(Y))if(Qp)de=pE;else{de=dE;var ge=hE}else(se=Y.nodeName)&&se.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(de=fE);if(de&&(de=de(r,z))){Kp(J,de,a,X);break e}ge&&ge(r,Y,z),r==="focusout"&&(ge=Y._wrapperState)&&ge.controlled&&Y.type==="number"&&Os(Y,"number",Y.value)}switch(ge=z?uo(z):window,r){case"focusin":(Gp(ge)||ge.contentEditable==="true")&&(so=ge,xh=z,Ca=null);break;case"focusout":Ca=xh=so=null;break;case"mousedown":Sh=!0;break;case"contextmenu":case"mouseup":case"dragend":Sh=!1,rm(J,a,X);break;case"selectionchange":if(yE)break;case"keydown":case"keyup":rm(J,a,X)}var ye;if(lt)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else io?qp(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(ss&&a.locale!=="ko"&&(io||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&io&&(ye=wa()):(hn=X,Qs="value"in hn?hn.value:hn.textContent,io=!0)),ge=cu(z,Ee),0<ge.length&&(Ee=new Ia(Ee,r,null,a,X),J.push({event:Ee,listeners:ge}),ye?Ee.data=ye:(ye=Hp(a),ye!==null&&(Ee.data=ye)))),(ye=dn?oE(r,a):aE(r,a))&&(z=cu(z,"onBeforeInput"),0<z.length&&(X=new Ia("onBeforeInput","beforeinput",null,a,X),J.push({event:X,listeners:z}),X.data=ye))}dm(J,s)})}function ka(r,s,a){return{instance:r,listener:s,currentTarget:a}}function cu(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=st(r,a),g!=null&&c.unshift(ka(r,g,d)),g=st(r,s),g!=null&&c.push(ka(r,g,d))),r=r.return}return c}function ao(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function pm(r,s,a,c,d){for(var g=s._reactName,w=[];a!==null&&a!==c;){var A=a,P=A.alternate,z=A.stateNode;if(P!==null&&P===c)break;A.tag===5&&z!==null&&(A=z,d?(P=st(a,g),P!=null&&w.unshift(ka(a,P,A))):d||(P=st(a,g),P!=null&&w.push(ka(a,P,A)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var EE=/\r\n?/g,TE=/\u0000|\uFFFD/g;function mm(r){return(typeof r=="string"?r:""+r).replace(EE,`
`).replace(TE,"")}function hu(r,s,a){if(s=mm(s),mm(r)!==s&&a)throw Error(t(425))}function du(){}var Nh=null,bh=null;function Dh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Oh=typeof setTimeout=="function"?setTimeout:void 0,IE=typeof clearTimeout=="function"?clearTimeout:void 0,gm=typeof Promise=="function"?Promise:void 0,xE=typeof queueMicrotask=="function"?queueMicrotask:typeof gm<"u"?function(r){return gm.resolve(null).then(r).catch(SE)}:Oh;function SE(r){setTimeout(function(){throw r})}function Vh(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),jn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);jn(s)}function ii(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function ym(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var lo=Math.random().toString(36).slice(2),ir="__reactFiber$"+lo,Na="__reactProps$"+lo,Ar="__reactContainer$"+lo,Lh="__reactEvents$"+lo,AE="__reactListeners$"+lo,CE="__reactHandles$"+lo;function os(r){var s=r[ir];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Ar]||a[ir]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=ym(r);r!==null;){if(a=r[ir])return a;r=ym(r)}return s}r=a,a=r.parentNode}return null}function ba(r){return r=r[ir]||r[Ar],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function uo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function fu(r){return r[Na]||null}var Mh=[],co=-1;function si(r){return{current:r}}function Qe(r){0>co||(r.current=Mh[co],Mh[co]=null,co--)}function qe(r,s){co++,Mh[co]=r.current,r.current=s}var oi={},jt=si(oi),Xt=si(!1),as=oi;function ho(r,s){var a=r.type.contextTypes;if(!a)return oi;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Jt(r){return r=r.childContextTypes,r!=null}function pu(){Qe(Xt),Qe(jt)}function vm(r,s,a){if(jt.current!==oi)throw Error(t(168));qe(jt,s),qe(Xt,a)}function _m(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Me(r)||"Unknown",d));return ae({},a,c)}function mu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||oi,as=jt.current,qe(jt,r),qe(Xt,Xt.current),!0}function wm(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=_m(r,s,as),c.__reactInternalMemoizedMergedChildContext=r,Qe(Xt),Qe(jt),qe(jt,r)):Qe(Xt),qe(Xt,a)}var Cr=null,gu=!1,jh=!1;function Em(r){Cr===null?Cr=[r]:Cr.push(r)}function RE(r){gu=!0,Em(r)}function ai(){if(!jh&&Cr!==null){jh=!0;var r=0,s=Ne;try{var a=Cr;for(Ne=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Cr=null,gu=!1}catch(d){throw Cr!==null&&(Cr=Cr.slice(r+1)),Ws(Ji,ai),d}finally{Ne=s,jh=!1}}return null}var fo=[],po=0,yu=null,vu=0,In=[],xn=0,ls=null,Rr=1,Pr="";function us(r,s){fo[po++]=vu,fo[po++]=yu,yu=r,vu=s}function Tm(r,s,a){In[xn++]=Rr,In[xn++]=Pr,In[xn++]=ls,ls=r;var c=Rr;r=Pr;var d=32-qt(c)-1;c&=~(1<<d),a+=1;var g=32-qt(s)+d;if(30<g){var w=d-d%5;g=(c&(1<<w)-1).toString(32),c>>=w,d-=w,Rr=1<<32-qt(s)+d|a<<d|c,Pr=g+r}else Rr=1<<g|a<<d|c,Pr=r}function Fh(r){r.return!==null&&(us(r,1),Tm(r,1,0))}function Uh(r){for(;r===yu;)yu=fo[--po],fo[po]=null,vu=fo[--po],fo[po]=null;for(;r===ls;)ls=In[--xn],In[xn]=null,Pr=In[--xn],In[xn]=null,Rr=In[--xn],In[xn]=null}var fn=null,pn=null,Xe=!1,zn=null;function Im(r,s){var a=Rn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function xm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,fn=r,pn=ii(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,fn=r,pn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ls!==null?{id:Rr,overflow:Pr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Rn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,fn=r,pn=null,!0):!1;default:return!1}}function zh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Bh(r){if(Xe){var s=pn;if(s){var a=s;if(!xm(r,s)){if(zh(r))throw Error(t(418));s=ii(a.nextSibling);var c=fn;s&&xm(r,s)?Im(c,a):(r.flags=r.flags&-4097|2,Xe=!1,fn=r)}}else{if(zh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,fn=r}}}function Sm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;fn=r}function _u(r){if(r!==fn)return!1;if(!Xe)return Sm(r),Xe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Dh(r.type,r.memoizedProps)),s&&(s=pn)){if(zh(r))throw Am(),Error(t(418));for(;s;)Im(r,s),s=ii(s.nextSibling)}if(Sm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){pn=ii(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}pn=null}}else pn=fn?ii(r.stateNode.nextSibling):null;return!0}function Am(){for(var r=pn;r;)r=ii(r.nextSibling)}function mo(){pn=fn=null,Xe=!1}function $h(r){zn===null?zn=[r]:zn.push(r)}var PE=le.ReactCurrentBatchConfig;function Da(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var A=d.refs;w===null?delete A[g]:A[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function wu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Cm(r){var s=r._init;return s(r._payload)}function Rm(r){function s(F,D){if(r){var U=F.deletions;U===null?(F.deletions=[D],F.flags|=16):U.push(D)}}function a(F,D){if(!r)return null;for(;D!==null;)s(F,D),D=D.sibling;return null}function c(F,D){for(F=new Map;D!==null;)D.key!==null?F.set(D.key,D):F.set(D.index,D),D=D.sibling;return F}function d(F,D){return F=mi(F,D),F.index=0,F.sibling=null,F}function g(F,D,U){return F.index=U,r?(U=F.alternate,U!==null?(U=U.index,U<D?(F.flags|=2,D):U):(F.flags|=2,D)):(F.flags|=1048576,D)}function w(F){return r&&F.alternate===null&&(F.flags|=2),F}function A(F,D,U,ee){return D===null||D.tag!==6?(D=Od(U,F.mode,ee),D.return=F,D):(D=d(D,U),D.return=F,D)}function P(F,D,U,ee){var de=U.type;return de===N?X(F,D,U.props.children,ee,U.key):D!==null&&(D.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Mt&&Cm(de)===D.type)?(ee=d(D,U.props),ee.ref=Da(F,D,U),ee.return=F,ee):(ee=Wu(U.type,U.key,U.props,null,F.mode,ee),ee.ref=Da(F,D,U),ee.return=F,ee)}function z(F,D,U,ee){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=Vd(U,F.mode,ee),D.return=F,D):(D=d(D,U.children||[]),D.return=F,D)}function X(F,D,U,ee,de){return D===null||D.tag!==7?(D=ys(U,F.mode,ee,de),D.return=F,D):(D=d(D,U),D.return=F,D)}function J(F,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Od(""+D,F.mode,U),D.return=F,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case xe:return U=Wu(D.type,D.key,D.props,null,F.mode,U),U.ref=Da(F,null,D),U.return=F,U;case ve:return D=Vd(D,F.mode,U),D.return=F,D;case Mt:var ee=D._init;return J(F,ee(D._payload),U)}if(yr(D)||me(D))return D=ys(D,F.mode,U,null),D.return=F,D;wu(F,D)}return null}function Y(F,D,U,ee){var de=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return de!==null?null:A(F,D,""+U,ee);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case xe:return U.key===de?P(F,D,U,ee):null;case ve:return U.key===de?z(F,D,U,ee):null;case Mt:return de=U._init,Y(F,D,de(U._payload),ee)}if(yr(U)||me(U))return de!==null?null:X(F,D,U,ee,null);wu(F,U)}return null}function se(F,D,U,ee,de){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return F=F.get(U)||null,A(D,F,""+ee,de);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case xe:return F=F.get(ee.key===null?U:ee.key)||null,P(D,F,ee,de);case ve:return F=F.get(ee.key===null?U:ee.key)||null,z(D,F,ee,de);case Mt:var ge=ee._init;return se(F,D,U,ge(ee._payload),de)}if(yr(ee)||me(ee))return F=F.get(U)||null,X(D,F,ee,de,null);wu(D,ee)}return null}function ce(F,D,U,ee){for(var de=null,ge=null,ye=D,Ee=D=0,At=null;ye!==null&&Ee<U.length;Ee++){ye.index>Ee?(At=ye,ye=null):At=ye.sibling;var Le=Y(F,ye,U[Ee],ee);if(Le===null){ye===null&&(ye=At);break}r&&ye&&Le.alternate===null&&s(F,ye),D=g(Le,D,Ee),ge===null?de=Le:ge.sibling=Le,ge=Le,ye=At}if(Ee===U.length)return a(F,ye),Xe&&us(F,Ee),de;if(ye===null){for(;Ee<U.length;Ee++)ye=J(F,U[Ee],ee),ye!==null&&(D=g(ye,D,Ee),ge===null?de=ye:ge.sibling=ye,ge=ye);return Xe&&us(F,Ee),de}for(ye=c(F,ye);Ee<U.length;Ee++)At=se(ye,F,Ee,U[Ee],ee),At!==null&&(r&&At.alternate!==null&&ye.delete(At.key===null?Ee:At.key),D=g(At,D,Ee),ge===null?de=At:ge.sibling=At,ge=At);return r&&ye.forEach(function(gi){return s(F,gi)}),Xe&&us(F,Ee),de}function he(F,D,U,ee){var de=me(U);if(typeof de!="function")throw Error(t(150));if(U=de.call(U),U==null)throw Error(t(151));for(var ge=de=null,ye=D,Ee=D=0,At=null,Le=U.next();ye!==null&&!Le.done;Ee++,Le=U.next()){ye.index>Ee?(At=ye,ye=null):At=ye.sibling;var gi=Y(F,ye,Le.value,ee);if(gi===null){ye===null&&(ye=At);break}r&&ye&&gi.alternate===null&&s(F,ye),D=g(gi,D,Ee),ge===null?de=gi:ge.sibling=gi,ge=gi,ye=At}if(Le.done)return a(F,ye),Xe&&us(F,Ee),de;if(ye===null){for(;!Le.done;Ee++,Le=U.next())Le=J(F,Le.value,ee),Le!==null&&(D=g(Le,D,Ee),ge===null?de=Le:ge.sibling=Le,ge=Le);return Xe&&us(F,Ee),de}for(ye=c(F,ye);!Le.done;Ee++,Le=U.next())Le=se(ye,F,Ee,Le.value,ee),Le!==null&&(r&&Le.alternate!==null&&ye.delete(Le.key===null?Ee:Le.key),D=g(Le,D,Ee),ge===null?de=Le:ge.sibling=Le,ge=Le);return r&&ye.forEach(function(lT){return s(F,lT)}),Xe&&us(F,Ee),de}function ot(F,D,U,ee){if(typeof U=="object"&&U!==null&&U.type===N&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case xe:e:{for(var de=U.key,ge=D;ge!==null;){if(ge.key===de){if(de=U.type,de===N){if(ge.tag===7){a(F,ge.sibling),D=d(ge,U.props.children),D.return=F,F=D;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Mt&&Cm(de)===ge.type){a(F,ge.sibling),D=d(ge,U.props),D.ref=Da(F,ge,U),D.return=F,F=D;break e}a(F,ge);break}else s(F,ge);ge=ge.sibling}U.type===N?(D=ys(U.props.children,F.mode,ee,U.key),D.return=F,F=D):(ee=Wu(U.type,U.key,U.props,null,F.mode,ee),ee.ref=Da(F,D,U),ee.return=F,F=ee)}return w(F);case ve:e:{for(ge=U.key;D!==null;){if(D.key===ge)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(F,D.sibling),D=d(D,U.children||[]),D.return=F,F=D;break e}else{a(F,D);break}else s(F,D);D=D.sibling}D=Vd(U,F.mode,ee),D.return=F,F=D}return w(F);case Mt:return ge=U._init,ot(F,D,ge(U._payload),ee)}if(yr(U))return ce(F,D,U,ee);if(me(U))return he(F,D,U,ee);wu(F,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,D!==null&&D.tag===6?(a(F,D.sibling),D=d(D,U),D.return=F,F=D):(a(F,D),D=Od(U,F.mode,ee),D.return=F,F=D),w(F)):a(F,D)}return ot}var go=Rm(!0),Pm=Rm(!1),Eu=si(null),Tu=null,yo=null,Wh=null;function qh(){Wh=yo=Tu=null}function Hh(r){var s=Eu.current;Qe(Eu),r._currentValue=s}function Gh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function vo(r,s){Tu=r,Wh=yo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Zt=!0),r.firstContext=null)}function Sn(r){var s=r._currentValue;if(Wh!==r)if(r={context:r,memoizedValue:s,next:null},yo===null){if(Tu===null)throw Error(t(308));yo=r,Tu.dependencies={lanes:0,firstContext:r}}else yo=yo.next=r;return s}var cs=null;function Kh(r){cs===null?cs=[r]:cs.push(r)}function km(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Kh(s)):(a.next=d.next,d.next=a),s.interleaved=a,kr(r,c)}function kr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var li=!1;function Qh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Nr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ui(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,kr(r,a)}return d=c.interleaved,d===null?(s.next=s,Kh(c)):(s.next=d.next,d.next=s),c.interleaved=s,kr(r,a)}function Iu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Jr(r,a)}}function bm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function xu(r,s,a,c){var d=r.updateQueue;li=!1;var g=d.firstBaseUpdate,w=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var P=A,z=P.next;P.next=null,w===null?g=z:w.next=z,w=P;var X=r.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==w&&(A===null?X.firstBaseUpdate=z:A.next=z,X.lastBaseUpdate=P))}if(g!==null){var J=d.baseState;w=0,X=z=P=null,A=g;do{var Y=A.lane,se=A.eventTime;if((c&Y)===Y){X!==null&&(X=X.next={eventTime:se,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ce=r,he=A;switch(Y=s,se=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){J=ce.call(se,J,Y);break e}J=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,Y=typeof ce=="function"?ce.call(se,J,Y):ce,Y==null)break e;J=ae({},J,Y);break e;case 2:li=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Y=d.effects,Y===null?d.effects=[A]:Y.push(A))}else se={eventTime:se,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(z=X=se,P=J):X=X.next=se,w|=Y;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);if(X===null&&(P=J),d.baseState=P,d.firstBaseUpdate=z,d.lastBaseUpdate=X,s=d.shared.interleaved,s!==null){d=s;do w|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);fs|=w,r.lanes=w,r.memoizedState=J}}function Dm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Oa={},sr=si(Oa),Va=si(Oa),La=si(Oa);function hs(r){if(r===Oa)throw Error(t(174));return r}function Yh(r,s){switch(qe(La,s),qe(Va,r),qe(sr,Oa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:mt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=mt(s,r)}Qe(sr),qe(sr,s)}function _o(){Qe(sr),Qe(Va),Qe(La)}function Om(r){hs(La.current);var s=hs(sr.current),a=mt(s,r.type);s!==a&&(qe(Va,r),qe(sr,a))}function Xh(r){Va.current===r&&(Qe(sr),Qe(Va))}var Ze=si(0);function Su(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Jh=[];function Zh(){for(var r=0;r<Jh.length;r++)Jh[r]._workInProgressVersionPrimary=null;Jh.length=0}var Au=le.ReactCurrentDispatcher,ed=le.ReactCurrentBatchConfig,ds=0,et=null,yt=null,xt=null,Cu=!1,Ma=!1,ja=0,kE=0;function Ft(){throw Error(t(321))}function td(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Un(r[a],s[a]))return!1;return!0}function nd(r,s,a,c,d,g){if(ds=g,et=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Au.current=r===null||r.memoizedState===null?OE:VE,r=a(c,d),Ma){g=0;do{if(Ma=!1,ja=0,25<=g)throw Error(t(301));g+=1,xt=yt=null,s.updateQueue=null,Au.current=LE,r=a(c,d)}while(Ma)}if(Au.current=ku,s=yt!==null&&yt.next!==null,ds=0,xt=yt=et=null,Cu=!1,s)throw Error(t(300));return r}function rd(){var r=ja!==0;return ja=0,r}function or(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?et.memoizedState=xt=r:xt=xt.next=r,xt}function An(){if(yt===null){var r=et.alternate;r=r!==null?r.memoizedState:null}else r=yt.next;var s=xt===null?et.memoizedState:xt.next;if(s!==null)xt=s,yt=r;else{if(r===null)throw Error(t(310));yt=r,r={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},xt===null?et.memoizedState=xt=r:xt=xt.next=r}return xt}function Fa(r,s){return typeof s=="function"?s(r):s}function id(r){var s=An(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=yt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var w=d.next;d.next=g.next,g.next=w}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var A=w=null,P=null,z=g;do{var X=z.lane;if((ds&X)===X)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:r(c,z.action);else{var J={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(A=P=J,w=c):P=P.next=J,et.lanes|=X,fs|=X}z=z.next}while(z!==null&&z!==g);P===null?w=c:P.next=A,Un(c,s.memoizedState)||(Zt=!0),s.memoizedState=c,s.baseState=w,s.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do g=d.lane,et.lanes|=g,fs|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function sd(r){var s=An(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do g=r(g,w.action),w=w.next;while(w!==d);Un(g,s.memoizedState)||(Zt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function Vm(){}function Lm(r,s){var a=et,c=An(),d=s(),g=!Un(c.memoizedState,d);if(g&&(c.memoizedState=d,Zt=!0),c=c.queue,od(Fm.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||xt!==null&&xt.memoizedState.tag&1){if(a.flags|=2048,Ua(9,jm.bind(null,a,c,d,s),void 0,null),St===null)throw Error(t(349));(ds&30)!==0||Mm(a,s,d)}return d}function Mm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function jm(r,s,a,c){s.value=a,s.getSnapshot=c,Um(s)&&zm(r)}function Fm(r,s,a){return a(function(){Um(s)&&zm(r)})}function Um(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Un(r,a)}catch{return!0}}function zm(r){var s=kr(r,1);s!==null&&qn(s,r,1,-1)}function Bm(r){var s=or();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:r},s.queue=r,r=r.dispatch=DE.bind(null,et,r),[s.memoizedState,r]}function Ua(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function $m(){return An().memoizedState}function Ru(r,s,a,c){var d=or();et.flags|=r,d.memoizedState=Ua(1|s,a,void 0,c===void 0?null:c)}function Pu(r,s,a,c){var d=An();c=c===void 0?null:c;var g=void 0;if(yt!==null){var w=yt.memoizedState;if(g=w.destroy,c!==null&&td(c,w.deps)){d.memoizedState=Ua(s,a,g,c);return}}et.flags|=r,d.memoizedState=Ua(1|s,a,g,c)}function Wm(r,s){return Ru(8390656,8,r,s)}function od(r,s){return Pu(2048,8,r,s)}function qm(r,s){return Pu(4,2,r,s)}function Hm(r,s){return Pu(4,4,r,s)}function Gm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Km(r,s,a){return a=a!=null?a.concat([r]):null,Pu(4,4,Gm.bind(null,s,r),a)}function ad(){}function Qm(r,s){var a=An();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&td(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Ym(r,s){var a=An();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&td(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function Xm(r,s,a){return(ds&21)===0?(r.baseState&&(r.baseState=!1,Zt=!0),r.memoizedState=a):(Un(a,s)||(a=ts(),et.lanes|=a,fs|=a,r.baseState=!0),s)}function NE(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var c=ed.transition;ed.transition={};try{r(!1),s()}finally{Ne=a,ed.transition=c}}function Jm(){return An().memoizedState}function bE(r,s,a){var c=fi(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Zm(r))eg(s,a);else if(a=km(r,s,a,c),a!==null){var d=Kt();qn(a,r,c,d),tg(a,s,c)}}function DE(r,s,a){var c=fi(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zm(r))eg(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,A=g(w,a);if(d.hasEagerState=!0,d.eagerState=A,Un(A,w)){var P=s.interleaved;P===null?(d.next=d,Kh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=km(r,s,d,c),a!==null&&(d=Kt(),qn(a,r,c,d),tg(a,s,c))}}function Zm(r){var s=r.alternate;return r===et||s!==null&&s===et}function eg(r,s){Ma=Cu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function tg(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Jr(r,a)}}var ku={readContext:Sn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},OE={readContext:Sn,useCallback:function(r,s){return or().memoizedState=[r,s===void 0?null:s],r},useContext:Sn,useEffect:Wm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Ru(4194308,4,Gm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Ru(4194308,4,r,s)},useInsertionEffect:function(r,s){return Ru(4,2,r,s)},useMemo:function(r,s){var a=or();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=or();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=bE.bind(null,et,r),[c.memoizedState,r]},useRef:function(r){var s=or();return r={current:r},s.memoizedState=r},useState:Bm,useDebugValue:ad,useDeferredValue:function(r){return or().memoizedState=r},useTransition:function(){var r=Bm(!1),s=r[0];return r=NE.bind(null,r[1]),or().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=et,d=or();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),St===null)throw Error(t(349));(ds&30)!==0||Mm(c,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,Wm(Fm.bind(null,c,g,r),[r]),c.flags|=2048,Ua(9,jm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=or(),s=St.identifierPrefix;if(Xe){var a=Pr,c=Rr;a=(c&~(1<<32-qt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=ja++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=kE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},VE={readContext:Sn,useCallback:Qm,useContext:Sn,useEffect:od,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:Hm,useMemo:Ym,useReducer:id,useRef:$m,useState:function(){return id(Fa)},useDebugValue:ad,useDeferredValue:function(r){var s=An();return Xm(s,yt.memoizedState,r)},useTransition:function(){var r=id(Fa)[0],s=An().memoizedState;return[r,s]},useMutableSource:Vm,useSyncExternalStore:Lm,useId:Jm,unstable_isNewReconciler:!1},LE={readContext:Sn,useCallback:Qm,useContext:Sn,useEffect:od,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:Hm,useMemo:Ym,useReducer:sd,useRef:$m,useState:function(){return sd(Fa)},useDebugValue:ad,useDeferredValue:function(r){var s=An();return yt===null?s.memoizedState=r:Xm(s,yt.memoizedState,r)},useTransition:function(){var r=sd(Fa)[0],s=An().memoizedState;return[r,s]},useMutableSource:Vm,useSyncExternalStore:Lm,useId:Jm,unstable_isNewReconciler:!1};function Bn(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function ld(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:ae({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Nu={isMounted:function(r){return(r=r._reactInternals)?Dn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Kt(),d=fi(r),g=Nr(c,d);g.payload=s,a!=null&&(g.callback=a),s=ui(r,g,d),s!==null&&(qn(s,r,d,c),Iu(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Kt(),d=fi(r),g=Nr(c,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=ui(r,g,d),s!==null&&(qn(s,r,d,c),Iu(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Kt(),c=fi(r),d=Nr(a,c);d.tag=2,s!=null&&(d.callback=s),s=ui(r,d,c),s!==null&&(qn(s,r,c,a),Iu(s,r,c))}};function ng(r,s,a,c,d,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,w):s.prototype&&s.prototype.isPureReactComponent?!Aa(a,c)||!Aa(d,g):!0}function rg(r,s,a){var c=!1,d=oi,g=s.contextType;return typeof g=="object"&&g!==null?g=Sn(g):(d=Jt(s)?as:jt.current,c=s.contextTypes,g=(c=c!=null)?ho(r,d):oi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Nu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function ig(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&Nu.enqueueReplaceState(s,s.state,null)}function ud(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Qh(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=Sn(g):(g=Jt(s)?as:jt.current,d.context=ho(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(ld(r,s,g,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&Nu.enqueueReplaceState(d,d.state,null),xu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function wo(r,s){try{var a="",c=s;do a+=Ce(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function cd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function hd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var ME=typeof WeakMap=="function"?WeakMap:Map;function sg(r,s,a){a=Nr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){ju||(ju=!0,Ad=c),hd(r,s)},a}function og(r,s,a){a=Nr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){hd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){hd(r,s),typeof c!="function"&&(hi===null?hi=new Set([this]):hi.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function ag(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new ME;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=XE.bind(null,r,s,a),s.then(r,r))}function lg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function ug(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Nr(-1,1),s.tag=2,ui(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var jE=le.ReactCurrentOwner,Zt=!1;function Gt(r,s,a,c){s.child=r===null?Pm(s,null,a,c):go(s,r.child,a,c)}function cg(r,s,a,c,d){a=a.render;var g=s.ref;return vo(s,d),c=nd(r,s,a,c,g,d),a=rd(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,br(r,s,d)):(Xe&&a&&Fh(s),s.flags|=1,Gt(r,s,c,d),s.child)}function hg(r,s,a,c,d){if(r===null){var g=a.type;return typeof g=="function"&&!Dd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,dg(r,s,g,c,d)):(r=Wu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&d)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Aa,a(w,c)&&r.ref===s.ref)return br(r,s,d)}return s.flags|=1,r=mi(g,c),r.ref=s.ref,r.return=s,s.child=r}function dg(r,s,a,c,d){if(r!==null){var g=r.memoizedProps;if(Aa(g,c)&&r.ref===s.ref)if(Zt=!1,s.pendingProps=c=g,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Zt=!0);else return s.lanes=r.lanes,br(r,s,d)}return dd(r,s,a,c,d)}function fg(r,s,a){var c=s.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(To,mn),mn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,qe(To,mn),mn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,qe(To,mn),mn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,qe(To,mn),mn|=c;return Gt(r,s,d,a),s.child}function pg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function dd(r,s,a,c,d){var g=Jt(a)?as:jt.current;return g=ho(s,g),vo(s,d),a=nd(r,s,a,c,g,d),c=rd(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,br(r,s,d)):(Xe&&c&&Fh(s),s.flags|=1,Gt(r,s,a,d),s.child)}function mg(r,s,a,c,d){if(Jt(a)){var g=!0;mu(s)}else g=!1;if(vo(s,d),s.stateNode===null)Du(r,s),rg(s,a,c),ud(s,a,c,d),c=!0;else if(r===null){var w=s.stateNode,A=s.memoizedProps;w.props=A;var P=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=Sn(z):(z=Jt(a)?as:jt.current,z=ho(s,z));var X=a.getDerivedStateFromProps,J=typeof X=="function"||typeof w.getSnapshotBeforeUpdate=="function";J||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==c||P!==z)&&ig(s,w,c,z),li=!1;var Y=s.memoizedState;w.state=Y,xu(s,c,w,d),P=s.memoizedState,A!==c||Y!==P||Xt.current||li?(typeof X=="function"&&(ld(s,a,X,c),P=s.memoizedState),(A=li||ng(s,a,A,c,Y,P,z))?(J||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),w.props=c,w.state=P,w.context=z,c=A):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{w=s.stateNode,Nm(r,s),A=s.memoizedProps,z=s.type===s.elementType?A:Bn(s.type,A),w.props=z,J=s.pendingProps,Y=w.context,P=a.contextType,typeof P=="object"&&P!==null?P=Sn(P):(P=Jt(a)?as:jt.current,P=ho(s,P));var se=a.getDerivedStateFromProps;(X=typeof se=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==J||Y!==P)&&ig(s,w,c,P),li=!1,Y=s.memoizedState,w.state=Y,xu(s,c,w,d);var ce=s.memoizedState;A!==J||Y!==ce||Xt.current||li?(typeof se=="function"&&(ld(s,a,se,c),ce=s.memoizedState),(z=li||ng(s,a,z,c,Y,ce,P)||!1)?(X||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,ce,P),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,ce,P)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ce),w.props=c,w.state=ce,w.context=P,c=z):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),c=!1)}return fd(r,s,a,c,g,d)}function fd(r,s,a,c,d,g){pg(r,s);var w=(s.flags&128)!==0;if(!c&&!w)return d&&wm(s,a,!1),br(r,s,g);c=s.stateNode,jE.current=s;var A=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&w?(s.child=go(s,r.child,null,g),s.child=go(s,null,A,g)):Gt(r,s,A,g),s.memoizedState=c.state,d&&wm(s,a,!0),s.child}function gg(r){var s=r.stateNode;s.pendingContext?vm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&vm(r,s.context,!1),Yh(r,s.containerInfo)}function yg(r,s,a,c,d){return mo(),$h(d),s.flags|=256,Gt(r,s,a,c),s.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function md(r){return{baseLanes:r,cachePool:null,transitions:null}}function vg(r,s,a){var c=s.pendingProps,d=Ze.current,g=!1,w=(s.flags&128)!==0,A;if((A=w)||(A=r!==null&&r.memoizedState===null?!1:(d&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),qe(Ze,d&1),r===null)return Bh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=c.children,r=c.fallback,g?(c=s.mode,g=s.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=qu(w,c,0,null),r=ys(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=md(a),s.memoizedState=pd,r):gd(s,w));if(d=r.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return FE(r,s,w,c,A,d,a);if(g){g=c.fallback,w=s.mode,d=r.child,A=d.sibling;var P={mode:"hidden",children:c.children};return(w&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=mi(d,P),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?g=mi(A,g):(g=ys(g,w,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,w=r.child.memoizedState,w=w===null?md(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,s.memoizedState=pd,c}return g=r.child,r=g.sibling,c=mi(g,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function gd(r,s){return s=qu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function bu(r,s,a,c){return c!==null&&$h(c),go(s,r.child,null,a),r=gd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function FE(r,s,a,c,d,g,w){if(a)return s.flags&256?(s.flags&=-257,c=cd(Error(t(422))),bu(r,s,w,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,d=s.mode,c=qu({mode:"visible",children:c.children},d,0,null),g=ys(g,d,w,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,(s.mode&1)!==0&&go(s,r.child,null,w),s.child.memoizedState=md(w),s.memoizedState=pd,g);if((s.mode&1)===0)return bu(r,s,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,g=Error(t(419)),c=cd(g,c,void 0),bu(r,s,w,c)}if(A=(w&r.childLanes)!==0,Zt||A){if(c=St,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,kr(r,d),qn(c,r,d,-1))}return bd(),c=cd(Error(t(421))),bu(r,s,w,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=JE.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,pn=ii(d.nextSibling),fn=s,Xe=!0,zn=null,r!==null&&(In[xn++]=Rr,In[xn++]=Pr,In[xn++]=ls,Rr=r.id,Pr=r.overflow,ls=s),s=gd(s,c.children),s.flags|=4096,s)}function _g(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Gh(r.return,s,a)}function yd(r,s,a,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function wg(r,s,a){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(Gt(r,s,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&_g(r,a,s);else if(r.tag===19)_g(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(qe(Ze,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&Su(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),yd(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Su(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}yd(s,!0,a,null,g);break;case"together":yd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Du(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function br(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),fs|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=mi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=mi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function UE(r,s,a){switch(s.tag){case 3:gg(s),mo();break;case 5:Om(s);break;case 1:Jt(s.type)&&mu(s);break;case 4:Yh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;qe(Eu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(qe(Ze,Ze.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?vg(r,s,a):(qe(Ze,Ze.current&1),r=br(r,s,a),r!==null?r.sibling:null);qe(Ze,Ze.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return wg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Ze,Ze.current),c)break;return null;case 22:case 23:return s.lanes=0,fg(r,s,a)}return br(r,s,a)}var Eg,vd,Tg,Ig;Eg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vd=function(){},Tg=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,hs(sr.current);var g=null;switch(a){case"input":d=Wi(r,d),c=Wi(r,c),g=[];break;case"select":d=ae({},d,{value:void 0}),c=ae({},c,{value:void 0}),g=[];break;case"textarea":d=ta(r,d),c=ta(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=du)}aa(a,c);var w;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var A=d[z];for(w in A)A.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in c){var P=c[z];if(A=d!=null?d[z]:void 0,c.hasOwnProperty(z)&&P!==A&&(P!=null||A!=null))if(z==="style")if(A){for(w in A)!A.hasOwnProperty(w)||P&&P.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in P)P.hasOwnProperty(w)&&A[w]!==P[w]&&(a||(a={}),a[w]=P[w])}else a||(g||(g=[]),g.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(g=g||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&Ke("scroll",r),g||A===P||(g=[])):(g=g||[]).push(z,P))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},Ig=function(r,s,a,c){a!==c&&(s.flags|=4)};function za(r,s){if(!Xe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Ut(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function zE(r,s,a){var c=s.pendingProps;switch(Uh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(s),null;case 1:return Jt(s.type)&&pu(),Ut(s),null;case 3:return c=s.stateNode,_o(),Qe(Xt),Qe(jt),Zh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(_u(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,zn!==null&&(Pd(zn),zn=null))),vd(r,s),Ut(s),null;case 5:Xh(s);var d=hs(La.current);if(a=s.type,r!==null&&s.stateNode!=null)Tg(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Ut(s),null}if(r=hs(sr.current),_u(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[ir]=s,c[Na]=g,r=(s.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<Ra.length;d++)Ke(Ra[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":Ds(c,g),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ke("invalid",c);break;case"textarea":Vs(c,g),Ke("invalid",c)}aa(a,g),d=null;for(var w in g)if(g.hasOwnProperty(w)){var A=g[w];w==="children"?typeof A=="string"?c.textContent!==A&&(g.suppressHydrationWarning!==!0&&hu(c.textContent,A,r),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&hu(c.textContent,A,r),d=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&Ke("scroll",c)}switch(a){case"input":gr(c),Ml(c,g,!0);break;case"textarea":gr(c),na(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=du)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=pt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=w.createElement(a,{is:c.is}):(r=w.createElement(a),a==="select"&&(w=r,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):r=w.createElementNS(r,a),r[ir]=s,r[Na]=c,Eg(r,s,!1,!1),s.stateNode=r;e:{switch(w=la(a,c),a){case"dialog":Ke("cancel",r),Ke("close",r),d=c;break;case"iframe":case"object":case"embed":Ke("load",r),d=c;break;case"video":case"audio":for(d=0;d<Ra.length;d++)Ke(Ra[d],r);d=c;break;case"source":Ke("error",r),d=c;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),d=c;break;case"details":Ke("toggle",r),d=c;break;case"input":Ds(r,c),d=Wi(r,c),Ke("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=ae({},c,{value:void 0}),Ke("invalid",r);break;case"textarea":Vs(r,c),d=ta(r,c),Ke("invalid",r);break;default:d=c}aa(a,d),A=d;for(g in A)if(A.hasOwnProperty(g)){var P=A[g];g==="style"?sa(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&ra(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Gr(r,P):typeof P=="number"&&Gr(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&Ke("scroll",r):P!=null&&Z(r,g,P,w))}switch(a){case"input":gr(r),Ml(r,c,!1);break;case"textarea":gr(r),na(r);break;case"option":c.value!=null&&r.setAttribute("value",""+je(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?vr(r,!!c.multiple,g,!1):c.defaultValue!=null&&vr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=du)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ut(s),null;case 6:if(r&&s.stateNode!=null)Ig(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=hs(La.current),hs(sr.current),_u(s)){if(c=s.stateNode,a=s.memoizedProps,c[ir]=s,(g=c.nodeValue!==a)&&(r=fn,r!==null))switch(r.tag){case 3:hu(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&hu(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ir]=s,s.stateNode=c}return Ut(s),null;case 13:if(Qe(Ze),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&pn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Am(),mo(),s.flags|=98560,g=!1;else if(g=_u(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[ir]=s}else mo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ut(s),g=!1}else zn!==null&&(Pd(zn),zn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Ze.current&1)!==0?vt===0&&(vt=3):bd())),s.updateQueue!==null&&(s.flags|=4),Ut(s),null);case 4:return _o(),vd(r,s),r===null&&Pa(s.stateNode.containerInfo),Ut(s),null;case 10:return Hh(s.type._context),Ut(s),null;case 17:return Jt(s.type)&&pu(),Ut(s),null;case 19:if(Qe(Ze),g=s.memoizedState,g===null)return Ut(s),null;if(c=(s.flags&128)!==0,w=g.rendering,w===null)if(c)za(g,!1);else{if(vt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=Su(r),w!==null){for(s.flags|=128,za(g,!1),c=w.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return qe(Ze,Ze.current&1|2),s.child}r=r.sibling}g.tail!==null&&We()>Io&&(s.flags|=128,c=!0,za(g,!1),s.lanes=4194304)}else{if(!c)if(r=Su(w),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),za(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Xe)return Ut(s),null}else 2*We()-g.renderingStartTime>Io&&a!==1073741824&&(s.flags|=128,c=!0,za(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=We(),s.sibling=null,a=Ze.current,qe(Ze,c?a&1|2:a&1),s):(Ut(s),null);case 22:case 23:return Nd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(mn&1073741824)!==0&&(Ut(s),s.subtreeFlags&6&&(s.flags|=8192)):Ut(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function BE(r,s){switch(Uh(s),s.tag){case 1:return Jt(s.type)&&pu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return _o(),Qe(Xt),Qe(jt),Zh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Xh(s),null;case 13:if(Qe(Ze),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));mo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Qe(Ze),null;case 4:return _o(),null;case 10:return Hh(s.type._context),null;case 22:case 23:return Nd(),null;case 24:return null;default:return null}}var Ou=!1,zt=!1,$E=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Eo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(r,s,c)}else a.current=null}function _d(r,s,a){try{a()}catch(c){rt(r,s,c)}}var xg=!1;function WE(r,s){if(Nh=ti,r=nm(),Ih(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,A=-1,P=-1,z=0,X=0,J=r,Y=null;t:for(;;){for(var se;J!==a||d!==0&&J.nodeType!==3||(A=w+d),J!==g||c!==0&&J.nodeType!==3||(P=w+c),J.nodeType===3&&(w+=J.nodeValue.length),(se=J.firstChild)!==null;)Y=J,J=se;for(;;){if(J===r)break t;if(Y===a&&++z===d&&(A=w),Y===g&&++X===c&&(P=w),(se=J.nextSibling)!==null)break;J=Y,Y=J.parentNode}J=se}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(bh={focusedElem:r,selectionRange:a},ti=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var ce=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,ot=ce.memoizedState,F=s.stateNode,D=F.getSnapshotBeforeUpdate(s.elementType===s.type?he:Bn(s.type,he),ot);F.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var U=s.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){rt(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return ce=xg,xg=!1,ce}function Ba(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&_d(s,a,g)}d=d.next}while(d!==c)}}function Vu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function wd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Sg(r){var s=r.alternate;s!==null&&(r.alternate=null,Sg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[ir],delete s[Na],delete s[Lh],delete s[AE],delete s[CE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Ag(r){return r.tag===5||r.tag===3||r.tag===4}function Cg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Ag(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ed(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=du));else if(c!==4&&(r=r.child,r!==null))for(Ed(r,s,a),r=r.sibling;r!==null;)Ed(r,s,a),r=r.sibling}function Td(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(Td(r,s,a),r=r.sibling;r!==null;)Td(r,s,a),r=r.sibling}var bt=null,$n=!1;function ci(r,s,a){for(a=a.child;a!==null;)Rg(r,s,a),a=a.sibling}function Rg(r,s,a){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Zi,a)}catch{}switch(a.tag){case 5:zt||Eo(a,s);case 6:var c=bt,d=$n;bt=null,ci(r,s,a),bt=c,$n=d,bt!==null&&($n?(r=bt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):bt.removeChild(a.stateNode));break;case 18:bt!==null&&($n?(r=bt,a=a.stateNode,r.nodeType===8?Vh(r.parentNode,a):r.nodeType===1&&Vh(r,a),jn(r)):Vh(bt,a.stateNode));break;case 4:c=bt,d=$n,bt=a.stateNode.containerInfo,$n=!0,ci(r,s,a),bt=c,$n=d;break;case 0:case 11:case 14:case 15:if(!zt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&_d(a,s,w),d=d.next}while(d!==c)}ci(r,s,a);break;case 1:if(!zt&&(Eo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){rt(a,s,A)}ci(r,s,a);break;case 21:ci(r,s,a);break;case 22:a.mode&1?(zt=(c=zt)||a.memoizedState!==null,ci(r,s,a),zt=c):ci(r,s,a);break;default:ci(r,s,a)}}function Pg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new $E),s.forEach(function(c){var d=ZE.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Wn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=r,w=s,A=w;e:for(;A!==null;){switch(A.tag){case 5:bt=A.stateNode,$n=!1;break e;case 3:bt=A.stateNode.containerInfo,$n=!0;break e;case 4:bt=A.stateNode.containerInfo,$n=!0;break e}A=A.return}if(bt===null)throw Error(t(160));Rg(g,w,d),bt=null,$n=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(z){rt(d,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)kg(s,r),s=s.sibling}function kg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Wn(s,r),ar(r),c&4){try{Ba(3,r,r.return),Vu(3,r)}catch(he){rt(r,r.return,he)}try{Ba(5,r,r.return)}catch(he){rt(r,r.return,he)}}break;case 1:Wn(s,r),ar(r),c&512&&a!==null&&Eo(a,a.return);break;case 5:if(Wn(s,r),ar(r),c&512&&a!==null&&Eo(a,a.return),r.flags&32){var d=r.stateNode;try{Gr(d,"")}catch(he){rt(r,r.return,he)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,A=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&Zo(d,g),la(A,w);var z=la(A,g);for(w=0;w<P.length;w+=2){var X=P[w],J=P[w+1];X==="style"?sa(d,J):X==="dangerouslySetInnerHTML"?ra(d,J):X==="children"?Gr(d,J):Z(d,X,J,z)}switch(A){case"input":ea(d,g);break;case"textarea":Ls(d,g);break;case"select":var Y=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?vr(d,!!g.multiple,se,!1):Y!==!!g.multiple&&(g.defaultValue!=null?vr(d,!!g.multiple,g.defaultValue,!0):vr(d,!!g.multiple,g.multiple?[]:"",!1))}d[Na]=g}catch(he){rt(r,r.return,he)}}break;case 6:if(Wn(s,r),ar(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(he){rt(r,r.return,he)}}break;case 3:if(Wn(s,r),ar(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{jn(s.containerInfo)}catch(he){rt(r,r.return,he)}break;case 4:Wn(s,r),ar(r);break;case 13:Wn(s,r),ar(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Sd=We())),c&4&&Pg(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(zt=(z=zt)||X,Wn(s,r),zt=z):Wn(s,r),ar(r),c&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!X&&(r.mode&1)!==0)for(ue=r,X=r.child;X!==null;){for(J=ue=X;ue!==null;){switch(Y=ue,se=Y.child,Y.tag){case 0:case 11:case 14:case 15:Ba(4,Y,Y.return);break;case 1:Eo(Y,Y.return);var ce=Y.stateNode;if(typeof ce.componentWillUnmount=="function"){c=Y,a=Y.return;try{s=c,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){rt(c,a,he)}}break;case 5:Eo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Dg(J);continue}}se!==null?(se.return=Y,ue=se):Dg(J)}X=X.sibling}e:for(X=null,J=r;;){if(J.tag===5){if(X===null){X=J;try{d=J.stateNode,z?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=J.stateNode,P=J.memoizedProps.style,w=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=ia("display",w))}catch(he){rt(r,r.return,he)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(he){rt(r,r.return,he)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Wn(s,r),ar(r),c&4&&Pg(r);break;case 21:break;default:Wn(s,r),ar(r)}}function ar(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Ag(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Gr(d,""),c.flags&=-33);var g=Cg(r);Td(r,g,d);break;case 3:case 4:var w=c.stateNode.containerInfo,A=Cg(r);Ed(r,A,w);break;default:throw Error(t(161))}}catch(P){rt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function qE(r,s,a){ue=r,Ng(r)}function Ng(r,s,a){for(var c=(r.mode&1)!==0;ue!==null;){var d=ue,g=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||Ou;if(!w){var A=d.alternate,P=A!==null&&A.memoizedState!==null||zt;A=Ou;var z=zt;if(Ou=w,(zt=P)&&!z)for(ue=d;ue!==null;)w=ue,P=w.child,w.tag===22&&w.memoizedState!==null?Og(d):P!==null?(P.return=w,ue=P):Og(d);for(;g!==null;)ue=g,Ng(g),g=g.sibling;ue=d,Ou=A,zt=z}bg(r)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,ue=g):bg(r)}}function bg(r){for(;ue!==null;){var s=ue;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:zt||Vu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!zt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Bn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Dm(s,g,c);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Dm(s,w,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&jn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zt||s.flags&512&&wd(s)}catch(Y){rt(s,s.return,Y)}}if(s===r){ue=null;break}if(a=s.sibling,a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Dg(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Og(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Vu(4,s)}catch(P){rt(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){rt(s,d,P)}}var g=s.return;try{wd(s)}catch(P){rt(s,g,P)}break;case 5:var w=s.return;try{wd(s)}catch(P){rt(s,w,P)}}}catch(P){rt(s,s.return,P)}if(s===r){ue=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ue=A;break}ue=s.return}}var HE=Math.ceil,Lu=le.ReactCurrentDispatcher,Id=le.ReactCurrentOwner,Cn=le.ReactCurrentBatchConfig,Ve=0,St=null,ut=null,Dt=0,mn=0,To=si(0),vt=0,$a=null,fs=0,Mu=0,xd=0,Wa=null,en=null,Sd=0,Io=1/0,Dr=null,ju=!1,Ad=null,hi=null,Fu=!1,di=null,Uu=0,qa=0,Cd=null,zu=-1,Bu=0;function Kt(){return(Ve&6)!==0?We():zu!==-1?zu:zu=We()}function fi(r){return(r.mode&1)===0?1:(Ve&2)!==0&&Dt!==0?Dt&-Dt:PE.transition!==null?(Bu===0&&(Bu=ts()),Bu):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:_a(r.type)),r)}function qn(r,s,a,c){if(50<qa)throw qa=0,Cd=null,Error(t(185));Xr(r,a,c),((Ve&2)===0||r!==St)&&(r===St&&((Ve&2)===0&&(Mu|=a),vt===4&&pi(r,Dt)),tn(r,c),a===1&&Ve===0&&(s.mode&1)===0&&(Io=We()+500,gu&&ai()))}function tn(r,s){var a=r.callbackNode;Er(r,s);var c=es(r,r===St?Dt:0);if(c===0)a!==null&&pa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&pa(a),s===1)r.tag===0?RE(Lg.bind(null,r)):Em(Lg.bind(null,r)),xE(function(){(Ve&6)===0&&ai()}),a=null;else{switch(Zr(c)){case 1:a=Ji;break;case 4:a=Kr;break;case 16:a=wn;break;case 536870912:a=Bl;break;default:a=wn}a=Wg(a,Vg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Vg(r,s){if(zu=-1,Bu=0,(Ve&6)!==0)throw Error(t(327));var a=r.callbackNode;if(xo()&&r.callbackNode!==a)return null;var c=es(r,r===St?Dt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=$u(r,c);else{s=c;var d=Ve;Ve|=2;var g=jg();(St!==r||Dt!==s)&&(Dr=null,Io=We()+500,ms(r,s));do try{QE();break}catch(A){Mg(r,A)}while(!0);qh(),Lu.current=g,Ve=d,ut!==null?s=0:(St=null,Dt=0,s=vt)}if(s!==0){if(s===2&&(d=cn(r),d!==0&&(c=d,s=Rd(r,d))),s===1)throw a=$a,ms(r,0),pi(r,c),tn(r,We()),a;if(s===6)pi(r,c);else{if(d=r.current.alternate,(c&30)===0&&!GE(d)&&(s=$u(r,c),s===2&&(g=cn(r),g!==0&&(c=g,s=Rd(r,g))),s===1))throw a=$a,ms(r,0),pi(r,c),tn(r,We()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:gs(r,en,Dr);break;case 3:if(pi(r,c),(c&130023424)===c&&(s=Sd+500-We(),10<s)){if(es(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Kt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Oh(gs.bind(null,r,en,Dr),s);break}gs(r,en,Dr);break;case 4:if(pi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var w=31-qt(c);g=1<<w,w=s[w],w>d&&(d=w),c&=~g}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*HE(c/1960))-c,10<c){r.timeoutHandle=Oh(gs.bind(null,r,en,Dr),c);break}gs(r,en,Dr);break;case 5:gs(r,en,Dr);break;default:throw Error(t(329))}}}return tn(r,We()),r.callbackNode===a?Vg.bind(null,r):null}function Rd(r,s){var a=Wa;return r.current.memoizedState.isDehydrated&&(ms(r,s).flags|=256),r=$u(r,s),r!==2&&(s=en,en=a,s!==null&&Pd(s)),r}function Pd(r){en===null?en=r:en.push.apply(en,r)}function GE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Un(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function pi(r,s){for(s&=~xd,s&=~Mu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-qt(s),c=1<<a;r[a]=-1,s&=~c}}function Lg(r){if((Ve&6)!==0)throw Error(t(327));xo();var s=es(r,0);if((s&1)===0)return tn(r,We()),null;var a=$u(r,s);if(r.tag!==0&&a===2){var c=cn(r);c!==0&&(s=c,a=Rd(r,c))}if(a===1)throw a=$a,ms(r,0),pi(r,s),tn(r,We()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,gs(r,en,Dr),tn(r,We()),null}function kd(r,s){var a=Ve;Ve|=1;try{return r(s)}finally{Ve=a,Ve===0&&(Io=We()+500,gu&&ai())}}function ps(r){di!==null&&di.tag===0&&(Ve&6)===0&&xo();var s=Ve;Ve|=1;var a=Cn.transition,c=Ne;try{if(Cn.transition=null,Ne=1,r)return r()}finally{Ne=c,Cn.transition=a,Ve=s,(Ve&6)===0&&ai()}}function Nd(){mn=To.current,Qe(To)}function ms(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,IE(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(Uh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&pu();break;case 3:_o(),Qe(Xt),Qe(jt),Zh();break;case 5:Xh(c);break;case 4:_o();break;case 13:Qe(Ze);break;case 19:Qe(Ze);break;case 10:Hh(c.type._context);break;case 22:case 23:Nd()}a=a.return}if(St=r,ut=r=mi(r.current,null),Dt=mn=s,vt=0,$a=null,xd=Mu=fs=0,en=Wa=null,cs!==null){for(s=0;s<cs.length;s++)if(a=cs[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=d,c.next=w}a.pending=c}cs=null}return r}function Mg(r,s){do{var a=ut;try{if(qh(),Au.current=ku,Cu){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Cu=!1}if(ds=0,xt=yt=et=null,Ma=!1,ja=0,Id.current=null,a===null||a.return===null){vt=1,$a=s,ut=null;break}e:{var g=r,w=a.return,A=a,P=s;if(s=Dt,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,X=A,J=X.tag;if((X.mode&1)===0&&(J===0||J===11||J===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var se=lg(w);if(se!==null){se.flags&=-257,ug(se,w,A,g,s),se.mode&1&&ag(g,z,s),s=se,P=z;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(P),s.updateQueue=he}else ce.add(P);break e}else{if((s&1)===0){ag(g,z,s),bd();break e}P=Error(t(426))}}else if(Xe&&A.mode&1){var ot=lg(w);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),ug(ot,w,A,g,s),$h(wo(P,A));break e}}g=P=wo(P,A),vt!==4&&(vt=2),Wa===null?Wa=[g]:Wa.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=sg(g,P,s);bm(g,F);break e;case 1:A=P;var D=g.type,U=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(hi===null||!hi.has(U)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=og(g,A,s);bm(g,ee);break e}}g=g.return}while(g!==null)}Ug(a)}catch(de){s=de,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function jg(){var r=Lu.current;return Lu.current=ku,r===null?ku:r}function bd(){(vt===0||vt===3||vt===2)&&(vt=4),St===null||(fs&268435455)===0&&(Mu&268435455)===0||pi(St,Dt)}function $u(r,s){var a=Ve;Ve|=2;var c=jg();(St!==r||Dt!==s)&&(Dr=null,ms(r,s));do try{KE();break}catch(d){Mg(r,d)}while(!0);if(qh(),Ve=a,Lu.current=c,ut!==null)throw Error(t(261));return St=null,Dt=0,vt}function KE(){for(;ut!==null;)Fg(ut)}function QE(){for(;ut!==null&&!Ul();)Fg(ut)}function Fg(r){var s=$g(r.alternate,r,mn);r.memoizedProps=r.pendingProps,s===null?Ug(r):ut=s,Id.current=null}function Ug(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=zE(a,s,mn),a!==null){ut=a;return}}else{if(a=BE(a,s),a!==null){a.flags&=32767,ut=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{vt=6,ut=null;return}}if(s=s.sibling,s!==null){ut=s;return}ut=s=r}while(s!==null);vt===0&&(vt=5)}function gs(r,s,a){var c=Ne,d=Cn.transition;try{Cn.transition=null,Ne=1,YE(r,s,a,c)}finally{Cn.transition=d,Ne=c}return null}function YE(r,s,a,c){do xo();while(di!==null);if((Ve&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(Be(r,g),r===St&&(ut=St=null,Dt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Fu||(Fu=!0,Wg(wn,function(){return xo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Cn.transition,Cn.transition=null;var w=Ne;Ne=1;var A=Ve;Ve|=4,Id.current=null,WE(r,a),kg(a,r),gE(bh),ti=!!Nh,bh=Nh=null,r.current=a,qE(a),mh(),Ve=A,Ne=w,Cn.transition=g}else r.current=a;if(Fu&&(Fu=!1,di=r,Uu=d),g=r.pendingLanes,g===0&&(hi=null),$l(a.stateNode),tn(r,We()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ju)throw ju=!1,r=Ad,Ad=null,r;return(Uu&1)!==0&&r.tag!==0&&xo(),g=r.pendingLanes,(g&1)!==0?r===Cd?qa++:(qa=0,Cd=r):qa=0,ai(),null}function xo(){if(di!==null){var r=Zr(Uu),s=Cn.transition,a=Ne;try{if(Cn.transition=null,Ne=16>r?16:r,di===null)var c=!1;else{if(r=di,di=null,Uu=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,ue=r.current;ue!==null;){var g=ue,w=g.child;if((ue.flags&16)!==0){var A=g.deletions;if(A!==null){for(var P=0;P<A.length;P++){var z=A[P];for(ue=z;ue!==null;){var X=ue;switch(X.tag){case 0:case 11:case 15:Ba(8,X,g)}var J=X.child;if(J!==null)J.return=X,ue=J;else for(;ue!==null;){X=ue;var Y=X.sibling,se=X.return;if(Sg(X),X===z){ue=null;break}if(Y!==null){Y.return=se,ue=Y;break}ue=se}}}var ce=g.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var ot=he.sibling;he.sibling=null,he=ot}while(he!==null)}}ue=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,ue=w;else e:for(;ue!==null;){if(g=ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ba(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,ue=F;break e}ue=g.return}}var D=r.current;for(ue=D;ue!==null;){w=ue;var U=w.child;if((w.subtreeFlags&2064)!==0&&U!==null)U.return=w,ue=U;else e:for(w=D;ue!==null;){if(A=ue,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Vu(9,A)}}catch(de){rt(A,A.return,de)}if(A===w){ue=null;break e}var ee=A.sibling;if(ee!==null){ee.return=A.return,ue=ee;break e}ue=A.return}}if(Ve=d,ai(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Zi,r)}catch{}c=!0}return c}finally{Ne=a,Cn.transition=s}}return!1}function zg(r,s,a){s=wo(a,s),s=sg(r,s,1),r=ui(r,s,1),s=Kt(),r!==null&&(Xr(r,1,s),tn(r,s))}function rt(r,s,a){if(r.tag===3)zg(r,r,a);else for(;s!==null;){if(s.tag===3){zg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(hi===null||!hi.has(c))){r=wo(a,r),r=og(s,r,1),s=ui(s,r,1),r=Kt(),s!==null&&(Xr(s,1,r),tn(s,r));break}}s=s.return}}function XE(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Kt(),r.pingedLanes|=r.suspendedLanes&a,St===r&&(Dt&a)===a&&(vt===4||vt===3&&(Dt&130023424)===Dt&&500>We()-Sd?ms(r,0):xd|=a),tn(r,s)}function Bg(r,s){s===0&&((r.mode&1)===0?s=1:(s=Hs,Hs<<=1,(Hs&130023424)===0&&(Hs=4194304)));var a=Kt();r=kr(r,s),r!==null&&(Xr(r,s,a),tn(r,a))}function JE(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Bg(r,a)}function ZE(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Bg(r,a)}var $g;$g=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Xt.current)Zt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Zt=!1,UE(r,s,a);Zt=(r.flags&131072)!==0}else Zt=!1,Xe&&(s.flags&1048576)!==0&&Tm(s,vu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Du(r,s),r=s.pendingProps;var d=ho(s,jt.current);vo(s,a),d=nd(null,s,c,r,d,a);var g=rd();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Jt(c)?(g=!0,mu(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Qh(s),d.updater=Nu,s.stateNode=d,d._reactInternals=s,ud(s,c,r,a),s=fd(null,s,c,!0,g,a)):(s.tag=0,Xe&&g&&Fh(s),Gt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Du(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=tT(c),r=Bn(c,r),d){case 0:s=dd(null,s,c,r,a);break e;case 1:s=mg(null,s,c,r,a);break e;case 11:s=cg(null,s,c,r,a);break e;case 14:s=hg(null,s,c,Bn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Bn(c,d),dd(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Bn(c,d),mg(r,s,c,d,a);case 3:e:{if(gg(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,d=g.element,Nm(r,s),xu(s,c,null,a);var w=s.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=wo(Error(t(423)),s),s=yg(r,s,c,a,d);break e}else if(c!==d){d=wo(Error(t(424)),s),s=yg(r,s,c,a,d);break e}else for(pn=ii(s.stateNode.containerInfo.firstChild),fn=s,Xe=!0,zn=null,a=Pm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(mo(),c===d){s=br(r,s,a);break e}Gt(r,s,c,a)}s=s.child}return s;case 5:return Om(s),r===null&&Bh(s),c=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,w=d.children,Dh(c,d)?w=null:g!==null&&Dh(c,g)&&(s.flags|=32),pg(r,s),Gt(r,s,w,a),s.child;case 6:return r===null&&Bh(s),null;case 13:return vg(r,s,a);case 4:return Yh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=go(s,null,c,a):Gt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Bn(c,d),cg(r,s,c,d,a);case 7:return Gt(r,s,s.pendingProps,a),s.child;case 8:return Gt(r,s,s.pendingProps.children,a),s.child;case 12:return Gt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,g=s.memoizedProps,w=d.value,qe(Eu,c._currentValue),c._currentValue=w,g!==null)if(Un(g.value,w)){if(g.children===d.children&&!Xt.current){s=br(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){w=g.child;for(var P=A.firstContext;P!==null;){if(P.context===c){if(g.tag===1){P=Nr(-1,a&-a),P.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?P.next=P:(P.next=X.next,X.next=P),z.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),Gh(g.return,a,s),A.lanes|=a;break}P=P.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,A=w.alternate,A!==null&&(A.lanes|=a),Gh(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Gt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,vo(s,a),d=Sn(d),c=c(d),s.flags|=1,Gt(r,s,c,a),s.child;case 14:return c=s.type,d=Bn(c,s.pendingProps),d=Bn(c.type,d),hg(r,s,c,d,a);case 15:return dg(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Bn(c,d),Du(r,s),s.tag=1,Jt(c)?(r=!0,mu(s)):r=!1,vo(s,a),rg(s,c,d),ud(s,c,d,a),fd(null,s,c,!0,r,a);case 19:return wg(r,s,a);case 22:return fg(r,s,a)}throw Error(t(156,s.tag))};function Wg(r,s){return Ws(r,s)}function eT(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(r,s,a,c){return new eT(r,s,a,c)}function Dd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function tT(r){if(typeof r=="function")return Dd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===b)return 11;if(r===Lt)return 14}return 2}function mi(r,s){var a=r.alternate;return a===null?(a=Rn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Wu(r,s,a,c,d,g){var w=2;if(c=r,typeof r=="function")Dd(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case N:return ys(a.children,d,g,s);case S:w=8,d|=8;break;case R:return r=Rn(12,a,s,d|2),r.elementType=R,r.lanes=g,r;case C:return r=Rn(13,a,s,d),r.elementType=C,r.lanes=g,r;case Je:return r=Rn(19,a,s,d),r.elementType=Je,r.lanes=g,r;case ze:return qu(a,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:w=10;break e;case V:w=9;break e;case b:w=11;break e;case Lt:w=14;break e;case Mt:w=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Rn(w,a,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function ys(r,s,a,c){return r=Rn(7,r,c,s),r.lanes=a,r}function qu(r,s,a,c){return r=Rn(22,r,c,s),r.elementType=ze,r.lanes=a,r.stateNode={isHidden:!1},r}function Od(r,s,a){return r=Rn(6,r,null,s),r.lanes=a,r}function Vd(r,s,a){return s=Rn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function nT(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yr(0),this.expirationTimes=Yr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ld(r,s,a,c,d,g,w,A,P){return r=new nT(r,s,a,A,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Rn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qh(g),r}function rT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function qg(r){if(!r)return oi;r=r._reactInternals;e:{if(Dn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Jt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Jt(a))return _m(r,a,s)}return s}function Hg(r,s,a,c,d,g,w,A,P){return r=Ld(a,c,!0,r,d,g,w,A,P),r.context=qg(null),a=r.current,c=Kt(),d=fi(a),g=Nr(c,d),g.callback=s??null,ui(a,g,d),r.current.lanes=d,Xr(r,d,c),tn(r,c),r}function Hu(r,s,a,c){var d=s.current,g=Kt(),w=fi(d);return a=qg(a),s.context===null?s.context=a:s.pendingContext=a,s=Nr(g,w),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=ui(d,s,w),r!==null&&(qn(r,d,w,g),Iu(r,d,w)),w}function Gu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Gg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Md(r,s){Gg(r,s),(r=r.alternate)&&Gg(r,s)}function iT(){return null}var Kg=typeof reportError=="function"?reportError:function(r){console.error(r)};function jd(r){this._internalRoot=r}Ku.prototype.render=jd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Hu(r,s,null,null)},Ku.prototype.unmount=jd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ps(function(){Hu(null,r,null,null)}),s[Ar]=null}};function Ku(r){this._internalRoot=r}Ku.prototype.unstable_scheduleHydration=function(r){if(r){var s=Kl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<er.length&&s!==0&&s<er[a].priority;a++);er.splice(a,0,r),a===0&&Xl(r)}};function Fd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Qu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Qg(){}function sT(r,s,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var z=Gu(w);g.call(z)}}var w=Hg(s,c,r,0,null,!1,!1,"",Qg);return r._reactRootContainer=w,r[Ar]=w.current,Pa(r.nodeType===8?r.parentNode:r),ps(),w}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var z=Gu(P);A.call(z)}}var P=Ld(r,0,!1,null,null,!1,!1,"",Qg);return r._reactRootContainer=P,r[Ar]=P.current,Pa(r.nodeType===8?r.parentNode:r),ps(function(){Hu(s,P,a,c)}),P}function Yu(r,s,a,c,d){var g=a._reactRootContainer;if(g){var w=g;if(typeof d=="function"){var A=d;d=function(){var P=Gu(w);A.call(P)}}Hu(s,w,r,d)}else w=sT(a,s,r,d,c);return Gu(w)}Hl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Qr(s.pendingLanes);a!==0&&(Jr(s,a|1),tn(s,We()),(Ve&6)===0&&(Io=We()+500,ai()))}break;case 13:ps(function(){var c=kr(r,1);if(c!==null){var d=Kt();qn(c,r,1,d)}}),Md(r,1)}},Gs=function(r){if(r.tag===13){var s=kr(r,134217728);if(s!==null){var a=Kt();qn(s,r,134217728,a)}Md(r,134217728)}},Gl=function(r){if(r.tag===13){var s=fi(r),a=kr(r,s);if(a!==null){var c=Kt();qn(a,r,s,c)}Md(r,s)}},Kl=function(){return Ne},Ql=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},js=function(r,s,a){switch(s){case"input":if(ea(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=fu(c);if(!d)throw Error(t(90));bs(c),ea(c,d)}}}break;case"textarea":Ls(r,a);break;case"select":s=a.value,s!=null&&vr(r,!!a.multiple,s,!1)}},Ki=kd,ca=ps;var oT={usingClientEntryPoint:!1,Events:[ba,uo,fu,Jn,ua,kd]},Ha={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aT={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=fa(r),r===null?null:r.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||iT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{Zi=Xu.inject(aT),un=Xu}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oT,nn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(s))throw Error(t(200));return rT(r,s,null,a)},nn.createRoot=function(r,s){if(!Fd(r))throw Error(t(299));var a=!1,c="",d=Kg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Ld(r,1,!1,null,null,a,!1,c,d),r[Ar]=s.current,Pa(r.nodeType===8?r.parentNode:r),new jd(s)},nn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=fa(s),r=r===null?null:r.stateNode,r},nn.flushSync=function(r){return ps(r)},nn.hydrate=function(r,s,a){if(!Qu(s))throw Error(t(200));return Yu(null,r,s,!0,a)},nn.hydrateRoot=function(r,s,a){if(!Fd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",w=Kg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Hg(s,null,r,1,a??null,d,!1,g,w),r[Ar]=s.current,Pa(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Ku(s)},nn.render=function(r,s,a){if(!Qu(s))throw Error(t(200));return Yu(null,r,s,!1,a)},nn.unmountComponentAtNode=function(r){if(!Qu(r))throw Error(t(40));return r._reactRootContainer?(ps(function(){Yu(null,null,r,!1,function(){r._reactRootContainer=null,r[Ar]=null})}),!0):!1},nn.unstable_batchedUpdates=kd,nn.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Qu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Yu(r,s,a,!1,c)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var ry;function Xv(){if(ry)return Bd.exports;ry=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Bd.exports=gT(),Bd.exports}var iy;function yT(){if(iy)return Ju;iy=1;var n=Xv();return Ju.createRoot=n.createRoot,Ju.hydrateRoot=n.hydrateRoot,Ju}var vT=yT();const _T=Qv(vT);Xv();/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ol.apply(null,arguments)}var xi;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(xi||(xi={}));const sy="popstate";function wT(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return af("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Jv(o)}return TT(e,t,null,n)}function ft(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Wf(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ET(){return Math.random().toString(36).substr(2,8)}function oy(n,e){return{usr:n.state,key:n.key,idx:e}}function af(n,e,t,i){return t===void 0&&(t=null),ol({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?$o(e):e,{state:t,key:e&&e.key||i||ET()})}function Jv(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function $o(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function TT(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f=xi.Pop,p=null,y=_();y==null&&(y=0,h.replaceState(ol({},h.state,{idx:y}),""));function _(){return(h.state||{idx:null}).idx}function E(){f=xi.Pop;let L=_(),te=L==null?null:L-y;y=L,p&&p({action:f,location:B.location,delta:te})}function x(L,te){f=xi.Push;let Q=af(B.location,L,te);y=_()+1;let Z=oy(Q,y),le=B.createHref(Q);try{h.pushState(Z,"",le)}catch(xe){if(xe instanceof DOMException&&xe.name==="DataCloneError")throw xe;o.location.assign(le)}l&&p&&p({action:f,location:B.location,delta:1})}function O(L,te){f=xi.Replace;let Q=af(B.location,L,te);y=_();let Z=oy(Q,y),le=B.createHref(Q);h.replaceState(Z,"",le),l&&p&&p({action:f,location:B.location,delta:0})}function $(L){let te=o.location.origin!=="null"?o.location.origin:o.location.href,Q=typeof L=="string"?L:Jv(L);return Q=Q.replace(/ $/,"%20"),ft(te,"No window.location.(origin|href) available to create URL for href: "+Q),new URL(Q,te)}let B={get action(){return f},get location(){return n(o,h)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(sy,E),p=L,()=>{o.removeEventListener(sy,E),p=null}},createHref(L){return e(o,L)},createURL:$,encodeLocation(L){let te=$(L);return{pathname:te.pathname,search:te.search,hash:te.hash}},push:x,replace:O,go(L){return h.go(L)}};return B}var ay;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(ay||(ay={}));function IT(n,e,t){return t===void 0&&(t="/"),xT(n,e,t)}function xT(n,e,t,i){let o=typeof e=="string"?$o(e):e,l=t_(o.pathname||"/",t);if(l==null)return null;let h=Zv(n);ST(h);let f=null,p=MT(l);for(let y=0;f==null&&y<h.length;++y)f=OT(h[y],p);return f}function Zv(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,h,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(ft(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let y=ws([i,p.relativePath]),_=t.concat(p);l.children&&l.children.length>0&&(ft(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Zv(l.children,e,_,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:bT(y,l.index),routesMeta:_})};return n.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let p of e_(l.path))o(l,h,p)}),e}function e_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=e_(i.join("/")),f=[];return f.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...h),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function ST(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:DT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const AT=/^:[\w-]+$/,CT=3,RT=2,PT=1,kT=10,NT=-2,ly=n=>n==="*";function bT(n,e){let t=n.split("/"),i=t.length;return t.some(ly)&&(i+=NT),e&&(i+=RT),t.filter(o=>!ly(o)).reduce((o,l)=>o+(AT.test(l)?CT:l===""?PT:kT),i)}function DT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function OT(n,e,t){let{routesMeta:i}=n,o={},l="/",h=[];for(let f=0;f<i.length;++f){let p=i[f],y=f===i.length-1,_=l==="/"?e:e.slice(l.length)||"/",E=VT({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},_),x=p.route;if(!E)return null;Object.assign(o,E.params),h.push({params:o,pathname:ws([l,E.pathname]),pathnameBase:BT(ws([l,E.pathnameBase])),route:x}),E.pathnameBase!=="/"&&(l=ws([l,E.pathnameBase]))}return h}function VT(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=LT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,_,E)=>{let{paramName:x,isOptional:O}=_;if(x==="*"){let B=f[E]||"";h=l.slice(0,l.length-B.length).replace(/(.)\/+$/,"$1")}const $=f[E];return O&&!$?y[x]=void 0:y[x]=($||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function LT(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Wf(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function MT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Wf(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function t_(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const jT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,FT=n=>jT.test(n);function UT(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?$o(n):n,l;if(t)if(FT(t))l=t;else{if(t.includes("//")){let h=t;t=i_(t),Wf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+t))}t.startsWith("/")?l=uy(t.substring(1),"/"):l=uy(t,e)}else l=e;return{pathname:l,search:$T(i),hash:WT(o)}}function uy(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function qd(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function n_(n,e){let t=zT(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function r_(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=$o(n):(o=ol({},n),ft(!o.pathname||!o.pathname.includes("?"),qd("?","pathname","search",o)),ft(!o.pathname||!o.pathname.includes("#"),qd("#","pathname","hash",o)),ft(!o.search||!o.search.includes("#"),qd("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let E=e.length-1;if(!i&&h.startsWith("..")){let x=h.split("/");for(;x[0]==="..";)x.shift(),E-=1;o.pathname=x.join("/")}f=E>=0?e[E]:"/"}let p=UT(o,f),y=h&&h!=="/"&&h.endsWith("/"),_=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||_)&&(p.pathname+="/"),p}const i_=n=>n.replace(/\/\/+/g,"/"),ws=n=>i_(n.join("/")),BT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),$T=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,WT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function qT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const s_=["post","put","patch","delete"];new Set(s_);const HT=["get",...s_];new Set(HT);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},al.apply(null,arguments)}const qf=W.createContext(null),GT=W.createContext(null),yl=W.createContext(null),Mc=W.createContext(null),Cs=W.createContext({outlet:null,matches:[],isDataRoute:!1}),o_=W.createContext(null);function vl(){return W.useContext(Mc)!=null}function jc(){return vl()||ft(!1),W.useContext(Mc).location}function a_(n){W.useContext(yl).static||W.useLayoutEffect(n)}function Wo(){let{isDataRoute:n}=W.useContext(Cs);return n?oI():KT()}function KT(){vl()||ft(!1);let n=W.useContext(qf),{basename:e,future:t,navigator:i}=W.useContext(yl),{matches:o}=W.useContext(Cs),{pathname:l}=jc(),h=JSON.stringify(n_(o,t.v7_relativeSplatPath)),f=W.useRef(!1);return a_(()=>{f.current=!0}),W.useCallback(function(y,_){if(_===void 0&&(_={}),!f.current)return;if(typeof y=="number"){i.go(y);return}let E=r_(y,JSON.parse(h),l,_.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:ws([e,E.pathname])),(_.replace?i.replace:i.push)(E,_.state,_)},[e,i,h,l,n])}function QT(n,e){return YT(n,e)}function YT(n,e,t,i){vl()||ft(!1);let{navigator:o}=W.useContext(yl),{matches:l}=W.useContext(Cs),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let p=h?h.pathnameBase:"/";h&&h.route;let y=jc(),_;if(e){var E;let L=typeof e=="string"?$o(e):e;p==="/"||(E=L.pathname)!=null&&E.startsWith(p)||ft(!1),_=L}else _=y;let x=_.pathname||"/",O=x;if(p!=="/"){let L=p.replace(/^\//,"").split("/");O="/"+x.replace(/^\//,"").split("/").slice(L.length).join("/")}let $=IT(n,{pathname:O}),B=tI($&&$.map(L=>Object.assign({},L,{params:Object.assign({},f,L.params),pathname:ws([p,o.encodeLocation?o.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?p:ws([p,o.encodeLocation?o.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),l,t,i);return e&&B?W.createElement(Mc.Provider,{value:{location:al({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:xi.Pop}},B):B}function XT(){let n=sI(),e=qT(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,null)}const JT=W.createElement(XT,null);class ZT extends W.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?W.createElement(Cs.Provider,{value:this.props.routeContext},W.createElement(o_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eI(n){let{routeContext:e,match:t,children:i}=n,o=W.useContext(qf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),W.createElement(Cs.Provider,{value:e},i)}function tI(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let h=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let _=h.findIndex(E=>E.route.id&&(f==null?void 0:f[E.route.id])!==void 0);_>=0||ft(!1),h=h.slice(0,Math.min(h.length,_+1))}let p=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let _=0;_<h.length;_++){let E=h[_];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=_),E.route.id){let{loaderData:x,errors:O}=t,$=E.route.loader&&x[E.route.id]===void 0&&(!O||O[E.route.id]===void 0);if(E.route.lazy||$){p=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((_,E,x)=>{let O,$=!1,B=null,L=null;t&&(O=f&&E.route.id?f[E.route.id]:void 0,B=E.route.errorElement||JT,p&&(y<0&&x===0?(aI("route-fallback"),$=!0,L=null):y===x&&($=!0,L=E.route.hydrateFallbackElement||null)));let te=e.concat(h.slice(0,x+1)),Q=()=>{let Z;return O?Z=B:$?Z=L:E.route.Component?Z=W.createElement(E.route.Component,null):E.route.element?Z=E.route.element:Z=_,W.createElement(eI,{match:E,routeContext:{outlet:_,matches:te,isDataRoute:t!=null},children:Z})};return t&&(E.route.ErrorBoundary||E.route.errorElement||x===0)?W.createElement(ZT,{location:t.location,revalidation:t.revalidation,component:B,error:O,children:Q(),routeContext:{outlet:null,matches:te,isDataRoute:!0}}):Q()},null)}var l_=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(l_||{}),u_=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(u_||{});function nI(n){let e=W.useContext(qf);return e||ft(!1),e}function rI(n){let e=W.useContext(GT);return e||ft(!1),e}function iI(n){let e=W.useContext(Cs);return e||ft(!1),e}function c_(n){let e=iI(),t=e.matches[e.matches.length-1];return t.route.id||ft(!1),t.route.id}function sI(){var n;let e=W.useContext(o_),t=rI(),i=c_();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function oI(){let{router:n}=nI(l_.UseNavigateStable),e=c_(u_.UseNavigateStable),t=W.useRef(!1);return a_(()=>{t.current=!0}),W.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,al({fromRouteId:e},l)))},[n,e])}const cy={};function aI(n,e,t){cy[n]||(cy[n]=!0)}function lI(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function lf(n){let{to:e,replace:t,state:i,relative:o}=n;vl()||ft(!1);let{future:l,static:h}=W.useContext(yl),{matches:f}=W.useContext(Cs),{pathname:p}=jc(),y=Wo(),_=r_(e,n_(f,l.v7_relativeSplatPath),p,o==="path"),E=JSON.stringify(_);return W.useEffect(()=>y(JSON.parse(E),{replace:t,state:i,relative:o}),[y,E,o,t,i]),null}function So(n){ft(!1)}function uI(n){let{basename:e="/",children:t=null,location:i,navigationType:o=xi.Pop,navigator:l,static:h=!1,future:f}=n;vl()&&ft(!1);let p=e.replace(/^\/*/,"/"),y=W.useMemo(()=>({basename:p,navigator:l,static:h,future:al({v7_relativeSplatPath:!1},f)}),[p,f,l,h]);typeof i=="string"&&(i=$o(i));let{pathname:_="/",search:E="",hash:x="",state:O=null,key:$="default"}=i,B=W.useMemo(()=>{let L=t_(_,p);return L==null?null:{location:{pathname:L,search:E,hash:x,state:O,key:$},navigationType:o}},[p,_,E,x,O,$,o]);return B==null?null:W.createElement(yl.Provider,{value:y},W.createElement(Mc.Provider,{children:t,value:B}))}function cI(n){let{children:e,location:t}=n;return QT(uf(e),t)}new Promise(()=>{});function uf(n,e){e===void 0&&(e=[]);let t=[];return W.Children.forEach(n,(i,o)=>{if(!W.isValidElement(i))return;let l=[...e,o];if(i.type===W.Fragment){t.push.apply(t,uf(i.props.children,l));return}i.type!==So&&ft(!1),!i.props.index||!i.props.children||ft(!1);let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=uf(i.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const hI="6";try{window.__reactRouterVersion=hI}catch{}const dI="startTransition",hy=fT[dI];function fI(n){let{basename:e,children:t,future:i,window:o}=n,l=W.useRef();l.current==null&&(l.current=wT({window:o,v5Compat:!0}));let h=l.current,[f,p]=W.useState({action:h.action,location:h.location}),{v7_startTransition:y}=i||{},_=W.useCallback(E=>{y&&hy?hy(()=>p(E)):p(E)},[p,y]);return W.useLayoutEffect(()=>h.listen(_),[h,_]),W.useEffect(()=>lI(i),[i]),W.createElement(uI,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:i})}var dy;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(dy||(dy={}));var fy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(fy||(fy={}));let pI={data:""},mI=n=>{if(typeof window=="object"){let e=(n?n.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(n||document.head).appendChild(e),e.firstChild}return n||pI},gI=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,yI=/\/\*[^]*?\*\/|  +/g,py=/\n+/g,_i=(n,e)=>{let t="",i="",o="";for(let l in n){let h=n[l];l[0]=="@"?l[1]=="i"?t=l+" "+h+";":i+=l[1]=="f"?_i(h,l):l+"{"+_i(h,l[1]=="k"?"":e)+"}":typeof h=="object"?i+=_i(h,e?e.replace(/([^,])+/g,f=>l.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,p=>/&/.test(p)?p.replace(/&/g,f):f?f+" "+p:p)):l):h!=null&&(l=l[1]=="-"?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=_i.p?_i.p(l,h):l+":"+h+";")}return t+(e&&o?e+"{"+o+"}":o)+i},yi={},h_=n=>{if(typeof n=="object"){let e="";for(let t in n)e+=t+h_(n[t]);return e}return n},vI=(n,e,t,i,o)=>{let l=h_(n),h=yi[l]||(yi[l]=(p=>{let y=0,_=11;for(;y<p.length;)_=101*_+p.charCodeAt(y++)>>>0;return"go"+_})(l));if(!yi[h]){let p=l!==n?n:(y=>{let _,E,x=[{}];for(;_=gI.exec(y.replace(yI,""));)_[4]?x.shift():_[3]?(E=_[3].replace(py," ").trim(),x.unshift(x[0][E]=x[0][E]||{})):x[0][_[1]]=_[2].replace(py," ").trim();return x[0]})(n);yi[h]=_i(o?{["@keyframes "+h]:p}:p,t?"":"."+h)}let f=t&&yi.g;return t&&(yi.g=yi[h]),((p,y,_,E)=>{E?y.data=y.data.replace(E,p):y.data.indexOf(p)===-1&&(y.data=_?p+y.data:y.data+p)})(yi[h],e,i,f),h},_I=(n,e,t)=>n.reduce((i,o,l)=>{let h=e[l];if(h&&h.call){let f=h(t),p=f&&f.props&&f.props.className||/^go/.test(f)&&f;h=p?"."+p:f&&typeof f=="object"?f.props?"":_i(f,""):f===!1?"":f}return i+o+(h??"")},"");function Fc(n){let e=this||{},t=n.call?n(e.p):n;return vI(t.unshift?t.raw?_I(t,[].slice.call(arguments,1),e.p):t.reduce((i,o)=>Object.assign(i,o&&o.call?o(e.p):o),{}):t,mI(e.target),e.g,e.o,e.k)}let d_,cf,hf;Fc.bind({g:1});let Fr=Fc.bind({k:1});function wI(n,e,t,i){_i.p=e,d_=n,cf=t,hf=i}function Fi(n,e){let t=this||{};return function(){let i=arguments;function o(l,h){let f=Object.assign({},l),p=f.className||o.className;t.p=Object.assign({theme:cf&&cf()},f),t.o=/go\d/.test(p),f.className=Fc.apply(t,i)+(p?" "+p:"");let y=n;return n[0]&&(y=f.as||n,delete f.as),hf&&y[0]&&hf(f),d_(y,f)}return o}}var EI=n=>typeof n=="function",yc=(n,e)=>EI(n)?n(e):n,TI=(()=>{let n=0;return()=>(++n).toString()})(),f_=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n}})(),II=20,Hf="default",p_=(n,e)=>{let{toastLimit:t}=n.settings;switch(e.type){case 0:return{...n,toasts:[e.toast,...n.toasts].slice(0,t)};case 1:return{...n,toasts:n.toasts.map(h=>h.id===e.toast.id?{...h,...e.toast}:h)};case 2:let{toast:i}=e;return p_(n,{type:n.toasts.find(h=>h.id===i.id)?1:0,toast:i});case 3:let{toastId:o}=e;return{...n,toasts:n.toasts.map(h=>h.id===o||o===void 0?{...h,dismissed:!0,visible:!1}:h)};case 4:return e.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(h=>h.id!==e.toastId)};case 5:return{...n,pausedAt:e.time};case 6:let l=e.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(h=>({...h,pauseDuration:h.pauseDuration+l}))}}},ac=[],m_={toasts:[],pausedAt:void 0,settings:{toastLimit:II}},ur={},g_=(n,e=Hf)=>{ur[e]=p_(ur[e]||m_,n),ac.forEach(([t,i])=>{t===e&&i(ur[e])})},y_=n=>Object.keys(ur).forEach(e=>g_(n,e)),xI=n=>Object.keys(ur).find(e=>ur[e].toasts.some(t=>t.id===n)),Uc=(n=Hf)=>e=>{g_(e,n)},SI={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},AI=(n={},e=Hf)=>{let[t,i]=W.useState(ur[e]||m_),o=W.useRef(ur[e]);W.useEffect(()=>(o.current!==ur[e]&&i(ur[e]),ac.push([e,i]),()=>{let h=ac.findIndex(([f])=>f===e);h>-1&&ac.splice(h,1)}),[e]);let l=t.toasts.map(h=>{var f,p,y;return{...n,...n[h.type],...h,removeDelay:h.removeDelay||((f=n[h.type])==null?void 0:f.removeDelay)||(n==null?void 0:n.removeDelay),duration:h.duration||((p=n[h.type])==null?void 0:p.duration)||(n==null?void 0:n.duration)||SI[h.type],style:{...n.style,...(y=n[h.type])==null?void 0:y.style,...h.style}}});return{...t,toasts:l}},CI=(n,e="blank",t)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...t,id:(t==null?void 0:t.id)||TI()}),_l=n=>(e,t)=>{let i=CI(e,n,t);return Uc(i.toasterId||xI(i.id))({type:2,toast:i}),i.id},_t=(n,e)=>_l("blank")(n,e);_t.error=_l("error");_t.success=_l("success");_t.loading=_l("loading");_t.custom=_l("custom");_t.dismiss=(n,e)=>{let t={type:3,toastId:n};e?Uc(e)(t):y_(t)};_t.dismissAll=n=>_t.dismiss(void 0,n);_t.remove=(n,e)=>{let t={type:4,toastId:n};e?Uc(e)(t):y_(t)};_t.removeAll=n=>_t.remove(void 0,n);_t.promise=(n,e,t)=>{let i=_t.loading(e.loading,{...t,...t==null?void 0:t.loading});return typeof n=="function"&&(n=n()),n.then(o=>{let l=e.success?yc(e.success,o):void 0;return l?_t.success(l,{id:i,...t,...t==null?void 0:t.success}):_t.dismiss(i),o}).catch(o=>{let l=e.error?yc(e.error,o):void 0;l?_t.error(l,{id:i,...t,...t==null?void 0:t.error}):_t.dismiss(i)}),n};var RI=1e3,PI=(n,e="default")=>{let{toasts:t,pausedAt:i}=AI(n,e),o=W.useRef(new Map).current,l=W.useCallback((E,x=RI)=>{if(o.has(E))return;let O=setTimeout(()=>{o.delete(E),h({type:4,toastId:E})},x);o.set(E,O)},[]);W.useEffect(()=>{if(i)return;let E=Date.now(),x=t.map(O=>{if(O.duration===1/0)return;let $=(O.duration||0)+O.pauseDuration-(E-O.createdAt);if($<0){O.visible&&_t.dismiss(O.id);return}return setTimeout(()=>_t.dismiss(O.id,e),$)});return()=>{x.forEach(O=>O&&clearTimeout(O))}},[t,i,e]);let h=W.useCallback(Uc(e),[e]),f=W.useCallback(()=>{h({type:5,time:Date.now()})},[h]),p=W.useCallback((E,x)=>{h({type:1,toast:{id:E,height:x}})},[h]),y=W.useCallback(()=>{i&&h({type:6,time:Date.now()})},[i,h]),_=W.useCallback((E,x)=>{let{reverseOrder:O=!1,gutter:$=8,defaultPosition:B}=x||{},L=t.filter(Z=>(Z.position||B)===(E.position||B)&&Z.height),te=L.findIndex(Z=>Z.id===E.id),Q=L.filter((Z,le)=>le<te&&Z.visible).length;return L.filter(Z=>Z.visible).slice(...O?[Q+1]:[0,Q]).reduce((Z,le)=>Z+(le.height||0)+$,0)},[t]);return W.useEffect(()=>{t.forEach(E=>{if(E.dismissed)l(E.id,E.removeDelay);else{let x=o.get(E.id);x&&(clearTimeout(x),o.delete(E.id))}})},[t,l]),{toasts:t,handlers:{updateHeight:p,startPause:f,endPause:y,calculateOffset:_}}},kI=Fr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,NI=Fr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,bI=Fr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,DI=Fi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${kI} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${NI} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${n=>n.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${bI} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,OI=Fr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,VI=Fi("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${OI} 1s linear infinite;
`,LI=Fr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,MI=Fr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,jI=Fi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${LI} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${MI} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${n=>n.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,FI=Fi("div")`
  position: absolute;
`,UI=Fi("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,zI=Fr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,BI=Fi("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${zI} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,$I=({toast:n})=>{let{icon:e,type:t,iconTheme:i}=n;return e!==void 0?typeof e=="string"?W.createElement(BI,null,e):e:t==="blank"?null:W.createElement(UI,null,W.createElement(VI,{...i}),t!=="loading"&&W.createElement(FI,null,t==="error"?W.createElement(DI,{...i}):W.createElement(jI,{...i})))},WI=n=>`
0% {transform: translate3d(0,${n*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,qI=n=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n*-150}%,-1px) scale(.6); opacity:0;}
`,HI="0%{opacity:0;} 100%{opacity:1;}",GI="0%{opacity:1;} 100%{opacity:0;}",KI=Fi("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,QI=Fi("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,YI=(n,e)=>{let t=n.includes("top")?1:-1,[i,o]=f_()?[HI,GI]:[WI(t),qI(t)];return{animation:e?`${Fr(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Fr(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},XI=W.memo(({toast:n,position:e,style:t,children:i})=>{let o=n.height?YI(n.position||e||"top-center",n.visible):{opacity:0},l=W.createElement($I,{toast:n}),h=W.createElement(QI,{...n.ariaProps},yc(n.message,n));return W.createElement(KI,{className:n.className,style:{...o,...t,...n.style}},typeof i=="function"?i({icon:l,message:h}):W.createElement(W.Fragment,null,l,h))});wI(W.createElement);var JI=({id:n,className:e,style:t,onHeightUpdate:i,children:o})=>{let l=W.useCallback(h=>{if(h){let f=()=>{let p=h.getBoundingClientRect().height;i(n,p)};f(),new MutationObserver(f).observe(h,{subtree:!0,childList:!0,characterData:!0})}},[n,i]);return W.createElement("div",{ref:l,className:e,style:t},o)},ZI=(n,e)=>{let t=n.includes("top"),i=t?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:f_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(t?1:-1)}px)`,...i,...o}},e1=Fc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Zu=16,t1=({reverseOrder:n,position:e="top-center",toastOptions:t,gutter:i,children:o,toasterId:l,containerStyle:h,containerClassName:f})=>{let{toasts:p,handlers:y}=PI(t,l);return W.createElement("div",{"data-rht-toaster":l||"",style:{position:"fixed",zIndex:9999,top:Zu,left:Zu,right:Zu,bottom:Zu,pointerEvents:"none",...h},className:f,onMouseEnter:y.startPause,onMouseLeave:y.endPause},p.map(_=>{let E=_.position||e,x=y.calculateOffset(_,{reverseOrder:n,gutter:i,defaultPosition:e}),O=ZI(E,x);return W.createElement(JI,{id:_.id,key:_.id,onHeightUpdate:y.updateHeight,className:_.visible?e1:"",style:O},_.type==="custom"?yc(_.message,_):o?o(_):W.createElement(XI,{toast:_,position:E}))}))},it=_t;const n1="modulepreload",r1=function(n){return"/"+n},my={},i1=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let h=function(y){return Promise.all(y.map(_=>Promise.resolve(_).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),p=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=h(t.map(y=>{if(y=r1(y),y in my)return;my[y]=!0;const _=y.endsWith(".css"),E=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${E}`))return;const x=document.createElement("link");if(x.rel=_?"stylesheet":n1,_||(x.as="script"),x.crossOrigin="",x.href=y,p&&x.setAttribute("nonce",p),document.head.appendChild(x),_)return new Promise((O,$)=>{x.addEventListener("load",O),x.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${y}`)))})}))}function l(h){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=h,window.dispatchEvent(f),!f.defaultPrevented)throw h}return o.then(h=>{for(const f of h||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})},s1=()=>{};var gy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},o1=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},__={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,_=l>>2,E=(l&3)<<4|f>>4;let x=(f&15)<<2|y>>6,O=y&63;p||(O=64,h||(x=64)),i.push(t[_],t[E],t[x],t[O])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(v_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):o1(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||E==null)throw new a1;const x=l<<2|f>>4;if(i.push(x),y!==64){const O=f<<4&240|y>>2;if(i.push(O),E!==64){const $=y<<6&192|E;i.push($)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class a1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l1=function(n){const e=v_(n);return __.encodeByteArray(e,!0)},w_=function(n){return l1(n).replace(/\./g,"")},E_=function(n){try{return __.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=()=>u1().__FIREBASE_DEFAULTS__,h1=()=>{if(typeof process>"u"||typeof gy>"u")return;const n=gy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},d1=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&E_(n[1]);return e&&JSON.parse(e)},zc=()=>{try{return s1()||c1()||h1()||d1()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},f1=n=>{var e,t;return(t=(e=zc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},T_=()=>{var n;return(n=zc())===null||n===void 0?void 0:n.config},I_=n=>{var e;return(e=zc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function x_(n){return(await fetch(n,{credentials:"include"})).ok}const Za={};function m1(){const n={prod:[],emulator:[]};for(const e of Object.keys(Za))Za[e]?n.emulator.push(e):n.prod.push(e);return n}function g1(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let yy=!1;function y1(n,e){if(typeof window>"u"||typeof document>"u"||!qo(window.location.host)||Za[n]===e||Za[n]||yy)return;Za[n]=e;function t(x){return`__firebase__banner__${x}`}const i="__firebase__banner",l=m1().prod.length>0;function h(){const x=document.getElementById(i);x&&x.remove()}function f(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function p(x,O){x.setAttribute("width","24"),x.setAttribute("id",O),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function y(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{yy=!0,h()},x}function _(x,O){x.setAttribute("id",O),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function E(){const x=g1(i),O=t("text"),$=document.getElementById(O)||document.createElement("span"),B=t("learnmore"),L=document.getElementById(B)||document.createElement("a"),te=t("preprendIcon"),Q=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const Z=x.element;f(Z),_(L,B);const le=y();p(Q,te),Z.append(Q,$,L,le),document.body.appendChild(Z)}l?($.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function v1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function _1(){var n;const e=(n=zc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function w1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function E1(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function T1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I1(){const n=Wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function x1(){return!_1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S1(){try{return typeof indexedDB=="object"}catch{return!1}}function A1(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1="FirebaseError";class Wr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=C1,Object.setPrototypeOf(this,Wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wl.prototype.create)}}class wl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?R1(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Wr(o,f,i)}}function R1(n,e){return n.replace(P1,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const P1=/\{\$([^}]+)}/g;function k1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Es(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(vy(l)&&vy(h)){if(!Es(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function vy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ka(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Qa(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function N1(n,e){const t=new b1(n,e);return t.subscribe.bind(t)}class b1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");D1(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Hd),o.error===void 0&&(o.error=Hd),o.complete===void 0&&(o.complete=Hd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D1(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n){return n&&n._delegate?n._delegate:n}class Ts{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new p1;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(L1(e))try{this.getOrInitializeService({instanceIdentifier:vs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vs){return this.instances.has(e)}getOptions(e=vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:V1(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=vs){return this.component?this.component.multipleInstances?e:vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function V1(n){return n===vs?void 0:n}function L1(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new O1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const j1={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},F1=Pe.INFO,U1={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},z1=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=U1[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gf{constructor(e){this.name=e,this._logLevel=F1,this._logHandler=z1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?j1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const B1=(n,e)=>e.some(t=>n instanceof t);let _y,wy;function $1(){return _y||(_y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W1(){return wy||(wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S_=new WeakMap,df=new WeakMap,A_=new WeakMap,Gd=new WeakMap,Kf=new WeakMap;function q1(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Ai(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&S_.set(t,n)}).catch(()=>{}),Kf.set(e,n),e}function H1(n){if(df.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});df.set(n,e)}let ff={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return df.get(n);if(e==="objectStoreNames")return n.objectStoreNames||A_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ai(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function G1(n){ff=n(ff)}function K1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Kd(this),e,...t);return A_.set(i,e.sort?e.sort():[e]),Ai(i)}:W1().includes(n)?function(...e){return n.apply(Kd(this),e),Ai(S_.get(this))}:function(...e){return Ai(n.apply(Kd(this),e))}}function Q1(n){return typeof n=="function"?K1(n):(n instanceof IDBTransaction&&H1(n),B1(n,$1())?new Proxy(n,ff):n)}function Ai(n){if(n instanceof IDBRequest)return q1(n);if(Gd.has(n))return Gd.get(n);const e=Q1(n);return e!==n&&(Gd.set(n,e),Kf.set(e,n)),e}const Kd=n=>Kf.get(n);function Y1(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=Ai(h);return i&&h.addEventListener("upgradeneeded",p=>{i(Ai(h.result),p.oldVersion,p.newVersion,Ai(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const X1=["get","getKey","getAll","getAllKeys","count"],J1=["put","add","delete","clear"],Qd=new Map;function Ey(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qd.get(e))return Qd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=J1.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||X1.includes(t)))return;const l=async function(h,...f){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return Qd.set(e,l),l}G1(n=>({...n,get:(e,t,i)=>Ey(e,t)||n.get(e,t,i),has:(e,t)=>!!Ey(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ex(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function ex(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pf="@firebase/app",Ty="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Gf("@firebase/app"),tx="@firebase/app-compat",nx="@firebase/analytics-compat",rx="@firebase/analytics",ix="@firebase/app-check-compat",sx="@firebase/app-check",ox="@firebase/auth",ax="@firebase/auth-compat",lx="@firebase/database",ux="@firebase/data-connect",cx="@firebase/database-compat",hx="@firebase/functions",dx="@firebase/functions-compat",fx="@firebase/installations",px="@firebase/installations-compat",mx="@firebase/messaging",gx="@firebase/messaging-compat",yx="@firebase/performance",vx="@firebase/performance-compat",_x="@firebase/remote-config",wx="@firebase/remote-config-compat",Ex="@firebase/storage",Tx="@firebase/storage-compat",Ix="@firebase/firestore",xx="@firebase/ai",Sx="@firebase/firestore-compat",Ax="firebase",Cx="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="[DEFAULT]",Rx={[pf]:"fire-core",[tx]:"fire-core-compat",[rx]:"fire-analytics",[nx]:"fire-analytics-compat",[sx]:"fire-app-check",[ix]:"fire-app-check-compat",[ox]:"fire-auth",[ax]:"fire-auth-compat",[lx]:"fire-rtdb",[ux]:"fire-data-connect",[cx]:"fire-rtdb-compat",[hx]:"fire-fn",[dx]:"fire-fn-compat",[fx]:"fire-iid",[px]:"fire-iid-compat",[mx]:"fire-fcm",[gx]:"fire-fcm-compat",[yx]:"fire-perf",[vx]:"fire-perf-compat",[_x]:"fire-rc",[wx]:"fire-rc-compat",[Ex]:"fire-gcs",[Tx]:"fire-gcs-compat",[Ix]:"fire-fst",[Sx]:"fire-fst-compat",[xx]:"fire-vertex","fire-js":"fire-js",[Ax]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=new Map,Px=new Map,gf=new Map;function Iy(n,e){try{n.container.addComponent(e)}catch(t){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Lo(n){const e=n.name;if(gf.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;gf.set(e,n);for(const t of vc.values())Iy(t,n);for(const t of Px.values())Iy(t,n);return!0}function Qf(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Pn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ci=new wl("app","Firebase",kx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ci.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=Cx;function C_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:mf,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Ci.create("bad-app-name",{appName:String(o)});if(t||(t=T_()),!t)throw Ci.create("no-options");const l=vc.get(o);if(l){if(Es(t,l.options)&&Es(i,l.config))return l;throw Ci.create("duplicate-app",{appName:o})}const h=new M1(o);for(const p of gf.values())h.addComponent(p);const f=new Nx(t,i,h);return vc.set(o,f),f}function bx(n=mf){const e=vc.get(n);if(!e&&n===mf&&T_())return C_();if(!e)throw Ci.create("no-app",{appName:n});return e}function Ri(n,e,t){var i;let o=(i=Rx[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(f.join(" "));return}Lo(new Ts(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx="firebase-heartbeat-database",Ox=1,ll="firebase-heartbeat-store";let Yd=null;function R_(){return Yd||(Yd=Y1(Dx,Ox,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ll)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ci.create("idb-open",{originalErrorMessage:n.message})})),Yd}async function Vx(n){try{const t=(await R_()).transaction(ll),i=await t.objectStore(ll).get(P_(n));return await t.done,i}catch(e){if(e instanceof Wr)Ur.warn(e.message);else{const t=Ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(t.message)}}}async function xy(n,e){try{const i=(await R_()).transaction(ll,"readwrite");await i.objectStore(ll).put(e,P_(n)),await i.done}catch(t){if(t instanceof Wr)Ur.warn(t.message);else{const i=Ci.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ur.warn(i.message)}}}function P_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=1024,Mx=30;class jx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ux(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Sy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>Mx){const h=zx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ur.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sy(),{heartbeatsToSend:i,unsentEntries:o}=Fx(this._heartbeatsCache.heartbeats),l=w_(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ur.warn(t),""}}}function Sy(){return new Date().toISOString().substring(0,10)}function Fx(n,e=Lx){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Ay(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Ay(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Ux{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return S1()?A1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Vx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return xy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return xy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Ay(n){return w_(JSON.stringify({version:2,heartbeats:n})).length}function zx(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(n){Lo(new Ts("platform-logger",e=>new Z1(e),"PRIVATE")),Lo(new Ts("heartbeat",e=>new jx(e),"PRIVATE")),Ri(pf,Ty,n),Ri(pf,Ty,"esm2017"),Ri("fire-js","")}Bx("");function Yf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function k_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $x=k_,N_=new wl("auth","Firebase",k_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Gf("@firebase/auth");function Wx(n,...e){_c.logLevel<=Pe.WARN&&_c.warn(`Auth (${Ho}): ${n}`,...e)}function lc(n,...e){_c.logLevel<=Pe.ERROR&&_c.error(`Auth (${Ho}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n,...e){throw Xf(n,...e)}function cr(n,...e){return Xf(n,...e)}function b_(n,e,t){const i=Object.assign(Object.assign({},$x()),{[e]:t});return new wl("auth","Firebase",i).create(e,{appName:n.name})}function Lr(n){return b_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return N_.create(n,...e)}function _e(n,e,...t){if(!n)throw Xf(e,...t)}function Or(n){const e="INTERNAL ASSERTION FAILED: "+n;throw lc(e),new Error(e)}function zr(n,e){n||Or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function qx(){return Cy()==="http:"||Cy()==="https:"}function Cy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qx()||E1()||"connection"in navigator)?navigator.onLine:!0}function Gx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=v1()||T1()}get(){return Hx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(n,e){zr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Yx=new Tl(3e4,6e4);function Ui(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function zi(n,e,t,i,o={}){return O_(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=El(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return w1()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&qo(n.emulatorConfig.host)&&(y.credentials="include"),D_.fetch()(await V_(n,n.config.apiHost,t,f),y)})}async function O_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Kx),e);try{const o=new Jx(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw ec(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ec(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw ec(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw ec(n,"user-disabled",h);const _=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw b_(n,_,y);Qn(n,_)}}catch(o){if(o instanceof Wr)throw o;Qn(n,"network-request-failed",{message:String(o)})}}async function Il(n,e,t,i,o={}){const l=await zi(n,e,t,i,o);return"mfaPendingCredential"in l&&Qn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function V_(n,e,t,i){const o=`${e}${t}?${i}`,l=n,h=l.config.emulator?Jf(n.config,o):`${n.config.apiScheme}://${o}`;return Qx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function Xx(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(cr(this.auth,"network-request-failed")),Yx.get())})}}function ec(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=cr(n,e,i);return o.customData._tokenResponse=t,o}function Ry(n){return n!==void 0&&n.enterprise!==void 0}class Zx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Xx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eS(n,e){return zi(n,"GET","/v2/recaptchaConfig",Ui(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(n,e){return zi(n,"POST","/v1/accounts:delete",e)}async function wc(n,e){return zi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nS(n,e=!1){const t=Et(n),i=await t.getIdToken(e),o=Zf(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:el(Xd(o.auth_time)),issuedAtTime:el(Xd(o.iat)),expirationTime:el(Xd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Xd(n){return Number(n)*1e3}function Zf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return lc("JWT malformed, contained fewer than 3 sections"),null;try{const o=E_(t);return o?JSON.parse(o):(lc("Failed to decode base64 JWT payload"),null)}catch(o){return lc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Py(n){const e=Zf(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ul(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Wr&&rS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function rS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=el(this.lastLoginAt),this.creationTime=el(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(n){var e;const t=n.auth,i=await n.getIdToken(),o=await ul(n,wc(t,{idToken:i}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?L_(l.providerUserInfo):[],f=oS(n.providerData,h),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),_=p?y:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new vf(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(n,E)}async function sS(n){const e=Et(n);await Ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function L_(n){return n.map(e=>{var{providerId:t}=e,i=Yf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(n,e){const t=await O_(n,{},async()=>{const i=El({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=await V_(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:i};return n.emulatorConfig&&qo(n.emulatorConfig.host)&&(p.credentials="include"),D_.fetch()(h,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lS(n,e){return zi(n,"POST","/v2/accounts:revokeToken",Ui(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Py(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Py(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await aS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new bo;return i&&(_e(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bo,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Hn{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Yf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new vf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await ul(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nS(this,e)}reload(){return sS(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ec(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(Lr(this.auth));const e=await this.getIdToken();return await ul(this,tS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,p,y,_;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,x=(o=t.email)!==null&&o!==void 0?o:void 0,O=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,$=(h=t.photoURL)!==null&&h!==void 0?h:void 0,B=(f=t.tenantId)!==null&&f!==void 0?f:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,te=(y=t.createdAt)!==null&&y!==void 0?y:void 0,Q=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:Z,emailVerified:le,isAnonymous:xe,providerData:ve,stsTokenManager:N}=t;_e(Z&&N,e,"internal-error");const S=bo.fromJSON(this.name,N);_e(typeof Z=="string",e,"internal-error"),vi(E,e.name),vi(x,e.name),_e(typeof le=="boolean",e,"internal-error"),_e(typeof xe=="boolean",e,"internal-error"),vi(O,e.name),vi($,e.name),vi(B,e.name),vi(L,e.name),vi(te,e.name),vi(Q,e.name);const R=new Hn({uid:Z,auth:e,email:x,emailVerified:le,displayName:E,isAnonymous:xe,photoURL:$,phoneNumber:O,tenantId:B,stsTokenManager:S,createdAt:te,lastLoginAt:Q});return ve&&Array.isArray(ve)&&(R.providerData=ve.map(k=>Object.assign({},k))),L&&(R._redirectEventId=L),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new bo;o.updateFromServerResponse(t);const l=new Hn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Ec(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?L_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new bo;f.updateFromIdToken(i);const p=new Hn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new vf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new Map;function Vr(n){zr(n instanceof Function,"Expected a class definition");let e=ky.get(n);return e?(zr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ky.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}M_.type="NONE";const Ny=M_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n,e,t){return`firebase:${n}:${e}:${t}`}class Do{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=uc(this.userKey,o.apiKey,l),this.fullPersistenceKey=uc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await wc(this.auth,{idToken:e}).catch(()=>{});return t?Hn._fromGetAccountInfoResponse(this.auth,t,e):null}return Hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Do(Vr(Ny),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Vr(Ny);const h=uc(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const _=await y._get(h);if(_){let E;if(typeof _=="string"){const x=await wc(e,{idToken:_}).catch(()=>{});if(!x)break;E=await Hn._fromGetAccountInfoResponse(e,x,_)}else E=Hn._fromJSON(e,_);y!==l&&(f=E),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Do(l,e,i):(l=p[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new Do(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(j_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($_(e))return"Blackberry";if(W_(e))return"Webos";if(F_(e))return"Safari";if((e.includes("chrome/")||U_(e))&&!e.includes("edge/"))return"Chrome";if(B_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function j_(n=Wt()){return/firefox\//i.test(n)}function F_(n=Wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function U_(n=Wt()){return/crios\//i.test(n)}function z_(n=Wt()){return/iemobile/i.test(n)}function B_(n=Wt()){return/android/i.test(n)}function $_(n=Wt()){return/blackberry/i.test(n)}function W_(n=Wt()){return/webos/i.test(n)}function ep(n=Wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function uS(n=Wt()){var e;return ep(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cS(){return I1()&&document.documentMode===10}function q_(n=Wt()){return ep(n)||B_(n)||W_(n)||$_(n)||/windows phone/i.test(n)||z_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(n,e=[]){let t;switch(n){case"Browser":t=by(Wt());break;case"Worker":t=`${by(Wt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ho}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const p=e(l);h(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(n,e={}){return zi(n,"GET","/v2/passwordPolicy",Ui(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=6;class pS{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:fS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dy(this),this.idTokenSubscription=new Dy(this),this.beforeStateQueue=new hS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=N_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Do.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await wc(this,{idToken:e}),i=await Hn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Pn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ec(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(Lr(this));const t=e?Et(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(Lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(Lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dS(this),t=new pS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new wl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await lS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Do.create(this,[Vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=H_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Wx(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Rs(n){return Et(n)}class Dy{constructor(e){this.auth=e,this.observer=null,this.addObserver=N1(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gS(n){Bc=n}function G_(n){return Bc.loadJS(n)}function yS(){return Bc.recaptchaEnterpriseScript}function vS(){return Bc.gapiScript}function _S(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class wS{constructor(){this.enterprise=new ES}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ES{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const TS="recaptcha-enterprise",K_="NO_RECAPTCHA";class IS{constructor(e){this.type=TS,this.auth=Rs(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{eS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new Zx(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(p=>{f(p)})})}function o(l,h,f){const p=window.grecaptcha;Ry(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(K_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&Ry(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=yS();p.length!==0&&(p+=f),G_(p).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function Oy(n,e,t,i=!1,o=!1){const l=new IS(n);let h;if(o)h=K_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function _f(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Oy(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Oy(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(n,e){const t=Qf(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Es(l,e??{}))return o;Qn(o,"already-initialized")}return t.initialize({options:e})}function SS(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Vr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function AS(n,e,t){const i=Rs(n);_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Q_(e),{host:h,port:f}=CS(e),p=f===null?"":`:${f}`,y={url:`${l}//${h}${p}/`},_=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){_e(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),_e(Es(y,i.config.emulator)&&Es(_,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=_,i.settings.appVerificationDisabledForTesting=!0,qo(h)?(x_(`${l}//${h}${p}`),y1("Auth",!0)):RS()}function Q_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function CS(n){const e=Q_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Vy(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Vy(h)}}}function Vy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function RS(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,t){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}async function PS(n,e){return zi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(n,e){return Il(n,"POST","/v1/accounts:signInWithPassword",Ui(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(n,e){return Il(n,"POST","/v1/accounts:signInWithEmailLink",Ui(n,e))}async function bS(n,e){return Il(n,"POST","/v1/accounts:signInWithEmailLink",Ui(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends tp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new cl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new cl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _f(e,t,"signInWithPassword",kS);case"emailLink":return NS(e,{email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _f(e,i,"signUpPassword",PS);case"emailLink":return bS(e,{idToken:t,email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(n,e){return Il(n,"POST","/v1/accounts:signInWithIdp",Ui(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="http://localhost";class Is extends tp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Yf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new Is(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Oo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Oo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oo(e,t)}buildRequest(){const e={requestUri:DS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=El(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VS(n){const e=Ka(Qa(n)).link,t=e?Ka(Qa(e)).deep_link_id:null,i=Ka(Qa(n)).deep_link_id;return(i?Ka(Qa(i)).link:null)||i||t||e||n}class np{constructor(e){var t,i,o,l,h,f;const p=Ka(Qa(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(i=p.oobCode)!==null&&i!==void 0?i:null,E=OS((o=p.mode)!==null&&o!==void 0?o:null);_e(y&&_&&E,"argument-error"),this.apiKey=y,this.operation=E,this.code=_,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.lang)!==null&&h!==void 0?h:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=VS(e);try{return new np(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.providerId=Go.PROVIDER_ID}static credential(e,t){return cl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=np.parseLink(t);return _e(i,"argument-error"),cl._fromEmailAndCode(e,i.code,i.tenantId)}}Go.PROVIDER_ID="password";Go.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Go.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends Y_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends xl{constructor(){super("facebook.com")}static credential(e){return Is._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";wi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends xl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Is._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ei.credential(t,i)}catch{return null}}}Ei.GOOGLE_SIGN_IN_METHOD="google.com";Ei.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends xl{constructor(){super("github.com")}static credential(e){return Is._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends xl{constructor(){super("twitter.com")}static credential(e,t){return Is._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ii.credential(t,i)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(n,e){return Il(n,"POST","/v1/accounts:signUp",Ui(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Hn._fromIdTokenResponse(e,i,o),h=Ly(i);return new xs({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Ly(i);return new xs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Ly(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends Wr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Tc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Tc(e,t,i,o)}}function X_(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Tc._fromErrorAndOperation(n,l,e,i):l})}async function MS(n,e,t=!1){const i=await ul(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(n,e,t=!1){const{auth:i}=n;if(Pn(i.app))return Promise.reject(Lr(i));const o="reauthenticate";try{const l=await ul(n,X_(i,o,e,n),t);_e(l.idToken,i,"internal-error");const h=Zf(l.idToken);_e(h,i,"internal-error");const{sub:f}=h;return _e(n.uid===f,i,"user-mismatch"),xs._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Qn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(n,e,t=!1){if(Pn(n.app))return Promise.reject(Lr(n));const i="signIn",o=await X_(n,i,e),l=await xs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function FS(n,e){return J_(Rs(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(n){const e=Rs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function US(n,e,t){if(Pn(n.app))return Promise.reject(Lr(n));const i=Rs(n),h=await _f(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",LS).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Z_(n),p}),f=await xs._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function zS(n,e,t){return Pn(n.app)?Promise.reject(Lr(n)):FS(Et(n),Go.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Z_(n),i})}function BS(n,e,t,i){return Et(n).onIdTokenChanged(e,t,i)}function $S(n,e,t){return Et(n).beforeAuthStateChanged(e,t)}function WS(n,e,t,i){return Et(n).onAuthStateChanged(e,t,i)}function qS(n){return Et(n).signOut()}const Ic="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ic,"1"),this.storage.removeItem(Ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=1e3,GS=10;class t0 extends e0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,p)=>{this.notifyListeners(h,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);cS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,GS):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},HS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}t0.type="LOCAL";const KS=t0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0 extends e0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}n0.type="SESSION";const r0=n0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new $c(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),p=await QS(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,p)=>{const y=rp("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(E){const x=E;if(x.data.eventId===y)switch(x.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(x.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(){return window}function XS(n){hr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(){return typeof hr().WorkerGlobalScope<"u"&&typeof hr().importScripts=="function"}async function JS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZS(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function eA(){return i0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="firebaseLocalStorageDb",tA=1,xc="firebaseLocalStorage",o0="fbase_key";class Sl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wc(n,e){return n.transaction([xc],e?"readwrite":"readonly").objectStore(xc)}function nA(){const n=indexedDB.deleteDatabase(s0);return new Sl(n).toPromise()}function wf(){const n=indexedDB.open(s0,tA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(xc,{keyPath:o0})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(xc)?e(i):(i.close(),await nA(),e(await wf()))})})}async function My(n,e,t){const i=Wc(n,!0).put({[o0]:e,value:t});return new Sl(i).toPromise()}async function rA(n,e){const t=Wc(n,!1).get(e),i=await new Sl(t).toPromise();return i===void 0?null:i.value}function jy(n,e){const t=Wc(n,!0).delete(e);return new Sl(t).toPromise()}const iA=800,sA=3;class a0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>sA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return i0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$c._getInstance(eA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await JS(),!this.activeServiceWorker)return;this.sender=new YS(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wf();return await My(e,Ic,"1"),await jy(e,Ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>My(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>rA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Wc(o,!1).getAll();return new Sl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}a0.type="LOCAL";const oA=a0;new Tl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(n,e){return e?Vr(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip extends tp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lA(n){return J_(n.auth,new ip(n),n.bypassAuthState)}function uA(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),jS(t,new ip(n),n.bypassAuthState)}async function cA(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),MS(t,new ip(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lA;case"linkViaPopup":case"linkViaRedirect":return cA;case"reauthViaPopup":case"reauthViaRedirect":return uA;default:Qn(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new Tl(2e3,1e4);class ko extends l0{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,ko.currentPopupAction&&ko.currentPopupAction.cancel(),ko.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=rp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(cr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ko.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hA.get())};e()}}ko.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA="pendingRedirect",cc=new Map;class fA extends l0{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=cc.get(this.auth._key());if(!e){try{const i=await pA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}cc.set(this.auth._key(),e)}return this.bypassAuthState||cc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pA(n,e){const t=yA(e),i=gA(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function mA(n,e){cc.set(n._key(),e)}function gA(n){return Vr(n._redirectPersistence)}function yA(n){return uc(dA,n.config.apiKey,n.name)}async function vA(n,e,t=!1){if(Pn(n.app))return Promise.reject(Lr(n));const i=Rs(n),o=aA(i,e),h=await new fA(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=600*1e3;class wA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!u0(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(cr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_A&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fy(e))}saveEventToCache(e){this.cachedEventUids.add(Fy(e)),this.lastProcessedEventTime=Date.now()}}function Fy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function u0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u0(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(n,e={}){return zi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xA=/^https?/;async function SA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await TA(n);for(const t of e)try{if(AA(t))return}catch{}Qn(n,"unauthorized-domain")}function AA(n){const e=yf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!xA.test(t))return!1;if(IA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=new Tl(3e4,6e4);function Uy(){const n=hr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function RA(n){return new Promise((e,t)=>{var i,o,l;function h(){Uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uy(),t(cr(n,"network-request-failed"))},timeout:CA.get()})}if(!((o=(i=hr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=hr().gapi)===null||l===void 0)&&l.load)h();else{const f=_S("iframefcb");return hr()[f]=()=>{gapi.load?h():t(cr(n,"network-request-failed"))},G_(`${vS()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw hc=null,e})}let hc=null;function PA(n){return hc=hc||RA(n),hc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=new Tl(5e3,15e3),NA="__/auth/iframe",bA="emulator/auth/iframe",DA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VA(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Jf(e,bA):`https://${n.config.authDomain}/${NA}`,i={apiKey:e.apiKey,appName:n.name,v:Ho},o=OA.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${El(i).slice(1)}`}async function LA(n){const e=await PA(n),t=hr().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:VA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=cr(n,"network-request-failed"),f=hr().setTimeout(()=>{l(h)},kA.get());function p(){hr().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jA=500,FA=600,UA="_blank",zA="http://localhost";class zy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BA(n,e,t,i=jA,o=FA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p=Object.assign(Object.assign({},MA),{width:i.toString(),height:o.toString(),top:l,left:h}),y=Wt().toLowerCase();t&&(f=U_(y)?UA:t),j_(y)&&(e=e||zA,p.scrollbars="yes");const _=Object.entries(p).reduce((x,[O,$])=>`${x}${O}=${$},`,"");if(uS(y)&&f!=="_self")return $A(e||"",f),new zy(null);const E=window.open(e||"",f,_);_e(E,n,"popup-blocked");try{E.focus()}catch{}return new zy(E)}function $A(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="__/auth/handler",qA="emulator/auth/handler",HA=encodeURIComponent("fac");async function By(n,e,t,i,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ho,eventId:o};if(e instanceof Y_){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",k1(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,E]of Object.entries({}))h[_]=E}if(e instanceof xl){const _=e.getScopes().filter(E=>E!=="");_.length>0&&(h.scopes=_.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const _ of Object.keys(f))f[_]===void 0&&delete f[_];const p=await n._getAppCheckToken(),y=p?`#${HA}=${encodeURIComponent(p)}`:"";return`${GA(n)}?${El(f).slice(1)}${y}`}function GA({config:n}){return n.emulator?Jf(n,qA):`https://${n.authDomain}/${WA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="webStorageSupport";class KA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=r0,this._completeRedirectFn=vA,this._overrideRedirectResult=mA}async _openPopup(e,t,i,o){var l;zr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await By(e,t,i,yf(),o);return BA(e,h,rp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await By(e,t,i,yf(),o);return XS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(zr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await LA(e),i=new wA(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jd,{type:Jd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Jd];h!==void 0&&t(!!h),Qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=SA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return q_()||F_()||ep()}}const QA=KA;var $y="@firebase/auth",Wy="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JA(n){Lo(new Ts("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:H_(n)},y=new mS(i,o,l,p);return SS(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Lo(new Ts("auth-internal",e=>{const t=Rs(e.getProvider("auth").getImmediate());return(i=>new YA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ri($y,Wy,XA(n)),Ri($y,Wy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=300,eC=I_("authIdTokenMaxAge")||ZA;let qy=null;const tC=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>eC)return;const o=t==null?void 0:t.token;qy!==o&&(qy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function nC(n=bx()){const e=Qf(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xS(n,{popupRedirectResolver:QA,persistence:[oA,KS,r0]}),i=I_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=tC(l.toString());$S(t,h,()=>h(t.currentUser)),BS(t,f=>h(f))}}const o=f1("auth");return o&&AS(t,`http://${o}`),t}function rC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}gS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=cr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",rC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JA("Browser");var Hy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pi,c0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function R(){}R.prototype=S.prototype,N.D=S.prototype,N.prototype=new R,N.prototype.constructor=N,N.C=function(k,V,b){for(var C=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)C[Je-2]=arguments[Je];return S.prototype[V].apply(k,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,S,R){R||(R=0);var k=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)k[V]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(V=0;16>V;++V)k[V]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=N.g[0],R=N.g[1],V=N.g[2];var b=N.g[3],C=S+(b^R&(V^b))+k[0]+3614090360&4294967295;S=R+(C<<7&4294967295|C>>>25),C=b+(V^S&(R^V))+k[1]+3905402710&4294967295,b=S+(C<<12&4294967295|C>>>20),C=V+(R^b&(S^R))+k[2]+606105819&4294967295,V=b+(C<<17&4294967295|C>>>15),C=R+(S^V&(b^S))+k[3]+3250441966&4294967295,R=V+(C<<22&4294967295|C>>>10),C=S+(b^R&(V^b))+k[4]+4118548399&4294967295,S=R+(C<<7&4294967295|C>>>25),C=b+(V^S&(R^V))+k[5]+1200080426&4294967295,b=S+(C<<12&4294967295|C>>>20),C=V+(R^b&(S^R))+k[6]+2821735955&4294967295,V=b+(C<<17&4294967295|C>>>15),C=R+(S^V&(b^S))+k[7]+4249261313&4294967295,R=V+(C<<22&4294967295|C>>>10),C=S+(b^R&(V^b))+k[8]+1770035416&4294967295,S=R+(C<<7&4294967295|C>>>25),C=b+(V^S&(R^V))+k[9]+2336552879&4294967295,b=S+(C<<12&4294967295|C>>>20),C=V+(R^b&(S^R))+k[10]+4294925233&4294967295,V=b+(C<<17&4294967295|C>>>15),C=R+(S^V&(b^S))+k[11]+2304563134&4294967295,R=V+(C<<22&4294967295|C>>>10),C=S+(b^R&(V^b))+k[12]+1804603682&4294967295,S=R+(C<<7&4294967295|C>>>25),C=b+(V^S&(R^V))+k[13]+4254626195&4294967295,b=S+(C<<12&4294967295|C>>>20),C=V+(R^b&(S^R))+k[14]+2792965006&4294967295,V=b+(C<<17&4294967295|C>>>15),C=R+(S^V&(b^S))+k[15]+1236535329&4294967295,R=V+(C<<22&4294967295|C>>>10),C=S+(V^b&(R^V))+k[1]+4129170786&4294967295,S=R+(C<<5&4294967295|C>>>27),C=b+(R^V&(S^R))+k[6]+3225465664&4294967295,b=S+(C<<9&4294967295|C>>>23),C=V+(S^R&(b^S))+k[11]+643717713&4294967295,V=b+(C<<14&4294967295|C>>>18),C=R+(b^S&(V^b))+k[0]+3921069994&4294967295,R=V+(C<<20&4294967295|C>>>12),C=S+(V^b&(R^V))+k[5]+3593408605&4294967295,S=R+(C<<5&4294967295|C>>>27),C=b+(R^V&(S^R))+k[10]+38016083&4294967295,b=S+(C<<9&4294967295|C>>>23),C=V+(S^R&(b^S))+k[15]+3634488961&4294967295,V=b+(C<<14&4294967295|C>>>18),C=R+(b^S&(V^b))+k[4]+3889429448&4294967295,R=V+(C<<20&4294967295|C>>>12),C=S+(V^b&(R^V))+k[9]+568446438&4294967295,S=R+(C<<5&4294967295|C>>>27),C=b+(R^V&(S^R))+k[14]+3275163606&4294967295,b=S+(C<<9&4294967295|C>>>23),C=V+(S^R&(b^S))+k[3]+4107603335&4294967295,V=b+(C<<14&4294967295|C>>>18),C=R+(b^S&(V^b))+k[8]+1163531501&4294967295,R=V+(C<<20&4294967295|C>>>12),C=S+(V^b&(R^V))+k[13]+2850285829&4294967295,S=R+(C<<5&4294967295|C>>>27),C=b+(R^V&(S^R))+k[2]+4243563512&4294967295,b=S+(C<<9&4294967295|C>>>23),C=V+(S^R&(b^S))+k[7]+1735328473&4294967295,V=b+(C<<14&4294967295|C>>>18),C=R+(b^S&(V^b))+k[12]+2368359562&4294967295,R=V+(C<<20&4294967295|C>>>12),C=S+(R^V^b)+k[5]+4294588738&4294967295,S=R+(C<<4&4294967295|C>>>28),C=b+(S^R^V)+k[8]+2272392833&4294967295,b=S+(C<<11&4294967295|C>>>21),C=V+(b^S^R)+k[11]+1839030562&4294967295,V=b+(C<<16&4294967295|C>>>16),C=R+(V^b^S)+k[14]+4259657740&4294967295,R=V+(C<<23&4294967295|C>>>9),C=S+(R^V^b)+k[1]+2763975236&4294967295,S=R+(C<<4&4294967295|C>>>28),C=b+(S^R^V)+k[4]+1272893353&4294967295,b=S+(C<<11&4294967295|C>>>21),C=V+(b^S^R)+k[7]+4139469664&4294967295,V=b+(C<<16&4294967295|C>>>16),C=R+(V^b^S)+k[10]+3200236656&4294967295,R=V+(C<<23&4294967295|C>>>9),C=S+(R^V^b)+k[13]+681279174&4294967295,S=R+(C<<4&4294967295|C>>>28),C=b+(S^R^V)+k[0]+3936430074&4294967295,b=S+(C<<11&4294967295|C>>>21),C=V+(b^S^R)+k[3]+3572445317&4294967295,V=b+(C<<16&4294967295|C>>>16),C=R+(V^b^S)+k[6]+76029189&4294967295,R=V+(C<<23&4294967295|C>>>9),C=S+(R^V^b)+k[9]+3654602809&4294967295,S=R+(C<<4&4294967295|C>>>28),C=b+(S^R^V)+k[12]+3873151461&4294967295,b=S+(C<<11&4294967295|C>>>21),C=V+(b^S^R)+k[15]+530742520&4294967295,V=b+(C<<16&4294967295|C>>>16),C=R+(V^b^S)+k[2]+3299628645&4294967295,R=V+(C<<23&4294967295|C>>>9),C=S+(V^(R|~b))+k[0]+4096336452&4294967295,S=R+(C<<6&4294967295|C>>>26),C=b+(R^(S|~V))+k[7]+1126891415&4294967295,b=S+(C<<10&4294967295|C>>>22),C=V+(S^(b|~R))+k[14]+2878612391&4294967295,V=b+(C<<15&4294967295|C>>>17),C=R+(b^(V|~S))+k[5]+4237533241&4294967295,R=V+(C<<21&4294967295|C>>>11),C=S+(V^(R|~b))+k[12]+1700485571&4294967295,S=R+(C<<6&4294967295|C>>>26),C=b+(R^(S|~V))+k[3]+2399980690&4294967295,b=S+(C<<10&4294967295|C>>>22),C=V+(S^(b|~R))+k[10]+4293915773&4294967295,V=b+(C<<15&4294967295|C>>>17),C=R+(b^(V|~S))+k[1]+2240044497&4294967295,R=V+(C<<21&4294967295|C>>>11),C=S+(V^(R|~b))+k[8]+1873313359&4294967295,S=R+(C<<6&4294967295|C>>>26),C=b+(R^(S|~V))+k[15]+4264355552&4294967295,b=S+(C<<10&4294967295|C>>>22),C=V+(S^(b|~R))+k[6]+2734768916&4294967295,V=b+(C<<15&4294967295|C>>>17),C=R+(b^(V|~S))+k[13]+1309151649&4294967295,R=V+(C<<21&4294967295|C>>>11),C=S+(V^(R|~b))+k[4]+4149444226&4294967295,S=R+(C<<6&4294967295|C>>>26),C=b+(R^(S|~V))+k[11]+3174756917&4294967295,b=S+(C<<10&4294967295|C>>>22),C=V+(S^(b|~R))+k[2]+718787259&4294967295,V=b+(C<<15&4294967295|C>>>17),C=R+(b^(V|~S))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(V+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+V&4294967295,N.g[3]=N.g[3]+b&4294967295}i.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var R=S-this.blockSize,k=this.B,V=this.h,b=0;b<S;){if(V==0)for(;b<=R;)o(this,N,b),b+=this.blockSize;if(typeof N=="string"){for(;b<S;)if(k[V++]=N.charCodeAt(b++),V==this.blockSize){o(this,k),V=0;break}}else for(;b<S;)if(k[V++]=N[b++],V==this.blockSize){o(this,k),V=0;break}}this.h=V,this.o+=S},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var R=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=R&255,R/=256;for(this.u(N),N=Array(16),S=R=0;4>S;++S)for(var k=0;32>k;k+=8)N[R++]=this.g[S]>>>k&255;return N};function l(N,S){var R=f;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=S(N)}function h(N,S){this.h=S;for(var R=[],k=!0,V=N.length-1;0<=V;V--){var b=N[V]|0;k&&b==S||(R[V]=b,k=!1)}this.g=R}var f={};function p(N){return-128<=N&&128>N?l(N,function(S){return new h([S|0],0>S?-1:0)}):new h([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return E;if(0>N)return L(y(-N));for(var S=[],R=1,k=0;N>=R;k++)S[k]=N/R|0,R*=4294967296;return new h(S,0)}function _(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return L(_(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(S,8)),k=E,V=0;V<N.length;V+=8){var b=Math.min(8,N.length-V),C=parseInt(N.substring(V,V+b),S);8>b?(b=y(Math.pow(S,b)),k=k.j(b).add(y(C))):(k=k.j(R),k=k.add(y(C)))}return k}var E=p(0),x=p(1),O=p(16777216);n=h.prototype,n.m=function(){if(B(this))return-L(this).m();for(var N=0,S=1,R=0;R<this.g.length;R++){var k=this.i(R);N+=(0<=k?k:4294967296+k)*S,S*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if($(this))return"0";if(B(this))return"-"+L(this).toString(N);for(var S=y(Math.pow(N,6)),R=this,k="";;){var V=le(R,S).g;R=te(R,V.j(S));var b=((0<R.g.length?R.g[0]:R.h)>>>0).toString(N);if(R=V,$(R))return b+k;for(;6>b.length;)b="0"+b;k=b+k}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function $(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function B(N){return N.h==-1}n.l=function(N){return N=te(this,N),B(N)?-1:$(N)?0:1};function L(N){for(var S=N.g.length,R=[],k=0;k<S;k++)R[k]=~N.g[k];return new h(R,~N.h).add(x)}n.abs=function(){return B(this)?L(this):this},n.add=function(N){for(var S=Math.max(this.g.length,N.g.length),R=[],k=0,V=0;V<=S;V++){var b=k+(this.i(V)&65535)+(N.i(V)&65535),C=(b>>>16)+(this.i(V)>>>16)+(N.i(V)>>>16);k=C>>>16,b&=65535,C&=65535,R[V]=C<<16|b}return new h(R,R[R.length-1]&-2147483648?-1:0)};function te(N,S){return N.add(L(S))}n.j=function(N){if($(this)||$(N))return E;if(B(this))return B(N)?L(this).j(L(N)):L(L(this).j(N));if(B(N))return L(this.j(L(N)));if(0>this.l(O)&&0>N.l(O))return y(this.m()*N.m());for(var S=this.g.length+N.g.length,R=[],k=0;k<2*S;k++)R[k]=0;for(k=0;k<this.g.length;k++)for(var V=0;V<N.g.length;V++){var b=this.i(k)>>>16,C=this.i(k)&65535,Je=N.i(V)>>>16,Lt=N.i(V)&65535;R[2*k+2*V]+=C*Lt,Q(R,2*k+2*V),R[2*k+2*V+1]+=b*Lt,Q(R,2*k+2*V+1),R[2*k+2*V+1]+=C*Je,Q(R,2*k+2*V+1),R[2*k+2*V+2]+=b*Je,Q(R,2*k+2*V+2)}for(k=0;k<S;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=S;k<2*S;k++)R[k]=0;return new h(R,0)};function Q(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function Z(N,S){this.g=N,this.h=S}function le(N,S){if($(S))throw Error("division by zero");if($(N))return new Z(E,E);if(B(N))return S=le(L(N),S),new Z(L(S.g),L(S.h));if(B(S))return S=le(N,L(S)),new Z(L(S.g),S.h);if(30<N.g.length){if(B(N)||B(S))throw Error("slowDivide_ only works with positive integers.");for(var R=x,k=S;0>=k.l(N);)R=xe(R),k=xe(k);var V=ve(R,1),b=ve(k,1);for(k=ve(k,2),R=ve(R,2);!$(k);){var C=b.add(k);0>=C.l(N)&&(V=V.add(R),b=C),k=ve(k,1),R=ve(R,1)}return S=te(N,V.j(S)),new Z(V,S)}for(V=E;0<=N.l(S);){for(R=Math.max(1,Math.floor(N.m()/S.m())),k=Math.ceil(Math.log(R)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),b=y(R),C=b.j(S);B(C)||0<C.l(N);)R-=k,b=y(R),C=b.j(S);$(b)&&(b=x),V=V.add(b),N=te(N,C)}return new Z(V,N)}n.A=function(N){return le(this,N).h},n.and=function(N){for(var S=Math.max(this.g.length,N.g.length),R=[],k=0;k<S;k++)R[k]=this.i(k)&N.i(k);return new h(R,this.h&N.h)},n.or=function(N){for(var S=Math.max(this.g.length,N.g.length),R=[],k=0;k<S;k++)R[k]=this.i(k)|N.i(k);return new h(R,this.h|N.h)},n.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),R=[],k=0;k<S;k++)R[k]=this.i(k)^N.i(k);return new h(R,this.h^N.h)};function xe(N){for(var S=N.g.length+1,R=[],k=0;k<S;k++)R[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(R,N.h)}function ve(N,S){var R=S>>5;S%=32;for(var k=N.g.length-R,V=[],b=0;b<k;b++)V[b]=0<S?N.i(b+R)>>>S|N.i(b+R+1)<<32-S:N.i(b+R);return new h(V,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,c0=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=_,Pi=h}).apply(typeof Hy<"u"?Hy:typeof self<"u"?self:typeof window<"u"?window:{});var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var h0,Ya,d0,dc,Ef,f0,p0,m0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof tc=="object"&&tc];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var j=u[T];if(!(j in v))break e;v=v[j]}u=u[u.length-1],T=v[u],m=m(T),m!=T&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var v=0,T=!1,j={next:function(){if(!T&&v<u.length){var q=v++;return{value:m(q,u[q]),done:!1}}return T=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function _(u,m,v){return u.call.apply(u.bind,arguments)}function E(u,m,v){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,T),u.apply(m,j)}}return function(){return u.apply(m,arguments)}}function x(u,m,v){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:E,x.apply(null,arguments)}function O(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function $(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(T,j,q){for(var ne=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)ne[Ue-2]=arguments[Ue];return m.prototype[j].apply(T,ne)}}function B(u){const m=u.length;if(0<m){const v=Array(m);for(let T=0;T<m;T++)v[T]=u[T];return v}return[]}function L(u,m){for(let v=1;v<arguments.length;v++){const T=arguments[v];if(p(T)){const j=u.length||0,q=T.length||0;u.length=j+q;for(let ne=0;ne<q;ne++)u[j+ne]=T[ne]}else u.push(T)}}class te{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Q(u){return/^[\s\xa0]*$/.test(u)}function Z(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function le(u){return le[" "](u),u}le[" "]=function(){};var xe=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function ve(u,m,v){for(const T in u)m.call(v,u[T],T,u)}function N(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function S(u){const m={};for(const v in u)m[v]=u[v];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let v,T;for(let j=1;j<arguments.length;j++){T=arguments[j];for(v in T)u[v]=T[v];for(let q=0;q<R.length;q++)v=R[q],Object.prototype.hasOwnProperty.call(T,v)&&(u[v]=T[v])}}function V(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function b(u){f.setTimeout(()=>{throw u},0)}function C(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Je{constructor(){this.h=this.g=null}add(m,v){const T=Lt.get();T.set(m,v),this.h?this.h.next=T:this.g=T,this.h=T}}var Lt=new te(()=>new Mt,u=>u.reset());class Mt{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,re=!1,me=new Je,ae=()=>{const u=f.Promise.resolve(void 0);ze=()=>{u.then(M)}};var M=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(v){b(v)}var m=Lt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}re=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Se=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};f.addEventListener("test",v,m),f.removeEventListener("test",v,m)}catch{}return u})();function Ce(u,m){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(xe){e:{try{le(m.nodeName);var j=!0;break e}catch{}j=!1}j||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:be[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}$(Ce,fe);var be={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),je=0;function $e(u,m,v,T,j){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!T,this.ha=j,this.key=++je,this.da=this.fa=!1}function Tt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function gr(u){this.src=u,this.g={},this.h=0}gr.prototype.add=function(u,m,v,T,j){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var ne=Hr(u,m,T,j);return-1<ne?(m=u[ne],v||(m.fa=!1)):(m=new $e(m,this.src,q,!!T,j),m.fa=v,u.push(m)),m};function bs(u,m){var v=m.type;if(v in u.g){var T=u.g[v],j=Array.prototype.indexOf.call(T,m,void 0),q;(q=0<=j)&&Array.prototype.splice.call(T,j,1),q&&(Tt(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Hr(u,m,v,T){for(var j=0;j<u.length;++j){var q=u[j];if(!q.da&&q.listener==m&&q.capture==!!v&&q.ha==T)return j}return-1}var Wi="closure_lm_"+(1e6*Math.random()|0),Ds={};function Zo(u,m,v,T,j){if(Array.isArray(m)){for(var q=0;q<m.length;q++)Zo(u,m[q],v,T,j);return null}return v=na(v),u&&u[Me]?u.K(m,v,y(T)?!!T.capture:!1,j):ea(u,m,v,!1,T,j)}function ea(u,m,v,T,j,q){if(!m)throw Error("Invalid event type");var ne=y(j)?!!j.capture:!!j,Ue=Vs(u);if(Ue||(u[Wi]=Ue=new gr(u)),v=Ue.add(m,v,T,ne,q),v.proxy)return v;if(T=Ml(),v.proxy=T,T.src=u,T.listener=v,u.addEventListener)Se||(j=ne),j===void 0&&(j=!1),u.addEventListener(m.toString(),T,j);else if(u.attachEvent)u.attachEvent(vr(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ml(){function u(v){return m.call(u.src,u.listener,v)}const m=ta;return u}function Os(u,m,v,T,j){if(Array.isArray(m))for(var q=0;q<m.length;q++)Os(u,m[q],v,T,j);else T=y(T)?!!T.capture:!!T,v=na(v),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],v=Hr(q,v,T,j),-1<v&&(Tt(q[v]),Array.prototype.splice.call(q,v,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=Vs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Hr(m,v,T,j)),(v=-1<u?m[u]:null)&&yr(v))}function yr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])bs(m.i,u);else{var v=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(v,T,u.capture):m.detachEvent?m.detachEvent(vr(v),T):m.addListener&&m.removeListener&&m.removeListener(T),(v=Vs(m))?(bs(v,u),v.h==0&&(v.src=null,m[Wi]=null)):Tt(u)}}}function vr(u){return u in Ds?Ds[u]:Ds[u]="on"+u}function ta(u,m){if(u.da)u=!0;else{m=new Ce(m,this);var v=u.listener,T=u.ha||u.src;u.fa&&yr(u),u=v.call(T,m)}return u}function Vs(u){return u=u[Wi],u instanceof gr?u:null}var Ls="__closure_events_fn_"+(1e9*Math.random()>>>0);function na(u){return typeof u=="function"?u:(u[Ls]||(u[Ls]=function(m){return u.handleEvent(m)}),u[Ls])}function pt(){K.call(this),this.i=new gr(this),this.M=this,this.F=null}$(pt,K),pt.prototype[Me]=!0,pt.prototype.removeEventListener=function(u,m,v,T){Os(this,u,m,v,T)};function mt(u,m){var v,T=u.F;if(T)for(v=[];T;T=T.F)v.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new fe(m,u);else if(m instanceof fe)m.target=m.target||u;else{var j=m;m=new fe(T,u),k(m,j)}if(j=!0,v)for(var q=v.length-1;0<=q;q--){var ne=m.g=v[q];j=_r(ne,T,!0,m)&&j}if(ne=m.g=u,j=_r(ne,T,!0,m)&&j,j=_r(ne,T,!1,m)&&j,v)for(q=0;q<v.length;q++)ne=m.g=v[q],j=_r(ne,T,!1,m)&&j}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],T=0;T<v.length;T++)Tt(v[T]);delete u.g[m],u.h--}}this.F=null},pt.prototype.K=function(u,m,v,T){return this.i.add(String(u),m,!1,v,T)},pt.prototype.L=function(u,m,v,T){return this.i.add(String(u),m,!0,v,T)};function _r(u,m,v,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var j=!0,q=0;q<m.length;++q){var ne=m[q];if(ne&&!ne.da&&ne.capture==v){var Ue=ne.listener,gt=ne.ha||ne.src;ne.fa&&bs(u.i,ne),j=Ue.call(gt,T)!==!1&&j}}return j&&!T.defaultPrevented}function ra(u,m,v){if(typeof u=="function")v&&(u=x(u,v));else if(u&&typeof u.handleEvent=="function")u=x(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function Gr(u){u.g=ra(()=>{u.g=null,u.i&&(u.i=!1,Gr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class qi extends K{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Gr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hi(u){K.call(this),this.h=u,this.g={}}$(Hi,K);var ia=[];function sa(u){ve(u.g,function(m,v){this.g.hasOwnProperty(v)&&yr(m)},u),u.g={}}Hi.prototype.N=function(){Hi.aa.N.call(this),sa(this)},Hi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oa=f.JSON.stringify,aa=f.JSON.parse,la=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Gi(){}Gi.prototype.h=null;function Ms(u){return u.h||(u.h=u.i())}function js(){}var _n={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xn(){fe.call(this,"d")}$(Xn,fe);function Fs(){fe.call(this,"c")}$(Fs,fe);var Jn={},ua=null;function Ki(){return ua=ua||new pt}Jn.La="serverreachability";function ca(u){fe.call(this,Jn.La,u)}$(ca,fe);function wr(u){const m=Ki();mt(m,new ca(m))}Jn.STAT_EVENT="statevent";function ha(u,m){fe.call(this,Jn.STAT_EVENT,u),this.stat=m}$(ha,fe);function st(u){const m=Ki();mt(m,new ha(m,u))}Jn.Ma="timingevent";function Us(u,m){fe.call(this,Jn.Ma,u),this.size=m}$(Us,fe);function Nn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function Qi(){this.g=!0}Qi.prototype.xa=function(){this.g=!1};function Yi(u,m,v,T,j,q){u.info(function(){if(u.g)if(q)for(var ne="",Ue=q.split("&"),gt=0;gt<Ue.length;gt++){var De=Ue[gt].split("=");if(1<De.length){var It=De[0];De=De[1];var lt=It.split("_");ne=2<=lt.length&&lt[1]=="type"?ne+(It+"="+De+"&"):ne+(It+"=redacted&")}}else ne=null;else ne=q;return"XMLHTTP REQ ("+T+") [attempt "+j+"]: "+m+`
`+v+`
`+ne})}function zs(u,m,v,T,j,q,ne){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+j+"]: "+m+`
`+v+`
`+q+" "+ne})}function bn(u,m,v,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+ph(u,v)+(T?" "+T:"")})}function da(u,m){u.info(function(){return"TIMEOUT: "+m})}Qi.prototype.info=function(){};function ph(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var T=v[u];if(!(2>T.length)){var j=T[1];if(Array.isArray(j)&&!(1>j.length)){var q=j[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ne=1;ne<j.length;ne++)j[ne]=""}}}}return oa(v)}catch{return m}}var Bs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dn;function Xi(){}$(Xi,Gi),Xi.prototype.g=function(){return new XMLHttpRequest},Xi.prototype.i=function(){return{}},Dn=new Xi;function On(u,m,v,T){this.j=u,this.i=m,this.l=v,this.R=T||1,this.U=new Hi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fl}function Fl(){this.i=null,this.g="",this.h=!1}var fa={},$s={};function Ws(u,m,v){u.L=1,u.v=Jr(cn(m)),u.m=v,u.P=!0,pa(u,null)}function pa(u,m){u.F=Date.now(),We(u),u.A=cn(u.v);var v=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),ei(v.i,"t",T),u.C=0,v=u.j.J,u.h=new Fl,u.g=ru(u.j,v?m:null,!u.m),0<u.O&&(u.M=new qi(x(u.Y,u,u.g),u.O)),m=u.U,v=u.g,T=u.ca;var j="readystatechange";Array.isArray(j)||(j&&(ia[0]=j.toString()),j=ia);for(var q=0;q<j.length;q++){var ne=Zo(v,j[q],T||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),wr(),Yi(u.i,u.u,u.A,u.l,u.R,u.m)}On.prototype.ca=function(u){u=u.target;const m=this.M;m&&Yt(u)==3?m.j():this.Y(u)},On.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Yt(this.g);var m=this.g.Ba();const Tn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||wa(this.g)))){this.J||lt!=4||m==7||(m==8||0>=Tn?wr(3):wr(2)),Ji(this);var v=this.g.Z();this.X=v;t:if(Ul(this)){var T=wa(this.g);u="";var j=T.length,q=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),Kr(this);var ne="";break t}this.h.i=new f.TextDecoder}for(m=0;m<j;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(q&&m==j-1)});T.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=v==200,zs(this.i,this.u,this.A,this.l,this.R,lt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,gt=this.g;if((Ue=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(Ue)){var De=Ue;break t}}De=null}if(v=De)bn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ma(this,v);else{this.o=!1,this.s=3,st(12),wn(this),Kr(this);break e}}if(this.P){v=!0;let dn;for(;!this.J&&this.C<ne.length;)if(dn=mh(this,ne),dn==$s){lt==4&&(this.s=4,st(14),v=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==fa){this.s=4,st(15),bn(this.i,this.l,ne,"[Invalid Chunk]"),v=!1;break}else bn(this.i,this.l,dn,null),ma(this,dn);if(Ul(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||ne.length!=0||this.h.h||(this.s=1,st(16),v=!1),this.o=this.o&&v,!v)bn(this.i,this.l,ne,"[Invalid Chunked Response]"),wn(this),Kr(this);else if(0<ne.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Ta(It),It.M=!0,st(11))}}else bn(this.i,this.l,ne,null),ma(this,ne);lt==4&&wn(this),this.o&&!this.J&&(lt==4?to(this.j,this):(this.o=!1,We(this)))}else Ys(this.g),v==400&&0<ne.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),wn(this),Kr(this)}}}catch{}finally{}};function Ul(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function mh(u,m){var v=u.C,T=m.indexOf(`
`,v);return T==-1?$s:(v=Number(m.substring(v,T)),isNaN(v)?fa:(T+=1,T+v>m.length?$s:(m=m.slice(T,T+v),u.C=T+v,m)))}On.prototype.cancel=function(){this.J=!0,wn(this)};function We(u){u.S=Date.now()+u.I,zl(u,u.I)}function zl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Nn(x(u.ba,u),m)}function Ji(u){u.B&&(f.clearTimeout(u.B),u.B=null)}On.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(da(this.i,this.A),this.L!=2&&(wr(),st(17)),wn(this),this.s=2,Kr(this)):zl(this,this.S-u)};function Kr(u){u.j.G==0||u.J||to(u.j,u)}function wn(u){Ji(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,sa(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ma(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||qt(v.h,u))){if(!u.K&&qt(v.h,u)&&v.G==3){try{var T=v.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var j=T;if(j[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)eo(v),Fn(v);else break e;Zs(v),st(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=Nn(x(v.Za,v),6e3));if(1>=$l(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Sr(v,11)}else if((u.K||v.g==u)&&eo(v),!Q(m))for(j=v.Da.g.parse(m),m=0;m<j.length;m++){let De=j[m];if(v.T=De[0],De=De[1],v.G==2)if(De[0]=="c"){v.K=De[1],v.ia=De[2];const It=De[3];It!=null&&(v.la=It,v.j.info("VER="+v.la));const lt=De[4];lt!=null&&(v.Aa=lt,v.j.info("SVER="+v.Aa));const Tn=De[5];Tn!=null&&typeof Tn=="number"&&0<Tn&&(T=1.5*Tn,v.L=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const dn=u.g;if(dn){const ss=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ss){var q=T.h;q.g||ss.indexOf("spdy")==-1&&ss.indexOf("quic")==-1&&ss.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(ga(q,q.h),q.h=null))}if(T.D){const ro=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;ro&&(T.ya=ro,Be(T.I,T.D,ro))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),T=v;var ne=u;if(T.qa=nu(T,T.J?T.ia:null,T.W),ne.K){Wl(T.h,ne);var Ue=ne,gt=T.L;gt&&(Ue.I=gt),Ue.B&&(Ji(Ue),We(Ue)),T.g=ne}else is(T);0<v.i.length&&nr(v)}else De[0]!="stop"&&De[0]!="close"||Sr(v,7);else v.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Sr(v,7):Nt(v):De[0]!="noop"&&v.l&&v.l.ta(De),v.v=0)}}wr(4)}catch{}}var Bl=class{constructor(u,m){this.g=u,this.map=m}};function Zi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function un(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function $l(u){return u.h?1:u.g?u.g.size:0}function qt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ga(u,m){u.g?u.g.add(m):u.h=m}function Wl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Zi.prototype.cancel=function(){if(this.i=ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ql(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return B(u.i)}function qs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],v=u.length,T=0;T<v;T++)m.push(u[T]);return m}m=[],v=0;for(T in u)m[v++]=u[T];return m}function Hs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const T in u)m[v++]=T;return m}}}function Qr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=Hs(u),T=qs(u),j=T.length,q=0;q<j;q++)m.call(void 0,T[q],v&&v[q],u)}var es=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gh(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var T=u[v].indexOf("="),j=null;if(0<=T){var q=u[v].substring(0,T);j=u[v].substring(T+1)}else q=u[v];m(q,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Er(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Er){this.h=u.h,ts(this,u.j),this.o=u.o,this.g=u.g,Yr(this,u.s),this.l=u.l;var m=u.i,v=new Zn;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),Xr(this,v),this.m=u.m}else u&&(m=String(u).match(es))?(this.h=!1,ts(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Yr(this,m[4]),this.l=Ne(m[5]||"",!0),Xr(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}Er.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Zr(m,Gs,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Zr(m,Gs,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Zr(v,v.charAt(0)=="/"?Kl:Gl,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Zr(v,ya)),u.join("")};function cn(u){return new Er(u)}function ts(u,m,v){u.j=v?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Yr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Xr(u,m,v){m instanceof Zn?(u.i=m,er(u.i,u.h)):(v||(m=Zr(m,Ql)),u.i=new Zn(m,u.h))}function Be(u,m,v){u.i.set(m,v)}function Jr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Zr(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,Hl),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Hl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Gs=/[#\/\?@]/g,Gl=/[#\?:]/g,Kl=/[#\?]/g,Ql=/[#\?@]/g,ya=/#/g;function Zn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function kt(u){u.g||(u.g=new Map,u.h=0,u.i&&gh(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=Zn.prototype,n.add=function(u,m){kt(this),this.i=null,u=En(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function Vn(u,m){kt(u),m=En(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ln(u,m){return kt(u),m=En(u,m),u.g.has(m)}n.forEach=function(u,m){kt(this),this.g.forEach(function(v,T){v.forEach(function(j){u.call(m,j,T,this)},this)},this)},n.na=function(){kt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let T=0;T<m.length;T++){const j=u[T];for(let q=0;q<j.length;q++)v.push(m[T])}return v},n.V=function(u){kt(this);let m=[];if(typeof u=="string")Ln(this,u)&&(m=m.concat(this.g.get(En(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return kt(this),this.i=null,u=En(this,u),Ln(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ei(u,m,v){Vn(u,m),0<v.length&&(u.i=null,u.g.set(En(u,m),B(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var T=m[v];const q=encodeURIComponent(String(T)),ne=this.V(T);for(T=0;T<ne.length;T++){var j=q;ne[T]!==""&&(j+="="+encodeURIComponent(String(ne[T]))),u.push(j)}}return this.i=u.join("&")};function En(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function er(u,m){m&&!u.j&&(kt(u),u.i=null,u.g.forEach(function(v,T){var j=T.toLowerCase();T!=j&&(Vn(this,T),ei(this,j,v))},u)),u.j=m}function yh(u,m){const v=new Qi;if(f.Image){const T=new Image;T.onload=O(Qt,v,"TestLoadImage: loaded",!0,m,T),T.onerror=O(Qt,v,"TestLoadImage: error",!1,m,T),T.onabort=O(Qt,v,"TestLoadImage: abort",!1,m,T),T.ontimeout=O(Qt,v,"TestLoadImage: timeout",!1,m,T),f.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Yl(u,m){const v=new Qi,T=new AbortController,j=setTimeout(()=>{T.abort(),Qt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(q=>{clearTimeout(j),q.ok?Qt(v,"TestPingServer: ok",!0,m):Qt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(j),Qt(v,"TestPingServer: error",!1,m)})}function Qt(u,m,v,T,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),T(v)}catch{}}function vh(){this.g=new la}function Xl(u,m,v){const T=v||"";try{Qr(u,function(j,q){let ne=j;y(j)&&(ne=oa(j)),m.push(T+q+"="+encodeURIComponent(ne))})}catch(j){throw m.push(T+"type="+encodeURIComponent("_badmap")),j}}function Tr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(Tr,Gi),Tr.prototype.g=function(){return new ns(this.l,this.j)},Tr.prototype.i=(function(u){return function(){return u}})({});function ns(u,m){pt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(ns,pt),n=ns.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,jn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Mn(this):jn(this),this.readyState==3&&Jl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Mn(this))},n.Qa=function(u){this.g&&(this.response=u,Mn(this))},n.ga=function(){this.g&&Mn(this)};function Mn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,jn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function jn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ns.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ir(u){let m="";return ve(u,function(v,T){m+=T,m+=":",m+=v,m+=`\r
`}),m}function ti(u,m,v){e:{for(T in v){var T=!1;break e}T=!0}T||(v=Ir(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):Be(u,m,v))}function Ye(u){pt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Ye,pt);var _h=/^https?$/i,va=["POST","PUT"];n=Ye.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dn.g(),this.v=this.o?Ms(this.o):Ms(Dn),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){rs(this,q);return}if(u=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var j in T)v.set(j,T[j]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const q of T.keys())v.set(q,T.get(q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find(q=>q.toLowerCase()=="content-type"),j=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(va,m,void 0))||T||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ne]of v)this.g.setRequestHeader(q,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qs(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){rs(this,q)}};function rs(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Ks(u),hn(u)}function Ks(u){u.A||(u.A=!0,mt(u,"complete"),mt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,mt(this,"complete"),mt(this,"abort"),hn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hn(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?_a(this):this.bb())},n.bb=function(){_a(this)};function _a(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Yt(u)!=4||u.Z()!=2)){if(u.u&&Yt(u)==4)ra(u.Ea,0,u);else if(mt(u,"readystatechange"),Yt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var T;if(T=ne===0){var j=String(u.D).match(es)[1]||null;!j&&f.self&&f.self.location&&(j=f.self.location.protocol.slice(0,-1)),T=!_h.test(j?j.toLowerCase():"")}v=T}if(v)mt(u,"complete"),mt(u,"success");else{u.m=6;try{var q=2<Yt(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",Ks(u)}}finally{hn(u)}}}}function hn(u,m){if(u.g){Qs(u);const v=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||mt(u,"ready");try{v.onreadystatechange=T}catch{}}}function Qs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Yt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),aa(m)}};function wa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ys(u){const m={};u=(u.g&&2<=Yt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(Q(u[T]))continue;var v=V(u[T]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const q=m[j]||[];m[j]=q,q.push(v)}N(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function tr(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function Ea(u){this.Aa=0,this.i=[],this.j=new Qi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tr("baseRetryDelayMs",5e3,u),this.cb=tr("retryDelaySeedMs",1e4,u),this.Wa=tr("forwardChannelMaxRetries",2,u),this.wa=tr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Zi(u&&u.concurrentRequestLimit),this.Da=new vh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ea.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,T){st(0),this.W=u,this.H=m||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.I=nu(this,null,this.W),nr(this)};function Nt(u){if(Xs(u),u.G==3){var m=u.U++,v=cn(u.I);if(Be(v,"SID",u.K),Be(v,"RID",m),Be(v,"TYPE","terminate"),xr(u,v),m=new On(u,u.j,m),m.L=2,m.v=Jr(cn(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=m.v,v=!0),v||(m.g=ru(m.j,null),m.g.ea(m.v)),m.F=Date.now(),We(m)}tu(u)}function Fn(u){u.g&&(Ta(u),u.g.cancel(),u.g=null)}function Xs(u){Fn(u),u.u&&(f.clearTimeout(u.u),u.u=null),eo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function nr(u){if(!un(u.h)&&!u.s){u.s=!0;var m=u.Ga;ze||ae(),re||(ze(),re=!0),me.add(m,u),u.B=0}}function wh(u,m){return $l(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Nn(x(u.Ga,u,m),eu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const j=new On(this,this.j,u);let q=this.o;if(this.S&&(q?(q=S(q),k(q,this.S)):q=this.S),this.m!==null||this.O||(j.H=q,q=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=ni(this,j,m),v=cn(this.I),Be(v,"RID",u),Be(v,"CVER",22),this.D&&Be(v,"X-HTTP-Session-Id",this.D),xr(this,v),q&&(this.O?m="headers="+encodeURIComponent(String(Ir(q)))+"&"+m:this.m&&ti(v,this.m,q)),ga(this.h,j),this.Ua&&Be(v,"TYPE","init"),this.P?(Be(v,"$req",m),Be(v,"SID","null"),j.T=!0,Ws(j,v,null)):Ws(j,v,m),this.G=2}}else this.G==3&&(u?Js(this,u):this.i.length==0||un(this.h)||Js(this))};function Js(u,m){var v;m?v=m.l:v=u.U++;const T=cn(u.I);Be(T,"SID",u.K),Be(T,"RID",v),Be(T,"AID",u.T),xr(u,T),u.m&&u.o&&ti(T,u.m,u.o),v=new On(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ni(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ga(u.h,v),Ws(v,T,m)}function xr(u,m){u.H&&ve(u.H,function(v,T){Be(m,T,v)}),u.l&&Qr({},function(v,T){Be(m,T,v)})}function ni(u,m,v){v=Math.min(u.i.length,v);var T=u.l?x(u.l.Na,u.l,u):null;e:{var j=u.i;let q=-1;for(;;){const ne=["count="+v];q==-1?0<v?(q=j[0].g,ne.push("ofs="+q)):q=0:ne.push("ofs="+q);let Ue=!0;for(let gt=0;gt<v;gt++){let De=j[gt].g;const It=j[gt].map;if(De-=q,0>De)q=Math.max(0,j[gt].g-100),Ue=!1;else try{Xl(It,ne,"req"+De+"_")}catch{T&&T(It)}}if(Ue){T=ne.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,T}function is(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ze||ae(),re||(ze(),re=!0),me.add(m,u),u.v=0}}function Zs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Nn(x(u.Fa,u),eu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Zl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Nn(x(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Fn(this),Zl(this))};function Ta(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Zl(u){u.g=new On(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=cn(u.qa);Be(m,"RID","rpc"),Be(m,"SID",u.K),Be(m,"AID",u.T),Be(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(m,"TO",u.ja),Be(m,"TYPE","xmlhttp"),xr(u,m),u.m&&u.o&&ti(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=Jr(cn(m)),v.m=null,v.P=!0,pa(v,u)}n.Za=function(){this.C!=null&&(this.C=null,Fn(this),Zs(this),st(19))};function eo(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function to(u,m){var v=null;if(u.g==m){eo(u),Ta(u),u.g=null;var T=2}else if(qt(u.h,m))v=m.D,Wl(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var j=u.B;T=Ki(),mt(T,new Us(T,v)),nr(u)}else is(u);else if(j=m.s,j==3||j==0&&0<m.X||!(T==1&&wh(u,m)||T==2&&Zs(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),j){case 1:Sr(u,5);break;case 4:Sr(u,10);break;case 3:Sr(u,6);break;default:Sr(u,2)}}}function eu(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function Sr(u,m){if(u.j.info("Error code "+m),m==2){var v=x(u.fb,u),T=u.Xa;const j=!T;T=new Er(T||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||ts(T,"https"),Jr(T),j?yh(T.toString(),v):Yl(T.toString(),v)}else st(2);u.G=0,u.l&&u.l.sa(m),tu(u),Xs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function tu(u){if(u.G=0,u.ka=[],u.l){const m=ql(u.h);(m.length!=0||u.i.length!=0)&&(L(u.ka,m),L(u.ka,u.i),u.h.i.length=0,B(u.i),u.i.length=0),u.l.ra()}}function nu(u,m,v){var T=v instanceof Er?cn(v):new Er(v);if(T.g!="")m&&(T.g=m+"."+T.g),Yr(T,T.s);else{var j=f.location;T=j.protocol,m=m?m+"."+j.hostname:j.hostname,j=+j.port;var q=new Er(null);T&&ts(q,T),m&&(q.g=m),j&&Yr(q,j),v&&(q.l=v),T=q}return v=u.D,m=u.ya,v&&m&&Be(T,v,m),Be(T,"VER",u.la),xr(u,T),T}function ru(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ye(new Tr({eb:v})):new Ye(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ia(){}n=Ia.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function no(){}no.prototype.g=function(u,m){return new Ht(u,m)};function Ht(u,m){pt.call(this),this.g=new Ea(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!Q(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Q(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new rr(this)}$(Ht,pt),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Nt(this.g)},Ht.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=oa(u),u=v);m.i.push(new Bl(m.Ya++,u)),m.G==3&&nr(m)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Nt(this.g),delete this.g,Ht.aa.N.call(this)};function iu(u){Xn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}$(iu,Xn);function su(){Fs.call(this),this.status=1}$(su,Fs);function rr(u){this.g=u}$(rr,Ia),rr.prototype.ua=function(){mt(this.g,"a")},rr.prototype.ta=function(u){mt(this.g,new iu(u))},rr.prototype.sa=function(u){mt(this.g,new su)},rr.prototype.ra=function(){mt(this.g,"b")},no.prototype.createWebChannel=no.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,m0=function(){return new no},p0=function(){return Ki()},f0=Jn,Ef={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bs.NO_ERROR=0,Bs.TIMEOUT=8,Bs.HTTP_ERROR=6,dc=Bs,jl.COMPLETE="complete",d0=jl,js.EventType=_n,_n.OPEN="a",_n.CLOSE="b",_n.ERROR="c",_n.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Ya=js,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,h0=Ye}).apply(typeof tc<"u"?tc:typeof self<"u"?self:typeof window<"u"?window:{});const Gy="@firebase/firestore",Ky="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rn.UNAUTHENTICATED=new rn(null),rn.GOOGLE_CREDENTIALS=new rn("google-credentials-uid"),rn.FIRST_PARTY=new rn("first-party-uid"),rn.MOCK_USER=new rn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Gf("@firebase/firestore");function Ao(){return Ss.logLevel}function oe(n,...e){if(Ss.logLevel<=Pe.DEBUG){const t=e.map(sp);Ss.debug(`Firestore (${Ko}): ${n}`,...t)}}function Br(n,...e){if(Ss.logLevel<=Pe.ERROR){const t=e.map(sp);Ss.error(`Firestore (${Ko}): ${n}`,...t)}}function bi(n,...e){if(Ss.logLevel<=Pe.WARN){const t=e.map(sp);Ss.warn(`Firestore (${Ko}): ${n}`,...t)}}function sp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,g0(n,i,t)}function g0(n,e,t){let i=`FIRESTORE (${Ko}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Br(i),new Error(i)}function Fe(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||g0(e,o,i)}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Wr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class y0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(rn.UNAUTHENTICATED)))}shutdown(){}}class sC{constructor(e){this.t=e,this.currentUser=rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Mr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},f=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Mr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string",31837,{l:i}),new iC(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new rn(e)}}class oC{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=rn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class aC{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new oC(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(rn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lC{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const i=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Qy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Qy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=uC(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ae(n,e){return n<e?-1:n>e?1:0}function Tf(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Ae(i,o);{const l=v0(),h=cC(l.encode(Yy(n,t)),l.encode(Yy(e,t)));return h!==0?h:Ae(i,o)}}t+=i>65535?2:1}return Ae(n.length,e.length)}function Yy(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function cC(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ae(n[t],e[t]);return Ae(n.length,e.length)}function Mo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy="__name__";class lr{constructor(e,t,i){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&we(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return lr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof lr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=lr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ae(e.length,t.length)}static compareSegments(e,t){const i=lr.isNumericId(e),o=lr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?lr.extractNumericId(e).compare(lr.extractNumericId(t)):Tf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pi.fromString(e.substring(4,e.length-2))}}class He extends lr{construct(e,t,i){return new He(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ie(H.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const hC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends lr{construct(e,t,i){return new Rt(e,t,i)}static isValidIdentifier(e){return hC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xy}static keyField(){return new Rt([Xy])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ie(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ie(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new ie(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(He.fromString(e))}static fromName(e){return new pe(He.fromString(e).popFirst(5))}static empty(){return new pe(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new He(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(n,e,t){if(!t)throw new ie(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function w0(n,e,t,i){if(e===!0&&i===!0)throw new ie(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Jy(n){if(!pe.isDocumentKey(n))throw new ie(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Zy(n){if(pe.isDocumentKey(n))throw new ie(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function E0(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Hc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we(12329,{type:typeof n})}function ln(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ie(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hc(n);throw new ie(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Al(n,e){if(!E0(n))throw new ie(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const h=n[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ie(H.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=-62135596800,tv=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*tv);return new Ge(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ev)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tv}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Al(e,Ge._jsonSchema))return new Ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ev;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ge._jsonSchemaVersion="firestore/timestamp/1.0",Ge._jsonSchema={type:dt("string",Ge._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Ge(0,0))}static max(){return new Te(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=-1;function dC(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(i===1e9?new Ge(t+1,0):new Ge(t,i));return new Di(o,pe.empty(),e)}function fC(n){return new Di(n.readTime,n.key,hl)}class Di{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Di(Te.min(),pe.empty(),hl)}static max(){return new Di(Te.max(),pe.empty(),hl)}}function pC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:Ae(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==mC)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,i)=>{t(e)}))}static reject(e){return new G(((t,i)=>{i(e)}))}static waitFor(e){return new G(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(p=>i(p)))})),h=!0,l===o&&t()}))}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next((o=>o?G.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new G(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next((_=>{h[y]=_,++f,f===l&&i(h)}),(_=>o(_)))}}))}static doWhile(e,t){return new G(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function yC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Gc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=-1;function Kc(n){return n==null}function Sc(n){return n===0&&1/n==-1/0}function vC(n){return typeof n=="number"&&Number.isInteger(n)&&!Sc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="";function _C(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=nv(e)),e=wC(n.get(t),e);return nv(e)}function wC(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case T0:t+="";break;default:t+=l}}return t}function nv(n){return n+T0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function I0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Ot.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ot.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nc(this.root,e,this.comparator,!1)}getReverseIterator(){return new nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nc(this.root,e,this.comparator,!0)}}class nc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ot{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Ot.RED,this.left=o??Ot.EMPTY,this.right=l??Ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Ot(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ot.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}Ot.EMPTY=null,Ot.RED=!0,Ot.BLACK=!1;Ot.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new iv(this.data.getIterator())}getIteratorFrom(e){return new iv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class iv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new vn([])}unionWith(e){let t=new wt(Rt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new x0("Invalid base64 string: "+l):l}})(e);return new Pt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const EC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(n){if(Fe(!!n,39018),typeof n=="string"){let e=0;const t=EC.exec(n);if(Fe(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vi(n){return typeof n=="string"?Pt.fromBase64String(n):Pt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="server_timestamp",A0="__type__",C0="__previous_value__",R0="__local_write_time__";function ap(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[A0])===null||t===void 0?void 0:t.stringValue)===S0}function Qc(n){const e=n.mapValue.fields[C0];return ap(e)?Qc(e):e}function dl(n){const e=Oi(n.mapValue.fields[R0].timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,t,i,o,l,h,f,p,y,_){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=_}}const Ac="(default)";class jo{constructor(e,t){this.projectId=e,this.database=t||Ac}static empty(){return new jo("","")}get isDefaultDatabase(){return this.database===Ac}isEqual(e){return e instanceof jo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="__type__",IC="__max__",rc={mapValue:{}},k0="__vector__",Cc="value";function Li(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ap(n)?4:SC(n)?9007199254740991:xC(n)?10:11:we(28295,{value:n})}function pr(n,e){if(n===e)return!0;const t=Li(n);if(t!==Li(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return dl(n).isEqual(dl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Oi(o.timestampValue),f=Oi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Vi(o.bytesValue).isEqual(Vi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return at(o.geoPointValue.latitude)===at(l.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return at(o.integerValue)===at(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=at(o.doubleValue),f=at(l.doubleValue);return h===f?Sc(h)===Sc(f):isNaN(h)&&isNaN(f)}return!1})(n,e);case 9:return Mo(n.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(rv(h)!==rv(f))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(f[p]===void 0||!pr(h[p],f[p])))return!1;return!0})(n,e);default:return we(52216,{left:n})}}function fl(n,e){return(n.values||[]).find((t=>pr(t,e)))!==void 0}function Fo(n,e){if(n===e)return 0;const t=Li(n),i=Li(e);if(t!==i)return Ae(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(n.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=at(l.integerValue||l.doubleValue),p=at(h.integerValue||h.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return sv(n.timestampValue,e.timestampValue);case 4:return sv(dl(n),dl(e));case 5:return Tf(n.stringValue,e.stringValue);case 6:return(function(l,h){const f=Vi(l),p=Vi(h);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),p=h.split("/");for(let y=0;y<f.length&&y<p.length;y++){const _=Ae(f[y],p[y]);if(_!==0)return _}return Ae(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Ae(at(l.latitude),at(h.latitude));return f!==0?f:Ae(at(l.longitude),at(h.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ov(n.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,p,y,_;const E=l.fields||{},x=h.fields||{},O=(f=E[Cc])===null||f===void 0?void 0:f.arrayValue,$=(p=x[Cc])===null||p===void 0?void 0:p.arrayValue,B=Ae(((y=O==null?void 0:O.values)===null||y===void 0?void 0:y.length)||0,((_=$==null?void 0:$.values)===null||_===void 0?void 0:_.length)||0);return B!==0?B:ov(O,$)})(n.mapValue,e.mapValue);case 11:return(function(l,h){if(l===rc.mapValue&&h===rc.mapValue)return 0;if(l===rc.mapValue)return 1;if(h===rc.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=h.fields||{},_=Object.keys(y);p.sort(),_.sort();for(let E=0;E<p.length&&E<_.length;++E){const x=Tf(p[E],_[E]);if(x!==0)return x;const O=Fo(f[p[E]],y[_[E]]);if(O!==0)return O}return Ae(p.length,_.length)})(n.mapValue,e.mapValue);default:throw we(23264,{le:t})}}function sv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ae(n,e);const t=Oi(n),i=Oi(e),o=Ae(t.seconds,i.seconds);return o!==0?o:Ae(t.nanos,i.nanos)}function ov(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Fo(t[o],i[o]);if(l)return l}return Ae(t.length,i.length)}function Uo(n){return If(n)}function If(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Oi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Vi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return pe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=If(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${If(t.fields[h])}`;return o+"}"})(n.mapValue):we(61005,{value:n})}function fc(n){switch(Li(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qc(n);return e?16+fc(e):16;case 5:return 2*n.stringValue.length;case 6:return Vi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+fc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Bi(i.fields,((l,h)=>{o+=l.length+fc(h)})),o})(n.mapValue);default:throw we(13486,{value:n})}}function av(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function xf(n){return!!n&&"integerValue"in n}function lp(n){return!!n&&"arrayValue"in n}function lv(n){return!!n&&"nullValue"in n}function uv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pc(n){return!!n&&"mapValue"in n}function xC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[P0])===null||t===void 0?void 0:t.stringValue)===k0}function tl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bi(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=tl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=tl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function SC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===IC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!pc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tl(t)}setAll(e){let t=Rt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=tl(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());pc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];pc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Bi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new an(tl(this.value))}}function N0(n){const e=[];return Bi(n.fields,((t,i)=>{const o=new Rt([t]);if(pc(i)){const l=N0(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new $t(e,0,Te.min(),Te.min(),Te.min(),an.empty(),0)}static newFoundDocument(e,t,i,o){return new $t(e,1,t,Te.min(),i,o,0)}static newNoDocument(e,t){return new $t(e,2,t,Te.min(),Te.min(),an.empty(),0)}static newUnknownDocument(e,t){return new $t(e,3,t,Te.min(),Te.min(),an.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.position=e,this.inclusive=t}}function cv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(h.referenceValue),t.key):i=Fo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function hv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t="asc"){this.field=e,this.dir=t}}function AC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b0=class{};class ht extends b0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new RC(e,t,i):t==="array-contains"?new NC(e,i):t==="in"?new bC(e,i):t==="not-in"?new DC(e,i):t==="array-contains-any"?new OC(e,i):new ht(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new PC(e,i):new kC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Fo(t,this.value)):t!==null&&Li(this.value)===Li(t)&&this.matchesComparison(Fo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yn extends b0{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Yn(e,t)}matches(e){return D0(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function D0(n){return n.op==="and"}function O0(n){return CC(n)&&D0(n)}function CC(n){for(const e of n.filters)if(e instanceof Yn)return!1;return!0}function Sf(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+Uo(n.value);if(O0(n))return n.filters.map((e=>Sf(e))).join(",");{const e=n.filters.map((t=>Sf(t))).join(",");return`${n.op}(${e})`}}function V0(n,e){return n instanceof ht?(function(i,o){return o instanceof ht&&i.op===o.op&&i.field.isEqual(o.field)&&pr(i.value,o.value)})(n,e):n instanceof Yn?(function(i,o){return o instanceof Yn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&V0(h,o.filters[f])),!0):!1})(n,e):void we(19439)}function L0(n){return n instanceof ht?(function(t){return`${t.field.canonicalString()} ${t.op} ${Uo(t.value)}`})(n):n instanceof Yn?(function(t){return t.op.toString()+" {"+t.getFilters().map(L0).join(" ,")+"}"})(n):"Filter"}class RC extends ht{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class PC extends ht{constructor(e,t){super(e,"in",t),this.keys=M0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class kC extends ht{constructor(e,t){super(e,"not-in",t),this.keys=M0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function M0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>pe.fromName(i.referenceValue)))}class NC extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return lp(t)&&fl(t.arrayValue,this.value)}}class bC extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fl(this.value.arrayValue,t)}}class DC extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!fl(this.value.arrayValue,t)}}class OC extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!lp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>fl(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function dv(n,e=null,t=[],i=[],o=null,l=null,h=null){return new VC(n,e,t,i,o,l,h)}function up(n){const e=Ie(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Sf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Kc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Uo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Uo(i))).join(",")),e.Pe=t}return e.Pe}function cp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!AC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!V0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!hv(n.startAt,e.startAt)&&hv(n.endAt,e.endAt)}function Af(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function LC(n,e,t,i,o,l,h,f){return new Xo(n,e,t,i,o,l,h,f)}function Yc(n){return new Xo(n)}function fv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function j0(n){return n.collectionGroup!==null}function nl(n){const e=Ie(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new wt(Rt.comparator);return h.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new pl(l,i))})),t.has(Rt.keyField().canonicalString())||e.Te.push(new pl(Rt.keyField(),i))}return e.Te}function dr(n){const e=Ie(n);return e.Ie||(e.Ie=MC(e,nl(n))),e.Ie}function MC(n,e){if(n.limitType==="F")return dv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new pl(o.field,l)}));const t=n.endAt?new Rc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Rc(n.startAt.position,n.startAt.inclusive):null;return dv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Cf(n,e){const t=n.filters.concat([e]);return new Xo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Rf(n,e,t){return new Xo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Xc(n,e){return cp(dr(n),dr(e))&&n.limitType===e.limitType}function F0(n){return`${up(dr(n))}|lt:${n.limitType}`}function Co(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>L0(o))).join(", ")}]`),Kc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Uo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Uo(o))).join(",")),`Target(${i})`})(dr(n))}; limitType=${n.limitType})`}function Jc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of nl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,p){const y=cv(h,f,p);return h.inclusive?y<=0:y<0})(i.startAt,nl(i),o)||i.endAt&&!(function(h,f,p){const y=cv(h,f,p);return h.inclusive?y>=0:y>0})(i.endAt,nl(i),o))})(n,e)}function jC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function U0(n){return(e,t)=>{let i=!1;for(const o of nl(n)){const l=FC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function FC(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,h,f){const p=h.data.field(l),y=f.data.field(l);return p!==null&&y!==null?Fo(p,y):we(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return we(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Bi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return I0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=new nt(pe.comparator);function $r(){return UC}const z0=new nt(pe.comparator);function Xa(...n){let e=z0;for(const t of n)e=e.insert(t.key,t);return e}function B0(n){let e=z0;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function _s(){return rl()}function $0(){return rl()}function rl(){return new Ps((n=>n.toString()),((n,e)=>n.isEqual(e)))}const zC=new nt(pe.comparator),BC=new wt(pe.comparator);function ke(...n){let e=BC;for(const t of n)e=e.add(t);return e}const $C=new wt(Ae);function WC(){return $C}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sc(e)?"-0":e}}function W0(n){return{integerValue:""+n}}function qC(n,e){return vC(e)?W0(e):hp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this._=void 0}}function HC(n,e,t){return n instanceof Pc?(function(o,l){const h={fields:{[A0]:{stringValue:S0},[R0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&ap(l)&&(l=Qc(l)),l&&(h.fields[C0]=l),{mapValue:h}})(t,e):n instanceof ml?H0(n,e):n instanceof gl?G0(n,e):(function(o,l){const h=q0(o,l),f=pv(h)+pv(o.Ee);return xf(h)&&xf(o.Ee)?W0(f):hp(o.serializer,f)})(n,e)}function GC(n,e,t){return n instanceof ml?H0(n,e):n instanceof gl?G0(n,e):t}function q0(n,e){return n instanceof kc?(function(i){return xf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Pc extends Zc{}class ml extends Zc{constructor(e){super(),this.elements=e}}function H0(n,e){const t=K0(e);for(const i of n.elements)t.some((o=>pr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class gl extends Zc{constructor(e){super(),this.elements=e}}function G0(n,e){let t=K0(e);for(const i of n.elements)t=t.filter((o=>!pr(o,i)));return{arrayValue:{values:t}}}class kc extends Zc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function pv(n){return at(n.integerValue||n.doubleValue)}function K0(n){return lp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function KC(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof ml&&o instanceof ml||i instanceof gl&&o instanceof gl?Mo(i.elements,o.elements,pr):i instanceof kc&&o instanceof kc?pr(i.Ee,o.Ee):i instanceof Pc&&o instanceof Pc})(n.transform,e.transform)}class QC{constructor(e,t){this.version=e,this.transformResults=t}}class kn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class eh{}function Q0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new dp(n.key,kn.none()):new Cl(n.key,n.data,kn.none());{const t=n.data,i=an.empty();let o=new wt(Rt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new $i(n.key,i,new vn(o.toArray()),kn.none())}}function YC(n,e,t){n instanceof Cl?(function(o,l,h){const f=o.value.clone(),p=gv(o.fieldTransforms,l,h.transformResults);f.setAll(p),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(n,e,t):n instanceof $i?(function(o,l,h){if(!mc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=gv(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(Y0(o)),p.setAll(f),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function il(n,e,t,i){return n instanceof Cl?(function(l,h,f,p){if(!mc(l.precondition,h))return f;const y=l.value.clone(),_=yv(l.fieldTransforms,p,h);return y.setAll(_),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof $i?(function(l,h,f,p){if(!mc(l.precondition,h))return f;const y=yv(l.fieldTransforms,p,h),_=h.data;return _.setAll(Y0(l)),_.setAll(y),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((E=>E.field)))})(n,e,t,i):(function(l,h,f){return mc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(n,e,t)}function XC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=q0(i.transform,o||null);l!=null&&(t===null&&(t=an.empty()),t.set(i.field,l))}return t||null}function mv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Mo(i,o,((l,h)=>KC(l,h)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Cl extends eh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class $i extends eh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Y0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function gv(n,e,t){const i=new Map;Fe(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,GC(h,f,t[o]))}return i}function yv(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,HC(l,h,e))}return i}class dp extends eh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JC extends eh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&YC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=il(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=il(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=$0();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const p=Q0(h,f);p!==null&&i.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Te.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ke())}isEqual(e){return this.batchId===e.batchId&&Mo(this.mutations,e.mutations,((t,i)=>mv(t,i)))&&Mo(this.baseMutations,e.baseMutations,((t,i)=>mv(t,i)))}}class fp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return zC})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new fp(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Oe;function nR(n){switch(n){case H.OK:return we(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return we(15467,{code:n})}}function X0(n){if(n===void 0)return Br("GRPC error has no .code"),H.UNKNOWN;switch(n){case ct.OK:return H.OK;case ct.CANCELLED:return H.CANCELLED;case ct.UNKNOWN:return H.UNKNOWN;case ct.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ct.INTERNAL:return H.INTERNAL;case ct.UNAVAILABLE:return H.UNAVAILABLE;case ct.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ct.NOT_FOUND:return H.NOT_FOUND;case ct.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ct.ABORTED:return H.ABORTED;case ct.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ct.DATA_LOSS:return H.DATA_LOSS;default:return we(39323,{code:n})}}(Oe=ct||(ct={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=new Pi([4294967295,4294967295],0);function vv(n){const e=v0().encode(n),t=new c0;return t.update(e),new Uint8Array(t.digest())}function _v(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Pi([t,i],0),new Pi([o,l],0)]}class pp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ja(`Invalid padding: ${t}`);if(i<0)throw new Ja(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ja(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ja(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Pi.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Pi.fromNumber(i)));return o.compare(rR)===1&&(o=new Pi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=vv(e),[i,o]=_v(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new pp(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=vv(e),[i,o]=_v(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Rl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new th(Te.min(),o,new nt(Ae),$r(),ke())}}class Rl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Rl(i,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class J0{constructor(e,t){this.targetId=e,this.De=t}}class Z0{constructor(e,t,i=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class wv{constructor(){this.ve=0,this.Ce=Ev(),this.Fe=Pt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ke(),t=ke(),i=ke();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:we(38017,{changeType:l})}})),new Rl(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Ev()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class iR{constructor(e){this.We=e,this.Ge=new Map,this.ze=$r(),this.je=ic(),this.Je=ic(),this.He=new nt(Ae)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:we(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(Af(l))if(i===0){const h=new pe(l.path);this.Xe(t,h,$t.newNoDocument(h,Te.min()))}else Fe(i===1,20013,{expectedCount:i});else{const h=this.ot(t);if(h!==i){const f=this._t(e),p=f?this.ut(f,e,h):1;if(p!==0){this.rt(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,y)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Vi(i).toUint8Array()}catch(p){if(p instanceof x0)return bi("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new pp(h,o,l)}catch(p){return bi(p instanceof Ja?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&Af(f.target)){const p=new pe(f.target.path);this.Tt(p).has(h)||this.It(h,p)||this.Xe(h,p,$t.newNoDocument(p,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let i=ke();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((p=>{const y=this.st(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new th(e,t,this.He,this.ze,i);return this.ze=$r(),this.je=ic(),this.Je=ic(),this.He=new nt(Ae),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new wv,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new wt(Ae),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new wt(Ae),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new wv),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ic(){return new nt(pe.comparator)}function Ev(){return new nt(pe.comparator)}const sR={asc:"ASCENDING",desc:"DESCENDING"},oR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aR={and:"AND",or:"OR"};class lR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pf(n,e){return n.useProto3Json||Kc(e)?e:{value:e}}function Nc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ew(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function uR(n,e){return Nc(n,e.toTimestamp())}function fr(n){return Fe(!!n,49232),Te.fromTimestamp((function(t){const i=Oi(t);return new Ge(i.seconds,i.nanos)})(n))}function mp(n,e){return kf(n,e).canonicalString()}function kf(n,e){const t=(function(o){return new He(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function tw(n){const e=He.fromString(n);return Fe(ow(e),10190,{key:e.toString()}),e}function Nf(n,e){return mp(n.databaseId,e.path)}function Zd(n,e){const t=tw(e);if(t.get(1)!==n.databaseId.projectId)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(rw(t))}function nw(n,e){return mp(n.databaseId,e)}function cR(n){const e=tw(n);return e.length===4?He.emptyPath():rw(e)}function bf(n){return new He(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function rw(n){return Fe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Tv(n,e,t){return{name:Nf(n,e),fields:t.value.mapValue.fields}}function hR(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:we(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,_){return y.useProto3Json?(Fe(_===void 0||typeof _=="string",58123),Pt.fromBase64String(_||"")):(Fe(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Pt.fromUint8Array(_||new Uint8Array))})(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(y){const _=y.code===void 0?H.UNKNOWN:X0(y.code);return new ie(_,y.message||"")})(h);t=new Z0(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Zd(n,i.document.name),l=fr(i.document.updateTime),h=i.document.createTime?fr(i.document.createTime):Te.min(),f=new an({mapValue:{fields:i.document.fields}}),p=$t.newFoundDocument(o,l,h,f),y=i.targetIds||[],_=i.removedTargetIds||[];t=new gc(y,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Zd(n,i.document),l=i.readTime?fr(i.readTime):Te.min(),h=$t.newNoDocument(o,l),f=i.removedTargetIds||[];t=new gc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Zd(n,i.document),l=i.removedTargetIds||[];t=new gc([],l,o,null)}else{if(!("filter"in e))return we(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new tR(o,l),f=i.targetId;t=new J0(f,h)}}return t}function dR(n,e){let t;if(e instanceof Cl)t={update:Tv(n,e.key,e.value)};else if(e instanceof dp)t={delete:Nf(n,e.key)};else if(e instanceof $i)t={update:Tv(n,e.key,e.data),updateMask:ER(e.fieldMask)};else{if(!(e instanceof JC))return we(16599,{Rt:e.type});t={verify:Nf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof Pc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ml)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof gl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof kc)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw we(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:uR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we(27497)})(n,e.precondition)),t}function fR(n,e){return n&&n.length>0?(Fe(e!==void 0,14353),n.map((t=>(function(o,l){let h=o.updateTime?fr(o.updateTime):fr(l);return h.isEqual(Te.min())&&(h=fr(l)),new QC(h,o.transformResults||[])})(t,e)))):[]}function pR(n,e){return{documents:[nw(n,e.path)]}}function mR(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=nw(n,o);const l=(function(y){if(y.length!==0)return sw(Yn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((_=>(function(x){return{field:Ro(x.field),direction:vR(x.dir)}})(_)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Pf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{Vt:t,parent:o}}function gR(n){let e=cR(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=(function(E){const x=iw(E);return x instanceof Yn&&O0(x)?x.getFilters():[x]})(t.where));let h=[];t.orderBy&&(h=(function(E){return E.map((x=>(function($){return new pl(Po($.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(x)))})(t.orderBy));let f=null;t.limit&&(f=(function(E){let x;return x=typeof E=="object"?E.value:E,Kc(x)?null:x})(t.limit));let p=null;t.startAt&&(p=(function(E){const x=!!E.before,O=E.values||[];return new Rc(O,x)})(t.startAt));let y=null;return t.endAt&&(y=(function(E){const x=!E.before,O=E.values||[];return new Rc(O,x)})(t.endAt)),LC(e,o,h,l,f,"F",p,y)}function yR(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function iw(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Po(t.unaryFilter.field);return ht.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Po(t.unaryFilter.field);return ht.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Po(t.unaryFilter.field);return ht.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Po(t.unaryFilter.field);return ht.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ht.create(Po(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Yn.create(t.compositeFilter.filters.map((i=>iw(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}})(t.compositeFilter.op))})(n):we(30097,{filter:n})}function vR(n){return sR[n]}function _R(n){return oR[n]}function wR(n){return aR[n]}function Ro(n){return{fieldPath:n.canonicalString()}}function Po(n){return Rt.fromServerFormat(n.fieldPath)}function sw(n){return n instanceof ht?(function(t){if(t.op==="=="){if(uv(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NAN"}};if(lv(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(uv(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NAN"}};if(lv(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ro(t.field),op:_R(t.op),value:t.value}}})(n):n instanceof Yn?(function(t){const i=t.getFilters().map((o=>sw(o)));return i.length===1?i[0]:{compositeFilter:{op:wR(t.op),filters:i}}})(n):we(54877,{filter:n})}function ER(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ow(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t,i,o,l=Te.min(),h=Te.min(),f=Pt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.gt=e}}function IR(n){const e=gR({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Rf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.Dn=new SR}addToCollectionParentIndex(e,t){return this.Dn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Di.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Di.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class SR{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new wt(He.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new wt(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},aw=41943040;class sn{static withCacheSize(e){return new sn(e,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(aw,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new zo(0)}static ur(){return new zo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="LruGarbageCollector",lw=1048576;function Sv([n,e],[t,i]){const o=Ae(n,t);return o===0?Ae(e,i):o}class AR{constructor(e){this.Tr=e,this.buffer=new wt(Sv),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Sv(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class CR{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){oe(xv,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yo(t)?oe(xv,"Ignoring IndexedDB error during garbage collection: ",t):await Qo(t)}await this.Rr(3e5)}))}}class RR{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return G.resolve(Gc.ue);const i=new AR(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Iv)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Iv):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,h,f,p,y;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,h=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(i=E,f=Date.now(),this.removeTargets(e,i,t)))).next((E=>(l=E,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((E=>(y=Date.now(),Ao()<=Pe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-_}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${E} documents in `+(y-p)+`ms
Total Duration: ${y-_}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:E}))))}}function PR(n,e){return new RR(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.changes=new Ps((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&il(i.mutation,o,vn.empty(),Ge.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,ke()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=ke()){const o=_s();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=Xa();return l.forEach(((f,p)=>{h=h.insert(f,p.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=_s();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,ke())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=$r();const h=rl(),f=(function(){return rl()})();return t.forEach(((p,y)=>{const _=i.get(y.key);o.has(y.key)&&(_===void 0||_.mutation instanceof $i)?l=l.insert(y.key,y):_!==void 0?(h.set(y.key,_.mutation.getFieldMask()),il(_.mutation,y,_.mutation.getFieldMask(),Ge.now())):h.set(y.key,vn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((y,_)=>h.set(y,_))),t.forEach(((y,_)=>{var E;return f.set(y,new NR(_,(E=h.get(y))!==null&&E!==void 0?E:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=rl();let o=new nt(((h,f)=>h-f)),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let _=i.get(p)||vn.empty();_=f.applyToLocalView(y,_),i.set(p,_);const E=(o.get(f.batchId)||ke()).add(p);o=o.insert(f.batchId,E)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,_=p.value,E=$0();_.forEach((x=>{if(!l.has(x)){const O=Q0(t.get(x),i.get(x));O!==null&&E.set(x,O),l=l.add(x)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,E))}return G.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):j0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(_s());let f=hl,p=l;return h.next((y=>G.forEach(y,((_,E)=>(f<E.largestBatchId&&(f=E.largestBatchId),l.get(_)?G.resolve():this.remoteDocumentCache.getEntry(e,_).next((x=>{p=p.insert(_,x)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,p,y,ke()))).next((_=>({batchId:f,changes:B0(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((i=>{let o=Xa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Xa();return this.indexManager.getCollectionParents(e,l).next((f=>G.forEach(f,(p=>{const y=(function(E,x){return new Xo(x,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((_=>{_.forEach(((E,x)=>{h=h.insert(E,x)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((p,y)=>{const _=y.getKey();h.get(_)===null&&(h=h.insert(_,$t.newInvalidDocument(_)))}));let f=Xa();return h.forEach(((p,y)=>{const _=l.get(p);_!==void 0&&il(_.mutation,y,vn.empty(),Ge.now()),Jc(t,y)&&(f=f.insert(p,y))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return G.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:fr(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:IR(o.bundledQuery),readTime:fr(o.readTime)}})(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.overlays=new nt(pe.comparator),this.kr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=_s();return G.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=_s(),l=t.length+1,h=new pe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new nt(((y,_)=>y-_));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let _=l.get(y.largestBatchId);_===null&&(_=_s(),l=l.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const f=_s(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,_)=>f.set(y,_))),!(f.size()>=o)););return G.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new eR(t,i));let l=this.kr.get(t);l===void 0&&(l=ke(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.qr=new wt(Ct.Qr),this.$r=new wt(Ct.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Ct(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Ct(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new pe(new He([])),i=new Ct(t,e),o=new Ct(t,e+1),l=[];return this.$r.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new pe(new He([])),i=new Ct(t,e),o=new Ct(t,e+1);let l=ke();return this.$r.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new Ct(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ct{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return pe.comparator(e.key,t.key)||Ae(e.Hr,t.Hr)}static Ur(e,t){return Ae(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new wt(Ct.Qr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new ZC(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new Ct(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return G.resolve(h)}lookupMutationBatch(e,t){return G.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?op:this.er-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new wt(Ae);return t.forEach((o=>{const l=new Ct(o,0),h=new Ct(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{i=i.add(f.Hr)}))})),G.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const h=new Ct(new pe(l),0);let f=new wt(Ae);return this.Yr.forEachWhile((p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.Hr)),!0)}),h),G.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return G.forEach(t.mutations,(o=>{const l=new Ct(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new Ct(t,0),o=this.Yr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.ni=e,this.docs=(function(){return new nt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():$t.newInvalidDocument(t))}getEntries(e,t){let i=$r();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():$t.newInvalidDocument(o))})),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=$r();const h=t.path,f=new pe(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:_}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||pC(fC(_),i)<=0||(o.has(_.key)||Jc(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){we(9500)}ri(e,t){return G.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new jR(this)}getSize(e){return G.resolve(this.size)}}class jR extends kR{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),G.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.persistence=e,this.ii=new Ps((t=>up(t)),cp),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.si=0,this.oi=new gp,this.targetCount=0,this._i=zo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),G.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new zo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.hr(t),G.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),G.waitFor(l).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,t){this.ai={},this.overlays={},this.ui=new Gc(0),this.ci=!1,this.ci=!0,this.li=new VR,this.referenceDelegate=e(this),this.hi=new FR(this),this.indexManager=new xR,this.remoteDocumentCache=(function(o){return new MR(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new TR(t),this.Ti=new DR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new OR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new LR(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){oe("MemoryPersistence","Starting transaction:",e);const o=new UR(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return G.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class UR extends gC{constructor(e){super(),this.currentSequenceNumber=e}}class yp{constructor(e){this.persistence=e,this.Ai=new gp,this.Ri=null}static Vi(e){return new yp(e)}get mi(){if(this.Ri)return this.Ri;throw we(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.mi,(i=>{const o=pe.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Te.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return G.or([()=>G.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class bc{constructor(e,t){this.persistence=e,this.gi=new Ps((i=>_C(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=PR(this,t)}static Vi(e,t){return new bc(e,t)}Ii(){}di(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return G.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?G.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Te.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),G.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fc(e.data.value)),t}Sr(e,t,i){return G.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new vp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return x1()?8:yC(Wt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new zR;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(Ao()<=Pe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Co(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(Ao()<=Pe.DEBUG&&oe("QueryEngine","Query:",Co(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(Ao()<=Pe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Co(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dr(t))):G.resolve())}ps(e,t){if(fv(t))return G.resolve(null);let i=dr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Rf(t,null,"F"),i=dr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=ke(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((p=>{const y=this.bs(t,f);return this.Ds(t,y,h,p.readTime)?this.ps(e,Rf(t,null,"F")):this.vs(e,y,t,p)}))))})))))}ys(e,t,i,o){return fv(t)||o.isEqual(Te.min())?G.resolve(null):this.gs.getDocuments(e,i).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,i,o)?G.resolve(null):(Ao()<=Pe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Co(t)),this.vs(e,h,t,dC(o,hl)).next((f=>f)))}))}bs(e,t){let i=new wt(U0(e));return t.forEach(((o,l)=>{Jc(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return Ao()<=Pe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Co(t)),this.gs.getDocumentsMatchingQuery(e,t,Di.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="LocalStore",$R=3e8;class WR{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new nt(Ae),this.Ms=new Ps((l=>up(l)),cp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function qR(n,e,t,i){return new WR(n,e,t,i)}async function cw(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let p=ke();for(const y of o){h.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}for(const y of l){f.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(i,p).next((y=>({Bs:y,removedBatchIds:h,addedBatchIds:f})))}))}))}function HR(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,p,y,_){const E=y.batch,x=E.keys();let O=G.resolve();return x.forEach(($=>{O=O.next((()=>_.getEntry(p,$))).next((B=>{const L=y.docVersions.get($);Fe(L!==null,48541),B.version.compareTo(L)<0&&(E.applyToRemoteDocument(B,y),B.isValidDocument()&&(B.setReadTime(y.commitVersion),_.addEntry(B)))}))})),O.next((()=>f.mutationQueue.removeMutationBatch(p,E)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let p=ke();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function hw(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function GR(n,e){const t=Ie(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((_,E)=>{const x=o.get(E);if(!x)return;f.push(t.hi.removeMatchingKeys(l,_.removedDocuments,E).next((()=>t.hi.addMatchingKeys(l,_.addedDocuments,E))));let O=x.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?O=O.withResumeToken(Pt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):_.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(_.resumeToken,i)),o=o.insert(E,O),(function(B,L,te){return B.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=$R?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0})(x,O,_)&&f.push(t.hi.updateTargetData(l,O))}));let p=$r(),y=ke();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))})),f.push(KR(l,h,e.documentUpdates).next((_=>{p=_.Ls,y=_.ks}))),!i.isEqual(Te.min())){const _=t.hi.getLastRemoteSnapshotVersion(l).next((E=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(_)}return G.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,y))).next((()=>p))})).then((l=>(t.Fs=o,l)))}function KR(n,e,t){let i=ke(),o=ke();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let h=$r();return t.forEach(((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(f,p.readTime),h=h.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(f,p)):oe(_p,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)})),{Ls:h,ks:o}}))}function QR(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=op),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function YR(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,G.resolve(o)):t.hi.allocateTargetId(i).next((h=>(o=new Si(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function Df(n,e,t){const i=Ie(n),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Yo(h))throw h;oe(_p,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function Av(n,e,t){const i=Ie(n);let o=Te.min(),l=ke();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(p,y,_){const E=Ie(p),x=E.Ms.get(_);return x!==void 0?G.resolve(E.Fs.get(x)):E.hi.getTargetData(y,_)})(i,h,dr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(h,f.targetId).next((p=>{l=p}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?l:ke()))).next((f=>(XR(i,jC(e),f),{documents:f,qs:l})))))}function XR(n,e,t){let i=n.xs.get(e)||Te.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.xs.set(e,i)}class Cv{constructor(){this.activeTargetIds=WC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JR{constructor(){this.Fo=new Cv,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Cv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="ConnectivityMonitor";class Pv{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){oe(Rv,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){oe(Rv,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc=null;function Of(){return sc===null?sc=(function(){return 268435456+Math.round(2147483648*Math.random())})():sc++,"0x"+sc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="RestConnection",eP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===Ac?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=Of(),f=this.Go(e,t.toUriEncodedString());oe(ef,`Sending RPC '${e}' ${h}:`,f,i);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,l);const{host:y}=new URL(f),_=qo(y);return this.jo(e,f,p,i,_).then((E=>(oe(ef,`Received RPC '${e}' ${h}: `,E),E)),(E=>{throw bi(ef,`RPC '${e}' ${h} failed with error: `,E,"url: ",f,"request:",i),E}))}Jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ko})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=eP[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="WebChannelConnection";class rP extends tP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const h=Of();return new Promise(((f,p)=>{const y=new h0;y.setWithCredentials(!0),y.listenOnce(d0.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case dc.NO_ERROR:const E=y.getResponseJson();oe(Bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(E)),f(E);break;case dc.TIMEOUT:oe(Bt,`RPC '${e}' ${h} timed out`),p(new ie(H.DEADLINE_EXCEEDED,"Request time out"));break;case dc.HTTP_ERROR:const x=y.getStatus();if(oe(Bt,`RPC '${e}' ${h} failed with status:`,x,"response text:",y.getResponseText()),x>0){let O=y.getResponseJson();Array.isArray(O)&&(O=O[0]);const $=O==null?void 0:O.error;if($&&$.status&&$.message){const B=(function(te){const Q=te.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(Q)>=0?Q:H.UNKNOWN})($.status);p(new ie(B,$.message))}else p(new ie(H.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ie(H.UNAVAILABLE,"Connection failed."));break;default:we(9055,{c_:e,streamId:h,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{oe(Bt,`RPC '${e}' ${h} completed.`)}}));const _=JSON.stringify(o);oe(Bt,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",_,i,15)}))}P_(e,t,i){const o=Of(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=m0(),f=p0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const _=l.join("");oe(Bt,`Creating RPC '${e}' stream ${o}: ${_}`,p);const E=h.createWebChannel(_,p);this.T_(E);let x=!1,O=!1;const $=new nP({Ho:L=>{O?oe(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(x||(oe(Bt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),x=!0),oe(Bt,`RPC '${e}' stream ${o} sending:`,L),E.send(L))},Yo:()=>E.close()}),B=(L,te,Q)=>{L.listen(te,(Z=>{try{Q(Z)}catch(le){setTimeout((()=>{throw le}),0)}}))};return B(E,Ya.EventType.OPEN,(()=>{O||(oe(Bt,`RPC '${e}' stream ${o} transport opened.`),$.s_())})),B(E,Ya.EventType.CLOSE,(()=>{O||(O=!0,oe(Bt,`RPC '${e}' stream ${o} transport closed`),$.__(),this.I_(E))})),B(E,Ya.EventType.ERROR,(L=>{O||(O=!0,bi(Bt,`RPC '${e}' stream ${o} transport errored. Name:`,L.name,"Message:",L.message),$.__(new ie(H.UNAVAILABLE,"The operation could not be completed")))})),B(E,Ya.EventType.MESSAGE,(L=>{var te;if(!O){const Q=L.data[0];Fe(!!Q,16349);const Z=Q,le=(Z==null?void 0:Z.error)||((te=Z[0])===null||te===void 0?void 0:te.error);if(le){oe(Bt,`RPC '${e}' stream ${o} received error:`,le);const xe=le.status;let ve=(function(R){const k=ct[R];if(k!==void 0)return X0(k)})(xe),N=le.message;ve===void 0&&(ve=H.INTERNAL,N="Unknown error status: "+xe+" with message "+le.message),O=!0,$.__(new ie(ve,N)),E.close()}else oe(Bt,`RPC '${e}' stream ${o} received:`,Q),$.a_(Q)}})),B(f,f0.STAT_EVENT,(L=>{L.stat===Ef.PROXY?oe(Bt,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===Ef.NOPROXY&&oe(Bt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.o_()}),0),$}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function tf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n){return new lR(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="PersistentStream";class fw{constructor(e,t,i,o,l,h,f,p){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new dw(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new ie(H.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return oe(kv,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(oe(kv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iP extends fw{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=hR(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Te.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?fr(h.readTime):Te.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=bf(this.serializer),t.addTarget=(function(l,h){let f;const p=h.target;if(f=Af(p)?{documents:pR(l,p)}:{query:mR(l,p).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=ew(l,h.resumeToken);const y=Pf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Te.min())>0){f.readTime=Nc(l,h.snapshotVersion.toTimestamp());const y=Pf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=yR(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=bf(this.serializer),t.removeTarget=e,this.k_(t)}}class sP extends fw{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=fR(e.writeResults,e.commitTime),i=fr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=bf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>dR(this.serializer,i)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{}class aP extends oP{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,kf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ie(H.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,kf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(H.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class lP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Br(t),this._a=!1):oe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="RemoteStore";class uP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{i.enqueueAndForget((async()=>{ks(this)&&(oe(As,"Restarting streams for network reachability change."),await(async function(p){const y=Ie(p);y.Ia.add(4),await Pl(y),y.Aa.set("Unknown"),y.Ia.delete(4),await rh(y)})(this))}))})),this.Aa=new lP(i,o)}}async function rh(n){if(ks(n))for(const e of n.da)await e(!0)}async function Pl(n){for(const e of n.da)await e(!1)}function pw(n,e){const t=Ie(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ip(t)?Tp(t):Jo(t).x_()&&Ep(t,e))}function wp(n,e){const t=Ie(n),i=Jo(t);t.Ta.delete(e),i.x_()&&mw(t,e),t.Ta.size===0&&(i.x_()?i.B_():ks(t)&&t.Aa.set("Unknown"))}function Ep(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jo(n).H_(e)}function mw(n,e){n.Ra.$e(e),Jo(n).Y_(e)}function Tp(n){n.Ra=new iR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Jo(n).start(),n.Aa.aa()}function Ip(n){return ks(n)&&!Jo(n).M_()&&n.Ta.size>0}function ks(n){return Ie(n).Ia.size===0}function gw(n){n.Ra=void 0}async function cP(n){n.Aa.set("Online")}async function hP(n){n.Ta.forEach(((e,t)=>{Ep(n,e)}))}async function dP(n,e){gw(n),Ip(n)?(n.Aa.la(e),Tp(n)):n.Aa.set("Unknown")}async function fP(n,e,t){if(n.Aa.set("Online"),e instanceof Z0&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(n,e)}catch(i){oe(As,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Dc(n,i)}else if(e instanceof gc?n.Ra.Ye(e):e instanceof J0?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Te.min()))try{const i=await hw(n.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const _=l.Ta.get(y);_&&l.Ta.set(y,_.withResumeToken(p.resumeToken,h))}})),f.targetMismatches.forEach(((p,y)=>{const _=l.Ta.get(p);if(!_)return;l.Ta.set(p,_.withResumeToken(Pt.EMPTY_BYTE_STRING,_.snapshotVersion)),mw(l,p);const E=new Si(_.target,p,y,_.sequenceNumber);Ep(l,E)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){oe(As,"Failed to raise snapshot:",i),await Dc(n,i)}}async function Dc(n,e,t){if(!Yo(e))throw e;n.Ia.add(1),await Pl(n),n.Aa.set("Offline"),t||(t=()=>hw(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{oe(As,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await rh(n)}))}function yw(n,e){return e().catch((t=>Dc(n,t,e)))}async function ih(n){const e=Ie(n),t=Mi(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:op;for(;pP(e);)try{const o=await QR(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,mP(e,o)}catch(o){await Dc(e,o)}vw(e)&&_w(e)}function pP(n){return ks(n)&&n.Pa.length<10}function mP(n,e){n.Pa.push(e);const t=Mi(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function vw(n){return ks(n)&&!Mi(n).M_()&&n.Pa.length>0}function _w(n){Mi(n).start()}async function gP(n){Mi(n).na()}async function yP(n){const e=Mi(n);for(const t of n.Pa)e.X_(t.mutations)}async function vP(n,e,t){const i=n.Pa.shift(),o=fp.from(i,e,t);await yw(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await ih(n)}async function _P(n,e){e&&Mi(n).Z_&&await(async function(i,o){if((function(h){return nR(h)&&h!==H.ABORTED})(o.code)){const l=i.Pa.shift();Mi(i).N_(),await yw(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await ih(i)}})(n,e),vw(n)&&_w(n)}async function Nv(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),oe(As,"RemoteStore received new credentials");const i=ks(t);t.Ia.add(3),await Pl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await rh(t)}async function wP(n,e){const t=Ie(n);e?(t.Ia.delete(2),await rh(t)):e||(t.Ia.add(2),await Pl(t),t.Aa.set("Unknown"))}function Jo(n){return n.Va||(n.Va=(function(t,i,o){const l=Ie(t);return l.ia(),new iP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:cP.bind(null,n),e_:hP.bind(null,n),n_:dP.bind(null,n),J_:fP.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Ip(n)?Tp(n):n.Aa.set("Unknown")):(await n.Va.stop(),gw(n))}))),n.Va}function Mi(n){return n.ma||(n.ma=(function(t,i,o){const l=Ie(t);return l.ia(),new sP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:gP.bind(null,n),n_:_P.bind(null,n),ea:yP.bind(null,n),ta:vP.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await ih(n)):(await n.ma.stop(),n.Pa.length>0&&(oe(As,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new xp(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sp(n,e){if(Br("AsyncQueue",`${e}: ${n}`),Yo(n))return new ie(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{static emptySet(e){return new Vo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=Xa(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Vo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.fa=new nt(pe.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):we(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Bo{constructor(e,t,i,o,l,h,f,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Bo(e,t,Vo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class TP{constructor(){this.queries=Dv(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Ie(t),l=o.queries;o.queries=Dv(),l.forEach(((h,f)=>{for(const p of f.wa)p.onError(i)}))})(this,new ie(H.ABORTED,"Firestore shutting down"))}}function Dv(){return new Ps((n=>F0(n)),Xc)}async function Ap(n,e){const t=Ie(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new EP,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Sp(h,`Initialization of query '${Co(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Rp(t)}async function Cp(n,e){const t=Ie(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function IP(n,e){const t=Ie(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(i=!0);h.ya=o}}i&&Rp(t)}function xP(n,e,t){const i=Ie(n),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function Rp(n){n.Da.forEach((e=>{e.next()}))}var Vf,Ov;(Ov=Vf||(Vf={})).Fa="default",Ov.Cache="cache";class Pp{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Bo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Vf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){this.key=e}}class Ew{constructor(e){this.key=e}}class SP{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ke(),this.mutatedKeys=ke(),this.Xa=U0(e),this.eu=new Vo(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new bv,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,E)=>{const x=o.get(_),O=Jc(this.query,E)?E:null,$=!!x&&this.mutatedKeys.has(x.key),B=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let L=!1;x&&O?x.data.isEqual(O.data)?$!==B&&(i.track({type:3,doc:O}),L=!0):this.iu(x,O)||(i.track({type:2,doc:O}),L=!0,(p&&this.Xa(O,p)>0||y&&this.Xa(O,y)<0)&&(f=!0)):!x&&O?(i.track({type:0,doc:O}),L=!0):x&&!O&&(i.track({type:1,doc:x}),L=!0,(p||y)&&(f=!0)),L&&(O?(h=h.add(O),l=B?l.add(_):l.delete(_)):(h=h.delete(_),l=l.delete(_)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const _=this.query.limitType==="F"?h.last():h.first();h=h.delete(_.key),l=l.delete(_.key),i.track({type:1,doc:_})}return{eu:h,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((_,E)=>(function(O,$){const B=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{At:L})}};return B(O)-B($)})(_.type,E.type)||this.Xa(_.doc,E.doc))),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,y=p!==this.Ya;return this.Ya=p,h.length!==0||y?{snapshot:new Bo(this.query,e.eu,l,h,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new bv,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ke(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new Ew(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new ww(i))})),t}uu(e){this.Ha=e.qs,this.Za=ke();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Bo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const kp="SyncEngine";class AP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class CP{constructor(e){this.key=e,this.lu=!1}}class RP{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Ps((f=>F0(f)),Xc),this.Tu=new Map,this.Iu=new Set,this.du=new nt(pe.comparator),this.Eu=new Map,this.Au=new gp,this.Ru={},this.Vu=new Map,this.mu=zo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function PP(n,e,t=!0){const i=Cw(n);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await Tw(i,e,t,!0),o}async function kP(n,e){const t=Cw(n);await Tw(t,e,!0,!1)}async function Tw(n,e,t,i){const o=await YR(n.localStore,dr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await NP(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&pw(n.remoteStore,o),f}async function NP(n,e,t,i,o){n.gu=(E,x,O)=>(async function(B,L,te,Q){let Z=L.view.nu(te);Z.Ds&&(Z=await Av(B.localStore,L.query,!1).then((({documents:N})=>L.view.nu(N,Z))));const le=Q&&Q.targetChanges.get(L.targetId),xe=Q&&Q.targetMismatches.get(L.targetId)!=null,ve=L.view.applyChanges(Z,B.isPrimaryClient,le,xe);return Lv(B,L.targetId,ve._u),ve.snapshot})(n,E,x,O);const l=await Av(n.localStore,e,!0),h=new SP(e,l.qs),f=h.nu(l.documents),p=Rl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,p);Lv(n,t,y._u);const _=new AP(e,t,h);return n.Pu.set(e,_),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),y.snapshot}async function bP(n,e,t){const i=Ie(n),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((h=>!Xc(h,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Df(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&wp(i.remoteStore,o.targetId),Lf(i,o.targetId)})).catch(Qo)):(Lf(i,o.targetId),await Df(i.localStore,o.targetId,!0))}async function DP(n,e){const t=Ie(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),wp(t.remoteStore,i.targetId))}async function OP(n,e,t){const i=zP(n);try{const o=await(function(h,f){const p=Ie(h),y=Ge.now(),_=f.reduce(((O,$)=>O.add($.key)),ke());let E,x;return p.persistence.runTransaction("Locally write mutations","readwrite",(O=>{let $=$r(),B=ke();return p.Os.getEntries(O,_).next((L=>{$=L,$.forEach(((te,Q)=>{Q.isValidDocument()||(B=B.add(te))}))})).next((()=>p.localDocuments.getOverlayedDocuments(O,$))).next((L=>{E=L;const te=[];for(const Q of f){const Z=XC(Q,E.get(Q.key).overlayedDocument);Z!=null&&te.push(new $i(Q.key,Z,N0(Z.value.mapValue),kn.exists(!0)))}return p.mutationQueue.addMutationBatch(O,y,te,f)})).next((L=>{x=L;const te=L.applyToLocalDocumentSet(E,B);return p.documentOverlayCache.saveOverlays(O,L.batchId,te)}))})).then((()=>({batchId:x.batchId,changes:B0(E)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,p){let y=h.Ru[h.currentUser.toKey()];y||(y=new nt(Ae)),y=y.insert(f,p),h.Ru[h.currentUser.toKey()]=y})(i,o.batchId,t),await kl(i,o.changes),await ih(i.remoteStore)}catch(o){const l=Sp(o,"Failed to persist write");t.reject(l)}}async function Iw(n,e){const t=Ie(n);try{const i=await GR(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Fe(h.lu,14607):o.removedDocuments.size>0&&(Fe(h.lu,42227),h.lu=!1))})),await kl(t,i,e)}catch(i){await Qo(i)}}function Vv(n,e,t){const i=Ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const p=Ie(h);p.onlineState=f;let y=!1;p.queries.forEach(((_,E)=>{for(const x of E.wa)x.va(f)&&(y=!0)})),y&&Rp(p)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function VP(n,e,t){const i=Ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let h=new nt(pe.comparator);h=h.insert(l,$t.newNoDocument(l,Te.min()));const f=ke().add(l),p=new th(Te.min(),new Map,new nt(Ae),h,f);await Iw(i,p),i.du=i.du.remove(l),i.Eu.delete(e),Np(i)}else await Df(i.localStore,e,!1).then((()=>Lf(i,e,t))).catch(Qo)}async function LP(n,e){const t=Ie(n),i=e.batch.batchId;try{const o=await HR(t.localStore,e);Sw(t,i,null),xw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await kl(t,o)}catch(o){await Qo(o)}}async function MP(n,e,t){const i=Ie(n);try{const o=await(function(h,f){const p=Ie(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let _;return p.mutationQueue.lookupMutationBatch(y,f).next((E=>(Fe(E!==null,37113),_=E.keys(),p.mutationQueue.removeMutationBatch(y,E)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,_,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_))).next((()=>p.localDocuments.getDocuments(y,_)))}))})(i.localStore,e);Sw(i,e,t),xw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await kl(i,o)}catch(o){await Qo(o)}}function xw(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Sw(n,e,t){const i=Ie(n);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function Lf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||Aw(n,i)}))}function Aw(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(wp(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Np(n))}function Lv(n,e,t){for(const i of t)i instanceof ww?(n.Au.addReference(i.key,e),jP(n,i)):i instanceof Ew?(oe(kp,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||Aw(n,i.key)):we(19791,{yu:i})}function jP(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(oe(kp,"New document in limbo: "+t),n.Iu.add(i),Np(n))}function Np(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new pe(He.fromString(e)),i=n.mu.next();n.Eu.set(i,new CP(t)),n.du=n.du.insert(t,i),pw(n.remoteStore,new Si(dr(Yc(t.path)),i,"TargetPurposeLimboResolution",Gc.ue))}}async function kl(n,e,t){const i=Ie(n),o=[],l=[],h=[];i.Pu.isEmpty()||(i.Pu.forEach(((f,p)=>{h.push(i.gu(p,e,t).then((y=>{var _;if((y||t)&&i.isPrimaryClient){const E=y?!y.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(y){o.push(y);const E=vp.Es(p.targetId,y);l.push(E)}})))})),await Promise.all(h),i.hu.J_(o),await(async function(p,y){const _=Ie(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>G.forEach(y,(x=>G.forEach(x.Is,(O=>_.persistence.referenceDelegate.addReference(E,x.targetId,O))).next((()=>G.forEach(x.ds,(O=>_.persistence.referenceDelegate.removeReference(E,x.targetId,O)))))))))}catch(E){if(!Yo(E))throw E;oe(_p,"Failed to update sequence numbers: "+E)}for(const E of y){const x=E.targetId;if(!E.fromCache){const O=_.Fs.get(x),$=O.snapshotVersion,B=O.withLastLimboFreeSnapshotVersion($);_.Fs=_.Fs.insert(x,B)}}})(i.localStore,l))}async function FP(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){oe(kp,"User change. New user:",e.toKey());const i=await cw(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((p=>{p.reject(new ie(H.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await kl(t,i.Bs)}}function UP(n,e){const t=Ie(n),i=t.Eu.get(e);if(i&&i.lu)return ke().add(i.key);{let o=ke();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function Cw(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Iw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VP.bind(null,e),e.hu.J_=IP.bind(null,e.eventManager),e.hu.pu=xP.bind(null,e.eventManager),e}function zP(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MP.bind(null,e),e}class Oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nh(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return qR(this.persistence,new BR,e.initialUser,this.serializer)}Du(e){return new uw(yp.Vi,this.serializer)}bu(e){return new JR}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oc.provider={build:()=>new Oc};class BP extends Oc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Fe(this.persistence.referenceDelegate instanceof bc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new CR(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new uw((i=>bc.Vi(i,t)),this.serializer)}}class Mf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Vv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=FP.bind(null,this.syncEngine),await wP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new TP})()}createDatastore(e){const t=nh(e.databaseInfo.databaseId),i=(function(l){return new rP(l)})(e.databaseInfo);return(function(l,h,f,p){return new aP(l,h,f,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new uP(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Vv(this.syncEngine,t,0)),(function(){return Pv.C()?new Pv:new ZR})())}createSyncEngine(e,t){return(function(o,l,h,f,p,y,_){const E=new RP(o,l,h,f,p,y);return _&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ie(o);oe(As,"RemoteStore shutting down."),l.Ia.add(5),await Pl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Mf.provider={build:()=>new Mf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="FirestoreClient";class $P{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=rn.UNAUTHENTICATED,this.clientId=qc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{oe(ji,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(oe(ji,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Sp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function nf(n,e){n.asyncQueue.verifyOperationInProgress(),oe(ji,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await cw(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{bi("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{oe("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{bi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function Mv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await WP(n);oe(ji,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>Nv(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>Nv(e.remoteStore,o))),n._onlineComponents=e}async function WP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe(ji,"Using user provided OfflineComponentProvider");try{await nf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;bi("Error using user provided cache. Falling back to memory cache: "+t),await nf(n,new Oc)}}else oe(ji,"Using default OfflineComponentProvider"),await nf(n,new BP(void 0));return n._offlineComponents}async function Rw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe(ji,"Using user provided OnlineComponentProvider"),await Mv(n,n._uninitializedComponentsProvider._online)):(oe(ji,"Using default OnlineComponentProvider"),await Mv(n,new Mf))),n._onlineComponents}function qP(n){return Rw(n).then((e=>e.syncEngine))}async function Vc(n){const e=await Rw(n),t=e.eventManager;return t.onListen=PP.bind(null,e.syncEngine),t.onUnlisten=bP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=DP.bind(null,e.syncEngine),t}function HP(n,e,t={}){const i=new Mr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,p,y){const _=new bp({next:x=>{_.Ou(),h.enqueueAndForget((()=>Cp(l,E)));const O=x.docs.has(f);!O&&x.fromCache?y.reject(new ie(H.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&x.fromCache&&p&&p.source==="server"?y.reject(new ie(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(x)},error:x=>y.reject(x)}),E=new Pp(Yc(f.path),_,{includeMetadataChanges:!0,ka:!0});return Ap(l,E)})(await Vc(n),n.asyncQueue,e,t,i))),i.promise}function GP(n,e,t={}){const i=new Mr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,p,y){const _=new bp({next:x=>{_.Ou(),h.enqueueAndForget((()=>Cp(l,E))),x.fromCache&&p.source==="server"?y.reject(new ie(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(x)},error:x=>y.reject(x)}),E=new Pp(f,_,{includeMetadataChanges:!0,ka:!0});return Ap(l,E)})(await Vc(n),n.asyncQueue,e,t,i))),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP="firestore.googleapis.com",Fv=!0;class Uv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=KP,this.ssl=Fv}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Fv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=aw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lw)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}w0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dp{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new y0;switch(i.type){case"firstParty":return new aC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ie(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=jv.get(t);i&&(oe("ComponentProvider","Removing Datastore"),jv.delete(t),i.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new qr(this.firestore,e,this._query)}}class tt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Al(t,tt._jsonSchema))return new tt(e,i||null,new pe(He.fromString(t.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:dt("string",tt._jsonSchemaVersion),referencePath:dt("string")};class jr extends qr{constructor(e,t,i){super(e,t,Yc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new pe(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function Op(n,e,...t){if(n=Et(n),_0("collection","path",e),n instanceof Dp){const i=He.fromString(e,...t);return Zy(i),new jr(n,null,i)}{if(!(n instanceof tt||n instanceof jr))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(He.fromString(e,...t));return Zy(i),new jr(n.firestore,null,i)}}function gn(n,e,...t){if(n=Et(n),arguments.length===1&&(e=qc.newId()),_0("doc","path",e),n instanceof Dp){const i=He.fromString(e,...t);return Jy(i),new tt(n,null,new pe(i))}{if(!(n instanceof tt||n instanceof jr))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(He.fromString(e,...t));return Jy(i),new tt(n.firestore,n instanceof jr?n.converter:null,new pe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="AsyncQueue";class Bv{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new dw(this,"async_queue_retry"),this.oc=()=>{const i=tf();i&&oe(zv,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=tf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=tf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Mr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Yo(e))throw e;oe(zv,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,Br("INTERNAL UNHANDLED ERROR: ",$v(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=xp.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&we(47125,{hc:$v(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function $v(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}class mr extends Dp{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Bv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bv(e),this._firestoreClient=void 0,await e}}}function kw(n,e,t){t||(t=Ac);const i=Qf(n,"firestore");if(i.isInitialized(t)){const o=i.getImmediate({identifier:t}),l=i.getOptions(t);if(Es(l,e))return o;throw new ie(H.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new ie(H.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lw)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&qo(e.host)&&x_(e.host),i.initialize({options:e,instanceIdentifier:t})}function Nl(n){if(n._terminated)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||QP(n),n._firestoreClient}function QP(n){var e,t,i;const o=n._freezeSettings(),l=(function(f,p,y,_){return new TC(f,p,y,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Pw(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new $P(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(Pt.fromBase64String(e))}catch(t){throw new ie(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yn(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Al(e,yn._jsonSchema))return yn.fromBase64String(e.bytes)}}yn._jsonSchemaVersion="firestore/bytes/1.0",yn._jsonSchema={type:dt("string",yn._jsonSchemaVersion),bytes:dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Gn._jsonSchemaVersion}}static fromJSON(e){if(Al(e,Gn._jsonSchema))return new Gn(e.latitude,e.longitude)}}Gn._jsonSchemaVersion="firestore/geoPoint/1.0",Gn._jsonSchema={type:dt("string",Gn._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Kn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Al(e,Kn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Kn(e.vectorValues);throw new ie(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Kn._jsonSchemaVersion="firestore/vectorValue/1.0",Kn._jsonSchema={type:dt("string",Kn._jsonSchemaVersion),vectorValues:dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=/^__.*__$/;class XP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new $i(e,this.data,this.fieldMask,t,this.fieldTransforms):new Cl(e,this.data,t,this.fieldTransforms)}}class Nw{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new $i(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function bw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ec:n})}}class Vp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Vp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Lc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(bw(this.Ec)&&YP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class JP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||nh(e)}Dc(e,t,i,o=!1){return new Vp({Ec:e,methodName:t,bc:i,path:Rt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oh(n){const e=n._freezeSettings(),t=nh(n._databaseId);return new JP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Dw(n,e,t,i,o,l={}){const h=n.Dc(l.merge||l.mergeFields?2:0,e,t,o);Lp("Data must be an object, but it was:",h,i);const f=Ow(i,h);let p,y;if(l.merge)p=new vn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const _=[];for(const E of l.mergeFields){const x=jf(e,E,t);if(!h.contains(x))throw new ie(H.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);Lw(_,x)||_.push(x)}p=new vn(_),y=h.fieldTransforms.filter((E=>p.covers(E.field)))}else p=null,y=h.fieldTransforms;return new XP(new an(f),p,y)}class ah extends sh{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ah}}function ZP(n,e,t,i){const o=n.Dc(1,e,t);Lp("Data must be an object, but it was:",o,i);const l=[],h=an.empty();Bi(i,((p,y)=>{const _=Mp(e,p,t);y=Et(y);const E=o.gc(_);if(y instanceof ah)l.push(_);else{const x=Dl(y,E);x!=null&&(l.push(_),h.set(_,x))}}));const f=new vn(l);return new Nw(h,f,o.fieldTransforms)}function ek(n,e,t,i,o,l){const h=n.Dc(1,e,t),f=[jf(e,i,t)],p=[o];if(l.length%2!=0)throw new ie(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let x=0;x<l.length;x+=2)f.push(jf(e,l[x])),p.push(l[x+1]);const y=[],_=an.empty();for(let x=f.length-1;x>=0;--x)if(!Lw(y,f[x])){const O=f[x];let $=p[x];$=Et($);const B=h.gc(O);if($ instanceof ah)y.push(O);else{const L=Dl($,B);L!=null&&(y.push(O),_.set(O,L))}}const E=new vn(y);return new Nw(_,E,h.fieldTransforms)}function tk(n,e,t,i=!1){return Dl(t,n.Dc(i?4:3,e))}function Dl(n,e){if(Vw(n=Et(n)))return Lp("Unsupported field value:",e,n),Ow(n,e);if(n instanceof sh)return(function(i,o){if(!bw(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let p=Dl(f,o.yc(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=Et(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return qC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ge.fromDate(i);return{timestampValue:Nc(o.serializer,l)}}if(i instanceof Ge){const l=new Ge(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Nc(o.serializer,l)}}if(i instanceof Gn)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof yn)return{bytesValue:ew(o.serializer,i._byteString)};if(i instanceof tt){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:mp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Kn)return(function(h,f){return{mapValue:{fields:{[P0]:{stringValue:k0},[Cc]:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw f.wc("VectorValues must only contain numeric values.");return hp(f.serializer,y)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${Hc(i)}`)})(n,e)}function Ow(n,e){const t={};return I0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bi(n,((i,o)=>{const l=Dl(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function Vw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ge||n instanceof Gn||n instanceof yn||n instanceof tt||n instanceof sh||n instanceof Kn)}function Lp(n,e,t){if(!Vw(t)||!E0(t)){const i=Hc(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function jf(n,e,t){if((e=Et(e))instanceof bl)return e._internalPath;if(typeof e=="string")return Mp(n,e);throw Lc("Field path arguments must be of type string or ",n,!1,void 0,t)}const nk=new RegExp("[~\\*/\\[\\]]");function Mp(n,e,t){if(e.search(nk)>=0)throw Lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new bl(...e.split("."))._internalPath}catch{throw Lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Lc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${i}`),h&&(p+=` in document ${o}`),p+=")"),new ie(H.INVALID_ARGUMENT,f+n+p)}function Lw(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(lh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rk extends Mw{data(){return super.data()}}function lh(n,e){return typeof e=="string"?Mp(n,e):e instanceof bl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ie(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jp{}class Fp extends jp{}function Fw(n,e,...t){let i=[];e instanceof jp&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((p=>p instanceof uh)).length,f=l.filter((p=>p instanceof Ol)).length;if(h>1||h>0&&f>0)throw new ie(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class Ol extends Fp{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Ol(e,t,i)}_apply(e){const t=this._parse(e);return Bw(e._query,t),new qr(e.firestore,e.converter,Cf(e._query,t))}_parse(e){const t=oh(e.firestore);return(function(l,h,f,p,y,_,E){let x;if(y.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new ie(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){Hv(E,_);const $=[];for(const B of E)$.push(qv(p,l,B));x={arrayValue:{values:$}}}else x=qv(p,l,E)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||Hv(E,_),x=tk(f,h,E,_==="in"||_==="not-in");return ht.create(y,_,x)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Uw(n,e,t){const i=e,o=lh("where",n);return Ol._create(o,i,t)}class uh extends jp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new uh(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Yn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const p of f)Bw(h,p),h=Cf(h,p)})(e._query,t),new qr(e.firestore,e.converter,Cf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ch extends Fp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ch(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pl(l,h)})(e._query,this._field,this._direction);return new qr(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Xo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function zw(n,e="asc"){const t=e,i=lh("orderBy",n);return ch._create(i,t)}function qv(n,e,t){if(typeof(t=Et(t))=="string"){if(t==="")throw new ie(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!j0(e)&&t.indexOf("/")!==-1)throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(He.fromString(t));if(!pe.isDocumentKey(i))throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return av(n,new pe(i))}if(t instanceof tt)return av(n,t._key);throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hc(t)}.`)}function Hv(n,e){if(!Array.isArray(n)||n.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Bw(n,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $w{convertValue(e,t="none"){switch(Li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Bi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[Cc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((h=>at(h.doubleValue)));return new Kn(l)}convertGeoPoint(e){return new Gn(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Qc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(dl(e));default:return null}}convertTimestamp(e){const t=Oi(e);return new Ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=He.fromString(e);Fe(ow(i),9688,{name:e});const o=new jo(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||Br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class No{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ki extends Mw{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(lh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ki._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ki._jsonSchemaVersion="firestore/documentSnapshot/1.0",ki._jsonSchema={type:dt("string",ki._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class sl extends ki{data(e={}){return super.data(e)}}class Ni{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new No(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new sl(this._firestore,this._userDataWriter,i.key,i,new No(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const p=new sl(o._firestore,o._userDataWriter,f.doc.key,f.doc,new No(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new sl(o._firestore,o._userDataWriter,f.doc.key,f.doc,new No(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,_=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),_=h.indexOf(f.doc.key)),{type:ik(f.type),doc:p,oldIndex:y,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ni._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ik(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(n){n=ln(n,tt);const e=ln(n.firestore,mr);return HP(Nl(e),n._key).then((t=>Kw(e,n,t)))}Ni._jsonSchemaVersion="firestore/querySnapshot/1.0",Ni._jsonSchema={type:dt("string",Ni._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class Up extends $w{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,t)}}function sk(n){n=ln(n,qr);const e=ln(n.firestore,mr),t=Nl(e),i=new Up(e);return jw(n._query),GP(t,n._query).then((o=>new Ni(e,i,n,o)))}function qw(n,e,t){n=ln(n,tt);const i=ln(n.firestore,mr),o=Ww(n.converter,e);return Ll(i,[Dw(oh(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,kn.none())])}function Vl(n,e,t,...i){n=ln(n,tt);const o=ln(n.firestore,mr),l=oh(o);let h;return h=typeof(e=Et(e))=="string"||e instanceof bl?ek(l,"updateDoc",n._key,e,t,i):ZP(l,"updateDoc",n._key,e),Ll(o,[h.toMutation(n._key,kn.exists(!0))])}function Hw(n){return Ll(ln(n.firestore,mr),[new dp(n._key,kn.none())])}function Gw(n,e){const t=ln(n.firestore,mr),i=gn(n),o=Ww(n.converter,e);return Ll(t,[Dw(oh(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,kn.exists(!1))]).then((()=>i))}function zp(n,...e){var t,i,o;n=Et(n);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Wv(e[h])||(l=e[h++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Wv(e[h])){const E=e[h];e[h]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[h+1]=(i=E.error)===null||i===void 0?void 0:i.bind(E),e[h+2]=(o=E.complete)===null||o===void 0?void 0:o.bind(E)}let p,y,_;if(n instanceof tt)y=ln(n.firestore,mr),_=Yc(n._key.path),p={next:E=>{e[h]&&e[h](Kw(y,n,E))},error:e[h+1],complete:e[h+2]};else{const E=ln(n,qr);y=ln(E.firestore,mr),_=E._query;const x=new Up(y);p={next:O=>{e[h]&&e[h](new Ni(y,x,E,O))},error:e[h+1],complete:e[h+2]},jw(n._query)}return(function(x,O,$,B){const L=new bp(B),te=new Pp(O,L,$);return x.asyncQueue.enqueueAndForget((async()=>Ap(await Vc(x),te))),()=>{L.Ou(),x.asyncQueue.enqueueAndForget((async()=>Cp(await Vc(x),te)))}})(Nl(y),_,f,p)}function Ll(n,e){return(function(i,o){const l=new Mr;return i.asyncQueue.enqueueAndForget((async()=>OP(await qP(i),o,l))),l.promise})(Nl(n),e)}function Kw(n,e,t){const i=t.docs.get(e._key),o=new Up(n);return new ki(n,o,e._key,i,new No(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Ko=o})(Ho),Lo(new Ts("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new mr(new sC(i.getProvider("auth-internal")),new lC(h,i.getProvider("app-check-internal")),(function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ie(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jo(y.options.projectId,_)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Ri(Gy,Ky,e),Ri(Gy,Ky,"esm2017")})();const ok=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:$w,Bytes:yn,CollectionReference:jr,DocumentReference:tt,DocumentSnapshot:ki,FieldPath:bl,FieldValue:sh,Firestore:mr,FirestoreError:ie,GeoPoint:Gn,Query:qr,QueryCompositeFilterConstraint:uh,QueryConstraint:Fp,QueryDocumentSnapshot:sl,QueryFieldFilterConstraint:Ol,QueryOrderByConstraint:ch,QuerySnapshot:Ni,SnapshotMetadata:No,Timestamp:Ge,VectorValue:Kn,_AutoId:qc,_ByteString:Pt,_DatabaseId:jo,_DocumentKey:pe,_EmptyAuthCredentialsProvider:y0,_FieldPath:Rt,_cast:ln,_logWarn:bi,_validateIsNotUsedTogether:w0,addDoc:Gw,collection:Op,deleteDoc:Hw,doc:gn,ensureFirestoreConfigured:Nl,executeWrite:Ll,getDoc:Ff,getDocs:sk,initializeFirestore:kw,onSnapshot:zp,orderBy:zw,query:Fw,setDoc:qw,updateDoc:Vl,where:Uw},Symbol.toStringTag,{value:"Module"}));var ak="firebase",lk="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ri(ak,lk,"app");const uk={apiKey:"AIzaSyD4ifB9BZ_EeiUjiABPoOFcvvIAUgNy7wc",authDomain:"datemate-a65bf.firebaseapp.com",projectId:"datemate-a65bf",storageBucket:"datemate-a65bf.firebasestorage.app",messagingSenderId:"351945594471",appId:"1:351945594471:web:61480e5f0adf94454166c2"},Qw=C_(uk),oc=nC(Qw),on=kw(Qw,{experimentalForceLongPolling:!0}),Yw=W.createContext(null);function Ns(){const n=W.useContext(Yw);if(!n)throw new Error("useAuth must be inside AuthProvider");return n}function ck(){return Math.random().toString(36).substring(2,8).toUpperCase()}function hk({children:n}){const[e,t]=W.useState(null),[i,o]=W.useState(null),[l,h]=W.useState(!0);W.useEffect(()=>WS(oc,async x=>{if(t(x),x){const O=await Ff(gn(on,"users",x.uid));O.exists()&&o(O.data())}else o(null);h(!1)}),[]);const f=async(E,x)=>{const O=await zS(oc,E,x),$=await Ff(gn(on,"users",O.user.uid));$.exists()&&o($.data())},p=async(E,x,O,$)=>{const B=await US(oc,E,x),L={uid:B.user.uid,email:E,displayName:O,role:$,partnerCode:ck(),createdAt:Date.now()};await qw(gn(on,"users",B.user.uid),L),o(L)},y=async()=>{await qS(oc),o(null)},_=async E=>{if(!i)return!1;const{query:x,where:O,getDocs:$,collection:B,updateDoc:L}=await i1(async()=>{const{query:ve,where:N,getDocs:S,collection:R,updateDoc:k}=await Promise.resolve().then(()=>ok);return{query:ve,where:N,getDocs:S,collection:R,updateDoc:k}},void 0),te=x(B(on,"users"),O("partnerCode","==",E.toUpperCase())),Q=await $(te);if(Q.empty)return!1;const le=Q.docs[0].id;if(le===i.uid)return!1;const xe=[i.uid,le].sort().join("_");return await L(gn(on,"users",i.uid),{partnerId:le,coupleId:xe}),await L(gn(on,"users",le),{partnerId:i.uid,coupleId:xe}),o({...i,partnerId:le}),!0};return I.jsx(Yw.Provider,{value:{user:e,profile:i,loading:l,signIn:f,signUp:p,signOut:y,linkPartner:_},children:n})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xw=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=W.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:h,...f},p)=>W.createElement("svg",{ref:p,...fk,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:Xw("lucide",o),...f},[...h.map(([y,_])=>W.createElement(y,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(n,e)=>{const t=W.forwardRef(({className:i,...o},l)=>W.createElement(pk,{ref:l,iconNode:e,className:Xw(`lucide-${dk(n)}`,i),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=Vt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=Vt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=Vt("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=Vt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=Vt("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=Vt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=Vt("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=Vt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=Vt("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=Vt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=Vt("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=Vt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=Vt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=Vt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=Vt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=Vt("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=Vt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Ik(){const{signIn:n,signUp:e}=Ns(),[t,i]=W.useState(!1),[o,l]=W.useState(""),[h,f]=W.useState(""),[p,y]=W.useState(""),[_,E]=W.useState("boyfriend"),[x,O]=W.useState(!1),$=async B=>{B.preventDefault(),O(!0);try{t?(await e(o,h,p,_),it.success("Account erstellt!")):(await n(o,h),it.success("Willkommen zurück!"))}catch(L){const te=L.code==="auth/invalid-credential"?"Falsche E-Mail oder Passwort":L.code==="auth/email-already-in-use"?"E-Mail bereits registriert":L.code==="auth/weak-password"?"Passwort muss mindestens 6 Zeichen haben":"Etwas ist schiefgelaufen";it.error(te)}finally{O(!1)}};return I.jsxs("div",{className:"min-h-screen flex items-center justify-center px-4",children:[I.jsx("div",{className:"fixed inset-0 overflow-hidden pointer-events-none",children:I.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px]"})}),I.jsxs("div",{className:"w-full max-w-sm relative z-10",children:[I.jsxs("div",{className:"text-center mb-8",children:[I.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 mb-4",children:I.jsx(Bp,{className:"w-8 h-8 text-rose-500",fill:"currentColor"})}),I.jsx("h1",{className:"font-display text-3xl text-white",children:"DateMate"}),I.jsx("p",{className:"text-[var(--color-text-muted)] mt-1",children:t?"Account erstellen":"Willkommen zurück"})]}),I.jsxs("div",{className:"glass rounded-2xl p-6",children:[I.jsxs("form",{onSubmit:$,className:"space-y-4",children:[t&&I.jsxs(I.Fragment,{children:[I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"Name"}),I.jsx("input",{type:"text",value:p,onChange:B=>y(B.target.value),required:!0,className:"w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-rose-500/50 transition-colors",placeholder:"Dein Name"})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"Rolle"}),I.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[I.jsx("button",{type:"button",onClick:()=>E("boyfriend"),className:`py-2.5 rounded-xl border text-sm font-medium transition-all ${_==="boyfriend"?"bg-blue-500/15 border-blue-500/40 text-blue-400":"bg-transparent border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text-muted)]"}`,children:"👨 Boyfriend"}),I.jsx("button",{type:"button",onClick:()=>E("girlfriend"),className:`py-2.5 rounded-xl border text-sm font-medium transition-all ${_==="girlfriend"?"bg-rose-500/15 border-rose-500/40 text-rose-400":"bg-transparent border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text-muted)]"}`,children:"👩 Girlfriend"})]})]})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"E-Mail"}),I.jsx("input",{type:"email",value:o,onChange:B=>l(B.target.value),required:!0,className:"w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-rose-500/50 transition-colors",placeholder:"name@example.com"})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"Passwort"}),I.jsx("input",{type:"password",value:h,onChange:B=>f(B.target.value),required:!0,minLength:6,className:"w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-rose-500/50 transition-colors",placeholder:"••••••••"})]}),I.jsx("button",{type:"submit",disabled:x,className:"w-full py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:x?I.jsxs("span",{className:"inline-flex items-center gap-2",children:[I.jsx("div",{className:"w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Moment..."]}):t?"Registrieren":"Einloggen"})]}),I.jsx("div",{className:"mt-4 text-center",children:I.jsx("button",{onClick:()=>i(!t),className:"text-sm text-[var(--color-text-muted)] hover:text-rose-400 transition-colors",children:t?"Bereits registriert? Einloggen":"Noch kein Account? Registrieren"})})]})]})]})}const dh="wishes";async function xk(n){const e=Date.now(),t=Object.fromEntries(Object.entries({...n,createdAt:e,updatedAt:e}).filter(([o,l])=>l!==void 0));return(await Gw(Op(on,dh),t)).id}async function rE(n,e){const t=Object.fromEntries(Object.entries({...e,updatedAt:Date.now()}).filter(([i,o])=>o!==void 0));await Vl(gn(on,dh,n),t)}async function Sk(n){await Hw(gn(on,dh,n))}function Ak(n,e,t){const i=Fw(Op(on,dh),Uw("coupleId","==",n),zw("createdAt","desc"));return zp(i,o=>{const l=[];o.forEach(h=>{const f=h.data();f.isPrivate&&f.createdBy!==e||l.push({...f,id:h.id})}),t(l)})}const $p={restaurant:{label:"Restaurant",emoji:"🍽️"},gift:{label:"Geschenk",emoji:"🎁"},activity:{label:"Aktivität",emoji:"🎯"},place:{label:"Ort",emoji:"📍"},tiktok:{label:"TikTok Idee",emoji:"📱"},other:{label:"Sonstiges",emoji:"✨"}},Ck={1:"Nice to have",2:"Wäre cool",3:"Will ich",4:"Sehr wichtig",5:"MUSS SEIN"};function rf({wish:n,currentUserId:e,onEdit:t}){const i=$p[n.category],o=n.createdBy===e,l=async()=>{const p=n.status==="open"?"planned":n.status==="planned"?"done":"open";await rE(n.id,{status:p});const y={planned:"Als geplant markiert",done:"Erledigt! 🎉",open:"Zurück auf offen"};it.success(y[p])},h=async()=>{confirm("Wirklich löschen?")&&(await Sk(n.id),it.success("Gelöscht"))},f=n.priority>=4?"text-rose-400":n.priority>=3?"text-amber-400":"text-[var(--color-text-muted)]";return I.jsx("div",{className:"glass rounded-xl p-4 hover:border-rose-500/20 transition-colors group",children:I.jsxs("div",{className:"flex items-start gap-3",children:[I.jsx("button",{onClick:l,className:"mt-0.5 w-10 h-10 rounded-xl bg-[var(--color-bg)] flex items-center justify-center text-lg shrink-0 hover:bg-rose-500/10 transition-colors",title:"Status ändern",children:n.status==="done"?"✅":n.status==="planned"?"📅":i.emoji}),I.jsxs("div",{className:"flex-1 min-w-0",children:[I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("h3",{className:"font-semibold text-white truncate",children:n.title}),n.isPrivate&&I.jsx(Jw,{className:"w-3.5 h-3.5 text-[var(--color-text-muted)] shrink-0"})]}),n.description&&I.jsx("p",{className:"text-sm text-[var(--color-text-muted)] mt-0.5 line-clamp-2",children:n.description}),I.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 mt-2",children:[I.jsx("span",{className:`text-xs font-medium ${f}`,children:Ck[n.priority]}),n.cuisine&&I.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400",children:n.cuisine}),n.location&&I.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400",children:["📍 ",n.location]}),n.priceRange&&I.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400",children:"💰".repeat(n.priceRange)}),n.tags.map(p=>I.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-white/5 text-[var(--color-text-muted)]",children:p},p))]})]}),I.jsxs("div",{className:"flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity",children:[n.sourceUrl&&I.jsx("a",{href:n.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5",children:I.jsx(Uf,{className:"w-3.5 h-3.5"})}),o&&I.jsxs(I.Fragment,{children:[I.jsx("button",{onClick:()=>t(n),className:"p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5",children:I.jsx(eE,{className:"w-3.5 h-3.5"})}),I.jsx("button",{onClick:h,className:"p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-rose-400 hover:bg-rose-500/10",children:I.jsx(nE,{className:"w-3.5 h-3.5"})})]})]})]})})}function Rk({wish:n,coupleId:e,userId:t,onClose:i}){const o=!!n,[l,h]=W.useState((n==null?void 0:n.title)??""),[f,p]=W.useState((n==null?void 0:n.description)??""),[y,_]=W.useState((n==null?void 0:n.category)??"restaurant"),[E,x]=W.useState((n==null?void 0:n.location)??""),[O,$]=W.useState((n==null?void 0:n.cuisine)??""),[B,L]=W.useState((n==null?void 0:n.priceRange)??2),[te,Q]=W.useState((n==null?void 0:n.priority)??3),[Z,le]=W.useState((n==null?void 0:n.isPrivate)??!1),[xe,ve]=W.useState((n==null?void 0:n.sourceUrl)??""),[N,S]=W.useState((n==null?void 0:n.tags.join(", "))??""),[R,k]=W.useState(!1),V=async()=>{if(!l.trim()){it.error("Titel ist erforderlich");return}k(!0);const b=N.split(",").map(C=>C.trim()).filter(Boolean);try{o&&n?(await rE(n.id,{title:l.trim(),description:f.trim()||void 0,category:y,location:E.trim()||void 0,cuisine:O.trim()||void 0,priceRange:y==="restaurant"?B:void 0,priority:te,isPrivate:Z,sourceUrl:xe.trim()||void 0,tags:b}),it.success("Aktualisiert!")):(await xk({createdBy:t,coupleId:e,title:l.trim(),description:f.trim()||void 0,category:y,location:E.trim()||void 0,cuisine:O.trim()||void 0,priceRange:y==="restaurant"?B:void 0,priority:te,status:"open",isPrivate:Z,sourceUrl:xe.trim()||void 0,tags:b}),it.success("Wunsch hinzugefügt! ✨")),i()}catch{it.error("Fehler beim Speichern")}finally{k(!1)}};return I.jsxs("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center",children:[I.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:i}),I.jsxs("div",{className:"relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[var(--color-surface)] border border-[var(--color-border)] rounded-t-2xl sm:rounded-2xl",children:[I.jsxs("div",{className:"sticky top-0 bg-[var(--color-surface)] border-b border-[var(--color-border)] px-5 py-4 flex items-center justify-between rounded-t-2xl z-10",children:[I.jsx("h2",{className:"font-display text-lg text-white",children:o?"Wunsch bearbeiten":"Neuer Wunsch"}),I.jsx("button",{onClick:i,className:"p-1.5 rounded-lg hover:bg-white/5 transition-colors",children:I.jsx(hh,{className:"w-5 h-5 text-[var(--color-text-muted)]"})})]}),I.jsxs("div",{className:"p-5 space-y-4",children:[I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"Titel *"}),I.jsx("input",{type:"text",value:l,onChange:b=>h(b.target.value),placeholder:"z.B. Sushi Zanmai in Bern",className:"w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"Beschreibung"}),I.jsx("textarea",{value:f,onChange:b=>p(b.target.value),placeholder:"Details, warum, wann gesehen...",rows:2,className:"w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors resize-none"})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"Kategorie"}),I.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.entries($p).map(([b,{label:C,emoji:Je}])=>I.jsxs("button",{type:"button",onClick:()=>_(b),className:`py-2 rounded-xl border text-xs font-medium transition-all ${y===b?"bg-rose-500/15 border-rose-500/40 text-rose-400":"bg-transparent border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text-muted)]"}`,children:[Je," ",C]},b))})]}),y==="restaurant"&&I.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"Küche"}),I.jsx("input",{type:"text",value:O,onChange:b=>$(b.target.value),placeholder:"Japanisch, Italienisch...",className:"w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-sm text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"Preis"}),I.jsx("div",{className:"flex gap-1.5",children:[1,2,3].map(b=>I.jsx("button",{type:"button",onClick:()=>L(b),className:`flex-1 py-2.5 rounded-xl border text-xs transition-all ${B===b?"bg-emerald-500/15 border-emerald-500/40 text-emerald-400":"bg-transparent border-[var(--color-border)] text-[var(--color-text-muted)]"}`,children:"💰".repeat(b)},b))})]})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"Ort"}),I.jsx("input",{type:"text",value:E,onChange:b=>x(b.target.value),placeholder:"Bern, Zürich, egal...",className:"w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"})]}),I.jsxs("div",{children:[I.jsxs("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:["Priorität: ",I.jsx("span",{className:"text-white",children:["","Nice to have","Wäre cool","Will ich","Sehr wichtig","MUSS SEIN"][te]})]}),I.jsx("input",{type:"range",min:1,max:5,value:te,onChange:b=>Q(Number(b.target.value)),className:"w-full accent-rose-500"}),I.jsxs("div",{className:"flex justify-between text-[10px] text-[var(--color-text-muted)] mt-0.5",children:[I.jsx("span",{children:"1"}),I.jsx("span",{children:"2"}),I.jsx("span",{children:"3"}),I.jsx("span",{children:"4"}),I.jsx("span",{children:"5"})]})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"Tags (kommagetrennt)"}),I.jsx("input",{type:"text",value:N,onChange:b=>S(b.target.value),placeholder:"romantisch, abend, draussen...",className:"w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"Link (TikTok, Insta...)"}),I.jsx("input",{type:"url",value:xe,onChange:b=>ve(b.target.value),placeholder:"https://...",className:"w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"})]}),I.jsxs("button",{type:"button",onClick:()=>le(!Z),className:`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${Z?"bg-amber-500/10 border-amber-500/30":"bg-transparent border-[var(--color-border)] hover:border-[var(--color-text-muted)]"}`,children:[Z?I.jsx(Jw,{className:"w-4 h-4 text-amber-400"}):I.jsx(vk,{className:"w-4 h-4 text-[var(--color-text-muted)]"}),I.jsxs("div",{className:"text-left",children:[I.jsx("div",{className:"text-sm font-medium text-white",children:Z?"Privat — nur du siehst das":"Sichtbar für beide"}),I.jsx("div",{className:"text-xs text-[var(--color-text-muted)]",children:Z?"Perfekt für Überraschungen 🤫":"Dein Partner sieht diesen Wunsch auch"})]})]}),I.jsx("button",{onClick:V,disabled:R||!l.trim(),className:"w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed",children:R?"Speichern...":o?"Aktualisieren":"Wunsch hinzufügen"})]})]})]})}function iE(){const{profile:n,signOut:e}=Ns(),t=Wo();if(!n)return null;const i=n.role==="boyfriend";return I.jsx("header",{className:"sticky top-0 z-30 glass",children:I.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-3 flex items-center justify-between",children:[I.jsxs("div",{className:"flex items-center gap-2.5",children:[I.jsx(Bp,{className:"w-5 h-5 text-rose-500",fill:"currentColor"}),I.jsx("span",{className:"font-display text-lg text-white",children:"DateMate"}),I.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full ${i?"bg-blue-500/15 text-blue-400":"bg-rose-500/15 text-rose-400"}`,children:n.displayName})]}),I.jsxs("div",{className:"flex items-center gap-1",children:[I.jsx("button",{onClick:()=>t("/link"),className:"p-2 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5 transition-colors",title:"Partner",children:I.jsx(Zw,{className:"w-4 h-4"})}),I.jsx("button",{onClick:e,className:"p-2 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5 transition-colors",title:"Abmelden",children:I.jsx(zf,{className:"w-4 h-4"})})]})]})})}const Pk=[{path:"/",label:"Wünsche",Icon:Bp},{path:"/kitchen",label:"Küche",Icon:Tk}];function sE(){const n=Wo(),{pathname:e}=jc();return I.jsx("nav",{className:"fixed bottom-0 inset-x-0 z-30 glass border-t border-[var(--color-border)]",children:I.jsx("div",{className:"max-w-2xl mx-auto px-4 flex",children:Pk.map(({path:t,label:i,Icon:o})=>{const l=e===t;return I.jsxs("button",{onClick:()=>n(t),className:`flex-1 flex flex-col items-center gap-0.5 py-2.5 transition-colors ${l?"text-rose-400":"text-[var(--color-text-muted)] hover:text-white"}`,children:[I.jsx(o,{className:"w-5 h-5",fill:l?"currentColor":"none"}),I.jsx("span",{className:"text-[10px] font-medium",children:i})]},t)})})})}function kk(){const{profile:n}=Ns(),e=Wo(),[t,i]=W.useState([]),[o,l]=W.useState(!1),[h,f]=W.useState(null),[p,y]=W.useState("all"),[_,E]=W.useState(""),[x,O]=W.useState(!1);if(W.useEffect(()=>{n&&!n.partnerId&&e("/link")},[n,e]),W.useEffect(()=>{if(!(n!=null&&n.partnerId))return;const Q=[n.uid,n.partnerId].sort().join("_");return Ak(Q,n.uid,le=>{i(le)})},[n]),!n)return null;const $=t.filter(Q=>{var Z,le,xe;if(p!=="all"&&Q.category!==p)return!1;if(_){const ve=_.toLowerCase();return Q.title.toLowerCase().includes(ve)||((Z=Q.description)==null?void 0:Z.toLowerCase().includes(ve))||Q.tags.some(N=>N.toLowerCase().includes(ve))||((le=Q.cuisine)==null?void 0:le.toLowerCase().includes(ve))||((xe=Q.location)==null?void 0:xe.toLowerCase().includes(ve))}return!0}),B=$.filter(Q=>Q.status==="open"),L=$.filter(Q=>Q.status==="planned"),te=$.filter(Q=>Q.status==="done");return I.jsxs("div",{className:"min-h-screen pb-24",children:[I.jsx(iE,{}),I.jsxs("main",{className:"max-w-2xl mx-auto px-4 pt-4",children:[I.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[I.jsxs("div",{className:"flex-1 relative",children:[I.jsx(wk,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]"}),I.jsx("input",{type:"text",value:_,onChange:Q=>E(Q.target.value),placeholder:"Suchen...",className:"w-full pl-10 pr-4 py-2.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-sm text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-rose-500/40 transition-colors"}),_&&I.jsx("button",{onClick:()=>E(""),className:"absolute right-3 top-1/2 -translate-y-1/2",children:I.jsx(hh,{className:"w-3.5 h-3.5 text-[var(--color-text-muted)]"})})]}),I.jsx("button",{onClick:()=>O(!x),className:`p-2.5 rounded-xl border transition-colors ${x||p!=="all"?"bg-rose-500/15 border-rose-500/30 text-rose-400":"bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white"}`,children:I.jsx(_k,{className:"w-4 h-4"})})]}),x&&I.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[I.jsx("button",{onClick:()=>y("all"),className:`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${p==="all"?"bg-white/10 text-white":"bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-white"}`,children:"Alle"}),Object.entries($p).map(([Q,{label:Z,emoji:le}])=>I.jsxs("button",{onClick:()=>y(Q),className:`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${p===Q?"bg-rose-500/15 text-rose-400":"bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-white"}`,children:[le," ",Z]},Q))]}),I.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-6",children:[I.jsxs("div",{className:"glass rounded-xl p-3 text-center",children:[I.jsx("div",{className:"text-2xl font-bold text-white",children:B.length}),I.jsx("div",{className:"text-xs text-[var(--color-text-muted)]",children:"Offen"})]}),I.jsxs("div",{className:"glass rounded-xl p-3 text-center",children:[I.jsx("div",{className:"text-2xl font-bold text-amber-400",children:L.length}),I.jsx("div",{className:"text-xs text-[var(--color-text-muted)]",children:"Geplant"})]}),I.jsxs("div",{className:"glass rounded-xl p-3 text-center",children:[I.jsx("div",{className:"text-2xl font-bold text-emerald-400",children:te.length}),I.jsx("div",{className:"text-xs text-[var(--color-text-muted)]",children:"Erledigt"})]})]}),B.length>0&&I.jsxs("section",{className:"mb-6",children:[I.jsxs("h2",{className:"text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3",children:["Wünsche (",B.length,")"]}),I.jsx("div",{className:"space-y-2",children:B.map(Q=>I.jsx(rf,{wish:Q,currentUserId:n.uid,onEdit:Z=>{f(Z),l(!0)}},Q.id))})]}),L.length>0&&I.jsxs("section",{className:"mb-6",children:[I.jsxs("h2",{className:"text-sm font-semibold text-amber-400/70 uppercase tracking-wider mb-3",children:["Geplant (",L.length,")"]}),I.jsx("div",{className:"space-y-2",children:L.map(Q=>I.jsx(rf,{wish:Q,currentUserId:n.uid,onEdit:Z=>{f(Z),l(!0)}},Q.id))})]}),te.length>0&&I.jsxs("section",{className:"mb-6",children:[I.jsxs("h2",{className:"text-sm font-semibold text-emerald-400/70 uppercase tracking-wider mb-3",children:["Erledigt (",te.length,")"]}),I.jsx("div",{className:"space-y-2 opacity-60",children:te.map(Q=>I.jsx(rf,{wish:Q,currentUserId:n.uid,onEdit:Z=>{f(Z),l(!0)}},Q.id))})]}),$.length===0&&I.jsxs("div",{className:"text-center py-16",children:[I.jsx("div",{className:"text-4xl mb-3",children:"💭"}),I.jsx("p",{className:"text-[var(--color-text-muted)]",children:_?"Nichts gefunden":"Noch keine Wünsche. Füg den ersten hinzu!"})]})]}),I.jsx("button",{onClick:()=>{f(null),l(!0)},className:"fixed bottom-20 right-6 w-14 h-14 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl shadow-lg shadow-rose-500/25 flex items-center justify-center transition-all hover:scale-105 active:scale-95 z-20",children:I.jsx(tE,{className:"w-6 h-6"})}),o&&I.jsx(Rk,{wish:h,coupleId:[n.uid,n.partnerId].sort().join("_"),userId:n.uid,onClose:()=>{l(!1),f(null)}}),I.jsx(sE,{})]})}function Nk(){const{profile:n,linkPartner:e,signOut:t}=Ns(),i=Wo(),[o,l]=W.useState(""),[h,f]=W.useState(!1),[p,y]=W.useState(!1);if(!n)return null;if(n.partnerId)return I.jsx("div",{className:"min-h-screen flex items-center justify-center px-4",children:I.jsxs("div",{className:"w-full max-w-sm text-center space-y-6",children:[I.jsx("div",{className:"text-4xl",children:"💑"}),I.jsx("h1",{className:"font-display text-2xl text-white",children:"Ihr seid verknüpft!"}),I.jsx("p",{className:"text-[var(--color-text-muted)]",children:"Alles bereit. Wünsche werden geteilt."}),I.jsx("button",{onClick:()=>i("/"),className:"px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-colors",children:"Zum Dashboard"}),I.jsxs("button",{onClick:t,className:"mx-auto flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors",children:[I.jsx(zf,{className:"w-4 h-4"})," Abmelden"]})]})});const _=async()=>{await navigator.clipboard.writeText(n.partnerCode),f(!0),it.success("Code kopiert!"),setTimeout(()=>f(!1),2e3)},E=async()=>{if(o.trim()){y(!0);try{await e(o.trim())?(it.success("Partner verknüpft! 🎉"),i("/")):it.error("Code nicht gefunden. Prüfe den Code nochmal.")}catch{it.error("Etwas ist schiefgelaufen")}finally{y(!1)}}};return I.jsxs("div",{className:"min-h-screen flex items-center justify-center px-4",children:[I.jsx("button",{onClick:t,className:"fixed top-4 right-4 z-20 p-2 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5 transition-colors",title:"Abmelden",children:I.jsx(zf,{className:"w-5 h-5"})}),I.jsx("div",{className:"fixed inset-0 overflow-hidden pointer-events-none",children:I.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-500/8 rounded-full blur-[100px]"})}),I.jsxs("div",{className:"w-full max-w-sm relative z-10 space-y-6",children:[I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 mb-4",children:I.jsx(Zw,{className:"w-7 h-7 text-rose-500"})}),I.jsx("h1",{className:"font-display text-2xl text-white",children:"Partner verknüpfen"}),I.jsx("p",{className:"text-[var(--color-text-muted)] mt-1 text-sm",children:"Teile deinen Code oder gib den Code deines Partners ein"})]}),I.jsxs("div",{className:"glass rounded-2xl p-5",children:[I.jsx("p",{className:"text-sm text-[var(--color-text-muted)] mb-3",children:"Dein Code zum Teilen:"}),I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("div",{className:"flex-1 px-4 py-3 bg-[var(--color-bg)] rounded-xl font-mono text-xl tracking-[0.3em] text-center text-white",children:n.partnerCode}),I.jsx("button",{onClick:_,className:"p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-rose-500/30 transition-colors",children:h?I.jsx(gk,{className:"w-5 h-5 text-green-400"}):I.jsx(yk,{className:"w-5 h-5 text-[var(--color-text-muted)]"})})]})]}),I.jsxs("div",{className:"flex items-center gap-3",children:[I.jsx("div",{className:"flex-1 h-px bg-[var(--color-border)]"}),I.jsx("span",{className:"text-xs text-[var(--color-text-muted)]",children:"ODER"}),I.jsx("div",{className:"flex-1 h-px bg-[var(--color-border)]"})]}),I.jsxs("div",{className:"glass rounded-2xl p-5",children:[I.jsx("p",{className:"text-sm text-[var(--color-text-muted)] mb-3",children:"Code deines Partners:"}),I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("input",{type:"text",value:o,onChange:x=>l(x.target.value.toUpperCase()),maxLength:6,placeholder:"ABC123",className:"flex-1 px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl font-mono text-xl tracking-[0.3em] text-center text-white placeholder:text-[var(--color-text-muted)]/30 focus:outline-none focus:border-rose-500/50 transition-colors uppercase"}),I.jsx("button",{onClick:E,disabled:p||o.length<4,className:"p-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed",children:I.jsx(mk,{className:"w-5 h-5"})})]})]})]})]})}function Bf(n){const e=new Set,t=[];for(const i of n){const o=i.trim();if(!o)continue;const l=o.toLowerCase();e.has(l)||(e.add(l),t.push(o))}return t}function bk(n,e,t=()=>crypto.randomUUID(),i=()=>Date.now()){const o={id:t(),name:e.name.trim(),createdAt:i()};return e.note&&e.note.trim()&&(o.note=e.note.trim()),e.sourceUrl&&e.sourceUrl.trim()&&(o.sourceUrl=e.sourceUrl.trim()),[...n,o]}function Dk(n,e){return n.map(t=>t.id===e.id?e:t)}function Ok(n,e){return n.filter(t=>t.id!==e)}function Vk(n){return Object.fromEntries(Object.entries(n).filter(([,e])=>e!==void 0))}const fh="users";function Gv(n,e){return zp(gn(on,fh,n),t=>{e(t.exists()?t.data():null)})}async function Kv(n,e){await Vl(gn(on,fh,n),{allergies:Bf(e)})}async function Lk(n,e){await Vl(gn(on,fh,n),{foodNotes:e})}async function sf(n,e){await Vl(gn(on,fh,n),{favoriteDishes:e.map(Vk)})}function Mk({dish:n,onSave:e,onClose:t}){const i=!!n,[o,l]=W.useState((n==null?void 0:n.name)??""),[h,f]=W.useState((n==null?void 0:n.note)??""),[p,y]=W.useState((n==null?void 0:n.sourceUrl)??""),[_,E]=W.useState(!1),x=async()=>{if(!o.trim()){it.error("Name ist erforderlich");return}E(!0);try{await e({name:o.trim(),note:h.trim()||void 0,sourceUrl:p.trim()||void 0}),it.success(i?"Aktualisiert!":"Gericht hinzugefügt! 🍽️"),t()}catch{it.error("Fehler beim Speichern")}finally{E(!1)}};return I.jsxs("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center",children:[I.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:t}),I.jsxs("div",{className:"relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[var(--color-surface)] border border-[var(--color-border)] rounded-t-2xl sm:rounded-2xl",children:[I.jsxs("div",{className:"sticky top-0 bg-[var(--color-surface)] border-b border-[var(--color-border)] px-5 py-4 flex items-center justify-between rounded-t-2xl z-10",children:[I.jsx("h2",{className:"font-display text-lg text-white",children:i?"Gericht bearbeiten":"Neues Lieblingsgericht"}),I.jsx("button",{onClick:t,className:"p-1.5 rounded-lg hover:bg-white/5 transition-colors",children:I.jsx(hh,{className:"w-5 h-5 text-[var(--color-text-muted)]"})})]}),I.jsxs("div",{className:"p-5 space-y-4",children:[I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"Name *"}),I.jsx("input",{type:"text",value:o,onChange:O=>l(O.target.value),placeholder:"z.B. Pasta Carbonara",className:"w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"Notiz"}),I.jsx("textarea",{value:h,onChange:O=>f(O.target.value),placeholder:"am liebsten scharf, ohne Koriander...",rows:2,className:"w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors resize-none"})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm text-[var(--color-text-muted)] mb-1.5",children:"Link (Rezept, TikTok...)"}),I.jsx("input",{type:"url",value:p,onChange:O=>y(O.target.value),placeholder:"https://...",className:"w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"})]}),I.jsx("button",{onClick:x,disabled:_||!o.trim(),className:"w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed",children:_?"Speichern...":i?"Aktualisieren":"Gericht hinzufügen"})]})]})]})}function jk(){const{profile:n}=Ns(),e=Wo(),[t,i]=W.useState(null),[o,l]=W.useState(null),[h,f]=W.useState(!1),[p,y]=W.useState(null),[_,E]=W.useState(""),[x,O]=W.useState(""),$=W.useRef(!1);if(W.useEffect(()=>{n&&!n.partnerId&&e("/link")},[n,e]),W.useEffect(()=>{if(n!=null&&n.uid)return Gv(n.uid,S=>{i(S),!$.current&&S&&(O(S.foodNotes??""),$.current=!0)})},[n==null?void 0:n.uid]),W.useEffect(()=>{if(n!=null&&n.partnerId)return Gv(n.partnerId,l)},[n==null?void 0:n.partnerId]),!n)return null;const B=n.uid,L=Bf((t==null?void 0:t.allergies)??[]),te=(t==null?void 0:t.favoriteDishes)??[],Q=Bf((o==null?void 0:o.allergies)??[]),Z=async()=>{const S=_.trim();if(S){E("");try{await Kv(B,[...L,S])}catch{it.error("Fehler beim Speichern")}}},le=async S=>{try{await Kv(B,L.filter(R=>R!==S))}catch{it.error("Fehler beim Speichern")}},xe=async()=>{if(x!==((t==null?void 0:t.foodNotes)??""))try{await Lk(B,x),it.success("Notiz gespeichert")}catch{it.error("Fehler beim Speichern")}},ve=async S=>{p?await sf(B,Dk(te,{...p,...S})):await sf(B,bk(te,S))},N=async S=>{if(confirm("Gericht wirklich löschen?"))try{await sf(B,Ok(te,S)),it.success("Gelöscht")}catch{it.error("Fehler beim Speichern")}};return I.jsxs("div",{className:"min-h-screen pb-24",children:[I.jsx(iE,{}),I.jsxs("main",{className:"max-w-2xl mx-auto px-4 pt-4 space-y-8",children:[I.jsxs("section",{className:"space-y-4",children:[I.jsx("h2",{className:"font-display text-xl text-white",children:"Mein Essens-Profil"}),I.jsxs("div",{className:"glass rounded-xl p-4",children:[I.jsx("h3",{className:"text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3",children:"Allergien"}),I.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[L.length===0&&I.jsx("span",{className:"text-sm text-[var(--color-text-muted)]",children:"Keine eingetragen"}),L.map(S=>I.jsxs("span",{className:"flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400",children:[S,I.jsx("button",{onClick:()=>le(S),"aria-label":`${S} entfernen`,className:"hover:text-white",children:I.jsx(hh,{className:"w-3 h-3"})})]},S))]}),I.jsxs("div",{className:"flex gap-2",children:[I.jsx("input",{type:"text",value:_,onChange:S=>E(S.target.value),onKeyDown:S=>{S.key==="Enter"&&Z()},placeholder:"z.B. Nüsse",className:"flex-1 px-4 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-sm text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors"}),I.jsx("button",{onClick:Z,className:"px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium transition-colors",children:"Hinzufügen"})]})]}),I.jsxs("div",{className:"glass rounded-xl p-4",children:[I.jsx("h3",{className:"text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3",children:"Wichtige Notizen"}),I.jsx("textarea",{value:x,onChange:S=>O(S.target.value),onBlur:xe,placeholder:"Vorlieben, Abneigungen, was sonst wichtig ist...",rows:3,className:"w-full px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl text-sm text-white placeholder:text-[var(--color-text-muted)]/40 focus:outline-none focus:border-rose-500/50 transition-colors resize-none"})]}),I.jsxs("div",{className:"glass rounded-xl p-4",children:[I.jsxs("div",{className:"flex items-center justify-between mb-3",children:[I.jsx("h3",{className:"text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider",children:"Lieblingsgerichte"}),I.jsxs("button",{onClick:()=>{y(null),f(!0)},className:"flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300",children:[I.jsx(tE,{className:"w-4 h-4"})," Gericht"]})]}),I.jsxs("div",{className:"space-y-2",children:[te.length===0&&I.jsx("p",{className:"text-sm text-[var(--color-text-muted)]",children:"Noch keine Lieblingsgerichte."}),te.map(S=>I.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-[var(--color-bg)] group",children:[I.jsxs("div",{className:"flex-1 min-w-0",children:[I.jsx("div",{className:"font-medium text-white",children:S.name}),S.note&&I.jsx("p",{className:"text-sm text-[var(--color-text-muted)] mt-0.5",children:S.note})]}),I.jsxs("div",{className:"flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity",children:[S.sourceUrl&&I.jsx("a",{href:S.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5",children:I.jsx(Uf,{className:"w-3.5 h-3.5"})}),I.jsx("button",{onClick:()=>{y(S),f(!0)},className:"p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5",children:I.jsx(eE,{className:"w-3.5 h-3.5"})}),I.jsx("button",{onClick:()=>N(S.id),className:"p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-rose-400 hover:bg-rose-500/10",children:I.jsx(nE,{className:"w-3.5 h-3.5"})})]})]},S.id))]})]})]}),I.jsxs("section",{className:"space-y-4",children:[I.jsx("h2",{className:"font-display text-xl text-white",children:o?`${o.displayName}s Essens-Profil`:"Partner"}),I.jsxs("div",{className:"glass rounded-xl p-4",children:[I.jsxs("h3",{className:"flex items-center gap-1.5 text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3",children:[I.jsx(Ek,{className:"w-4 h-4"})," Allergien"]}),I.jsxs("div",{className:"flex flex-wrap gap-2",children:[Q.length===0&&I.jsx("span",{className:"text-sm text-[var(--color-text-muted)]",children:"Keine eingetragen"}),Q.map(S=>I.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-medium",children:S},S))]})]}),(o==null?void 0:o.foodNotes)&&I.jsxs("div",{className:"glass rounded-xl p-4",children:[I.jsx("h3",{className:"text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-2",children:"Wichtige Notizen"}),I.jsx("p",{className:"text-sm text-white whitespace-pre-wrap",children:o.foodNotes})]}),I.jsxs("div",{className:"glass rounded-xl p-4",children:[I.jsx("h3",{className:"text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3",children:"Lieblingsgerichte"}),I.jsxs("div",{className:"space-y-2",children:[((o==null?void 0:o.favoriteDishes)??[]).length===0&&I.jsx("p",{className:"text-sm text-[var(--color-text-muted)]",children:"Noch keine Lieblingsgerichte."}),((o==null?void 0:o.favoriteDishes)??[]).map(S=>I.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-[var(--color-bg)]",children:[I.jsxs("div",{className:"flex-1 min-w-0",children:[I.jsx("div",{className:"font-medium text-white",children:S.name}),S.note&&I.jsx("p",{className:"text-sm text-[var(--color-text-muted)] mt-0.5",children:S.note})]}),S.sourceUrl&&I.jsx("a",{href:S.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-white/5",children:I.jsx(Uf,{className:"w-3.5 h-3.5"})})]},S.id))]})]})]})]}),h&&I.jsx(Mk,{dish:p,onSave:ve,onClose:()=>{f(!1),y(null)}}),I.jsx(sE,{})]})}function of({children:n}){const{user:e,loading:t}=Ns();return t?I.jsx("div",{className:"min-h-screen flex items-center justify-center",children:I.jsx("div",{className:"w-8 h-8 border-2 border-rose-500 border-t-transparent rounded-full animate-spin"})}):e?I.jsx(I.Fragment,{children:n}):I.jsx(lf,{to:"/login"})}function Fk(){const{user:n,loading:e}=Ns();return e?I.jsx("div",{className:"min-h-screen flex items-center justify-center",children:I.jsx("div",{className:"w-8 h-8 border-2 border-rose-500 border-t-transparent rounded-full animate-spin"})}):I.jsxs(cI,{children:[I.jsx(So,{path:"/login",element:n?I.jsx(lf,{to:"/"}):I.jsx(Ik,{})}),I.jsx(So,{path:"/link",element:I.jsx(of,{children:I.jsx(Nk,{})})}),I.jsx(So,{path:"/",element:I.jsx(of,{children:I.jsx(kk,{})})}),I.jsx(So,{path:"/kitchen",element:I.jsx(of,{children:I.jsx(jk,{})})}),I.jsx(So,{path:"*",element:I.jsx(lf,{to:"/"})})]})}_T.createRoot(document.getElementById("root")).render(I.jsx(Yv.StrictMode,{children:I.jsx(fI,{children:I.jsxs(hk,{children:[I.jsx(Fk,{}),I.jsx(t1,{position:"bottom-center",toastOptions:{style:{background:"#1a1a24",color:"#e8e8f0",border:"1px solid #2a2a3e",fontFamily:"'DM Sans', sans-serif"}}})]})})}));
