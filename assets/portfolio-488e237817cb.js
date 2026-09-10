var Zb=Object.create;var _d=Object.defineProperty;var Kb=Object.getOwnPropertyDescriptor;var Jb=Object.getOwnPropertyNames;var jb=Object.getPrototypeOf,Qb=Object.prototype.hasOwnProperty;var Rc=(e,t)=>()=>(e&&(t=e(e=0)),t);var Ii=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),$b=(e,t)=>{for(var n in t)_d(e,n,{get:t[n],enumerable:!0})},t1=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Jb(t))!Qb.call(e,s)&&s!==n&&_d(e,s,{get:()=>t[s],enumerable:!(i=Kb(t,s))||i.enumerable});return e};var Ds=(e,t,n)=>(n=e!=null?Zb(jb(e)):{},t1(t||!e||!e.__esModule?_d(n,"default",{value:e,enumerable:!0}):n,e));var s_=Ii(Pt=>{"use strict";var xd=Symbol.for("react.transitional.element"),e1=Symbol.for("react.portal"),n1=Symbol.for("react.fragment"),i1=Symbol.for("react.strict_mode"),s1=Symbol.for("react.profiler"),a1=Symbol.for("react.consumer"),r1=Symbol.for("react.context"),o1=Symbol.for("react.forward_ref"),l1=Symbol.for("react.suspense"),c1=Symbol.for("react.memo"),Q0=Symbol.for("react.lazy"),u1=Symbol.for("react.activity"),Z0=Symbol.iterator;function h1(e){return e===null||typeof e!="object"?null:(e=Z0&&e[Z0]||e["@@iterator"],typeof e=="function"?e:null)}var $0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t_=Object.assign,e_={};function ar(e,t,n){this.props=e,this.context=t,this.refs=e_,this.updater=n||$0}ar.prototype.isReactComponent={};ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function n_(){}n_.prototype=ar.prototype;function Sd(e,t,n){this.props=e,this.context=t,this.refs=e_,this.updater=n||$0}var Md=Sd.prototype=new n_;Md.constructor=Sd;t_(Md,ar.prototype);Md.isPureReactComponent=!0;var K0=Array.isArray;function vd(){}var be={H:null,A:null,T:null,S:null},i_=Object.prototype.hasOwnProperty;function bd(e,t,n){var i=n.ref;return{$$typeof:xd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function f1(e,t){return bd(e.type,t,e.props)}function Ed(e){return typeof e=="object"&&e!==null&&e.$$typeof===xd}function d1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var J0=/\/+/g;function yd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?d1(""+e.key):t.toString(36)}function p1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(vd,vd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function sr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case xd:case e1:r=!0;break;case Q0:return r=e._init,sr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+yd(e,0):i,K0(s)?(n="",r!=null&&(n=r.replace(J0,"$&/")+"/"),sr(s,t,n,"",function(c){return c})):s!=null&&(Ed(s)&&(s=f1(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(J0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(K0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+yd(i,l),r+=sr(i,t,n,a,s);else if(l=h1(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+yd(i,l++),r+=sr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return sr(p1(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Dc(e,t,n){if(e==null)return e;var i=[],s=0;return sr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function m1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var j0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},g1={map:Dc,forEach:function(e,t,n){Dc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Dc(e,function(){t++}),t},toArray:function(e){return Dc(e,function(t){return t})||[]},only:function(e){if(!Ed(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pt.Activity=u1;Pt.Children=g1;Pt.Component=ar;Pt.Fragment=n1;Pt.Profiler=s1;Pt.PureComponent=Sd;Pt.StrictMode=i1;Pt.Suspense=l1;Pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=be;Pt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return be.H.useMemoCache(e)}};Pt.cache=function(e){return function(){return e.apply(null,arguments)}};Pt.cacheSignal=function(){return null};Pt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=t_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!i_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return bd(e.type,s,i)};Pt.createContext=function(e){return e={$$typeof:r1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:a1,_context:e},e};Pt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)i_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return bd(e,a,s)};Pt.createRef=function(){return{current:null}};Pt.forwardRef=function(e){return{$$typeof:o1,render:e}};Pt.isValidElement=Ed;Pt.lazy=function(e){return{$$typeof:Q0,_payload:{_status:-1,_result:e},_init:m1}};Pt.memo=function(e,t){return{$$typeof:c1,type:e,compare:t===void 0?null:t}};Pt.startTransition=function(e){var t=be.T,n={};be.T=n;try{var i=e(),s=be.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(vd,j0)}catch(a){j0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),be.T=t}};Pt.unstable_useCacheRefresh=function(){return be.H.useCacheRefresh()};Pt.use=function(e){return be.H.use(e)};Pt.useActionState=function(e,t,n){return be.H.useActionState(e,t,n)};Pt.useCallback=function(e,t){return be.H.useCallback(e,t)};Pt.useContext=function(e){return be.H.useContext(e)};Pt.useDebugValue=function(){};Pt.useDeferredValue=function(e,t){return be.H.useDeferredValue(e,t)};Pt.useEffect=function(e,t){return be.H.useEffect(e,t)};Pt.useEffectEvent=function(e){return be.H.useEffectEvent(e)};Pt.useId=function(){return be.H.useId()};Pt.useImperativeHandle=function(e,t,n){return be.H.useImperativeHandle(e,t,n)};Pt.useInsertionEffect=function(e,t){return be.H.useInsertionEffect(e,t)};Pt.useLayoutEffect=function(e,t){return be.H.useLayoutEffect(e,t)};Pt.useMemo=function(e,t){return be.H.useMemo(e,t)};Pt.useOptimistic=function(e,t){return be.H.useOptimistic(e,t)};Pt.useReducer=function(e,t,n){return be.H.useReducer(e,t,n)};Pt.useRef=function(e){return be.H.useRef(e)};Pt.useState=function(e){return be.H.useState(e)};Pt.useSyncExternalStore=function(e,t,n){return be.H.useSyncExternalStore(e,t,n)};Pt.useTransition=function(){return be.H.useTransition()};Pt.version="19.2.6"});var rr=Ii((tD,a_)=>{"use strict";a_.exports=s_()});var m_=Ii(Re=>{"use strict";function Cd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Nc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Oi(e){return e.length===0?null:e[0]}function Uc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Nc(o,n))l<s&&0>Nc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Nc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Nc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Re.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(r_=performance,Re.unstable_now=function(){return r_.now()}):(Td=Date,o_=Td.now(),Re.unstable_now=function(){return Td.now()-o_});var r_,Td,o_,ji=[],Ns=[],_1=1,ai=null,gn=3,Rd=!1,Fo=!1,Ho=!1,Dd=!1,u_=typeof setTimeout=="function"?setTimeout:null,h_=typeof clearTimeout=="function"?clearTimeout:null,l_=typeof setImmediate<"u"?setImmediate:null;function Lc(e){for(var t=Oi(Ns);t!==null;){if(t.callback===null)Uc(Ns);else if(t.startTime<=e)Uc(Ns),t.sortIndex=t.expirationTime,Cd(ji,t);else break;t=Oi(Ns)}}function Nd(e){if(Ho=!1,Lc(e),!Fo)if(Oi(ji)!==null)Fo=!0,lr||(lr=!0,or());else{var t=Oi(Ns);t!==null&&Ld(Nd,t.startTime-e)}}var lr=!1,Vo=-1,f_=5,d_=-1;function p_(){return Dd?!0:!(Re.unstable_now()-d_<f_)}function Ad(){if(Dd=!1,lr){var e=Re.unstable_now();d_=e;var t=!0;try{t:{Fo=!1,Ho&&(Ho=!1,h_(Vo),Vo=-1),Rd=!0;var n=gn;try{e:{for(Lc(e),ai=Oi(ji);ai!==null&&!(ai.expirationTime>e&&p_());){var i=ai.callback;if(typeof i=="function"){ai.callback=null,gn=ai.priorityLevel;var s=i(ai.expirationTime<=e);if(e=Re.unstable_now(),typeof s=="function"){ai.callback=s,Lc(e),t=!0;break e}ai===Oi(ji)&&Uc(ji),Lc(e)}else Uc(ji);ai=Oi(ji)}if(ai!==null)t=!0;else{var a=Oi(Ns);a!==null&&Ld(Nd,a.startTime-e),t=!1}}break t}finally{ai=null,gn=n,Rd=!1}t=void 0}}finally{t?or():lr=!1}}}var or;typeof l_=="function"?or=function(){l_(Ad)}:typeof MessageChannel<"u"?(wd=new MessageChannel,c_=wd.port2,wd.port1.onmessage=Ad,or=function(){c_.postMessage(null)}):or=function(){u_(Ad,0)};var wd,c_;function Ld(e,t){Vo=u_(function(){e(Re.unstable_now())},t)}Re.unstable_IdlePriority=5;Re.unstable_ImmediatePriority=1;Re.unstable_LowPriority=4;Re.unstable_NormalPriority=3;Re.unstable_Profiling=null;Re.unstable_UserBlockingPriority=2;Re.unstable_cancelCallback=function(e){e.callback=null};Re.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f_=0<e?Math.floor(1e3/e):5};Re.unstable_getCurrentPriorityLevel=function(){return gn};Re.unstable_next=function(e){switch(gn){case 1:case 2:case 3:var t=3;break;default:t=gn}var n=gn;gn=t;try{return e()}finally{gn=n}};Re.unstable_requestPaint=function(){Dd=!0};Re.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=gn;gn=e;try{return t()}finally{gn=n}};Re.unstable_scheduleCallback=function(e,t,n){var i=Re.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:_1++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Cd(Ns,e),Oi(ji)===null&&e===Oi(Ns)&&(Ho?(h_(Vo),Vo=-1):Ho=!0,Ld(Nd,n-i))):(e.sortIndex=s,Cd(ji,e),Fo||Rd||(Fo=!0,lr||(lr=!0,or()))),e};Re.unstable_shouldYield=p_;Re.unstable_wrapCallback=function(e){var t=gn;return function(){var n=gn;gn=t;try{return e.apply(this,arguments)}finally{gn=n}}}});var __=Ii((nD,g_)=>{"use strict";g_.exports=m_()});var v_=Ii(En=>{"use strict";var y1=rr();function y_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ls(){}var bn={d:{f:Ls,r:function(){throw Error(y_(522))},D:Ls,C:Ls,L:Ls,m:Ls,X:Ls,S:Ls,M:Ls},p:0,findDOMNode:null},v1=Symbol.for("react.portal");function x1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v1,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Go=y1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ic(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bn;En.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(y_(299));return x1(e,t,null,n)};En.flushSync=function(e){var t=Go.T,n=bn.p;try{if(Go.T=null,bn.p=2,e)return e()}finally{Go.T=t,bn.p=n,bn.d.f()}};En.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,bn.d.C(e,t))};En.prefetchDNS=function(e){typeof e=="string"&&bn.d.D(e)};En.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Ic(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?bn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&bn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};En.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Ic(t.as,t.crossOrigin);bn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&bn.d.M(e)};En.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Ic(n,t.crossOrigin);bn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};En.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Ic(t.as,t.crossOrigin);bn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else bn.d.m(e)};En.requestFormReset=function(e){bn.d.r(e)};En.unstable_batchedUpdates=function(e,t){return e(t)};En.useFormState=function(e,t,n){return Go.H.useFormState(e,t,n)};En.useFormStatus=function(){return Go.H.useHostTransitionStatus()};En.version="19.2.6"});var M_=Ii((sD,S_)=>{"use strict";function x_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x_)}catch(e){console.error(e)}}x_(),S_.exports=v_()});var IS=Ii(ah=>{"use strict";var Ke=__(),Zy=rr(),S1=M_();function et(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ky(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b_(e){if(Cl(e)!==e)throw Error(et(188))}function M1(e){var t=e.alternate;if(!t){if(t=Cl(e),t===null)throw Error(et(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return b_(s),e;if(a===i)return b_(s),t;a=a.sibling}throw Error(et(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(et(189))}}if(n.alternate!==i)throw Error(et(190))}if(n.tag!==3)throw Error(et(188));return n.stateNode.current===n?e:t}function Qy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Qy(e),t!==null)return t;e=e.sibling}return null}var Ae=Object.assign,b1=Symbol.for("react.element"),Oc=Symbol.for("react.transitional.element"),Jo=Symbol.for("react.portal"),pr=Symbol.for("react.fragment"),$y=Symbol.for("react.strict_mode"),fp=Symbol.for("react.profiler"),tv=Symbol.for("react.consumer"),as=Symbol.for("react.context"),om=Symbol.for("react.forward_ref"),dp=Symbol.for("react.suspense"),pp=Symbol.for("react.suspense_list"),lm=Symbol.for("react.memo"),Us=Symbol.for("react.lazy"),mp=Symbol.for("react.activity"),E1=Symbol.for("react.memo_cache_sentinel"),E_=Symbol.iterator;function ko(e){return e===null||typeof e!="object"?null:(e=E_&&e[E_]||e["@@iterator"],typeof e=="function"?e:null)}var T1=Symbol.for("react.client.reference");function gp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===T1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pr:return"Fragment";case fp:return"Profiler";case $y:return"StrictMode";case dp:return"Suspense";case pp:return"SuspenseList";case mp:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Jo:return"Portal";case as:return e.displayName||"Context";case tv:return(e._context.displayName||"Context")+".Consumer";case om:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lm:return t=e.displayName||null,t!==null?t:gp(e.type)||"Memo";case Us:t=e._payload,e=e._init;try{return gp(e(t))}catch{}}return null}var jo=Array.isArray,Ut=Zy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=S1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Da={pending:!1,data:null,method:null,action:null},_p=[],mr=-1;function Hi(e){return{current:e}}function nn(e){0>mr||(e.current=_p[mr],_p[mr]=null,mr--)}function xe(e,t){mr++,_p[mr]=e.current,e.current=t}var Fi=Hi(null),pl=Hi(null),Xs=Hi(null),pu=Hi(null);function mu(e,t){switch(xe(Xs,t),xe(pl,e),xe(Fi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ny(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ny(t),e=xS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nn(Fi),xe(Fi,e)}function Ur(){nn(Fi),nn(pl),nn(Xs)}function yp(e){e.memoizedState!==null&&xe(pu,e);var t=Fi.current,n=xS(t,e.type);t!==n&&(xe(pl,e),xe(Fi,n))}function gu(e){pl.current===e&&(nn(Fi),nn(pl)),pu.current===e&&(nn(pu),Tl._currentValue=Da)}var Ud,T_;function Aa(e){if(Ud===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ud=t&&t[1]||"",T_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ud+e+T_}var Id=!1;function Od(e,t){if(!e||Id)return"";Id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var u=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){u=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){u=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{Id=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Aa(n):""}function A1(e,t){switch(e.tag){case 26:case 27:case 5:return Aa(e.type);case 16:return Aa("Lazy");case 13:return e.child!==t&&t!==null?Aa("Suspense Fallback"):Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 15:return Od(e.type,!1);case 11:return Od(e.type.render,!1);case 1:return Od(e.type,!0);case 31:return Aa("Activity");default:return""}}function A_(e){try{var t="",n=null;do t+=A1(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var vp=Object.prototype.hasOwnProperty,cm=Ke.unstable_scheduleCallback,Pd=Ke.unstable_cancelCallback,w1=Ke.unstable_shouldYield,C1=Ke.unstable_requestPaint,qn=Ke.unstable_now,R1=Ke.unstable_getCurrentPriorityLevel,ev=Ke.unstable_ImmediatePriority,nv=Ke.unstable_UserBlockingPriority,_u=Ke.unstable_NormalPriority,D1=Ke.unstable_LowPriority,iv=Ke.unstable_IdlePriority,N1=Ke.log,L1=Ke.unstable_setDisableYieldValue,Rl=null,Yn=null;function Fs(e){if(typeof N1=="function"&&L1(e),Yn&&typeof Yn.setStrictMode=="function")try{Yn.setStrictMode(Rl,e)}catch{}}var Zn=Math.clz32?Math.clz32:O1,U1=Math.log,I1=Math.LN2;function O1(e){return e>>>=0,e===0?32:31-(U1(e)/I1|0)|0}var Pc=256,Bc=262144,zc=4194304;function wa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ku(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=wa(i):(r&=o,r!==0?s=wa(r):n||(n=o&~e,n!==0&&(s=wa(n))))):(o=i&~a,o!==0?s=wa(o):r!==0?s=wa(r):n||(n=i&~e,n!==0&&(s=wa(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Dl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function P1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sv(){var e=zc;return zc<<=1,(zc&62914560)===0&&(zc=4194304),e}function Bd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function B1(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Zn(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&av(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function av(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Zn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function rv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Zn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function ov(e,t){var n=t&-t;return n=(n&42)!==0?1:um(n),(n&(e.suspendedLanes|t))!==0?0:n}function um(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function lv(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:NS(e.type))}function w_(e,t){var n=ie.p;try{return ie.p=e,t()}finally{ie.p=n}}var ia=Math.random().toString(36).slice(2),ln="__reactFiber$"+ia,On="__reactProps$"+ia,Xr="__reactContainer$"+ia,xp="__reactEvents$"+ia,z1="__reactListeners$"+ia,F1="__reactHandles$"+ia,C_="__reactResources$"+ia,Ll="__reactMarker$"+ia;function fm(e){delete e[ln],delete e[On],delete e[xp],delete e[z1],delete e[F1]}function gr(e){var t=e[ln];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xr]||n[ln]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Py(e);e!==null;){if(n=e[ln])return n;e=Py(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){if(e=e[ln]||e[Xr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Qo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(et(33))}function Ar(e){var t=e[C_];return t||(t=e[C_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function en(e){e[Ll]=!0}var cv=new Set,uv={};function Ha(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(uv[e]=t,e=0;e<t.length;e++)cv.add(t[e])}var H1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),R_={},D_={};function V1(e){return vp.call(D_,e)?!0:vp.call(R_,e)?!1:H1.test(e)?D_[e]=!0:(R_[e]=!0,!1)}function $c(e,t,n){if(V1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Fc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Qi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function oi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function G1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sp(e){if(!e._valueTracker){var t=hv(e)?"checked":"value";e._valueTracker=G1(e,t,""+e[t])}}function fv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=hv(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function yu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var k1=/[\n"\\]/g;function ui(e){return e.replace(k1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Mp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+oi(t)):e.value!==""+oi(t)&&(e.value=""+oi(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?bp(e,r,oi(t)):n!=null?bp(e,r,oi(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+oi(o):e.removeAttribute("name")}function dv(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Sp(e);return}n=n!=null?""+oi(n):"",t=t!=null?""+oi(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Sp(e)}function bp(e,t,n){t==="number"&&yu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function wr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+oi(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function pv(e,t,n){if(t!=null&&(t=""+oi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+oi(n):""}function mv(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(et(92));if(jo(i)){if(1<i.length)throw Error(et(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=oi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Sp(e)}function Or(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var X1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function N_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||X1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function gv(e,t,n){if(t!=null&&typeof t!="object")throw Error(et(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&N_(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&N_(e,a,t[a])}function dm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),q1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tu(e){return q1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function rs(){}var Ep=null;function pm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _r=null,Cr=null;function L_(e){var t=Wr(e);if(t&&(e=t.stateNode)){var n=e[On]||null;t:switch(e=t.stateNode,t.type){case"input":if(Mp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ui(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[On]||null;if(!s)throw Error(et(90));Mp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&fv(i)}break t;case"textarea":pv(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&wr(e,!!n.multiple,t,!1)}}}var zd=!1;function _v(e,t,n){if(zd)return e(t,n);zd=!0;try{var i=e(t);return i}finally{if(zd=!1,(_r!==null||Cr!==null)&&(eh(),_r&&(t=_r,e=Cr,Cr=_r=null,L_(t),e)))for(t=0;t<e.length;t++)L_(e[t])}}function ml(e,t){var n=e.stateNode;if(n===null)return null;var i=n[On]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(et(231,t,typeof n));return n}var hs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tp=!1;if(hs)try{cr={},Object.defineProperty(cr,"passive",{get:function(){Tp=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{Tp=!1}var cr,Hs=null,mm=null,eu=null;function yv(){if(eu)return eu;var e,t=mm,n=t.length,i,s="value"in Hs?Hs.value:Hs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return eu=s.slice(e,1<i?1-i:void 0)}function nu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hc(){return!0}function U_(){return!1}function Pn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Hc:U_,this.isPropagationStopped=U_,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hc)},persist:function(){},isPersistent:Hc}),t}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=Pn(Va),Ul=Ae({},Va,{view:0,detail:0}),Y1=Pn(Ul),Fd,Hd,Xo,Wu=Ae({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xo&&(Xo&&e.type==="mousemove"?(Fd=e.screenX-Xo.screenX,Hd=e.screenY-Xo.screenY):Hd=Fd=0,Xo=e),Fd)},movementY:function(e){return"movementY"in e?e.movementY:Hd}}),I_=Pn(Wu),Z1=Ae({},Wu,{dataTransfer:0}),K1=Pn(Z1),J1=Ae({},Ul,{relatedTarget:0}),Vd=Pn(J1),j1=Ae({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),Q1=Pn(j1),$1=Ae({},Va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tE=Pn($1),eE=Ae({},Va,{data:0}),O_=Pn(eE),nE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sE[e])?!!t[e]:!1}function gm(){return aE}var rE=Ae({},Ul,{key:function(e){if(e.key){var t=nE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=nu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gm,charCode:function(e){return e.type==="keypress"?nu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oE=Pn(rE),lE=Ae({},Wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),P_=Pn(lE),cE=Ae({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gm}),uE=Pn(cE),hE=Ae({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),fE=Pn(hE),dE=Ae({},Wu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pE=Pn(dE),mE=Ae({},Va,{newState:0,oldState:0}),gE=Pn(mE),_E=[9,13,27,32],_m=hs&&"CompositionEvent"in window,el=null;hs&&"documentMode"in document&&(el=document.documentMode);var yE=hs&&"TextEvent"in window&&!el,vv=hs&&(!_m||el&&8<el&&11>=el),B_=" ",z_=!1;function xv(e,t){switch(e){case"keyup":return _E.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function vE(e,t){switch(e){case"compositionend":return Sv(t);case"keypress":return t.which!==32?null:(z_=!0,B_);case"textInput":return e=t.data,e===B_&&z_?null:e;default:return null}}function xE(e,t){if(yr)return e==="compositionend"||!_m&&xv(e,t)?(e=yv(),eu=mm=Hs=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vv&&t.locale!=="ko"?null:t.data;default:return null}}var SE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function F_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!SE[e.type]:t==="textarea"}function Mv(e,t,n,i){_r?Cr?Cr.push(i):Cr=[i]:_r=i,t=Pu(t,"onChange"),0<t.length&&(n=new Xu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var nl=null,gl=null;function ME(e){_S(e,0)}function qu(e){var t=Qo(e);if(fv(t))return e}function H_(e,t){if(e==="change")return t}var bv=!1;hs&&(hs?(Gc="oninput"in document,Gc||(Gd=document.createElement("div"),Gd.setAttribute("oninput","return;"),Gc=typeof Gd.oninput=="function"),Vc=Gc):Vc=!1,bv=Vc&&(!document.documentMode||9<document.documentMode));var Vc,Gc,Gd;function V_(){nl&&(nl.detachEvent("onpropertychange",Ev),gl=nl=null)}function Ev(e){if(e.propertyName==="value"&&qu(gl)){var t=[];Mv(t,gl,e,pm(e)),_v(ME,t)}}function bE(e,t,n){e==="focusin"?(V_(),nl=t,gl=n,nl.attachEvent("onpropertychange",Ev)):e==="focusout"&&V_()}function EE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qu(gl)}function TE(e,t){if(e==="click")return qu(t)}function AE(e,t){if(e==="input"||e==="change")return qu(t)}function wE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jn=typeof Object.is=="function"?Object.is:wE;function _l(e,t){if(Jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!vp.call(t,s)||!Jn(e[s],t[s]))return!1}return!0}function G_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function k_(e,t){var n=G_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=G_(n)}}function Tv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Av(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=yu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yu(e.document)}return t}function ym(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var CE=hs&&"documentMode"in document&&11>=document.documentMode,vr=null,Ap=null,il=null,wp=!1;function X_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wp||vr==null||vr!==yu(i)||(i=vr,"selectionStart"in i&&ym(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),il&&_l(il,i)||(il=i,i=Pu(Ap,"onSelect"),0<i.length&&(t=new Xu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=vr)))}function Ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},kd={},wv={};hs&&(wv=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Ga(e){if(kd[e])return kd[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wv)return kd[e]=t[n];return e}var Cv=Ga("animationend"),Rv=Ga("animationiteration"),Dv=Ga("animationstart"),RE=Ga("transitionrun"),DE=Ga("transitionstart"),NE=Ga("transitioncancel"),Nv=Ga("transitionend"),Lv=new Map,Cp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cp.push("scrollEnd");function Si(e,t){Lv.set(e,t),Ha(t,[e])}var vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ri=[],Sr=0,vm=0;function Yu(){for(var e=Sr,t=vm=Sr=0;t<e;){var n=ri[t];ri[t++]=null;var i=ri[t];ri[t++]=null;var s=ri[t];ri[t++]=null;var a=ri[t];if(ri[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Uv(n,s,a)}}function Zu(e,t,n,i){ri[Sr++]=e,ri[Sr++]=t,ri[Sr++]=n,ri[Sr++]=i,vm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function xm(e,t,n,i){return Zu(e,t,n,i),xu(e)}function ka(e,t){return Zu(e,null,null,t),xu(e)}function Uv(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Zn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function xu(e){if(50<fl)throw fl=0,Kp=null,Error(et(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Mr={};function LE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,t,n,i){return new LE(e,t,n,i)}function Sm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ls(e,t){var n=e.alternate;return n===null?(n=Xn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Iv(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function iu(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Sm(e)&&(r=1);else if(typeof e=="string")r=OT(e,n,Fi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case mp:return e=Xn(31,n,t,s),e.elementType=mp,e.lanes=a,e;case pr:return Na(n.children,s,a,t);case $y:r=8,s|=24;break;case fp:return e=Xn(12,n,t,s|2),e.elementType=fp,e.lanes=a,e;case dp:return e=Xn(13,n,t,s),e.elementType=dp,e.lanes=a,e;case pp:return e=Xn(19,n,t,s),e.elementType=pp,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case as:r=10;break t;case tv:r=9;break t;case om:r=11;break t;case lm:r=14;break t;case Us:r=16,i=null;break t}r=29,n=Error(et(130,e===null?"null":typeof e,"")),i=null}return t=Xn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Na(e,t,n,i){return e=Xn(7,e,i,t),e.lanes=n,e}function Xd(e,t,n){return e=Xn(6,e,null,t),e.lanes=n,e}function Ov(e){var t=Xn(18,null,null,0);return t.stateNode=e,t}function Wd(e,t,n){return t=Xn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var W_=new WeakMap;function hi(e,t){if(typeof e=="object"&&e!==null){var n=W_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:A_(t)},W_.set(e,t),t)}return{value:e,source:t,stack:A_(t)}}var br=[],Er=0,Su=null,yl=0,li=[],ci=0,$s=null,Pi=1,Bi="";function is(e,t){br[Er++]=yl,br[Er++]=Su,Su=e,yl=t}function Pv(e,t,n){li[ci++]=Pi,li[ci++]=Bi,li[ci++]=$s,$s=e;var i=Pi;e=Bi;var s=32-Zn(i)-1;i&=~(1<<s),n+=1;var a=32-Zn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Pi=1<<32-Zn(t)+s|n<<s|i,Bi=a+e}else Pi=1<<a|n<<s|i,Bi=e}function Mm(e){e.return!==null&&(is(e,1),Pv(e,1,0))}function bm(e){for(;e===Su;)Su=br[--Er],br[Er]=null,yl=br[--Er],br[Er]=null;for(;e===$s;)$s=li[--ci],li[ci]=null,Bi=li[--ci],li[ci]=null,Pi=li[--ci],li[ci]=null}function Bv(e,t){li[ci++]=Pi,li[ci++]=Bi,li[ci++]=$s,Pi=t.id,Bi=t.overflow,$s=e}var cn=null,Te=null,jt=!1,Ws=null,fi=!1,Rp=Error(et(519));function ta(e){var t=Error(et(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vl(hi(t,e)),Rp}function q_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ln]=e,t[On]=i,n){case"dialog":qt("cancel",t),qt("close",t);break;case"iframe":case"object":case"embed":qt("load",t);break;case"video":case"audio":for(n=0;n<bl.length;n++)qt(bl[n],t);break;case"source":qt("error",t);break;case"img":case"image":case"link":qt("error",t),qt("load",t);break;case"details":qt("toggle",t);break;case"input":qt("invalid",t),dv(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":qt("invalid",t);break;case"textarea":qt("invalid",t),mv(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||vS(t.textContent,n)?(i.popover!=null&&(qt("beforetoggle",t),qt("toggle",t)),i.onScroll!=null&&qt("scroll",t),i.onScrollEnd!=null&&qt("scrollend",t),i.onClick!=null&&(t.onclick=rs),t=!0):t=!1,t||ta(e,!0)}function Y_(e){for(cn=e.return;cn;)switch(cn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:cn=cn.return}}function ur(e){if(e!==cn)return!1;if(!jt)return Y_(e),jt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||tm(e.type,e.memoizedProps)),n=!n),n&&Te&&ta(e),Y_(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));Te=Oy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));Te=Oy(e)}else t===27?(t=Te,sa(e.type)?(e=sm,sm=null,Te=e):Te=t):Te=cn?pi(e.stateNode.nextSibling):null;return!0}function Oa(){Te=cn=null,jt=!1}function qd(){var e=Ws;return e!==null&&(Un===null?Un=e:Un.push.apply(Un,e),Ws=null),e}function vl(e){Ws===null?Ws=[e]:Ws.push(e)}var Dp=Hi(null),Xa=null,os=null;function Os(e,t,n){xe(Dp,t._currentValue),t._currentValue=n}function cs(e){e._currentValue=Dp.current,nn(Dp)}function Np(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Lp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Np(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(et(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Np(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function qr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(et(387));if(r=r.memoizedProps,r!==null){var o=s.type;Jn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===pu.current){if(r=s.alternate,r===null)throw Error(et(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Tl):e=[Tl])}s=s.return}e!==null&&Lp(t,e,n,i),t.flags|=262144}function Mu(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){Xa=e,os=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function un(e){return zv(Xa,e)}function kc(e,t){return Xa===null&&Pa(e),zv(e,t)}function zv(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},os===null){if(e===null)throw Error(et(308));os=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else os=os.next=t;return n}var UE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},IE=Ke.unstable_scheduleCallback,OE=Ke.unstable_NormalPriority,Xe={$$typeof:as,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Em(){return{controller:new UE,data:new Map,refCount:0}}function Il(e){e.refCount--,e.refCount===0&&IE(OE,function(){e.controller.abort()})}var sl=null,Up=0,Pr=0,Rr=null;function PE(e,t){if(sl===null){var n=sl=[];Up=0,Pr=Km(),Rr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Up++,t.then(Z_,Z_),t}function Z_(){if(--Up===0&&sl!==null){Rr!==null&&(Rr.status="fulfilled");var e=sl;sl=null,Pr=0,Rr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function BE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var K_=Ut.S;Ut.S=function(e,t){Qx=qn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&PE(e,t),K_!==null&&K_(e,t)};var La=Hi(null);function Tm(){var e=La.current;return e!==null?e:me.pooledCache}function su(e,t){t===null?xe(La,La.current):xe(La,t.pool)}function Fv(){var e=Tm();return e===null?null:{parent:Xe._currentValue,pool:e}}var Yr=Error(et(460)),Am=Error(et(474)),Ku=Error(et(542)),bu={then:function(){}};function J_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hv(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(rs,rs),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Q_(e),e;default:if(typeof t.status=="string")t.then(rs,rs);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(et(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Q_(e),e}throw Ua=t,Yr}}function Ca(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ua=n,Yr):n}}var Ua=null;function j_(){if(Ua===null)throw Error(et(459));var e=Ua;return Ua=null,e}function Q_(e){if(e===Yr||e===Ku)throw Error(et(483))}var Dr=null,xl=0;function Xc(e){var t=xl;return xl+=1,Dr===null&&(Dr=[]),Hv(Dr,e,t)}function Wo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wc(e,t){throw t.$$typeof===b1?Error(et(525)):(e=Object.prototype.toString.call(t),Error(et(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vv(e){function t(h,m){if(e){var S=h.deletions;S===null?(h.deletions=[m],h.flags|=16):S.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function i(h){for(var m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function s(h,m){return h=ls(h,m),h.index=0,h.sibling=null,h}function a(h,m,S){return h.index=S,e?(S=h.alternate,S!==null?(S=S.index,S<m?(h.flags|=67108866,m):S):(h.flags|=67108866,m)):(h.flags|=1048576,m)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,m,S,y){return m===null||m.tag!==6?(m=Xd(S,h.mode,y),m.return=h,m):(m=s(m,S),m.return=h,m)}function l(h,m,S,y){var E=S.type;return E===pr?f(h,m,S.props.children,y,S.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Us&&Ca(E)===m.type)?(m=s(m,S.props),Wo(m,S),m.return=h,m):(m=iu(S.type,S.key,S.props,null,h.mode,y),Wo(m,S),m.return=h,m)}function c(h,m,S,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=Wd(S,h.mode,y),m.return=h,m):(m=s(m,S.children||[]),m.return=h,m)}function f(h,m,S,y,E){return m===null||m.tag!==7?(m=Na(S,h.mode,y,E),m.return=h,m):(m=s(m,S),m.return=h,m)}function p(h,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Xd(""+m,h.mode,S),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Oc:return S=iu(m.type,m.key,m.props,null,h.mode,S),Wo(S,m),S.return=h,S;case Jo:return m=Wd(m,h.mode,S),m.return=h,m;case Us:return m=Ca(m),p(h,m,S)}if(jo(m)||ko(m))return m=Na(m,h.mode,S,null),m.return=h,m;if(typeof m.then=="function")return p(h,Xc(m),S);if(m.$$typeof===as)return p(h,kc(h,m),S);Wc(h,m)}return null}function u(h,m,S,y){var E=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return E!==null?null:o(h,m,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Oc:return S.key===E?l(h,m,S,y):null;case Jo:return S.key===E?c(h,m,S,y):null;case Us:return S=Ca(S),u(h,m,S,y)}if(jo(S)||ko(S))return E!==null?null:f(h,m,S,y,null);if(typeof S.then=="function")return u(h,m,Xc(S),y);if(S.$$typeof===as)return u(h,m,kc(h,S),y);Wc(h,S)}return null}function d(h,m,S,y,E){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(S)||null,o(m,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Oc:return h=h.get(y.key===null?S:y.key)||null,l(m,h,y,E);case Jo:return h=h.get(y.key===null?S:y.key)||null,c(m,h,y,E);case Us:return y=Ca(y),d(h,m,S,y,E)}if(jo(y)||ko(y))return h=h.get(S)||null,f(m,h,y,E,null);if(typeof y.then=="function")return d(h,m,S,Xc(y),E);if(y.$$typeof===as)return d(h,m,S,kc(m,y),E);Wc(m,y)}return null}function _(h,m,S,y){for(var E=null,T=null,w=m,x=m=0,A=null;w!==null&&x<S.length;x++){w.index>x?(A=w,w=null):A=w.sibling;var R=u(h,w,S[x],y);if(R===null){w===null&&(w=A);break}e&&w&&R.alternate===null&&t(h,w),m=a(R,m,x),T===null?E=R:T.sibling=R,T=R,w=A}if(x===S.length)return n(h,w),jt&&is(h,x),E;if(w===null){for(;x<S.length;x++)w=p(h,S[x],y),w!==null&&(m=a(w,m,x),T===null?E=w:T.sibling=w,T=w);return jt&&is(h,x),E}for(w=i(w);x<S.length;x++)A=d(w,h,x,S[x],y),A!==null&&(e&&A.alternate!==null&&w.delete(A.key===null?x:A.key),m=a(A,m,x),T===null?E=A:T.sibling=A,T=A);return e&&w.forEach(function(U){return t(h,U)}),jt&&is(h,x),E}function M(h,m,S,y){if(S==null)throw Error(et(151));for(var E=null,T=null,w=m,x=m=0,A=null,R=S.next();w!==null&&!R.done;x++,R=S.next()){w.index>x?(A=w,w=null):A=w.sibling;var U=u(h,w,R.value,y);if(U===null){w===null&&(w=A);break}e&&w&&U.alternate===null&&t(h,w),m=a(U,m,x),T===null?E=U:T.sibling=U,T=U,w=A}if(R.done)return n(h,w),jt&&is(h,x),E;if(w===null){for(;!R.done;x++,R=S.next())R=p(h,R.value,y),R!==null&&(m=a(R,m,x),T===null?E=R:T.sibling=R,T=R);return jt&&is(h,x),E}for(w=i(w);!R.done;x++,R=S.next())R=d(w,h,x,R.value,y),R!==null&&(e&&R.alternate!==null&&w.delete(R.key===null?x:R.key),m=a(R,m,x),T===null?E=R:T.sibling=R,T=R);return e&&w.forEach(function(F){return t(h,F)}),jt&&is(h,x),E}function g(h,m,S,y){if(typeof S=="object"&&S!==null&&S.type===pr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Oc:t:{for(var E=S.key;m!==null;){if(m.key===E){if(E=S.type,E===pr){if(m.tag===7){n(h,m.sibling),y=s(m,S.props.children),y.return=h,h=y;break t}}else if(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Us&&Ca(E)===m.type){n(h,m.sibling),y=s(m,S.props),Wo(y,S),y.return=h,h=y;break t}n(h,m);break}else t(h,m);m=m.sibling}S.type===pr?(y=Na(S.props.children,h.mode,y,S.key),y.return=h,h=y):(y=iu(S.type,S.key,S.props,null,h.mode,y),Wo(y,S),y.return=h,h=y)}return r(h);case Jo:t:{for(E=S.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){n(h,m.sibling),y=s(m,S.children||[]),y.return=h,h=y;break t}else{n(h,m);break}else t(h,m);m=m.sibling}y=Wd(S,h.mode,y),y.return=h,h=y}return r(h);case Us:return S=Ca(S),g(h,m,S,y)}if(jo(S))return _(h,m,S,y);if(ko(S)){if(E=ko(S),typeof E!="function")throw Error(et(150));return S=E.call(S),M(h,m,S,y)}if(typeof S.then=="function")return g(h,m,Xc(S),y);if(S.$$typeof===as)return g(h,m,kc(h,S),y);Wc(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,m!==null&&m.tag===6?(n(h,m.sibling),y=s(m,S),y.return=h,h=y):(n(h,m),y=Xd(S,h.mode,y),y.return=h,h=y),r(h)):n(h,m)}return function(h,m,S,y){try{xl=0;var E=g(h,m,S,y);return Dr=null,E}catch(w){if(w===Yr||w===Ku)throw w;var T=Xn(29,w,null,h.mode);return T.lanes=y,T.return=h,T}}}var Ba=Vv(!0),Gv=Vv(!1),Is=!1;function wm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ip(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ys(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ne&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=xu(e),Uv(e,null,n),t}return Zu(e,i,t,n),xu(e)}function al(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,rv(e,n)}}function Yd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Op=!1;function rl(){if(Op){var e=Rr;if(e!==null)throw e}}function ol(e,t,n,i){Op=!1;var s=e.updateQueue;Is=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(Kt&u)===u:(i&u)===u){u!==0&&u===Pr&&(Op=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,M=o;u=t;var g=n;switch(M.tag){case 1:if(_=M.payload,typeof _=="function"){p=_.call(g,p,u);break t}p=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,u=typeof _=="function"?_.call(g,p,u):_,u==null)break t;p=Ae({},p,u);break t;case 2:Is=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),na|=r,e.lanes=r,e.memoizedState=p}}function kv(e,t){if(typeof e!="function")throw Error(et(191,e));e.call(t)}function Xv(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)kv(n[e],t)}var Br=Hi(null),Eu=Hi(0);function $_(e,t){e=ms,xe(Eu,e),xe(Br,t),ms=e|t.baseLanes}function Pp(){xe(Eu,ms),xe(Br,Br.current)}function Cm(){ms=Eu.current,nn(Br),nn(Eu)}var jn=Hi(null),di=null;function Ps(e){var t=e.alternate;xe(Be,Be.current&1),xe(jn,e),di===null&&(t===null||Br.current!==null||t.memoizedState!==null)&&(di=e)}function Bp(e){xe(Be,Be.current),xe(jn,e),di===null&&(di=e)}function Wv(e){e.tag===22?(xe(Be,Be.current),xe(jn,e),di===null&&(di=e)):Bs(e)}function Bs(){xe(Be,Be.current),xe(jn,jn.current)}function kn(e){nn(jn),di===e&&(di=null),nn(Be)}var Be=Hi(0);function Tu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||nm(n)||im(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fs=0,zt=null,de=null,Ge=null,Au=!1,Nr=!1,za=!1,wu=0,Sl=0,Lr=null,zE=0;function Ie(){throw Error(et(321))}function Rm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jn(e[n],t[n]))return!1;return!0}function Dm(e,t,n,i,s,a){return fs=a,zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ut.H=e===null||e.memoizedState===null?Mx:Vm,za=!1,a=n(i,s),za=!1,Nr&&(a=Yv(t,n,i,s)),qv(e),a}function qv(e){Ut.H=Ml;var t=de!==null&&de.next!==null;if(fs=0,Ge=de=zt=null,Au=!1,Sl=0,Lr=null,t)throw Error(et(300));e===null||We||(e=e.dependencies,e!==null&&Mu(e)&&(We=!0))}function Yv(e,t,n,i){zt=e;var s=0;do{if(Nr&&(Lr=null),Sl=0,Nr=!1,25<=s)throw Error(et(301));if(s+=1,Ge=de=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ut.H=bx,a=t(n,i)}while(Nr);return a}function FE(){var e=Ut.H,t=e.useState()[0];return t=typeof t.then=="function"?Ol(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(zt.flags|=1024),t}function Nm(){var e=wu!==0;return wu=0,e}function Lm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Um(e){if(Au){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Au=!1}fs=0,Ge=de=zt=null,Nr=!1,Sl=wu=0,Lr=null}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?zt.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function ze(){if(de===null){var e=zt.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Ge===null?zt.memoizedState:Ge.next;if(t!==null)Ge=t,de=e;else{if(e===null)throw zt.alternate===null?Error(et(467)):Error(et(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Ge===null?zt.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(e){var t=Sl;return Sl+=1,Lr===null&&(Lr=[]),e=Hv(Lr,e,t),t=zt,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,Ut.H=t===null||t.memoizedState===null?Mx:Vm),e}function ju(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ol(e);if(e.$$typeof===as)return un(e)}throw Error(et(438,String(e)))}function Im(e){var t=null,n=zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ju(),zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=E1;return t.index++,n}function ds(e,t){return typeof t=="function"?t(e):t}function au(e){var t=ze();return Om(t,de,e)}function Om(e,t,n){var i=e.queue;if(i===null)throw Error(et(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Kt&p)===p:(fs&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Pr&&(f=!0);else if((fs&u)===u){c=c.next,u===Pr&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,zt.lanes|=u,na|=u;p=c.action,za&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,zt.lanes|=p,na|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Jn(a,e.memoizedState)&&(We=!0,f&&(n=Rr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Zd(e){var t=ze(),n=t.queue;if(n===null)throw Error(et(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Jn(a,t.memoizedState)||(We=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Zv(e,t,n){var i=zt,s=ze(),a=jt;if(a){if(n===void 0)throw Error(et(407));n=n()}else n=t();var r=!Jn((de||s).memoizedState,n);if(r&&(s.memoizedState=n,We=!0),s=s.queue,Pm(jv.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||Ge!==null&&Ge.memoizedState.tag&1){if(i.flags|=2048,zr(9,{destroy:void 0},Jv.bind(null,i,s,n,t),null),me===null)throw Error(et(349));a||(fs&127)!==0||Kv(i,t,n)}return n}function Kv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=zt.updateQueue,t===null?(t=Ju(),zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jv(e,t,n,i){t.value=n,t.getSnapshot=i,Qv(t)&&$v(e)}function jv(e,t,n){return n(function(){Qv(t)&&$v(e)})}function Qv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jn(e,n)}catch{return!0}}function $v(e){var t=ka(e,2);t!==null&&In(t,e,2)}function zp(e){var t=Tn();if(typeof e=="function"){var n=e;if(e=n(),za){Fs(!0);try{n()}finally{Fs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:e},t}function tx(e,t,n,i){return e.baseState=n,Om(e,de,typeof i=="function"?i:ds)}function HE(e,t,n,i,s){if($u(e))throw Error(et(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ut.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,ex(t,a)):(a.next=n.next,t.pending=n.next=a)}}function ex(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ut.T,r={};Ut.T=r;try{var o=n(s,i),l=Ut.S;l!==null&&l(r,o),ty(e,t,o)}catch(c){Fp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ut.T=a}}else try{a=n(s,i),ty(e,t,a)}catch(c){Fp(e,t,c)}}function ty(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){ey(e,t,i)},function(i){return Fp(e,t,i)}):ey(e,t,n)}function ey(e,t,n){t.status="fulfilled",t.value=n,nx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ex(e,n)))}function Fp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,nx(t),t=t.next;while(t!==i)}e.action=null}function nx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ix(e,t){return t}function ny(e,t){if(jt){var n=me.formState;if(n!==null){t:{var i=zt;if(jt){if(Te){e:{for(var s=Te,a=fi;s.nodeType!==8;){if(!a){s=null;break e}if(s=pi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Te=pi(s.nextSibling),i=s.data==="F!";break t}}ta(i)}i=!1}i&&(t=n[0])}}return n=Tn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ix,lastRenderedState:t},n.queue=i,n=vx.bind(null,zt,i),i.dispatch=n,i=zp(!1),a=Hm.bind(null,zt,!1,i.queue),i=Tn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=HE.bind(null,zt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function iy(e){var t=ze();return sx(t,de,e)}function sx(e,t,n){if(t=Om(e,t,ix)[0],e=au(ds)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ol(t)}catch(r){throw r===Yr?Ku:r}else i=t;t=ze();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(zt.flags|=2048,zr(9,{destroy:void 0},VE.bind(null,s,n),null)),[i,a,e]}function VE(e,t){e.action=t}function sy(e){var t=ze(),n=de;if(n!==null)return sx(t,n,e);ze(),t=t.memoizedState,n=ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function zr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=zt.updateQueue,t===null&&(t=Ju(),zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function ax(){return ze().memoizedState}function ru(e,t,n,i){var s=Tn();zt.flags|=e,s.memoizedState=zr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Qu(e,t,n,i){var s=ze();i=i===void 0?null:i;var a=s.memoizedState.inst;de!==null&&i!==null&&Rm(i,de.memoizedState.deps)?s.memoizedState=zr(t,a,n,i):(zt.flags|=e,s.memoizedState=zr(1|t,a,n,i))}function ay(e,t){ru(8390656,8,e,t)}function Pm(e,t){Qu(2048,8,e,t)}function GE(e){zt.flags|=4;var t=zt.updateQueue;if(t===null)t=Ju(),zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function rx(e){var t=ze().memoizedState;return GE({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(et(440));return t.impl.apply(void 0,arguments)}}function ox(e,t){return Qu(4,2,e,t)}function lx(e,t){return Qu(4,4,e,t)}function cx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ux(e,t,n){n=n!=null?n.concat([e]):null,Qu(4,4,cx.bind(null,t,e),n)}function Bm(){}function hx(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Rm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function fx(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Rm(t,i[1]))return i[0];if(i=e(),za){Fs(!0);try{e()}finally{Fs(!1)}}return n.memoizedState=[i,t],i}function zm(e,t,n){return n===void 0||(fs&1073741824)!==0&&(Kt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=tS(),zt.lanes|=e,na|=e,n)}function dx(e,t,n,i){return Jn(n,t)?n:Br.current!==null?(e=zm(e,n,i),Jn(e,t)||(We=!0),e):(fs&42)===0||(fs&1073741824)!==0&&(Kt&261930)===0?(We=!0,e.memoizedState=n):(e=tS(),zt.lanes|=e,na|=e,t)}function px(e,t,n,i,s){var a=ie.p;ie.p=a!==0&&8>a?a:8;var r=Ut.T,o={};Ut.T=o,Hm(e,!1,t,n);try{var l=s(),c=Ut.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=BE(l,i);ll(e,t,f,Kn(e))}else ll(e,t,i,Kn(e))}catch(p){ll(e,t,{then:function(){},status:"rejected",reason:p},Kn())}finally{ie.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ut.T=r}}function kE(){}function Hp(e,t,n,i){if(e.tag!==5)throw Error(et(476));var s=mx(e).queue;px(e,s,t,Da,n===null?kE:function(){return gx(e),n(i)})}function mx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Da,baseState:Da,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:Da},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gx(e){var t=mx(e);t.next===null&&(t=e.alternate.memoizedState),ll(e,t.next.queue,{},Kn())}function Fm(){return un(Tl)}function _x(){return ze().memoizedState}function yx(){return ze().memoizedState}function XE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Kn();e=qs(n);var i=Ys(t,e,n);i!==null&&(In(i,t,n),al(i,t,n)),t={cache:Em()},e.payload=t;return}t=t.return}}function WE(e,t,n){var i=Kn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},$u(e)?xx(t,n):(n=xm(e,t,n,i),n!==null&&(In(n,e,i),Sx(n,t,i)))}function vx(e,t,n){var i=Kn();ll(e,t,n,i)}function ll(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if($u(e))xx(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Jn(o,r))return Zu(e,t,s,0),me===null&&Yu(),!1}catch{}if(n=xm(e,t,s,i),n!==null)return In(n,e,i),Sx(n,t,i),!0}return!1}function Hm(e,t,n,i){if(i={lane:2,revertLane:Km(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},$u(e)){if(t)throw Error(et(479))}else t=xm(e,n,i,2),t!==null&&In(t,e,2)}function $u(e){var t=e.alternate;return e===zt||t!==null&&t===zt}function xx(e,t){Nr=Au=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,rv(e,n)}}var Ml={readContext:un,use:ju,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie};Ml.useEffectEvent=Ie;var Mx={readContext:un,use:ju,useCallback:function(e,t){return Tn().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:ay,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ru(4194308,4,cx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ru(4194308,4,e,t)},useInsertionEffect:function(e,t){ru(4,2,e,t)},useMemo:function(e,t){var n=Tn();t=t===void 0?null:t;var i=e();if(za){Fs(!0);try{e()}finally{Fs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Tn();if(n!==void 0){var s=n(t);if(za){Fs(!0);try{n(t)}finally{Fs(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=WE.bind(null,zt,e),[i.memoizedState,e]},useRef:function(e){var t=Tn();return e={current:e},t.memoizedState=e},useState:function(e){e=zp(e);var t=e.queue,n=vx.bind(null,zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Bm,useDeferredValue:function(e,t){var n=Tn();return zm(n,e,t)},useTransition:function(){var e=zp(!1);return e=px.bind(null,zt,e.queue,!0,!1),Tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=zt,s=Tn();if(jt){if(n===void 0)throw Error(et(407));n=n()}else{if(n=t(),me===null)throw Error(et(349));(Kt&127)!==0||Kv(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,ay(jv.bind(null,i,a,e),[e]),i.flags|=2048,zr(9,{destroy:void 0},Jv.bind(null,i,a,n,t),null),n},useId:function(){var e=Tn(),t=me.identifierPrefix;if(jt){var n=Bi,i=Pi;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=wu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=zE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Fm,useFormState:ny,useActionState:ny,useOptimistic:function(e){var t=Tn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Hm.bind(null,zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Im,useCacheRefresh:function(){return Tn().memoizedState=XE.bind(null,zt)},useEffectEvent:function(e){var t=Tn(),n={impl:e};return t.memoizedState=n,function(){if((ne&2)!==0)throw Error(et(440));return n.impl.apply(void 0,arguments)}}},Vm={readContext:un,use:ju,useCallback:hx,useContext:un,useEffect:Pm,useImperativeHandle:ux,useInsertionEffect:ox,useLayoutEffect:lx,useMemo:fx,useReducer:au,useRef:ax,useState:function(){return au(ds)},useDebugValue:Bm,useDeferredValue:function(e,t){var n=ze();return dx(n,de.memoizedState,e,t)},useTransition:function(){var e=au(ds)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:Ol(e),t]},useSyncExternalStore:Zv,useId:_x,useHostTransitionStatus:Fm,useFormState:iy,useActionState:iy,useOptimistic:function(e,t){var n=ze();return tx(n,de,e,t)},useMemoCache:Im,useCacheRefresh:yx};Vm.useEffectEvent=rx;var bx={readContext:un,use:ju,useCallback:hx,useContext:un,useEffect:Pm,useImperativeHandle:ux,useInsertionEffect:ox,useLayoutEffect:lx,useMemo:fx,useReducer:Zd,useRef:ax,useState:function(){return Zd(ds)},useDebugValue:Bm,useDeferredValue:function(e,t){var n=ze();return de===null?zm(n,e,t):dx(n,de.memoizedState,e,t)},useTransition:function(){var e=Zd(ds)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:Ol(e),t]},useSyncExternalStore:Zv,useId:_x,useHostTransitionStatus:Fm,useFormState:sy,useActionState:sy,useOptimistic:function(e,t){var n=ze();return de!==null?tx(n,de,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Im,useCacheRefresh:yx};bx.useEffectEvent=rx;function Kd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Kn(),s=qs(i);s.payload=t,n!=null&&(s.callback=n),t=Ys(e,s,i),t!==null&&(In(t,e,i),al(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Kn(),s=qs(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ys(e,s,i),t!==null&&(In(t,e,i),al(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Kn(),i=qs(n);i.tag=2,t!=null&&(i.callback=t),t=Ys(e,i,n),t!==null&&(In(t,e,n),al(t,e,n))}};function ry(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!_l(n,i)||!_l(s,a):!0}function oy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Vp.enqueueReplaceState(t,t.state,null)}function Fa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ae({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Ex(e){vu(e)}function Tx(e){console.error(e)}function Ax(e){vu(e)}function Cu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function ly(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Gp(e,t,n){return n=qs(n),n.tag=3,n.payload={element:null},n.callback=function(){Cu(e,t)},n}function wx(e){return e=qs(e),e.tag=3,e}function Cx(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){ly(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){ly(t,n,i),typeof s!="function"&&(Zs===null?Zs=new Set([this]):Zs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function qE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&qr(t,n,s,!0),n=jn.current,n!==null){switch(n.tag){case 31:case 13:return di===null?Uu():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===bu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),rp(e,i,s)),!1;case 22:return n.flags|=65536,i===bu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),rp(e,i,s)),!1}throw Error(et(435,n.tag))}return rp(e,i,s),Uu(),!1}if(jt)return t=jn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Rp&&(e=Error(et(422),{cause:i}),vl(hi(e,n)))):(i!==Rp&&(t=Error(et(423),{cause:i}),vl(hi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=hi(i,n),s=Gp(e.stateNode,i,s),Yd(e,s),Oe!==4&&(Oe=2)),!1;var a=Error(et(520),{cause:i});if(a=hi(a,n),hl===null?hl=[a]:hl.push(a),Oe!==4&&(Oe=2),t===null)return!0;i=hi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Gp(n.stateNode,i,e),Yd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Zs===null||!Zs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=wx(s),Cx(s,e,n,i),Yd(n,s),!1}n=n.return}while(n!==null);return!1}var Gm=Error(et(461)),We=!1;function on(e,t,n,i){t.child=e===null?Gv(t,null,n,i):Ba(t,e.child,n,i)}function cy(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Pa(t),i=Dm(e,t,n,r,a,s),o=Nm(),e!==null&&!We?(Lm(e,t,s),ps(e,t,s)):(jt&&o&&Mm(t),t.flags|=1,on(e,t,i,s),t.child)}function uy(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Sm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Rx(e,t,a,i,s)):(e=iu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!km(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:_l,n(r,i)&&e.ref===t.ref)return ps(e,t,s)}return t.flags|=1,e=ls(a,i),e.ref=t.ref,e.return=t,t.child=e}function Rx(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(_l(a,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=a,km(e,s))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,ps(e,t,s)}return kp(e,t,n,i,s)}function Dx(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return hy(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&su(t,a!==null?a.cachePool:null),a!==null?$_(t,a):Pp(),Wv(t);else return i=t.lanes=536870912,hy(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(su(t,a.cachePool),$_(t,a),Bs(t),t.memoizedState=null):(e!==null&&su(t,null),Pp(),Bs(t));return on(e,t,s,n),t.child}function $o(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hy(e,t,n,i,s){var a=Tm();return a=a===null?null:{parent:Xe._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&su(t,null),Pp(),Wv(t),e!==null&&qr(e,t,i,!0),t.childLanes=s,null}function ou(e,t){return t=Ru({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fy(e,t,n){return Ba(t,e.child,null,n),e=ou(t,t.pendingProps),e.flags|=2,kn(t),t.memoizedState=null,e}function YE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(jt){if(i.mode==="hidden")return e=ou(t,i),t.lanes=536870912,$o(null,e);if(Bp(t),(e=Te)?(e=MS(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$s!==null?{id:Pi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},n=Ov(e),n.return=t,t.child=n,cn=t,Te=null)):e=null,e===null)throw ta(t);return t.lanes=536870912,null}return ou(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Bp(t),s)if(t.flags&256)t.flags&=-257,t=fy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(et(558));else if(We||qr(e,t,n,!1),s=(n&e.childLanes)!==0,We||s){if(i=me,i!==null&&(r=ov(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,ka(e,r),In(i,e,r),Gm;Uu(),t=fy(e,t,n)}else e=a.treeContext,Te=pi(r.nextSibling),cn=t,jt=!0,Ws=null,fi=!1,e!==null&&Bv(t,e),t=ou(t,i),t.flags|=4096;return t}return e=ls(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function lu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(et(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function kp(e,t,n,i,s){return Pa(t),n=Dm(e,t,n,i,void 0,s),i=Nm(),e!==null&&!We?(Lm(e,t,s),ps(e,t,s)):(jt&&i&&Mm(t),t.flags|=1,on(e,t,n,s),t.child)}function dy(e,t,n,i,s,a){return Pa(t),t.updateQueue=null,n=Yv(t,i,n,s),qv(e),i=Nm(),e!==null&&!We?(Lm(e,t,a),ps(e,t,a)):(jt&&i&&Mm(t),t.flags|=1,on(e,t,n,a),t.child)}function py(e,t,n,i,s){if(Pa(t),t.stateNode===null){var a=Mr,r=n.contextType;typeof r=="object"&&r!==null&&(a=un(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},wm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?un(r):Mr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Kd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Vp.enqueueReplaceState(a,a.state,null),ol(t,i,a,s),rl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Fa(n,o);a.props=l;var c=a.context,f=n.contextType;r=Mr,typeof f=="object"&&f!==null&&(r=un(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&oy(t,a,i,r),Is=!1;var u=t.memoizedState;a.state=u,ol(t,i,a,s),rl(),c=t.memoizedState,o||u!==c||Is?(typeof p=="function"&&(Kd(t,n,p,i),c=t.memoizedState),(l=Is||ry(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Ip(e,t),r=t.memoizedProps,f=Fa(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=Mr,typeof c=="object"&&c!==null&&(l=un(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&oy(t,a,i,l),Is=!1,u=t.memoizedState,a.state=u,ol(t,i,a,s),rl();var d=t.memoizedState;r!==p||u!==d||Is||e!==null&&e.dependencies!==null&&Mu(e.dependencies)?(typeof o=="function"&&(Kd(t,n,o,i),d=t.memoizedState),(f=Is||ry(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&Mu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,lu(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Ba(t,e.child,null,s),t.child=Ba(t,null,n,s)):on(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ps(e,t,s),e}function my(e,t,n,i){return Oa(),t.flags|=256,on(e,t,n,i),t.child}var Jd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jd(e){return{baseLanes:e,cachePool:Fv()}}function Qd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Wn),e}function Nx(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(jt){if(s?Ps(t):Bs(t),(e=Te)?(e=MS(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$s!==null?{id:Pi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},n=Ov(e),n.return=t,t.child=n,cn=t,Te=null)):e=null,e===null)throw ta(t);return im(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Bs(t),s=t.mode,o=Ru({mode:"hidden",children:o},s),i=Na(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=jd(n),i.childLanes=Qd(e,r,n),t.memoizedState=Jd,$o(null,i)):(Ps(t),Xp(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Ps(t),t.flags&=-257,t=$d(e,t,n)):t.memoizedState!==null?(Bs(t),t.child=e.child,t.flags|=128,t=null):(Bs(t),o=i.fallback,s=t.mode,i=Ru({mode:"visible",children:i.children},s),o=Na(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Ba(t,e.child,null,n),i=t.child,i.memoizedState=jd(n),i.childLanes=Qd(e,r,n),t.memoizedState=Jd,t=$o(null,i));else if(Ps(t),im(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(et(419)),i.stack="",i.digest=r,vl({value:i,source:null,stack:null}),t=$d(e,t,n)}else if(We||qr(e,t,n,!1),r=(n&e.childLanes)!==0,We||r){if(r=me,r!==null&&(i=ov(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,ka(e,i),In(r,e,i),Gm;nm(o)||Uu(),t=$d(e,t,n)}else nm(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Te=pi(o.nextSibling),cn=t,jt=!0,Ws=null,fi=!1,e!==null&&Bv(t,e),t=Xp(t,i.children),t.flags|=4096);return t}return s?(Bs(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=ls(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ls(c,o):(o=Na(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,$o(null,i),i=t.child,o=e.child.memoizedState,o===null?o=jd(n):(s=o.cachePool,s!==null?(l=Xe._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=Fv(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Qd(e,r,n),t.memoizedState=Jd,$o(e.child,i)):(Ps(t),n=e.child,e=n.sibling,n=ls(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Xp(e,t){return t=Ru({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ru(e,t){return e=Xn(22,e,null,t),e.lanes=0,e}function $d(e,t,n){return Ba(t,e.child,null,n),e=Xp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Np(e.return,t,n)}function tp(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Lx(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Be.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,xe(Be,r),on(e,t,i,n),i=jt?yl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gy(e,n,t);else if(e.tag===19)gy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Tu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),tp(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Tu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}tp(t,!0,n,null,a,i);break;case"together":tp(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ps(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),na|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(qr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(et(153));if(t.child!==null){for(e=t.child,n=ls(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ls(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function km(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Mu(e)))}function ZE(e,t,n){switch(t.tag){case 3:mu(t,t.stateNode.containerInfo),Os(t,Xe,e.memoizedState.cache),Oa();break;case 27:case 5:yp(t);break;case 4:mu(t,t.stateNode.containerInfo);break;case 10:Os(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Bp(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ps(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Nx(e,t,n):(Ps(t),e=ps(e,t,n),e!==null?e.sibling:null);Ps(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(qr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Lx(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),xe(Be,Be.current),i)break;return null;case 22:return t.lanes=0,Dx(e,t,n,t.pendingProps);case 24:Os(t,Xe,e.memoizedState.cache)}return ps(e,t,n)}function Ux(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!km(e,n)&&(t.flags&128)===0)return We=!1,ZE(e,t,n);We=(e.flags&131072)!==0}else We=!1,jt&&(t.flags&1048576)!==0&&Pv(t,yl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ca(t.elementType),t.type=e,typeof e=="function")Sm(e)?(i=Fa(e,i),t.tag=1,t=py(null,t,e,i,n)):(t.tag=0,t=kp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===om){t.tag=11,t=cy(null,t,e,i,n);break t}else if(s===lm){t.tag=14,t=uy(null,t,e,i,n);break t}}throw t=gp(e)||e,Error(et(306,t,""))}}return t;case 0:return kp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Fa(i,t.pendingProps),py(e,t,i,s,n);case 3:t:{if(mu(t,t.stateNode.containerInfo),e===null)throw Error(et(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Ip(e,t),ol(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Os(t,Xe,i),i!==a.cache&&Lp(t,[Xe],n,!0),rl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=my(e,t,i,n);break t}else if(i!==s){s=hi(Error(et(424)),t),vl(s),t=my(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Te=pi(e.firstChild),cn=t,jt=!0,Ws=null,fi=!0,n=Gv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oa(),i===s){t=ps(e,t,n);break t}on(e,t,i,n)}t=t.child}return t;case 26:return lu(e,t),e===null?(n=zy(t.type,null,t.pendingProps,null))?t.memoizedState=n:jt||(n=t.type,e=t.pendingProps,i=Bu(Xs.current).createElement(n),i[ln]=t,i[On]=e,hn(i,n,e),en(i),t.stateNode=i):t.memoizedState=zy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return yp(t),e===null&&jt&&(i=t.stateNode=bS(t.type,t.pendingProps,Xs.current),cn=t,fi=!0,s=Te,sa(t.type)?(sm=s,Te=pi(i.firstChild)):Te=s),on(e,t,t.pendingProps.children,n),lu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&jt&&((s=i=Te)&&(i=MT(i,t.type,t.pendingProps,fi),i!==null?(t.stateNode=i,cn=t,Te=pi(i.firstChild),fi=!1,s=!0):s=!1),s||ta(t)),yp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,tm(s,a)?i=null:r!==null&&tm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Dm(e,t,FE,null,null,n),Tl._currentValue=s),lu(e,t),on(e,t,i,n),t.child;case 6:return e===null&&jt&&((e=n=Te)&&(n=bT(n,t.pendingProps,fi),n!==null?(t.stateNode=n,cn=t,Te=null,e=!0):e=!1),e||ta(t)),null;case 13:return Nx(e,t,n);case 4:return mu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ba(t,null,i,n):on(e,t,i,n),t.child;case 11:return cy(e,t,t.type,t.pendingProps,n);case 7:return on(e,t,t.pendingProps,n),t.child;case 8:return on(e,t,t.pendingProps.children,n),t.child;case 12:return on(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Os(t,t.type,i.value),on(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Pa(t),s=un(s),i=i(s),t.flags|=1,on(e,t,i,n),t.child;case 14:return uy(e,t,t.type,t.pendingProps,n);case 15:return Rx(e,t,t.type,t.pendingProps,n);case 19:return Lx(e,t,n);case 31:return YE(e,t,n);case 22:return Dx(e,t,n,t.pendingProps);case 24:return Pa(t),i=un(Xe),e===null?(s=Tm(),s===null&&(s=me,a=Em(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},wm(t),Os(t,Xe,s)):((e.lanes&n)!==0&&(Ip(e,t),ol(t,null,null,n),rl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Os(t,Xe,i)):(i=a.cache,Os(t,Xe,i),i!==s.cache&&Lp(t,[Xe],n,!0))),on(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(et(156,t.tag))}function $i(e){e.flags|=4}function ep(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(iS())e.flags|=8192;else throw Ua=bu,Am}else e.flags&=-16777217}function _y(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!AS(t))if(iS())e.flags|=8192;else throw Ua=bu,Am}function qc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?sv():536870912,e.lanes|=t,Fr|=t)}function qo(e,t){if(!jt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function KE(e,t,n){var i=t.pendingProps;switch(bm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),cs(Xe),Ur(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ur(t)?$i(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qd())),Ee(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?($i(t),a!==null?(Ee(t),_y(t,a)):(Ee(t),ep(t,s,null,i,n))):a?a!==e.memoizedState?($i(t),Ee(t),_y(t,a)):(Ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&$i(t),Ee(t),ep(t,s,e,i,n)),null;case 27:if(gu(t),n=Xs.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Ee(t),null}e=Fi.current,ur(t)?q_(t,e):(e=bS(s,i,n),t.stateNode=e,$i(t))}return Ee(t),null;case 5:if(gu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Ee(t),null}if(a=Fi.current,ur(t))q_(t,a);else{var r=Bu(Xs.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[ln]=t,a[On]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(hn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&$i(t)}}return Ee(t),ep(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(et(166));if(e=Xs.current,ur(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=cn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[ln]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||vS(e.nodeValue,n)),e||ta(t,!0)}else e=Bu(e).createTextNode(i),e[ln]=t,t.stateNode=e}return Ee(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ur(t),n!==null){if(e===null){if(!i)throw Error(et(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(557));e[ln]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),e=!1}else n=qd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(kn(t),t):(kn(t),null);if((t.flags&128)!==0)throw Error(et(558))}return Ee(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=ur(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(et(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(et(317));s[ln]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),s=!1}else s=qd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(kn(t),t):(kn(t),null)}return kn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),qc(t,t.updateQueue),Ee(t),null);case 4:return Ur(),e===null&&Jm(t.stateNode.containerInfo),Ee(t),null;case 10:return cs(t.type),Ee(t),null;case 19:if(nn(Be),i=t.memoizedState,i===null)return Ee(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)qo(i,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Tu(e),a!==null){for(t.flags|=128,qo(i,!1),e=a.updateQueue,t.updateQueue=e,qc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Iv(n,e),n=n.sibling;return xe(Be,Be.current&1|2),jt&&is(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&qn()>Nu&&(t.flags|=128,s=!0,qo(i,!1),t.lanes=4194304)}else{if(!s)if(e=Tu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,qc(t,e),qo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!jt)return Ee(t),null}else 2*qn()-i.renderingStartTime>Nu&&n!==536870912&&(t.flags|=128,s=!0,qo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=qn(),e.sibling=null,n=Be.current,xe(Be,s?n&1|2:n&1),jt&&is(t,i.treeForkCount),e):(Ee(t),null);case 22:case 23:return kn(t),Cm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),n=t.updateQueue,n!==null&&qc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&nn(La),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),cs(Xe),Ee(t),null;case 25:return null;case 30:return null}throw Error(et(156,t.tag))}function JE(e,t){switch(bm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cs(Xe),Ur(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gu(t),null;case 31:if(t.memoizedState!==null){if(kn(t),t.alternate===null)throw Error(et(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(kn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(et(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return nn(Be),null;case 4:return Ur(),null;case 10:return cs(t.type),null;case 22:case 23:return kn(t),Cm(),e!==null&&nn(La),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return cs(Xe),null;case 25:return null;default:return null}}function Ix(e,t){switch(bm(t),t.tag){case 3:cs(Xe),Ur();break;case 26:case 27:case 5:gu(t);break;case 4:Ur();break;case 31:t.memoizedState!==null&&kn(t);break;case 13:kn(t);break;case 19:nn(Be);break;case 10:cs(t.type);break;case 22:case 23:kn(t),Cm(),e!==null&&nn(La);break;case 24:cs(Xe)}}function Pl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ce(t,t.return,o)}}function ea(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){ce(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){ce(t,t.return,f)}}function Ox(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xv(t,n)}catch(i){ce(e,e.return,i)}}}function Px(e,t,n){n.props=Fa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ce(e,t,i)}}function cl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){ce(e,t,s)}}function zi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ce(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ce(e,t,s)}else n.current=null}function Bx(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ce(e,e.return,s)}}function np(e,t,n){try{var i=e.stateNode;gT(i,e.type,n,t),i[On]=t}catch(s){ce(e,e.return,s)}}function zx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sa(e.type)||e.tag===4}function ip(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||zx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rs));else if(i!==4&&(i===27&&sa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Wp(e,t,n),e=e.sibling;e!==null;)Wp(e,t,n),e=e.sibling}function Du(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&sa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Du(e,t,n),e=e.sibling;e!==null;)Du(e,t,n),e=e.sibling}function Fx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);hn(t,i,n),t[ln]=e,t[On]=n}catch(a){ce(e,e.return,a)}}var ss=!1,ke=!1,sp=!1,yy=typeof WeakSet=="function"?WeakSet:Set,tn=null;function jE(e,t){if(e=e.containerInfo,Qp=Vu,e=Av(e),ym(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,f=0,p=e,u=null;e:for(;;){for(var d;p!==n||s!==0&&p.nodeType!==3||(o=r+s),p!==a||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)u=p,p=d;for(;;){if(p===e)break e;if(u===n&&++c===s&&(o=r),u===a&&++f===i&&(l=r),(d=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($p={focusedElem:e,selectionRange:n},Vu=!1,tn=t;tn!==null;)if(t=tn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tn=e;else for(;tn!==null;){switch(t=tn,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var _=Fa(n.type,s);e=i.getSnapshotBeforeUpdate(_,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){ce(n,n.return,M)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)em(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":em(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(et(163))}if(e=t.sibling,e!==null){e.return=t.return,tn=e;break}tn=t.return}}function Hx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:es(e,n),i&4&&Pl(5,n);break;case 1:if(es(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ce(n,n.return,r)}else{var s=Fa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ce(n,n.return,r)}}i&64&&Ox(n),i&512&&cl(n,n.return);break;case 3:if(es(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xv(e,t)}catch(r){ce(n,n.return,r)}}break;case 27:t===null&&i&4&&Fx(n);case 26:case 5:es(e,n),t===null&&i&4&&Bx(n),i&512&&cl(n,n.return);break;case 12:es(e,n);break;case 31:es(e,n),i&4&&kx(e,n);break;case 13:es(e,n),i&4&&Xx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=rT.bind(null,n),ET(e,n))));break;case 22:if(i=n.memoizedState!==null||ss,!i){t=t!==null&&t.memoizedState!==null||ke,s=ss;var a=ke;ss=i,(ke=t)&&!a?ns(e,n,(n.subtreeFlags&8772)!==0):es(e,n),ss=s,ke=a}break;case 30:break;default:es(e,n)}}function Vx(e){var t=e.alternate;t!==null&&(e.alternate=null,Vx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fm(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,Ln=!1;function ts(e,t,n){for(n=n.child;n!==null;)Gx(e,t,n),n=n.sibling}function Gx(e,t,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 26:ke||zi(n,t),ts(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ke||zi(n,t);var i=De,s=Ln;sa(n.type)&&(De=n.stateNode,Ln=!1),ts(e,t,n),dl(n.stateNode),De=i,Ln=s;break;case 5:ke||zi(n,t);case 6:if(i=De,s=Ln,De=null,ts(e,t,n),De=i,Ln=s,De!==null)if(Ln)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(n.stateNode)}catch(a){ce(n,t,a)}else try{De.removeChild(n.stateNode)}catch(a){ce(n,t,a)}break;case 18:De!==null&&(Ln?(e=De,Uy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),kr(e)):Uy(De,n.stateNode));break;case 4:i=De,s=Ln,De=n.stateNode.containerInfo,Ln=!0,ts(e,t,n),De=i,Ln=s;break;case 0:case 11:case 14:case 15:ea(2,n,t),ke||ea(4,n,t),ts(e,t,n);break;case 1:ke||(zi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Px(n,t,i)),ts(e,t,n);break;case 21:ts(e,t,n);break;case 22:ke=(i=ke)||n.memoizedState!==null,ts(e,t,n),ke=i;break;default:ts(e,t,n)}}function kx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{kr(e)}catch(n){ce(t,t.return,n)}}}function Xx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kr(e)}catch(n){ce(t,t.return,n)}}function QE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new yy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new yy),t;default:throw Error(et(435,e.tag))}}function Yc(e,t){var n=QE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=oT.bind(null,e,i);i.then(s,s)}})}function Dn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(sa(o.type)){De=o.stateNode,Ln=!1;break t}break;case 5:De=o.stateNode,Ln=!1;break t;case 3:case 4:De=o.stateNode.containerInfo,Ln=!0;break t}o=o.return}if(De===null)throw Error(et(160));Gx(a,r,s),De=null,Ln=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Wx(t,e),t=t.sibling}var xi=null;function Wx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dn(t,e),Nn(e),i&4&&(ea(3,e,e.return),Pl(3,e),ea(5,e,e.return));break;case 1:Dn(t,e),Nn(e),i&512&&(ke||n===null||zi(n,n.return)),i&64&&ss&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=xi;if(Dn(t,e),Nn(e),i&512&&(ke||n===null||zi(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[Ll]||a[ln]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),hn(a,i,n),a[ln]=e,en(a),i=a;break t;case"link":var r=Hy("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),hn(a,i,n),s.head.appendChild(a);break;case"meta":if(r=Hy("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),hn(a,i,n),s.head.appendChild(a);break;default:throw Error(et(468,i))}a[ln]=e,en(a),i=a}e.stateNode=i}else Vy(s,e.type,e.stateNode);else e.stateNode=Fy(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?Vy(s,e.type,e.stateNode):Fy(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&np(e,e.memoizedProps,n.memoizedProps)}break;case 27:Dn(t,e),Nn(e),i&512&&(ke||n===null||zi(n,n.return)),n!==null&&i&4&&np(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Dn(t,e),Nn(e),i&512&&(ke||n===null||zi(n,n.return)),e.flags&32){s=e.stateNode;try{Or(s,"")}catch(_){ce(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,np(e,s,n!==null?n.memoizedProps:s)),i&1024&&(sp=!0);break;case 6:if(Dn(t,e),Nn(e),i&4){if(e.stateNode===null)throw Error(et(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){ce(e,e.return,_)}}break;case 3:if(hu=null,s=xi,xi=zu(t.containerInfo),Dn(t,e),xi=s,Nn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{kr(t.containerInfo)}catch(_){ce(e,e.return,_)}sp&&(sp=!1,qx(e));break;case 4:i=xi,xi=zu(e.stateNode.containerInfo),Dn(t,e),Nn(e),xi=i;break;case 12:Dn(t,e),Nn(e);break;case 31:Dn(t,e),Nn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Yc(e,i)));break;case 13:Dn(t,e),Nn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(th=qn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Yc(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ss,f=ke;if(ss=c||s,ke=f||l,Dn(t,e),ke=f,ss=c,Nn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||ss||ke||Ra(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(_){ce(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){ce(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;s?Iy(d,!0):Iy(l.stateNode,!1)}catch(_){ce(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Yc(e,n))));break;case 19:Dn(t,e),Nn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Yc(e,i)));break;case 30:break;case 21:break;default:Dn(t,e),Nn(e)}}function Nn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(zx(i)){n=i;break}i=i.return}if(n==null)throw Error(et(160));switch(n.tag){case 27:var s=n.stateNode,a=ip(e);Du(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Or(r,""),n.flags&=-33);var o=ip(e);Du(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=ip(e);Wp(e,c,l);break;default:throw Error(et(161))}}catch(f){ce(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;qx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function es(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Hx(e,t.alternate,t),t=t.sibling}function Ra(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ea(4,t,t.return),Ra(t);break;case 1:zi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Px(t,t.return,n),Ra(t);break;case 27:dl(t.stateNode);case 26:case 5:zi(t,t.return),Ra(t);break;case 22:t.memoizedState===null&&Ra(t);break;case 30:Ra(t);break;default:Ra(t)}e=e.sibling}}function ns(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:ns(s,a,n),Pl(4,a);break;case 1:if(ns(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){ce(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)kv(l[s],o)}catch(c){ce(i,i.return,c)}}n&&r&64&&Ox(a),cl(a,a.return);break;case 27:Fx(a);case 26:case 5:ns(s,a,n),n&&i===null&&r&4&&Bx(a),cl(a,a.return);break;case 12:ns(s,a,n);break;case 31:ns(s,a,n),n&&r&4&&kx(s,a);break;case 13:ns(s,a,n),n&&r&4&&Xx(s,a);break;case 22:a.memoizedState===null&&ns(s,a,n),cl(a,a.return);break;case 30:break;default:ns(s,a,n)}t=t.sibling}}function Xm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Il(n))}function Wm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Il(e))}function vi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Yx(e,t,n,i),t=t.sibling}function Yx(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:vi(e,t,n,i),s&2048&&Pl(9,t);break;case 1:vi(e,t,n,i);break;case 3:vi(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Il(e)));break;case 12:if(s&2048){vi(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ce(t,t.return,l)}}else vi(e,t,n,i);break;case 31:vi(e,t,n,i);break;case 13:vi(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?vi(e,t,n,i):ul(e,t):a._visibility&2?vi(e,t,n,i):(a._visibility|=2,fr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Xm(r,t);break;case 24:vi(e,t,n,i),s&2048&&Wm(t.alternate,t);break;default:vi(e,t,n,i)}}function fr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:fr(a,r,o,l,s),Pl(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?fr(a,r,o,l,s):ul(a,r):(f._visibility|=2,fr(a,r,o,l,s)),s&&c&2048&&Xm(r.alternate,r);break;case 24:fr(a,r,o,l,s),s&&c&2048&&Wm(r.alternate,r);break;default:fr(a,r,o,l,s)}t=t.sibling}}function ul(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:ul(n,i),s&2048&&Xm(i.alternate,i);break;case 24:ul(n,i),s&2048&&Wm(i.alternate,i);break;default:ul(n,i)}t=t.sibling}}var tl=8192;function hr(e,t,n){if(e.subtreeFlags&tl)for(e=e.child;e!==null;)Zx(e,t,n),e=e.sibling}function Zx(e,t,n){switch(e.tag){case 26:hr(e,t,n),e.flags&tl&&e.memoizedState!==null&&PT(n,xi,e.memoizedState,e.memoizedProps);break;case 5:hr(e,t,n);break;case 3:case 4:var i=xi;xi=zu(e.stateNode.containerInfo),hr(e,t,n),xi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=tl,tl=16777216,hr(e,t,n),tl=i):hr(e,t,n));break;default:hr(e,t,n)}}function Kx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tn=i,jx(i,e)}Kx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jx(e),e=e.sibling}function Jx(e){switch(e.tag){case 0:case 11:case 15:Yo(e),e.flags&2048&&ea(9,e,e.return);break;case 3:Yo(e);break;case 12:Yo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,cu(e)):Yo(e);break;default:Yo(e)}}function cu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tn=i,jx(i,e)}Kx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ea(8,t,t.return),cu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,cu(t));break;default:cu(t)}e=e.sibling}}function jx(e,t){for(;tn!==null;){var n=tn;switch(n.tag){case 0:case 11:case 15:ea(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Il(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,tn=i;else t:for(n=e;tn!==null;){i=tn;var s=i.sibling,a=i.return;if(Vx(i),i===n){tn=null;break t}if(s!==null){s.return=a,tn=s;break t}tn=a}}}var $E={getCacheForType:function(e){var t=un(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return un(Xe).controller.signal}},tT=typeof WeakMap=="function"?WeakMap:Map,ne=0,me=null,Yt=null,Kt=0,le=0,Gn=null,Vs=!1,Zr=!1,qm=!1,ms=0,Oe=0,na=0,Ia=0,Ym=0,Wn=0,Fr=0,hl=null,Un=null,qp=!1,th=0,Qx=0,Nu=1/0,Lu=null,Zs=null,Ze=0,Ks=null,Hr=null,us=0,Yp=0,Zp=null,$x=null,fl=0,Kp=null;function Kn(){return(ne&2)!==0&&Kt!==0?Kt&-Kt:Ut.T!==null?Km():lv()}function tS(){if(Wn===0)if((Kt&536870912)===0||jt){var e=Bc;Bc<<=1,(Bc&3932160)===0&&(Bc=262144),Wn=e}else Wn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Wn}function In(e,t,n){(e===me&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(Vr(e,0),Gs(e,Kt,Wn,!1)),Nl(e,n),((ne&2)===0||e!==me)&&(e===me&&((ne&2)===0&&(Ia|=n),Oe===4&&Gs(e,Kt,Wn,!1)),Vi(e))}function eS(e,t,n){if((ne&6)!==0)throw Error(et(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Dl(e,t),s=i?iT(e,t):ap(e,t,!0),a=i;do{if(s===0){Zr&&!i&&Gs(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!eT(n)){s=ap(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=hl;var l=o.current.memoizedState.isDehydrated;if(l&&(Vr(o,r).flags|=256),r=ap(o,r,!1),r!==2){if(qm&&!l){o.errorRecoveryDisabledLanes|=a,Ia|=a,s=4;break t}a=Un,Un=s,a!==null&&(Un===null?Un=a:Un.push.apply(Un,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Vr(e,0),Gs(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(et(345));case 4:if((t&4194048)!==t)break;case 6:Gs(i,t,Wn,!Vs);break t;case 2:Un=null;break;case 3:case 5:break;default:throw Error(et(329))}if((t&62914560)===t&&(s=th+300-qn(),10<s)){if(Gs(i,t,Wn,!Vs),ku(i,0,!0)!==0)break t;us=t,i.timeoutHandle=SS(vy.bind(null,i,n,Un,Lu,qp,t,Wn,Ia,Fr,Vs,a,"Throttled",-0,0),s);break t}vy(i,n,Un,Lu,qp,t,Wn,Ia,Fr,Vs,a,null,-0,0)}}break}while(!0);Vi(e)}function vy(e,t,n,i,s,a,r,o,l,c,f,p,u,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rs},Zx(t,a,p);var _=(a&62914560)===a?th-qn():(a&4194048)===a?Qx-qn():0;if(_=BT(p,_),_!==null){us=a,e.cancelPendingCommit=_(Sy.bind(null,e,t,a,n,i,s,r,o,l,f,p,null,u,d)),Gs(e,a,r,!c);return}}Sy(e,t,a,n,i,s,r,o,l)}function eT(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Jn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gs(e,t,n,i){t&=~Ym,t&=~Ia,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Zn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&av(e,n,t)}function eh(){return(ne&6)===0?(Bl(0,!1),!1):!0}function Zm(){if(Yt!==null){if(le===0)var e=Yt.return;else e=Yt,os=Xa=null,Um(e),Dr=null,xl=0,e=Yt;for(;e!==null;)Ix(e.alternate,e),e=e.return;Yt=null}}function Vr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,vT(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),us=0,Zm(),me=e,Yt=n=ls(e.current,null),Kt=t,le=0,Gn=null,Vs=!1,Zr=Dl(e,t),qm=!1,Fr=Wn=Ym=Ia=na=Oe=0,Un=hl=null,qp=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Zn(i),a=1<<s;t|=e[s],i&=~a}return ms=t,Yu(),n}function nS(e,t){zt=null,Ut.H=Ml,t===Yr||t===Ku?(t=j_(),le=3):t===Am?(t=j_(),le=4):le=t===Gm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gn=t,Yt===null&&(Oe=1,Cu(e,hi(t,e.current)))}function iS(){var e=jn.current;return e===null?!0:(Kt&4194048)===Kt?di===null:(Kt&62914560)===Kt||(Kt&536870912)!==0?e===di:!1}function sS(){var e=Ut.H;return Ut.H=Ml,e===null?Ml:e}function aS(){var e=Ut.A;return Ut.A=$E,e}function Uu(){Oe=4,Vs||(Kt&4194048)!==Kt&&jn.current!==null||(Zr=!0),(na&134217727)===0&&(Ia&134217727)===0||me===null||Gs(me,Kt,Wn,!1)}function ap(e,t,n){var i=ne;ne|=2;var s=sS(),a=aS();(me!==e||Kt!==t)&&(Lu=null,Vr(e,t)),t=!1;var r=Oe;t:do try{if(le!==0&&Yt!==null){var o=Yt,l=Gn;switch(le){case 8:Zm(),r=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(t=!0);var c=le;if(le=0,Gn=null,Tr(e,o,l,c),n&&Zr){r=0;break t}break;default:c=le,le=0,Gn=null,Tr(e,o,l,c)}}nT(),r=Oe;break}catch(f){nS(e,f)}while(!0);return t&&e.shellSuspendCounter++,os=Xa=null,ne=i,Ut.H=s,Ut.A=a,Yt===null&&(me=null,Kt=0,Yu()),r}function nT(){for(;Yt!==null;)rS(Yt)}function iT(e,t){var n=ne;ne|=2;var i=sS(),s=aS();me!==e||Kt!==t?(Lu=null,Nu=qn()+500,Vr(e,t)):Zr=Dl(e,t);t:do try{if(le!==0&&Yt!==null){t=Yt;var a=Gn;e:switch(le){case 1:le=0,Gn=null,Tr(e,t,a,1);break;case 2:case 9:if(J_(a)){le=0,Gn=null,xy(t);break}t=function(){le!==2&&le!==9||me!==e||(le=7),Vi(e)},a.then(t,t);break t;case 3:le=7;break t;case 4:le=5;break t;case 7:J_(a)?(le=0,Gn=null,xy(t)):(le=0,Gn=null,Tr(e,t,a,7));break;case 5:var r=null;switch(Yt.tag){case 26:r=Yt.memoizedState;case 5:case 27:var o=Yt;if(r?AS(r):o.stateNode.complete){le=0,Gn=null;var l=o.sibling;if(l!==null)Yt=l;else{var c=o.return;c!==null?(Yt=c,nh(c)):Yt=null}break e}}le=0,Gn=null,Tr(e,t,a,5);break;case 6:le=0,Gn=null,Tr(e,t,a,6);break;case 8:Zm(),Oe=6;break t;default:throw Error(et(462))}}sT();break}catch(f){nS(e,f)}while(!0);return os=Xa=null,Ut.H=i,Ut.A=s,ne=n,Yt!==null?0:(me=null,Kt=0,Yu(),Oe)}function sT(){for(;Yt!==null&&!w1();)rS(Yt)}function rS(e){var t=Ux(e.alternate,e,ms);e.memoizedProps=e.pendingProps,t===null?nh(e):Yt=t}function xy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=dy(n,t,t.pendingProps,t.type,void 0,Kt);break;case 11:t=dy(n,t,t.pendingProps,t.type.render,t.ref,Kt);break;case 5:Um(t);default:Ix(n,t),t=Yt=Iv(t,ms),t=Ux(n,t,ms)}e.memoizedProps=e.pendingProps,t===null?nh(e):Yt=t}function Tr(e,t,n,i){os=Xa=null,Um(t),Dr=null,xl=0;var s=t.return;try{if(qE(e,s,t,n,Kt)){Oe=1,Cu(e,hi(n,e.current)),Yt=null;return}}catch(a){if(s!==null)throw Yt=s,a;Oe=1,Cu(e,hi(n,e.current)),Yt=null;return}t.flags&32768?(jt||i===1?e=!0:Zr||(Kt&536870912)!==0?e=!1:(Vs=e=!0,(i===2||i===9||i===3||i===6)&&(i=jn.current,i!==null&&i.tag===13&&(i.flags|=16384))),oS(t,e)):nh(t)}function nh(e){var t=e;do{if((t.flags&32768)!==0){oS(t,Vs);return}e=t.return;var n=KE(t.alternate,t,ms);if(n!==null){Yt=n;return}if(t=t.sibling,t!==null){Yt=t;return}Yt=t=e}while(t!==null);Oe===0&&(Oe=5)}function oS(e,t){do{var n=JE(e.alternate,e);if(n!==null){n.flags&=32767,Yt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Yt=e;return}Yt=e=n}while(e!==null);Oe=6,Yt=null}function Sy(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do ih();while(Ze!==0);if((ne&6)!==0)throw Error(et(327));if(t!==null){if(t===e.current)throw Error(et(177));if(a=t.lanes|t.childLanes,a|=vm,B1(e,n,a,r,o,l),e===me&&(Yt=me=null,Kt=0),Hr=t,Ks=e,us=n,Yp=a,Zp=s,$x=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,lT(_u,function(){return fS(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ut.T,Ut.T=null,s=ie.p,ie.p=2,r=ne,ne|=4;try{jE(e,t,n)}finally{ne=r,ie.p=s,Ut.T=i}}Ze=1,lS(),cS(),uS()}}function lS(){if(Ze===1){Ze=0;var e=Ks,t=Hr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Ut.T,Ut.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{Wx(t,e);var a=$p,r=Av(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&Tv(o.ownerDocument.documentElement,o)){if(l!==null&&ym(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),_=o.textContent.length,M=Math.min(l.start,_),g=l.end===void 0?M:Math.min(l.end,_);!d.extend&&M>g&&(r=g,g=M,M=r);var h=k_(o,M),m=k_(o,g);if(h&&m&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var S=p.createRange();S.setStart(h.node,h.offset),d.removeAllRanges(),M>g?(d.addRange(S),d.extend(m.node,m.offset)):(S.setEnd(m.node,m.offset),d.addRange(S))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Vu=!!Qp,$p=Qp=null}finally{ne=s,ie.p=i,Ut.T=n}}e.current=t,Ze=2}}function cS(){if(Ze===2){Ze=0;var e=Ks,t=Hr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ut.T,Ut.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{Hx(e,t.alternate,t)}finally{ne=s,ie.p=i,Ut.T=n}}Ze=3}}function uS(){if(Ze===4||Ze===3){Ze=0,C1();var e=Ks,t=Hr,n=us,i=$x;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Hr=Ks=null,hS(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Zs=null),hm(n),t=t.stateNode,Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ut.T,s=ie.p,ie.p=2,Ut.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Ut.T=t,ie.p=s}}(us&3)!==0&&ih(),Vi(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Kp?fl++:(fl=0,Kp=e):fl=0,Bl(0,!1)}}function hS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Il(t)))}function ih(){return lS(),cS(),uS(),fS()}function fS(){if(Ze!==5)return!1;var e=Ks,t=Yp;Yp=0;var n=hm(us),i=Ut.T,s=ie.p;try{ie.p=32>n?32:n,Ut.T=null,n=Zp,Zp=null;var a=Ks,r=us;if(Ze=0,Hr=Ks=null,us=0,(ne&6)!==0)throw Error(et(331));var o=ne;if(ne|=4,Jx(a.current),Yx(a,a.current,r,n),ne=o,Bl(0,!1),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(Rl,a)}catch{}return!0}finally{ie.p=s,Ut.T=i,hS(e,t)}}function My(e,t,n){t=hi(n,t),t=Gp(e.stateNode,t,2),e=Ys(e,t,2),e!==null&&(Nl(e,2),Vi(e))}function ce(e,t,n){if(e.tag===3)My(e,e,n);else for(;t!==null;){if(t.tag===3){My(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zs===null||!Zs.has(i))){e=hi(n,e),n=wx(2),i=Ys(t,n,2),i!==null&&(Cx(n,i,t,e),Nl(i,2),Vi(i));break}}t=t.return}}function rp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new tT;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(qm=!0,s.add(n),e=aT.bind(null,e,t,n),t.then(e,e))}function aT(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,me===e&&(Kt&n)===n&&(Oe===4||Oe===3&&(Kt&62914560)===Kt&&300>qn()-th?(ne&2)===0&&Vr(e,0):Ym|=n,Fr===Kt&&(Fr=0)),Vi(e)}function dS(e,t){t===0&&(t=sv()),e=ka(e,t),e!==null&&(Nl(e,t),Vi(e))}function rT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dS(e,n)}function oT(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(et(314))}i!==null&&i.delete(t),dS(e,n)}function lT(e,t){return cm(e,t)}var Iu=null,dr=null,Jp=!1,Ou=!1,op=!1,ks=0;function Vi(e){e!==dr&&e.next===null&&(dr===null?Iu=dr=e:dr=dr.next=e),Ou=!0,Jp||(Jp=!0,uT())}function Bl(e,t){if(!op&&Ou){op=!0;do for(var n=!1,i=Iu;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Zn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,by(i,a))}else a=Kt,a=ku(i,i===me?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Dl(i,a)||(n=!0,by(i,a));i=i.next}while(n);op=!1}}function cT(){pS()}function pS(){Ou=Jp=!1;var e=0;ks!==0&&yT()&&(e=ks);for(var t=qn(),n=null,i=Iu;i!==null;){var s=i.next,a=mS(i,t);a===0?(i.next=null,n===null?Iu=s:n.next=s,s===null&&(dr=n)):(n=i,(e!==0||(a&3)!==0)&&(Ou=!0)),i=s}Ze!==0&&Ze!==5||Bl(e,!1),ks!==0&&(ks=0)}function mS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Zn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=P1(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=me,n=Kt,n=ku(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Pd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Dl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Pd(i),hm(n)){case 2:case 8:n=nv;break;case 32:n=_u;break;case 268435456:n=iv;break;default:n=_u}return i=gS.bind(null,e),n=cm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Pd(i),e.callbackPriority=2,e.callbackNode=null,2}function gS(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ih()&&e.callbackNode!==n)return null;var i=Kt;return i=ku(e,e===me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(eS(e,i,t),mS(e,qn()),e.callbackNode!=null&&e.callbackNode===n?gS.bind(null,e):null)}function by(e,t){if(ih())return null;eS(e,t,!0)}function uT(){xT(function(){(ne&6)!==0?cm(ev,cT):pS()})}function Km(){if(ks===0){var e=Pr;e===0&&(e=Pc,Pc<<=1,(Pc&261888)===0&&(Pc=256)),ks=e}return ks}function Ey(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tu(""+e)}function Ty(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hT(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Ey((s[On]||null).action),r=i.submitter;r&&(t=(t=r[On]||null)?Ey(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Xu("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ks!==0){var l=r?Ty(s,r):new FormData(s);Hp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?Ty(s,r):new FormData(s),Hp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Zc=0;Zc<Cp.length;Zc++)Kc=Cp[Zc],Ay=Kc.toLowerCase(),wy=Kc[0].toUpperCase()+Kc.slice(1),Si(Ay,"on"+wy);var Kc,Ay,wy,Zc;Si(Cv,"onAnimationEnd");Si(Rv,"onAnimationIteration");Si(Dv,"onAnimationStart");Si("dblclick","onDoubleClick");Si("focusin","onFocus");Si("focusout","onBlur");Si(RE,"onTransitionRun");Si(DE,"onTransitionStart");Si(NE,"onTransitionCancel");Si(Nv,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function _S(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){vu(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){vu(f)}s.currentTarget=null,a=l}}}}function qt(e,t){var n=t[xp];n===void 0&&(n=t[xp]=new Set);var i=e+"__bubble";n.has(i)||(yS(t,e,2,!1),n.add(i))}function lp(e,t,n){var i=0;t&&(i|=4),yS(n,e,i,t)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function Jm(e){if(!e[Jc]){e[Jc]=!0,cv.forEach(function(n){n!=="selectionchange"&&(fT.has(n)||lp(n,!1,e),lp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jc]||(t[Jc]=!0,lp("selectionchange",!1,t))}}function yS(e,t,n,i){switch(NS(t)){case 2:var s=HT;break;case 8:s=VT;break;default:s=tg}n=s.bind(null,t,n,e),s=void 0,!Tp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function cp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=gr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}_v(function(){var c=a,f=pm(n),p=[];t:{var u=Lv.get(e);if(u!==void 0){var d=Xu,_=e;switch(e){case"keypress":if(nu(n)===0)break t;case"keydown":case"keyup":d=oE;break;case"focusin":_="focus",d=Vd;break;case"focusout":_="blur",d=Vd;break;case"beforeblur":case"afterblur":d=Vd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=I_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=K1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=uE;break;case Cv:case Rv:case Dv:d=Q1;break;case Nv:d=fE;break;case"scroll":case"scrollend":d=Y1;break;case"wheel":d=pE;break;case"copy":case"cut":case"paste":d=tE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=P_;break;case"toggle":case"beforetoggle":d=gE}var M=(t&4)!==0,g=!M&&(e==="scroll"||e==="scrollend"),h=M?u!==null?u+"Capture":null:u;M=[];for(var m=c,S;m!==null;){var y=m;if(S=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||S===null||h===null||(y=ml(m,h),y!=null&&M.push(El(m,y,S))),g)break;m=m.return}0<M.length&&(u=new d(u,_,null,n,f),p.push({event:u,listeners:M}))}}if((t&7)===0){t:{if(u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",u&&n!==Ep&&(_=n.relatedTarget||n.fromElement)&&(gr(_)||_[Xr]))break t;if((d||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,d?(_=n.relatedTarget||n.toElement,d=c,_=_?gr(_):null,_!==null&&(g=Cl(_),M=_.tag,_!==g||M!==5&&M!==27&&M!==6)&&(_=null)):(d=null,_=c),d!==_)){if(M=I_,y="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(M=P_,y="onPointerLeave",h="onPointerEnter",m="pointer"),g=d==null?u:Qo(d),S=_==null?u:Qo(_),u=new M(y,m+"leave",d,n,f),u.target=g,u.relatedTarget=S,y=null,gr(f)===c&&(M=new M(h,m+"enter",_,n,f),M.target=S,M.relatedTarget=g,y=M),g=y,d&&_)e:{for(M=dT,h=d,m=_,S=0,y=h;y;y=M(y))S++;y=0;for(var E=m;E;E=M(E))y++;for(;0<S-y;)h=M(h),S--;for(;0<y-S;)m=M(m),y--;for(;S--;){if(h===m||m!==null&&h===m.alternate){M=h;break e}h=M(h),m=M(m)}M=null}else M=null;d!==null&&Cy(p,u,d,M,!1),_!==null&&g!==null&&Cy(p,g,_,M,!0)}}t:{if(u=c?Qo(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var T=H_;else if(F_(u))if(bv)T=AE;else{T=EE;var w=bE}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&dm(c.elementType)&&(T=H_):T=TE;if(T&&(T=T(e,c))){Mv(p,T,n,f);break t}w&&w(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&bp(u,"number",u.value)}switch(w=c?Qo(c):window,e){case"focusin":(F_(w)||w.contentEditable==="true")&&(vr=w,Ap=c,il=null);break;case"focusout":il=Ap=vr=null;break;case"mousedown":wp=!0;break;case"contextmenu":case"mouseup":case"dragend":wp=!1,X_(p,n,f);break;case"selectionchange":if(CE)break;case"keydown":case"keyup":X_(p,n,f)}var x;if(_m)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else yr?xv(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(vv&&n.locale!=="ko"&&(yr||A!=="onCompositionStart"?A==="onCompositionEnd"&&yr&&(x=yv()):(Hs=f,mm="value"in Hs?Hs.value:Hs.textContent,yr=!0)),w=Pu(c,A),0<w.length&&(A=new O_(A,e,null,n,f),p.push({event:A,listeners:w}),x?A.data=x:(x=Sv(n),x!==null&&(A.data=x)))),(x=yE?vE(e,n):xE(e,n))&&(A=Pu(c,"onBeforeInput"),0<A.length&&(w=new O_("onBeforeInput","beforeinput",null,n,f),p.push({event:w,listeners:A}),w.data=x)),hT(p,e,c,n,f)}_S(p,t)})}function El(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=ml(e,n),s!=null&&i.unshift(El(e,s,a)),s=ml(e,t),s!=null&&i.push(El(e,s,a))),e.tag===3)return i;e=e.return}return[]}function dT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cy(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=ml(n,a),c!=null&&r.unshift(El(n,c,l))):s||(c=ml(n,a),c!=null&&r.push(El(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var pT=/\r\n?/g,mT=/\u0000|\uFFFD/g;function Ry(e){return(typeof e=="string"?e:""+e).replace(pT,`
`).replace(mT,"")}function vS(e,t){return t=Ry(t),Ry(e)===t}function fe(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Or(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Or(e,""+i);break;case"className":Fc(e,"class",i);break;case"tabIndex":Fc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Fc(e,n,i);break;case"style":gv(e,i,a);break;case"data":if(t!=="object"){Fc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=tu(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&fe(e,t,"name",s.name,s,null),fe(e,t,"formEncType",s.formEncType,s,null),fe(e,t,"formMethod",s.formMethod,s,null),fe(e,t,"formTarget",s.formTarget,s,null)):(fe(e,t,"encType",s.encType,s,null),fe(e,t,"method",s.method,s,null),fe(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=tu(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=rs);break;case"onScroll":i!=null&&qt("scroll",e);break;case"onScrollEnd":i!=null&&qt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(et(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=tu(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":qt("beforetoggle",e),qt("toggle",e),$c(e,"popover",i);break;case"xlinkActuate":Qi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Qi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Qi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Qi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Qi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Qi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Qi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Qi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Qi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":$c(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=W1.get(n)||n,$c(e,n,i))}}function jp(e,t,n,i,s,a){switch(n){case"style":gv(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(et(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Or(e,i):(typeof i=="number"||typeof i=="bigint")&&Or(e,""+i);break;case"onScroll":i!=null&&qt("scroll",e);break;case"onScrollEnd":i!=null&&qt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=rs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uv.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[On]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):$c(e,n,i)}}}function hn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qt("error",e),qt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:fe(e,t,a,r,n,null)}}s&&fe(e,t,"srcSet",n.srcSet,n,null),i&&fe(e,t,"src",n.src,n,null);return;case"input":qt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(et(137,t));break;default:fe(e,t,i,f,n,null)}}dv(e,a,o,l,c,r,s,!1);return;case"select":qt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:fe(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?wr(e,!!i,t,!1):n!=null&&wr(e,!!i,n,!0);return;case"textarea":qt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(et(91));break;default:fe(e,t,r,o,n,null)}mv(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":fe(e,t,l,i,n,null));return;case"dialog":qt("beforetoggle",e),qt("toggle",e),qt("cancel",e),qt("close",e);break;case"iframe":case"object":qt("load",e);break;case"video":case"audio":for(i=0;i<bl.length;i++)qt(bl[i],e);break;case"image":qt("error",e),qt("load",e);break;case"details":qt("toggle",e);break;case"embed":case"source":case"link":qt("error",e),qt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:fe(e,t,c,i,n,null)}return;default:if(dm(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&jp(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&fe(e,t,o,i,n,null))}function gT(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||fe(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":a=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":f=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(et(137,t));break;default:d!==p&&fe(e,t,u,d,i,p)}}Mp(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||fe(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":u=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&fe(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?wr(e,!!n,u,!1):!!i!=!!n&&(t!=null?wr(e,!!n,t,!0):wr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:fe(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":u=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(et(91));break;default:s!==a&&fe(e,t,r,s,i,a)}pv(e,u,d);return;case"option":for(var _ in n)u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:fe(e,t,_,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?e.selected=u&&typeof u!="function"&&typeof u!="symbol":fe(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&fe(e,t,M,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(et(137,t));break;default:fe(e,t,c,u,i,d)}return;default:if(dm(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&jp(e,t,g,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||jp(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&fe(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||fe(e,t,p,u,i,d)}function Dy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _T(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Dy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&Dy(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qp=null,$p=null;function Bu(e){return e.nodeType===9?e:e.ownerDocument}function Ny(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function tm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var up=null;function yT(){var e=window.event;return e&&e.type==="popstate"?e===up?!1:(up=e,!0):(up=null,!1)}var SS=typeof setTimeout=="function"?setTimeout:void 0,vT=typeof clearTimeout=="function"?clearTimeout:void 0,Ly=typeof Promise=="function"?Promise:void 0,xT=typeof queueMicrotask=="function"?queueMicrotask:typeof Ly<"u"?function(e){return Ly.resolve(null).then(e).catch(ST)}:SS;function ST(e){setTimeout(function(){throw e})}function sa(e){return e==="head"}function Uy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),kr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")dl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,dl(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Ll]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&dl(e.ownerDocument.body);n=s}while(n);kr(t)}function Iy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function em(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":em(n),fm(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function MT(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ll])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function bT(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function MS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pi(e.nextSibling),e===null))return null;return e}function nm(e){return e.data==="$?"||e.data==="$~"}function im(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ET(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function pi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var sm=null;function Oy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return pi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Py(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function bS(e,t,n){switch(t=Bu(n),e){case"html":if(e=t.documentElement,!e)throw Error(et(452));return e;case"head":if(e=t.head,!e)throw Error(et(453));return e;case"body":if(e=t.body,!e)throw Error(et(454));return e;default:throw Error(et(451))}}function dl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fm(e)}var mi=new Map,By=new Set;function zu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var gs=ie.d;ie.d={f:TT,r:AT,D:wT,C:CT,L:RT,m:DT,X:LT,S:NT,M:UT};function TT(){var e=gs.f(),t=eh();return e||t}function AT(e){var t=Wr(e);t!==null&&t.tag===5&&t.type==="form"?gx(t):gs.r(e)}var Kr=typeof document>"u"?null:document;function ES(e,t,n){var i=Kr;if(i&&typeof t=="string"&&t){var s=ui(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),By.has(s)||(By.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),hn(t,"link",e),en(t),i.head.appendChild(t)))}}function wT(e){gs.D(e),ES("dns-prefetch",e,null)}function CT(e,t){gs.C(e,t),ES("preconnect",e,t)}function RT(e,t,n){gs.L(e,t,n);var i=Kr;if(i&&e&&t){var s='link[rel="preload"][as="'+ui(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ui(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ui(n.imageSizes)+'"]')):s+='[href="'+ui(e)+'"]';var a=s;switch(t){case"style":a=Gr(e);break;case"script":a=Jr(e)}mi.has(a)||(e=Ae({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),mi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(zl(a))||t==="script"&&i.querySelector(Fl(a))||(t=i.createElement("link"),hn(t,"link",e),en(t),i.head.appendChild(t)))}}function DT(e,t){gs.m(e,t);var n=Kr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ui(i)+'"][href="'+ui(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Jr(e)}if(!mi.has(a)&&(e=Ae({rel:"modulepreload",href:e},t),mi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Fl(a)))return}i=n.createElement("link"),hn(i,"link",e),en(i),n.head.appendChild(i)}}}function NT(e,t,n){gs.S(e,t,n);var i=Kr;if(i&&e){var s=Ar(i).hoistableStyles,a=Gr(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(zl(a)))o.loading=5;else{e=Ae({rel:"stylesheet",href:e,"data-precedence":t},n),(n=mi.get(a))&&jm(e,n);var l=r=i.createElement("link");en(l),hn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,uu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function LT(e,t){gs.X(e,t);var n=Kr;if(n&&e){var i=Ar(n).hoistableScripts,s=Jr(e),a=i.get(s);a||(a=n.querySelector(Fl(s)),a||(e=Ae({src:e,async:!0},t),(t=mi.get(s))&&Qm(e,t),a=n.createElement("script"),en(a),hn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function UT(e,t){gs.M(e,t);var n=Kr;if(n&&e){var i=Ar(n).hoistableScripts,s=Jr(e),a=i.get(s);a||(a=n.querySelector(Fl(s)),a||(e=Ae({src:e,async:!0,type:"module"},t),(t=mi.get(s))&&Qm(e,t),a=n.createElement("script"),en(a),hn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function zy(e,t,n,i){var s=(s=Xs.current)?zu(s):null;if(!s)throw Error(et(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Gr(n.href),n=Ar(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Gr(n.href);var a=Ar(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(zl(e)))&&!a._p&&(r.instance=a,r.state.loading=5),mi.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mi.set(e,n),a||IT(s,e,n,r.state))),t&&i===null)throw Error(et(528,""));return r}if(t&&i!==null)throw Error(et(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Jr(n),n=Ar(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(et(444,e))}}function Gr(e){return'href="'+ui(e)+'"'}function zl(e){return'link[rel="stylesheet"]['+e+"]"}function TS(e){return Ae({},e,{"data-precedence":e.precedence,precedence:null})}function IT(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),hn(t,"link",n),en(t),e.head.appendChild(t))}function Jr(e){return'[src="'+ui(e)+'"]'}function Fl(e){return"script[async]"+e}function Fy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ui(n.href)+'"]');if(i)return t.instance=i,en(i),i;var s=Ae({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),en(i),hn(i,"style",s),uu(i,n.precedence,e),t.instance=i;case"stylesheet":s=Gr(n.href);var a=e.querySelector(zl(s));if(a)return t.state.loading|=4,t.instance=a,en(a),a;i=TS(n),(s=mi.get(s))&&jm(i,s),a=(e.ownerDocument||e).createElement("link"),en(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),hn(a,"link",i),t.state.loading|=4,uu(a,n.precedence,e),t.instance=a;case"script":return a=Jr(n.src),(s=e.querySelector(Fl(a)))?(t.instance=s,en(s),s):(i=n,(s=mi.get(a))&&(i=Ae({},n),Qm(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),en(s),hn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(et(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,uu(i,n.precedence,e));return t.instance}function uu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function jm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Qm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hu=null;function Hy(e,t,n){if(hu===null){var i=new Map,s=hu=new Map;s.set(n,i)}else s=hu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Ll]||a[ln]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Vy(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function OT(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function AS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function PT(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Gr(i.href),a=t.querySelector(zl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Fu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,en(a);return}a=t.ownerDocument||t,i=TS(i),(s=mi.get(s))&&jm(i,s),a=a.createElement("link"),en(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),hn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Fu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var hp=0;function BT(e,t){return e.stylesheets&&e.count===0&&fu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&hp===0&&(hp=62500*_T());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>hp?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Fu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hu=null;function fu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hu=new Map,t.forEach(zT,e),Hu=null,Fu.call(e))}function zT(e,t){if(!(t.state.loading&4)){var n=Hu.get(e);if(n)var i=n.get(null);else{n=new Map,Hu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Fu.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Tl={$$typeof:as,Provider:null,Consumer:null,_currentValue:Da,_currentValue2:Da,_threadCount:0};function FT(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bd(0),this.hiddenUpdates=Bd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function wS(e,t,n,i,s,a,r,o,l,c,f,p){return e=new FT(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=Xn(3,null,null,t),e.current=a,a.stateNode=e,t=Em(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},wm(a),e}function CS(e){return e?(e=Mr,e):Mr}function RS(e,t,n,i,s,a){s=CS(s),i.context===null?i.context=s:i.pendingContext=s,i=qs(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Ys(e,i,t),n!==null&&(In(n,e,t),al(n,e,t))}function Gy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $m(e,t){Gy(e,t),(e=e.alternate)&&Gy(e,t)}function DS(e){if(e.tag===13||e.tag===31){var t=ka(e,67108864);t!==null&&In(t,e,67108864),$m(e,67108864)}}function ky(e){if(e.tag===13||e.tag===31){var t=Kn();t=um(t);var n=ka(e,t);n!==null&&In(n,e,t),$m(e,t)}}var Vu=!0;function HT(e,t,n,i){var s=Ut.T;Ut.T=null;var a=ie.p;try{ie.p=2,tg(e,t,n,i)}finally{ie.p=a,Ut.T=s}}function VT(e,t,n,i){var s=Ut.T;Ut.T=null;var a=ie.p;try{ie.p=8,tg(e,t,n,i)}finally{ie.p=a,Ut.T=s}}function tg(e,t,n,i){if(Vu){var s=am(i);if(s===null)cp(e,t,i,Gu,n),Xy(e,i);else if(kT(s,e,t,n,i))i.stopPropagation();else if(Xy(e,i),t&4&&-1<GT.indexOf(e)){for(;s!==null;){var a=Wr(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=wa(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Zn(r);o.entanglements[1]|=l,r&=~l}Vi(a),(ne&6)===0&&(Nu=qn()+500,Bl(0,!1))}}break;case 31:case 13:o=ka(a,2),o!==null&&In(o,a,2),eh(),$m(a,2)}if(a=am(i),a===null&&cp(e,t,i,Gu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else cp(e,t,i,null,n)}}function am(e){return e=pm(e),eg(e)}var Gu=null;function eg(e){if(Gu=null,e=gr(e),e!==null){var t=Cl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Jy(t),e!==null)return e;e=null}else if(n===31){if(e=jy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Gu=e,null}function NS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(R1()){case ev:return 2;case nv:return 8;case _u:case D1:return 32;case iv:return 268435456;default:return 32}default:return 32}}var rm=!1,Js=null,js=null,Qs=null,Al=new Map,wl=new Map,zs=[],GT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xy(e,t){switch(e){case"focusin":case"focusout":Js=null;break;case"dragenter":case"dragleave":js=null;break;case"mouseover":case"mouseout":Qs=null;break;case"pointerover":case"pointerout":Al.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(t.pointerId)}}function Zo(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Wr(t),t!==null&&DS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function kT(e,t,n,i,s){switch(t){case"focusin":return Js=Zo(Js,e,t,n,i,s),!0;case"dragenter":return js=Zo(js,e,t,n,i,s),!0;case"mouseover":return Qs=Zo(Qs,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Al.set(a,Zo(Al.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,wl.set(a,Zo(wl.get(a)||null,e,t,n,i,s)),!0}return!1}function LS(e){var t=gr(e.target);if(t!==null){var n=Cl(t);if(n!==null){if(t=n.tag,t===13){if(t=Jy(n),t!==null){e.blockedOn=t,w_(e.priority,function(){ky(n)});return}}else if(t===31){if(t=jy(n),t!==null){e.blockedOn=t,w_(e.priority,function(){ky(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function du(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=am(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ep=i,n.target.dispatchEvent(i),Ep=null}else return t=Wr(n),t!==null&&DS(t),e.blockedOn=n,!1;t.shift()}return!0}function Wy(e,t,n){du(e)&&n.delete(t)}function XT(){rm=!1,Js!==null&&du(Js)&&(Js=null),js!==null&&du(js)&&(js=null),Qs!==null&&du(Qs)&&(Qs=null),Al.forEach(Wy),wl.forEach(Wy)}function jc(e,t){e.blockedOn===t&&(e.blockedOn=null,rm||(rm=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,XT)))}var Qc=null;function qy(e){Qc!==e&&(Qc=e,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,function(){Qc===e&&(Qc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(eg(i||n)===null)continue;break}var a=Wr(n);a!==null&&(e.splice(t,3),t-=3,Hp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function kr(e){function t(l){return jc(l,e)}Js!==null&&jc(Js,e),js!==null&&jc(js,e),Qs!==null&&jc(Qs,e),Al.forEach(t),wl.forEach(t);for(var n=0;n<zs.length;n++){var i=zs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<zs.length&&(n=zs[0],n.blockedOn===null);)LS(n),n.blockedOn===null&&zs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[On]||null;if(typeof a=="function")r||qy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[On]||null)o=r.formAction;else if(eg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),qy(n)}}}function US(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function ng(e){this._internalRoot=e}sh.prototype.render=ng.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(et(409));var n=t.current,i=Kn();RS(n,i,e,t,null,null)};sh.prototype.unmount=ng.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;RS(e.current,2,null,e,null,null),eh(),t[Xr]=null}};function sh(e){this._internalRoot=e}sh.prototype.unstable_scheduleHydration=function(e){if(e){var t=lv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zs.length&&t!==0&&t<zs[n].priority;n++);zs.splice(n,0,e),n===0&&LS(e)}};var Yy=Zy.version;if(Yy!=="19.2.6")throw Error(et(527,Yy,"19.2.6"));ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(et(188)):(e=Object.keys(e).join(","),Error(et(268,e)));return e=M1(t),e=e!==null?Qy(e):null,e=e===null?null:e.stateNode,e};var WT={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:Ut,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ko.isDisabled&&Ko.supportsFiber))try{Rl=Ko.inject(WT),Yn=Ko}catch{}var Ko;ah.createRoot=function(e,t){if(!Ky(e))throw Error(et(299));var n=!1,i="",s=Ex,a=Tx,r=Ax;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=wS(e,1,!1,null,null,n,i,null,s,a,r,US),e[Xr]=t.current,Jm(e),new ng(t)};ah.hydrateRoot=function(e,t,n){if(!Ky(e))throw Error(et(299));var i=!1,s="",a=Ex,r=Tx,o=Ax,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=wS(e,1,!0,t,n??null,i,s,l,a,r,o,US),t.context=CS(null),n=t.current,i=Kn(),i=um(i),s=qs(i),s.callback=null,Ys(n,s,i),n=i,t.current.lanes=n,Nl(t,n),Vi(t),e[Xr]=t.current,Jm(e),new sh(t)};ah.version="19.2.6"});var BS=Ii((rD,PS)=>{"use strict";function OS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(OS)}catch(e){console.error(e)}}OS(),PS.exports=IS()});var FS=Ii(rh=>{"use strict";var qT=Symbol.for("react.transitional.element"),YT=Symbol.for("react.fragment");function zS(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:qT,type:e,key:i,ref:t!==void 0?t:null,props:n}}rh.Fragment=YT;rh.jsx=zS;rh.jsxs=zS});var Hl=Ii((lD,HS)=>{"use strict";HS.exports=FS()});function ZT(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function KT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Jl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function jM(){let e=Jl("canvas");return e.style.display="block",e}function s0(...e){let t="THREE."+e.shift();go?go("log",t,...e):console.log(t,...e)}function QM(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Rt(...e){e=QM(e);let t="THREE."+e.shift();if(go)go("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Lt(...e){e=QM(e);let t="THREE."+e.shift();if(go)go("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ka(...e){let t=e.join(" ");t in VS||(VS[t]=!0,Rt(...e))}function $M(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}function Io(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[e&255]+_n[e>>8&255]+_n[e>>16&255]+_n[e>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function Gt(e,t,n){return Math.max(t,Math.min(n,e))}function a0(e,t){return(e%t+t)%t}function JT(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function jT(e,t,n){return e!==t?(n-e)/(t-e):0}function ql(e,t,n){return(1-n)*e+n*t}function QT(e,t,n,i){return ql(e,t,1-Math.exp(-n*i))}function $T(e,t=1){return t-Math.abs(a0(e,t*2)-t)}function tA(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function eA(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function nA(e,t){return e+Math.floor(Math.random()*(t-e+1))}function iA(e,t){return e+Math.random()*(t-e)}function sA(e){return e*(.5-Math.random())}function aA(e){e!==void 0&&(GS=e);let t=GS+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rA(e){return e*ho}function oA(e){return e*_o}function lA(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function cA(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function uA(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function hA(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),f=r((t+i)/2),p=a((t-i)/2),u=r((t-i)/2),d=a((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":e.set(o*f,l*p,l*u,o*c);break;case"YZY":e.set(l*u,o*f,l*p,o*c);break;case"ZXZ":e.set(l*p,l*u,o*f,o*c);break;case"XZX":e.set(o*f,l*_,l*d,o*c);break;case"YXY":e.set(l*d,o*f,l*_,o*c);break;case"ZYZ":e.set(l*_,l*d,o*f,o*c);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function uo(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function An(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function fA(){let e={enabled:!0,workingColorSpace:Zl,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===re&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===re&&(s.r=fo(s.r),s.g=fo(s.g),s.b=fo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===As?Kl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Ka("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Ka("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Zl]:{primaries:t,whitePoint:i,transfer:Kl,toXYZ:XS,fromXYZ:WS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:t,whitePoint:i,transfer:re,toXYZ:XS,fromXYZ:WS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),e}function bs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function fo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function ag(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Wh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}function lg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function gg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){qa.fromArray(e,a);let o=s.x*Math.abs(qa.x)+s.y*Math.abs(qa.y)+s.z*Math.abs(qa.z),l=t.dot(qa),c=n.dot(qa),f=i.dot(qa);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}function CA(e,t,n,i,s,a,r,o){let l;if(t.side===Cn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===ya,o),l===null)return null;Sh.copy(o),Sh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Sh);return c<n.near||c>n.far?null:{distance:c,point:Sh.clone(),object:e}}function Mh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,_h),e.getVertexPosition(l,yh),e.getVertexPosition(c,vh);let f=CA(e,t,n,i,_h,yh,vh,nM);if(f){let p=new I;Ms.getBarycoord(nM,_h,yh,vh,p),s&&(f.uv=Ms.getInterpolatedAttribute(s,o,l,c,p,new Dt)),a&&(f.uv1=Ms.getInterpolatedAttribute(a,o,l,c,p,new Dt)),r&&(f.normal=Ms.getInterpolatedAttribute(r,o,l,c,p,new I),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};Ms.getNormal(_h,yh,vh,u.normal),f.face=u,f.barycoord=p}return f}function Th(e,t,n,i,s,a,r){let o=e.geometry.attributes.position;if(Kh.fromBufferAttribute(o,s),Jh.fromBufferAttribute(o,a),n.distanceSqToSegment(Kh,Jh,Mg,sM)>i)return;Mg.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Mg);if(!(c<t.near||c>t.far))return{distance:c,point:sM.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}function lM(e,t,n,i,s,a,r){let o=Dg.distanceSqToPoint(e);if(o<n){let l=new I;Dg.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}function tr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(cM(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(cM(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Sn(e){let t={};for(let n=0;n<e.length;n++){let i=tr(e[n]);for(let s in i)t[s]=i[s]}return t}function cM(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function DA(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function o0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}function oo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Eg(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function ib(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function UA(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function IA(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=ib(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=UA(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}function uM(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}function gM(e,t){return e.distance-t.distance}function Ug(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)Ug(a[r],t,n,!0)}}function u0(e,t,n,i){let s=kA(i);switch(n){case t0:return e*t;case n0:return e*t/s.components*s.byteLength;case bf:return e*t/s.components*s.byteLength;case Ma:return e*t*2/s.components*s.byteLength;case Ef:return e*t*2/s.components*s.byteLength;case e0:return e*t*3/s.components*s.byteLength;case _i:return e*t*4/s.components*s.byteLength;case Tf:return e*t*4/s.components*s.byteLength;case _c:case yc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case vc:case xc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wf:case Rf:return Math.max(e,16)*Math.max(t,8)/4;case Af:case Cf:return Math.max(e,8)*Math.max(t,8)/2;case Df:case Nf:case Uf:case If:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Lf:case Sc:case Of:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Bf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case zf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ff:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Hf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Vf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Gf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case kf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Xf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Wf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case qf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Yf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Zf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Kf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Jf:case jf:case Qf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case $f:case td:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Mc:case ed:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kA(e){switch(e){case Hn:case Jg:return{byteLength:1,components:1};case Lo:case jg:case Di:return{byteLength:2,components:1};case Sf:case Mf:return{byteLength:2,components:4};case Ci:case xf:case Ri:return{byteLength:4,components:1};case Qg:case $g:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}var ga,_a,_M,Og,yM,pc,vM,Do,ya,Cn,Yi,Zi,No,Pg,Bg,zg,xM,Qa,SM,MM,bM,EM,TM,AM,wM,CM,Fg,Hg,RM,DM,NM,LM,UM,IM,OM,PM,BM,Oh,Ph,Bh,po,zh,Fh,Hh,Vh,Vg,zM,FM,wi,Gg,kg,Xg,Wg,qg,Yg,Zg,Kg,va,$a,_f,yf,mc,Gh,ki,kh,an,HM,gc,fn,vf,xa,Hn,Jg,jg,Lo,xf,Ci,Ri,Di,Sf,Mf,Uo,Qg,$g,t0,e0,_i,Wi,Sa,n0,bf,Ma,Ef,Tf,_c,yc,vc,xc,Af,wf,Cf,Rf,Df,Nf,Lf,Uf,If,Sc,Of,Pf,Bf,zf,Ff,Hf,Vf,Gf,kf,Xf,Wf,qf,Yf,Zf,Kf,Jf,jf,Qf,$f,td,Mc,ed,Yl,Xh,Uh,Ag,wg,Cg,Rg,VM,nd,GM,As,wn,Zl,Kl,re,Ih,kM,XM,WM,qM,id,YM,ZM,sd,KM,JM,i0,Ti,mo,VS,go,tb,Ai,_n,GS,ho,_o,r0,h0,Dt,ei,f0,I,ig,kS,d0,It,sg,XS,WS,Jt,jr,Wh,dA,yo,pA,rg,zn,p0,Ne,qh,Fn,jl,Yh,gf,Se,Qr,Mi,mA,gA,aa,oh,Qn,qS,YS,Es,vo,_A,ZS,$r,_s,lh,Vl,yA,vA,KS,JS,jS,QS,xA,to,og,dn,Xi,SA,xo,eb,ra,ch,kt,yn,Ql,bi,ys,cg,vs,eo,no,$S,ug,hg,fg,dg,pg,mg,Ms,ua,xs,Ei,uh,io,so,ao,oa,la,Wa,Gl,hh,fh,qa,qe,dh,MA,Bn,$l,tc,Fe,bA,kl,_g,ha,EA,gi,yg,ro,$n,Xl,sn,rn,vg,TA,AA,ti,wA,qi,Ss,xg,ph,mh,Ts,Ja,tM,Ya,gh,eM,_h,yh,vh,Sg,xh,nM,Sh,xn,Zh,Za,RA,bh,So,ja,Kh,Jh,iM,Wl,Eh,Mg,sM,Mo,aM,rM,ec,bo,oM,Dg,Ah,wh,nc,ic,fa,jh,sc,Eo,Qh,Ch,Rh,bg,Dh,ac,To,rc,oc,nb,NA,LA,ni,$h,Ao,tf,ef,da,nf,sf,af,rf,ii,pa,of,lf,cf,lc,ma,uf,hf,sb,ff,cc,Tg,hM,fM,df,Nh,Lh,Gi,uc,ca,dM,pM,vn,wo,Ng,Co,hc,lo,co,pf,mf,l0,OA,c0,PA,BA,zA,FA,HA,VA,GA,Lg,we,cD,mM,fc,Ro,m0,Ig,dc,g0=Rc(()=>{ga={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_a={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_M=0,Og=1,yM=2,pc=1,vM=2,Do=3,ya=0,Cn=1,Yi=2,Zi=0,No=1,Pg=2,Bg=3,zg=4,xM=5,Qa=100,SM=101,MM=102,bM=103,EM=104,TM=200,AM=201,wM=202,CM=203,Fg=204,Hg=205,RM=206,DM=207,NM=208,LM=209,UM=210,IM=211,OM=212,PM=213,BM=214,Oh=0,Ph=1,Bh=2,po=3,zh=4,Fh=5,Hh=6,Vh=7,Vg=0,zM=1,FM=2,wi=0,Gg=1,kg=2,Xg=3,Wg=4,qg=5,Yg=6,Zg=7,Kg=300,va=301,$a=302,_f=303,yf=304,mc=306,Gh=1e3,ki=1001,kh=1002,an=1003,HM=1004,gc=1005,fn=1006,vf=1007,xa=1008,Hn=1009,Jg=1010,jg=1011,Lo=1012,xf=1013,Ci=1014,Ri=1015,Di=1016,Sf=1017,Mf=1018,Uo=1020,Qg=35902,$g=35899,t0=1021,e0=1022,_i=1023,Wi=1026,Sa=1027,n0=1028,bf=1029,Ma=1030,Ef=1031,Tf=1033,_c=33776,yc=33777,vc=33778,xc=33779,Af=35840,wf=35841,Cf=35842,Rf=35843,Df=36196,Nf=37492,Lf=37496,Uf=37488,If=37489,Sc=37490,Of=37491,Pf=37808,Bf=37809,zf=37810,Ff=37811,Hf=37812,Vf=37813,Gf=37814,kf=37815,Xf=37816,Wf=37817,qf=37818,Yf=37819,Zf=37820,Kf=37821,Jf=36492,jf=36494,Qf=36495,$f=36283,td=36284,Mc=36285,ed=36286,Yl=2300,Xh=2301,Uh=2302,Ag=2303,wg=2400,Cg=2401,Rg=2402,VM=3200,nd=0,GM=1,As="",wn="srgb",Zl="srgb-linear",Kl="linear",re="srgb",Ih=7680,kM=519,XM=512,WM=513,qM=514,id=515,YM=516,ZM=517,sd=518,KM=519,JM=35044,i0="300 es",Ti=2e3,mo=2001;VS={},go=null;tb={[Oh]:Ph,[Bh]:Hh,[zh]:Vh,[po]:Fh,[Ph]:Oh,[Hh]:Bh,[Vh]:zh,[Fh]:po},Ai=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],GS=1234567,ho=Math.PI/180,_o=180/Math.PI;r0={DEG2RAD:ho,RAD2DEG:_o,generateUUID:Io,clamp:Gt,euclideanModulo:a0,mapLinear:JT,inverseLerp:jT,lerp:ql,damp:QT,pingpong:$T,smoothstep:tA,smootherstep:eA,randInt:nA,randFloat:iA,randFloatSpread:sA,seededRandom:aA,degToRad:rA,radToDeg:oA,isPowerOfTwo:lA,ceilPowerOfTwo:cA,floorPowerOfTwo:uA,setQuaternionFromProperEuler:hA,normalize:An,denormalize:uo},h0=class h0{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Gt(this.x,t.x,n.x),this.y=Gt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Gt(this.x,t,n),this.y=Gt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};h0.prototype.isVector2=!0;Dt=h0,ei=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],_=a[r+2],M=a[r+3];if(p!==M||l!==u||c!==d||f!==_){let g=l*u+c*d+f*_+p*M;g<0&&(u=-u,d=-d,_=-_,M=-M,g=-g);let h=1-o;if(g<.9995){let m=Math.acos(g),S=Math.sin(m);h=Math.sin(h*m)/S,o=Math.sin(o*m)/S,l=l*h+u*o,c=c*h+d*o,f=f*h+_*o,p=p*h+M*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+_*o,p=p*h+M*o;let m=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=m,c*=m,f*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],_=a[r+3];return t[n]=o*_+f*p+l*d-c*u,t[n+1]=l*_+f*u+c*p-o*d,t[n+2]=c*_+f*d+o*u-l*p,t[n+3]=f*_-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p-u*d*_;break;case"YXZ":this._x=u*f*p+c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p+u*d*_;break;case"ZXY":this._x=u*f*p-c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p-u*d*_;break;case"ZYX":this._x=u*f*p-c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p+u*d*_;break;case"YZX":this._x=u*f*p+c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p-u*d*_;break;case"XZY":this._x=u*f*p-c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p+u*d*_;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},f0=class f0{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(kS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(kS.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Gt(this.x,t.x,n.x),this.y=Gt(this.y,t.y,n.y),this.z=Gt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Gt(this.x,t,n),this.y=Gt(this.y,t,n),this.z=Gt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ig.copy(this).projectOnVector(t),this.sub(ig)}reflect(t){return this.sub(ig.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};f0.prototype.isVector3=!0;I=f0,ig=new I,kS=new ei,d0=class d0{constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],_=i[8],M=s[0],g=s[3],h=s[6],m=s[1],S=s[4],y=s[7],E=s[2],T=s[5],w=s[8];return a[0]=r*M+o*m+l*E,a[3]=r*g+o*S+l*T,a[6]=r*h+o*y+l*w,a[1]=c*M+f*m+p*E,a[4]=c*g+f*S+p*T,a[7]=c*h+f*y+p*w,a[2]=u*M+d*m+_*E,a[5]=u*g+d*S+_*T,a[8]=u*h+d*y+_*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,_=n*p+i*u+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=p*M,t[1]=(s*c-f*i)*M,t[2]=(o*i-s*r)*M,t[3]=u*M,t[4]=(f*n-s*l)*M,t[5]=(s*a-o*n)*M,t[6]=d*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*a)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Ka("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sg.makeScale(t,n)),this}rotate(t){return Ka("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sg.makeRotation(-t)),this}translate(t,n){return Ka("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};d0.prototype.isMatrix3=!0;It=d0,sg=new It,XS=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),WS=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt=fA();Wh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{jr===void 0&&(jr=Jl("canvas")),jr.width=t.width,jr.height=t.height;let s=jr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=jr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Jl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=bs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bs(n[i]/255)*255):n[i]=bs(n[i]);return{data:n,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dA=0,yo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=Io(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ag(s[r].image)):a.push(ag(s[r]))}else a=ag(s);i.url=a}return n||(t.images[this.uuid]=i),i}};pA=0,rg=new I,zn=class e extends Ai{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ki,s=ki,a=fn,r=xa,o=_i,l=Hn,c=e.DEFAULT_ANISOTROPY,f=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pA++}),this.uuid=Io(),this.name="",this.source=new yo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rg).x}get height(){return this.source.getSize(rg).y}get depth(){return this.source.getSize(rg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Rt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Rt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gh:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case kh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gh:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case kh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Kg;zn.DEFAULT_ANISOTROPY=1;p0=class p0{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],_=l[9],M=l[2],g=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,y=(d+1)/2,E=(h+1)/2,T=(f+u)/4,w=(p+M)/4,x=(_+g)/4;return S>y&&S>E?S<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(S),s=T/i,a=w/i):y>E?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=T/s,a=x/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=w/a,s=x/a),this.set(i,s,a,n),this}let m=Math.sqrt((g-_)*(g-_)+(p-M)*(p-M)+(u-f)*(u-f));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(p-M)/m,this.z=(u-f)/m,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Gt(this.x,t.x,n.x),this.y=Gt(this.y,t.y,n.y),this.z=Gt(this.z,t.z,n.z),this.w=Gt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Gt(this.x,t,n),this.y=Gt(this.y,t,n),this.z=Gt(this.z,t,n),this.w=Gt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};p0.prototype.isVector4=!0;Ne=p0,qh=class extends Ai{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ne(0,0,t,n),this.scissorTest=!1,this.viewport=new Ne(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new zn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new yo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends qh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},jl=class extends zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Yh=class extends zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},gf=class gf{constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,_,M,g)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,_,M,g){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=_,h[11]=M,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gf().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Qr.setFromMatrixColumn(t,0).length(),a=1/Qr.setFromMatrixColumn(t,1).length(),r=1/Qr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,_=o*f,M=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+_*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=_+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,_=c*f,M=c*p;n[0]=u+M*o,n[4]=_*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-_,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,_=c*f,M=c*p;n[0]=u-M*o,n[4]=-r*p,n[8]=_+d*o,n[1]=d+_*o,n[5]=r*f,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,_=o*f,M=o*p;n[0]=l*f,n[4]=_*c-d,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=d*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,_=o*l,M=o*c;n[0]=l*f,n[4]=M-u*p,n[8]=_*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+_,n[10]=u-M*p}else if(t.order==="XZY"){let u=r*l,d=r*c,_=o*l,M=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+M,n[5]=r*f,n[9]=d*p-_,n[2]=_*p-d,n[6]=o*f,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mA,t,gA)}lookAt(t,n,i){let s=this.elements;return Qn.subVectors(t,n),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),aa.crossVectors(i,Qn),aa.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),aa.crossVectors(i,Qn)),aa.normalize(),oh.crossVectors(Qn,aa),s[0]=aa.x,s[4]=oh.x,s[8]=Qn.x,s[1]=aa.y,s[5]=oh.y,s[9]=Qn.y,s[2]=aa.z,s[6]=oh.z,s[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],_=i[2],M=i[6],g=i[10],h=i[14],m=i[3],S=i[7],y=i[11],E=i[15],T=s[0],w=s[4],x=s[8],A=s[12],R=s[1],U=s[5],F=s[9],q=s[13],O=s[2],k=s[6],Q=s[10],B=s[14],j=s[3],X=s[7],Z=s[11],nt=s[15];return a[0]=r*T+o*R+l*O+c*j,a[4]=r*w+o*U+l*k+c*X,a[8]=r*x+o*F+l*Q+c*Z,a[12]=r*A+o*q+l*B+c*nt,a[1]=f*T+p*R+u*O+d*j,a[5]=f*w+p*U+u*k+d*X,a[9]=f*x+p*F+u*Q+d*Z,a[13]=f*A+p*q+u*B+d*nt,a[2]=_*T+M*R+g*O+h*j,a[6]=_*w+M*U+g*k+h*X,a[10]=_*x+M*F+g*Q+h*Z,a[14]=_*A+M*q+g*B+h*nt,a[3]=m*T+S*R+y*O+E*j,a[7]=m*w+S*U+y*k+E*X,a[11]=m*x+S*F+y*Q+E*Z,a[15]=m*A+S*q+y*B+E*nt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],_=t[3],M=t[7],g=t[11],h=t[15],m=l*d-c*u,S=o*d-c*p,y=o*u-l*p,E=r*d-c*f,T=r*u-l*f,w=r*p-o*f;return n*(M*m-g*S+h*y)-i*(_*m-g*E+h*T)+s*(_*S-M*E+h*w)-a*(_*y-M*T+g*w)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],_=t[12],M=t[13],g=t[14],h=t[15],m=n*o-i*r,S=n*l-s*r,y=n*c-a*r,E=i*l-s*o,T=i*c-a*o,w=s*c-a*l,x=f*M-p*_,A=f*g-u*_,R=f*h-d*_,U=p*g-u*M,F=p*h-d*M,q=u*h-d*g,O=m*q-S*F+y*U+E*R-T*A+w*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return t[0]=(o*q-l*F+c*U)*k,t[1]=(s*F-i*q-a*U)*k,t[2]=(M*w-g*T+h*E)*k,t[3]=(u*T-p*w-d*E)*k,t[4]=(l*R-r*q-c*A)*k,t[5]=(n*q-s*R+a*A)*k,t[6]=(g*y-_*w-h*S)*k,t[7]=(f*w-u*y+d*S)*k,t[8]=(r*F-o*R+c*x)*k,t[9]=(i*R-n*F-a*x)*k,t[10]=(_*T-M*y+h*m)*k,t[11]=(p*y-f*T-d*m)*k,t[12]=(o*A-r*U-l*x)*k,t[13]=(n*U-i*A+s*x)*k,t[14]=(M*S-_*E-g*m)*k,t[15]=(f*E-p*S+u*m)*k,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,_=a*p,M=r*f,g=r*p,h=o*p,m=l*c,S=l*f,y=l*p,E=i.x,T=i.y,w=i.z;return s[0]=(1-(M+h))*E,s[1]=(d+y)*E,s[2]=(_-S)*E,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(u+h))*T,s[6]=(g+m)*T,s[7]=0,s[8]=(_+S)*w,s[9]=(g-m)*w,s[10]=(1-(u+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Qr.set(s[0],s[1],s[2]).length(),o=Qr.set(s[4],s[5],s[6]).length(),l=Qr.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Mi.copy(this);let c=1/r,f=1/o,p=1/l;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=f,Mi.elements[5]*=f,Mi.elements[6]*=f,Mi.elements[8]*=p,Mi.elements[9]*=p,Mi.elements[10]*=p,n.setFromRotationMatrix(Mi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Ti,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),_,M;if(l)_=a/(r-a),M=r*a/(r-a);else if(o===Ti)_=-(r+a)/(r-a),M=-2*r*a/(r-a);else if(o===mo)_=-r/(r-a),M=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ti,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),_,M;if(l)_=1/(r-a),M=r/(r-a);else if(o===Ti)_=-2/(r-a),M=-(r+a)/(r-a);else if(o===mo)_=-1/(r-a),M=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};gf.prototype.isMatrix4=!0;Se=gf,Qr=new I,Mi=new Se,mA=new I(0,0,0),gA=new I(1,1,1),aa=new I,oh=new I,Qn=new I,qS=new Se,YS=new ei,Es=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Gt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return qS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qS,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return YS.setFromEuler(this),this.setFromQuaternion(YS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Es.DEFAULT_ORDER="XYZ";vo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_A=0,ZS=new I,$r=new ei,_s=new Se,lh=new I,Vl=new I,yA=new I,vA=new ei,KS=new I(1,0,0),JS=new I(0,1,0),jS=new I(0,0,1),QS={type:"added"},xA={type:"removed"},to={type:"childadded",child:null},og={type:"childremoved",child:null},dn=class e extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_A++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new I,n=new Es,i=new ei,s=new I(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new It}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return $r.setFromAxisAngle(t,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(t,n){return $r.setFromAxisAngle(t,n),this.quaternion.premultiply($r),this}rotateX(t){return this.rotateOnAxis(KS,t)}rotateY(t){return this.rotateOnAxis(JS,t)}rotateZ(t){return this.rotateOnAxis(jS,t)}translateOnAxis(t,n){return ZS.copy(t).applyQuaternion(this.quaternion),this.position.add(ZS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(KS,t)}translateY(t){return this.translateOnAxis(JS,t)}translateZ(t){return this.translateOnAxis(jS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_s.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?lh.copy(t):lh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_s.lookAt(Vl,lh,this.up):_s.lookAt(lh,Vl,this.up),this.quaternion.setFromRotationMatrix(_s),s&&(_s.extractRotation(s.matrixWorld),$r.setFromRotationMatrix(_s),this.quaternion.premultiply($r.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(QS),to.child=t,this.dispatchEvent(to),to.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(xA),og.child=t,this.dispatchEvent(og),og.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_s.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_s.multiply(t.parent.matrixWorld)),t.applyMatrix4(_s),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(QS),to.child=t,this.dispatchEvent(to),to.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,t,yA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,vA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new I(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Xi=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},SA={type:"move"},xo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let M of t.hand.values()){let g=n.getJointPose(M,i),h=this._getHandJoint(c,M);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(SA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Xi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},eb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ra={h:0,s:0,l:0},ch={h:0,s:0,l:0};kt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Jt.workingColorSpace){if(t=a0(t,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=lg(r,a,t+1/3),this.g=lg(r,a,t),this.b=lg(r,a,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,n=wn){function i(a){a!==void 0&&parseFloat(a)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=wn){let i=eb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return Jt.workingToColorSpace(yn.copy(this),t),Math.round(Gt(yn.r*255,0,255))*65536+Math.round(Gt(yn.g*255,0,255))*256+Math.round(Gt(yn.b*255,0,255))}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.workingToColorSpace(yn.copy(this),n);let i=yn.r,s=yn.g,a=yn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Jt.workingColorSpace){return Jt.workingToColorSpace(yn.copy(this),n),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=wn){Jt.workingToColorSpace(yn.copy(this),t);let n=yn.r,i=yn.g,s=yn.b;return t!==wn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ra),this.setHSL(ra.h+t,ra.s+n,ra.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ra),t.getHSL(ch);let i=ql(ra.h,ch.h,n),s=ql(ra.s,ch.s,n),a=ql(ra.l,ch.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new kt;kt.NAMES=eb;Ql=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Es,this.environmentIntensity=1,this.environmentRotation=new Es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},bi=new I,ys=new I,cg=new I,vs=new I,eo=new I,no=new I,$S=new I,ug=new I,hg=new I,fg=new I,dg=new Ne,pg=new Ne,mg=new Ne,Ms=class e{constructor(t=new I,n=new I,i=new I){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),bi.subVectors(t,n),s.cross(bi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){bi.subVectors(s,n),ys.subVectors(i,n),cg.subVectors(t,n);let r=bi.dot(bi),o=bi.dot(ys),l=bi.dot(cg),c=ys.dot(ys),f=ys.dot(cg),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,_=(r*f-o*l)*u;return a.set(1-d-_,_,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,vs)===null?!1:vs.x>=0&&vs.y>=0&&vs.x+vs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,vs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,vs.x),l.addScaledVector(r,vs.y),l.addScaledVector(o,vs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return dg.setScalar(0),pg.setScalar(0),mg.setScalar(0),dg.fromBufferAttribute(t,n),pg.fromBufferAttribute(t,i),mg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(dg,a.x),r.addScaledVector(pg,a.y),r.addScaledVector(mg,a.z),r}static isFrontFacing(t,n,i,s){return bi.subVectors(i,n),ys.subVectors(t,n),bi.cross(ys).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),ys.subVectors(this.a,this.b),bi.cross(ys).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;eo.subVectors(s,i),no.subVectors(a,i),ug.subVectors(t,i);let l=eo.dot(ug),c=no.dot(ug);if(l<=0&&c<=0)return n.copy(i);hg.subVectors(t,s);let f=eo.dot(hg),p=no.dot(hg);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(eo,r);fg.subVectors(t,a);let d=eo.dot(fg),_=no.dot(fg);if(_>=0&&d<=_)return n.copy(a);let M=d*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(no,o);let g=f*_-d*p;if(g<=0&&p-f>=0&&d-_>=0)return $S.subVectors(a,s),o=(p-f)/(p-f+(d-_)),n.copy(s).addScaledVector($S,o);let h=1/(g+M+u);return r=M*h,o=u*h,n.copy(i).addScaledVector(eo,r).addScaledVector(no,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ua=class{constructor(t=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ei.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ei.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ei.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ei):Ei.fromBufferAttribute(a,r),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uh.copy(i.boundingBox)),uh.applyMatrix4(t.matrixWorld),this.union(uh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gl),hh.subVectors(this.max,Gl),io.subVectors(t.a,Gl),so.subVectors(t.b,Gl),ao.subVectors(t.c,Gl),oa.subVectors(so,io),la.subVectors(ao,so),Wa.subVectors(io,ao);let n=[0,-oa.z,oa.y,0,-la.z,la.y,0,-Wa.z,Wa.y,oa.z,0,-oa.x,la.z,0,-la.x,Wa.z,0,-Wa.x,-oa.y,oa.x,0,-la.y,la.x,0,-Wa.y,Wa.x,0];return!gg(n,io,so,ao,hh)||(n=[1,0,0,0,1,0,0,0,1],!gg(n,io,so,ao,hh))?!1:(fh.crossVectors(oa,la),n=[fh.x,fh.y,fh.z],gg(n,io,so,ao,hh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xs=[new I,new I,new I,new I,new I,new I,new I,new I],Ei=new I,uh=new ua,io=new I,so=new I,ao=new I,oa=new I,la=new I,Wa=new I,Gl=new I,hh=new I,fh=new I,qa=new I;qe=new I,dh=new Dt,MA=0,Bn=class extends Ai{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=JM,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)dh.fromBufferAttribute(this,n),dh.applyMatrix3(t),this.setXY(n,dh.x,dh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyMatrix3(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyMatrix4(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyNormalMatrix(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.transformDirection(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=uo(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=An(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=uo(n,this.array)),n}setX(t,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=uo(n,this.array)),n}setY(t,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=uo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=uo(n,this.array)),n}setW(t,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array),s=An(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array),s=An(s,this.array),a=An(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},$l=class extends Bn{constructor(t,n,i){super(new Uint16Array(t),n,i)}},tc=class extends Bn{constructor(t,n,i){super(new Uint32Array(t),n,i)}},Fe=class extends Bn{constructor(t,n,i){super(new Float32Array(t),n,i)}},bA=new ua,kl=new I,_g=new I,ha=class{constructor(t=new I,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):bA.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kl.subVectors(t,this.center);let n=kl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(kl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_g.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kl.copy(t.center).add(_g)),this.expandByPoint(kl.copy(t.center).sub(_g))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},EA=0,gi=new Se,yg=new dn,ro=new I,$n=new ua,Xl=new ua,sn=new I,rn=class e extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EA++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ZT(t)?tc:$l)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new It().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,n,i){return gi.makeTranslation(t,n,i),this.applyMatrix4(gi),this}scale(t,n,i){return gi.makeScale(t,n,i),this.applyMatrix4(gi),this}lookAt(t){return yg.lookAt(t),yg.updateMatrix(),this.applyMatrix4(yg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Fe(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];$n.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if($n.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Xl.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors($n.min,Xl.min),$n.expandByPoint(sn),sn.addVectors($n.max,Xl.max),$n.expandByPoint(sn)):($n.expandByPoint(Xl.min),$n.expandByPoint(Xl.max))}$n.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)sn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(sn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)sn.fromBufferAttribute(o,c),l&&(ro.fromBufferAttribute(t,c),sn.add(ro)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Bn(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new I,l[x]=new I;let c=new I,f=new I,p=new I,u=new Dt,d=new Dt,_=new Dt,M=new I,g=new I;function h(x,A,R){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,A),p.fromBufferAttribute(i,R),u.fromBufferAttribute(a,x),d.fromBufferAttribute(a,A),_.fromBufferAttribute(a,R),f.sub(c),p.sub(c),d.sub(u),_.sub(u);let U=1/(d.x*_.y-_.x*d.y);isFinite(U)&&(M.copy(f).multiplyScalar(_.y).addScaledVector(p,-d.y).multiplyScalar(U),g.copy(p).multiplyScalar(d.x).addScaledVector(f,-_.x).multiplyScalar(U),o[x].add(M),o[A].add(M),o[R].add(M),l[x].add(g),l[A].add(g),l[R].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let x=0,A=m.length;x<A;++x){let R=m[x],U=R.start,F=R.count;for(let q=U,O=U+F;q<O;q+=3)h(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let S=new I,y=new I,E=new I,T=new I;function w(x){E.fromBufferAttribute(s,x),T.copy(E);let A=o[x];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),y.crossVectors(T,A);let U=y.dot(l[x])<0?-1:1;r.setXYZW(x,S.x,S.y,S.z,U)}for(let x=0,A=m.length;x<A;++x){let R=m[x],U=R.start,F=R.count;for(let q=U,O=U+F;q<O;q+=3)w(t.getX(q+0)),w(t.getX(q+1)),w(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new I,a=new I,r=new I,o=new I,l=new I,c=new I,f=new I,p=new I;if(t)for(let u=0,d=t.count;u<d;u+=3){let _=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,M),r.fromBufferAttribute(n,g),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)sn.fromBufferAttribute(t,n),sn.normalize(),t.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,_=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*f;for(let h=0;h<f;h++)u[_++]=c[d++]}return new Bn(u,f,p)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},vg=new I,TA=new I,AA=new It,ti=class{constructor(t=new I(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=vg.subVectors(i,n).cross(TA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(vg),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||AA.getNormalMatrix(t),s=this.coplanarPoint(vg).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},wA=0,qi=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=No,this.side=ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fg,this.blendDst=Hg,this.blendEquation=Qa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ih,this.stencilZFail=Ih,this.stencilZPass=Ih,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Rt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Rt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ti().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Dt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ss=new I,xg=new I,ph=new I,mh=new I,Ts=class{constructor(t=new I,n=new I(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ss)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ss.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ss.copy(this.origin).addScaledVector(this.direction,n),Ss.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){xg.copy(t).add(n).multiplyScalar(.5),ph.copy(n).sub(t).normalize(),mh.copy(this.origin).sub(xg);let a=t.distanceTo(n)*.5,r=-this.direction.dot(ph),o=mh.dot(this.direction),l=-mh.dot(ph),c=mh.lengthSq(),f=Math.abs(1-r*r),p,u,d,_;if(f>0)if(p=r*l-o,u=r*o-l,_=a*f,p>=0)if(u>=-_)if(u<=_){let M=1/f;p*=M,u*=M,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(xg).addScaledVector(ph,u),d}intersectSphere(t,n){if(t.radius<0)return null;Ss.subVectors(t.center,this.origin);let i=Ss.dot(this.direction),s=Ss.dot(Ss)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ss)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,_=n.x-r.x,M=n.y-r.y,g=n.z-r.z,h=i.x-r.x,m=i.y-r.y,S=i.z-r.z,y=Math.abs(l),E=Math.abs(c),T=Math.abs(f),w,x,A,R,U,F,q,O,k,Q,B,j;if(y>=E&&y>=T?(A=l,F=p,k=_,j=h,l>=0?(w=c,x=f,R=u,U=d,q=M,O=g,Q=m,B=S):(w=f,x=c,R=d,U=u,q=g,O=M,Q=S,B=m)):E>=T?(A=c,F=u,k=M,j=m,c>=0?(w=f,x=l,R=d,U=p,q=g,O=_,Q=S,B=h):(w=l,x=f,R=p,U=d,q=_,O=g,Q=h,B=S)):(A=f,F=d,k=g,j=S,f>=0?(w=l,x=c,R=p,U=u,q=_,O=M,Q=h,B=m):(w=c,x=l,R=u,U=p,q=M,O=_,Q=m,B=h)),A===0)return null;let X=w/A,Z=x/A,nt=1/A,Ct=R-X*F,At=U-Z*F,ge=q-X*k,Qt=O-Z*k,ee=Q-X*j,K=B-Z*j,it=ee*Qt-K*ge,vt=Ct*K-At*ee,Ot=ge*At-Qt*Ct;if(s){if(it<0||vt<0||Ot<0)return null}else if((it<0||vt<0||Ot<0)&&(it>0||vt>0||Ot>0))return null;let _t=it+vt+Ot;if(_t===0)return null;let Vt=nt*(it*F+vt*k+Ot*j);return(_t>0?Vt<0:Vt>0)?null:this.at(Vt/_t,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ja=class extends qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.combine=Vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},tM=new Se,Ya=new Ts,gh=new ha,eM=new I,_h=new I,yh=new I,vh=new I,Sg=new I,xh=new I,nM=new I,Sh=new I,xn=class extends dn{constructor(t=new rn,n=new Ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){xh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(Sg.fromBufferAttribute(p,t),r?xh.addScaledVector(Sg,f):xh.addScaledVector(Sg.sub(n),f))}n.add(xh)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gh.copy(i.boundingSphere),gh.applyMatrix4(a),Ya.copy(t.ray).recast(t.near),!(gh.containsPoint(Ya.origin)===!1&&(Ya.intersectSphere(gh,eM)===null||Ya.origin.distanceToSquared(eM)>(t.far-t.near)**2))&&(tM.copy(a).invert(),Ya.copy(t.ray).applyMatrix4(tM),!(i.boundingBox!==null&&Ya.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ya)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,M=u.length;_<M;_++){let g=u[_],h=r[g.materialIndex],m=Math.max(g.start,d.start),S=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=m,E=S;y<E;y+=3){let T=o.getX(y),w=o.getX(y+1),x=o.getX(y+2);s=Mh(this,h,t,i,c,f,p,T,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let g=_,h=M;g<h;g+=3){let m=o.getX(g),S=o.getX(g+1),y=o.getX(g+2);s=Mh(this,r,t,i,c,f,p,m,S,y),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,M=u.length;_<M;_++){let g=u[_],h=r[g.materialIndex],m=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=m,E=S;y<E;y+=3){let T=y,w=y+1,x=y+2;s=Mh(this,h,t,i,c,f,p,T,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let g=_,h=M;g<h;g+=3){let m=g,S=g+1,y=g+2;s=Mh(this,r,t,i,c,f,p,m,S,y),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};Zh=class extends zn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=an,f=an,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Za=new ha,RA=new Dt(.5,.5),bh=new I,So=class{constructor(t=new ti,n=new ti,i=new ti,s=new ti,a=new ti,r=new ti){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ti,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],_=a[8],M=a[9],g=a[10],h=a[11],m=a[12],S=a[13],y=a[14],E=a[15];if(s[0].setComponents(c-r,d-f,h-_,E-m).normalize(),s[1].setComponents(c+r,d+f,h+_,E+m).normalize(),s[2].setComponents(c+o,d+p,h+M,E+S).normalize(),s[3].setComponents(c-o,d-p,h-M,E-S).normalize(),i)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,d-u,h-g,E-y).normalize();else if(s[4].setComponents(c-l,d-u,h-g,E-y).normalize(),n===Ti)s[5].setComponents(c+l,d+u,h+g,E+y).normalize();else if(n===mo)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Za.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Za)}intersectsSprite(t){Za.center.set(0,0,0);let n=RA.distanceTo(t.center);return Za.radius=.7071067811865476+n,Za.applyMatrix4(t.matrixWorld),this.intersectsSphere(Za)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(bh.x=s.normal.x>0?t.max.x:t.min.x,bh.y=s.normal.y>0?t.max.y:t.min.y,bh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ja=class extends qi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Kh=new I,Jh=new I,iM=new Se,Wl=new Ts,Eh=new ha,Mg=new I,sM=new I,Mo=class extends dn{constructor(t=new rn,n=new ja){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let s=1,a=n.count;s<a;s++)Kh.fromBufferAttribute(n,s-1),Jh.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Kh.distanceTo(Jh);t.setAttribute("lineDistance",new Fe(i,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eh.copy(i.boundingSphere),Eh.applyMatrix4(s),Eh.radius+=a,t.ray.intersectsSphere(Eh)===!1)return;iM.copy(s).invert(),Wl.copy(t.ray).applyMatrix4(iM);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){let d=Math.max(0,r.start),_=Math.min(f.count,r.start+r.count);for(let M=d,g=_-1;M<g;M+=c){let h=f.getX(M),m=f.getX(M+1),S=Th(this,t,Wl,l,h,m,M);S&&n.push(S)}if(this.isLineLoop){let M=f.getX(_-1),g=f.getX(d),h=Th(this,t,Wl,l,M,g,_-1);h&&n.push(h)}}else{let d=Math.max(0,r.start),_=Math.min(u.count,r.start+r.count);for(let M=d,g=_-1;M<g;M+=c){let h=Th(this,t,Wl,l,M,M+1,M);h&&n.push(h)}if(this.isLineLoop){let M=Th(this,t,Wl,l,_-1,d,_-1);M&&n.push(M)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};aM=new I,rM=new I,ec=class extends Mo{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[];for(let s=0,a=n.count;s<a;s+=2)aM.fromBufferAttribute(n,s),rM.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+aM.distanceTo(rM);t.setAttribute("lineDistance",new Fe(i,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},bo=class extends qi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},oM=new Se,Dg=new Ts,Ah=new ha,wh=new I,nc=class extends dn{constructor(t=new rn,n=new bo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ah.copy(i.boundingSphere),Ah.applyMatrix4(s),Ah.radius+=a,t.ray.intersectsSphere(Ah)===!1)return;oM.copy(s).invert(),Dg.copy(t.ray).applyMatrix4(oM);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){let u=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let _=u,M=d;_<M;_++){let g=c.getX(_);wh.fromBufferAttribute(p,g),lM(wh,g,l,s,t,n,this)}}else{let u=Math.max(0,r.start),d=Math.min(p.count,r.start+r.count);for(let _=u,M=d;_<M;_++)wh.fromBufferAttribute(p,_),lM(wh,_,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};ic=class extends zn{constructor(t=[],n=va,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fa=class extends zn{constructor(t,n,i=Ci,s,a,r,o=an,l=an,c,f=Wi,p=1){if(f!==Wi&&f!==Sa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},jh=class extends fa{constructor(t,n=Ci,i=va,s,a,r=an,o=an,l,c=Wi){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},sc=class extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Eo=class e extends rn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(f,3)),this.setAttribute("uv",new Fe(p,2));function _(M,g,h,m,S,y,E,T,w,x,A){let R=y/w,U=E/x,F=y/2,q=E/2,O=T/2,k=w+1,Q=x+1,B=0,j=0,X=new I;for(let Z=0;Z<Q;Z++){let nt=Z*U-q;for(let Ct=0;Ct<k;Ct++){let At=Ct*R-F;X[M]=At*m,X[g]=nt*S,X[h]=O,c.push(X.x,X.y,X.z),X[M]=0,X[g]=0,X[h]=T>0?1:-1,f.push(X.x,X.y,X.z),p.push(Ct/w),p.push(1-Z/x),B+=1}}for(let Z=0;Z<x;Z++)for(let nt=0;nt<w;nt++){let Ct=u+nt+k*Z,At=u+nt+k*(Z+1),ge=u+(nt+1)+k*(Z+1),Qt=u+(nt+1)+k*Z;l.push(Ct,At,Qt),l.push(At,ge,Qt),j+=6}o.addGroup(d,j,A),d+=j,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Qh=class e extends rn{constructor(t=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:s};let a=[],r=[];o(s),c(i),f(),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(a.slice(),3)),this.setAttribute("uv",new Fe(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(m){let S=new I,y=new I,E=new I;for(let T=0;T<n.length;T+=3)d(n[T+0],S),d(n[T+1],y),d(n[T+2],E),l(S,y,E,m)}function l(m,S,y,E){let T=E+1,w=[];for(let x=0;x<=T;x++){w[x]=[];let A=m.clone().lerp(y,x/T),R=S.clone().lerp(y,x/T),U=T-x;for(let F=0;F<=U;F++)F===0&&x===T?w[x][F]=A:w[x][F]=A.clone().lerp(R,F/U)}for(let x=0;x<T;x++)for(let A=0;A<2*(T-x)-1;A++){let R=Math.floor(A/2);A%2===0?(u(w[x][R+1]),u(w[x+1][R]),u(w[x][R])):(u(w[x][R+1]),u(w[x+1][R+1]),u(w[x+1][R]))}}function c(m){let S=new I;for(let y=0;y<a.length;y+=3)S.x=a[y+0],S.y=a[y+1],S.z=a[y+2],S.normalize().multiplyScalar(m),a[y+0]=S.x,a[y+1]=S.y,a[y+2]=S.z}function f(){let m=new I;for(let S=0;S<a.length;S+=3){m.x=a[S+0],m.y=a[S+1],m.z=a[S+2];let y=g(m)/2/Math.PI+.5,E=h(m)/Math.PI+.5;r.push(y,1-E)}_(),p()}function p(){for(let m=0;m<r.length;m+=6){let S=r[m+0],y=r[m+2],E=r[m+4],T=Math.max(S,y,E),w=Math.min(S,y,E);T>.9&&w<.1&&(S<.2&&(r[m+0]+=1),y<.2&&(r[m+2]+=1),E<.2&&(r[m+4]+=1))}}function u(m){a.push(m.x,m.y,m.z)}function d(m,S){let y=m*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function _(){let m=new I,S=new I,y=new I,E=new I,T=new Dt,w=new Dt,x=new Dt;for(let A=0,R=0;A<a.length;A+=9,R+=6){m.set(a[A+0],a[A+1],a[A+2]),S.set(a[A+3],a[A+4],a[A+5]),y.set(a[A+6],a[A+7],a[A+8]),T.set(r[R+0],r[R+1]),w.set(r[R+2],r[R+3]),x.set(r[R+4],r[R+5]),E.copy(m).add(S).add(y).divideScalar(3);let U=g(E);M(T,R+0,m,U),M(w,R+2,S,U),M(x,R+4,y,U)}}function M(m,S,y,E){E<0&&m.x===1&&(r[S]=m.x-1),y.x===0&&y.z===0&&(r[S]=E/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function h(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ch=new I,Rh=new I,bg=new I,Dh=new Ms,ac=class extends rn{constructor(t=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:n},t!==null){let s=Math.pow(10,4),a=Math.cos(ho*n),r=t.getIndex(),o=t.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],f=["a","b","c"],p=new Array(3),u={},d=[];for(let _=0;_<l;_+=3){r?(c[0]=r.getX(_),c[1]=r.getX(_+1),c[2]=r.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:M,b:g,c:h}=Dh;if(M.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),Dh.getNormal(bg),p[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,p[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,p[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let m=0;m<3;m++){let S=(m+1)%3,y=p[m],E=p[S],T=Dh[f[m]],w=Dh[f[S]],x=`${y}_${E}`,A=`${E}_${y}`;A in u&&u[A]?(bg.dot(u[A].normal)<=a&&(d.push(T.x,T.y,T.z),d.push(w.x,w.y,w.z)),u[A]=null):x in u||(u[x]={index0:c[m],index1:c[S],normal:bg.clone()})}}for(let _ in u)if(u[_]){let{index0:M,index1:g}=u[_];Ch.fromBufferAttribute(o,M),Rh.fromBufferAttribute(o,g),d.push(Ch.x,Ch.y,Ch.z),d.push(Rh.x,Rh.y,Rh.z)}this.setAttribute("position",new Fe(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},To=class e extends Qh{constructor(t=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}},rc=class e extends rn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],_=[],M=[],g=[];for(let h=0;h<f;h++){let m=h*u-r;for(let S=0;S<c;S++){let y=S*p-a;_.push(y,-m,0),M.push(0,0,1),g.push(S/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){let S=m+c*h,y=m+c*(h+1),E=m+1+c*(h+1),T=m+1+c*h;d.push(S,y,T),d.push(y,E,T)}this.setIndex(d),this.setAttribute("position",new Fe(_,3)),this.setAttribute("normal",new Fe(M,3)),this.setAttribute("uv",new Fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},oc=class e extends rn{constructor(t=1,n=.4,i=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],f=[],p=[],u=new I,d=new I,_=new I;for(let M=0;M<=i;M++){let g=r+M/i*o;for(let h=0;h<=s;h++){let m=h/s*a;d.x=(t+n*Math.cos(g))*Math.cos(m),d.y=(t+n*Math.cos(g))*Math.sin(m),d.z=n*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),_.subVectors(d,u).normalize(),f.push(_.x,_.y,_.z),p.push(h/s),p.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=s;g++){let h=(s+1)*M+g-1,m=(s+1)*(M-1)+g-1,S=(s+1)*(M-1)+g,y=(s+1)*M+g;l.push(h,m,y),l.push(m,S,y)}this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(f,3)),this.setAttribute("uv",new Fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};nb={clone:tr,merge:Sn},NA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NA,this.fragmentShader=LA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=DA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new kt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ne().fromArray(s.value);break;case"m3":this.uniforms[i].value=new It().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Se().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$h=class extends ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ao=class extends qi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nd,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},tf=class extends qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ef=class extends qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};da=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nf=class extends da{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wg,endingEnd:wg}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Cg:a=t,o=2*n-i;break;case Rg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cg:r=t,l=2*i-n;break;case Rg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,_=(i-n)/(s-n),M=_*_,g=M*_,h=-u*g+2*u*M-u*_,m=(1+u)*g+(-1.5-2*u)*M+(-.5+u)*_+1,S=(-1-d)*g+(1.5+d)*M+.5*_,y=d*g-d*M;for(let E=0;E!==o;++E)a[E]=h*r[f+E]+m*r[c+E]+S*r[l+E]+y*r[p+E];return a}},sf=class extends da{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},af=class extends da{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rf=class extends da{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let _=(i-n)/(s-n),M=1-_;for(let g=0;g!==o;++g)a[g]=r[c+g]*M+r[l+g]*_;return a}let u=o*2,d=t-1;for(let _=0;_!==o;++_){let M=r[c+_],g=r[l+_],h=d*u+_*2,m=p[h],S=p[h+1],y=t*u+_*2,E=f[y],T=f[y+1],w=IA(i,n,m,E,s);a[_]=ib(w,M,S,T,g)}return a}};ii=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=oo(n,this.TimeBufferType),this.values=oo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:oo(t.times,Array),values:oo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Eg(t.settings)&&(i.settings={inTangents:oo(t.settings.inTangents,Array),outTangents:oo(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new af(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new rf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Yl:n=this.InterpolantFactoryMethodDiscrete;break;case Xh:n=this.InterpolantFactoryMethodLinear;break;case Uh:n=this.InterpolantFactoryMethodSmooth;break;case Ag:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Rt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yl;case this.InterpolantFactoryMethodLinear:return Xh;case this.InterpolantFactoryMethodSmooth:return Uh;case this.InterpolantFactoryMethodBezier:return Ag}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;Eg(this.settings)&&(uM(this.settings.inTangents,t),uM(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&KT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Uh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let _=0;_!==i;++_){let M=n[p+_];if(M!==n[u+_]||M!==n[d+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,Eg(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Xh;pa=class extends ii{constructor(t,n,i){super(t,n,i)}};pa.prototype.ValueTypeName="bool";pa.prototype.ValueBufferType=Array;pa.prototype.DefaultInterpolation=Yl;pa.prototype.InterpolantFactoryMethodLinear=void 0;pa.prototype.InterpolantFactoryMethodSmooth=void 0;of=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}};of.prototype.ValueTypeName="color";lf=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}};lf.prototype.ValueTypeName="number";cf=class extends da{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)ei.slerpFlat(a,0,r,c-o,r,c,l);return a}},lc=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new cf(this.times,this.values,this.getValueSize(),t)}};lc.prototype.ValueTypeName="quaternion";lc.prototype.InterpolantFactoryMethodSmooth=void 0;ma=class extends ii{constructor(t,n,i){super(t,n,i)}};ma.prototype.ValueTypeName="string";ma.prototype.ValueBufferType=Array;ma.prototype.DefaultInterpolation=Yl;ma.prototype.InterpolantFactoryMethodLinear=void 0;ma.prototype.InterpolantFactoryMethodSmooth=void 0;uf=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}};uf.prototype.ValueTypeName="vector";hf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],_=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sb=new hf,ff=class{constructor(t){this.manager=t!==void 0?t:sb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ff.DEFAULT_MATERIAL_NAME="__DEFAULT";cc=class extends dn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Tg=new Se,hM=new I,fM=new I,df=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;hM.setFromMatrixPosition(t.matrixWorld),n.position.copy(hM),fM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(fM),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){Tg.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Tg,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===mo||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(Tg)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Nh=new I,Lh=new ei,Gi=new I,uc=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Nh,Lh,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nh,Lh,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Nh,Lh,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nh,Lh,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ca=new I,dM=new Dt,pM=new Dt,vn=class extends uc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=_o*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ca.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ca.x,ca.y).multiplyScalar(-t/ca.z),ca.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ca.x,ca.y).multiplyScalar(-t/ca.z)}getViewSize(t,n){return this.getViewBounds(t,dM,pM),n.subVectors(pM,dM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(ho*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},wo=class extends uc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Ng=class extends df{constructor(){super(new wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Co=class extends cc{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Ng}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}},hc=class extends cc{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}},lo=-90,co=1,pf=class extends dn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(lo,co,t,n);s.layers=this.layers,this.add(s);let a=new vn(lo,co,t,n);a.layers=this.layers,this.add(a);let r=new vn(lo,co,t,n);r.layers=this.layers,this.add(r);let o=new vn(lo,co,t,n);o.layers=this.layers,this.add(o);let l=new vn(lo,co,t,n);l.layers=this.layers,this.add(l);let c=new vn(lo,co,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},mf=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},l0="\\[\\]\\.:\\/",OA=new RegExp("["+l0+"]","g"),c0="[^"+l0+"]",PA="[^"+l0.replace("\\.","")+"]",BA=/((?:WC+[\/:])*)/.source.replace("WC",c0),zA=/(WCOD+)?/.source.replace("WCOD",PA),FA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",c0),HA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",c0),VA=new RegExp("^"+BA+zA+FA+HA+"$"),GA=["material","materials","bones","map"],Lg=class{constructor(t,n,i){let s=i||we.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},we=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(OA,"")}static parseTrackName(t){let n=VA.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);GA.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Lg;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];cD=new Float32Array(1),mM=new Se,fc=class{constructor(t,n,i=0,s=1/0){this.ray=new Ts(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Lt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return mM.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mM),this}intersectObject(t,n=!0,i=[]){return Ug(t,this,i,n),i.sort(gM),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)Ug(t[s],this,i,n);return i.sort(gM),i}};Ro=class{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},m0=class m0{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};m0.prototype.isMatrix2=!0;Ig=m0,dc=class extends Ai{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Ab(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function WA(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<p.length;d++){let _=p[u],M=p[d];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,p[u]=M)}p.length=u+1;for(let d=0,_=p.length;d<_;d++){let M=p[d];e.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}function wR(e,t,n,i,s,a){let r=new kt(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(m){let S=m.isScene===!0?m.background:null;if(S&&S.isTexture){let y=m.backgroundBlurriness>0;S=t.get(S,y)}return S}function _(m){let S=!1,y=d(m);y===null?g(r,o):y&&y.isColor&&(g(y,1),S=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(m,S){let y=d(S);y&&(y.isCubeTexture||y.mapping===mc)?(c===void 0&&(c=new xn(new Eo(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:tr(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(AR.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wb),c.material.toneMapped=Jt.getTransfer(y.colorSpace)!==re,(f!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new xn(new rc(2,2),new ni({name:"BackgroundMaterial",uniforms:tr(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(y.colorSpace)!==re,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,S){m.getRGB(ad,o0(e)),n.buffers.color.setClear(ad.r,ad.g,ad.b,S,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,S=1){r.set(m),o=S,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:_,addToRenderList:M,dispose:h}}function CR(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(U,F,q,O,k){let Q=!1,B=p(U,O,q,F);a!==B&&(a=B,c(a.object)),Q=d(U,O,q,k),Q&&_(U,O,q,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(Q||r)&&(r=!1,y(U,F,q,O),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function f(U){return e.deleteVertexArray(U)}function p(U,F,q,O){let k=O.wireframe===!0,Q=i[F.id];Q===void 0&&(Q={},i[F.id]=Q);let B=U.isInstancedMesh===!0?U.id:0,j=Q[B];j===void 0&&(j={},Q[B]=j);let X=j[q.id];X===void 0&&(X={},j[q.id]=X);let Z=X[k];return Z===void 0&&(Z=u(l()),X[k]=Z),Z}function u(U){let F=[],q=[],O=[];for(let k=0;k<n;k++)F[k]=0,q[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:O,object:U,attributes:{},index:null}}function d(U,F,q,O){let k=a.attributes,Q=F.attributes,B=0,j=q.getAttributes();for(let X in j)if(j[X].location>=0){let nt=k[X],Ct=Q[X];if(Ct===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(Ct=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(Ct=U.instanceColor)),nt===void 0||nt.attribute!==Ct||Ct&&nt.data!==Ct.data)return!0;B++}return a.attributesNum!==B||a.index!==O}function _(U,F,q,O){let k={},Q=F.attributes,B=0,j=q.getAttributes();for(let X in j)if(j[X].location>=0){let nt=Q[X];nt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(nt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(nt=U.instanceColor));let Ct={};Ct.attribute=nt,nt&&nt.data&&(Ct.data=nt.data),k[X]=Ct,B++}a.attributes=k,a.attributesNum=B,a.index=O}function M(){let U=a.newAttributes;for(let F=0,q=U.length;F<q;F++)U[F]=0}function g(U){h(U,0)}function h(U,F){let q=a.newAttributes,O=a.enabledAttributes,k=a.attributeDivisors;q[U]=1,O[U]===0&&(e.enableVertexAttribArray(U),O[U]=1),k[U]!==F&&(e.vertexAttribDivisor(U,F),k[U]=F)}function m(){let U=a.newAttributes,F=a.enabledAttributes;for(let q=0,O=F.length;q<O;q++)F[q]!==U[q]&&(e.disableVertexAttribArray(q),F[q]=0)}function S(U,F,q,O,k,Q,B){B===!0?e.vertexAttribIPointer(U,F,q,k,Q):e.vertexAttribPointer(U,F,q,O,k,Q)}function y(U,F,q,O){M();let k=O.attributes,Q=q.getAttributes(),B=F.defaultAttributeValues;for(let j in Q){let X=Q[j];if(X.location>=0){let Z=k[j];if(Z===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor)),Z!==void 0){let nt=Z.normalized,Ct=Z.itemSize,At=t.get(Z);if(At===void 0)continue;let ge=At.buffer,Qt=At.type,ee=At.bytesPerElement,K=Qt===e.INT||Qt===e.UNSIGNED_INT||Z.gpuType===xf;if(Z.isInterleavedBufferAttribute){let it=Z.data,vt=it.stride,Ot=Z.offset;if(it.isInstancedInterleavedBuffer){for(let _t=0;_t<X.locationSize;_t++)h(X.location+_t,it.meshPerAttribute);U.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let _t=0;_t<X.locationSize;_t++)g(X.location+_t);e.bindBuffer(e.ARRAY_BUFFER,ge);for(let _t=0;_t<X.locationSize;_t++)S(X.location+_t,Ct/X.locationSize,Qt,nt,vt*ee,(Ot+Ct/X.locationSize*_t)*ee,K)}else{if(Z.isInstancedBufferAttribute){for(let it=0;it<X.locationSize;it++)h(X.location+it,Z.meshPerAttribute);U.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let it=0;it<X.locationSize;it++)g(X.location+it);e.bindBuffer(e.ARRAY_BUFFER,ge);for(let it=0;it<X.locationSize;it++)S(X.location+it,Ct/X.locationSize,Qt,nt,Ct*ee,Ct/X.locationSize*it*ee,K)}}else if(B!==void 0){let nt=B[j];if(nt!==void 0)switch(nt.length){case 2:e.vertexAttrib2fv(X.location,nt);break;case 3:e.vertexAttrib3fv(X.location,nt);break;case 4:e.vertexAttrib4fv(X.location,nt);break;default:e.vertexAttrib1fv(X.location,nt)}}}}m()}function E(){A();for(let U in i){let F=i[U];for(let q in F){let O=F[q];for(let k in O){let Q=O[k];for(let B in Q)f(Q[B].object),delete Q[B];delete O[k]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;let F=i[U.id];for(let q in F){let O=F[q];for(let k in O){let Q=O[k];for(let B in Q)f(Q[B].object),delete Q[B];delete O[k]}}delete i[U.id]}function w(U){for(let F in i){let q=i[F];for(let O in q){let k=q[O];if(k[U.id]===void 0)continue;let Q=k[U.id];for(let B in Q)f(Q[B].object),delete Q[B];delete k[U.id]}}}function x(U){for(let F in i){let q=i[F],O=U.isInstancedMesh===!0?U.id:0,k=q[O];if(k!==void 0){for(let Q in k){let B=k[Q];for(let j in B)f(B[j].object),delete B[j];delete k[Q]}delete q[O],Object.keys(q).length===0&&delete i[F]}}}function A(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function RR(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function DR(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==_i&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Hn&&w!==Ri&&!x&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Rt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:y,maxSamples:E,samples:T}}function NR(e){let t=this,n=null,i=0,s=!1,a=!1,r=new ti,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let _=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,h=e.get(p);if(!s||_===null||_.length===0||a&&!g)a?f(null):c();else{let m=a?0:i,S=m*4,y=h.clippingState||null;l.value=y,y=f(_,u,S,d);for(let E=0;E!==S;++E)y[E]=n[E];h.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,_){let M=p!==null?p.length:0,g=null;if(M!==0){if(g=l.value,_!==!0||g===null){let h=d+M*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let S=0,y=d;S!==M;++S,y+=4)r.copy(p[S]).applyMatrix4(m,o),r.normal.toArray(g,y),g[y+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}function PR(e){let t=[],n=[],i=e,s=e-Po+1+LR;for(let a=0;a<s;a++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,_=new Float32Array(d*u*p),M=new Float32Array(d*u*p);for(let h=0;h<p;h++){let m=h%3*2/3-1,S=h>2?0:-1,y=[m,S,0,m+2/3,S,0,m+2/3,S+1,0,m,S,0,m+2/3,S+1,0,m,S+1,0];_.set(y,d*u*h);for(let E=0;E<u;E++){let T=f[E*2]*2-1,w=f[E*2+1]*2-1;h===0?er.set(1,w,T):h===1?er.set(-T,1,-w):h===2?er.set(-T,w,1):h===3?er.set(-1,w,-T):h===4?er.set(-T,-1,w):er.set(T,w,-1),er.toArray(M,(h*u+E)*d)}}let g=new rn;g.setAttribute("position",new Bn(_,d)),g.setAttribute("outputDirection",new Bn(M,d)),n.push(new xn(g,null)),i>Po&&i--}return{lodMeshes:n,sizeLods:t}}function rb(e,t,n){let i=new Fn(e,t,n);return i.texture.mapping=mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function BR(e,t,n){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ud(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function zR(e,t,n){return new ni({name:"SphericalGaussianBlur",defines:{SAMPLES:UR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ud(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ob(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ud(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function lb(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ud(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function FR(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===_f||d===yf)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let M=new ld(_.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,_=d===_f||d===yf,M=d===va||d===$a;if(_||M){let g=n.get(u),h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new od(e)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return _&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new od(e)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function o(u,d){return d===_f?u.mapping=va:d===yf&&(u.mapping=$a),u}function l(u){let d=0,_=6;for(let M=0;M<_;M++)u[M]!==void 0&&d++;return d===_}function c(u){let d=u.target;d.removeEventListener("dispose",c);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let _=n.get(d);_!==void 0&&(n.delete(d),_.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function HR(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ka("WebGLRenderer: "+i+" extension not supported."),s}}}function VR(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,_=p.attributes.position,M=0;if(_===void 0)return;if(d!==null){let m=d.array;M=d.version;for(let S=0,y=m.length;S<y;S+=3){let E=m[S+0],T=m[S+1],w=m[S+2];u.push(E,T,T,w,w,E)}}else{let m=_.array;M=_.version;for(let S=0,y=m.length/3-1;S<y;S+=3){let E=S+0,T=S+1,w=S+2;u.push(E,T,T,w,w,E)}}let g=new(_.count>=65535?tc:$l)(u,1);g.version=M;let h=a.get(p);h&&t.remove(h),a.set(p,g)}function f(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function GR(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let M=0;for(let g=0;g<d;g++)M+=u[g];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function kR(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Lt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function XR(e,t,n){let i=new WeakMap,s=new Ne;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let A=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],S=0;d===!0&&(S=1),_===!0&&(S=2),M===!0&&(S=3);let y=o.attributes.position.count*S,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*E*4*p),w=new jl(T,y,E,p);w.type=Ri,w.needsUpdate=!0;let x=S*4;for(let R=0;R<p;R++){let U=g[R],F=h[R],q=m[R],O=y*E*4*R;for(let k=0;k<U.count;k++){let Q=k*x;d===!0&&(s.fromBufferAttribute(U,k),T[O+Q+0]=s.x,T[O+Q+1]=s.y,T[O+Q+2]=s.z,T[O+Q+3]=0),_===!0&&(s.fromBufferAttribute(F,k),T[O+Q+4]=s.x,T[O+Q+5]=s.y,T[O+Q+6]=s.z,T[O+Q+7]=0),M===!0&&(s.fromBufferAttribute(q,k),T[O+Q+8]=s.x,T[O+Q+9]=s.y,T[O+Q+10]=s.z,T[O+Q+11]=q.itemSize===4?s.w:1)}}u={count:p,texture:w,size:new Dt(y,E)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function WR(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}function YR(e,t,n,i,s,a){let r=new Fn(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new rn;c.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Fe([0,2,0,0,2,0],2));let f=new $h({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new xn(c,f),u=new wo(-1,1,1,-1,0,1),d=null,_=null,M=!1,g,h=null,m=[],S=!1;this.setSize=function(y,E){r.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let T=0;T<m.length;T++){let w=m[T];w.setSize&&w.setSize(y,E)}},this.setEffects=function(y){m=y,S=m.length>0&&m[0].isRenderPass===!0;let E=r.width,T=r.height;m.length>0&&o===null&&(o=new Fn(E,T,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new Fn(E,T,{type:Di,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<m.length;w++){let x=m[w];x.setSize&&x.setSize(E,T)}},this.begin=function(y,E){if(M||y.toneMapping===wi&&m.length===0)return!1;if(h=E,E!==null){let T=E.width,w=E.height;(r.width!==T||r.height!==w)&&this.setSize(T,w)}return S===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=wi,!0},this.hasRenderPass=function(){return S},this.end=function(y,E){y.toneMapping=g,M=!0;let T=r,w=o;for(let x=0;x<m.length;x++){let A=m[x];A.enabled!==!1&&(A.render(y,w,T,E),A.needsSwap!==!1&&(T=w,w=w===o?l:o))}if(d!==y.outputColorSpace||_!==y.toneMapping){d=y.outputColorSpace,_=y.toneMapping,f.defines={},Jt.getTransfer(d)===re&&(f.defines.SRGB_TRANSFER="");let x=qR[_];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(h),y.render(p,u),h=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}function zo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=cb[s];if(a===void 0&&(a=new Float32Array(s),cb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function je(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function hd(e,t){let n=ub[t];n===void 0&&(n=new Int32Array(t),ub[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function ZR(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function KR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2fv(this.addr,t),je(n,t)}}function JR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Je(n,t))return;e.uniform3fv(this.addr,t),je(n,t)}}function jR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4fv(this.addr,t),je(n,t)}}function QR(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),je(n,t)}else{if(Je(n,i))return;db.set(i),e.uniformMatrix2fv(this.addr,!1,db),je(n,i)}}function $R(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),je(n,t)}else{if(Je(n,i))return;fb.set(i),e.uniformMatrix3fv(this.addr,!1,fb),je(n,i)}}function t3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),je(n,t)}else{if(Je(n,i))return;hb.set(i),e.uniformMatrix4fv(this.addr,!1,hb),je(n,i)}}function e3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function n3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2iv(this.addr,t),je(n,t)}}function i3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Je(n,t))return;e.uniform3iv(this.addr,t),je(n,t)}}function s3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4iv(this.addr,t),je(n,t)}}function a3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function r3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2uiv(this.addr,t),je(n,t)}}function o3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Je(n,t))return;e.uniform3uiv(this.addr,t),je(n,t)}}function l3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4uiv(this.addr,t),je(n,t)}}function c3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(b0.compareFunction=n.isReversedDepthBuffer()?sd:id,a=b0):a=Cb,n.setTexture2D(t||a,s)}function u3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Db,s)}function h3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Nb,s)}function f3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Rb,s)}function d3(e){switch(e){case 5126:return ZR;case 35664:return KR;case 35665:return JR;case 35666:return jR;case 35674:return QR;case 35675:return $R;case 35676:return t3;case 5124:case 35670:return e3;case 35667:case 35671:return n3;case 35668:case 35672:return i3;case 35669:case 35673:return s3;case 5125:return a3;case 36294:return r3;case 36295:return o3;case 36296:return l3;case 35678:case 36198:case 36298:case 36306:case 35682:return c3;case 35679:case 36299:case 36307:return u3;case 35680:case 36300:case 36308:case 36293:return h3;case 36289:case 36303:case 36311:case 36292:return f3}}function p3(e,t){e.uniform1fv(this.addr,t)}function m3(e,t){let n=zo(t,this.size,2);e.uniform2fv(this.addr,n)}function g3(e,t){let n=zo(t,this.size,3);e.uniform3fv(this.addr,n)}function _3(e,t){let n=zo(t,this.size,4);e.uniform4fv(this.addr,n)}function y3(e,t){let n=zo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function v3(e,t){let n=zo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function x3(e,t){let n=zo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function S3(e,t){e.uniform1iv(this.addr,t)}function M3(e,t){e.uniform2iv(this.addr,t)}function b3(e,t){e.uniform3iv(this.addr,t)}function E3(e,t){e.uniform4iv(this.addr,t)}function T3(e,t){e.uniform1uiv(this.addr,t)}function A3(e,t){e.uniform2uiv(this.addr,t)}function w3(e,t){e.uniform3uiv(this.addr,t)}function C3(e,t){e.uniform4uiv(this.addr,t)}function R3(e,t,n){let i=this.cache,s=t.length,a=hd(n,s);Je(i,a)||(e.uniform1iv(this.addr,a),je(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=b0:r=Cb;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function D3(e,t,n){let i=this.cache,s=t.length,a=hd(n,s);Je(i,a)||(e.uniform1iv(this.addr,a),je(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||Db,a[r])}function N3(e,t,n){let i=this.cache,s=t.length,a=hd(n,s);Je(i,a)||(e.uniform1iv(this.addr,a),je(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||Nb,a[r])}function L3(e,t,n){let i=this.cache,s=t.length,a=hd(n,s);Je(i,a)||(e.uniform1iv(this.addr,a),je(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Rb,a[r])}function U3(e){switch(e){case 5126:return p3;case 35664:return m3;case 35665:return g3;case 35666:return _3;case 35674:return y3;case 35675:return v3;case 35676:return x3;case 5124:case 35670:return S3;case 35667:case 35671:return M3;case 35668:case 35672:return b3;case 35669:case 35673:return E3;case 5125:return T3;case 36294:return A3;case 36295:return w3;case 36296:return C3;case 35678:case 36198:case 36298:case 36306:case 35682:return R3;case 35679:case 36299:case 36307:return D3;case 35680:case 36300:case 36308:case 36293:return N3;case 36289:case 36303:case 36311:case 36292:return L3}}function pb(e,t){e.seq.push(t),e.map[t.id]=t}function I3(e,t,n){let i=e.name,s=i.length;for(S0.lastIndex=0;;){let a=S0.exec(i),r=S0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){pb(n,c===void 0?new E0(o,e,t):new T0(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new A0(o),pb(n,p)),n=p}}}function mb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}function B3(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}function z3(e){Jt._getMatrix(gb,Jt.workingColorSpace,e);let t=`mat3( ${gb.elements.map(n=>n.toFixed(4))} )`;switch(Jt.getTransfer(e)){case Kl:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function _b(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+B3(e.getShaderSource(t),o)}else return a}function F3(e,t){let n=z3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function V3(e,t){let n=H3[t];return n===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function G3(){Jt.getLuminanceCoefficients(rd);let e=rd.x.toFixed(4),t=rd.y.toFixed(4),n=rd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tc).join(`
`)}function X3(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function W3(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Tc(e){return e!==""}function yb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function w0(e){return e.replace(q3,Z3)}function Z3(e,t){let n=Ht[t];if(n===void 0){let i=Y3.get(t);if(i!==void 0)n=Ht[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return w0(n)}function xb(e){return e.replace(K3,J3)}function J3(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Sb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Q3(e){return j3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function t2(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":$3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}function n2(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":e2[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function s2(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":i2[e.combine]||"ENVMAP_BLENDING_NONE"}function a2(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function r2(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=Q3(n),c=t2(n),f=n2(n),p=s2(n),u=a2(n),d=k3(n),_=X3(a),M=s.createProgram(),g,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Tc).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Tc).join(`
`),h.length>0&&(h+=`
`)):(g=[Sb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tc).join(`
`),h=[Sb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?Ht.tonemapping_pars_fragment:"",n.toneMapping!==wi?V3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,F3("linearToOutputTexel",n.outputColorSpace),G3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Tc).join(`
`)),r=w0(r),r=yb(r,n),r=vb(r,n),o=w0(o),o=yb(o,n),o=vb(o,n),r=xb(r),o=xb(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===i0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===i0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=m+g+r,y=m+h+o,E=mb(s,s.VERTEX_SHADER,S),T=mb(s,s.FRAGMENT_SHADER,y);s.attachShader(M,E),s.attachShader(M,T),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(U){if(e.debug.checkShaderErrors){let F=s.getProgramInfoLog(M)||"",q=s.getShaderInfoLog(E)||"",O=s.getShaderInfoLog(T)||"",k=F.trim(),Q=q.trim(),B=O.trim(),j=!0,X=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,M,E,T);else{let Z=_b(s,E,"vertex"),nt=_b(s,T,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+Z+`
`+nt)}else k!==""?Rt("WebGLProgram: Program Info Log:",k):(Q===""||B==="")&&(X=!1);X&&(U.diagnostics={runnable:j,programLog:k,vertexShader:{log:Q,prefix:g},fragmentShader:{log:B,prefix:h}})}s.deleteShader(E),s.deleteShader(T),x=new Bo(s,M),A=W3(s,M)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,O3)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=P3++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=T,this}function l2(e){return e===Ma||e===Sc||e===Mc}function c2(e,t,n,i,s,a){let r=new vo,o=new C0,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,A,R,U,F,q){let O=U.fog,k=F.geometry,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=t.get(x.envMap||Q,B),X=j&&j.mapping===mc?j.image.height:null,Z=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Rt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let nt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ct=nt!==void 0?nt.length:0,At=0;k.morphAttributes.position!==void 0&&(At=1),k.morphAttributes.normal!==void 0&&(At=2),k.morphAttributes.color!==void 0&&(At=3);let ge,Qt,ee,K;if(Z){let ye=Ji[Z];ge=ye.vertexShader,Qt=ye.fragmentShader}else{ge=x.vertexShader,Qt=x.fragmentShader;let ye=o.getVertexShaderStage(x),se=o.getFragmentShaderStage(x);o.update(x,ye,se),ee=ye.id,K=se.id}let it=e.getRenderTarget(),vt=e.state.buffers.depth.getReversed(),Ot=F.isInstancedMesh===!0,_t=F.isBatchedMesh===!0,Vt=!!x.map,Ye=!!x.matcap,Xt=!!j,te=!!x.aoMap,_e=!!x.lightMap,Zt=!!x.bumpMap&&x.wireframe===!1,Ce=!!x.normalMap,$e=!!x.displacementMap,Rn=!!x.emissiveMap,Ue=!!x.metalnessMap,He=!!x.roughnessMap,L=x.anisotropy>0,pn=x.clearcoat>0,oe=x.dispersion>0,C=x.retroreflectivity>0,v=x.iridescence>0,P=x.sheen>0,G=x.transmission>0,Y=L&&!!x.anisotropyMap,at=pn&&!!x.clearcoatMap,rt=pn&&!!x.clearcoatNormalMap,J=pn&&!!x.clearcoatRoughnessMap,tt=v&&!!x.iridescenceMap,ot=v&&!!x.iridescenceThicknessMap,Et=P&&!!x.sheenColorMap,ht=P&&!!x.sheenRoughnessMap,lt=!!x.specularMap,Tt=!!x.specularColorMap,Nt=!!x.specularIntensityMap,Bt=G&&!!x.transmissionMap,N=G&&!!x.thicknessMap,ct=!!x.gradientMap,$=!!x.alphaMap,ut=x.alphaTest>0,mt=!!x.alphaHash,st=!!x.extensions,wt=wi;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(wt=e.toneMapping);let Mt={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:ge,fragmentShader:Qt,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:_t,batchingColor:_t&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,outputColorSpace:it===null?e.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Vt,matcap:Ye,envMap:Xt,envMapMode:Xt&&j.mapping,envMapCubeUVHeight:X,aoMap:te,lightMap:_e,bumpMap:Zt,normalMap:Ce,displacementMap:$e,emissiveMap:Rn,normalMapObjectSpace:Ce&&x.normalMapType===GM,normalMapTangentSpace:Ce&&x.normalMapType===nd,packedNormalMap:Ce&&x.normalMapType===nd&&l2(x.normalMap.format),metalnessMap:Ue,roughnessMap:He,anisotropy:L,anisotropyMap:Y,clearcoat:pn,clearcoatMap:at,clearcoatNormalMap:rt,clearcoatRoughnessMap:J,dispersion:oe,retroreflection:C,iridescence:v,iridescenceMap:tt,iridescenceThicknessMap:ot,sheen:P,sheenColorMap:Et,sheenRoughnessMap:ht,specularMap:lt,specularColorMap:Tt,specularIntensityMap:Nt,transmission:G,transmissionMap:Bt,thicknessMap:N,gradientMap:ct,opaque:x.transparent===!1&&x.blending===No&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:ut,alphaHash:mt,combine:x.combine,mapUv:Vt&&_(x.map.channel),aoMapUv:te&&_(x.aoMap.channel),lightMapUv:_e&&_(x.lightMap.channel),bumpMapUv:Zt&&_(x.bumpMap.channel),normalMapUv:Ce&&_(x.normalMap.channel),displacementMapUv:$e&&_(x.displacementMap.channel),emissiveMapUv:Rn&&_(x.emissiveMap.channel),metalnessMapUv:Ue&&_(x.metalnessMap.channel),roughnessMapUv:He&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:at&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ht&&_(x.sheenRoughnessMap.channel),specularMapUv:lt&&_(x.specularMap.channel),specularColorMapUv:Tt&&_(x.specularColorMap.channel),specularIntensityMapUv:Nt&&_(x.specularIntensityMap.channel),transmissionMapUv:Bt&&_(x.transmissionMap.channel),thicknessMapUv:N&&_(x.thicknessMap.channel),alphaMapUv:$&&_(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ce||L),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(Vt||$),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&Ce===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:vt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:At,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:wt,decodeVideoTexture:Vt&&x.map.isVideoTexture===!0&&Jt.getTransfer(x.map.colorSpace)===re,decodeVideoTextureEmissive:Rn&&x.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(x.emissiveMap.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Yi,flipSided:x.side===Cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function g(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(h(A,x),m(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function h(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function m(x,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.retroreflection&&r.enable(24),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function S(x){let A=d[x.type],R;if(A){let U=Ji[A];R=nb.clone(U.uniforms)}else R=x.uniforms;return R}function y(x,A){let R=f.get(A);return R!==void 0?++R.usedTimes:(R=new r2(e,A,x,s),c.push(R),f.set(A,R)),R}function E(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function w(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:S,acquireProgram:y,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:w}}function u2(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function h2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Mb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function bb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,_,M,g,h){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:_,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:h},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=_,m.materialVariant=r(u),m.groupOrder=M,m.renderOrder=u.renderOrder,m.z=g,m.group=h),t++,m}function l(u,d,_,M,g,h,m){m.reversedDepth===!0&&(g=-g);let S=o(u,d,_,M,g,h);_.transmission>0?i.push(S):_.transparent===!0?s.push(S):n.push(S)}function c(u,d,_,M,g,h){let m=o(u,d,_,M,g,h);_.transmission>0?i.unshift(m):_.transparent===!0?s.unshift(m):n.unshift(m)}function f(u,d){n.length>1&&n.sort(u||h2),i.length>1&&i.sort(d||Mb),s.length>1&&s.sort(d||Mb)}function p(){for(let u=t,d=e.length;u<d;u++){let _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function f2(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new bb,e.set(i,[r])):s>=a.length?(r=new bb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function d2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new I,color:new kt};break;case"SpotLight":n={position:new I,direction:new I,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new kt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":n={color:new kt,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=n,n}}}function p2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}function g2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function _2(e){let t=new d2,n=p2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,a=new Se,r=new Se;function o(c){let f=0,p=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,_=0,M=0,g=0,h=0,m=0,S=0,y=0,E=0,T=0,w=0,x=0,A=0,R=0;c.sort(g2);for(let F=0,q=c.length;F<q;F++){let O=c[F],k=O.color,Q=O.intensity,B=O.distance,j=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Ma?j=O.shadow.map.texture:j=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)f+=k.r*Q,p+=k.g*Q,u+=k.b*Q;else if(O.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(O.sh.coefficients[X],Q);R++}else if(O.isSunLight){let X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Z=O.shadow,nt=n.get(O);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[_]=nt,i.sunShadowMap[_]=j;let Ct=Z.getViewportCount();for(let At=0;At<Ct;At++)i.sunShadowMatrix[M+At]=Z.getMatrix(At),i.sunShadowCascade[M+At]=Z._cascadeData[At];M+=Ct,_++}i.sun[d]=X,d++}else if(O.isDirectionalLight){let X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Z=O.shadow,nt=n.get(O);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,i.directionalShadow[g]=nt,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=O.shadow.matrix,E++}i.directional[g]=X,g++}else if(O.isSpotLight){let X=t.get(O);X.position.setFromMatrixPosition(O.matrixWorld),X.color.copy(k).multiplyScalar(Q),X.distance=B,X.coneCos=Math.cos(O.angle),X.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),X.decay=O.decay,i.spot[m]=X;let Z=O.shadow;if(O.map&&(i.spotLightMap[x]=O.map,x++,Z.updateMatrices(O),O.castShadow&&A++),i.spotLightMatrix[m]=Z.matrix,O.castShadow){let nt=n.get(O);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,i.spotShadow[m]=nt,i.spotShadowMap[m]=j,w++}m++}else if(O.isRectAreaLight){let X=t.get(O);X.color.copy(k).multiplyScalar(Q),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=X,S++}else if(O.isPointLight){let X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity),X.distance=O.distance,X.decay=O.decay,O.castShadow){let Z=O.shadow,nt=n.get(O);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,nt.shadowCameraNear=Z.camera.near,nt.shadowCameraFar=Z.camera.far,i.pointShadow[h]=nt,i.pointShadowMap[h]=j,i.pointShadowMatrix[h]=O.shadow.matrix,T++}i.point[h]=X,h++}else if(O.isHemisphereLight){let X=t.get(O);X.skyColor.copy(O.color).multiplyScalar(Q),X.groundColor.copy(O.groundColor).multiplyScalar(Q),i.hemi[y]=X,y++}}S>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let U=i.hash;(U.sunLength!==d||U.directionalLength!==g||U.pointLength!==h||U.spotLength!==m||U.rectAreaLength!==S||U.hemiLength!==y||U.numSunShadows!==_||U.numDirectionalShadows!==E||U.numPointShadows!==T||U.numSpotShadows!==w||U.numSpotMaps!==x||U.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=g,i.spot.length=m,i.rectArea.length=S,i.point.length=h,i.hemi.length=y,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,U.sunLength=d,U.directionalLength=g,U.pointLength=h,U.spotLength=m,U.rectAreaLength=S,U.hemiLength=y,U.numSunShadows=_,U.numDirectionalShadows=E,U.numPointShadows=T,U.numSpotShadows=w,U.numSpotMaps=x,U.numLightProbes=R,i.version=m2++)}function l(c,f){let p=0,u=0,d=0,_=0,M=0,g=0,h=f.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){let y=c[m];if(y.isSunLight){let E=i.sun[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),p++}else if(y.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),u++}else if(y.isSpotLight){let E=i.spot[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),_++}else if(y.isRectAreaLight){let E=i.rectArea[M];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),r.identity(),a.copy(y.matrixWorld),a.premultiply(h),r.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),M++}else if(y.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),d++}else if(y.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),g++}}}return{setup:o,setupView:l,state:i}}function Eb(e){let t=new _2(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function f(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function y2(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Eb(e),t.set(s,[o])):a>=r.length?(o=new Eb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}function b2(e,t,n){let i=new So,s=new Dt,a=new Dt,r=new Ne,o=new tf,l=new ef,c={},f=n.maxTextureSize,p={[ya]:Cn,[Cn]:ya,[Yi]:Yi},u=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:v2,fragmentShader:x2}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let _=new rn;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new xn(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let h=this.type;this.render=function(T,w,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===vM&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pc);let A=e.getRenderTarget(),R=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),F=e.state;F.setBlending(Zi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let q=h!==this.type;q&&w.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(k=>k.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,k=T.length;O<k;O++){let Q=T[O],B=Q.shadow;if(B===void 0){Rt("WebGLShadowMap:",Q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let j=B.getFrameExtents();s.multiply(j),a.copy(B.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/j.x),s.x=a.x*j.x,B.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/j.y),s.y=a.y*j.y,B.mapSize.y=a.y));let X=e.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||q===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Do){if(Q.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Fn(s.x,s.y,{format:Ma,type:Di,minFilter:fn,magFilter:fn,generateMipmaps:!1}),B.map.texture.name=Q.name+".shadowMap",B.map.depthTexture=new fa(s.x,s.y,Ri),B.map.depthTexture.name=Q.name+".shadowMapDepth",B.map.depthTexture.format=Wi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=an,B.map.depthTexture.magFilter=an}else Q.isPointLight?(B.map=new ld(s.x),B.map.depthTexture=new jh(s.x,Ci)):(B.map=new Fn(s.x,s.y),B.map.depthTexture=new fa(s.x,s.y,Ci)),B.map.depthTexture.name=Q.name+".shadowMap",B.map.depthTexture.format=Wi,this.type===pc?(B.map.depthTexture.compareFunction=X?sd:id,B.map.depthTexture.minFilter=fn,B.map.depthTexture.magFilter=fn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=an,B.map.depthTexture.magFilter=an);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let Z=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();Q.isPointLight!==!0&&B.updateMatrices(Q,x);for(let nt=0;nt<Z;nt++){let Ct=B.getCamera(nt);if(Q.isPointLight){let At=B.camera,ge=B.matrix,Qt=Q.distance||At.far;Qt!==At.far&&(At.far=Qt,At.updateProjectionMatrix()),Ec.setFromMatrixPosition(Q.matrixWorld),At.position.copy(Ec),M0.copy(At.position),M0.add(S2[nt]),At.up.copy(M2[nt]),At.lookAt(M0),At.updateMatrixWorld(),ge.makeTranslation(-Ec.x,-Ec.y,-Ec.z),Tb.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Tb,At.coordinateSystem,At.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)e.setRenderTarget(B.map,nt),e.clear();else{nt===0&&(e.setRenderTarget(B.map),e.clear());let At=B.getViewport(nt);r.set(a.x*At.x,a.y*At.y,a.x*At.z,a.y*At.w),F.viewport(r)}i=B.getFrustum(nt),y(w,x,Ct,Q,this.type)}B.isPointLightShadow!==!0&&this.type===Do&&m(B,x),B.needsUpdate=!1}h=this.type,g.needsUpdate=!1,e.setRenderTarget(A,R,U)};function m(T,w){let x=t.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Fn(s.x,s.y,{format:Ma,type:Di}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(w,null,x,u,M,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(w,null,x,d,M,null)}function S(T,w,x,A){let R=null,U=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)R=U;else if(R=x.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let F=R.uuid,q=w.uuid,O=c[F];O===void 0&&(O={},c[F]=O);let k=O[q];k===void 0&&(k=R.clone(),O[q]=k,w.addEventListener("dispose",E)),R=k}if(R.visible=w.visible,R.wireframe=w.wireframe,A===Do?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:p[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=e.properties.get(R);F.light=x}return R}function y(T,w,x,A,R){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Do)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let q=t.update(T),O=T.material;if(Array.isArray(O)){let k=q.groups;for(let Q=0,B=k.length;Q<B;Q++){let j=k[Q],X=O[j.materialIndex];if(X&&X.visible){let Z=S(T,X,A,R);T.onBeforeShadow(e,T,w,x,q,Z,j),e.renderBufferDirect(x,null,q,Z,T,j),T.onAfterShadow(e,T,w,x,q,Z,j)}}}else if(O.visible){let k=S(T,O,A,R);T.onBeforeShadow(e,T,w,x,q,k,null),e.renderBufferDirect(x,null,q,k,T,null),T.onAfterShadow(e,T,w,x,q,k,null)}}let F=T.children;for(let q=0,O=F.length;q<O;q++)y(F[q],w,x,A,R)}function E(T){T.target.removeEventListener("dispose",E);for(let x in c){let A=c[x],R=T.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function E2(e,t){function n(){let N=!1,ct=new Ne,$=null,ut=new Ne(0,0,0,0);return{setMask:function(mt){$!==mt&&!N&&(e.colorMask(mt,mt,mt,mt),$=mt)},setLocked:function(mt){N=mt},setClear:function(mt,st,wt,Mt,ye){ye===!0&&(mt*=Mt,st*=Mt,wt*=Mt),ct.set(mt,st,wt,Mt),ut.equals(ct)===!1&&(e.clearColor(mt,st,wt,Mt),ut.copy(ct))},reset:function(){N=!1,$=null,ut.set(-1,0,0,0)}}}function i(){let N=!1,ct=!1,$=null,ut=null,mt=null;return{setReversed:function(st){if(ct!==st){let wt=t.get("EXT_clip_control");st?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),ct=st;let Mt=mt;mt=null,this.setClear(Mt)}},getReversed:function(){return ct},setTest:function(st){st?it(e.DEPTH_TEST):vt(e.DEPTH_TEST)},setMask:function(st){$!==st&&!N&&(e.depthMask(st),$=st)},setFunc:function(st){if(ct&&(st=tb[st]),ut!==st){switch(st){case Oh:e.depthFunc(e.NEVER);break;case Ph:e.depthFunc(e.ALWAYS);break;case Bh:e.depthFunc(e.LESS);break;case po:e.depthFunc(e.LEQUAL);break;case zh:e.depthFunc(e.EQUAL);break;case Fh:e.depthFunc(e.GEQUAL);break;case Hh:e.depthFunc(e.GREATER);break;case Vh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ut=st}},setLocked:function(st){N=st},setClear:function(st){mt!==st&&(mt=st,ct&&(st=1-st),e.clearDepth(st))},reset:function(){N=!1,$=null,ut=null,mt=null,ct=!1}}}function s(){let N=!1,ct=null,$=null,ut=null,mt=null,st=null,wt=null,Mt=null,ye=null;return{setTest:function(se){N||(se?it(e.STENCIL_TEST):vt(e.STENCIL_TEST))},setMask:function(se){ct!==se&&!N&&(e.stencilMask(se),ct=se)},setFunc:function(se,yi,Li){($!==se||ut!==yi||mt!==Li)&&(e.stencilFunc(se,yi,Li),$=se,ut=yi,mt=Li)},setOp:function(se,yi,Li){(st!==se||wt!==yi||Mt!==Li)&&(e.stencilOp(se,yi,Li),st=se,wt=yi,Mt=Li)},setLocked:function(se){N=se},setClear:function(se){ye!==se&&(e.clearStencil(se),ye=se)},reset:function(){N=!1,ct=null,$=null,ut=null,mt=null,st=null,wt=null,Mt=null,ye=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},p={},u={},d=new WeakMap,_=[],M=null,g=!1,h=null,m=null,S=null,y=null,E=null,T=null,w=null,x=new kt(0,0,0),A=0,R=!1,U=null,F=null,q=null,O=null,k=null,Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,j=0,X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=j>=2);let Z=null,nt={},Ct=e.getParameter(e.SCISSOR_BOX),At=e.getParameter(e.VIEWPORT),ge=new Ne().fromArray(Ct),Qt=new Ne().fromArray(At);function ee(N,ct,$,ut){let mt=new Uint8Array(4),st=e.createTexture();e.bindTexture(N,st),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let wt=0;wt<$;wt++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(ct,0,e.RGBA,1,1,ut,0,e.RGBA,e.UNSIGNED_BYTE,mt):e.texImage2D(ct+wt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,mt);return st}let K={};K[e.TEXTURE_2D]=ee(e.TEXTURE_2D,e.TEXTURE_2D,1),K[e.TEXTURE_CUBE_MAP]=ee(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[e.TEXTURE_2D_ARRAY]=ee(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),K[e.TEXTURE_3D]=ee(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),it(e.DEPTH_TEST),r.setFunc(po),Zt(!1),Ce(Og),it(e.CULL_FACE),te(Zi);function it(N){f[N]!==!0&&(e.enable(N),f[N]=!0)}function vt(N){f[N]!==!1&&(e.disable(N),f[N]=!1)}function Ot(N,ct){return u[N]!==ct?(e.bindFramebuffer(N,ct),u[N]=ct,N===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ct),N===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ct),!0):!1}function _t(N,ct){let $=_,ut=!1;if(N){$=d.get(ct),$===void 0&&($=[],d.set(ct,$));let mt=N.textures;if($.length!==mt.length||$[0]!==e.COLOR_ATTACHMENT0){for(let st=0,wt=mt.length;st<wt;st++)$[st]=e.COLOR_ATTACHMENT0+st;$.length=mt.length,ut=!0}}else $[0]!==e.BACK&&($[0]=e.BACK,ut=!0);ut&&e.drawBuffers($)}function Vt(N){return M!==N?(e.useProgram(N),M=N,!0):!1}let Ye={[Qa]:e.FUNC_ADD,[SM]:e.FUNC_SUBTRACT,[MM]:e.FUNC_REVERSE_SUBTRACT};Ye[bM]=e.MIN,Ye[EM]=e.MAX;let Xt={[TM]:e.ZERO,[AM]:e.ONE,[wM]:e.SRC_COLOR,[Fg]:e.SRC_ALPHA,[UM]:e.SRC_ALPHA_SATURATE,[NM]:e.DST_COLOR,[RM]:e.DST_ALPHA,[CM]:e.ONE_MINUS_SRC_COLOR,[Hg]:e.ONE_MINUS_SRC_ALPHA,[LM]:e.ONE_MINUS_DST_COLOR,[DM]:e.ONE_MINUS_DST_ALPHA,[IM]:e.CONSTANT_COLOR,[OM]:e.ONE_MINUS_CONSTANT_COLOR,[PM]:e.CONSTANT_ALPHA,[BM]:e.ONE_MINUS_CONSTANT_ALPHA};function te(N,ct,$,ut,mt,st,wt,Mt,ye,se){if(N===Zi){g===!0&&(vt(e.BLEND),g=!1);return}if(g===!1&&(it(e.BLEND),g=!0),N!==xM){if(N!==h||se!==R){if((m!==Qa||E!==Qa)&&(e.blendEquation(e.FUNC_ADD),m=Qa,E=Qa),se)switch(N){case No:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Pg:e.blendFunc(e.ONE,e.ONE);break;case Bg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case zg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Lt("WebGLState: Invalid blending: ",N);break}else switch(N){case No:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Pg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Bg:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zg:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",N);break}S=null,y=null,T=null,w=null,x.set(0,0,0),A=0,h=N,R=se}return}mt=mt||ct,st=st||$,wt=wt||ut,(ct!==m||mt!==E)&&(e.blendEquationSeparate(Ye[ct],Ye[mt]),m=ct,E=mt),($!==S||ut!==y||st!==T||wt!==w)&&(e.blendFuncSeparate(Xt[$],Xt[ut],Xt[st],Xt[wt]),S=$,y=ut,T=st,w=wt),(Mt.equals(x)===!1||ye!==A)&&(e.blendColor(Mt.r,Mt.g,Mt.b,ye),x.copy(Mt),A=ye),h=N,R=!1}function _e(N,ct){N.side===Yi?vt(e.CULL_FACE):it(e.CULL_FACE);let $=N.side===Cn;ct&&($=!$),Zt($),N.blending===No&&N.transparent===!1?te(Zi):te(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);let ut=N.stencilWrite;o.setTest(ut),ut&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Rn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?it(e.SAMPLE_ALPHA_TO_COVERAGE):vt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(N){U!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),U=N)}function Ce(N){N!==_M?(it(e.CULL_FACE),N!==F&&(N===Og?e.cullFace(e.BACK):N===yM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):vt(e.CULL_FACE),F=N}function $e(N){N!==q&&(B&&e.lineWidth(N),q=N)}function Rn(N,ct,$){N?(it(e.POLYGON_OFFSET_FILL),(O!==ct||k!==$)&&(O=ct,k=$,r.getReversed()&&(ct=-ct),e.polygonOffset(ct,$))):vt(e.POLYGON_OFFSET_FILL)}function Ue(N){N?it(e.SCISSOR_TEST):vt(e.SCISSOR_TEST)}function He(N){N===void 0&&(N=e.TEXTURE0+Q-1),Z!==N&&(e.activeTexture(N),Z=N)}function L(N,ct,$){$===void 0&&(Z===null?$=e.TEXTURE0+Q-1:$=Z);let ut=nt[$];ut===void 0&&(ut={type:void 0,texture:void 0},nt[$]=ut),(ut.type!==N||ut.texture!==ct)&&(Z!==$&&(e.activeTexture($),Z=$),e.bindTexture(N,ct||K[N]),ut.type=N,ut.texture=ct)}function pn(){let N=nt[Z];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function oe(){try{e.compressedTexImage2D(...arguments)}catch(N){Lt("WebGLState:",N)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(N){Lt("WebGLState:",N)}}function v(){try{e.texSubImage2D(...arguments)}catch(N){Lt("WebGLState:",N)}}function P(){try{e.texSubImage3D(...arguments)}catch(N){Lt("WebGLState:",N)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(N){Lt("WebGLState:",N)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(N){Lt("WebGLState:",N)}}function at(){try{e.texStorage2D(...arguments)}catch(N){Lt("WebGLState:",N)}}function rt(){try{e.texStorage3D(...arguments)}catch(N){Lt("WebGLState:",N)}}function J(){try{e.texImage2D(...arguments)}catch(N){Lt("WebGLState:",N)}}function tt(){try{e.texImage3D(...arguments)}catch(N){Lt("WebGLState:",N)}}function ot(N){return p[N]!==void 0?p[N]:e.getParameter(N)}function Et(N,ct){p[N]!==ct&&(e.pixelStorei(N,ct),p[N]=ct)}function ht(N){ge.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),ge.copy(N))}function lt(N){Qt.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Qt.copy(N))}function Tt(N,ct){let $=c.get(ct);$===void 0&&($=new WeakMap,c.set(ct,$));let ut=$.get(N);ut===void 0&&(ut=e.getUniformBlockIndex(ct,N.name),$.set(N,ut))}function Nt(N,ct){let ut=c.get(ct).get(N);l.get(ct)!==ut&&(e.uniformBlockBinding(ct,ut,N.__bindingPointIndex),l.set(ct,ut))}function Bt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},Z=null,nt={},u={},d=new WeakMap,_=[],M=null,g=!1,h=null,m=null,S=null,y=null,E=null,T=null,w=null,x=new kt(0,0,0),A=0,R=!1,U=null,F=null,q=null,O=null,k=null,ge.set(0,0,e.canvas.width,e.canvas.height),Qt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:it,disable:vt,bindFramebuffer:Ot,drawBuffers:_t,useProgram:Vt,setBlending:te,setMaterial:_e,setFlipSided:Zt,setCullFace:Ce,setLineWidth:$e,setPolygonOffset:Rn,setScissorTest:Ue,activeTexture:He,bindTexture:L,unbindTexture:pn,compressedTexImage2D:oe,compressedTexImage3D:C,texImage2D:J,texImage3D:tt,pixelStorei:Et,getParameter:ot,updateUBOMapping:Tt,uniformBlockBinding:Nt,texStorage2D:at,texStorage3D:rt,texSubImage2D:v,texSubImage3D:P,compressedTexSubImage2D:G,compressedTexSubImage3D:Y,scissor:ht,viewport:lt,reset:Bt}}function T2(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,f=new WeakMap,p=new Set,u,d=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,v){return _?new OffscreenCanvas(C,v):Jl("canvas")}function g(C,v,P){let G=1,Y=oe(C);if((Y.width>P||Y.height>P)&&(G=P/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let at=Math.floor(G*Y.width),rt=Math.floor(G*Y.height);u===void 0&&(u=M(at,rt));let J=v?M(at,rt):u;return J.width=at,J.height=rt,J.getContext("2d").drawImage(C,0,0,at,rt),Rt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+at+"x"+rt+")."),J}else return"data"in C&&Rt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function h(C){return C.generateMipmaps}function m(C){e.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(C,v,P,G,Y,at=!1){if(C!==null){if(e[C]!==void 0)return e[C];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt;G&&(rt=t.get("EXT_texture_norm16"),rt||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===e.RED&&(P===e.FLOAT&&(J=e.R32F),P===e.HALF_FLOAT&&(J=e.R16F),P===e.UNSIGNED_BYTE&&(J=e.R8),P===e.UNSIGNED_SHORT&&rt&&(J=rt.R16_EXT),P===e.SHORT&&rt&&(J=rt.R16_SNORM_EXT)),v===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(J=e.R8UI),P===e.UNSIGNED_SHORT&&(J=e.R16UI),P===e.UNSIGNED_INT&&(J=e.R32UI),P===e.BYTE&&(J=e.R8I),P===e.SHORT&&(J=e.R16I),P===e.INT&&(J=e.R32I)),v===e.RG&&(P===e.FLOAT&&(J=e.RG32F),P===e.HALF_FLOAT&&(J=e.RG16F),P===e.UNSIGNED_BYTE&&(J=e.RG8),P===e.UNSIGNED_SHORT&&rt&&(J=rt.RG16_EXT),P===e.SHORT&&rt&&(J=rt.RG16_SNORM_EXT)),v===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(J=e.RG8UI),P===e.UNSIGNED_SHORT&&(J=e.RG16UI),P===e.UNSIGNED_INT&&(J=e.RG32UI),P===e.BYTE&&(J=e.RG8I),P===e.SHORT&&(J=e.RG16I),P===e.INT&&(J=e.RG32I)),v===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(J=e.RGB8UI),P===e.UNSIGNED_SHORT&&(J=e.RGB16UI),P===e.UNSIGNED_INT&&(J=e.RGB32UI),P===e.BYTE&&(J=e.RGB8I),P===e.SHORT&&(J=e.RGB16I),P===e.INT&&(J=e.RGB32I)),v===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(J=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(J=e.RGBA16UI),P===e.UNSIGNED_INT&&(J=e.RGBA32UI),P===e.BYTE&&(J=e.RGBA8I),P===e.SHORT&&(J=e.RGBA16I),P===e.INT&&(J=e.RGBA32I)),v===e.RGB&&(P===e.UNSIGNED_SHORT&&rt&&(J=rt.RGB16_EXT),P===e.SHORT&&rt&&(J=rt.RGB16_SNORM_EXT),P===e.UNSIGNED_INT_5_9_9_9_REV&&(J=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(J=e.R11F_G11F_B10F)),v===e.RGBA){let tt=at?Kl:Jt.getTransfer(Y);P===e.FLOAT&&(J=e.RGBA32F),P===e.HALF_FLOAT&&(J=e.RGBA16F),P===e.UNSIGNED_BYTE&&(J=tt===re?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT&&rt&&(J=rt.RGBA16_EXT),P===e.SHORT&&rt&&(J=rt.RGBA16_SNORM_EXT),P===e.UNSIGNED_SHORT_4_4_4_4&&(J=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(J=e.RGB5_A1)}return(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function E(C,v){let P;return C?v===null||v===Ci||v===Uo?P=e.DEPTH24_STENCIL8:v===Ri?P=e.DEPTH32F_STENCIL8:v===Lo&&(P=e.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ci||v===Uo?P=e.DEPTH_COMPONENT24:v===Ri?P=e.DEPTH_COMPONENT32F:v===Lo&&(P=e.DEPTH_COMPONENT16),P}function T(C,v){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==fn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){let v=C.target;v.removeEventListener("dispose",w),A(v),v.isVideoTexture&&f.delete(v),v.isHTMLTexture&&p.delete(v)}function x(C){let v=C.target;v.removeEventListener("dispose",x),U(v)}function A(C){let v=i.get(C);if(v.__webglInit===void 0)return;let P=C.source,G=d.get(P);if(G){let Y=G[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(C),Object.keys(G).length===0&&d.delete(P)}i.remove(C)}function R(C){let v=i.get(C);e.deleteTexture(v.__webglTexture);let P=C.source,G=d.get(P);delete G[v.__cacheKey],r.memory.textures--}function U(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let Y=0;Y<v.__webglFramebuffer[G].length;Y++)e.deleteFramebuffer(v.__webglFramebuffer[G][Y]);else e.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)e.deleteFramebuffer(v.__webglFramebuffer[G]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let P=C.textures;for(let G=0,Y=P.length;G<Y;G++){let at=i.get(P[G]);at.__webglTexture&&(e.deleteTexture(at.__webglTexture),r.memory.textures--),i.remove(P[G])}i.remove(C)}let F=0;function q(){F=0}function O(){return F}function k(C){F=C}function Q(){let C=F;return C>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,C}function B(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function j(C,v){let P=i.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&P.__version!==C.version){let G=C.image;if(G===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(P,C,v);return}}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+v)}function X(C,v){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){vt(P,C,v);return}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+v)}function Z(C,v){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){vt(P,C,v);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+v)}function nt(C,v){let P=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&P.__version!==C.version){Ot(P,C,v);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+v)}let Ct={[Gh]:e.REPEAT,[ki]:e.CLAMP_TO_EDGE,[kh]:e.MIRRORED_REPEAT},At={[an]:e.NEAREST,[HM]:e.NEAREST_MIPMAP_NEAREST,[gc]:e.NEAREST_MIPMAP_LINEAR,[fn]:e.LINEAR,[vf]:e.LINEAR_MIPMAP_NEAREST,[xa]:e.LINEAR_MIPMAP_LINEAR},ge={[XM]:e.NEVER,[KM]:e.ALWAYS,[WM]:e.LESS,[id]:e.LEQUAL,[qM]:e.EQUAL,[sd]:e.GEQUAL,[YM]:e.GREATER,[ZM]:e.NOTEQUAL};function Qt(C,v){if(v.type===Ri&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===fn||v.magFilter===vf||v.magFilter===gc||v.magFilter===xa||v.minFilter===fn||v.minFilter===vf||v.minFilter===gc||v.minFilter===xa)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,Ct[v.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,Ct[v.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,Ct[v.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,At[v.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,At[v.minFilter]),v.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,ge[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==gc&&v.minFilter!==xa||v.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ee(C,v){let P=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));let G=v.source,Y=d.get(G);Y===void 0&&(Y={},d.set(G,Y));let at=B(v);if(at!==C.__cacheKey){Y[at]===void 0&&(Y[at]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),Y[at].usedTimes++;let rt=Y[C.__cacheKey];rt!==void 0&&(Y[C.__cacheKey].usedTimes--,rt.usedTimes===0&&R(v)),C.__cacheKey=at,C.__webglTexture=Y[at].texture}return P}function K(C,v,P){return Math.floor(Math.floor(C/P)/v)}function it(C,v,P,G){let at=C.updateRanges;if(at.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,v.width,v.height,P,G,v.data);else{at.sort((Et,ht)=>Et.start-ht.start);let rt=0;for(let Et=1;Et<at.length;Et++){let ht=at[rt],lt=at[Et],Tt=ht.start+ht.count,Nt=K(lt.start,v.width,4),Bt=K(ht.start,v.width,4);lt.start<=Tt+1&&Nt===Bt&&K(lt.start+lt.count-1,v.width,4)===Nt?ht.count=Math.max(ht.count,lt.start+lt.count-ht.start):(++rt,at[rt]=lt)}at.length=rt+1;let J=n.getParameter(e.UNPACK_ROW_LENGTH),tt=n.getParameter(e.UNPACK_SKIP_PIXELS),ot=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,v.width);for(let Et=0,ht=at.length;Et<ht;Et++){let lt=at[Et],Tt=Math.floor(lt.start/4),Nt=Math.ceil(lt.count/4),Bt=Tt%v.width,N=Math.floor(Tt/v.width),ct=Nt,$=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Bt),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,Bt,N,ct,$,P,G,v.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,J),n.pixelStorei(e.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(e.UNPACK_SKIP_ROWS,ot)}}function vt(C,v,P){let G=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=e.TEXTURE_3D);let Y=ee(C,v),at=v.source;n.bindTexture(G,C.__webglTexture,e.TEXTURE0+P);let rt=i.get(at);if(at.version!==rt.__version||Y===!0){if(n.activeTexture(e.TEXTURE0+P),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let $=Jt.getPrimaries(Jt.workingColorSpace),ut=v.colorSpace===As?null:Jt.getPrimaries(v.colorSpace),mt=v.colorSpace===As||$===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}n.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment);let tt=g(v.image,!1,s.maxTextureSize);tt=pn(v,tt);let ot=a.convert(v.format,v.colorSpace),Et=a.convert(v.type),ht=y(v.internalFormat,ot,Et,v.normalized,v.colorSpace,v.isVideoTexture);Qt(G,v);let lt,Tt=v.mipmaps,Nt=v.isVideoTexture!==!0,Bt=rt.__version===void 0||Y===!0,N=at.dataReady,ct=T(v,tt);if(v.isDepthTexture)ht=E(v.format===Sa,v.type),Bt&&(Nt?n.texStorage2D(e.TEXTURE_2D,1,ht,tt.width,tt.height):n.texImage2D(e.TEXTURE_2D,0,ht,tt.width,tt.height,0,ot,Et,null));else if(v.isDataTexture)if(Tt.length>0){Nt&&Bt&&n.texStorage2D(e.TEXTURE_2D,ct,ht,Tt[0].width,Tt[0].height);for(let $=0,ut=Tt.length;$<ut;$++)lt=Tt[$],Nt?N&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ot,Et,lt.data):n.texImage2D(e.TEXTURE_2D,$,ht,lt.width,lt.height,0,ot,Et,lt.data);v.generateMipmaps=!1}else Nt?(Bt&&n.texStorage2D(e.TEXTURE_2D,ct,ht,tt.width,tt.height),N&&it(v,tt,ot,Et)):n.texImage2D(e.TEXTURE_2D,0,ht,tt.width,tt.height,0,ot,Et,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Nt&&Bt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,ht,Tt[0].width,Tt[0].height,tt.depth);for(let $=0,ut=Tt.length;$<ut;$++)if(lt=Tt[$],v.format!==_i)if(ot!==null)if(Nt){if(N)if(v.layerUpdates.size>0){let mt=u0(lt.width,lt.height,v.format,v.type);for(let st of v.layerUpdates){let wt=lt.data.subarray(st*mt/lt.data.BYTES_PER_ELEMENT,(st+1)*mt/lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,st,lt.width,lt.height,1,ot,wt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,lt.width,lt.height,tt.depth,ot,lt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,ht,lt.width,lt.height,tt.depth,0,lt.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,lt.width,lt.height,tt.depth,ot,Et,lt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,$,ht,lt.width,lt.height,tt.depth,0,ot,Et,lt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Nt&&Bt&&n.texStorage2D(e.TEXTURE_2D,ct,ht,Tt[0].width,Tt[0].height);for(let $=0,ut=Tt.length;$<ut;$++)lt=Tt[$],v.format!==_i?ot!==null?Nt?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ot,lt.data):n.compressedTexImage2D(e.TEXTURE_2D,$,ht,lt.width,lt.height,0,lt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?N&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ot,Et,lt.data):n.texImage2D(e.TEXTURE_2D,$,ht,lt.width,lt.height,0,ot,Et,lt.data)}else if(v.isDataArrayTexture)if(Nt){if(Bt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,ht,tt.width,tt.height,tt.depth),N)if(v.layerUpdates.size>0){let $=u0(tt.width,tt.height,v.format,v.type);for(let ut of v.layerUpdates){let mt=tt.data.subarray(ut*$/tt.data.BYTES_PER_ELEMENT,(ut+1)*$/tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ut,tt.width,tt.height,1,ot,Et,mt)}v.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ot,Et,tt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ht,tt.width,tt.height,tt.depth,0,ot,Et,tt.data);else if(v.isData3DTexture)Nt?(Bt&&n.texStorage3D(e.TEXTURE_3D,ct,ht,tt.width,tt.height,tt.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ot,Et,tt.data)):n.texImage3D(e.TEXTURE_3D,0,ht,tt.width,tt.height,tt.depth,0,ot,Et,tt.data);else if(v.isFramebufferTexture){if(Bt)if(Nt)n.texStorage2D(e.TEXTURE_2D,ct,ht,tt.width,tt.height);else{let $=tt.width,ut=tt.height;for(let mt=0;mt<ct;mt++)n.texImage2D(e.TEXTURE_2D,mt,ht,$,ut,0,ot,Et,null),$>>=1,ut>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in e){let $=e.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),tt.parentNode!==$){$.appendChild(tt),p.add(v),$.onpaint=ut=>{let mt=ut.changedElements;for(let st of p)mt.includes(st.image)&&(st.needsUpdate=!0)},$.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,tt);else{let mt=e.RGBA,st=e.RGBA,wt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,mt,st,wt,tt)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Nt&&Bt){let $=oe(Tt[0]);n.texStorage2D(e.TEXTURE_2D,ct,ht,$.width,$.height)}for(let $=0,ut=Tt.length;$<ut;$++)lt=Tt[$],Nt?N&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ot,Et,lt):n.texImage2D(e.TEXTURE_2D,$,ht,ot,Et,lt);v.generateMipmaps=!1}else if(Nt){if(Bt){let $=oe(tt);n.texStorage2D(e.TEXTURE_2D,ct,ht,$.width,$.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ot,Et,tt)}else n.texImage2D(e.TEXTURE_2D,0,ht,ot,Et,tt);h(v)&&m(G),rt.__version=at.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Ot(C,v,P){if(v.image.length!==6)return;let G=ee(C,v),Y=v.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+P);let at=i.get(Y);if(Y.version!==at.__version||G===!0){n.activeTexture(e.TEXTURE0+P);let rt=Jt.getPrimaries(Jt.workingColorSpace),J=v.colorSpace===As?null:Jt.getPrimaries(v.colorSpace),tt=v.colorSpace===As||rt===J?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ot=v.isCompressedTexture||v.image[0].isCompressedTexture,Et=v.image[0]&&v.image[0].isDataTexture,ht=[];for(let st=0;st<6;st++)!ot&&!Et?ht[st]=g(v.image[st],!0,s.maxCubemapSize):ht[st]=Et?v.image[st].image:v.image[st],ht[st]=pn(v,ht[st]);let lt=ht[0],Tt=a.convert(v.format,v.colorSpace),Nt=a.convert(v.type),Bt=y(v.internalFormat,Tt,Nt,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,ct=at.__version===void 0||G===!0,$=Y.dataReady,ut=T(v,lt);Qt(e.TEXTURE_CUBE_MAP,v);let mt;if(ot){N&&ct&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ut,Bt,lt.width,lt.height);for(let st=0;st<6;st++){mt=ht[st].mipmaps;for(let wt=0;wt<mt.length;wt++){let Mt=mt[wt];v.format!==_i?Tt!==null?N?$&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,0,0,Mt.width,Mt.height,Tt,Mt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,Bt,Mt.width,Mt.height,0,Mt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,0,0,Mt.width,Mt.height,Tt,Nt,Mt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,Bt,Mt.width,Mt.height,0,Tt,Nt,Mt.data)}}}else{if(mt=v.mipmaps,N&&ct){mt.length>0&&ut++;let st=oe(ht[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ut,Bt,st.width,st.height)}for(let st=0;st<6;st++)if(Et){N?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ht[st].width,ht[st].height,Tt,Nt,ht[st].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Bt,ht[st].width,ht[st].height,0,Tt,Nt,ht[st].data);for(let wt=0;wt<mt.length;wt++){let ye=mt[wt].image[st].image;N?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,0,0,ye.width,ye.height,Tt,Nt,ye.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,Bt,ye.width,ye.height,0,Tt,Nt,ye.data)}}else{N?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Tt,Nt,ht[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Bt,Tt,Nt,ht[st]);for(let wt=0;wt<mt.length;wt++){let Mt=mt[wt];N?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,0,0,Tt,Nt,Mt.image[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,Bt,Tt,Nt,Mt.image[st])}}}h(v)&&m(e.TEXTURE_CUBE_MAP),at.__version=Y.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function _t(C,v,P,G,Y,at){let rt=a.convert(P.format,P.colorSpace),J=a.convert(P.type),tt=y(P.internalFormat,rt,J,P.normalized,P.colorSpace),ot=i.get(v),Et=i.get(P);if(Et.__renderTarget=v,!ot.__hasExternalTextures){let ht=Math.max(1,v.width>>at),lt=Math.max(1,v.height>>at);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?n.texImage3D(Y,at,tt,ht,lt,v.depth,0,rt,J,null):n.texImage2D(Y,at,tt,ht,lt,0,rt,J,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),He(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,Y,Et.__webglTexture,0,Ue(v)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,Y,Et.__webglTexture,at),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Vt(C,v,P){if(e.bindRenderbuffer(e.RENDERBUFFER,C),v.depthBuffer){let G=v.depthTexture,Y=G&&G.isDepthTexture?G.type:null,at=E(v.stencilBuffer,Y),rt=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;He(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ue(v),at,v.width,v.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ue(v),at,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,at,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,rt,e.RENDERBUFFER,C)}else{let G=v.textures;for(let Y=0;Y<G.length;Y++){let at=G[Y],rt=a.convert(at.format,at.colorSpace),J=a.convert(at.type),tt=y(at.internalFormat,rt,J,at.normalized,at.colorSpace);He(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ue(v),tt,v.width,v.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ue(v),tt,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,tt,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ye(C,v,P){let G=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(v.depthTexture);if(Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),Y.__webglTexture===void 0){Y.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),Qt(e.TEXTURE_CUBE_MAP,v.depthTexture);let ot=a.convert(v.depthTexture.format),Et=a.convert(v.depthTexture.type),ht;v.depthTexture.format===Wi?ht=e.DEPTH_COMPONENT24:v.depthTexture.format===Sa&&(ht=e.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ht,v.width,v.height,0,ot,Et,null)}}else j(v.depthTexture,0);let at=Y.__webglTexture,rt=Ue(v),J=G?e.TEXTURE_CUBE_MAP_POSITIVE_X+P:e.TEXTURE_2D,tt=v.depthTexture.format===Sa?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(v.depthTexture.format===Wi)He(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,tt,J,at,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,tt,J,at,0);else if(v.depthTexture.format===Sa)He(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,tt,J,at,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,tt,J,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(C){let v=i.get(C),P=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){let Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=G}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(P)for(let G=0;G<6;G++)Ye(v.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?Ye(v.__webglFramebuffer[0],C,0):Ye(v.__webglFramebuffer,C,0)}else if(P){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=e.createRenderbuffer(),Vt(v.__webglDepthbuffer[G],C,!1);else{let Y=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,at)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),Vt(v.__webglDepthbuffer,C,!1);else{let Y=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,at)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function te(C,v,P){let G=i.get(C);v!==void 0&&_t(G.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&Xt(C)}function _e(C){let v=C.texture,P=i.get(C),G=i.get(v);C.addEventListener("dispose",x);let Y=C.textures,at=C.isWebGLCubeRenderTarget===!0,rt=Y.length>1;if(rt||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=v.version,r.memory.textures++),at){P.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[J]=[];for(let tt=0;tt<v.mipmaps.length;tt++)P.__webglFramebuffer[J][tt]=e.createFramebuffer()}else P.__webglFramebuffer[J]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)P.__webglFramebuffer[J]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(rt)for(let J=0,tt=Y.length;J<tt;J++){let ot=i.get(Y[J]);ot.__webglTexture===void 0&&(ot.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&He(C)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let J=0;J<Y.length;J++){let tt=Y[J];P.__webglColorRenderbuffer[J]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[J]);let ot=a.convert(tt.format,tt.colorSpace),Et=a.convert(tt.type),ht=y(tt.internalFormat,ot,Et,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),lt=Ue(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,lt,ht,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.RENDERBUFFER,P.__webglColorRenderbuffer[J])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Vt(P.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(at){n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),Qt(e.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let tt=0;tt<v.mipmaps.length;tt++)_t(P.__webglFramebuffer[J][tt],C,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,tt);else _t(P.__webglFramebuffer[J],C,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);h(v)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(rt){for(let J=0,tt=Y.length;J<tt;J++){let ot=Y[J],Et=i.get(ot),ht=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ht,Et.__webglTexture),Qt(ht,ot),_t(P.__webglFramebuffer,C,ot,e.COLOR_ATTACHMENT0+J,ht,0),h(ot)&&m(ht)}n.unbindTexture()}else{let J=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(J,G.__webglTexture),Qt(J,v),v.mipmaps&&v.mipmaps.length>0)for(let tt=0;tt<v.mipmaps.length;tt++)_t(P.__webglFramebuffer[tt],C,v,e.COLOR_ATTACHMENT0,J,tt);else _t(P.__webglFramebuffer,C,v,e.COLOR_ATTACHMENT0,J,0);h(v)&&m(J),n.unbindTexture()}C.depthBuffer&&Xt(C)}function Zt(C){let v=C.textures;for(let P=0,G=v.length;P<G;P++){let Y=v[P];if(h(Y)){let at=S(C),rt=i.get(Y).__webglTexture;n.bindTexture(at,rt),m(at),n.unbindTexture()}}}let Ce=[],$e=[];function Rn(C){if(C.samples>0){if(He(C)===!1){let v=C.textures,P=C.width,G=C.height,Y=e.COLOR_BUFFER_BIT,at=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=i.get(C),J=v.length>1;if(J)for(let ot=0;ot<v.length;ot++)n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let tt=C.texture.mipmaps;tt&&tt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let ot=0;ot<v.length;ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),J){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,rt.__webglColorRenderbuffer[ot]);let Et=i.get(v[ot]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Et,0)}e.blitFramebuffer(0,0,P,G,0,0,P,G,Y,e.NEAREST),l===!0&&(Ce.length=0,$e.length=0,Ce.push(e.COLOR_ATTACHMENT0+ot),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Ce.push(at),$e.push(at),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,$e)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),J)for(let ot=0;ot<v.length;ot++){n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,rt.__webglColorRenderbuffer[ot]);let Et=i.get(v[ot]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,Et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function Ue(C){return Math.min(s.maxSamples,C.samples)}function He(C){let v=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function L(C){let v=r.render.frame;f.get(C)!==v&&(f.set(C,v),C.update())}function pn(C,v){let P=C.colorSpace,G=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||P!==Zl&&P!==As&&(Jt.getTransfer(P)===re?(G!==_i||Y!==Hn)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",P)),v}function oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=q,this.getTextureUnits=O,this.setTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=nt,this.rebindTextures=te,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function A2(e,t){function n(i,s=As){let a,r=Jt.getTransfer(s);if(i===Hn)return e.UNSIGNED_BYTE;if(i===Sf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Mf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Qg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===$g)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jg)return e.BYTE;if(i===jg)return e.SHORT;if(i===Lo)return e.UNSIGNED_SHORT;if(i===xf)return e.INT;if(i===Ci)return e.UNSIGNED_INT;if(i===Ri)return e.FLOAT;if(i===Di)return e.HALF_FLOAT;if(i===t0)return e.ALPHA;if(i===e0)return e.RGB;if(i===_i)return e.RGBA;if(i===Wi)return e.DEPTH_COMPONENT;if(i===Sa)return e.DEPTH_STENCIL;if(i===n0)return e.RED;if(i===bf)return e.RED_INTEGER;if(i===Ma)return e.RG;if(i===Ef)return e.RG_INTEGER;if(i===Tf)return e.RGBA_INTEGER;if(i===_c||i===yc||i===vc||i===xc)if(r===re)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===_c)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===_c)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Af||i===wf||i===Cf||i===Rf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Af)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Df||i===Nf||i===Lf||i===Uf||i===If||i===Sc||i===Of)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Df||i===Nf)return r===re?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Lf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Uf)return a.COMPRESSED_R11_EAC;if(i===If)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Sc)return a.COMPRESSED_RG11_EAC;if(i===Of)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pf||i===Bf||i===zf||i===Ff||i===Hf||i===Vf||i===Gf||i===kf||i===Xf||i===Wf||i===qf||i===Yf||i===Zf||i===Kf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Pf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ff)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jf||i===jf||i===Qf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Jf)return r===re?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$f||i===td||i===Mc||i===ed)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===$f)return a.COMPRESSED_RED_RGTC1_EXT;if(i===td)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ed)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Uo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}function D2(e,t){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,o0(e)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,m,S,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(g,h):h.isMeshLambertMaterial?(a(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(g,h),p(g,h)):h.isMeshPhongMaterial?(a(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(g,h),u(g,h),h.isMeshPhysicalMaterial&&d(g,h,y)):h.isMeshMatcapMaterial?(a(g,h),_(g,h)):h.isMeshDepthMaterial?a(g,h):h.isMeshDistanceMaterial?(a(g,h),M(g,h)):h.isMeshNormalMaterial?a(g,h):h.isLineBasicMaterial?(r(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,m,S):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Cn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Cn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let m=t.get(h),S=m.envMap,y=m.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(R2.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Lb),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function r(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,S){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=S*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function d(g,h,m){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Cn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.retroreflectivity>0&&(g.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function M(g,h){let m=t.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function N2(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let T=E.program;i.uniformBlockBinding(y,T)}function c(y,E){let T=s[y.id];T===void 0&&(g(y),T=f(y),s[y.id]=T,y.addEventListener("dispose",m));let w=E.program;i.updateUBOMapping(y,w);let x=t.render.frame;a[y.id]!==x&&(u(y),a[y.id]=x)}function f(y){let E=p();y.__bindingPointIndex=E;let T=e.createBuffer(),w=y.__size,x=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,w,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,T),T}function p(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let E=s[y.id],T=y.uniforms,w=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let x=0,A=T.length;x<A;x++){let R=T[x];if(Array.isArray(R))for(let U=0,F=R.length;U<F;U++)d(R[U],x,U,w);else d(R,x,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(y,E,T,w){if(M(y,E,T,w)===!0){let x=y.__offset,A=y.value;if(Array.isArray(A)){let R=0;for(let U=0;U<A.length;U++){let F=A[U],q=h(F);_(F,y.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,y.__data)}}function _(y,E,T){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,T)}function M(y,E,T,w){let x=y.value,A=E+"_"+T;if(w[A]===void 0)return typeof x=="number"||typeof x=="boolean"?w[A]=x:ArrayBuffer.isView(x)?w[A]=x.slice():w[A]=x.clone(),!0;{let R=w[A];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return w[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(y){let E=y.uniforms,T=0,w=16;for(let A=0,R=E.length;A<R;A++){let U=Array.isArray(E[A])?E[A]:[E[A]];for(let F=0,q=U.length;F<q;F++){let O=U[F],k=Array.isArray(O.value)?O.value:[O.value];for(let Q=0,B=k.length;Q<B;Q++){let j=k[Q],X=h(j),Z=T%w,nt=Z%X.boundary,Ct=Z+nt;T+=nt,Ct!==0&&w-Ct<X.storage&&(T+=w-Ct),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=X.storage}}}let x=T%w;return x>0&&(T+=w-x),y.__size=T,y.__cache={},this}function h(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){let E=y.target;E.removeEventListener("dispose",m);let T=r.indexOf(E.__bindingPointIndex);r.splice(T,1),e.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function S(){for(let y in s)e.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:l,update:c,dispose:S}}function U2(){return Ki===null&&(Ki=new Zh(L2,16,16,Ma,Di),Ki.name="DFG_LUT",Ki.minFilter=fn,Ki.magFilter=fn,Ki.wrapS=ki,Ki.wrapT=ki,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var qA,YA,ZA,KA,JA,jA,QA,$A,tw,ew,nw,iw,sw,aw,rw,ow,lw,cw,uw,hw,fw,dw,pw,mw,gw,_w,yw,vw,xw,Sw,Mw,bw,Ew,Tw,Aw,ww,Cw,Rw,Dw,Nw,Lw,Uw,Iw,Ow,Pw,Bw,zw,Fw,Hw,Vw,Gw,kw,Xw,Ww,qw,Yw,Zw,Kw,Jw,jw,Qw,$w,tC,eC,nC,iC,sC,aC,rC,oC,lC,cC,uC,hC,fC,dC,pC,mC,gC,_C,yC,vC,xC,SC,MC,bC,EC,TC,AC,wC,CC,RC,DC,NC,LC,UC,IC,OC,PC,BC,zC,FC,HC,VC,GC,kC,XC,WC,qC,YC,ZC,KC,JC,jC,QC,$C,tR,eR,nR,iR,sR,aR,rR,oR,lR,cR,uR,hR,fR,dR,pR,mR,gR,_R,yR,vR,xR,SR,MR,bR,ER,TR,Ht,ft,Ji,ad,AR,wb,Po,LR,UR,IR,bc,ab,_0,y0,v0,x0,OR,er,od,ld,qR,Cb,b0,Rb,Db,Nb,cb,ub,hb,fb,db,E0,T0,A0,S0,Bo,O3,P3,gb,H3,rd,q3,Y3,K3,j3,$3,e2,i2,o2,C0,R0,m2,v2,x2,S2,M2,Tb,Ec,M0,w2,C2,D0,N0,R2,Lb,L2,Ki,cd,L0=Rc(()=>{g0();g0();qA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YA=`#ifdef USE_ALPHAHASH
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
#endif`,ZA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QA=`#ifdef USE_AOMAP
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
#endif`,$A=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tw=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ew=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aw=`#ifdef USE_IRIDESCENCE
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
#endif`,rw=`#ifdef USE_BUMPMAP
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
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mw=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,gw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_w=`vec3 transformedNormal = objectNormal;
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
#endif`,yw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mw="gl_FragColor = linearToOutputTexel( gl_FragColor );",bw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ew=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Tw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Aw=`#ifdef USE_ENVMAP
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
#endif`,ww=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uw=`#ifdef USE_GRADIENTMAP
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
}`,Iw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ow=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bw=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,zw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Fw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Xw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ww=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Kw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$w=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nC=`#if defined( USE_POINTS_UV )
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
#endif`,iC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lC=`#ifdef USE_MORPHTARGETS
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
#endif`,cC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mC=`#ifdef USE_NORMALMAP
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
#endif`,gC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_C=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,MC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,RC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,DC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,NC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,LC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UC=`#ifdef USE_SKINNING
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
#endif`,IC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OC=`#ifdef USE_SKINNING
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
#endif`,PC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HC=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VC=`#ifdef USE_TRANSMISSION
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
#endif`,GC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YC=`uniform sampler2D t2D;
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
}`,ZC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QC=`#include <common>
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
}`,$C=`#if DEPTH_PACKING == 3200
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
}`,tR=`#define DISTANCE
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
}`,eR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,nR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sR=`uniform float scale;
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
}`,aR=`uniform vec3 diffuse;
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
}`,rR=`#include <common>
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
}`,oR=`uniform vec3 diffuse;
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
}`,lR=`#define LAMBERT
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
}`,cR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,uR=`#define MATCAP
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
}`,hR=`#define MATCAP
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
}`,fR=`#define NORMAL
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
}`,dR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pR=`#define PHONG
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
}`,mR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,gR=`#define STANDARD
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
}`,_R=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,yR=`#define TOON
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
}`,vR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,xR=`uniform float size;
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
}`,SR=`uniform vec3 diffuse;
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
}`,MR=`#include <common>
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
}`,bR=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,ER=`uniform float rotation;
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
}`,TR=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:qA,alphahash_pars_fragment:YA,alphamap_fragment:ZA,alphamap_pars_fragment:KA,alphatest_fragment:JA,alphatest_pars_fragment:jA,aomap_fragment:QA,aomap_pars_fragment:$A,batching_pars_vertex:tw,batching_vertex:ew,begin_vertex:nw,beginnormal_vertex:iw,bsdfs:sw,iridescence_fragment:aw,bumpmap_pars_fragment:rw,clipping_planes_fragment:ow,clipping_planes_pars_fragment:lw,clipping_planes_pars_vertex:cw,clipping_planes_vertex:uw,color_fragment:hw,color_pars_fragment:fw,color_pars_vertex:dw,color_vertex:pw,common:mw,cube_uv_reflection_fragment:gw,defaultnormal_vertex:_w,displacementmap_pars_vertex:yw,displacementmap_vertex:vw,emissivemap_fragment:xw,emissivemap_pars_fragment:Sw,colorspace_fragment:Mw,colorspace_pars_fragment:bw,envmap_fragment:Ew,envmap_common_pars_fragment:Tw,envmap_pars_fragment:Aw,envmap_pars_vertex:ww,envmap_physical_pars_fragment:zw,envmap_vertex:Cw,fog_vertex:Rw,fog_pars_vertex:Dw,fog_fragment:Nw,fog_pars_fragment:Lw,gradientmap_pars_fragment:Uw,lightmap_pars_fragment:Iw,lights_lambert_fragment:Ow,lights_lambert_pars_fragment:Pw,lights_pars_begin:Bw,lights_toon_fragment:Fw,lights_toon_pars_fragment:Hw,lights_phong_fragment:Vw,lights_phong_pars_fragment:Gw,lights_physical_fragment:kw,lights_physical_pars_fragment:Xw,lights_fragment_begin:Ww,lights_fragment_maps:qw,lights_fragment_end:Yw,lightprobes_pars_fragment:Zw,logdepthbuf_fragment:Kw,logdepthbuf_pars_fragment:Jw,logdepthbuf_pars_vertex:jw,logdepthbuf_vertex:Qw,map_fragment:$w,map_pars_fragment:tC,map_particle_fragment:eC,map_particle_pars_fragment:nC,metalnessmap_fragment:iC,metalnessmap_pars_fragment:sC,morphinstance_vertex:aC,morphcolor_vertex:rC,morphnormal_vertex:oC,morphtarget_pars_vertex:lC,morphtarget_vertex:cC,normal_fragment_begin:uC,normal_fragment_maps:hC,normal_pars_fragment:fC,normal_pars_vertex:dC,normal_vertex:pC,normalmap_pars_fragment:mC,clearcoat_normal_fragment_begin:gC,clearcoat_normal_fragment_maps:_C,clearcoat_pars_fragment:yC,iridescence_pars_fragment:vC,opaque_fragment:xC,packing:SC,premultiplied_alpha_fragment:MC,project_vertex:bC,dithering_fragment:EC,dithering_pars_fragment:TC,roughnessmap_fragment:AC,roughnessmap_pars_fragment:wC,shadowmap_pars_fragment:CC,shadowmap_pars_vertex:RC,shadowmap_vertex:DC,shadowmask_pars_fragment:NC,skinbase_vertex:LC,skinning_pars_vertex:UC,skinning_vertex:IC,skinnormal_vertex:OC,specularmap_fragment:PC,specularmap_pars_fragment:BC,tonemapping_fragment:zC,tonemapping_pars_fragment:FC,transmission_fragment:HC,transmission_pars_fragment:VC,uv_pars_fragment:GC,uv_pars_vertex:kC,uv_vertex:XC,worldpos_vertex:WC,background_vert:qC,background_frag:YC,backgroundCube_vert:ZC,backgroundCube_frag:KC,cube_vert:JC,cube_frag:jC,depth_vert:QC,depth_frag:$C,distance_vert:tR,distance_frag:eR,equirect_vert:nR,equirect_frag:iR,linedashed_vert:sR,linedashed_frag:aR,meshbasic_vert:rR,meshbasic_frag:oR,meshlambert_vert:lR,meshlambert_frag:cR,meshmatcap_vert:uR,meshmatcap_frag:hR,meshnormal_vert:fR,meshnormal_frag:dR,meshphong_vert:pR,meshphong_frag:mR,meshphysical_vert:gR,meshphysical_frag:_R,meshtoon_vert:yR,meshtoon_frag:vR,points_vert:xR,points_frag:SR,shadow_vert:MR,shadow_frag:bR,sprite_vert:ER,sprite_frag:TR},ft={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Ji={basic:{uniforms:Sn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Sn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Sn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Sn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Sn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Sn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Sn([ft.points,ft.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Sn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Sn([ft.common,ft.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Sn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Sn([ft.sprite,ft.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Sn([ft.common,ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Sn([ft.lights,ft.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Ji.physical={uniforms:Sn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};ad={r:0,b:0,g:0},AR=new Se,wb=new It;wb.set(-1,0,0,0,1,0,0,0,1);Po=4,LR=6,UR=20,IR=256,bc=new wo,ab=new kt,_0=null,y0=0,v0=0,x0=!1,OR=new I,er=new I,od=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=OR}=a;_0=this._renderer.getRenderTarget(),y0=this._renderer.getActiveCubeFace(),v0=this._renderer.getActiveMipmapLevel(),x0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ob(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_0,y0,v0),this._renderer.xr.enabled=x0,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===va||t.mapping===$a?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_0=this._renderer.getRenderTarget(),y0=this._renderer.getActiveCubeFace(),v0=this._renderer.getActiveMipmapLevel(),x0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Di,format:_i,colorSpace:Zl,depthBuffer:!1},s=rb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rb(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=PR(a)),this._blurMaterial=zR(a,t,n),this._ggxMaterial=BR(a,t,n)}return s}_compileMaterial(t){let n=new xn(new rn,t);this._renderer.compile(n,bc)}_sceneToCubeUV(t,n,i,s,a){let l=new vn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(ab),p.toneMapping=wi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xn(new Eo,new Ja({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,g=M.material,h=!1,m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,h=!0):(g.color.copy(ab),h=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[S],a.y,a.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[S],a.z)):(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[S]));let E=this._cubeSize;Oo(s,y*E,S>2?E:0,E,E),p.setRenderTarget(s),h&&p.render(M,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===va||t.mapping===$a;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ob());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Oo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,bc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=c*1.25,d=p*u,{_lodMax:_}=this,M=this._sizeLods[i],g=3*M*(i>_-Po?i-_+Po:0),h=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-n,Oo(a,g,h,3*M,2*M),s.setRenderTarget(a),s.render(o,bc),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=_-i,Oo(t,g,h,3*M,2*M),s.setRenderTarget(t),s.render(o,bc)}_blur(t,n,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,n,i,r),this._blurPass(a,t,i,i,r)}_blurPass(t,n,i,s,a){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let f=this._sizeLods[s],p=3*f*(s>this._lodMax-Po?s-this._lodMax+Po:0),u=4*(this._cubeSize-f);Oo(n,p,u,3*f,2*f),r.setRenderTarget(n),r.render(l,bc)}};ld=class extends Fn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ic(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Eo(5,5,5),a=new ni({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Zi});a.uniforms.tEquirect.value=n;let r=new xn(s,a),o=n.minFilter;return n.minFilter===xa&&(n.minFilter=fn),new pf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};qR={[Gg]:"LINEAR_TONE_MAPPING",[kg]:"REINHARD_TONE_MAPPING",[Xg]:"CINEON_TONE_MAPPING",[Wg]:"ACES_FILMIC_TONE_MAPPING",[Yg]:"AGX_TONE_MAPPING",[Zg]:"NEUTRAL_TONE_MAPPING",[qg]:"CUSTOM_TONE_MAPPING"};Cb=new zn,b0=new fa(1,1),Rb=new jl,Db=new Yh,Nb=new ic,cb=[],ub=[],hb=new Float32Array(16),fb=new Float32Array(9),db=new Float32Array(4);E0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=d3(n.type)}},T0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=U3(n.type)}},A0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},S0=/(\w+)(\])?(\[|\.)?/g;Bo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);I3(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};O3=37297,P3=0;gb=new It;H3={[Gg]:"Linear",[kg]:"Reinhard",[Xg]:"Cineon",[Wg]:"ACESFilmic",[Yg]:"AgX",[Zg]:"Neutral",[qg]:"Custom"};rd=new I;q3=/^[ \t]*#include +<([\w\d./]+)>/gm;Y3=new Map;K3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;j3={[pc]:"SHADOWMAP_TYPE_PCF",[Do]:"SHADOWMAP_TYPE_VSM"};$3={[va]:"ENVMAP_TYPE_CUBE",[$a]:"ENVMAP_TYPE_CUBE",[mc]:"ENVMAP_TYPE_CUBE_UV"};e2={[$a]:"ENVMAP_MODE_REFRACTION"};i2={[Vg]:"ENVMAP_BLENDING_MULTIPLY",[zM]:"ENVMAP_BLENDING_MIX",[FM]:"ENVMAP_BLENDING_ADD"};o2=0,C0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new R0(t),n.set(t,i)),i}},R0=class{constructor(t){this.id=o2++,this.code=t,this.usedTimes=0}};m2=0;v2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,S2=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],M2=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Tb=new Se,Ec=new I,M0=new I;w2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C2=`
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

}`,D0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new sc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ni({vertexShader:w2,fragmentShader:C2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xn(new rc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},N0=class extends Ai{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,_=null,M=typeof XRWebGLBinding<"u",g=new D0,h={},m=n.getContextAttributes(),S=null,y=null,E=[],T=[],w=new Dt,x=null,A=null,R=new vn;R.viewport=new Ne;let U=new vn;U.viewport=new Ne;let F=[R,U],q=new mf,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let it=E[K];return it===void 0&&(it=new xo,E[K]=it),it.getTargetRaySpace()},this.getControllerGrip=function(K){let it=E[K];return it===void 0&&(it=new xo,E[K]=it),it.getGripSpace()},this.getHand=function(K){let it=E[K];return it===void 0&&(it=new xo,E[K]=it),it.getHandSpace()};function Q(K){let it=T.indexOf(K.inputSource);if(it===-1)return;let vt=E[it];vt!==void 0&&(vt.update(K.inputSource,K.frame,c||r),vt.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",j);for(let K=0;K<E.length;K++){let it=T[K];it!==null&&(T[K]=null,E[K].disconnect(it))}O=null,k=null,g.reset();for(let K in h)delete h[K];if(t.setRenderTarget(S),d=null,u=null,p=null,s=null,y=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),A!==null){let K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",B),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ot=null,_t=null;m.depth&&(_t=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,vt=m.stencil?Sa:Wi,Ot=m.stencil?Uo:Ci);let Vt={colorFormat:n.RGBA8,depthFormat:_t,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Vt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Fn(u.textureWidth,u.textureHeight,{format:_i,type:Hn,depthTexture:new fa(u.textureWidth,u.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Fn(d.framebufferWidth,d.framebufferHeight,{format:_i,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(K){for(let it=0;it<K.removed.length;it++){let vt=K.removed[it],Ot=T.indexOf(vt);Ot>=0&&(T[Ot]=null,E[Ot].disconnect(vt))}for(let it=0;it<K.added.length;it++){let vt=K.added[it],Ot=T.indexOf(vt);if(Ot===-1){for(let Vt=0;Vt<E.length;Vt++)if(Vt>=T.length){T.push(vt),Ot=Vt;break}else if(T[Vt]===null){T[Vt]=vt,Ot=Vt;break}if(Ot===-1)break}let _t=E[Ot];_t&&_t.connect(vt)}}let X=new I,Z=new I;function nt(K,it,vt){X.setFromMatrixPosition(it.matrixWorld),Z.setFromMatrixPosition(vt.matrixWorld);let Ot=X.distanceTo(Z),_t=it.projectionMatrix.elements,Vt=vt.projectionMatrix.elements,Ye=_t[14]/(_t[10]-1),Xt=_t[14]/(_t[10]+1),te=(_t[9]+1)/_t[5],_e=(_t[9]-1)/_t[5],Zt=(_t[8]-1)/_t[0],Ce=(Vt[8]+1)/Vt[0],$e=Ye*Zt,Rn=Ye*Ce,Ue=Ot/(-Zt+Ce),He=Ue*-Zt;if(it.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(He),K.translateZ(Ue),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_t[10]===-1)K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let L=Ye+Ue,pn=Xt+Ue,oe=$e-He,C=Rn+(Ot-He),v=te*Xt/pn*L,P=_e*Xt/pn*L;K.projectionMatrix.makePerspective(oe,C,v,P,L,pn),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ct(K,it){it===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(it.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let it=K.near,vt=K.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),q.near=U.near=R.near=it,q.far=U.far=R.far=vt,(O!==q.near||k!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),O=q.near,k=q.far),q.layers.mask=K.layers.mask|6,R.layers.mask=q.layers.mask&-5,U.layers.mask=q.layers.mask&-3;let Ot=K.parent,_t=q.cameras;Ct(q,Ot);for(let Vt=0;Vt<_t.length;Vt++)Ct(_t[Vt],Ot);_t.length===2?nt(q,R,U):q.projectionMatrix.copy(R.projectionMatrix),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),At(K,q,Ot)};function At(K,it,vt){vt===null?K.matrix.copy(it.matrixWorld):(K.matrix.copy(vt.matrixWorld),K.matrix.invert(),K.matrix.multiply(it.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=_o*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)},this.getCameraTexture=function(K){return h[K]};let ge=null;function Qt(K,it){if(f=it.getViewerPose(c||r),_=it,f!==null){let vt=f.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Ot=!1;vt.length!==q.cameras.length&&(q.cameras.length=0,Ot=!0);for(let Xt=0;Xt<vt.length;Xt++){let te=vt[Xt],_e=null;if(d!==null)_e=d.getViewport(te);else{let Ce=p.getViewSubImage(u,te);_e=Ce.viewport,Xt===0&&(t.setRenderTargetTextures(y,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(y))}let Zt=F[Xt];Zt===void 0&&(Zt=new vn,Zt.layers.enable(Xt),Zt.viewport=new Ne,F[Xt]=Zt),Zt.matrix.fromArray(te.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(te.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(_e.x,_e.y,_e.width,_e.height),Xt===0&&(q.matrix.copy(Zt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ot===!0&&q.cameras.push(Zt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=i.getBinding();let Xt=p.getDepthInformation(vt[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,s.renderState)}if(_t&&_t.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let Xt=0;Xt<vt.length;Xt++){let te=vt[Xt].camera;if(te){let _e=h[te];_e||(_e=new sc,h[te]=_e);let Zt=p.getCameraImage(te);_e.sourceTexture=Zt}}}}for(let vt=0;vt<E.length;vt++){let Ot=T[vt],_t=E[vt];Ot!==null&&_t!==void 0&&_t.update(Ot,it,c||r)}ge&&ge(K,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),_=null}let ee=new Ab;ee.setAnimationLoop(Qt),this.setAnimationLoop=function(K){ge=K},this.dispose=function(){}}},R2=new Se,Lb=new It;Lb.set(-1,0,0,0,1,0,0,0,1);L2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;cd=class{constructor(t={}){let{canvas:n=jM(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Hn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;let M=d,g=new Set([Tf,Ef,bf]),h=new Set([Hn,Ci,Lo,Uo,Sf,Mf]),m=new Uint32Array(4),S=new Int32Array(4),y=new I,E=null,T=null,w=[],x=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,F=null,q=null,O=null,k=null;this._outputColorSpace=wn;let Q=0,B=0,j=null,X=-1,Z=null,nt=new Ne,Ct=new Ne,At=null,ge=new kt(0),Qt=0,ee=n.width,K=n.height,it=1,vt=null,Ot=null,_t=new Ne(0,0,ee,K),Vt=new Ne(0,0,ee,K),Ye=!1,Xt=new So,te=!1,_e=!1,Zt=new Se,Ce=new I,$e=new Ne,Rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function He(){return j===null?it:1}let L=i;function pn(b,D){return n.getContext(b,D)}let oe,C,v,P,G,Y,at,rt,J,tt,ot,Et,ht,lt,Tt,Nt,Bt,N,ct,$,ut,mt,st;try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",ye,!1),n.addEventListener("webglcontextrestored",se,!1),n.addEventListener("webglcontextcreationerror",yi,!1),L===null){let D="webgl2";if(L=pn(D,b),L===null)throw pn(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}wt()}catch(b){throw n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",se,!1),n.removeEventListener("webglcontextcreationerror",yi,!1),Lt("WebGLRenderer: "+b.message),b}function wt(){oe=new HR(L),oe.init(),ut=new A2(L,oe),C=new DR(L,oe,t,ut),v=new E2(L,oe),C.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),q=L.createFramebuffer(),O=L.createFramebuffer(),k=L.createFramebuffer(),P=new kR(L),G=new u2,Y=new T2(L,oe,v,G,C,ut,P),at=new FR(R),rt=new WA(L),mt=new CR(L,rt),J=new VR(L,rt,P,mt),tt=new WR(L,J,rt,mt,P),N=new XR(L,C,Y),Tt=new NR(G),ot=new c2(R,at,oe,C,mt,Tt),Et=new D2(R,G),ht=new f2,lt=new y2(oe),Bt=new wR(R,at,v,tt,_,l),Nt=new b2(R,tt,C),st=new N2(L,P,C,v),ct=new RR(L,oe,P),$=new GR(L,oe,P),P.programs=ot.programs,R.capabilities=C,R.extensions=oe,R.properties=G,R.renderLists=ht,R.shadowMap=Nt,R.state=v,R.info=P}M!==Hn&&(A=new YR(M,n.width,n.height,o,s,a));let Mt=new N0(R,L);this.xr=Mt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(b){b!==void 0&&(it=b,this.setSize(ee,K,!1))},this.getSize=function(b){return b.set(ee,K)},this.setSize=function(b,D,W=!0){if(Mt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=b,K=D,n.width=Math.floor(b*it),n.height=Math.floor(D*it),W===!0&&(n.style.width=b+"px",n.style.height=D+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(ee*it,K*it).floor()},this.setDrawingBufferSize=function(b,D,W){ee=b,K=D,it=W,n.width=Math.floor(b*W),n.height=Math.floor(D*W),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(M===Hn){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(nt)},this.getViewport=function(b){return b.copy(_t)},this.setViewport=function(b,D,W,H){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,D,W,H),v.viewport(nt.copy(_t).multiplyScalar(it).round())},this.getScissor=function(b){return b.copy(Vt)},this.setScissor=function(b,D,W,H){b.isVector4?Vt.set(b.x,b.y,b.z,b.w):Vt.set(b,D,W,H),v.scissor(Ct.copy(Vt).multiplyScalar(it).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(b){v.setScissorTest(Ye=b)},this.setOpaqueSort=function(b){vt=b},this.setTransparentSort=function(b){Ot=b},this.getClearColor=function(b){return b.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,W=!0){let H=0;if(b){let V=!1;if(j!==null){let pt=j.texture.format;V=g.has(pt)}if(V){let pt=j.texture.type,yt=h.has(pt),dt=Bt.getClearColor(),xt=Bt.getClearAlpha(),bt=dt.r,Ft=dt.g,Wt=dt.b;yt?(m[0]=bt,m[1]=Ft,m[2]=Wt,m[3]=xt,L.clearBufferuiv(L.COLOR,0,m)):(S[0]=bt,S[1]=Ft,S[2]=Wt,S[3]=xt,L.clearBufferiv(L.COLOR,0,S))}else H|=L.COLOR_BUFFER_BIT}D&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",se,!1),n.removeEventListener("webglcontextcreationerror",yi,!1),Bt.dispose(),ht.dispose(),lt.dispose(),G.dispose(),at.dispose(),tt.dispose(),mt.dispose(),st.dispose(),ot.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",F0),Mt.removeEventListener("sessionend",H0),Ea.stop()};function ye(b){b.preventDefault(),s0("WebGLRenderer: Context Lost."),U=!0}function se(){s0("WebGLRenderer: Context Restored."),U=!1;let b=P.autoReset,D=Nt.enabled,W=Nt.autoUpdate,H=Nt.needsUpdate,V=Nt.type;wt(),P.autoReset=b,Nt.enabled=D,Nt.autoUpdate=W,Nt.needsUpdate=H,Nt.type=V}function yi(b){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Li(b){let D=b.target;D.removeEventListener("dispose",Li),Vb(D)}function Vb(b){Gb(b),G.remove(b)}function Gb(b){let D=G.get(b).programs;D!==void 0&&(D.forEach(function(W){ot.releaseProgram(W)}),b.isShaderMaterial&&ot.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,W,H,V,pt){D===null&&(D=Rn);let yt=V.isMesh&&V.matrixWorld.determinantAffine()<0,dt=Wb(b,D,W,H,V);v.setMaterial(H,yt);let xt=W.index,bt=1;if(H.wireframe===!0){if(xt=J.getWireframeAttribute(W),xt===void 0)return;bt=2}let Ft=W.drawRange,Wt=W.attributes.position,St=Ft.start*bt,ae=(Ft.start+Ft.count)*bt;pt!==null&&(St=Math.max(St,pt.start*bt),ae=Math.min(ae,(pt.start+pt.count)*bt)),xt!==null?(St=Math.max(St,0),ae=Math.min(ae,xt.count)):Wt!=null&&(St=Math.max(St,0),ae=Math.min(ae,Wt.count));let Ve=ae-St;if(Ve<0||Ve===1/0)return;mt.setup(V,H,dt,W,xt);let Me,pe=ct;if(xt!==null&&(Me=rt.get(xt),pe=$,pe.setIndex(Me)),V.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*He()),pe.setMode(L.LINES)):pe.setMode(L.TRIANGLES);else if(V.isLine){let mn=H.linewidth;mn===void 0&&(mn=1),v.setLineWidth(mn*He()),V.isLineSegments?pe.setMode(L.LINES):V.isLineLoop?pe.setMode(L.LINE_LOOP):pe.setMode(L.LINE_STRIP)}else V.isPoints?pe.setMode(L.POINTS):V.isSprite&&pe.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))pe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let mn=V._multiDrawStarts,gt=V._multiDrawCounts,Mn=V._multiDrawCount,$t=xt?rt.get(xt).bytesPerElement:1,si=G.get(H).currentProgram.getUniforms();for(let Ui=0;Ui<Mn;Ui++)si.setValue(L,"_gl_DrawID",Ui),pe.render(mn[Ui]/$t,gt[Ui])}else if(V.isInstancedMesh)pe.renderInstances(St,Ve,V.count);else if(W.isInstancedBufferGeometry){let mn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,gt=Math.min(W.instanceCount,mn);pe.renderInstances(St,Ve,gt)}else pe.render(St,Ve)};function z0(b,D,W,H){F!==null&&b.isNodeMaterial&&F.setObject(H,b),te===!0&&Tt.setState(b,W,!1),b.transparent===!0&&b.side===Yi&&b.forceSinglePass===!1?(b.side=Cn,b.needsUpdate=!0,Cc(b,D,H),b.side=ya,b.needsUpdate=!0,Cc(b,D,H),b.side=Yi):Cc(b,D,H)}this.compile=function(b,D,W=null){W===null&&(W=b),F!==null&&F.renderStart(b,D,W),T=lt.get(W),T.init(D),x.push(T),W.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),b!==W&&b.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),_e=this.localClippingEnabled,te=Tt.init(this.clippingPlanes,_e),te===!0&&Tt.setGlobalState(this.clippingPlanes,D),F!==null&&Nt.render(T.state.shadowsArray,W,D);let H=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let pt=V.material;if(pt)if(Array.isArray(pt))for(let yt=0;yt<pt.length;yt++){let dt=pt[yt];z0(dt,W,D,V),H.add(dt)}else z0(pt,W,D,V),H.add(pt)}),T=x.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(b,D,W=null){let H=this.compile(b,D,W);return new Promise(V=>{function pt(){if(H.forEach(function(yt){let xt=G.get(yt).currentProgram;(xt===void 0||xt.isReady())&&H.delete(yt)}),H.size===0){V(b);return}setTimeout(pt,10)}oe.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let md=null;function kb(b){md&&md(b)}function F0(){Ea.stop()}function H0(){Ea.start()}let Ea=new Ab;Ea.setAnimationLoop(kb),typeof self<"u"&&Ea.setContext(self),this.setAnimationLoop=function(b){md=b,Mt.setAnimationLoop(b),b===null?Ea.stop():Ea.start()},Mt.addEventListener("sessionstart",F0),Mt.addEventListener("sessionend",H0),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(b,D);let W=Mt.enabled===!0&&Mt.isPresenting===!0,H=A!==null&&(j===null||W)&&A.begin(R,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(D),D=Mt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,D,j),T=lt.get(b,x.length),T.init(D),T.state.textureUnits=Y.getTextureUnits(),x.push(T),Zt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Xt.setFromProjectionMatrix(Zt,Ti,D.reversedDepth),_e=this.localClippingEnabled,te=Tt.init(this.clippingPlanes,_e),E=ht.get(b,w.length),E.init(),w.push(E),Mt.enabled===!0&&Mt.isPresenting===!0){let yt=R.xr.getDepthSensingMesh();yt!==null&&gd(yt,D,-1/0,R.sortObjects)}gd(b,D,0,R.sortObjects),E.finish(),F!==null&&F.updateLights(T.state.lightsArray),R.sortObjects===!0&&E.sort(vt,Ot),Ue=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,Ue&&Bt.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),te===!0&&Tt.beginShadows();let V=T.state.shadowsArray;if(Nt.render(V,b,D),te===!0&&Tt.endShadows(),(H&&A.hasRenderPass())===!1){let yt=E.opaque,dt=E.transmissive;if(T.setupLights(),D.isArrayCamera){let xt=D.cameras;if(dt.length>0)for(let bt=0,Ft=xt.length;bt<Ft;bt++){let Wt=xt[bt];G0(yt,dt,b,Wt)}Ue&&Bt.render(b);for(let bt=0,Ft=xt.length;bt<Ft;bt++){let Wt=xt[bt];V0(E,b,Wt,Wt.viewport)}}else dt.length>0&&G0(yt,dt,b,D),Ue&&Bt.render(b),V0(E,b,D)}j!==null&&B===0&&(Y.updateMultisampleRenderTarget(j),Y.updateRenderTargetMipmap(j)),H&&A.end(R),b.isScene===!0&&b.onAfterRender(R,b,D),mt.resetDefaultState(),X=-1,Z=null,x.pop(),x.length>0?(T=x[x.length-1],Y.setTextureUnits(T.state.textureUnits),te===!0&&Tt.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,F!==null&&F.renderEnd()};function gd(b,D,W,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Xt)){H&&$e.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Zt);let yt=tt.update(b),dt=b.material;dt.visible&&E.push(b,yt,dt,W,$e.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Xt))){let yt=tt.update(b),dt=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),$e.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),$e.copy(yt.boundingSphere.center)),$e.applyMatrix4(b.matrixWorld).applyMatrix4(Zt)),Array.isArray(dt)){let xt=yt.groups;for(let bt=0,Ft=xt.length;bt<Ft;bt++){let Wt=xt[bt],St=dt[Wt.materialIndex];St&&St.visible&&E.push(b,yt,St,W,$e.z,Wt,D)}}else dt.visible&&E.push(b,yt,dt,W,$e.z,null,D)}}let pt=b.children;for(let yt=0,dt=pt.length;yt<dt;yt++)gd(pt[yt],D,W,H)}function V0(b,D,W,H){let{opaque:V,transmissive:pt,transparent:yt}=b;T.setupLightsView(W),te===!0&&Tt.setGlobalState(R.clippingPlanes,W),H&&v.viewport(nt.copy(H)),V.length>0&&wc(V,D,W),pt.length>0&&wc(pt,D,W),yt.length>0&&wc(yt,D,W),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function G0(b,D,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let St=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Fn(1,1,{generateMipmaps:!0,type:St?Di:Hn,minFilter:xa,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let pt=T.state.transmissionRenderTarget[H.id],yt=H.viewport||nt;pt.setSize(yt.z*R.transmissionResolutionScale,yt.w*R.transmissionResolutionScale);let dt=R.getRenderTarget(),xt=R.getActiveCubeFace(),bt=R.getActiveMipmapLevel();R.setRenderTarget(pt),R.getClearColor(ge),Qt=R.getClearAlpha(),Qt<1&&R.setClearColor(16777215,.5),R.clear(),Ue&&Bt.render(W);let Ft=R.toneMapping;R.toneMapping=wi;let Wt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),te===!0&&Tt.setGlobalState(R.clippingPlanes,H),wc(b,W,H),Y.updateMultisampleRenderTarget(pt),Y.updateRenderTargetMipmap(pt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let ae=0,Ve=D.length;ae<Ve;ae++){let Me=D[ae],{object:pe,geometry:mn,material:gt,group:Mn}=Me;if(gt.side===Yi&&pe.layers.test(H.layers)){let $t=gt.side;gt.side=Cn,gt.needsUpdate=!0,k0(pe,W,H,mn,gt,Mn),gt.side=$t,gt.needsUpdate=!0,St=!0}}St===!0&&(Y.updateMultisampleRenderTarget(pt),Y.updateRenderTargetMipmap(pt))}R.setRenderTarget(dt,xt,bt),R.setClearColor(ge,Qt),Wt!==void 0&&(H.viewport=Wt),R.toneMapping=Ft}function wc(b,D,W){let H=D.isScene===!0?D.overrideMaterial:null;for(let V=0,pt=b.length;V<pt;V++){let yt=b[V],{object:dt,geometry:xt,group:bt}=yt,Ft=yt.material;Ft.allowOverride===!0&&H!==null&&(Ft=H),dt.layers.test(W.layers)&&k0(dt,D,W,xt,Ft,bt)}}function k0(b,D,W,H,V,pt){F!==null&&V.isNodeMaterial&&F.setObject(b,V),b.onBeforeRender(R,D,W,H,V,pt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(R,D,W,H,b,pt),V.transparent===!0&&V.side===Yi&&V.forceSinglePass===!1?(V.side=Cn,V.needsUpdate=!0,R.renderBufferDirect(W,D,H,V,b,pt),V.side=ya,V.needsUpdate=!0,R.renderBufferDirect(W,D,H,V,b,pt),V.side=Yi):R.renderBufferDirect(W,D,H,V,b,pt),b.onAfterRender(R,D,W,H,V,pt)}function Cc(b,D,W){D.isScene!==!0&&(D=Rn);let H=G.get(b),V=T.state.lights,pt=T.state.shadowsArray,yt=V.state.version,dt=ot.getParameters(b,V.state,pt,D,W,T.state.lightProbeGridArray),xt=ot.getProgramCacheKey(dt),bt=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;let Ft=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=at.get(b.envMap||H.environment,Ft),H.envMapRotation=H.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,bt===void 0&&(b.addEventListener("dispose",Li),bt=new Map,H.programs=bt);let Wt=bt.get(xt);if(Wt!==void 0){if(H.currentProgram===Wt&&H.lightsStateVersion===yt)return W0(b,dt),Wt}else dt.uniforms=ot.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,W,dt),b.onBeforeCompile(dt,R),Wt=ot.acquireProgram(dt,xt),bt.set(xt,Wt),H.uniforms=dt.uniforms;let St=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=Tt.uniform),W0(b,dt),H.needsLights=Yb(b),H.lightsStateVersion=yt,H.needsLights&&(St.ambientLightColor.value=V.state.ambient,St.lightProbe.value=V.state.probe,St.sunLights.value=V.state.sun,St.sunLightShadows.value=V.state.sunShadow,St.directionalLights.value=V.state.directional,St.directionalLightShadows.value=V.state.directionalShadow,St.spotLights.value=V.state.spot,St.spotLightShadows.value=V.state.spotShadow,St.rectAreaLights.value=V.state.rectArea,St.ltc_1.value=V.state.rectAreaLTC1,St.ltc_2.value=V.state.rectAreaLTC2,St.pointLights.value=V.state.point,St.pointLightShadows.value=V.state.pointShadow,St.hemisphereLights.value=V.state.hemi,St.sunShadowMatrix.value=V.state.sunShadowMatrix,St.sunShadowCascade.value=V.state.sunShadowCascade,St.directionalShadowMatrix.value=V.state.directionalShadowMatrix,St.spotLightMatrix.value=V.state.spotLightMatrix,St.spotLightMap.value=V.state.spotLightMap,St.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=Wt,H.uniformsList=null,Wt}function X0(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=Bo.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function W0(b,D){let W=G.get(b);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function Xb(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let W=0,H=b.length;W<H;W++){let V=b[W];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function Wb(b,D,W,H,V){D.isScene!==!0&&(D=Rn),Y.resetTextureUnits();let pt=D.fog,yt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,dt=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Jt.workingColorSpace,xt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,bt=at.get(H.envMap||yt,xt),Ft=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),St=!!W.morphAttributes.position,ae=!!W.morphAttributes.normal,Ve=!!W.morphAttributes.color,Me=wi;H.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Me=R.toneMapping);let pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,mn=pe!==void 0?pe.length:0,gt=G.get(H),Mn=T.state.lights;if(te===!0&&(_e===!0||b!==Z)){let ve=b===Z&&H.id===X;Tt.setState(H,b,ve)}let $t=!1;H.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Mn.state.version||gt.outputColorSpace!==dt||V.isBatchedMesh&&gt.batching===!1||!V.isBatchedMesh&&gt.batching===!0||V.isBatchedMesh&&gt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&gt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&gt.instancing===!1||!V.isInstancedMesh&&gt.instancing===!0||V.isSkinnedMesh&&gt.skinning===!1||!V.isSkinnedMesh&&gt.skinning===!0||V.isInstancedMesh&&gt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&gt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&gt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&gt.instancingMorph===!1&&V.morphTexture!==null||gt.envMap!==bt||H.fog===!0&&gt.fog!==pt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Tt.numPlanes||gt.numIntersection!==Tt.numIntersection)||gt.vertexAlphas!==Ft||gt.vertexTangents!==Wt||gt.morphTargets!==St||gt.morphNormals!==ae||gt.morphColors!==Ve||gt.toneMapping!==Me||gt.morphTargetsCount!==mn||!!gt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&($t=!0):($t=!0,gt.__version=H.version);let si=gt.currentProgram;$t===!0&&(si=Cc(H,D,V),F&&H.isNodeMaterial&&F.onUpdateProgram(H,si,gt));let Ui=!1,ws=!1,nr=!1,he=si.getUniforms(),Pe=gt.uniforms;if(v.useProgram(si.program)&&(Ui=!0,ws=!0,nr=!0),H.id!==X&&(X=H.id,ws=!0),gt.needsLights){let ve=Xb(T.state.lightProbeGridArray,V);gt.lightProbeGrid!==ve&&(gt.lightProbeGrid=ve,ws=!0)}if(Ui||Z!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),he.setValue(L,"projectionMatrix",b.projectionMatrix),he.setValue(L,"viewMatrix",b.matrixWorldInverse);let Rs=he.map.cameraPosition;Rs!==void 0&&Rs.setValue(L,Ce.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&he.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&he.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),Z!==b&&(Z=b,ws=!0,nr=!0)}if(gt.needsLights&&(Mn.state.sunShadowMap.length>0&&he.setValue(L,"sunShadowMap",Mn.state.sunShadowMap,Y),Mn.state.directionalShadowMap.length>0&&he.setValue(L,"directionalShadowMap",Mn.state.directionalShadowMap,Y),Mn.state.spotShadowMap.length>0&&he.setValue(L,"spotShadowMap",Mn.state.spotShadowMap,Y),Mn.state.pointShadowMap.length>0&&he.setValue(L,"pointShadowMap",Mn.state.pointShadowMap,Y)),V.isSkinnedMesh){he.setOptional(L,V,"bindMatrix"),he.setOptional(L,V,"bindMatrixInverse");let ve=V.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),he.setValue(L,"boneTexture",ve.boneTexture,Y))}V.isBatchedMesh&&(he.setOptional(L,V,"batchingTexture"),he.setValue(L,"batchingTexture",V._matricesTexture,Y),he.setOptional(L,V,"batchingIdTexture"),he.setValue(L,"batchingIdTexture",V._indirectTexture,Y),he.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&he.setValue(L,"batchingColorTexture",V._colorsTexture,Y));let Cs=W.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0)&&N.update(V,W,si),(ws||gt.receiveShadow!==V.receiveShadow)&&(gt.receiveShadow=V.receiveShadow,he.setValue(L,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(Pe.envMapIntensity.value=D.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=U2()),ws){if(he.setValue(L,"toneMappingExposure",R.toneMappingExposure),gt.needsLights&&qb(Pe,nr),pt&&H.fog===!0&&Et.refreshFogUniforms(Pe,pt),Et.refreshMaterialUniforms(Pe,H,it,K,T.state.transmissionRenderTarget[b.id]),gt.needsLights&&gt.lightProbeGrid){let ve=gt.lightProbeGrid;Pe.probesSH.value=ve.texture,Pe.probesMin.value.copy(ve.boundingBox.min),Pe.probesMax.value.copy(ve.boundingBox.max),Pe.probesResolution.value.copy(ve.resolution)}Bo.upload(L,X0(gt),Pe,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Bo.upload(L,X0(gt),Pe,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&he.setValue(L,"center",V.center),he.setValue(L,"modelViewMatrix",V.modelViewMatrix),he.setValue(L,"normalMatrix",V.normalMatrix),he.setValue(L,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let ve=H.uniformsGroups;for(let Rs=0,ir=ve.length;Rs<ir;Rs++){let Y0=ve[Rs];st.update(Y0,si),st.bind(Y0,si)}}return si}function qb(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Yb(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,D,W){let H=G.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=D,G.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let W=G.get(b);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,W=0){j=b,Q=D,B=W;let H=null,V=!1,pt=!1;if(b){let dt=G.get(b);if(dt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(L.FRAMEBUFFER,dt.__webglFramebuffer),nt.copy(b.viewport),Ct.copy(b.scissor),At=b.scissorTest,v.viewport(nt),v.scissor(Ct),v.setScissorTest(At),X=-1;return}else if(dt.__webglFramebuffer===void 0)Y.setupRenderTarget(b);else if(dt.__hasExternalTextures)Y.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ft=b.depthTexture;if(dt.__boundDepthTexture!==Ft){if(Ft!==null&&G.has(Ft)&&(b.width!==Ft.image.width||b.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(b)}}let xt=b.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(pt=!0);let bt=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(bt[D])?H=bt[D][W]:H=bt[D],V=!0):b.samples>0&&Y.useMultisampledRTT(b)===!1?H=G.get(b).__webglMultisampledFramebuffer:Array.isArray(bt)?H=bt[W]:H=bt,nt.copy(b.viewport),Ct.copy(b.scissor),At=b.scissorTest}else nt.copy(_t).multiplyScalar(it).floor(),Ct.copy(Vt).multiplyScalar(it).floor(),At=Ye;if(W!==0&&(H=q),v.bindFramebuffer(L.FRAMEBUFFER,H)&&v.drawBuffers(b,H),v.viewport(nt),v.scissor(Ct),v.setScissorTest(At),V){let dt=G.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt.__webglTexture,W)}else if(pt){let dt=D;for(let xt=0;xt<b.textures.length;xt++){let bt=G.get(b.textures[xt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+xt,bt.__webglTexture,W,dt)}}else if(b!==null&&W!==0){let dt=G.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dt.__webglTexture,W)}X=-1};function q0(b){let D=G.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=C.textureFormatReadable(b.format),D.__typeReadable=C.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,W,H,V,pt,yt,dt=0){if(!(b&&b.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(xt=xt[yt]),xt){v.bindFramebuffer(L.FRAMEBUFFER,xt);try{let bt=b.textures[dt],Ft=bt.format,Wt=bt.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+dt);let St=q0(bt);if(St.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&W>=0&&W<=b.height-V&&L.readPixels(D,W,H,V,ut.convert(Ft),ut.convert(Wt),pt)}finally{let bt=j!==null?G.get(j).__webglFramebuffer:null;v.bindFramebuffer(L.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(b,D,W,H,V,pt,yt,dt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(xt=xt[yt]),xt)if(D>=0&&D<=b.width-H&&W>=0&&W<=b.height-V){v.bindFramebuffer(L.FRAMEBUFFER,xt);let bt=b.textures[dt],Ft=bt.format,Wt=bt.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+dt);let St=q0(bt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ae),L.bufferData(L.PIXEL_PACK_BUFFER,pt.byteLength,L.STREAM_READ),L.readPixels(D,W,H,V,ut.convert(Ft),ut.convert(Wt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Ve=j!==null?G.get(j).__webglFramebuffer:null;v.bindFramebuffer(L.FRAMEBUFFER,Ve);let Me=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await $M(L,Me,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ae),L.deleteSync(Me),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,W=0){let H=Math.pow(2,-W),V=Math.floor(b.image.width*H),pt=Math.floor(b.image.height*H),yt=D!==null?D.x:0,dt=D!==null?D.y:0;Y.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,yt,dt,V,pt),v.unbindTexture()},this.copyTextureToTexture=function(b,D,W=null,H=null,V=0,pt=0){let yt,dt,xt,bt,Ft,Wt,St,ae,Ve,Me=b.isCompressedTexture?b.mipmaps[pt]:b.image;if(W!==null)yt=W.max.x-W.min.x,dt=W.max.y-W.min.y,xt=W.isBox3?W.max.z-W.min.z:1,bt=W.min.x,Ft=W.min.y,Wt=W.isBox3?W.min.z:0;else{let Pe=Math.pow(2,-V);yt=Math.floor(Me.width*Pe),dt=Math.floor(Me.height*Pe),b.isDataArrayTexture?xt=Me.depth:b.isData3DTexture?xt=Math.floor(Me.depth*Pe):xt=1,bt=0,Ft=0,Wt=0}H!==null?(St=H.x,ae=H.y,Ve=H.z):(St=0,ae=0,Ve=0);let pe=ut.convert(D.format),mn=ut.convert(D.type),gt;D.isData3DTexture?(Y.setTexture3D(D,0),gt=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Y.setTexture2DArray(D,0),gt=L.TEXTURE_2D_ARRAY):(Y.setTexture2D(D,0),gt=L.TEXTURE_2D),v.activeTexture(L.TEXTURE0),v.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),v.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),v.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);let Mn=v.getParameter(L.UNPACK_ROW_LENGTH),$t=v.getParameter(L.UNPACK_IMAGE_HEIGHT),si=v.getParameter(L.UNPACK_SKIP_PIXELS),Ui=v.getParameter(L.UNPACK_SKIP_ROWS),ws=v.getParameter(L.UNPACK_SKIP_IMAGES);v.pixelStorei(L.UNPACK_ROW_LENGTH,Me.width),v.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Me.height),v.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),v.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),v.pixelStorei(L.UNPACK_SKIP_IMAGES,Wt);let nr=b.isDataArrayTexture||b.isData3DTexture,he=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let Pe=G.get(b),Cs=G.get(D),ve=G.get(Pe.__renderTarget),Rs=G.get(Cs.__renderTarget);v.bindFramebuffer(L.READ_FRAMEBUFFER,ve.__webglFramebuffer),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,Rs.__webglFramebuffer);for(let ir=0;ir<xt;ir++)nr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(b).__webglTexture,V,Wt+ir),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(D).__webglTexture,pt,Ve+ir)),L.blitFramebuffer(bt,Ft,yt,dt,St,ae,yt,dt,L.DEPTH_BUFFER_BIT,L.NEAREST);v.bindFramebuffer(L.READ_FRAMEBUFFER,null),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||G.has(b)){let Pe=G.get(b),Cs=G.get(D);v.bindFramebuffer(L.READ_FRAMEBUFFER,O),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let ve=0;ve<xt;ve++)nr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pe.__webglTexture,V,Wt+ve):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pe.__webglTexture,V),he?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Cs.__webglTexture,pt,Ve+ve):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Cs.__webglTexture,pt),V!==0?L.blitFramebuffer(bt,Ft,yt,dt,St,ae,yt,dt,L.COLOR_BUFFER_BIT,L.NEAREST):he?L.copyTexSubImage3D(gt,pt,St,ae,Ve+ve,bt,Ft,yt,dt):L.copyTexSubImage2D(gt,pt,St,ae,bt,Ft,yt,dt);v.bindFramebuffer(L.READ_FRAMEBUFFER,null),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else he?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(gt,pt,St,ae,Ve,yt,dt,xt,pe,mn,Me.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(gt,pt,St,ae,Ve,yt,dt,xt,pe,Me.data):L.texSubImage3D(gt,pt,St,ae,Ve,yt,dt,xt,pe,mn,Me):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pt,St,ae,yt,dt,pe,mn,Me.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pt,St,ae,Me.width,Me.height,pe,Me.data):L.texSubImage2D(L.TEXTURE_2D,pt,St,ae,yt,dt,pe,mn,Me);v.pixelStorei(L.UNPACK_ROW_LENGTH,Mn),v.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$t),v.pixelStorei(L.UNPACK_SKIP_PIXELS,si),v.pixelStorei(L.UNPACK_SKIP_ROWS,Ui),v.pixelStorei(L.UNPACK_SKIP_IMAGES,ws),pt===0&&D.generateMipmaps&&L.generateMipmap(gt),v.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&Y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Y.setTextureCube(b,0):b.isData3DTexture?Y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Y.setTexture2DArray(b,0):Y.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){Q=0,B=0,j=null,v.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Jt._getUnpackColorSpace()}}});function P2(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function B2(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function z2(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ob),this.state=ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function F2(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ga.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=ue.DOLLY;break;case ga.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ue.ROTATE}break;case ga.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(I0)}function H2(e){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function V2(e){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(e.preventDefault(),this.dispatchEvent(I0),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Ob))}function G2(e){this.enabled!==!1&&this._handleKeyDown(e)}function k2(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case _a.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=ue.TOUCH_ROTATE;break;case _a.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case _a.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=ue.TOUCH_DOLLY_PAN;break;case _a.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(I0)}function X2(e){switch(this._trackPointer(e),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=ue.NONE}}function W2(e){this.enabled!==!1&&e.preventDefault()}function q2(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Y2(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ub,I0,Ob,fd,Ib,O2,Qe,Vn,ue,U0,dd,Pb=Rc(()=>{L0();Ub={type:"change"},I0={type:"start"},Ob={type:"end"},fd=new Ts,Ib=new ti,O2=Math.cos(70*r0.DEG2RAD),Qe=new I,Vn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},U0=1e-6,dd=class extends dc{constructor(t,n=null){super(t,n),this.state=ue.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ga.ROTATE,MIDDLE:ga.DOLLY,RIGHT:ga.PAN},this.touches={ONE:_a.ROTATE,TWO:_a.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new ei,this._lastTargetPosition=new I,this._quat=new ei().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ro,this._sphericalDelta=new Ro,this._scale=1,this._panOffset=new I,this._rotateStart=new Dt,this._rotateEnd=new Dt,this._rotateDelta=new Dt,this._panStart=new Dt,this._panEnd=new Dt,this._panDelta=new Dt,this._dollyStart=new Dt,this._dollyEnd=new Dt,this._dollyDelta=new Dt,this._dollyDirection=new I,this._mouse=new Dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=B2.bind(this),this._onPointerDown=P2.bind(this),this._onPointerUp=z2.bind(this),this._onContextMenu=W2.bind(this),this._onMouseWheel=V2.bind(this),this._onKeyDown=G2.bind(this),this._onTouchStart=k2.bind(this),this._onTouchMove=X2.bind(this),this._onMouseDown=F2.bind(this),this._onMouseMove=H2.bind(this),this._interceptControlDown=q2.bind(this),this._interceptControlUp=Y2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ue.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ub),this.update(),this.state=ue.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let n=this.object.position;Qe.copy(n).sub(this.target),Qe.applyQuaternion(this._quat),this._spherical.setFromVector3(Qe),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Vn:i>Math.PI&&(i-=Vn),s<-Math.PI?s+=Vn:s>Math.PI&&(s-=Vn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(Qe.setFromSpherical(this._spherical),Qe.applyQuaternion(this._quatInverse),n.copy(this.target).add(Qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let o=Qe.length();r=this._clampDistance(o*this._scale);let l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(fd.origin.copy(this.object.position),fd.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fd.direction))<O2?this.object.lookAt(this.target):(Ib.setFromNormalAndCoplanarPoint(this.object.up,this.target),fd.intersectPlane(Ib,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>U0||8*(1-this._lastQuaternion.dot(this.object.quaternion))>U0||this._lastTargetPosition.distanceToSquared(this.target)>U0?(this.dispatchEvent(Ub),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Vn/60*this.autoRotateSpeed*t:Vn/60/60*this.autoRotateSpeed}_getZoomScale(t){let n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Qe.setFromMatrixColumn(n,0),Qe.multiplyScalar(-t),this._panOffset.add(Qe)}_panUp(t,n){this.screenSpacePanning===!0?Qe.setFromMatrixColumn(n,1):(Qe.setFromMatrixColumn(n,0),Qe.crossVectors(this.object.up,Qe)),Qe.multiplyScalar(t),this._panOffset.add(Qe)}_pan(t,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Qe.copy(s).sub(this.target);let a=Qe.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*n*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,a=n-i.top,r=i.width,o=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+n.x)*.5,o=(t.pageY+n.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Dt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){let n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});var Bb={};$b(Bb,{startPortfolioScene:()=>Z2});function Z2(e,t){let n=new cd({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),n.setClearColor(527125,0),n.outputColorSpace=wn;let i=new Ql,s=new vn(40,1,.1,60);s.position.set(0,4.1,9.8);let a=new dd(s,e);a.enableDamping=!0,a.enableZoom=!1,a.enablePan=!1,a.rotateSpeed=.55,a.minPolarAngle=.3,a.maxPolarAngle=Math.PI*.78,i.add(new hc(14411007,1.5));let r=new Co(7247103,5);r.position.set(-3,4,2),i.add(r);let o=new Co(16759424,4);o.position.set(4,2,-1),i.add(o);let l=new Xi;i.add(l);let c=new xn(new To(1.08,1),new Ao({color:10401515,metalness:.6,roughness:.25,flatShading:!0}));l.add(c);let f=new ec(new ac(c.geometry),new ja({color:13098495,transparent:!0,opacity:.38}));c.add(f);let p=new Xi;p.rotation.set(.32,0,-.22),l.add(p);let u=[];[1.7,2.65,3.35].forEach((B,j)=>{let X=new xn(new oc(B,j===1?.015:.008,6,120),new Ja({color:j===1?15248247:7111093,transparent:!0,opacity:j===1?.8:.4}));X.rotation.x=Math.PI/2+j*.17,u.push(X),p.add(X)});let d=[];[15248762,9284607,9952200,13087487,15714678,15703997].forEach((B,j)=>{let X=j*Math.PI/3+.35,Z=j%2?2.65:3.05,nt=new xn(new To(.22+(j===0?.08:0),1),new Ao({color:B,metalness:.35,roughness:.28,emissive:B,emissiveIntensity:.16}));nt.position.set(Math.cos(X)*Z,Math.sin(j*2)*.55,Math.sin(X)*Z),nt.userData.index=j,p.add(nt),d.push(nt);let Ct=new Mo(new rn().setFromPoints([new I,nt.position.clone()]),new ja({color:B,transparent:!0,opacity:.12}));p.add(Ct)});let M=new Float32Array(360);for(let B=0;B<M.length;B++)M[B]=Math.sin(B*174.23+7.61)*(B%3===1?3.5:7);let g=new rn;g.setAttribute("position",new Bn(M,3)),i.add(new nc(g,new bo({color:10927086,size:.018,transparent:!0,opacity:.6})));let h=0,m=!matchMedia("(prefers-reduced-motion: reduce)").matches,S=!0,y=!1,E=0,T=0,w=B=>{if(E=0,y||!S||document.hidden)return;let j=Math.min((B-T)/1e3||0,.05);T=B,m&&(l.rotation.y+=j*.11,c.rotation.y-=j*.2),d.forEach((X,Z)=>{X.scale.setScalar(Z===h?1.5:1),X.material.emissiveIntensity=Z===h?.8:.16}),a.update(),n.render(i,s),E=requestAnimationFrame(w)},x=()=>{!E&&!y&&S&&!document.hidden&&(T=performance.now(),E=requestAnimationFrame(w))},A=()=>{let{width:B,height:j}=e.getBoundingClientRect();!B||!j||(n.setSize(B,j,!1),s.aspect=B/j,s.position.setLength(B<420?12.8:10.6),s.updateProjectionMatrix(),x())},R=new ResizeObserver(A);R.observe(e);let U=new IntersectionObserver(([B])=>{S=B.isIntersecting,S?x():(cancelAnimationFrame(E),E=0)});U.observe(e);let F=0,q=0,O=B=>{F=B.clientX,q=B.clientY},k=B=>{if(Math.hypot(B.clientX-F,B.clientY-q)>7)return;let j=e.getBoundingClientRect(),X=new fc;X.setFromCamera(new Dt((B.clientX-j.left)/j.width*2-1,-(B.clientY-j.top)/j.height*2+1),s);let Z=X.intersectObjects(d)[0];Z&&t(Z.object.userData.index)},Q=B=>{B.preventDefault(),cancelAnimationFrame(E),E=0};return e.addEventListener("pointerdown",O),e.addEventListener("pointerup",k),e.addEventListener("webglcontextlost",Q),e.addEventListener("webglcontextrestored",x),document.addEventListener("visibilitychange",x),A(),{setSelected(B){h=B,x()},setMotion(B){m=B,x()},rotate(B){l.rotation.y+=B*.3,x()},reset(){l.rotation.set(0,0,0),s.position.set(0,4.1,9.8),a.target.set(0,0,0),A()},dispose(){y=!0,cancelAnimationFrame(E),R.disconnect(),U.disconnect(),a.dispose(),e.removeEventListener("pointerdown",O),e.removeEventListener("pointerup",k),e.removeEventListener("webglcontextlost",Q),e.removeEventListener("webglcontextrestored",x),document.removeEventListener("visibilitychange",x);let B=new Set,j=new Set;i.traverse(X=>{let Z=X;Z.geometry&&B.add(Z.geometry),Z.material&&(Array.isArray(Z.material)?Z.material:[Z.material]).forEach(nt=>j.add(nt))}),B.forEach(X=>X.dispose()),j.forEach(X=>X.dispose()),n.dispose()}}}var zb=Rc(()=>{"use strict";L0();Pb()});var Fb=Ds(rr()),Hb=Ds(BS());var ba=Ds(rr(),1);var Ni=Ds(rr(),1),Le=Ds(Hl(),1),O0=["LINGXI","BID_OS","SELFOPT","QUANT","RETAIL","CONTENT_OS"],K2=["\u7075\u7280 \xB7 AI \u966A\u4F34","\u4F01\u4E1A\u6295\u6807\u667A\u80FD\u4F53","\u5B89\u5168\u81EA\u8FDB\u5316","\u91CF\u5316\u7814\u7A76","\u65E0\u4EBA\u96F6\u552E","\u5185\u5BB9\u5DE5\u4F5C\u5BA4"];function P0({zh:e}){let t=(0,Ni.useRef)(null),n=(0,Ni.useRef)(null),[i,s]=(0,Ni.useState)(0),[a,r]=(0,Ni.useState)(!1),[o,l]=(0,Ni.useState)("loading");return(0,Ni.useEffect)(()=>{let c=!1;return Promise.resolve().then(()=>(zb(),Bb)).then(({startPortfolioScene:f})=>{if(!(c||!t.current))try{n.current=f(t.current,s),r(!matchMedia("(prefers-reduced-motion: reduce)").matches),l("ready")}catch{l("fallback")}}).catch(()=>{c||l("fallback")}),()=>{c=!0,n.current?.dispose(),n.current=null}},[]),(0,Ni.useEffect)(()=>{n.current?.setSelected(i)},[i,o]),(0,Ni.useEffect)(()=>{n.current?.setMotion(a)},[a,o]),(0,Le.jsxs)("section",{className:"orbit-space","aria-label":e?"\u4EA4\u4E92\u5F0F 3D \u4F5C\u54C1\u7A7A\u95F4":"Interactive 3D portfolio",children:[(0,Le.jsxs)("div",{className:"orbit-heading",children:[(0,Le.jsx)("span",{children:"THE ANGELA UNIVERSE"}),(0,Le.jsx)("span",{children:"01 \u2014 06"})]}),(0,Le.jsxs)("div",{className:"orbit-viewport",children:[(0,Le.jsx)("canvas",{ref:t,tabIndex:o==="ready"?0:-1,"aria-label":e?"\u62D6\u52A8\u65CB\u8F6C 3D \u4F5C\u54C1\u7A7A\u95F4\uFF0C\u5DE6\u53F3\u65B9\u5411\u952E\u65CB\u8F6C\uFF0C\u4E0B\u65B9\u6309\u94AE\u9009\u62E9\u4F5C\u54C1":"Drag or use arrow keys to rotate. Select a project with the buttons below.",onKeyDown:c=>{["ArrowLeft","ArrowRight","Home"].includes(c.key)&&(c.preventDefault(),c.key==="Home"?n.current?.reset():n.current?.rotate(c.key==="ArrowLeft"?-1:1))}}),o!=="ready"&&(0,Le.jsxs)("div",{className:"orbit-fallback",children:[(0,Le.jsxs)("b",{children:["AL",(0,Le.jsx)("span",{children:"\xB7"})]}),(0,Le.jsx)("p",{children:o==="loading"?e?"\u6B63\u5728\u5C55\u5F00\u4F5C\u54C1\u7A7A\u95F4":"Opening the portfolio":e?"\u4ECE\u4E0B\u65B9\u9009\u62E9\u4F5C\u54C1":"Choose a project below"})]}),(0,Le.jsx)("span",{className:"orbit-center-label","aria-hidden":"true",children:"ANGELA LIANG"})]}),(0,Le.jsxs)("div",{className:"orbit-toolbar",children:[(0,Le.jsx)("span",{children:e?"\u62D6\u52A8\u65CB\u8F6C \xB7 \u70B9\u51FB\u661F\u4F53\u9009\u4F5C\u54C1":"Drag to orbit \xB7 Select a project"}),(0,Le.jsxs)("div",{children:[(0,Le.jsx)("button",{disabled:o!=="ready","aria-pressed":a,onClick:()=>r(!a),children:a?e?"\u6682\u505C\u65CB\u8F6C":"Pause":e?"\u81EA\u52A8\u65CB\u8F6C":"Rotate"}),(0,Le.jsx)("button",{disabled:o!=="ready",onClick:()=>n.current?.reset(),children:e?"\u590D\u4F4D":"Reset"})]})]}),(0,Le.jsx)("div",{className:"orbit-projects","aria-label":e?"\u9009\u62E9\u4F5C\u54C1":"Select a project",children:O0.map((c,f)=>(0,Le.jsxs)("button",{"aria-pressed":i===f,onClick:()=>s(f),children:[(0,Le.jsx)("i",{style:{background:["#e8ad7a","#8dabff","#97dbc8","#c7b2ff","#efc976","#ef9fbd"][f]}}),c]},c))}),(0,Le.jsxs)("a",{className:"orbit-selected",href:"#project-"+O0[i].toLowerCase(),children:[(0,Le.jsx)("span",{children:e?K2[i]:O0[i]}),(0,Le.jsxs)("span",{children:[e?"\u67E5\u770B\u4F5C\u54C1":"Explore"," \u2197"]})]})]})}var z=Ds(Hl(),1),pd="/talks/enterprise-agent/index.html",Ac=(e,t)=>t?e.zh:e.en,J2=[{id:"01",code:"LINGXI",status:"FLAGSHIP / RESTORING",hero:!0,href:"https://lingxi.angela-tech.com/",title:{en:"A companion with continuity.",zh:"\u62E5\u6709\u8FDE\u7EED\u5173\u7CFB\u7684 AI \u966A\u4F34\u8005\u3002"},copy:{en:"Realtime voice, visual understanding, long-term memory and a locally rendered avatar \u2014 designed as one continuous intelligence.",zh:"\u5B9E\u65F6\u8BED\u97F3\u3001\u89C6\u89C9\u7406\u89E3\u3001\u957F\u671F\u8BB0\u5FC6\u4E0E\u672C\u5730\u6E32\u67D3\u6570\u5B57\u4EBA\uFF0C\u5171\u540C\u7EC4\u6210\u4E00\u4E2A\u8FDE\u7EED\u4E00\u81F4\u7684\u667A\u80FD\u4F53\u3002"},tags:["VOICE","VISION","MEMORY","AVATAR"],proof:{en:"55 automated checks \xB7 zero cloud-avatar minute fees",zh:"55 \u9879\u81EA\u52A8\u5316\u68C0\u67E5 \xB7 \u4E91\u7AEF\u6570\u5B57\u4EBA\u5206\u949F\u8D39\u7528\u4E3A 0"}},{id:"02",code:"BID_OS",status:"V3.0 / ENTERPRISE",title:{en:"Enterprise Bid Intelligence",zh:"\u4F01\u4E1A\u6295\u6807\u667A\u80FD\u4F53"},copy:{en:"A controlled workflow from tender documents to a traceable, reviewable delivery.",zh:"\u4ECE\u62DB\u6807\u6587\u4EF6\u5230\u53EF\u8FFD\u6EAF\u3001\u53EF\u5BA1\u67E5\u4EA4\u4ED8\u7269\u7684\u53D7\u63A7\u5DE5\u4F5C\u6D41\u3002"},tags:["RULES","KNOWLEDGE","REVIEW"],proof:{en:"29-page verified delivery \xB7 100% traceability",zh:"29 \u9875\u9A8C\u8BC1\u4EA4\u4ED8 \xB7 100% \u53EF\u8FFD\u6EAF"}},{id:"03",code:"SELFOPT",status:"INFRASTRUCTURE",title:{en:"Safe AI Evolution Layer",zh:"\u5B89\u5168\u81EA\u8FDB\u5316\u5C42"},copy:{en:"Agents form candidate improvements from operation, then earn promotion through regression evaluation and human governance.",zh:"\u667A\u80FD\u4F53\u4ECE\u8FD0\u884C\u4E2D\u5F62\u6210\u5019\u9009\u6539\u8FDB\uFF0C\u7ECF\u56DE\u5F52\u8BC4\u6D4B\u4E0E\u4EBA\u5DE5\u6CBB\u7406\u540E\u518D\u5B89\u5168\u664B\u7EA7\u3002"},tags:["OBSERVE","EVALUATE","PROMOTE"]},{id:"04",code:"QUANT",status:"RESEARCH / SIMULATION",title:{en:"Guardrail Quant Agent",zh:"\u5E26\u62A4\u680F\u7684\u91CF\u5316\u667A\u80FD\u4F53"},copy:{en:"Risk-first strategy research spanning market-state analysis, backtesting, simulation, audit and hard circuit breakers.",zh:"\u4EE5\u98CE\u9669\u4E3A\u5148\uFF0C\u8986\u76D6\u5E02\u573A\u72B6\u6001\u8BC6\u522B\u3001\u56DE\u6D4B\u3001\u6A21\u62DF\u3001\u5BA1\u8BA1\u4E0E\u786C\u6027\u7194\u65AD\u7684\u7B56\u7565\u7814\u7A76\u7CFB\u7EDF\u3002"},tags:["BACKTEST","RISK","AUDIT"]},{id:"05",code:"RETAIL",status:"LIVE BUSINESS",title:{en:"AI-Native Unmanned Retail",zh:"AI \u539F\u751F\u65E0\u4EBA\u96F6\u552E"},copy:{en:"Intelligent access, self-checkout, remote monitoring and inventory automation inside a real operating business.",zh:"\u628A\u667A\u80FD\u95E8\u7981\u3001\u81EA\u52A9\u7ED3\u8D26\u3001\u8FDC\u7A0B\u76D1\u63A7\u4E0E\u5E93\u5B58\u81EA\u52A8\u5316\u771F\u6B63\u653E\u8FDB\u6301\u7EED\u8FD0\u8425\u7684\u5B9E\u4F53\u4E1A\u52A1\u3002"},tags:["VISION","AUTOMATION","OPS"]},{id:"06",code:"CONTENT_OS",status:"CREATIVE LAB",title:{en:"Xiaohongshu AI Studio",zh:"\u5C0F\u7EA2\u4E66 AI \u5185\u5BB9\u5DE5\u4F5C\u5BA4"},copy:{en:"A human-directed content system for research, visual ideation, production workflows and account operations.",zh:"\u7531\u4EBA\u4E3B\u5BFC\uFF0C\u8FDE\u63A5\u9009\u9898\u7814\u7A76\u3001\u89C6\u89C9\u521B\u610F\u3001\u5185\u5BB9\u751F\u4EA7\u4E0E\u8D26\u53F7\u8FD0\u8425\u7684\u5DE5\u4F5C\u7CFB\u7EDF\u3002"},tags:["RESEARCH","CREATE","OPERATE"]}],j2=[["2024 \u2014 NOW",{en:"Founder & Director of Operations",zh:"\u521B\u59CB\u4EBA\u517C\u8FD0\u8425\u8D1F\u8D23\u4EBA"},"Manifest Station",{en:"Built and operated an AI-enabled unmanned retail business on the Gold Coast.",zh:"\u5728\u9EC4\u91D1\u6D77\u5CB8\u521B\u5EFA\u5E76\u8FD0\u8425 AI \u65E0\u4EBA\u96F6\u552E\u4E1A\u52A1\u3002"}],["2023 \u2014 NOW",{en:"Independent AI Systems Developer",zh:"\u72EC\u7ACB AI \u7CFB\u7EDF\u5F00\u53D1\u8005"},"Self-directed",{en:"Designing enterprise agents and decision systems across language, workflow and feedback loops.",zh:"\u5F00\u53D1\u878D\u5408\u8BED\u8A00\u63A8\u7406\u3001\u5DE5\u4F5C\u6D41\u7F16\u6392\u4E0E\u53CD\u9988\u5FAA\u73AF\u7684\u4F01\u4E1A\u667A\u80FD\u4F53\u548C\u51B3\u7B56\u7CFB\u7EDF\u3002"}],["2016 \u2014 NOW",{en:"Project Coordinator / Investment Analyst",zh:"\u9879\u76EE\u534F\u8C03\u5458 / \u6295\u8D44\u5206\u6790\u5E08"},"Xinyu Real Estate & Chapter Two",{en:"Cross-border property investment, feasibility analysis and development coordination.",zh:"\u53C2\u4E0E\u8DE8\u5883\u623F\u5730\u4EA7\u6295\u8D44\u3001\u53EF\u884C\u6027\u5206\u6790\u4E0E\u524D\u671F\u5F00\u53D1\u534F\u8C03\u3002"}],["2022 \u2014 2023",{en:"Risk Management Centre Intern",zh:"\u98CE\u9669\u7BA1\u7406\u4E2D\u5FC3\u5B9E\u4E60\u751F"},"China Reinsurance Group",{en:"Supported quantitative strategy research and explored generative AI in financial analysis.",zh:"\u652F\u6301\u91CF\u5316\u7B56\u7565\u7814\u7A76\uFF0C\u5E76\u63A2\u7D22\u751F\u6210\u5F0F AI \u5728\u91D1\u878D\u5206\u6790\u4E2D\u7684\u5E94\u7528\u3002"}]];function B0(){let[e,t]=(0,ba.useState)(!0),[n,i]=(0,ba.useState)(!1),s=(0,ba.useRef)(null);return(0,ba.useEffect)(()=>{document.documentElement.lang=e?"zh-CN":"en"},[e]),(0,ba.useEffect)(()=>()=>{s.current&&(window.clearInterval(s.current.timer),s.current.ctx.close())},[]),(0,z.jsxs)("main",{children:[(0,z.jsx)("a",{className:"skip-link",href:"#about",children:e?"\u8DF3\u81F3\u4E2A\u4EBA\u4ECB\u7ECD":"Skip to profile"}),(0,z.jsxs)("nav",{className:"topbar","aria-label":e?"\u4E3B\u5BFC\u822A":"Main navigation",children:[(0,z.jsxs)("a",{className:"brand",href:"#top",children:[(0,z.jsx)("i",{})," ANGELA",(0,z.jsx)("span",{children:"\xB7"}),"TECH"]}),(0,z.jsxs)("div",{className:"navcenter",children:[(0,z.jsx)("a",{href:"#about",children:e?"\u5173\u4E8E\u6211":"About"}),(0,z.jsx)("a",{href:"#systems",children:e?"\u4F5C\u54C1":"Projects"}),(0,z.jsx)("a",{href:"#contact",children:e?"\u8054\u7CFB":"Contact"})]}),(0,z.jsxs)("div",{className:"controls",children:[(0,z.jsxs)("a",{className:"nav-talk",href:pd,children:[e?"\u8BB2 PPT":"Talk"," \u2197"]}),(0,z.jsx)("button",{onClick:()=>t(!e),"aria-label":e?"Switch to English":"\u5207\u6362\u5230\u4E2D\u6587",children:e?"EN":"\u4E2D\u6587"}),(0,z.jsxs)("button",{className:n?"active":"",onClick:()=>{if(s.current){let{ctx:p,gain:u,timer:d}=s.current;u.gain.setTargetAtTime(0,p.currentTime,.2),window.clearInterval(d),window.setTimeout(()=>p.close(),500),s.current=null,i(!1);return}let r=window.AudioContext||window.webkitAudioContext,o=new r,l=o.createGain();l.gain.value=1e-4,l.connect(o.destination),l.gain.exponentialRampToValueAtTime(.055,o.currentTime+1.4),[43.65,65.41,98].forEach((p,u)=>{let d=o.createOscillator(),_=o.createGain(),M=o.createStereoPanner();d.type=u===0?"triangle":"sine",d.frequency.value=p,_.gain.value=.12/(u+1),M.pan.value=(u-1)*.38,d.connect(_).connect(M).connect(l),d.start()});let c=()=>{let p=o.createOscillator(),u=o.createGain(),d=o.createStereoPanner(),_=o.currentTime;p.frequency.value=[523.25,659.25,783.99][Math.floor(Math.random()*3)],d.pan.value=Math.random()*1.4-.7,u.gain.setValueAtTime(1e-4,_),u.gain.exponentialRampToValueAtTime(.035,_+.06),u.gain.exponentialRampToValueAtTime(1e-4,_+3.5),p.connect(u).connect(d).connect(l),p.start(_),p.stop(_+3.6)};c();let f=window.setInterval(c,6500);s.current={ctx:o,gain:l,timer:f},i(!0)},"aria-label":e?"\u5207\u6362\u73AF\u5883\u97F3\u6548":"Toggle ambient sound","aria-pressed":n,children:[n?"\u25A0":"\u266B",(0,z.jsx)("span",{children:n?e?"\u9759\u97F3":"Mute":e?"\u97F3\u6548":"Sound"})]})]})]}),(0,z.jsxs)("header",{className:"hero",id:"top",children:[(0,z.jsxs)("div",{className:"hero-copy",children:[(0,z.jsxs)("div",{className:"eyebrow",children:[(0,z.jsx)("span",{})," ",e?"AI \u7CFB\u7EDF\u521B\u4E1A\u8005 \xB7 \u72EC\u7ACB\u5F00\u53D1\u8005":"AI SYSTEMS ENTREPRENEUR \xB7 BUILDER"]}),(0,z.jsxs)("h1",{children:["Angela",(0,z.jsx)("br",{}),(0,z.jsxs)("em",{children:["Liang",(0,z.jsx)("span",{children:"\xB7"})]})]}),(0,z.jsx)("h2",{children:e?(0,z.jsxs)(z.Fragment,{children:["\u628A AI \u7684\u53EF\u80FD\uFF0C",(0,z.jsx)("br",{}),"\u505A\u6210\u73B0\u5B9E\u91CC\u7684\u65E5\u5E38\u3002"]}):(0,z.jsxs)(z.Fragment,{children:["Making AI part of",(0,z.jsx)("br",{}),"the real world."]})}),(0,z.jsx)("p",{children:e?"\u6211\u7528\u6570\u5B66\u4E0E\u91D1\u878D\u7684\u89C6\u89D2\u7406\u89E3\u95EE\u9898\uFF0C\u4E5F\u4EB2\u81EA\u7ECF\u8425\u751F\u610F\u3001\u5F00\u53D1\u7CFB\u7EDF\u3002\u4ECE\u9EC4\u91D1\u6D77\u5CB8\u7684\u65E0\u4EBA\u96F6\u552E\uFF0C\u5230\u4F01\u4E1A Agent \u548C\u7075\u7280\uFF0C\u6211\u5728\u63A2\u7D22 AI \u600E\u6837\u771F\u6B63\u5E2E\u4EBA\u628A\u5DE5\u4F5C\u505A\u597D\u3002":"I bring a background in mathematics and finance to building AI systems and running a business. My work spans unmanned retail on the Gold Coast, enterprise agents and Lingxi, an AI companion."}),(0,z.jsxs)("div",{className:"hero-actions",children:[(0,z.jsxs)("a",{className:"button-primary",href:pd,children:[(0,z.jsx)("span",{"aria-hidden":"true",children:"\u25B7"})," ",e?"\u6253\u5F00\u6F14\u8BB2 \xB7 \u5F00\u59CB\u8BB2 PPT":"Open my talk",(0,z.jsx)("span",{"aria-hidden":"true",children:"\u2197"})]}),(0,z.jsxs)("a",{className:"text-link",href:"#about",children:[e?"\u8BA4\u8BC6\u6211":"Meet Angela"," \u2193"]})]}),(0,z.jsxs)("div",{className:"hero-foundation",children:[(0,z.jsx)("span",{children:e?"\u6089\u5C3C\u5927\u5B66":"University of Sydney"}),(0,z.jsx)("span",{children:e?"\u6570\u5B66 \xB7 \u91D1\u878D\u7ECF\u6D4E\u5B66":"Mathematics \xB7 Financial Economics"})]})]}),(0,z.jsx)(P0,{zh:e}),(0,z.jsxs)("div",{className:"hero-bottom",children:[(0,z.jsx)("span",{children:"IDEAS BECOME SYSTEMS"}),(0,z.jsxs)("a",{href:"#talk",children:[e?"\u6211\u7684\u6545\u4E8B\uFF0C\u4ECE\u4E00\u573A\u6F14\u8BB2\u5F00\u59CB":"My story, in a talk"," \u2193"]}),(0,z.jsx)("span",{children:"2026 / PORTFOLIO"})]})]}),(0,z.jsxs)("section",{className:"featured-talk",id:"talk",children:[(0,z.jsxs)("a",{className:"talk-art",href:pd,"aria-label":e?"\u6253\u5F00\u4F01\u4E1A Agent \u6F14\u8BB2":"Open the Enterprise Agent talk",children:[(0,z.jsx)("img",{src:"/talks/enterprise-agent/assets/3d0663932a7b9857c37c.png",alt:e?"\u4F01\u4E1A Agent \u6F14\u8BB2\u7684\u5C0F\u732A\u804C\u573A\u6F2B\u753B\u5C01\u9762":"Pig office comic from the Enterprise Agent talk",loading:"lazy"}),(0,z.jsx)("span",{className:"play-badge","aria-hidden":"true",children:"\u25B7"})]}),(0,z.jsxs)("div",{className:"talk-copy",children:[(0,z.jsxs)("small",{children:["FEATURED TALK / ",e?"\u6211\u7684\u5B9E\u8DF5\u5206\u4EAB":"MY STORY"]}),(0,z.jsx)("h2",{children:e?(0,z.jsxs)(z.Fragment,{children:["\u4E3A\u4E86\u5077\u61D2\uFF0C",(0,z.jsx)("br",{}),"\u6211\u8D8A\u6765\u8D8A\u52AA\u529B\u5730",(0,z.jsx)("br",{}),(0,z.jsx)("em",{children:"\u7814\u7A76\u81EA\u52A8\u5316\u3002"})]}):(0,z.jsxs)(z.Fragment,{children:["Working harder",(0,z.jsx)("br",{}),"to do less",(0,z.jsx)("br",{}),(0,z.jsx)("em",{children:"repetitive work."})]})}),(0,z.jsx)("p",{children:e?"\u4ECE\u5B9E\u4E60\u65F6\u5411 AI \u6C42\u52A9\uFF0C\u5230\u6539\u9020\u81EA\u5DF1\u7684\u4FBF\u5229\u5E97\uFF0C\u518D\u5230\u8D70\u8FDB\u4F01\u4E1A\u505A Agent\u3002\u8FD9\u573A\u6F14\u8BB2\u8BB0\u5F55\u4E86\u6211\u7684\u5C1D\u8BD5\u3001\u78B0\u58C1\u548C\u91CD\u65B0\u7406\u89E3\u4E1A\u52A1\u7684\u8FC7\u7A0B\u3002":"From asking AI for help during an internship to automating my own store and building enterprise agents. A story of experiments, setbacks and learning what people actually need."}),(0,z.jsxs)("div",{className:"talk-facts",children:[(0,z.jsx)("span",{children:e?"\u4E92\u52A8\u6F2B\u753B":"Interactive comic"}),(0,z.jsx)("span",{children:e?"\u7075\u7280\u914D\u97F3":"Recorded narration"}),(0,z.jsx)("span",{children:e?"\u652F\u6301\u5168\u5C4F\u6F14\u8BB2":"Fullscreen presentation"})]}),(0,z.jsxs)("a",{className:"text-link",href:pd,children:[e?"\u8FDB\u5165\u6F14\u8BB2\uFF0C\u6309\u81EA\u5DF1\u7684\u8282\u594F\u8BB2":"Open and present at your own pace"," \u2197"]})]})]}),(0,z.jsxs)("section",{className:"about",id:"about",children:[(0,z.jsxs)("div",{className:"about-lead",children:[(0,z.jsxs)("small",{children:["01 / ",e?"\u5173\u4E8E ANGELA":"ABOUT ANGELA"]}),(0,z.jsx)("h2",{children:e?(0,z.jsxs)(z.Fragment,{children:["\u60F3\u6CD5\u5F88\u591A\uFF0C",(0,z.jsx)("br",{}),(0,z.jsx)("em",{children:"\u4E5F\u8BA4\u771F\u628A\u5B83\u4EEC\u505A\u51FA\u6765\u3002"})]}):(0,z.jsxs)(z.Fragment,{children:["Curious by nature.",(0,z.jsx)("br",{}),(0,z.jsx)("em",{children:"A builder in practice."})]})}),(0,z.jsx)("p",{children:e?"\u6211\u7684\u80CC\u666F\u6A2A\u8DE8\u6570\u5B66\u3001\u91D1\u878D\u7ECF\u6D4E\u5B66\u4E0E\u5B9E\u4F53\u5546\u4E1A\u8FD0\u8425\u3002\u7ECF\u8425\u81EA\u5DF1\u7684\u751F\u610F\uFF0C\u8BA9\u6211\u4E60\u60EF\u5148\u770B\u771F\u5B9E\u5DE5\u4F5C\u600E\u6837\u53D1\u751F\uFF1B\u5F00\u53D1 AI \u7CFB\u7EDF\uFF0C\u8BA9\u6211\u4E0D\u65AD\u628A\u8FD9\u4E9B\u89C2\u5BDF\u53D8\u6210\u53EF\u4EE5\u8FD0\u884C\u3001\u53EF\u4EE5\u68C0\u67E5\u7684\u5DE5\u5177\u3002":"My background combines mathematics, financial economics and business operations. Running a business taught me to understand the work first. Building AI systems lets me turn those observations into tools people can use and check."})]}),(0,z.jsxs)("div",{className:"foundation",children:[(0,z.jsxs)("article",{children:[(0,z.jsx)("small",{children:e?"\u6559\u80B2\u80CC\u666F":"EDUCATION"}),(0,z.jsx)("h3",{children:e?"\u6089\u5C3C\u5927\u5B66":"University of Sydney"}),(0,z.jsx)("p",{children:e?(0,z.jsxs)(z.Fragment,{children:["\u7ECF\u6D4E\u5B66\u7855\u58EB \xB7 \u91D1\u878D\u7ECF\u6D4E\u5B66",(0,z.jsx)("br",{}),"\u7406\u5B66\u5B66\u58EB \xB7 \u6570\u5B66"]}):(0,z.jsxs)(z.Fragment,{children:["Master of Economics \xB7 Financial Economics",(0,z.jsx)("br",{}),"Bachelor of Science \xB7 Mathematics"]})})]}),(0,z.jsxs)("article",{children:[(0,z.jsx)("small",{children:e?"\u5B9E\u8DF5\u65B9\u5411":"PRACTICE"}),(0,z.jsxs)("h3",{children:["AI \xD7 ",e?"\u4E1A\u52A1":"Business"]}),(0,z.jsx)("p",{children:e?(0,z.jsxs)(z.Fragment,{children:["\u4F01\u4E1A\u667A\u80FD\u4F53 \xB7 \u5DE5\u4F5C\u6D41\u81EA\u52A8\u5316",(0,z.jsx)("br",{}),"\u6570\u5B57\u52A9\u624B \xB7 \u5B9E\u4F53\u8FD0\u8425"]}):(0,z.jsxs)(z.Fragment,{children:["Enterprise agents \xB7 Workflow automation",(0,z.jsx)("br",{}),"Digital companions \xB7 Business operations"]})})]}),(0,z.jsxs)("article",{children:[(0,z.jsx)("small",{children:e?"\u5DE5\u4F5C\u8BED\u8A00":"LANGUAGES"}),(0,z.jsx)("h3",{children:e?"\u4E2D\u6587 / English":"Mandarin / English"}),(0,z.jsx)("p",{children:e?(0,z.jsxs)(z.Fragment,{children:["\u4E2D\u6587\u6BCD\u8BED \xB7 \u82F1\u8BED\u6D41\u5229",(0,z.jsx)("br",{}),"\u8DE8\u9886\u57DF\u3001\u8DE8\u6587\u5316\u534F\u4F5C"]}):(0,z.jsxs)(z.Fragment,{children:["Native Mandarin \xB7 Fluent English",(0,z.jsx)("br",{}),"Work across disciplines and cultures"]})})]})]}),(0,z.jsx)("div",{className:"timeline",children:j2.map(r=>(0,z.jsxs)("article",{children:[(0,z.jsx)("time",{children:r[0]}),(0,z.jsxs)("div",{children:[(0,z.jsx)("h3",{children:Ac(r[1],e)}),(0,z.jsx)("b",{children:r[2]})]}),(0,z.jsx)("p",{children:Ac(r[3],e)})]},r[0]+r[2]))})]}),(0,z.jsxs)("section",{className:"console",id:"systems",children:[(0,z.jsxs)("header",{className:"section-head",children:[(0,z.jsxs)("div",{children:[(0,z.jsxs)("small",{children:["02 / ",e?"\u4F5C\u54C1\u4E0E\u63A2\u7D22":"SELECTED WORK"]}),(0,z.jsx)("h2",{children:e?(0,z.jsxs)(z.Fragment,{children:["\u4ECE\u771F\u5B9E\u95EE\u9898\uFF0C",(0,z.jsx)("br",{}),(0,z.jsx)("em",{children:"\u5F00\u59CB\u6784\u5EFA\u3002"})]}):(0,z.jsxs)(z.Fragment,{children:["Built around",(0,z.jsx)("br",{}),(0,z.jsx)("em",{children:"real problems."})]})})]}),(0,z.jsx)("p",{children:e?"\u6211\u5728\u4E0D\u540C\u573A\u666F\u91CC\u63A2\u7D22\u540C\u4E00\u4EF6\u4E8B\uFF1A\u8BA9 AI \u4E0E\u5B9E\u9645\u5DE5\u4F5C\u63A5\u5F97\u4E0A\u3002":"Different contexts. One focus: connecting AI with the work people actually do."})]}),(0,z.jsx)("div",{className:"systems-grid",children:J2.map(r=>(0,z.jsxs)("article",{className:r.hero?"system hero-system":"system",id:"project-"+r.code.toLowerCase(),children:[r.href&&(0,z.jsx)("a",{className:"system-link",href:r.href,target:"_blank",rel:"noopener noreferrer","aria-label":e?`\u5728\u65B0\u7A97\u53E3\u6253\u5F00${r.title.zh}`:`Open ${r.title.en} in a new window`}),(0,z.jsxs)("div",{className:"system-top",children:[(0,z.jsxs)("small",{children:[r.id," / ",r.status]}),(0,z.jsx)("span",{children:r.href?"\u2197":"\xB7"})]}),(0,z.jsx)("b",{className:"system-code",children:r.code}),(0,z.jsx)("h3",{children:Ac(r.title,e)}),(0,z.jsx)("p",{children:Ac(r.copy,e)}),r.proof&&(0,z.jsx)("div",{className:"proof",children:Ac(r.proof,e)}),(0,z.jsx)("footer",{children:r.tags.map(o=>(0,z.jsx)("span",{children:o},o))})]},r.code))})]}),(0,z.jsxs)("footer",{className:"contact",id:"contact",children:[(0,z.jsx)("small",{children:"LET\u2019S CONNECT"}),(0,z.jsx)("h2",{children:e?(0,z.jsxs)(z.Fragment,{children:["\u6709\u4E2A\u60F3\u6CD5\uFF1F",(0,z.jsx)("br",{}),(0,z.jsx)("em",{children:"\u4E00\u8D77\u804A\u804A\u3002"})]}):(0,z.jsxs)(z.Fragment,{children:["Have something in mind?",(0,z.jsx)("br",{}),(0,z.jsx)("em",{children:"Let\u2019s talk."})]})}),(0,z.jsxs)("a",{className:"mail",href:"mailto:angela19990616@gmail.com",children:[e?"\u5F00\u59CB\u4E00\u573A\u5BF9\u8BDD":"START A CONVERSATION"," \u2197"]}),(0,z.jsxs)("div",{className:"contact-row",children:[(0,z.jsx)("span",{children:"ANGELA19990616@GMAIL.COM"}),(0,z.jsx)("a",{href:"tel:+61405661699",children:"+61 405 661 699"}),(0,z.jsx)("a",{href:"tel:+8613146016991",children:"+86 131 4601 6991"}),(0,z.jsx)("span",{children:"\xA9 2026 ANGELA LIANG"})]})]})]})}(0,Hb.hydrateRoot)(document.getElementById("portfolio-root"),Fb.default.createElement(B0));
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
