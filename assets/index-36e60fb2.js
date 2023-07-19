var gf=Object.defineProperty;var _f=(o,e,t)=>e in o?gf(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var Ba=(o,e,t)=>(_f(o,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="151",Kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yf=0,hh=1,vf=2,yd=1,vd=2,ua=3,Qn=0,Wt=1,Dn=2,wi=0,Rr=1,ch=2,dh=3,uh=4,wf=5,Mr=100,bf=101,xf=102,fh=103,ph=104,Sf=200,Mf=201,Af=202,Tf=203,wd=204,bd=205,Ef=206,Cf=207,Lf=208,Rf=209,Pf=210,If=0,Df=1,kf=2,qo=3,Nf=4,Ff=5,Uf=6,Of=7,Is=0,Bf=1,zf=2,Zn=0,Hf=1,Vf=2,xd=3,Gf=4,Wf=5,Sd=300,Ur=301,Or=302,ys=303,Xo=304,Ds=306,Si=1e3,Vt=1001,vs=1002,bt=1003,Ko=1004,fs=1005,Ht=1006,Ml=1007,$i=1008,Ji=1009,jf=1010,qf=1011,Md=1012,Xf=1013,Vi=1014,mi=1015,xa=1016,Kf=1017,Yf=1018,Pr=1020,$f=1021,un=1023,Jf=1024,Zf=1025,ji=1026,Br=1027,Qf=1028,ep=1029,tp=1030,np=1031,ip=1033,Ks=33776,Ys=33777,$s=33778,Js=33779,mh=35840,gh=35841,_h=35842,yh=35843,rp=36196,vh=37492,wh=37496,bh=37808,xh=37809,Sh=37810,Mh=37811,Ah=37812,Th=37813,Eh=37814,Ch=37815,Lh=37816,Rh=37817,Ph=37818,Ih=37819,Dh=37820,kh=37821,Zs=36492,ap=36283,Nh=36284,Fh=36285,Uh=36286,sp=2200,op=2201,lp=2202,Sa=2300,zr=2301,Qs=2302,Ar=2400,Tr=2401,ws=2402,Al=2500,hp=2501,cp=0,Ad=1,Yo=2,Zi=3e3,Ue=3001,dp=3200,up=3201,ks=0,fp=1,dn="srgb",Hr="srgb-linear",Td="display-p3",eo=7680,pp=519,$o=35044,Oh="300 es",Jo=1035;class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bh=1234567;const ga=Math.PI/180,Vr=180/Math.PI;function En(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[o&255]+Ct[o>>8&255]+Ct[o>>16&255]+Ct[o>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function mt(o,e,t){return Math.max(e,Math.min(t,o))}function Tl(o,e){return(o%e+e)%e}function mp(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function gp(o,e,t){return o!==e?(t-o)/(e-o):0}function _a(o,e,t){return(1-t)*o+t*e}function _p(o,e,t,n){return _a(o,e,1-Math.exp(-t*n))}function yp(o,e=1){return e-Math.abs(Tl(o,e*2)-e)}function vp(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function wp(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function bp(o,e){return o+Math.floor(Math.random()*(e-o+1))}function xp(o,e){return o+Math.random()*(e-o)}function Sp(o){return o*(.5-Math.random())}function Mp(o){o!==void 0&&(Bh=o);let e=Bh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ap(o){return o*ga}function Tp(o){return o*Vr}function Zo(o){return(o&o-1)===0&&o!==0}function Ed(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Cd(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Ep(o,e,t,n,i){const r=Math.cos,a=Math.sin,s=r(t/2),l=a(t/2),h=r((e+n)/2),c=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":o.set(s*c,l*d,l*u,s*h);break;case"YZY":o.set(l*u,s*c,l*d,s*h);break;case"ZXZ":o.set(l*d,l*u,s*c,s*h);break;case"XZX":o.set(s*c,l*g,l*f,s*h);break;case"YXY":o.set(l*f,s*c,l*g,s*h);break;case"ZYZ":o.set(l*g,l*f,s*c,s*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $n(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xe(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Tn={DEG2RAD:ga,RAD2DEG:Vr,generateUUID:En,clamp:mt,euclideanModulo:Tl,mapLinear:mp,inverseLerp:gp,lerp:_a,damp:_p,pingpong:yp,smoothstep:vp,smootherstep:wp,randInt:bp,randFloat:xp,randFloatSpread:Sp,seededRandom:Mp,degToRad:Ap,radToDeg:Tp,isPowerOfTwo:Zo,ceilPowerOfTwo:Ed,floorPowerOfTwo:Cd,setQuaternionFromProperEuler:Ep,normalize:Xe,denormalize:$n};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,l,h){const c=this.elements;return c[0]=e,c[1]=i,c[2]=s,c[3]=t,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],l=n[6],h=n[1],c=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],w=i[1],v=i[4],y=i[7],x=i[2],T=i[5],C=i[8];return r[0]=a*_+s*w+l*x,r[3]=a*m+s*v+l*T,r[6]=a*p+s*y+l*C,r[1]=h*_+c*w+d*x,r[4]=h*m+c*v+d*T,r[7]=h*p+c*y+d*C,r[2]=u*_+f*w+g*x,r[5]=u*m+f*v+g*T,r[8]=u*p+f*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*s*h-n*r*c+n*s*l+i*r*h-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],h=e[7],c=e[8],d=c*a-s*h,u=s*l-c*r,f=h*r-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*h-c*n)*_,e[2]=(s*n-i*a)*_,e[3]=u*_,e[4]=(c*t-i*l)*_,e[5]=(i*r-s*t)*_,e[6]=f*_,e[7]=(n*l-h*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*s)+a+e,-i*h,i*l,-i*(-h*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const to=new Fe;function Ld(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ma(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ir(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function no(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Cp=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Lp=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Rp(o){return o.convertSRGBToLinear().applyMatrix3(Lp)}function Pp(o){return o.applyMatrix3(Cp).convertLinearToSRGB()}const Ip={[Hr]:o=>o,[dn]:o=>o.convertSRGBToLinear(),[Td]:Rp},Dp={[Hr]:o=>o,[dn]:o=>o.convertLinearToSRGB(),[Td]:Pp},Jt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Hr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=Ip[e],i=Dp[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let rr;class Rd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Ma("canvas")),rr.width=e.width,rr.height=e.height;const n=rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ir(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ir(t[n]/255)*255):t[n]=Ir(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Pd{constructor(e=null){this.isSource=!0,this.uuid=En(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(io(i[a].image)):r.push(io(i[a]))}else r=io(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function io(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Rd.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kp=0;class gt extends Ei{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=Vt,i=Vt,r=Ht,a=$i,s=un,l=Ji,h=gt.DEFAULT_ANISOTROPY,c=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=En(),this.name="",this.source=new Pd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Si:e.x=e.x-Math.floor(e.x);break;case Vt:e.x=e.x<0?0:1;break;case vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Si:e.y=e.y-Math.floor(e.y);break;case Vt:e.y=e.y<0?0:1;break;case vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=Sd;gt.DEFAULT_ANISOTROPY=1;class We{constructor(e=0,t=0,n=0,i=1){We.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(h+1)/2,y=(f+1)/2,x=(p+1)/2,T=(c+u)/4,C=(d+_)/4,L=(g+m)/4;return v>y&&v>x?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=C/n):y>x?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=L/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=C/r,i=L/r),this.set(n,i,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-c)*(u-c));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-_)/w,this.z=(u-c)/w,this.w=Math.acos((h+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qi extends Ei{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new gt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ht,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Id extends gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Np extends gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let l=n[i+0],h=n[i+1],c=n[i+2],d=n[i+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(s===0){e[t+0]=l,e[t+1]=h,e[t+2]=c,e[t+3]=d;return}if(s===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||h!==f||c!==g){let m=1-s;const p=l*u+h*f+c*g+d*_,w=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const x=Math.sqrt(v),T=Math.atan2(x,p*w);m=Math.sin(m*T)/x,s=Math.sin(s*T)/x}const y=s*w;if(l=l*m+u*y,h=h*m+f*y,c=c*m+g*y,d=d*m+_*y,m===1-s){const x=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=x,h*=x,c*=x,d*=x}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],l=n[i+1],h=n[i+2],c=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=s*g+c*d+l*f-h*u,e[t+1]=l*g+c*u+h*d-s*f,e[t+2]=h*g+c*f+s*u-l*d,e[t+3]=c*g-s*d-l*u-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,l=Math.sin,h=s(n/2),c=s(i/2),d=s(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"YXZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"ZXY":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"ZYX":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"YZX":this._x=u*c*d+h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d-u*f*g;break;case"XZY":this._x=u*c*d-h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],l=t[9],h=t[2],c=t[6],d=t[10],u=n+s+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(a-i)*f}else if(n>s&&n>d){const f=2*Math.sqrt(1+n-s-d);this._w=(c-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+h)/f}else if(s>d){const f=2*Math.sqrt(1+s-n-d);this._w=(r-h)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+d-n-s);this._w=(a-i)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,l=t._y,h=t._z,c=t._w;return this._x=n*c+a*s+i*h-r*l,this._y=i*c+a*l+r*s-n*h,this._z=r*c+a*h+n*l-i*s,this._w=a*c-n*s-i*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),c=Math.atan2(h,s),d=Math.sin((1-t)*c)/h,u=Math.sin(t*c)/h;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,l=e.w,h=l*t+a*i-s*n,c=l*n+s*t-r*i,d=l*i+r*n-a*t,u=-r*t-a*n-s*i;return this.x=h*l+u*-r+c*-s-d*-a,this.y=c*l+u*-a+d*-r-h*-s,this.z=d*l+u*-s+h*-a-c*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new P,zh=new Mt;class ii{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ar.copy(e.boundingBox),ar.applyMatrix4(e.matrixWorld),this.union(ar);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,s=r.count;a<s;a++)Hn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Hn)}else i.boundingBox===null&&i.computeBoundingBox(),ar.copy(i.boundingBox),ar.applyMatrix4(e.matrixWorld),this.union(ar)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),za.subVectors(this.max,na),sr.subVectors(e.a,na),or.subVectors(e.b,na),lr.subVectors(e.c,na),si.subVectors(or,sr),oi.subVectors(lr,or),Di.subVectors(sr,lr);let t=[0,-si.z,si.y,0,-oi.z,oi.y,0,-Di.z,Di.y,si.z,0,-si.x,oi.z,0,-oi.x,Di.z,0,-Di.x,-si.y,si.x,0,-oi.y,oi.x,0,-Di.y,Di.x,0];return!ao(t,sr,or,lr,za)||(t=[1,0,0,0,1,0,0,0,1],!ao(t,sr,or,lr,za))?!1:(Ha.crossVectors(si,oi),t=[Ha.x,Ha.y,Ha.z],ao(t,sr,or,lr,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new P,new P,new P,new P,new P,new P,new P,new P],Hn=new P,ar=new ii,sr=new P,or=new P,lr=new P,si=new P,oi=new P,Di=new P,na=new P,za=new P,Ha=new P,ki=new P;function ao(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){ki.fromArray(o,r);const s=i.x*Math.abs(ki.x)+i.y*Math.abs(ki.y)+i.z*Math.abs(ki.z),l=e.dot(ki),h=t.dot(ki),c=n.dot(ki);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>s)return!1}return!0}const Fp=new ii,ia=new P,so=new P;class ri{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ia,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(so.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(so)),this.expandByPoint(ia.copy(e.center).sub(so))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new P,oo=new P,Va=new P,li=new P,lo=new P,Ga=new P,ho=new P;class Ns{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oo.copy(e).add(t).multiplyScalar(.5),Va.copy(t).sub(e).normalize(),li.copy(this.origin).sub(oo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Va),s=li.dot(this.direction),l=-li.dot(Va),h=li.lengthSq(),c=Math.abs(1-a*a);let d,u,f,g;if(c>0)if(d=a*l-s,u=a*s-l,g=r*c,d>=0)if(u>=-g)if(u<=g){const _=1/c;d*=_,u*=_,f=d*(d+a*u+2*s)+u*(a*d+u+2*l)+h}else u=r,d=Math.max(0,-(a*u+s)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(a*u+s)),f=-d*d+u*(u+2*l)+h;else u<=-g?(d=Math.max(0,-(-a*r+s)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(a*r+s)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=a>0?-r:r,d=Math.max(0,-(a*u+s)),f=-d*d+u*(u+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(oo).addScaledVector(Va,u),f}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,l;const h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(e.min.x-u.x)*h,i=(e.max.x-u.x)*h):(n=(e.max.x-u.x)*h,i=(e.min.x-u.x)*h),c>=0?(r=(e.min.y-u.y)*c,a=(e.max.y-u.y)*c):(r=(e.max.y-u.y)*c,a=(e.min.y-u.y)*c),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(s=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(s=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,i,r){lo.subVectors(t,e),Ga.subVectors(n,e),ho.crossVectors(lo,Ga);let a=this.direction.dot(ho),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;li.subVectors(this.origin,e);const l=s*this.direction.dot(Ga.crossVectors(li,Ga));if(l<0)return null;const h=s*this.direction.dot(lo.cross(li));if(h<0||l+h>a)return null;const c=-s*li.dot(ho);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,l,h,c,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=s,p[13]=l,p[2]=h,p[6]=c,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/hr.setFromMatrixColumn(e,0).length(),r=1/hr.setFromMatrixColumn(e,1).length(),a=1/hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),h=Math.sin(i),c=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*c,f=a*d,g=s*c,_=s*d;t[0]=l*c,t[4]=-l*d,t[8]=h,t[1]=f+g*h,t[5]=u-_*h,t[9]=-s*l,t[2]=_-u*h,t[6]=g+f*h,t[10]=a*l}else if(e.order==="YXZ"){const u=l*c,f=l*d,g=h*c,_=h*d;t[0]=u+_*s,t[4]=g*s-f,t[8]=a*h,t[1]=a*d,t[5]=a*c,t[9]=-s,t[2]=f*s-g,t[6]=_+u*s,t[10]=a*l}else if(e.order==="ZXY"){const u=l*c,f=l*d,g=h*c,_=h*d;t[0]=u-_*s,t[4]=-a*d,t[8]=g+f*s,t[1]=f+g*s,t[5]=a*c,t[9]=_-u*s,t[2]=-a*h,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const u=a*c,f=a*d,g=s*c,_=s*d;t[0]=l*c,t[4]=g*h-f,t[8]=u*h+_,t[1]=l*d,t[5]=_*h+u,t[9]=f*h-g,t[2]=-h,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*h,g=s*l,_=s*h;t[0]=l*c,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*c,t[9]=-s*c,t[2]=-h*c,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,f=a*h,g=s*l,_=s*h;t[0]=l*c,t[4]=-d,t[8]=h*c,t[1]=u*d+_,t[5]=a*c,t[9]=f*d-g,t[2]=g*d-f,t[6]=s*c,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Up,e,Op)}lookAt(e,t,n){const i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),hi.crossVectors(n,Zt),hi.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),hi.crossVectors(n,Zt)),hi.normalize(),Wa.crossVectors(Zt,hi),i[0]=hi.x,i[4]=Wa.x,i[8]=Zt.x,i[1]=hi.y,i[5]=Wa.y,i[9]=Zt.y,i[2]=hi.z,i[6]=Wa.z,i[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],l=n[8],h=n[12],c=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],v=n[7],y=n[11],x=n[15],T=i[0],C=i[4],L=i[8],b=i[12],M=i[1],B=i[5],O=i[9],I=i[13],k=i[2],F=i[6],j=i[10],Y=i[14],G=i[3],Q=i[7],Z=i[11],ge=i[15];return r[0]=a*T+s*M+l*k+h*G,r[4]=a*C+s*B+l*F+h*Q,r[8]=a*L+s*O+l*j+h*Z,r[12]=a*b+s*I+l*Y+h*ge,r[1]=c*T+d*M+u*k+f*G,r[5]=c*C+d*B+u*F+f*Q,r[9]=c*L+d*O+u*j+f*Z,r[13]=c*b+d*I+u*Y+f*ge,r[2]=g*T+_*M+m*k+p*G,r[6]=g*C+_*B+m*F+p*Q,r[10]=g*L+_*O+m*j+p*Z,r[14]=g*b+_*I+m*Y+p*ge,r[3]=w*T+v*M+y*k+x*G,r[7]=w*C+v*B+y*F+x*Q,r[11]=w*L+v*O+y*j+x*Z,r[15]=w*b+v*I+y*Y+x*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],l=e[9],h=e[13],c=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*d-i*h*d-r*s*u+n*h*u+i*s*f-n*l*f)+_*(+t*l*f-t*h*u+r*a*u-i*a*f+i*h*c-r*l*c)+m*(+t*h*d-t*s*f-r*a*d+n*a*f+r*s*c-n*h*c)+p*(-i*s*c-t*l*d+t*s*u+i*a*d-n*a*u+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],h=e[7],c=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=d*m*h-_*u*h+_*l*f-s*m*f-d*l*p+s*u*p,v=g*u*h-c*m*h-g*l*f+a*m*f+c*l*p-a*u*p,y=c*_*h-g*d*h+g*s*f-a*_*f-c*s*p+a*d*p,x=g*d*l-c*_*l-g*s*u+a*_*u+c*s*m-a*d*m,T=t*w+n*v+i*y+r*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=w*C,e[1]=(_*u*r-d*m*r-_*i*f+n*m*f+d*i*p-n*u*p)*C,e[2]=(s*m*r-_*l*r+_*i*h-n*m*h-s*i*p+n*l*p)*C,e[3]=(d*l*r-s*u*r-d*i*h+n*u*h+s*i*f-n*l*f)*C,e[4]=v*C,e[5]=(c*m*r-g*u*r+g*i*f-t*m*f-c*i*p+t*u*p)*C,e[6]=(g*l*r-a*m*r-g*i*h+t*m*h+a*i*p-t*l*p)*C,e[7]=(a*u*r-c*l*r+c*i*h-t*u*h-a*i*f+t*l*f)*C,e[8]=y*C,e[9]=(g*d*r-c*_*r-g*n*f+t*_*f+c*n*p-t*d*p)*C,e[10]=(a*_*r-g*s*r+g*n*h-t*_*h-a*n*p+t*s*p)*C,e[11]=(c*s*r-a*d*r-c*n*h+t*d*h+a*n*f-t*s*f)*C,e[12]=x*C,e[13]=(c*_*i-g*d*i+g*n*u-t*_*u-c*n*m+t*d*m)*C,e[14]=(g*s*i-a*_*i-g*n*l+t*_*l+a*n*m-t*s*m)*C,e[15]=(a*d*i-c*s*i+c*n*l-t*d*l-a*n*u+t*s*u)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,l=e.z,h=r*a,c=r*s;return this.set(h*a+n,h*s-i*l,h*l+i*s,0,h*s+i*l,c*s+n,c*l-i*a,0,h*l-i*s,c*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,l=t._w,h=r+r,c=a+a,d=s+s,u=r*h,f=r*c,g=r*d,_=a*c,m=a*d,p=s*d,w=l*h,v=l*c,y=l*d,x=n.x,T=n.y,C=n.z;return i[0]=(1-(_+p))*x,i[1]=(f+y)*x,i[2]=(g-v)*x,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(u+p))*T,i[6]=(m+w)*T,i[7]=0,i[8]=(g+v)*C,i[9]=(m-w)*C,i[10]=(1-(u+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=hr.set(i[0],i[1],i[2]).length();const a=hr.set(i[4],i[5],i[6]).length(),s=hr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],bn.copy(this);const h=1/r,c=1/a,d=1/s;return bn.elements[0]*=h,bn.elements[1]*=h,bn.elements[2]*=h,bn.elements[4]*=c,bn.elements[5]*=c,bn.elements[6]*=c,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,t.setFromRotationMatrix(bn),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,l=2*r/(t-e),h=2*r/(n-i),c=(t+e)/(t-e),d=(n+i)/(n-i),u=-(a+r)/(a-r),f=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=c,s[12]=0,s[1]=0,s[5]=h,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=u,s[14]=f,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,l=1/(t-e),h=1/(n-i),c=1/(a-r),d=(t+e)*l,u=(n+i)*h,f=(a+r)*c;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*h,s[9]=0,s[13]=-u,s[2]=0,s[6]=0,s[10]=-2*c,s[14]=-f,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hr=new P,bn=new fe,Up=new P(0,0,0),Op=new P(1,1,1),hi=new P,Wa=new P,Zt=new P,Hh=new fe,Vh=new Mt;class pn{constructor(e=0,t=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],l=i[1],h=i[5],c=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bp=0;const Gh=new P,cr=new Mt,Gn=new fe,ja=new P,ra=new P,zp=new P,Hp=new Mt,Wh=new P(1,0,0),jh=new P(0,1,0),qh=new P(0,0,1),Vp={type:"added"},Xh={type:"removed"};class $e extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const e=new P,t=new pn,n=new Mt,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new Fe}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ja.copy(e):ja.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(ra,ja,this.up):Gn.lookAt(ja,ra,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),cr.setFromRotationMatrix(Gn),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Xh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,zp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,Hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const d=l[h];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,h=this.material.length;l<h;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const l=[];for(const h in s){const c=s[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}$e.DEFAULT_UP=new P(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new P,Wn=new P,co=new P,jn=new P,dr=new P,ur=new P,Kh=new P,uo=new P,fo=new P,po=new P;let qa=!1;class An{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xn.subVectors(e,t),i.cross(xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xn.subVectors(i,t),Wn.subVectors(n,t),co.subVectors(e,t);const a=xn.dot(xn),s=xn.dot(Wn),l=xn.dot(co),h=Wn.dot(Wn),c=Wn.dot(co),d=a*h-s*s;if(d===0)return r.set(-2,-1,-1);const u=1/d,f=(h*l-s*c)*u,g=(a*c-s*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn),jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(e,t,n,i,r,a,s,l){return qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qa=!0),this.getInterpolation(e,t,n,i,r,a,s,l)}static getInterpolation(e,t,n,i,r,a,s,l){return this.getBarycoord(e,t,n,i,jn),l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(s,jn.z),l}static isFrontFacing(e,t,n,i){return xn.subVectors(n,t),Wn.subVectors(e,t),xn.cross(Wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),xn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qa=!0),An.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return An.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;dr.subVectors(i,n),ur.subVectors(r,n),uo.subVectors(e,n);const l=dr.dot(uo),h=ur.dot(uo);if(l<=0&&h<=0)return t.copy(n);fo.subVectors(e,i);const c=dr.dot(fo),d=ur.dot(fo);if(c>=0&&d<=c)return t.copy(i);const u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(n).addScaledVector(dr,a);po.subVectors(e,r);const f=dr.dot(po),g=ur.dot(po);if(g>=0&&f<=g)return t.copy(r);const _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return s=h/(h-g),t.copy(n).addScaledVector(ur,s);const m=c*g-f*d;if(m<=0&&d-c>=0&&f-g>=0)return Kh.subVectors(r,i),s=(d-c)/(d-c+(f-g)),t.copy(i).addScaledVector(Kh,s);const p=1/(m+_+u);return a=_*p,s=u*p,t.copy(n).addScaledVector(dr,a).addScaledVector(ur,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Gp=0;class yn extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=En(),this.name="",this.type="Material",this.blending=Rr,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=wd,this.blendDst=bd,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function mo(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Jt.workingColorSpace){if(e=Tl(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=mo(a,r,e+1/3),this.g=mo(a,r,e),this.b=mo(a,r,e-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(e,t=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Jt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Jt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,h=parseFloat(r[2])/100,c=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,h,c,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const n=Dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Jt.fromWorkingColorSpace(Lt.copy(this),e),mt(Lt.r*255,0,255)<<16^mt(Lt.g*255,0,255)<<8^mt(Lt.b*255,0,255)<<0}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,i=Lt.g,r=Lt.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,h;const c=(s+a)/2;if(s===a)l=0,h=0;else{const d=a-s;switch(h=c<=.5?d/(a+s):d/(2-a-s),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=dn){Jt.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,i=Lt.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Sn),Sn.h+=e,Sn.s+=t,Sn.l+=n,this.setHSL(Sn.h,Sn.s,Sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(Xa);const n=_a(Sn.h,Xa.h,t),i=_a(Sn.s,Xa.s,t),r=_a(Sn.l,Xa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new ve;ve.NAMES=Dd;class Gi extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new P,Ka=new Ae;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$o,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array),r=Xe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$o&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Cl extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kd extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wp=0;const sn=new fe,go=new $e,fr=new P,Qt=new ii,aa=new ii,wt=new P;class jt extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?kd:Cl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];aa.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(Qt.min,aa.min),Qt.expandByPoint(wt),wt.addVectors(Qt.max,aa.max),Qt.expandByPoint(wt)):(Qt.expandByPoint(aa.min),Qt.expandByPoint(aa.max))}Qt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],l=this.morphTargetsRelative;for(let h=0,c=s.count;h<c;h++)wt.fromBufferAttribute(s,h),l&&(fr.fromBufferAttribute(e,h),wt.add(fr)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,h=[],c=[];for(let M=0;M<s;M++)h[M]=new P,c[M]=new P;const d=new P,u=new P,f=new P,g=new Ae,_=new Ae,m=new Ae,p=new P,w=new P;function v(M,B,O){d.fromArray(i,M*3),u.fromArray(i,B*3),f.fromArray(i,O*3),g.fromArray(a,M*2),_.fromArray(a,B*2),m.fromArray(a,O*2),u.sub(d),f.sub(d),_.sub(g),m.sub(g);const I=1/(_.x*m.y-m.x*_.y);isFinite(I)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(I),w.copy(f).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(I),h[M].add(p),h[B].add(p),h[O].add(p),c[M].add(w),c[B].add(w),c[O].add(w))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let M=0,B=y.length;M<B;++M){const O=y[M],I=O.start,k=O.count;for(let F=I,j=I+k;F<j;F+=3)v(n[F+0],n[F+1],n[F+2])}const x=new P,T=new P,C=new P,L=new P;function b(M){C.fromArray(r,M*3),L.copy(C);const B=h[M];x.copy(B),x.sub(C.multiplyScalar(C.dot(B))).normalize(),T.crossVectors(L,B);const I=T.dot(c[M])<0?-1:1;l[M*4]=x.x,l[M*4+1]=x.y,l[M*4+2]=x.z,l[M*4+3]=I}for(let M=0,B=y.length;M<B;++M){const O=y[M],I=O.start,k=O.count;for(let F=I,j=I+k;F<j;F+=3)b(n[F+0]),b(n[F+1]),b(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new P,r=new P,a=new P,s=new P,l=new P,h=new P,c=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),c.subVectors(a,r),d.subVectors(i,r),c.cross(d),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),s.add(c),l.add(c),h.add(c),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),c.subVectors(a,r),d.subVectors(i,r),c.cross(d),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(s,l){const h=s.array,c=s.itemSize,d=s.normalized,u=new h.constructor(l.length*c);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){s.isInterleavedBufferAttribute?f=l[_]*s.data.stride+s.offset:f=l[_]*c;for(let p=0;p<c;p++)u[g++]=h[f++]}return new At(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],h=e(l,n);t.setAttribute(s,h)}const r=this.morphAttributes;for(const s in r){const l=[],h=r[s];for(let c=0,d=h.length;c<d;c++){const u=h[c],f=e(u,n);l.push(f)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const h=a[s];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){const f=h[d];c.push(f.toJSON(e.data))}c.length>0&&(i[l]=c,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const c=i[h];this.setAttribute(h,c.clone(t))}const r=e.morphAttributes;for(const h in r){const c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,c=a.length;h<c;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yh=new fe,Pn=new Ns,Ya=new ri,$h=new P,pr=new P,mr=new P,gr=new P,_o=new P,$a=new P,Ja=new Ae,Za=new Ae,Qa=new Ae,Jh=new P,Zh=new P,Qh=new P,es=new P,ts=new P;class It extends $e{constructor(e=new jt,t=new Gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){$a.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=s[l],d=r[l];c!==0&&(_o.fromBufferAttribute(d,e),a?$a.addScaledVector(_o,c):$a.addScaledVector(_o.sub(t),c))}t.add($a)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(r),Pn.copy(e.ray).recast(e.near),Ya.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(Ya,$h)===null||Pn.origin.distanceToSquared($h)>(e.far-e.near)**2))||(Yh.copy(r).invert(),Pn.copy(e.ray).applyMatrix4(Yh),n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,h=n.attributes.uv,c=n.attributes.uv2,d=n.attributes.normal,u=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(i))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=i[m.materialIndex],w=Math.max(m.start,f.start),v=Math.min(s.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,x=v;y<x;y+=3){const T=s.getX(y),C=s.getX(y+1),L=s.getX(y+2);a=ns(this,p,e,Pn,h,c,d,T,C,L),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,f.start),_=Math.min(s.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=s.getX(m),v=s.getX(m+1),y=s.getX(m+2);a=ns(this,i,e,Pn,h,c,d,w,v,y),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=i[m.materialIndex],w=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,x=v;y<x;y+=3){const T=y,C=y+1,L=y+2;a=ns(this,p,e,Pn,h,c,d,T,C,L),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,v=m+1,y=m+2;a=ns(this,i,e,Pn,h,c,d,w,v,y),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function jp(o,e,t,n,i,r,a,s){let l;if(e.side===Wt?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,e.side===Qn,s),l===null)return null;ts.copy(s),ts.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(ts);return h<t.near||h>t.far?null:{distance:h,point:ts.clone(),object:o}}function ns(o,e,t,n,i,r,a,s,l,h){o.getVertexPosition(s,pr),o.getVertexPosition(l,mr),o.getVertexPosition(h,gr);const c=jp(o,e,t,n,pr,mr,gr,es);if(c){i&&(Ja.fromBufferAttribute(i,s),Za.fromBufferAttribute(i,l),Qa.fromBufferAttribute(i,h),c.uv=An.getInterpolation(es,pr,mr,gr,Ja,Za,Qa,new Ae)),r&&(Ja.fromBufferAttribute(r,s),Za.fromBufferAttribute(r,l),Qa.fromBufferAttribute(r,h),c.uv2=An.getInterpolation(es,pr,mr,gr,Ja,Za,Qa,new Ae)),a&&(Jh.fromBufferAttribute(a,s),Zh.fromBufferAttribute(a,l),Qh.fromBufferAttribute(a,h),c.normal=An.getInterpolation(es,pr,mr,gr,Jh,Zh,Qh,new P),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a:s,b:l,c:h,normal:new P,materialIndex:0};An.getNormal(pr,mr,gr,d.normal),c.face=d}return c}class ka extends jt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],c=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Bt(h,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(d,2));function g(_,m,p,w,v,y,x,T,C,L,b){const M=y/C,B=x/L,O=y/2,I=x/2,k=T/2,F=C+1,j=L+1;let Y=0,G=0;const Q=new P;for(let Z=0;Z<j;Z++){const ge=Z*B-I;for(let ee=0;ee<F;ee++){const V=ee*M-O;Q[_]=V*w,Q[m]=ge*v,Q[p]=k,h.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=T>0?1:-1,c.push(Q.x,Q.y,Q.z),d.push(ee/C),d.push(1-Z/L),Y+=1}}for(let Z=0;Z<L;Z++)for(let ge=0;ge<C;ge++){const ee=u+ge+F*Z,V=u+ge+F*(Z+1),K=u+(ge+1)+F*(Z+1),re=u+(ge+1)+F*Z;l.push(ee,V,re),l.push(V,K,re),G+=6}s.addGroup(f,G,b),f+=G,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gr(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ot(o){const e={};for(let t=0;t<o.length;t++){const n=Gr(o[t]);for(const i in n)e[i]=n[i]}return e}function qp(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Nd(o){return o.getRenderTarget()===null&&o.outputEncoding===Ue?dn:Hr}const Xp={clone:Gr,merge:Ot};var Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=qp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Fd=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Rt extends Fd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ga*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/h,i*=a.width/l,n*=a.height/h}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=-90,yr=1;class $p extends $e{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Rt(_r,yr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Rt(_r,yr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Rt(_r,yr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new Rt(_r,yr,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new Rt(_r,yr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const h=new Rt(_r,yr,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,h]=this.children,c=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=Zn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Ll extends gt{constructor(e,t,n,i,r,a,s,l,h,c){e=e!==void 0?e:[],t=t!==void 0?t:Ur,super(e,t,n,i,r,a,s,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jp extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ll(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ka(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:wi});r.uniforms.tEquirect.value=t;const a=new It(i,r),s=t.minFilter;return t.minFilter===$i&&(t.minFilter=Ht),new $p(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const yo=new P,Zp=new P,Qp=new Fe;class Oi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=yo.subVectors(n,t).cross(Zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qp.getNormalMatrix(e),i=this.coplanarPoint(yo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new ri,is=new P;class Rl{constructor(e=new Oi,t=new Oi,n=new Oi,i=new Oi,r=new Oi,a=new Oi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],h=n[5],c=n[6],d=n[7],u=n[8],f=n[9],g=n[10],_=n[11],m=n[12],p=n[13],w=n[14],v=n[15];return t[0].setComponents(s-i,d-l,_-u,v-m).normalize(),t[1].setComponents(s+i,d+l,_+u,v+m).normalize(),t[2].setComponents(s+r,d+h,_+f,v+p).normalize(),t[3].setComponents(s-r,d-h,_-f,v-p).normalize(),t[4].setComponents(s-a,d-c,_-g,v-w).normalize(),t[5].setComponents(s+a,d+c,_+g,v+w).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(is.x=i.normal.x>0?e.max.x:e.min.x,is.y=i.normal.y>0?e.max.y:e.min.y,is.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ud(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function em(o,e){const t=e.isWebGL2,n=new WeakMap;function i(h,c){const d=h.array,u=h.usage,f=o.createBuffer();o.bindBuffer(c,f),o.bufferData(c,d,u),h.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version}}function r(h,c,d){const u=c.array,f=c.updateRange;o.bindBuffer(d,h),f.count===-1?o.bufferSubData(d,0,u):(t?o.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):o.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),c.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function s(h){h.isInterleavedBufferAttribute&&(h=h.data);const c=n.get(h);c&&(o.deleteBuffer(c.buffer),n.delete(h))}function l(h,c){if(h.isGLBufferAttribute){const u=n.get(h);(!u||u.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d===void 0?n.set(h,i(h,c)):d.version<h.version&&(r(d.buffer,h,c),d.version=h.version)}return{get:a,remove:s,update:l}}class Pl extends jt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),l=Math.floor(i),h=s+1,c=l+1,d=e/s,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const w=p*u-a;for(let v=0;v<h;v++){const y=v*d-r;g.push(y,-w,0),_.push(0,0,1),m.push(v/s),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<s;w++){const v=w+h*p,y=w+h*(p+1),x=w+1+h*(p+1),T=w+1+h*p;f.push(v,y,T),f.push(y,x,T)}this.setIndex(f),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.widthSegments,e.heightSegments)}}var tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om="vec3 transformed = vec3( position );",lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cm=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,dm=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wm=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,xm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Em="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Om=`#ifdef USE_GRADIENTMAP
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
}`,Bm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Wm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,$m=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Jm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,eg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,og=`#if defined( USE_POINTS_UV )
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
#endif`,lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ug=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ng=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wg=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,jg=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,qg=`#ifdef USE_UV
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
#endif`,Xg=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
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
#endif`,Kg=`#ifdef USE_UV
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
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,n_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,i_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,r_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,a_=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,l_=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c_=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,d_=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,f_=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,m_=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,__=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,v_=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,b_=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,S_=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`uniform float size;
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
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,E_=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,C_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:tm,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:rm,aomap_fragment:am,aomap_pars_fragment:sm,begin_vertex:om,beginnormal_vertex:lm,bsdfs:hm,iridescence_fragment:cm,bumpmap_pars_fragment:dm,clipping_planes_fragment:um,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:_m,color_pars_vertex:ym,color_vertex:vm,common:wm,cube_uv_reflection_fragment:bm,defaultnormal_vertex:xm,displacementmap_pars_vertex:Sm,displacementmap_vertex:Mm,emissivemap_fragment:Am,emissivemap_pars_fragment:Tm,encodings_fragment:Em,encodings_pars_fragment:Cm,envmap_fragment:Lm,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Pm,envmap_pars_vertex:Im,envmap_physical_pars_fragment:Wm,envmap_vertex:Dm,fog_vertex:km,fog_pars_vertex:Nm,fog_fragment:Fm,fog_pars_fragment:Um,gradientmap_pars_fragment:Om,lightmap_fragment:Bm,lightmap_pars_fragment:zm,lights_lambert_fragment:Hm,lights_lambert_pars_fragment:Vm,lights_pars_begin:Gm,lights_toon_fragment:jm,lights_toon_pars_fragment:qm,lights_phong_fragment:Xm,lights_phong_pars_fragment:Km,lights_physical_fragment:Ym,lights_physical_pars_fragment:$m,lights_fragment_begin:Jm,lights_fragment_maps:Zm,lights_fragment_end:Qm,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:rg,map_pars_fragment:ag,map_particle_fragment:sg,map_particle_pars_fragment:og,metalnessmap_fragment:lg,metalnessmap_pars_fragment:hg,morphcolor_vertex:cg,morphnormal_vertex:dg,morphtarget_pars_vertex:ug,morphtarget_vertex:fg,normal_fragment_begin:pg,normal_fragment_maps:mg,normal_pars_fragment:gg,normal_pars_vertex:_g,normal_vertex:yg,normalmap_pars_fragment:vg,clearcoat_normal_fragment_begin:wg,clearcoat_normal_fragment_maps:bg,clearcoat_pars_fragment:xg,iridescence_pars_fragment:Sg,output_fragment:Mg,packing:Ag,premultiplied_alpha_fragment:Tg,project_vertex:Eg,dithering_fragment:Cg,dithering_pars_fragment:Lg,roughnessmap_fragment:Rg,roughnessmap_pars_fragment:Pg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Dg,shadowmap_vertex:kg,shadowmask_pars_fragment:Ng,skinbase_vertex:Fg,skinning_pars_vertex:Ug,skinning_vertex:Og,skinnormal_vertex:Bg,specularmap_fragment:zg,specularmap_pars_fragment:Hg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Gg,transmission_fragment:Wg,transmission_pars_fragment:jg,uv_pars_fragment:qg,uv_pars_vertex:Xg,uv_vertex:Kg,worldpos_vertex:Yg,background_vert:$g,background_frag:Jg,backgroundCube_vert:Zg,backgroundCube_frag:Qg,cube_vert:e_,cube_frag:t_,depth_vert:n_,depth_frag:i_,distanceRGBA_vert:r_,distanceRGBA_frag:a_,equirect_vert:s_,equirect_frag:o_,linedashed_vert:l_,linedashed_frag:h_,meshbasic_vert:c_,meshbasic_frag:d_,meshlambert_vert:u_,meshlambert_frag:f_,meshmatcap_vert:p_,meshmatcap_frag:m_,meshnormal_vert:g_,meshnormal_frag:__,meshphong_vert:y_,meshphong_frag:v_,meshphysical_vert:w_,meshphysical_frag:b_,meshtoon_vert:x_,meshtoon_frag:S_,points_vert:M_,points_frag:A_,shadow_vert:T_,shadow_frag:E_,sprite_vert:C_,sprite_frag:L_},se={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaTest:{value:0}}},In={basic:{uniforms:Ot([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Ot([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ve(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Ot([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Ot([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Ot([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ve(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Ot([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Ot([se.points,se.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Ot([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Ot([se.common,se.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Ot([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Ot([se.sprite,se.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Ot([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Ot([se.lights,se.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};In.physical={uniforms:Ot([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const rs={r:0,b:0,g:0};function R_(o,e,t,n,i,r,a){const s=new ve(0);let l=r===!0?0:1,h,c,d=null,u=0,f=null;function g(m,p){let w=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v));const y=o.xr,x=y.getSession&&y.getSession();x&&x.environmentBlendMode==="additive"&&(v=null),v===null?_(s,l):v&&v.isColor&&(_(v,1),w=!0),(o.autoClear||w)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ds)?(c===void 0&&(c=new It(new ka(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Gr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=v.encoding!==Ue,(d!==v||u!==v.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new It(new Pl(2,2),new ei({name:"BackgroundMaterial",uniforms:Gr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=v.encoding!==Ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=o.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function _(m,p){m.getRGB(rs,Nd(o)),n.buffers.color.setClear(rs.r,rs.g,rs.b,p,a)}return{getClearColor:function(){return s},setClearColor:function(m,p=1){s.set(m),l=p,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(s,l)},render:g}}function P_(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=m(null);let h=l,c=!1;function d(k,F,j,Y,G){let Q=!1;if(a){const Z=_(Y,j,F);h!==Z&&(h=Z,f(h.object)),Q=p(k,Y,j,G),Q&&w(k,Y,j,G)}else{const Z=F.wireframe===!0;(h.geometry!==Y.id||h.program!==j.id||h.wireframe!==Z)&&(h.geometry=Y.id,h.program=j.id,h.wireframe=Z,Q=!0)}G!==null&&t.update(G,34963),(Q||c)&&(c=!1,L(k,F,j,Y),G!==null&&o.bindBuffer(34963,t.get(G).buffer))}function u(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function f(k){return n.isWebGL2?o.bindVertexArray(k):r.bindVertexArrayOES(k)}function g(k){return n.isWebGL2?o.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function _(k,F,j){const Y=j.wireframe===!0;let G=s[k.id];G===void 0&&(G={},s[k.id]=G);let Q=G[F.id];Q===void 0&&(Q={},G[F.id]=Q);let Z=Q[Y];return Z===void 0&&(Z=m(u()),Q[Y]=Z),Z}function m(k){const F=[],j=[],Y=[];for(let G=0;G<i;G++)F[G]=0,j[G]=0,Y[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:Y,object:k,attributes:{},index:null}}function p(k,F,j,Y){const G=h.attributes,Q=F.attributes;let Z=0;const ge=j.getAttributes();for(const ee in ge)if(ge[ee].location>=0){const K=G[ee];let re=Q[ee];if(re===void 0&&(ee==="instanceMatrix"&&k.instanceMatrix&&(re=k.instanceMatrix),ee==="instanceColor"&&k.instanceColor&&(re=k.instanceColor)),K===void 0||K.attribute!==re||re&&K.data!==re.data)return!0;Z++}return h.attributesNum!==Z||h.index!==Y}function w(k,F,j,Y){const G={},Q=F.attributes;let Z=0;const ge=j.getAttributes();for(const ee in ge)if(ge[ee].location>=0){let K=Q[ee];K===void 0&&(ee==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),ee==="instanceColor"&&k.instanceColor&&(K=k.instanceColor));const re={};re.attribute=K,K&&K.data&&(re.data=K.data),G[ee]=re,Z++}h.attributes=G,h.attributesNum=Z,h.index=Y}function v(){const k=h.newAttributes;for(let F=0,j=k.length;F<j;F++)k[F]=0}function y(k){x(k,0)}function x(k,F){const j=h.newAttributes,Y=h.enabledAttributes,G=h.attributeDivisors;j[k]=1,Y[k]===0&&(o.enableVertexAttribArray(k),Y[k]=1),G[k]!==F&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,F),G[k]=F)}function T(){const k=h.newAttributes,F=h.enabledAttributes;for(let j=0,Y=F.length;j<Y;j++)F[j]!==k[j]&&(o.disableVertexAttribArray(j),F[j]=0)}function C(k,F,j,Y,G,Q){n.isWebGL2===!0&&(j===5124||j===5125)?o.vertexAttribIPointer(k,F,j,G,Q):o.vertexAttribPointer(k,F,j,Y,G,Q)}function L(k,F,j,Y){if(n.isWebGL2===!1&&(k.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const G=Y.attributes,Q=j.getAttributes(),Z=F.defaultAttributeValues;for(const ge in Q){const ee=Q[ge];if(ee.location>=0){let V=G[ge];if(V===void 0&&(ge==="instanceMatrix"&&k.instanceMatrix&&(V=k.instanceMatrix),ge==="instanceColor"&&k.instanceColor&&(V=k.instanceColor)),V!==void 0){const K=V.normalized,re=V.itemSize,he=t.get(V);if(he===void 0)continue;const z=he.buffer,Se=he.type,xe=he.bytesPerElement;if(V.isInterleavedBufferAttribute){const ae=V.data,be=ae.stride,Ge=V.offset;if(ae.isInstancedInterleavedBuffer){for(let _e=0;_e<ee.locationSize;_e++)x(ee.location+_e,ae.meshPerAttribute);k.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _e=0;_e<ee.locationSize;_e++)y(ee.location+_e);o.bindBuffer(34962,z);for(let _e=0;_e<ee.locationSize;_e++)C(ee.location+_e,re/ee.locationSize,Se,K,be*xe,(Ge+re/ee.locationSize*_e)*xe)}else{if(V.isInstancedBufferAttribute){for(let ae=0;ae<ee.locationSize;ae++)x(ee.location+ae,V.meshPerAttribute);k.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ae=0;ae<ee.locationSize;ae++)y(ee.location+ae);o.bindBuffer(34962,z);for(let ae=0;ae<ee.locationSize;ae++)C(ee.location+ae,re/ee.locationSize,Se,K,re*xe,re/ee.locationSize*ae*xe)}}else if(Z!==void 0){const K=Z[ge];if(K!==void 0)switch(K.length){case 2:o.vertexAttrib2fv(ee.location,K);break;case 3:o.vertexAttrib3fv(ee.location,K);break;case 4:o.vertexAttrib4fv(ee.location,K);break;default:o.vertexAttrib1fv(ee.location,K)}}}}T()}function b(){O();for(const k in s){const F=s[k];for(const j in F){const Y=F[j];for(const G in Y)g(Y[G].object),delete Y[G];delete F[j]}delete s[k]}}function M(k){if(s[k.id]===void 0)return;const F=s[k.id];for(const j in F){const Y=F[j];for(const G in Y)g(Y[G].object),delete Y[G];delete F[j]}delete s[k.id]}function B(k){for(const F in s){const j=s[F];if(j[k.id]===void 0)continue;const Y=j[k.id];for(const G in Y)g(Y[G].object),delete Y[G];delete j[k.id]}}function O(){I(),c=!0,h!==l&&(h=l,f(h.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function I_(o,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function s(h,c){o.drawArrays(r,h,c),t.update(c,r,1)}function l(h,c,d){if(d===0)return;let u,f;if(i)u=o,f="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](r,h,c,d),t.update(c,r,d)}this.setMode=a,this.render=s,this.renderInstances=l}function D_(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const h=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=o.getParameter(34930),u=o.getParameter(35660),f=o.getParameter(3379),g=o.getParameter(34076),_=o.getParameter(34921),m=o.getParameter(36347),p=o.getParameter(36348),w=o.getParameter(36349),v=u>0,y=a||e.has("OES_texture_float"),x=v&&y,T=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:x,maxSamples:T}}function k_(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Oi,s=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=c(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=o.get(d);if(!i||g===null||g.length===0||r&&!m)r?c(null):h();else{const w=r?0:n,v=w*4;let y=p.clippingState||null;l.value=y,y=c(g,u,v,f);for(let x=0;x!==v;++x)y[x]=t[x];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,w=u.matrixWorldInverse;s.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==_;++v,y+=4)a.copy(d[v]).applyMatrix4(w,s),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function N_(o){let e=new WeakMap;function t(a,s){return s===ys?a.mapping=Ur:s===Xo&&(a.mapping=Or),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===ys||s===Xo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new Jp(l.height/2);return h.fromEquirectangularTexture(o,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Fs extends Fd{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Er=4,ec=[.125,.215,.35,.446,.526,.582],Hi=20,vo=new Fs,tc=new ve;let wo=null;const Bi=(1+Math.sqrt(5))/2,vr=1/Bi,nc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Bi,vr),new P(0,Bi,-vr),new P(vr,0,Bi),new P(-vr,0,Bi),new P(Bi,vr,0),new P(-Bi,vr,0)];class ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){wo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wo),e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ur||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:xa,format:un,encoding:Zi,depthBuffer:!1},i=rc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F_(r)),this._blurMaterial=U_(r,e,t)}return i}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,n,i){const s=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,u=c.toneMapping;c.getClearColor(tc),c.toneMapping=Zn,c.autoClear=!1;const f=new Gi({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new It(new ka,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(tc),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(s.up.set(0,l[p],0),s.lookAt(h[p],0,0)):w===1?(s.up.set(0,0,l[p]),s.lookAt(0,h[p],0)):(s.up.set(0,l[p],0),s.lookAt(0,0,h[p]));const v=this._cubeSize;as(i,w*v,p>2?v:0,v,v),c.setRenderTarget(i),_&&c.render(g,s),c.render(e,s)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=u,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ur||e.mapping===Or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;as(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=nc[(i-1)%nc.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new It(this._lodPlanes[i],h),u=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),_=r/g,m=isFinite(r)?1+Math.floor(c*_):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const p=[];let w=0;for(let C=0;C<Hi;++C){const L=C/_,b=Math.exp(-L*L/2);p.push(b),C===0?w+=b:C<m&&(w+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",s&&(u.poleAxis.value=s);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const y=this._sizeLods[i],x=3*y*(i>v-Er?i-v+Er:0),T=4*(this._cubeSize-y);as(t,x,T,3*y,2*y),l.setRenderTarget(t),l.render(d,vo)}}function F_(o){const e=[],t=[],n=[];let i=o;const r=o-Er+1+ec.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let l=1/s;a>o-Er?l=ec[a-o+Er-1]:a===0&&(l=0),n.push(l);const h=1/(s-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,L=T>2?0:-1,b=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];w.set(b,_*g*T),v.set(u,m*g*T);const M=[T,T,T,T,T,T];y.set(M,p*g*T)}const x=new jt;x.setAttribute("position",new At(w,_)),x.setAttribute("uv",new At(v,m)),x.setAttribute("faceIndex",new At(y,p)),e.push(x),i>Er&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rc(o,e,t){const n=new Qi(o,e,t);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function U_(o,e,t){const n=new Float32Array(Hi),i=new P(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Il(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function ac(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function sc(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Il(){return`

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
	`}function O_(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,h=l===ys||l===Xo,c=l===Ur||l===Or;if(h||c)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new ic(o)),d=h?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(h&&d&&d.height>0||c&&d&&i(d)){t===null&&(t=new ic(o));const u=h?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,u),s.addEventListener("dispose",r),u.texture}else return null}}}return s}function i(s){let l=0;const h=6;for(let c=0;c<h;c++)s[c]!==void 0&&l++;return l===h}function r(s){const l=s.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function B_(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function z_(o,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function s(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],34962)}}function h(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let v=0,y=w.length;v<y;v+=3){const x=w[v+0],T=w[v+1],C=w[v+2];u.push(x,T,T,C,C,x)}}else{const w=g.array;_=g.version;for(let v=0,y=w.length/3-1;v<y;v+=3){const x=v+0,T=v+1,C=v+2;u.push(x,T,T,C,C,x)}}const m=new(Ld(u)?kd:Cl)(u,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function c(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:s,update:l,getWireframeAttribute:c}}function H_(o,e,t,n){const i=n.isWebGL2;let r;function a(u){r=u}let s,l;function h(u){s=u.type,l=u.bytesPerElement}function c(u,f){o.drawElements(r,f,s,u*l),t.update(f,r,1)}function d(u,f,g){if(g===0)return;let _,m;if(i)_=o,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,f,s,u*l,g),t.update(f,r,g)}this.setMode=a,this.setIndex=h,this.render=c,this.renderInstances=d}function V_(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function G_(o,e){return o[0]-e[0]}function W_(o,e){return Math.abs(e[1])-Math.abs(o[1])}function j_(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new We,s=[];for(let h=0;h<8;h++)s[h]=[h,0];function l(h,c,d){const u=h.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(c);if(m===void 0||m.count!==_){let F=function(){I.dispose(),r.delete(c),c.removeEventListener("dispose",F)};var f=F;m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let b=0;v===!0&&(b=1),y===!0&&(b=2),x===!0&&(b=3);let M=c.attributes.position.count*b,B=1;M>e.maxTextureSize&&(B=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const O=new Float32Array(M*B*4*_),I=new Id(O,M,B,_);I.type=mi,I.needsUpdate=!0;const k=b*4;for(let j=0;j<_;j++){const Y=T[j],G=C[j],Q=L[j],Z=M*B*4*j;for(let ge=0;ge<Y.count;ge++){const ee=ge*k;v===!0&&(a.fromBufferAttribute(Y,ge),O[Z+ee+0]=a.x,O[Z+ee+1]=a.y,O[Z+ee+2]=a.z,O[Z+ee+3]=0),y===!0&&(a.fromBufferAttribute(G,ge),O[Z+ee+4]=a.x,O[Z+ee+5]=a.y,O[Z+ee+6]=a.z,O[Z+ee+7]=0),x===!0&&(a.fromBufferAttribute(Q,ge),O[Z+ee+8]=a.x,O[Z+ee+9]=a.y,O[Z+ee+10]=a.z,O[Z+ee+11]=Q.itemSize===4?a.w:1)}}m={count:_,texture:I,size:new Ae(M,B)},r.set(c,m),c.addEventListener("dispose",F)}let p=0;for(let v=0;v<u.length;v++)p+=u[v];const w=c.morphTargetsRelative?1:1-p;d.getUniforms().setValue(o,"morphTargetBaseInfluence",w),d.getUniforms().setValue(o,"morphTargetInfluences",u),d.getUniforms().setValue(o,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let _=n[c.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[c.id]=_}for(let y=0;y<g;y++){const x=_[y];x[0]=y,x[1]=u[y]}_.sort(W_);for(let y=0;y<8;y++)y<g&&_[y][1]?(s[y][0]=_[y][0],s[y][1]=_[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(G_);const m=c.morphAttributes.position,p=c.morphAttributes.normal;let w=0;for(let y=0;y<8;y++){const x=s[y],T=x[0],C=x[1];T!==Number.MAX_SAFE_INTEGER&&C?(m&&c.getAttribute("morphTarget"+y)!==m[T]&&c.setAttribute("morphTarget"+y,m[T]),p&&c.getAttribute("morphNormal"+y)!==p[T]&&c.setAttribute("morphNormal"+y,p[T]),i[y]=C,w+=C):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),p&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),i[y]=0)}const v=c.morphTargetsRelative?1:1-w;d.getUniforms().setValue(o,"morphTargetBaseInfluence",v),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function q_(o,e,t,n){let i=new WeakMap;function r(l){const h=n.render.frame,c=l.geometry,d=e.get(l,c);return i.get(d)!==h&&(e.update(d),i.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){i=new WeakMap}function s(l){const h=l.target;h.removeEventListener("dispose",s),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}const Od=new gt,Bd=new Id,zd=new Np,Hd=new Ll,oc=[],lc=[],hc=new Float32Array(16),cc=new Float32Array(9),dc=new Float32Array(4);function Zr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=oc[i];if(r===void 0&&(r=new Float32Array(i),oc[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function _t(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function yt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Us(o,e){let t=lc[e];t===void 0&&(t=new Int32Array(e),lc[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function X_(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function K_(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;o.uniform2fv(this.addr,e),yt(t,e)}}function Y_(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;o.uniform3fv(this.addr,e),yt(t,e)}}function $_(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;o.uniform4fv(this.addr,e),yt(t,e)}}function J_(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,n))return;dc.set(n),o.uniformMatrix2fv(this.addr,!1,dc),yt(t,n)}}function Z_(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,n))return;cc.set(n),o.uniformMatrix3fv(this.addr,!1,cc),yt(t,n)}}function Q_(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,n))return;hc.set(n),o.uniformMatrix4fv(this.addr,!1,hc),yt(t,n)}}function ey(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function ty(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;o.uniform2iv(this.addr,e),yt(t,e)}}function ny(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;o.uniform3iv(this.addr,e),yt(t,e)}}function iy(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;o.uniform4iv(this.addr,e),yt(t,e)}}function ry(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function ay(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;o.uniform2uiv(this.addr,e),yt(t,e)}}function sy(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;o.uniform3uiv(this.addr,e),yt(t,e)}}function oy(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;o.uniform4uiv(this.addr,e),yt(t,e)}}function ly(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Od,i)}function hy(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zd,i)}function cy(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Hd,i)}function dy(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bd,i)}function uy(o){switch(o){case 5126:return X_;case 35664:return K_;case 35665:return Y_;case 35666:return $_;case 35674:return J_;case 35675:return Z_;case 35676:return Q_;case 5124:case 35670:return ey;case 35667:case 35671:return ty;case 35668:case 35672:return ny;case 35669:case 35673:return iy;case 5125:return ry;case 36294:return ay;case 36295:return sy;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return cy;case 36289:case 36303:case 36311:case 36292:return dy}}function fy(o,e){o.uniform1fv(this.addr,e)}function py(o,e){const t=Zr(e,this.size,2);o.uniform2fv(this.addr,t)}function my(o,e){const t=Zr(e,this.size,3);o.uniform3fv(this.addr,t)}function gy(o,e){const t=Zr(e,this.size,4);o.uniform4fv(this.addr,t)}function _y(o,e){const t=Zr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function yy(o,e){const t=Zr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function vy(o,e){const t=Zr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function wy(o,e){o.uniform1iv(this.addr,e)}function by(o,e){o.uniform2iv(this.addr,e)}function xy(o,e){o.uniform3iv(this.addr,e)}function Sy(o,e){o.uniform4iv(this.addr,e)}function My(o,e){o.uniform1uiv(this.addr,e)}function Ay(o,e){o.uniform2uiv(this.addr,e)}function Ty(o,e){o.uniform3uiv(this.addr,e)}function Ey(o,e){o.uniform4uiv(this.addr,e)}function Cy(o,e,t){const n=this.cache,i=e.length,r=Us(t,i);_t(n,r)||(o.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Od,r[a])}function Ly(o,e,t){const n=this.cache,i=e.length,r=Us(t,i);_t(n,r)||(o.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||zd,r[a])}function Ry(o,e,t){const n=this.cache,i=e.length,r=Us(t,i);_t(n,r)||(o.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Hd,r[a])}function Py(o,e,t){const n=this.cache,i=e.length,r=Us(t,i);_t(n,r)||(o.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Bd,r[a])}function Iy(o){switch(o){case 5126:return fy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return _y;case 35675:return yy;case 35676:return vy;case 5124:case 35670:return wy;case 35667:case 35671:return by;case 35668:case 35672:return xy;case 35669:case 35673:return Sy;case 5125:return My;case 36294:return Ay;case 36295:return Ty;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Py}}class Dy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=uy(t.type)}}class ky{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Iy(t.type)}}class Ny{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function uc(o,e){o.seq.push(e),o.map[e.id]=e}function Fy(o,e,t){const n=o.name,i=n.length;for(bo.lastIndex=0;;){const r=bo.exec(n),a=bo.lastIndex;let s=r[1];const l=r[2]==="]",h=r[3];if(l&&(s=s|0),h===void 0||h==="["&&a+2===i){uc(t,h===void 0?new Dy(s,o,e):new ky(s,o,e));break}else{let d=t.map[s];d===void 0&&(d=new Ny(s),uc(t,d)),t=d}}}class ps{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Fy(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function fc(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Uy=0;function Oy(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function By(o){switch(o){case Zi:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function pc(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Oy(o.getShaderSource(e),a)}else return i}function zy(o,e){const t=By(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Hy(o,e){let t;switch(e){case Hf:t="Linear";break;case Vf:t="Reinhard";break;case xd:t="OptimizedCineon";break;case Gf:t="ACESFilmic";break;case Wf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vy(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fa).join(`
`)}function Gy(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wy(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function fa(o){return o!==""}function mc(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gc(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(o){return o.replace(jy,qy)}function qy(o,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Qo(t)}const Xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(o){return o.replace(Xy,Ky)}function Ky(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yc(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yy(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===yd?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ua&&(e="SHADOWMAP_TYPE_VSM"),e}function $y(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ur:case Or:e="ENVMAP_TYPE_CUBE";break;case Ds:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jy(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function Zy(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Is:e="ENVMAP_BLENDING_MULTIPLY";break;case Bf:e="ENVMAP_BLENDING_MIX";break;case zf:e="ENVMAP_BLENDING_ADD";break}return e}function Qy(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ev(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=Yy(t),h=$y(t),c=Jy(t),d=Zy(t),u=Qy(t),f=t.isWebGL2?"":Vy(t),g=Gy(r),_=i.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(fa).join(`
`),m.length>0&&(m+=`
`),p=[f,g].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(m=[yc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[f,yc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Re.tonemapping_pars_fragment:"",t.toneMapping!==Zn?Hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,zy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),a=Qo(a),a=mc(a,t),a=gc(a,t),s=Qo(s),s=mc(s,t),s=gc(s,t),a=_c(a),s=_c(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=w+m+a,y=w+p+s,x=fc(i,35633,v),T=fc(i,35632,y);if(i.attachShader(_,x),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),o.debug.checkShaderErrors){const b=i.getProgramInfoLog(_).trim(),M=i.getShaderInfoLog(x).trim(),B=i.getShaderInfoLog(T).trim();let O=!0,I=!0;if(i.getProgramParameter(_,35714)===!1)if(O=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,_,x,T);else{const k=pc(i,x,"vertex"),F=pc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,35715)+`

Program Info Log: `+b+`
`+k+`
`+F)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(M===""||B==="")&&(I=!1);I&&(this.diagnostics={runnable:O,programLog:b,vertexShader:{log:M,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(x),i.deleteShader(T);let C;this.getUniforms=function(){return C===void 0&&(C=new ps(i,_)),C};let L;return this.getAttributes=function(){return L===void 0&&(L=Wy(i,_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Uy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=T,this}let tv=0;class nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new iv(e),t.set(e,n)),n}}class iv{constructor(e){this.id=tv++,this.code=e,this.usedTimes=0}}function rv(o,e,t,n,i,r,a){const s=new El,l=new nv,h=[],c=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===1?"uv2":"uv"}function m(b,M,B,O,I){const k=O.fog,F=I.geometry,j=b.isMeshStandardMaterial?O.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),G=Y&&Y.mapping===Ds?Y.image.height:null,Q=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const Z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ge=Z!==void 0?Z.length:0;let ee=0;F.morphAttributes.position!==void 0&&(ee=1),F.morphAttributes.normal!==void 0&&(ee=2),F.morphAttributes.color!==void 0&&(ee=3);let V,K,re,he;if(Q){const de=In[Q];V=de.vertexShader,K=de.fragmentShader}else V=b.vertexShader,K=b.fragmentShader,l.update(b),re=l.getVertexShaderID(b),he=l.getFragmentShaderID(b);const z=o.getRenderTarget(),Se=I.isInstancedMesh===!0,xe=!!b.map,ae=!!b.matcap,be=!!Y,Ge=!!b.aoMap,_e=!!b.lightMap,Ce=!!b.bumpMap,it=!!b.normalMap,Qe=!!b.displacementMap,dt=!!b.emissiveMap,st=!!b.metalnessMap,Ve=!!b.roughnessMap,Ye=b.clearcoat>0,Tt=b.iridescence>0,E=b.sheen>0,S=b.transmission>0,W=Ye&&!!b.clearcoatMap,te=Ye&&!!b.clearcoatNormalMap,ie=Ye&&!!b.clearcoatRoughnessMap,oe=Tt&&!!b.iridescenceMap,R=Tt&&!!b.iridescenceThicknessMap,J=E&&!!b.sheenColorMap,H=E&&!!b.sheenRoughnessMap,le=!!b.specularMap,ue=!!b.specularColorMap,me=!!b.specularIntensityMap,ce=S&&!!b.transmissionMap,pe=S&&!!b.thicknessMap,Te=!!b.gradientMap,Pe=!!b.alphaMap,ot=b.alphaTest>0,D=!!b.extensions,X=!!F.attributes.uv2;return{isWebGL2:c,shaderID:Q,shaderName:b.type,vertexShader:V,fragmentShader:K,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,instancing:Se,instancingColor:Se&&I.instanceColor!==null,supportsVertexTextures:u,outputEncoding:z===null?o.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:Zi,map:xe,matcap:ae,envMap:be,envMapMode:be&&Y.mapping,envMapCubeUVHeight:G,aoMap:Ge,lightMap:_e,bumpMap:Ce,normalMap:it,displacementMap:u&&Qe,emissiveMap:dt,normalMapObjectSpace:it&&b.normalMapType===fp,normalMapTangentSpace:it&&b.normalMapType===ks,decodeVideoTexture:xe&&b.map.isVideoTexture===!0&&b.map.encoding===Ue,metalnessMap:st,roughnessMap:Ve,clearcoat:Ye,clearcoatMap:W,clearcoatNormalMap:te,clearcoatRoughnessMap:ie,iridescence:Tt,iridescenceMap:oe,iridescenceThicknessMap:R,sheen:E,sheenColorMap:J,sheenRoughnessMap:H,specularMap:le,specularColorMap:ue,specularIntensityMap:me,transmission:S,transmissionMap:ce,thicknessMap:pe,gradientMap:Te,opaque:b.transparent===!1&&b.blending===Rr,alphaMap:Pe,alphaTest:ot,combine:b.combine,mapUv:xe&&_(b.map.channel),aoMapUv:Ge&&_(b.aoMap.channel),lightMapUv:_e&&_(b.lightMap.channel),bumpMapUv:Ce&&_(b.bumpMap.channel),normalMapUv:it&&_(b.normalMap.channel),displacementMapUv:Qe&&_(b.displacementMap.channel),emissiveMapUv:dt&&_(b.emissiveMap.channel),metalnessMapUv:st&&_(b.metalnessMap.channel),roughnessMapUv:Ve&&_(b.roughnessMap.channel),clearcoatMapUv:W&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:R&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:J&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:H&&_(b.sheenRoughnessMap.channel),specularMapUv:le&&_(b.specularMap.channel),specularColorMapUv:ue&&_(b.specularColorMap.channel),specularIntensityMapUv:me&&_(b.specularIntensityMap.channel),transmissionMapUv:ce&&_(b.transmissionMap.channel),thicknessMapUv:pe&&_(b.thicknessMap.channel),alphaMapUv:Pe&&_(b.alphaMap.channel),vertexTangents:it&&!!F.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs2:X,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(xe||Pe),fog:!!k,useFog:b.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:b.toneMapped?o.toneMapping:Zn,useLegacyLights:o.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Dn,flipSided:b.side===Wt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:D&&b.extensions.derivatives===!0,extensionFragDepth:D&&b.extensions.fragDepth===!0,extensionDrawBuffers:D&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:D&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)M.push(B),M.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(w(M,b),v(M,b),M.push(o.outputEncoding)),M.push(b.customProgramCacheKey),M.join()}function w(b,M){b.push(M.precision),b.push(M.outputEncoding),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){s.disableAll(),M.isWebGL2&&s.enable(0),M.supportsVertexTextures&&s.enable(1),M.instancing&&s.enable(2),M.instancingColor&&s.enable(3),M.matcap&&s.enable(4),M.envMap&&s.enable(5),M.normalMapObjectSpace&&s.enable(6),M.normalMapTangentSpace&&s.enable(7),M.clearcoat&&s.enable(8),M.iridescence&&s.enable(9),M.alphaTest&&s.enable(10),M.vertexColors&&s.enable(11),M.vertexAlphas&&s.enable(12),M.vertexUvs2&&s.enable(13),M.vertexTangents&&s.enable(14),b.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.skinning&&s.enable(4),M.morphTargets&&s.enable(5),M.morphNormals&&s.enable(6),M.morphColors&&s.enable(7),M.premultipliedAlpha&&s.enable(8),M.shadowMapEnabled&&s.enable(9),M.useLegacyLights&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.decodeVideoTexture&&s.enable(17),M.opaque&&s.enable(18),M.pointsUvs&&s.enable(19),b.push(s.mask)}function y(b){const M=g[b.type];let B;if(M){const O=In[M];B=Xp.clone(O.uniforms)}else B=b.uniforms;return B}function x(b,M){let B;for(let O=0,I=h.length;O<I;O++){const k=h[O];if(k.cacheKey===M){B=k,++B.usedTimes;break}}return B===void 0&&(B=new ev(o,M,b,r),h.push(B)),B}function T(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:x,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:L}}function av(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function sv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function vc(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function wc(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,g,_,m){let p=o[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},o[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function s(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function h(d,u){t.length>1&&t.sort(d||sv),n.length>1&&n.sort(u||vc),i.length>1&&i.sort(u||vc)}function c(){for(let d=e,u=o.length;d<u;d++){const f=o[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:c,sort:h}}function ov(){let o=new WeakMap;function e(n,i){const r=o.get(n);let a;return r===void 0?(a=new wc,o.set(n,[a])):i>=r.length?(a=new wc,r.push(a)):a=r[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function lv(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ve};break;case"SpotLight":t={position:new P,direction:new P,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new P,halfWidth:new P,halfHeight:new P};break}return o[e.id]=t,t}}}function hv(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let cv=0;function dv(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function uv(o,e){const t=new lv,n=hv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,a=new fe,s=new fe;function l(c,d){let u=0,f=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let _=0,m=0,p=0,w=0,v=0,y=0,x=0,T=0,C=0,L=0;c.sort(dv);const b=d===!0?Math.PI:1;for(let B=0,O=c.length;B<O;B++){const I=c[B],k=I.color,F=I.intensity,j=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=k.r*F*b,f+=k.g*F*b,g+=k.b*F*b;else if(I.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],F);else if(I.isDirectionalLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const Q=I.shadow,Z=n.get(I);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=I.shadow.matrix,y++}i.directional[_]=G,_++}else if(I.isSpotLight){const G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(k).multiplyScalar(F*b),G.distance=j,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[p]=G;const Q=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,Q.updateMatrices(I),I.castShadow&&L++),i.spotLightMatrix[p]=Q.matrix,I.castShadow){const Z=n.get(I);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=Y,T++}p++}else if(I.isRectAreaLight){const G=t.get(I);G.color.copy(k).multiplyScalar(F),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=G,w++}else if(I.isPointLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*b),G.distance=I.distance,G.decay=I.decay,I.castShadow){const Q=I.shadow,Z=n.get(I);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=I.shadow.matrix,x++}i.point[m]=G,m++}else if(I.isHemisphereLight){const G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(F*b),G.groundColor.copy(I.groundColor).multiplyScalar(F*b),i.hemi[v]=G,v++}}w>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const M=i.hash;(M.directionalLength!==_||M.pointLength!==m||M.spotLength!==p||M.rectAreaLength!==w||M.hemiLength!==v||M.numDirectionalShadows!==y||M.numPointShadows!==x||M.numSpotShadows!==T||M.numSpotMaps!==C)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=w,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=T+C-L,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=L,M.directionalLength=_,M.pointLength=m,M.spotLength=p,M.rectAreaLength=w,M.hemiLength=v,M.numDirectionalShadows=y,M.numPointShadows=x,M.numSpotShadows=T,M.numSpotMaps=C,i.version=cv++)}function h(c,d){let u=0,f=0,g=0,_=0,m=0;const p=d.matrixWorldInverse;for(let w=0,v=c.length;w<v;w++){const y=c[w];if(y.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),u++}else if(y.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),s.identity(),a.copy(y.matrixWorld),a.premultiply(p),s.extractRotation(a),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),_++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const x=i.hemi[m];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),m++}}}return{setup:l,setupView:h,state:i}}function bc(o,e){const t=new uv(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function s(d){i.push(d)}function l(d){t.setup(n,d)}function h(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:h,pushLight:a,pushShadow:s}}function fv(o,e){let t=new WeakMap;function n(r,a=0){const s=t.get(r);let l;return s===void 0?(l=new bc(o,e),t.set(r,[l])):a>=s.length?(l=new bc(o,e),s.push(l)):l=s[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class pv extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mv extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
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
}`;function yv(o,e,t){let n=new Rl;const i=new Ae,r=new Ae,a=new We,s=new pv({depthPacking:up}),l=new mv,h={},c=t.maxTextureSize,d={[Qn]:Wt,[Wt]:Qn,[Dn]:Dn},u=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:gv,fragmentShader:_v}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new It(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yd,this.render=function(y,x,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const C=o.getRenderTarget(),L=o.getActiveCubeFace(),b=o.getActiveMipmapLevel(),M=o.state;M.setBlending(wi),M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);for(let B=0,O=y.length;B<O;B++){const I=y[B],k=I.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const F=k.getFrameExtents();if(i.multiply(F),r.copy(k.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/F.x),i.x=r.x*F.x,k.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/F.y),i.y=r.y*F.y,k.mapSize.y=r.y)),k.map===null){const Y=this.type!==ua?{minFilter:bt,magFilter:bt}:{};k.map=new Qi(i.x,i.y,Y),k.map.texture.name=I.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const j=k.getViewportCount();for(let Y=0;Y<j;Y++){const G=k.getViewport(Y);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),M.viewport(a),k.updateMatrices(I,Y),n=k.getFrustum(),v(x,T,k.camera,I,this.type)}k.isPointLightShadow!==!0&&this.type===ua&&p(k,T),k.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(C,L,b)};function p(y,x){const T=e.update(_);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Qi(i.x,i.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(x,null,T,u,_,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(x,null,T,f,_,null)}function w(y,x,T,C){let L=null;const b=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(b!==void 0)L=b;else if(L=T.isPointLight===!0?l:s,o.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const M=L.uuid,B=x.uuid;let O=h[M];O===void 0&&(O={},h[M]=O);let I=O[B];I===void 0&&(I=L.clone(),O[B]=I),L=I}if(L.visible=x.visible,L.wireframe=x.wireframe,C===ua?L.side=x.shadowSide!==null?x.shadowSide:x.side:L.side=x.shadowSide!==null?x.shadowSide:d[x.side],L.alphaMap=x.alphaMap,L.alphaTest=x.alphaTest,L.map=x.map,L.clipShadows=x.clipShadows,L.clippingPlanes=x.clippingPlanes,L.clipIntersection=x.clipIntersection,L.displacementMap=x.displacementMap,L.displacementScale=x.displacementScale,L.displacementBias=x.displacementBias,L.wireframeLinewidth=x.wireframeLinewidth,L.linewidth=x.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const M=o.properties.get(L);M.light=T}return L}function v(y,x,T,C,L){if(y.visible===!1)return;if(y.layers.test(x.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&L===ua)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const B=e.update(y),O=y.material;if(Array.isArray(O)){const I=B.groups;for(let k=0,F=I.length;k<F;k++){const j=I[k],Y=O[j.materialIndex];if(Y&&Y.visible){const G=w(y,Y,C,L);o.renderBufferDirect(T,null,B,G,y,j)}}}else if(O.visible){const I=w(y,O,C,L);o.renderBufferDirect(T,null,B,I,y,null)}}const M=y.children;for(let B=0,O=M.length;B<O;B++)v(M[B],x,T,C,L)}}function vv(o,e,t){const n=t.isWebGL2;function i(){let D=!1;const X=new We;let ne=null;const de=new We(0,0,0,0);return{setMask:function(ye){ne!==ye&&!D&&(o.colorMask(ye,ye,ye,ye),ne=ye)},setLocked:function(ye){D=ye},setClear:function(ye,Je,et,Et,ai){ai===!0&&(ye*=Et,Je*=Et,et*=Et),X.set(ye,Je,et,Et),de.equals(X)===!1&&(o.clearColor(ye,Je,et,Et),de.copy(X))},reset:function(){D=!1,ne=null,de.set(-1,0,0,0)}}}function r(){let D=!1,X=null,ne=null,de=null;return{setTest:function(ye){ye?z(2929):Se(2929)},setMask:function(ye){X!==ye&&!D&&(o.depthMask(ye),X=ye)},setFunc:function(ye){if(ne!==ye){switch(ye){case If:o.depthFunc(512);break;case Df:o.depthFunc(519);break;case kf:o.depthFunc(513);break;case qo:o.depthFunc(515);break;case Nf:o.depthFunc(514);break;case Ff:o.depthFunc(518);break;case Uf:o.depthFunc(516);break;case Of:o.depthFunc(517);break;default:o.depthFunc(515)}ne=ye}},setLocked:function(ye){D=ye},setClear:function(ye){de!==ye&&(o.clearDepth(ye),de=ye)},reset:function(){D=!1,X=null,ne=null,de=null}}}function a(){let D=!1,X=null,ne=null,de=null,ye=null,Je=null,et=null,Et=null,ai=null;return{setTest:function(lt){D||(lt?z(2960):Se(2960))},setMask:function(lt){X!==lt&&!D&&(o.stencilMask(lt),X=lt)},setFunc:function(lt,an,Rn){(ne!==lt||de!==an||ye!==Rn)&&(o.stencilFunc(lt,an,Rn),ne=lt,de=an,ye=Rn)},setOp:function(lt,an,Rn){(Je!==lt||et!==an||Et!==Rn)&&(o.stencilOp(lt,an,Rn),Je=lt,et=an,Et=Rn)},setLocked:function(lt){D=lt},setClear:function(lt){ai!==lt&&(o.clearStencil(lt),ai=lt)},reset:function(){D=!1,X=null,ne=null,de=null,ye=null,Je=null,et=null,Et=null,ai=null}}}const s=new i,l=new r,h=new a,c=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,_=[],m=null,p=!1,w=null,v=null,y=null,x=null,T=null,C=null,L=null,b=!1,M=null,B=null,O=null,I=null,k=null;const F=o.getParameter(35661);let j=!1,Y=0;const G=o.getParameter(7938);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=Y>=2);let Q=null,Z={};const ge=o.getParameter(3088),ee=o.getParameter(2978),V=new We().fromArray(ge),K=new We().fromArray(ee);function re(D,X,ne){const de=new Uint8Array(4),ye=o.createTexture();o.bindTexture(D,ye),o.texParameteri(D,10241,9728),o.texParameteri(D,10240,9728);for(let Je=0;Je<ne;Je++)o.texImage2D(X+Je,0,6408,1,1,0,6408,5121,de);return ye}const he={};he[3553]=re(3553,3553,1),he[34067]=re(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),h.setClear(0),z(2929),l.setFunc(qo),Qe(!1),dt(hh),z(2884),Ce(wi);function z(D){u[D]!==!0&&(o.enable(D),u[D]=!0)}function Se(D){u[D]!==!1&&(o.disable(D),u[D]=!1)}function xe(D,X){return f[D]!==X?(o.bindFramebuffer(D,X),f[D]=X,n&&(D===36009&&(f[36160]=X),D===36160&&(f[36009]=X)),!0):!1}function ae(D,X){let ne=_,de=!1;if(D)if(ne=g.get(X),ne===void 0&&(ne=[],g.set(X,ne)),D.isWebGLMultipleRenderTargets){const ye=D.texture;if(ne.length!==ye.length||ne[0]!==36064){for(let Je=0,et=ye.length;Je<et;Je++)ne[Je]=36064+Je;ne.length=ye.length,de=!0}}else ne[0]!==36064&&(ne[0]=36064,de=!0);else ne[0]!==1029&&(ne[0]=1029,de=!0);de&&(t.isWebGL2?o.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function be(D){return m!==D?(o.useProgram(D),m=D,!0):!1}const Ge={[Mr]:32774,[bf]:32778,[xf]:32779};if(n)Ge[fh]=32775,Ge[ph]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ge[fh]=D.MIN_EXT,Ge[ph]=D.MAX_EXT)}const _e={[Sf]:0,[Mf]:1,[Af]:768,[wd]:770,[Pf]:776,[Lf]:774,[Ef]:772,[Tf]:769,[bd]:771,[Rf]:775,[Cf]:773};function Ce(D,X,ne,de,ye,Je,et,Et){if(D===wi){p===!0&&(Se(3042),p=!1);return}if(p===!1&&(z(3042),p=!0),D!==wf){if(D!==w||Et!==b){if((v!==Mr||T!==Mr)&&(o.blendEquation(32774),v=Mr,T=Mr),Et)switch(D){case Rr:o.blendFuncSeparate(1,771,1,771);break;case ch:o.blendFunc(1,1);break;case dh:o.blendFuncSeparate(0,769,0,1);break;case uh:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Rr:o.blendFuncSeparate(770,771,1,771);break;case ch:o.blendFunc(770,1);break;case dh:o.blendFuncSeparate(0,769,0,1);break;case uh:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,x=null,C=null,L=null,w=D,b=Et}return}ye=ye||X,Je=Je||ne,et=et||de,(X!==v||ye!==T)&&(o.blendEquationSeparate(Ge[X],Ge[ye]),v=X,T=ye),(ne!==y||de!==x||Je!==C||et!==L)&&(o.blendFuncSeparate(_e[ne],_e[de],_e[Je],_e[et]),y=ne,x=de,C=Je,L=et),w=D,b=!1}function it(D,X){D.side===Dn?Se(2884):z(2884);let ne=D.side===Wt;X&&(ne=!ne),Qe(ne),D.blending===Rr&&D.transparent===!1?Ce(wi):Ce(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const de=D.stencilWrite;h.setTest(de),de&&(h.setMask(D.stencilWriteMask),h.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),h.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ve(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?z(32926):Se(32926)}function Qe(D){M!==D&&(D?o.frontFace(2304):o.frontFace(2305),M=D)}function dt(D){D!==yf?(z(2884),D!==B&&(D===hh?o.cullFace(1029):D===vf?o.cullFace(1028):o.cullFace(1032))):Se(2884),B=D}function st(D){D!==O&&(j&&o.lineWidth(D),O=D)}function Ve(D,X,ne){D?(z(32823),(I!==X||k!==ne)&&(o.polygonOffset(X,ne),I=X,k=ne)):Se(32823)}function Ye(D){D?z(3089):Se(3089)}function Tt(D){D===void 0&&(D=33984+F-1),Q!==D&&(o.activeTexture(D),Q=D)}function E(D,X,ne){ne===void 0&&(Q===null?ne=33984+F-1:ne=Q);let de=Z[ne];de===void 0&&(de={type:void 0,texture:void 0},Z[ne]=de),(de.type!==D||de.texture!==X)&&(Q!==ne&&(o.activeTexture(ne),Q=ne),o.bindTexture(D,X||he[D]),de.type=D,de.texture=X)}function S(){const D=Z[Q];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{o.compressedTexImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function R(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(D){V.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),V.copy(D))}function pe(D){K.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Te(D,X){let ne=d.get(X);ne===void 0&&(ne=new WeakMap,d.set(X,ne));let de=ne.get(D);de===void 0&&(de=o.getUniformBlockIndex(X,D.name),ne.set(D,de))}function Pe(D,X){const de=d.get(X).get(D);c.get(X)!==de&&(o.uniformBlockBinding(X,de,D.__bindingPointIndex),c.set(X,de))}function ot(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},Q=null,Z={},f={},g=new WeakMap,_=[],m=null,p=!1,w=null,v=null,y=null,x=null,T=null,C=null,L=null,b=!1,M=null,B=null,O=null,I=null,k=null,V.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),h.reset()}return{buffers:{color:s,depth:l,stencil:h},enable:z,disable:Se,bindFramebuffer:xe,drawBuffers:ae,useProgram:be,setBlending:Ce,setMaterial:it,setFlipSided:Qe,setCullFace:dt,setLineWidth:st,setPolygonOffset:Ve,setScissorTest:Ye,activeTexture:Tt,bindTexture:E,unbindTexture:S,compressedTexImage2D:W,compressedTexImage3D:te,texImage2D:ue,texImage3D:me,updateUBOMapping:Te,uniformBlockBinding:Pe,texStorage2D:H,texStorage3D:le,texSubImage2D:ie,texSubImage3D:oe,compressedTexSubImage2D:R,compressedTexSubImage3D:J,scissor:ce,viewport:pe,reset:ot}}function wv(o,e,t,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,h=i.maxCubemapSize,c=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(E,S){return p?new OffscreenCanvas(E,S):Ma("canvas")}function v(E,S,W,te){let ie=1;if((E.width>te||E.height>te)&&(ie=te/Math.max(E.width,E.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const oe=S?Cd:Math.floor,R=oe(ie*E.width),J=oe(ie*E.height);_===void 0&&(_=w(R,J));const H=W?w(R,J):_;return H.width=R,H.height=J,H.getContext("2d").drawImage(E,0,0,R,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+R+"x"+J+")."),H}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return Zo(E.width)&&Zo(E.height)}function x(E){return s?!1:E.wrapS!==Vt||E.wrapT!==Vt||E.minFilter!==bt&&E.minFilter!==Ht}function T(E,S){return E.generateMipmaps&&S&&E.minFilter!==bt&&E.minFilter!==Ht}function C(E){o.generateMipmap(E)}function L(E,S,W,te,ie=!1){if(s===!1)return S;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oe=S;return S===6403&&(W===5126&&(oe=33326),W===5131&&(oe=33325),W===5121&&(oe=33321)),S===33319&&(W===5126&&(oe=33328),W===5131&&(oe=33327),W===5121&&(oe=33323)),S===6408&&(W===5126&&(oe=34836),W===5131&&(oe=34842),W===5121&&(oe=te===Ue&&ie===!1?35907:32856),W===32819&&(oe=32854),W===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function b(E,S,W){return T(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==bt&&E.minFilter!==Ht?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function M(E){return E===bt||E===Ko||E===fs?9728:9729}function B(E){const S=E.target;S.removeEventListener("dispose",B),I(S),S.isVideoTexture&&g.delete(S)}function O(E){const S=E.target;S.removeEventListener("dispose",O),F(S)}function I(E){const S=n.get(E);if(S.__webglInit===void 0)return;const W=E.source,te=m.get(W);if(te){const ie=te[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&k(E),Object.keys(te).length===0&&m.delete(W)}n.remove(E)}function k(E){const S=n.get(E);o.deleteTexture(S.__webglTexture);const W=E.source,te=m.get(W);delete te[S.__cacheKey],a.memory.textures--}function F(E){const S=E.texture,W=n.get(E),te=n.get(S);if(te.__webglTexture!==void 0&&(o.deleteTexture(te.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)o.deleteFramebuffer(W.__webglFramebuffer[ie]),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer[ie]);else{if(o.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&o.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ie=0;ie<W.__webglColorRenderbuffer.length;ie++)W.__webglColorRenderbuffer[ie]&&o.deleteRenderbuffer(W.__webglColorRenderbuffer[ie]);W.__webglDepthRenderbuffer&&o.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ie=0,oe=S.length;ie<oe;ie++){const R=n.get(S[ie]);R.__webglTexture&&(o.deleteTexture(R.__webglTexture),a.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(E)}let j=0;function Y(){j=0}function G(){const E=j;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),j+=1,E}function Q(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.encoding),S.join()}function Z(E,S){const W=n.get(E);if(E.isVideoTexture&&Ye(E),E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(W,E,S);return}}t.bindTexture(3553,W.__webglTexture,33984+S)}function ge(E,S){const W=n.get(E);if(E.version>0&&W.__version!==E.version){Se(W,E,S);return}t.bindTexture(35866,W.__webglTexture,33984+S)}function ee(E,S){const W=n.get(E);if(E.version>0&&W.__version!==E.version){Se(W,E,S);return}t.bindTexture(32879,W.__webglTexture,33984+S)}function V(E,S){const W=n.get(E);if(E.version>0&&W.__version!==E.version){xe(W,E,S);return}t.bindTexture(34067,W.__webglTexture,33984+S)}const K={[Si]:10497,[Vt]:33071,[vs]:33648},re={[bt]:9728,[Ko]:9984,[fs]:9986,[Ht]:9729,[Ml]:9985,[$i]:9987};function he(E,S,W){if(W?(o.texParameteri(E,10242,K[S.wrapS]),o.texParameteri(E,10243,K[S.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,K[S.wrapR]),o.texParameteri(E,10240,re[S.magFilter]),o.texParameteri(E,10241,re[S.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(S.wrapS!==Vt||S.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,M(S.magFilter)),o.texParameteri(E,10241,M(S.minFilter)),S.minFilter!==bt&&S.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===bt||S.minFilter!==fs&&S.minFilter!==$i||S.type===mi&&e.has("OES_texture_float_linear")===!1||s===!1&&S.type===xa&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function z(E,S){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",B));const te=S.source;let ie=m.get(te);ie===void 0&&(ie={},m.set(te,ie));const oe=Q(S);if(oe!==E.__cacheKey){ie[oe]===void 0&&(ie[oe]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ie[oe].usedTimes++;const R=ie[E.__cacheKey];R!==void 0&&(ie[E.__cacheKey].usedTimes--,R.usedTimes===0&&k(S)),E.__cacheKey=oe,E.__webglTexture=ie[oe].texture}return W}function Se(E,S,W){let te=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=35866),S.isData3DTexture&&(te=32879);const ie=z(E,S),oe=S.source;t.bindTexture(te,E.__webglTexture,33984+W);const R=n.get(oe);if(oe.version!==R.__version||ie===!0){t.activeTexture(33984+W),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const J=x(S)&&y(S.image)===!1;let H=v(S.image,J,!1,c);H=Tt(S,H);const le=y(H)||s,ue=r.convert(S.format,S.encoding);let me=r.convert(S.type),ce=L(S.internalFormat,ue,me,S.encoding,S.isVideoTexture);he(te,S,le);let pe;const Te=S.mipmaps,Pe=s&&S.isVideoTexture!==!0,ot=R.__version===void 0||ie===!0,D=b(S,H,le);if(S.isDepthTexture)ce=6402,s?S.type===mi?ce=36012:S.type===Vi?ce=33190:S.type===Pr?ce=35056:ce=33189:S.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ji&&ce===6402&&S.type!==Md&&S.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Vi,me=r.convert(S.type)),S.format===Br&&ce===6402&&(ce=34041,S.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Pr,me=r.convert(S.type))),ot&&(Pe?t.texStorage2D(3553,1,ce,H.width,H.height):t.texImage2D(3553,0,ce,H.width,H.height,0,ue,me,null));else if(S.isDataTexture)if(Te.length>0&&le){Pe&&ot&&t.texStorage2D(3553,D,ce,Te[0].width,Te[0].height);for(let X=0,ne=Te.length;X<ne;X++)pe=Te[X],Pe?t.texSubImage2D(3553,X,0,0,pe.width,pe.height,ue,me,pe.data):t.texImage2D(3553,X,ce,pe.width,pe.height,0,ue,me,pe.data);S.generateMipmaps=!1}else Pe?(ot&&t.texStorage2D(3553,D,ce,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,ue,me,H.data)):t.texImage2D(3553,0,ce,H.width,H.height,0,ue,me,H.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Pe&&ot&&t.texStorage3D(35866,D,ce,Te[0].width,Te[0].height,H.depth);for(let X=0,ne=Te.length;X<ne;X++)pe=Te[X],S.format!==un?ue!==null?Pe?t.compressedTexSubImage3D(35866,X,0,0,0,pe.width,pe.height,H.depth,ue,pe.data,0,0):t.compressedTexImage3D(35866,X,ce,pe.width,pe.height,H.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,X,0,0,0,pe.width,pe.height,H.depth,ue,me,pe.data):t.texImage3D(35866,X,ce,pe.width,pe.height,H.depth,0,ue,me,pe.data)}else{Pe&&ot&&t.texStorage2D(3553,D,ce,Te[0].width,Te[0].height);for(let X=0,ne=Te.length;X<ne;X++)pe=Te[X],S.format!==un?ue!==null?Pe?t.compressedTexSubImage2D(3553,X,0,0,pe.width,pe.height,ue,pe.data):t.compressedTexImage2D(3553,X,ce,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,X,0,0,pe.width,pe.height,ue,me,pe.data):t.texImage2D(3553,X,ce,pe.width,pe.height,0,ue,me,pe.data)}else if(S.isDataArrayTexture)Pe?(ot&&t.texStorage3D(35866,D,ce,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,ue,me,H.data)):t.texImage3D(35866,0,ce,H.width,H.height,H.depth,0,ue,me,H.data);else if(S.isData3DTexture)Pe?(ot&&t.texStorage3D(32879,D,ce,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,ue,me,H.data)):t.texImage3D(32879,0,ce,H.width,H.height,H.depth,0,ue,me,H.data);else if(S.isFramebufferTexture){if(ot)if(Pe)t.texStorage2D(3553,D,ce,H.width,H.height);else{let X=H.width,ne=H.height;for(let de=0;de<D;de++)t.texImage2D(3553,de,ce,X,ne,0,ue,me,null),X>>=1,ne>>=1}}else if(Te.length>0&&le){Pe&&ot&&t.texStorage2D(3553,D,ce,Te[0].width,Te[0].height);for(let X=0,ne=Te.length;X<ne;X++)pe=Te[X],Pe?t.texSubImage2D(3553,X,0,0,ue,me,pe):t.texImage2D(3553,X,ce,ue,me,pe);S.generateMipmaps=!1}else Pe?(ot&&t.texStorage2D(3553,D,ce,H.width,H.height),t.texSubImage2D(3553,0,0,0,ue,me,H)):t.texImage2D(3553,0,ce,ue,me,H);T(S,le)&&C(te),R.__version=oe.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function xe(E,S,W){if(S.image.length!==6)return;const te=z(E,S),ie=S.source;t.bindTexture(34067,E.__webglTexture,33984+W);const oe=n.get(ie);if(ie.version!==oe.__version||te===!0){t.activeTexture(33984+W),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const R=S.isCompressedTexture||S.image[0].isCompressedTexture,J=S.image[0]&&S.image[0].isDataTexture,H=[];for(let X=0;X<6;X++)!R&&!J?H[X]=v(S.image[X],!1,!0,h):H[X]=J?S.image[X].image:S.image[X],H[X]=Tt(S,H[X]);const le=H[0],ue=y(le)||s,me=r.convert(S.format,S.encoding),ce=r.convert(S.type),pe=L(S.internalFormat,me,ce,S.encoding),Te=s&&S.isVideoTexture!==!0,Pe=oe.__version===void 0||te===!0;let ot=b(S,le,ue);he(34067,S,ue);let D;if(R){Te&&Pe&&t.texStorage2D(34067,ot,pe,le.width,le.height);for(let X=0;X<6;X++){D=H[X].mipmaps;for(let ne=0;ne<D.length;ne++){const de=D[ne];S.format!==un?me!==null?Te?t.compressedTexSubImage2D(34069+X,ne,0,0,de.width,de.height,me,de.data):t.compressedTexImage2D(34069+X,ne,pe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(34069+X,ne,0,0,de.width,de.height,me,ce,de.data):t.texImage2D(34069+X,ne,pe,de.width,de.height,0,me,ce,de.data)}}}else{D=S.mipmaps,Te&&Pe&&(D.length>0&&ot++,t.texStorage2D(34067,ot,pe,H[0].width,H[0].height));for(let X=0;X<6;X++)if(J){Te?t.texSubImage2D(34069+X,0,0,0,H[X].width,H[X].height,me,ce,H[X].data):t.texImage2D(34069+X,0,pe,H[X].width,H[X].height,0,me,ce,H[X].data);for(let ne=0;ne<D.length;ne++){const ye=D[ne].image[X].image;Te?t.texSubImage2D(34069+X,ne+1,0,0,ye.width,ye.height,me,ce,ye.data):t.texImage2D(34069+X,ne+1,pe,ye.width,ye.height,0,me,ce,ye.data)}}else{Te?t.texSubImage2D(34069+X,0,0,0,me,ce,H[X]):t.texImage2D(34069+X,0,pe,me,ce,H[X]);for(let ne=0;ne<D.length;ne++){const de=D[ne];Te?t.texSubImage2D(34069+X,ne+1,0,0,me,ce,de.image[X]):t.texImage2D(34069+X,ne+1,pe,me,ce,de.image[X])}}}T(S,ue)&&C(34067),oe.__version=ie.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ae(E,S,W,te,ie){const oe=r.convert(W.format,W.encoding),R=r.convert(W.type),J=L(W.internalFormat,oe,R,W.encoding);n.get(S).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,J,S.width,S.height,S.depth,0,oe,R,null):t.texImage2D(ie,0,J,S.width,S.height,0,oe,R,null)),t.bindFramebuffer(36160,E),Ve(S)?u.framebufferTexture2DMultisampleEXT(36160,te,ie,n.get(W).__webglTexture,0,st(S)):(ie===3553||ie>=34069&&ie<=34074)&&o.framebufferTexture2D(36160,te,ie,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function be(E,S,W){if(o.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let te=33189;if(W||Ve(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===mi?te=36012:ie.type===Vi&&(te=33190));const oe=st(S);Ve(S)?u.renderbufferStorageMultisampleEXT(36161,oe,te,S.width,S.height):o.renderbufferStorageMultisample(36161,oe,te,S.width,S.height)}else o.renderbufferStorage(36161,te,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){const te=st(S);W&&Ve(S)===!1?o.renderbufferStorageMultisample(36161,te,35056,S.width,S.height):Ve(S)?u.renderbufferStorageMultisampleEXT(36161,te,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<te.length;ie++){const oe=te[ie],R=r.convert(oe.format,oe.encoding),J=r.convert(oe.type),H=L(oe.internalFormat,R,J,oe.encoding),le=st(S);W&&Ve(S)===!1?o.renderbufferStorageMultisample(36161,le,H,S.width,S.height):Ve(S)?u.renderbufferStorageMultisampleEXT(36161,le,H,S.width,S.height):o.renderbufferStorage(36161,H,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function Ge(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,ie=st(S);if(S.depthTexture.format===ji)Ve(S)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ie):o.framebufferTexture2D(36160,36096,3553,te,0);else if(S.depthTexture.format===Br)Ve(S)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ie):o.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function _e(E){const S=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ge(S.__webglFramebuffer,E)}else if(W){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=o.createRenderbuffer(),be(S.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),be(S.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Ce(E,S,W){const te=n.get(E);S!==void 0&&ae(te.__webglFramebuffer,E,E.texture,36064,3553),W!==void 0&&_e(E)}function it(E){const S=E.texture,W=n.get(E),te=n.get(S);E.addEventListener("dispose",O),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture()),te.__version=S.version,a.memory.textures++);const ie=E.isWebGLCubeRenderTarget===!0,oe=E.isWebGLMultipleRenderTargets===!0,R=y(E)||s;if(ie){W.__webglFramebuffer=[];for(let J=0;J<6;J++)W.__webglFramebuffer[J]=o.createFramebuffer()}else{if(W.__webglFramebuffer=o.createFramebuffer(),oe)if(i.drawBuffers){const J=E.texture;for(let H=0,le=J.length;H<le;H++){const ue=n.get(J[H]);ue.__webglTexture===void 0&&(ue.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Ve(E)===!1){const J=oe?S:[S];W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let H=0;H<J.length;H++){const le=J[H];W.__webglColorRenderbuffer[H]=o.createRenderbuffer(),o.bindRenderbuffer(36161,W.__webglColorRenderbuffer[H]);const ue=r.convert(le.format,le.encoding),me=r.convert(le.type),ce=L(le.internalFormat,ue,me,le.encoding,E.isXRRenderTarget===!0),pe=st(E);o.renderbufferStorageMultisample(36161,pe,ce,E.width,E.height),o.framebufferRenderbuffer(36160,36064+H,36161,W.__webglColorRenderbuffer[H])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),be(W.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,te.__webglTexture),he(34067,S,R);for(let J=0;J<6;J++)ae(W.__webglFramebuffer[J],E,S,36064,34069+J);T(S,R)&&C(34067),t.unbindTexture()}else if(oe){const J=E.texture;for(let H=0,le=J.length;H<le;H++){const ue=J[H],me=n.get(ue);t.bindTexture(3553,me.__webglTexture),he(3553,ue,R),ae(W.__webglFramebuffer,E,ue,36064+H,3553),T(ue,R)&&C(3553)}t.unbindTexture()}else{let J=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?J=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(J,te.__webglTexture),he(J,S,R),ae(W.__webglFramebuffer,E,S,36064,J),T(S,R)&&C(J),t.unbindTexture()}E.depthBuffer&&_e(E)}function Qe(E){const S=y(E)||s,W=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,ie=W.length;te<ie;te++){const oe=W[te];if(T(oe,S)){const R=E.isWebGLCubeRenderTarget?34067:3553,J=n.get(oe).__webglTexture;t.bindTexture(R,J),C(R),t.unbindTexture()}}}function dt(E){if(s&&E.samples>0&&Ve(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],W=E.width,te=E.height;let ie=16384;const oe=[],R=E.stencilBuffer?33306:36096,J=n.get(E),H=E.isWebGLMultipleRenderTargets===!0;if(H)for(let le=0;le<S.length;le++)t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,J.__webglFramebuffer),o.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,J.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,J.__webglFramebuffer);for(let le=0;le<S.length;le++){oe.push(36064+le),E.depthBuffer&&oe.push(R);const ue=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(ue===!1&&(E.depthBuffer&&(ie|=256),E.stencilBuffer&&(ie|=1024)),H&&o.framebufferRenderbuffer(36008,36064,36161,J.__webglColorRenderbuffer[le]),ue===!0&&(o.invalidateFramebuffer(36008,[R]),o.invalidateFramebuffer(36009,[R])),H){const me=n.get(S[le]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,me,0)}o.blitFramebuffer(0,0,W,te,0,0,W,te,ie,9728),f&&o.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),H)for(let le=0;le<S.length;le++){t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+le,36161,J.__webglColorRenderbuffer[le]);const ue=n.get(S[le]).__webglTexture;t.bindFramebuffer(36160,J.__webglFramebuffer),o.framebufferTexture2D(36009,36064+le,3553,ue,0)}t.bindFramebuffer(36009,J.__webglMultisampledFramebuffer)}}function st(E){return Math.min(d,E.samples)}function Ve(E){const S=n.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ye(E){const S=a.render.frame;g.get(E)!==S&&(g.set(E,S),E.update())}function Tt(E,S){const W=E.encoding,te=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Jo||W!==Zi&&(W===Ue?s===!1?e.has("EXT_sRGB")===!0&&te===un?(E.format=Jo,E.minFilter=Ht,E.generateMipmaps=!1):S=Rd.sRGBToLinear(S):(te!==un||ie!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),S}this.allocateTextureUnit=G,this.resetTextureUnits=Y,this.setTexture2D=Z,this.setTexture2DArray=ge,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=Ce,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ve}function bv(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===Ji)return 5121;if(r===Kf)return 32819;if(r===Yf)return 32820;if(r===jf)return 5120;if(r===qf)return 5122;if(r===Md)return 5123;if(r===Xf)return 5124;if(r===Vi)return 5125;if(r===mi)return 5126;if(r===xa)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===$f)return 6406;if(r===un)return 6408;if(r===Jf)return 6409;if(r===Zf)return 6410;if(r===ji)return 6402;if(r===Br)return 34041;if(r===Jo)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Qf)return 6403;if(r===ep)return 36244;if(r===tp)return 33319;if(r===np)return 33320;if(r===ip)return 36249;if(r===Ks||r===Ys||r===$s||r===Js)if(a===Ue)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Ks)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Ks)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===mh||r===gh||r===_h||r===yh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===mh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_h)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rp)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===vh||r===wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===vh)return a===Ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===wh)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bh||r===xh||r===Sh||r===Mh||r===Ah||r===Th||r===Eh||r===Ch||r===Lh||r===Rh||r===Ph||r===Ih||r===Dh||r===kh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===bh)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xh)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sh)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mh)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ah)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Th)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Eh)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ch)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lh)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rh)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ph)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ih)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dh)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kh)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Zs)return a===Ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===ap||r===Nh||r===Fh||r===Uh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===Zs)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Nh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Pr?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class xv extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jn extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sv={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=m.radius),p.visible=m!==null}const c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,g=.005;h.inputState.pinching&&u>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Mv extends gt{constructor(e,t,n,i,r,a,s,l,h,c){if(c=c!==void 0?c:ji,c!==ji&&c!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ji&&(n=Vi),n===void 0&&c===Br&&(n=Pr),super(null,i,r,a,s,l,c,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1}}class Av extends Ei{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const w=[],v=[],y=new Set,x=new Map,T=new Rt;T.layers.enable(1),T.viewport=new We;const C=new Rt;C.layers.enable(2),C.viewport=new We;const L=[T,C],b=new xv;b.layers.enable(1),b.layers.enable(2);let M=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=w[V];return K===void 0&&(K=new xo,w[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=w[V];return K===void 0&&(K=new xo,w[V]=K),K.getGripSpace()},this.getHand=function(V){let K=w[V];return K===void 0&&(K=new xo,w[V]=K),K.getHandSpace()};function O(V){const K=v.indexOf(V.inputSource);if(K===-1)return;const re=w[K];re!==void 0&&re.dispatchEvent({type:V.type,data:V.inputSource})}function I(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",k);for(let V=0;V<w.length;V++){const K=v[V];K!==null&&(v[V]=null,w[V].disconnect(K))}M=null,B=null,e.setRenderTarget(m),f=null,u=null,d=null,i=null,p=null,ee.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(V){h=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",I),i.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),p=new Qi(f.framebufferWidth,f.framebufferHeight,{format:un,type:Ji,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let K=null,re=null,he=null;_.depth&&(he=_.stencil?35056:33190,K=_.stencil?Br:ji,re=_.stencil?Pr:Vi);const z={colorFormat:32856,depthFormat:he,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(z),i.updateRenderState({layers:[u]}),p=new Qi(u.textureWidth,u.textureHeight,{format:un,type:Ji,depthTexture:new Mv(u.textureWidth,u.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const Se=e.properties.get(p);Se.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await i.requestReferenceSpace(s),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function k(V){for(let K=0;K<V.removed.length;K++){const re=V.removed[K],he=v.indexOf(re);he>=0&&(v[he]=null,w[he].disconnect(re))}for(let K=0;K<V.added.length;K++){const re=V.added[K];let he=v.indexOf(re);if(he===-1){for(let Se=0;Se<w.length;Se++)if(Se>=v.length){v.push(re),he=Se;break}else if(v[Se]===null){v[Se]=re,he=Se;break}if(he===-1)break}const z=w[he];z&&z.connect(re)}}const F=new P,j=new P;function Y(V,K,re){F.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(re.matrixWorld);const he=F.distanceTo(j),z=K.projectionMatrix.elements,Se=re.projectionMatrix.elements,xe=z[14]/(z[10]-1),ae=z[14]/(z[10]+1),be=(z[9]+1)/z[5],Ge=(z[9]-1)/z[5],_e=(z[8]-1)/z[0],Ce=(Se[8]+1)/Se[0],it=xe*_e,Qe=xe*Ce,dt=he/(-_e+Ce),st=dt*-_e;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(st),V.translateZ(dt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Ve=xe+dt,Ye=ae+dt,Tt=it-st,E=Qe+(he-st),S=be*ae/Ye*Ve,W=Ge*ae/Ye*Ve;V.projectionMatrix.makePerspective(Tt,E,S,W,Ve,Ye),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function G(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;b.near=C.near=T.near=V.near,b.far=C.far=T.far=V.far,(M!==b.near||B!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),M=b.near,B=b.far);const K=V.parent,re=b.cameras;G(b,K);for(let he=0;he<re.length;he++)G(re[he],K);re.length===2?Y(b,T,C):b.projectionMatrix.copy(T.projectionMatrix),Q(V,b,K)};function Q(V,K,re){re===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(re.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const he=V.children;for(let z=0,Se=he.length;z<Se;z++)he[z].updateMatrixWorld(!0);V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Vr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.getPlanes=function(){return y};let Z=null;function ge(V,K){if(c=K.getViewerPose(h||a),g=K,c!==null){const re=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let he=!1;re.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let z=0;z<re.length;z++){const Se=re[z];let xe=null;if(f!==null)xe=f.getViewport(Se);else{const be=d.getViewSubImage(u,Se);xe=be.viewport,z===0&&(e.setRenderTargetTextures(p,be.colorTexture,u.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(p))}let ae=L[z];ae===void 0&&(ae=new Rt,ae.layers.enable(z),ae.viewport=new We,L[z]=ae),ae.matrix.fromArray(Se.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Se.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(xe.x,xe.y,xe.width,xe.height),z===0&&(b.matrix.copy(ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(ae)}}for(let re=0;re<w.length;re++){const he=v[re],z=w[re];he!==null&&z!==void 0&&z.update(he,K,h||a)}if(Z&&Z(V,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let re=null;for(const he of y)K.detectedPlanes.has(he)||(re===null&&(re=[]),re.push(he));if(re!==null)for(const he of re)y.delete(he),x.delete(he),n.dispatchEvent({type:"planeremoved",data:he});for(const he of K.detectedPlanes)if(!y.has(he))y.add(he),x.set(he,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:he});else{const z=x.get(he);he.lastChangedTime>z&&(x.set(he,he.lastChangedTime),n.dispatchEvent({type:"planechanged",data:he}))}}g=null}const ee=new Ud;ee.setAnimationLoop(ge),this.setAnimationLoop=function(V){Z=V},this.dispose=function(){}}}function Tv(o,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nd(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?l(m,p,w,v):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=o.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ev(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function l(w,v){const y=v.program;n.uniformBlockBinding(w,y)}function h(w,v){let y=i[w.id];y===void 0&&(g(w),y=c(w),i[w.id]=y,w.addEventListener("dispose",m));const x=v.program;n.updateUBOMapping(w,x);const T=e.render.frame;r[w.id]!==T&&(u(w),r[w.id]=T)}function c(w){const v=d();w.__bindingPointIndex=v;const y=o.createBuffer(),x=w.__size,T=w.usage;return o.bindBuffer(35345,y),o.bufferData(35345,x,T),o.bindBuffer(35345,null),o.bindBufferBase(35345,v,y),y}function d(){for(let w=0;w<s;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const v=i[w.id],y=w.uniforms,x=w.__cache;o.bindBuffer(35345,v);for(let T=0,C=y.length;T<C;T++){const L=y[T];if(f(L,T,x)===!0){const b=L.__offset,M=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let O=0;O<M.length;O++){const I=M[O],k=_(I);typeof I=="number"?(L.__data[0]=I,o.bufferSubData(35345,b+B,L.__data)):I.isMatrix3?(L.__data[0]=I.elements[0],L.__data[1]=I.elements[1],L.__data[2]=I.elements[2],L.__data[3]=I.elements[0],L.__data[4]=I.elements[3],L.__data[5]=I.elements[4],L.__data[6]=I.elements[5],L.__data[7]=I.elements[0],L.__data[8]=I.elements[6],L.__data[9]=I.elements[7],L.__data[10]=I.elements[8],L.__data[11]=I.elements[0]):(I.toArray(L.__data,B),B+=k.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,b,L.__data)}}o.bindBuffer(35345,null)}function f(w,v,y){const x=w.value;if(y[v]===void 0){if(typeof x=="number")y[v]=x;else{const T=Array.isArray(x)?x:[x],C=[];for(let L=0;L<T.length;L++)C.push(T[L].clone());y[v]=C}return!0}else if(typeof x=="number"){if(y[v]!==x)return y[v]=x,!0}else{const T=Array.isArray(y[v])?y[v]:[y[v]],C=Array.isArray(x)?x:[x];for(let L=0;L<T.length;L++){const b=T[L];if(b.equals(C[L])===!1)return b.copy(C[L]),!0}}return!1}function g(w){const v=w.uniforms;let y=0;const x=16;let T=0;for(let C=0,L=v.length;C<L;C++){const b=v[C],M={boundary:0,storage:0},B=Array.isArray(b.value)?b.value:[b.value];for(let O=0,I=B.length;O<I;O++){const k=B[O],F=_(k);M.boundary+=F.boundary,M.storage+=F.storage}if(b.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=y,C>0){T=y%x;const O=x-T;T!==0&&O-M.boundary<0&&(y+=x-T,b.__offset=y)}y+=M.storage}return T=y%x,T>0&&(y+=x-T),w.__size=y,w.__cache={},this}function _(w){const v={boundary:0,storage:0};return typeof w=="number"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function m(w){const v=w.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const w in i)o.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:l,update:h,dispose:p}}function Cv(){const o=Ma("canvas");return o.style.display="block",o}class Vd{constructor(e={}){const{canvas:t=Cv(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let f=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Zi,this.useLegacyLights=!0,this.toneMapping=Zn,this.toneMappingExposure=1;const p=this;let w=!1,v=0,y=0,x=null,T=-1,C=null;const L=new We,b=new We;let M=null,B=t.width,O=t.height,I=1,k=null,F=null;const j=new We(0,0,B,O),Y=new We(0,0,B,O);let G=!1;const Q=new Rl;let Z=!1,ge=!1,ee=null;const V=new fe,K=new P,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return x===null?I:1}let z=n;function Se(A,U){for(let q=0;q<A.length;q++){const N=A[q],$=t.getContext(N,U);if($!==null)return $}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sl}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),z===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),z=Se(U,A),z===null)throw Se(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let xe,ae,be,Ge,_e,Ce,it,Qe,dt,st,Ve,Ye,Tt,E,S,W,te,ie,oe,R,J,H,le,ue;function me(){xe=new B_(z),ae=new D_(z,xe,e),xe.init(ae),H=new bv(z,xe,ae),be=new vv(z,xe,ae),Ge=new V_,_e=new av,Ce=new wv(z,xe,be,_e,ae,H,Ge),it=new N_(p),Qe=new O_(p),dt=new em(z,ae),le=new P_(z,xe,dt,ae),st=new z_(z,dt,Ge,le),Ve=new q_(z,st,dt,Ge),oe=new j_(z,ae,Ce),W=new k_(_e),Ye=new rv(p,it,Qe,xe,ae,le,W),Tt=new Tv(p,_e),E=new ov,S=new fv(xe,ae),ie=new R_(p,it,Qe,be,Ve,u,l),te=new yv(p,Ve,ae),ue=new Ev(z,Ge,ae,be),R=new I_(z,xe,Ge,ae),J=new H_(z,xe,Ge,ae),Ge.programs=Ye.programs,p.capabilities=ae,p.extensions=xe,p.properties=_e,p.renderLists=E,p.shadowMap=te,p.state=be,p.info=Ge}me();const ce=new Av(p,z);this.xr=ce,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(A){A!==void 0&&(I=A,this.setSize(B,O,!1))},this.getSize=function(A){return A.set(B,O)},this.setSize=function(A,U,q=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,O=U,t.width=Math.floor(A*I),t.height=Math.floor(U*I),q===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(B*I,O*I).floor()},this.setDrawingBufferSize=function(A,U,q){B=A,O=U,I=q,t.width=Math.floor(A*q),t.height=Math.floor(U*q),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,U,q,N){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,U,q,N),be.viewport(L.copy(j).multiplyScalar(I).floor())},this.getScissor=function(A){return A.copy(Y)},this.setScissor=function(A,U,q,N){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,U,q,N),be.scissor(b.copy(Y).multiplyScalar(I).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(A){be.setScissorTest(G=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){F=A},this.getClearColor=function(A){return A.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(A=!0,U=!0,q=!0){let N=0;A&&(N|=16384),U&&(N|=256),q&&(N|=1024),z.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),E.dispose(),S.dispose(),_e.dispose(),it.dispose(),Qe.dispose(),Ve.dispose(),le.dispose(),ue.dispose(),Ye.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ye),ce.removeEventListener("sessionend",Je),ee&&(ee.dispose(),ee=null),et.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=Ge.autoReset,U=te.enabled,q=te.autoUpdate,N=te.needsUpdate,$=te.type;me(),Ge.autoReset=A,te.enabled=U,te.autoUpdate=q,te.needsUpdate=N,te.type=$}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const U=A.target;U.removeEventListener("dispose",ot),D(U)}function D(A){X(A),_e.remove(A)}function X(A){const U=_e.get(A).programs;U!==void 0&&(U.forEach(function(q){Ye.releaseProgram(q)}),A.isShaderMaterial&&Ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,q,N,$,we){U===null&&(U=re);const Me=$.isMesh&&$.matrixWorld.determinant()<0,Ee=uf(A,U,q,N,$);be.setMaterial(N,Me);let Le=q.index,Ie=1;N.wireframe===!0&&(Le=st.getWireframeAttribute(q),Ie=2);const De=q.drawRange,Ne=q.attributes.position;let je=De.start*Ie,Nt=(De.start+De.count)*Ie;we!==null&&(je=Math.max(je,we.start*Ie),Nt=Math.min(Nt,(we.start+we.count)*Ie)),Le!==null?(je=Math.max(je,0),Nt=Math.min(Nt,Le.count)):Ne!=null&&(je=Math.max(je,0),Nt=Math.min(Nt,Ne.count));const wn=Nt-je;if(wn<0||wn===1/0)return;le.setup($,N,Ee,q,Le);let Ri,ut=R;if(Le!==null&&(Ri=dt.get(Le),ut=J,ut.setIndex(Ri)),$.isMesh)N.wireframe===!0?(be.setLineWidth(N.wireframeLinewidth*he()),ut.setMode(1)):ut.setMode(4);else if($.isLine){let Be=N.linewidth;Be===void 0&&(Be=1),be.setLineWidth(Be*he()),$.isLineSegments?ut.setMode(1):$.isLineLoop?ut.setMode(2):ut.setMode(3)}else $.isPoints?ut.setMode(0):$.isSprite&&ut.setMode(4);if($.isInstancedMesh)ut.renderInstances(je,wn,$.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ws=Math.min(q.instanceCount,Be);ut.renderInstances(je,wn,Ws)}else ut.render(je,wn)},this.compile=function(A,U){function q(N,$,we){N.transparent===!0&&N.side===Dn&&N.forceSinglePass===!1?(N.side=Wt,N.needsUpdate=!0,Oa(N,$,we),N.side=Qn,N.needsUpdate=!0,Oa(N,$,we),N.side=Dn):Oa(N,$,we)}g=S.get(A),g.init(),m.push(g),A.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights(p.useLegacyLights),A.traverse(function(N){const $=N.material;if($)if(Array.isArray($))for(let we=0;we<$.length;we++){const Me=$[we];q(Me,A,N)}else q($,A,N)}),m.pop(),g=null};let ne=null;function de(A){ne&&ne(A)}function ye(){et.stop()}function Je(){et.start()}const et=new Ud;et.setAnimationLoop(de),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(A){ne=A,ce.setAnimationLoop(A),A===null?et.stop():et.start()},ce.addEventListener("sessionstart",ye),ce.addEventListener("sessionend",Je),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,U,x),g=S.get(A,m.length),g.init(),m.push(g),V.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(V),ge=this.localClippingEnabled,Z=W.init(this.clippingPlanes,ge),f=E.get(A,_.length),f.init(),_.push(f),Et(A,U,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(k,F),Z===!0&&W.beginShadows();const q=g.state.shadowsArray;if(te.render(q,A,U),Z===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(f,A),g.setupLights(p.useLegacyLights),U.isArrayCamera){const N=U.cameras;for(let $=0,we=N.length;$<we;$++){const Me=N[$];ai(f,A,Me,Me.viewport)}}else ai(f,A,U);x!==null&&(Ce.updateMultisampleRenderTarget(x),Ce.updateRenderTargetMipmap(x)),A.isScene===!0&&A.onAfterRender(p,A,U),le.resetDefaultState(),T=-1,C=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?f=_[_.length-1]:f=null};function Et(A,U,q,N){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){N&&K.setFromMatrixPosition(A.matrixWorld).applyMatrix4(V);const Me=Ve.update(A),Ee=A.material;Ee.visible&&f.push(A,Me,Ee,q,K.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ge.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ge.render.frame),!A.frustumCulled||Q.intersectsObject(A))){N&&K.setFromMatrixPosition(A.matrixWorld).applyMatrix4(V);const Me=Ve.update(A),Ee=A.material;if(Array.isArray(Ee)){const Le=Me.groups;for(let Ie=0,De=Le.length;Ie<De;Ie++){const Ne=Le[Ie],je=Ee[Ne.materialIndex];je&&je.visible&&f.push(A,Me,je,q,K.z,Ne)}}else Ee.visible&&f.push(A,Me,Ee,q,K.z,null)}}const we=A.children;for(let Me=0,Ee=we.length;Me<Ee;Me++)Et(we[Me],U,q,N)}function ai(A,U,q,N){const $=A.opaque,we=A.transmissive,Me=A.transparent;g.setupLightsView(q),Z===!0&&W.setGlobalState(p.clippingPlanes,q),we.length>0&&lt($,we,U,q),N&&be.viewport(L.copy(N)),$.length>0&&an($,U,q),we.length>0&&an(we,U,q),Me.length>0&&an(Me,U,q),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function lt(A,U,q,N){if(ee===null){const Ee=ae.isWebGL2;ee=new Qi(1024,1024,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?xa:Ji,minFilter:$i,samples:Ee&&s===!0?4:0})}const $=p.getRenderTarget();p.setRenderTarget(ee),p.clear();const we=p.toneMapping;p.toneMapping=Zn,an(A,q,N),Ce.updateMultisampleRenderTarget(ee),Ce.updateRenderTargetMipmap(ee);let Me=!1;for(let Ee=0,Le=U.length;Ee<Le;Ee++){const Ie=U[Ee],De=Ie.object,Ne=Ie.geometry,je=Ie.material,Nt=Ie.group;if(je.side===Dn&&De.layers.test(N.layers)){const wn=je.side;je.side=Wt,je.needsUpdate=!0,Rn(De,q,N,Ne,je,Nt),je.side=wn,je.needsUpdate=!0,Me=!0}}Me===!0&&(Ce.updateMultisampleRenderTarget(ee),Ce.updateRenderTargetMipmap(ee)),p.setRenderTarget($),p.toneMapping=we}function an(A,U,q){const N=U.isScene===!0?U.overrideMaterial:null;for(let $=0,we=A.length;$<we;$++){const Me=A[$],Ee=Me.object,Le=Me.geometry,Ie=N===null?Me.material:N,De=Me.group;Ee.layers.test(q.layers)&&Rn(Ee,U,q,Le,Ie,De)}}function Rn(A,U,q,N,$,we){A.onBeforeRender(p,U,q,N,$,we),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(p,U,q,N,A,we),$.transparent===!0&&$.side===Dn&&$.forceSinglePass===!1?($.side=Wt,$.needsUpdate=!0,p.renderBufferDirect(q,U,N,$,A,we),$.side=Qn,$.needsUpdate=!0,p.renderBufferDirect(q,U,N,$,A,we),$.side=Dn):p.renderBufferDirect(q,U,N,$,A,we),A.onAfterRender(p,U,q,N,$,we)}function Oa(A,U,q){U.isScene!==!0&&(U=re);const N=_e.get(A),$=g.state.lights,we=g.state.shadowsArray,Me=$.state.version,Ee=Ye.getParameters(A,$.state,we,U,q),Le=Ye.getProgramCacheKey(Ee);let Ie=N.programs;N.environment=A.isMeshStandardMaterial?U.environment:null,N.fog=U.fog,N.envMap=(A.isMeshStandardMaterial?Qe:it).get(A.envMap||N.environment),Ie===void 0&&(A.addEventListener("dispose",ot),Ie=new Map,N.programs=Ie);let De=Ie.get(Le);if(De!==void 0){if(N.currentProgram===De&&N.lightsStateVersion===Me)return sh(A,Ee),De}else Ee.uniforms=Ye.getUniforms(A),A.onBuild(q,Ee,p),A.onBeforeCompile(Ee,p),De=Ye.acquireProgram(Ee,Le),Ie.set(Le,De),N.uniforms=Ee.uniforms;const Ne=N.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=W.uniform),sh(A,Ee),N.needsLights=pf(A),N.lightsStateVersion=Me,N.needsLights&&(Ne.ambientLightColor.value=$.state.ambient,Ne.lightProbe.value=$.state.probe,Ne.directionalLights.value=$.state.directional,Ne.directionalLightShadows.value=$.state.directionalShadow,Ne.spotLights.value=$.state.spot,Ne.spotLightShadows.value=$.state.spotShadow,Ne.rectAreaLights.value=$.state.rectArea,Ne.ltc_1.value=$.state.rectAreaLTC1,Ne.ltc_2.value=$.state.rectAreaLTC2,Ne.pointLights.value=$.state.point,Ne.pointLightShadows.value=$.state.pointShadow,Ne.hemisphereLights.value=$.state.hemi,Ne.directionalShadowMap.value=$.state.directionalShadowMap,Ne.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ne.spotShadowMap.value=$.state.spotShadowMap,Ne.spotLightMatrix.value=$.state.spotLightMatrix,Ne.spotLightMap.value=$.state.spotLightMap,Ne.pointShadowMap.value=$.state.pointShadowMap,Ne.pointShadowMatrix.value=$.state.pointShadowMatrix);const je=De.getUniforms(),Nt=ps.seqWithValue(je.seq,Ne);return N.currentProgram=De,N.uniformsList=Nt,De}function sh(A,U){const q=_e.get(A);q.outputEncoding=U.outputEncoding,q.instancing=U.instancing,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function uf(A,U,q,N,$){U.isScene!==!0&&(U=re),Ce.resetTextureUnits();const we=U.fog,Me=N.isMeshStandardMaterial?U.environment:null,Ee=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Zi,Le=(N.isMeshStandardMaterial?Qe:it).get(N.envMap||Me),Ie=N.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,De=!!N.normalMap&&!!q.attributes.tangent,Ne=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,Nt=!!q.morphAttributes.color,wn=N.toneMapped?p.toneMapping:Zn,Ri=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=Ri!==void 0?Ri.length:0,Be=_e.get(N),Ws=g.state.lights;if(Z===!0&&(ge===!0||A!==C)){const $t=A===C&&N.id===T;W.setState(N,A,$t)}let vt=!1;N.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ws.state.version||Be.outputEncoding!==Ee||$.isInstancedMesh&&Be.instancing===!1||!$.isInstancedMesh&&Be.instancing===!0||$.isSkinnedMesh&&Be.skinning===!1||!$.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Le||N.fog===!0&&Be.fog!==we||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==W.numPlanes||Be.numIntersection!==W.numIntersection)||Be.vertexAlphas!==Ie||Be.vertexTangents!==De||Be.morphTargets!==Ne||Be.morphNormals!==je||Be.morphColors!==Nt||Be.toneMapping!==wn||ae.isWebGL2===!0&&Be.morphTargetsCount!==ut)&&(vt=!0):(vt=!0,Be.__version=N.version);let Pi=Be.currentProgram;vt===!0&&(Pi=Oa(N,U,$));let oh=!1,ta=!1,js=!1;const Ft=Pi.getUniforms(),Ii=Be.uniforms;if(be.useProgram(Pi.program)&&(oh=!0,ta=!0,js=!0),N.id!==T&&(T=N.id,ta=!0),oh||C!==A){if(Ft.setValue(z,"projectionMatrix",A.projectionMatrix),ae.logarithmicDepthBuffer&&Ft.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),C!==A&&(C=A,ta=!0,js=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const $t=Ft.map.cameraPosition;$t!==void 0&&$t.setValue(z,K.setFromMatrixPosition(A.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Ft.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||$.isSkinnedMesh)&&Ft.setValue(z,"viewMatrix",A.matrixWorldInverse)}if($.isSkinnedMesh){Ft.setOptional(z,$,"bindMatrix"),Ft.setOptional(z,$,"bindMatrixInverse");const $t=$.skeleton;$t&&(ae.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Ft.setValue(z,"boneTexture",$t.boneTexture,Ce),Ft.setValue(z,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qs=q.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0&&ae.isWebGL2===!0)&&oe.update($,q,Pi),(ta||Be.receiveShadow!==$.receiveShadow)&&(Be.receiveShadow=$.receiveShadow,Ft.setValue(z,"receiveShadow",$.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Ii.envMap.value=Le,Ii.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),ta&&(Ft.setValue(z,"toneMappingExposure",p.toneMappingExposure),Be.needsLights&&ff(Ii,js),we&&N.fog===!0&&Tt.refreshFogUniforms(Ii,we),Tt.refreshMaterialUniforms(Ii,N,I,O,ee),ps.upload(z,Be.uniformsList,Ii,Ce)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ps.upload(z,Be.uniformsList,Ii,Ce),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Ft.setValue(z,"center",$.center),Ft.setValue(z,"modelViewMatrix",$.modelViewMatrix),Ft.setValue(z,"normalMatrix",$.normalMatrix),Ft.setValue(z,"modelMatrix",$.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const $t=N.uniformsGroups;for(let Xs=0,mf=$t.length;Xs<mf;Xs++)if(ae.isWebGL2){const lh=$t[Xs];ue.update(lh,Pi),ue.bind(lh,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function ff(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function pf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(A,U,q){_e.get(A.texture).__webglTexture=U,_e.get(A.depthTexture).__webglTexture=q;const N=_e.get(A);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=q===void 0,N.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,U){const q=_e.get(A);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,q=0){x=A,v=U,y=q;let N=!0,$=null,we=!1,Me=!1;if(A){const Le=_e.get(A);Le.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(36160,null),N=!1):Le.__webglFramebuffer===void 0?Ce.setupRenderTarget(A):Le.__hasExternalTextures&&Ce.rebindTextures(A,_e.get(A.texture).__webglTexture,_e.get(A.depthTexture).__webglTexture);const Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);const De=_e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?($=De[U],we=!0):ae.isWebGL2&&A.samples>0&&Ce.useMultisampledRTT(A)===!1?$=_e.get(A).__webglMultisampledFramebuffer:$=De,L.copy(A.viewport),b.copy(A.scissor),M=A.scissorTest}else L.copy(j).multiplyScalar(I).floor(),b.copy(Y).multiplyScalar(I).floor(),M=G;if(be.bindFramebuffer(36160,$)&&ae.drawBuffers&&N&&be.drawBuffers(A,$),be.viewport(L),be.scissor(b),be.setScissorTest(M),we){const Le=_e.get(A.texture);z.framebufferTexture2D(36160,36064,34069+U,Le.__webglTexture,q)}else if(Me){const Le=_e.get(A.texture),Ie=U||0;z.framebufferTextureLayer(36160,36064,Le.__webglTexture,q||0,Ie)}T=-1},this.readRenderTargetPixels=function(A,U,q,N,$,we,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=_e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){be.bindFramebuffer(36160,Ee);try{const Le=A.texture,Ie=Le.format,De=Le.type;if(Ie!==un&&H.convert(Ie)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=De===xa&&(xe.has("EXT_color_buffer_half_float")||ae.isWebGL2&&xe.has("EXT_color_buffer_float"));if(De!==Ji&&H.convert(De)!==z.getParameter(35738)&&!(De===mi&&(ae.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-N&&q>=0&&q<=A.height-$&&z.readPixels(U,q,N,$,H.convert(Ie),H.convert(De),we)}finally{const Le=x!==null?_e.get(x).__webglFramebuffer:null;be.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(A,U,q=0){const N=Math.pow(2,-q),$=Math.floor(U.image.width*N),we=Math.floor(U.image.height*N);Ce.setTexture2D(U,0),z.copyTexSubImage2D(3553,q,0,0,A.x,A.y,$,we),be.unbindTexture()},this.copyTextureToTexture=function(A,U,q,N=0){const $=U.image.width,we=U.image.height,Me=H.convert(q.format),Ee=H.convert(q.type);Ce.setTexture2D(q,0),z.pixelStorei(37440,q.flipY),z.pixelStorei(37441,q.premultiplyAlpha),z.pixelStorei(3317,q.unpackAlignment),U.isDataTexture?z.texSubImage2D(3553,N,A.x,A.y,$,we,Me,Ee,U.image.data):U.isCompressedTexture?z.compressedTexSubImage2D(3553,N,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,Me,U.mipmaps[0].data):z.texSubImage2D(3553,N,A.x,A.y,Me,Ee,U.image),N===0&&q.generateMipmaps&&z.generateMipmap(3553),be.unbindTexture()},this.copyTextureToTexture3D=function(A,U,q,N,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=A.max.x-A.min.x+1,Me=A.max.y-A.min.y+1,Ee=A.max.z-A.min.z+1,Le=H.convert(N.format),Ie=H.convert(N.type);let De;if(N.isData3DTexture)Ce.setTexture3D(N,0),De=32879;else if(N.isDataArrayTexture)Ce.setTexture2DArray(N,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,N.flipY),z.pixelStorei(37441,N.premultiplyAlpha),z.pixelStorei(3317,N.unpackAlignment);const Ne=z.getParameter(3314),je=z.getParameter(32878),Nt=z.getParameter(3316),wn=z.getParameter(3315),Ri=z.getParameter(32877),ut=q.isCompressedTexture?q.mipmaps[0]:q.image;z.pixelStorei(3314,ut.width),z.pixelStorei(32878,ut.height),z.pixelStorei(3316,A.min.x),z.pixelStorei(3315,A.min.y),z.pixelStorei(32877,A.min.z),q.isDataTexture||q.isData3DTexture?z.texSubImage3D(De,$,U.x,U.y,U.z,we,Me,Ee,Le,Ie,ut.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(De,$,U.x,U.y,U.z,we,Me,Ee,Le,ut.data)):z.texSubImage3D(De,$,U.x,U.y,U.z,we,Me,Ee,Le,Ie,ut),z.pixelStorei(3314,Ne),z.pixelStorei(32878,je),z.pixelStorei(3316,Nt),z.pixelStorei(3315,wn),z.pixelStorei(32877,Ri),$===0&&N.generateMipmaps&&z.generateMipmap(De),be.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ce.setTextureCube(A,0):A.isData3DTexture?Ce.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ce.setTexture2DArray(A,0):Ce.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){v=0,y=0,x=null,be.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class Lv extends Vd{}Lv.prototype.isWebGL1Renderer=!0;class Rv extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Pv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$o,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new P;class Dl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array),r=Xe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xc=new P,Sc=new We,Mc=new We,Iv=new P,Ac=new fe,wr=new P;class Gd extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new fe,this.bindMatrixInverse=new fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ii),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)wr.fromBufferAttribute(t,n),this.applyBoneTransform(n,wr),this.boundingBox.expandByPoint(wr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)wr.fromBufferAttribute(t,n),this.applyBoneTransform(n,wr),this.boundingSphere.expandByPoint(wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Sc.fromBufferAttribute(i.attributes.skinIndex,e),Mc.fromBufferAttribute(i.attributes.skinWeight,e),xc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Mc.getComponent(r);if(a!==0){const s=Sc.getComponent(r);Ac.multiplyMatrices(n.bones[s].matrixWorld,n.boneInverses[s]),t.addScaledVector(Iv.copy(xc).applyMatrix4(Ac),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class bs extends $e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Dv extends gt{constructor(e=null,t=1,n=1,i,r,a,s,l,h=bt,c=bt,d,u){super(null,a,s,l,h,c,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=new fe,kv=new fe;class Os{constructor(e=[],t=[]){this.uuid=En(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const s=e[r]?e[r].matrixWorld:kv;Tc.multiplyMatrices(s,t[r]),Tc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Os(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Ed(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Dv(t,e,e,un,mi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new bs),this.bones.push(a),this.boneInverses.push(new fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const s=n[i];e.boneInverses.push(s.toArray())}return e}}class Ec extends At{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const br=new fe,Cc=new fe,ss=[],Lc=new ii,Nv=new fe,sa=new It,oa=new ri;class Fv extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ec(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Nv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),Lc.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(Lc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),oa.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(n),e.ray.intersectsSphere(oa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,br),Cc.multiplyMatrices(n,br),sa.matrixWorld=Cc,sa.raycast(e,ss);for(let a=0,s=ss.length;a<s;a++){const l=ss[a];l.instanceId=r,l.object=this,t.push(l)}ss.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ec(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class kl extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rc=new P,Pc=new P,Ic=new fe,So=new Ns,os=new ri;class Bs extends $e{constructor(e=new jt,t=new kl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Rc.fromBufferAttribute(t,i-1),Pc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Rc.distanceTo(Pc);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(i),os.radius+=r,e.ray.intersectsSphere(os)===!1)return;Ic.copy(i).invert(),So.copy(e.ray).applyMatrix4(Ic);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,h=new P,c=new P,d=new P,u=new P,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let v=p,y=w-1;v<y;v+=f){const x=g.getX(v),T=g.getX(v+1);if(h.fromBufferAttribute(m,x),c.fromBufferAttribute(m,T),So.distanceSqToSegment(h,c,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(u);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),w=Math.min(m.count,a.start+a.count);for(let v=p,y=w-1;v<y;v+=f){if(h.fromBufferAttribute(m,v),c.fromBufferAttribute(m,v+1),So.distanceSqToSegment(h,c,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(u);T<e.near||T>e.far||t.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}const Dc=new P,kc=new P;class Uv extends Bs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Dc.fromBufferAttribute(t,i),kc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dc.distanceTo(kc);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ov extends Bs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Wd extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nc=new fe,el=new Ns,ls=new ri,hs=new P;class Bv extends $e{constructor(e=new jt,t=new Wd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(i),ls.radius+=r,e.ray.intersectsSphere(ls)===!1)return;Nc.copy(i).invert(),el.copy(e.ray).applyMatrix4(Nc);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const m=h.getX(g);hs.fromBufferAttribute(d,m),Fc(hs,m,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)hs.fromBufferAttribute(d,g),Fc(hs,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function Fc(o,e,t,n,i,r,a){const s=el.distanceSqToPoint(o);if(s<t){const l=new P;el.closestPointToPoint(o,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:a})}}class zv{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let s=0,l=r-1,h;for(;s<=l;)if(i=Math.floor(s+(l-s)/2),h=n[i]-a,h<0)s=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const c=n[i],u=n[i+1]-c,f=(a-c)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),s=this.getPoint(r),l=t||(a.isVector2?new Ae:new P);return l.copy(s).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],r=[],a=[],s=new P,l=new fe;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let h=Number.MAX_VALUE;const c=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);c<=h&&(h=c,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),u<=h&&n.set(0,0,1),s.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],s),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),s.crossVectors(i[f-1],i[f]),s.length()>Number.EPSILON){s.normalize();const g=Math.acos(mt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(s,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(mt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(s.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ln extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ks,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tr extends ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mo extends yn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ks,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hv extends yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ks,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ci(o,e,t){return jd(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function cs(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function jd(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Vv(o){function e(i,r){return o[i]-o[r]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Uc(o,e,t){const n=o.length,i=new o.constructor(n);for(let r=0,a=0;a!==n;++r){const s=t[r]*e;for(let l=0;l!==e;++l)i[a++]=o[s+l]}return i}function qd(o,e,t,n){let i=1,r=o[0];for(;r!==void 0&&r[n]===void 0;)r=o[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=o[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=o[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=o[i++];while(r!==void 0)}class Na{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let s=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===s)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const s=t[1];e<s&&(n=2,r=s);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const s=n+a>>>1;e<t[s]?a=s:n=s+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gv extends Na{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ar,endingEnd:Ar}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,s=i[r],l=i[a];if(s===void 0)switch(this.getSettings_().endingStart){case Tr:r=e,s=2*t-n;break;case ws:r=i.length-2,s=t+i[r]-i[r+1];break;default:r=e,s=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tr:a=e,l=2*n-t;break;case ws:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const h=(n-t)*.5,c=this.valueSize;this._weightPrev=h/(t-s),this._weightNext=h/(l-n),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=e*s,h=l-s,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,w=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let x=0;x!==s;++x)r[x]=p*a[c+x]+w*a[h+x]+v*a[l+x]+y*a[d+x];return r}}class Xd extends Na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=e*s,h=l-s,c=(n-t)/(i-t),d=1-c;for(let u=0;u!==s;++u)r[u]=a[h+u]*d+a[l+u]*c;return r}}class Wv extends Na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cs(t,this.TimeBufferType),this.values=cs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cs(e.times,Array),values:cs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sa:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case Qs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Qs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const s=this.getValueSize();this.times=ci(n,r,a),this.values=ci(this.values,r*s,a*s)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let s=0;s!==r;s++){const l=n[s];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,l,a),e=!1;break}a=l}if(i!==void 0&&jd(i))for(let s=0,l=i.length;s!==l;++s){const h=i[s];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,h),e=!1;break}}return e}optimize(){const e=ci(this.times),t=ci(this.values),n=this.getValueSize(),i=this.getInterpolation()===Qs,r=e.length-1;let a=1;for(let s=1;s<r;++s){let l=!1;const h=e[s],c=e[s+1];if(h!==c&&(s!==1||h!==e[0]))if(i)l=!0;else{const d=s*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(s!==a){e[a]=e[s];const d=s*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let s=r*n,l=a*n,h=0;h!==n;++h)t[l+h]=t[s+h];++a}return a!==e.length?(this.times=ci(e,0,a),this.values=ci(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=ci(this.times,0),t=ci(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=zr;class Qr extends Bn{}Qr.prototype.ValueTypeName="bool";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=Sa;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Kd extends Bn{}Kd.prototype.ValueTypeName="color";class Wr extends Bn{}Wr.prototype.ValueTypeName="number";class jv extends Na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=(n-t)/(i-t);let h=e*s;for(let c=h+s;h!==c;h+=4)Mt.slerpFlat(r,0,a,h-s,a,h,l);return r}}class Mi extends Bn{InterpolantFactoryMethodLinear(e){return new jv(this.times,this.values,this.getValueSize(),e)}}Mi.prototype.ValueTypeName="quaternion";Mi.prototype.DefaultInterpolation=zr;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;class ea extends Bn{}ea.prototype.ValueTypeName="string";ea.prototype.ValueBufferType=Array;ea.prototype.DefaultInterpolation=Sa;ea.prototype.InterpolantFactoryMethodLinear=void 0;ea.prototype.InterpolantFactoryMethodSmooth=void 0;class jr extends Bn{}jr.prototype.ValueTypeName="vector";class xs{constructor(e,t=-1,n,i=Al){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=En(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,s=n.length;a!==s;++a)t.push(Xv(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let s=0;s<r;s++){let l=[],h=[];l.push((s+r-1)%r,s,(s+1)%r),h.push(0,1,0);const c=Vv(l);l=Uc(l,1,c),h=Uc(h,1,c),!i&&l[0]===0&&(l.push(r),h.push(h[0])),a.push(new Wr(".morphTargetInfluences["+t[s].name+"]",l,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let s=0,l=e.length;s<l;s++){const h=e[s],c=h.name.match(r);if(c&&c.length>1){const d=c[1];let u=i[d];u||(i[d]=u=[]),u.push(h)}}const a=[];for(const s in i)a.push(this.CreateFromMorphTargetSequence(s,i[s],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,_){if(f.length!==0){const m=[],p=[];qd(f,m,p,g),m.length!==0&&_.push(new d(u,m,p))}},i=[],r=e.name||"default",a=e.fps||30,s=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let d=0;d<h.length;d++){const u=h[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let w=0;w!==u[g].morphTargets.length;++w){const v=u[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Wr(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[d].name+"]";n(jr,f+".position",u,"pos",i),n(Mi,f+".quaternion",u,"rot",i),n(jr,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,s)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function qv(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wr;case"vector":case"vector2":case"vector3":case"vector4":return jr;case"color":return Kd;case"quaternion":return Mi;case"bool":case"boolean":return Qr;case"string":return ea}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Xv(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=qv(o.type);if(o.times===void 0){const t=[],n=[];qd(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const qr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Kv{constructor(e,t,n){const i=this;let r=!1,a=0,s=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){s++,r===!1&&i.onStart!==void 0&&i.onStart(c,a,s),r=!0},this.itemEnd=function(c){a++,i.onProgress!==void 0&&i.onProgress(c,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){const d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){const f=h[d],g=h[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}}const Yv=new Kv;class Ci{constructor(e){this.manager=e!==void 0?e:Yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const qn={};class $v extends Error{constructor(e,t){super(e),this.response=t}}class Aa extends Ci{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=qr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(qn[e]!==void 0){qn[e].push({onLoad:t,onProgress:n,onError:i});return}qn[e]=[],qn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const c=qn[e],d=h.body.getReader(),u=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){w();function w(){d.read().then(({done:v,value:y})=>{if(v)p.close();else{_+=y.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,C=c.length;T<C;T++){const L=c[T];L.onProgress&&L.onProgress(x)}p.enqueue(y),w()}})}}});return new Response(m)}else throw new $v(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(c=>new DOMParser().parseFromString(c,s));case"json":return h.json();default:if(s===void 0)return h.text();{const d=/charset="?([^;"\s]*)"?/i.exec(s),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return h.arrayBuffer().then(g=>f.decode(g))}}}).then(h=>{qr.add(e,h);const c=qn[e];delete qn[e];for(let d=0,u=c.length;d<u;d++){const f=c[d];f.onLoad&&f.onLoad(h)}}).catch(h=>{const c=qn[e];if(c===void 0)throw this.manager.itemError(e),h;delete qn[e];for(let d=0,u=c.length;d<u;d++){const f=c[d];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Yd extends Ci{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=qr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const s=Ma("img");function l(){c(),qr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(d){c(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){s.removeEventListener("load",l,!1),s.removeEventListener("error",h,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class Jv extends Ci{constructor(e){super(e)}load(e,t,n,i){const r=new Ll,a=new Yd(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let s=0;function l(h){a.load(e[h],function(c){r.images[h]=c,s++,s===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let h=0;h<e.length;++h)l(h);return r}}class Nl extends Ci{constructor(e){super(e)}load(e,t,n,i){const r=new gt,a=new Yd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class zs extends $e{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ao=new fe,Oc=new P,Bc=new P;class Fl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oc),Bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bc),t.updateMatrixWorld(),Ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zv extends Fl{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Vr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $d extends zs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Zv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zc=new fe,la=new P,To=new P;class Qv extends Fl{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),la.setFromMatrixPosition(e.matrixWorld),n.position.copy(la),To.copy(n.position),To.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(To),n.updateMatrixWorld(),i.makeTranslation(-la.x,-la.y,-la.z),zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc)}}class tl extends zs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class e0 extends Fl{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ul extends zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new e0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jd extends zs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ss{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class t0 extends Ci{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=qr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader,fetch(e,s).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){qr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class n0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let s=0;s!==i;++s)n[r+s]=n[s];a=t}else{a+=t;const s=t/a;this._mixBufferRegion(n,r,0,s,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,s=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,h=t+t;l!==h;++l)if(n[l]!==n[l+t]){s.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Mt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Mt.multiplyQuaternionsFlat(e,a,e,t,e,n),Mt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let s=0;s!==r;++s){const l=t+s;e[l]=e[l]*a+e[n+s]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const s=t+a;e[s]=e[s]+e[n+a]*i}}}const Ol="\\[\\]\\.:\\/",i0=new RegExp("["+Ol+"]","g"),Bl="[^"+Ol+"]",r0="[^"+Ol.replace("\\.","")+"]",a0=/((?:WC+[\/:])*)/.source.replace("WC",Bl),s0=/(WCOD+)?/.source.replace("WCOD",r0),o0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),l0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),h0=new RegExp("^"+a0+s0+o0+l0+"$"),c0=["material","materials","bones","map"];class d0{constructor(e,t,n){const i=n||ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ze{constructor(e,t,n){this.path=t,this.parsedPath=n||ze.parseTrackName(t),this.node=ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ze.Composite(e,t,n):new ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(e){const t=h0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);c0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const s=r[a];if(s.name===t||s.uuid===t)return s;const l=n(s.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let s=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ze.Composite=d0;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class u0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,s=new Array(a),l={endingStart:Ar,endingEnd:Ar};for(let h=0;h!==a;++h){const c=r[h].createInterpolant(null);s[h]=c,c.settings=l}this._interpolantSettings=l,this._interpolants=s,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=op,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,s=i/r;e.warp(1,a,t),this.warp(s,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let s=this._timeScaleInterpolant;s===null&&(s=i._lendControlInterpolant(),this._timeScaleInterpolant=s);const l=s.parameterPositions,h=s.sampleValues;return l[0]=r,l[1]=r+n,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),s=this._updateWeight(e);if(s>0){const l=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case hp:for(let c=0,d=l.length;c!==d;++c)l[c].evaluate(a),h[c].accumulateAdditive(s);break;case Al:default:for(let c=0,d=l.length;c!==d;++c)l[c].evaluate(a),h[c].accumulate(i,s)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===lp;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===sp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const s=Math.floor(i/t);i-=t*s,r+=Math.abs(s);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:s})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Tr,i.endingEnd=Tr):(e?i.endingStart=this.zeroSlopeAtStart?Tr:Ar:i.endingStart=ws,t?i.endingEnd=this.zeroSlopeAtEnd?Tr:Ar:i.endingEnd=ws)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const s=a.parameterPositions,l=a.sampleValues;return s[0]=r,l[0]=t,s[1]=r+e,l[1]=n,this}}const f0=new Float32Array(1);class Zd extends Ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,s=e._interpolants,l=n.uuid,h=this._bindingsByRootAndName;let c=h[l];c===void 0&&(c={},h[l]=c);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let g=c[f];if(g!==void 0)++g.referenceCount,a[d]=g;else{if(g=a[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new n0(ze.create(n,f,_),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[d]=g}s[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const s=a.knownActions;e._byClipCacheIndex=s.length,s.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,s=a[r],l=s.knownActions,h=l[l.length-1],c=e._byClipCacheIndex;h._byClipCacheIndex=c,l[c]=h,l.pop(),e._byClipCacheIndex=null;const d=s.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,s=a[i],l=t[t.length-1],h=e._cacheIndex;l._cacheIndex=h,t[h]=l,t.pop(),delete s[r],Object.keys(s).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Xd(new Float32Array(2),new Float32Array(2),1,f0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?xs.findByName(i,e):e;const s=a!==null?a.uuid:e,l=this._actionsByClip[s];let h=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Al),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;h=l.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const c=new u0(this,a,t,n);return this._bindAction(c,h),this._addInactiveAction(c,s,r),c}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?xs.findByName(n,e):e,a=r?r.uuid:e,s=this._actionsByClip[a];return s!==void 0&&s.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,r,a);const s=this._bindings,l=this._nActiveBindings;for(let h=0;h!==l;++h)s[h].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let s=0,l=a.length;s!==l;++s){const h=a[s];this._deactivateAction(h);const c=h._cacheIndex,d=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,d._cacheIndex=c,t[c]=d,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const s=n[a].actionByRoot,l=s[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const s=r[a];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class p0{constructor(e,t,n=0,i=1/0){this.ray=new Ns(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new El,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return nl(e,this,n,t),n.sort(Hc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)nl(e[i],this,n,t);return n.sort(Hc),n}}function Hc(o,e){return o.distance-e.distance}function nl(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let r=0,a=i.length;r<a;r++)nl(i[r],e,t,!0)}}class Vc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class Fn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Fn.nextNameID=Fn.nextNameID||0,this.$name.id=`lil-gui-name-${++Fn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class m0 extends Fn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function il(o){let e,t;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const g0={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:il,toHexString:il},Ta={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},_0={isPrimitive:!1,match:o=>Array.isArray(o),fromHexString(o,e,t=1){const n=Ta.fromHexString(o);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([o,e,t],n=1){n=255/n;const i=o*n<<16^e*n<<8^t*n<<0;return Ta.toHexString(i)}},y0={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,t=1){const n=Ta.fromHexString(o);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:o,g:e,b:t},n=1){n=255/n;const i=o*n<<16^e*n<<8^t*n<<0;return Ta.toHexString(i)}},v0=[g0,Ta,_0,y0];function w0(o){return v0.find(e=>e.match(o))}class b0 extends Fn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=w0(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=il(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Eo extends Fn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class x0 extends Fn{constructor(e,t,n,i,r,a){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const s=a!==void 0;this.step(s?a:this._getImplicitStep(),s),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._stepExplicit&&(w=this._snap(w)),this.setValue(this._clamp(w)))},n=w=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+w),this.$input.value=this.getValue())},i=w=>{w.key==="Enter"&&this.$input.blur(),w.code==="ArrowUp"&&(w.preventDefault(),n(this._step*this._arrowKeyMultiplier(w))),w.code==="ArrowDown"&&(w.preventDefault(),n(this._step*this._arrowKeyMultiplier(w)*-1))},r=w=>{this._inputFocused&&(w.preventDefault(),n(this._step*this._normalizeMouseWheel(w)))};let a=!1,s,l,h,c,d;const u=5,f=w=>{s=w.clientX,l=h=w.clientY,a=!0,c=this.getValue(),d=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=w=>{if(a){const v=w.clientX-s,y=w.clientY-l;Math.abs(y)>u?(w.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>u&&_()}if(!a){const v=w.clientY-h;d-=v*this._step*this._arrowKeyMultiplier(w),c+d>this._max?d=this._max-c:c+d<this._min&&(d=this._min-c),this._snapClampSetValue(c+d)}h=w.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,w,v,y,x)=>(p-w)/(v-w)*(x-y)+y,t=p=>{const w=this.$slider.getBoundingClientRect();let v=e(p,w.left,w.right,this._min,this._max);this._snapClampSetValue(v)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,s,l;const h=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),a=!1},c=p=>{p.touches.length>1||(this._hasScrollBar?(s=p.touches[0].clientX,l=p.touches[0].clientY,a=!0):h(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=p=>{if(a){const w=p.touches[0].clientX-s,v=p.touches[0].clientY-l;Math.abs(w)>Math.abs(v)?h(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else p.preventDefault(),t(p.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const v=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class S0 extends Fn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class M0 extends Fn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const A0=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function T0(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Gc=!1;class zl{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:a=!1,injectStyles:s=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Gc&&s&&(T0(A0),Gc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a}add(e,t,n,i,r){if(Object(n)===n)return new S0(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new x0(this,e,t,n,i,r);case"boolean":return new m0(this,e,t);case"string":return new M0(this,e,t);case"function":return new Eo(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new b0(this,e,t,n)}addFolder(e){const t=new zl({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Eo||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Eo)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class E0{constructor(){this.active=window.location.hash==="#debug",this.active&&(this.ui=new zl)}}class Hl{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(i=>{const r=this.resolveName(i);this.callbacks[r.namespace]instanceof Object||(this.callbacks[r.namespace]={}),this.callbacks[r.namespace][r.value]instanceof Array||(this.callbacks[r.namespace][r.value]=[]),this.callbacks[r.namespace][r.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(n=>{const i=this.resolveName(n);if(i.namespace!=="base"&&i.value==="")delete this.callbacks[i.namespace];else if(i.namespace==="base")for(const r in this.callbacks)this.callbacks[r]instanceof Object&&this.callbacks[r][i.value]instanceof Array&&(delete this.callbacks[r][i.value],Object.keys(this.callbacks[r]).length===0&&delete this.callbacks[r]);else this.callbacks[i.namespace]instanceof Object&&this.callbacks[i.namespace][i.value]instanceof Array&&(delete this.callbacks[i.namespace][i.value],Object.keys(this.callbacks[i.namespace]).length===0&&delete this.callbacks[i.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let n=null;const i=t instanceof Array?t:[];let r=this.resolveNames(e);if(r=this.resolveName(r[0]),r.namespace==="base")for(const a in this.callbacks)this.callbacks[a]instanceof Object&&this.callbacks[a][r.value]instanceof Array&&this.callbacks[a][r.value].forEach(function(s){s.apply(this,i)});else if(this.callbacks[r.namespace]instanceof Object){if(r.value==="")return console.warn("wrong name"),this;this.callbacks[r.namespace][r.value].forEach(function(a){a.apply(this,i)})}return n}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},n=e.split(".");return t.original=e,t.value=n[0],t.namespace="base",n.length>1&&n[1]!==""&&(t.namespace=n[1]),t}}class C0 extends Hl{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}}class L0 extends Hl{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}const Wc={type:"change"},Co={type:"start"},jc={type:"end"};class R0 extends Ei{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kn.ROTATE,MIDDLE:Kn.DOLLY,RIGHT:Kn.PAN},this.touches={ONE:ir.ROTATE,TWO:ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Ye),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ye),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Wc),n.update(),r=i.NONE},this.update=function(){const R=new P,J=new Mt().setFromUnitVectors(e.up,new P(0,1,0)),H=J.clone().invert(),le=new P,ue=new Mt,me=2*Math.PI;return function(){const pe=n.object.position;R.copy(pe).sub(n.target),R.applyQuaternion(J),s.setFromVector3(R),n.autoRotate&&r===i.NONE&&b(C()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Te=n.minAzimuthAngle,Pe=n.maxAzimuthAngle;return isFinite(Te)&&isFinite(Pe)&&(Te<-Math.PI?Te+=me:Te>Math.PI&&(Te-=me),Pe<-Math.PI?Pe+=me:Pe>Math.PI&&(Pe-=me),Te<=Pe?s.theta=Math.max(Te,Math.min(Pe,s.theta)):s.theta=s.theta>(Te+Pe)/2?Math.max(Te,s.theta):Math.min(Pe,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=h,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),R.setFromSpherical(s),R.applyQuaternion(H),pe.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),h=1,d||le.distanceToSquared(n.object.position)>a||8*(1-ue.dot(n.object.quaternion))>a?(n.dispatchEvent(Wc),le.copy(n.object.position),ue.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",S),n.domElement.removeEventListener("pointerdown",Ce),n.domElement.removeEventListener("pointercancel",Qe),n.domElement.removeEventListener("wheel",Ve),n.domElement.removeEventListener("pointermove",it),n.domElement.removeEventListener("pointerup",Qe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ye),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new Vc,l=new Vc;let h=1;const c=new P;let d=!1;const u=new Ae,f=new Ae,g=new Ae,_=new Ae,m=new Ae,p=new Ae,w=new Ae,v=new Ae,y=new Ae,x=[],T={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function b(R){l.theta-=R}function M(R){l.phi-=R}const B=function(){const R=new P;return function(H,le){R.setFromMatrixColumn(le,0),R.multiplyScalar(-H),c.add(R)}}(),O=function(){const R=new P;return function(H,le){n.screenSpacePanning===!0?R.setFromMatrixColumn(le,1):(R.setFromMatrixColumn(le,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(H),c.add(R)}}(),I=function(){const R=new P;return function(H,le){const ue=n.domElement;if(n.object.isPerspectiveCamera){const me=n.object.position;R.copy(me).sub(n.target);let ce=R.length();ce*=Math.tan(n.object.fov/2*Math.PI/180),B(2*H*ce/ue.clientHeight,n.object.matrix),O(2*le*ce/ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(H*(n.object.right-n.object.left)/n.object.zoom/ue.clientWidth,n.object.matrix),O(le*(n.object.top-n.object.bottom)/n.object.zoom/ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(R){n.object.isPerspectiveCamera?h/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(R){n.object.isPerspectiveCamera?h*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(R){u.set(R.clientX,R.clientY)}function Y(R){w.set(R.clientX,R.clientY)}function G(R){_.set(R.clientX,R.clientY)}function Q(R){f.set(R.clientX,R.clientY),g.subVectors(f,u).multiplyScalar(n.rotateSpeed);const J=n.domElement;b(2*Math.PI*g.x/J.clientHeight),M(2*Math.PI*g.y/J.clientHeight),u.copy(f),n.update()}function Z(R){v.set(R.clientX,R.clientY),y.subVectors(v,w),y.y>0?k(L()):y.y<0&&F(L()),w.copy(v),n.update()}function ge(R){m.set(R.clientX,R.clientY),p.subVectors(m,_).multiplyScalar(n.panSpeed),I(p.x,p.y),_.copy(m),n.update()}function ee(R){R.deltaY<0?F(L()):R.deltaY>0&&k(L()),n.update()}function V(R){let J=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),J=!0;break}J&&(R.preventDefault(),n.update())}function K(){if(x.length===1)u.set(x[0].pageX,x[0].pageY);else{const R=.5*(x[0].pageX+x[1].pageX),J=.5*(x[0].pageY+x[1].pageY);u.set(R,J)}}function re(){if(x.length===1)_.set(x[0].pageX,x[0].pageY);else{const R=.5*(x[0].pageX+x[1].pageX),J=.5*(x[0].pageY+x[1].pageY);_.set(R,J)}}function he(){const R=x[0].pageX-x[1].pageX,J=x[0].pageY-x[1].pageY,H=Math.sqrt(R*R+J*J);w.set(0,H)}function z(){n.enableZoom&&he(),n.enablePan&&re()}function Se(){n.enableZoom&&he(),n.enableRotate&&K()}function xe(R){if(x.length==1)f.set(R.pageX,R.pageY);else{const H=oe(R),le=.5*(R.pageX+H.x),ue=.5*(R.pageY+H.y);f.set(le,ue)}g.subVectors(f,u).multiplyScalar(n.rotateSpeed);const J=n.domElement;b(2*Math.PI*g.x/J.clientHeight),M(2*Math.PI*g.y/J.clientHeight),u.copy(f)}function ae(R){if(x.length===1)m.set(R.pageX,R.pageY);else{const J=oe(R),H=.5*(R.pageX+J.x),le=.5*(R.pageY+J.y);m.set(H,le)}p.subVectors(m,_).multiplyScalar(n.panSpeed),I(p.x,p.y),_.copy(m)}function be(R){const J=oe(R),H=R.pageX-J.x,le=R.pageY-J.y,ue=Math.sqrt(H*H+le*le);v.set(0,ue),y.set(0,Math.pow(v.y/w.y,n.zoomSpeed)),k(y.y),w.copy(v)}function Ge(R){n.enableZoom&&be(R),n.enablePan&&ae(R)}function _e(R){n.enableZoom&&be(R),n.enableRotate&&xe(R)}function Ce(R){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",it),n.domElement.addEventListener("pointerup",Qe)),W(R),R.pointerType==="touch"?Tt(R):dt(R))}function it(R){n.enabled!==!1&&(R.pointerType==="touch"?E(R):st(R))}function Qe(R){te(R),x.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",it),n.domElement.removeEventListener("pointerup",Qe)),n.dispatchEvent(jc),r=i.NONE}function dt(R){let J;switch(R.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Kn.DOLLY:if(n.enableZoom===!1)return;Y(R),r=i.DOLLY;break;case Kn.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;G(R),r=i.PAN}else{if(n.enableRotate===!1)return;j(R),r=i.ROTATE}break;case Kn.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;j(R),r=i.ROTATE}else{if(n.enablePan===!1)return;G(R),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Co)}function st(R){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Q(R);break;case i.DOLLY:if(n.enableZoom===!1)return;Z(R);break;case i.PAN:if(n.enablePan===!1)return;ge(R);break}}function Ve(R){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(R.preventDefault(),n.dispatchEvent(Co),ee(R),n.dispatchEvent(jc))}function Ye(R){n.enabled===!1||n.enablePan===!1||V(R)}function Tt(R){switch(ie(R),x.length){case 1:switch(n.touches.ONE){case ir.ROTATE:if(n.enableRotate===!1)return;K(),r=i.TOUCH_ROTATE;break;case ir.PAN:if(n.enablePan===!1)return;re(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ir.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;z(),r=i.TOUCH_DOLLY_PAN;break;case ir.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Se(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Co)}function E(R){switch(ie(R),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;xe(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ae(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ge(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(R),n.update();break;default:r=i.NONE}}function S(R){n.enabled!==!1&&R.preventDefault()}function W(R){x.push(R)}function te(R){delete T[R.pointerId];for(let J=0;J<x.length;J++)if(x[J].pointerId==R.pointerId){x.splice(J,1);return}}function ie(R){let J=T[R.pointerId];J===void 0&&(J=new Ae,T[R.pointerId]=J),J.set(R.pageX,R.pageY)}function oe(R){const J=R.pointerId===x[0].pointerId?x[1]:x[0];return T[J.pointerId]}n.domElement.addEventListener("contextmenu",S),n.domElement.addEventListener("pointerdown",Ce),n.domElement.addEventListener("pointercancel",Qe),n.domElement.addEventListener("wheel",Ve,{passive:!1}),this.update()}}function Xn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Qd(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xr={duration:.5,overwrite:!1,delay:0},Vl,Dt,rt,mn=1e8,Ke=1/mn,rl=Math.PI*2,P0=rl/4,I0=0,eu=Math.sqrt,D0=Math.cos,k0=Math.sin,xt=function(e){return typeof e=="string"},at=function(e){return typeof e=="function"},ti=function(e){return typeof e=="number"},Gl=function(e){return typeof e>"u"},On=function(e){return typeof e=="object"},qt=function(e){return e!==!1},Wl=function(){return typeof window<"u"},ds=function(e){return at(e)||xt(e)},tu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,al=/(?:-?\.?\d|\.)+/gi,nu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,iu=/[+-]=-?[.\d]+/,ru=/[^,'"\[\]\s]+/gi,N0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tt,hn,sl,jl,rn={},Ms={},au,su=function(e){return(Ms=er(e,rn))&&Yt},ql=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},As=function(e,t){return!t&&console.warn(e)},ou=function(e,t){return e&&(rn[e]=t)&&Ms&&(Ms[e]=t)||rn},Ea=function(){return 0},F0={suppressEvents:!0,isStart:!0,kill:!1},ms={suppressEvents:!0,kill:!1},U0={suppressEvents:!0},Xl={},bi=[],ol={},lu,en={},Ro={},qc=30,gs=[],Kl="",Yl=function(e){var t=e[0],n,i;if(On(t)||at(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=gs.length;i--&&!gs[i].targetTest(t););n=gs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Iu(e[i],n)))||e.splice(i,1);return e},qi=function(e){return e._gsap||Yl(gn(e))[0]._gsap},hu=function(e,t,n){return(n=e[t])&&at(n)?e[t]():Gl(n)&&e.getAttribute&&e.getAttribute(t)||n},Xt=function(e,t){return(e=e.split(",")).forEach(t)||e},ct=function(e){return Math.round(e*1e5)/1e5||0},St=function(e){return Math.round(e*1e7)/1e7||0},Dr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},O0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ts=function(){var e=bi.length,t=bi.slice(0),n,i;for(ol={},bi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},cu=function(e,t,n,i){bi.length&&!Dt&&Ts(),e.render(t,n,i||Dt&&t<0&&(e._initted||e._startAt)),bi.length&&!Dt&&Ts()},du=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ru).length<2?t:xt(e)?e.trim():e},uu=function(e){return e},vn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},B0=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},er=function(e,t){for(var n in t)e[n]=t[n];return e},Xc=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=On(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},Es=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ya=function(e){var t=e.parent||tt,n=e.keyframes?B0(kt(e.keyframes)):vn;if(qt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},z0=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},fu=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Hs=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Ai=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},H0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ll=function(e,t,n,i){return e._startAt&&(Dt?e._startAt.revert(ms):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},V0=function o(e){return!e||e._ts&&o(e.parent)},Kc=function(e){return e._repeat?Kr(e._tTime,e=e.duration()+e._rDelay)*e:0},Kr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Cs=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Vs=function(e){return e._end=St(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ke)||0))},Gs=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=St(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Vs(e),n._dirty||Xi(n,e)),e},pu=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Cs(e.rawTime(),t),(!t._dur||Fa(0,t.totalDuration(),n)-t._tTime>Ke)&&t.render(n,!0)),Xi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ke}},kn=function(e,t,n,i){return t.parent&&Ai(t),t._start=St((ti(n)?n:n||e!==tt?on(e,n,t):e._time)+t._delay),t._end=St(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),fu(e,t,"_first","_last",e._sort?"_start":0),hl(t)||(e._recent=t),i||pu(e,t),e._ts<0&&Gs(e,e._tTime),e},mu=function(e,t){return(rn.ScrollTrigger||ql("scrollTrigger",t))&&rn.ScrollTrigger.create(t,e)},gu=function(e,t,n,i,r){if(Jl(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Dt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&lu!==tn.frame)return bi.push(e),e._lazy=[r,i],1},G0=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},hl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},W0=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&G0(e)&&!(!e._initted&&hl(e))||(e._ts<0||e._dp._ts<0)&&!hl(e))?0:1,s=e._rDelay,l=0,h,c,d;if(s&&e._repeat&&(l=Fa(0,e._tDur,t),c=Kr(l,s),e._yoyo&&c&1&&(a=1-a),c!==Kr(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Dt||i||e._zTime===Ke||!t&&e._zTime){if(!e._initted&&gu(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Ke:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,h=e._pt;h;)h.r(a,h.d),h=h._next;t<0&&ll(e,t,n,!0),e._onUpdate&&!n&&_n(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&_n(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ai(e,1),!n&&!Dt&&(_n(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},j0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Yr=function(e,t,n,i){var r=e._repeat,a=St(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:St(a*(r+1)+e._rDelay*r):a,s>0&&!i&&Gs(e,e._tTime=e._tDur*s),e.parent&&Vs(e),n||Xi(e.parent,e),e},Yc=function(e){return e instanceof Gt?Xi(e):Yr(e,e._dur)},q0={_start:0,endTime:Ea,totalDuration:Ea},on=function o(e,t,n){var i=e.labels,r=e._recent||q0,a=e.duration()>=mn?r.endTime(!1):e._dur,s,l,h;return xt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),h=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),h&&n&&(l=l/100*(kt(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+l:a+l)):t==null?a:+t},va=function(e,t,n){var i=ti(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=qt(l.vars.inherit)&&l.parent;a.immediateRender=qt(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new pt(t[0],a,t[r+1])},Li=function(e,t){return e||e===0?t(e):t},Fa=function(e,t,n){return n<e?e:n>t?t:n},Pt=function(e,t){return!xt(e)||!(t=N0.exec(e))?"":t[1]},X0=function(e,t,n){return Li(n,function(i){return Fa(e,t,i)})},cl=[].slice,_u=function(e,t){return e&&On(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&On(e[0]))&&!e.nodeType&&e!==hn},K0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return xt(i)&&!t||_u(i,1)?(r=n).push.apply(r,gn(i)):n.push(i)})||n},gn=function(e,t,n){return rt&&!t&&rt.selector?rt.selector(e):xt(e)&&!n&&(sl||!$r())?cl.call((t||jl).querySelectorAll(e),0):kt(e)?K0(e,n):_u(e)?cl.call(e,0):e?[e]:[]},dl=function(e){return e=gn(e)[0]||As("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gn(t,n.querySelectorAll?n:n===e?As("Invalid scope")||jl.createElement("div"):e)}},yu=function(e){return e.sort(function(){return .5-Math.random()})},vu=function(e){if(at(e))return e;var t=On(e)?e:{each:e},n=Ki(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,h=t.axis,c=i,d=i;return xt(i)?c=d={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(c=i[0],d=i[1]),function(u,f,g){var _=(g||t).length,m=a[_],p,w,v,y,x,T,C,L,b;if(!m){if(b=t.grid==="auto"?0:(t.grid||[1,mn])[1],!b){for(C=-mn;C<(C=g[b++].getBoundingClientRect().left)&&b<_;);b--}for(m=a[_]=[],p=l?Math.min(b,_)*c-.5:i%b,w=b===mn?0:l?_*d/b-.5:i/b|0,C=0,L=mn,T=0;T<_;T++)v=T%b-p,y=w-(T/b|0),m[T]=x=h?Math.abs(h==="y"?y:v):eu(v*v+y*y),x>C&&(C=x),x<L&&(L=x);i==="random"&&yu(m),m.max=C-L,m.min=L,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:h?h==="y"?_/b:b:Math.max(b,_/b))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Pt(t.amount||t.each)||0,n=n&&_<0?Lu(n):n}return _=(m[u]-m.min)/m.max||0,St(m.b+(n?n(_):_)*m.v)+m.u}},ul=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=St(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ti(n)?0:Pt(n))}},wu=function(e,t){var n=kt(e),i,r;return!n&&On(e)&&(i=n=e.radius||mn,e.values?(e=gn(e.values),(r=!ti(e[0]))&&(i*=i)):e=ul(e.increment)),Li(t,n?at(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),h=mn,c=0,d=e.length,u,f;d--;)r?(u=e[d].x-s,f=e[d].y-l,u=u*u+f*f):u=Math.abs(e[d]-s),u<h&&(h=u,c=d);return c=!i||h<=i?e[c]:a,r||c===a||ti(a)?c:c+Pt(a)}:ul(e))},bu=function(e,t,n,i){return Li(kt(e)?!t:n===!0?!!(n=0):!i,function(){return kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Y0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},$0=function(e,t){return function(n){return e(parseFloat(n))+(t||Pt(n))}},J0=function(e,t,n){return Su(e,t,0,1,n)},xu=function(e,t,n){return Li(n,function(i){return e[~~t(i)]})},Z0=function o(e,t,n){var i=t-e;return kt(e)?xu(e,o(0,e.length),t):Li(n,function(r){return(i+(r-e)%i)%i+e})},Q0=function o(e,t,n){var i=t-e,r=i*2;return kt(e)?xu(e,o(0,e.length-1),t):Li(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Ca=function(e){for(var t=0,n="",i,r,a,s;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(s?ru:al),n+=e.substr(t,i-t)+bu(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Su=function(e,t,n,i,r){var a=t-e,s=i-n;return Li(r,function(l){return n+((l-e)/a*s||0)})},ew=function o(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=xt(e),s={},l,h,c,d,u;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(c=[],d=e.length,u=d-2,h=1;h<d;h++)c.push(o(e[h-1],e[h]));d--,r=function(g){g*=d;var _=Math.min(u,~~g);return c[_](g-_)},n=t}else i||(e=er(kt(e)?[]:{},e));if(!c){for(l in t)$l.call(s,e,l,"get",t[l]);r=function(g){return eh(g,s)||(a?e.p:e)}}}return Li(n,r)},$c=function(e,t,n){var i=e.labels,r=mn,a,s,l;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},_n=function(e,t,n){var i=e.vars,r=i[t],a=rt,s=e._ctx,l,h,c;if(r)return l=i[t+"Params"],h=i.callbackScope||e,n&&bi.length&&Ts(),s&&(rt=s),c=l?r.apply(h,l):r.call(h),rt=a,c},pa=function(e){return Ai(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Dt),e.progress()<1&&_n(e,"onInterrupt"),e},Lr,Mu=[],Au=function(e){if(Wl()&&e){e=!e.name&&e.default||e;var t=e.name,n=at(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ea,render:eh,add:$l,kill:gw,modifier:mw,rawVars:0},a={targetTest:0,get:0,getSetter:Ql,aliases:{},register:0};if($r(),e!==i){if(en[t])return;vn(i,vn(Es(e,r),a)),er(i.prototype,er(r,Es(e,a))),en[i.prop=t]=i,e.targetTest&&(gs.push(i),Xl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ou(t,i),e.register&&e.register(Yt,i,Kt)}else e&&Mu.push(e)},qe=255,ma={aqua:[0,qe,qe],lime:[0,qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qe],navy:[0,0,128],white:[qe,qe,qe],olive:[128,128,0],yellow:[qe,qe,0],orange:[qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qe,0,0],pink:[qe,192,203],cyan:[0,qe,qe],transparent:[qe,qe,qe,0]},Po=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*qe+.5|0},Tu=function(e,t,n){var i=e?ti(e)?[e>>16,e>>8&qe,e&qe]:0:ma.black,r,a,s,l,h,c,d,u,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ma[e])i=ma[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&qe,i&qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&qe,e&qe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(al),!t)l=+i[0]%360/360,h=+i[1]/100,c=+i[2]/100,a=c<=.5?c*(h+1):c+h-c*h,r=c*2-a,i.length>3&&(i[3]*=1),i[0]=Po(l+1/3,r,a),i[1]=Po(l,r,a),i[2]=Po(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(nu),n&&i.length<4&&(i[3]=1),i}else i=e.match(al)||ma.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/qe,a=i[1]/qe,s=i[2]/qe,d=Math.max(r,a,s),u=Math.min(r,a,s),c=(d+u)/2,d===u?l=h=0:(f=d-u,h=c>.5?f/(2-d-u):f/(d+u),l=d===r?(a-s)/f+(a<s?6:0):d===a?(s-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(h*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},Eu=function(e){var t=[],n=[],i=-1;return e.split(xi).forEach(function(r){var a=r.match(Cr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Jc=function(e,t,n){var i="",r=(e+i).match(xi),a=t?"hsla(":"rgba(",s=0,l,h,c,d;if(!r)return e;if(r=r.map(function(u){return(u=Tu(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(c=Eu(e),l=n.c,l.join(i)!==c.c.join(i)))for(h=e.replace(xi,"1").split(Cr),d=h.length-1;s<d;s++)i+=h[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(c.length?c:r.length?r:n).shift());if(!h)for(h=e.split(xi),d=h.length-1;s<d;s++)i+=h[s]+r[s];return i+h[d]},xi=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ma)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),tw=/hsl[a]?\(/,Cu=function(e){var t=e.join(" "),n;if(xi.lastIndex=0,xi.test(t))return n=tw.test(t),e[1]=Jc(e[1],n),e[0]=Jc(e[0],n,Eu(e[1])),!0},La,tn=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,h,c,d,u,f,g=function _(m){var p=o()-i,w=m===!0,v,y,x,T;if(p>e&&(n+=p-t),i+=p,x=i-n,v=x-a,(v>0||w)&&(T=++d.frame,u=x-d.time*1e3,d.time=x=x/1e3,a+=v+(v>=r?4:r-v),y=1),w||(l=h(_)),y)for(f=0;f<s.length;f++)s[f](x,u,T,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){au&&(!sl&&Wl()&&(hn=sl=window,jl=hn.document||{},rn.gsap=Yt,(hn.gsapVersions||(hn.gsapVersions=[])).push(Yt.version),su(Ms||hn.GreenSockGlobals||!hn.gsap&&hn||{}),c=hn.requestAnimationFrame,Mu.forEach(Au)),l&&d.sleep(),h=c||function(m){return setTimeout(m,a-d.time*1e3+1|0)},La=1,g(2))},sleep:function(){(c?hn.cancelAnimationFrame:clearTimeout)(l),La=0,h=Ea},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=d.time*1e3+r},add:function(m,p,w){var v=p?function(y,x,T,C){m(y,x,T,C),d.remove(v)}:m;return d.remove(m),s[w?"unshift":"push"](v),$r(),v},remove:function(m,p){~(p=s.indexOf(m))&&s.splice(p,1)&&f>=p&&f--},_listeners:s},d}(),$r=function(){return!La&&tn.wake()},Oe={},nw=/^[\d.\-M][\d.\-,\s]/,iw=/["']/g,rw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,h;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,h=l.substr(0,s),t[i]=isNaN(h)?h.replace(iw,"").trim():+h,i=l.substr(s+1).trim();return t},aw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},sw=function(e){var t=(e+"").split("("),n=Oe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[rw(t[1])]:aw(e).split(",").map(du)):Oe._CE&&nw.test(e)?Oe._CE("",e):n},Lu=function(e){return function(t){return 1-e(1-t)}},Ru=function o(e,t){for(var n=e._first,i;n;)n instanceof Gt?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ki=function(e,t){return e&&(at(e)?e:Oe[e]||sw(e))||t},nr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Xt(e,function(s){Oe[s]=rn[s]=r,Oe[a=s.toLowerCase()]=n;for(var l in r)Oe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Oe[s+"."+l]=r[l]}),r},Pu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Io=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/rl*(Math.asin(1/i)||0),s=function(c){return c===1?1:i*Math.pow(2,-10*c)*k0((c-a)*r)+1},l=e==="out"?s:e==="in"?function(h){return 1-s(1-h)}:Pu(s);return r=rl/r,l.config=function(h,c){return o(e,h,c)},l},Do=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Pu(n);return i.config=function(r){return o(e,r)},i};Xt("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;nr(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Oe.Linear.easeNone=Oe.none=Oe.Linear.easeIn;nr("Elastic",Io("in"),Io("out"),Io());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};nr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);nr("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});nr("Circ",function(o){return-(eu(1-o*o)-1)});nr("Sine",function(o){return o===1?1:-D0(o*P0)+1});nr("Back",Do("in"),Do("out"),Do());Oe.SteppedEase=Oe.steps=rn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Ke;return function(s){return((i*Fa(0,a,s)|0)+r)*n}}};Xr.ease=Oe["quad.out"];Xt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Kl+=o+","+o+"Params,"});var Iu=function(e,t){this.id=I0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:hu,this.set=t?t.getSetter:Ql},Ra=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Yr(this,+t.duration,1,1),this.data=t.data,rt&&(this._ctx=rt,rt.data.push(this)),La||tn.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Yr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if($r(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Gs(this,n),!r._dp||r.parent||pu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&kn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ke||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),cu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Kc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Kc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Kr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ke?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Cs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ke?0:this._rts,this.totalTime(Fa(-Math.abs(this._delay),this._tDur,i),!0),Vs(this),H0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($r(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ke&&(this._tTime-=Ke)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&kn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(qt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Cs(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=U0);var i=Dt;return Dt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Dt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Yc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(on(this,n),qt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ke:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ke,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ke)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=at(n)?n:uu,s=function(){var h=i.then;i.then=null,at(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),r(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){pa(this)},o}();vn(Ra.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ke,_prom:0,_ps:!1,_rts:1});var Gt=function(o){Qd(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=qt(n.sortChildren),tt&&kn(n.parent||tt,Xn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&mu(Xn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return va(0,arguments,this),this},t.from=function(i,r,a){return va(1,arguments,this),this},t.fromTo=function(i,r,a,s){return va(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,ya(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new pt(i,r,on(this,a),1),this},t.call=function(i,r,a){return kn(this,pt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,l,h,c){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=h,a.onCompleteParams=c,a.parent=this,new pt(i,a,on(this,l)),this},t.staggerFrom=function(i,r,a,s,l,h,c){return a.runBackwards=1,ya(a).immediateRender=qt(a.immediateRender),this.staggerTo(i,r,a,s,l,h,c)},t.staggerFromTo=function(i,r,a,s,l,h,c,d){return s.startAt=a,ya(s).immediateRender=qt(s.immediateRender),this.staggerTo(i,r,s,l,h,c,d)},t.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,h=this._dur,c=i<=0?0:St(i),d=this._zTime<0!=i<0&&(this._initted||!h),u,f,g,_,m,p,w,v,y,x,T,C;if(this!==tt&&c>l&&i>=0&&(c=l),c!==this._tTime||a||d){if(s!==this._time&&h&&(c+=this._time-s,i+=this._time-s),u=c,y=this._start,v=this._ts,p=!v,d&&(h||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=h+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(u=St(c%m),c===l?(_=this._repeat,u=h):(_=~~(c/m),_&&_===c/m&&(u=h,_--),u>h&&(u=h)),x=Kr(this._tTime,m),!s&&this._tTime&&x!==_&&this._tTime-x*m-this._dur<=0&&(x=_),T&&_&1&&(u=h-u,C=1),_!==x&&!this._lock){var L=T&&x&1,b=L===(T&&_&1);if(_<x&&(L=!L),s=L?0:c%h?h:c,this._lock=1,this.render(s||(C?0:St(_*m)),r,!h)._lock=0,this._tTime=c,!r&&this.parent&&_n(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),s&&s!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,l=this._tDur,b&&(this._lock=2,s=L?h:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Ru(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=j0(this,St(s),St(u)),w&&(c-=u-(u=w._start))),this._tTime=c,this._time=u,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&u&&!r&&!_&&(_n(this,"onStart"),this._tTime!==c))return this;if(u>=s&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,a),u!==this._time||!this._ts&&!p){w=0,g&&(c+=this._zTime=-Ke);break}}f=g}else{f=this._last;for(var M=i<0?i:u;f;){if(g=f._prev,(f._act||M<=f._end)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,r,a||Dt&&(f._initted||f._startAt)),u!==this._time||!this._ts&&!p){w=0,g&&(c+=this._zTime=M?-Ke:Ke);break}}f=g}}if(w&&!r&&(this.pause(),w.render(u>=s?0:-Ke)._zTime=u>=s?1:-1,this._ts))return this._start=y,Vs(this),this.render(i,r,a);this._onUpdate&&!r&&_n(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&s)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!h)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ai(this,1),!r&&!(i<0&&!s)&&(c||s||!l)&&(_n(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(ti(r)||(r=on(this,r,i)),!(i instanceof Ra)){if(kt(i))return i.forEach(function(s){return a.add(s,r)}),this;if(xt(i))return this.addLabel(i,r);if(at(i))i=pt.delayedCall(0,i);else return this}return this!==i?kn(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-mn);for(var l=[],h=this._first;h;)h._start>=s&&(h instanceof pt?r&&l.push(h):(a&&l.push(h),i&&l.push.apply(l,h.getChildren(!0,r,a)))),h=h._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return xt(i)?this.removeLabel(i):at(i)?this.killTweensOf(i):(Hs(this,i),i===this._recent&&(this._recent=this._last),Xi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(tn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=on(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=pt.delayedCall(0,r||Ea,a);return s.data="isPause",this._hasPause=1,kn(this,s,on(this,i))},t.removePause=function(i){var r=this._first;for(i=on(this,i);r;)r._start===i&&r.data==="isPause"&&Ai(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)gi!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=gn(i),l=this._first,h=ti(r),c;l;)l instanceof pt?O0(l._targets,s)&&(h?(!gi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(c=l.getTweensOf(s,r)).length&&a.push.apply(a,c),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=on(a,i),l=r,h=l.startAt,c=l.onStart,d=l.onStartParams,u=l.immediateRender,f,g=pt.to(a,vn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(h&&"time"in h?h.time:a._time))/a.timeScale())||Ke,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((s-(h&&"time"in h?h.time:a._time))/a.timeScale());g._dur!==m&&Yr(g,m,0,1).render(g._time,!0,!0),f=1}c&&c.apply(g,d||[])}},r));return u?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,vn({startAt:{time:on(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),$c(this,on(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),$c(this,on(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ke)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,h;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(h in l)l[h]>=a&&(l[h]+=i);return Xi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xi(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,l=mn,h,c,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;s;)h=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,kn(a,s,c-s._delay,1)._lock=0):l=c,c<0&&s._ts&&(r-=c,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=c/a._ts,a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=h;Yr(a,a===tt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(tt._ts&&(cu(tt,Cs(i,tt)),lu=tn.frame),tn.frame>=qc){qc+=nn.autoSleep||120;var r=tt._first;if((!r||!r._ts)&&nn.autoSleep&&tn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||tn.sleep()}}},e}(Ra);vn(Gt.prototype,{_lock:0,_hasPause:0,_forcing:0});var ow=function(e,t,n,i,r,a,s){var l=new Kt(this._pt,e,t,0,1,Ou,null,r),h=0,c=0,d,u,f,g,_,m,p,w;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ca(i)),a&&(w=[n,i],a(w,e,t),n=w[0],i=w[1]),u=n.match(Lo)||[];d=Lo.exec(i);)g=d[0],_=i.substring(h,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[c++]&&(m=parseFloat(u[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Dr(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},h=Lo.lastIndex);return l.c=h<i.length?i.substring(h,i.length):"",l.fp=s,(iu.test(i)||p)&&(l.e=0),this._pt=l,l},$l=function(e,t,n,i,r,a,s,l,h,c){at(i)&&(i=i(r||0,e,a));var d=e[t],u=n!=="get"?n:at(d)?h?e[t.indexOf("set")||!at(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():d,f=at(d)?h?uw:Fu:Zl,g;if(xt(i)&&(~i.indexOf("random(")&&(i=Ca(i)),i.charAt(1)==="="&&(g=Dr(u,i)+(Pt(u)||0),(g||g===0)&&(i=g))),!c||u!==i||fl)return!isNaN(u*i)&&i!==""?(g=new Kt(this._pt,e,t,+u||0,i-(u||0),typeof d=="boolean"?pw:Uu,0,f),h&&(g.fp=h),s&&g.modifier(s,this,e),this._pt=g):(!d&&!(t in e)&&ql(t,i),ow.call(this,e,t,u,i,f,l||nn.stringFilter,h))},lw=function(e,t,n,i,r){if(at(e)&&(e=wa(e,r,t,n,i)),!On(e)||e.style&&e.nodeType||kt(e)||tu(e))return xt(e)?wa(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=wa(e[s],r,t,n,i);return a},Du=function(e,t,n,i,r,a){var s,l,h,c;if(en[e]&&(s=new en[e]).init(r,s.rawVars?t[e]:lw(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Kt(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==Lr))for(h=n._ptLookup[n._targets.indexOf(r)],c=s._props.length;c--;)h[s._props[c]]=l;return s},gi,fl,Jl=function o(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,h=i.onUpdate,c=i.onUpdateParams,d=i.callbackScope,u=i.runBackwards,f=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=e._dur,p=e._startAt,w=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:w,x=e._overwrite==="auto"&&!Vl,T=e.timeline,C,L,b,M,B,O,I,k,F,j,Y,G,Q;if(T&&(!g||!r)&&(r="none"),e._ease=Ki(r,Xr.ease),e._yEase=f?Lu(Ki(f===!0?r:f,Xr.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!T&&!!i.runBackwards,!T||g&&!i.stagger){if(k=w[0]?qi(w[0]).harness:0,G=k&&i[k.prop],C=Es(i,Xl),p&&(p._zTime<0&&p.progress(1),t<0&&u&&s&&!_?p.render(-1,!0):p.revert(u&&m?ms:F0),p._lazy=0),a){if(Ai(e._startAt=pt.set(w,vn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&qt(l),startAt:null,delay:0,onUpdate:h,onUpdateParams:c,callbackScope:d,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dt||!s&&!_)&&e._startAt.revert(ms),s&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!p){if(t&&(s=!1),b=vn({overwrite:!1,data:"isFromStart",lazy:s&&!p&&qt(l),immediateRender:s,stagger:0,parent:v},C),G&&(b[k.prop]=G),Ai(e._startAt=pt.set(w,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dt?e._startAt.revert(ms):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,Ke,Ke);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&qt(l)||l&&!m,L=0;L<w.length;L++){if(B=w[L],I=B._gsap||Yl(w)[L]._gsap,e._ptLookup[L]=j={},ol[I.id]&&bi.length&&Ts(),Y=y===w?L:y.indexOf(B),k&&(F=new k).init(B,G||C,e,Y,y)!==!1&&(e._pt=M=new Kt(e._pt,B,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(Z){j[Z]=M}),F.priority&&(O=1)),!k||G)for(b in C)en[b]&&(F=Du(b,C,e,Y,B,y))?F.priority&&(O=1):j[b]=M=$l.call(e,B,b,"get",C[b],Y,y,0,i.stringFilter);e._op&&e._op[L]&&e.kill(B,e._op[L]),x&&e._pt&&(gi=e,tt.killTweensOf(B,j,e.globalTime(t)),Q=!e.parent,gi=0),e._pt&&l&&(ol[I.id]=1)}O&&Bu(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!Q,g&&t<=0&&T.render(mn,!0,!0)},hw=function(e,t,n,i,r,a,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,c,d,u;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,u=e._targets.length;u--;){if(h=d[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return fl=1,e.vars[t]="+=0",Jl(e,s),fl=0,1;l.push(h)}for(u=l.length;u--;)c=l[u],h=c._pt||c,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,c.e&&(c.e=ct(n)+Pt(c.e)),c.b&&(c.b=h.s+Pt(c.b))},cw=function(e,t){var n=e[0]?qi(e[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return t;r=er({},t);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},dw=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(kt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,h){return s.push({t:h/(t.length-1)*100,v:l,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},wa=function(e,t,n,i,r){return at(e)?e.call(t,n,i,r):xt(e)&&~e.indexOf("random(")?Ca(e):e},ku=Kl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Nu={};Xt(ku+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Nu[o]=1});var pt=function(o){Qd(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:ya(i))||this;var l=s.vars,h=l.duration,c=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,w=i.parent||tt,v=(kt(n)||tu(n)?ti(n[0]):"length"in i)?[n]:gn(n),y,x,T,C,L,b,M,B;if(s._targets=v.length?Yl(v):As("GSAP target "+n+" not found. https://greensock.com",!nn.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=f,g||u||ds(h)||ds(c)){if(i=s.vars,y=s.timeline=new Gt({data:"nested",defaults:_||{},targets:w&&w.data==="nested"?w.vars.targets:v}),y.kill(),y.parent=y._dp=Xn(s),y._start=0,u||ds(h)||ds(c)){if(C=v.length,M=u&&vu(u),On(u))for(L in u)~ku.indexOf(L)&&(B||(B={}),B[L]=u[L]);for(x=0;x<C;x++)T=Es(i,Nu),T.stagger=0,p&&(T.yoyoEase=p),B&&er(T,B),b=v[x],T.duration=+wa(h,Xn(s),x,b,v),T.delay=(+wa(c,Xn(s),x,b,v)||0)-s._delay,!u&&C===1&&T.delay&&(s._delay=c=T.delay,s._start+=c,T.delay=0),y.to(b,T,M?M(x,b,v):0),y._ease=Oe.none;y.duration()?h=c=0:s.timeline=0}else if(g){ya(vn(y.vars.defaults,{ease:"none"})),y._ease=Ki(g.ease||i.ease||"none");var O=0,I,k,F;if(kt(g))g.forEach(function(j){return y.to(v,j,">")}),y.duration();else{T={};for(L in g)L==="ease"||L==="easeEach"||dw(L,g[L],T,g.easeEach);for(L in T)for(I=T[L].sort(function(j,Y){return j.t-Y.t}),O=0,x=0;x<I.length;x++)k=I[x],F={ease:k.e,duration:(k.t-(x?I[x-1].t:0))/100*h},F[L]=k.v,y.to(v,F,O),O+=F.duration;y.duration()<h&&y.to({},{duration:h-y.duration()})}}h||s.duration(h=y.duration())}else s.timeline=0;return f===!0&&!Vl&&(gi=Xn(s),tt.killTweensOf(v),gi=0),kn(w,Xn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(d||!h&&!g&&s._start===St(w._time)&&qt(d)&&V0(Xn(s))&&w.data!=="nested")&&(s._tTime=-Ke,s.render(Math.max(0,-c)||0)),m&&mu(Xn(s),m),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,l=this._tDur,h=this._dur,c=i<0,d=i>l-Ke&&!c?l:i<Ke?0:i,u,f,g,_,m,p,w,v,y;if(!h)W0(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(u=d,v=this.timeline,this._repeat){if(_=h+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+i,r,a);if(u=St(d%_),d===l?(g=this._repeat,u=h):(g=~~(d/_),g&&g===d/_&&(u=h,g--),u>h&&(u=h)),p=this._yoyo&&g&1,p&&(y=this._yEase,u=h-u),m=Kr(this._tTime,_),u===s&&!a&&this._initted)return this._tTime=d,this;g!==m&&(v&&this._yEase&&Ru(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=a=1,this.render(St(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(gu(this,c?i:u,a,r,d))return this._tTime=0,this;if(s!==this._time)return this;if(h!==this._dur)return this.render(i,r,a)}if(this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(y||this._ease)(u/h),this._from&&(this.ratio=w=1-w),u&&!s&&!r&&!g&&(_n(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(w,f.d),f=f._next;v&&v.render(i<0?i:!u&&p?-Ke:v._dur*v._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(c&&ll(this,i,r,a),_n(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&_n(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&ll(this,i,!0,!0),(i||!h)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ai(this,1),!r&&!(c&&!s)&&(d||s||p)&&(_n(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,s){La||tn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Jl(this,l),h=this._ease(l/this._dur),hw(this,i,r,a,s,h,l)?this.resetTo(i,r,a,s):(Gs(this,0),this.parent||fu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?pa(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,gi&&gi.vars.overwrite!==!0)._first||pa(this),this.parent&&a!==this.timeline.totalDuration()&&Yr(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?gn(i):s,h=this._ptLookup,c=this._pt,d,u,f,g,_,m,p;if((!r||r==="all")&&z0(s,l))return r==="all"&&(this._pt=0),pa(this);for(d=this._op=this._op||[],r!=="all"&&(xt(r)&&(_={},Xt(r,function(w){return _[w]=1}),r=_),r=cw(s,r)),p=s.length;p--;)if(~l.indexOf(s[p])){u=h[p],r==="all"?(d[p]=r,g=u,f={}):(f=d[p]=d[p]||{},g=r);for(_ in g)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Hs(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&c&&pa(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return va(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return va(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return tt.killTweensOf(i,r,a)},e}(Ra);vn(pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xt("staggerTo,staggerFrom,staggerFromTo",function(o){pt[o]=function(){var e=new Gt,t=cl.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Zl=function(e,t,n){return e[t]=n},Fu=function(e,t,n){return e[t](n)},uw=function(e,t,n,i){return e[t](i.fp,n)},fw=function(e,t,n){return e.setAttribute(t,n)},Ql=function(e,t){return at(e[t])?Fu:Gl(e[t])&&e.setAttribute?fw:Zl},Uu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},pw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ou=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},eh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},mw=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},gw=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Hs(this,t,"_pt"):t.dep||(n=1),t=i;return!n},_w=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Bu=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Kt=function(){function o(t,n,i,r,a,s,l,h,c){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||Uu,this.d=l||this,this.set=h||Zl,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=_w,this.m=n,this.mt=r,this.tween=i},o}();Xt(Kl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Xl[o]=1});rn.TweenMax=rn.TweenLite=pt;rn.TimelineLite=rn.TimelineMax=Gt;tt=new Gt({sortChildren:!1,defaults:Xr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});nn.stringFilter=Cu;var Yi=[],_s={},yw=[],Zc=0,vw=0,ko=function(e){return(_s[e]||yw).map(function(t){return t()})},pl=function(){var e=Date.now(),t=[];e-Zc>2&&(ko("matchMediaInit"),Yi.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,h;for(s in i)a=hn.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,h=1);h&&(n.revert(),l&&t.push(n))}),ko("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Zc=e,ko("matchMedia"))},zu=function(){function o(t,n){this.selector=n&&dl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=vw++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){at(n)&&(r=i,i=n,n=at);var a=this,s=function(){var h=rt,c=a.selector,d;return h&&h!==a&&h.data.push(a),r&&(a.selector=dl(r)),rt=a,d=i.apply(a,arguments),at(d)&&a._r.push(d),rt=h,a.selector=c,a.isReverted=!1,d};return a.last=s,n===at?s(a):n?a[n]=s:s},e.ignore=function(n){var i=rt;rt=null,n(this),rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof pt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,h){return h.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof pt)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var s=Yi.length;s--;)Yi[s].id===this.id&&Yi.splice(s,1)},e.revert=function(n){this.kill(n||{})},o}(),ww=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){On(n)||(n={matches:n});var a=new zu(0,r||this.scope),s=a.conditions={},l,h,c;rt&&!a.selector&&(a.selector=rt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(h in n)h==="all"?c=1:(l=hn.matchMedia(n[h]),l&&(Yi.indexOf(a)<0&&Yi.push(a),(s[h]=l.matches)&&(c=1),l.addListener?l.addListener(pl):l.addEventListener("change",pl)));return c&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Ls={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Au(i)})},timeline:function(e){return new Gt(e)},getTweensOf:function(e,t){return tt.getTweensOf(e,t)},getProperty:function(e,t,n,i){xt(e)&&(e=gn(e)[0]);var r=qi(e||{}).get,a=n?uu:du;return n==="native"&&(n=""),e&&(t?a((en[t]&&en[t].get||r)(e,t,n,i)):function(s,l,h){return a((en[s]&&en[s].get||r)(e,s,l,h))})},quickSetter:function(e,t,n){if(e=gn(e),e.length>1){var i=e.map(function(c){return Yt.quickSetter(c,t,n)}),r=i.length;return function(c){for(var d=r;d--;)i[d](c)}}e=e[0]||{};var a=en[t],s=qi(e),l=s.harness&&(s.harness.aliases||{})[t]||t,h=a?function(c){var d=new a;Lr._pt=0,d.init(e,n?c+n:c,Lr,0,[e]),d.render(1,d),Lr._pt&&eh(1,Lr)}:s.set(e,l);return a?h:function(c){return h(e,l,n?c+n:c,s,1)}},quickTo:function(e,t,n){var i,r=Yt.to(e,er((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,h,c){return r.resetTo(t,l,h,c)};return a.tween=r,a},isTweening:function(e){return tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ki(e.ease,Xr.ease)),Xc(Xr,e||{})},config:function(e){return Xc(nn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!en[s]&&!rn[s]&&As(t+" effect requires "+s+" plugin.")}),Ro[t]=function(s,l,h){return n(gn(s),vn(l||{},r),h)},a&&(Gt.prototype[t]=function(s,l,h){return this.add(Ro[t](s,On(l)?l:(h=l)&&{},this),h)})},registerEase:function(e,t){Oe[e]=Ki(t)},parseEase:function(e,t){return arguments.length?Ki(e,t):Oe},getById:function(e){return tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Gt(e),i,r;for(n.smoothChildTiming=qt(e.smoothChildTiming),tt.remove(n),n._dp=0,n._time=n._tTime=tt._time,i=tt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof pt&&i.vars.onComplete===i._targets[0]))&&kn(n,i,i._start-i._delay),i=r;return kn(tt,n,0),n},context:function(e,t){return e?new zu(e,t):rt},matchMedia:function(e){return new ww(e)},matchMediaRefresh:function(){return Yi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||pl()},addEventListener:function(e,t){var n=_s[e]||(_s[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_s[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Z0,wrapYoyo:Q0,distribute:vu,random:bu,snap:wu,normalize:J0,getUnit:Pt,clamp:X0,splitColor:Tu,toArray:gn,selector:dl,mapRange:Su,pipe:Y0,unitize:$0,interpolate:ew,shuffle:yu},install:su,effects:Ro,ticker:tn,updateRoot:Gt.updateRoot,plugins:en,globalTimeline:tt,core:{PropTween:Kt,globals:ou,Tween:pt,Timeline:Gt,Animation:Ra,getCache:qi,_removeLinkedListItem:Hs,reverting:function(){return Dt},context:function(e){return e&&rt&&(rt.data.push(e),e._ctx=rt),rt},suppressOverwrites:function(e){return Vl=e}}};Xt("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Ls[o]=pt[o]});tn.add(Gt.updateRoot);Lr=Ls.to({},{duration:0});var bw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},xw=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=bw(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},No=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,h;if(xt(r)&&(l={},Xt(r,function(c){return l[c]=1}),r=l),t){l={};for(h in r)l[h]=t(r[h]);r=l}xw(s,r)}}}},Yt=Ls.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Dt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},No("roundProps",ul),No("modifiers"),No("snap",wu))||Ls;pt.version=Gt.version=Yt.version="3.12.2";au=1;Wl()&&$r();Oe.Power0;Oe.Power1;Oe.Power2;Oe.Power3;Oe.Power4;Oe.Linear;Oe.Quad;Oe.Cubic;Oe.Quart;Oe.Quint;Oe.Strong;Oe.Elastic;Oe.Back;Oe.SteppedEase;Oe.Bounce;Oe.Sine;Oe.Expo;Oe.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Qc,_i,kr,th,Wi,ed,nh,Sw=function(){return typeof window<"u"},ni={},zi=180/Math.PI,Nr=Math.PI/180,xr=Math.atan2,td=1e8,ih=/([A-Z])/g,Mw=/(left|right|width|margin|padding|x)/i,Aw=/[\s,\(]\S/,Nn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ml=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Tw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ew=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Cw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Hu=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Vu=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Lw=function(e,t,n){return e.style[t]=n},Rw=function(e,t,n){return e.style.setProperty(t,n)},Pw=function(e,t,n){return e._gsap[t]=n},Iw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Dw=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},kw=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},nt="transform",Cn=nt+"Origin",Nw=function o(e,t){var n=this,i=this.target,r=i.style;if(e in ni&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Nn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Yn(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Yn(i,e);else return Nn.transform.split(",").forEach(function(a){return o.call(n,a,t)});if(this.props.indexOf(nt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Cn,t,"")),e=nt}(r||t)&&this.props.push(e,t,r[e])},Gu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Fw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(ih,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=nh(),(!r||!r.isStart)&&!n[nt]&&(Gu(n),i.uncache=1)}},Wu=function(e,t){var n={target:e,props:[],revert:Fw,save:Nw};return e._gsap||Yt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},ju,gl=function(e,t){var n=_i.createElementNS?_i.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_i.createElement(e);return n.style?n:_i.createElement(e)},Un=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ih,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Jr(t)||t,1)||""},nd="O,Moz,ms,Ms,Webkit".split(","),Jr=function(e,t,n){var i=t||Wi,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(nd[a]+e in r););return a<0?null:(a===3?"ms":a>=0?nd[a]:"")+e},_l=function(){Sw()&&window.document&&(Qc=window,_i=Qc.document,kr=_i.documentElement,Wi=gl("div")||{style:{}},gl("div"),nt=Jr(nt),Cn=nt+"Origin",Wi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ju=!!Jr("perspective"),nh=Yt.core.reverting,th=1)},Fo=function o(e){var t=gl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(kr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),kr.removeChild(t),this.style.cssText=r,a},id=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},qu=function(e){var t;try{t=e.getBBox()}catch{t=Fo.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Fo||(t=Fo.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+id(e,["x","cx","x1"])||0,y:+id(e,["y","cy","y1"])||0,width:0,height:0}:t},Xu=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&qu(e))},Pa=function(e,t){if(t){var n=e.style;t in ni&&t!==Cn&&(t=nt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(ih,"-$1").toLowerCase())):n.removeAttribute(t)}},yi=function(e,t,n,i,r,a){var s=new Kt(e._pt,t,n,0,1,a?Vu:Hu);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},rd={deg:1,rad:1,turn:1},Uw={grid:1,flex:1},Ti=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=Wi.style,l=Mw.test(t),h=e.tagName.toLowerCase()==="svg",c=(h?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",g,_,m,p;return i===a||!r||rd[i]||rd[a]?r:(a!=="px"&&!u&&(r=o(e,t,n,"px")),p=e.getCTM&&Xu(e),(f||a==="%")&&(ni[t]||~t.indexOf("adius"))?(g=p?e.getBBox()[l?"width":"height"]:e[c],ct(f?r/g*d:r/100*g)):(s[l?"width":"height"]=d+(u?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!h?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===_i||!_.appendChild)&&(_=_i.body),m=_._gsap,m&&f&&m.width&&l&&m.time===tn.time&&!m.uncache?ct(r/m.width*d):((f||a==="%")&&!Uw[Un(_,"display")]&&(s.position=Un(e,"position")),_===e&&(s.position="static"),_.appendChild(Wi),g=Wi[c],_.removeChild(Wi),s.position="absolute",l&&f&&(m=qi(_),m.time=tn.time,m.width=_[c]),ct(u?g*r/d:g&&r?d/g*r:0))))},Yn=function(e,t,n,i){var r;return th||_l(),t in Nn&&t!=="transform"&&(t=Nn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ni[t]&&t!=="transform"?(r=Da(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ps(Un(e,Cn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Rs[t]&&Rs[t](e,t,n)||Un(e,t)||hu(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ti(e,t,r,n)+n:r},Ow=function(e,t,n,i){if(!n||n==="none"){var r=Jr(t,e,1),a=r&&Un(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Un(e,"borderTopColor"))}var s=new Kt(this._pt,e.style,t,0,1,Ou),l=0,h=0,c,d,u,f,g,_,m,p,w,v,y,x;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Un(e,t)||i,e.style[t]=n),c=[n,i],Cu(c),n=c[0],i=c[1],u=n.match(Cr)||[],x=i.match(Cr)||[],x.length){for(;d=Cr.exec(i);)m=d[0],w=i.substring(l,d.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),m!==(_=u[h++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),m.charAt(1)==="="&&(m=Dr(f,m)+y),p=parseFloat(m),v=m.substr((p+"").length),l=Cr.lastIndex-v.length,v||(v=v||nn.units[t]||y,l===i.length&&(i+=v,s.e+=v)),y!==v&&(f=Ti(e,t,_,v)||0),s._pt={_next:s._pt,p:w||h===1?w:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?Vu:Hu;return iu.test(i)&&(s.e=0),this._pt=s,s},ad={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Bw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ad[n]||n,t[1]=ad[i]||i,t.join(" ")},zw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,l,h;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),h=r.length;--h>-1;)s=r[h],ni[s]&&(l=1,s=s==="transformOrigin"?Cn:nt),Pa(n,s);l&&(Pa(n,nt),a&&(a.svg&&n.removeAttribute("transform"),Da(n,1),a.uncache=1,Gu(i)))}},Rs={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Kt(e._pt,t,n,0,0,zw);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Ia=[1,0,0,1,0,0],Ku={},Yu=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},sd=function(e){var t=Un(e,nt);return Yu(t)?Ia:t.substr(7).match(nu).map(ct)},rh=function(e,t){var n=e._gsap||qi(e),i=e.style,r=sd(e),a,s,l,h;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ia:r):(r===Ia&&!e.offsetParent&&e!==kr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(h=1,s=e.nextElementSibling,kr.appendChild(e)),r=sd(e),l?i.display=l:Pa(e,"display"),h&&(s?a.insertBefore(e,s):a?a.appendChild(e):kr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},yl=function(e,t,n,i,r,a){var s=e._gsap,l=r||rh(e,!0),h=s.xOrigin||0,c=s.yOrigin||0,d=s.xOffset||0,u=s.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],w=l[5],v=t.split(" "),y=parseFloat(v[0])||0,x=parseFloat(v[1])||0,T,C,L,b;n?l!==Ia&&(C=f*m-g*_)&&(L=y*(m/C)+x*(-_/C)+(_*w-m*p)/C,b=y*(-g/C)+x*(f/C)-(f*w-g*p)/C,y=L,x=b):(T=qu(e),y=T.x+(~v[0].indexOf("%")?y/100*T.width:y),x=T.y+(~(v[1]||v[0]).indexOf("%")?x/100*T.height:x)),i||i!==!1&&s.smooth?(p=y-h,w=x-c,s.xOffset=d+(p*f+w*_)-p,s.yOffset=u+(p*g+w*m)-w):s.xOffset=s.yOffset=0,s.xOrigin=y,s.yOrigin=x,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[Cn]="0px 0px",a&&(yi(a,s,"xOrigin",h,y),yi(a,s,"yOrigin",c,x),yi(a,s,"xOffset",d,s.xOffset),yi(a,s,"yOffset",u,s.yOffset)),e.setAttribute("data-svg-origin",y+" "+x)},Da=function(e,t){var n=e._gsap||new Iu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(e),h=Un(e,Cn)||"0",c,d,u,f,g,_,m,p,w,v,y,x,T,C,L,b,M,B,O,I,k,F,j,Y,G,Q,Z,ge,ee,V,K,re;return c=d=u=_=m=p=w=v=y=0,f=g=1,n.svg=!!(e.getCTM&&Xu(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[nt]!=="none"?l[nt]:"")),i.scale=i.rotate=i.translate="none"),C=rh(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),h=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),yl(e,Y||h,!!Y||n.originIsAbsolute,n.smooth!==!1,C)),x=n.xOrigin||0,T=n.yOrigin||0,C!==Ia&&(B=C[0],O=C[1],I=C[2],k=C[3],c=F=C[4],d=j=C[5],C.length===6?(f=Math.sqrt(B*B+O*O),g=Math.sqrt(k*k+I*I),_=B||O?xr(O,B)*zi:0,w=I||k?xr(I,k)*zi+_:0,w&&(g*=Math.abs(Math.cos(w*Nr))),n.svg&&(c-=x-(x*B+T*I),d-=T-(x*O+T*k))):(re=C[6],V=C[7],Z=C[8],ge=C[9],ee=C[10],K=C[11],c=C[12],d=C[13],u=C[14],L=xr(re,ee),m=L*zi,L&&(b=Math.cos(-L),M=Math.sin(-L),Y=F*b+Z*M,G=j*b+ge*M,Q=re*b+ee*M,Z=F*-M+Z*b,ge=j*-M+ge*b,ee=re*-M+ee*b,K=V*-M+K*b,F=Y,j=G,re=Q),L=xr(-I,ee),p=L*zi,L&&(b=Math.cos(-L),M=Math.sin(-L),Y=B*b-Z*M,G=O*b-ge*M,Q=I*b-ee*M,K=k*M+K*b,B=Y,O=G,I=Q),L=xr(O,B),_=L*zi,L&&(b=Math.cos(L),M=Math.sin(L),Y=B*b+O*M,G=F*b+j*M,O=O*b-B*M,j=j*b-F*M,B=Y,F=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=ct(Math.sqrt(B*B+O*O+I*I)),g=ct(Math.sqrt(j*j+re*re)),L=xr(F,j),w=Math.abs(L)>2e-4?L*zi:0,y=K?1/(K<0?-K:K):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Yu(Un(e,nt)),Y&&e.setAttribute("transform",Y))),Math.abs(w)>90&&Math.abs(w)<270&&(r?(f*=-1,w+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=ct(f),n.scaleY=ct(g),n.rotation=ct(_)+s,n.rotationX=ct(m)+s,n.rotationY=ct(p)+s,n.skewX=w+s,n.skewY=v+s,n.transformPerspective=y+a,(n.zOrigin=parseFloat(h.split(" ")[2])||0)&&(i[Cn]=Ps(h)),n.xOffset=n.yOffset=0,n.force3D=nn.force3D,n.renderTransform=n.svg?Vw:ju?$u:Hw,n.uncache=0,n},Ps=function(e){return(e=e.split(" "))[0]+" "+e[1]},Uo=function(e,t,n){var i=Pt(t);return ct(parseFloat(t)+parseFloat(Ti(e,"x",n+"px",i)))+i},Hw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$u(e,t)},Fi="0deg",ha="0px",Ui=") ",$u=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,h=n.rotation,c=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,w=n.target,v=n.zOrigin,y="",x=p==="auto"&&e&&e!==1||p===!0;if(v&&(d!==Fi||c!==Fi)){var T=parseFloat(c)*Nr,C=Math.sin(T),L=Math.cos(T),b;T=parseFloat(d)*Nr,b=Math.cos(T),a=Uo(w,a,C*b*-v),s=Uo(w,s,-Math.sin(T)*-v),l=Uo(w,l,L*b*-v+v)}m!==ha&&(y+="perspective("+m+Ui),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(x||a!==ha||s!==ha||l!==ha)&&(y+=l!==ha||x?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+Ui),h!==Fi&&(y+="rotate("+h+Ui),c!==Fi&&(y+="rotateY("+c+Ui),d!==Fi&&(y+="rotateX("+d+Ui),(u!==Fi||f!==Fi)&&(y+="skew("+u+", "+f+Ui),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ui),w.style[nt]=y||"translate(0, 0)"},Vw=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,h=n.skewX,c=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,w=n.forceCSS,v=parseFloat(a),y=parseFloat(s),x,T,C,L,b;l=parseFloat(l),h=parseFloat(h),c=parseFloat(c),c&&(c=parseFloat(c),h+=c,l+=c),l||h?(l*=Nr,h*=Nr,x=Math.cos(l)*d,T=Math.sin(l)*d,C=Math.sin(l-h)*-u,L=Math.cos(l-h)*u,h&&(c*=Nr,b=Math.tan(h-c),b=Math.sqrt(1+b*b),C*=b,L*=b,c&&(b=Math.tan(c),b=Math.sqrt(1+b*b),x*=b,T*=b)),x=ct(x),T=ct(T),C=ct(C),L=ct(L)):(x=d,L=u,T=C=0),(v&&!~(a+"").indexOf("px")||y&&!~(s+"").indexOf("px"))&&(v=Ti(f,"x",a,"px"),y=Ti(f,"y",s,"px")),(g||_||m||p)&&(v=ct(v+g-(g*x+_*C)+m),y=ct(y+_-(g*T+_*L)+p)),(i||r)&&(b=f.getBBox(),v=ct(v+i/100*b.width),y=ct(y+r/100*b.height)),b="matrix("+x+","+T+","+C+","+L+","+v+","+y+")",f.setAttribute("transform",b),w&&(f.style[nt]=b)},Gw=function(e,t,n,i,r){var a=360,s=xt(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?zi:1),h=l-i,c=i+h+"deg",d,u;return s&&(d=r.split("_")[1],d==="short"&&(h%=a,h!==h%(a/2)&&(h+=h<0?a:-a)),d==="cw"&&h<0?h=(h+a*td)%a-~~(h/a)*a:d==="ccw"&&h>0&&(h=(h-a*td)%a-~~(h/a)*a)),e._pt=u=new Kt(e._pt,t,n,i,h,Tw),u.e=c,u.u="deg",e._props.push(n),u},od=function(e,t){for(var n in t)e[n]=t[n];return e},Ww=function(e,t,n){var i=od({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,h,c,d,u,f,g;i.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),a[nt]=t,s=Da(n,1),Pa(n,nt),n.setAttribute("transform",h)):(h=getComputedStyle(n)[nt],a[nt]=t,s=Da(n,1),a[nt]=h);for(l in ni)h=i[l],c=s[l],h!==c&&r.indexOf(l)<0&&(f=Pt(h),g=Pt(c),d=f!==g?Ti(n,l,h,g):parseFloat(h),u=parseFloat(c),e._pt=new Kt(e._pt,s,l,d,u-d,ml),e._pt.u=g||0,e._props.push(l));od(s,i)};Xt("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});Rs[e>1?"border"+o:o]=function(s,l,h,c,d){var u,f;if(arguments.length<4)return u=a.map(function(g){return Yn(s,g,h)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(c+"").split(" "),f={},a.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),s.init(l,f,d)}});var Ju={name:"css",register:_l,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,l=n.vars.startAt,h,c,d,u,f,g,_,m,p,w,v,y,x,T,C,L;th||_l(),this.styles=this.styles||Wu(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(en[_]&&Du(_,t,n,i,e,r)))){if(f=typeof c,g=Rs[_],f==="function"&&(c=c.call(n,i,e,r),f=typeof c),f==="string"&&~c.indexOf("random(")&&(c=Ca(c)),g)g(this,e,_,c,n)&&(C=1);else if(_.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",xi.lastIndex=0,xi.test(h)||(m=Pt(h),p=Pt(c)),p?m!==p&&(h=Ti(e,_,h,p)+p):m&&(c+=m),this.add(s,"setProperty",h,c,i,r,0,0,_),a.push(_),L.push(_,0,s[_]);else if(f!=="undefined"){if(l&&_ in l?(h=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],xt(h)&&~h.indexOf("random(")&&(h=Ca(h)),Pt(h+"")||(h+=nn.units[_]||Pt(Yn(e,_))||""),(h+"").charAt(1)==="="&&(h=Yn(e,_))):h=Yn(e,_),u=parseFloat(h),w=f==="string"&&c.charAt(1)==="="&&c.substr(0,2),w&&(c=c.substr(2)),d=parseFloat(c),_ in Nn&&(_==="autoAlpha"&&(u===1&&Yn(e,"visibility")==="hidden"&&d&&(u=0),L.push("visibility",0,s.visibility),yi(this,s,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Nn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in ni,v){if(this.styles.save(_),y||(x=e._gsap,x.renderTransform&&!t.parseTransform||Da(e,t.parseTransform),T=t.smoothOrigin!==!1&&x.smooth,y=this._pt=new Kt(this._pt,s,nt,0,1,x.renderTransform,x,0,-1),y.dep=1),_==="scale")this._pt=new Kt(this._pt,x,"scaleY",x.scaleY,(w?Dr(x.scaleY,w+d):d)-x.scaleY||0,ml),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Cn,0,s[Cn]),c=Bw(c),x.svg?yl(e,c,0,T,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==x.zOrigin&&yi(this,x,"zOrigin",x.zOrigin,p),yi(this,s,_,Ps(h),Ps(c)));continue}else if(_==="svgOrigin"){yl(e,c,1,T,0,this);continue}else if(_ in Ku){Gw(this,x,_,u,w?Dr(u,w+c):c);continue}else if(_==="smoothOrigin"){yi(this,x,"smooth",x.smooth,c);continue}else if(_==="force3D"){x[_]=c;continue}else if(_==="transform"){Ww(this,c,e);continue}}else _ in s||(_=Jr(_)||_);if(v||(d||d===0)&&(u||u===0)&&!Aw.test(c)&&_ in s)m=(h+"").substr((u+"").length),d||(d=0),p=Pt(c)||(_ in nn.units?nn.units[_]:m),m!==p&&(u=Ti(e,_,h,p)),this._pt=new Kt(this._pt,v?x:s,_,u,(w?Dr(u,w+d):d)-u,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Cw:ml),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=h,this._pt.r=Ew);else if(_ in s)Ow.call(this,e,_,h,w?w+c:c);else if(_ in e)this.add(e,_,h||e[_],w?w+c:c,i,r);else if(_!=="parseTransform"){ql(_,c);continue}v||(_ in s?L.push(_,0,s[_]):L.push(_,1,h||e[_])),a.push(_)}}C&&Bu(this)},render:function(e,t){if(t.tween._time||!nh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Yn,aliases:Nn,getSetter:function(e,t,n){var i=Nn[t];return i&&i.indexOf(",")<0&&(t=i),t in ni&&t!==Cn&&(e._gsap.x||Yn(e,"x"))?n&&ed===n?t==="scale"?Iw:Pw:(ed=n||{})&&(t==="scale"?Dw:kw):e.style&&!Gl(e.style[t])?Lw:~t.indexOf("-")?Rw:Ql(e,t)},core:{_removeProperty:Pa,_getMatrix:rh}};Yt.utils.checkPrefix=Jr;Yt.core.getStyleSaver=Wu;(function(o,e,t,n){var i=Xt(o+","+e+","+t,function(r){ni[r]=1});Xt(e,function(r){nn.units[r]="deg",Ku[r]=1}),Nn[i[13]]=o+","+e,Xt(n,function(r){var a=r.split(":");Nn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){nn.units[o]="px"});Yt.registerPlugin(Ju);var ah=Yt.registerPlugin(Ju)||Yt;ah.core.Tween;class jw{constructor(){this.experience=new Ln,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.setInstance(),this.setControls()}setInstance(){this.instance=new Rt(35,this.sizes.width/this.sizes.height,.1,100),this.instance.position.set(14,0,-14),this.scene.add(this.instance),this.cameraAnimation()}cameraAnimation(){ah.to(this.instance.position,{duration:5,x:0,y:17.5,z:13,onComplete:()=>this.setOrbitControlProperties()})}setControls(){this.controls=new R0(this.instance,this.canvas)}setOrbitControlProperties(){this.controls.mouseButtons={LEFT:Kn.ROTATE,MIDDLE:Kn.DOLLY,RIGHT:Kn.PAN},this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.zoomSpeed=1.12,this.limitViewAngle(30,50),this.controls.minAzimuthAngle=-Math.PI/180*45,this.controls.maxAzimuthAngle=Math.PI/180*45,this.controls.maxDistance=22,this.controls.minDistance=4}limitViewAngle(e,t){this.controls.minPolarAngle=Math.PI/180*e,this.controls.maxPolarAngle=Math.PI/180*t}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){this.controls.enabled&&(this.controls.update(),this.controls.getDistance()<8&&this.limitViewAngle(15,75),this.controls.getDistance()<8&&this.controls.getDistance()<13&&this.limitViewAngle(30,60),this.controls.getDistance()>13&&this.controls.getDistance()<18&&this.limitViewAngle(30,50))}}class qw{constructor(){this.experience=new Ln,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setInstance()}setInstance(){this.instance=new Vd({canvas:this.canvas,antialias:!0}),this.instance.useLegacyLights=!0,this.instance.toneMapping=xd,this.instance.toneMappingExposure=1.5,this.instance.shadowMap.enabled=!0,this.instance.setClearColor(5231836),this.instance.shadowMap.type=vd,this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio,2))}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio,2))}update(){this.instance.render(this.scene,this.camera.instance)}}class Xw{constructor(){this.experience=new Ln,this.scene=this.experience.scene,this.resources=this.experience.resources,this.debug=this.experience.debug,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("environment")),this.setSunLight()}setSunLight(){this.ambient=new Jd("#ffffff",1),this.sunLight=new Ul("#ffffff",4),this.sunLight.castShadow=!0,this.sunLight.shadow.camera.top=15,this.sunLight.shadow.camera.left=-15,this.sunLight.shadow.camera.right=15,this.sunLight.shadow.camera.bottom=-15,this.sunLight.shadow.camera.far=40,this.sunLight.shadow.mapSize.width=4096,this.sunLight.shadow.mapSize.height=4096,this.sunLight.position.set(11,7,4),this.scene.add(this.sunLight,this.ambient),this.debug.active&&this.debugProperties()}debugProperties(){this.debugFolder.add(this.ambient,"intensity").name("ambientIntensity").min(0).max(100).step(.001),this.debugFolder.add(this.sunLight,"intensity").name("sunLightIntensity").min(0).max(100).step(.001),this.debugFolder.add(this.sunLight.position,"x").name("sunLightX").min(-15).max(15).step(.001),this.debugFolder.add(this.sunLight.position,"y").name("sunLightY").min(-12).max(12).step(.001),this.debugFolder.add(this.sunLight.position,"z").name("sunLightZ").min(-12).max(12).step(.001)}}const fi=[{id:0,x:-.9,y:.25,z:1.4,countryName:"Angola",imageSource:"images/persons/1.png",popUpHeading:"Deolinda Rodrigues",flagSource:"images/flags/Flag_of_Angola.png",flag:"Angola",year:"(1939-1967)",textContent:`<p>
      Deolinda Rodrigues was a prominent Angolan nationalist, militant, writer, and translator active in the independence movement against Portuguese colonial rule in Angola. She was born in 1939 and became involved in the anti-colonial struggle at a young age, dedicating her life to the cause. Rodrigues was a charismatic and inspiring leader, known for her passion and commitment to the independence movement.
      </p>
      <br>
      <p>
      As a writer and translator, Rodrigues used her literary skills to spread the message of Angolan independence. Her works, including poems, essays, and speeches, celebrated the struggle for freedom and justice in Angola and inspired others to join the movement. She also translated works by African and other international writers into Portuguese, making these works available to Angolan readers and broadening their cultural horizons.
      </p>
      <br>
      <p>
      Rodrigues was also a militant and an active participant in the armed struggle against Portuguese colonial rule. She was arrested several times for her political activities and spent time in prison, where she continued to write and translate. Despite the risks, she remained steadfast in her commitment to the cause, inspiring others with her courage and determination.
      </p>
      <br>
      <p>
      Tragically, Rodrigues was killed in 1967 during a military operation against Portuguese forces. Her death was a loss to the independence movement, but her legacy lived on. She is remembered as a courageous and dedicated leader who fought for the freedom and dignity of her people, and her writings continue to inspire others in their quest for justice and equality.
      </p>`},{id:1,x:-.9,y:.25,z:1.4,countryName:"Angola",imageSource:"images/persons/2.png",popUpHeading:"Queen Nzinga",flagSource:"images/flags/Flag_of_Angola.png",flag:"Angola",year:"(1583-1663)",textContent:`<p>
      Queen Nzinga was a powerful 17th century ruler of the Ndongo and Matamba kingdoms in what is now Angola. She is remembered for her strong leadership and resistance against the Portuguese colonists who sought to control her people and their resources.
      </p>
      <br>
      <p>
      Nzinga was born into the ruling class of the Ndongo kingdom in 1583, and her brother was the king at the time. When her brother died, Nzinga was passed over for the throne in favour of her nephew, but she was determined to take control. She formed alliances with other kingdoms and used diplomatic tactics and military force to gain power.
      </p>
      <br>
      <p>
      One of her most famous acts of resistance was in 1622, when she led her army in a battle against the Portuguese. Despite being outnumbered, her army was able to defeat the Portuguese and drive them out of her kingdom. This was a significant victory for Nzinga and her people, and it helped to establish her as a powerful leader.
      </p>
      <br>
      <p>
      Nzinga also used her power to improve the lives of her people. She abolished the slave trade within her kingdom, and she worked to improve the economic and social conditions for her subjects. She also encouraged education and the arts, and she was known for her patronage of poets and musicians.
      </p>
      <br>
      <p>
      Despite her many achievements, Nzinga's kingdom was eventually conquered by the Portuguese, and she was forced to retreat to the kingdom of Matamba. However, she continued to resist the colonisers and maintained her power until her death in 1663.
      </p>
      <br>
      <p>
      Queen Nzinga remains an important figure in African history, as she was one of the few women to have held such a powerful position during this time period. Her legacy lives on in Angola, where she is celebrated as a symbol of resistance and strength.
      </p>
      <br>
      <p>
      It's important to note that some of the historical records of Queen Nzinga's life were written by the Portuguese colonists, who may have had biases. Therefore, the details of her life and her accomplishments may not be entirely accurate. Despite this, her legacy as a powerful leader who fought against colonialism continues to be celebrated today.
      </p>`},{id:2,x:-1.9,y:.25,z:-.7,countryName:"Benin",imageSource:"images/persons/3.png",popUpHeading:"Dahomey Amazons",flagSource:"images/flags/Flag-Benin.png",flag:"Benin",year:"(1600s-1800s)",textContent:`<p>
      The Dahomey Amazons were a group of female warriors who served the kingdom of Dahomey, located in what is now modern-day Benin, in West Africa. They were formed in the 17th century and were known for their bravery and skill in battle. These women were selected from the most physically fit and agile members of Dahomey society and were trained in combat and weapons use. They were equipped with muskets, swords, and clubs, and were considered an elite military force.
      </p>
      <br>
      <p>The Dahomey Amazons were particularly feared by neighbouring kingdoms, who would often surrender without a fight in their presence. They were also an important part of the Dahomey kingdom's political power and were used to enforce the king's will. The Amazons also played a role in Dahomey's slave trade, capturing and selling slaves to European traders.
      </p>
      <br>
      <p>
      Despite their fierce reputation, the Dahomey Amazons were also a symbol of female empowerment in a society that often relegated women to secondary roles. The women of the Amazon society had a unique set of rights and privileges that were not afforded to other women in Dahomey. They were able to marry, own property, and lead independent lives, free from the restrictions imposed on other women.
      </p>
      <br>
      <p>
      The Dahomey Amazons were eventually disbanded in the late 19th century as European colonial powers gained control of West Africa. However, their legacy remains an important part of the cultural heritage of West Africa, and they continue to inspire modern-day women who seek to challenge traditional gender roles and strive for equality. The Dahomey Amazons serve as a powerful reminder of the strength and resilience of women, and the impact they can have on history and society.
      </p>`},{id:3,x:-1.3,y:.23,z:-.2,countryName:"Cameroon",imageSource:"images/persons/4.png",popUpHeading:"Alice Nkom",flagSource:"images/flags/Flag-Cameroon.png",flag:"Cameroon",year:"(1945-present)",textContent:`<p>
    Alice Nkom is a Cameroonian human rights lawyer and LGBTQ rights activist. She is known for her work defending the rights of marginalised communities, particularly those of the LGBTQ community in Cameroon. Nkom has been instrumental in fighting against the criminalization of homosexuality in Cameroon and has helped many LGBTQ individuals in the country to avoid prosecution and discrimination.
    </p>
    <br>
    <p>
    Nkom began her career as a lawyer in the 1970s and quickly realised that the rights of marginalised communities were not being adequately protected. She decided to focus her efforts on defending the rights of these groups, particularly those of the LGBTQ community. Nkom has faced numerous challenges in her work, including death threats and physical assaults, but she remains dedicated to fighting for the rights of marginalised communities.
    </p>
    <br>
    <p>
    In addition to her legal work, Nkom is also an advocate for education and awareness about LGBTQ rights in Cameroon. She has spoken at numerous conferences and events, and has worked with international organisations to promote the rights of LGBTQ individuals in the country.
    </p>
    <br>
    <p>
    Despite the many challenges she has faced, Nkom remains committed to her work. She continues to fight for the rights of marginalised communities in Cameroon and is an inspiration to many people around the world. Nkom's tireless efforts have led to significant improvements in the lives of LGBTQ individuals in Cameroon and her work has been recognized by many organisations, including Amnesty International and the International Gay and Lesbian Human Rights Commission.
    </p>
    <br>
    <p>
    Alice Nkom's work is important because it has helped to change the perception of LGBTQ individuals in Cameroon, and has helped to promote acceptance and tolerance in the country. Her efforts have helped to create a more inclusive society and have helped to protect the rights of marginalised communities. Nkom's work is a reminder of the power of one person to make a difference, and her dedication and commitment to fighting for the rights of marginalised communities should be celebrated and emulated.
    </p>`},{id:4,x:-3.63,y:.25,z:-.96,countryName:"Cape_Verde",imageSource:"images/persons/5.png",popUpHeading:"Cesária Évora",flagSource:"images/flags/Flag-Cabo-Verde.png",flag:"Cape Verde",year:"(1941-2011)",textContent:`<p>
    Cesária Évora, also known as Cize, was a famous singer from Cape Verde. She was born on August 27, 1941, in Mindelo, Cape Verde, and passed away on December 17, 2011, in São Vicente, Cape Verde. Cize is considered one of the most prominent figures of morna, a traditional music genre from Cape Verde that combines elements of Portuguese and African music.
    </p>
    <br>
    <p>
    Cize started her singing career in the 1960s, and her first album was released in 1988. However, it was her fourth album, "Miss Perfumado" (1992), that brought her international recognition. The album was a huge success, and it helped introduce morna to the world. Cize's music is characterised by her smooth and soulful voice, which conveys a mix of sorrow, joy, and hope.
    </p>
    <br>
    <p>
    Throughout her career, Cize performed at numerous international festivals and events, including the Grammy Awards, and the Paris Olympia. She was awarded several honours and awards, including the French Legion of Honor and the World Music Award for World's Best Selling African Female Artist.
    </p>
    <br>
    <p>
    Cize's impact on Cape Verdean and African music is immense. She is considered a national icon and a source of pride for the Cape Verdean people. Her music continues to inspire new generations of musicians and has influenced many other artists around the world.
    </p>
    <br>
    <p>
    In conclusion, Cesária Évora was a talented singer who left a lasting legacy in the world of music. She will always be remembered for her beautiful voice, her soulful music, and her contributions to the preservation of Cape Verdean cultural heritage.
    </p>`},{id:5,x:-.5,y:.264,z:-.4,countryName:"Central_African_Republic",imageSource:"images/persons/6.png",popUpHeading:"Jeanne-Marie Ruth-Rolland",flagSource:"images/flags/Flag-Central-African-Republic.png",flag:"Central African Republic",year:"(1937-1995)",textContent:`<p>
    Jeanne-Marie Ruth-Rolland (née Rolland) was a Central African politician, social worker, and teacher who died on June 4, 1995. She is widely recognised as Africa's first female presidential candidate.
    </p>
    <br>
    <p>
    Ruth-Rolland joined the cabinet as an advisor in 1979 and was later appointed Minister for the Advancement of Women's Status. During this time, she worked extensively with street children and was dubbed "Aunt Ruth," a moniker she retained throughout her life. Ruth-Rolland presided over the Central African Red Cross. She created and led the Central African Republican Party during this time.
    </p>
    <br>
    <p>
    Ruth-Rolland ran in the first multiparty elections in 1992 and was elected deputy for the Bakouma seat. She ran as the leader of the Civic Forum party because her own political party had not yet been legalised at the time of the election. However, the election was called off by the Supreme Court and re-held the following year in 1993, when Ruth-Rolland was free to run under her own Central African Republican Party. Despite President Kolingba's attempts to have the election annulled, she was elected. Later that year, she was appointed Minister of Social Affairs, Women's Status, and National Solidarity.
    </p>
    <br>
    <p>
    Ruth-Rolland resigned from her ministerial position on August 22, 1993, to run for president of the Central African Republic, becoming the first woman in Africa to do so. Despite her popularity as a candidate, she was not elected, receiving only 1% of the vote. Following the election, she resumed her job as Bakouma's deputy and led a gold prospector's consortium in the country's eastern areas.
    </p>
    <br>
    <p>
    Ruth-Rolland fell unwell in her latter years and was moved to Paris, France, where she passed on June 4, 1995, at the age of 58, in a hospital.The French daily Le Monde noted in her obituary that Ruth-Rolland "left her mark on Central African political life by her outspokenness." In her honour, a memorial has been created in Bakouma.
    </p>`},{id:6,x:-.8,y:.27,z:-1.4,countryName:"Chad",imageSource:"images/persons/7.png",popUpHeading:"Rose Lokissim",flagSource:"images/flags/Flag-Chad.png",flag:"Chad",year:"(1937-1995)",textContent:`<p>
    Jeanne-Marie Ruth-Rolland (née Rolland) was a Central African politician, social worker, and teacher who died on June 4, 1995. She is widely recognised as Africa's first female presidential candidate.
    </p>
    <br>
    <p>
    Ruth-Rolland joined the cabinet as an advisor in 1979 and was later appointed Minister for the Advancement of Women's Status. During this time, she worked extensively with street children and was dubbed "Aunt Ruth," a moniker she retained throughout her life. Ruth-Rolland presided over the Central African Red Cross. She created and led the Central African Republican Party during this time.
    </p>
    <br>
    <p>
    Ruth-Rolland ran in the first multiparty elections in 1992 and was elected deputy for the Bakouma seat. She ran as the leader of the Civic Forum party because her own political party had not yet been legalised at the time of the election. However, the election was called off by the Supreme Court and re-held the following year in 1993, when Ruth-Rolland was free to run under her own Central African Republican Party. Despite President Kolingba's attempts to have the election annulled, she was elected. Later that year, she was appointed Minister of Social Affairs, Women's Status, and National Solidarity.
    </p>
    <br>
    <p>
    Ruth-Rolland resigned from her ministerial position on August 22, 1993, to run for president of the Central African Republic, becoming the first woman in Africa to do so. Despite her popularity as a candidate, she was not elected, receiving only 1% of the vote. Following the election, she resumed her job as Bakouma's deputy and led a gold prospector's consortium in the country's eastern areas.
    </p>
    <br>
    <p>
    Ruth-Rolland fell unwell in her latter years and was moved to Paris, France, where she passed on June 4, 1995, at the age of 58, in a hospital.The French daily Le Monde noted in her obituary that Ruth-Rolland "left her mark on Central African political life by her outspokenness." In her honour, a memorial has been created in Bakouma.
    </p>`},{id:7,x:1.23,y:.245,z:1.62,countryName:"Comoros",imageSource:"images/persons/8.png",popUpHeading:"Djoumbe Fatima",flagSource:"images/flags/Flag-Comoros.png",flag:"Comoros",year:"(1837-1878)",textContent:`<p>
    Djoumbe Fatima, also known as Djoumbé Soudi, was a powerful and influential queen of the Comoros in the late 19th century. Born in 1837, she was the daughter of the sultan of Moheli, one of the four main islands of the Comoros. She became queen upon the death of her father in 1853 and ruled for 25 years, during which time she gained a reputation as a wise and just ruler.
    </p>
    <br>
    <p>
    Djoumbe Fatima was known for her strong and decisive leadership, as well as her ability to navigate the complex political landscape of the Comoros. She was known for her willingness to listen to the concerns of her subjects and for her commitment to maintaining peace and stability on the islands. She also worked to improve the economy of the Comoros, which was largely based on agriculture and fishing at the time.
    </p>
    <br>
    <p>
    One of the queen’s most notable achievements was her role in establishing a close relationship with the French, who had colonised much of Africa at the time. Despite initial resistance from some of her subjects, she saw the potential benefits of a strong alliance with the French, including increased trade and economic opportunities. This alliance allowed the Comoros to remain relatively autonomous while still receiving support from the French government.
    </p>
    <br>
    <p>
    Despite her many successes, Djoumbe Fatima’s reign was not without its challenges. She faced opposition from rival factions on the islands and had to navigate the complexities of balancing the interests of different ethnic groups. She also had to contend with a growing sense of nationalism among her subjects, which sometimes put her at odds with her own people.
    </p>
    <br>
    <p>
    In the end, however, Djoumbe Fatima remains one of the most revered figures in the history of the Comoros. She was a visionary leader who helped to lay the foundation for the modern Comoros, and her legacy continues to inspire people to this day. She died in 1878, at the age of 41, leaving behind a legacy of leadership and strength that still resonates in the Comoros today.
    </p>`},{id:8,x:-.4,y:.245,z:1,countryName:"D_R_Congo",imageSource:"images/persons/9.png",popUpHeading:"Pauline Opango Lumumba",flagSource:"images/flags/Flag-Democratic-Republic-of-the-Congo.png",flag:"D R Congo",year:"(1937-2014)",textContent:`<p>
    Pauline Lumumba is the widow of Patrice Lumumba, the first democratically elected Prime Minister of the Republic of Congo. Pauline was born in the Belgian Congo in 1937, and she met Patrice while they were both studying at Lovanium University in Leopoldville (now Kinshasa). They married in 1951 and had four children together.
    </p>
    <br>
    <p>
    Pauline was a strong supporter of her husband's political beliefs and actively participated in the struggle for Congolese independence. She was an advocate for women's rights and education, and she also worked as a teacher.
    </p>
    <br>
    <p>
    Patrice Lumumba's rise to power was met with strong opposition from the Belgian government and the Western powers, who saw him as a threat to their interests in the Congo. On January 17, 1961, Patrice was arrested and later executed by the Congolese military, with the support of the Belgian government.
    </p>
    <br>
    <p>
    Pauline was devastated by the loss of her husband and the brutal manner in which he was killed. She was also forced to flee the Congo with her children, as they were being targeted by the government, and so she moved to Egypt. Only when her husband was recognized as a national hero by the government, did she move back to Congo.
    </p>
    <br>
    <p>
    Despite the challenges she faced, Pauline never gave up on her struggle for justice and freedom. She continued to advocate for the rights of the Congolese people and the memory of her husband. She also worked to educate her children and provide them with a better life.
    She has also been involved in efforts to promote reconciliation and healing in the Congo, and to ensure that the truth about her husband's death is known.
    </p>
    <br>
    <p>
    Today, Pauline remains an important figure in the history of the Congo and an inspiration to many. She represents the resilience and determination of the Congolese people and the importance of never giving up on the struggle for freedom and justice.
    </p>`},{id:9,x:.1,y:.35,z:-1.95,countryName:"Egypt",imageSource:"images/persons/10.png",popUpHeading:"Cleopatra",flagSource:"images/flags/Flag_of_Egypt.png",flag:"Egypt",year:"(69 BC-30 BC)",textContent:`<p>
    Cleopatra VII, also known simply as "Cleopatra," was the last of the Ptolemies, who governed ancient Egypt for about 300 years. Cleopatra controlled an empire that comprised Egypt, Cyprus, a portion of modern-day Libya, and other Middle Eastern territories.
    </p>
    <br>
    <p>
    Cleopatra is described in ancient documents and historical study as an intellectual, bilingual female pharaoh who asserted her right to rule Egypt along with other kingdoms.
    </p>
    <br>
    <p>
    According to contemporary Egyptian sources, she was immensely popular among her own people, and she commissioned pictures of herself in the traditional Egyptian style for Egyptian audiences. In addition to retaining her own authority, Cleopatra's foreign policy priority was to keep Egypt independent of the rapidly expanding Roman Empire. She greatly increased Egypt's economy through trading with Eastern nations such as Arabia and possibly as far afield as India, increasing her country's standing as a world power. Cleopatra felt that by allying herself with Roman general Mark Antony, she could prevent Octavian, Julius Caesar's son and Antony's adversary, from making Egypt a vassal of Rome.
    </p>
    <br>
    <p>
    Although ancient accounts indicate that Cleopatra and Antony loved one another and that Cleopatra bore Antony three children, the relationship was also incredibly beneficial to an Egyptian queen seeking to develop and maintain her empire.
    </p>
    <br>
    <p>
    The beauty of Cleopatra was unimportant to the Romans who knew her and the Egyptians she governed. The real Cleopatra was attractive because of her intelligence—what Plutarch referred to as "the charm of her conversation" Joann Fletcher describes Pharaoh Cleopatra VII as a brilliant leader. "She was one of the most dynamic figures the world has ever seen. And I don't think that's an exaggeration.
    </p>`},{id:10,x:.1,y:.35,z:-1.95,countryName:"Egypt",imageSource:"images/persons/11.png",popUpHeading:"Naferiti",flagSource:"images/flags/Flag_of_Egypt.png",flag:"Egypt",year:"(1370 BC- 1330 BC)",textContent:`<p>
    Neferneferuaten Nefertiti was King Akhenaten's great royal wife and, in modern Western culture, is possibly ancient Egypt's most famous queen, as evidenced by the iconic bust in the Berlin Museum. The Egyptian queen with the greatest number of preserved representations on monuments as well as other artistic mediums is Nefertiti.
    </p>
    <br>
    <p>
    Nefertiti is shown as an equal alongside her spouse in tomb and temple wall paintings far more frequently than any other queen in Egyptian history. She is frequently depicted in positions of power and authority, such as smiting her adversaries or driving a chariot. Only Egyptian pharaohs were traditionally shown in this manner, demonstrating what a strong and highly regarded figure she was at the time.
    </p>
    <br>
    <p>
    Akhenaten and Nefertiti were famed for their devotion to the sun deity Aten, and they were instrumental in igniting a religious revolution. They collaborated to build a new belief system that altered religious practices in Egypt. The country underwent a significant transformation, going from polytheistic to monotheistic worship of one god.
    </p>
    <br>
    <p>
    Queen Nefertiti vanished from historical records around the 12th year of Akhenaten's reign. What happened to her is the subject of some speculation. Some historians say she died as a result of the Plague, whereas others claim she assumed a male identity and became co-regent to the pharaoh. However, no one knows for certain what the truth is behind Nefertiti's disappearance. Regardless of whether Nefertiti did not rule as a king, she is unquestionably one of ancient Egypt's most famous queens.
    </p>
    `},{id:11,x:.1,y:.35,z:-1.95,countryName:"Egypt",imageSource:"images/persons/12.png",popUpHeading:"Ankhesenamen",flagSource:"images/flags/Flag_of_Egypt.png",flag:"Egypt",year:"(1348 BC or 1342 BC - 1322 BC)",textContent:`<p>
    Ankhesenamun,  was a queen consort of Egypt's 18th dynasty. She is most known as the wife of the last pharaoh of the 18th dynasty, Pharaoh Tutankhamun, and the daughter of Pharaoh Akhenaten and Queen Nefertiti. She was a key player in the political manoeuvrings that followed the death of her consort, and her choices and actions profoundly influenced the course of events, making her an important player in the power dynamics of the time
    </p>
    <br>
    <p>
    Her political savvy and astuteness are apparent in the way she handled the turbulent political environment of the time, making an indelible mark on Egyptian history. Her ability to manage ancient Egypt's complex political landscape, as well as her position as a major person within the royal court, strengthens her standing as one of the most influential and prominent queens of the time.
    </p>
    <br>
    <p>
    Ankhesenamun was a key figure in the political manoeuvrings that followed the death of her consort, Pharaoh Tutankhamun. Her actions and decisions had a considerable impact on the course of events, making her a key actor in the power dynamics of the time. It is thought that she held tremendous influence and exercised some control over state affairs, playing an active part in the kingdom's government.
    </p>
    <br>
    <p>
    Her actions were most likely motivated by a desire to ensure the dynasty's stability and the continuity of the imperial line, as she wanted to safeguard her and her son's positions.
    </p>
    <br>
    <p>
    Her political shrewdness can be seen in the way she handled the unstable political landscape of the time, leaving a mark on Egyptian history.
    </p>`},{id:12,x:.1,y:.35,z:-1.95,countryName:"Egypt",imageSource:"images/persons/88.png",popUpHeading:"Hatshepsut",flagSource:"images/flags/Flag_of_Egypt.png",flag:"Egypt",year:"(1507–1458 BC)",textContent:`<p>
    Queen Hatshepsut ruled Egypt for more than 20 years, beginning in 1478 B.C. She ruled as queen alongside her husband, Thutmose II, but following his death, she ascended to the throne as pharaoh while acting as regent for her step-son, Thutmose III. She governed peacefully, erecting temples and monuments, which contributed to Egypt's development.
    </p>
    <br>
    <p>
    Hatshepsut was one of just a few female pharaohs in thousands of years of Egyptian history, and she did not inherit her throne like a man would—only sons were permitted to succeed their fathers. After her father, King Thutmose I, passed without sons, Hatshepsut married her half-brother, Thutmose II, to enable him ascend to the throne.
    </p>
    <br>
    <p>
    Once he died, his son—Hatshepsut's stepson—became pharaoh despite being just three years old. Hatshepsut governed in his name, yet he was still regarded as the sole ruler of Egypt. But, when Thutmose III was around eight years old, she seized the throne and became his co ruler in 1473 B.C. Some historians believe she made the manoeuvre because she was aware that if they were both pharaohs, they would be too strong to depose. Hatshepsut and Thutmose III would reign as pharaohs together for the following 22 years.
    </p>
    <br>
    <p>
    Hatshepsut, considered one of Egypt's greatest pharaohs—man or woman—brought enormous wealth and creativity to her realm. She funded one of Egypt's greatest successful commerce voyages, which brought back gold, ebony, and incense from Punt (possibly modern-day Eritrea). She established her legacy by constructing structures that remain standing today. She erected two hundred-foot-tall obelisks in Karnak's huge temple complex. And she constructed the mortuary Temple of Deir el Bahri, a temple with multiple storeys of columns in front, where she'd be buried.
    </p>`},{id:13,x:.1,y:.35,z:-1.95,countryName:"Egypt",imageSource:"images/persons/13.png",popUpHeading:"Queen Tiye",flagSource:"images/flags/Flag_of_Egypt.png",flag:"Egypt",year:"(1398 BC – 1338 BC)",textContent:`<p>
    Tiye was an Egyptian queen of the 18th dynasty, the wife of Pharaoh Amenhotep III, the mother of Akhenaten, and the grandmother of Tutankhamun and Ankhesenamun. She wielded immense power at the courts of both her husband and son, and she is believed to have interacted directly with foreign kings.
    </p>
    <br>
    <p>
    The Amarna letters also reveal that she was held in high regard by these rulers, particularly during her son's reign. Despite her belief in Egypt's old polytheistic religion, she backed Akhenaten's monotheistic reforms, possibly because she saw them as crucial political manoeuvres to expand the throne's influence at the expense of the priests of Amun.
    </p>
    <br>
    <p>
    Tiye was a powerful figure at court from the start of her husband's reign. Bunson writes that she was “intelligent and diligent, the first queen of Egypt to have her name on official acts, even on the announcement of the king's marriage to a foreign princess”. Hawass agrees, stating, “Tiye is featured prominently on her husband's monuments, and seems to have borne more real power than the queens who came before her. Her name is even written in a cartouche, like that of the king”.
    </p>
    <br>
    <p>
    Amenhotep III's reign was lavish, and Egypt was the most powerful and wealthy nation in the region, if not the world, so the king was free to spend his fortune on building a large home for his queen at Malkata, across the river from Thebes and his father's old palace.
    </p>
    <br>
    <p>
    She passed away in her early sixties and was laid to rest in the Valley of the Kings. Her mummy has been positively identified as the 'Elder Lady,' and a lock of her hair, probably a keepsake of the young king, was discovered in Tutankhamun's tomb.
    </p>`},{id:14,x:.25,y:.438,z:3.2,countryName:"Eswatini",imageSource:"images/persons/14.png",popUpHeading:"Labotsibeni Mdluli",flagSource:"images/flags/Flag_of_Eswatini.png",flag:"Eswatini",year:"(1858-1925)",textContent:`<p>
    Swazi Queen-Mother Labotsibeni Mdluli, the founder and financier of Abantu Batho, was a force to be reckoned with.
    Queen Labotsibeni Mdluli was born in 1858 in Luhlekweni, northern Swaziland (now known as Eswatini), during the reign of King Mswati II, who ruled for 25 years from 1840 to 1865. She would reign the nascent Swaziland kingdom for 50 years, as fate would have it.
    </p>
    <br>
    <p>
    She spent her whole reign disputing British claims to her people's land and attempting to repurchase territory that her husband had given as concessions to the Boers and the British in an intricate system of awarding land, grazing pasture, and mining rights. The Swazis controlled just about one-third of their area after the Land Partition Proclamation of 1909. Labotsibeni admitted that she couldn't reclaim the property militarily and that it had become a commodity that could be bought and sold on the open market.
    </p>
    <br>
    <p>
    During World War I, Queen Labotsibeni purchased a £1000 aircraft for Britain to aid in its war efforts. She demanded that the plane bear her name in order to commemorate and acknowledge the involvement of women in World War I.
    </p>
    <br>
    <p>
    When she died in 1925, there was a strong rainstorm that caused flooding in portions of South Africa and Swaziland. She was a rainmaker who was quoted as saying, "When I want water, I make the rain myself."
    </p>
    `},{id:15,x:1.05,y:.575,z:-.3,countryName:"Ethiopia",imageSource:"images/persons/15.png",popUpHeading:"Asnaketch Worku",flagSource:"images/flags/Flag-Ethiopia.png",flag:"Ethiopia",year:"(1935-2011)",textContent:`<p>
    Asnaketch Worku was an Ethiopian singer who sang in Amharic and a krar instrumentalist, the instrument that became synonymous with her reputation in the 1960s and 1970s. Asnaketch also had a long and notable acting career.
    </p>
    <br>
    <p>
    Asnaketch began performing in local clubs and cabarets after purchasing her first krar for barely 25 cents. She was Ethiopia's first stage actress, debuting in 1952 at the City Hall Theatre in the drama "Ye Fikir Chora" (Rays of Love). She began singing studies with Franz Zelwecker in 1955. She was dubbed the "pearl of the stage" by playwright Tesfaye Gessesse, and she regularly played unfavourable roles. She was a divisive figure in the 1950s due to her beauty and performances in love plays. Despite her long and accomplished theatre career, Asnaketch is best recognised for her abilities with the krar, as well as her quick wit and brilliant improvisations.
    </p>
    <br>
    <p>
    She recorded landmark albums of outstanding original compositions as well as famous versions of old tunes that became national standards. Asnakech had a unique sense of style, glamour, and sex appeal that sometimes startled mainstream culture. She donned clothes no one else wore and expressed things no one else said. Traditional ideas about how women should dress and act did not apply to her. Defying a mindset that had men wearing gowns to play female characters in the theatre until the early 1950s, Asnakech became a national treasure under her own terms.
    </p>
    <br>
    <p>
    Perhaps no woman in modern Ethiopian history is more revered than Asnakech Worku. Asnakech inspired and questioned society for decades as a musician, actor, dancer, and cultural icon, until her passing in 2011.
    </p>
    `},{id:16,x:1.05,y:.575,z:-.3,countryName:"Ethiopia",imageSource:"images/persons/16.png",popUpHeading:"Empress Menen Asfaw",flagSource:"images/flags/Flag-Ethiopia.png",flag:"Ethiopia",year:"(1889-1962)",textContent:`<p>
    Empress Menen Asfaw was the wife of Emperor Haile Selassie I of Ethiopia, who ruled from 1930 until his overthrow in 1974. She was born in 1889 in Wollo, Ethiopia, and was the daughter of a noble family. 
    </p>
    <br>
    <p>
    Empress Menen was known for her philanthropy and humanitarian efforts throughout her life. She established several charitable organisations, including the Red Cross Society of Ethiopia and the Ethiopian Women's Charitable Organisation. These organisations aimed to improve the lives of women and children in Ethiopia by providing education and health services. She also worked to improve the lives of prisoners and the disabled.
    </p>
    <br>
    <p>
    She established the Empress Menen School for Girls in Addis Ababa, pioneering the first educational institution exclusively for girls that provided both boarding and day student facilities. The school attracted girls from across the Empire, offering them access to a contemporary education. Empress Menen played an active role in supporting the school, frequently visiting and presiding over its graduation ceremonies. Her philanthropy extended beyond education, as she generously contributed to initiatives aiding the impoverished, sick, and disabled populations. Additionally, she sponsored various programs aimed at supporting these vulnerable groups. 
    </p>
    <br>
    <p>
    Empress Menen passed away in 1962, but her legacy lives on through her charitable work and her support of the arts and culture of Ethiopia. She is remembered as a compassionate leader who worked tirelessly to improve the lives of the people of Ethiopia. Her dedication to the welfare of her country and its people will always be remembered and celebrated.
    </p>
    `},{id:17,x:1.05,y:.575,z:-.3,countryName:"Ethiopia",imageSource:"images/persons/17.png",popUpHeading:"Empress Taytu Betul",flagSource:"images/flags/Flag-Ethiopia.png",flag:"Ethiopia",year:"(1851-1918)",textContent:`<p>
    Empress Taiyytu Betul was the wife of Emperor Menelik II of Ethiopia and played a significant role in the country's history during the late 19th and early 20th centuries. Born around 1851, Taytu came from a prominent Oromo family and was known for her intelligence and strong will. She met Menelik while he was still a prince and they quickly fell in love. The two were married in 1883 and Taytu became a powerful and influential figure in the court.
    </p>
    <br>
    <p>
    One of Taytu's most notable achievements was her role in the Battle of Adwa in 1896. The Ethiopian army, led by Menelik, defeated the Italian forces in a surprise victory, solidifying Ethiopia's independence and becoming one of the few African countries to successfully resist European colonisation. Taytu was said to have played a key role in the victory by rallying the troops and providing strategic advice to her husband.
    </p>
    <br>
    <p>
    Taytu is widely recognized for her significant political influence, both preceding and following her coronation as Empress alongside Menelik in 1889. She spearheaded the conservative faction within the court, which opposed the modernists and progressives seeking to westernise Ethiopia and introduce modern reforms. Historians affirm that the Emperor always sought her counsel prior to making crucial decisions, highlighting her integral role in the decision-making process.
    </p>
    <br>
    <p>
    Empress Taytu Betul died in 1918, leaving behind a legacy of strength, intelligence, and dedication to her country. Her contributions to Ethiopia's history and development continue to be celebrated and remembered to this day.
    </p>
    `},{id:18,x:-2.2,y:.25,z:-.3,countryName:"Ghana",imageSource:"images/persons/18.png",popUpHeading:"Ama Ata Aidoo",flagSource:"images/flags/Flag-Ghana.png",flag:"Ghana",year:"(1942-2023)",textContent:`<p>
    Ama Ata Aidoo was a Ghanaian author, poet, playwright, and academic who was born in 1942 in Abeadzi Kyiakor, a small village in the Gold Coast (now Ghana). She is widely considered one of the most influential and important African writers of the 20th century.
    </p>
    <br>
    <p>
    Aidoo began her writing career in the 1960s, during a time of significant political and cultural change in Ghana. She wrote plays, poetry, and novels that explored themes of identity, gender, and politics. Her writing was often critical of the patriarchal systems that existed in Ghana at the time and sought to empower women and challenge traditional gender roles.
    </p>
    <br>
    <p>
    One of Aidoo's most well-known works is her novel "Our Sister Killjoy" (1977), which tells the story of a young Ghanaian woman who travels to Europe and faces a culture shock. The novel was groundbreaking in its exploration of the experiences of an African woman living in the West and the difficulties she faced in reconciling her African identity with the Western culture she encountered.
    </p>
    <br>
    <p>
    Aidoo's writing has been recognized and celebrated both in Ghana and internationally. In 1962, she was honoured with the Mbari Club prize for her compelling short story "No Sweetness Here," recognizing her talent and skill in storytelling. Additionally, Aidoo's novel Changes earned her the esteemed 1992 Commonwealth Writers' Prize for Best Book (Africa), solidifying her position as a highly regarded writer within the literary community.
    </p>
    <br>
    <p>
    In addition to her writing career, Aidoo was also an accomplished academic. She has held several teaching positions at universities in Ghana and the United States, including the University of Cape Coast, the University of Ghana, and the University of California, Los Angeles.
    </p>
    <br>
    <p>
    Overall, Ama Ata Aidoo's writing and academic career has been a significant contribution to the literary world and a powerful voice of resistance and empowerment. Her works are still widely read and studied today and continue to inspire generations of readers and writers.
    </p>
    `},{id:19,x:-2.2,y:.25,z:-.3,countryName:"Ghana",imageSource:"images/persons/19.png",popUpHeading:"Esther Ocloo",flagSource:"images/flags/Flag-Ghana.png",flag:"Ghana",year:"(1919-2002)",textContent:`<p>
    Esther Ocloo was a Ghanaian entrepreneur and businesswoman who was a pioneer in the field of microlending. Due to poverty, she would travel weekly from home to school.
    </p>
    <br>
    <p>
    Demonstrating her entrepreneurial spirit, she made and sold jam  for a shilling, yielding a commendable two-shilling profit. However, her decision to sell jam on the streets drew criticism from her classmates at Achimota School, who deemed it an unrefined pursuit unfit for an educated individual.
    </p>
    <br>
    <p>
    Undeterred by the opinions of others, she ingeniously presented some leftover marmalade to her former school, which led to a lucrative contract to supply jam for the entire boarding school. Recognizing her potential, the administrators of Achimota approached her with an offer to supply orange juice as well, utilising the abundant fruit grown on school premises. As her reputation as a proficient businesswoman flourished, she secured a substantial contract to supply juice to the country's military, solidifying her position as a successful entrepreneur.
    </p>
    <br>
    <p>
    In 1942, she established her first factory. Over the course of the following decades, she embarked on the establishment of multiple non-governmental organisations (NGOs), primarily focusing on empowering underprivileged youth and women across various regions of the country. These organisations placed significant emphasis on equipping individuals with practical skills that would enhance their employability, fostering self-sufficiency and empowerment among the targeted communities.
    </p>
    <br>
    <p>
    Despite her many achievements, Ocloo remained humble and dedicated to her work. Her legacy continues to inspire many people in Ghana and other parts of Africa, who see her as a role model for women entrepreneurs. Ocloo's work has helped thousands of women in Africa to start their own businesses, improve their economic situation, and become more independent and self-sufficient.
    </p>
    `},{id:20,x:-2.2,y:.25,z:-.3,countryName:"Ghana",imageSource:"images/persons/20.png",popUpHeading:"Yaa Asantewaa",flagSource:"images/flags/Flag-Ghana.png",flag:"Ghana",year:"(1840-1921)",textContent:`<p>
    Yaa Asantewaa was a leader of the Ashanti Empire in present-day Ghana in the early 20th century. She is best known for leading the Ashanti resistance against British colonialism in what is now known as the Ashanti War of 1900-1901.
    </p>
    <br>
    <p>
    Yaa Asantewaa was born in the late 19th century in the Ashanti Kingdom, which was then a powerful state in West Africa. She was a member of the Ashanti royal family and held the title of queen mother, a position of great authority and respect in Ashanti culture.
    </p>
    <br>
    <p>
    In 1900, the Ashanti king, Prempeh I, was exiled by the British and control of the Ashanti Kingdom was given to the governor of the British Gold Coast colony. Yaa Asantewaa was deeply opposed to this development and believed that the Ashanti people needed to fight for their independence. She rallied her people and led an army of Ashanti warriors against the British in what came to be known as the Ashanti War of 1900-1901.
    </p>
    <br>
    <p>
    Despite being outnumbered and outgunned, Yaa Asantewaa and her forces put up a strong resistance against the British. She led her army in several successful battles and was able to push the British back. However, ultimately, the Ashanti resistance was defeated and Yaa Asantewaa was exiled to the Seychelles.
    </p>
    <br>
    <p>
    Yaa Asantewaa's resistance against the British helped to inspire other leaders in Africa to fight for their independence and her legacy continues to be celebrated in Ghana and other parts of Africa. She is seen as a symbol of resistance against colonialism and a powerful figure of African feminism.
    </p>
    <br>
    <p>
    In summary Yaa Asantewaa was a leader of the Ashanti Empire in present-day Ghana, in the early 20th century. She's known for leading the Ashanti resistance against British colonialism in the Ashanti War of 1900-1901. Despite being outnumbered and outgunned, she led her army in several successful battles and was able to push the British back. Her resistance and leadership inspired other leaders in Africa to fight for their independence and her legacy continues to be celebrated in Ghana and other parts of Africa, seen as a symbol of resistance against colonialism and a powerful figure of African feminism.
    </p>
    `},{id:21,x:-2.2,y:.25,z:-.3,countryName:"Ghana",imageSource:"images/persons/21.png",popUpHeading:"Princess Yennenga",flagSource:"images/flags/Flag-Ghana.png",flag:"Ghana",year:"(17th century)",textContent:`<p>
    Princess Yennenga, also known as Yennenga of Mossi, was a legendary figure in the history of the Mossi people of Burkina Faso, West Africa. She is said to have been the daughter of the founder of the Mossi kingdom, and is considered to be a symbol of strength, beauty, and intelligence.
    </p>
    <br>
    <p>
    According to legend, Princess Yennenga was the daughter of the first Mossi king, Naba Tenguella. She is said to have been a skilled horsewoman and warrior, and was known for her beauty and intelligence. She possessed a resolute demeanour and an autonomous mindset, establishing herself as a cherished princess. From as early as the age of 14, she actively participated in battles on behalf of her father, engaging in combat against the neighbouring Malinkés. Her remarkable proficiency with javelins, spears, and bows, coupled with her exceptional equestrian skills, elevated her standing as an accomplished horsewoman. Notably, she even commanded her own battalion, exemplifying her leadership prowess on the battlefield.
    </p>
    <br>
    <p>
    Princess Yennenga is often depicted as a powerful and independent woman who played a key role in the establishment of the Mossi kingdom. She is considered a symbol of strength and courage, and is revered as a hero by the Mossi people. Today, a statue of Princess Yennenga stands in the centre of Ouagadougou, and her legacy lives on through the annual Yennenga Festival, which is celebrated in Burkina Faso to honour her memory.
    </p>
    <br>
    <p>
    It is important to note that the story of Princess Yennenga is a legend, and some of the details of her life may not be historically accurate. However, she remains an important figure in the cultural history of the Mossi people, and her story continues to be passed down through generations as a symbol of strength, courage, and determination.
    </p>
    `},{id:22,x:.8,y:.49,z:.2,countryName:"Kenya",imageSource:"images/persons/22.png",popUpHeading:"Grace Ogot",flagSource:"images/flags/Flag-Kenya.png",flag:"Kenya",year:"(1930-2015)",textContent:`<p>
    Grace Ogot was a Kenyan author, journalist, and political figure. She was one of the first female writers from Kenya to gain international recognition, and her work often dealt with themes of gender and colonialism.
    </p>
    <br>
    <p>
    Ogot acquired extensive expertise across diverse fields, exploring various professional domains. She honed her skills as a scriptwriter and announcer for the BBC Overseas Service, specifically on the esteemed program "London Calling East and Central Africa." Additionally, she established a prominent radio program delivered in the Luo language. Further broadening her experience, she served as a community development officer in Kisumu County and held the position of public relations officer at the Air India Corporation of East Africa.
    </p>
    <br>
    <p>
    In the 1960s, Ogot began publishing fiction, and her first short story collection, "The Promised Land," was published in 1966. Her stories often dealt with the lives of women in rural Kenya, and she was one of the first Kenyan authors to explore the experiences of women in a post-colonial society.
    </p>
    <br>
    <p>
    Ogot's work also dealt with themes of colonialism and the impact it had on Kenyan society. She was particularly interested in the way that colonialism had affected the lives of women, and her stories often explored the ways in which traditional gender roles were disrupted by the arrival of European colonists.
    </p>
    <br>
    <p>
    Ogot's short stories frequently showcase female characters who exhibit a profound sense of responsibility, exemplified notably in "The Rain Came." Her literary works consistently underscore the importance of fostering understanding within relationships between men and women.
    </p>
    <br>
    <p>
    Ogot's writing continues to be celebrated for its powerful portrayal of the lives of women in Africa and its exploration of the themes of gender and colonialism. Her work is considered to be an important contribution to African literature and continues to be read and studied today.
    </p>
    `},{id:23,x:.8,y:.49,z:.2,countryName:"Kenya",imageSource:"images/persons/23.png",popUpHeading:"Wambui Otieno",flagSource:"images/flags/Flag-Kenya.png",flag:"Kenya",year:"(1936-2011)",textContent:`<p>
    Wambui Otieno was a Kenyan activist, writer, and politician. She was known for her work in promoting women's rights and gender equality in Kenya. Otieno grew up during the colonial period 
    </p>
    <br>
    <p>
    Otieno has also been involved in politics. She has been a member of parliament in Kenya and has served in various government positions. Despite her political involvement, Otieno has remained an outspoken critic of government policies that harm marginalised groups, particularly women and girls.
    </p>
    <br>
    <p>
    Wambui actively engaged in political affairs by joining the Nairobi People's Convention Party, led by Tom Mboya, where she assumed the leadership position of its Women's wing. Subsequently, this party merged with the Kenya African National Union (KANU). In 1963, Wambui was elected as the head of KANU's women's wing. She also played a role in Kiama Kia Muingi, an organisation that succeeded Mau Mau. Pioneering the path for women's political participation in postcolonial Kenya, she became one of the first women to run for political office as a KANU candidate in 1969. Her commitment to public service continued as she ran for office once again in 1974.
    </p>
    <br>
    <p>
    Wambui was an exemplary embodiment of a strong and independent woman, serving as an inspiration to women throughout Kenya. Her active involvement in politics and leadership positions showcased her determination and courage.
    </p>
    <br>
    <p>
    By being one of the first women to run for political office in postcolonial Kenya, she shattered barriers and paved the way for other women to follow in her footsteps. Her resilience and dedication served as a source of inspiration, empowering Kenyan women to embrace their own strength, independence, and pursue their aspirations without limitations.
    </p>
    `},{id:24,x:.8,y:.49,z:.2,countryName:"Kenya",imageSource:"images/persons/24.png",popUpHeading:"Wangari Maathai",flagSource:"images/flags/Flag-Kenya.png",flag:"Kenya",year:"(1940-2011)",textContent:`<p>
    Wangari Maathai was a Kenyan environmental and political activist, as well as a feminist and women's rights advocate. She is best known for founding the Green Belt Movement, an organisation that focuses on planting trees and promoting conservation efforts in Kenya. She was also the first African woman to receive the Nobel Peace Prize in 2004, in recognition of her work to promote sustainable development, democracy, and peace.
    </p>
    <br>
    <p>
    Maathai was born in the village of Ihithe, in the highlands of Kenya. She earned a degree in biology from Mount St. Scholastica College in Atchison, Kansas in 1964, and later earned a master's degree in biological sciences from the University of Pittsburgh in 1966, and a Ph.D. in veterinary anatomy from the University of Nairobi in 1971.
    </p>
    <br>
    <p>
    In 1977, she founded the Green Belt Movement, which aimed to combat deforestation and soil erosion by encouraging rural women to plant trees on their farms and in their communities. Over the next three decades, the organisation planted more than 50 million trees in Kenya, and helped to improve the living conditions of countless people by providing them with firewood, food, and income.
    </p>
    <br>
    <p>
    In addition to her work with the Green Belt Movement, Maathai also actively campaigned for democratic reform, women's rights, and peace in Kenya and throughout Africa. She served as an assistant minister for the environment and natural resources in Kenya, and was an active member of parliament for several years.
    </p>
    <br>
    <p>
    Maathai received numerous honours and awards for her work, including the Nobel Peace Prize, the Right Livelihood Award, and the Order of the Golden Ark.
    </p>
    <br>
    <p>
    She passed away on September 25, 2011, but her legacy is still alive and many environmental activists around the world have been inspired by her work.
    </p>
    `},{id:25,x:1.35,y:.45,z:2.8,countryName:"Madagascar",imageSource:"images/persons/25.png",popUpHeading:"Ranavalona III",flagSource:"images/flags/Flag-Madagascar.png",flag:"Madagascar",year:"(1861-1917)",textContent:`<p>
    Queen Ranavalona III was the last monarch of the Kingdom of Madagascar. She was born in 1861 and she was the last in a line of powerful queens who ruled Madagascar during the 19th century.
    </p>
    <br>
    <p>
    Ranavalona III came to the throne in 1883 after the death of her husband, King Radama III. She was only 22 years old at the time and faced a number of challenges as queen. Her reign was marked by political instability and economic turmoil, as well as ongoing conflicts with the French colonial authorities.
    </p>
    <br>
    <p>
    Despite these challenges, Queen Ranavalona III was determined to maintain her kingdom's independence and sovereignty. She worked to strengthen the country's economy by promoting trade and agriculture, and she also worked to modernise the country's infrastructure and institutions. She also sought to preserve the traditional culture and customs of her people.
    </p>
    <br>
    <p>
    However, despite her efforts, the French continued to exert pressure on the kingdom and eventually annexed it in 1896. Queen Ranavalona III was exiled to the island of Réunion and died there in 1917.
    </p>
    <br>
    <p>
    Despite her relatively short reign, Queen Ranavalona III is remembered as a strong and determined leader who worked to preserve her kingdom's independence and sovereignty. She is also remembered for her efforts to modernise the country and promote economic development, as well as her efforts to preserve the traditional culture and customs of her people. Today, she is celebrated as a symbol of resistance against colonialism and a champion of Malagasy independence.
    </p>
    `},{id:26,x:1.35,y:.45,z:2.8,countryName:"Madagascar",imageSource:"images/persons/26.png",popUpHeading:"Ranavalona I",flagSource:"images/flags/Flag-Madagascar.png",flag:"Madagascar",year:"(1778-1861)",textContent:`<p>
    Queen Ranavalona I, also known as Ramavo, was the queen of Madagascar from 1828 until her death in 1861. She was known for her strong leadership and for her efforts to preserve the independence of Madagascar from European colonisation.
    </p>
    <br>
    <p>
    Ranavalona was born into a noble family in 1778 and was chosen to be the queen by her predecessor, King Radama I. She quickly established herself as a powerful leader and was determined to keep Madagascar independent from the European powers that were rapidly colonising other parts of Africa.
    </p>
    <br>
    <p>
    One of her first acts as queen was to expel all foreign missionaries and traders from the island, which she saw as a threat to the traditional way of life. She also implemented a number of policies to strengthen the economy and military of Madagascar, including building roads, ports, and fortifications.
    </p>
    <br>
    <p>
    Queen Ranavalona I's rule was also marked by her efforts to modernise the country, she introduced new agricultural techniques, built schools, and promoted education. She also sent Malagasy envoys to other countries in order to promote trade and diplomacy.
    </p>
    <br>
    <p>
    Despite her successes, Queen Ranavalona I's rule was not without controversy. Her policies were often criticised as being harsh and her rule was marked by a number of human rights abuses. Nevertheless, her legacy remains an important part of Malagasy history and she is remembered as a strong and determined leader who helped to preserve the independence of Madagascar.
    </p>
    <br>
    <p>
    In conclusion, Queen Ranavalona I was a powerful and determined leader who helped to preserve the independence of Madagascar for over 30 years. Despite her human rights abuses and controversial policies, her legacy remains an important part of Malagasy history and she is remembered as a strong leader who helped to modernise and strengthen the country.
    </p>
    `},{id:27,x:1.35,y:.45,z:2.8,countryName:"Madagascar",imageSource:"images/persons/27.png",popUpHeading:"Queen Rasoherina",flagSource:"images/flags/Flag-Madagascar.png",flag:"Madagascar",year:"(1814-1868)",textContent:`<p>
    Queen Rasoherina was the queen of Madagascar from 1863 to 1868. Following the alleged assassination of her husband, Radama II, Ranavalona II assumed the throne, becoming the ruler of Madagascar.
    </p>
    <br>
    <p>
    Rasoherina was a skilled politician and was able to navigate the complex political landscape of Madagascar during her reign. She was able to maintain good relations with the French and British, who were both interested in the island's resources. She also worked to modernise the country and improve the lives of her people.
    </p>
    <br>
    <p>
    Despite these challenges, Rasoherina was able to maintain her power and keep her kingdom stable. She was respected by her people and was remembered as a strong and just leader. Her legacy continues to be celebrated in Madagascar today.
    </p>
    <br>
    <p>
    Queen Rasoherina's reign was a period of stability and modernization, which laid the foundation for the country's future development. Her legacy lives on in the hearts and minds of the Malagasy people, who remember her as a great leader who worked tirelessly to improve the lives of her people.
    </p>
    `},{id:28,x:.54,y:.35,z:1.84,countryName:"Malawi",imageSource:"images/persons/28.png",popUpHeading:"Rose Chibambo",flagSource:"images/flags/Flag-Malawi.png",flag:"Malawi",year:"(1928-2016)",textContent:`<p>
    Rose Chibambo was a leader in the Malawi Congress Party and was one of the first women to be elected to the Malawi National Assembly. She was also the first female cabinet minister in Malawi. Chibambo was a pioneer for women's rights in Malawi and worked tirelessly to improve the lives of women and girls.
    </p>
    <br>
    <p>
    Rose Chibambo emerged as a notable figure in the political landscape of the British Protectorate of Nyasaland during the pre-independence era, which ultimately led to the establishment of Malawi in 1964. Her significant contributions as a politician were particularly focused on mobilising Malawian women to actively participate in the political struggle against British colonial rule. By organising women and advocating for their rights, Chibambo effectively positioned them as a formidable political force alongside their male counterparts, united in their pursuit of independence.
    </p>
    <br>
    <p>
    Chibambo was also a passionate advocate for human rights. She spoke out against the oppression of women and minorities and was a vocal critic of the Malawian government's policies. Despite facing opposition from the government, she continued to speak out and was a role model for women in Malawi.
    </p>
    <br>
    <p>
    Chibambo's legacy continues to inspire women and girls in Malawi today. Her work and dedication to improving the lives of women and girls has had a lasting impact on the country and will continue to be remembered for generations to come. She was a true champion of women's rights and a trailblazer in the fight for equality.
    </p>
    `},{id:29,x:-2.8,y:.275,z:-1.6,countryName:"Mauritania",imageSource:"images/persons/29.png",popUpHeading:"Dimi Mint Abba",flagSource:"images/flags/Flag-Mauritania.png",flag:"Mauritania",year:"(1958-2011)",textContent:`<p>
    Dimi Mint Abba was a well-known and well-liked singer in the northwestern African country of Mauritania. Known as the "diva of the desert," she released only a few albums and made only a few trips to Europe, but she amassed a sizable fan base at home and throughout North Africa and the Middle East because of her strong live performances.
    </p>
    <br>
    <p>
    She was born Loula Bint Siddaty Ould Abba into a family of iggawin, Mauritanian griots whose traditional function is to act as historians and commentators as well as musicians. Dimi began her musical career as a child by learning to beat a drum (traditionally, percussionists in Mauritania are women) and singing alongside her parents. She developed into an exceptional instrumentalist while still a teenager, and at the age of 16, she performed on Mauritanian radio alongside her parents.
    </p>
    <br>
    <p>
    Dimi's strong songs combined north and west African elements, blending Arabic scales and improvisation with west African instrumentation. It was a style that earned her a following not only in North Africa, but also in Mali, where Touré was so taken with her voice that he recommended her to his British record label, World Circuit. As a result, in the spring of 1989, she was invited to visit the United Kingdom.
    </p>
    <br>
    <p>
    Upon a recommendation from Ali Farka Touré, her first worldwide release was on the World Circuit record label. She was joined on this record by her husband Khalifa Ould Eide and her two daughters.
    </p>
    <br>
    <p>
    Later, she wrote well-known and popular Mauritanian songs such as "Hailala" and "Koumba bay bay." Mohamed Ould Abdel Aziz, the former President of Mauritania, mourned her death as "a national loss" when she died in 2011.
    </p>
    `},{id:30,x:.75,y:.3,z:2.15,countryName:"Mozambique",imageSource:"images/persons/30.png",popUpHeading:"Josina Machel",flagSource:"images/flags/Flag-Mozambique.png",flag:"Mozambique",year:"(1945-1971)",textContent:`<p>
    Josina Machel was a Mozambican women's rights activist and the wife of Samora Machel, the first president of Mozambique. She was also the leader of FRELIMO.
    </p>
    <br>
    <p>
    Josina was a prominent member of the Frelimo party and was instrumental in the formation of the country's first women's organisation. She was a strong advocate for women's rights and worked to increase their participation in politics and the economy. She was a key figure in the Mozambican liberation struggle and her work helped to pave the way for women's rights in the country.
    </p>
    <br>
    <p>
    Josina's death in 1971 was a significant loss to the Mozambican liberation movement and the cause of women's rights in the country. Her legacy lives on, as her work helped to empower and inspire generations of Mozambican women.
    </p>
    <br>
    <p>
    In commemoration of Josina Machel's passing, FRELIMO designated April 7 as National Women's Day in Mozambique. In March 1973, FRELIMO established the National Organization of Mozambican Women, serving as the social and political arm of the movement specifically focused on women's issues. 
    </p>
    <br>
    <p>
    Guided by the ideals of women's emancipation championed by Machel, the organisation persisted in its pursuit of this objective even after Mozambique gained independence in 1975. Many of Josina's fellow comrades-in-arms assumed significant leadership positions within this organisation and the government. As a testament to her legacy, the primary secondary school in the capital city was named after her.
    </p>
    `},{id:31,x:-.88,y:.24,z:2.4,countryName:"Namibia",imageSource:"images/persons/31.png",popUpHeading:"Richardene Kloppers",flagSource:"images/flags/Flag-Namibia.png",flag:"Namibia",year:"(1926-2009)",textContent:`<p>
    Richardene Kloppers was Namibia's first black primary school teacher. Born into a humble working-class family in Keetmanshoop, she attended the Roman Catholic Mission School in Tseiblaagte until grade six, where she received her education in the Nama language. She returned to Namibia after completing her teaching degree in South Africa, where she created the first multiracial school in Old Location, a black African district in the capital city Windhoek, in the early 1950s, which was proclaimed illegal by the apartheid authorities.
    </p>
    <br>
    <p>
    She became a symbol of fortitude and dignity in a town divided by divisive race and power politics because of her passion for education, love of children, generosity of spirit, and dedication to her faith and community. She brought a community together with her conviction in human equality and dedication to education. Richardine Maria Kloppers passed away in 2009, but her legacy continues on, and she will be remembered by two generations of Windhoek residents who grew up under her supervision.
    </p>
    `},{id:32,x:-1.4,y:.27,z:-.7,countryName:"Nigeria",imageSource:"images/persons/32.png",popUpHeading:"Queen Moremi",flagSource:"images/flags/Flag-Nigeria.png",flag:"Nigeria",year:"(12th century)",textContent:`<p>
    Queen Moremi is a legendary figure in African history and folklore who lived in the 12th century in the Kingdom of Ife in present-day Nigeria. She was a powerful and influential queen who ruled the kingdom alongside her husband, King Oranmiyan. Despite her royal status, Queen Moremi is best known for her bravery and cunning, which helped save her people from a terrible threat.
    </p>
    <br>
    <p>
    The story of Queen Moremi is told through oral tradition, passed down from generation to generation, and is considered one of the most important tales in African folklore. It is a story of bravery, cunning, and the power of a woman to save her people and defeat a great evil. In addition, the tale of Queen Moremi is also considered a symbol of the power of female leadership and the importance of women in African society.
    </p>
    <br>
    <p>
    Queen Moremi is remembered and honoured to this day, and her legacy continues to inspire and empower women across Africa. Her story is celebrated in festivals and ceremonies throughout the continent, and she remains a powerful symbol of the strength and resilience of African women. Queen Moremi serves as a testament to the power of women to lead and make a difference in the world, and her story will continue to inspire future generations for many years to come.
    </p>
    `},{id:33,x:-1.4,y:.27,z:-.7,countryName:"Nigeria",imageSource:"images/persons/33.png",popUpHeading:"Queen Amina",flagSource:"images/flags/Flag-Nigeria.png",flag:"Nigeria",year:"(1533-1610)",textContent:`<p>
    Queen Amina was a legendary ruler of the Zaria Kingdom in Nigeria in the 16th century. She is considered one of the greatest African female leaders in history and is remembered for her bravery, intelligence, and military prowess.
    </p>
    <br>
    <p>
    Amina was the daughter of the King of Zaria. She was raised to be a strong warrior and was trained in military tactics, horseback riding, and archery. When her father passed away, Amina took over the throne and continued his legacy of expansion and conquest.
    </p>
    <br>
    <p>
    Amina led her army on numerous successful campaigns, expanding the borders of the Zaria Kingdom and bringing new territories under her control. Her army was feared and respected by neighbouring kingdoms, and her reputation as a fierce warrior was well known. Amina was not just a military leader, but also a wise ruler who brought peace and stability to her kingdom.
    </p>
    <br>
    <p>
    Amina was a trailblazer for women's rights and empowerment, breaking the traditional norms of the time by ruling as a woman.
    </p>
    <br>
    <p>
    Queen Amina's reign left a lasting legacy. Her achievements inspired future generations of women to break barriers and challenge gender roles. Today, she is remembered as a symbol of courage, strength, and leadership, and her legacy continues to inspire people all over the world.
    </p>
    <br>
    <p>
    In conclusion, Queen Amina was a remarkable leader who made a significant impact on African history. Her achievements and legacy continue to inspire and empower women to this day, and her story is a testament to the power and strength of women.
    </p>
    `},{id:34,x:-1.4,y:.27,z:-.7,countryName:"Nigeria",imageSource:"images/persons/34.png",popUpHeading:"Flora Nwapa",flagSource:"images/flags/Flag-Nigeria.png",flag:"Nigeria",year:"(1931-1993)",textContent:`<p>
    Flora Nwapa was a Nigerian author and publisher who was one of the first African women to publish a novel in English. Born in southeastern Nigeria, Nwapa was the daughter of a wealthy, politically active family and received a Western-style education. She later worked for the Nigerian government and married an engineer, with whom she had five children.
    </p>
    <br>
    <p>
    Nwapa's first novel, "Efuru," was published in 1966 and is widely considered a landmark work in African feminist literature. The novel tells the story of a strong, independent woman named Efuru who is trying to balance her roles as a wife, mother, and businesswoman in a male-dominated society. Nwapa's writing was praised for its vivid and poetic language, as well as its insightful commentary on gender, motherhood, and sexuality.
    </p>
    <br>
    <p>
    Over the course of her career, Nwapa went on to publish several more novels, including "Idu" (1970), "Women are Different" (1986), and "One is Enough" (1981). Her writing often explored the experiences of women in Africa and the ways in which they were shaped by tradition, religion, and colonialism.
    </p>
    <br>
    <p>
    In addition to her writing, Nwapa was also a passionate advocate for African literature. She founded the first African publishing company, Tana Press, which published many of her own works as well as those of other African writers. Through her publishing and writing, Nwapa helped to establish a new literary genre that reflected the lives and experiences of African women.
    </p>
    <br>
    <p>
    Today, Flora Nwapa is widely recognized as one of the most important African women writers of the 20th century. Her novels have been translated into several languages and continue to be read and studied around the world. Her legacy remains a testament to the power of storytelling to inspire change and to provide a voice for marginalised communities.
    </p>
    `},{id:35,x:-1.4,y:.27,z:-.7,countryName:"Nigeria",imageSource:"images/persons/35.png",popUpHeading:"Alimotu Pelewura",flagSource:"images/flags/Flag-Nigeria.png",flag:"Nigeria",year:"(1865-1951)",textContent:`<p>
    Alimotu Pelewura was a prominent figure in 19th century Nigerian history. She was a wealthy and influential woman who lived in Lagos during the British colonial rule. She was known for her business acumen and for being a philanthropist. She was also a key figure in the anti-colonial resistance movement and was an advocate for the rights of women.
    </p>
    <br>
    <p>
    One of Pelewura’s most notable achievements was her involvement in the anti-colonial resistance movement. She was a member of the Lagos Native Women’s Society and was instrumental in organising protests against British colonial rule. She was also an advocate for women’s rights and was a strong supporter of women’s education. She believed that education was the key to empowering women and that it was essential for women to be educated in order to be effective in the anti-colonial resistance movement.
    </p>
    <br>
    <p>
    In 1932, Pelewura emerged as a leader among market women, spearheading a notable protest against the imposition of direct taxation on women by the colonial government. Upon hearing rumours about the proposed tax, Pelewura actively participated in a protest march to the government house. Their purpose was to vehemently oppose the intended plan and advocate for the rights of women in the face of this discriminatory policy.
    </p>
    <br>
    <p>
    Pelewura’s legacy has continued to influence the lives of many women in Nigeria. She was a pioneer for women’s rights and her efforts to empower women have inspired many generations of women in Nigeria. Her work and contributions to the anti-colonial resistance movement have also been recognized and celebrated. Today, she is remembered as a symbol of hope and resilience, and her legacy serves as a reminder of the important role that women can play in shaping the future of their communities.
    </p>
    <br>
    <p>
    In conclusion, Alimotu Pelewura was a remarkable woman who left a lasting impact on Nigeria’s history. She was a visionary leader and a strong advocate for women’s rights, and her legacy continues to inspire generations of women to strive for equality and justice.
    </p>
    `},{id:36,x:-1.4,y:.27,z:-.7,countryName:"Nigeria",imageSource:"images/persons/36.png",popUpHeading:"Ladi Kwali",flagSource:"images/flags/Flag-Nigeria.png",flag:"Nigeria",year:"(1925-1984)",textContent:`<p>
    Ladi Kwali is a famous Nigerian potter who is considered the first person to introduce the art of pottery to Nigeria. Born in the early 20th century, she became famous for her intricate pottery designs that incorporated traditional African motifs and symbols.
    </p>
    <br>
    <p>
    Ladi Kwali learned pottery at a young age and honed her skills over the years. Her pottery pieces were not only beautiful but also functional and were used for a variety of purposes such as storing food, water and other household items. Her work gradually became popular throughout Nigeria.
    </p>
    <br>
    <p>
    In 1958, 1959, and 1962, Cardew-organised international exhibitions of Abuja pottery showcased Ladi Kwali's creations.
    </p>
    <br>
    <p>
    Today, Ladi Kwali’s pottery pieces are highly valued and sought after by collectors and museums. Her work serves as a testament to the rich cultural heritage of Nigeria and continues to inspire artists around the world. She will always be remembered as a pioneer in the world of pottery and an icon of Nigerian art.
    </p>
    <br>
    <p>
    In conclusion, Ladi Kwali was a talented and visionary artist who changed the world of pottery forever. Her work remains an inspiration to artists and art lovers around the world, and her legacy will continue to live on for generations to come.
    </p>
    `},{id:37,x:-3.03,y:.23,z:-.56,countryName:"Sierra_Leone",imageSource:"images/persons/37.png",popUpHeading:"Adelaide Casely-Hayford",flagSource:"images/flags/Flag-Sierra-Leone.png",flag:"Sierra Leone",year:"(1868-1960)",textContent:`<p>
    Adelaide Casely-Hayford was a Sierra Leonean activist, teacher, fiction writer, and feminist. Born in Sierra Leone to a Creole family, she was a strong advocate for cultural nationalism and sought to preserve the cultural heritage of her people. She was a teacher by profession and used her position to educate people on the importance of cultural preservation and nationalism.
    </p>
    <br>
    <p>
    Casely-Hayford was also a fiction writer, and her works often explored the themes of cultural identity, colonialism, and the struggles of women. She was a feminist, and her writing reflects her commitment to promoting gender equality and women's rights. She was a pioneer in advocating for the rights of women in Sierra Leone, and her works inspired many to take up the cause of women's empowerment.
    </p>
    <br>
    <p>
    Casely Hayford advocated for her educational beliefs in Sierra Leone and throughout West Africa while serving as president of the Young Women's Christian Association (YWCA) and principal of the Girls' Vocational School in Freetown, Sierra Leone, which she created.  She visited the country twice, once in 1920 and again in 1925, both times to raise money.  Each tour earned money for the Girls' Vocational School in Freetown while promoting her work to American audiences.
    </p>
    <br>
    <p>
    Casely-Hayford's legacy continues to inspire people to this day. She is remembered as a pioneering activist and cultural nationalist who was committed to preserving the cultural heritage of her people and promoting gender equality. Her works have been widely published and continue to be studied by scholars and students of African literature and history.
    </p>
    <br>
    <p>
    In conclusion, Adelaide Casely-Hayford was a trailblazer in her time, and her commitment to cultural nationalism, education, and women's rights has made her an important figure in the history of Sierra Leone and Africa. Her legacy continues to inspire people to this day, and her works will continue to be a source of inspiration and education for generations to come.
    </p>
    `},{id:38,x:.1,y:.43,z:3.3,countryName:"South_Africa",imageSource:"images/persons/38.png",popUpHeading:"Queen Nandi",flagSource:"images/flags/Flag-South-Africa.png",flag:"South Africa",year:"(1760-1827)",textContent:`<p>
    Queen Nandi was a legendary figure in South African history who lived in the late 17th and early 18th centuries. She was the mother of King Shaka, the founder of the Zulu kingdom and one of the most influential leaders in South African history. Queen Nandi is remembered as a powerful and influential woman who had a profound impact on the Zulu people and their culture.
    </p>
    <br>
    <p>
    Queen Nandi was born into a prominent family of the Elangeni tribe, and her marriage to King Senzangakhona, the ruler of the Zulu kingdom, was seen as a political alliance between the two tribes. She was a devout follower of the Zulu religion and was known for her wisdom and leadership skills. Queen Nandi's influence was evident in the way she raised King Shaka, instilling in him the values of courage, strength, and respect for his people.
    </p>
    <br>
    <p>
    Queen Nandi played an important role in the formation of the Zulu kingdom, and her contributions to the growth and development of the Zulu people are still remembered today. She was a mediator in tribal disputes and helped to maintain peace and stability within the kingdom. Queen Nandi was also a skilled warrior, and it was said that she fought in several battles alongside King Shaka.
    </p>
    <br>
    <p>
    In conclusion, Queen Nandi was a remarkable woman who made a lasting impact on the Zulu kingdom and its people. Her legacy continues to inspire generations of South Africans and serves as a reminder of the important role that women have played in shaping the history of the country.
    </p>
    `},{id:39,x:.1,y:.43,z:3.3,countryName:"South_Africa",imageSource:"images/persons/39.png",popUpHeading:"Queen Modjadji",flagSource:"images/flags/Flag-South-Africa.png",flag:"South Africa",year:"(1815-1895)",textContent:`<p>
    The first Rain Queen, Modjadji, was a powerful figure in the Balobedu tribe in South Africa during the late 19th and early 20th centuries. She was known for her mystical powers, said to control the rain and the fertility of the land. According to legend, she was born with the ability to bring rain, which was crucial for the survival of the Balobedu people in their arid region.
    </p>
    <br>
    <p>
    Modjadji was considered to be a living goddess and was revered by her people. She lived in a large palace called the Modjadji Cycad Forest, surrounded by her court of female advisers. The Rain Queen was said to have had several husbands, but she never had children, which was seen as a sign of her divine power.
    </p>
    <br>
    <p>
    Modjadji's rains came regularly, and the crops thrived. This made her a popular figure not only among the Balobedu people but also with neighbouring tribes. She was seen as a symbol of hope and strength, and her reign was a time of prosperity for the region.
    </p>
    <br>
    <p>
    Despite her reclusiveness, Modjadji remained a revered figure among the Balobedu people. Her legacy has been passed down through the generations, and her descendants have continued to hold the title of Rain Queen to this day. The Modjadji Cycad Forest is still a sacred place for the Balobedu people, and the Rain Queen remains a symbol of hope and prosperity for the tribe.
    </p>
    `},{id:40,x:.1,y:.43,z:3.3,countryName:"South_Africa",imageSource:"images/persons/40.png",popUpHeading:"Winnie Madikizela-Mandela",flagSource:"images/flags/Flag-South-Africa.png",flag:"South Africa",year:"(1936-2018)",textContent:`<p>
    Winnie Madikizela-Mandela was a South African anti-apartheid activist and politician who fought for the rights of black South Africans during the apartheid era. She was married to former South African president Nelson Mandela for 38 years and was an iconic figure in her own right.
    </p>
    <br>
    <p>
    She was later involved in the anti-apartheid movement and was banned and imprisoned by the apartheid government on several occasions for her activism. Winnie continued her political activism during her husband's 27-year imprisonment, becoming the face of the struggle against apartheid and a symbol of hope and resistance for many South Africans.
    </p>
    <br>
    <p>
    After Nelson Mandela's release from prison in 1990, Winnie became increasingly critical of the African National Congress (ANC) and was seen as a controversial figure in South African politics. Despite her criticism of the ANC, Winnie remained an important and influential figure in South African society.
    </p>
    <br>
    <p>
    Winnie was known for her fierce determination and unwavering commitment to justice, earning her the nickname "Mother of the Nation." She was a strong advocate for women's rights and was deeply involved in the fight against gender-based violence. She also spoke out against corruption and was a vocal critic of the current South African government.
    </p>
    <br>
    <p>
    Winnie Madikizela-Mandela's legacy as an anti-apartheid activist and a champion of justice will continue to inspire future generations of South Africans. She will always be remembered as a symbol of hope and resistance in the face of oppression and injustice. Her unwavering spirit and her commitment to the cause of freedom will continue to inspire future generations of activists and politicians alike.
    </p>
    `},{id:41,x:.1,y:.43,z:3.3,countryName:"South_Africa",imageSource:"images/persons/41.png",popUpHeading:"Fatima Ahmed Ibrahim",flagSource:"images/flags/Flag-South-Africa.png",flag:"South Africa",year:"(1933-2017)",textContent:`<p>
    Sudanese feminist politician Fatima Ahmed Ibrahim was the first woman to be elected to a parliament in the Arab world.
    </p>
    <br>
    <p>
    She spent her early years opposing British colonial rule in Sudan and Ibrahim Abboud's postcolonial military regime while also helping to create the Sudanese Women's Union, which later worked to win women the right to vote, maternity leave, and pensions.
    </p>
    <br>
    <p>
    Early on, Fatima's activist spirit grew. She started a student newspaper at Omdurman Secondary School called Elra'edda, or The Leading Woman, which was critical of the British colonial administration at the time. She organised a demonstration to get girls' science classes reinstated after the school cut them. She founded the Intellectual Women's Association at the age of 14 in opposition to British efforts to restrict women's roles in Sudanese society.
    </p>
    <br>
    <p>
    Fatima Ahmed Ibrahim was a trailblazer for women's education and empowerment in Sudan, and her legacy continues to inspire many Sudanese women today.
    </p>
    `},{id:42,x:0,y:.3,z:2,countryName:"Zambia",imageSource:"images/persons/42.png",popUpHeading:"Alice Mulenga Lenshina",flagSource:"images/flags/Flag-Zambia.png",flag:"Zambia",year:"(1920-1978)",textContent:`<p>
    Alice Mulenga Lenshina was a Zambian religious leader who founded the Lumpa Church in the mid-20th century. Born in the Copperbelt region of Zambia, Lenshina was a charismatic leader who gained a large following of people who were seeking spiritual guidance and support. The Lumpa Church was established as a response to the political and social struggles that were affecting the people of Zambia at the time. The church became an important source of comfort and hope for many people who were struggling to survive in a rapidly changing world.
    </p>
    <br>
    <p>
    Lenshina was a charismatic and compassionate leader who was deeply committed to the well-being of her followers. She encouraged her followers to work together and to help one another, and her teachings focused on the importance of love, peace, and unity. She encouraged her followers to strive for spiritual growth and to seek out wisdom and understanding through their faith.
    </p>
    <br>
    <p>
    Despite her popularity, Lenshina and the Lumpa Church faced opposition from both the government and other religious organisations. The government saw the Lumpa Church as a threat to its power and control, and accused Lenshina of promoting sedition and inciting rebellion. The government also criticised the Lumpa Church for its unconventional beliefs and practices, which were seen as a threat to the established religious order.
    </p>
    <br>
    <p>
    Despite the opposition, Lenshina continued to lead the Lumpa Church with great passion and dedication. Her followers remained loyal to her, and her teachings continued to inspire and guide people for many years.
    </p>
    <br>
    <p>
    In conclusion, Alice Mulenga Lenshina was a remarkable woman who inspired and touched the lives of many people in Zambia and beyond. Her leadership, charisma, and compassion will always be remembered and celebrated as a symbol of hope and spiritual guidance.
    </p>
    `},{id:43,x:.2,y:.3,z:2.5,countryName:"Zimbabwe",imageSource:"images/persons/43.png",popUpHeading:"Nehanda Nyakasikana",flagSource:"images/flags/Flag_of_Zimbabwe.png",flag:"Zimbabwe",year:"(1840-1898)",textContent:`<p>
    Nehanda Nyakasikana was a spiritual and political leader in Zimbabwe during the late 19th century. She was one of the key figures in the First Chimurenga, a war of resistance against British colonial rule.
    </p>
    <br>
    <p>
    Nehanda was born in the Zambezi Valley and was known for her exceptional spiritual and political leadership skills. She was a medium for the spirits of her ancestors and used her visions and messages to guide her people in their struggle against the British.
    </p>
    <br>
    <p>
    Nehanda was a charismatic and influential leader who rallied her people to resist the imposition of colonial rule. She was seen as a symbol of resistance and her name became synonymous with the spirit of the First Chimurenga. Her speeches and prophecies inspired her people and helped to galvanise the resistance movement.
    </p>
    <br>
    <p>
    Despite her political and spiritual influence, Nehanda faced extreme brutality from the British colonial authorities. She was captured and executed in 1898, but her legacy lives on and inspires future generations of Zimbabweans to continue the struggle for independence.
    </p>
    <br>
    <p>
    Nehanda’s memory is revered in Zimbabwe and she is regarded as a hero and a symbol of national unity and strength. Her story is told in songs, poems, and oral traditions and is an integral part of Zimbabwe’s cultural heritage.
    </p>
    <br>
    <p>
    In conclusion, Nehanda Nyakasikana was a powerful and influential leader in Zimbabwe’s struggle against colonial rule. Her charisma, political savvy, and spiritual guidance inspired her people and helped to galvanise the resistance movement. Today, she remains a symbol of national unity and strength, a testament to the courage and determination of the Zimbabwean people in their fight for independence.
    </p>
    `},{id:44,x:-7.2,y:.26,z:-3.02,countryName:"Maryland",imageSource:"images/persons/44.png",popUpHeading:"Harriet Tubman",flagSource:"images/flags/flag-Proprietor-state-Maryland-family-arms-Lord-1904.png",flag:"Maryland",year:"(1822-1913)",textContent:`<p>
    Harriet Tubman was an African American abolitionist, humanitarian, and an armed scout and spy for the United States Army during the American Civil War. Born into slavery in Maryland, Tubman escaped in 1849 and subsequently made some 13 missions to rescue approximately 70 enslaved people, including family and friends, using the network of antislavery activists and safe houses known as the Underground Railroad. During the Civil War, she served as an armed scout and spy for the Union Army. In her later years, Tubman was an activist in the movement for women's suffrage.
    </p>
    <br>
    <p>
    Tubman was born into slavery in Maryland in 1820, and was forced to work in the fields and as a domestic servant. In 1849, she escaped to Philadelphia and became involved in the Underground Railroad, a secret network of people and safe houses that helped slaves escape to freedom. Over the next ten years, she made 13 missions to rescue approximately 70 enslaved people, including family and friends. She became known as "Moses" because she led her people to freedom, just as Moses led the Israelites out of slavery in the Bible.
    </p>
    <br>
    <p>
    During the Civil War, Tubman worked as a cook, nurse, and spy for the Union Army. She also helped recruit African American soldiers for the 54th Massachusetts Infantry Regiment and the 2nd South Carolina Volunteers. After the war, she settled in Auburn, New York and became an activist in the movement for women's suffrage. She also established the Harriet Tubman Home for the Aged, which provided a home and care for elderly African Americans.
    </p>
    <br>
    <p>
    In conclusion, Harriet Tubman was an amazing woman who dedicated her life to the pursuit of freedom and equality. Her legacy continues to inspire generations, and she will always be remembered as one of the great heroes of American history.
    </p>
    `},{id:45,x:-7.534,y:.24,z:-3.6,countryName:"Ohio",imageSource:"images/persons/45.png",popUpHeading:"Lyda Newman",flagSource:"images/flags/Ohio-circle-flag-cavalry-status-United-States-1902.png",flag:"Ohio",year:"(c. 1885)",textContent:`<p>
    Lyda Newman was an American inventor, hair stylist, and suffragette born in 1867 in Ohio. She is best known for her invention of the first patented African-American hairbrush, which revolutionised the way hair was styled and cared for.
    </p>
    <br>
    <p>
    She began her career as a hair stylist and quickly realised that there were few products available for African-American hair. So, she took matters into her own hands and began experimenting with different materials and designs for a hairbrush that would work well on kinky, curly hair.
    </p>
    <br>
    <p>
    After several years of research and development, Newman finally came up with a design that worked. She patented her new hairbrush in 1898, becoming one of the few African-American women at the time to hold a patent. The brush was a huge success and helped to improve the lives of countless African-American women who were tired of dealing with hair care products that didn't work for their hair type.
    </p>
    <br>
    <p>
    In addition to her work as an inventor, Newman was also an active suffragette, fighting for the right to vote for women. She was a member of the National Association of Colored Women's Clubs and used her platform to advocate for women's rights and equality.
    </p>
    <br>
    <p>
    Lyda Newman's invention of the first patented African-American hairbrush was a pivotal moment in history. It demonstrated the ingenuity and determination of African-American women who were determined to make a difference in the world. Her legacy continues to inspire generations of women to use their talents and passions to create positive change in the world.
    </p>
    `},{id:46,x:-6.9,y:.25,z:-3.7,countryName:"New_York",imageSource:"images/persons/46.png",popUpHeading:"Sojourner Truth",flagSource:"images/flags/flag-New-York-color-uniforms-facings-American.png",flag:"New York",year:"(1797-1883)",textContent:`<p>
    Sojourner Truth was an African-American abolitionist and women’s rights activist who lived in the 19th century. Born into slavery in New York, she was freed in 1826 and became an itinerant preacher, travelling around the country to speak out against slavery and for women’s rights.
    </p>
    <br>
    <p>
    One of her most famous speeches was the “Ain’t I a Woman?” speech, delivered at a women’s rights convention in 1851. In this speech, Truth challenged the notion that women were inferior to men and that black women were doubly oppressed. She pointed out the hypocrisy of a system that claimed to protect women’s rights while denying those rights to women of colour.
    </p>
    <br>
    <p>
    Truth also spoke out against the Fugitive Slave Law of 1850, which required the return of escaped slaves to their owners. She worked with the Underground Railroad to help escaped slaves reach safety and was known to physically confront slave catchers.
    </p>
    <br>
    <p>
    In addition to her activism, Truth was also known for her distinctive voice and storytelling style. Her speeches were filled with humour, irony, and wit, and she was able to connect with her audiences in a powerful way.
    </p>
    <br>
    <p>
    Despite the odds against her, Sojourner Truth left a lasting legacy. Her activism helped lay the groundwork for the modern civil rights and women’s rights movements. Her speeches continue to inspire and challenge us to this day, reminding us that the fight for equality is far from over.
    </p>
    <br>
    <p>
    In conclusion, Sojourner Truth was a remarkable woman who dedicated her life to fighting for justice and equality. Her unwavering commitment to speaking out against slavery and for women’s rights is a testament to her courage and determination. She remains an inspiration to us all and a reminder of the power of one person to make a difference.
    </p>
    `},{id:47,x:-6.63,y:.25,z:-3.7,countryName:"Massachussetts",imageSource:"images/persons/47.png",popUpHeading:"Sarah Parker Remond",flagSource:"images/flags/flag-pine-tree-Massachusetts-state-field-arms-1971.png",flag:"Massachussetts",year:"(1826-1894)",textContent:`<p>
    Sarah Parker Remond was an African American abolitionist, lecturer, and medical practitioner born in 1826 in Salem, Massachusetts. She was the daughter of two prominent abolitionists, who educated her on the importance of the anti-slavery movement.
    </p>
    <br>
    <p>
    Sarah became an active member of the abolitionist movement and delivered powerful speeches on slavery, women's rights, and equality. She was a fierce advocate for the rights of African Americans and used her platform to raise awareness about the injustices and cruelty of slavery.
    </p>
    <br>
    <p>
    Her speeches were not limited to the United States and she travelled extensively, delivering speeches in England, Ireland, Scotland, and other European countries. She was well-received by audiences and her speeches inspired many people to join the abolitionist movement.
    </p>
    <br>
    <p>
    Sarah's dedication to the anti-slavery movement was further demonstrated by her involvement in the Underground Railroad, which was a network of secret routes and safehouses used by escaped slaves to reach freedom in the North. Sarah provided shelter and assistance to many escaped slaves and was known for her bravery and compassion.
    </p>
    <br>
    <p>
    In addition to her activism, Sarah also trained as a medical practitioner and worked as a nurse in various hospitals, providing care to those in need. She was a trailblazer in her field and paved the way for other African American women to pursue careers in medicine.
    </p>
    <br>
    <p>
    Sarah's contributions to the abolitionist movement and her dedication to promoting equality and justice continue to inspire people today. She was a passionate and determined advocate for change and her legacy lives on through her work and her speeches.
    </p>
    <br>
    <p>
    In conclusion, Sarah Parker Remond was a remarkable woman who fought for the rights of African Americans and advocated for equality and justice. Her speeches inspired many people to join the abolitionist movement, and her dedication to the cause continues to inspire people today.
    </p>
    `},{id:48,x:-7.52,y:.23,z:-2.78,countryName:"South_Carolina",imageSource:"images/persons/48.png",popUpHeading:"Mary McLeod Bethune",flagSource:"images/flags/Flag_of_South_Carolina.png",flag:"South Carolina",year:"(1875-1955)",textContent:`<p>
    Mary McLeod Bethune was a prominent African-American educator, civil rights leader and women’s rights activist. Born in 1875 in South Carolina to former slaves, she grew up in poverty but was determined to get an education. After working as a teacher, she founded the National Council of Negro Women in 1935 and was a leader in the National Association for the Advancement of Colored People (NAACP). She was also a strong advocate for women’s rights and was appointed as a special advisor on minority affairs by President Franklin D. Roosevelt.
    </p>
    <br>
    <p>
    Bethune was a tireless campaigner for equality, advocating for voting rights, education and women’s issues. She believed in the power of education to uplift and empower communities, and established the National Council of Negro Women to provide education and support to African-American women.
    </p>
    <br>
    <p>
    Throughout her life, Bethune was a role model for generations of African-American women, inspiring them to fight for their rights and pursue their dreams. Her legacy continues to this day, with the Mary McLeod Bethune Foundation working to promote her legacy and carry on her work.
    </p>
    <br>
    <p>
    Bethune’s life and work demonstrate the power of determination, hard work and the pursuit of education in overcoming adversity and achieving great things. She was an inspiring leader and a tireless campaigner for civil rights and women’s rights, and her legacy continues to inspire and empower people to this day.
    </p>
    `},{id:49,x:-8.92,y:.47,z:-4.01,countryName:"Canada",imageSource:"images/persons/49.png",popUpHeading:"Viola Desmond",flagSource:"images/flags/canada-flag.png",flag:"Canada",year:"(1914-1965)",textContent:`<p>
    Viola Desmond was a civil rights activist who fought for the rights of Black people in Canada. She was born on July 6, 1914, in Halifax, Nova Scotia and grew up in a family of entrepreneurs. Her father owned a successful barber shop, and her mother was a hairdresser. This upbringing instilled in her a strong sense of self-reliance and determination, qualities that would serve her well in her later life as a civil rights activist.
    </p>
    <br>
    <p>
    In 1946, Desmond was travelling to Sydney, Nova Scotia, to attend a beauty school. During her trip, her car broke down in New Glasgow, and she decided to watch a movie while she waited for it to be fixed. She went to the Roseland Theatre, but was told that she could only sit in the balcony, which was reserved for Black people. Desmond refused to move and was subsequently arrested and charged with tax evasion.
    </p>
    <br>
    <p>
    Desmond's arrest was a pivotal moment in Canadian civil rights history. It galvanised the Black community and brought attention to the ongoing struggles for equality and justice. The incident was widely reported in the press and inspired other Black people to challenge the segregation policies of the time.
    </p>
    <br>
    <p>
    After her release from jail, Desmond became an activist and used her voice to speak out against the segregation policies that Black people faced in Canada. She sued the theatre and the government for damages, but the case was eventually dismissed. Despite this setback, Desmond continued to fight for the rights of Black people and inspired a new generation of activists in Canada.
    </p>
    <br>
    <p>
    Viola Desmond's legacy continues to live on in Canada today. In 2018, she was honoured with a postage stamp and was the first Canadian woman to be featured on a banknote. She remains an inspiration to all who believe in the power of standing up for what is right, even in the face of adversity. Her story is a testament to the strength and resilience of the human spirit, and a reminder of the ongoing struggle for equality and justice for all people.
    </p>
    `},{id:50,x:-8.92,y:.47,z:-4.01,countryName:"Canada",imageSource:"images/persons/50.png",popUpHeading:"Jean Augustine",flagSource:"images/flags/canada-flag.png",flag:"Canada",year:"(1937-Present)",textContent:`<p>
    Jean Augustine is a trailblazer and pioneer in the Canadian political landscape, as well as a dedicated and respected leader in the Black community. She was born on September 21st, 1937, in Grenada and immigrated to Canada in 1960. Augustine’s journey from a young immigrant to the first Black woman elected to the House of Commons in Canada is a testament to her determination and hard work.
    </p>
    <br>
    <p>
    Augustine's political career began when she was elected to the Toronto School Board, and then to the Metropolitan Toronto Council. She later served as Minister of State for Multiculturalism and the Status of Women from 1991 to 1993. In 1993, Augustine was elected as the Member of Parliament for Etobicoke-Lakeshore, a position she held until 2006. She was also the first Black woman to be appointed to the federal cabinet, and her work as a member of Parliament focused on advocating for human rights, social justice, and equality.
    </p>
    <br>
    <p>
    Throughout her career, Augustine has been an advocate for multiculturalism and the rights of Black Canadians. She was instrumental in the creation of February as Black History Month in Canada, which recognizes the achievements and contributions of the Black community in the country. She has also been a strong supporter of education and has worked to ensure that all Canadians, regardless of their background, have access to quality education and opportunities.
    </p>
    <br>
    <p>
    Augustine’s commitment to her community extends beyond her political career. She is a founding member of the Congress of Black Women of Canada and has served on various boards and committees, including the Canadian Council of Black Women, and the Canadian Race Relations Foundation.
    </p>
    <br>
    <p>
    In conclusion, Jean Augustine is a remarkable and inspiring leader who has made a lasting impact on the Canadian political and cultural landscape. She has worked tirelessly to promote equality, justice, and opportunity for all Canadians, and her contributions to the country will not be forgotten.
    </p>
    `},{id:51,x:-6.22,y:.27,z:3.5,countryName:"Argentina",imageSource:"images/persons/51.png",popUpHeading:"Rita Montero",flagSource:"images/flags/Flag-Argentina.png",flag:"Argentina",year:"(1928-2013)",textContent:`<p>
    Rita Montero was a famous Argentine singer, actress, and performer born on January 10, 1928, in Buenos Aires. She began her career in the 1950s as a tango singer, and quickly rose to fame with her beautiful voice and stage presence. She became one of the most renowned tango singers in Argentina, and her concerts were attended by thousands of people. Montero was also a talented actress, and starred in several popular films and musicals.
    </p>
    <br>
    <p>
    Throughout her career, Montero was known for her ability to captivate audiences with her powerful voice and soulful performances. Her renditions of classic tango songs such as "Adiós Muchachos" and "Mi Buenos Aires Querido" are still considered some of the best in the genre. Montero was also a humanitarian, and used her fame to support various charitable causes, including the fight against poverty and inequality.
    </p>
    <br>
    <p>
    Rita Montero passed away on March 26, 2013, at the age of 85. Her legacy continues to live on through her music and performances, and she is remembered as one of the greatest tango singers of all time. Her contribution to the world of music and her tireless dedication to social justice have left a lasting impact on Argentine culture and history. Montero will always be remembered as a talented performer, a humanitarian, and a true icon of Argentine music.
    </p>
    `},{id:52,x:-5.73,y:.24,z:1.5,countryName:"Brazil",imageSource:"images/persons/52.png",popUpHeading:"Carolina Maria de Jesus",flagSource:"images/flags/Flag_of_Brazil.png",flag:"Brazil",year:"(1914-1977)",textContent:`<p>
    Carolina Maria de Jesus was born on March 14th, 1914 in Minas Gerais. Most of her life she lived in Sao Paulo, Brazil. Her parents were sharecroppers. Her father was a married man already when her mom got pregnant, so he didn’t really pay mind to her. Carolina was never introduced to school until her mother’s landowner’s wife paid for her education and other poor black children in the neighbourhood. She stopped going to school by the second grade, which was long enough for her to know how to read and write. Her family was not allowed to attend the neighbourhood Catholic Church; because her mother had two children with married men. This didn’t stop Carolina from believing in her religion, she stood a devoted Catholic.
    </p>
    <br>
    <p>
    In the year 1937, she was forced to move to the metropolis of Sao Paulo after her mom passed away. She was forced to create her home out of cardboard, cans and anything that was available around her. Carolina made herself responsible that her family had all the necessary, every night she would collect paper and resell it the next day, and with that money she would buy food. Her family consisted of three children, Vera Eunice, Jose Carlos, and Joao Jose. All her children had different fathers, one being a white rich guy. She began her writing in journals that she would find in the street and in them she would write down her everyday struggle and life in the favela. Her neighbours weren’t a fan of her; they hated seeing her write because they didn’t know how to. Carolina was never the type to have a settled relationship, even though she was an attractive female. She had experienced seeing too much domestic violence in the favelas; therefore, never sought marriage and rather depended on herself.
    </p>
    <br>
    <p>
    Carolina’s diary was published in August 1960 into thirteen languages. It is known as a best seller in North America and Europe. In New York City it was published as Child of the Dark: The Diary of Carolina Maria de Jesus in 1962. In her diary she wrote about how poverty, struggles and other circumstances from living in the favelas can cause desperation for families. Her diary had actual real names, therefore; her neighbours despised her and she became a social victim after the publication. Her family was thrown pots and rocks, especially after she moved into a brick house with the money she received from her book. In 1960, her book The Garbage place, was published and it became the most successful book in Brazilian publishing history.
    </p>
    <br>
    <p>
    Carolina was able to accomplish her dreams of becoming a writer without the help of others. She brought awareness of the living conditions in the favelas that made politicians and the Governor of Sao Paulo to begin projects that would show women how to care for their families, sew and know good hygiene. She was unique, because even being categorized as lowest in society didn't stop her from having aspirations. After her Diary, she had four additional books. Carolina passed away on February 13, 1977.
    </p>
    `},{id:53,x:-5.73,y:.24,z:1.5,countryName:"Brazil",imageSource:"images/persons/53.png",popUpHeading:"Madalena Caramuru",flagSource:"images/flags/Flag_of_Brazil.png",flag:"Brazil",year:"(DOB uncertain)",textContent:`<p>
    Madalena Caramaru, the daughter of a Portuguese trader and an Indigenous Tupinambás woman, became the first literate woman in Brazil. Caramaru learned to read and write with the instruction of either her father or husband. Letters she later wrote to the regional Catholic missionary, Father Manuel de Nóbrega, urged the Church to abandon its maltreatment of Indigenous children and to support educational access for women. These petitions, although well-received by the Father, were ultimately denied by the Portuguese royalty.
    </p>
    `},{id:54,x:-5.73,y:.24,z:1.5,countryName:"Brazil",imageSource:"images/persons/54.png",popUpHeading:"Maria Felipa de Oliveira",flagSource:"images/flags/Flag_of_Brazil.png",flag:"Brazil",year:"(Unknown-1873)",textContent:`<p>
    Maria Felipa de Oliveira was a Brazilian slave and abolitionist who lived in the 19th century. She was born in the state of Bahia and worked as a domestic servant for much of her life. Despite facing extreme poverty and oppression, she was a charismatic and influential figure in the local abolitionist movement. She was known for her speeches, in which she encouraged enslaved people to fight for their freedom and dignity. Her activism and tireless efforts in the cause of abolition earned her the respect and admiration of both enslaved and free people. She died in 1873, leaving behind a legacy of courage, perseverance, and selflessness. Her life remains an inspiration to those who fight for social justice and human rights.
    </p>
    `},{id:55,x:-7.559,y:.44,z:-.07,countryName:"Colombia",imageSource:"images/persons/55.png",popUpHeading:"Teresa Martinez de Varela",flagSource:"images/flags/Flag_of_Colombia.png",flag:"Colombia",year:"(1913-1998)",textContent:`<p>
    Teresa Martinez de Varela was an Afro-Colombian author and journalist born in the late 19th century. She was also one of the first women in Colombia to publish her works. Her literary works focused on the realities of life for women in her country, including their struggles and experiences. She was particularly interested in the plight of rural women and worked to bring attention to their often-ignored stories.
    </p>
    <br>
    <p>
    In addition to her journalism, Martinez de Varela wrote several books and poems. She was a talented writer who used her work to highlight the issues that women in Colombia faced. Her books were well received and her poems were highly regarded for their lyrical beauty and powerful messages.
    </p>
    <br>
    <p>
    Martinez de Varela passed away in the mid-20th century, but her legacy lives on. She was a trailblazer who paved the way for women writers in Colombia and helped to bring attention to the important issues facing women in her country. Her writing continues to inspire and educate people today, and she remains an important figure in Colombian literary history.
    </p>
    `},{id:56,x:-7.745,y:.54,z:.9,countryName:"Peru",imageSource:"images/persons/56.png",popUpHeading:"Victoria Santa Cruz",flagSource:"images/flags/Flag-Peru.png",flag:"Peru",year:"(1922-2014)",textContent:`<p>
    Victoria Santa Cruz was a Peruvian Afro-Peruvian singer, dancer, and social activist who is considered as one of the pioneers of the Afro-Peruvian music genre. From a young age, she was exposed to the rich culture and traditions of the Afro-Peruvian community, and it was here that she discovered her love for music and dance.
    </p>
    <br>
    <p>
    In the early 1950s, she moved to Paris, France, where she continued to develop her skills as a performer and musician. It was here that she met and worked with some of the most influential figures in the world of music and dance. She was also an activist and was involved in the fight for social justice and human rights, particularly for Afro-Peruvian people.
    </p>
    <br>
    <p>
    In the late 1960s, she returned to Peru and founded the Afro-Peruvian Theatre Company, which was dedicated to preserving and promoting Afro-Peruvian culture through music and dance. Through her company, she performed in numerous shows and concerts, and was instrumental in spreading the popularity of Afro-Peruvian music and dance throughout the country.
    </p>
    <br>
    <p>
    Victoria Santa Cruz was also a noted social activist, and used her platform to raise awareness about the struggles faced by Afro-Peruvian people, and to call for greater recognition of their contributions to Peruvian culture. She was honoured with numerous awards and accolades throughout her career, and her work continues to inspire and influence musicians and artists around the world.
    </p>
    <br>
    <p>
    Victoria Santa Cruz is remembered as a trailblazer in the world of Afro-Peruvian music and dance, and for her unwavering dedication to the preservation and promotion of Afro-Peruvian culture. Her legacy continues to inspire generations of musicians and activists, and her work will always be remembered as an important chapter in the history of Peruvian music and dance.
    </p>
    `},{id:57,x:-5.94,y:.34,z:3.58,countryName:"Uruguay",imageSource:"images/persons/57.png",popUpHeading:"Virginia Brindis de Salas",flagSource:"images/flags/Flag-Uruguay.png",flag:"Uruguay",year:"(1908-1958)",textContent:`<p>
    Virginia Brindis de Salas was the first published black woman writer in Uruguay. She was born on September 18, 1908 in the capital, Montevideo, to José Salas and Maria Blanca Rodriguez. Afro Latinos in Uruguay as elsewhere in Latin America are the descendants of enslaved people. In Uruguay, where 92 percent of citizens trace their ancestry to Europe, Afro and Native Uruguayans have had to fight for visibility, while whiteness has been emphasised in mainstream national life.
    </p>
    <br>
    <p>
    In Latin America, these larger currents among the black diaspora solidified in what is known as the Negritude movement. Brindis de Salas was part of a group of black artists and intellectuals, including Juan Julio Arrascaeta, Carlos Cardioso Pereira, and Pilar Barrios, who came of age in the 1930s and 1940s and began to assert a black identity and pride among Afro Uruguayans. Groups like the Circle of Black Intellectuals, Artists, Journalists, and Writers (1935) and the Black Uruguayan Association of Culture and Society provided institutional support to promote the black arts.
    </p>
    <br>
    <p>
    De Salas contributed her poetry to the black artistic journal Nuestra Raza (Our Race), she was a co-founder of the political party Partido Autoctono Negro (the Black Native Party). Her best-known works were published in the poetry collections entitled Pregon de Marimorena (1946) and Cien Careles de Amor (1949)—Mary Morena’s Call and One Hundred Prisons of Love, respectively. Virginia Brindis de Salas’s work, although overlooked in her home country for years, was certainly influential among black artists and activists outside of her homeland, as Chilean, German, and U.S.-born writers and activists have all pointed to her importance.
    </p>
    <br>
    <p>
    In the 1990s, there was a resurgence of interest in the contributions of Afro Latinos to the larger national cultures of Latin America. An important anthology showcasing the works of black writers from the western hemisphere was published, and it included some of Virginia de Salas’s works. Questions arose about Virginia Brindis de Salas as the actual author of her poetry. Another poet, Julio Guadalupe tried to take credit but his claims about authorship have been debunked.
    </p>
    `},{id:58,x:-7.1,y:.3,z:-.25,countryName:"Venezuela",imageSource:"images/persons/58.png",popUpHeading:"Argelia Laya",flagSource:"images/flags/Flag-Venezuela.png",flag:"Venezuela",year:"(1926-1997)",textContent:`<p>
    Argelia Laya was an Afro-Venezuelan educator and women’s rights activist. She fought for women’s suffrage and was one of the first to openly speak of a woman’s right to have children outside of wedlock or obtain an abortion.  She served as a guerrilla fighter for the communist party in Venezuela and she was one of the founders of the Movement to Socialism (MAS), pressing for anti-discrimination regulations to gain socio-economic parity for minorities, workers, and women.
    </p>
    <br>
    <p>
    In 1946, Laya co-founded the National Union of Women Organization (Organización de la Unión Nacional de Mujeres) and served as the secretary of the organisation for over a decade. She called for debates and urged that women be granted suffrage. During her early years of teaching, Laya had a child and as an unmarried mother was suspended from teaching for her immorality. From this personal experience, Laya started fighting against women’s discrimination and she wrote a letter of protest to the Education Minister, advocating her right to be unmarried and have a child. After several months, she became more vocal about the ways in which women faced discrimination. Recognizing that it was not just teachers who were barred from their jobs but that pregnant students were also suspended from school, Laya pressed for reforms so that all citizens' universal right to education was recognized.
    </p>
    <br>
    <p>
    In the early 1970s, she joined and founded a splinter group of the communist party, the Movement to Socialism (MAS). As one of the founders, Laya was the first woman to occupy such a high position in any political party in Venezuela. Working to build the new party, she pressed for a code of ethics to be established for the protection of workers, laws to prohibit violence against women, and pushed for regulations to prevent discrimination and injustices toward Afro-Venezuelans and other minorities, peasants, and women.
    </p>
    <br>
    <p>
    In the 1980s, Laya served on the Women’s Advisory Commission to the Presidency of the Republic and she took part in the civil code reforms to eliminate discrimination in adoption procedures to protect both mothers and children’s rights. In 1985, she was selected to attend the United Nations Third World Conference on Women, held in Nairobi, Kenya as the Venezuelan delegate. In 1994 she attended the First Meeting to Discuss Women and Education in Bolivia. There, she helped draft a program for eliminating sexism through education. The plan called for gender issues to become integral parts of study and dialogue throughout the entirety of one’s education.
    </p>
    <br>
    <p>
    Argelia Laya died on 27 November 1997 in Caracas. To this day, she is still regarded as one of the most influential female leaders in Venezuelan history. Throughout Venezuela, there are programs and policies related to gender equality that bear her name.
    </p>
    `},{id:59,x:-2.2,y:.23,z:-4.5,countryName:"England",imageSource:"images/persons/59.png",popUpHeading:"Mary Seacole",flagSource:"images/flags/Flag-England.png",flag:"England",year:"(1805-1881)",textContent:`<p>
    Mary Seacole was a Jamaican-born nurse and businesswoman who lived from 1805 to 1881. She was born in Kingston, Jamaica to a Scottish soldier and a Creole mother. Mary was trained in traditional medicine and nursing by her mother, who was a healer. She quickly became well known for her skills and was called upon to treat patients from all walks of life.
    </p>
    <br>
    <p>
    Mary Seacole wanted to help soldiers during the Crimean War, but she was not allowed to join the British nursing corps. Undeterred, she made her way to Crimea on her own and set up the "British Hotel" near the battlefields. The hotel provided food, comfort, and medical care to soldiers, and became a popular gathering place for soldiers and officers alike.
    </p>
    <br>
    <p>
    Seacole's work was not always recognized or appreciated. Some in the British medical establishment considered her a hindrance, and she was often criticised for her unconventional methods. Nevertheless, she was beloved by the soldiers she treated, and many wrote of their gratitude and admiration for her in letters home.
    </p>
    <br>
    <p>
    After the war, Seacole returned to Britain, where she was honoured by many of the soldiers she had treated. Despite her popularity, however, she was financially ruined and lived in poverty for the rest of her life.
    </p>
    <br>
    <p>
    Today, Mary Seacole is celebrated as a pioneering figure in the history of nursing and medicine. She is remembered as a brave and compassionate woman who made a difference in the lives of countless soldiers, and her legacy continues to inspire nurses and healthcare workers around the world.
    </p>
    `},{id:60,x:-2.2,y:.23,z:-4.5,countryName:"England",imageSource:"images/persons/60.png",popUpHeading:"Una Marson",flagSource:"images/flags/Flag-England.png",flag:"England",year:"(1905-1965)",textContent:`<p>
    Una Marson was a Jamaican feminist, poet, playwright, and broadcaster who was born on February 6th, 1905, in Santa Cruz, Jamaica. She was a founding member of the Jamaican Poetry League and was considered one of the most talented poets of her generation.
    </p>
    <br>
    <p>
    In 1932, Marson moved to London and became involved in the British feminist and anti-colonial movements. She was a leading voice for women's rights and wrote for various newspapers and magazines. She was also a frequent contributor to BBC Radio and was the first black woman to be employed by the BBC in 1935. During her time at the BBC, Marson was a pioneer in promoting the work of black writers and musicians, and was a strong advocate for the rights of women and people of colour.
    </p>
    <br>
    <p>
    Marson's activism and writing brought her recognition in the Caribbean and around the world. She was awarded the Silver Musgrave Medal by the Institute of Jamaica in 1930, and her work was included in several anthologies of Caribbean poetry.
    </p>
    <br>
    <p>
    Una Marson's legacy continues to inspire and influence artists, writers, and activists around the world. She remains an important figure in the history of Caribbean and African diaspora literature and is remembered as a pioneer of black feminism and anti-colonial activism.
    </p>
    `},{id:61,x:-2.2,y:.23,z:-4.5,countryName:"England",imageSource:"images/persons/61.png",popUpHeading:"Connie Mark",flagSource:"images/flags/Flag-England.png",flag:"England",year:"(1923-2007)",textContent:`<p>
    Constance Winifred Mark was a Jamaican-born community organiser and activist who devoted much of her life to advocating for social justice and equality. She was born in 1923 in Kingston, Jamaica and emigrated to the United Kingdom in the 1950s. Mark was a strong voice in the African-Caribbean community and was involved in various organisations and initiatives aimed at promoting equality and fighting against discrimination.
    </p>
    <br>
    <p>
    Mark was particularly active in the fight against racial discrimination and worked tirelessly to raise awareness of the issue through her involvement in various community organisations. She also organised events and rallies aimed at promoting racial equality and was a passionate advocate for equal rights and opportunities for African-Caribbean communities.
    </p>
    <br>
    <p>
    In addition to her work in the community, Mark was also involved in politics. She served as a local councillor for many years and was an advocate for social justice and equality in all areas of life, including education, health, and employment.
    </p>
    <br>
    <p>
    Throughout her life, Mark remained dedicated to her community and her cause, and her legacy continues to inspire others to stand up for justice and equality. Despite facing numerous challenges and obstacles, she remained steadfast in her beliefs and her unwavering commitment to her cause earned her a reputation as a tireless and dedicated activist.
    </p>
    <br>
    <p>
    In recognition of her contributions to society, Mark was awarded numerous honours;She received honours by becoming a member of the Order of the British Empire in 2001. She continued to be an inspiration to many and her work continues to be remembered as a testament to her commitment to social justice and equality.
    </p>
    `},{id:62,x:-2.2,y:.23,z:-4.5,countryName:"England",imageSource:"images/persons/62.png",popUpHeading:"Claudia Jones",flagSource:"images/flags/Flag-England.png",flag:"England",year:"(1915-1964)",textContent:`<p>
    Claudia Jones was a political activist, journalist who broke new ground, and a feminist. In 1915, Jones was born in Trinidad. Jones was banished to the UK in 1955 after having lived and worked in the US while being a committed member of the American Communist Party.
    </p>
    <br>
    <p>
    Jones maintained her lifetime battle against racial injustice and intolerance in the UK. She collaborated with activist groups to fight racial immigration laws, workplace discrimination, and housing inequalities. Jones was a strong supporter of women's rights as well.
    </p>
    <br>
    <p>
    Jones established the West Indian Gazette (WIG), an anti-racist publication that promoted social equality, in 1958. The first Black commercial newspaper in Britain was this. WIG aimed to bring together diasporic West Indians and promote communication with Black internationalist freedom forces. The research also outlined patterns of racism, racial harassment, and anti-Black violence in the UK.
    </p>
    <br>
    <p>
    Jones worked to improve Black British communities after violent riots broke out in Notting Hill in 1958. In 1959, she assisted with the beginning of the Notting Hill Carnival. At St Pancras Town Hall, the first funfair was held. It was a celebration of West Indian culture and tradition that was broadcast by the BBC. The Notting Hill funfair is currently the second-largest street festival on the planet. It serves as a gathering place for artists, activists, and large groups of people who want to show their solidarity while taking in the music, dance, calypso, steel drums, masquerade, and food vendors.
    </p>
    <br>
    <p>
    Not only did Claudia Jones play a significant role in the fight for racial equality in the UK, but she also contributed to the promotion of Caribbean culture in British society.
    </p>
    `},{id:63,x:-1.85,y:.245,z:-3.8,countryName:"France",imageSource:"images/persons/63.png",popUpHeading:"Josephine Baker",flagSource:"images/flags/Flag_of_France.png",flag:"France",year:"(1906-1975)",textContent:`<p>
    Josephine Baker was born on June 3, 1906 in St. Louis, Missouri, USA. She was an American-born French dancer, singer, and actress who rose to fame in the 1920s and 1930s as a performer in France. Baker was one of the first African American women to become an international star and was known for her sultry and seductive performances on stage.
    </p>
    <br>
    <p>
    At the age of 13, Baker left home and headed to New York City where she began her career as a chorus girl in various shows. In 1925, she moved to Paris, France, where she quickly became a sensation in the entertainment world. Her first major performance was in the revue "La Revue Nègre," where she danced in a banana skirt and became an overnight sensation.
    </p>
    <br>
    <p>
    Baker's unique style of dance and her daring costumes, combined with her stunning beauty, made her an instant icon. She was soon performing in the largest theatres and cabarets in France, and her fame spread quickly throughout Europe. In 1937, she was awarded the Legion of Honor, the highest decoration in France, for her contributions to French culture.
    </p>
    <br>
    <p>
    Throughout her career, Baker used her platform to fight for civil rights and equality. She was a member of the French Resistance during World War II, and her performances often had political undertones that addressed the fight for equal rights and freedom.
    </p>
    <br>
    <p>
    Baker's later years were marked by financial difficulties, but she remained a beloved figure in the entertainment world. She died on April 12, 1975, in Paris, France, at the age of 68. Today, she is remembered as a trailblazer and icon who used her talents and platform to fight for justice and equality.
    </p>
    `},{id:64,x:-1.75,y:.23,z:-4.5,countryName:"Germany",imageSource:"images/persons/64.png",popUpHeading:"Audre Lorde",flagSource:"images/flags/Flag_of_Germany.png",flag:"Germany",year:"(1934-1992)",textContent:`<p>
    Audre Lorde was an American writer, poet, and activist who spent a significant portion of her career in Germany. Lorde was a leading voice in the African American and LGBTQ+ communities, and her work centred around themes of race, gender, sexuality, and social justice. Lorde was invited to Germany several times to give lectures and readings, and she used her platform to raise awareness about the struggles of marginalised communities.
    </p>
    <br>
    <p>
    In Berlin, Lorde became involved with a vibrant community of artists, activists, and intellectuals who shared her passion for social justice. She gave readings of her poems, which were well received by audiences, and her work was widely translated into German. Lorde also used her time in Germany to engage with local communities and to build bridges between the African American and German experiences.
    </p>
    <br>
    <p>
    Lorde's work had a lasting impact on German society, inspiring new generations of activists and artists to address issues of race, gender, and sexuality. Her visits to Germany helped to build bridges between communities and encouraged the growth of new alliances and coalitions dedicated to promoting social justice. Lorde's legacy continues to be celebrated in Germany, where her work is still widely read and studied.
    </p>
    <br>
    <p>
    In conclusion, Audre Lorde's work in Germany was a significant part of her legacy as a writer, poet, and activist. Her visits to the country helped to raise awareness about the struggles of marginalised communities and inspired new generations of activists and artists to address issues of race, gender, and sexuality.
    </p>
    `},{id:65,x:-1.1,y:.23,z:-5.2,countryName:"Norway",imageSource:"images/persons/65.png",popUpHeading:"Ruth Reese",flagSource:"images/flags/Flag-Norway.png",flag:"Norway",year:"(1921-1990)",textContent:`<p>
    Ruth Reese was a trailblazer in the Norwegian music industry. Born in 1921, she was one of the first prominent black singers in Norway and paved the way for future generations of musicians. Reese’s powerful voice and charming personality captured the hearts of Norwegians and helped break down the barriers of racial discrimination in the country. She began her music career in the late 1940s and quickly rose to fame, becoming one of the most sought-after singers in Norway. Her repertoire included a mix of jazz, blues, and popular music, and her live performances were characterised by her dynamic stage presence and captivating voice.
    </p>
    <br>
    <p>
    Reese’s impact on the music industry was not limited to her musical talent. She was also a strong advocate for racial equality and used her platform to bring attention to the issues of discrimination and prejudice in Norway.
    </p>
    <br>
    <p>
    Her work inspired countless young musicians and encouraged a new generation of artists to pursue their passions and dreams, regardless of their race or background.
    </p>
    <br>
    <p>
    She was also an activist involved in the fight against racism. Reese started writing articles on racial issues for publications like the Dagbladet. She began to raise awareness of the issues Africans and black people faced in her 1959 essay Var hud er sort (Our Skin Is Black), which addressed the Norwegian disregard for racist practices in South Africa or the United States, such as the sale of South African fruits and wines.
    </p>
    <br>
    <p>
    Ruth Reese passed away in 1990, but her legacy lives on. Today, she is remembered as one of Norway’s most beloved and influential musicians and a pioneer in the fight for racial equality. Her music continues to be enjoyed by fans around the world, and her impact on the Norwegian music industry continues to be felt. Reese’s contributions to the world of music and her unwavering commitment to social justice serve as an inspiration to all those who follow in her footsteps.
    </p>
    `},{id:66,x:-1.48,y:.245,z:-4,countryName:"Switzerland",imageSource:"images/persons/66.png",popUpHeading:"Tilo Frey",flagSource:"images/flags/Flag-Switzerland.png",flag:"Switzerland",year:"(1923-2008)",textContent:`<p>
    Tilo Frey was a Swiss politician, who made history as the first person of African descent and one of the first women to be elected to the National Council in Switzerland. She was born in 1923 in Maroua, Cameroon and grew up in a multiracial family, which inspired her to advocate for diversity and equality throughout her life.
    </p>
    <br>
    <p>
    After the Canton of Neuchâtel granted women the right to vote and run for public office in 1959, she started to get involved in politics. She joined the Free Democratic Party of Switzerland (FDP), and in 1964 she won a seat in Neuchâtel's city council. She was elected to the National Council in 1971, where she served for 20 years, promoting a range of issues, including equal opportunities for women, immigration policy and environmental protection.
    </p>
    <br>
    <p>
    Frey was particularly passionate about the rights of women and people of colour. She was a staunch supporter of affirmative action programs, advocating for increased opportunities for underrepresented groups in all sectors of society. She was also a champion for education reform, advocating for more inclusive classrooms and teachers who were trained to meet the needs of all students, regardless of their background.
    </p>
    <br>
    <p>
    Tilo Frey's legacy continues to inspire future generations of Swiss politicians and activists. Her commitment to social justice and her unwavering dedication to equality continue to be an inspiration to all who knew her, and her legacy will live on forever.
    </p>
    `},{id:67,x:-2.3,y:.23,z:-4.6,countryName:"Wales",imageSource:"images/persons/67.png",popUpHeading:"Shirley Bassey",flagSource:"images/flags/Flag-Wales.png",flag:"Wales",year:"(1937-Present)",textContent:`<p>
    Shirley Bassey is a legendary Welsh singer who has captured the hearts of millions of fans with her powerful and soulful voice. Born in 1937 in Cardiff, Bassey started singing at a young age and quickly became known for her powerful voice and emotional delivery. Throughout her career, she has released many iconic albums and hit songs that have been loved by fans all over the world.
    </p>
    <br>
    <p>
    Bassey's biggest hit was the theme song for the James Bond movie "Goldfinger," which was a huge success  and remains one of her most popular songs to this day. She has also released numerous other successful albums and singles, including "Never, Never, Never," "Big Spender," and "I Am What I Am."
    </p>
    <br>
    <p>
    Bassey's voice is characterised by its rich and powerful tone, which has made her a sought-after performer for special events and concerts all over the world. She has received numerous awards and accolades throughout her career, including a knighthood from Queen Elizabeth II in 1999. In addition to her singing career, Bassey has also been a tireless advocate for various causes, including environmental protection and human rights.
    </p>
    <br>
    <p>
    Despite her success, Bassey has never lost her humble roots and continues to be an inspiration to fans all over the world. She remains one of the most beloved and respected performers of all time, and her music continues to be enjoyed by generations of fans. Whether you're a longtime fan or just discovering her for the first time, Shirley Bassey's voice is sure to touch your soul and leave you breathless.
    </p>
    `},{id:68,x:-6.68,y:.249,z:-1.3,countryName:"Antigua_and_Barbuda",imageSource:"images/persons/68.png",popUpHeading:"Bertha Alexandrina Higgins",flagSource:"images/flags/Flag-Antigua-and-Barbuda.png",flag:"Antigua and Barbuda",year:"(1889-1966)",textContent:`<p>
    Bertha Alexandrina Higgins was a trailblazer for women's rights and political representation in Antigua and Barbuda. Born in 1889, she was the first female parliamentarian in the country and a dedicated advocate for women's education and equality. Higgins was a gifted speaker and used her platform to address the challenges faced by women and girls, including poverty, domestic violence, and unequal access to education and employment. Despite facing opposition from traditional patriarchal structures, she never wavered in her commitment to making positive changes for her community.
    </p>
    <br>
    <p>
    In addition to her political work, Higgins was also a respected businesswoman and owned and operated several successful enterprises, including a grocery store and a pharmacy. This experience gave her a deep understanding of the economic struggles faced by many people in Antigua and Barbuda and helped inform her advocacy work.
    </p>
    <br>
    <p>
    Higgins was appointed to the Federal Senate as a representative of the West Indies Federal Labour Party following the 1958 West Indies federal elections. She was the first female parliamentarian from Antigua and one of two female parliamentarians. As part of the 1961 New Year's Honours, she received an MBE.
    </p>
    <br>
    <p>
    Bertha Alexandrina Higgins passed away in 1966, but her legacy lives on. She remains an inspiration to women and girls in Antigua and Barbuda, who continue to strive for greater representation and equality in all aspects of life. Her pioneering spirit and unwavering commitment to justice continue to inspire future generations of women leaders.
    </p>
    `},{id:69,x:-7.54,y:.25,z:-1.91,countryName:"Bahamas",imageSource:"images/persons/69.png",popUpHeading:"Mary Ingraham",flagSource:"images/flags/Flag-of-The-Bahamas.png",flag:"Bahamas",year:"(1901-1982)",textContent:`<p>
    Mary Ingraham was a pioneering figure in the fight for women's rights in the Bahamas. Born in the late 19th century, she was a well-educated woman who was deeply committed to equality and justice. In the early years of the 20th century, she founded the Bahamas Women's Suffrage Movement, which was dedicated to securing the right to vote for women in the island nation.
    </p>
    <br>
    <p>
    Ingraham was a charismatic leader who inspired and rallied women from all walks of life to join her cause. She organised rallies, wrote letters to the government, and gave speeches to raise awareness about the need for women's suffrage. Her tireless efforts paid off, and in 1962, women in the Bahamas were granted the right to vote.
    </p>
    <br>
    <p>
    Ingraham continued to be a strong voice for women's rights throughout her life. She served on many committees and boards that aimed to improve the lives of women and girls in the country. She was a mentor to many younger women and encouraged them to take up leadership positions in their communities.
    </p>
    <br>
    <p>
    Ingraham's legacy continues to inspire generations of women in the Bahamas. She was a visionary who believed that women could make a difference, and she worked tirelessly to make that a reality. Her unwavering commitment to justice and equality set the stage for future generations of women in the Bahamas to continue the fight for equal rights and opportunities.
    </p>
    `},{id:70,x:-6.7,y:.25,z:-.85,countryName:"Barbados",imageSource:"images/persons/70.png",popUpHeading:"Elsie Pilgrim",flagSource:"images/flags/Flag-Barbados.png",flag:"Barbados",year:"(1927-2004)",textContent:`<p>
    On May 14, 1927, Dame Elsie was born. She first became associated with Queen's College in 1936, when she enrolled as a ninth-grader. She entered Exeter College, University of London after leaving Queen's College in 1946, where she earned a B.A. in history. She then enrolled at the University of Cambridge, where in 1953 she earned a Doctorate in Philosophy in History, making her the first Barbadian to reach this level of academic achievement.
    </p>
    <br>
    <p>
    The first woman to receive the Barbados Scholarship was Elsie Pilgrim, subsequently known as Dame Elsie Payne, who received it on October 28, 1946. Additionally, it was the first time the scholarship in modern studies had been given out.
    </p>
    <br>
    <p>
    In 1980, Elsie Payne, née Pilgrim, was named Barbados' first Dame of St. Andrew for her contributions to education. She received an honorary Doctor of Laws degree from the University of the West Indies in 1986, and in January 1990, The New Bajan magazine named her one of its "Personalities of the Decade: Those Whose Work Time Will Not Fade."
    </p>
    <br>
    <p>
    This admirer of calypso, Shakespeare, and Barbadian history and heritage passed away in 2004, but her accomplishments are commemorated on the country's landscape. Both the Ministry of Education's headquarters and the roundabout opposite the Bridgetown Harbour are named after "this erudite scholar, loving and caring educator."
    </p>
    `},{id:71,x:-7.7,y:.225,z:-1.75,countryName:"Cuba",imageSource:"images/persons/71.png",popUpHeading:"Pilar Jorge de Tella",flagSource:"images/flags/Flag-Cuba.png",flag:"Cuba",year:"(1884-1967)",textContent:`<p>
    Women were denied the ability to vote under Cuba's 1901 Constitution, which was created after the island won its independence from Spain. To fight for their rights, a large feminist movement had emerged by the 1920s. A leader in the making was Pilar Jorge de Tella. She was a founding member of the Feminine Club and National Women's Congress, two of the most significant organisations at the time that brought together feminist organisations to discuss tactics and ideas. Jorge de Tella adopted divisive political positions. She supported safeguards for children born outside of marriage, access to birth control, education, child care, and better working conditions. Despite the fact that some of these views offended conservative women, feminists ultimately united around suffrage and won the right to vote in 1934.
    </p>
    `},{id:72,x:-6.57,y:.25,z:-.92,countryName:"Dominica",imageSource:"images/persons/72.png",popUpHeading:"Mamá tingó",flagSource:"images/flags/Flag-Dominica.png",flag:"Dominica",year:"(1921-1974)",textContent:`<p>
    Mamá Tingó was a Dominican Republic-based community leader, who was known for her activism and advocacy for the rural poor. Despite being illiterate, she became a well-respected leader in her community and was known for her passionate speeches on social justice issues.
    </p>
    <br>
    <p>
    Mamá Tingó was an advocate for the rights of poor farmers, who were facing exploitation by large landowners and the government. She organised and led protests and demonstrations, calling for better working conditions, fair wages, and access to land. Her activism inspired many other poor farmers to join her movement, and she became a symbol of hope and resistance in the face of injustice.
    </p>
    <br>
    <p>
    Following the start of the land seizures in 1974, Mamá Tingó quickly became a member of the Federation of Christian Agriculture Leagues. She quickly became the leader of the group, planning and giving speeches at farmer protest rallies. The government of the Dominican Republic declared these demonstrations to be unlawful and orchestrated a campaign to malign Mamá Tingó. 
    </p>
    <br>
    <p>
    She was given a court hearing so she could state her land grievances after the government ultimately gave in to the protesters. Mamá Tingó learned that her pigs had escaped on the day of the court hearing, November 1, 1974, and she hastened back to her property to capture them. Ernesto Diaz, however, was waiting for her when she got home because Pablo Diaz Hernandez had hired him to kill her. She used a machete to fight Diaz, but he shot her dead with his shotgun.
    </p>
    <br>
    <p>
    Mamá Tingó's legacy is an inspiration to those who strive for social justice, and she is remembered as a fearless and tireless advocate for the rights of the poor. Her life and work remain an important part of the Dominican Republic's cultural heritage, and her memory continues to inspire new generations of activists and human rights advocates.
    </p>
    `},{id:73,x:-6.66,y:.25,z:-.72,countryName:"Grenada",imageSource:"images/persons/73.png",popUpHeading:"Hilda Bynoe",flagSource:"images/flags/Flag_of_Grenada.png",flag:"Grenada",year:"(1921-2013)",textContent:`<p>
    Dame Hilda Bynoe is a renowned and trailblazing Caribbean lady who made numerous contributions to the development of the area through her work in government, medicine, and education. She was crucial in creating the School of Arts and Sciences at St. George's University in Grenada when it was only a medical school. She is renowned for her commitment and public service. In addition, she was the first Grenada native and the first woman to assume the position of Governor of Grenada (1968 to 1974). She was also the first female physician to work in the interior of Guyana.
    </p>
    <br>
    <p>
    She made the decision to pursue her childhood aspiration of becoming a doctor during the Second World War. When she was awarded a Colonial Development and Welfare Scholarship to Britain in 1944, her goal of visiting Britain came true.
    </p>
    <br>
    <p>
    In 1968, she received the position of governor of the Associated States of Grenada, Carriacou, and Petite Martinique. She received the title of Dame Commander of the British Empire from Queen Elizabeth II in 1969, and she held it until 1974, when she returned to Trinidad to continue her medical practice and volunteer work.
    </p>
    <br>
    <p>
    She significantly aided in the promotion of primary health care being one of the few female general practitioners in the Caribbean at the time. She was referred to as the 'Lady Health Officer' in Guyana because she and her team would go to antenatal clinics in remote areas to check on pregnant women to see if they could birth in the home or if they needed to go to the hospital.
    </p>
    <br>
    <p>
    Dame Bynoe encourages young people to go out and make the most of their future, saying, "Your legacy could be a world which you have helped to shape."
    </p>
    `},{id:74,x:-6.64,y:.25,z:-1.12,countryName:"Guadeloupe",imageSource:"images/persons/74.png",popUpHeading:"Mulatto Solitude",flagSource:"images/flags/Flag_of_Guadeloupe_(local)_variant.png",flag:"Guadeloupe",year:"(1772-1802)",textContent:`<p>
    La Mulâtresse Solitude was a legendary figure from Guadeloupe, known for her rebellion against the colonial powers in the late 18th century. She was born into slavery, but became a powerful figure in the island's slave community. While pregnant, she led a rebellion against the French colonial authorities, and her reputation as a fierce warrior and charismatic leader made her a symbol of resistance against slavery and colonialism.
    </p>
    <br>
    <p>
    Solitude was known for her bravery and leadership skills, and her rebellion was seen as a challenge to the established social order. Her actions inspired other slaves to join her cause, and she became a powerful voice in the struggle against slavery and colonialism.
    </p>
    <br>
    <p>
    Despite her efforts, Solitude was eventually captured and executed by the French authorities. Her death only served to further galvanise the resistance movement, and her legacy lived on through the generations. To this day, she remains a symbol of strength and resistance for people of Guadeloupe, and is celebrated for her contributions to the struggle for freedom and justice.
    </p>
    <br>
    <p>
    Overall, La Mulâtresse Solitude remains an important historical figure, remembered as a hero and symbol of hope for people struggling against oppression. Her legacy continues to inspire people in Guadeloupe and beyond, reminding us of the power of resistance and the importance of standing up against injustice.
    </p>
    `},{id:75,x:-7.3,y:.23,z:-1.42,countryName:"Haiti",imageSource:"images/persons/75.png",popUpHeading:"Suzanne Béliar",flagSource:"images/flags/Flag_of_Haiti.png",flag:"Haiti",year:"(1781-1802)",textContent:`<p>
    Suzanne Bélair, also known as Sanite Bélair, was a female Haitian freedom fighter and revolutionary who served as a lieutenant in Toussaint Louverture's army. She married Brigade commander and then General Charles Bélair in 1796 as an affranchi in Verrettes, Haiti. During the struggle with French troops of the Saint-Domingue expedition, she became a sergeant and eventually a lieutenant in the Haitian Revolution.
    </p>
    <br>
    <p>
    The Belairs sought refuge in the Artibonite department after being pursued by Faustin Répussard's column of the French army. Répussard launched an ambush on Corail-Mirrault, capturing Sanité Bélair. Her husband also turned over to avoid getting separated from her. Both of them were condemned to death, her spouse by firing squad and she by decapitation due to their gender. She calmly implored Bélair to die heroically as she watched his death, before proceeding to her own execution, unwilling to wear a blindfold.When threatened with beheading, she is reported to have successfully defended her right to an honourable soldier's death by musketry, standing before their muzzles and yelling "Viv libète!" "An esclavaj!" ("Long live liberty! Slavery must end!")
    </p>
    <br>
    <p>
    Sanite Bélair is regarded as a hero of the Haitian Revolution. She was portrayed on the ten-gourd Haitian gourde banknote for the "Bicentennial of Haiti" Commemorative series in 2004.
    </p>
    `},{id:76,x:-7.3,y:.23,z:-1.42,countryName:"Haiti",imageSource:"images/persons/76.png",popUpHeading:"Adbaraya Toya",flagSource:"images/flags/Flag_of_Haiti.png",flag:"Haiti",year:"(1739-1805)",textContent:`<p>
    Adbaraya Toya is celebrated as one of the bravest women in Haitian history for her great influence on the many that fought in the Haitian Revolution. Popularly known as Victoria Montou in Haiti, a name she is believed to have been given after arriving in Haiti from Africa to work as a slave like the many other Africans who were forced out of their lands into the new world.
    </p>
    <br>
    <p>
    Adbaraya Toya was abducted from the Dahomey Empire which is now modern Benin. Several sources indicate that before her abduction, Adbaraya was a soldier and member of the council of women in the Kingdom. She was also a healer.
    </p>
    <br>
    <p>
    Her high position in the Dahomey Kingdom as a member of the women’s council and soldier suggests that Adbaraya Toya was a member of the warrior group Dahomey Amazons which fought to protect the Dahomey kingdom. The Dahomey warriors were traditionally called the N’Nonmiton, which means “our mothers” in Fon, the language of the Fon people of Dahomey, now in present-day Benin. 
    </p>
    <br>
    <p>
    It is possible that Adbaraya was abducted during a battle or raid and sold into slavery in Haiti where she was given the name Victoria, a name which means to conquer, giving more evidence to her Dahomey Amazon roots.
    Adbaraya Toya worked on the Cormier Sugar Plantation and became very close friends with Marie Elisabeth who was the mother of Jean Jacques Dessalines and entrusted her son into Adbaraya’s care before she died. Jean Jacques referred to Adbaraya as aunty which would make many believe that he was really related to her. However, while Adbaraya comes from present-day Benin, Jean Jacques traces his roots to Guinea.
    </p>
    <br>
    <p>
    Adbaraya taught Jean Jacques how to fight as a soldier. She taught him skills such as hand-to-hand combat and how to throw a knife as well as physical manoeuvres to defend himself in battle.
    </p>
    <br>
    <p>
    After gaining her freedom through the rebellion, Adbaraya set up an indigenous army to support the revolution. Despite being very old at the time of the Haitian Revolution which was being led by Jean Jacques, Adbaraya trained and led her troop to fight and was made the leader of the military by Jean Jacques Dessalines.
    </p>
    <br>
    <p>
    In her last battle, it is said that she fought off three soldiers and was severely wounded. After her death, a state funeral was held in her honour and she was celebrated as the mother of Haiti’s independence.
    </p>
    `},{id:77,x:-7.3,y:.23,z:-1.42,countryName:"Haiti",imageSource:"images/persons/77.png",popUpHeading:"Catherine Flon",flagSource:"images/flags/Flag_of_Haiti.png",flag:"Haiti",year:"(1772-1831)",textContent:`<p>
    Catherine Flon was a Haitian seamstress who is remembered for her role in creating the first Haitian flag. During the Haitian Revolution, Flon was approached by the leaders of the revolutionary movement and asked to sew a flag to represent Haiti as a newly independent nation.
    </p>
    <br>
    <p>
    According to popular sources, Flon was not only a seamstress but also an enthusiastic supporter of the Haitian Revolution (1791-1804), during which she served as a nurse in a non-combatant but supportive capacity.
    </p>
    <br>
    <p>
    The Haitian national flag was designed at a three-day convention of several revolutionary groups in May 1803, which was held at Archaye. Dessalines is reported to have symbolically removed the white vertical band from the French tricolour flag during this convention, leaving only the red and blue bands.  According to most sources, Flon then sewed together the remaining bands. 
    </p>
    <br>
    <p>
    The design of Haiti's national flag has evolved over the two centuries since the country proclaimed independence. All artistic depictions of Catherine Flon, however, show her stitching the blue and red bars of the French tricolour after her godfather cut out the white.
    </p>
    <br>
    <p>
    Flon also came to signify and symbolise the accomplishments of enslaved women in Haiti and across the African diaspora. The preservation of Catherine Flon's legendary legacy in modern-day Haiti is thus emblematic of the deeds of women like Marie, Madeleine, and many others who defied slavery and colonial oppression.
    </p>
    `},{id:78,x:-7.3,y:.23,z:-1.42,countryName:"Haiti",imageSource:"images/persons/78.png",popUpHeading:"Luiza Mahin",flagSource:"images/flags/Flag_of_Haiti.png",flag:"Haiti",year:"(C. 1800s)",textContent:`<p>
    Luiza Mahin was a prominent figure in the history of Brazil and is remembered for her involvement in multiple slave revolts. Born in the 18th century, she was a slave who fought against the brutalities of slavery and the injustices inflicted upon her people. She was known for her bravery and leadership skills, which made her a respected figure among the enslaved communities.
    </p>
    <br>
    <p>
    Luiza Mahin claimed to be of African nobility and was born sometime in the 1800s in either the Gulf of Benin, West Africa, or Bahia (her actual birthplace and year of birth are unknown). Based on her surname, she is thought to be a member of the Mahi tribe from the Nagô (a subdivision of the Yoruba) country, who practised Islam. Luiza Mahin is well known for her involvement with numerous of the slave revolts and uprisings that took place in Bahia during the early part of the nineteenth century. She was a crucial player and strategist in the Malê Revolt, assisting in the distribution of messages in Arabic to other participants.
    </p>
    <br>
    <p>
    She is claimed to have been crowned "Queen of Bahia" if the Malê Revolt had been victorious. What happened to Luiza Mahin is unknown. According to other stories, she fled to Rio de Janeiro before being apprehended and repatriated to Angola. According to legend, she fled to Maranho, where she resided and influenced Afro-Brazilian culture. 
    </p>
    <br>
    <p>
    Despite her efforts, slavery continued to exist in Brazil until 1888, when it was finally abolished. However, the legacy of Luiza Mahin continues to inspire people around the world and is a testament to the courage and determination of the slaves who fought for their freedom. She remains an important figure in Brazilian history, reminding us of the struggles of the enslaved and their unwavering fight for justice and equality.
    </p>
    `},{id:79,x:-7.3,y:.23,z:-1.42,countryName:"Haiti",imageSource:"images/persons/79.png",popUpHeading:"Cecile Fatiman",flagSource:"images/flags/Flag_of_Haiti.png",flag:"Haiti",year:"(1771-1883)",textContent:`<p>
    Cécile Fatiman was a prominent figure in the Haitian Revolution, which took place in the late 18th and early 19th centuries. She was born in the late 18th century in Haiti and was of mixed African and Native American descent. Fatiman was a Vodou priestess and was known for her spiritual powers and her ability to communicate with the spirits.
    </p>
    <br>
    <p>
    Fatiman played a key role in the revolution, using her influence and powers to rally support among the enslaved population and inspire them to fight for their freedom. She was particularly instrumental in the successful revolt against the French colonial authorities in Haiti in 1791. Fatiman was said to have predicted the outcome of the revolution and to have been a source of inspiration and guidance for the leaders of the movement.
    </p>
    <br>
    <p>
    After the revolution, Fatiman remained a prominent figure in Haitian society, using her powers for the benefit of the people. She was known for her wisdom, her leadership, and her compassion, and she was widely respected by the people of Haiti. Fatiman is still remembered today as a hero of the revolution and as a symbol of resistance against oppression and slavery. 
    </p>
    <br>
    <p>
    Although there is limited historical information available about Cécile Fatiman, her legacy lives on in Haiti and around the world. She is remembered as a symbol of the power of the human spirit, and as a reminder of the importance of fighting for freedom and justice. Fatiman's story is an inspiration to all who are struggling against oppression and working to build a better world.
    </p>
    `},{id:80,x:-7.65,y:.25,z:-1.4,countryName:"Jamaica",imageSource:"images/persons/80.png",popUpHeading:"Erna Brodber",flagSource:"images/flags/Flag-Jamaica.png",flag:"Jamaica",year:"(1940-Present)",textContent:`<p>
    Erna Brodber is a renowned Jamaican novelist, essayist, and sociologist. Born in 1940 in Woodside, St. Mary, Jamaica, she grew up in a rural community surrounded by sugarcane fields and mountains. Erna is known for her works that reflect on the experiences of rural Jamaican life, and explore themes of race, class, and identity.
    </p>
    <br>
    <p>
    Erna was educated in Jamaica, where she received a Bachelor's degree in Education, and a Master's degree in Sociology. She later received a PhD in Education from the University of London, England. After completing her PhD, she became a lecturer at the University of the West Indies, where she taught for several years.
    </p>
    <br>
    <p>
    Erna has published several novels including ‘Louisiana’, ‘Jane and Louisa Will Soon Come Home’, and ‘Myal’. Her works are inspired by the lives of ordinary people living in rural Jamaica, and her writing style is characterised by a keen attention to detail and a sensitivity to the language and culture of rural communities. 
    </p>
    <br>
    <p>
    Erna has also published essays on topics such as the relationship between Jamaica and the West Indies, the impact of colonialism on Jamaica, and the experiences of rural women. Her work has been widely recognized and has received numerous awards, including the prestigious Jamaican Musgrave Gold Award for Literature and Orature in 1999.
    </p>
    <br>
    <p>
    In addition to her writing and teaching, Erna is also a respected community leader and activist. She has been actively involved in various initiatives aimed at improving the lives of rural Jamaicans and promoting the cultural heritage of rural communities.
    </p>
    <br>
    <p>
    Erna Brodber is considered a pioneering figure in Caribbean literature, and her works have inspired many other writers to explore the complexities of rural life in the region. Her writing has provided valuable insights into the experiences of rural Jamaicans and has contributed to a greater understanding of the diverse cultural and social dynamics of the Caribbean.
    </p>
    `},{id:81,x:-7.65,y:.25,z:-1.4,countryName:"Jamaica",imageSource:"images/persons/81.png",popUpHeading:"Louise Bennet-Coverley (Miss Lou)",flagSource:"images/flags/Flag-Jamaica.png",flag:"Jamaica",year:"(1919-2006)",textContent:`<p>
    Louise Bennett was a Jamaican folklorist, performer, and poet who was born on September 7, 1919, in Kingston, Jamaica. She was born into a working-class family and was raised in a small rural village in Jamaica where she was surrounded by the rich cultural heritage of the island. Bennett was a pioneer of the Jamaican Creole language and was known for her humorous and insightful commentary on the life and culture of Jamaicans.
    </p>
    <br>
    <p>
    Bennett was a versatile artist who was known for her skills in recitation, singing, and acting. She used her art to educate, entertain, and engage her audience. She was a strong advocate for preserving the traditional cultural values and language of Jamaica and was widely recognized for her efforts to promote the recognition of Creole as a legitimate language.
    </p>
    <br>
    <p>
    Bennett's work was influential in the development of Jamaican music and theatre. She was a leading figure in the Jamaican folk music revival of the 1950s and 1960s and was instrumental in popularising Jamaican folk music both locally and internationally. She was also a renowned performer of Jamaican folk stories and was known for her witty and entertaining performances. 
    </p>
    <br>
    <p>
    Bennett was awarded numerous honours and awards throughout her career, including the Member of the Most Excellent Order of the British Empire (1960), Order of Jamaica (1974), and Musgrave Medal (1978). She was also honoured with the title "Miss Lou" by her fans, a term of affection that has become synonymous with her name.
    </p>
    <br>
    <p>
    In conclusion, Louise Bennett was a trailblazer who made a lasting impact on Jamaican culture and the world. She was a talented performer, a passionate advocate for the preservation of Jamaican heritage, and a voice for the people. Her legacy continues to inspire future generations of artists and cultural leaders and will always be remembered as one of the greatest cultural icons in Jamaican history.
    </p>
    `},{id:82,x:-7.65,y:.25,z:-1.4,countryName:"Jamaica",imageSource:"images/persons/82.png",popUpHeading:"Marlene Ottey",flagSource:"images/flags/Flag-Jamaica.png",flag:"Jamaica",year:"(1960-Present)",textContent:`<p>
    Marlene Ottey, also known as Merlene Ottey, is a Jamaican-Slovenian former track and field sprinter. She was born on May 10, 1960 in Cold Spring, Hanover, Jamaica. Ottey is considered one of the greatest female sprinters of all time and is a multiple Olympic and World Championships medalist.
    </p>
    <br>
    <p>
    Ottey started her career in the late 1970s and quickly established herself as a top sprinter. She made her first Olympic appearance in 1980 in which she came third in the Women’s 200m, making her the first Caribbean woman to win an Olympic medal. She went on to compete in a total of seven Summer Olympics, which is a record for a female athlete. Throughout her career, Ottey won three Olympic bronze medals and nine World Championships medals, including a silver medal in the 200-metre race at the 1991 World Championships. She was also a part of Jamaica’s 4x100-metre relay team that won a bronze medal at the 1992 Barcelona Olympics.
    </p>
    <br>
    <p>
    In addition to her international success, Ottey also achieved several national records and championships in Jamaica and Europe. She competed for Jamaica until 2002 and then switched to representing Slovenia. She continued to compete in international events until she retired in 2012 at the age of 52. 
    </p>
    <br>
    <p>
    Ottey’s achievements on the track have earned her numerous accolades and recognition. She was awarded the Order of Distinction in Jamaica in 1992 and was inducted into Nebraska's first Athletics Hall of Fame Class in 2015.
    </p>
    <br>
    <p>
    In conclusion, Marlene Ottey is a legendary sprinter who has inspired many athletes and fans with her impressive career and achievements on the track. Her longevity and success at the highest level of competition have earned her a place in history as one of the greatest female sprinters of all time.
    </p>
    `},{id:83,x:-7.65,y:.25,z:-1.4,countryName:"Jamaica",imageSource:"images/persons/83.png",popUpHeading:"Nanny of the Maroons",flagSource:"images/flags/Flag-Jamaica.png",flag:"Jamaica",year:"(1686-1760)",textContent:`<p>
    Nanny of the Maroons was a legendary leader of the Windward Maroons, a group of escaped slaves who established a free community in the mountainous region of Jamaica in the late 17th century. Nanny was a skilled military strategist and a respected spiritual leader, known for her wisdom, courage, and resilience in the face of oppression. She was also a charismatic and powerful figure, whose influence extended far beyond the Maroon community.
    </p>
    <br>
    <p>
    Nanny was born into slavery, but managed to escape and join the Maroons, who were actively resisting British colonial rule. She quickly rose to prominence within the community and played a central role in the Maroons' successful defence against repeated attempts by the British to re-capture them. Nanny's military prowess and leadership skills proved invaluable in the Maroons' numerous battles and skirmishes with the British, and she was credited with several key victories.
    </p>
    <br>
    <p>
    In addition to her military prowess, Nanny was also revered as a spiritual leader and a source of wisdom and guidance for the Maroon community. She was said to have possessed supernatural powers, and was believed to be able to foretell the future and communicate with the spirits of the ancestors. She was also known for her compassion and kindness, and was said to have personally intervened to protect women and children from harm during times of conflict. 
    </p>
    <br>
    <p>
    Nanny's legacy continues to be celebrated today, and she is remembered as a symbol of resistance and resilience, as well as a revered spiritual leader. Her legacy has inspired countless generations of people, and she remains a source of pride and inspiration for the Maroon community, as well as for people of African descent more generally. Nanny of the Maroons is widely regarded as one of the most important figures in the history of Jamaica, and her legacy continues to be celebrated and remembered as a symbol of hope and resistance against oppression.
    </p>
    `},{id:84,x:-6.66,y:.25,z:-.72,countryName:"Trinidad_and_Tobago",imageSource:"images/persons/84.png",popUpHeading:"Beryl McBurnie",flagSource:"images/flags/Flag-Trinidad-and-Tobago.png",flag:"Trinidad and Tobago",year:"(1913-2000)",textContent:`<p>
    Beryl Eugenia McBurnie was a dancer from Trinidad. As her life's work, she founded the Little Carib Theatre in Woodbrook, Port of Spain, and promoted Trinidad and Tobago's culture and arts. She aided in promoting Trinidad and Tobago's cultural validity, which would usher the country into the age of independence.McBurnie dedicated her life to dancing and became one of the most influential figures in modern Trinidadian pop culture.
    </p>
    <br>
    <p>
    Beryl McBurnie's narrative began at her family home, where her talent for performing and organisational skills were visible in the garden events she put on while attending Tranquillity Girls' Intermediate and Teachers' Training College. Her first employment as a teacher allowed her to pursue her passions for dance, music, and theatre.
    </p>
    <br>
    <p>
    She left Trinidad in 1938 to study dance at Columbia University in New York, where she met the legendary Black American actor Paul Robeson and worked on Broadway. In 1940, while on vacation, she assembled a group of amateurs to perform A Walk Through The Tropics, which featured the local Invaders Steelband and was the first time Pan was seen on stage. It played to sold-out audiences, demonstrating that she had discovered a deep seam of interest in local culture. 
    </p>
    <br>
    <p>
    Her crusading activity led Rex Nettleford to establish the Jamaica National Dance Theatre Company, assisted Nobel Prize writer Derek Walcott in his early years in Trinidad, and laid the groundwork for future generations of dancers. In November 1948, Paul Robeson laid the cornerstone of the Little Carib Theatre on Roberts Street in Woodbrook, launching the country's first permanent theatre and the Little Carib Dance Company. Her first Carnival Bele production had a J'Ouvert band doing ballet to steelband music. Beryl McBurnie received numerous honours and medals for her contributions to dance and the arts, including an honorary doctorate from UWI (1976) and her country's highest decoration, the Trinity Cross (1989).
    </p>
    `},{id:85,x:7.55,y:.27,z:2.87,countryName:"Australia",imageSource:"images/persons/85.png",popUpHeading:"Fanny Cochrane Smith",flagSource:"images/flags/Flag-Australia.png",flag:"Australia",year:"(1834-1905)",textContent:`<p>
    Fanny Cochrane Smith was an Indigenous Tasmanian woman and singer. She was born in 1834 and was one of the last speakers of the Palawa language, the language of the Tasmanian Aboriginal people. In 1899, at the age of 65, she recorded the first and only known audio recordings of the Palawa language, as well as traditional songs, making her a crucial link to the cultural heritage of Tasmania's Indigenous people. Her recordings were made on wax cylinders by the Tasmanian phonetician, Alfred William Howitt. These recordings provide valuable insight into the cultural practices and language of the Tasmanian Aboriginal people, who were largely wiped out as a result of European colonisation. Fanny Cochrane Smith's recordings are now considered an important part of Australia's cultural heritage and are held in the National Film and Sound Archive of Australia.
    </p>
   `},{id:86,x:.48,y:.26,z:-2.9,countryName:"Lebanon",imageSource:"images/persons/86.png",popUpHeading:"Mary Lee Mills",flagSource:"images/flags/Flag_of_Lebanon.png",flag:"Lebanon",year:"(1912-2010)",textContent:`<p>
    Mary Lee Mills was born in 1912 and passed away in 2010, leaving behind a legacy of dedication and passion for nursing. She was a well-known figure in the nursing community, having established the first nursing school in Lebanon in the mid-20th century. She devoted her life to providing quality education to aspiring nurses, helping to improve healthcare in the region.
    </p>
    <br>
    <p>
    The nursing school established by Mary Lee Mills was a landmark in Lebanon, providing comprehensive training to those interested in pursuing a career in nursing. The school aimed to produce well-trained, compassionate and competent nurses, who would be able to make a positive impact in the healthcare sector. The curriculum was designed to cover all aspects of nursing, including anatomy, pharmacology, clinical practices and patient care.
    </p>
    <br>
    <p>
    The nursing school established by Mary Lee Mills played a vital role in the development of the healthcare system in Lebanon, providing highly skilled and trained nurses who helped to improve patient care and outcomes. Mary Lee Mills’ unwavering commitment to nursing education and her tireless efforts to promote the nursing profession inspired many students to pursue a career in nursing, making a lasting impact on the nursing community in Lebanon.
    </p>
    <br>
    <p>
    In conclusion, Mary Lee Mills was a true visionary, who paved the way for the advancement of nursing education in Lebanon. Her legacy continues to inspire new generations of nurses and healthcare professionals, reminding us of the importance of dedication, passion, and hard work in achieving our goals.
    </p>
   `},{id:87,x:1.3,y:.325,z:-1.79,countryName:"Saudi_Arabia",imageSource:"images/persons/87.png",popUpHeading:"Tarouf Abdulkhair Adam Muhammad al-Talal Hawsawi (Etab)",flagSource:"images/flags/Flag-Saudi-Arabia.png",flag:"Saudi Arabia",year:"(1947-2007)",textContent:`<p>
    Etab was a Saudi Arabian singer who was active between the 1960s and the 1990s.She was born in Saudi Arabia of Hausa descent, but migrated to Egypt shortly after her second marriage to an Egyptian man in 1978. Many Arab music experts agree that she was expelled from Saudi Arabia on the instructions of then-King Khalid because her musical performances were deemed risqué in Saudi Arabia at the time. She became an Egyptian citizen in 1983.
    </p>
    <br>
    <p>
    Etab, regarded one of the first female Saudi vocalists, began performing at weddings in the 1960s with Sarah Osman and oud player Hayat Saleh.She released over 15 albums and featured in three films. She was diagnosed with cancer in 1997 and died on August 19, 2007, in Cairo.
    </p>
    <br>
    <p>
    In conclusion, Etab was a true icon of Saudi Arabian music and a singer who touched the hearts of millions of people with her powerful voice and soulful performances. She will always be remembered as one of the greatest singers of her time, and her music will continue to inspire and captivate audiences for generations to come.
    </p>
    <br>
    <p>
    Etab was an activist for women in music and a member of Egypt's Union of Arab Artists and Musicians Syndicate. On December 30, 2017, Google created a Doodle in her honour to commemorate what would have been her 70th birthday.
    </p>
   `}];class Kw{constructor(e,t,n){this.experience=new Ln,this.id=e,this.character=t,this.popup=!1,this.setUtils(),this.getData(this.id,n)}setUtils(){this.camera=this.experience.camera,this.cameraControls=this.camera.controls,this.world=this.experience.world,this.map=this.world.map,this.intersects=this.map.events,this.json=this.intersects.json}getData(e,t){this.body=document.getElementsByTagName("body")[0],this.canvas=document.getElementsByClassName("webgl"),this.image=fi[e].imageSource,this.heading=fi[e].popUpHeading,this.content=fi[e].textContent,this.flag=fi[e].flag,this.flagImage=fi[e].flagSource,this.year=fi[e].year,this.createPopup(this.image,this.heading,this.content,this.flag,this.flagImage,this.year,t)}createPopup(e,t,n,i,r,a,s){const l=e,h=t,c=n,d=i,u=r,f=a;this.popup?(document.getElementById("heading").textContent=h,document.getElementById("image").src=l,document.getElementById("countryFlag").src=u,document.getElementById("flag").textContent=d,document.getElementById("info").innerHTML=c,document.querySelector(".year").textContent=f):(this.popup=!0,this.popupContainer=document.createElement("div"),this.popupContainer.className="popup-container",this.popupContent=document.createElement("div"),this.popupContent.className="popup-content",this.closeButton=document.createElement("button"),this.closeButton.className="close-button",this.closeButton.innerHTML="&times;",this.imageDiv=document.createElement("div"),this.imageDiv.className="imageDiv",this.imageDiv.id="imageDiv",this.image=document.createElement("img"),this.image.id="image",this.image.srcset=`
  ${l} 1x,
  ${l.replace(".jpg","@2x.jpg")} 2x,
  ${l.replace(".jpg","@3x.jpg")} 3x
`,this.image.src=l,this.image.alt=t,this.imageDiv.appendChild(this.image),this.flagDiv=document.createElement("div"),this.flagDiv.className="countryDiv",this.flagSrc=document.createElement("img"),this.flagSrc.id="countryFlag",this.flagSrc.className="countryFlag",this.flagSrc.src=u,this.flagDiv.appendChild(this.flagSrc),this.flagName=document.createElement("h4"),this.flagName.id="flag",this.flagName.className="flag",this.flagName.textContent=d,this.flagDiv.appendChild(this.flagName),this.imageDiv.appendChild(this.flagDiv),this.heading=document.createElement("h2"),this.heading.id="heading",this.heading.className="heading",this.heading.textContent=h,this.year=document.createElement("span"),this.year.id="year",this.year.className="year",this.year.textContent=f,this.infoParagraph=document.createElement("div"),this.infoParagraph.className="info",this.infoParagraph.id="info",this.infoParagraph.innerHTML=c,this.arrowsDiv=document.createElement("div"),this.arrowsDiv.className="arrow-buttons",this.leftButton=document.createElement("button"),this.leftArrow=document.createElement("img"),this.leftArrow.src="images/Left-Button.png",this.leftButton.appendChild(this.leftArrow),this.leftButton.className="arrow-button left-arrow",this.rightButton=document.createElement("button"),this.rightArrow=document.createElement("img"),this.rightArrow.src="images/Right-Button.png",this.rightButton.appendChild(this.rightArrow),this.rightButton.className="arrow-button right-arrow",this.arrowsDiv.appendChild(this.leftButton),this.arrowsDiv.appendChild(this.rightButton),document.body.appendChild(this.arrowsDiv),this.leftButton.addEventListener("click",()=>{this.id>0?(this.character.setModel(this.json[this.id]),this.cameraControls.target.set(this.json[this.id].x,this.json[this.id].y,this.json[this.id].z),this.getData(--this.id)):this.arrowsDiv.removeChild(this.leftButton)}),this.rightButton.addEventListener("click",()=>{this.id<87?(this.getData(++this.id),this.character.setModel(this.json[this.id]),this.cameraControls.target.set(this.json[this.id].x,this.json[this.id].y,this.json[this.id].z),this.camera.instance.position.set(this.json[this.id].x,this.json[this.id].y+4,this.json[this.id].z+4)):this.arrowsDiv.removeChild(this.rightButton)}),this.popupContent.appendChild(this.closeButton),this.popupContent.appendChild(this.imageDiv),this.popupContent.appendChild(this.heading),this.popupContent.appendChild(this.year),this.popupContent.appendChild(this.infoParagraph),this.popupContainer.appendChild(this.popupContent),document.body.appendChild(this.popupContainer),this.closeButton.addEventListener("click",g=>{this.popupContainer.classList.add("hide"),g.stopPropagation(),setTimeout(()=>{document.body.removeChild(this.arrowsDiv),document.body.removeChild(this.popupContainer),this.popup=!1,s(null)},300)}),this.hideButtons(),setTimeout(()=>{this.popupContainer.classList.add("show")},100))}hideButtons(){this.id==86?(this.arrowsDiv.appendChild(this.leftButton),this.arrowsDiv.removeChild(this.rightButton)):this.id==0&&(this.arrowsDiv.appendChild(this.rightButton),this.arrowsDiv.removeChild(this.leftButton))}}class Yw{constructor(){this.experience=new Ln,this.renderer=this.experience.renderer,this.setUtils(),this.model.scene.traverse(e=>{e instanceof It&&(e.castShadow=!0,this.experience.characterIntersections.push(e))}),this.playAnimations()}setUtils(){this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.camera=this.experience.camera,this.model=this.resources.items.CharacterFlavilla2}setModel(e){const t=this.model;t.scene.scale.set(.16,.16,.16),t.scene.position.set(e.x,e.y,e.z),this.scene.add(t.scene)}playAnimations(){const e=this.model.animations;for(let n=0;n<e.length;n++)this.model.scene.animations.push(e[0]);this.mixer=new Zd(this.model.scene),this.mixer.clipAction(e[0]).play()}update(){const e=this.time.delta/1e3;this.mixer!==null&&this.mixer.update(e/2)}}class $w{constructor(){Ba(this,"mousemove",e=>{this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1});Ba(this,"checkIntersections",e=>{if(this.isIntersected.length>0){this.character=new Yw;for(let t=0;t<this.json.length&&this.id==null;t++)for(let n=0;n<this.isIntersected.length;n++)if(this.isIntersected[n].object.name===this.json[t].countryName){this.updateId(t),console.log(this.id),this.character.setModel(this.json[t]),this.cameraAnimation(this.character);break}}});Ba(this,"updateId",e=>{this.id=e});this.experience=new Ln,this.raycaster=new p0,this.mouse=new Ae(0,0),this.canvas=this.experience.canvas,this.debug=this.experience.debug,this.camera=this.experience.camera,this.json=fi,this.id=null,this.setEvents(),this.isIntersected=[]}setEvents(){this.canvas.addEventListener("click",e=>{this.checkIntersections(e)}),this.canvas.addEventListener("mousemove",e=>{this.mousemove(e)})}cameraAnimation(e){ah.to(this.camera.instance.position,{duration:2,onStart:()=>this.camera.controls.enabled=!1,x:this.json[this.id].x,y:this.json[this.id].y+4,z:this.json[this.id].z+4}).then(()=>{this.camera.controls.enabled||(this.camera.controls.enabled=!0,this.camera.controls.target.set(this.json[this.id].x,this.json[this.id].y,this.json[this.id].z)),this.popup=new Kw(this.id,e,t=>this.updateId(t))})}update(){this.raycaster.setFromCamera(this.mouse,this.camera.instance),this.isIntersected=this.raycaster.intersectObjects(this.experience.countryIntersections),this.character&&this.character.update(),this.camera.controls.enabled||this.camera.instance.lookAt(this.json[this.id].x,this.json[this.id].y,this.json[this.id].z)}}let Jw=class{constructor(){this.experience=new Ln,this.setUtils()}setUtils(){this.camera=this.experience.camera,this.scene=this.experience.scene,this.resources=this.experience.resources,this.mapModel=this.resources.items.worldModel,this.mapModel&&this.turnOffLoader(),this.maptexture=this.setTextures(this.resources.items.Map_albedo),this.waterTexture=this.setTextures(this.resources.items.WaterAlbedo),this.monumentsTexture=this.setTextures(this.resources.items.MonumentsAlbedo),this.treesTexture=this.setTextures(this.resources.items.TreesAlbedo),this.setModel(),this.pushRequiredCountriesOnly(),this.events=new $w,this.positions=fi}setSaturation(e,t){const n=new ei({uniforms:{uSaturation:{value:.25},uTexture:{value:this.mapModel.children[e].material.map}},vertexShader:`
          varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
      `,fragmentShader:`
          varying vec2 vUv;
          uniform sampler2D uTexture;
          uniform float uSaturation;

          void main() {
              vec4 color = texture2D(uTexture, vUv);
              float gray = dot(color.rgb, vec3(1, 1, 1));
              gl_FragColor = vec4(mix(vec3(gray), color.rgb, uSaturation), color.a);
          }
      `});this.mapModel.children[e].material=n}turnOffLoader(){const e=document.getElementById("loading-screen");e.classList.add("fade-out"),e.addEventListener("transitionend",this.onTransitionEnd)}onTransitionEnd(e){e.target.remove()}setTextures(e){return e.minFilter=Ml,e.encoding=Ue,e}pushRequiredCountriesOnly(){for(let e=0;e<this.mapModel.children[1].children.length;e++)this.mapModel.children[1].children[e].name==="no_click_group"||this.experience.countryIntersections.push(this.mapModel.children[1].children[e])}setModel(){this.mapModel.scale.set(.1,.1,.1),this.mapModel.position.set(-2,0,0),this.scene.add(this.mapModel),this.mapModel.traverse(e=>{e instanceof It&&(e.castShadow=!0,this.setClickableCountriesMaterial(),this.setWaterMaterial(),this.setMonumentsMaterial(),this.setTreesMaterial(),this.setNonClickableCountriesMaterial(),this.mapModel.children[2]&&this.mapModel.children[3]&&this.mapModel.children[4]&&(e.receiveShadow=!0))})}setClickableCountriesMaterial(){for(let e=0;e<this.mapModel.children[1].children.length;e++)this.mapModel.children[1].children[e].material=new ln({metalness:.8,flatShading:!1,map:this.maptexture});this.mapModel.children[1].material=new ln({metalness:.8,flatShading:!1,map:this.maptexture})}setWaterMaterial(){this.mapModel.children[2].material=new ln({metalness:.1,flatShading:!1,map:this.waterTexture})}setMonumentsMaterial(){for(let e=0;e<this.mapModel.children[3].children.length;e++)this.mapModel.children[3].children[e].material=new ln({metalness:.5,flatShading:!1,map:this.monumentsTexture});this.mapModel.children[3].material=new ln({metalness:.5,flatShading:!1,map:this.monumentsTexture})}setTreesMaterial(){for(let e=0;e<this.mapModel.children[4].children.length;e++)this.mapModel.children[4].children[e].material=new ln({metalness:.5,flatShading:!1,map:this.treesTexture});this.mapModel.children[4].material=new ln({metalness:.5,flatShading:!1,map:this.treesTexture})}setNonClickableCountriesMaterial(){for(let e=0;e<this.mapModel.children[5].children.length;e++)this.mapModel.children[5].children[e].material=new ln({metalness:.8,flatShading:!1,map:this.maptexture});this.mapModel.children[5].material=new ln({metalness:.8,flatShading:!1,map:this.maptexture})}applyShader(e){e.material=new ei({uniforms:{uTexture:{value:e.material.map}},vertexShader:`
          varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
      `,fragmentShader:`
      // icy.frag.glsl
varying vec2 vUv;
uniform sampler2D uTexture;

void main() {
    vec4 color = texture2D(uTexture, vUv);

    // Add a little blue tint to the textures
    vec3 icyColor = color.rgb + vec3(0.0, 0.0, 0.0);

    gl_FragColor = vec4(icyColor, color.a);
}
      `})}update(){this.character&&this.character.update(),this.camera.controls.enabled&&this.camera.controls.update(),this.events&&this.events.update()}};class Zw{constructor(){this.experience=new Ln,this.setUtils(),this.setModel(),this.playAnimations()}setUtils(){this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.model=this.resources.items.Ships}setModel(){this.model.scene.scale.set(10,10,10),this.model.scene.position.set(-1.97,0,.1),this.model.scene.traverse(e=>{e.isMesh&&(e.material.depthWrite=!0,e.castShadow=!0,e.isMesh&&e.name.includes("pole")&&(e.material.map=this.resources.items.SponserImage,e.material.map.flipY=!1,e.material.metalness=.1))}),this.scene.add(this.model.scene)}playAnimations(){this.mixer=new Zd(this.model.scene);for(let e=0;e<this.model.animations.length;e++)this.animations=this.model.animations[e],this.mixer.clipAction(this.animations).play()}update(){const e=this.time.delta/1e3;this.mixer&&this.mixer.update(e/4)}}class Qw{constructor(){this.experience=new Ln,this.scene=this.experience.scene,this.resources=this.experience.resources,this.resources.on("ready",()=>{this.map=new Jw,this.ships=new Zw,this.environment=new Xw})}update(){this.map&&this.map.update(),this.ships&&this.ships.update()}}function ld(o,e){if(e===cp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Yo||e===Ad){let t=o.getIndex();if(t===null){const a=[],s=o.getAttribute("position");if(s!==void 0){for(let l=0;l<s.count;l++)a.push(l);o.setIndex(a),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===Yo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=o.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class eb extends Ci{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ab(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new gb(t)})}load(e,t,n,i){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Ss.extractUrlBase(e),this.manager.itemStart(e);const s=function(h){i?i(h):console.error(h),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Aa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{r.parse(h,a,function(c){t(c),r.manager.itemEnd(e)},s)}catch(c){s(c)}},n,s)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},s={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Zu){try{a[He.KHR_BINARY_GLTF]=new _b(e)}catch(d){i&&i(d);return}r=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Rb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const d=this.pluginCallbacks[c](h);s[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const d=r.extensionsUsed[c],u=r.extensionsRequired||[];switch(d){case He.KHR_MATERIALS_UNLIT:a[d]=new ib;break;case He.KHR_DRACO_MESH_COMPRESSION:a[d]=new yb(r,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[d]=new vb;break;case He.KHR_MESH_QUANTIZATION:a[d]=new wb;break;default:u.indexOf(d)>=0&&s[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}h.setExtensions(a),h.setPlugins(s),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function tb(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class nb{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let h;const c=new ve(16777215);l.color!==void 0&&c.fromArray(l.color);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Ul(c),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new tl(c),h.distance=d;break;case"spot":h=new $d(c),h.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,pi(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],s=(r.extensions&&r.extensions[this.name]||{}).light;return s===void 0?null:this._loadLight(s).then(function(l){return n._getNodeRef(t.cache,s,l)})}}class ib{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return Gi}extendParams(e,t,n){const i=[];e.color=new ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ue))}return Promise.all(i)}}class rb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ab{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const s=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(s,s)}return Promise.all(r)}}class sb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class ob{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ue)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class lb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class hb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const s=a.attenuationColor||[1,1,1];return t.attenuationColor=new ve(s[0],s[1],s[2]),Promise.all(r)}}class cb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class db{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const s=a.specularColorFactor||[1,1,1];return t.specularColor=new ve(s[0],s[1],s[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ue)),Promise.all(r)}}class ub{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class fb{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],s=i.images[a.source];let l=n.textureLoader;if(s.uri){const h=n.options.manager.getHandler(s.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pb{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],s=i.images[a.source];let l=n.textureLoader;if(s.uri){const h=n.options.manager.getHandler(s.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class mb{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(s){const l=i.byteOffset||0,h=i.byteLength||0,c=i.count,d=i.byteStride,u=new Uint8Array(s,l,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(c,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(c*d);return a.decodeGltfBuffer(new Uint8Array(f),c,d,u,i.mode,i.filter),f})})}else return null}}class gb{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==cn.TRIANGLES&&h.mode!==cn.TRIANGLE_STRIP&&h.mode!==cn.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=n.extensions[this.name].attributes,s=[],l={};for(const h in a)s.push(this.parser.getDependency("accessor",a[h]).then(c=>(l[h]=c,l[h])));return s.length<1?null:(s.push(this.parser.createNodeMesh(e)),Promise.all(s).then(h=>{const c=h.pop(),d=c.isGroup?c.children:[c],u=h[0].count,f=[];for(const g of d){const _=new fe,m=new P,p=new Mt,w=new P(1,1,1),v=new Fv(g.geometry,g.material,u);for(let y=0;y<u;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&w.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,_.compose(m,p,w));for(const y in l)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);$e.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return c.isGroup?(c.clear(),c.add(...f),c):f[0]}))}}const Zu="glTF",ca=12,hd={JSON:1313821514,BIN:5130562};class _b{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ca),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ca,r=new DataView(e,ca);let a=0;for(;a<i;){const s=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===hd.JSON){const h=new Uint8Array(e,ca+a,s);this.content=n.decode(h)}else if(l===hd.BIN){const h=ca+a;this.body=e.slice(h,h+s)}a+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,s={},l={},h={};for(const c in a){const d=vl[c]||c.toLowerCase();s[d]=a[c]}for(const c in e.attributes){const d=vl[c]||c.toLowerCase();if(a[c]!==void 0){const u=n.accessors[e.attributes[c]],f=Fr[u.componentType];h[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(c){return new Promise(function(d){i.decodeDracoFile(c,function(u){for(const f in u.attributes){const g=u.attributes[f],_=l[f];_!==void 0&&(g.normalized=_)}d(u)},s,h)})})}}class vb{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class wb{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class Qu extends Na{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=s*2,h=s*3,c=i-t,d=(n-t)/c,u=d*d,f=u*d,g=e*h,_=g-h,m=-2*f+3*u,p=f-u,w=1-m,v=p-u+d;for(let y=0;y!==s;y++){const x=a[_+y+s],T=a[_+y+l]*c,C=a[g+y+s],L=a[g+y]*c;r[y]=w*x+v*T+m*C+p*L}return r}}const bb=new Mt;class xb extends Qu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return bb.fromArray(r).normalize().toArray(r),r}}const cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cd={9728:bt,9729:Ht,9984:Ko,9985:Ml,9986:fs,9987:$i},dd={33071:Vt,33648:vs,10497:Si},Oo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Sb={CUBICSPLINE:void 0,LINEAR:zr,STEP:Sa},Bo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Mb(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new ln({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn})),o.DefaultMaterial}function da(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function pi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ab(o,e,t){let n=!1,i=!1,r=!1;for(let h=0,c=e.length;h<c;h++){const d=e[h];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(o);const a=[],s=[],l=[];for(let h=0,c=e.length;h<c;h++){const d=e[h];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):o.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):o.attributes.normal;s.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):o.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(s),Promise.all(l)]).then(function(h){const c=h[0],d=h[1],u=h[2];return n&&(o.morphAttributes.position=c),i&&(o.morphAttributes.normal=d),r&&(o.morphAttributes.color=u),o.morphTargetsRelative=!0,o})}function Tb(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Eb(o){const e=o.extensions&&o.extensions[He.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+ud(e.attributes):t=o.indices+":"+ud(o.attributes)+":"+o.mode,t}function ud(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function wl(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cb(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Lb=new fe;class Rb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Nl(this.options.manager):this.textureLoader=new t0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Aa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const s={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};da(r,s,i),pi(s,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(s)})).then(function(){e(s)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let s=0,l=a.length;s<l;s++)e[a[s]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,s)=>{const l=this.associations.get(a);l!=null&&this.associations.set(s,l);for(const[h,c]of a.children.entries())r(c,s.children[h])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ss.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Oo[i.type],s=Fr[i.componentType],l=i.normalized===!0,h=new s(i.count*a);return Promise.resolve(new At(h,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const s=a[0],l=Oo[i.type],h=Fr[i.componentType],c=h.BYTES_PER_ELEMENT,d=c*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(u/f),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(w);v||(_=new h(s,p*f,i.count*f/c),v=new Pv(_,f/c),t.cache.add(w,v)),m=new Dl(v,l,u%f/c,g)}else s===null?_=new h(i.count*l):_=new h(s,u,i.count*l),m=new At(_,l,g);if(i.sparse!==void 0){const p=Oo.SCALAR,w=Fr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,x=new w(a[1],v,i.sparse.count*p),T=new h(a[2],y,i.sparse.count*l);s!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized));for(let C=0,L=x.length;C<L;C++){const b=x[C];if(m.setX(b,T[C*l]),l>=2&&m.setY(b,T[C*l+1]),l>=3&&m.setZ(b,T[C*l+2]),l>=4&&m.setW(b,T[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let s=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(s=l)}return this.loadTextureImage(e,r,s)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],s=r.images[t],l=(s.uri||s.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(c){c.flipY=!1,c.name=a.name||s.name||"",c.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(c.name=s.uri);const u=(r.samplers||{})[a.sampler]||{};return c.magFilter=cd[u.magFilter]||Ht,c.minFilter=cd[u.minFilter]||$i,c.wrapS=dd[u.wrapS]||Si,c.wrapT=dd[u.wrapT]||Si,i.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],s=self.URL||self.webkitURL;let l=a.uri||"",h=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){h=!0;const u=new Blob([d],{type:a.mimeType});return l=s.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new gt(_);m.needsUpdate=!0,u(m)}),t.load(Ss.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return h===!0&&s.revokeObjectURL(l),d.userData.mimeType=a.mimeType||Cb(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=c,c}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[He.KHR_TEXTURE_TRANSFORM]){const s=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(s){const l=r.associations.get(a);a=r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,s),r.associations.set(a,l)}}return i!==void 0&&(a.encoding=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const s="PointsMaterial:"+n.uuid;let l=this.cache.get(s);l||(l=new Wd,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(s,l)),n=l}else if(e.isLine){const s="LineBasicMaterial:"+n.uuid;let l=this.cache.get(s);l||(l=new kl,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(s,l)),n=l}if(i||r||a){let s="ClonedMaterial:"+n.uuid+":";i&&(s+="derivative-tangents:"),r&&(s+="vertex-colors:"),a&&(s+="flat-shading:");let l=this.cache.get(s);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(s,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ln}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const s={},l=r.extensions||{},h=[];if(l[He.KHR_MATERIALS_UNLIT]){const d=i[He.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),h.push(d.extendParams(s,r,t))}else{const d=r.pbrMetallicRoughness||{};if(s.color=new ve(1,1,1),s.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;s.color.fromArray(u),s.opacity=u[3]}d.baseColorTexture!==void 0&&h.push(t.assignTexture(s,"map",d.baseColorTexture,Ue)),s.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,s.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(s,"metalnessMap",d.metallicRoughnessTexture)),h.push(t.assignTexture(s,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,s)})))}r.doubleSided===!0&&(s.side=Dn);const c=r.alphaMode||Bo.OPAQUE;if(c===Bo.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,c===Bo.MASK&&(s.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Gi&&(h.push(t.assignTexture(s,"normalMap",r.normalTexture)),s.normalScale=new Ae(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;s.normalScale.set(d,d)}return r.occlusionTexture!==void 0&&a!==Gi&&(h.push(t.assignTexture(s,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Gi&&(s.emissive=new ve().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==Gi&&h.push(t.assignTexture(s,"emissiveMap",r.emissiveTexture,Ue)),Promise.all(h).then(function(){const d=new a(s);return r.name&&(d.name=r.name),pi(d,r),t.associations.set(d,{materials:e}),r.extensions&&da(i,d,r),d})}createUniqueName(e){const t=ze.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(s){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,t).then(function(l){return fd(l,s,t)})}const a=[];for(let s=0,l=e.length;s<l;s++){const h=e[s],c=Eb(h),d=i[c];if(d)a.push(d.promise);else{let u;h.extensions&&h.extensions[He.KHR_DRACO_MESH_COMPRESSION]?u=r(h):u=fd(new jt,h,t),i[c]={primitive:h,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,s=[];for(let l=0,h=a.length;l<h;l++){const c=a[l].material===void 0?Mb(this.cache):this.getDependency("material",a[l].material);s.push(c)}return s.push(t.loadGeometries(a)),Promise.all(s).then(function(l){const h=l.slice(0,l.length-1),c=l[l.length-1],d=[];for(let f=0,g=c.length;f<g;f++){const _=c[f],m=a[f];let p;const w=h[f];if(m.mode===cn.TRIANGLES||m.mode===cn.TRIANGLE_STRIP||m.mode===cn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Gd(_,w):new It(_,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===cn.TRIANGLE_STRIP?p.geometry=ld(p.geometry,Ad):m.mode===cn.TRIANGLE_FAN&&(p.geometry=ld(p.geometry,Yo));else if(m.mode===cn.LINES)p=new Uv(_,w);else if(m.mode===cn.LINE_STRIP)p=new Bs(_,w);else if(m.mode===cn.LINE_LOOP)p=new Ov(_,w);else if(m.mode===cn.POINTS)p=new Bv(_,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Tb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),pi(p,r),m.extensions&&da(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return d[0];const u=new Jn;t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rt(Tn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Fs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),pi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,s=[],l=[];for(let h=0,c=a.length;h<c;h++){const d=a[h];if(d){s.push(d);const u=new fe;r!==null&&u.fromArray(r.array,h*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Os(s,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],a=[],s=[],l=[],h=[];for(let c=0,d=n.channels.length;c<d;c++){const u=n.channels[c],f=n.samplers[u.sampler],g=u.target,_=g.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;g.node!==void 0&&(r.push(this.getDependency("node",_)),a.push(this.getDependency("accessor",m)),s.push(this.getDependency("accessor",p)),l.push(f),h.push(g))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(s),Promise.all(l),Promise.all(h)]).then(function(c){const d=c[0],u=c[1],f=c[2],g=c[3],_=c[4],m=[];for(let p=0,w=d.length;p<w;p++){const v=d[p],y=u[p],x=f[p],T=g[p],C=_[p];if(v===void 0)continue;v.updateMatrix();let L;switch(di[C.path]){case di.weights:L=Wr;break;case di.rotation:L=Mi;break;case di.position:case di.scale:default:L=jr;break}const b=v.name?v.name:v.uuid,M=T.interpolation!==void 0?Sb[T.interpolation]:zr,B=[];di[C.path]===di.weights?v.traverse(function(I){I.morphTargetInfluences&&B.push(I.name?I.name:I.uuid)}):B.push(b);let O=x.array;if(x.normalized){const I=wl(O.constructor),k=new Float32Array(O.length);for(let F=0,j=O.length;F<j;F++)k[F]=O[F]*I;O=k}for(let I=0,k=B.length;I<k;I++){const F=new L(B[I]+"."+di[C.path],y.array,O,M);T.interpolation==="CUBICSPLINE"&&(F.createInterpolant=function(Y){const G=this instanceof Mi?xb:Qu;return new G(this.times,this.values,this.getValueSize()/3,Y)},F.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(F)}}return new xs(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(s){if(s.isMesh)for(let l=0,h=i.weights.length;l<h;l++)s.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],s=i.children||[];for(let h=0,c=s.length;h<c;h++)a.push(n.getDependency("node",s[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(h){const c=h[0],d=h[1],u=h[2];u!==null&&c.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Lb)});for(let f=0,g=d.length;f<g;f++)c.add(d[f]);return c})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",s=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&s.push(l),r.camera!==void 0&&s.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){s.push(h)}),this.nodeCache[e]=Promise.all(s).then(function(h){let c;if(r.isBone===!0?c=new bs:h.length>1?c=new Jn:h.length===1?c=h[0]:c=new $e,c!==h[0])for(let d=0,u=h.length;d<u;d++)c.add(h[d]);if(r.name&&(c.userData.name=r.name,c.name=a),pi(c,r),r.extensions&&da(n,c,r),r.matrix!==void 0){const d=new fe;d.fromArray(r.matrix),c.applyMatrix4(d)}else r.translation!==void 0&&c.position.fromArray(r.translation),r.rotation!==void 0&&c.quaternion.fromArray(r.rotation),r.scale!==void 0&&c.scale.fromArray(r.scale);return i.associations.has(c)||i.associations.set(c,{}),i.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Jn;n.name&&(r.name=i.createUniqueName(n.name)),pi(r,n),n.extensions&&da(t,r,n);const a=n.nodes||[],s=[];for(let l=0,h=a.length;l<h;l++)s.push(i.getDependency("node",a[l]));return Promise.all(s).then(function(l){for(let c=0,d=l.length;c<d;c++)r.add(l[c]);const h=c=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof yn||u instanceof gt)&&d.set(u,f);return c.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=h(r),r})}}function Pb(o,e,t){const n=e.attributes,i=new ii;if(n.POSITION!==void 0){const s=t.json.accessors[n.POSITION],l=s.min,h=s.max;if(l!==void 0&&h!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(h[0],h[1],h[2])),s.normalized){const c=wl(Fr[s.componentType]);i.min.multiplyScalar(c),i.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const s=new P,l=new P;for(let h=0,c=r.length;h<c;h++){const d=r[h];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=wl(Fr[u.componentType]);l.multiplyScalar(_)}s.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(s)}o.boundingBox=i;const a=new ri;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=a}function fd(o,e,t){const n=e.attributes,i=[];function r(a,s){return t.getDependency("accessor",a).then(function(l){o.setAttribute(s,l)})}for(const a in n){const s=vl[a]||a.toLowerCase();s in o.attributes||i.push(r(n[a],s))}if(e.indices!==void 0&&!o.index){const a=t.getDependency("accessor",e.indices).then(function(s){o.setIndex(s)});i.push(a)}return pi(o,e),Pb(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ab(o,e.targets,t):o})}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var pd=function(o){return URL.createObjectURL(new Blob([o],{type:"text/javascript"}))};try{URL.revokeObjectURL(pd(""))}catch{pd=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var fn=Uint8Array,vi=Uint16Array,bl=Uint32Array,ef=new fn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tf=new fn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ib=new fn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),nf=function(o,e){for(var t=new vi(31),n=0;n<31;++n)t[n]=e+=1<<o[n-1];for(var i=new bl(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},rf=nf(ef,2),af=rf[0],Db=rf[1];af[28]=258,Db[258]=28;var kb=nf(tf,0),Nb=kb[0],xl=new vi(32768);for(var Ze=0;Ze<32768;++Ze){var ui=(Ze&43690)>>>1|(Ze&21845)<<1;ui=(ui&52428)>>>2|(ui&13107)<<2,ui=(ui&61680)>>>4|(ui&3855)<<4,xl[Ze]=((ui&65280)>>>8|(ui&255)<<8)>>>1}var ba=function(o,e,t){for(var n=o.length,i=0,r=new vi(e);i<n;++i)++r[o[i]-1];var a=new vi(e);for(i=0;i<e;++i)a[i]=a[i-1]+r[i-1]<<1;var s;if(t){s=new vi(1<<e);var l=15-e;for(i=0;i<n;++i)if(o[i])for(var h=i<<4|o[i],c=e-o[i],d=a[o[i]-1]++<<c,u=d|(1<<c)-1;d<=u;++d)s[xl[d]>>>l]=h}else for(s=new vi(n),i=0;i<n;++i)o[i]&&(s[i]=xl[a[o[i]-1]++]>>>15-o[i]);return s},Ua=new fn(288);for(var Ze=0;Ze<144;++Ze)Ua[Ze]=8;for(var Ze=144;Ze<256;++Ze)Ua[Ze]=9;for(var Ze=256;Ze<280;++Ze)Ua[Ze]=7;for(var Ze=280;Ze<288;++Ze)Ua[Ze]=8;var sf=new fn(32);for(var Ze=0;Ze<32;++Ze)sf[Ze]=5;var Fb=ba(Ua,9,1),Ub=ba(sf,5,1),zo=function(o){for(var e=o[0],t=1;t<o.length;++t)o[t]>e&&(e=o[t]);return e},Mn=function(o,e,t){var n=e/8|0;return(o[n]|o[n+1]<<8)>>(e&7)&t},Ho=function(o,e){var t=e/8|0;return(o[t]|o[t+1]<<8|o[t+2]<<16)>>(e&7)},Ob=function(o){return(o/8|0)+(o&7&&1)},Bb=function(o,e,t){(e==null||e<0)&&(e=0),(t==null||t>o.length)&&(t=o.length);var n=new(o instanceof vi?vi:o instanceof bl?bl:fn)(t-e);return n.set(o.subarray(e,t)),n},zb=function(o,e,t){var n=o.length;if(!n||t&&!t.l&&n<5)return e||new fn(0);var i=!e||t,r=!t||t.i;t||(t={}),e||(e=new fn(n*3));var a=function(he){var z=e.length;if(he>z){var Se=new fn(Math.max(z*2,he));Se.set(e),e=Se}},s=t.f||0,l=t.p||0,h=t.b||0,c=t.l,d=t.d,u=t.m,f=t.n,g=n*8;do{if(!c){t.f=s=Mn(o,l,1);var _=Mn(o,l+1,3);if(l+=3,_)if(_==1)c=Fb,d=Ub,u=9,f=5;else if(_==2){var v=Mn(o,l,31)+257,y=Mn(o,l+10,15)+4,x=v+Mn(o,l+5,31)+1;l+=14;for(var T=new fn(x),C=new fn(19),L=0;L<y;++L)C[Ib[L]]=Mn(o,l+L*3,7);l+=y*3;for(var b=zo(C),M=(1<<b)-1,B=ba(C,b,1),L=0;L<x;){var O=B[Mn(o,l,M)];l+=O&15;var m=O>>>4;if(m<16)T[L++]=m;else{var I=0,k=0;for(m==16?(k=3+Mn(o,l,3),l+=2,I=T[L-1]):m==17?(k=3+Mn(o,l,7),l+=3):m==18&&(k=11+Mn(o,l,127),l+=7);k--;)T[L++]=I}}var F=T.subarray(0,v),j=T.subarray(v);u=zo(F),f=zo(j),c=ba(F,u,1),d=ba(j,f,1)}else throw"invalid block type";else{var m=Ob(l)+4,p=o[m-4]|o[m-3]<<8,w=m+p;if(w>n){if(r)throw"unexpected EOF";break}i&&a(h+p),e.set(o.subarray(m,w),h),t.b=h+=p,t.p=l=w*8;continue}if(l>g){if(r)throw"unexpected EOF";break}}i&&a(h+131072);for(var Y=(1<<u)-1,G=(1<<f)-1,Q=l;;Q=l){var I=c[Ho(o,l)&Y],Z=I>>>4;if(l+=I&15,l>g){if(r)throw"unexpected EOF";break}if(!I)throw"invalid length/literal";if(Z<256)e[h++]=Z;else if(Z==256){Q=l,c=null;break}else{var ge=Z-254;if(Z>264){var L=Z-257,ee=ef[L];ge=Mn(o,l,(1<<ee)-1)+af[L],l+=ee}var V=d[Ho(o,l)&G],K=V>>>4;if(!V)throw"invalid distance";l+=V&15;var j=Nb[K];if(K>3){var ee=tf[K];j+=Ho(o,l)&(1<<ee)-1,l+=ee}if(l>g){if(r)throw"unexpected EOF";break}i&&a(h+131072);for(var re=h+ge;h<re;h+=4)e[h]=e[h-j],e[h+1]=e[h+1-j],e[h+2]=e[h+2-j],e[h+3]=e[h+3-j];h=re}}t.l=c,t.p=Q,t.b=h,c&&(s=1,t.m=u,t.d=d,t.n=f)}while(!s);return h==e.length?e:Bb(e,0,h)},Hb=new fn(0),Vb=function(o){if((o[0]&15)!=8||o[0]>>>4>7||(o[0]<<8|o[1])%31)throw"invalid zlib data";if(o[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Gb(o,e){return zb((Vb(o),o.subarray(2,-4)),e)}var Wb=typeof TextDecoder<"u"&&new TextDecoder,jb=0;try{Wb.decode(Hb,{stream:!0}),jb=1}catch{}function of(o,e,t){const n=t.length-o-1;if(e>=t[n])return n-1;if(e<=t[o])return o;let i=o,r=n,a=Math.floor((i+r)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?r=a:i=a,a=Math.floor((i+r)/2);return a}function qb(o,e,t,n){const i=[],r=[],a=[];i[0]=1;for(let s=1;s<=t;++s){r[s]=e-n[o+1-s],a[s]=n[o+s]-e;let l=0;for(let h=0;h<s;++h){const c=a[h+1],d=r[s-h],u=i[h]/(c+d);i[h]=l+c*u,l=d*u}i[s]=l}return i}function Xb(o,e,t,n){const i=of(o,n,e),r=qb(i,n,o,e),a=new We(0,0,0,0);for(let s=0;s<=o;++s){const l=t[i-o+s],h=r[s],c=l.w*h;a.x+=l.x*c,a.y+=l.y*c,a.z+=l.z*c,a.w+=l.w*h}return a}function Kb(o,e,t,n,i){const r=[];for(let d=0;d<=t;++d)r[d]=0;const a=[];for(let d=0;d<=n;++d)a[d]=r.slice(0);const s=[];for(let d=0;d<=t;++d)s[d]=r.slice(0);s[0][0]=1;const l=r.slice(0),h=r.slice(0);for(let d=1;d<=t;++d){l[d]=e-i[o+1-d],h[d]=i[o+d]-e;let u=0;for(let f=0;f<d;++f){const g=h[f+1],_=l[d-f];s[d][f]=g+_;const m=s[f][d-1]/s[d][f];s[f][d]=u+g*m,u=_*m}s[d][d]=u}for(let d=0;d<=t;++d)a[0][d]=s[d][t];for(let d=0;d<=t;++d){let u=0,f=1;const g=[];for(let _=0;_<=t;++_)g[_]=r.slice(0);g[0][0]=1;for(let _=1;_<=n;++_){let m=0;const p=d-_,w=t-_;d>=_&&(g[f][0]=g[u][0]/s[w+1][p],m=g[f][0]*s[p][w]);const v=p>=-1?1:-p,y=d-1<=w?_-1:t-d;for(let T=v;T<=y;++T)g[f][T]=(g[u][T]-g[u][T-1])/s[w+1][p+T],m+=g[f][T]*s[p+T][w];d<=w&&(g[f][_]=-g[u][_-1]/s[w+1][d],m+=g[f][_]*s[d][w]),a[_][d]=m;const x=u;u=f,f=x}}let c=t;for(let d=1;d<=n;++d){for(let u=0;u<=t;++u)a[d][u]*=c;c*=t-d}return a}function Yb(o,e,t,n,i){const r=i<o?i:o,a=[],s=of(o,n,e),l=Kb(s,n,o,r,e),h=[];for(let c=0;c<t.length;++c){const d=t[c].clone(),u=d.w;d.x*=u,d.y*=u,d.z*=u,h[c]=d}for(let c=0;c<=r;++c){const d=h[s-o].clone().multiplyScalar(l[c][0]);for(let u=1;u<=o;++u)d.add(h[s-o+u].clone().multiplyScalar(l[c][u]));a[c]=d}for(let c=r+1;c<=i+1;++c)a[c]=new We(0,0,0);return a}function $b(o,e){let t=1;for(let i=2;i<=o;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=o-e;++i)n*=i;return t/n}function Jb(o){const e=o.length,t=[],n=[];for(let r=0;r<e;++r){const a=o[r];t[r]=new P(a.x,a.y,a.z),n[r]=a.w}const i=[];for(let r=0;r<e;++r){const a=t[r].clone();for(let s=1;s<=r;++s)a.sub(i[r-s].clone().multiplyScalar($b(r,s)*n[s]));i[r]=a.divideScalar(n[0])}return i}function Zb(o,e,t,n,i){const r=Yb(o,e,t,n,i);return Jb(r)}class Qb extends zv{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let a=0;a<n.length;++a){const s=n[a];this.controlPoints[a]=new We(s.x,s.y,s.z,s.w)}}getPoint(e,t=new P){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=Xb(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new P){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=Zb(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let ke,ht,zt;class ex extends Ci{constructor(e){super(e)}load(e,t,n,i){const r=this,a=r.path===""?Ss.extractUrlBase(e):r.path,s=new Aa(this.manager);s.setPath(r.path),s.setResponseType("arraybuffer"),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(l){try{t(r.parse(l,a))}catch(h){i?i(h):console.error(h),r.manager.itemError(e)}},n,i)}parse(e,t){if(sx(e))ke=new ax().parse(e);else{const i=df(e);if(!ox(i))throw new Error("THREE.FBXLoader: Unknown format.");if(gd(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+gd(i));ke=new rx().parse(i)}const n=new Nl(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new tx(n,this.manager).parse(ke)}}class tx{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){ht=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new nx().parse(i);return this.parseScene(i,r,n),zt}parseConnections(){const e=new Map;return"Connections"in ke&&ke.Connections.connections.forEach(function(n){const i=n[0],r=n[1],a=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const s={ID:r,relationship:a};e.get(i).parents.push(s),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:a};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in ke.Objects){const n=ke.Objects.Video;for(const i in n){const r=n[i],a=parseInt(i);if(e[a]=r.RelativeFilename||r.Filename,"Content"in r){const s=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(s||l){const h=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=h}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in ke.Objects){const n=ke.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,a=i!==void 0?i.value:0,s=r!==void 0?r.value:0;if(n.wrapS=a===0?Si:Vt,n.wrapT=s===0?Si:Vt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,r=ht.get(e.id).children;r!==void 0&&r.length>0&&t[r[0].ID]!==void 0&&(n=t[r[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let a;const s=e.FileName.slice(-3).toLowerCase();if(s==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),a=new gt):(l.setPath(this.textureLoader.path),a=l.load(n))}else s==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),a=new gt):a=this.textureLoader.load(n);return this.textureLoader.setPath(i),a}parseMaterials(e){const t=new Map;if("Material"in ke.Objects){const n=ke.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!ht.has(n))return null;const a=this.parseParameters(e,t,n);let s;switch(r.toLowerCase()){case"phong":s=new Mo;break;case"lambert":s=new Hv;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),s=new Mo;break}return s.setValues(a),s.name=i,s}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new ve().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new ve().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new ve().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new ve().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new ve().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new ve().fromArray(e.SpecularColor.value).convertSRGBToLinear());const r=this;return ht.get(n).children.forEach(function(a){const s=a.relationship;switch(s){case"Bump":i.bumpMap=r.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,a.ID),i.map!==void 0&&(i.map.encoding=Ue);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,a.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,a.ID),i.emissiveMap!==void 0&&(i.emissiveMap.encoding=Ue);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,a.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,a.ID),i.envMap!==void 0&&(i.envMap.mapping=ys,i.envMap.encoding=Ue);break;case"SpecularColor":i.specularMap=r.getTexture(t,a.ID),i.specularMap!==void 0&&(i.specularMap.encoding=Ue);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,a.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",s);break}}),i}getTexture(e,t){return"LayeredTexture"in ke.Objects&&t in ke.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=ht.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in ke.Objects){const n=ke.Objects.Deformer;for(const i in n){const r=n[i],a=ht.get(parseInt(i));if(r.attrType==="Skin"){const s=this.parseSkeleton(a,n);s.ID=i,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),s.geometryID=a.parents[0].ID,e[i]=s}else if(r.attrType==="BlendShape"){const s={id:i};s.rawTargets=this.parseMorphTargets(a,n),s.id=i,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=s}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const a={ID:i.ID,indices:[],weights:[],transformLink:new fe().fromArray(r.TransformLink.a)};"Indexes"in r&&(a.indices=r.Indexes.a,a.weights=r.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],a=t[r.ID],s={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;s.geoID=ht.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(s)}return n}parseScene(e,t,n){zt=new Jn;const i=this.parseModels(e.skeletons,t,n),r=ke.Objects.Model,a=this;i.forEach(function(l){const h=r[l.ID];a.setLookAtProperties(l,h),ht.get(l.ID).parents.forEach(function(d){const u=i.get(d.ID);u!==void 0&&u.add(l)}),l.parent===null&&zt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),zt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const h=hf(l.userData.transformData);l.applyMatrix4(h),l.updateWorldMatrix()}});const s=new ix().parse();zt.children.length===1&&zt.children[0].isGroup&&(zt.children[0].animations=s,zt=zt.children[0]),zt.animations=s}parseModels(e,t,n){const i=new Map,r=ke.Objects.Model;for(const a in r){const s=parseInt(a),l=r[a],h=ht.get(s);let c=this.buildSkeleton(h,e,s,l.attrName);if(!c){switch(l.attrType){case"Camera":c=this.createCamera(h);break;case"Light":c=this.createLight(h);break;case"Mesh":c=this.createMesh(h,t,n);break;case"NurbsCurve":c=this.createCurve(h,t);break;case"LimbNode":case"Root":c=new bs;break;case"Null":default:c=new Jn;break}c.name=l.attrName?ze.sanitizeNodeName(l.attrName):"",c.ID=s}this.getTransformData(c,l),i.set(s,c)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(a){for(const s in t){const l=t[s];l.rawBones.forEach(function(h,c){if(h.ID===a.ID){const d=r;r=new bs,r.matrixWorld.copy(h.transformLink),r.name=i?ze.sanitizeNodeName(i):"",r.ID=n,l.bones[c]=r,d!==null&&r.add(d)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=ke.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new $e;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let s=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(s=n.AspectWidth.value,l=n.AspectHeight.value);const h=s/l;let c=45;n.FieldOfView!==void 0&&(c=n.FieldOfView.value);const d=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Rt(c,h,r,a),d!==null&&t.setFocalLength(d);break;case 1:t=new Fs(-s/2,s/2,l/2,-l/2,r,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new $e;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=ke.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new $e;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new ve().fromArray(n.Color.value).convertSRGBToLinear());let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let s=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?s=0:s=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new tl(r,a,s,l);break;case 1:t=new Ul(r,a);break;case 2:let h=Math.PI/3;n.InnerAngle!==void 0&&(h=Tn.degToRad(n.InnerAngle.value));let c=0;n.OuterAngle!==void 0&&(c=Tn.degToRad(n.OuterAngle.value),c=Math.max(c,1)),t=new $d(r,a,s,h,c,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new tl(r,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,a=null;const s=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&s.push(n.get(l.ID))}),s.length>1?a=s:s.length>0?a=s[0]:(a=new Mo({color:13421772}),s.push(a)),"color"in r.attributes&&s.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new Gd(r,a),i.normalizeSkinWeights()):i=new It(r,a),i}createCurve(e,t){const n=e.children.reduce(function(r,a){return t.has(a.ID)&&(r=t.get(a.ID)),r},null),i=new kl({color:3342591,linewidth:1});return new Bs(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=cf(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&ht.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=ke.Objects.Model[i.ID];if("Lcl_Translation"in r){const a=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),zt.add(e.target)):e.lookAt(new P().fromArray(a))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const a=e[r];ht.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){const h=l.ID;ht.get(h).parents.forEach(function(d){n.has(d.ID)&&n.get(d.ID).bind(new Os(a.bones),i[d.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in ke.Objects){const t=ke.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new fe().fromArray(r.Matrix.a)}):e[i.Node]=new fe().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in ke&&"AmbientColor"in ke.GlobalSettings){const e=ke.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new ve(t,n,i).convertSRGBToLinear();zt.add(new Jd(r,1))}}}}class nx{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in ke.Objects){const n=ke.Objects.Geometry;for(const i in n){const r=ht.get(parseInt(i)),a=this.parseGeometry(r,n[i],e);t.set(parseInt(i),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],a=e.parents.map(function(d){return ke.Objects.Model[d.ID]});if(a.length===0)return;const s=e.children.reduce(function(d,u){return i[u.ID]!==void 0&&(d=i[u.ID]),d},null);e.children.forEach(function(d){n.morphTargets[d.ID]!==void 0&&r.push(n.morphTargets[d.ID])});const l=a[0],h={};"RotationOrder"in l&&(h.eulerOrder=cf(l.RotationOrder.value)),"InheritType"in l&&(h.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(h.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(h.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(h.scale=l.GeometricScaling.value);const c=hf(h);return this.genGeometry(t,s,r,c)}genGeometry(e,t,n,i){const r=new jt;e.attrName&&(r.name=e.attrName);const a=this.parseGeoNode(e,t),s=this.genBuffers(a),l=new Bt(s.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),s.colors.length>0&&r.setAttribute("color",new Bt(s.colors,3)),t&&(r.setAttribute("skinIndex",new Cl(s.weightsIndices,4)),r.setAttribute("skinWeight",new Bt(s.vertexWeights,4)),r.FBX_Deformer=t),s.normal.length>0){const h=new Fe().getNormalMatrix(i),c=new Bt(s.normal,3);c.applyNormalMatrix(h),r.setAttribute("normal",c)}if(s.uvs.forEach(function(h,c){let d="uv"+(c+1).toString();c===0&&(d="uv"),r.setAttribute(d,new Bt(s.uvs[c],2))}),a.material&&a.material.mappingType!=="AllSame"){let h=s.materialIndex[0],c=0;if(s.materialIndex.forEach(function(d,u){d!==h&&(r.addGroup(c,u-c,h),h=d,c=u)}),r.groups.length>0){const d=r.groups[r.groups.length-1],u=d.start+d.count;u!==s.materialIndex.length&&r.addGroup(u,s.materialIndex.length-u,h)}r.groups.length===0&&r.addGroup(0,s.materialIndex.length,s.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(a,s){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:r,weight:i.weights[s]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,a=[],s=[],l=[],h=[],c=[],d=[];const u=this;return e.vertexIndices.forEach(function(f,g){let _,m=!1;f<0&&(f=f^-1,m=!0);let p=[],w=[];if(a.push(f*3,f*3+1,f*3+2),e.color){const v=us(g,n,f,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(v){w.push(v.weight),p.push(v.id)}),w.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const v=[0,0,0,0],y=[0,0,0,0];w.forEach(function(x,T){let C=x,L=p[T];y.forEach(function(b,M,B){if(C>b){B[M]=C,C=b;const O=v[M];v[M]=L,L=O}})}),p=v,w=y}for(;w.length<4;)w.push(0),p.push(0);for(let v=0;v<4;++v)c.push(w[v]),d.push(p[v])}if(e.normal){const v=us(g,n,f,e.normal);s.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=us(g,n,f,e.material)[0],_<0&&(u.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(v,y){const x=us(g,n,f,v);h[y]===void 0&&(h[y]=[]),h[y].push(x[0]),h[y].push(x[1])}),i++,m&&(i>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),u.genFace(t,e,a,_,s,l,h,c,d,i),n++,i=0,a=[],s=[],l=[],h=[],c=[],d=[])}),t}genFace(e,t,n,i,r,a,s,l,h,c){for(let d=2;d<c;d++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(d-1)*3]]),e.vertex.push(t.vertexPositions[n[(d-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(d-1)*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(d-1)*4]),e.vertexWeights.push(l[(d-1)*4+1]),e.vertexWeights.push(l[(d-1)*4+2]),e.vertexWeights.push(l[(d-1)*4+3]),e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.weightsIndices.push(h[0]),e.weightsIndices.push(h[1]),e.weightsIndices.push(h[2]),e.weightsIndices.push(h[3]),e.weightsIndices.push(h[(d-1)*4]),e.weightsIndices.push(h[(d-1)*4+1]),e.weightsIndices.push(h[(d-1)*4+2]),e.weightsIndices.push(h[(d-1)*4+3]),e.weightsIndices.push(h[d*4]),e.weightsIndices.push(h[d*4+1]),e.weightsIndices.push(h[d*4+2]),e.weightsIndices.push(h[d*4+3])),t.color&&(e.colors.push(a[0]),e.colors.push(a[1]),e.colors.push(a[2]),e.colors.push(a[(d-1)*3]),e.colors.push(a[(d-1)*3+1]),e.colors.push(a[(d-1)*3+2]),e.colors.push(a[d*3]),e.colors.push(a[d*3+1]),e.colors.push(a[d*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[0]),e.normal.push(r[1]),e.normal.push(r[2]),e.normal.push(r[(d-1)*3]),e.normal.push(r[(d-1)*3+1]),e.normal.push(r[(d-1)*3+2]),e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2])),t.uv&&t.uv.forEach(function(u,f){e.uvs[f]===void 0&&(e.uvs[f]=[]),e.uvs[f].push(s[f][0]),e.uvs[f].push(s[f][1]),e.uvs[f].push(s[f][(d-1)*2]),e.uvs[f].push(s[f][(d-1)*2+1]),e.uvs[f].push(s[f][d*2]),e.uvs[f].push(s[f][d*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(a){a.rawTargets.forEach(function(s){const l=ke.Objects.Geometry[s.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,s.name)})})}genMorphGeometry(e,t,n,i,r){const a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],s=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],h=e.attributes.position.count*3,c=new Float32Array(h);for(let g=0;g<l.length;g++){const _=l[g]*3;c[_]=s[g*3],c[_+1]=s[g*3+1],c[_+2]=s[g*3+2]}const d={vertexIndices:a,vertexPositions:c},u=this.genBuffers(d),f=new Bt(u.vertex,3);f.name=r||n.attrName,f.applyMatrix4(i),e.morphAttributes.position.push(f)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let a=0,s=new ve;a<i.length;a+=4)s.fromArray(i,a).convertSRGBToLinear().toArray(i,a);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let a=0;a<i.length;++a)r.push(a);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new jt;const n=t-1,i=e.KnotVector.a,r=[],a=e.Points.a;for(let d=0,u=a.length;d<u;d+=4)r.push(new We().fromArray(a,d));let s,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){s=n,l=i.length-1-s;for(let d=0;d<n;++d)r.push(r[d])}const c=new Qb(n,i,r,s,l).getPoints(r.length*12);return new jt().setFromPoints(c)}}class ix{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(ke.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=ke.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=ke.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(lx),values:t[n].KeyValueFloat.a},r=ht.get(i.id);if(r!==void 0){const a=r.parents[0].ID,s=r.parents[0].relationship;s.match(/X/)?e.get(a).curves.x=i:s.match(/Y/)?e.get(a).curves.y=i:s.match(/Z/)?e.get(a).curves.z=i:s.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=i)}}}parseAnimationLayers(e){const t=ke.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],a=ht.get(parseInt(i));a!==void 0&&(a.children.forEach(function(l,h){if(e.has(l.ID)){const c=e.get(l.ID);if(c.curves.x!==void 0||c.curves.y!==void 0||c.curves.z!==void 0){if(r[h]===void 0){const d=ht.get(l.ID).parents.filter(function(u){return u.relationship!==void 0})[0].ID;if(d!==void 0){const u=ke.Objects.Model[d.toString()];if(u===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:u.attrName?ze.sanitizeNodeName(u.attrName):"",ID:u.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};zt.traverse(function(g){g.ID===u.id&&(f.transform=g.matrix,g.userData.transformData&&(f.eulerOrder=g.userData.transformData.eulerOrder))}),f.transform||(f.transform=new fe),"PreRotation"in u&&(f.preRotation=u.PreRotation.value),"PostRotation"in u&&(f.postRotation=u.PostRotation.value),r[h]=f}}r[h]&&(r[h][c.attr]=c)}else if(c.curves.morph!==void 0){if(r[h]===void 0){const d=ht.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,u=ht.get(d).parents[0].ID,f=ht.get(u).parents[0].ID,g=ht.get(f).parents[0].ID,_=ke.Objects.Model[g],m={modelName:_.attrName?ze.sanitizeNodeName(_.attrName):"",morphName:ke.Objects.Deformer[d].attrName};r[h]=m}r[h][c.attr]=c}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=ke.Objects.AnimationStack,n={};for(const i in t){const r=ht.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:a}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new xs(e.name,-1,t)}generateTracks(e){const t=[];let n=new P,i=new Mt,r=new P;if(e.transform&&e.transform.decompose(n,i,r),n=n.toArray(),i=new pn().setFromQuaternion(i,e.eulerOrder).toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");a!==void 0&&t.push(a)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const a=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);a!==void 0&&t.push(a)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");a!==void 0&&t.push(a)}if(e.DeformPercent!==void 0){const a=this.generateMorphTrack(e);a!==void 0&&t.push(a)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(r,t,n);return new jr(e+"."+i,r,a)}generateRotationTrack(e,t,n,i,r,a){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Tn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Tn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Tn.degToRad));const s=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(s,t,n);i!==void 0&&(i=i.map(Tn.degToRad),i.push(a),i=new pn().fromArray(i),i=new Mt().setFromEuler(i)),r!==void 0&&(r=r.map(Tn.degToRad),r.push(a),r=new pn().fromArray(r),r=new Mt().setFromEuler(r).invert());const h=new Mt,c=new pn,d=[];for(let u=0;u<l.length;u+=3)c.set(l[u],l[u+1],l[u+2],a),h.setFromEuler(c),i!==void 0&&h.premultiply(i),r!==void 0&&h.multiply(r),h.toArray(d,u/3*4);return new Mi(e+".quaternion",s,d)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=zt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Wr(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const a=t[r];a!==i&&(t[n]=a,i=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let a=-1,s=-1,l=-1;return e.forEach(function(h){if(t.x&&(a=t.x.times.indexOf(h)),t.y&&(s=t.y.times.indexOf(h)),t.z&&(l=t.z.times.indexOf(h)),a!==-1){const c=t.x.values[a];r.push(c),i[0]=c}else r.push(i[0]);if(s!==-1){const c=t.y.values[s];r.push(c),i[1]=c}else r.push(i[1]);if(l!==-1){const c=t.z.values[l];r.push(c),i[2]=c}else r.push(i[2])}),r}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],i=e.values[t]-n,r=Math.abs(i);if(r>=180){const a=r/180,s=i/a;let l=n+s;const h=e.times[t-1],d=(e.times[t]-h)/a;let u=h+d;const f=[],g=[];for(;u<e.times[t];)f.push(u),u+=d,g.push(l),l+=s;e.times=_d(e.times,t,f),e.values=_d(e.values,t,g)}}}}class rx{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new lf,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const a=i.match(/^[\s\t]*;/),s=i.match(/^[\s\t]*$/);if(a||s)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),h=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),c=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):h?t.parseNodeProperty(i,h,n[++r]):c?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},a=this.parseNodeAttr(i),s=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in s?(n==="PoseNode"?s.PoseNode.push(r):s[n].id!==void 0&&(s[n]={},s[n][s[n].id]=s[n]),a.id!==""&&(s[n][a.id]=r)):typeof a.id=="number"?(s[n]={},s[n][a.id]=r):n!=="Properties70"&&(n==="PoseNode"?s[n]=[r]:s[n]=r),typeof a.id=="number"&&(r.id=a.id),a.name!==""&&(r.attrName=a.name),a.type!==""&&(r.attrType=a.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),h=parseInt(l[0]),c=parseInt(l[1]);let d=r.split(",").slice(3);d=d.map(function(u){return u.trim().replace(/^"/,"")}),i="connections",r=[h,c],cx(r,d),a[i]===void 0&&(a[i]=[])}i==="Node"&&(a.id=r),i in a&&Array.isArray(a[i])?a[i].push(r):i!=="a"?a[i]=r:a.a=r,this.setCurrentProp(a,i),i==="a"&&r.slice(-1)!==","&&(a.a=Go(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Go(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(c){return c.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],a=i[1],s=i[2],l=i[3];let h=i[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":h=parseFloat(h);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":h=Go(h);break}this.getPrevNode()[r]={type:a,type2:s,flag:l,value:h},this.setCurrentProp(this.getPrevNode(),r)}}class ax{parse(e){const t=new md(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new lf;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),s=e.getString(a);if(i===0)return null;const l=[];for(let u=0;u<r;u++)l.push(this.parseProperty(e));const h=l.length>0?l[0]:"",c=l.length>1?l[1]:"",d=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const u=this.parseNode(e,t);u!==null&&this.parseSubNode(s,n,u)}return n.propertyList=l,typeof h=="number"&&(n.id=h),c!==""&&(n.attrName=c),d!==""&&(n.attrType=d),s!==""&&(n.name=s),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,a){a!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const a=n.propertyList[2],s=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:a,flag:s,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),a=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const s=Gb(new Uint8Array(e.getArrayBuffer(a))),l=new md(s.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class md{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class lf{add(e,t){this[e]=t}}function sx(o){const e="Kaydara FBX Binary  \0";return o.byteLength>=e.length&&e===df(o,0,e.length)}function ox(o){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=o[i-1];return o=o.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function gd(o){const e=/FBXVersion: (\d+)/,t=o.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function lx(o){return o/46186158e3}const hx=[];function us(o,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=o;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,a=r+n.dataSize;return dx(hx,n.buffer,r,a)}const Vo=new pn,Sr=new P;function hf(o){const e=new fe,t=new fe,n=new fe,i=new fe,r=new fe,a=new fe,s=new fe,l=new fe,h=new fe,c=new fe,d=new fe,u=new fe,f=o.inheritType?o.inheritType:0;if(o.translation&&e.setPosition(Sr.fromArray(o.translation)),o.preRotation){const M=o.preRotation.map(Tn.degToRad);M.push(o.eulerOrder||pn.DEFAULT_ORDER),t.makeRotationFromEuler(Vo.fromArray(M))}if(o.rotation){const M=o.rotation.map(Tn.degToRad);M.push(o.eulerOrder||pn.DEFAULT_ORDER),n.makeRotationFromEuler(Vo.fromArray(M))}if(o.postRotation){const M=o.postRotation.map(Tn.degToRad);M.push(o.eulerOrder||pn.DEFAULT_ORDER),i.makeRotationFromEuler(Vo.fromArray(M)),i.invert()}o.scale&&r.scale(Sr.fromArray(o.scale)),o.scalingOffset&&s.setPosition(Sr.fromArray(o.scalingOffset)),o.scalingPivot&&a.setPosition(Sr.fromArray(o.scalingPivot)),o.rotationOffset&&l.setPosition(Sr.fromArray(o.rotationOffset)),o.rotationPivot&&h.setPosition(Sr.fromArray(o.rotationPivot)),o.parentMatrixWorld&&(d.copy(o.parentMatrix),c.copy(o.parentMatrixWorld));const g=t.clone().multiply(n).multiply(i),_=new fe;_.extractRotation(c);const m=new fe;m.copyPosition(c);const p=m.clone().invert().multiply(c),w=_.clone().invert().multiply(p),v=r,y=new fe;if(f===0)y.copy(_).multiply(g).multiply(w).multiply(v);else if(f===1)y.copy(_).multiply(w).multiply(g).multiply(v);else{const B=new fe().scale(new P().setFromMatrixScale(d)).clone().invert(),O=w.clone().multiply(B);y.copy(_).multiply(g).multiply(O).multiply(v)}const x=h.clone().invert(),T=a.clone().invert();let C=e.clone().multiply(l).multiply(h).multiply(t).multiply(n).multiply(i).multiply(x).multiply(s).multiply(a).multiply(r).multiply(T);const L=new fe().copyPosition(C),b=c.clone().multiply(L);return u.copyPosition(b),C=u.clone().multiply(y),C.premultiply(c.invert()),C}function cf(o){o=o||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return o===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[o]}function Go(o){return o.split(",").map(function(t){return parseFloat(t)})}function df(o,e,t){return e===void 0&&(e=0),t===void 0&&(t=o.byteLength),new TextDecoder().decode(new Uint8Array(o,e,t))}function cx(o,e){for(let t=0,n=o.length,i=e.length;t<i;t++,n++)o[n]=e[t]}function dx(o,e,t,n){for(let i=t,r=0;i<n;i++,r++)o[r]=e[i];return o}function _d(o,e,t){return o.slice(0,e).concat(t).concat(o.slice(e))}const Wo=new WeakMap;class ux extends Ci{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Aa(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,dn).catch(n)}decodeDracoFile(e,t,n,i,r=Hr){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Wo.has(e)){const l=Wo.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,a=e.byteLength,s=this._getWorker(r,a).then(l=>(i=l,new Promise((h,c)=>{i._callbacks[r]={resolve:h,reject:c},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return s.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Wo.set(e,{key:n,promise:s}),s}_createGeometry(e){const t=new jt;e.index&&t.setIndex(new At(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,a=i.array,s=i.itemSize,l=new At(a,s);r==="color"&&this._assignVertexColorSpace(l,i.vertexColorSpace),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==dn)return;const n=new ve;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Aa(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=fx.toString(),a=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function fx(){let o,e;onmessage=function(a){const s=a.data;switch(s.type){case"init":o=s.decoderConfig,e=new Promise(function(c){o.onModuleLoaded=function(d){c({draco:d})},DracoDecoderModule(o)});break;case"decode":const l=s.buffer,h=s.taskConfig;e.then(c=>{const d=c.draco,u=new d.Decoder;try{const f=t(d,u,new Int8Array(l),h),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:s.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:s.id,error:f.message})}finally{d.destroy(u)}});break}};function t(a,s,l,h){const c=h.attributeIDs,d=h.attributeTypes;let u,f;const g=s.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)u=new a.Mesh,f=s.DecodeArrayToMesh(l,l.byteLength,u);else if(g===a.POINT_CLOUD)u=new a.PointCloud,f=s.DecodeArrayToPointCloud(l,l.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in c){const p=self[d[m]];let w,v;if(h.useUniqueIDs)v=c[m],w=s.GetAttributeByUniqueId(u,v);else{if(v=s.GetAttributeId(u,a[c[m]]),v===-1)continue;w=s.GetAttribute(u,v)}const y=i(a,s,u,m,p,w);m==="color"&&(y.vertexColorSpace=h.vertexColorSpace),_.attributes.push(y)}return g===a.TRIANGULAR_MESH&&(_.index=n(a,s,u)),a.destroy(u),_}function n(a,s,l){const c=l.num_faces()*3,d=c*4,u=a._malloc(d);s.GetTrianglesUInt32Array(l,d,u);const f=new Uint32Array(a.HEAPF32.buffer,u,c).slice();return a._free(u),{array:f,itemSize:1}}function i(a,s,l,h,c,d){const u=d.num_components(),g=l.num_points()*u,_=g*c.BYTES_PER_ELEMENT,m=r(a,c),p=a._malloc(_);s.GetAttributeDataArrayForAllPoints(l,d,m,_,p);const w=new c(a.HEAPF32.buffer,p,g).slice();return a._free(p),{name:h,array:w,itemSize:u}}function r(a,s){switch(s){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class px extends Hl{constructor(e){super(),this.sources=e,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new eb,this.loaders.fbxLoader=new ex,this.loaders.dracoLoader=new ux,this.loaders.textureLoader=new Nl,this.loaders.cubeTextureLoader=new Jv}startLoading(){for(const e of this.sources)e.type==="gltfModel"?(this.loaders.dracoLoader.setDecoderPath("/draco/"),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader),this.loaders.gltfLoader.load(e.path,t=>{this.sourceLoaded(e,t)})):e.type==="texture"?this.loaders.textureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="cubeTexture"?this.loaders.cubeTextureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="fbxModel"&&this.loaders.fbxLoader.load(e.path,t=>{this.sourceLoaded(e,t)})}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready")}}const mx=[{name:"worldModel",type:"fbxModel",path:"models/Map/Map.fbx"},{name:"Ships",type:"gltfModel",path:"models/Ship/Ships_anim.glb"},{name:"SponserImage",type:"texture",path:"models/Ship/Sponsor demo.jpg"},{name:"Map_albedo",type:"texture",path:"models/Map/map_Albedo.jpg"},{name:"WaterAlbedo",type:"texture",path:"models/Map/Water_2D_View.jpg"},{name:"MonumentsAlbedo",type:"texture",path:"models/Map/Monuments_Albedo.png"},{name:"TreesAlbedo",type:"texture",path:"models/Map/Tree_MAT_Albedo.png"},{name:"CharacterFlavilla2",type:"gltfModel",path:"models/Character/Character_anim02.glb"}];class gx{constructor(){this.experience=new Ln,this.camera=this.experience.camera.instance,this.cameraControls=this.experience.camera.controls,this.setControls()}setControls(){const e=document.getElementById("zoomInButton"),t=document.getElementById("zoomOutButton");e.addEventListener("click",n=>{this.camera.position.y>5&&this.camera.position.set(this.camera.position.x,Math.floor(this.camera.position.y)-2,this.camera.position.z)}),t.addEventListener("click",n=>{this.camera.position.y<22&&this.camera.position.set(this.camera.position.x,Math.floor(this.camera.position.y)+2,this.camera.position.z),this.camera.position.y>18&&this.cameraControls.target.set(0,0,0)})}}let jo=null;class Ln{constructor(e){if(jo)return jo;jo=this,window.experience=this,this.canvas=e,this.countryIntersections=[],this.characterIntersections=[],this.debug=new E0,this.sizes=new C0,this.time=new L0,this.scene=new Rv,this.resources=new px(mx),this.camera=new jw,this.renderer=new qw,this.world=new Qw,this.zoomControls=new gx,this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()})}resize(){this.camera.resize(),this.renderer.resize()}update(){this.camera.update(),this.world.update(),this.renderer.update()}destroy(){this.sizes.off("resize"),this.time.off("tick"),this.scene.traverse(e=>{if(e instanceof It){e.geometry.dispose();for(const t in e.material){const n=e.material[t];n&&typeof n.dispose=="function"&&n.dispose()}}}),this.camera.controls.dispose(),this.renderer.instance.dispose(),this.debug.active&&this.debug.ui.destroy()}}new Ln(document.querySelector("canvas.webgl"));
//# sourceMappingURL=index-36e60fb2.js.map
