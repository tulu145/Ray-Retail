import{j as e,ac as t,Z as a,S as r}from"./ui-vendor-BCf-Do5d.js";import{r as s,u as o}from"./react-vendor-BIUVEXUy.js";import{a as i}from"./utils-OxNOjQ9l.js";const n="/assets/BlogBgImg1-CuVSza68.jpg";let l,c,d,p={data:""},m=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,g=/\n+/g,h=(e,t)=>{let a="",r="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?a=o+" "+i+";":r+="f"==o[1]?h(i,o):o+"{"+h(i,"k"==o[1]?"":t)+"}":"object"==typeof i?r+=h(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=h.p?h.p(o,i):o+":"+i+";")}return a+(t&&s?t+"{"+s+"}":s)+r},f={},x=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+x(e[a]);return t}return e};function y(e){let t=this||{},a=e.call?e(t.p):e;return((e,t,a,r,s)=>{let o=x(e),i=f[o]||(f[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!f[i]){let t=o!==e?e:(e=>{let t,a,r=[{}];for(;t=m.exec(e.replace(u,""));)t[4]?r.shift():t[3]?(a=t[3].replace(g," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(g," ").trim();return r[0]})(e);f[i]=h(s?{["@keyframes "+i]:t}:t,a?"":"."+i)}let n=a&&f.g?f.g:null;return a&&(f.g=f[i]),l=f[i],c=t,d=r,(p=n)?c.data=c.data.replace(p,l):-1===c.data.indexOf(l)&&(c.data=d?l+c.data:c.data+l),i;var l,c,d,p})(a.unshift?a.raw?((e,t,a)=>e.reduce((e,r,s)=>{let o=t[s];if(o&&o.call){let e=o(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":h(e,""):!1===e?"":e}return e+r+(null==o?"":o)},""))(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||p})(t.target),t.g,t.o,t.k)}y.bind({g:1});let b=y.bind({k:1});function v(e,t){let a=this||{};return function(){let t=arguments;return function r(s,o){let i=Object.assign({},s),n=i.className||r.className;a.p=Object.assign({theme:c&&c()},i),a.o=/ *go\d+/.test(n),i.className=y.apply(a,t)+(n?" "+n:"");let p=e;return e[0]&&(p=i.as||e,delete i.as),d&&p[0]&&d(i),l(p,i)}}}var j=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,w=(()=>{let e=0;return()=>(++e).toString()})(),N=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),_="default",k=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return k(e,{type:e.toasts.find(e=>e.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},$=[],E={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},B={},S=(e,t=_)=>{B[t]=k(B[t]||E,e),$.forEach(([e,a])=>{e===t&&a(B[t])})},C=e=>Object.keys(B).forEach(t=>S(e,t)),W=(e=_)=>t=>{S(t,e)},z=e=>(t,a)=>{let r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||w()}))(t,e,a);return W(r.toasterId||(e=>Object.keys(B).find(t=>B[t].toasts.some(t=>t.id===e)))(r.id))({type:2,toast:r}),r.id},A=(e,t)=>z("blank")(e,t);A.error=z("error"),A.success=z("success"),A.loading=z("loading"),A.custom=z("custom"),A.dismiss=(e,t)=>{let a={type:3,toastId:e};t?W(t)(a):C(a)},A.dismissAll=e=>A.dismiss(void 0,e),A.remove=(e,t)=>{let a={type:4,toastId:e};t?W(t)(a):C(a)},A.removeAll=e=>A.remove(void 0,e),A.promise=(e,t,a)=>{let r=A.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?j(t.success,e):void 0;return s?A.success(s,{id:r,...a,...null==a?void 0:a.success}):A.dismiss(r),e}).catch(e=>{let s=t.error?j(t.error,e):void 0;s?A.error(s,{id:r,...a,...null==a?void 0:a.error}):A.dismiss(r)}),e};var I,M,L,F,O=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,D=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,T=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,V=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,H=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${V} 1s linear infinite;
`,R=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Z=b`
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
}`,q=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Z} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,G=v("div")`
  position: absolute;
`,K=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,U=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,X=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${U} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?s.createElement(X,null,t):t:"blank"===a?null:s.createElement(K,null,s.createElement(H,{...r}),"loading"!==a&&s.createElement(G,null,"error"===a?s.createElement(T,{...r}):s.createElement(q,{...r})))},J=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Q=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,ee=v("div")`
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
`,te=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;s.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,s]=N()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[J(a),Q(a)];return{animation:t?`${b(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=s.createElement(Y,{toast:e}),n=s.createElement(te,{...e.ariaProps},j(e.message,e));return s.createElement(ee,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:i,message:n}):s.createElement(s.Fragment,null,i,n))}),I=s.createElement,h.p=M,l=I,c=L,d=F,y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var ae=A;const re=()=>{const l=o(),[c,d]=s.useState([]),[p,m]=s.useState(!0),[u,g]=s.useState(""),[h,f]=s.useState(!1),[x,y]=s.useState(0),[b,v]=s.useState(!0),j=s.useRef(null),w="https://api.rayonewholesale.com";s.useEffect(()=>{(async()=>{try{const e=await i.get(`${w}/api/retailer/get-all-blogs`);d(e.data.blogs||[])}catch(e){}finally{m(!1)}})()},[]),s.useEffect(()=>(b&&c.length>0&&(j.current=setInterval(()=>{y(e=>(e+1)%Math.ceil(c.length/N()))},4e3)),()=>clearInterval(j.current)),[b,c.length]);const N=()=>window.innerWidth<768?1:window.innerWidth<1024?2:4,_=(e,t=100)=>{if(!e)return"";const a=(e=>{const t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""})(e);return a.length>t?a.substring(0,t)+"...":a},k=async()=>{if(u){f(!0);try{await i.post(`${w}/api/retailer/newsletter`,{email:u,message:u}),ae.success("Thank you for your message!"),g("")}catch(e){ae.error("Failed to send. Please try again.")}finally{f(!1)}}else ae.error("Please enter your message or email")};return e.jsxs("div",{className:"Blog__mainWrapper",children:[e.jsxs("div",{className:"BlogBg__wrapper",children:[e.jsx("img",{src:n,alt:"blogbg-image"}),e.jsx("div",{className:"Blog__layer"})]}),e.jsxs("div",{className:"Blog__ContentWrapper",children:[e.jsxs("div",{className:"Blog__headingWrapper",children:[e.jsx("h2",{children:"Blogs & News letter"}),e.jsx("button",{onClick:()=>l("/blogs"),children:"See All"})]}),e.jsx("div",{className:"Blog__carouselWrapper",children:p?e.jsx("div",{className:"loading-state",children:"Loading blogs..."}):c.length>0?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"carousel-btn prev",onClick:()=>{y(e=>(e-1+Math.ceil(c.length/N()))%Math.ceil(c.length/N())),v(!1)},"aria-label":"Previous",children:e.jsx(t,{size:24})}),e.jsx("div",{className:"Blog__carouselTrack",style:{transform:`translateX(-${100*x}%)`},children:c.map(t=>{var a;return e.jsxs("div",{className:"Blog__cardWrapper",children:[e.jsx("div",{className:"Blog__cardImgWrapper",children:e.jsx("img",{src:(null==(a=t.images)?void 0:a[0])?`${w}/${t.images[0].replace(/\\/g,"/")}`:n,alt:t.title,onError:e=>{e.target.src=n}})}),e.jsxs("div",{className:"Blog__infoWrapper",children:[e.jsxs("div",{className:"blog-meta",children:[e.jsxs("span",{className:"meta-item",children:[e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),new Date(t.createdAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]}),e.jsxs("span",{className:"meta-item",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})}),"blog"]})]}),e.jsx("h3",{children:t.title}),e.jsx("p",{className:"blog-excerpt",children:_(t.content)}),e.jsx("button",{onClick:()=>l(`/blog/${t._id}`),className:"read-more-btn",children:"Read More"})]})]},t._id)})}),e.jsx("button",{className:"carousel-btn next",onClick:()=>{y(e=>(e+1)%Math.ceil(c.length/N())),v(!1)},"aria-label":"Next",children:e.jsx(a,{size:24})}),e.jsx("div",{className:"carousel-dots",children:Array.from({length:Math.ceil(c.length/N())}).map((t,a)=>e.jsx("button",{className:"dot "+(x===a?"active":""),onClick:()=>{y(a),v(!1)},"aria-label":`Go to slide ${a+1}`},a))})]}):e.jsx("div",{className:"no-blogs",children:"No blogs available"})}),e.jsxs("div",{className:"Blog__newsletterWrapper",children:[e.jsx("h2",{children:"News Letter"}),e.jsx("h3",{children:"Stay Strong, Stay Vibrant: Your Weekly Wellness Boost"}),e.jsxs("div",{className:"newsletter__inputWrapper",children:[e.jsx("input",{type:"text",placeholder:"Enter your email or message",value:u,onChange:e=>g(e.target.value),onKeyPress:e=>"Enter"===e.key&&k()}),e.jsx("button",{onClick:k,disabled:h,children:e.jsx(r,{})})]})]})]})]})};export{re as Blog};
