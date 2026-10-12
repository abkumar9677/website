(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Ig(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var $f={exports:{}},Eo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tx;function Ty(){if(Tx)return Eo;Tx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Eo.Fragment=t,Eo.jsx=i,Eo.jsxs=i,Eo}var Ax;function Ay(){return Ax||(Ax=1,$f.exports=Ty()),$f.exports}var w=Ay(),ed={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rx;function Ry(){if(Rx)return rt;Rx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function S(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,b={};function _(P,se,Se){this.props=P,this.context=se,this.refs=b,this.updater=Se||E}_.prototype.isReactComponent={},_.prototype.setState=function(P,se){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,se,"setState")},_.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function U(){}U.prototype=_.prototype;function N(P,se,Se){this.props=P,this.context=se,this.refs=b,this.updater=Se||E}var z=N.prototype=new U;z.constructor=N,A(z,_.prototype),z.isPureReactComponent=!0;var G=Array.isArray;function L(){}var I={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function D(P,se,Se){var Te=Se.ref;return{$$typeof:o,type:P,key:se,ref:Te!==void 0?Te:null,props:Se}}function C(P,se){return D(P.type,se,P.props)}function j(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function te(P){var se={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Se){return se[Se]})}var ce=/\/+/g;function xe(P,se){return typeof P=="object"&&P!==null&&P.key!=null?te(""+P.key):se.toString(36)}function de(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(L,L):(P.status="pending",P.then(function(se){P.status==="pending"&&(P.status="fulfilled",P.value=se)},function(se){P.status==="pending"&&(P.status="rejected",P.reason=se)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function F(P,se,Se,Te,ze){var ae=typeof P;(ae==="undefined"||ae==="boolean")&&(P=null);var ue=!1;if(P===null)ue=!0;else switch(ae){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(P.$$typeof){case o:case t:ue=!0;break;case x:return ue=P._init,F(ue(P._payload),se,Se,Te,ze)}}if(ue)return ze=ze(P),ue=Te===""?"."+xe(P,0):Te,G(ze)?(Se="",ue!=null&&(Se=ue.replace(ce,"$&/")+"/"),F(ze,se,Se,"",function(je){return je})):ze!=null&&(j(ze)&&(ze=C(ze,Se+(ze.key==null||P&&P.key===ze.key?"":(""+ze.key).replace(ce,"$&/")+"/")+ue)),se.push(ze)),1;ue=0;var Ce=Te===""?".":Te+":";if(G(P))for(var He=0;He<P.length;He++)Te=P[He],ae=Ce+xe(Te,He),ue+=F(Te,se,Se,ae,ze);else if(He=S(P),typeof He=="function")for(P=He.call(P),He=0;!(Te=P.next()).done;)Te=Te.value,ae=Ce+xe(Te,He++),ue+=F(Te,se,Se,ae,ze);else if(ae==="object"){if(typeof P.then=="function")return F(de(P),se,Se,Te,ze);throw se=String(P),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.")}return ue}function K(P,se,Se){if(P==null)return P;var Te=[],ze=0;return F(P,Te,"","",function(ae){return se.call(Se,ae,ze++)}),Te}function Z(P){if(P._status===-1){var se=P._result;se=se(),se.then(function(Se){(P._status===0||P._status===-1)&&(P._status=1,P._result=Se)},function(Se){(P._status===0||P._status===-1)&&(P._status=2,P._result=Se)}),P._status===-1&&(P._status=0,P._result=se)}if(P._status===1)return P._result.default;throw P._result}var ve=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var se=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(se))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},_e={map:K,forEach:function(P,se,Se){K(P,function(){se.apply(this,arguments)},Se)},count:function(P){var se=0;return K(P,function(){se++}),se},toArray:function(P){return K(P,function(se){return se})||[]},only:function(P){if(!j(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return rt.Activity=g,rt.Children=_e,rt.Component=_,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=N,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,rt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return I.H.useMemoCache(P)}},rt.cache=function(P){return function(){return P.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(P,se,Se){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Te=A({},P.props),ze=P.key;if(se!=null)for(ae in se.key!==void 0&&(ze=""+se.key),se)!W.call(se,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&se.ref===void 0||(Te[ae]=se[ae]);var ae=arguments.length-2;if(ae===1)Te.children=Se;else if(1<ae){for(var ue=Array(ae),Ce=0;Ce<ae;Ce++)ue[Ce]=arguments[Ce+2];Te.children=ue}return D(P.type,ze,Te)},rt.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},rt.createElement=function(P,se,Se){var Te,ze={},ae=null;if(se!=null)for(Te in se.key!==void 0&&(ae=""+se.key),se)W.call(se,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(ze[Te]=se[Te]);var ue=arguments.length-2;if(ue===1)ze.children=Se;else if(1<ue){for(var Ce=Array(ue),He=0;He<ue;He++)Ce[He]=arguments[He+2];ze.children=Ce}if(P&&P.defaultProps)for(Te in ue=P.defaultProps,ue)ze[Te]===void 0&&(ze[Te]=ue[Te]);return D(P,ae,ze)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(P){return{$$typeof:h,render:P}},rt.isValidElement=j,rt.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:Z}},rt.memo=function(P,se){return{$$typeof:p,type:P,compare:se===void 0?null:se}},rt.startTransition=function(P){var se=I.T,Se={};I.T=Se;try{var Te=P(),ze=I.S;ze!==null&&ze(Se,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(L,ve)}catch(ae){ve(ae)}finally{se!==null&&Se.types!==null&&(se.types=Se.types),I.T=se}},rt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},rt.use=function(P){return I.H.use(P)},rt.useActionState=function(P,se,Se){return I.H.useActionState(P,se,Se)},rt.useCallback=function(P,se){return I.H.useCallback(P,se)},rt.useContext=function(P){return I.H.useContext(P)},rt.useDebugValue=function(){},rt.useDeferredValue=function(P,se){return I.H.useDeferredValue(P,se)},rt.useEffect=function(P,se){return I.H.useEffect(P,se)},rt.useEffectEvent=function(P){return I.H.useEffectEvent(P)},rt.useId=function(){return I.H.useId()},rt.useImperativeHandle=function(P,se,Se){return I.H.useImperativeHandle(P,se,Se)},rt.useInsertionEffect=function(P,se){return I.H.useInsertionEffect(P,se)},rt.useLayoutEffect=function(P,se){return I.H.useLayoutEffect(P,se)},rt.useMemo=function(P,se){return I.H.useMemo(P,se)},rt.useOptimistic=function(P,se){return I.H.useOptimistic(P,se)},rt.useReducer=function(P,se,Se){return I.H.useReducer(P,se,Se)},rt.useRef=function(P){return I.H.useRef(P)},rt.useState=function(P){return I.H.useState(P)},rt.useSyncExternalStore=function(P,se,Se){return I.H.useSyncExternalStore(P,se,Se)},rt.useTransition=function(){return I.H.useTransition()},rt.version="19.2.0",rt}var wx;function Rh(){return wx||(wx=1,ed.exports=Ry()),ed.exports}var yt=Rh();const wy=Ig(yt);var td={exports:{}},To={},nd={exports:{}},id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx;function Cy(){return Cx||(Cx=1,(function(o){function t(F,K){var Z=F.length;F.push(K);e:for(;0<Z;){var ve=Z-1>>>1,_e=F[ve];if(0<l(_e,K))F[ve]=K,F[Z]=_e,Z=ve;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var K=F[0],Z=F.pop();if(Z!==K){F[0]=Z;e:for(var ve=0,_e=F.length,P=_e>>>1;ve<P;){var se=2*(ve+1)-1,Se=F[se],Te=se+1,ze=F[Te];if(0>l(Se,Z))Te<_e&&0>l(ze,Se)?(F[ve]=ze,F[Te]=Z,ve=Te):(F[ve]=Se,F[se]=Z,ve=se);else if(Te<_e&&0>l(ze,Z))F[ve]=ze,F[Te]=Z,ve=Te;else break e}}return K}function l(F,K){var Z=F.sortIndex-K.sortIndex;return Z!==0?Z:F.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,g=null,y=3,S=!1,E=!1,A=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function z(F){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=F)r(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function G(F){if(A=!1,z(F),!E)if(i(m)!==null)E=!0,L||(L=!0,te());else{var K=i(p);K!==null&&de(G,K.startTime-F)}}var L=!1,I=-1,W=5,D=-1;function C(){return b?!0:!(o.unstable_now()-D<W)}function j(){if(b=!1,L){var F=o.unstable_now();D=F;var K=!0;try{e:{E=!1,A&&(A=!1,U(I),I=-1),S=!0;var Z=y;try{t:{for(z(F),g=i(m);g!==null&&!(g.expirationTime>F&&C());){var ve=g.callback;if(typeof ve=="function"){g.callback=null,y=g.priorityLevel;var _e=ve(g.expirationTime<=F);if(F=o.unstable_now(),typeof _e=="function"){g.callback=_e,z(F),K=!0;break t}g===i(m)&&r(m),z(F)}else r(m);g=i(m)}if(g!==null)K=!0;else{var P=i(p);P!==null&&de(G,P.startTime-F),K=!1}}break e}finally{g=null,y=Z,S=!1}K=void 0}}finally{K?te():L=!1}}}var te;if(typeof N=="function")te=function(){N(j)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,xe=ce.port2;ce.port1.onmessage=j,te=function(){xe.postMessage(null)}}else te=function(){_(j,0)};function de(F,K){I=_(function(){F(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(F){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Z=y;y=K;try{return F()}finally{y=Z}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(F,K){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Z=y;y=F;try{return K()}finally{y=Z}},o.unstable_scheduleCallback=function(F,K,Z){var ve=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ve+Z:ve):Z=ve,F){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=Z+_e,F={id:x++,callback:K,priorityLevel:F,startTime:Z,expirationTime:_e,sortIndex:-1},Z>ve?(F.sortIndex=Z,t(p,F),i(m)===null&&F===i(p)&&(A?(U(I),I=-1):A=!0,de(G,Z-ve))):(F.sortIndex=_e,t(m,F),E||S||(E=!0,L||(L=!0,te()))),F},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(F){var K=y;return function(){var Z=y;y=K;try{return F.apply(this,arguments)}finally{y=Z}}}})(id)),id}var Dx;function Dy(){return Dx||(Dx=1,nd.exports=Cy()),nd.exports}var ad={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nx;function Ny(){if(Nx)return Dn;Nx=1;var o=Rh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,x)},Dn.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:S}):x==="script"&&r.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.0",Dn}var Ux;function Uy(){if(Ux)return ad.exports;Ux=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ad.exports=Ny(),ad.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lx;function Ly(){if(Lx)return To;Lx=1;var o=Dy(),t=Rh(),i=Uy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,s=f;break}if(T===s){v=!0,s=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,s=u;break}if(T===s){v=!0,s=f,a=u;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),N=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Symbol.for("react.client.reference");function xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case _:return"Profiler";case b:return"StrictMode";case G:return"Suspense";case L:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:xe(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return xe(e(n))}catch{}}return null}var de=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ve=[],_e=-1;function P(e){return{current:e}}function se(e){0>_e||(e.current=ve[_e],ve[_e]=null,_e--)}function Se(e,n){_e++,ve[_e]=e.current,e.current=n}var Te=P(null),ze=P(null),ae=P(null),ue=P(null);function Ce(e,n){switch(Se(ae,n),Se(ze,e),Se(Te,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ym(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ym(n),e=Zm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}se(Te),Se(Te,e)}function He(){se(Te),se(ze),se(ae)}function je(e){e.memoizedState!==null&&Se(ue,e);var n=Te.current,a=Zm(n,e.type);n!==a&&(Se(ze,e),Se(Te,a))}function lt(e){ze.current===e&&(se(Te),se(ze)),ue.current===e&&(se(ue),yo._currentValue=Z)}var an,dt;function wt(e){if(an===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);an=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+an+e+dt}var H=!1;function ht(e,n){if(!e||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(oe){var ie=oe}Reflect.construct(e,[],me)}else{try{me.call()}catch(oe){ie=oe}e.call(me.prototype)}}else{try{throw Error()}catch(oe){ie=oe}(me=e())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(oe){if(oe&&ie&&typeof oe.stack=="string")return[oe.stack,ie.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var B=v.split(`
`),ee=T.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===ee.length)for(s=B.length-1,u=ee.length-1;1<=s&&0<=u&&B[s]!==ee[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==ee[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==ee[u]){var fe=`
`+B[s].replace(" at new "," at ");return e.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",e.displayName)),fe}while(1<=s&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?wt(a):""}function mt(e,n){switch(e.tag){case 26:case 27:case 5:return wt(e.type);case 16:return wt("Lazy");case 13:return e.child!==n&&n!==null?wt("Suspense Fallback"):wt("Suspense");case 19:return wt("SuspenseList");case 0:case 15:return ht(e.type,!1);case 11:return ht(e.type.render,!1);case 1:return ht(e.type,!0);case 31:return wt("Activity");default:return""}}function Pt(e){try{var n="",a=null;do n+=mt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ge=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,at=o.unstable_shouldYield,O=o.unstable_requestPaint,M=o.unstable_now,$=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,ye=o.unstable_UserBlockingPriority,le=o.unstable_NormalPriority,qe=o.unstable_LowPriority,Ue=o.unstable_IdlePriority,Qe=o.log,Xe=o.unstable_setDisableYieldValue,be=null,Ee=null;function We(e){if(typeof Qe=="function"&&Xe(e),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(be,e)}catch{}}var Ve=Math.clz32?Math.clz32:V,Oe=Math.log,nt=Math.LN2;function V(e){return e>>>=0,e===0?32:31-(Oe(e)/nt|0)|0}var De=256,Re=262144,we=4194304;function Me(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ge(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Me(s):(v&=T,v!==0?u=Me(v):a||(a=T&~e,a!==0&&(u=Me(a))))):(T=s&~f,T!==0?u=Me(T):v!==0?u=Me(v):a||(a=s&~e,a!==0&&(u=Me(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ie(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var e=we;return we<<=1,(we&62914560)===0&&(we=4194304),e}function Ct(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yn(e,n,a,s,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,ee=e.hiddenUpdates;for(a=v&~a;0<a;){var fe=31-Ve(a),me=1<<fe;T[fe]=0,B[fe]=-1;var ie=ee[fe];if(ie!==null)for(ee[fe]=null,fe=0;fe<ie.length;fe++){var oe=ie[fe];oe!==null&&(oe.lane&=-536870913)}a&=~me}s!==0&&ko(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function ko(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Ve(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Ns(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Ve(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function Us(e,n){var a=n&-n;return a=(a&42)!==0?1:vi(a),(a&(e.suspendedLanes|n))!==0?0:a}function vi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ls(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:vx(e.type))}function Os(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var Zn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Zn,pn="__reactProps$"+Zn,Ii="__reactContainer$"+Zn,Rr="__reactEvents$"+Zn,qc="__reactListeners$"+Zn,Wc="__reactHandles$"+Zn,jo="__reactResources$"+Zn,Ja="__reactMarker$"+Zn;function zs(e){delete e[ln],delete e[pn],delete e[Rr],delete e[qc],delete e[Wc]}function xa(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ii]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=nx(e);e!==null;){if(a=e[ln])return a;e=nx(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[ln]||e[Ii]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function X(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function re(e){var n=e[jo];return n||(n=e[jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ne(e){e[Ja]=!0}var Y=new Set,Ae={};function Ne(e,n){Pe(e,n),Pe(e+"Capture",n)}function Pe(e,n){for(Ae[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Be=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},tt={};function Ze(e){return Ge.call(tt,e)?!0:Ge.call($e,e)?!1:Be.test(e)?tt[e]=!0:($e[e]=!0,!1)}function ct(e,n,a){if(Ze(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Rt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Dt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wt(e){if(!e._valueTracker){var n=zt(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function Mt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=zt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ga=/[\n"\\]/g;function Zt(e){return e.replace(ga,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bi(e,n,a,s,u,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+St(n)):e.value!==""+St(n)&&(e.value=""+St(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?yn(e,v,St(n)):a!=null?yn(e,v,St(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+St(T):e.removeAttribute("name")}function Kt(e,n,a,s,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wt(e);return}a=a!=null?""+St(a):"",n=n!=null?""+St(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Wt(e)}function yn(e,n,a){n==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function mn(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+St(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function bn(e,n,a){if(n!=null&&(n=""+St(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+St(a):""}function En(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(de(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=St(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Wt(e)}function Ri(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Fi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Fi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function qh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Xh(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Xh(e,f,n[f])}function Yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(e){return Sv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Hi(){}var Zc=null;function Kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Cr=null;function Wh(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Bi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Zt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[pn]||null;if(!u)throw Error(r(90));Bi(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Mt(s)}break e;case"textarea":bn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&mn(e,!!a.multiple,n,!1)}}}var Qc=!1;function Yh(e,n,a){if(Qc)return e(n,a);Qc=!0;try{var s=e(n);return s}finally{if(Qc=!1,(wr!==null||Cr!==null)&&(Ul(),wr&&(n=wr,e=Cr,Cr=wr=null,Wh(n),e)))for(n=0;n<e.length;n++)Wh(e[n])}}function Ps(e,n){var a=e.stateNode;if(a===null)return null;var s=a[pn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(Gi)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{Jc=!1}var va=null,$c=null,qo=null;function Zh(){if(qo)return qo;var e,n=$c,a=n.length,s,u="value"in va?va.value:va.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(s=1;s<=v&&n[a-s]===u[f-s];s++);return qo=u.slice(e,1<s?1-s:void 0)}function Wo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function Kh(){return!1}function Fn(e){function n(a,s,u,f,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yo:Kh,this.isPropagationStopped=Kh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=Fn($a),Bs=g({},$a,{view:0,detail:0}),Mv=Fn(Bs),eu,tu,Fs,Ko=g({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fs&&(Fs&&e.type==="mousemove"?(eu=e.screenX-Fs.screenX,tu=e.screenY-Fs.screenY):tu=eu=0,Fs=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),Qh=Fn(Ko),Ev=g({},Ko,{dataTransfer:0}),Tv=Fn(Ev),Av=g({},Bs,{relatedTarget:0}),nu=Fn(Av),Rv=g({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),wv=Fn(Rv),Cv=g({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dv=Fn(Cv),Nv=g({},$a,{data:0}),Jh=Fn(Nv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ov[e])?!!n[e]:!1}function iu(){return zv}var Pv=g({},Bs,{key:function(e){if(e.key){var n=Uv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Iv=Fn(Pv),Bv=g({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$h=Fn(Bv),Fv=g({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),Hv=Fn(Fv),Gv=g({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=Fn(Gv),kv=g({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jv=Fn(kv),Xv=g({},$a,{newState:0,oldState:0}),qv=Fn(Xv),Wv=[9,13,27,32],au=Gi&&"CompositionEvent"in window,Hs=null;Gi&&"documentMode"in document&&(Hs=document.documentMode);var Yv=Gi&&"TextEvent"in window&&!Hs,e0=Gi&&(!au||Hs&&8<Hs&&11>=Hs),t0=" ",n0=!1;function i0(e,n){switch(e){case"keyup":return Wv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function Zv(e,n){switch(e){case"compositionend":return a0(n);case"keypress":return n.which!==32?null:(n0=!0,t0);case"textInput":return e=n.data,e===t0&&n0?null:e;default:return null}}function Kv(e,n){if(Dr)return e==="compositionend"||!au&&i0(e,n)?(e=Zh(),qo=$c=va=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return e0&&n.locale!=="ko"?null:n.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function r0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qv[e.type]:n==="textarea"}function s0(e,n,a,s){wr?Cr?Cr.push(s):Cr=[s]:wr=s,n=Fl(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Gs=null,Vs=null;function Jv(e){Vm(e,0)}function Qo(e){var n=X(e);if(Mt(n))return e}function o0(e,n){if(e==="change")return n}var l0=!1;if(Gi){var ru;if(Gi){var su="oninput"in document;if(!su){var c0=document.createElement("div");c0.setAttribute("oninput","return;"),su=typeof c0.oninput=="function"}ru=su}else ru=!1;l0=ru&&(!document.documentMode||9<document.documentMode)}function u0(){Gs&&(Gs.detachEvent("onpropertychange",f0),Vs=Gs=null)}function f0(e){if(e.propertyName==="value"&&Qo(Vs)){var n=[];s0(n,Vs,e,Kc(e)),Yh(Jv,n)}}function $v(e,n,a){e==="focusin"?(u0(),Gs=n,Vs=a,Gs.attachEvent("onpropertychange",f0)):e==="focusout"&&u0()}function e_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(Vs)}function t_(e,n){if(e==="click")return Qo(n)}function n_(e,n){if(e==="input"||e==="change")return Qo(n)}function i_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:i_;function ks(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Ge.call(n,u)||!Kn(e[u],n[u]))return!1}return!0}function d0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function h0(e,n){var a=d0(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=d0(a)}}function p0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?p0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function m0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_n(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=_n(e.document)}return n}function ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var a_=Gi&&"documentMode"in document&&11>=document.documentMode,Nr=null,lu=null,js=null,cu=!1;function x0(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||Nr==null||Nr!==_n(s)||(s=Nr,"selectionStart"in s&&ou(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),js&&ks(js,s)||(js=s,s=Fl(lu,"onSelect"),0<s.length&&(n=new Zo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Nr)))}function er(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ur={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},uu={},g0={};Gi&&(g0=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function tr(e){if(uu[e])return uu[e];if(!Ur[e])return e;var n=Ur[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in g0)return uu[e]=n[a];return e}var v0=tr("animationend"),_0=tr("animationiteration"),y0=tr("animationstart"),r_=tr("transitionrun"),s_=tr("transitionstart"),o_=tr("transitioncancel"),b0=tr("transitionend"),S0=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function _i(e,n){S0.set(e,n),Ne(n,[e])}var Jo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],Lr=0,du=0;function $o(){for(var e=Lr,n=du=Lr=0;n<e;){var a=oi[n];oi[n++]=null;var s=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}f!==0&&M0(a,u,f)}}function el(e,n,a,s){oi[Lr++]=e,oi[Lr++]=n,oi[Lr++]=a,oi[Lr++]=s,du|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function hu(e,n,a,s){return el(e,n,a,s),tl(e)}function nr(e,n){return el(e,null,null,n),tl(e)}function M0(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ve(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function tl(e){if(50<ho)throw ho=0,Mf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Or={};function l_(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,s){return new l_(e,n,a,s)}function pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function E0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nl(e,n,a,s,u,f){var v=0;if(s=e,typeof e=="function")pu(e)&&(v=1);else if(typeof e=="string")v=hy(e,a,Te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Qn(31,a,n,u),e.elementType=D,e.lanes=f,e;case A:return ir(a.children,u,f,n);case b:v=8,u|=24;break;case _:return e=Qn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case G:return e=Qn(13,a,n,u),e.elementType=G,e.lanes=f,e;case L:return e=Qn(19,a,n,u),e.elementType=L,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break e;case U:v=9;break e;case z:v=11;break e;case I:v=14;break e;case W:v=16,s=null;break e}v=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Qn(v,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function ir(e,n,a,s){return e=Qn(7,e,s,n),e.lanes=a,e}function mu(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function T0(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function xu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var A0=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=A0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pt(n)},A0.set(e,n),n)}return{value:e,source:n,stack:Pt(n)}}var zr=[],Pr=0,il=null,Xs=0,ci=[],ui=0,_a=null,wi=1,Ci="";function ki(e,n){zr[Pr++]=Xs,zr[Pr++]=il,il=e,Xs=n}function R0(e,n,a){ci[ui++]=wi,ci[ui++]=Ci,ci[ui++]=_a,_a=e;var s=wi;e=Ci;var u=32-Ve(s)-1;s&=~(1<<u),a+=1;var f=32-Ve(n)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,wi=1<<32-Ve(n)+u|a<<u|s,Ci=f+e}else wi=1<<f|a<<u|s,Ci=e}function gu(e){e.return!==null&&(ki(e,1),R0(e,1,0))}function vu(e){for(;e===il;)il=zr[--Pr],zr[Pr]=null,Xs=zr[--Pr],zr[Pr]=null;for(;e===_a;)_a=ci[--ui],ci[ui]=null,Ci=ci[--ui],ci[ui]=null,wi=ci[--ui],ci[ui]=null}function w0(e,n){ci[ui++]=wi,ci[ui++]=Ci,ci[ui++]=_a,wi=n.id,Ci=n.overflow,_a=e}var Tn=null,Qt=null,Et=!1,ya=null,fi=!1,_u=Error(r(519));function ba(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qs(li(n,e)),_u}function C0(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[ln]=e,n[pn]=s,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)gt(mo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Kt(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),En(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||qm(n.textContent,a)?(s.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),s.onScroll!=null&&gt("scroll",n),s.onScrollEnd!=null&&gt("scrollend",n),s.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||ba(e,!0)}function D0(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Tn=Tn.return}}function Ir(e){if(e!==Tn)return!1;if(!Et)return D0(e),Et=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bf(e.type,e.memoizedProps)),a=!a),a&&Qt&&ba(e),D0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Qt=tx(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Qt=tx(e)}else n===27?(n=Qt,za(e.type)?(e=kf,kf=null,Qt=e):Qt=n):Qt=Tn?hi(e.stateNode.nextSibling):null;return!0}function ar(){Qt=Tn=null,Et=!1}function yu(){var e=ya;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),ya=null),e}function qs(e){ya===null?ya=[e]:ya.push(e)}var bu=P(null),rr=null,ji=null;function Sa(e,n,a){Se(bu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=bu.current,se(bu)}function Su(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Mu(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Su(f.return,a,e),s||(v=null);break e}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Su(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Br(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=u.type;Kn(u.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(u===ue.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}u=u.return}e!==null&&Mu(n,e,a,s),n.flags|=262144}function al(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){rr=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return N0(rr,e)}function rl(e,n){return rr===null&&sr(e),N0(e,n)}function N0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(e===null)throw Error(r(308));ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ji=ji.next=n;return a}var c_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},u_=o.unstable_scheduleCallback,f_=o.unstable_NormalPriority,cn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new c_,data:new Map,refCount:0}}function Ws(e){e.refCount--,e.refCount===0&&u_(f_,function(){e.controller.abort()})}var Ys=null,Tu=0,Fr=0,Hr=null;function d_(e,n){if(Ys===null){var a=Ys=[];Tu=0,Fr=Cf(),Hr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Tu++,n.then(U0,U0),n}function U0(){if(--Tu===0&&Ys!==null){Hr!==null&&(Hr.status="fulfilled");var e=Ys;Ys=null,Fr=0,Hr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function h_(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var L0=F.S;F.S=function(e,n){xm=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&d_(e,n),L0!==null&&L0(e,n)};var or=P(null);function Au(){var e=or.current;return e!==null?e:Yt.pooledCache}function sl(e,n){n===null?Se(or,or.current):Se(or,n.pool)}function O0(){var e=Au();return e===null?null:{parent:cn._currentValue,pool:e}}var Gr=Error(r(460)),Ru=Error(r(474)),ol=Error(r(542)),ll={then:function(){}};function z0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function P0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,B0(e),e;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(e=Yt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,B0(e),e}throw cr=n,Gr}}function lr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(cr=a,Gr):a}}var cr=null;function I0(){if(cr===null)throw Error(r(459));var e=cr;return cr=null,e}function B0(e){if(e===Gr||e===ol)throw Error(r(483))}var Vr=null,Zs=0;function cl(e){var n=Zs;return Zs+=1,Vr===null&&(Vr=[]),P0(Vr,e,n)}function Ks(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ul(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function F0(e){function n(q,k){if(e){var Q=q.deletions;Q===null?(q.deletions=[k],q.flags|=16):Q.push(k)}}function a(q,k){if(!e)return null;for(;k!==null;)n(q,k),k=k.sibling;return null}function s(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function u(q,k){return q=Vi(q,k),q.index=0,q.sibling=null,q}function f(q,k,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<k?(q.flags|=67108866,k):Q):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function v(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,k,Q,he){return k===null||k.tag!==6?(k=mu(Q,q.mode,he),k.return=q,k):(k=u(k,Q),k.return=q,k)}function B(q,k,Q,he){var Ke=Q.type;return Ke===A?fe(q,k,Q.props.children,he,Q.key):k!==null&&(k.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===W&&lr(Ke)===k.type)?(k=u(k,Q.props),Ks(k,Q),k.return=q,k):(k=nl(Q.type,Q.key,Q.props,null,q.mode,he),Ks(k,Q),k.return=q,k)}function ee(q,k,Q,he){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=xu(Q,q.mode,he),k.return=q,k):(k=u(k,Q.children||[]),k.return=q,k)}function fe(q,k,Q,he,Ke){return k===null||k.tag!==7?(k=ir(Q,q.mode,he,Ke),k.return=q,k):(k=u(k,Q),k.return=q,k)}function me(q,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=mu(""+k,q.mode,Q),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return Q=nl(k.type,k.key,k.props,null,q.mode,Q),Ks(Q,k),Q.return=q,Q;case E:return k=xu(k,q.mode,Q),k.return=q,k;case W:return k=lr(k),me(q,k,Q)}if(de(k)||te(k))return k=ir(k,q.mode,Q,null),k.return=q,k;if(typeof k.then=="function")return me(q,cl(k),Q);if(k.$$typeof===N)return me(q,rl(q,k),Q);ul(q,k)}return null}function ie(q,k,Q,he){var Ke=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ke!==null?null:T(q,k,""+Q,he);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return Q.key===Ke?B(q,k,Q,he):null;case E:return Q.key===Ke?ee(q,k,Q,he):null;case W:return Q=lr(Q),ie(q,k,Q,he)}if(de(Q)||te(Q))return Ke!==null?null:fe(q,k,Q,he,null);if(typeof Q.then=="function")return ie(q,k,cl(Q),he);if(Q.$$typeof===N)return ie(q,k,rl(q,Q),he);ul(q,Q)}return null}function oe(q,k,Q,he,Ke){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return q=q.get(Q)||null,T(k,q,""+he,Ke);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case S:return q=q.get(he.key===null?Q:he.key)||null,B(k,q,he,Ke);case E:return q=q.get(he.key===null?Q:he.key)||null,ee(k,q,he,Ke);case W:return he=lr(he),oe(q,k,Q,he,Ke)}if(de(he)||te(he))return q=q.get(Q)||null,fe(k,q,he,Ke,null);if(typeof he.then=="function")return oe(q,k,Q,cl(he),Ke);if(he.$$typeof===N)return oe(q,k,Q,rl(k,he),Ke);ul(k,he)}return null}function Fe(q,k,Q,he){for(var Ke=null,Nt=null,ke=k,ut=k=0,_t=null;ke!==null&&ut<Q.length;ut++){ke.index>ut?(_t=ke,ke=null):_t=ke.sibling;var Ut=ie(q,ke,Q[ut],he);if(Ut===null){ke===null&&(ke=_t);break}e&&ke&&Ut.alternate===null&&n(q,ke),k=f(Ut,k,ut),Nt===null?Ke=Ut:Nt.sibling=Ut,Nt=Ut,ke=_t}if(ut===Q.length)return a(q,ke),Et&&ki(q,ut),Ke;if(ke===null){for(;ut<Q.length;ut++)ke=me(q,Q[ut],he),ke!==null&&(k=f(ke,k,ut),Nt===null?Ke=ke:Nt.sibling=ke,Nt=ke);return Et&&ki(q,ut),Ke}for(ke=s(ke);ut<Q.length;ut++)_t=oe(ke,q,ut,Q[ut],he),_t!==null&&(e&&_t.alternate!==null&&ke.delete(_t.key===null?ut:_t.key),k=f(_t,k,ut),Nt===null?Ke=_t:Nt.sibling=_t,Nt=_t);return e&&ke.forEach(function(Ha){return n(q,Ha)}),Et&&ki(q,ut),Ke}function et(q,k,Q,he){if(Q==null)throw Error(r(151));for(var Ke=null,Nt=null,ke=k,ut=k=0,_t=null,Ut=Q.next();ke!==null&&!Ut.done;ut++,Ut=Q.next()){ke.index>ut?(_t=ke,ke=null):_t=ke.sibling;var Ha=ie(q,ke,Ut.value,he);if(Ha===null){ke===null&&(ke=_t);break}e&&ke&&Ha.alternate===null&&n(q,ke),k=f(Ha,k,ut),Nt===null?Ke=Ha:Nt.sibling=Ha,Nt=Ha,ke=_t}if(Ut.done)return a(q,ke),Et&&ki(q,ut),Ke;if(ke===null){for(;!Ut.done;ut++,Ut=Q.next())Ut=me(q,Ut.value,he),Ut!==null&&(k=f(Ut,k,ut),Nt===null?Ke=Ut:Nt.sibling=Ut,Nt=Ut);return Et&&ki(q,ut),Ke}for(ke=s(ke);!Ut.done;ut++,Ut=Q.next())Ut=oe(ke,q,ut,Ut.value,he),Ut!==null&&(e&&Ut.alternate!==null&&ke.delete(Ut.key===null?ut:Ut.key),k=f(Ut,k,ut),Nt===null?Ke=Ut:Nt.sibling=Ut,Nt=Ut);return e&&ke.forEach(function(Ey){return n(q,Ey)}),Et&&ki(q,ut),Ke}function Vt(q,k,Q,he){if(typeof Q=="object"&&Q!==null&&Q.type===A&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:e:{for(var Ke=Q.key;k!==null;){if(k.key===Ke){if(Ke=Q.type,Ke===A){if(k.tag===7){a(q,k.sibling),he=u(k,Q.props.children),he.return=q,q=he;break e}}else if(k.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===W&&lr(Ke)===k.type){a(q,k.sibling),he=u(k,Q.props),Ks(he,Q),he.return=q,q=he;break e}a(q,k);break}else n(q,k);k=k.sibling}Q.type===A?(he=ir(Q.props.children,q.mode,he,Q.key),he.return=q,q=he):(he=nl(Q.type,Q.key,Q.props,null,q.mode,he),Ks(he,Q),he.return=q,q=he)}return v(q);case E:e:{for(Ke=Q.key;k!==null;){if(k.key===Ke)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(q,k.sibling),he=u(k,Q.children||[]),he.return=q,q=he;break e}else{a(q,k);break}else n(q,k);k=k.sibling}he=xu(Q,q.mode,he),he.return=q,q=he}return v(q);case W:return Q=lr(Q),Vt(q,k,Q,he)}if(de(Q))return Fe(q,k,Q,he);if(te(Q)){if(Ke=te(Q),typeof Ke!="function")throw Error(r(150));return Q=Ke.call(Q),et(q,k,Q,he)}if(typeof Q.then=="function")return Vt(q,k,cl(Q),he);if(Q.$$typeof===N)return Vt(q,k,rl(q,Q),he);ul(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(q,k.sibling),he=u(k,Q),he.return=q,q=he):(a(q,k),he=mu(Q,q.mode,he),he.return=q,q=he),v(q)):a(q,k)}return function(q,k,Q,he){try{Zs=0;var Ke=Vt(q,k,Q,he);return Vr=null,Ke}catch(ke){if(ke===Gr||ke===ol)throw ke;var Nt=Qn(29,ke,null,q.mode);return Nt.lanes=he,Nt.return=q,Nt}finally{}}}var ur=F0(!0),H0=F0(!1),Ma=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ot&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=tl(e),M0(e,null,a),n}return el(e,s,n,a),tl(e)}function Qs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ns(e,a)}}function Du(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Nu=!1;function Js(){if(Nu){var e=Hr;if(e!==null)throw e}}function $s(e,n,a,s){Nu=!1;var u=e.updateQueue;Ma=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,ee=B.next;B.next=null,v===null?f=ee:v.next=ee,v=B;var fe=e.alternate;fe!==null&&(fe=fe.updateQueue,T=fe.lastBaseUpdate,T!==v&&(T===null?fe.firstBaseUpdate=ee:T.next=ee,fe.lastBaseUpdate=B))}if(f!==null){var me=u.baseState;v=0,fe=ee=B=null,T=f;do{var ie=T.lane&-536870913,oe=ie!==T.lane;if(oe?(vt&ie)===ie:(s&ie)===ie){ie!==0&&ie===Fr&&(Nu=!0),fe!==null&&(fe=fe.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Fe=e,et=T;ie=n;var Vt=a;switch(et.tag){case 1:if(Fe=et.payload,typeof Fe=="function"){me=Fe.call(Vt,me,ie);break e}me=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=et.payload,ie=typeof Fe=="function"?Fe.call(Vt,me,ie):Fe,ie==null)break e;me=g({},me,ie);break e;case 2:Ma=!0}}ie=T.callback,ie!==null&&(e.flags|=64,oe&&(e.flags|=8192),oe=u.callbacks,oe===null?u.callbacks=[ie]:oe.push(ie))}else oe={lane:ie,tag:T.tag,payload:T.payload,callback:T.callback,next:null},fe===null?(ee=fe=oe,B=me):fe=fe.next=oe,v|=ie;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;oe=T,T=oe.next,oe.next=null,u.lastBaseUpdate=oe,u.shared.pending=null}}while(!0);fe===null&&(B=me),u.baseState=B,u.firstBaseUpdate=ee,u.lastBaseUpdate=fe,f===null&&(u.shared.lanes=0),Da|=v,e.lanes=v,e.memoizedState=me}}function G0(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function V0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)G0(a[e],n)}var kr=P(null),fl=P(0);function k0(e,n){e=ea,Se(fl,e),Se(kr,n),ea=e|n.baseLanes}function Uu(){Se(fl,ea),Se(kr,kr.current)}function Lu(){ea=fl.current,se(kr),se(fl)}var Jn=P(null),di=null;function Aa(e){var n=e.alternate;Se(rn,rn.current&1),Se(Jn,e),di===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(di=e)}function Ou(e){Se(rn,rn.current),Se(Jn,e),di===null&&(di=e)}function j0(e){e.tag===22?(Se(rn,rn.current),Se(Jn,e),di===null&&(di=e)):Ra()}function Ra(){Se(rn,rn.current),Se(Jn,Jn.current)}function $n(e){se(Jn),di===e&&(di=null),se(rn)}var rn=P(0);function dl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gf(a)||Vf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,st=null,Ht=null,un=null,hl=!1,jr=!1,fr=!1,pl=0,eo=0,Xr=null,p_=0;function tn(){throw Error(r(321))}function zu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function Pu(e,n,a,s,u,f){return qi=f,st=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?Rp:Qu,fr=!1,f=a(s,u),fr=!1,jr&&(f=q0(n,a,s,u)),X0(e),f}function X0(e){F.H=io;var n=Ht!==null&&Ht.next!==null;if(qi=0,un=Ht=st=null,hl=!1,eo=0,Xr=null,n)throw Error(r(300));e===null||fn||(e=e.dependencies,e!==null&&al(e)&&(fn=!0))}function q0(e,n,a,s){st=e;var u=0;do{if(jr&&(Xr=null),eo=0,jr=!1,25<=u)throw Error(r(301));if(u+=1,un=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=wp,f=n(a,s)}while(jr);return f}function m_(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?to(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(st.flags|=1024),n}function Iu(){var e=pl!==0;return pl=0,e}function Bu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Fu(e){if(hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hl=!1}qi=0,un=Ht=st=null,jr=!1,eo=pl=0,Xr=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?st.memoizedState=un=e:un=un.next=e,un}function sn(){if(Ht===null){var e=st.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=un===null?st.memoizedState:un.next;if(n!==null)un=n,Ht=e;else{if(e===null)throw st.alternate===null?Error(r(467)):Error(r(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},un===null?st.memoizedState=un=e:un=un.next=e}return un}function ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(e){var n=eo;return eo+=1,Xr===null&&(Xr=[]),e=P0(Xr,e,n),n=st,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Rp:Qu),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return to(e);if(e.$$typeof===N)return An(e)}throw Error(r(438,String(e)))}function Hu(e){var n=null,a=st.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=st.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ml(),st.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=C;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function gl(e){var n=sn();return Gu(n,Ht,e)}function Gu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=v=null,B=null,ee=n,fe=!1;do{var me=ee.lane&-536870913;if(me!==ee.lane?(vt&me)===me:(qi&me)===me){var ie=ee.revertLane;if(ie===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),me===Fr&&(fe=!0);else if((qi&ie)===ie){ee=ee.next,ie===Fr&&(fe=!0);continue}else me={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(T=B=me,v=f):B=B.next=me,st.lanes|=ie,Da|=ie;me=ee.action,fr&&a(f,me),f=ee.hasEagerState?ee.eagerState:a(f,me)}else ie={lane:me,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(T=B=ie,v=f):B=B.next=ie,st.lanes|=me,Da|=me;ee=ee.next}while(ee!==null&&ee!==n);if(B===null?v=f:B.next=T,!Kn(f,e.memoizedState)&&(fn=!0,fe&&(a=Hr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Vu(e){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Kn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function W0(e,n,a){var s=st,u=sn(),f=Et;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!Kn((Ht||u).memoizedState,a);if(v&&(u.memoizedState=a,fn=!0),u=u.queue,Xu(K0.bind(null,s,u,e),[e]),u.getSnapshot!==n||v||un!==null&&un.memoizedState.tag&1){if(s.flags|=2048,qr(9,{destroy:void 0},Z0.bind(null,s,u,a,n),null),Yt===null)throw Error(r(349));f||(qi&127)!==0||Y0(s,n,a)}return a}function Y0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=st.updateQueue,n===null?(n=ml(),st.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Z0(e,n,a,s){n.value=a,n.getSnapshot=s,Q0(n)&&J0(e)}function K0(e,n,a){return a(function(){Q0(n)&&J0(e)})}function Q0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function J0(e){var n=nr(e,2);n!==null&&jn(n,e,2)}function ku(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),fr){We(!0);try{a()}finally{We(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function $0(e,n,a,s){return e.baseState=a,Gu(e,Ht,typeof s=="function"?s:Wi)}function x_(e,n,a,s,u){if(yl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};F.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,ep(n,f)):(f.next=a.next,n.pending=a.next=f)}}function ep(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=F.T,v={};F.T=v;try{var T=a(u,s),B=F.S;B!==null&&B(v,T),tp(e,n,T)}catch(ee){ju(e,n,ee)}finally{f!==null&&v.types!==null&&(f.types=v.types),F.T=f}}else try{f=a(u,s),tp(e,n,f)}catch(ee){ju(e,n,ee)}}function tp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){np(e,n,s)},function(s){return ju(e,n,s)}):np(e,n,a)}function np(e,n,a){n.status="fulfilled",n.value=a,ip(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,ep(e,a)))}function ju(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,ip(n),n=n.next;while(n!==s)}e.action=null}function ip(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ap(e,n){return n}function rp(e,n){if(Et){var a=Yt.formState;if(a!==null){e:{var s=st;if(Et){if(Qt){t:{for(var u=Qt,f=fi;u.nodeType!==8;){if(!f){u=null;break t}if(u=hi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qt=hi(u.nextSibling),s=u.data==="F!";break e}}ba(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ap,lastRenderedState:n},a.queue=s,a=Ep.bind(null,st,s),s.dispatch=a,s=ku(!1),f=Ku.bind(null,st,!1,s.queue),s=On(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=x_.bind(null,st,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function sp(e){var n=sn();return op(n,Ht,e)}function op(e,n,a){if(n=Gu(e,n,ap)[0],e=gl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(v){throw v===Gr?ol:v}else s=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(st.flags|=2048,qr(9,{destroy:void 0},g_.bind(null,u,a),null)),[s,f,e]}function g_(e,n){e.action=n}function lp(e){var n=sn(),a=Ht;if(a!==null)return op(n,a,e);sn(),n=n.memoizedState,a=sn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function qr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=st.updateQueue,n===null&&(n=ml(),st.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function cp(){return sn().memoizedState}function vl(e,n,a,s){var u=On();st.flags|=e,u.memoizedState=qr(1|n,{destroy:void 0},a,s===void 0?null:s)}function _l(e,n,a,s){var u=sn();s=s===void 0?null:s;var f=u.memoizedState.inst;Ht!==null&&s!==null&&zu(s,Ht.memoizedState.deps)?u.memoizedState=qr(n,f,a,s):(st.flags|=e,u.memoizedState=qr(1|n,f,a,s))}function up(e,n){vl(8390656,8,e,n)}function Xu(e,n){_l(2048,8,e,n)}function v_(e){st.flags|=4;var n=st.updateQueue;if(n===null)n=ml(),st.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function fp(e){var n=sn().memoizedState;return v_({ref:n,nextImpl:e}),function(){if((Ot&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function dp(e,n){return _l(4,2,e,n)}function hp(e,n){return _l(4,4,e,n)}function pp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function mp(e,n,a){a=a!=null?a.concat([e]):null,_l(4,4,pp.bind(null,n,e),a)}function qu(){}function xp(e,n){var a=sn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&zu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function gp(e,n){var a=sn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&zu(n,s[1]))return s[0];if(s=e(),fr){We(!0);try{e()}finally{We(!1)}}return a.memoizedState=[s,n],s}function Wu(e,n,a){return a===void 0||(qi&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=vm(),st.lanes|=e,Da|=e,a)}function vp(e,n,a,s){return Kn(a,n)?a:kr.current!==null?(e=Wu(e,a,s),Kn(e,n)||(fn=!0),e):(qi&42)===0||(qi&1073741824)!==0&&(vt&261930)===0?(fn=!0,e.memoizedState=a):(e=vm(),st.lanes|=e,Da|=e,n)}function _p(e,n,a,s,u){var f=K.p;K.p=f!==0&&8>f?f:8;var v=F.T,T={};F.T=T,Ku(e,!1,n,a);try{var B=u(),ee=F.S;if(ee!==null&&ee(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var fe=h_(B,s);no(e,n,fe,ni(e))}else no(e,n,s,ni(e))}catch(me){no(e,n,{then:function(){},status:"rejected",reason:me},ni())}finally{K.p=f,v!==null&&T.types!==null&&(v.types=T.types),F.T=v}}function __(){}function Yu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=yp(e).queue;_p(e,u,n,Z,a===null?__:function(){return bp(e),a(s)})}function yp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function bp(e){var n=yp(e);n.next===null&&(n=e.alternate.memoizedState),no(e,n.next.queue,{},ni())}function Zu(){return An(yo)}function Sp(){return sn().memoizedState}function Mp(){return sn().memoizedState}function y_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=Ea(a);var s=Ta(n,e,a);s!==null&&(jn(s,n,a),Qs(s,n,a)),n={cache:Eu()},e.payload=n;return}n=n.return}}function b_(e,n,a){var s=ni();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yl(e)?Tp(n,a):(a=hu(e,n,a,s),a!==null&&(jn(a,e,s),Ap(a,n,s)))}function Ep(e,n,a){var s=ni();no(e,n,a,s)}function no(e,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(yl(e))Tp(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,Kn(T,v))return el(e,n,u,0),Yt===null&&$o(),!1}catch{}finally{}if(a=hu(e,n,u,s),a!==null)return jn(a,e,s),Ap(a,n,s),!0}return!1}function Ku(e,n,a,s){if(s={lane:2,revertLane:Cf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},yl(e)){if(n)throw Error(r(479))}else n=hu(e,a,s,2),n!==null&&jn(n,e,2)}function yl(e){var n=e.alternate;return e===st||n!==null&&n===st}function Tp(e,n){jr=hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Ap(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ns(e,a)}}var io={readContext:An,use:xl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};io.useEffectEvent=tn;var Rp={readContext:An,use:xl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:up,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,vl(4194308,4,pp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return vl(4194308,4,e,n)},useInsertionEffect:function(e,n){vl(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var s=e();if(fr){We(!0);try{e()}finally{We(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=On();if(a!==void 0){var u=a(n);if(fr){We(!0);try{a(n)}finally{We(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=b_.bind(null,st,e),[s.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=ku(e);var n=e.queue,a=Ep.bind(null,st,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(e,n){var a=On();return Wu(a,e,n)},useTransition:function(){var e=ku(!1);return e=_p.bind(null,st,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=st,u=On();if(Et){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(vt&127)!==0||Y0(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,up(K0.bind(null,s,f,e),[e]),s.flags|=2048,qr(9,{destroy:void 0},Z0.bind(null,s,f,a,n),null),a},useId:function(){var e=On(),n=Yt.identifierPrefix;if(Et){var a=Ci,s=wi;a=(s&~(1<<32-Ve(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=p_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Zu,useFormState:rp,useActionState:rp,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,st,!0,a),a.dispatch=n,[e,n]},useMemoCache:Hu,useCacheRefresh:function(){return On().memoizedState=y_.bind(null,st)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Qu={readContext:An,use:xl,useCallback:xp,useContext:An,useEffect:Xu,useImperativeHandle:mp,useInsertionEffect:dp,useLayoutEffect:hp,useMemo:gp,useReducer:gl,useRef:cp,useState:function(){return gl(Wi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=sn();return vp(a,Ht.memoizedState,e,n)},useTransition:function(){var e=gl(Wi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:W0,useId:Sp,useHostTransitionStatus:Zu,useFormState:sp,useActionState:sp,useOptimistic:function(e,n){var a=sn();return $0(a,Ht,e,n)},useMemoCache:Hu,useCacheRefresh:Mp};Qu.useEffectEvent=fp;var wp={readContext:An,use:xl,useCallback:xp,useContext:An,useEffect:Xu,useImperativeHandle:mp,useInsertionEffect:dp,useLayoutEffect:hp,useMemo:gp,useReducer:Vu,useRef:cp,useState:function(){return Vu(Wi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=sn();return Ht===null?Wu(a,e,n):vp(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Vu(Wi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:W0,useId:Sp,useHostTransitionStatus:Zu,useFormState:lp,useActionState:lp,useOptimistic:function(e,n){var a=sn();return Ht!==null?$0(a,Ht,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Hu,useCacheRefresh:Mp};wp.useEffectEvent=fp;function Ju(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $u={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ni(),u=Ea(s);u.payload=n,a!=null&&(u.callback=a),n=Ta(e,u,s),n!==null&&(jn(n,e,s),Qs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ni(),u=Ea(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ta(e,u,s),n!==null&&(jn(n,e,s),Qs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),s=Ea(a);s.tag=2,n!=null&&(s.callback=n),n=Ta(e,s,a),n!==null&&(jn(n,e,a),Qs(n,e,a))}};function Cp(e,n,a,s,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!ks(a,s)||!ks(u,f):!0}function Dp(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&$u.enqueueReplaceState(n,n.state,null)}function dr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Np(e){Jo(e)}function Up(e){console.error(e)}function Lp(e){Jo(e)}function bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Op(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ef(e,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){bl(e,n)},a}function zp(e){return e=Ea(e),e.tag=3,e}function Pp(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){Op(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Op(n,a,s),typeof u!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function S_(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Br(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?Ll():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Af(e,s,u)),!1;case 22:return a.flags|=65536,s===ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Af(e,s,u)),!1}throw Error(r(435,a.tag))}return Af(e,s,u),Ll(),!1}if(Et)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==_u&&(e=Error(r(422),{cause:s}),qs(li(e,a)))):(s!==_u&&(n=Error(r(423),{cause:s}),qs(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=li(s,a),u=ef(e.stateNode,s,u),Du(e,u),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:s});if(f=li(f,a),fo===null?fo=[f]:fo.push(f),nn!==4&&(nn=2),n===null)return!0;s=li(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ef(a.stateNode,s,e),Du(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Na===null||!Na.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=zp(u),Pp(u,e,a,s),Du(a,u),!1}a=a.return}while(a!==null);return!1}var tf=Error(r(461)),fn=!1;function Rn(e,n,a,s){n.child=e===null?H0(n,null,a,s):ur(n,e.child,a,s)}function Ip(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return sr(n),s=Pu(e,n,a,v,f,u),T=Iu(),e!==null&&!fn?(Bu(e,n,u),Yi(e,n,u)):(Et&&T&&gu(n),n.flags|=1,Rn(e,n,s,u),n.child)}function Bp(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Fp(e,n,f,s,u)):(e=nl(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!uf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ks,a(v,s)&&e.ref===n.ref)return Yi(e,n,u)}return n.flags|=1,e=Vi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Fp(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(ks(f,s)&&e.ref===n.ref)if(fn=!1,n.pendingProps=s=f,uf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,Yi(e,n,u)}return nf(e,n,a,s,u)}function Hp(e,n,a,s){var u=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Gp(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&sl(n,f!==null?f.cachePool:null),f!==null?k0(n,f):Uu(),j0(n);else return s=n.lanes=536870912,Gp(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(sl(n,f.cachePool),k0(n,f),Ra(),n.memoizedState=null):(e!==null&&sl(n,null),Uu(),Ra());return Rn(e,n,u,a),n.child}function ao(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gp(e,n,a,s,u){var f=Au();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&sl(n,null),Uu(),j0(n),e!==null&&Br(e,n,s,!0),n.childLanes=u,null}function Sl(e,n){return n=El({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Vp(e,n,a){return ur(n,e.child,null,a),e=Sl(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function M_(e,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Et){if(s.mode==="hidden")return e=Sl(n,s),n.lanes=536870912,ao(null,e);if(Ou(n),(e=Qt)?(e=ex(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:_a!==null?{id:wi,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=T0(e),a.return=n,n.child=a,Tn=n,Qt=null)):e=null,e===null)throw ba(n);return n.lanes=536870912,null}return Sl(n,s)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Ou(n),u)if(n.flags&256)n.flags&=-257,n=Vp(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||Br(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(s=Yt,s!==null&&(v=Us(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,nr(e,v),jn(s,e,v),tf;Ll(),n=Vp(e,n,a)}else e=f.treeContext,Qt=hi(v.nextSibling),Tn=n,Et=!0,ya=null,fi=!1,e!==null&&w0(n,e),n=Sl(n,s),n.flags|=4096;return n}return e=Vi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ml(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function nf(e,n,a,s,u){return sr(n),a=Pu(e,n,a,s,void 0,u),s=Iu(),e!==null&&!fn?(Bu(e,n,u),Yi(e,n,u)):(Et&&s&&gu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function kp(e,n,a,s,u,f){return sr(n),n.updateQueue=null,a=q0(n,s,a,u),X0(e),s=Iu(),e!==null&&!fn?(Bu(e,n,f),Yi(e,n,f)):(Et&&s&&gu(n),n.flags|=1,Rn(e,n,a,f),n.child)}function jp(e,n,a,s,u){if(sr(n),n.stateNode===null){var f=Or,v=a.contextType;typeof v=="object"&&v!==null&&(f=An(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=$u,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},wu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?An(v):Or,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Ju(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&$u.enqueueReplaceState(f,f.state,null),$s(n,s,f,u),Js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,B=dr(a,T);f.props=B;var ee=f.context,fe=a.contextType;v=Or,typeof fe=="object"&&fe!==null&&(v=An(fe));var me=a.getDerivedStateFromProps;fe=typeof me=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,fe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||ee!==v)&&Dp(n,f,s,v),Ma=!1;var ie=n.memoizedState;f.state=ie,$s(n,s,f,u),Js(),ee=n.memoizedState,T||ie!==ee||Ma?(typeof me=="function"&&(Ju(n,a,me,s),ee=n.memoizedState),(B=Ma||Cp(n,a,B,s,ie,ee,v))?(fe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=ee),f.props=s,f.state=ee,f.context=v,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Cu(e,n),v=n.memoizedProps,fe=dr(a,v),f.props=fe,me=n.pendingProps,ie=f.context,ee=a.contextType,B=Or,typeof ee=="object"&&ee!==null&&(B=An(ee)),T=a.getDerivedStateFromProps,(ee=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==me||ie!==B)&&Dp(n,f,s,B),Ma=!1,ie=n.memoizedState,f.state=ie,$s(n,s,f,u),Js();var oe=n.memoizedState;v!==me||ie!==oe||Ma||e!==null&&e.dependencies!==null&&al(e.dependencies)?(typeof T=="function"&&(Ju(n,a,T,s),oe=n.memoizedState),(fe=Ma||Cp(n,a,fe,s,ie,oe,B)||e!==null&&e.dependencies!==null&&al(e.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,oe,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,oe,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=oe),f.props=s,f.state=oe,f.context=B,s=fe):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ml(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=ur(n,e.child,null,u),n.child=ur(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Yi(e,n,u),e}function Xp(e,n,a,s){return ar(),n.flags|=256,Rn(e,n,a,s),n.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rf(e){return{baseLanes:e,cachePool:O0()}}function sf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ti),e}function qp(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Et){if(u?Aa(n):Ra(),(e=Qt)?(e=ex(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:_a!==null?{id:wi,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=T0(e),a.return=n,n.child=a,Tn=n,Qt=null)):e=null,e===null)throw ba(n);return Vf(e)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(Ra(),u=n.mode,T=El({mode:"hidden",children:T},u),s=ir(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=rf(a),s.childLanes=sf(e,v,a),n.memoizedState=af,ao(null,s)):(Aa(n),of(n,T))}var B=e.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Aa(n),n.flags&=-257,n=lf(e,n,a)):n.memoizedState!==null?(Ra(),n.child=e.child,n.flags|=128,n=null):(Ra(),T=s.fallback,u=n.mode,s=El({mode:"visible",children:s.children},u),T=ir(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,ur(n,e.child,null,a),s=n.child,s.memoizedState=rf(a),s.childLanes=sf(e,v,a),n.memoizedState=af,n=ao(null,s));else if(Aa(n),Vf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var ee=v.dgst;v=ee,s=Error(r(419)),s.stack="",s.digest=v,qs({value:s,source:null,stack:null}),n=lf(e,n,a)}else if(fn||Br(e,n,a,!1),v=(a&e.childLanes)!==0,fn||v){if(v=Yt,v!==null&&(s=Us(v,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,nr(e,s),jn(v,e,s),tf;Gf(T)||Ll(),n=lf(e,n,a)}else Gf(T)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Qt=hi(T.nextSibling),Tn=n,Et=!0,ya=null,fi=!1,e!==null&&w0(n,e),n=of(n,s.children),n.flags|=4096);return n}return u?(Ra(),T=s.fallback,u=n.mode,B=e.child,ee=B.sibling,s=Vi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,ee!==null?T=Vi(ee,T):(T=ir(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,ao(null,s),s=n.child,T=e.child.memoizedState,T===null?T=rf(a):(u=T.cachePool,u!==null?(B=cn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=O0(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=sf(e,v,a),n.memoizedState=af,ao(e.child,s)):(Aa(n),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function of(e,n){return n=El({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function El(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function lf(e,n,a){return ur(n,e.child,null,a),e=of(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wp(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Su(e.return,n,a)}function cf(e,n,a,s,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Yp(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var v=rn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,Se(rn,v),Rn(e,n,s,a),s=Et?Xs:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wp(e,a,n);else if(e.tag===19)Wp(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&dl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),cf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&dl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}cf(n,!0,a,null,f,s);break;case"together":cf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Da|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Br(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Vi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function uf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&al(e)))}function E_(e,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),Sa(n,cn,e.memoizedState.cache),ar();break;case 27:case 5:je(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ou(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Aa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?qp(e,n,a):(Aa(n),e=Yi(e,n,a),e!==null?e.sibling:null);Aa(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Br(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Yp(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(rn,rn.current),s)break;return null;case 22:return n.lanes=0,Hp(e,n,a,n.pendingProps);case 24:Sa(n,cn,e.memoizedState.cache)}return Yi(e,n,a)}function Zp(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!uf(e,a)&&(n.flags&128)===0)return fn=!1,E_(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Et&&(n.flags&1048576)!==0&&R0(n,Xs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=lr(n.elementType),n.type=e,typeof e=="function")pu(e)?(s=dr(e,s),n.tag=1,n=jp(null,n,e,s,a)):(n.tag=0,n=nf(null,n,e,s,a));else{if(e!=null){var u=e.$$typeof;if(u===z){n.tag=11,n=Ip(null,n,e,s,a);break e}else if(u===I){n.tag=14,n=Bp(null,n,e,s,a);break e}}throw n=xe(e)||e,Error(r(306,n,""))}}return n;case 0:return nf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=dr(s,n.pendingProps),jp(e,n,s,u,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Cu(e,n),$s(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Sa(n,cn,s),s!==f.cache&&Mu(n,[cn],a,!0),Js(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Xp(e,n,s,a);break e}else if(s!==u){u=li(Error(r(424)),n),qs(u),n=Xp(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qt=hi(e.firstChild),Tn=n,Et=!0,ya=null,fi=!0,a=H0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ar(),s===u){n=Yi(e,n,a);break e}Rn(e,n,s,a)}n=n.child}return n;case 26:return Ml(e,n),e===null?(a=sx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,e=n.pendingProps,s=Hl(ae.current).createElement(a),s[ln]=n,s[pn]=e,wn(s,a,e),ne(s),n.stateNode=s):n.memoizedState=sx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return je(n),e===null&&Et&&(s=n.stateNode=ix(n.type,n.pendingProps,ae.current),Tn=n,fi=!0,u=Qt,za(n.type)?(kf=u,Qt=hi(s.firstChild)):Qt=u),Rn(e,n,n.pendingProps.children,a),Ml(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Et&&((u=s=Qt)&&(s=ey(s,n.type,n.pendingProps,fi),s!==null?(n.stateNode=s,Tn=n,Qt=hi(s.firstChild),fi=!1,u=!0):u=!1),u||ba(n)),je(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,s=f.children,Bf(u,f)?s=null:v!==null&&Bf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Pu(e,n,m_,null,null,a),yo._currentValue=u),Ml(e,n),Rn(e,n,s,a),n.child;case 6:return e===null&&Et&&((e=a=Qt)&&(a=ty(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Tn=n,Qt=null,e=!0):e=!1),e||ba(n)),null;case 13:return qp(e,n,a);case 4:return Ce(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=ur(n,null,s,a):Rn(e,n,s,a),n.child;case 11:return Ip(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Sa(n,n.type,s.value),Rn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,sr(n),u=An(u),s=s(u),n.flags|=1,Rn(e,n,s,a),n.child;case 14:return Bp(e,n,n.type,n.pendingProps,a);case 15:return Fp(e,n,n.type,n.pendingProps,a);case 19:return Yp(e,n,a);case 31:return M_(e,n,a);case 22:return Hp(e,n,a,n.pendingProps);case 24:return sr(n),s=An(cn),e===null?(u=Au(),u===null&&(u=Yt,f=Eu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},wu(n),Sa(n,cn,u)):((e.lanes&a)!==0&&(Cu(e,n),$s(n,null,null,a),Js()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Sa(n,cn,s)):(s=f.cache,Sa(n,cn,s),s!==u.cache&&Mu(n,[cn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Zi(e){e.flags|=4}function ff(e,n,a,s,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Sm())e.flags|=8192;else throw cr=ll,Ru}else e.flags&=-16777217}function Kp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fx(n))if(Sm())e.flags|=8192;else throw cr=ll,Ru}function Tl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ft():536870912,e.lanes|=n,Kr|=n)}function ro(e,n){if(!Et)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Jt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function T_(e,n,a){var s=n.pendingProps;switch(vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Xi(cn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ir(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yu())),Jt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Zi(n),f!==null?(Jt(n),Kp(n,f)):(Jt(n),ff(n,u,null,s,a))):f?f!==e.memoizedState?(Zi(n),Jt(n),Kp(n,f)):(Jt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Zi(n),Jt(n),ff(n,u,e,s,a)),null;case 27:if(lt(n),a=ae.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Zi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}e=Te.current,Ir(n)?C0(n):(e=ix(u,s,a),n.stateNode=e,Zi(n))}return Jt(n),null;case 5:if(lt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Zi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}if(f=Te.current,Ir(n))C0(n);else{var v=Hl(ae.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}f[ln]=n,f[pn]=s;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(wn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Zi(n)}}return Jt(n),ff(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Zi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ae.current,Ir(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||qm(e.nodeValue,a)),e||ba(n,!0)}else e=Hl(e).createTextNode(s),e[ln]=n,n.stateNode=e}return Jt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Ir(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[ln]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),e=!1}else a=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Jt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ir(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ln]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),Jt(n),null);case 4:return He(),e===null&&Lf(n.stateNode.containerInfo),Jt(n),null;case 10:return Xi(n.type),Jt(n),null;case 19:if(se(rn),s=n.memoizedState,s===null)return Jt(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)ro(s,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=dl(e),f!==null){for(n.flags|=128,ro(s,!1),e=f.updateQueue,n.updateQueue=e,Tl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)E0(a,e),a=a.sibling;return Se(rn,rn.current&1|2),Et&&ki(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&M()>Dl&&(n.flags|=128,u=!0,ro(s,!1),n.lanes=4194304)}else{if(!u)if(e=dl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Tl(n,e),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Et)return Jt(n),null}else 2*M()-s.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,u=!0,ro(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=M(),e.sibling=null,a=rn.current,Se(rn,u?a&1|2:a&1),Et&&ki(n,s.treeForkCount),e):(Jt(n),null);case 22:case 23:return $n(n),Lu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&se(or),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(cn),Jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function A_(e,n){switch(vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(cn),He(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return lt(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(r(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return se(rn),null;case 4:return He(),null;case 10:return Xi(n.type),null;case 22:case 23:return $n(n),Lu(),e!==null&&se(or),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(cn),null;case 25:return null;default:return null}}function Qp(e,n){switch(vu(n),n.tag){case 3:Xi(cn),He();break;case 26:case 27:case 5:lt(n);break;case 4:He();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:se(rn);break;case 10:Xi(n.type);break;case 22:case 23:$n(n),Lu(),e!==null&&se(or);break;case 24:Xi(cn)}}function so(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==u)}}catch(T){Bt(n,n.return,T)}}function wa(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var B=a,ee=T;try{ee()}catch(fe){Bt(u,B,fe)}}}s=s.next}while(s!==f)}}catch(fe){Bt(n,n.return,fe)}}function Jp(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{V0(n,a)}catch(s){Bt(e,e.return,s)}}}function $p(e,n,a){a.props=dr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Bt(e,n,s)}}function oo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){Bt(e,n,u)}}function Di(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Bt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(e,n,u)}else a.current=null}function em(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Bt(e,e.return,u)}}function df(e,n,a){try{var s=e.stateNode;Y_(s,e.type,a,n),s[pn]=n}catch(u){Bt(e,e.return,u)}}function tm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function hf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(s!==4&&(s===27&&za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(pf(e,n,a),e=e.sibling;e!==null;)pf(e,n,a),e=e.sibling}function Al(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Al(e,n,a),e=e.sibling;e!==null;)Al(e,n,a),e=e.sibling}function nm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,s,a),n[ln]=e,n[pn]=a}catch(f){Bt(e,e.return,f)}}var Ki=!1,dn=!1,mf=!1,im=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function R_(e,n){if(e=e.containerInfo,Pf=Wl,e=m0(e),ou(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,B=-1,ee=0,fe=0,me=e,ie=null;t:for(;;){for(var oe;me!==a||u!==0&&me.nodeType!==3||(T=v+u),me!==f||s!==0&&me.nodeType!==3||(B=v+s),me.nodeType===3&&(v+=me.nodeValue.length),(oe=me.firstChild)!==null;)ie=me,me=oe;for(;;){if(me===e)break t;if(ie===a&&++ee===u&&(T=v),ie===f&&++fe===s&&(B=v),(oe=me.nextSibling)!==null)break;me=ie,ie=me.parentNode}me=oe}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},Wl=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Fe=dr(a.type,u);e=s.getSnapshotBeforeUpdate(Fe,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(et){Bt(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function am(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(e,a),s&4&&so(5,a);break;case 1:if(Ji(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Bt(a,a.return,v)}else{var u=dr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Bt(a,a.return,v)}}s&64&&Jp(a),s&512&&oo(a,a.return);break;case 3:if(Ji(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{V0(e,n)}catch(v){Bt(a,a.return,v)}}break;case 27:n===null&&s&4&&nm(a);case 26:case 5:Ji(e,a),n===null&&s&4&&em(a),s&512&&oo(a,a.return);break;case 12:Ji(e,a);break;case 31:Ji(e,a),s&4&&om(e,a);break;case 13:Ji(e,a),s&4&&lm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=P_.bind(null,a),ny(e,a))));break;case 22:if(s=a.memoizedState!==null||Ki,!s){n=n!==null&&n.memoizedState!==null||dn,u=Ki;var f=dn;Ki=s,(dn=n)&&!f?$i(e,a,(a.subtreeFlags&8772)!==0):Ji(e,a),Ki=u,dn=f}break;case 30:break;default:Ji(e,a)}}function rm(e){var n=e.alternate;n!==null&&(e.alternate=null,rm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&zs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $t=null,Hn=!1;function Qi(e,n,a){for(a=a.child;a!==null;)sm(e,n,a),a=a.sibling}function sm(e,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:dn||Di(a,n),Qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Di(a,n);var s=$t,u=Hn;za(a.type)&&($t=a.stateNode,Hn=!1),Qi(e,n,a),go(a.stateNode),$t=s,Hn=u;break;case 5:dn||Di(a,n);case 6:if(s=$t,u=Hn,$t=null,Qi(e,n,a),$t=s,Hn=u,$t!==null)if(Hn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{$t.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:$t!==null&&(Hn?(e=$t,Jm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),as(e)):Jm($t,a.stateNode));break;case 4:s=$t,u=Hn,$t=a.stateNode.containerInfo,Hn=!0,Qi(e,n,a),$t=s,Hn=u;break;case 0:case 11:case 14:case 15:wa(2,a,n),dn||wa(4,a,n),Qi(e,n,a);break;case 1:dn||(Di(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&$p(a,n,s)),Qi(e,n,a);break;case 21:Qi(e,n,a);break;case 22:dn=(s=dn)||a.memoizedState!==null,Qi(e,n,a),dn=s;break;default:Qi(e,n,a)}}function om(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{as(e)}catch(a){Bt(n,n.return,a)}}}function lm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{as(e)}catch(a){Bt(n,n.return,a)}}function w_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new im),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new im),n;default:throw Error(r(435,e.tag))}}function Rl(e,n){var a=w_(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=I_.bind(null,e,s);s.then(u,u)}})}function Gn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,v=n,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(za(T.type)){$t=T.stateNode,Hn=!1;break e}break;case 5:$t=T.stateNode,Hn=!1;break e;case 3:case 4:$t=T.stateNode.containerInfo,Hn=!0;break e}T=T.return}if($t===null)throw Error(r(160));sm(f,v,u),$t=null,Hn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)cm(n,e),n=n.sibling}var yi=null;function cm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Vn(e),s&4&&(wa(3,e,e.return),so(3,e),wa(5,e,e.return));break;case 1:Gn(n,e),Vn(e),s&512&&(dn||a===null||Di(a,a.return)),s&64&&Ki&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=yi;if(Gn(n,e),Vn(e),s&512&&(dn||a===null||Di(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ja]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,s,a),f[ln]=e,ne(f),s=f;break e;case"link":var v=cx("link","href",u).get(s+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}f=u.createElement(s),wn(f,s,a),u.head.appendChild(f);break;case"meta":if(v=cx("meta","content",u).get(s+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}f=u.createElement(s),wn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[ln]=e,ne(f),s=f}e.stateNode=s}else ux(u,e.type,e.stateNode);else e.stateNode=lx(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?ux(u,e.type,e.stateNode):lx(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&df(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,e),Vn(e),s&512&&(dn||a===null||Di(a,a.return)),a!==null&&s&4&&df(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,e),Vn(e),s&512&&(dn||a===null||Di(a,a.return)),e.flags&32){u=e.stateNode;try{Ri(u,"")}catch(Fe){Bt(e,e.return,Fe)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,df(e,u,a!==null?a.memoizedProps:u)),s&1024&&(mf=!0);break;case 6:if(Gn(n,e),Vn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Fe){Bt(e,e.return,Fe)}}break;case 3:if(kl=null,u=yi,yi=Gl(n.containerInfo),Gn(n,e),yi=u,Vn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{as(n.containerInfo)}catch(Fe){Bt(e,e.return,Fe)}mf&&(mf=!1,um(e));break;case 4:s=yi,yi=Gl(e.stateNode.containerInfo),Gn(n,e),Vn(e),yi=s;break;case 12:Gn(n,e),Vn(e);break;case 31:Gn(n,e),Vn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Rl(e,s)));break;case 13:Gn(n,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cl=M()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Rl(e,s)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,ee=Ki,fe=dn;if(Ki=ee||u,dn=fe||B,Gn(n,e),dn=fe,Ki=ee,Vn(e),s&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||Ki||dn||hr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=B.stateNode;var me=B.memoizedProps.style,ie=me!=null&&me.hasOwnProperty("display")?me.display:null;T.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(Fe){Bt(B,B.return,Fe)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Fe){Bt(B,B.return,Fe)}}}else if(n.tag===18){if(a===null){B=n;try{var oe=B.stateNode;u?$m(oe,!0):$m(B.stateNode,!1)}catch(Fe){Bt(B,B.return,Fe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Rl(e,a))));break;case 19:Gn(n,e),Vn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Rl(e,s)));break;case 30:break;case 21:break;default:Gn(n,e),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(tm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=hf(e);Al(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Ri(v,""),a.flags&=-33);var T=hf(e);Al(e,T,v);break;case 3:case 4:var B=a.stateNode.containerInfo,ee=hf(e);pf(e,ee,B);break;default:throw Error(r(161))}}catch(fe){Bt(e,e.return,fe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function um(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;um(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)am(e,n.alternate,n),n=n.sibling}function hr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),hr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&$p(n,n.return,a),hr(n);break;case 27:go(n.stateNode);case 26:case 5:Di(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}e=e.sibling}}function $i(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:$i(u,f,a),so(4,f);break;case 1:if($i(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Bt(s,s.return,ee)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)G0(B[u],T)}catch(ee){Bt(s,s.return,ee)}}a&&v&64&&Jp(f),oo(f,f.return);break;case 27:nm(f);case 26:case 5:$i(u,f,a),a&&s===null&&v&4&&em(f),oo(f,f.return);break;case 12:$i(u,f,a);break;case 31:$i(u,f,a),a&&v&4&&om(u,f);break;case 13:$i(u,f,a),a&&v&4&&lm(u,f);break;case 22:f.memoizedState===null&&$i(u,f,a),oo(f,f.return);break;case 30:break;default:$i(u,f,a)}n=n.sibling}}function xf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ws(a))}function gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ws(e))}function bi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fm(e,n,a,s),n=n.sibling}function fm(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,s),u&2048&&so(9,n);break;case 1:bi(e,n,a,s);break;case 3:bi(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ws(e)));break;case 12:if(u&2048){bi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Bt(n,n.return,B)}}else bi(e,n,a,s);break;case 31:bi(e,n,a,s);break;case 13:bi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,s):lo(e,n):f._visibility&2?bi(e,n,a,s):(f._visibility|=2,Wr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&xf(v,n);break;case 24:bi(e,n,a,s),u&2048&&gf(n.alternate,n);break;default:bi(e,n,a,s)}}function Wr(e,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,T=a,B=s,ee=v.flags;switch(v.tag){case 0:case 11:case 15:Wr(f,v,T,B,u),so(8,v);break;case 23:break;case 22:var fe=v.stateNode;v.memoizedState!==null?fe._visibility&2?Wr(f,v,T,B,u):lo(f,v):(fe._visibility|=2,Wr(f,v,T,B,u)),u&&ee&2048&&xf(v.alternate,v);break;case 24:Wr(f,v,T,B,u),u&&ee&2048&&gf(v.alternate,v);break;default:Wr(f,v,T,B,u)}n=n.sibling}}function lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:lo(a,s),u&2048&&xf(s.alternate,s);break;case 24:lo(a,s),u&2048&&gf(s.alternate,s);break;default:lo(a,s)}n=n.sibling}}var co=8192;function Yr(e,n,a){if(e.subtreeFlags&co)for(e=e.child;e!==null;)dm(e,n,a),e=e.sibling}function dm(e,n,a){switch(e.tag){case 26:Yr(e,n,a),e.flags&co&&e.memoizedState!==null&&py(a,yi,e.memoizedState,e.memoizedProps);break;case 5:Yr(e,n,a);break;case 3:case 4:var s=yi;yi=Gl(e.stateNode.containerInfo),Yr(e,n,a),yi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=co,co=16777216,Yr(e,n,a),co=s):Yr(e,n,a));break;default:Yr(e,n,a)}}function hm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Sn=s,mm(s,e)}hm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pm(e),e=e.sibling}function pm(e){switch(e.tag){case 0:case 11:case 15:uo(e),e.flags&2048&&wa(9,e,e.return);break;case 3:uo(e);break;case 12:uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,wl(e)):uo(e);break;default:uo(e)}}function wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Sn=s,mm(s,e)}hm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:wa(8,n,n.return),wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,wl(n));break;default:wl(n)}e=e.sibling}}function mm(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Sn=s;else e:for(a=e;Sn!==null;){s=Sn;var u=s.sibling,f=s.return;if(rm(s),s===a){Sn=null;break e}if(u!==null){u.return=f,Sn=u;break e}Sn=f}}}var C_={getCacheForType:function(e){var n=An(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(cn).controller.signal}},D_=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Yt=null,xt=null,vt=0,It=0,ei=null,Ca=!1,Zr=!1,vf=!1,ea=0,nn=0,Da=0,pr=0,_f=0,ti=0,Kr=0,fo=null,kn=null,yf=!1,Cl=0,xm=0,Dl=1/0,Nl=null,Na=null,xn=0,Ua=null,Qr=null,ta=0,bf=0,Sf=null,gm=null,ho=0,Mf=null;function ni(){return(Ot&2)!==0&&vt!==0?vt&-vt:F.T!==null?Cf():Ls()}function vm(){if(ti===0)if((vt&536870912)===0||Et){var e=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),ti=e}else ti=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ti}function jn(e,n,a){(e===Yt&&(It===2||It===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),La(e,vt,ti,!1)),Cn(e,a),((Ot&2)===0||e!==Yt)&&(e===Yt&&((Ot&2)===0&&(pr|=a),nn===4&&La(e,vt,ti,!1)),Ni(e))}function _m(e,n,a){if((Ot&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ie(e,n),u=s?L_(e,n):Tf(e,n,!0),f=s;do{if(u===0){Zr&&!s&&La(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!N_(a)){u=Tf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var T=e;u=fo;var B=T.current.memoizedState.isDehydrated;if(B&&(Jr(T,v).flags|=256),v=Tf(T,v,!1),v!==2){if(vf&&!B){T.errorRecoveryDisabledLanes|=f,pr|=f,u=4;break e}f=kn,kn=u,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){Jr(e,0),La(e,n,0,!0);break}e:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:La(s,n,ti,!Ca);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Cl+300-M(),10<u)){if(La(s,n,ti,!Ca),ge(s,0,!0)!==0)break e;ta=n,s.timeoutHandle=Km(ym.bind(null,s,a,kn,Nl,yf,n,ti,pr,Kr,Ca,f,"Throttled",-0,0),u);break e}ym(s,a,kn,Nl,yf,n,ti,pr,Kr,Ca,f,null,-0,0)}}break}while(!0);Ni(e)}function ym(e,n,a,s,u,f,v,T,B,ee,fe,me,ie,oe){if(e.timeoutHandle=-1,me=n.subtreeFlags,me&8192||(me&16785408)===16785408){me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},dm(n,f,me);var Fe=(f&62914560)===f?Cl-M():(f&4194048)===f?xm-M():0;if(Fe=my(me,Fe),Fe!==null){ta=f,e.cancelPendingCommit=Fe(wm.bind(null,e,n,f,a,s,u,v,T,B,fe,me,null,ie,oe)),La(e,f,v,!ee);return}}wm(e,n,f,a,s,u,v,T,B)}function N_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(e,n,a,s){n&=~_f,n&=~pr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Ve(u),v=1<<f;s[f]=-1,u&=~v}a!==0&&ko(e,a,n)}function Ul(){return(Ot&6)===0?(po(0),!1):!0}function Ef(){if(xt!==null){if(It===0)var e=xt.return;else e=xt,ji=rr=null,Fu(e),Vr=null,Zs=0,e=xt;for(;e!==null;)Qp(e.alternate,e),e=e.return;xt=null}}function Jr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Q_(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,Ef(),Yt=e,xt=a=Vi(e.current,null),vt=n,It=0,ei=null,Ca=!1,Zr=Ie(e,n),vf=!1,Kr=ti=_f=pr=Da=nn=0,kn=fo=null,yf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Ve(s),f=1<<u;n|=e[u],s&=~f}return ea=n,$o(),a}function bm(e,n){st=null,F.H=io,n===Gr||n===ol?(n=I0(),It=3):n===Ru?(n=I0(),It=4):It=n===tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,xt===null&&(nn=1,bl(e,li(n,e.current)))}function Sm(){var e=Jn.current;return e===null?!0:(vt&4194048)===vt?di===null:(vt&62914560)===vt||(vt&536870912)!==0?e===di:!1}function Mm(){var e=F.H;return F.H=io,e===null?io:e}function Em(){var e=F.A;return F.A=C_,e}function Ll(){nn=4,Ca||(vt&4194048)!==vt&&Jn.current!==null||(Zr=!0),(Da&134217727)===0&&(pr&134217727)===0||Yt===null||La(Yt,vt,ti,!1)}function Tf(e,n,a){var s=Ot;Ot|=2;var u=Mm(),f=Em();(Yt!==e||vt!==n)&&(Nl=null,Jr(e,n)),n=!1;var v=nn;e:do try{if(It!==0&&xt!==null){var T=xt,B=ei;switch(It){case 8:Ef(),v=6;break e;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var ee=It;if(It=0,ei=null,$r(e,T,B,ee),a&&Zr){v=0;break e}break;default:ee=It,It=0,ei=null,$r(e,T,B,ee)}}U_(),v=nn;break}catch(fe){bm(e,fe)}while(!0);return n&&e.shellSuspendCounter++,ji=rr=null,Ot=s,F.H=u,F.A=f,xt===null&&(Yt=null,vt=0,$o()),v}function U_(){for(;xt!==null;)Tm(xt)}function L_(e,n){var a=Ot;Ot|=2;var s=Mm(),u=Em();Yt!==e||vt!==n?(Nl=null,Dl=M()+500,Jr(e,n)):Zr=Ie(e,n);e:do try{if(It!==0&&xt!==null){n=xt;var f=ei;t:switch(It){case 1:It=0,ei=null,$r(e,n,f,1);break;case 2:case 9:if(z0(f)){It=0,ei=null,Am(n);break}n=function(){It!==2&&It!==9||Yt!==e||(It=7),Ni(e)},f.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:z0(f)?(It=0,ei=null,Am(n)):(It=0,ei=null,$r(e,n,f,7));break;case 5:var v=null;switch(xt.tag){case 26:v=xt.memoizedState;case 5:case 27:var T=xt;if(v?fx(v):T.stateNode.complete){It=0,ei=null;var B=T.sibling;if(B!==null)xt=B;else{var ee=T.return;ee!==null?(xt=ee,Ol(ee)):xt=null}break t}}It=0,ei=null,$r(e,n,f,5);break;case 6:It=0,ei=null,$r(e,n,f,6);break;case 8:Ef(),nn=6;break e;default:throw Error(r(462))}}O_();break}catch(fe){bm(e,fe)}while(!0);return ji=rr=null,F.H=s,F.A=u,Ot=a,xt!==null?0:(Yt=null,vt=0,$o(),nn)}function O_(){for(;xt!==null&&!at();)Tm(xt)}function Tm(e){var n=Zp(e.alternate,e,ea);e.memoizedProps=e.pendingProps,n===null?Ol(e):xt=n}function Am(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=kp(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=kp(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Fu(n);default:Qp(a,n),n=xt=E0(n,ea),n=Zp(a,n,ea)}e.memoizedProps=e.pendingProps,n===null?Ol(e):xt=n}function $r(e,n,a,s){ji=rr=null,Fu(n),Vr=null,Zs=0;var u=n.return;try{if(S_(e,u,n,a,vt)){nn=1,bl(e,li(a,e.current)),xt=null;return}}catch(f){if(u!==null)throw xt=u,f;nn=1,bl(e,li(a,e.current)),xt=null;return}n.flags&32768?(Et||s===1?e=!0:Zr||(vt&536870912)!==0?e=!1:(Ca=e=!0,(s===2||s===9||s===3||s===6)&&(s=Jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Rm(n,e)):Ol(n)}function Ol(e){var n=e;do{if((n.flags&32768)!==0){Rm(n,Ca);return}e=n.return;var a=T_(n.alternate,n,ea);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=e}while(n!==null);nn===0&&(nn=5)}function Rm(e,n){do{var a=A_(e.alternate,e);if(a!==null){a.flags&=32767,xt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xt=e;return}xt=e=a}while(e!==null);nn=6,xt=null}function wm(e,n,a,s,u,f,v,T,B){e.cancelPendingCommit=null;do zl();while(xn!==0);if((Ot&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=du,Yn(e,a,f,v,T,B),e===Yt&&(xt=Yt=null,vt=0),Qr=n,Ua=e,ta=a,bf=f,Sf=u,gm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,B_(le,function(){return Lm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=F.T,F.T=null,u=K.p,K.p=2,v=Ot,Ot|=4;try{R_(e,n,a)}finally{Ot=v,K.p=u,F.T=s}}xn=1,Cm(),Dm(),Nm()}}function Cm(){if(xn===1){xn=0;var e=Ua,n=Qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var s=K.p;K.p=2;var u=Ot;Ot|=4;try{cm(n,e);var f=If,v=m0(e.containerInfo),T=f.focusedElem,B=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&p0(T.ownerDocument.documentElement,T)){if(B!==null&&ou(T)){var ee=B.start,fe=B.end;if(fe===void 0&&(fe=ee),"selectionStart"in T)T.selectionStart=ee,T.selectionEnd=Math.min(fe,T.value.length);else{var me=T.ownerDocument||document,ie=me&&me.defaultView||window;if(ie.getSelection){var oe=ie.getSelection(),Fe=T.textContent.length,et=Math.min(B.start,Fe),Vt=B.end===void 0?et:Math.min(B.end,Fe);!oe.extend&&et>Vt&&(v=Vt,Vt=et,et=v);var q=h0(T,et),k=h0(T,Vt);if(q&&k&&(oe.rangeCount!==1||oe.anchorNode!==q.node||oe.anchorOffset!==q.offset||oe.focusNode!==k.node||oe.focusOffset!==k.offset)){var Q=me.createRange();Q.setStart(q.node,q.offset),oe.removeAllRanges(),et>Vt?(oe.addRange(Q),oe.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),oe.addRange(Q))}}}}for(me=[],oe=T;oe=oe.parentNode;)oe.nodeType===1&&me.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<me.length;T++){var he=me[T];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}Wl=!!Pf,If=Pf=null}finally{Ot=u,K.p=s,F.T=a}}e.current=n,xn=2}}function Dm(){if(xn===2){xn=0;var e=Ua,n=Qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var s=K.p;K.p=2;var u=Ot;Ot|=4;try{am(e,n.alternate,n)}finally{Ot=u,K.p=s,F.T=a}}xn=3}}function Nm(){if(xn===4||xn===3){xn=0,O();var e=Ua,n=Qr,a=ta,s=gm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Qr=Ua=null,Um(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Na=null),Qa(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=F.T,u=K.p,K.p=2,F.T=null;try{for(var f=e.onRecoverableError,v=0;v<s.length;v++){var T=s[v];f(T.value,{componentStack:T.stack})}}finally{F.T=n,K.p=u}}(ta&3)!==0&&zl(),Ni(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Mf?ho++:(ho=0,Mf=e):ho=0,po(0)}}function Um(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ws(n)))}function zl(){return Cm(),Dm(),Nm(),Lm()}function Lm(){if(xn!==5)return!1;var e=Ua,n=bf;bf=0;var a=Qa(ta),s=F.T,u=K.p;try{K.p=32>a?32:a,F.T=null,a=Sf,Sf=null;var f=Ua,v=ta;if(xn=0,Qr=Ua=null,ta=0,(Ot&6)!==0)throw Error(r(331));var T=Ot;if(Ot|=4,pm(f.current),fm(f,f.current,v,a),Ot=T,po(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{K.p=u,F.T=s,Um(e,n)}}function Om(e,n,a){n=li(a,n),n=ef(e.stateNode,n,2),e=Ta(e,n,2),e!==null&&(Cn(e,2),Ni(e))}function Bt(e,n,a){if(e.tag===3)Om(e,e,a);else for(;n!==null;){if(n.tag===3){Om(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Na===null||!Na.has(s))){e=li(a,e),a=zp(2),s=Ta(n,a,2),s!==null&&(Pp(a,s,n,e),Cn(s,2),Ni(s));break}}n=n.return}}function Af(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new D_;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(vf=!0,u.add(a),e=z_.bind(null,e,n,a),n.then(e,e))}function z_(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Yt===e&&(vt&a)===a&&(nn===4||nn===3&&(vt&62914560)===vt&&300>M()-Cl?(Ot&2)===0&&Jr(e,0):_f|=a,Kr===vt&&(Kr=0)),Ni(e)}function zm(e,n){n===0&&(n=Ft()),e=nr(e,n),e!==null&&(Cn(e,n),Ni(e))}function P_(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),zm(e,a)}function I_(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),zm(e,a)}function B_(e,n){return qt(e,n)}var Pl=null,es=null,Rf=!1,Il=!1,wf=!1,Oa=0;function Ni(e){e!==es&&e.next===null&&(es===null?Pl=es=e:es=es.next=e),Il=!0,Rf||(Rf=!0,H_())}function po(e,n){if(!wf&&Il){wf=!0;do for(var a=!1,s=Pl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Ve(42|e)+1)-1,f&=u&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Fm(s,f))}else f=vt,f=ge(s,s===Yt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ie(s,f)||(a=!0,Fm(s,f));s=s.next}while(a);wf=!1}}function F_(){Pm()}function Pm(){Il=Rf=!1;var e=0;Oa!==0&&K_()&&(e=Oa);for(var n=M(),a=null,s=Pl;s!==null;){var u=s.next,f=Im(s,n);f===0?(s.next=null,a===null?Pl=u:a.next=u,u===null&&(es=a)):(a=s,(e!==0||(f&3)!==0)&&(Il=!0)),s=u}xn!==0&&xn!==5||po(e),Oa!==0&&(Oa=0)}function Im(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Ve(f),T=1<<v,B=u[v];B===-1?((T&a)===0||(T&s)!==0)&&(u[v]=it(T,n)):B<=n&&(e.expiredLanes|=T),f&=~T}if(n=Yt,a=vt,a=ge(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(It===2||It===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ye(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ie(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Ye(s),Qa(a)){case 2:case 8:a=ye;break;case 32:a=le;break;case 268435456:a=Ue;break;default:a=le}return s=Bm.bind(null,e),a=qt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Ye(s),e.callbackPriority=2,e.callbackNode=null,2}function Bm(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zl()&&e.callbackNode!==a)return null;var s=vt;return s=ge(e,e===Yt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(_m(e,s,n),Im(e,M()),e.callbackNode!=null&&e.callbackNode===a?Bm.bind(null,e):null)}function Fm(e,n){if(zl())return null;_m(e,n,!0)}function H_(){J_(function(){(Ot&6)!==0?qt(pe,F_):Pm()})}function Cf(){if(Oa===0){var e=Fr;e===0&&(e=De,De<<=1,(De&261888)===0&&(De=256)),Oa=e}return Oa}function Hm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xo(""+e)}function Gm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function G_(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Hm((u[pn]||null).action),v=s.submitter;v&&(n=(n=v[pn]||null)?Hm(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new Zo("action","action",null,s,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Oa!==0){var B=v?Gm(u,v):new FormData(u);Yu(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=v?Gm(u,v):new FormData(u),Yu(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Df=0;Df<fu.length;Df++){var Nf=fu[Df],V_=Nf.toLowerCase(),k_=Nf[0].toUpperCase()+Nf.slice(1);_i(V_,"on"+k_)}_i(v0,"onAnimationEnd"),_i(_0,"onAnimationIteration"),_i(y0,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(r_,"onTransitionRun"),_i(s_,"onTransitionStart"),_i(o_,"onTransitionCancel"),_i(b0,"onTransitionEnd"),Pe("onMouseEnter",["mouseout","mouseover"]),Pe("onMouseLeave",["mouseout","mouseover"]),Pe("onPointerEnter",["pointerout","pointerover"]),Pe("onPointerLeave",["pointerout","pointerover"]),Ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function Vm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],B=T.instance,ee=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=ee;try{f(u)}catch(fe){Jo(fe)}u.currentTarget=null,f=B}else for(v=0;v<s.length;v++){if(T=s[v],B=T.instance,ee=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=ee;try{f(u)}catch(fe){Jo(fe)}u.currentTarget=null,f=B}}}}function gt(e,n){var a=n[Rr];a===void 0&&(a=n[Rr]=new Set);var s=e+"__bubble";a.has(s)||(km(n,e,2,!1),a.add(s))}function Uf(e,n,a){var s=0;n&&(s|=4),km(a,e,s,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[Bl]){e[Bl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(j_.has(a)||Uf(a,!1,e),Uf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,Uf("selectionchange",!1,n))}}function km(e,n,a,s){switch(vx(n)){case 2:var u=vy;break;case 8:u=_y;break;default:u=Yf}a=u.bind(null,n,a,e),u=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Of(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=s.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=xa(T),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){s=f=v;continue e}T=T.parentNode}}s=s.return}Yh(function(){var ee=f,fe=Kc(a),me=[];e:{var ie=S0.get(e);if(ie!==void 0){var oe=Zo,Fe=e;switch(e){case"keypress":if(Wo(a)===0)break e;case"keydown":case"keyup":oe=Iv;break;case"focusin":Fe="focus",oe=nu;break;case"focusout":Fe="blur",oe=nu;break;case"beforeblur":case"afterblur":oe=nu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=Hv;break;case v0:case _0:case y0:oe=wv;break;case b0:oe=Vv;break;case"scroll":case"scrollend":oe=Mv;break;case"wheel":oe=jv;break;case"copy":case"cut":case"paste":oe=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=$h;break;case"toggle":case"beforetoggle":oe=qv}var et=(n&4)!==0,Vt=!et&&(e==="scroll"||e==="scrollend"),q=et?ie!==null?ie+"Capture":null:ie;et=[];for(var k=ee,Q;k!==null;){var he=k;if(Q=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||Q===null||q===null||(he=Ps(k,q),he!=null&&et.push(xo(k,he,Q))),Vt)break;k=k.return}0<et.length&&(ie=new oe(ie,Fe,null,a,fe),me.push({event:ie,listeners:et}))}}if((n&7)===0){e:{if(ie=e==="mouseover"||e==="pointerover",oe=e==="mouseout"||e==="pointerout",ie&&a!==Zc&&(Fe=a.relatedTarget||a.fromElement)&&(xa(Fe)||Fe[Ii]))break e;if((oe||ie)&&(ie=fe.window===fe?fe:(ie=fe.ownerDocument)?ie.defaultView||ie.parentWindow:window,oe?(Fe=a.relatedTarget||a.toElement,oe=ee,Fe=Fe?xa(Fe):null,Fe!==null&&(Vt=c(Fe),et=Fe.tag,Fe!==Vt||et!==5&&et!==27&&et!==6)&&(Fe=null)):(oe=null,Fe=ee),oe!==Fe)){if(et=Qh,he="onMouseLeave",q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(et=$h,he="onPointerLeave",q="onPointerEnter",k="pointer"),Vt=oe==null?ie:X(oe),Q=Fe==null?ie:X(Fe),ie=new et(he,k+"leave",oe,a,fe),ie.target=Vt,ie.relatedTarget=Q,he=null,xa(fe)===ee&&(et=new et(q,k+"enter",Fe,a,fe),et.target=Q,et.relatedTarget=Vt,he=et),Vt=he,oe&&Fe)t:{for(et=X_,q=oe,k=Fe,Q=0,he=q;he;he=et(he))Q++;he=0;for(var Ke=k;Ke;Ke=et(Ke))he++;for(;0<Q-he;)q=et(q),Q--;for(;0<he-Q;)k=et(k),he--;for(;Q--;){if(q===k||k!==null&&q===k.alternate){et=q;break t}q=et(q),k=et(k)}et=null}else et=null;oe!==null&&jm(me,ie,oe,et,!1),Fe!==null&&Vt!==null&&jm(me,Vt,Fe,et,!0)}}e:{if(ie=ee?X(ee):window,oe=ie.nodeName&&ie.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ie.type==="file")var Nt=o0;else if(r0(ie))if(l0)Nt=n_;else{Nt=e_;var ke=$v}else oe=ie.nodeName,!oe||oe.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?ee&&Yc(ee.elementType)&&(Nt=o0):Nt=t_;if(Nt&&(Nt=Nt(e,ee))){s0(me,Nt,a,fe);break e}ke&&ke(e,ie,ee),e==="focusout"&&ee&&ie.type==="number"&&ee.memoizedProps.value!=null&&yn(ie,"number",ie.value)}switch(ke=ee?X(ee):window,e){case"focusin":(r0(ke)||ke.contentEditable==="true")&&(Nr=ke,lu=ee,js=null);break;case"focusout":js=lu=Nr=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,x0(me,a,fe);break;case"selectionchange":if(a_)break;case"keydown":case"keyup":x0(me,a,fe)}var ut;if(au)e:{switch(e){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Dr?i0(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(e0&&a.locale!=="ko"&&(Dr||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Dr&&(ut=Zh()):(va=fe,$c="value"in va?va.value:va.textContent,Dr=!0)),ke=Fl(ee,_t),0<ke.length&&(_t=new Jh(_t,e,null,a,fe),me.push({event:_t,listeners:ke}),ut?_t.data=ut:(ut=a0(a),ut!==null&&(_t.data=ut)))),(ut=Yv?Zv(e,a):Kv(e,a))&&(_t=Fl(ee,"onBeforeInput"),0<_t.length&&(ke=new Jh("onBeforeInput","beforeinput",null,a,fe),me.push({event:ke,listeners:_t}),ke.data=ut)),G_(me,e,ee,a,fe)}Vm(me,n)})}function xo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Fl(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ps(e,a),u!=null&&s.unshift(xo(e,u,f)),u=Ps(e,n),u!=null&&s.push(xo(e,u,f))),e.tag===3)return s;e=e.return}return[]}function X_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jm(e,n,a,s,u){for(var f=n._reactName,v=[];a!==null&&a!==s;){var T=a,B=T.alternate,ee=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||ee===null||(B=ee,u?(ee=Ps(a,f),ee!=null&&v.unshift(xo(a,ee,B))):u||(ee=Ps(a,f),ee!=null&&v.push(xo(a,ee,B)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var q_=/\r\n?/g,W_=/\u0000|\uFFFD/g;function Xm(e){return(typeof e=="string"?e:""+e).replace(q_,`
`).replace(W_,"")}function qm(e,n){return n=Xm(n),Xm(e)===n}function Gt(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ri(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ri(e,""+s);break;case"className":Rt(e,"class",s);break;case"tabIndex":Rt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Rt(e,a,s);break;case"style":qh(e,s,f);break;case"data":if(n!=="object"){Rt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Xo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(e,n,"name",u.name,u,null),Gt(e,n,"formEncType",u.formEncType,u,null),Gt(e,n,"formMethod",u.formMethod,u,null),Gt(e,n,"formTarget",u.formTarget,u,null)):(Gt(e,n,"encType",u.encType,u,null),Gt(e,n,"method",u.method,u,null),Gt(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Xo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Hi);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Xo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":gt("beforetoggle",e),gt("toggle",e),ct(e,"popover",s);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ct(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bv.get(a)||a,ct(e,a,s))}}function zf(e,n,a,s,u,f){switch(a){case"style":qh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Ri(e,s):(typeof s=="number"||typeof s=="bigint")&&Ri(e,""+s);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ae.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):ct(e,a,s)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",e),gt("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(e,n,f,v,a,null)}}u&&Gt(e,n,"srcSet",a.srcSet,a,null),s&&Gt(e,n,"src",a.src,a,null);return;case"input":gt("invalid",e);var T=f=v=u=null,B=null,ee=null;for(s in a)if(a.hasOwnProperty(s)){var fe=a[s];if(fe!=null)switch(s){case"name":u=fe;break;case"type":v=fe;break;case"checked":B=fe;break;case"defaultChecked":ee=fe;break;case"value":f=fe;break;case"defaultValue":T=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:Gt(e,n,s,fe,a,null)}}Kt(e,f,T,B,ee,v,u,!1);return;case"select":gt("invalid",e),s=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:Gt(e,n,u,T,a,null)}n=f,a=v,e.multiple=!!s,n!=null?mn(e,!!s,n,!1):a!=null&&mn(e,!!s,a,!0);return;case"textarea":gt("invalid",e),f=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Gt(e,n,v,T,a,null)}En(e,s,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Gt(e,n,B,s,a,null)}return;case"dialog":gt("beforetoggle",e),gt("toggle",e),gt("cancel",e),gt("close",e);break;case"iframe":case"object":gt("load",e);break;case"video":case"audio":for(s=0;s<mo.length;s++)gt(mo[s],e);break;case"image":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"embed":case"source":case"link":gt("error",e),gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(s=a[ee],s!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(e,n,ee,s,a,null)}return;default:if(Yc(n)){for(fe in a)a.hasOwnProperty(fe)&&(s=a[fe],s!==void 0&&zf(e,n,fe,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Gt(e,n,T,s,a,null))}function Y_(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,B=null,ee=null,fe=null;for(oe in a){var me=a[oe];if(a.hasOwnProperty(oe)&&me!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":B=me;default:s.hasOwnProperty(oe)||Gt(e,n,oe,null,s,me)}}for(var ie in s){var oe=s[ie];if(me=a[ie],s.hasOwnProperty(ie)&&(oe!=null||me!=null))switch(ie){case"type":f=oe;break;case"name":u=oe;break;case"checked":ee=oe;break;case"defaultChecked":fe=oe;break;case"value":v=oe;break;case"defaultValue":T=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:oe!==me&&Gt(e,n,ie,oe,s,me)}}Bi(e,v,T,B,ee,fe,f,u);return;case"select":oe=v=T=ie=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":oe=B;default:s.hasOwnProperty(f)||Gt(e,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":ie=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==B&&Gt(e,n,u,f,s,B)}n=T,a=v,s=oe,ie!=null?mn(e,!!a,ie,!1):!!s!=!!a&&(n!=null?mn(e,!!a,n,!0):mn(e,!!a,a?[]:"",!1));return;case"textarea":oe=ie=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Gt(e,n,T,null,s,u)}for(v in s)if(u=s[v],f=a[v],s.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":ie=u;break;case"defaultValue":oe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Gt(e,n,v,u,s,f)}bn(e,ie,oe);return;case"option":for(var Fe in a)if(ie=a[Fe],a.hasOwnProperty(Fe)&&ie!=null&&!s.hasOwnProperty(Fe))switch(Fe){case"selected":e.selected=!1;break;default:Gt(e,n,Fe,null,s,ie)}for(B in s)if(ie=s[B],oe=a[B],s.hasOwnProperty(B)&&ie!==oe&&(ie!=null||oe!=null))switch(B){case"selected":e.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Gt(e,n,B,ie,s,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ie=a[et],a.hasOwnProperty(et)&&ie!=null&&!s.hasOwnProperty(et)&&Gt(e,n,et,null,s,ie);for(ee in s)if(ie=s[ee],oe=a[ee],s.hasOwnProperty(ee)&&ie!==oe&&(ie!=null||oe!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:Gt(e,n,ee,ie,s,oe)}return;default:if(Yc(n)){for(var Vt in a)ie=a[Vt],a.hasOwnProperty(Vt)&&ie!==void 0&&!s.hasOwnProperty(Vt)&&zf(e,n,Vt,void 0,s,ie);for(fe in s)ie=s[fe],oe=a[fe],!s.hasOwnProperty(fe)||ie===oe||ie===void 0&&oe===void 0||zf(e,n,fe,ie,s,oe);return}}for(var q in a)ie=a[q],a.hasOwnProperty(q)&&ie!=null&&!s.hasOwnProperty(q)&&Gt(e,n,q,null,s,ie);for(me in s)ie=s[me],oe=a[me],!s.hasOwnProperty(me)||ie===oe||ie==null&&oe==null||Gt(e,n,me,ie,s,oe)}function Wm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Z_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,v=u.initiatorType,T=u.duration;if(f&&T&&Wm(v)){for(v=0,T=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],ee=B.startTime;if(ee>T)break;var fe=B.transferSize,me=B.initiatorType;fe&&Wm(me)&&(B=B.responseEnd,v+=fe*(B<T?1:(T-ee)/(B-ee)))}if(--s,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pf=null,If=null;function Hl(e){return e.nodeType===9?e:e.ownerDocument}function Ym(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function K_(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var Km=typeof setTimeout=="function"?setTimeout:void 0,Q_=typeof clearTimeout=="function"?clearTimeout:void 0,Qm=typeof Promise=="function"?Promise:void 0,J_=typeof queueMicrotask=="function"?queueMicrotask:typeof Qm<"u"?function(e){return Qm.resolve(null).then(e).catch($_)}:Km;function $_(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function Jm(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(u),as(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")go(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[Ja]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&go(e.ownerDocument.body);a=u}while(a);as(n)}function $m(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Hf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),zs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ey(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ja])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function ty(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function ex(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hi(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$?"||e.data==="$~"}function Vf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ny(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var kf=null;function tx(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return hi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function nx(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function ix(e,n,a){switch(n=Hl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);zs(e)}var pi=new Map,ax=new Set;function Gl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=K.d;K.d={f:iy,r:ay,D:ry,C:sy,L:oy,m:ly,X:uy,S:cy,M:fy};function iy(){var e=na.f(),n=Ul();return e||n}function ay(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?bp(n):na.r(e)}var ts=typeof document>"u"?null:document;function rx(e,n,a){var s=ts;if(s&&typeof n=="string"&&n){var u=Zt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),ax.has(u)||(ax.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),wn(n,"link",e),ne(n),s.head.appendChild(n)))}}function ry(e){na.D(e),rx("dns-prefetch",e,null)}function sy(e,n){na.C(e,n),rx("preconnect",e,n)}function oy(e,n,a){na.L(e,n,a);var s=ts;if(s&&e&&n){var u='link[rel="preload"][as="'+Zt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Zt(a.imageSizes)+'"]')):u+='[href="'+Zt(e)+'"]';var f=u;switch(n){case"style":f=ns(e);break;case"script":f=is(e)}pi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(vo(f))||n==="script"&&s.querySelector(_o(f))||(n=s.createElement("link"),wn(n,"link",e),ne(n),s.head.appendChild(n)))}}function ly(e,n){na.m(e,n);var a=ts;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Zt(s)+'"][href="'+Zt(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=is(e)}if(!pi.has(f)&&(e=g({rel:"modulepreload",href:e},n),pi.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}s=a.createElement("link"),wn(s,"link",e),ne(s),a.head.appendChild(s)}}}function cy(e,n,a){na.S(e,n,a);var s=ts;if(s&&e){var u=re(s).hoistableStyles,f=ns(e);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(vo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(f))&&jf(e,a);var B=v=s.createElement("link");ne(B),wn(B,"link",e),B._p=new Promise(function(ee,fe){B.onload=ee,B.onerror=fe}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Vl(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function uy(e,n){na.X(e,n);var a=ts;if(a&&e){var s=re(a).hoistableScripts,u=is(e),f=s.get(u);f||(f=a.querySelector(_o(u)),f||(e=g({src:e,async:!0},n),(n=pi.get(u))&&Xf(e,n),f=a.createElement("script"),ne(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function fy(e,n){na.M(e,n);var a=ts;if(a&&e){var s=re(a).hoistableScripts,u=is(e),f=s.get(u);f||(f=a.querySelector(_o(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&Xf(e,n),f=a.createElement("script"),ne(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function sx(e,n,a,s){var u=(u=ae.current)?Gl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ns(a.href),a=re(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ns(a.href);var f=re(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(vo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),f||dy(u,e,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=is(a),a=re(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ns(e){return'href="'+Zt(e)+'"'}function vo(e){return'link[rel="stylesheet"]['+e+"]"}function ox(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function dy(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),wn(n,"link",a),ne(n),e.head.appendChild(n))}function is(e){return'[src="'+Zt(e)+'"]'}function _o(e){return"script[async]"+e}function lx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Zt(a.href)+'"]');if(s)return n.instance=s,ne(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),ne(s),wn(s,"style",u),Vl(s,a.precedence,e),n.instance=s;case"stylesheet":u=ns(a.href);var f=e.querySelector(vo(u));if(f)return n.state.loading|=4,n.instance=f,ne(f),f;s=ox(a),(u=pi.get(u))&&jf(s,u),f=(e.ownerDocument||e).createElement("link"),ne(f);var v=f;return v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),wn(f,"link",s),n.state.loading|=4,Vl(f,a.precedence,e),n.instance=f;case"script":return f=is(a.src),(u=e.querySelector(_o(f)))?(n.instance=u,ne(u),u):(s=a,(u=pi.get(f))&&(s=g({},a),Xf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),ne(u),wn(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Vl(s,a.precedence,e));return n.instance}function Vl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var kl=null;function cx(e,n,a){if(kl===null){var s=new Map,u=kl=new Map;u.set(a,s)}else u=kl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ja]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function ux(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function hy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function fx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function py(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ns(s.href),f=n.querySelector(vo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=jl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,ne(f);return}f=n.ownerDocument||n,s=ox(s),(u=pi.get(u))&&jf(s,u),f=f.createElement("link"),ne(f);var v=f;v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),wn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=jl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var qf=0;function my(e,n){return e.stylesheets&&e.count===0&&ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&ql(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&qf===0&&(qf=62500*Z_());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ql(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>qf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function ql(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,n.forEach(xy,e),Xl=null,jl.call(e))}function xy(e,n){if(!(n.state.loading&4)){var a=Xl.get(e);if(a)var s=a.get(null);else{a=new Map,Xl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,u),a.set(v,u),this.count++,s=jl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var yo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function gy(e,n,a,s,u,f,v,T,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function dx(e,n,a,s,u,f,v,T,B,ee,fe,me){return e=new gy(e,n,a,v,B,ee,fe,me,T),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Eu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},wu(f),e}function hx(e){return e?(e=Or,e):Or}function px(e,n,a,s,u,f){u=hx(u),s.context===null?s.context=u:s.pendingContext=u,s=Ea(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ta(e,s,n),a!==null&&(jn(a,e,n),Qs(a,e,n))}function mx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Wf(e,n){mx(e,n),(e=e.alternate)&&mx(e,n)}function xx(e){if(e.tag===13||e.tag===31){var n=nr(e,67108864);n!==null&&jn(n,e,67108864),Wf(e,67108864)}}function gx(e){if(e.tag===13||e.tag===31){var n=ni();n=vi(n);var a=nr(e,n);a!==null&&jn(a,e,n),Wf(e,n)}}var Wl=!0;function vy(e,n,a,s){var u=F.T;F.T=null;var f=K.p;try{K.p=2,Yf(e,n,a,s)}finally{K.p=f,F.T=u}}function _y(e,n,a,s){var u=F.T;F.T=null;var f=K.p;try{K.p=8,Yf(e,n,a,s)}finally{K.p=f,F.T=u}}function Yf(e,n,a,s){if(Wl){var u=Zf(s);if(u===null)Of(e,n,s,Yl,a),_x(e,s);else if(by(u,e,n,a,s))s.stopPropagation();else if(_x(e,s),n&4&&-1<yy.indexOf(e)){for(;u!==null;){var f=R(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Me(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var B=1<<31-Ve(v);T.entanglements[1]|=B,v&=~B}Ni(f),(Ot&6)===0&&(Dl=M()+500,po(0))}}break;case 31:case 13:T=nr(f,2),T!==null&&jn(T,f,2),Ul(),Wf(f,2)}if(f=Zf(s),f===null&&Of(e,n,s,Yl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Of(e,n,s,null,a)}}function Zf(e){return e=Kc(e),Kf(e)}var Yl=null;function Kf(e){if(Yl=null,e=xa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Yl=e,null}function vx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case pe:return 2;case ye:return 8;case le:case qe:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Qf=!1,Pa=null,Ia=null,Ba=null,bo=new Map,So=new Map,Fa=[],yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _x(e,n){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function Mo(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&xx(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function by(e,n,a,s,u){switch(n){case"focusin":return Pa=Mo(Pa,e,n,a,s,u),!0;case"dragenter":return Ia=Mo(Ia,e,n,a,s,u),!0;case"mouseover":return Ba=Mo(Ba,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return bo.set(f,Mo(bo.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,So.set(f,Mo(So.get(f)||null,e,n,a,s,u)),!0}return!1}function yx(e){var n=xa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Os(e.priority,function(){gx(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Os(e.priority,function(){gx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Zf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Zc=s,a.target.dispatchEvent(s),Zc=null}else return n=R(a),n!==null&&xx(n),e.blockedOn=a,!1;n.shift()}return!0}function bx(e,n,a){Zl(e)&&a.delete(n)}function Sy(){Qf=!1,Pa!==null&&Zl(Pa)&&(Pa=null),Ia!==null&&Zl(Ia)&&(Ia=null),Ba!==null&&Zl(Ba)&&(Ba=null),bo.forEach(bx),So.forEach(bx)}function Kl(e,n){e.blockedOn===n&&(e.blockedOn=null,Qf||(Qf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Sy)))}var Ql=null;function Sx(e){Ql!==e&&(Ql=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ql===e&&(Ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(Kf(s||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,Yu(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function as(e){function n(B){return Kl(B,e)}Pa!==null&&Kl(Pa,e),Ia!==null&&Kl(Ia,e),Ba!==null&&Kl(Ba,e),bo.forEach(n),So.forEach(n);for(var a=0;a<Fa.length;a++){var s=Fa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Fa.length&&(a=Fa[0],a.blockedOn===null);)yx(a),a.blockedOn===null&&Fa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],v=u[pn]||null;if(typeof f=="function")v||Sx(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[pn]||null)T=v.formAction;else if(Kf(u)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Sx(a)}}}function Mx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Jf(e){this._internalRoot=e}Jl.prototype.render=Jf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ni();px(a,s,e,n,null,null)},Jl.prototype.unmount=Jf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;px(e.current,2,null,e,null,null),Ul(),n[Ii]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ls();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Fa.length&&n!==0&&n<Fa[a].priority;a++);Fa.splice(a,0,e),a===0&&yx(e)}};var Ex=t.version;if(Ex!=="19.2.0")throw Error(r(527,Ex,"19.2.0"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var My={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{be=$l.inject(My),Ee=$l}catch{}}return To.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=Np,f=Up,v=Lp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=dx(e,1,!1,null,null,a,s,null,u,f,v,Mx),e[Ii]=n.current,Lf(e),new Jf(n)},To.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=Np,v=Up,T=Lp,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=dx(e,1,!0,n,a??null,s,u,B,f,v,T,Mx),n.context=hx(null),a=n.current,s=ni(),s=vi(s),u=Ea(s),u.callback=null,Ta(a,u,s),a=s,n.current.lanes=a,Cn(n,a),Ni(n),e[Ii]=n.current,Lf(e),new Jl(n)},To.version="19.2.0",To}var Ox;function Oy(){if(Ox)return td.exports;Ox=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),td.exports=Ly(),td.exports}var zy=Oy();const Py=Ig(zy);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),By=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),zx=o=>{const t=By(o);return t.charAt(0).toUpperCase()+t.slice(1)},Bg=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),Fy=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=yt.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...h},m)=>yt.createElement("svg",{ref:m,...Hy,width:t,height:t,stroke:o,strokeWidth:r?Number(i)*24/Number(t):i,className:Bg("lucide",l),...!c&&!Fy(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,x])=>yt.createElement(p,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=(o,t)=>{const i=yt.forwardRef(({className:r,...l},c)=>yt.createElement(Gy,{ref:c,iconNode:t,className:Bg(`lucide-${Iy(zx(o))}`,`lucide-${o}`,r),...l}));return i.displayName=zx(o),i};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],ky=Xt("arrow-up",Vy);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Px=Xt("briefcase",jy);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],qy=Xt("calendar",Xy);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Yy=Xt("chevron-left",Wy);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ky=Xt("chevron-right",Zy);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Fg=Xt("cloud",Qy);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Oc=Xt("code",Jy);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],eb=Xt("coffee",$y);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],wh=Xt("database",tb);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ib=Xt("download",nb);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Dc=Xt("external-link",ab);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Hg=Xt("github",rb);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ob=Xt("globe",sb);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],cb=Xt("heart",lb);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],fb=Xt("instagram",ub);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],hb=Xt("linkedin",db);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],mb=Xt("mail",pb);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Gg=Xt("map-pin",xb);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],vb=Xt("message-square",gb);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],yb=Xt("palette",_b);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Sb=Xt("phone",bb);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Vg=Xt("send",Mb);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Tb=Xt("server",Eb);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ch=Xt("sparkles",Ab);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],kg=Xt("trending-up",Rb);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Cb=Xt("twitter",wb);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Nb=Xt("users",Db);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Lb=Xt("zap",Ub),Ob=()=>{const o=[{label:"Home",href:"#home",isActive:!0},{label:"Experience",href:"#experience"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"},{label:"Contact",href:"#contact"}];return w.jsxs("nav",{className:"flex items-center justify-between mb-12",children:[w.jsx("div",{className:"text-white text-2xl font-bold",children:"Abhishek "}),w.jsxs("div",{className:"flex items-center gap-8",children:[o.map(t=>w.jsx("a",{href:t.href,className:`font-medium transition ${t.isActive?"text-orange-500 hover:text-orange-400":"text-gray-300 hover:text-white"}`,children:t.label},t.href)),w.jsxs("a",{href:"/Abhishek_Kumar_Resume.pdf",download:"Abhishek_Kumar_Resume.pdf",className:"bg-orange-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-orange-600 transition flex items-center gap-2",children:[w.jsx("span",{children:"Download CV"}),w.jsx(ib,{className:"w-4 h-4"})]})]})]})},ec=({children:o,delay:t,position:i})=>{const[r,l]=yt.useState(!1);return yt.useEffect(()=>{const c=setTimeout(()=>{l(!0)},t);return()=>clearTimeout(c)},[t]),w.jsx("div",{className:`absolute ${i} transition-all duration-1000 transform ${r?"opacity-100 scale-100 translate-y-0":"opacity-0 scale-50 translate-y-10"}`,style:{animation:r?"float 3s ease-in-out infinite":"none"},children:o})},tc=({icon:o,color:t,size:i="w-12 h-12"})=>w.jsx("div",{className:`${i} ${t} rounded-xl p-3 shadow-lg backdrop-blur-sm bg-opacity-80`,children:o&&w.jsx(o,{className:"w-full h-full text-white"})}),Ix=({label:o,value:t})=>w.jsxs("div",{className:"bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-4 border border-orange-500 border-opacity-30",children:[w.jsx("p",{className:"text-gray-400 text-sm mb-1",children:o}),w.jsx("p",{className:"text-white text-2xl font-bold",children:t})]}),zb=()=>w.jsxs("div",{className:"bg-black bg-opacity-50 backdrop-blur-md rounded-2xl p-5 border border-orange-500 border-opacity-20 max-w-xs",children:[w.jsx("p",{className:"text-gray-300 text-sm mb-4 leading-relaxed",children:`"I enjoyed the way he got started with an idea, understood everything and never said it's hard work."`}),w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center",children:w.jsx("span",{className:"text-white font-bold text-lg",children:"N"})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-white font-semibold text-sm",children:"Abhishek Kumar"}),w.jsx("p",{className:"text-gray-400 text-xs",children:"Software Developer"})]})]})]}),Pb="/assets/me-Czgu_wTG.jpg",Ib=()=>{const[o,t]=yt.useState(!1);return yt.useEffect(()=>{const i=setTimeout(()=>t(!0),800);return()=>{clearTimeout(i)}},[]),w.jsxs("section",{id:"home",className:"min-h-screen bg-gradient-to-br from-gray-900  to-gray-900 overflow-hidden",children:[w.jsx("style",{children:`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.5); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.8); }
        }
      `}),w.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-6",children:[w.jsx(Ob,{}),w.jsxs("div",{className:"grid grid-cols-2 gap-12 items-center mt-16 relative",children:[w.jsxs("div",{className:"space-y-6 z-10",children:[w.jsxs("div",{className:"space-y-2",children:[w.jsx("p",{className:"text-orange-500 text-lg",children:"Hey, I am Abhishek Kumar"}),w.jsx("h1",{className:"text-6xl font-bold text-white leading-tight",children:"Software developer"}),w.jsx("p",{className:"text-gray-400 text-lg max-w-md",children:"Hey! I'm a software developer who gets excited about turning ideas into reality. I love creating cool stuff that solves real problems."})]}),w.jsxs("div",{className:"flex gap-4",children:[w.jsx("a",{href:"/Abhishek_Kumar_Resume.pdf",download:"Abhishek_Kumar_Resume.pdf",className:"bg-orange-500 px-8 py-3 rounded-full text-white font-medium hover:bg-orange-600 transition shadow-lg hover:shadow-xl",children:"Hire Me"}),w.jsx("a",{href:"#projects",className:"border-2 border-white px-8 py-3 rounded-full text-white font-medium hover:bg-white hover:text-gray-900 transition",children:"Projects"})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-8 max-w-md",children:[w.jsx(Ix,{label:"Years Experience",value:"5"}),w.jsx(Ix,{label:"Projects Completed",value:"8+"})]}),w.jsx("div",{className:"mt-8",children:w.jsx(zb,{})})]}),w.jsxs("div",{className:"relative h-[600px]",children:[w.jsx("div",{className:`absolute right-0 bottom-0 w-[500px] h-[550px] z-30 transition-all duration-1000 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:w.jsx("img",{src:Pb,alt:"Developer Character",className:"w-full h-auto object-contain rounded-full"})}),w.jsx(ec,{delay:1200,position:"top-20 right-4 z-40",children:w.jsx(tc,{icon:Oc,color:"bg-blue-500"})}),w.jsx(ec,{delay:1400,position:"top-60 left-10 z-40",children:w.jsx(tc,{icon:yb,color:"bg-pink-500"})}),w.jsx(ec,{delay:1600,position:"bottom-40 left-20 z-40",children:w.jsx(tc,{icon:wh,color:"bg-green-500"})}),w.jsx(ec,{delay:1800,position:"top-80 pt-20 right-10 z-40",children:w.jsx(tc,{icon:ob,color:"bg-purple-500",size:"w-10 h-10"})})]})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="181",Bb=0,Bx=1,Fb=2,jg=1,Hb=2,ca=3,Ka=0,qn=1,ua=2,ha=0,_s=1,Oo=2,Fx=3,Hx=4,Gb=5,Sr=100,Vb=101,kb=102,jb=103,Xb=104,qb=200,Wb=201,Yb=202,Zb=203,Id=204,Bd=205,Kb=206,Qb=207,Jb=208,$b=209,eS=210,tS=211,nS=212,iS=213,aS=214,Fd=0,Hd=1,Gd=2,bs=3,Vd=4,kd=5,jd=6,Xd=7,Nh=0,rS=1,sS=2,Za=0,oS=1,lS=2,cS=3,uS=4,fS=5,dS=6,hS=7,Xg=300,Ss=301,Ms=302,qd=303,Wd=304,zc=306,Yd=1e3,fa=1001,Zd=1002,ri=1003,pS=1004,nc=1005,gi=1006,rd=1007,Er=1008,Oi=1009,qg=1010,Wg=1011,zo=1012,Uh=1013,Tr=1014,da=1015,As=1016,Lh=1017,Oh=1018,Po=1020,Yg=35902,Zg=35899,Kg=1021,Qg=1022,Ai=1023,Io=1026,Bo=1027,Jg=1028,zh=1029,Ph=1030,Ih=1031,Bh=1033,Tc=33776,Ac=33777,Rc=33778,wc=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,eh=36196,th=37492,nh=37496,ih=37808,ah=37809,rh=37810,sh=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,xh=37821,gh=36492,vh=36494,_h=36495,yh=36283,bh=36284,Sh=36285,Mh=36286,mS=3200,xS=3201,$g=0,gS=1,Wa="",xi="srgb",Es="srgb-linear",Nc="linear",kt="srgb",rs=7680,Gx=519,vS=512,_S=513,yS=514,ev=515,bS=516,SS=517,MS=518,ES=519,Vx=35044,kx="300 es",Li=2e3,Uc=2001;function tv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Lc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function TS(){const o=Lc("canvas");return o.style.display="block",o}const jx={};function Xx(...o){const t="THREE."+o.shift();console.log(t,...o)}function ot(...o){const t="THREE."+o.shift();console.warn(t,...o)}function on(...o){const t="THREE."+o.shift();console.error(t,...o)}function Fo(...o){const t=o.join(" ");t in jx||(jx[t]=!0,ot(...o))}function AS(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Rs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sd=Math.PI/180,Eh=180/Math.PI;function Ho(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function Tt(o,t,i){return Math.max(t,Math.min(i,o))}function RS(o,t){return(o%t+t)%t}function od(o,t,i){return(1-i)*o+i*t}function Ao(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class At{constructor(t=0,i=0){At.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Tt(this.x,t.x,i.x),this.y=Tt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Tt(this.x,t,i),this.y=Tt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Tt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Go{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],g=r[l+3],y=c[d+0],S=c[d+1],E=c[d+2],A=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g;return}if(h>=1){t[i+0]=y,t[i+1]=S,t[i+2]=E,t[i+3]=A;return}if(g!==A||m!==y||p!==S||x!==E){let b=m*y+p*S+x*E+g*A;b<0&&(y=-y,S=-S,E=-E,A=-A,b=-b);let _=1-h;if(b<.9995){const U=Math.acos(b),N=Math.sin(U);_=Math.sin(_*U)/N,h=Math.sin(h*U)/N,m=m*_+y*h,p=p*_+S*h,x=x*_+E*h,g=g*_+A*h}else{m=m*_+y*h,p=p*_+S*h,x=x*_+E*h,g=g*_+A*h;const U=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=U,p*=U,x*=U,g*=U}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],g=c[d],y=c[d+1],S=c[d+2],E=c[d+3];return t[i]=h*E+x*g+m*S-p*y,t[i+1]=m*E+x*y+p*g-h*S,t[i+2]=p*E+x*S+h*y-m*g,t[i+3]=x*E-h*g-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),g=h(c/2),y=m(r/2),S=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=y*x*g+p*S*E,this._y=p*S*g-y*x*E,this._z=p*x*E+y*S*g,this._w=p*x*g-y*S*E;break;case"YXZ":this._x=y*x*g+p*S*E,this._y=p*S*g-y*x*E,this._z=p*x*E-y*S*g,this._w=p*x*g+y*S*E;break;case"ZXY":this._x=y*x*g-p*S*E,this._y=p*S*g+y*x*E,this._z=p*x*E+y*S*g,this._w=p*x*g-y*S*E;break;case"ZYX":this._x=y*x*g-p*S*E,this._y=p*S*g+y*x*E,this._z=p*x*E-y*S*g,this._w=p*x*g+y*S*E;break;case"YZX":this._x=y*x*g+p*S*E,this._y=p*S*g+y*x*E,this._z=p*x*E-y*S*g,this._w=p*x*g-y*S*E;break;case"XZY":this._x=y*x*g-p*S*E,this._y=p*S*g-y*x*E,this._z=p*x*E+y*S*g,this._w=p*x*g+y*S*E;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],y=r+h+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(x-m)*S,this._y=(c-p)*S,this._z=(d-l)*S}else if(r>h&&r>g){const S=2*Math.sqrt(1+r-h-g);this._w=(x-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+p)/S}else if(h>g){const S=2*Math.sqrt(1+h-r-g);this._w=(c-p)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+x)/S}else{const S=2*Math.sqrt(1+g-r-h);this._w=(d-l)/S,this._x=(c+p)/S,this._y=(m+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Tt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-c*m,this._y=l*x+d*m+c*h-r*p,this._z=c*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,r=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(qx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(qx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),x=2*(h*i-c*l),g=2*(c*r-d*i);return this.x=i+m*p+d*g-h*x,this.y=r+m*x+h*p-c*g,this.z=l+m*g+c*x-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Tt(this.x,t.x,i.x),this.y=Tt(this.y,t.y,i.y),this.z=Tt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Tt(this.x,t,i),this.y=Tt(this.y,t,i),this.z=Tt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ld.copy(this).projectOnVector(t),this.sub(ld)}reflect(t){return this.sub(ld.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Tt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ld=new J,qx=new Go;class ft{constructor(t,i,r,l,c,d,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p)}set(t,i,r,l,c,d,h,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],g=r[7],y=r[2],S=r[5],E=r[8],A=l[0],b=l[3],_=l[6],U=l[1],N=l[4],z=l[7],G=l[2],L=l[5],I=l[8];return c[0]=d*A+h*U+m*G,c[3]=d*b+h*N+m*L,c[6]=d*_+h*z+m*I,c[1]=p*A+x*U+g*G,c[4]=p*b+x*N+g*L,c[7]=p*_+x*z+g*I,c[2]=y*A+S*U+E*G,c[5]=y*b+S*N+E*L,c[8]=y*_+S*z+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8];return i*d*x-i*h*p-r*c*x+r*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],g=x*d-h*p,y=h*m-x*c,S=p*c-d*m,E=i*g+r*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=g*A,t[1]=(l*p-x*r)*A,t[2]=(h*r-l*d)*A,t[3]=y*A,t[4]=(x*i-l*m)*A,t[5]=(l*c-h*i)*A,t[6]=S*A,t[7]=(r*m-p*i)*A,t[8]=(d*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(cd.makeScale(t,i)),this}rotate(t){return this.premultiply(cd.makeRotation(-t)),this}translate(t,i){return this.premultiply(cd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cd=new ft,Wx=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yx=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wS(){const o={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===kt&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(l.r=ys(l.r),l.g=ys(l.g),l.b=ys(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Nc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Es]:{primaries:t,whitePoint:r,transfer:Nc,toXYZ:Wx,fromXYZ:Yx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:r,transfer:kt,toXYZ:Wx,fromXYZ:Yx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),o}const Lt=wS();function pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ys(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ss;class CS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ss===void 0&&(ss=Lc("canvas")),ss.width=t.width,ss.height=t.height;const l=ss.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Lc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=pa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(pa(i[r]/255)*255):i[r]=pa(i[r]);return{data:i,width:t.width,height:t.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let DS=0;class Fh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Ho(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(ud(l[d].image)):c.push(ud(l[d]))}else c=ud(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function ud(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?CS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let NS=0;const fd=new J;class Pn extends Rs{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=fa,l=fa,c=gi,d=Er,h=Ai,m=Oi,p=Pn.DEFAULT_ANISOTROPY,x=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Ho(),this.name="",this.source=new Fh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yd:t.x=t.x-Math.floor(t.x);break;case fa:t.x=t.x<0?0:1;break;case Zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yd:t.y=t.y-Math.floor(t.y);break;case fa:t.y=t.y<0?0:1;break;case Zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Xg;Pn.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,i=0,r=0,l=1){jt.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],x=m[4],g=m[8],y=m[1],S=m[5],E=m[9],A=m[2],b=m[6],_=m[10];if(Math.abs(x-y)<.01&&Math.abs(g-A)<.01&&Math.abs(E-b)<.01){if(Math.abs(x+y)<.1&&Math.abs(g+A)<.1&&Math.abs(E+b)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,z=(S+1)/2,G=(_+1)/2,L=(x+y)/4,I=(g+A)/4,W=(E+b)/4;return N>z&&N>G?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=L/r,c=I/r):z>G?z<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(z),r=L/l,c=W/l):G<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),r=I/c,l=W/c),this.set(r,l,c,i),this}let U=Math.sqrt((b-E)*(b-E)+(g-A)*(g-A)+(y-x)*(y-x));return Math.abs(U)<.001&&(U=1),this.x=(b-E)/U,this.y=(g-A)/U,this.z=(y-x)/U,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Tt(this.x,t.x,i.x),this.y=Tt(this.y,t.y,i.y),this.z=Tt(this.z,t.z,i.z),this.w=Tt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Tt(this.x,t,i),this.y=Tt(this.y,t,i),this.z=Tt(this.z,t,i),this.w=Tt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class US extends Rs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new jt(0,0,t,i),this.scissorTest=!1,this.viewport=new jt(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Pn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:gi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Fh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends US{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class nv extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class LS extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Si.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Si.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Si.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Si):Si.fromBufferAttribute(c,d),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ic.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ic.copy(r.boundingBox)),ic.applyMatrix4(t.matrixWorld),this.union(ic)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),ac.subVectors(this.max,Ro),os.subVectors(t.a,Ro),ls.subVectors(t.b,Ro),cs.subVectors(t.c,Ro),Ga.subVectors(ls,os),Va.subVectors(cs,ls),mr.subVectors(os,cs);let i=[0,-Ga.z,Ga.y,0,-Va.z,Va.y,0,-mr.z,mr.y,Ga.z,0,-Ga.x,Va.z,0,-Va.x,mr.z,0,-mr.x,-Ga.y,Ga.x,0,-Va.y,Va.x,0,-mr.y,mr.x,0];return!dd(i,os,ls,cs,ac)||(i=[1,0,0,0,1,0,0,0,1],!dd(i,os,ls,cs,ac))?!1:(rc.crossVectors(Ga,Va),i=[rc.x,rc.y,rc.z],dd(i,os,ls,cs,ac))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ia=[new J,new J,new J,new J,new J,new J,new J,new J],Si=new J,ic=new Vo,os=new J,ls=new J,cs=new J,Ga=new J,Va=new J,mr=new J,Ro=new J,ac=new J,rc=new J,xr=new J;function dd(o,t,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){xr.fromArray(o,c);const h=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=t.dot(xr),p=i.dot(xr),x=r.dot(xr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const OS=new Vo,wo=new J,hd=new J;class Pc{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):OS.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(hd)),this.expandByPoint(wo.copy(t.center).sub(hd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const aa=new J,pd=new J,sc=new J,ka=new J,md=new J,oc=new J,xd=new J;class iv{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,aa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=aa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){pd.copy(t).add(i).multiplyScalar(.5),sc.copy(i).sub(t).normalize(),ka.copy(this.origin).sub(pd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(sc),h=ka.dot(this.direction),m=-ka.dot(sc),p=ka.lengthSq(),x=Math.abs(1-d*d);let g,y,S,E;if(x>0)if(g=d*m-h,y=d*h-m,E=c*x,g>=0)if(y>=-E)if(y<=E){const A=1/x;g*=A,y*=A,S=g*(g+d*y+2*h)+y*(d*g+y+2*m)+p}else y=c,g=Math.max(0,-(d*y+h)),S=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(d*y+h)),S=-g*g+y*(y+2*m)+p;else y<=-E?(g=Math.max(0,-(-d*c+h)),y=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p):y<=E?(g=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(g=Math.max(0,-(d*c+h)),y=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p);else y=d>0?-c:c,g=Math.max(0,-(d*y+h)),S=-g*g+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(pd).addScaledVector(sc,y),S}intersectSphere(t,i){aa.subVectors(t.center,this.origin);const r=aa.dot(this.direction),l=aa.dot(aa)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),x>=0?(c=(t.min.y-y.y)*x,d=(t.max.y-y.y)*x):(c=(t.max.y-y.y)*x,d=(t.min.y-y.y)*x),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-y.z)*g,m=(t.max.z-y.z)*g):(h=(t.max.z-y.z)*g,m=(t.min.z-y.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,aa)!==null}intersectTriangle(t,i,r,l,c){md.subVectors(i,t),oc.subVectors(r,t),xd.crossVectors(md,oc);let d=this.direction.dot(xd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ka.subVectors(this.origin,t);const m=h*this.direction.dot(oc.crossVectors(ka,oc));if(m<0)return null;const p=h*this.direction.dot(md.cross(ka));if(p<0||m+p>d)return null;const x=-h*ka.dot(xd);return x<0?null:this.at(x/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,i,r,l,c,d,h,m,p,x,g,y,S,E,A,b){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p,x,g,y,S,E,A,b)}set(t,i,r,l,c,d,h,m,p,x,g,y,S,E,A,b){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=x,_[10]=g,_[14]=y,_[3]=S,_[7]=E,_[11]=A,_[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/us.setFromMatrixColumn(t,0).length(),c=1/us.setFromMatrixColumn(t,1).length(),d=1/us.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const y=d*x,S=d*g,E=h*x,A=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=S+E*p,i[5]=y-A*p,i[9]=-h*m,i[2]=A-y*p,i[6]=E+S*p,i[10]=d*m}else if(t.order==="YXZ"){const y=m*x,S=m*g,E=p*x,A=p*g;i[0]=y+A*h,i[4]=E*h-S,i[8]=d*p,i[1]=d*g,i[5]=d*x,i[9]=-h,i[2]=S*h-E,i[6]=A+y*h,i[10]=d*m}else if(t.order==="ZXY"){const y=m*x,S=m*g,E=p*x,A=p*g;i[0]=y-A*h,i[4]=-d*g,i[8]=E+S*h,i[1]=S+E*h,i[5]=d*x,i[9]=A-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const y=d*x,S=d*g,E=h*x,A=h*g;i[0]=m*x,i[4]=E*p-S,i[8]=y*p+A,i[1]=m*g,i[5]=A*p+y,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const y=d*m,S=d*p,E=h*m,A=h*p;i[0]=m*x,i[4]=A-y*g,i[8]=E*g+S,i[1]=g,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=S*g+E,i[10]=y-A*g}else if(t.order==="XZY"){const y=d*m,S=d*p,E=h*m,A=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=y*g+A,i[5]=d*x,i[9]=S*g-E,i[2]=E*g-S,i[6]=h*x,i[10]=A*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zS,t,PS)}lookAt(t,i,r){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),ja.crossVectors(r,ii),ja.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),ja.crossVectors(r,ii)),ja.normalize(),lc.crossVectors(ii,ja),l[0]=ja.x,l[4]=lc.x,l[8]=ii.x,l[1]=ja.y,l[5]=lc.y,l[9]=ii.y,l[2]=ja.z,l[6]=lc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],g=r[5],y=r[9],S=r[13],E=r[2],A=r[6],b=r[10],_=r[14],U=r[3],N=r[7],z=r[11],G=r[15],L=l[0],I=l[4],W=l[8],D=l[12],C=l[1],j=l[5],te=l[9],ce=l[13],xe=l[2],de=l[6],F=l[10],K=l[14],Z=l[3],ve=l[7],_e=l[11],P=l[15];return c[0]=d*L+h*C+m*xe+p*Z,c[4]=d*I+h*j+m*de+p*ve,c[8]=d*W+h*te+m*F+p*_e,c[12]=d*D+h*ce+m*K+p*P,c[1]=x*L+g*C+y*xe+S*Z,c[5]=x*I+g*j+y*de+S*ve,c[9]=x*W+g*te+y*F+S*_e,c[13]=x*D+g*ce+y*K+S*P,c[2]=E*L+A*C+b*xe+_*Z,c[6]=E*I+A*j+b*de+_*ve,c[10]=E*W+A*te+b*F+_*_e,c[14]=E*D+A*ce+b*K+_*P,c[3]=U*L+N*C+z*xe+G*Z,c[7]=U*I+N*j+z*de+G*ve,c[11]=U*W+N*te+z*F+G*_e,c[15]=U*D+N*ce+z*K+G*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],x=t[2],g=t[6],y=t[10],S=t[14],E=t[3],A=t[7],b=t[11],_=t[15];return E*(+c*m*g-l*p*g-c*h*y+r*p*y+l*h*S-r*m*S)+A*(+i*m*S-i*p*y+c*d*y-l*d*S+l*p*x-c*m*x)+b*(+i*p*g-i*h*S-c*d*g+r*d*S+c*h*x-r*p*x)+_*(-l*h*x-i*m*g+i*h*y+l*d*g-r*d*y+r*m*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],g=t[9],y=t[10],S=t[11],E=t[12],A=t[13],b=t[14],_=t[15],U=g*b*p-A*y*p+A*m*S-h*b*S-g*m*_+h*y*_,N=E*y*p-x*b*p-E*m*S+d*b*S+x*m*_-d*y*_,z=x*A*p-E*g*p+E*h*S-d*A*S-x*h*_+d*g*_,G=E*g*m-x*A*m-E*h*y+d*A*y+x*h*b-d*g*b,L=i*U+r*N+l*z+c*G;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=U*I,t[1]=(A*y*c-g*b*c-A*l*S+r*b*S+g*l*_-r*y*_)*I,t[2]=(h*b*c-A*m*c+A*l*p-r*b*p-h*l*_+r*m*_)*I,t[3]=(g*m*c-h*y*c-g*l*p+r*y*p+h*l*S-r*m*S)*I,t[4]=N*I,t[5]=(x*b*c-E*y*c+E*l*S-i*b*S-x*l*_+i*y*_)*I,t[6]=(E*m*c-d*b*c-E*l*p+i*b*p+d*l*_-i*m*_)*I,t[7]=(d*y*c-x*m*c+x*l*p-i*y*p-d*l*S+i*m*S)*I,t[8]=z*I,t[9]=(E*g*c-x*A*c-E*r*S+i*A*S+x*r*_-i*g*_)*I,t[10]=(d*A*c-E*h*c+E*r*p-i*A*p-d*r*_+i*h*_)*I,t[11]=(x*h*c-d*g*c-x*r*p+i*g*p+d*r*S-i*h*S)*I,t[12]=G*I,t[13]=(x*A*l-E*g*l+E*r*y-i*A*y-x*r*b+i*g*b)*I,t[14]=(E*h*l-d*A*l-E*r*m+i*A*m+d*r*b-i*h*b)*I,t[15]=(d*g*l-x*h*l+x*r*m-i*g*m-d*r*y+i*h*y)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,h=t.y,m=t.z,p=c*d,x=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,x=d+d,g=h+h,y=c*p,S=c*x,E=c*g,A=d*x,b=d*g,_=h*g,U=m*p,N=m*x,z=m*g,G=r.x,L=r.y,I=r.z;return l[0]=(1-(A+_))*G,l[1]=(S+z)*G,l[2]=(E-N)*G,l[3]=0,l[4]=(S-z)*L,l[5]=(1-(y+_))*L,l[6]=(b+U)*L,l[7]=0,l[8]=(E+N)*I,l[9]=(b-U)*I,l[10]=(1-(y+A))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=us.set(l[0],l[1],l[2]).length();const d=us.set(l[4],l[5],l[6]).length(),h=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Mi.copy(this);const p=1/c,x=1/d,g=1/h;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=x,Mi.elements[5]*=x,Mi.elements[6]*=x,Mi.elements[8]*=g,Mi.elements[9]*=g,Mi.elements[10]*=g,i.setFromRotationMatrix(Mi),r.x=c,r.y=d,r.z=h,this}makePerspective(t,i,r,l,c,d,h=Li,m=!1){const p=this.elements,x=2*c/(i-t),g=2*c/(r-l),y=(i+t)/(i-t),S=(r+l)/(r-l);let E,A;if(m)E=c/(d-c),A=d*c/(d-c);else if(h===Li)E=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(h===Uc)E=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,d,h=Li,m=!1){const p=this.elements,x=2/(i-t),g=2/(r-l),y=-(i+t)/(i-t),S=-(r+l)/(r-l);let E,A;if(m)E=1/(d-c),A=d/(d-c);else if(h===Li)E=-2/(d-c),A=-(d+c)/(d-c);else if(h===Uc)E=-1/(d-c),A=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const us=new J,Mi=new en,zS=new J(0,0,0),PS=new J(1,1,1),ja=new J,lc=new J,ii=new J,Zx=new en,Kx=new Go;class zi{constructor(t=0,i=0,r=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,S),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Zx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Kx.setFromEuler(this),this.setFromQuaternion(Kx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class av{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let IS=0;const Qx=new J,fs=new Go,ra=new en,cc=new J,Co=new J,BS=new J,FS=new Go,Jx=new J(1,0,0),$x=new J(0,1,0),eg=new J(0,0,1),tg={type:"added"},HS={type:"removed"},ds={type:"childadded",child:null},gd={type:"childremoved",child:null};class In extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const t=new J,i=new zi,r=new Go,l=new J(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ft}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Jx,t)}rotateY(t){return this.rotateOnAxis($x,t)}rotateZ(t){return this.rotateOnAxis(eg,t)}translateOnAxis(t,i){return Qx.copy(t).applyQuaternion(this.quaternion),this.position.add(Qx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Jx,t)}translateY(t){return this.translateOnAxis($x,t)}translateZ(t){return this.translateOnAxis(eg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?cc.copy(t):cc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Co,cc,this.up):ra.lookAt(cc,Co,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),fs.setFromRotationMatrix(ra),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(on("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tg),ds.child=t,this.dispatchEvent(ds),ds.child=null):on("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(HS),gd.child=t,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tg),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,BS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,FS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),x=d(t.images),g=d(t.shapes),y=d(t.skeletons),S=d(t.animations),E=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}In.DEFAULT_UP=new J(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new J,sa=new J,vd=new J,oa=new J,hs=new J,ps=new J,ng=new J,_d=new J,yd=new J,bd=new J,Sd=new jt,Md=new jt,Ed=new jt;class Ti{constructor(t=new J,i=new J,r=new J){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ei.subVectors(t,i),l.cross(Ei);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ei.subVectors(l,i),sa.subVectors(r,i),vd.subVectors(t,i);const d=Ei.dot(Ei),h=Ei.dot(sa),m=Ei.dot(vd),p=sa.dot(sa),x=sa.dot(vd),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const y=1/g,S=(p*m-h*x)*y,E=(d*x-h*m)*y;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(t,i,r,l,c,d,h,m){return this.getBarycoord(t,i,r,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,oa.x),m.addScaledVector(d,oa.y),m.addScaledVector(h,oa.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return Sd.setScalar(0),Md.setScalar(0),Ed.setScalar(0),Sd.fromBufferAttribute(t,i),Md.fromBufferAttribute(t,r),Ed.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Sd,c.x),d.addScaledVector(Md,c.y),d.addScaledVector(Ed,c.z),d}static isFrontFacing(t,i,r,l){return Ei.subVectors(r,i),sa.subVectors(t,i),Ei.cross(sa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Ei.cross(sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ti.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Ti.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,h;hs.subVectors(l,r),ps.subVectors(c,r),_d.subVectors(t,r);const m=hs.dot(_d),p=ps.dot(_d);if(m<=0&&p<=0)return i.copy(r);yd.subVectors(t,l);const x=hs.dot(yd),g=ps.dot(yd);if(x>=0&&g<=x)return i.copy(l);const y=m*g-x*p;if(y<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(hs,d);bd.subVectors(t,c);const S=hs.dot(bd),E=ps.dot(bd);if(E>=0&&S<=E)return i.copy(c);const A=S*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(ps,h);const b=x*E-S*g;if(b<=0&&g-x>=0&&S-E>=0)return ng.subVectors(c,l),h=(g-x)/(g-x+(S-E)),i.copy(l).addScaledVector(ng,h);const _=1/(b+A+y);return d=A*_,h=y*_,i.copy(r).addScaledVector(hs,d).addScaledVector(ps,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Td(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class bt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Lt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Lt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Lt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Lt.workingColorSpace){if(t=RS(t,1),i=Tt(i,0,1),r=Tt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Td(d,c,t+1/3),this.g=Td(d,c,t),this.b=Td(d,c,t-1/3)}return Lt.colorSpaceToWorking(this,l),this}setStyle(t,i=xi){function r(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=xi){const r=rv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Lt.workingToColorSpace(Un.copy(this),t),Math.round(Tt(Un.r*255,0,255))*65536+Math.round(Tt(Un.g*255,0,255))*256+Math.round(Tt(Un.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Lt.workingColorSpace){Lt.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,c=Un.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=x<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=Lt.workingColorSpace){return Lt.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=xi){Lt.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==xi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Xa),this.setHSL(Xa.h+t,Xa.s+i,Xa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Xa),t.getHSL(uc);const r=od(Xa.h,uc.h,i),l=od(Xa.s,uc.s,i),c=od(Xa.l,uc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new bt;bt.NAMES=rv;let GS=0;class ws extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=_s,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Bd,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(r.blending=this.blending),this.side!==Ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Id&&(r.blendSrc=this.blendSrc),this.blendDst!==Bd&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class sv extends ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new J,fc=new At;let VS=0;class Bn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Vx,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)fc.fromBufferAttribute(this,i),fc.applyMatrix3(t),this.setXY(i,fc.x,fc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vx&&(t.usage=this.usage),t}}class ov extends Bn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class lv extends Bn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class si extends Bn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let kS=0;const mi=new en,Ad=new In,ms=new J,ai=new Vo,Do=new Vo,Mn=new J;class Wn extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tv(t)?lv:ov)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,r){return mi.makeTranslation(t,i,r),this.applyMatrix4(mi),this}scale(t,i,r){return mi.makeScale(t,i,r),this.applyMatrix4(mi),this}lookAt(t){return Ad.lookAt(t),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new si(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){on("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&on('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){on("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Do.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ai.min,Do.min),ai.expandByPoint(Mn),Mn.addVectors(ai.max,Do.max),ai.expandByPoint(Mn)):(ai.expandByPoint(Do.min),ai.expandByPoint(Do.max))}ai.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Mn.fromBufferAttribute(h,p),m&&(ms.fromBufferAttribute(t,p),Mn.add(ms)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&on('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){on("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let W=0;W<r.count;W++)h[W]=new J,m[W]=new J;const p=new J,x=new J,g=new J,y=new At,S=new At,E=new At,A=new J,b=new J;function _(W,D,C){p.fromBufferAttribute(r,W),x.fromBufferAttribute(r,D),g.fromBufferAttribute(r,C),y.fromBufferAttribute(c,W),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),x.sub(p),g.sub(p),S.sub(y),E.sub(y);const j=1/(S.x*E.y-E.x*S.y);isFinite(j)&&(A.copy(x).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(j),b.copy(g).multiplyScalar(S.x).addScaledVector(x,-E.x).multiplyScalar(j),h[W].add(A),h[D].add(A),h[C].add(A),m[W].add(b),m[D].add(b),m[C].add(b))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let W=0,D=U.length;W<D;++W){const C=U[W],j=C.start,te=C.count;for(let ce=j,xe=j+te;ce<xe;ce+=3)_(t.getX(ce+0),t.getX(ce+1),t.getX(ce+2))}const N=new J,z=new J,G=new J,L=new J;function I(W){G.fromBufferAttribute(l,W),L.copy(G);const D=h[W];N.copy(D),N.sub(G.multiplyScalar(G.dot(D))).normalize(),z.crossVectors(L,D);const j=z.dot(m[W])<0?-1:1;d.setXYZW(W,N.x,N.y,N.z,j)}for(let W=0,D=U.length;W<D;++W){const C=U[W],j=C.start,te=C.count;for(let ce=j,xe=j+te;ce<xe;ce+=3)I(t.getX(ce+0)),I(t.getX(ce+1)),I(t.getX(ce+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Bn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new J,c=new J,d=new J,h=new J,m=new J,p=new J,x=new J,g=new J;if(t)for(let y=0,S=t.count;y<S;y+=3){const E=t.getX(y+0),A=t.getX(y+1),b=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,b),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,b),h.add(x),m.add(x),p.add(x),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(h,m){const p=h.array,x=h.itemSize,g=h.normalized,y=new p.constructor(m.length*x);let S=0,E=0;for(let A=0,b=m.length;A<b;A++){h.isInterleavedBufferAttribute?S=m[A]*h.data.stride+h.offset:S=m[A]*x;for(let _=0;_<x;_++)y[E++]=p[S++]}return new Bn(y,x,g)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Wn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,g=p.length;x<g;x++){const y=p[x],S=t(y,r);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];x.push(S.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=t.morphAttributes;for(const p in c){const x=[],g=c[p];for(let y=0,S=g.length;y<S;y++)x.push(g[y].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,x=d.length;p<x;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ig=new en,gr=new iv,dc=new Pc,ag=new J,hc=new J,pc=new J,mc=new J,Rd=new J,xc=new J,rg=new J,gc=new J;class Pi extends In{constructor(t=new Wn,i=new sv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){xc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],g=c[m];x!==0&&(Rd.fromBufferAttribute(g,t),d?xc.addScaledVector(Rd,x):xc.addScaledVector(Rd.sub(i),x))}i.add(xc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),dc.copy(r.boundingSphere),dc.applyMatrix4(c),gr.copy(t.ray).recast(t.near),!(dc.containsPoint(gr.origin)===!1&&(gr.intersectSphere(dc,ag)===null||gr.origin.distanceToSquared(ag)>(t.far-t.near)**2))&&(ig.copy(c).invert(),gr.copy(t.ray).applyMatrix4(ig),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,gr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,y=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,A=y.length;E<A;E++){const b=y[E],_=d[b.materialIndex],U=Math.max(b.start,S.start),N=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let z=U,G=N;z<G;z+=3){const L=h.getX(z),I=h.getX(z+1),W=h.getX(z+2);l=vc(this,_,t,r,p,x,g,L,I,W),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let b=E,_=A;b<_;b+=3){const U=h.getX(b),N=h.getX(b+1),z=h.getX(b+2);l=vc(this,d,t,r,p,x,g,U,N,z),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,A=y.length;E<A;E++){const b=y[E],_=d[b.materialIndex],U=Math.max(b.start,S.start),N=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let z=U,G=N;z<G;z+=3){const L=z,I=z+1,W=z+2;l=vc(this,_,t,r,p,x,g,L,I,W),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let b=E,_=A;b<_;b+=3){const U=b,N=b+1,z=b+2;l=vc(this,d,t,r,p,x,g,U,N,z),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function jS(o,t,i,r,l,c,d,h){let m;if(t.side===qn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,t.side===Ka,h),m===null)return null;gc.copy(h),gc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(gc);return p<i.near||p>i.far?null:{distance:p,point:gc.clone(),object:o}}function vc(o,t,i,r,l,c,d,h,m,p){o.getVertexPosition(h,hc),o.getVertexPosition(m,pc),o.getVertexPosition(p,mc);const x=jS(o,t,i,r,hc,pc,mc,rg);if(x){const g=new J;Ti.getBarycoord(rg,hc,pc,mc,g),l&&(x.uv=Ti.getInterpolatedAttribute(l,h,m,p,g,new At)),c&&(x.uv1=Ti.getInterpolatedAttribute(c,h,m,p,g,new At)),d&&(x.normal=Ti.getInterpolatedAttribute(d,h,m,p,g,new J),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new J,materialIndex:0};Ti.getNormal(hc,pc,mc,y.normal),x.face=y,x.barycoord=g}return x}class Cs extends Wn{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],x=[],g=[];let y=0,S=0;E("z","y","x",-1,-1,r,i,t,d,c,0),E("z","y","x",1,-1,r,i,-t,d,c,1),E("x","z","y",1,1,t,r,i,l,d,2),E("x","z","y",1,-1,t,r,-i,l,d,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new si(p,3)),this.setAttribute("normal",new si(x,3)),this.setAttribute("uv",new si(g,2));function E(A,b,_,U,N,z,G,L,I,W,D){const C=z/I,j=G/W,te=z/2,ce=G/2,xe=L/2,de=I+1,F=W+1;let K=0,Z=0;const ve=new J;for(let _e=0;_e<F;_e++){const P=_e*j-ce;for(let se=0;se<de;se++){const Se=se*C-te;ve[A]=Se*U,ve[b]=P*N,ve[_]=xe,p.push(ve.x,ve.y,ve.z),ve[A]=0,ve[b]=0,ve[_]=L>0?1:-1,x.push(ve.x,ve.y,ve.z),g.push(se/I),g.push(1-_e/W),K+=1}}for(let _e=0;_e<W;_e++)for(let P=0;P<I;P++){const se=y+P+de*_e,Se=y+P+de*(_e+1),Te=y+(P+1)+de*(_e+1),ze=y+(P+1)+de*_e;m.push(se,Se,ze),m.push(Se,Te,ze),Z+=6}h.addGroup(S,Z,D),S+=Z,y+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)t[l]=r[l]}return t}function XS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function cv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Lt.workingColorSpace}const qS={clone:Ts,merge:zn};var WS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ma extends ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WS,this.fragmentShader=YS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=XS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class uv extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new J,sg=new At,og=new At;class Ln extends uv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Eh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eh*2*Math.atan(Math.tan(sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-t/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qa.x,qa.y).multiplyScalar(-t/qa.z)}getViewSize(t,i){return this.getViewBounds(t,sg,og),i.subVectors(og,sg)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(sd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,gs=1;class ZS extends In{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ln(xs,gs,t,i);l.layers=this.layers,this.add(l);const c=new Ln(xs,gs,t,i);c.layers=this.layers,this.add(c);const d=new Ln(xs,gs,t,i);d.layers=this.layers,this.add(d);const h=new Ln(xs,gs,t,i);h.layers=this.layers,this.add(h);const m=new Ln(xs,gs,t,i);m.layers=this.layers,this.add(m);const p=new Ln(xs,gs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Li)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Uc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,x]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,x),t.setRenderTarget(g,y,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class fv extends Pn{constructor(t=[],i=Ss,r,l,c,d,h,m,p,x){super(t,i,r,l,c,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class KS extends Ar{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new fv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Cs(5,5,5),c=new ma({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:ha});c.uniforms.tEquirect.value=i;const d=new Pi(l,c),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=gi),new ZS(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class _c extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QS={type:"move"};class wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const A of t.hand.values()){const b=i.getJointPose(A,r),_=this._getHandJoint(p,A);b!==null&&(_.matrix.fromArray(b.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=b.radius),_.visible=b!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=x.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(QS)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new _c;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Ic extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class JS extends Pn{constructor(t=null,i=1,r=1,l,c,d,h,m,p=ri,x=ri,g,y){super(null,d,h,m,p,x,l,c,g,y),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cd=new J,$S=new J,e1=new ft;class br{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Cd.subVectors(r,i).cross($S.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Cd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||e1.getNormalMatrix(t),l=this.coplanarPoint(Cd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Pc,t1=new At(.5,.5),yc=new J;class Hh{constructor(t=new br,i=new br,r=new br,l=new br,c=new br,d=new br){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Li,r=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],x=c[4],g=c[5],y=c[6],S=c[7],E=c[8],A=c[9],b=c[10],_=c[11],U=c[12],N=c[13],z=c[14],G=c[15];if(l[0].setComponents(p-d,S-x,_-E,G-U).normalize(),l[1].setComponents(p+d,S+x,_+E,G+U).normalize(),l[2].setComponents(p+h,S+g,_+A,G+N).normalize(),l[3].setComponents(p-h,S-g,_-A,G-N).normalize(),r)l[4].setComponents(m,y,b,z).normalize(),l[5].setComponents(p-m,S-y,_-b,G-z).normalize();else if(l[4].setComponents(p-m,S-y,_-b,G-z).normalize(),i===Li)l[5].setComponents(p+m,S+y,_+b,G+z).normalize();else if(i===Uc)l[5].setComponents(m,y,b,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(t){vr.center.set(0,0,0);const i=t1.distanceTo(t.center);return vr.radius=.7071067811865476+i,vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(yc.x=l.normal.x>0?t.max.x:t.min.x,yc.y=l.normal.y>0?t.max.y:t.min.y,yc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(yc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bc extends ws{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lg=new en,Th=new iv,bc=new Pc,Sc=new J;class Gh extends In{constructor(t=new Wn,i=new Bc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(l),bc.radius+=c,t.ray.intersectsSphere(bc)===!1)return;lg.copy(l).invert(),Th.copy(t.ray).applyMatrix4(lg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const y=Math.max(0,d.start),S=Math.min(p.count,d.start+d.count);for(let E=y,A=S;E<A;E++){const b=p.getX(E);Sc.fromBufferAttribute(g,b),cg(Sc,b,m,l,t,i,this)}}else{const y=Math.max(0,d.start),S=Math.min(g.count,d.start+d.count);for(let E=y,A=S;E<A;E++)Sc.fromBufferAttribute(g,E),cg(Sc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function cg(o,t,i,r,l,c,d){const h=Th.distanceSqToPoint(o);if(h<i){const m=new J;Th.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class dv extends Pn{constructor(t,i,r=Tr,l,c,d,h=ri,m=ri,p,x=Io,g=1){if(x!==Io&&x!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,c,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class hv extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Fc extends Wn{constructor(t=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:l};const c=[],d=[];h(l),p(r),x(),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(c.slice(),3)),this.setAttribute("uv",new si(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(U){const N=new J,z=new J,G=new J;for(let L=0;L<i.length;L+=3)S(i[L+0],N),S(i[L+1],z),S(i[L+2],G),m(N,z,G,U)}function m(U,N,z,G){const L=G+1,I=[];for(let W=0;W<=L;W++){I[W]=[];const D=U.clone().lerp(z,W/L),C=N.clone().lerp(z,W/L),j=L-W;for(let te=0;te<=j;te++)te===0&&W===L?I[W][te]=D:I[W][te]=D.clone().lerp(C,te/j)}for(let W=0;W<L;W++)for(let D=0;D<2*(L-W)-1;D++){const C=Math.floor(D/2);D%2===0?(y(I[W][C+1]),y(I[W+1][C]),y(I[W][C])):(y(I[W][C+1]),y(I[W+1][C+1]),y(I[W+1][C]))}}function p(U){const N=new J;for(let z=0;z<c.length;z+=3)N.x=c[z+0],N.y=c[z+1],N.z=c[z+2],N.normalize().multiplyScalar(U),c[z+0]=N.x,c[z+1]=N.y,c[z+2]=N.z}function x(){const U=new J;for(let N=0;N<c.length;N+=3){U.x=c[N+0],U.y=c[N+1],U.z=c[N+2];const z=b(U)/2/Math.PI+.5,G=_(U)/Math.PI+.5;d.push(z,1-G)}E(),g()}function g(){for(let U=0;U<d.length;U+=6){const N=d[U+0],z=d[U+2],G=d[U+4],L=Math.max(N,z,G),I=Math.min(N,z,G);L>.9&&I<.1&&(N<.2&&(d[U+0]+=1),z<.2&&(d[U+2]+=1),G<.2&&(d[U+4]+=1))}}function y(U){c.push(U.x,U.y,U.z)}function S(U,N){const z=U*3;N.x=t[z+0],N.y=t[z+1],N.z=t[z+2]}function E(){const U=new J,N=new J,z=new J,G=new J,L=new At,I=new At,W=new At;for(let D=0,C=0;D<c.length;D+=9,C+=6){U.set(c[D+0],c[D+1],c[D+2]),N.set(c[D+3],c[D+4],c[D+5]),z.set(c[D+6],c[D+7],c[D+8]),L.set(d[C+0],d[C+1]),I.set(d[C+2],d[C+3]),W.set(d[C+4],d[C+5]),G.copy(U).add(N).add(z).divideScalar(3);const j=b(G);A(L,C+0,U,j),A(I,C+2,N,j),A(W,C+4,z,j)}}function A(U,N,z,G){G<0&&U.x===1&&(d[N]=U.x-1),z.x===0&&z.z===0&&(d[N]=G/2/Math.PI+.5)}function b(U){return Math.atan2(U.z,-U.x)}function _(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fc(t.vertices,t.indices,t.radius,t.details)}}class Vh extends Fc{constructor(t=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Vh(t.radius,t.detail)}}class kh extends Fc{constructor(t=1,i=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,l,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new kh(t.radius,t.detail)}}class Hc extends Wn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,g=t/h,y=i/m,S=[],E=[],A=[],b=[];for(let _=0;_<x;_++){const U=_*y-d;for(let N=0;N<p;N++){const z=N*g-c;E.push(z,-U,0),A.push(0,0,1),b.push(N/h),b.push(1-_/m)}}for(let _=0;_<m;_++)for(let U=0;U<h;U++){const N=U+p*_,z=U+p*(_+1),G=U+1+p*(_+1),L=U+1+p*_;S.push(N,z,L),S.push(z,G,L)}this.setIndex(S),this.setAttribute("position",new si(E,3)),this.setAttribute("normal",new si(A,3)),this.setAttribute("uv",new si(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.width,t.height,t.widthSegments,t.heightSegments)}}class jh extends Wn{constructor(t=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const d=[],h=[],m=[],p=[],x=new J,g=new J,y=new J;for(let S=0;S<=r;S++)for(let E=0;E<=l;E++){const A=E/l*c,b=S/r*Math.PI*2;g.x=(t+i*Math.cos(b))*Math.cos(A),g.y=(t+i*Math.cos(b))*Math.sin(A),g.z=i*Math.sin(b),h.push(g.x,g.y,g.z),x.x=t*Math.cos(A),x.y=t*Math.sin(A),y.subVectors(g,x).normalize(),m.push(y.x,y.y,y.z),p.push(E/l),p.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=l;E++){const A=(l+1)*S+E-1,b=(l+1)*(S-1)+E-1,_=(l+1)*(S-1)+E,U=(l+1)*S+E;d.push(A,b,U),d.push(b,_,U)}this.setIndex(d),this.setAttribute("position",new si(h,3)),this.setAttribute("normal",new si(m,3)),this.setAttribute("uv",new si(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class pv extends ws{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new bt(16777215),this.specular=new bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$g,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class n1 extends ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class i1 extends ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class mv extends In{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Dd=new en,ug=new J,fg=new J;class a1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hh,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;ug.setFromMatrixPosition(t.matrixWorld),i.position.copy(ug),fg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(fg),i.updateMatrixWorld(),Dd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Dd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const dg=new en,No=new J,Nd=new J;class r1 extends a1{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,c=t.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),No.setFromMatrixPosition(t.matrixWorld),r.position.copy(No),Nd.copy(r.position),Nd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Nd),r.updateMatrixWorld(),l.makeTranslation(-No.x,-No.y,-No.z),dg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dg,r.coordinateSystem,r.reversedDepth)}}class Gc extends mv{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new r1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class s1 extends uv{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Vc extends mv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class o1 extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function hg(o,t,i,r){const l=l1(r);switch(i){case Kg:return o*t;case Jg:return o*t/l.components*l.byteLength;case zh:return o*t/l.components*l.byteLength;case Ph:return o*t*2/l.components*l.byteLength;case Ih:return o*t*2/l.components*l.byteLength;case Qg:return o*t*3/l.components*l.byteLength;case Ai:return o*t*4/l.components*l.byteLength;case Bh:return o*t*4/l.components*l.byteLength;case Tc:case Ac:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Rc:case wc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qd:case $d:return Math.max(o,16)*Math.max(t,8)/4;case Kd:case Jd:return Math.max(o,8)*Math.max(t,8)/2;case eh:case th:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case rh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case xh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case gh:case vh:case _h:return Math.ceil(o/4)*Math.ceil(t/4)*16;case yh:case bh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Sh:case Mh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function l1(o){switch(o){case Oi:case qg:return{byteLength:1,components:1};case zo:case Wg:case As:return{byteLength:2,components:1};case Lh:case Oh:return{byteLength:2,components:4};case Tr:case Uh:case da:return{byteLength:4,components:1};case Yg:case Zg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xv(){let o=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function c1(o){const t=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,x),h.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const x=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,x);else{g.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<g.length;S++){const E=g[y],A=g[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++y,g[y]=A)}g.length=y+1;for(let S=0,E=g.length;S<E;S++){const A=g[S];o.bufferSubData(p,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var u1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,d1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,g1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,L1=`#define PI 3.141592653589793
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,O1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,z1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,P1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H1="gl_FragColor = linearToOutputTexel( gl_FragColor );",G1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,J1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,nM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
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
}`,cM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_M=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JM=`#ifdef USE_SKINNING
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
#endif`,$M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a3=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,x3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,g3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,v3=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,E3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,A3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,w3=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,U3=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,O3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,P3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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
}`,B3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,V3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:u1,alphahash_pars_fragment:f1,alphamap_fragment:d1,alphamap_pars_fragment:h1,alphatest_fragment:p1,alphatest_pars_fragment:m1,aomap_fragment:x1,aomap_pars_fragment:g1,batching_pars_vertex:v1,batching_vertex:_1,begin_vertex:y1,beginnormal_vertex:b1,bsdfs:S1,iridescence_fragment:M1,bumpmap_pars_fragment:E1,clipping_planes_fragment:T1,clipping_planes_pars_fragment:A1,clipping_planes_pars_vertex:R1,clipping_planes_vertex:w1,color_fragment:C1,color_pars_fragment:D1,color_pars_vertex:N1,color_vertex:U1,common:L1,cube_uv_reflection_fragment:O1,defaultnormal_vertex:z1,displacementmap_pars_vertex:P1,displacementmap_vertex:I1,emissivemap_fragment:B1,emissivemap_pars_fragment:F1,colorspace_fragment:H1,colorspace_pars_fragment:G1,envmap_fragment:V1,envmap_common_pars_fragment:k1,envmap_pars_fragment:j1,envmap_pars_vertex:X1,envmap_physical_pars_fragment:nM,envmap_vertex:q1,fog_vertex:W1,fog_pars_vertex:Y1,fog_fragment:Z1,fog_pars_fragment:K1,gradientmap_pars_fragment:Q1,lightmap_pars_fragment:J1,lights_lambert_fragment:$1,lights_lambert_pars_fragment:eM,lights_pars_begin:tM,lights_toon_fragment:iM,lights_toon_pars_fragment:aM,lights_phong_fragment:rM,lights_phong_pars_fragment:sM,lights_physical_fragment:oM,lights_physical_pars_fragment:lM,lights_fragment_begin:cM,lights_fragment_maps:uM,lights_fragment_end:fM,logdepthbuf_fragment:dM,logdepthbuf_pars_fragment:hM,logdepthbuf_pars_vertex:pM,logdepthbuf_vertex:mM,map_fragment:xM,map_pars_fragment:gM,map_particle_fragment:vM,map_particle_pars_fragment:_M,metalnessmap_fragment:yM,metalnessmap_pars_fragment:bM,morphinstance_vertex:SM,morphcolor_vertex:MM,morphnormal_vertex:EM,morphtarget_pars_vertex:TM,morphtarget_vertex:AM,normal_fragment_begin:RM,normal_fragment_maps:wM,normal_pars_fragment:CM,normal_pars_vertex:DM,normal_vertex:NM,normalmap_pars_fragment:UM,clearcoat_normal_fragment_begin:LM,clearcoat_normal_fragment_maps:OM,clearcoat_pars_fragment:zM,iridescence_pars_fragment:PM,opaque_fragment:IM,packing:BM,premultiplied_alpha_fragment:FM,project_vertex:HM,dithering_fragment:GM,dithering_pars_fragment:VM,roughnessmap_fragment:kM,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:XM,shadowmap_pars_vertex:qM,shadowmap_vertex:WM,shadowmask_pars_fragment:YM,skinbase_vertex:ZM,skinning_pars_vertex:KM,skinning_vertex:QM,skinnormal_vertex:JM,specularmap_fragment:$M,specularmap_pars_fragment:e3,tonemapping_fragment:t3,tonemapping_pars_fragment:n3,transmission_fragment:i3,transmission_pars_fragment:a3,uv_pars_fragment:r3,uv_pars_vertex:s3,uv_vertex:o3,worldpos_vertex:l3,background_vert:c3,background_frag:u3,backgroundCube_vert:f3,backgroundCube_frag:d3,cube_vert:h3,cube_frag:p3,depth_vert:m3,depth_frag:x3,distanceRGBA_vert:g3,distanceRGBA_frag:v3,equirect_vert:_3,equirect_frag:y3,linedashed_vert:b3,linedashed_frag:S3,meshbasic_vert:M3,meshbasic_frag:E3,meshlambert_vert:T3,meshlambert_frag:A3,meshmatcap_vert:R3,meshmatcap_frag:w3,meshnormal_vert:C3,meshnormal_frag:D3,meshphong_vert:N3,meshphong_frag:U3,meshphysical_vert:L3,meshphysical_frag:O3,meshtoon_vert:z3,meshtoon_frag:P3,points_vert:I3,points_frag:B3,shadow_vert:F3,shadow_frag:H3,sprite_vert:G3,sprite_frag:V3},Le={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ui={basic:{uniforms:zn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:zn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new bt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:zn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:zn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:zn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new bt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:zn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:zn([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:zn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:zn([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:zn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:zn([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:zn([Le.common,Le.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:zn([Le.lights,Le.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ui.physical={uniforms:zn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Mc={r:0,b:0,g:0},_r=new zi,k3=new en;function j3(o,t,i,r,l,c,d){const h=new bt(0);let m=c===!0?0:1,p,x,g=null,y=0,S=null;function E(N){let z=N.isScene===!0?N.background:null;return z&&z.isTexture&&(z=(N.backgroundBlurriness>0?i:t).get(z)),z}function A(N){let z=!1;const G=E(N);G===null?_(h,m):G&&G.isColor&&(_(G,1),z=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||z)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(N,z){const G=E(z);G&&(G.isCubeTexture||G.mapping===zc)?(x===void 0&&(x=new Pi(new Cs(1,1,1),new ma({name:"BackgroundCubeMaterial",uniforms:Ts(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(L,I,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),_r.copy(z.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),x.material.uniforms.envMap.value=G,x.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(k3.makeRotationFromEuler(_r)),x.material.toneMapped=Lt.getTransfer(G.colorSpace)!==kt,(g!==G||y!==G.version||S!==o.toneMapping)&&(x.material.needsUpdate=!0,g=G,y=G.version,S=o.toneMapping),x.layers.enableAll(),N.unshift(x,x.geometry,x.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Pi(new Hc(2,2),new ma({name:"BackgroundMaterial",uniforms:Ts(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(G.colorSpace)!==kt,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(g!==G||y!==G.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,g=G,y=G.version,S=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,z){N.getRGB(Mc,cv(o)),r.buffers.color.setClear(Mc.r,Mc.g,Mc.b,z,d)}function U(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,z=1){h.set(N),m=z,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(h,m)},render:A,addToRenderList:b,dispose:U}}function X3(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,d=!1;function h(C,j,te,ce,xe){let de=!1;const F=g(ce,te,j);c!==F&&(c=F,p(c.object)),de=S(C,ce,te,xe),de&&E(C,ce,te,xe),xe!==null&&t.update(xe,o.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,z(C,j,te,ce),xe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(xe).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function g(C,j,te){const ce=te.wireframe===!0;let xe=r[C.id];xe===void 0&&(xe={},r[C.id]=xe);let de=xe[j.id];de===void 0&&(de={},xe[j.id]=de);let F=de[ce];return F===void 0&&(F=y(m()),de[ce]=F),F}function y(C){const j=[],te=[],ce=[];for(let xe=0;xe<i;xe++)j[xe]=0,te[xe]=0,ce[xe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:te,attributeDivisors:ce,object:C,attributes:{},index:null}}function S(C,j,te,ce){const xe=c.attributes,de=j.attributes;let F=0;const K=te.getAttributes();for(const Z in K)if(K[Z].location>=0){const _e=xe[Z];let P=de[Z];if(P===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),_e===void 0||_e.attribute!==P||P&&_e.data!==P.data)return!0;F++}return c.attributesNum!==F||c.index!==ce}function E(C,j,te,ce){const xe={},de=j.attributes;let F=0;const K=te.getAttributes();for(const Z in K)if(K[Z].location>=0){let _e=de[Z];_e===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(_e=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(_e=C.instanceColor));const P={};P.attribute=_e,_e&&_e.data&&(P.data=_e.data),xe[Z]=P,F++}c.attributes=xe,c.attributesNum=F,c.index=ce}function A(){const C=c.newAttributes;for(let j=0,te=C.length;j<te;j++)C[j]=0}function b(C){_(C,0)}function _(C,j){const te=c.newAttributes,ce=c.enabledAttributes,xe=c.attributeDivisors;te[C]=1,ce[C]===0&&(o.enableVertexAttribArray(C),ce[C]=1),xe[C]!==j&&(o.vertexAttribDivisor(C,j),xe[C]=j)}function U(){const C=c.newAttributes,j=c.enabledAttributes;for(let te=0,ce=j.length;te<ce;te++)j[te]!==C[te]&&(o.disableVertexAttribArray(te),j[te]=0)}function N(C,j,te,ce,xe,de,F){F===!0?o.vertexAttribIPointer(C,j,te,xe,de):o.vertexAttribPointer(C,j,te,ce,xe,de)}function z(C,j,te,ce){A();const xe=ce.attributes,de=te.getAttributes(),F=j.defaultAttributeValues;for(const K in de){const Z=de[K];if(Z.location>=0){let ve=xe[K];if(ve===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor)),ve!==void 0){const _e=ve.normalized,P=ve.itemSize,se=t.get(ve);if(se===void 0)continue;const Se=se.buffer,Te=se.type,ze=se.bytesPerElement,ae=Te===o.INT||Te===o.UNSIGNED_INT||ve.gpuType===Uh;if(ve.isInterleavedBufferAttribute){const ue=ve.data,Ce=ue.stride,He=ve.offset;if(ue.isInstancedInterleavedBuffer){for(let je=0;je<Z.locationSize;je++)_(Z.location+je,ue.meshPerAttribute);C.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let je=0;je<Z.locationSize;je++)b(Z.location+je);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let je=0;je<Z.locationSize;je++)N(Z.location+je,P/Z.locationSize,Te,_e,Ce*ze,(He+P/Z.locationSize*je)*ze,ae)}else{if(ve.isInstancedBufferAttribute){for(let ue=0;ue<Z.locationSize;ue++)_(Z.location+ue,ve.meshPerAttribute);C.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ue=0;ue<Z.locationSize;ue++)b(Z.location+ue);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let ue=0;ue<Z.locationSize;ue++)N(Z.location+ue,P/Z.locationSize,Te,_e,P*ze,P/Z.locationSize*ue*ze,ae)}}else if(F!==void 0){const _e=F[K];if(_e!==void 0)switch(_e.length){case 2:o.vertexAttrib2fv(Z.location,_e);break;case 3:o.vertexAttrib3fv(Z.location,_e);break;case 4:o.vertexAttrib4fv(Z.location,_e);break;default:o.vertexAttrib1fv(Z.location,_e)}}}}U()}function G(){W();for(const C in r){const j=r[C];for(const te in j){const ce=j[te];for(const xe in ce)x(ce[xe].object),delete ce[xe];delete j[te]}delete r[C]}}function L(C){if(r[C.id]===void 0)return;const j=r[C.id];for(const te in j){const ce=j[te];for(const xe in ce)x(ce[xe].object),delete ce[xe];delete j[te]}delete r[C.id]}function I(C){for(const j in r){const te=r[j];if(te[C.id]===void 0)continue;const ce=te[C.id];for(const xe in ce)x(ce[xe].object),delete ce[xe];delete te[C.id]}}function W(){D(),d=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:D,dispose:G,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:b,disableUnusedAttributes:U}}function q3(o,t,i){let r;function l(p){r=p}function c(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,g){g!==0&&(o.drawArraysInstanced(r,p,x,g),i.update(x,r,g))}function h(p,x,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,g);let S=0;for(let E=0;E<g;E++)S+=x[E];i.update(S,r,1)}function m(p,x,g,y){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)d(p[E],x[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,x,0,y,0,g);let E=0;for(let A=0;A<g;A++)E+=x[A]*y[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function W3(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Ai&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const W=I===As&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Oi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==da&&!W)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ot("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),z=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,L=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:b,maxAttributes:_,maxVertexUniforms:U,maxVaryings:N,maxFragmentUniforms:z,vertexTextures:G,maxSamples:L}}function Y3(o){const t=this;let i=null,r=0,l=!1,c=!1;const d=new br,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||r!==0||l;return l=y,r=g.length,S},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=x(g,y,0)},this.setState=function(g,y,S){const E=g.clippingPlanes,A=g.clipIntersection,b=g.clipShadows,_=o.get(g);if(!l||E===null||E.length===0||c&&!b)c?x(null):p();else{const U=c?0:r,N=U*4;let z=_.clippingState||null;m.value=z,z=x(E,y,N,S);for(let G=0;G!==N;++G)z[G]=i[G];_.clippingState=z,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(g,y,S,E){const A=g!==null?g.length:0;let b=null;if(A!==0){if(b=m.value,E!==!0||b===null){const _=S+A*4,U=y.matrixWorldInverse;h.getNormalMatrix(U),(b===null||b.length<_)&&(b=new Float32Array(_));for(let N=0,z=S;N!==A;++N,z+=4)d.copy(g[N]).applyMatrix4(U,h),d.normal.toArray(b,z),b[z+3]=d.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,b}}function Z3(o){let t=new WeakMap;function i(d,h){return h===qd?d.mapping=Ss:h===Wd&&(d.mapping=Ms),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===qd||h===Wd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new KS(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ya=4,pg=[.125,.215,.35,.446,.526,.582],Mr=20,K3=256,Uo=new s1,mg=new bt;let Ud=null,Ld=0,Od=0,zd=!1;const Q3=new J;class xg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=Q3}=c;Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ud,Ld,Od),this._renderer.xr.enabled=zd,t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ss||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:As,format:Ai,colorSpace:Es,depthBuffer:!1},l=gg(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gg(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=J3(c)),this._blurMaterial=e2(c,t,i),this._ggxMaterial=$3(c,t,i)}return l}_compileMaterial(t){const i=new Pi(new Wn,t);this._renderer.compile(i,Uo)}_sceneToCubeUV(t,i,r,l,c){const m=new Ln(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(mg),g.toneMapping=Za,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pi(new Cs,new sv({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,b=A.material;let _=!1;const U=t.background;U?U.isColor&&(b.color.copy(U),t.background=null,_=!0):(b.color.copy(mg),_=!0);for(let N=0;N<6;N++){const z=N%3;z===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[N],c.y,c.z)):z===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[N]));const G=this._cubeSize;vs(l,z*G,N>2?G:0,G,G),g.setRenderTarget(l),_&&g.render(A,m),g.render(t,m)}g.toneMapping=S,g.autoClear=y,t.background=U}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ss||t.mapping===Ms;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=_g()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;vs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Uo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),y=.05+p*.95,S=g*y,{_lodMax:E}=this,A=this._sizeLods[r],b=3*A*(r>E-Ya?r-E+Ya:0),_=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,vs(c,b,_,3*A,2*A),l.setRenderTarget(c),l.render(h,Uo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,vs(t,b,_,3*A,2*A),l.setRenderTarget(t),l.render(h,Uo)}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&on("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Mr-1),A=c/E,b=isFinite(c)?1+Math.floor(x*A):Mr;b>Mr&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Mr}`);const _=[];let U=0;for(let I=0;I<Mr;++I){const W=I/A,D=Math.exp(-W*W/2);_.push(D),I===0?U+=D:I<b&&(U+=2*D)}for(let I=0;I<_.length;I++)_[I]=_[I]/U;y.envMap.value=t.texture,y.samples.value=b,y.weights.value=_,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:N}=this;y.dTheta.value=E,y.mipInt.value=N-r;const z=this._sizeLods[l],G=3*z*(l>N-Ya?l-N+Ya:0),L=4*(this._cubeSize-z);vs(i,G,L,3*z,2*z),m.setRenderTarget(i),m.render(g,Uo)}}function J3(o){const t=[],i=[],r=[];let l=o;const c=o-Ya+1+pg.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-Ya?m=pg[d-o+Ya-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,g=1+p,y=[x,x,g,x,g,g,x,x,g,g,x,g],S=6,E=6,A=3,b=2,_=1,U=new Float32Array(A*E*S),N=new Float32Array(b*E*S),z=new Float32Array(_*E*S);for(let L=0;L<S;L++){const I=L%3*2/3-1,W=L>2?0:-1,D=[I,W,0,I+2/3,W,0,I+2/3,W+1,0,I,W,0,I+2/3,W+1,0,I,W+1,0];U.set(D,A*E*L),N.set(y,b*E*L);const C=[L,L,L,L,L,L];z.set(C,_*E*L)}const G=new Wn;G.setAttribute("position",new Bn(U,A)),G.setAttribute("uv",new Bn(N,b)),G.setAttribute("faceIndex",new Bn(z,_)),r.push(new Pi(G,null)),l>Ya&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function gg(o,t,i){const r=new Ar(o,t,i);return r.texture.mapping=zc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vs(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function $3(o,t,i){return new ma({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function e2(o,t,i){const r=new Float32Array(Mr),l=new J(0,1,0);return new ma({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kc(),fragmentShader:`

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

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function vg(){return new ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function _g(){return new ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

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
	`}function t2(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===qd||m===Wd,x=m===Ss||m===Ms;if(p||x){let g=t.get(h);const y=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new xg(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const S=h.image;return p&&S&&S.height>0||x&&S&&l(S)?(i===null&&(i=new xg(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function n2(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Fo("WebGLRenderer: "+r+" extension not supported."),l}}}function i2(o,t,i,r){const l={},c=new WeakMap;function d(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",d),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(g,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const S in y)t.update(y[S],o.ARRAY_BUFFER)}function p(g){const y=[],S=g.index,E=g.attributes.position;let A=0;if(S!==null){const U=S.array;A=S.version;for(let N=0,z=U.length;N<z;N+=3){const G=U[N+0],L=U[N+1],I=U[N+2];y.push(G,L,L,I,I,G)}}else if(E!==void 0){const U=E.array;A=E.version;for(let N=0,z=U.length/3-1;N<z;N+=3){const G=N+0,L=N+1,I=N+2;y.push(G,L,L,I,I,G)}}else return;const b=new(tv(y)?lv:ov)(y,1);b.version=A;const _=c.get(g);_&&t.remove(_),c.set(g,b)}function x(g){const y=c.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function a2(o,t,i){let r;function l(y){r=y}let c,d;function h(y){c=y.type,d=y.bytesPerElement}function m(y,S){o.drawElements(r,S,c,y*d),i.update(S,r,1)}function p(y,S,E){E!==0&&(o.drawElementsInstanced(r,S,c,y*d,E),i.update(S,r,E))}function x(y,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,E);let b=0;for(let _=0;_<E;_++)b+=S[_];i.update(b,r,1)}function g(y,S,E,A){if(E===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let _=0;_<y.length;_++)p(y[_]/d,S[_],A[_]);else{b.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,A,0,E);let _=0;for(let U=0;U<E;U++)_+=S[U]*A[U];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function r2(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:on("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function s2(o,t,i){const r=new WeakMap,l=new jt;function c(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let y=r.get(h);if(y===void 0||y.count!==g){let C=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let z=0;E===!0&&(z=1),A===!0&&(z=2),b===!0&&(z=3);let G=h.attributes.position.count*z,L=1;G>t.maxTextureSize&&(L=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const I=new Float32Array(G*L*4*g),W=new nv(I,G,L,g);W.type=da,W.needsUpdate=!0;const D=z*4;for(let j=0;j<g;j++){const te=_[j],ce=U[j],xe=N[j],de=G*L*4*j;for(let F=0;F<te.count;F++){const K=F*D;E===!0&&(l.fromBufferAttribute(te,F),I[de+K+0]=l.x,I[de+K+1]=l.y,I[de+K+2]=l.z,I[de+K+3]=0),A===!0&&(l.fromBufferAttribute(ce,F),I[de+K+4]=l.x,I[de+K+5]=l.y,I[de+K+6]=l.z,I[de+K+7]=0),b===!0&&(l.fromBufferAttribute(xe,F),I[de+K+8]=l.x,I[de+K+9]=l.y,I[de+K+10]=l.z,I[de+K+11]=xe.itemSize===4?l.w:1)}}y={count:g,texture:W,size:new At(G,L)},r.set(h,y),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let E=0;for(let b=0;b<p.length;b++)E+=p[b];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function o2(o,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,x=m.geometry,g=t.get(m,x);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const gv=new Pn,yg=new dv(1,1),vv=new nv,_v=new LS,yv=new fv,bg=[],Sg=[],Mg=new Float32Array(16),Eg=new Float32Array(9),Tg=new Float32Array(4);function Ds(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=bg[l];if(c===void 0&&(c=new Float32Array(l),bg[l]=c),t!==0){r.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(c,h)}return c}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function vn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function jc(o,t){let i=Sg[t];i===void 0&&(i=new Int32Array(t),Sg[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function l2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function c2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),vn(i,t)}}function u2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),vn(i,t)}}function f2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),vn(i,t)}}function d2(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;Tg.set(r),o.uniformMatrix2fv(this.addr,!1,Tg),vn(i,r)}}function h2(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;Eg.set(r),o.uniformMatrix3fv(this.addr,!1,Eg),vn(i,r)}}function p2(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;Mg.set(r),o.uniformMatrix4fv(this.addr,!1,Mg),vn(i,r)}}function m2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function x2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),vn(i,t)}}function g2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),vn(i,t)}}function v2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),vn(i,t)}}function _2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function y2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),vn(i,t)}}function b2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),vn(i,t)}}function S2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),vn(i,t)}}function M2(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(yg.compareFunction=ev,c=yg):c=gv,i.setTexture2D(t||c,l)}function E2(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||_v,l)}function T2(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||yv,l)}function A2(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||vv,l)}function R2(o){switch(o){case 5126:return l2;case 35664:return c2;case 35665:return u2;case 35666:return f2;case 35674:return d2;case 35675:return h2;case 35676:return p2;case 5124:case 35670:return m2;case 35667:case 35671:return x2;case 35668:case 35672:return g2;case 35669:case 35673:return v2;case 5125:return _2;case 36294:return y2;case 36295:return b2;case 36296:return S2;case 35678:case 36198:case 36298:case 36306:case 35682:return M2;case 35679:case 36299:case 36307:return E2;case 35680:case 36300:case 36308:case 36293:return T2;case 36289:case 36303:case 36311:case 36292:return A2}}function w2(o,t){o.uniform1fv(this.addr,t)}function C2(o,t){const i=Ds(t,this.size,2);o.uniform2fv(this.addr,i)}function D2(o,t){const i=Ds(t,this.size,3);o.uniform3fv(this.addr,i)}function N2(o,t){const i=Ds(t,this.size,4);o.uniform4fv(this.addr,i)}function U2(o,t){const i=Ds(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function L2(o,t){const i=Ds(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function O2(o,t){const i=Ds(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function z2(o,t){o.uniform1iv(this.addr,t)}function P2(o,t){o.uniform2iv(this.addr,t)}function I2(o,t){o.uniform3iv(this.addr,t)}function B2(o,t){o.uniform4iv(this.addr,t)}function F2(o,t){o.uniform1uiv(this.addr,t)}function H2(o,t){o.uniform2uiv(this.addr,t)}function G2(o,t){o.uniform3uiv(this.addr,t)}function V2(o,t){o.uniform4uiv(this.addr,t)}function k2(o,t,i){const r=this.cache,l=t.length,c=jc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||gv,c[d])}function j2(o,t,i){const r=this.cache,l=t.length,c=jc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||_v,c[d])}function X2(o,t,i){const r=this.cache,l=t.length,c=jc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||yv,c[d])}function q2(o,t,i){const r=this.cache,l=t.length,c=jc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||vv,c[d])}function W2(o){switch(o){case 5126:return w2;case 35664:return C2;case 35665:return D2;case 35666:return N2;case 35674:return U2;case 35675:return L2;case 35676:return O2;case 5124:case 35670:return z2;case 35667:case 35671:return P2;case 35668:case 35672:return I2;case 35669:case 35673:return B2;case 5125:return F2;case 36294:return H2;case 36295:return G2;case 36296:return V2;case 35678:case 36198:case 36298:case 36306:case 35682:return k2;case 35679:case 36299:case 36307:return j2;case 35680:case 36300:case 36308:case 36293:return X2;case 36289:case 36303:case 36311:case 36292:return q2}}class Y2{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=R2(i.type)}}class Z2{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=W2(i.type)}}class K2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function Ag(o,t){o.seq.push(t),o.map[t.id]=t}function Q2(o,t,i){const r=o.name,l=r.length;for(Pd.lastIndex=0;;){const c=Pd.exec(r),d=Pd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Ag(i,p===void 0?new Y2(h,o,t):new Z2(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new K2(h),Ag(i,g)),i=g}}}class Cc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);Q2(c,d,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function Rg(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const J2=37297;let $2=0;function eE(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const wg=new ft;function tE(o){Lt._getMatrix(wg,Lt.workingColorSpace,o);const t=`mat3( ${wg.elements.map(i=>i.toFixed(4))} )`;switch(Lt.getTransfer(o)){case Nc:return[t,"LinearTransferOETF"];case kt:return[t,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Cg(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+eE(o.getShaderSource(t),h)}else return c}function nE(o,t){const i=tE(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function iE(o,t){let i;switch(t){case oS:i="Linear";break;case lS:i="Reinhard";break;case cS:i="Cineon";break;case uS:i="ACESFilmic";break;case dS:i="AgX";break;case hS:i="Neutral";break;case fS:i="Custom";break;default:ot("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ec=new J;function aE(){Lt.getLuminanceCoefficients(Ec);const o=Ec.x.toFixed(4),t=Ec.y.toFixed(4),i=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function sE(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function oE(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Lo(o){return o!==""}function Dg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ng(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(o){return o.replace(lE,uE)}const cE=new Map;function uE(o,t){let i=pt[t];if(i===void 0){const r=cE.get(t);if(r!==void 0)i=pt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ah(i)}const fE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ug(o){return o.replace(fE,dE)}function dE(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Lg(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hE(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===jg?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Hb?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ca&&(t="SHADOWMAP_TYPE_VSM"),t}function pE(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ss:case Ms:t="ENVMAP_TYPE_CUBE";break;case zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mE(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ms:t="ENVMAP_MODE_REFRACTION";break}return t}function xE(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Nh:t="ENVMAP_BLENDING_MULTIPLY";break;case rS:t="ENVMAP_BLENDING_MIX";break;case sS:t="ENVMAP_BLENDING_ADD";break}return t}function gE(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function vE(o,t,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=hE(i),p=pE(i),x=mE(i),g=xE(i),y=gE(i),S=rE(i),E=sE(c),A=l.createProgram();let b,_,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Lo).join(`
`),b.length>0&&(b+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(b=[Lg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[Lg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?pt.tonemapping_pars_fragment:"",i.toneMapping!==Za?iE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,nE("linearToOutputTexel",i.outputColorSpace),aE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),d=Ah(d),d=Dg(d,i),d=Ng(d,i),h=Ah(h),h=Dg(h,i),h=Ng(h,i),d=Ug(d),h=Ug(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,_=["#define varying in",i.glslVersion===kx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===kx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=U+b+d,z=U+_+h,G=Rg(l,l.VERTEX_SHADER,N),L=Rg(l,l.FRAGMENT_SHADER,z);l.attachShader(A,G),l.attachShader(A,L),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function I(j){if(o.debug.checkShaderErrors){const te=l.getProgramInfoLog(A)||"",ce=l.getShaderInfoLog(G)||"",xe=l.getShaderInfoLog(L)||"",de=te.trim(),F=ce.trim(),K=xe.trim();let Z=!0,ve=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,G,L);else{const _e=Cg(l,G,"vertex"),P=Cg(l,L,"fragment");on("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+de+`
`+_e+`
`+P)}else de!==""?ot("WebGLProgram: Program Info Log:",de):(F===""||K==="")&&(ve=!1);ve&&(j.diagnostics={runnable:Z,programLog:de,vertexShader:{log:F,prefix:b},fragmentShader:{log:K,prefix:_}})}l.deleteShader(G),l.deleteShader(L),W=new Cc(l,A),D=oE(l,A)}let W;this.getUniforms=function(){return W===void 0&&I(this),W};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,J2)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=$2++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=L,this}let _E=0;class yE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new bE(t),i.set(t,r)),r}}class bE{constructor(t){this.id=_E++,this.code=t,this.usedTimes=0}}function SE(o,t,i,r,l,c,d){const h=new av,m=new yE,p=new Set,x=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function b(D,C,j,te,ce){const xe=te.fog,de=ce.geometry,F=D.isMeshStandardMaterial?te.environment:null,K=(D.isMeshStandardMaterial?i:t).get(D.envMap||F),Z=K&&K.mapping===zc?K.image.height:null,ve=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&ot("WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const _e=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,P=_e!==void 0?_e.length:0;let se=0;de.morphAttributes.position!==void 0&&(se=1),de.morphAttributes.normal!==void 0&&(se=2),de.morphAttributes.color!==void 0&&(se=3);let Se,Te,ze,ae;if(ve){const Ct=Ui[ve];Se=Ct.vertexShader,Te=Ct.fragmentShader}else Se=D.vertexShader,Te=D.fragmentShader,m.update(D),ze=m.getVertexShaderID(D),ae=m.getFragmentShaderID(D);const ue=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),He=ce.isInstancedMesh===!0,je=ce.isBatchedMesh===!0,lt=!!D.map,an=!!D.matcap,dt=!!K,wt=!!D.aoMap,H=!!D.lightMap,ht=!!D.bumpMap,mt=!!D.normalMap,Pt=!!D.displacementMap,Ge=!!D.emissiveMap,qt=!!D.metalnessMap,Ye=!!D.roughnessMap,at=D.anisotropy>0,O=D.clearcoat>0,M=D.dispersion>0,$=D.iridescence>0,pe=D.sheen>0,ye=D.transmission>0,le=at&&!!D.anisotropyMap,qe=O&&!!D.clearcoatMap,Ue=O&&!!D.clearcoatNormalMap,Qe=O&&!!D.clearcoatRoughnessMap,Xe=$&&!!D.iridescenceMap,be=$&&!!D.iridescenceThicknessMap,Ee=pe&&!!D.sheenColorMap,We=pe&&!!D.sheenRoughnessMap,Ve=!!D.specularMap,Oe=!!D.specularColorMap,nt=!!D.specularIntensityMap,V=ye&&!!D.transmissionMap,De=ye&&!!D.thicknessMap,Re=!!D.gradientMap,we=!!D.alphaMap,Me=D.alphaTest>0,ge=!!D.alphaHash,Ie=!!D.extensions;let it=Za;D.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(it=o.toneMapping);const Ft={shaderID:ve,shaderType:D.type,shaderName:D.name,vertexShader:Se,fragmentShader:Te,defines:D.defines,customVertexShaderID:ze,customFragmentShaderID:ae,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:je,batchingColor:je&&ce._colorsTexture!==null,instancing:He,instancingColor:He&&ce.instanceColor!==null,instancingMorph:He&&ce.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Es,alphaToCoverage:!!D.alphaToCoverage,map:lt,matcap:an,envMap:dt,envMapMode:dt&&K.mapping,envMapCubeUVHeight:Z,aoMap:wt,lightMap:H,bumpMap:ht,normalMap:mt,displacementMap:y&&Pt,emissiveMap:Ge,normalMapObjectSpace:mt&&D.normalMapType===gS,normalMapTangentSpace:mt&&D.normalMapType===$g,metalnessMap:qt,roughnessMap:Ye,anisotropy:at,anisotropyMap:le,clearcoat:O,clearcoatMap:qe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Qe,dispersion:M,iridescence:$,iridescenceMap:Xe,iridescenceThicknessMap:be,sheen:pe,sheenColorMap:Ee,sheenRoughnessMap:We,specularMap:Ve,specularColorMap:Oe,specularIntensityMap:nt,transmission:ye,transmissionMap:V,thicknessMap:De,gradientMap:Re,opaque:D.transparent===!1&&D.blending===_s&&D.alphaToCoverage===!1,alphaMap:we,alphaTest:Me,alphaHash:ge,combine:D.combine,mapUv:lt&&A(D.map.channel),aoMapUv:wt&&A(D.aoMap.channel),lightMapUv:H&&A(D.lightMap.channel),bumpMapUv:ht&&A(D.bumpMap.channel),normalMapUv:mt&&A(D.normalMap.channel),displacementMapUv:Pt&&A(D.displacementMap.channel),emissiveMapUv:Ge&&A(D.emissiveMap.channel),metalnessMapUv:qt&&A(D.metalnessMap.channel),roughnessMapUv:Ye&&A(D.roughnessMap.channel),anisotropyMapUv:le&&A(D.anisotropyMap.channel),clearcoatMapUv:qe&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:be&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:We&&A(D.sheenRoughnessMap.channel),specularMapUv:Ve&&A(D.specularMap.channel),specularColorMapUv:Oe&&A(D.specularColorMap.channel),specularIntensityMapUv:nt&&A(D.specularIntensityMap.channel),transmissionMapUv:V&&A(D.transmissionMap.channel),thicknessMapUv:De&&A(D.thicknessMap.channel),alphaMapUv:we&&A(D.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(mt||at),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!de.attributes.uv&&(lt||we),fog:!!xe,useFog:D.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ce,skinning:ce.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&j.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:lt&&D.map.isVideoTexture===!0&&Lt.getTransfer(D.map.colorSpace)===kt,decodeVideoTextureEmissive:Ge&&D.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(D.emissiveMap.colorSpace)===kt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ua,flipSided:D.side===qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ie&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&D.extensions.multiDraw===!0||je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ft.vertexUv1s=p.has(1),Ft.vertexUv2s=p.has(2),Ft.vertexUv3s=p.has(3),p.clear(),Ft}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const j in D.defines)C.push(j),C.push(D.defines[j]);return D.isRawShaderMaterial===!1&&(U(C,D),N(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function U(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function N(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function z(D){const C=E[D.type];let j;if(C){const te=Ui[C];j=qS.clone(te.uniforms)}else j=D.uniforms;return j}function G(D,C){let j;for(let te=0,ce=x.length;te<ce;te++){const xe=x[te];if(xe.cacheKey===C){j=xe,++j.usedTimes;break}}return j===void 0&&(j=new vE(o,C,D,c),x.push(j)),j}function L(D){if(--D.usedTimes===0){const C=x.indexOf(D);x[C]=x[x.length-1],x.pop(),D.destroy()}}function I(D){m.remove(D)}function W(){m.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:z,acquireProgram:G,releaseProgram:L,releaseShaderCache:I,programs:x,dispose:W}}function ME(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function EE(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Og(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function zg(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(g,y,S,E,A,b){let _=o[t];return _===void 0?(_={id:g.id,object:g,geometry:y,material:S,groupOrder:E,renderOrder:g.renderOrder,z:A,group:b},o[t]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=S,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=A,_.group=b),t++,_}function h(g,y,S,E,A,b){const _=d(g,y,S,E,A,b);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(g,y,S,E,A,b){const _=d(g,y,S,E,A,b);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,y){i.length>1&&i.sort(g||EE),r.length>1&&r.sort(y||Og),l.length>1&&l.sort(y||Og)}function x(){for(let g=t,y=o.length;g<y;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:x,sort:p}}function TE(){let o=new WeakMap;function t(r,l){const c=o.get(r);let d;return c===void 0?(d=new zg,o.set(r,[d])):l>=c.length?(d=new zg,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function AE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new bt};break;case"SpotLight":i={position:new J,direction:new J,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":i={color:new bt,position:new J,halfWidth:new J,halfHeight:new J};break}return o[t.id]=i,i}}}function RE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let wE=0;function CE(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function DE(o){const t=new AE,i=RE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new J);const l=new J,c=new en,d=new en;function h(p){let x=0,g=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,E=0,A=0,b=0,_=0,U=0,N=0,z=0,G=0,L=0,I=0;p.sort(CE);for(let D=0,C=p.length;D<C;D++){const j=p[D],te=j.color,ce=j.intensity,xe=j.distance,de=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)x+=te.r*ce,g+=te.g*ce,y+=te.b*ce;else if(j.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(j.sh.coefficients[F],ce);I++}else if(j.isDirectionalLight){const F=t.get(j);if(F.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const K=j.shadow,Z=i.get(j);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.directionalShadow[S]=Z,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=j.shadow.matrix,U++}r.directional[S]=F,S++}else if(j.isSpotLight){const F=t.get(j);F.position.setFromMatrixPosition(j.matrixWorld),F.color.copy(te).multiplyScalar(ce),F.distance=xe,F.coneCos=Math.cos(j.angle),F.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),F.decay=j.decay,r.spot[A]=F;const K=j.shadow;if(j.map&&(r.spotLightMap[G]=j.map,G++,K.updateMatrices(j),j.castShadow&&L++),r.spotLightMatrix[A]=K.matrix,j.castShadow){const Z=i.get(j);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.spotShadow[A]=Z,r.spotShadowMap[A]=de,z++}A++}else if(j.isRectAreaLight){const F=t.get(j);F.color.copy(te).multiplyScalar(ce),F.halfWidth.set(j.width*.5,0,0),F.halfHeight.set(0,j.height*.5,0),r.rectArea[b]=F,b++}else if(j.isPointLight){const F=t.get(j);if(F.color.copy(j.color).multiplyScalar(j.intensity),F.distance=j.distance,F.decay=j.decay,j.castShadow){const K=j.shadow,Z=i.get(j);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,r.pointShadow[E]=Z,r.pointShadowMap[E]=de,r.pointShadowMatrix[E]=j.shadow.matrix,N++}r.point[E]=F,E++}else if(j.isHemisphereLight){const F=t.get(j);F.skyColor.copy(j.color).multiplyScalar(ce),F.groundColor.copy(j.groundColor).multiplyScalar(ce),r.hemi[_]=F,_++}}b>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=y;const W=r.hash;(W.directionalLength!==S||W.pointLength!==E||W.spotLength!==A||W.rectAreaLength!==b||W.hemiLength!==_||W.numDirectionalShadows!==U||W.numPointShadows!==N||W.numSpotShadows!==z||W.numSpotMaps!==G||W.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=b,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=z,r.spotShadowMap.length=z,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=z+G-L,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=I,W.directionalLength=S,W.pointLength=E,W.spotLength=A,W.rectAreaLength=b,W.hemiLength=_,W.numDirectionalShadows=U,W.numPointShadows=N,W.numSpotShadows=z,W.numSpotMaps=G,W.numLightProbes=I,r.version=wE++)}function m(p,x){let g=0,y=0,S=0,E=0,A=0;const b=x.matrixWorldInverse;for(let _=0,U=p.length;_<U;_++){const N=p[_];if(N.isDirectionalLight){const z=r.directional[g];z.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(b),g++}else if(N.isSpotLight){const z=r.spot[S];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(b),z.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(b),S++}else if(N.isRectAreaLight){const z=r.rectArea[E];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(b),d.identity(),c.copy(N.matrixWorld),c.premultiply(b),d.extractRotation(c),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),z.halfWidth.applyMatrix4(d),z.halfHeight.applyMatrix4(d),E++}else if(N.isPointLight){const z=r.point[y];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(b),y++}else if(N.isHemisphereLight){const z=r.hemi[A];z.direction.setFromMatrixPosition(N.matrixWorld),z.direction.transformDirection(b),A++}}}return{setup:h,setupView:m,state:r}}function Pg(o){const t=new DE(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function d(x){r.push(x)}function h(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function NE(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new Pg(o),t.set(l,[h])):c>=d.length?(h=new Pg(o),d.push(h)):h=d[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const UE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LE=`uniform sampler2D shadow_pass;
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
}`;function OE(o,t,i){let r=new Hh;const l=new At,c=new At,d=new jt,h=new n1({depthPacking:xS}),m=new i1,p={},x=i.maxTextureSize,g={[Ka]:qn,[qn]:Ka,[ua]:ua},y=new ma({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:UE,fragmentShader:LE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Wn;E.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Pi(E,y),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jg;let _=this.type;this.render=function(L,I,W){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),j=o.getActiveMipmapLevel(),te=o.state;te.setBlending(ha),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ce=_!==ca&&this.type===ca,xe=_===ca&&this.type!==ca;for(let de=0,F=L.length;de<F;de++){const K=L[de],Z=K.shadow;if(Z===void 0){ot("WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const ve=Z.getFrameExtents();if(l.multiply(ve),c.copy(Z.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ve.x),l.x=c.x*ve.x,Z.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ve.y),l.y=c.y*ve.y,Z.mapSize.y=c.y)),Z.map===null||ce===!0||xe===!0){const P=this.type!==ca?{minFilter:ri,magFilter:ri}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ar(l.x,l.y,P),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const _e=Z.getViewportCount();for(let P=0;P<_e;P++){const se=Z.getViewport(P);d.set(c.x*se.x,c.y*se.y,c.x*se.z,c.y*se.w),te.viewport(d),Z.updateMatrices(K,P),r=Z.getFrustum(),z(I,W,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===ca&&U(Z,W),Z.needsUpdate=!1}_=this.type,b.needsUpdate=!1,o.setRenderTarget(D,C,j)};function U(L,I){const W=t.update(A);y.defines.VSM_SAMPLES!==L.blurSamples&&(y.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ar(l.x,l.y)),y.uniforms.shadow_pass.value=L.map.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(I,null,W,y,A,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(I,null,W,S,A,null)}function N(L,I,W,D){let C=null;const j=W.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(j!==void 0)C=j;else if(C=W.isPointLight===!0?m:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const te=C.uuid,ce=I.uuid;let xe=p[te];xe===void 0&&(xe={},p[te]=xe);let de=xe[ce];de===void 0&&(de=C.clone(),xe[ce]=de,I.addEventListener("dispose",G)),C=de}if(C.visible=I.visible,C.wireframe=I.wireframe,D===ca?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:g[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const te=o.properties.get(C);te.light=W}return C}function z(L,I,W,D,C){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&C===ca)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,L.matrixWorld);const ce=t.update(L),xe=L.material;if(Array.isArray(xe)){const de=ce.groups;for(let F=0,K=de.length;F<K;F++){const Z=de[F],ve=xe[Z.materialIndex];if(ve&&ve.visible){const _e=N(L,ve,D,C);L.onBeforeShadow(o,L,I,W,ce,_e,Z),o.renderBufferDirect(W,null,ce,_e,L,Z),L.onAfterShadow(o,L,I,W,ce,_e,Z)}}}else if(xe.visible){const de=N(L,xe,D,C);L.onBeforeShadow(o,L,I,W,ce,de,null),o.renderBufferDirect(W,null,ce,de,L,null),L.onAfterShadow(o,L,I,W,ce,de,null)}}const te=L.children;for(let ce=0,xe=te.length;ce<xe;ce++)z(te[ce],I,W,D,C)}function G(L){L.target.removeEventListener("dispose",G);for(const W in p){const D=p[W],C=L.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const zE={[Fd]:Hd,[Gd]:jd,[Vd]:Xd,[bs]:kd,[Hd]:Fd,[jd]:Gd,[Xd]:Vd,[kd]:bs};function PE(o,t){function i(){let V=!1;const De=new jt;let Re=null;const we=new jt(0,0,0,0);return{setMask:function(Me){Re!==Me&&!V&&(o.colorMask(Me,Me,Me,Me),Re=Me)},setLocked:function(Me){V=Me},setClear:function(Me,ge,Ie,it,Ft){Ft===!0&&(Me*=it,ge*=it,Ie*=it),De.set(Me,ge,Ie,it),we.equals(De)===!1&&(o.clearColor(Me,ge,Ie,it),we.copy(De))},reset:function(){V=!1,Re=null,we.set(-1,0,0,0)}}}function r(){let V=!1,De=!1,Re=null,we=null,Me=null;return{setReversed:function(ge){if(De!==ge){const Ie=t.get("EXT_clip_control");ge?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),De=ge;const it=Me;Me=null,this.setClear(it)}},getReversed:function(){return De},setTest:function(ge){ge?ue(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(ge){Re!==ge&&!V&&(o.depthMask(ge),Re=ge)},setFunc:function(ge){if(De&&(ge=zE[ge]),we!==ge){switch(ge){case Fd:o.depthFunc(o.NEVER);break;case Hd:o.depthFunc(o.ALWAYS);break;case Gd:o.depthFunc(o.LESS);break;case bs:o.depthFunc(o.LEQUAL);break;case Vd:o.depthFunc(o.EQUAL);break;case kd:o.depthFunc(o.GEQUAL);break;case jd:o.depthFunc(o.GREATER);break;case Xd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}we=ge}},setLocked:function(ge){V=ge},setClear:function(ge){Me!==ge&&(De&&(ge=1-ge),o.clearDepth(ge),Me=ge)},reset:function(){V=!1,Re=null,we=null,Me=null,De=!1}}}function l(){let V=!1,De=null,Re=null,we=null,Me=null,ge=null,Ie=null,it=null,Ft=null;return{setTest:function(Ct){V||(Ct?ue(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(Ct){De!==Ct&&!V&&(o.stencilMask(Ct),De=Ct)},setFunc:function(Ct,Cn,Yn){(Re!==Ct||we!==Cn||Me!==Yn)&&(o.stencilFunc(Ct,Cn,Yn),Re=Ct,we=Cn,Me=Yn)},setOp:function(Ct,Cn,Yn){(ge!==Ct||Ie!==Cn||it!==Yn)&&(o.stencilOp(Ct,Cn,Yn),ge=Ct,Ie=Cn,it=Yn)},setLocked:function(Ct){V=Ct},setClear:function(Ct){Ft!==Ct&&(o.clearStencil(Ct),Ft=Ct)},reset:function(){V=!1,De=null,Re=null,we=null,Me=null,ge=null,Ie=null,it=null,Ft=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},y=new WeakMap,S=[],E=null,A=!1,b=null,_=null,U=null,N=null,z=null,G=null,L=null,I=new bt(0,0,0),W=0,D=!1,C=null,j=null,te=null,ce=null,xe=null;const de=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,K=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=K>=2);let ve=null,_e={};const P=o.getParameter(o.SCISSOR_BOX),se=o.getParameter(o.VIEWPORT),Se=new jt().fromArray(P),Te=new jt().fromArray(se);function ze(V,De,Re,we){const Me=new Uint8Array(4),ge=o.createTexture();o.bindTexture(V,ge),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ie=0;Ie<Re;Ie++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(De,0,o.RGBA,1,1,we,0,o.RGBA,o.UNSIGNED_BYTE,Me):o.texImage2D(De+Ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Me);return ge}const ae={};ae[o.TEXTURE_2D]=ze(o.TEXTURE_2D,o.TEXTURE_2D,1),ae[o.TEXTURE_CUBE_MAP]=ze(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[o.TEXTURE_2D_ARRAY]=ze(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ae[o.TEXTURE_3D]=ze(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(o.DEPTH_TEST),d.setFunc(bs),ht(!1),mt(Bx),ue(o.CULL_FACE),wt(ha);function ue(V){x[V]!==!0&&(o.enable(V),x[V]=!0)}function Ce(V){x[V]!==!1&&(o.disable(V),x[V]=!1)}function He(V,De){return g[V]!==De?(o.bindFramebuffer(V,De),g[V]=De,V===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=De),V===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=De),!0):!1}function je(V,De){let Re=S,we=!1;if(V){Re=y.get(De),Re===void 0&&(Re=[],y.set(De,Re));const Me=V.textures;if(Re.length!==Me.length||Re[0]!==o.COLOR_ATTACHMENT0){for(let ge=0,Ie=Me.length;ge<Ie;ge++)Re[ge]=o.COLOR_ATTACHMENT0+ge;Re.length=Me.length,we=!0}}else Re[0]!==o.BACK&&(Re[0]=o.BACK,we=!0);we&&o.drawBuffers(Re)}function lt(V){return E!==V?(o.useProgram(V),E=V,!0):!1}const an={[Sr]:o.FUNC_ADD,[Vb]:o.FUNC_SUBTRACT,[kb]:o.FUNC_REVERSE_SUBTRACT};an[jb]=o.MIN,an[Xb]=o.MAX;const dt={[qb]:o.ZERO,[Wb]:o.ONE,[Yb]:o.SRC_COLOR,[Id]:o.SRC_ALPHA,[eS]:o.SRC_ALPHA_SATURATE,[Jb]:o.DST_COLOR,[Kb]:o.DST_ALPHA,[Zb]:o.ONE_MINUS_SRC_COLOR,[Bd]:o.ONE_MINUS_SRC_ALPHA,[$b]:o.ONE_MINUS_DST_COLOR,[Qb]:o.ONE_MINUS_DST_ALPHA,[tS]:o.CONSTANT_COLOR,[nS]:o.ONE_MINUS_CONSTANT_COLOR,[iS]:o.CONSTANT_ALPHA,[aS]:o.ONE_MINUS_CONSTANT_ALPHA};function wt(V,De,Re,we,Me,ge,Ie,it,Ft,Ct){if(V===ha){A===!0&&(Ce(o.BLEND),A=!1);return}if(A===!1&&(ue(o.BLEND),A=!0),V!==Gb){if(V!==b||Ct!==D){if((_!==Sr||z!==Sr)&&(o.blendEquation(o.FUNC_ADD),_=Sr,z=Sr),Ct)switch(V){case _s:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Oo:o.blendFunc(o.ONE,o.ONE);break;case Fx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Hx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:on("WebGLState: Invalid blending: ",V);break}else switch(V){case _s:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Oo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Fx:on("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hx:on("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:on("WebGLState: Invalid blending: ",V);break}U=null,N=null,G=null,L=null,I.set(0,0,0),W=0,b=V,D=Ct}return}Me=Me||De,ge=ge||Re,Ie=Ie||we,(De!==_||Me!==z)&&(o.blendEquationSeparate(an[De],an[Me]),_=De,z=Me),(Re!==U||we!==N||ge!==G||Ie!==L)&&(o.blendFuncSeparate(dt[Re],dt[we],dt[ge],dt[Ie]),U=Re,N=we,G=ge,L=Ie),(it.equals(I)===!1||Ft!==W)&&(o.blendColor(it.r,it.g,it.b,Ft),I.copy(it),W=Ft),b=V,D=!1}function H(V,De){V.side===ua?Ce(o.CULL_FACE):ue(o.CULL_FACE);let Re=V.side===qn;De&&(Re=!Re),ht(Re),V.blending===_s&&V.transparent===!1?wt(ha):wt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),c.setMask(V.colorWrite);const we=V.stencilWrite;h.setTest(we),we&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ge(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ue(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){C!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),C=V)}function mt(V){V!==Bb?(ue(o.CULL_FACE),V!==j&&(V===Bx?o.cullFace(o.BACK):V===Fb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),j=V}function Pt(V){V!==te&&(F&&o.lineWidth(V),te=V)}function Ge(V,De,Re){V?(ue(o.POLYGON_OFFSET_FILL),(ce!==De||xe!==Re)&&(o.polygonOffset(De,Re),ce=De,xe=Re)):Ce(o.POLYGON_OFFSET_FILL)}function qt(V){V?ue(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function Ye(V){V===void 0&&(V=o.TEXTURE0+de-1),ve!==V&&(o.activeTexture(V),ve=V)}function at(V,De,Re){Re===void 0&&(ve===null?Re=o.TEXTURE0+de-1:Re=ve);let we=_e[Re];we===void 0&&(we={type:void 0,texture:void 0},_e[Re]=we),(we.type!==V||we.texture!==De)&&(ve!==Re&&(o.activeTexture(Re),ve=Re),o.bindTexture(V,De||ae[V]),we.type=V,we.texture=De)}function O(){const V=_e[ve];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function pe(){try{o.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function ye(){try{o.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function le(){try{o.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function qe(){try{o.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ue(){try{o.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Qe(){try{o.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Xe(){try{o.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function be(){try{o.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ee(V){Se.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Se.copy(V))}function We(V){Te.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Te.copy(V))}function Ve(V,De){let Re=p.get(De);Re===void 0&&(Re=new WeakMap,p.set(De,Re));let we=Re.get(V);we===void 0&&(we=o.getUniformBlockIndex(De,V.name),Re.set(V,we))}function Oe(V,De){const we=p.get(De).get(V);m.get(De)!==we&&(o.uniformBlockBinding(De,we,V.__bindingPointIndex),m.set(De,we))}function nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},ve=null,_e={},g={},y=new WeakMap,S=[],E=null,A=!1,b=null,_=null,U=null,N=null,z=null,G=null,L=null,I=new bt(0,0,0),W=0,D=!1,C=null,j=null,te=null,ce=null,xe=null,Se.set(0,0,o.canvas.width,o.canvas.height),Te.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ue,disable:Ce,bindFramebuffer:He,drawBuffers:je,useProgram:lt,setBlending:wt,setMaterial:H,setFlipSided:ht,setCullFace:mt,setLineWidth:Pt,setPolygonOffset:Ge,setScissorTest:qt,activeTexture:Ye,bindTexture:at,unbindTexture:O,compressedTexImage2D:M,compressedTexImage3D:$,texImage2D:Xe,texImage3D:be,updateUBOMapping:Ve,uniformBlockBinding:Oe,texStorage2D:Ue,texStorage3D:Qe,texSubImage2D:pe,texSubImage3D:ye,compressedTexSubImage2D:le,compressedTexSubImage3D:qe,scissor:Ee,viewport:We,reset:nt}}function IE(o,t,i,r,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new At,x=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,M){return S?new OffscreenCanvas(O,M):Lc("canvas")}function A(O,M,$){let pe=1;const ye=at(O);if((ye.width>$||ye.height>$)&&(pe=$/Math.max(ye.width,ye.height)),pe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const le=Math.floor(pe*ye.width),qe=Math.floor(pe*ye.height);g===void 0&&(g=E(le,qe));const Ue=M?E(le,qe):g;return Ue.width=le,Ue.height=qe,Ue.getContext("2d").drawImage(O,0,0,le,qe),ot("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+le+"x"+qe+")."),Ue}else return"data"in O&&ot("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),O;return O}function b(O){return O.generateMipmaps}function _(O){o.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(O,M,$,pe,ye=!1){if(O!==null){if(o[O]!==void 0)return o[O];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let le=M;if(M===o.RED&&($===o.FLOAT&&(le=o.R32F),$===o.HALF_FLOAT&&(le=o.R16F),$===o.UNSIGNED_BYTE&&(le=o.R8)),M===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(le=o.R8UI),$===o.UNSIGNED_SHORT&&(le=o.R16UI),$===o.UNSIGNED_INT&&(le=o.R32UI),$===o.BYTE&&(le=o.R8I),$===o.SHORT&&(le=o.R16I),$===o.INT&&(le=o.R32I)),M===o.RG&&($===o.FLOAT&&(le=o.RG32F),$===o.HALF_FLOAT&&(le=o.RG16F),$===o.UNSIGNED_BYTE&&(le=o.RG8)),M===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(le=o.RG8UI),$===o.UNSIGNED_SHORT&&(le=o.RG16UI),$===o.UNSIGNED_INT&&(le=o.RG32UI),$===o.BYTE&&(le=o.RG8I),$===o.SHORT&&(le=o.RG16I),$===o.INT&&(le=o.RG32I)),M===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(le=o.RGB8UI),$===o.UNSIGNED_SHORT&&(le=o.RGB16UI),$===o.UNSIGNED_INT&&(le=o.RGB32UI),$===o.BYTE&&(le=o.RGB8I),$===o.SHORT&&(le=o.RGB16I),$===o.INT&&(le=o.RGB32I)),M===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(le=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(le=o.RGBA16UI),$===o.UNSIGNED_INT&&(le=o.RGBA32UI),$===o.BYTE&&(le=o.RGBA8I),$===o.SHORT&&(le=o.RGBA16I),$===o.INT&&(le=o.RGBA32I)),M===o.RGB&&($===o.UNSIGNED_INT_5_9_9_9_REV&&(le=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(le=o.R11F_G11F_B10F)),M===o.RGBA){const qe=ye?Nc:Lt.getTransfer(pe);$===o.FLOAT&&(le=o.RGBA32F),$===o.HALF_FLOAT&&(le=o.RGBA16F),$===o.UNSIGNED_BYTE&&(le=qe===kt?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(le=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(le=o.RGB5_A1)}return(le===o.R16F||le===o.R32F||le===o.RG16F||le===o.RG32F||le===o.RGBA16F||le===o.RGBA32F)&&t.get("EXT_color_buffer_float"),le}function z(O,M){let $;return O?M===null||M===Tr||M===Po?$=o.DEPTH24_STENCIL8:M===da?$=o.DEPTH32F_STENCIL8:M===zo&&($=o.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Tr||M===Po?$=o.DEPTH_COMPONENT24:M===da?$=o.DEPTH_COMPONENT32F:M===zo&&($=o.DEPTH_COMPONENT16),$}function G(O,M){return b(O)===!0||O.isFramebufferTexture&&O.minFilter!==ri&&O.minFilter!==gi?Math.log2(Math.max(M.width,M.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?M.mipmaps.length:1}function L(O){const M=O.target;M.removeEventListener("dispose",L),W(M),M.isVideoTexture&&x.delete(M)}function I(O){const M=O.target;M.removeEventListener("dispose",I),C(M)}function W(O){const M=r.get(O);if(M.__webglInit===void 0)return;const $=O.source,pe=y.get($);if(pe){const ye=pe[M.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&D(O),Object.keys(pe).length===0&&y.delete($)}r.remove(O)}function D(O){const M=r.get(O);o.deleteTexture(M.__webglTexture);const $=O.source,pe=y.get($);delete pe[M.__cacheKey],d.memory.textures--}function C(O){const M=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(M.__webglFramebuffer[pe]))for(let ye=0;ye<M.__webglFramebuffer[pe].length;ye++)o.deleteFramebuffer(M.__webglFramebuffer[pe][ye]);else o.deleteFramebuffer(M.__webglFramebuffer[pe]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[pe])}else{if(Array.isArray(M.__webglFramebuffer))for(let pe=0;pe<M.__webglFramebuffer.length;pe++)o.deleteFramebuffer(M.__webglFramebuffer[pe]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let pe=0;pe<M.__webglColorRenderbuffer.length;pe++)M.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[pe]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=O.textures;for(let pe=0,ye=$.length;pe<ye;pe++){const le=r.get($[pe]);le.__webglTexture&&(o.deleteTexture(le.__webglTexture),d.memory.textures--),r.remove($[pe])}r.remove(O)}let j=0;function te(){j=0}function ce(){const O=j;return O>=l.maxTextures&&ot("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),j+=1,O}function xe(O){const M=[];return M.push(O.wrapS),M.push(O.wrapT),M.push(O.wrapR||0),M.push(O.magFilter),M.push(O.minFilter),M.push(O.anisotropy),M.push(O.internalFormat),M.push(O.format),M.push(O.type),M.push(O.generateMipmaps),M.push(O.premultiplyAlpha),M.push(O.flipY),M.push(O.unpackAlignment),M.push(O.colorSpace),M.join()}function de(O,M){const $=r.get(O);if(O.isVideoTexture&&qt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&$.__version!==O.version){const pe=O.image;if(pe===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ae($,O,M);return}}else O.isExternalTexture&&($.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+M)}function F(O,M){const $=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&$.__version!==O.version){ae($,O,M);return}else O.isExternalTexture&&($.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+M)}function K(O,M){const $=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&$.__version!==O.version){ae($,O,M);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+M)}function Z(O,M){const $=r.get(O);if(O.version>0&&$.__version!==O.version){ue($,O,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+M)}const ve={[Yd]:o.REPEAT,[fa]:o.CLAMP_TO_EDGE,[Zd]:o.MIRRORED_REPEAT},_e={[ri]:o.NEAREST,[pS]:o.NEAREST_MIPMAP_NEAREST,[nc]:o.NEAREST_MIPMAP_LINEAR,[gi]:o.LINEAR,[rd]:o.LINEAR_MIPMAP_NEAREST,[Er]:o.LINEAR_MIPMAP_LINEAR},P={[vS]:o.NEVER,[ES]:o.ALWAYS,[_S]:o.LESS,[ev]:o.LEQUAL,[yS]:o.EQUAL,[MS]:o.GEQUAL,[bS]:o.GREATER,[SS]:o.NOTEQUAL};function se(O,M){if(M.type===da&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===gi||M.magFilter===rd||M.magFilter===nc||M.magFilter===Er||M.minFilter===gi||M.minFilter===rd||M.minFilter===nc||M.minFilter===Er)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,ve[M.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,ve[M.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,ve[M.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,_e[M.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,_e[M.minFilter]),M.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,P[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ri||M.minFilter!==nc&&M.minFilter!==Er||M.type===da&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Se(O,M){let $=!1;O.__webglInit===void 0&&(O.__webglInit=!0,M.addEventListener("dispose",L));const pe=M.source;let ye=y.get(pe);ye===void 0&&(ye={},y.set(pe,ye));const le=xe(M);if(le!==O.__cacheKey){ye[le]===void 0&&(ye[le]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,$=!0),ye[le].usedTimes++;const qe=ye[O.__cacheKey];qe!==void 0&&(ye[O.__cacheKey].usedTimes--,qe.usedTimes===0&&D(M)),O.__cacheKey=le,O.__webglTexture=ye[le].texture}return $}function Te(O,M,$){return Math.floor(Math.floor(O/$)/M)}function ze(O,M,$,pe){const le=O.updateRanges;if(le.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,$,pe,M.data);else{le.sort((be,Ee)=>be.start-Ee.start);let qe=0;for(let be=1;be<le.length;be++){const Ee=le[qe],We=le[be],Ve=Ee.start+Ee.count,Oe=Te(We.start,M.width,4),nt=Te(Ee.start,M.width,4);We.start<=Ve+1&&Oe===nt&&Te(We.start+We.count-1,M.width,4)===Oe?Ee.count=Math.max(Ee.count,We.start+We.count-Ee.start):(++qe,le[qe]=We)}le.length=qe+1;const Ue=o.getParameter(o.UNPACK_ROW_LENGTH),Qe=o.getParameter(o.UNPACK_SKIP_PIXELS),Xe=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let be=0,Ee=le.length;be<Ee;be++){const We=le[be],Ve=Math.floor(We.start/4),Oe=Math.ceil(We.count/4),nt=Ve%M.width,V=Math.floor(Ve/M.width),De=Oe,Re=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,nt),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,nt,V,De,Re,$,pe,M.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ue),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qe),o.pixelStorei(o.UNPACK_SKIP_ROWS,Xe)}}function ae(O,M,$){let pe=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pe=o.TEXTURE_3D);const ye=Se(O,M),le=M.source;i.bindTexture(pe,O.__webglTexture,o.TEXTURE0+$);const qe=r.get(le);if(le.version!==qe.__version||ye===!0){i.activeTexture(o.TEXTURE0+$);const Ue=Lt.getPrimaries(Lt.workingColorSpace),Qe=M.colorSpace===Wa?null:Lt.getPrimaries(M.colorSpace),Xe=M.colorSpace===Wa||Ue===Qe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let be=A(M.image,!1,l.maxTextureSize);be=Ye(M,be);const Ee=c.convert(M.format,M.colorSpace),We=c.convert(M.type);let Ve=N(M.internalFormat,Ee,We,M.colorSpace,M.isVideoTexture);se(pe,M);let Oe;const nt=M.mipmaps,V=M.isVideoTexture!==!0,De=qe.__version===void 0||ye===!0,Re=le.dataReady,we=G(M,be);if(M.isDepthTexture)Ve=z(M.format===Bo,M.type),De&&(V?i.texStorage2D(o.TEXTURE_2D,1,Ve,be.width,be.height):i.texImage2D(o.TEXTURE_2D,0,Ve,be.width,be.height,0,Ee,We,null));else if(M.isDataTexture)if(nt.length>0){V&&De&&i.texStorage2D(o.TEXTURE_2D,we,Ve,nt[0].width,nt[0].height);for(let Me=0,ge=nt.length;Me<ge;Me++)Oe=nt[Me],V?Re&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ee,We,Oe.data):i.texImage2D(o.TEXTURE_2D,Me,Ve,Oe.width,Oe.height,0,Ee,We,Oe.data);M.generateMipmaps=!1}else V?(De&&i.texStorage2D(o.TEXTURE_2D,we,Ve,be.width,be.height),Re&&ze(M,be,Ee,We)):i.texImage2D(o.TEXTURE_2D,0,Ve,be.width,be.height,0,Ee,We,be.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){V&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Ve,nt[0].width,nt[0].height,be.depth);for(let Me=0,ge=nt.length;Me<ge;Me++)if(Oe=nt[Me],M.format!==Ai)if(Ee!==null)if(V){if(Re)if(M.layerUpdates.size>0){const Ie=hg(Oe.width,Oe.height,M.format,M.type);for(const it of M.layerUpdates){const Ft=Oe.data.subarray(it*Ie/Oe.data.BYTES_PER_ELEMENT,(it+1)*Ie/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,it,Oe.width,Oe.height,1,Ee,Ft)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,be.depth,Ee,Oe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,Ve,Oe.width,Oe.height,be.depth,0,Oe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Re&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,be.depth,Ee,We,Oe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Me,Ve,Oe.width,Oe.height,be.depth,0,Ee,We,Oe.data)}else{V&&De&&i.texStorage2D(o.TEXTURE_2D,we,Ve,nt[0].width,nt[0].height);for(let Me=0,ge=nt.length;Me<ge;Me++)Oe=nt[Me],M.format!==Ai?Ee!==null?V?Re&&i.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ee,Oe.data):i.compressedTexImage2D(o.TEXTURE_2D,Me,Ve,Oe.width,Oe.height,0,Oe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Re&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ee,We,Oe.data):i.texImage2D(o.TEXTURE_2D,Me,Ve,Oe.width,Oe.height,0,Ee,We,Oe.data)}else if(M.isDataArrayTexture)if(V){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Ve,be.width,be.height,be.depth),Re)if(M.layerUpdates.size>0){const Me=hg(be.width,be.height,M.format,M.type);for(const ge of M.layerUpdates){const Ie=be.data.subarray(ge*Me/be.data.BYTES_PER_ELEMENT,(ge+1)*Me/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ge,be.width,be.height,1,Ee,We,Ie)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ee,We,be.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ve,be.width,be.height,be.depth,0,Ee,We,be.data);else if(M.isData3DTexture)V?(De&&i.texStorage3D(o.TEXTURE_3D,we,Ve,be.width,be.height,be.depth),Re&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ee,We,be.data)):i.texImage3D(o.TEXTURE_3D,0,Ve,be.width,be.height,be.depth,0,Ee,We,be.data);else if(M.isFramebufferTexture){if(De)if(V)i.texStorage2D(o.TEXTURE_2D,we,Ve,be.width,be.height);else{let Me=be.width,ge=be.height;for(let Ie=0;Ie<we;Ie++)i.texImage2D(o.TEXTURE_2D,Ie,Ve,Me,ge,0,Ee,We,null),Me>>=1,ge>>=1}}else if(nt.length>0){if(V&&De){const Me=at(nt[0]);i.texStorage2D(o.TEXTURE_2D,we,Ve,Me.width,Me.height)}for(let Me=0,ge=nt.length;Me<ge;Me++)Oe=nt[Me],V?Re&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ee,We,Oe):i.texImage2D(o.TEXTURE_2D,Me,Ve,Ee,We,Oe);M.generateMipmaps=!1}else if(V){if(De){const Me=at(be);i.texStorage2D(o.TEXTURE_2D,we,Ve,Me.width,Me.height)}Re&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,We,be)}else i.texImage2D(o.TEXTURE_2D,0,Ve,Ee,We,be);b(M)&&_(pe),qe.__version=le.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function ue(O,M,$){if(M.image.length!==6)return;const pe=Se(O,M),ye=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+$);const le=r.get(ye);if(ye.version!==le.__version||pe===!0){i.activeTexture(o.TEXTURE0+$);const qe=Lt.getPrimaries(Lt.workingColorSpace),Ue=M.colorSpace===Wa?null:Lt.getPrimaries(M.colorSpace),Qe=M.colorSpace===Wa||qe===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const Xe=M.isCompressedTexture||M.image[0].isCompressedTexture,be=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let ge=0;ge<6;ge++)!Xe&&!be?Ee[ge]=A(M.image[ge],!0,l.maxCubemapSize):Ee[ge]=be?M.image[ge].image:M.image[ge],Ee[ge]=Ye(M,Ee[ge]);const We=Ee[0],Ve=c.convert(M.format,M.colorSpace),Oe=c.convert(M.type),nt=N(M.internalFormat,Ve,Oe,M.colorSpace),V=M.isVideoTexture!==!0,De=le.__version===void 0||pe===!0,Re=ye.dataReady;let we=G(M,We);se(o.TEXTURE_CUBE_MAP,M);let Me;if(Xe){V&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,we,nt,We.width,We.height);for(let ge=0;ge<6;ge++){Me=Ee[ge].mipmaps;for(let Ie=0;Ie<Me.length;Ie++){const it=Me[Ie];M.format!==Ai?Ve!==null?V?Re&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,it.width,it.height,Ve,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,nt,it.width,it.height,0,it.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,it.width,it.height,Ve,Oe,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,nt,it.width,it.height,0,Ve,Oe,it.data)}}}else{if(Me=M.mipmaps,V&&De){Me.length>0&&we++;const ge=at(Ee[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,we,nt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(be){V?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ee[ge].width,Ee[ge].height,Ve,Oe,Ee[ge].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,nt,Ee[ge].width,Ee[ge].height,0,Ve,Oe,Ee[ge].data);for(let Ie=0;Ie<Me.length;Ie++){const Ft=Me[Ie].image[ge].image;V?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,Ft.width,Ft.height,Ve,Oe,Ft.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,nt,Ft.width,Ft.height,0,Ve,Oe,Ft.data)}}else{V?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ve,Oe,Ee[ge]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,nt,Ve,Oe,Ee[ge]);for(let Ie=0;Ie<Me.length;Ie++){const it=Me[Ie];V?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,Ve,Oe,it.image[ge]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,nt,Ve,Oe,it.image[ge])}}}b(M)&&_(o.TEXTURE_CUBE_MAP),le.__version=ye.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function Ce(O,M,$,pe,ye,le){const qe=c.convert($.format,$.colorSpace),Ue=c.convert($.type),Qe=N($.internalFormat,qe,Ue,$.colorSpace),Xe=r.get(M),be=r.get($);if(be.__renderTarget=M,!Xe.__hasExternalTextures){const Ee=Math.max(1,M.width>>le),We=Math.max(1,M.height>>le);ye===o.TEXTURE_3D||ye===o.TEXTURE_2D_ARRAY?i.texImage3D(ye,le,Qe,Ee,We,M.depth,0,qe,Ue,null):i.texImage2D(ye,le,Qe,Ee,We,0,qe,Ue,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ye,be.__webglTexture,0,Pt(M)):(ye===o.TEXTURE_2D||ye>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ye,be.__webglTexture,le),i.bindFramebuffer(o.FRAMEBUFFER,null)}function He(O,M,$){if(o.bindRenderbuffer(o.RENDERBUFFER,O),M.depthBuffer){const pe=M.depthTexture,ye=pe&&pe.isDepthTexture?pe.type:null,le=z(M.stencilBuffer,ye),qe=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=Pt(M);Ge(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ue,le,M.width,M.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ue,le,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,le,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qe,o.RENDERBUFFER,O)}else{const pe=M.textures;for(let ye=0;ye<pe.length;ye++){const le=pe[ye],qe=c.convert(le.format,le.colorSpace),Ue=c.convert(le.type),Qe=N(le.internalFormat,qe,Ue,le.colorSpace),Xe=Pt(M);$&&Ge(M)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xe,Qe,M.width,M.height):Ge(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xe,Qe,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Qe,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function je(O,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(M.depthTexture);pe.__renderTarget=M,(!pe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),de(M.depthTexture,0);const ye=pe.__webglTexture,le=Pt(M);if(M.depthTexture.format===Io)Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ye,0,le):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ye,0);else if(M.depthTexture.format===Bo)Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ye,0,le):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function lt(O){const M=r.get(O),$=O.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==O.depthTexture){const pe=O.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),pe){const ye=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,pe.removeEventListener("dispose",ye)};pe.addEventListener("dispose",ye),M.__depthDisposeCallback=ye}M.__boundDepthTexture=pe}if(O.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const pe=O.texture.mipmaps;pe&&pe.length>0?je(M.__webglFramebuffer[0],O):je(M.__webglFramebuffer,O)}else if($){M.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[pe]),M.__webglDepthbuffer[pe]===void 0)M.__webglDepthbuffer[pe]=o.createRenderbuffer(),He(M.__webglDepthbuffer[pe],O,!1);else{const ye=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,le),o.framebufferRenderbuffer(o.FRAMEBUFFER,ye,o.RENDERBUFFER,le)}}else{const pe=O.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),He(M.__webglDepthbuffer,O,!1);else{const ye=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,le),o.framebufferRenderbuffer(o.FRAMEBUFFER,ye,o.RENDERBUFFER,le)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function an(O,M,$){const pe=r.get(O);M!==void 0&&Ce(pe.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&lt(O)}function dt(O){const M=O.texture,$=r.get(O),pe=r.get(M);O.addEventListener("dispose",I);const ye=O.textures,le=O.isWebGLCubeRenderTarget===!0,qe=ye.length>1;if(qe||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=M.version,d.memory.textures++),le){$.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[Ue]=[];for(let Qe=0;Qe<M.mipmaps.length;Qe++)$.__webglFramebuffer[Ue][Qe]=o.createFramebuffer()}else $.__webglFramebuffer[Ue]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ue=0;Ue<M.mipmaps.length;Ue++)$.__webglFramebuffer[Ue]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(qe)for(let Ue=0,Qe=ye.length;Ue<Qe;Ue++){const Xe=r.get(ye[Ue]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&Ge(O)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ue=0;Ue<ye.length;Ue++){const Qe=ye[Ue];$.__webglColorRenderbuffer[Ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Ue]);const Xe=c.convert(Qe.format,Qe.colorSpace),be=c.convert(Qe.type),Ee=N(Qe.internalFormat,Xe,be,Qe.colorSpace,O.isXRRenderTarget===!0),We=Pt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Ee,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,$.__webglColorRenderbuffer[Ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),He($.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(le){i.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),se(o.TEXTURE_CUBE_MAP,M);for(let Ue=0;Ue<6;Ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let Qe=0;Qe<M.mipmaps.length;Qe++)Ce($.__webglFramebuffer[Ue][Qe],O,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe);else Ce($.__webglFramebuffer[Ue],O,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);b(M)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let Ue=0,Qe=ye.length;Ue<Qe;Ue++){const Xe=ye[Ue],be=r.get(Xe);let Ee=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ee=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ee,be.__webglTexture),se(Ee,Xe),Ce($.__webglFramebuffer,O,Xe,o.COLOR_ATTACHMENT0+Ue,Ee,0),b(Xe)&&_(Ee)}i.unbindTexture()}else{let Ue=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ue=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ue,pe.__webglTexture),se(Ue,M),M.mipmaps&&M.mipmaps.length>0)for(let Qe=0;Qe<M.mipmaps.length;Qe++)Ce($.__webglFramebuffer[Qe],O,M,o.COLOR_ATTACHMENT0,Ue,Qe);else Ce($.__webglFramebuffer,O,M,o.COLOR_ATTACHMENT0,Ue,0);b(M)&&_(Ue),i.unbindTexture()}O.depthBuffer&&lt(O)}function wt(O){const M=O.textures;for(let $=0,pe=M.length;$<pe;$++){const ye=M[$];if(b(ye)){const le=U(O),qe=r.get(ye).__webglTexture;i.bindTexture(le,qe),_(le),i.unbindTexture()}}}const H=[],ht=[];function mt(O){if(O.samples>0){if(Ge(O)===!1){const M=O.textures,$=O.width,pe=O.height;let ye=o.COLOR_BUFFER_BIT;const le=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qe=r.get(O),Ue=M.length>1;if(Ue)for(let Xe=0;Xe<M.length;Xe++)i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Qe=O.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Xe=0;Xe<M.length;Xe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ye|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ye|=o.STENCIL_BUFFER_BIT)),Ue){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qe.__webglColorRenderbuffer[Xe]);const be=r.get(M[Xe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,be,0)}o.blitFramebuffer(0,0,$,pe,0,0,$,pe,ye,o.NEAREST),m===!0&&(H.length=0,ht.length=0,H.push(o.COLOR_ATTACHMENT0+Xe),O.depthBuffer&&O.resolveDepthBuffer===!1&&(H.push(le),ht.push(le),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ue)for(let Xe=0;Xe<M.length;Xe++){i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,qe.__webglColorRenderbuffer[Xe]);const be=r.get(M[Xe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,be,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const M=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Pt(O){return Math.min(l.maxSamples,O.samples)}function Ge(O){const M=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function qt(O){const M=d.render.frame;x.get(O)!==M&&(x.set(O,M),O.update())}function Ye(O,M){const $=O.colorSpace,pe=O.format,ye=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||$!==Es&&$!==Wa&&(Lt.getTransfer($)===kt?(pe!==Ai||ye!==Oi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):on("WebGLTextures: Unsupported texture color space:",$)),M}function at(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ce,this.resetTextureUnits=te,this.setTexture2D=de,this.setTexture2DArray=F,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=an,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ge}function BE(o,t){function i(r,l=Wa){let c;const d=Lt.getTransfer(l);if(r===Oi)return o.UNSIGNED_BYTE;if(r===Lh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Oh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Yg)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Zg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===qg)return o.BYTE;if(r===Wg)return o.SHORT;if(r===zo)return o.UNSIGNED_SHORT;if(r===Uh)return o.INT;if(r===Tr)return o.UNSIGNED_INT;if(r===da)return o.FLOAT;if(r===As)return o.HALF_FLOAT;if(r===Kg)return o.ALPHA;if(r===Qg)return o.RGB;if(r===Ai)return o.RGBA;if(r===Io)return o.DEPTH_COMPONENT;if(r===Bo)return o.DEPTH_STENCIL;if(r===Jg)return o.RED;if(r===zh)return o.RED_INTEGER;if(r===Ph)return o.RG;if(r===Ih)return o.RG_INTEGER;if(r===Bh)return o.RGBA_INTEGER;if(r===Tc||r===Ac||r===Rc||r===wc)if(d===kt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Tc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ac)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Tc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ac)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Kd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===eh||r===th||r===nh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===eh||r===th)return d===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===nh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===xh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ih)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ah)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ch)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ph)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gh||r===vh||r===_h)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===gh)return d===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_h)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yh||r===bh||r===Sh||r===Mh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===yh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===bh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Po?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const FE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new hv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ma({vertexShader:FE,fragmentShader:HE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pi(new Hc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VE extends Rs{constructor(t,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,x=null,g=null,y=null,S=null,E=null;const A=typeof XRWebGLBinding<"u",b=new GE,_={},U=i.getContextAttributes();let N=null,z=null;const G=[],L=[],I=new At;let W=null;const D=new Ln;D.viewport=new jt;const C=new Ln;C.viewport=new jt;const j=[D,C],te=new o1;let ce=null,xe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ue=G[ae];return ue===void 0&&(ue=new wd,G[ae]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ae){let ue=G[ae];return ue===void 0&&(ue=new wd,G[ae]=ue),ue.getGripSpace()},this.getHand=function(ae){let ue=G[ae];return ue===void 0&&(ue=new wd,G[ae]=ue),ue.getHandSpace()};function de(ae){const ue=L.indexOf(ae.inputSource);if(ue===-1)return;const Ce=G[ue];Ce!==void 0&&(Ce.update(ae.inputSource,ae.frame,p||d),Ce.dispatchEvent({type:ae.type,data:ae.inputSource}))}function F(){l.removeEventListener("select",de),l.removeEventListener("selectstart",de),l.removeEventListener("selectend",de),l.removeEventListener("squeeze",de),l.removeEventListener("squeezestart",de),l.removeEventListener("squeezeend",de),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",K);for(let ae=0;ae<G.length;ae++){const ue=L[ae];ue!==null&&(L[ae]=null,G[ae].disconnect(ue))}ce=null,xe=null,b.reset();for(const ae in _)delete _[ae];t.setRenderTarget(N),S=null,y=null,g=null,l=null,z=null,ze.stop(),r.isPresenting=!1,t.setPixelRatio(W),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",de),l.addEventListener("selectstart",de),l.addEventListener("selectend",de),l.addEventListener("squeeze",de),l.addEventListener("squeezestart",de),l.addEventListener("squeezeend",de),l.addEventListener("end",F),l.addEventListener("inputsourceschange",K),U.xrCompatible!==!0&&await i.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(I),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,He=null,je=null;U.depth&&(je=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ce=U.stencil?Bo:Io,He=U.stencil?Po:Tr);const lt={colorFormat:i.RGBA8,depthFormat:je,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(lt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),z=new Ar(y.textureWidth,y.textureHeight,{format:Ai,type:Oi,depthTexture:new dv(y.textureWidth,y.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ce={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Ce),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),z=new Ar(S.framebufferWidth,S.framebufferHeight,{format:Ai,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),ze.setContext(l),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function K(ae){for(let ue=0;ue<ae.removed.length;ue++){const Ce=ae.removed[ue],He=L.indexOf(Ce);He>=0&&(L[He]=null,G[He].disconnect(Ce))}for(let ue=0;ue<ae.added.length;ue++){const Ce=ae.added[ue];let He=L.indexOf(Ce);if(He===-1){for(let lt=0;lt<G.length;lt++)if(lt>=L.length){L.push(Ce),He=lt;break}else if(L[lt]===null){L[lt]=Ce,He=lt;break}if(He===-1)break}const je=G[He];je&&je.connect(Ce)}}const Z=new J,ve=new J;function _e(ae,ue,Ce){Z.setFromMatrixPosition(ue.matrixWorld),ve.setFromMatrixPosition(Ce.matrixWorld);const He=Z.distanceTo(ve),je=ue.projectionMatrix.elements,lt=Ce.projectionMatrix.elements,an=je[14]/(je[10]-1),dt=je[14]/(je[10]+1),wt=(je[9]+1)/je[5],H=(je[9]-1)/je[5],ht=(je[8]-1)/je[0],mt=(lt[8]+1)/lt[0],Pt=an*ht,Ge=an*mt,qt=He/(-ht+mt),Ye=qt*-ht;if(ue.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Ye),ae.translateZ(qt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),je[10]===-1)ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const at=an+qt,O=dt+qt,M=Pt-Ye,$=Ge+(He-Ye),pe=wt*dt/O*at,ye=H*dt/O*at;ae.projectionMatrix.makePerspective(M,$,pe,ye,at,O),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function P(ae,ue){ue===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ue.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let ue=ae.near,Ce=ae.far;b.texture!==null&&(b.depthNear>0&&(ue=b.depthNear),b.depthFar>0&&(Ce=b.depthFar)),te.near=C.near=D.near=ue,te.far=C.far=D.far=Ce,(ce!==te.near||xe!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),ce=te.near,xe=te.far),te.layers.mask=ae.layers.mask|6,D.layers.mask=te.layers.mask&3,C.layers.mask=te.layers.mask&5;const He=ae.parent,je=te.cameras;P(te,He);for(let lt=0;lt<je.length;lt++)P(je[lt],He);je.length===2?_e(te,D,C):te.projectionMatrix.copy(D.projectionMatrix),se(ae,te,He)};function se(ae,ue,Ce){Ce===null?ae.matrix.copy(ue.matrixWorld):(ae.matrix.copy(Ce.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ue.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Eh*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(ae){m=ae,y!==null&&(y.fixedFoveation=ae),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ae)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(te)},this.getCameraTexture=function(ae){return _[ae]};let Se=null;function Te(ae,ue){if(x=ue.getViewerPose(p||d),E=ue,x!==null){const Ce=x.views;S!==null&&(t.setRenderTargetFramebuffer(z,S.framebuffer),t.setRenderTarget(z));let He=!1;Ce.length!==te.cameras.length&&(te.cameras.length=0,He=!0);for(let dt=0;dt<Ce.length;dt++){const wt=Ce[dt];let H=null;if(S!==null)H=S.getViewport(wt);else{const mt=g.getViewSubImage(y,wt);H=mt.viewport,dt===0&&(t.setRenderTargetTextures(z,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(z))}let ht=j[dt];ht===void 0&&(ht=new Ln,ht.layers.enable(dt),ht.viewport=new jt,j[dt]=ht),ht.matrix.fromArray(wt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(wt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(H.x,H.y,H.width,H.height),dt===0&&(te.matrix.copy(ht.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),He===!0&&te.cameras.push(ht)}const je=l.enabledFeatures;if(je&&je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const dt=g.getDepthInformation(Ce[0]);dt&&dt.isValid&&dt.texture&&b.init(dt,l.renderState)}if(je&&je.includes("camera-access")&&A){t.state.unbindTexture(),g=r.getBinding();for(let dt=0;dt<Ce.length;dt++){const wt=Ce[dt].camera;if(wt){let H=_[wt];H||(H=new hv,_[wt]=H);const ht=g.getCameraImage(wt);H.sourceTexture=ht}}}}for(let Ce=0;Ce<G.length;Ce++){const He=L[Ce],je=G[Ce];He!==null&&je!==void 0&&je.update(He,ue,p||d)}Se&&Se(ae,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),E=null}const ze=new xv;ze.setAnimationLoop(Te),this.setAnimationLoop=function(ae){Se=ae},this.dispose=function(){}}}const yr=new zi,kE=new en;function jE(o,t){function i(b,_){b.matrixAutoUpdate===!0&&b.updateMatrix(),_.value.copy(b.matrix)}function r(b,_){_.color.getRGB(b.fogColor.value,cv(o)),_.isFog?(b.fogNear.value=_.near,b.fogFar.value=_.far):_.isFogExp2&&(b.fogDensity.value=_.density)}function l(b,_,U,N,z){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(b,_):_.isMeshToonMaterial?(c(b,_),g(b,_)):_.isMeshPhongMaterial?(c(b,_),x(b,_)):_.isMeshStandardMaterial?(c(b,_),y(b,_),_.isMeshPhysicalMaterial&&S(b,_,z)):_.isMeshMatcapMaterial?(c(b,_),E(b,_)):_.isMeshDepthMaterial?c(b,_):_.isMeshDistanceMaterial?(c(b,_),A(b,_)):_.isMeshNormalMaterial?c(b,_):_.isLineBasicMaterial?(d(b,_),_.isLineDashedMaterial&&h(b,_)):_.isPointsMaterial?m(b,_,U,N):_.isSpriteMaterial?p(b,_):_.isShadowMaterial?(b.color.value.copy(_.color),b.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(b,_){b.opacity.value=_.opacity,_.color&&b.diffuse.value.copy(_.color),_.emissive&&b.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(b.map.value=_.map,i(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.bumpMap&&(b.bumpMap.value=_.bumpMap,i(_.bumpMap,b.bumpMapTransform),b.bumpScale.value=_.bumpScale,_.side===qn&&(b.bumpScale.value*=-1)),_.normalMap&&(b.normalMap.value=_.normalMap,i(_.normalMap,b.normalMapTransform),b.normalScale.value.copy(_.normalScale),_.side===qn&&b.normalScale.value.negate()),_.displacementMap&&(b.displacementMap.value=_.displacementMap,i(_.displacementMap,b.displacementMapTransform),b.displacementScale.value=_.displacementScale,b.displacementBias.value=_.displacementBias),_.emissiveMap&&(b.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,b.emissiveMapTransform)),_.specularMap&&(b.specularMap.value=_.specularMap,i(_.specularMap,b.specularMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest);const U=t.get(_),N=U.envMap,z=U.envMapRotation;N&&(b.envMap.value=N,yr.copy(z),yr.x*=-1,yr.y*=-1,yr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),b.envMapRotation.value.setFromMatrix4(kE.makeRotationFromEuler(yr)),b.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=_.reflectivity,b.ior.value=_.ior,b.refractionRatio.value=_.refractionRatio),_.lightMap&&(b.lightMap.value=_.lightMap,b.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,b.lightMapTransform)),_.aoMap&&(b.aoMap.value=_.aoMap,b.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,b.aoMapTransform))}function d(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,_.map&&(b.map.value=_.map,i(_.map,b.mapTransform))}function h(b,_){b.dashSize.value=_.dashSize,b.totalSize.value=_.dashSize+_.gapSize,b.scale.value=_.scale}function m(b,_,U,N){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.size.value=_.size*U,b.scale.value=N*.5,_.map&&(b.map.value=_.map,i(_.map,b.uvTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function p(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.rotation.value=_.rotation,_.map&&(b.map.value=_.map,i(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function x(b,_){b.specular.value.copy(_.specular),b.shininess.value=Math.max(_.shininess,1e-4)}function g(b,_){_.gradientMap&&(b.gradientMap.value=_.gradientMap)}function y(b,_){b.metalness.value=_.metalness,_.metalnessMap&&(b.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,b.metalnessMapTransform)),b.roughness.value=_.roughness,_.roughnessMap&&(b.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,b.roughnessMapTransform)),_.envMap&&(b.envMapIntensity.value=_.envMapIntensity)}function S(b,_,U){b.ior.value=_.ior,_.sheen>0&&(b.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),b.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(b.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,b.sheenColorMapTransform)),_.sheenRoughnessMap&&(b.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,b.sheenRoughnessMapTransform))),_.clearcoat>0&&(b.clearcoat.value=_.clearcoat,b.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(b.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,b.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(b.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&b.clearcoatNormalScale.value.negate())),_.dispersion>0&&(b.dispersion.value=_.dispersion),_.iridescence>0&&(b.iridescence.value=_.iridescence,b.iridescenceIOR.value=_.iridescenceIOR,b.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(b.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,b.iridescenceMapTransform)),_.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),_.transmission>0&&(b.transmission.value=_.transmission,b.transmissionSamplerMap.value=U.texture,b.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(b.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,b.transmissionMapTransform)),b.thickness.value=_.thickness,_.thicknessMap&&(b.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=_.attenuationDistance,b.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(b.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(b.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=_.specularIntensity,b.specularColor.value.copy(_.specularColor),_.specularColorMap&&(b.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,b.specularColorMapTransform)),_.specularIntensityMap&&(b.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,_){_.matcap&&(b.matcap.value=_.matcap)}function A(b,_){const U=t.get(_).light;b.referencePosition.value.setFromMatrixPosition(U.matrixWorld),b.nearDistance.value=U.shadow.camera.near,b.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function XE(o,t,i,r){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,N){const z=N.program;r.uniformBlockBinding(U,z)}function p(U,N){let z=l[U.id];z===void 0&&(E(U),z=x(U),l[U.id]=z,U.addEventListener("dispose",b));const G=N.program;r.updateUBOMapping(U,G);const L=t.render.frame;c[U.id]!==L&&(y(U),c[U.id]=L)}function x(U){const N=g();U.__bindingPointIndex=N;const z=o.createBuffer(),G=U.__size,L=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,z),o.bufferData(o.UNIFORM_BUFFER,G,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,z),z}function g(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return on("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const N=l[U.id],z=U.uniforms,G=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let L=0,I=z.length;L<I;L++){const W=Array.isArray(z[L])?z[L]:[z[L]];for(let D=0,C=W.length;D<C;D++){const j=W[D];if(S(j,L,D,G)===!0){const te=j.__offset,ce=Array.isArray(j.value)?j.value:[j.value];let xe=0;for(let de=0;de<ce.length;de++){const F=ce[de],K=A(F);typeof F=="number"||typeof F=="boolean"?(j.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,te+xe,j.__data)):F.isMatrix3?(j.__data[0]=F.elements[0],j.__data[1]=F.elements[1],j.__data[2]=F.elements[2],j.__data[3]=0,j.__data[4]=F.elements[3],j.__data[5]=F.elements[4],j.__data[6]=F.elements[5],j.__data[7]=0,j.__data[8]=F.elements[6],j.__data[9]=F.elements[7],j.__data[10]=F.elements[8],j.__data[11]=0):(F.toArray(j.__data,xe),xe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,te,j.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(U,N,z,G){const L=U.value,I=N+"_"+z;if(G[I]===void 0)return typeof L=="number"||typeof L=="boolean"?G[I]=L:G[I]=L.clone(),!0;{const W=G[I];if(typeof L=="number"||typeof L=="boolean"){if(W!==L)return G[I]=L,!0}else if(W.equals(L)===!1)return W.copy(L),!0}return!1}function E(U){const N=U.uniforms;let z=0;const G=16;for(let I=0,W=N.length;I<W;I++){const D=Array.isArray(N[I])?N[I]:[N[I]];for(let C=0,j=D.length;C<j;C++){const te=D[C],ce=Array.isArray(te.value)?te.value:[te.value];for(let xe=0,de=ce.length;xe<de;xe++){const F=ce[xe],K=A(F),Z=z%G,ve=Z%K.boundary,_e=Z+ve;z+=ve,_e!==0&&G-_e<K.storage&&(z+=G-_e),te.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=z,z+=K.storage}}}const L=z%G;return L>0&&(z+=G-L),U.__size=z,U.__cache={},this}function A(U){const N={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(N.boundary=4,N.storage=4):U.isVector2?(N.boundary=8,N.storage=8):U.isVector3||U.isColor?(N.boundary=16,N.storage=12):U.isVector4?(N.boundary=16,N.storage=16):U.isMatrix3?(N.boundary=48,N.storage=48):U.isMatrix4?(N.boundary=64,N.storage=64):U.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",U),N}function b(U){const N=U.target;N.removeEventListener("dispose",b);const z=d.indexOf(N.__bindingPointIndex);d.splice(z,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const U in l)o.deleteBuffer(l[U]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}const qE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let la=null;function WE(){return la===null&&(la=new JS(qE,32,32,Ph,As),la.minFilter=gi,la.magFilter=gi,la.wrapS=fa,la.wrapT=fa,la.generateMipmaps=!1,la.needsUpdate=!0),la}class Xc{constructor(t={}){const{canvas:i=TS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const E=new Set([Bh,Ih,zh]),A=new Set([Oi,Tr,zo,Po,Lh,Oh]),b=new Uint32Array(4),_=new Int32Array(4);let U=null,N=null;const z=[],G=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let I=!1;this._outputColorSpace=xi;let W=0,D=0,C=null,j=-1,te=null;const ce=new jt,xe=new jt;let de=null;const F=new bt(0);let K=0,Z=i.width,ve=i.height,_e=1,P=null,se=null;const Se=new jt(0,0,Z,ve),Te=new jt(0,0,Z,ve);let ze=!1;const ae=new Hh;let ue=!1,Ce=!1;const He=new en,je=new J,lt=new jt,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function wt(){return C===null?_e:1}let H=r;function ht(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Dh}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",ge,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),H===null){const X="webgl2";if(H=ht(X,R),H===null)throw ht(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let mt,Pt,Ge,qt,Ye,at,O,M,$,pe,ye,le,qe,Ue,Qe,Xe,be,Ee,We,Ve,Oe,nt,V,De;function Re(){mt=new n2(H),mt.init(),nt=new BE(H,mt),Pt=new W3(H,mt,t,nt),Ge=new PE(H,mt),Pt.reversedDepthBuffer&&y&&Ge.buffers.depth.setReversed(!0),qt=new r2(H),Ye=new ME,at=new IE(H,mt,Ge,Ye,Pt,nt,qt),O=new Z3(L),M=new t2(L),$=new c1(H),V=new X3(H,$),pe=new i2(H,$,qt,V),ye=new o2(H,pe,$,qt),We=new s2(H,Pt,at),Xe=new Y3(Ye),le=new SE(L,O,M,mt,Pt,V,Xe),qe=new jE(L,Ye),Ue=new TE,Qe=new NE(mt),Ee=new j3(L,O,M,Ge,ye,S,m),be=new OE(L,ye,Pt),De=new XE(H,qt,Pt,Ge),Ve=new q3(H,mt,qt),Oe=new a2(H,mt,qt),qt.programs=le.programs,L.capabilities=Pt,L.extensions=mt,L.properties=Ye,L.renderLists=Ue,L.shadowMap=be,L.state=Ge,L.info=qt}Re();const we=new VE(L,H);this.xr=we,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(R){R!==void 0&&(_e=R,this.setSize(Z,ve,!1))},this.getSize=function(R){return R.set(Z,ve)},this.setSize=function(R,X,re=!0){if(we.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,ve=X,i.width=Math.floor(R*_e),i.height=Math.floor(X*_e),re===!0&&(i.style.width=R+"px",i.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(Z*_e,ve*_e).floor()},this.setDrawingBufferSize=function(R,X,re){Z=R,ve=X,_e=re,i.width=Math.floor(R*re),i.height=Math.floor(X*re),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(ce)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,X,re,ne){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,X,re,ne),Ge.viewport(ce.copy(Se).multiplyScalar(_e).round())},this.getScissor=function(R){return R.copy(Te)},this.setScissor=function(R,X,re,ne){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,X,re,ne),Ge.scissor(xe.copy(Te).multiplyScalar(_e).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(R){Ge.setScissorTest(ze=R)},this.setOpaqueSort=function(R){P=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,re=!0){let ne=0;if(R){let Y=!1;if(C!==null){const Ae=C.texture.format;Y=E.has(Ae)}if(Y){const Ae=C.texture.type,Ne=A.has(Ae),Pe=Ee.getClearColor(),Be=Ee.getClearAlpha(),$e=Pe.r,tt=Pe.g,Ze=Pe.b;Ne?(b[0]=$e,b[1]=tt,b[2]=Ze,b[3]=Be,H.clearBufferuiv(H.COLOR,0,b)):(_[0]=$e,_[1]=tt,_[2]=Ze,_[3]=Be,H.clearBufferiv(H.COLOR,0,_))}else ne|=H.COLOR_BUFFER_BIT}X&&(ne|=H.DEPTH_BUFFER_BIT),re&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),Ee.dispose(),Ue.dispose(),Qe.dispose(),Ye.dispose(),O.dispose(),M.dispose(),ye.dispose(),V.dispose(),De.dispose(),le.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ns),we.removeEventListener("sessionend",Us),vi.stop()};function Me(R){R.preventDefault(),Xx("WebGLRenderer: Context Lost."),I=!0}function ge(){Xx("WebGLRenderer: Context Restored."),I=!1;const R=qt.autoReset,X=be.enabled,re=be.autoUpdate,ne=be.needsUpdate,Y=be.type;Re(),qt.autoReset=R,be.enabled=X,be.autoUpdate=re,be.needsUpdate=ne,be.type=Y}function Ie(R){on("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function it(R){const X=R.target;X.removeEventListener("dispose",it),Ft(X)}function Ft(R){Ct(R),Ye.remove(R)}function Ct(R){const X=Ye.get(R).programs;X!==void 0&&(X.forEach(function(re){le.releaseProgram(re)}),R.isShaderMaterial&&le.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,re,ne,Y,Ae){X===null&&(X=an);const Ne=Y.isMesh&&Y.matrixWorld.determinant()<0,Pe=qc(R,X,re,ne,Y);Ge.setMaterial(ne,Ne);let Be=re.index,$e=1;if(ne.wireframe===!0){if(Be=pe.getWireframeAttribute(re),Be===void 0)return;$e=2}const tt=re.drawRange,Ze=re.attributes.position;let ct=tt.start*$e,Rt=(tt.start+tt.count)*$e;Ae!==null&&(ct=Math.max(ct,Ae.start*$e),Rt=Math.min(Rt,(Ae.start+Ae.count)*$e)),Be!==null?(ct=Math.max(ct,0),Rt=Math.min(Rt,Be.count)):Ze!=null&&(ct=Math.max(ct,0),Rt=Math.min(Rt,Ze.count));const Dt=Rt-ct;if(Dt<0||Dt===1/0)return;V.setup(Y,ne,Pe,re,Be);let St,zt=Ve;if(Be!==null&&(St=$.get(Be),zt=Oe,zt.setIndex(St)),Y.isMesh)ne.wireframe===!0?(Ge.setLineWidth(ne.wireframeLinewidth*wt()),zt.setMode(H.LINES)):zt.setMode(H.TRIANGLES);else if(Y.isLine){let Je=ne.linewidth;Je===void 0&&(Je=1),Ge.setLineWidth(Je*wt()),Y.isLineSegments?zt.setMode(H.LINES):Y.isLineLoop?zt.setMode(H.LINE_LOOP):zt.setMode(H.LINE_STRIP)}else Y.isPoints?zt.setMode(H.POINTS):Y.isSprite&&zt.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Fo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),zt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))zt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Je=Y._multiDrawStarts,Wt=Y._multiDrawCounts,Mt=Y._multiDrawCount,_n=Be?$.get(Be).bytesPerElement:1,ga=Ye.get(ne).currentProgram.getUniforms();for(let Zt=0;Zt<Mt;Zt++)ga.setValue(H,"_gl_DrawID",Zt),zt.render(Je[Zt]/_n,Wt[Zt])}else if(Y.isInstancedMesh)zt.renderInstances(ct,Dt,Y.count);else if(re.isInstancedBufferGeometry){const Je=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Wt=Math.min(re.instanceCount,Je);zt.renderInstances(ct,Dt,Wt)}else zt.render(ct,Dt)};function Cn(R,X,re){R.transparent===!0&&R.side===ua&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,pn(R,X,re),R.side=Ka,R.needsUpdate=!0,pn(R,X,re),R.side=ua):pn(R,X,re)}this.compile=function(R,X,re=null){re===null&&(re=R),N=Qe.get(re),N.init(X),G.push(N),re.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(N.pushLight(Y),Y.castShadow&&N.pushShadow(Y))}),R!==re&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(N.pushLight(Y),Y.castShadow&&N.pushShadow(Y))}),N.setupLights();const ne=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const Pe=Ae[Ne];Cn(Pe,re,Y),ne.add(Pe)}else Cn(Ae,re,Y),ne.add(Ae)}),N=G.pop(),ne},this.compileAsync=function(R,X,re=null){const ne=this.compile(R,X,re);return new Promise(Y=>{function Ae(){if(ne.forEach(function(Ne){Ye.get(Ne).currentProgram.isReady()&&ne.delete(Ne)}),ne.size===0){Y(R);return}setTimeout(Ae,10)}mt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Yn=null;function ko(R){Yn&&Yn(R)}function Ns(){vi.stop()}function Us(){vi.start()}const vi=new xv;vi.setAnimationLoop(ko),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(R){Yn=R,we.setAnimationLoop(R),R===null?vi.stop():vi.start()},we.addEventListener("sessionstart",Ns),we.addEventListener("sessionend",Us),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){on("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(X),X=we.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,X,C),N=Qe.get(R,G.length),N.init(X),G.push(N),He.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ae.setFromProjectionMatrix(He,Li,X.reversedDepth),Ce=this.localClippingEnabled,ue=Xe.init(this.clippingPlanes,Ce),U=Ue.get(R,z.length),U.init(),z.push(U),we.enabled===!0&&we.isPresenting===!0){const Ae=L.xr.getDepthSensingMesh();Ae!==null&&Qa(Ae,X,-1/0,L.sortObjects)}Qa(R,X,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(P,se),dt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,dt&&Ee.addToRenderList(U,R),this.info.render.frame++,ue===!0&&Xe.beginShadows();const re=N.state.shadowsArray;be.render(re,R,X),ue===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=U.opaque,Y=U.transmissive;if(N.setupLights(),X.isArrayCamera){const Ae=X.cameras;if(Y.length>0)for(let Ne=0,Pe=Ae.length;Ne<Pe;Ne++){const Be=Ae[Ne];Os(ne,Y,R,Be)}dt&&Ee.render(R);for(let Ne=0,Pe=Ae.length;Ne<Pe;Ne++){const Be=Ae[Ne];Ls(U,R,Be,Be.viewport)}}else Y.length>0&&Os(ne,Y,R,X),dt&&Ee.render(R),Ls(U,R,X);C!==null&&D===0&&(at.updateMultisampleRenderTarget(C),at.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(L,R,X),V.resetDefaultState(),j=-1,te=null,G.pop(),G.length>0?(N=G[G.length-1],ue===!0&&Xe.setGlobalState(L.clippingPlanes,N.state.camera)):N=null,z.pop(),z.length>0?U=z[z.length-1]:U=null};function Qa(R,X,re,ne){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ae.intersectsSprite(R)){ne&&lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(He);const Ne=ye.update(R),Pe=R.material;Pe.visible&&U.push(R,Ne,Pe,re,lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ae.intersectsObject(R))){const Ne=ye.update(R),Pe=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),lt.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),lt.copy(Ne.boundingSphere.center)),lt.applyMatrix4(R.matrixWorld).applyMatrix4(He)),Array.isArray(Pe)){const Be=Ne.groups;for(let $e=0,tt=Be.length;$e<tt;$e++){const Ze=Be[$e],ct=Pe[Ze.materialIndex];ct&&ct.visible&&U.push(R,Ne,ct,re,lt.z,Ze)}}else Pe.visible&&U.push(R,Ne,Pe,re,lt.z,null)}}const Ae=R.children;for(let Ne=0,Pe=Ae.length;Ne<Pe;Ne++)Qa(Ae[Ne],X,re,ne)}function Ls(R,X,re,ne){const{opaque:Y,transmissive:Ae,transparent:Ne}=R;N.setupLightsView(re),ue===!0&&Xe.setGlobalState(L.clippingPlanes,re),ne&&Ge.viewport(ce.copy(ne)),Y.length>0&&Zn(Y,X,re),Ae.length>0&&Zn(Ae,X,re),Ne.length>0&&Zn(Ne,X,re),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Os(R,X,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;N.state.transmissionRenderTarget[ne.id]===void 0&&(N.state.transmissionRenderTarget[ne.id]=new Ar(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?As:Oi,minFilter:Er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Ae=N.state.transmissionRenderTarget[ne.id],Ne=ne.viewport||ce;Ae.setSize(Ne.z*L.transmissionResolutionScale,Ne.w*L.transmissionResolutionScale);const Pe=L.getRenderTarget(),Be=L.getActiveCubeFace(),$e=L.getActiveMipmapLevel();L.setRenderTarget(Ae),L.getClearColor(F),K=L.getClearAlpha(),K<1&&L.setClearColor(16777215,.5),L.clear(),dt&&Ee.render(re);const tt=L.toneMapping;L.toneMapping=Za;const Ze=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),N.setupLightsView(ne),ue===!0&&Xe.setGlobalState(L.clippingPlanes,ne),Zn(R,re,ne),at.updateMultisampleRenderTarget(Ae),at.updateRenderTargetMipmap(Ae),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Rt=0,Dt=X.length;Rt<Dt;Rt++){const St=X[Rt],{object:zt,geometry:Je,material:Wt,group:Mt}=St;if(Wt.side===ua&&zt.layers.test(ne.layers)){const _n=Wt.side;Wt.side=qn,Wt.needsUpdate=!0,ln(zt,re,ne,Je,Wt,Mt),Wt.side=_n,Wt.needsUpdate=!0,ct=!0}}ct===!0&&(at.updateMultisampleRenderTarget(Ae),at.updateRenderTargetMipmap(Ae))}L.setRenderTarget(Pe,Be,$e),L.setClearColor(F,K),Ze!==void 0&&(ne.viewport=Ze),L.toneMapping=tt}function Zn(R,X,re){const ne=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Ae=R.length;Y<Ae;Y++){const Ne=R[Y],{object:Pe,geometry:Be,group:$e}=Ne;let tt=Ne.material;tt.allowOverride===!0&&ne!==null&&(tt=ne),Pe.layers.test(re.layers)&&ln(Pe,X,re,Be,tt,$e)}}function ln(R,X,re,ne,Y,Ae){R.onBeforeRender(L,X,re,ne,Y,Ae),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(L,X,re,ne,R,Ae),Y.transparent===!0&&Y.side===ua&&Y.forceSinglePass===!1?(Y.side=qn,Y.needsUpdate=!0,L.renderBufferDirect(re,X,ne,Y,R,Ae),Y.side=Ka,Y.needsUpdate=!0,L.renderBufferDirect(re,X,ne,Y,R,Ae),Y.side=ua):L.renderBufferDirect(re,X,ne,Y,R,Ae),R.onAfterRender(L,X,re,ne,Y,Ae)}function pn(R,X,re){X.isScene!==!0&&(X=an);const ne=Ye.get(R),Y=N.state.lights,Ae=N.state.shadowsArray,Ne=Y.state.version,Pe=le.getParameters(R,Y.state,Ae,X,re),Be=le.getProgramCacheKey(Pe);let $e=ne.programs;ne.environment=R.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(R.isMeshStandardMaterial?M:O).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",it),$e=new Map,ne.programs=$e);let tt=$e.get(Be);if(tt!==void 0){if(ne.currentProgram===tt&&ne.lightsStateVersion===Ne)return Rr(R,Pe),tt}else Pe.uniforms=le.getUniforms(R),R.onBeforeCompile(Pe,L),tt=le.acquireProgram(Pe,Be),$e.set(Be,tt),ne.uniforms=Pe.uniforms;const Ze=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Xe.uniform),Rr(R,Pe),ne.needsLights=jo(R),ne.lightsStateVersion=Ne,ne.needsLights&&(Ze.ambientLightColor.value=Y.state.ambient,Ze.lightProbe.value=Y.state.probe,Ze.directionalLights.value=Y.state.directional,Ze.directionalLightShadows.value=Y.state.directionalShadow,Ze.spotLights.value=Y.state.spot,Ze.spotLightShadows.value=Y.state.spotShadow,Ze.rectAreaLights.value=Y.state.rectArea,Ze.ltc_1.value=Y.state.rectAreaLTC1,Ze.ltc_2.value=Y.state.rectAreaLTC2,Ze.pointLights.value=Y.state.point,Ze.pointLightShadows.value=Y.state.pointShadow,Ze.hemisphereLights.value=Y.state.hemi,Ze.directionalShadowMap.value=Y.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ze.spotShadowMap.value=Y.state.spotShadowMap,Ze.spotLightMatrix.value=Y.state.spotLightMatrix,Ze.spotLightMap.value=Y.state.spotLightMap,Ze.pointShadowMap.value=Y.state.pointShadowMap,Ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),ne.currentProgram=tt,ne.uniformsList=null,tt}function Ii(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Cc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Rr(R,X){const re=Ye.get(R);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function qc(R,X,re,ne,Y){X.isScene!==!0&&(X=an),at.resetTextureUnits();const Ae=X.fog,Ne=ne.isMeshStandardMaterial?X.environment:null,Pe=C===null?L.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Es,Be=(ne.isMeshStandardMaterial?M:O).get(ne.envMap||Ne),$e=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,tt=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!re.morphAttributes.position,ct=!!re.morphAttributes.normal,Rt=!!re.morphAttributes.color;let Dt=Za;ne.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Dt=L.toneMapping);const St=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,zt=St!==void 0?St.length:0,Je=Ye.get(ne),Wt=N.state.lights;if(ue===!0&&(Ce===!0||R!==te)){const bn=R===te&&ne.id===j;Xe.setState(ne,R,bn)}let Mt=!1;ne.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Wt.state.version||Je.outputColorSpace!==Pe||Y.isBatchedMesh&&Je.batching===!1||!Y.isBatchedMesh&&Je.batching===!0||Y.isBatchedMesh&&Je.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Je.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Je.instancing===!1||!Y.isInstancedMesh&&Je.instancing===!0||Y.isSkinnedMesh&&Je.skinning===!1||!Y.isSkinnedMesh&&Je.skinning===!0||Y.isInstancedMesh&&Je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Je.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Je.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Je.instancingMorph===!1&&Y.morphTexture!==null||Je.envMap!==Be||ne.fog===!0&&Je.fog!==Ae||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Xe.numPlanes||Je.numIntersection!==Xe.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==tt||Je.morphTargets!==Ze||Je.morphNormals!==ct||Je.morphColors!==Rt||Je.toneMapping!==Dt||Je.morphTargetsCount!==zt)&&(Mt=!0):(Mt=!0,Je.__version=ne.version);let _n=Je.currentProgram;Mt===!0&&(_n=pn(ne,X,Y));let ga=!1,Zt=!1,Bi=!1;const Kt=_n.getUniforms(),yn=Je.uniforms;if(Ge.useProgram(_n.program)&&(ga=!0,Zt=!0,Bi=!0),ne.id!==j&&(j=ne.id,Zt=!0),ga||te!==R){Ge.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Kt.setValue(H,"projectionMatrix",R.projectionMatrix),Kt.setValue(H,"viewMatrix",R.matrixWorldInverse);const En=Kt.map.cameraPosition;En!==void 0&&En.setValue(H,je.setFromMatrixPosition(R.matrixWorld)),Pt.logarithmicDepthBuffer&&Kt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Kt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),te!==R&&(te=R,Zt=!0,Bi=!0)}if(Y.isSkinnedMesh){Kt.setOptional(H,Y,"bindMatrix"),Kt.setOptional(H,Y,"bindMatrixInverse");const bn=Y.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Kt.setValue(H,"boneTexture",bn.boneTexture,at))}Y.isBatchedMesh&&(Kt.setOptional(H,Y,"batchingTexture"),Kt.setValue(H,"batchingTexture",Y._matricesTexture,at),Kt.setOptional(H,Y,"batchingIdTexture"),Kt.setValue(H,"batchingIdTexture",Y._indirectTexture,at),Kt.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Kt.setValue(H,"batchingColorTexture",Y._colorsTexture,at));const mn=re.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&We.update(Y,re,_n),(Zt||Je.receiveShadow!==Y.receiveShadow)&&(Je.receiveShadow=Y.receiveShadow,Kt.setValue(H,"receiveShadow",Y.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(yn.envMap.value=Be,yn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(yn.envMapIntensity.value=X.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=WE()),Zt&&(Kt.setValue(H,"toneMappingExposure",L.toneMappingExposure),Je.needsLights&&Wc(yn,Bi),Ae&&ne.fog===!0&&qe.refreshFogUniforms(yn,Ae),qe.refreshMaterialUniforms(yn,ne,_e,ve,N.state.transmissionRenderTarget[R.id]),Cc.upload(H,Ii(Je),yn,at)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Cc.upload(H,Ii(Je),yn,at),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Kt.setValue(H,"center",Y.center),Kt.setValue(H,"modelViewMatrix",Y.modelViewMatrix),Kt.setValue(H,"normalMatrix",Y.normalMatrix),Kt.setValue(H,"modelMatrix",Y.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const bn=ne.uniformsGroups;for(let En=0,Ri=bn.length;En<Ri;En++){const Fi=bn[En];De.update(Fi,_n),De.bind(Fi,_n)}}return _n}function Wc(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function jo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,X,re){const ne=Ye.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),Ye.get(R.texture).__webglTexture=X,Ye.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:re,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const re=Ye.get(R);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0};const Ja=H.createFramebuffer();this.setRenderTarget=function(R,X=0,re=0){C=R,W=X,D=re;let ne=!0,Y=null,Ae=!1,Ne=!1;if(R){const Be=Ye.get(R);if(Be.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(H.FRAMEBUFFER,null),ne=!1;else if(Be.__webglFramebuffer===void 0)at.setupRenderTarget(R);else if(Be.__hasExternalTextures)at.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ze=R.depthTexture;if(Be.__boundDepthTexture!==Ze){if(Ze!==null&&Ye.has(Ze)&&(R.width!==Ze.image.width||R.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ne=!0);const tt=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?Y=tt[X][re]:Y=tt[X],Ae=!0):R.samples>0&&at.useMultisampledRTT(R)===!1?Y=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?Y=tt[re]:Y=tt,ce.copy(R.viewport),xe.copy(R.scissor),de=R.scissorTest}else ce.copy(Se).multiplyScalar(_e).floor(),xe.copy(Te).multiplyScalar(_e).floor(),de=ze;if(re!==0&&(Y=Ja),Ge.bindFramebuffer(H.FRAMEBUFFER,Y)&&ne&&Ge.drawBuffers(R,Y),Ge.viewport(ce),Ge.scissor(xe),Ge.setScissorTest(de),Ae){const Be=Ye.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,re)}else if(Ne){const Be=X;for(let $e=0;$e<R.textures.length;$e++){const tt=Ye.get(R.textures[$e]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$e,tt.__webglTexture,re,Be)}}else if(R!==null&&re!==0){const Be=Ye.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Be.__webglTexture,re)}j=-1},this.readRenderTargetPixels=function(R,X,re,ne,Y,Ae,Ne,Pe=0){if(!(R&&R.isWebGLRenderTarget)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){Ge.bindFramebuffer(H.FRAMEBUFFER,Be);try{const $e=R.textures[Pe],tt=$e.format,Ze=$e.type;if(!Pt.textureFormatReadable(tt)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Ze)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ne&&re>=0&&re<=R.height-Y&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pe),H.readPixels(X,re,ne,Y,nt.convert(tt),nt.convert(Ze),Ae))}finally{const $e=C!==null?Ye.get(C).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,X,re,ne,Y,Ae,Ne,Pe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be)if(X>=0&&X<=R.width-ne&&re>=0&&re<=R.height-Y){Ge.bindFramebuffer(H.FRAMEBUFFER,Be);const $e=R.textures[Pe],tt=$e.format,Ze=$e.type;if(!Pt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ct),H.bufferData(H.PIXEL_PACK_BUFFER,Ae.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pe),H.readPixels(X,re,ne,Y,nt.convert(tt),nt.convert(Ze),0);const Rt=C!==null?Ye.get(C).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,Rt);const Dt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await AS(H,Dt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ct),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ae),H.deleteBuffer(ct),H.deleteSync(Dt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,re=0){const ne=Math.pow(2,-re),Y=Math.floor(R.image.width*ne),Ae=Math.floor(R.image.height*ne),Ne=X!==null?X.x:0,Pe=X!==null?X.y:0;at.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,Ne,Pe,Y,Ae),Ge.unbindTexture()};const zs=H.createFramebuffer(),xa=H.createFramebuffer();this.copyTextureToTexture=function(R,X,re=null,ne=null,Y=0,Ae=null){Ae===null&&(Y!==0?(Fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Y,Y=0):Ae=0);let Ne,Pe,Be,$e,tt,Ze,ct,Rt,Dt;const St=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(re!==null)Ne=re.max.x-re.min.x,Pe=re.max.y-re.min.y,Be=re.isBox3?re.max.z-re.min.z:1,$e=re.min.x,tt=re.min.y,Ze=re.isBox3?re.min.z:0;else{const mn=Math.pow(2,-Y);Ne=Math.floor(St.width*mn),Pe=Math.floor(St.height*mn),R.isDataArrayTexture?Be=St.depth:R.isData3DTexture?Be=Math.floor(St.depth*mn):Be=1,$e=0,tt=0,Ze=0}ne!==null?(ct=ne.x,Rt=ne.y,Dt=ne.z):(ct=0,Rt=0,Dt=0);const zt=nt.convert(X.format),Je=nt.convert(X.type);let Wt;X.isData3DTexture?(at.setTexture3D(X,0),Wt=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(at.setTexture2DArray(X,0),Wt=H.TEXTURE_2D_ARRAY):(at.setTexture2D(X,0),Wt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const Mt=H.getParameter(H.UNPACK_ROW_LENGTH),_n=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ga=H.getParameter(H.UNPACK_SKIP_PIXELS),Zt=H.getParameter(H.UNPACK_SKIP_ROWS),Bi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,St.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,St.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$e),H.pixelStorei(H.UNPACK_SKIP_ROWS,tt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ze);const Kt=R.isDataArrayTexture||R.isData3DTexture,yn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const mn=Ye.get(R),bn=Ye.get(X),En=Ye.get(mn.__renderTarget),Ri=Ye.get(bn.__renderTarget);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,En.__webglFramebuffer),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Fi=0;Fi<Be;Fi++)Kt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(R).__webglTexture,Y,Ze+Fi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(X).__webglTexture,Ae,Dt+Fi)),H.blitFramebuffer($e,tt,Ne,Pe,ct,Rt,Ne,Pe,H.DEPTH_BUFFER_BIT,H.NEAREST);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||Ye.has(R)){const mn=Ye.get(R),bn=Ye.get(X);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,zs),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,xa);for(let En=0;En<Be;En++)Kt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mn.__webglTexture,Y,Ze+En):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mn.__webglTexture,Y),yn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bn.__webglTexture,Ae,Dt+En):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bn.__webglTexture,Ae),Y!==0?H.blitFramebuffer($e,tt,Ne,Pe,ct,Rt,Ne,Pe,H.COLOR_BUFFER_BIT,H.NEAREST):yn?H.copyTexSubImage3D(Wt,Ae,ct,Rt,Dt+En,$e,tt,Ne,Pe):H.copyTexSubImage2D(Wt,Ae,ct,Rt,$e,tt,Ne,Pe);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else yn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Wt,Ae,ct,Rt,Dt,Ne,Pe,Be,zt,Je,St.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Wt,Ae,ct,Rt,Dt,Ne,Pe,Be,zt,St.data):H.texSubImage3D(Wt,Ae,ct,Rt,Dt,Ne,Pe,Be,zt,Je,St):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ae,ct,Rt,Ne,Pe,zt,Je,St.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ae,ct,Rt,St.width,St.height,zt,St.data):H.texSubImage2D(H.TEXTURE_2D,Ae,ct,Rt,Ne,Pe,zt,Je,St);H.pixelStorei(H.UNPACK_ROW_LENGTH,Mt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_n),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ga),H.pixelStorei(H.UNPACK_SKIP_ROWS,Zt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Bi),Ae===0&&X.generateMipmaps&&H.generateMipmap(Wt),Ge.unbindTexture()},this.initRenderTarget=function(R){Ye.get(R).__webglFramebuffer===void 0&&at.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?at.setTextureCube(R,0):R.isData3DTexture?at.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?at.setTexture2DArray(R,0):at.setTexture2D(R,0),Ge.unbindTexture()},this.resetState=function(){W=0,D=0,C=null,Ge.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Lt._getUnpackColorSpace()}}const YE=({experience:o,index:t,isVisible:i})=>w.jsx("div",{className:`relative transition-all duration-1000 transform ${i?"opacity-100 translate-x-0":t%2===0?"opacity-0 -translate-x-20":"opacity-0 translate-x-20"}`,style:{transitionDelay:`${t*200}ms`},children:w.jsxs("div",{className:`flex items-start gap-8 ${t%2===0?"flex-row":"flex-row-reverse"}`,children:[w.jsxs("div",{className:"relative flex-shrink-0",children:[w.jsx("div",{className:"w-4 h-4 bg-orange-500 rounded-full ring-8 ring-orange-500 ring-opacity-20"}),t<2&&w.jsx("div",{className:"absolute top-4 left-1/2 w-0.5 h-32 bg-gradient-to-b from-orange-500 to-transparent -translate-x-1/2"})]}),w.jsxs("div",{className:"flex-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-orange-500 border-opacity-20 hover:border-opacity-50 transition-all hover:shadow-2xl hover:shadow-orange-500/20 group",children:[w.jsxs("div",{className:"flex items-start justify-between mb-4",children:[w.jsxs("div",{children:[w.jsx("h3",{className:"text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition",children:o.title}),w.jsxs("div",{className:"flex items-center gap-2 text-orange-400 mb-2",children:[w.jsx(Px,{className:"w-4 h-4"}),w.jsx("span",{className:"font-medium",children:o.company})]})]}),w.jsx("div",{className:"bg-orange-500 bg-opacity-20 p-3 rounded-lg",children:w.jsx(Px,{className:"w-6 h-6 text-orange-400"})})]}),w.jsxs("div",{className:"flex flex-wrap gap-4 mb-4 text-sm text-gray-400",children:[w.jsxs("div",{className:"flex items-center gap-1",children:[w.jsx(qy,{className:"w-4 h-4"}),w.jsx("span",{children:o.duration})]}),w.jsxs("div",{className:"flex items-center gap-1",children:[w.jsx(Gg,{className:"w-4 h-4"}),w.jsx("span",{children:o.location})]})]}),w.jsx("ul",{className:"space-y-3",children:o.achievements.map((r,l)=>w.jsxs("li",{className:"flex items-start gap-3 text-gray-300",children:[w.jsx(kg,{className:"w-4 h-4 text-orange-400 flex-shrink-0 mt-1"}),w.jsx("span",{className:"text-sm leading-relaxed",children:r})]},l))}),o.stats&&w.jsx("div",{className:"grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-700",children:o.stats.map((r,l)=>w.jsxs("div",{className:"text-center",children:[w.jsx("div",{className:"text-2xl font-bold text-orange-400",children:r.value}),w.jsx("div",{className:"text-xs text-gray-400",children:r.label})]},l))})]})]})}),ZE=()=>{const o=yt.useRef(null),t=yt.useRef(null),[i,r]=yt.useState([]),l=[{title:"Developer-2 Full Stack",company:"Cloud Analogy",location:"Gurugram, Haryana",duration:"01/2023 - Present",achievements:["Developed end-to-end construction of resilient applications using MERN stack architecture, accelerating system performance by 30% and boosting user engagement metrics","Completed 8+ projects across diverse industries, including betting, financial services, hiring, travel, and tourism, achieving a 95% client satisfaction rate","Pinpointed and rectified critical software defects, slashing bug resolution time by 40% and boosting user satisfaction ratings by 15%","Guided the full spectrum of development cycles with Agile methodology and DevOps principles with CI/CD pipelines"],stats:[{value:"8+",label:"Projects"},{value:"30%",label:"Performance Boost"},{value:"95%",label:"Client Satisfaction"}]},{title:"Full Stack Developer",company:"ForceBolt",location:"Mohali, Punjab",duration:"02/2022 - 01/2023",achievements:["Overhauled front-end architecture, leading to a 40% increase in website speed and a 20% improvement in Core Web Vitals score","Achieved a 98% rating on Google PageSpeed Insights","Developed fast and scalable web systems using RESTful APIs, minimizing manual effort by 80% and streamlining workflows"],stats:[{value:"40%",label:"Speed Increase"},{value:"98%",label:"PageSpeed Score"},{value:"80%",label:"Effort Reduced"}]},{title:"Business Automation & Web Developer",company:"DigiGrowHub",location:"Pune, Maharashtra",duration:"07/2021 - 12/2021",achievements:["Automated lead qualification processes leveraging Google Apps Script, leading to a 25% reduction in processing time","Created a Google Sheets automation system for accurate and efficient processing, cutting down 80% of manual effort","Improved lead management efficiency by 10%"],stats:[{value:"25%",label:"Time Saved"},{value:"80%",label:"Manual Work Cut"},{value:"10%",label:"Efficiency Gain"}]}];return yt.useEffect(()=>{if(!o.current)return;const c=new Ic;t.current=c;const d=new Ln(75,window.innerWidth/window.innerHeight,.1,1e3),h=new Xc({canvas:o.current,alpha:!0,antialias:!0});h.setSize(window.innerWidth,window.innerHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.position.z=5;const m=new Wn,p=50,x=new Float32Array(p*3);for(let L=0;L<p*3;L++)x[L]=(Math.random()-.5)*10;m.setAttribute("position",new Bn(x,3));const g=new Bc({size:.05,color:16739125,transparent:!0,opacity:.6,blending:Oo}),y=new Gh(m,g);c.add(y);const S=[];[new jh(.2,.1,12,80),new kh(.2),new Vh(.2)].forEach((L,I)=>{const W=new pv({color:16739125,wireframe:!0,transparent:!0,opacity:.3}),D=new Pi(L,W);D.position.set((Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*2),S.push(D),c.add(D)});const A=new Vc(16777215,.5);c.add(A);const b=new Gc(16739125,1);b.position.set(2,3,4),c.add(b);let _=0;const U=()=>{requestAnimationFrame(U),y.rotation.y+=.001,y.rotation.x=_*1e-4,S.forEach((L,I)=>{L.rotation.x+=.01,L.rotation.y+=.01,L.position.y=Math.sin(Date.now()*.001+I)*.5}),d.position.y=-_*.001,h.render(c,d)};U();const N=()=>{_=window.scrollY};window.addEventListener("scroll",N);const z=()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",z);const G=new IntersectionObserver(L=>{L.forEach(I=>{if(I.isIntersecting){const W=parseInt(I.target.dataset.index);r(D=>[...new Set([...D,W])])}})},{threshold:.2});return document.querySelectorAll(".experience-card").forEach(L=>{G.observe(L)}),()=>{window.removeEventListener("scroll",N),window.removeEventListener("resize",z),G.disconnect(),h.dispose()}},[]),w.jsxs("section",{id:"experience",className:"relative min-h-screen bg-gradient-to-b from-gray-900  to-gray-900 overflow-hidden",children:[w.jsx("canvas",{ref:o,className:"fixed top-0 left-0 w-full h-full pointer-events-none",style:{zIndex:0}}),w.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto px-6 py-20",children:[w.jsxs("div",{className:"text-center mb-20",children:[w.jsxs("h2",{className:"text-5xl font-bold text-white mb-4",children:["Work ",w.jsx("span",{className:"text-orange-500",children:"Experience"})]}),w.jsx("p",{className:"text-gray-400 text-lg max-w-2xl mx-auto",children:"A journey through innovation, problem-solving, and delivering exceptional results across diverse industries"})]}),w.jsx("div",{className:"space-y-16",children:l.map((c,d)=>w.jsx("div",{className:"experience-card","data-index":d,children:w.jsx(YE,{experience:c,index:d,isVisible:i.includes(d)})},d))}),w.jsx("div",{className:"mt-20 grid grid-cols-2 md:grid-cols-4 gap-6",children:[{value:"5",label:"Years Experience"},{value:"15+",label:"Projects Completed"},{value:"6+",label:"Industries Served"},{value:"95%",label:"Client Satisfaction"}].map((c,d)=>w.jsxs("div",{className:"bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-6 text-center border border-orange-500 border-opacity-20 hover:border-opacity-50 transition",children:[w.jsx("div",{className:"text-4xl font-bold text-orange-400 mb-2",children:c.value}),w.jsx("div",{className:"text-gray-400 text-sm",children:c.label})]},d))})]})]})},KE=({skill:o,index:t,isCenter:i,position:r})=>{const[l,c]=yt.useState(!1),d=()=>i?"translateX(0%) scale(1.1) rotateY(0deg)":r==="left"?"translateX(-120%) scale(0.85) rotateY(25deg)":r==="right"?"translateX(120%) scale(0.85) rotateY(-25deg)":r==="far-left"?"translateX(-240%) scale(0.7) rotateY(35deg)":r==="far-right"?"translateX(240%) scale(0.7) rotateY(-35deg)":"translateX(0) scale(0.5)",h=()=>i?1:r==="left"||r==="right"?.7:.4;return w.jsx("div",{className:"absolute transition-all duration-700 ease-out cursor-pointer",style:{transform:d(),opacity:h(),zIndex:i?50:r==="left"||r==="right"?30:10},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:w.jsxs("div",{className:`relative w-72 h-96 ${i?"pointer-events-auto":"pointer-events-none"}`,children:[w.jsx("div",{className:`absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl blur-2xl transition-opacity duration-500 ${l&&i?"opacity-60":"opacity-20"}`}),w.jsxs("div",{className:`relative h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl border-2 transition-all duration-500 overflow-hidden ${i?"border-orange-500":"border-gray-700"}`,children:[w.jsx("div",{className:`absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 transition-opacity duration-500 ${l&&i?"opacity-100":"opacity-0"}`}),w.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",backgroundSize:"20px 20px"}}),w.jsx("div",{className:`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-all duration-1000 ${l&&i?"opacity-20 translate-x-full":"-translate-x-full"}`}),w.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-8 z-10",children:[w.jsx("div",{className:`mb-6 transition-transform duration-500 ${l&&i?"scale-110 rotate-12":"scale-100"}`,children:w.jsxs("div",{className:"relative",children:[w.jsx("div",{className:`absolute inset-0 bg-orange-500 rounded-2xl blur-xl transition-opacity ${l&&i?"opacity-50":"opacity-0"}`}),w.jsx("div",{className:"relative bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl",children:w.jsx(Ch,{className:"w-12 h-12 text-white"})})]})}),w.jsx("h3",{className:`text-3xl font-bold text-center mb-4 transition-all duration-500 ${i?"text-white":"text-gray-500"}`,children:o}),w.jsxs("div",{className:"flex gap-2 mb-6",children:[w.jsx("div",{className:`h-1 rounded-full transition-all duration-500 ${i?"w-12 bg-orange-500":"w-8 bg-gray-600"}`}),w.jsx("div",{className:`h-1 rounded-full transition-all duration-500 ${i?"w-8 bg-red-500":"w-6 bg-gray-600"}`}),w.jsx("div",{className:`h-1 rounded-full transition-all duration-500 ${i?"w-4 bg-pink-500":"w-4 bg-gray-600"}`})]}),i&&w.jsxs("div",{className:"w-full",children:[w.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[w.jsx("span",{children:"Proficiency"}),w.jsx("span",{children:"Expert"})]}),w.jsx("div",{className:"w-full h-2 bg-gray-700 rounded-full overflow-hidden",children:w.jsx("div",{className:"h-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full animate-pulse",style:{width:"85%"}})})]}),i&&l&&w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"absolute top-10 left-10 w-2 h-2 bg-orange-500 rounded-full animate-ping"}),w.jsx("div",{className:"absolute top-20 right-10 w-2 h-2 bg-red-500 rounded-full animate-ping",style:{animationDelay:"0.2s"}}),w.jsx("div",{className:"absolute bottom-20 left-20 w-2 h-2 bg-pink-500 rounded-full animate-ping",style:{animationDelay:"0.4s"}})]})]}),i&&w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-orange-500 rounded-tl-3xl"}),w.jsx("div",{className:"absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-orange-500 rounded-br-3xl"})]})]})]})})},QE=({title:o,skills:t,icon:i,color:r})=>{const[l,c]=yt.useState(0),[d,h]=yt.useState(!1),[m,p]=yt.useState(!0),x=yt.useRef(null);yt.useEffect(()=>{const A=new IntersectionObserver(b=>{b[0].isIntersecting&&h(!0)},{threshold:.3});return x.current&&A.observe(x.current),()=>A.disconnect()},[]),yt.useEffect(()=>{if(!m||!d)return;const A=setInterval(()=>{c(b=>(b+1)%t.length)},3500);return()=>clearInterval(A)},[t.length,m,d]);const g=()=>{p(!1),c(A=>(A+1)%t.length)},y=()=>{p(!1),c(A=>(A-1+t.length)%t.length)},S=A=>{const b=A-l;return b===0?"center":b===1||b===-(t.length-1)?"right":b===-1||b===t.length-1?"left":b===2||b===-(t.length-2)?"far-right":b===-2||b===t.length-2?"far-left":"hidden"},E=()=>{const A={blue:"from-blue-500 to-cyan-500",green:"from-green-500 to-emerald-500",purple:"from-purple-500 to-pink-500",orange:"from-orange-500 to-red-500",yellow:"from-yellow-500 to-orange-500",indigo:"from-indigo-500 to-purple-500",pink:"from-pink-500 to-rose-500",gray:"from-gray-500 to-slate-500"};return A[r]||A.blue};return w.jsxs("div",{ref:x,className:`relative transition-all duration-1000 ${d?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:[w.jsxs("div",{className:"flex items-center justify-between mb-12",children:[w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsxs("div",{className:`relative p-5 bg-gradient-to-r ${E()} rounded-2xl shadow-2xl`,children:[w.jsx(i,{className:"w-10 h-10 text-white"}),w.jsx("div",{className:`absolute inset-0 bg-gradient-to-r ${E()} rounded-2xl blur-xl opacity-50`})]}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-4xl font-bold text-white mb-1",children:o}),w.jsxs("p",{className:"text-gray-400",children:[t.length," Technologies"]})]})]}),w.jsxs("div",{className:"flex gap-3",children:[w.jsx("button",{onClick:y,className:"group p-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-orange-500 hover:to-red-500 rounded-xl transition-all hover:shadow-2xl hover:shadow-orange-500/50 border border-gray-700 hover:border-orange-500",children:w.jsx(Yy,{className:"w-6 h-6 text-gray-400 group-hover:text-white transition-colors"})}),w.jsx("button",{onClick:g,className:"group p-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-orange-500 hover:to-red-500 rounded-xl transition-all hover:shadow-2xl hover:shadow-orange-500/50 border border-gray-700 hover:border-orange-500",children:w.jsx(Ky,{className:"w-6 h-6 text-gray-400 group-hover:text-white transition-colors"})})]})]}),w.jsx("div",{className:"relative h-[500px] mb-12",style:{perspective:"1500px"},children:w.jsx("div",{className:"relative w-full h-full flex items-center justify-center",children:t.map((A,b)=>{const _=S(b);return _==="hidden"?null:w.jsx(KE,{skill:A,index:b,isCenter:_==="center",position:_},b)})})}),w.jsx("div",{className:"flex justify-center gap-2",children:t.map((A,b)=>w.jsx("button",{onClick:()=>{p(!1),c(b)},className:`transition-all rounded-full ${b===l?"w-12 h-3 bg-gradient-to-r from-orange-500 to-red-500":"w-3 h-3 bg-gray-600 hover:bg-gray-500"}`},b))})]})},JE=()=>{const o=yt.useRef(null),t=[{title:"Frontend Development",icon:Oc,color:"blue",skills:["React.js","Next.js","TypeScript","Redux","TailwindCSS","HTML5","CSS3","JavaScript"]},{title:"Backend Development",icon:Tb,color:"green",skills:["Node.js","Express.js","RESTful APIs","GraphQL","Web Services"]},{title:"Database Management",icon:wh,color:"purple",skills:["MongoDB","PostgreSQL","MySQL","Sequelize","SQL Server"]},{title:"DevOps & Cloud",icon:Fg,color:"orange",skills:["Docker","AWS","Azure","CI/CD","GitHub Actions"]}];return yt.useEffect(()=>{if(!o.current)return;const i=new Ic,r=new Ln(75,window.innerWidth/window.innerHeight,.1,1e3),l=new Xc({canvas:o.current,alpha:!0,antialias:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.position.z=5;const c=new Wn,d=50,h=new Float32Array(d*3),m=new Float32Array(d*3);for(let b=0;b<d;b++){const _=b*3,U=Math.random()*15,N=Math.random()*Math.PI*2,z=Math.random()*Math.PI;h[_]=U*Math.sin(z)*Math.cos(N),h[_+1]=U*Math.sin(z)*Math.sin(N),h[_+2]=U*Math.cos(z);const G=new bt;G.setHSL(.05+Math.random()*.1,1,.5),m[_]=G.r,m[_+1]=G.g,m[_+2]=G.b}c.setAttribute("position",new Bn(h,3)),c.setAttribute("color",new Bn(m,3));const p=new Bc({size:.08,vertexColors:!0,transparent:!0,opacity:.8,blending:Oo}),x=new Gh(c,p);i.add(x);const g=new Vc(16777215,.5);i.add(g);const y=new Gc(16739125,2);y.position.set(5,5,5),i.add(y);let S=0;const E=()=>{requestAnimationFrame(E),S+=.005,x.rotation.y=S*.3,x.rotation.x=Math.sin(S)*.2,l.render(i,r)};E();const A=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A),l.dispose()}},[]),w.jsxs("section",{id:"skills",className:"relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden py-20",children:[w.jsx("canvas",{ref:o,className:"fixed top-0 left-0 w-full h-full pointer-events-none",style:{zIndex:0}}),w.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6",children:[w.jsxs("div",{className:"text-center mb-20",children:[w.jsx("div",{className:"inline-block mb-6",children:w.jsx("span",{className:"px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold shadow-lg shadow-orange-500/50",children:"TECH STACK"})}),w.jsxs("h2",{className:"text-7xl font-bold mb-6",children:[w.jsx("span",{className:"text-white",children:"Technical "}),w.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500",children:"Arsenal"})]}),w.jsx("p",{className:"text-gray-400 text-xl max-w-3xl mx-auto",children:"Cutting-edge technologies powering exceptional digital experiences"})]}),w.jsx("div",{className:"space-y-32",children:t.map((i,r)=>w.jsx(QE,{...i},r))})]})]})},$E=({project:o,index:t,isVisible:i})=>{const[r,l]=yt.useState(!1),[c,d]=yt.useState("overview"),m=(p=>({SaaS:Fg,IVR:wh,Betting:Lb})[p]||Oc)(o.type);return w.jsxs("div",{className:`relative transition-all duration-1000 transform ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,style:{transitionDelay:`${t*200}ms`},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[w.jsx("div",{className:`absolute -inset-1 bg-gradient-to-r ${o.gradient} rounded-3xl blur-2xl transition-opacity duration-500 ${r?"opacity-60":"opacity-20"}`}),w.jsxs("div",{className:"relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden border-2 border-gray-700 hover:border-orange-500 transition-all",children:[w.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",backgroundSize:"50px 50px",animation:r?"grid-move 20s linear infinite":"none"}}),w.jsx("style",{children:`
          @keyframes grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 50px 50px; }
          }
        `}),w.jsxs("div",{className:"relative p-8 pb-6",children:[w.jsxs("div",{className:"flex items-start justify-between mb-6",children:[w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsxs("div",{className:`relative p-4 bg-gradient-to-r ${o.gradient} rounded-2xl shadow-2xl transform transition-transform ${r?"scale-110 rotate-6":"scale-100"}`,children:[w.jsx(m,{className:"w-8 h-8 text-white"}),w.jsx("div",{className:`absolute inset-0 bg-gradient-to-r ${o.gradient} rounded-2xl blur-xl opacity-50`})]}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-3xl font-bold text-white mb-2",children:o.title}),w.jsxs("p",{className:"text-gray-400",children:[o.type," Platform"]})]})]}),w.jsxs("div",{className:"flex gap-2",children:[w.jsx("button",{className:"p-3 bg-gray-800 hover:bg-orange-500 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/50 group",children:w.jsx(Dc,{className:"w-5 h-5 text-gray-400 group-hover:text-white"})}),w.jsx("button",{className:"p-3 bg-gray-800 hover:bg-orange-500 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/50 group",children:w.jsx(Hg,{className:"w-5 h-5 text-gray-400 group-hover:text-white"})})]})]}),w.jsx("p",{className:"text-gray-300 text-lg leading-relaxed mb-6",children:o.description}),w.jsx("div",{className:"flex gap-2 mb-6 border-b border-gray-700",children:["overview","tech","impact"].map(p=>w.jsxs("button",{onClick:()=>d(p),className:`px-4 py-2 font-medium transition-all relative ${c===p?"text-orange-400":"text-gray-400 hover:text-gray-300"}`,children:[p.charAt(0).toUpperCase()+p.slice(1),c===p&&w.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"})]},p))}),w.jsxs("div",{className:"min-h-[200px]",children:[c==="overview"&&w.jsx("div",{className:"space-y-3",children:o.highlights.map((p,x)=>w.jsxs("div",{className:"flex items-start gap-3 group",children:[w.jsx(Ch,{className:"w-5 h-5 text-orange-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"}),w.jsx("p",{className:"text-gray-300",children:p})]},x))}),c==="tech"&&w.jsx("div",{className:"space-y-4",children:w.jsx("div",{className:"flex flex-wrap gap-2",children:o.technologies.map((p,x)=>w.jsx("span",{className:`px-4 py-2 bg-gradient-to-r ${o.gradient} bg-opacity-10 border border-orange-500 border-opacity-30 rounded-lg text-sm font-medium text-orange-400 hover:bg-opacity-20 hover:border-opacity-50 transition-all hover:scale-105 cursor-default`,children:p},x))})}),c==="impact"&&w.jsx("div",{className:"grid grid-cols-3 gap-4",children:o.metrics.map((p,x)=>w.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 text-center border border-gray-700 hover:border-orange-500 transition-all group",children:[w.jsx("div",{className:`text-3xl font-bold bg-gradient-to-r ${o.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`,children:p.value}),w.jsx("div",{className:"text-gray-400 text-xs",children:p.label})]},x))})]})]}),w.jsx("div",{className:`relative p-6 bg-gradient-to-r ${o.gradient} bg-opacity-5 border-t border-gray-700`,children:w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-400",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx(kg,{className:"w-4 h-4"}),w.jsx("span",{children:o.status})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx(Nb,{className:"w-4 h-4"}),w.jsx("span",{children:o.team})]})]}),w.jsxs("button",{className:`px-6 py-3 bg-gradient-to-r ${o.gradient} rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 flex items-center gap-2`,children:["View Details",w.jsx(Dc,{className:"w-4 h-4"})]})]})})]})]})},eT=()=>{const o=yt.useRef(null),[t,i]=yt.useState([]),r=[{title:"RESELLER OS",type:"SaaS",gradient:"from-blue-500 to-cyan-500",description:"Full-stack B2B SaaS platform automating quotes, deal registration, and order lifecycle management with integrated AI capabilities.",highlights:["Built comprehensive B2B SaaS platform with Next.js App Router and TypeScript","Integrated Salesforce workflows for partner onboarding and deal tracking","Utilized Azure AI model for automated data extraction from quote files","Developed Electron.js app with LLM for vendor form automation"],technologies:["Next.js","TypeScript","Redux","Express.js","PostgreSQL","Azure","Electron.js","LangChain"],metrics:[{value:"35%",label:"Time Saved"},{value:"40%",label:"Efficiency Gain"},{value:"99.9%",label:"Uptime"}],status:"Production",team:"Lead Developer"},{title:"CX POINT",type:"IVR",gradient:"from-purple-500 to-pink-500",description:"Enterprise communication platform with interactive IVR flow diagrams, bulk file processing, and Genesys AppFoundry integration.",highlights:["Developed bulk file upload functionality across all modules","Created interactive IVR flow diagrams with React Flow and D3.js","Standardized state management using React Context API","Integrated Genesys AppFoundry for seamless communication"],technologies:["Next.js","TypeScript","TailwindCSS","Context API","D3.js","React Flow","Microfrontend"],metrics:[{value:"15%",label:"Call Time Reduced"},{value:"20%",label:"Reusability Boost"},{value:"20%",label:"Response Time"}],status:"Production",team:"Full Stack Dev"},{title:"FANTASY7",type:"Betting",gradient:"from-orange-500 to-red-500",description:"Real-time sports betting interface with sub-millisecond latency, handling thousands of dynamic bets with Betfair API integration.",highlights:["Orchestrated real-time sports betting interface with Next.js and TypeScript","Achieved sub-0.05s latency for bet updates with optimized architecture","Centralized state management with Zustand and React Query","Peak performance of 1200 data synchronizations per second"],technologies:["Next.js","TypeScript","Ant Design","Zustand","React Query","Betfair API"],metrics:[{value:"<0.05s",label:"Latency"},{value:"1200/s",label:"Sync Rate"},{value:"20%",label:"Reliability"}],status:"Production",team:"Frontend Lead"}];return yt.useEffect(()=>{if(!o.current)return;const l=new Ic,c=new Ln(75,window.innerWidth/window.innerHeight,.1,1e3),d=new Xc({canvas:o.current,alpha:!0,antialias:!0});d.setSize(window.innerWidth,window.innerHeight),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.position.z=5;const h=[];for(let E=0;E<20;E++){const A=new Cs(.3,.3,.3),b=new pv({color:new bt().setHSL(.05+Math.random()*.1,1,.5),transparent:!0,opacity:.6}),_=new Pi(A,b);_.position.set((Math.random()-.5)*15,(Math.random()-.5)*15,(Math.random()-.5)*10),_.userData={rotationSpeed:{x:(Math.random()-.5)*.02,y:(Math.random()-.5)*.02},floatSpeed:Math.random()*.5+.5},h.push(_),l.add(_)}const m=new Vc(16777215,.5);l.add(m);const p=new Gc(16739125,2);p.position.set(5,5,5),l.add(p);let x=0;const g=()=>{requestAnimationFrame(g),x+=.01,h.forEach((E,A)=>{E.rotation.x+=E.userData.rotationSpeed.x,E.rotation.y+=E.userData.rotationSpeed.y,E.position.y+=Math.sin(x+A)*.005}),d.render(l,c)};g();const y=()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",y);const S=new IntersectionObserver(E=>{E.forEach(A=>{if(A.isIntersecting){const b=parseInt(A.target.dataset.index);i(_=>[...new Set([..._,b])])}})},{threshold:.2});return setTimeout(()=>{document.querySelectorAll(".project-card").forEach(E=>{S.observe(E)})},100),()=>{window.removeEventListener("resize",y),S.disconnect(),d.dispose()}},[]),w.jsxs("section",{id:"projects",className:"relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden py-20",children:[w.jsx("canvas",{ref:o,className:"fixed top-0 left-0 w-full h-full pointer-events-none",style:{zIndex:0}}),w.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6",children:[w.jsxs("div",{className:"text-center mb-20",children:[w.jsx("div",{className:"inline-block mb-6",children:w.jsx("span",{className:"px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold shadow-lg shadow-orange-500/50",children:"PORTFOLIO"})}),w.jsxs("h2",{className:"text-7xl font-bold mb-6",children:[w.jsx("span",{className:"text-white",children:"Featured "}),w.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500",children:"Projects"})]}),w.jsx("p",{className:"text-gray-400 text-xl max-w-3xl mx-auto",children:"Transforming ideas into scalable, high-performance applications that drive real business impact"})]}),w.jsx("div",{className:"space-y-12",children:r.map((l,c)=>w.jsx("div",{className:"project-card","data-index":c,children:w.jsx($E,{project:l,index:c,isVisible:t.includes(c)})},c))}),w.jsx("div",{className:"mt-20 text-center",children:w.jsxs("div",{className:"inline-block bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border border-orange-500 border-opacity-30",children:[w.jsx("h3",{className:"text-3xl font-bold text-white mb-4",children:"Interested in working together?"}),w.jsx("p",{className:"text-gray-400 mb-8 max-w-2xl",children:"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}),w.jsxs("a",{href:"#contact",className:"px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 flex items-center gap-3 mx-auto",children:["Let's Talk",w.jsx(Dc,{className:"w-5 h-5"})]})]})})]})]})},tT=()=>{const[o,t]=yt.useState({name:"",email:"",subject:"",message:""}),[i,r]=yt.useState({}),[l,c]=yt.useState(!1),[d,h]=yt.useState(null),m=x=>{t({...o,[x.target.name]:x.target.value})},p=x=>{x.preventDefault(),c(!0),setTimeout(()=>{c(!1),h("success"),t({name:"",email:"",subject:"",message:""}),setTimeout(()=>h(null),5e3)},2e3)};return w.jsxs("div",{className:"space-y-6",children:[w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[w.jsxs("div",{className:"relative",children:[w.jsx("input",{type:"text",name:"name",value:o.name,onChange:m,onFocus:()=>r({...i,name:!0}),onBlur:()=>r({...i,name:!1}),className:"w-full px-6 py-4 bg-gray-800 bg-opacity-50 backdrop-blur-md border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all",placeholder:"Your Name"}),i.name&&w.jsx("div",{className:"absolute inset-0 bg-orange-500 opacity-10 rounded-xl pointer-events-none"})]}),w.jsxs("div",{className:"relative",children:[w.jsx("input",{type:"email",name:"email",value:o.email,onChange:m,onFocus:()=>r({...i,email:!0}),onBlur:()=>r({...i,email:!1}),className:"w-full px-6 py-4 bg-gray-800 bg-opacity-50 backdrop-blur-md border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all",placeholder:"Your Email"}),i.email&&w.jsx("div",{className:"absolute inset-0 bg-orange-500 opacity-10 rounded-xl pointer-events-none"})]})]}),w.jsxs("div",{className:"relative",children:[w.jsx("input",{type:"text",name:"subject",value:o.subject,onChange:m,onFocus:()=>r({...i,subject:!0}),onBlur:()=>r({...i,subject:!1}),className:"w-full px-6 py-4 bg-gray-800 bg-opacity-50 backdrop-blur-md border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all",placeholder:"Subject"}),i.subject&&w.jsx("div",{className:"absolute inset-0 bg-orange-500 opacity-10 rounded-xl pointer-events-none"})]}),w.jsxs("div",{className:"relative",children:[w.jsx("textarea",{name:"message",value:o.message,onChange:m,onFocus:()=>r({...i,message:!0}),onBlur:()=>r({...i,message:!1}),rows:"6",className:"w-full px-6 py-4 bg-gray-800 bg-opacity-50 backdrop-blur-md border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all resize-none",placeholder:"Your Message"}),i.message&&w.jsx("div",{className:"absolute inset-0 bg-orange-500 opacity-10 rounded-xl pointer-events-none"})]}),w.jsx("button",{onClick:p,disabled:l,className:`w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 flex items-center justify-center gap-3 ${l?"opacity-50 cursor-not-allowed":""}`,children:l?w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Sending..."]}):w.jsxs(w.Fragment,{children:["Send Message",w.jsx(Vg,{className:"w-5 h-5"})]})}),d==="success"&&w.jsxs("div",{className:"p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-xl text-green-400 flex items-center gap-3",children:[w.jsx(Ch,{className:"w-5 h-5"}),w.jsx("span",{children:"Message sent successfully! I'll get back to you soon."})]})]})},nT=()=>{const o=[{icon:mb,label:"Email",value:"abhi967792@gmail.com",link:"mailto:abhi967792@gmail.com",gradient:"from-blue-500 to-cyan-500"},{icon:Sb,label:"Phone",value:"+91 7266022294",link:"tel:+917266022294",gradient:"from-green-500 to-emerald-500"},{icon:Gg,label:"Location",value:"Gurugram, Haryana, India",link:"https://maps.google.com/?q=Gurugram,Haryana",gradient:"from-purple-500 to-pink-500"}];return w.jsx("div",{className:"space-y-6",children:o.map((t,i)=>w.jsx("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"group block",children:w.jsx("div",{className:"relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border-2 border-gray-700 hover:border-orange-500 transition-all hover:shadow-2xl hover:shadow-orange-500/20",children:w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsxs("div",{className:`relative p-4 bg-gradient-to-r ${t.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform`,children:[w.jsx(t.icon,{className:"w-6 h-6 text-white"}),w.jsx("div",{className:`absolute inset-0 bg-gradient-to-r ${t.gradient} rounded-xl blur-lg opacity-50`})]}),w.jsxs("div",{className:"flex-1",children:[w.jsx("p",{className:"text-gray-400 text-sm mb-1",children:t.label}),w.jsx("p",{className:"text-white font-semibold text-lg group-hover:text-orange-400 transition-colors",children:t.value})]}),w.jsx(Dc,{className:"w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors"})]})})},i))})},iT=()=>{const o=[{icon:hb,label:"LinkedIn",link:"https://linkedin.com/in/abkumar9677",color:"hover:bg-blue-600"},{icon:Hg,label:"GitHub",link:"https://github.com/abkumar9677",color:"hover:bg-gray-700"},{icon:Cb,label:"Twitter",link:"https://twitter.com",color:"hover:bg-sky-500"},{icon:fb,label:"Instagram",link:"https://instagram.com",color:"hover:bg-pink-600"}];return w.jsx("div",{className:"flex justify-center gap-4",children:o.map((t,i)=>w.jsxs("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:`group relative p-4 bg-gray-800 rounded-xl transition-all hover:scale-110 ${t.color}`,"aria-label":t.label,children:[w.jsx(t.icon,{className:"w-6 h-6 text-gray-400 group-hover:text-white transition-colors"}),w.jsx("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 rounded-lg text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",children:t.label})]},i))})},aT=()=>{const[o,t]=yt.useState(!1);yt.useEffect(()=>{const r=()=>{t(window.scrollY>500)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return w.jsx("button",{onClick:i,className:`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-2xl shadow-orange-500/50 hover:scale-110 transition-all z-50 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10 pointer-events-none"}`,"aria-label":"Scroll to top",children:w.jsx(ky,{className:"w-6 h-6 text-white"})})},rT=()=>{const o=yt.useRef(null),t=[{label:"About",href:"#home"},{label:"Experience",href:"#experience"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"}],i=[{label:"Home",href:"#home"},{label:"Experience",href:"#experience"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"},{label:"Contact",href:"#contact"}];return yt.useEffect(()=>{if(!o.current)return;const r=new Ic,l=new Ln(75,window.innerWidth/window.innerHeight,.1,1e3),c=new Xc({canvas:o.current,alpha:!0,antialias:!0});c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.position.z=5;const d=new Wn,h=50,m=new Float32Array(h*3),p=new Float32Array(h*3);for(let _=0;_<h;_++){const U=_*3;m[U]=(Math.random()-.5)*20,m[U+1]=(Math.random()-.5)*20,m[U+2]=(Math.random()-.5)*10;const N=new bt;N.setHSL(.05+Math.random()*.1,1,.5),p[U]=N.r,p[U+1]=N.g,p[U+2]=N.b}d.setAttribute("position",new Bn(m,3)),d.setAttribute("color",new Bn(p,3));const x=new Bc({size:.08,vertexColors:!0,transparent:!0,opacity:.8,blending:Oo}),g=new Gh(d,x);r.add(g);const y=new Vc(16777215,.5);r.add(y);const S=new Gc(16739125,2);S.position.set(5,5,5),r.add(S);let E=0;const A=()=>{requestAnimationFrame(A),E+=.005,g.rotation.y=E*.2,g.rotation.x=Math.sin(E)*.1,c.render(r,l)};A();const b=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b),c.dispose()}},[]),w.jsxs("section",{id:"contact",className:"relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden",children:[w.jsx("canvas",{ref:o,className:"fixed top-0 left-0 w-full h-full pointer-events-none",style:{zIndex:0}}),w.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 py-20",children:[w.jsxs("div",{className:"text-center mb-16",children:[w.jsx("div",{className:"inline-block mb-6",children:w.jsx("span",{className:"px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold shadow-lg shadow-orange-500/50",children:"GET IN TOUCH"})}),w.jsxs("h2",{className:"text-7xl font-bold mb-6",children:[w.jsx("span",{className:"text-white",children:"Let's Work "}),w.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500",children:"Together"})]}),w.jsx("p",{className:"text-gray-400 text-xl max-w-3xl mx-auto",children:"Have a project in mind? Let's discuss how we can bring your ideas to life"})]}),w.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20",children:[w.jsxs("div",{className:"relative",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-3xl opacity-20"}),w.jsxs("div",{className:"relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 border-2 border-gray-700",children:[w.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[w.jsx(vb,{className:"w-8 h-8 text-orange-400"}),w.jsx("h3",{className:"text-2xl font-bold text-white",children:"Send a Message"})]}),w.jsx(tT,{})]})]}),w.jsxs("div",{children:[w.jsxs("div",{className:"mb-8",children:[w.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Contact Information"}),w.jsx(nT,{})]}),w.jsxs("div",{className:"bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-6 border-2 border-gray-700",children:[w.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Quick Links"}),w.jsx("div",{className:"grid grid-cols-2 gap-3",children:t.map((r,l)=>w.jsx("a",{href:r.href,className:"px-4 py-3 bg-gray-800 rounded-xl text-gray-300 hover:text-orange-400 hover:bg-gray-700 transition-all text-center",children:r.label},l))})]})]})]})]}),w.jsx("footer",{className:"relative z-10 border-t border-gray-800",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-12",children:[w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:[w.jsxs("div",{children:[w.jsxs("h3",{className:"text-3xl font-bold text-white mb-4",children:["Abhishek",w.jsx("span",{className:"text-orange-500",children:"."})]}),w.jsx("p",{className:"text-gray-400 mb-4",children:"Full-stack developer crafting exceptional digital experiences with modern technologies."}),w.jsx(iT,{})]}),w.jsxs("div",{children:[w.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Navigation"}),w.jsx("ul",{className:"space-y-2",children:i.map((r,l)=>w.jsx("li",{children:w.jsx("a",{href:r.href,className:"text-gray-400 hover:text-orange-400 transition-colors",children:r.label})},l))})]}),w.jsxs("div",{children:[w.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Stay Updated"}),w.jsx("p",{className:"text-gray-400 mb-4 text-sm",children:"Subscribe to get notified about my latest projects and articles."}),w.jsxs("div",{className:"flex gap-2",children:[w.jsx("input",{type:"email",placeholder:"Your email",className:"flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"}),w.jsx("button",{className:"px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all",children:w.jsx(Vg,{className:"w-5 h-5"})})]})]})]}),w.jsx("div",{className:"pt-8 border-t border-gray-800",children:w.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4",children:[w.jsxs("p",{className:"text-gray-400 text-sm flex items-center gap-2",children:["Made with ",w.jsx(cb,{className:"w-4 h-4 text-red-500 fill-red-500"})," and ",w.jsx(eb,{className:"w-4 h-4 text-orange-400"})," using ",w.jsx(Oc,{className:"w-4 h-4 text-blue-400"})," React & Three.js"]}),w.jsxs("p",{className:"text-gray-400 text-sm",children:["© ",new Date().getFullYear()," Abhishek Kumar. All rights reserved."]})]})})]})}),w.jsx(aT,{})]})};function sT(){return w.jsxs("div",{className:"App",children:[w.jsx(Ib,{}),w.jsx(ZE,{}),w.jsx(JE,{}),w.jsx(eT,{}),w.jsx(rT,{})]})}Py.createRoot(document.getElementById("root")).render(w.jsx(wy.StrictMode,{children:w.jsx(sT,{})}));
