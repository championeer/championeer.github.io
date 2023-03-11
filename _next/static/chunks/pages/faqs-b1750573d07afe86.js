(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{40800:function(e,t,n){let r=n(67294),o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 12H6"}))});e.exports=o},67798:function(e,t,n){let r=n(67294),o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m6-6H6"}))});e.exports=o},97908:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faqs",function(){return n(79359)}])},39590:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893),o=n(28368),s=n(40800),a=n(67798);let i=[{question:"Is this app free?",answer:"TypingMind.com is free to use with some basic features. You will need to have a working OpenAI API Key in order to use the app. When you use the API Key, you pay directly to OpenAI for the amount of credits/tokens you use. TypingMind.com has premium features that can be unlocked with a one-time purchase."},{question:"Do I need to pay for OpenAI for a ChatGPT API Key?",answer:"Yes. You need to have an OpenAI account and a valid API key to use ChatGPT. We don't sell API keys."},{question:"How does this app work?",answer:"This is a static web app, it doesn't have any backend server. When you enter your API key, it will be stored locally and securely on your browser. All API requests are sent directly from your browser to OpenAI server to interact with ChatGPT. Think of this as a HTTP client for your ChatGPT API with a lot of convenience features."},{question:"How is the API key handled?",answer:"Your API is safe and stored locally on your device. This is a static app, which means that it doesn't have a backend. All the data is stored in your browser's local storage. Requests to Open AI's API is sent directly from your current browser (check the Network tab in your console if you want to see it)."},{question:"What's the difference between ChatGPT Plus and ChatGPT API via TypingMind?",answer:"Under the hood, ChatGPT Plus and ChatGPT API offer the same model and the same quality. You can view this on their official announcement here: https://platform.openai.com/docs/guides/chat. The initial system instruction can be a little bit different, which can be configurated to make the AI output different messages from time to time. "},{question:"I have ChatGPT Plus, will it cost me more to use ChatGPT API via TypingMind?",answer:"The ChatGPT API costs soooooo little you won't even notice it. Typical chat conversation is about 1000 characters, which costs ~$0.001. That's less than a cent. You can have thousands of chats and it will only costs you like $1. See official pricing here: https://openai.com/pricing#language-models"},{question:"How many chats can I have?",answer:"You can have as many chats as you want. The only limit is your OpenAI API key's limit and your browser storage limit (technical term: Local Storage). Web browser gives you some limited data storage, the actual limit is different for each browser. Typically, you can save thousands of chat conversations without problems, but that's not guaranteed. When the browser storage runs out, you will need to delete old chats to save the new ones. We will provide a separate service to sync and backup your chats soon. Adding the website to your home screen may increase the storage capacity."},{question:"How can I sync my chat conversations across devices?",answer:"At the moment, you have to export the chats and import it on another device."},{question:"Is it really faster than ChatGPT?",answer:"Most likely yes. From previous testings and user feedback, it is faster than the default ChatGPT in most cases, especially on long responses. Displaying the whole response instead of showing it word by word also help you to scan the response faster with your eyes. With all that said, the speed improvement is not guaranteed, your actual speed experience may varies (internet connection, API availability, etc.). Give it a try to see for yourself!"},{question:"Why does sometimes TypingMind responds differently than the default OpenAI's ChatGPT event with the same prompt?",answer:"TypingMind uses the same underlying model as OpenAI's default chat app. For the same prompt, it can produce different responses each time. The default chat app by OpenAI may also have some initial prompt settings that are different from TypingMind. If you don't get the response you expects, try \"Re-generate Response\" or tweaking the prompt."},{question:"Can I self-host it?",answer:"Yes. After you make a purchase, you will receive a link to download the static web app and the instruction how to deploy it on your own server. Note that you will only receive the compiled code of the app, the full source code is not available because the app is not open-source. You can deploy the app anywhere without having to update any code or settings."},{question:"Do I have access to the full source code if I want to self-host?",answer:"No. The license key only grants you the permission to use and deploy the app on your own server. You do not have permissions to modify or redistribute the code. The full source code is not available for sale as the app is not open-source. You will only receive the compiled code of the app, you can deploy the app anywhere without having to update any code or settings."},{question:"What can I customize in the self-host version?",answer:"As of now, you cannot customize anything. But I'm working on making it possible to set custom UI and branding soon. Stay tuned!"},{question:"Where can I download the macOS app?",answer:"After you make a purchase, you will receive the files and instructions in your email. You can also login to https://app.lemonsqueezy.com/my-orders/ to download the files."},{question:"Is the macOS app a native app? How do I receive updates with the macOS app?",answer:"The macOS app is a simple native app with a webview that runs the latest version of TypingMind on your dock. It's only ~5MB in size, load super fast, and can update itself everytime you open it. You can also check for updates manually in the app's menu."},{question:"Is there a Windows/Linux app?",answer:"Not for now. Sorry!"},{question:"License Key vs. API Key",answer:"License Key is used to activate the premium features of TypingMind.com. API Key refers to OpenAI ChatGPT API Key, and is used to connect to OpenAI's API to interact with ChatGPT. You need an API Key to use the app. The License Key is only needed if you want to use the premium features."},{question:"What are the premium features?",answer:"The premium features include: Chat Search History, Access Prompt Library, Integrations, etc. Check the pricing page for the latest details of all the premium features."},{question:"Is there an expiration date for the License Key?",answer:"The license key is valid forever."},{question:"Can I receive new updates after I buy a license key?",answer:"Yes, all future updates are included."},{question:"How many devices/users can I use the License Key on?",answer:'Each license key can be used on 5 devices which is typically enough for 1 user. If you need to use it on for more devices, you can buy a new license keys or add more devices to your existing license key. "Device" is counted based on the number of places where the license key is entered and the chat history is saved for continuous use. For example, if you use Typing Mind on Chrome browser on your laptop and also on your phone, that will be 2 devices. Note that the license key and chat history is saved locally per browser, so if you use Typing Mind on Chrome and also on Firefox, you will need to enter the license key 2 times, have 2 separate chat histories, and that counts as 2 devices. If you need to use the license key on a new device but have reached the device limit, you can unlink the previous devices first using the License Manager (this is done online, access to the previous devices not needed). This device limit is put in place to avoid license key abuse and pirate.'},{question:"I have purchased but forget my license key, how can I get it back?",answer:"You can go to https://app.lemonsqueezy.com/my-orders/ to access your license key."},{question:"Can I get a refund?",answer:"Yes. We offer a 14-day money-back guarantee. If you're not satisfied, let us know within 14 days and we'll give you a full refund."}];function l(){return(0,r.jsx)("div",{className:"",children:(0,r.jsx)("div",{className:"mx-auto max-w-7xl",children:(0,r.jsxs)("div",{className:"mx-auto max-w-4xl divide-y divide-gray-900/10",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold leading-10 tracking-tight ",children:"Frequently asked questions"}),(0,r.jsx)("dl",{className:"mt-4 space-y-6 divide-y divide-gray-900/10",children:i.map(e=>(0,r.jsx)(o.p,{as:"div",className:"pt-6",children:t=>{let{open:n}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("dt",{children:(0,r.jsxs)(o.p.Button,{className:"flex w-full items-start justify-between text-left ",children:[(0,r.jsx)("span",{className:"text-base font-semibold leading-7",children:e.question}),(0,r.jsx)("span",{className:"ml-6 flex h-7 items-center",children:n?(0,r.jsx)(s,{className:"h-6 w-6","aria-hidden":"true"}):(0,r.jsx)(a,{className:"h-6 w-6","aria-hidden":"true"})})]})}),(0,r.jsx)(o.p.Panel,{as:"dd",className:"mt-2 pr-12",children:(0,r.jsx)("p",{className:"text-base leading-7 text-gray-500",children:e.answer})})]})}},e.question))})]})})})}},51448:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(85893);n(67294);var o=n(9008),s=n.n(o);function a(e){let{title:t}=e;return(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:t||"TypingMind — A better UI for ChatGPT"}),(0,r.jsx)("meta",{name:"title",content:"TypingMind — A better UI for ChatGPT"}),(0,r.jsx)("meta",{name:"description",content:"Use ChatGPT with enhanced features like faster response, integrated research tools, prompt library, etc."}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://www.typingmind.com/"}),(0,r.jsx)("meta",{property:"og:title",content:"TypingMind — A better UI for ChatGPT"}),(0,r.jsx)("meta",{property:"og:description",content:"Use ChatGPT with enhanced features like faster response, integrated research tools, prompt library, etc."}),(0,r.jsx)("meta",{property:"og:image",content:"https://www.typingmind.com/poster.png"}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:"https://www.typingmind.com/"}),(0,r.jsx)("meta",{property:"twitter:title",content:"TypingMind — A better UI for ChatGPT"}),(0,r.jsx)("meta",{property:"twitter:description",content:"Use ChatGPT with enhanced features like faster response, integrated research tools, prompt library, etc."}),(0,r.jsx)("meta",{property:"twitter:image",content:"https://www.typingmind.com/poster.png"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1, viewport-fit=cover"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,r.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"})]})}},79359:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(85893),o=n(51448),s=n(39590);function a(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"min-h-screen",children:[(0,r.jsx)(o.Z,{title:"Privacy Policy"}),(0,r.jsx)("div",{className:"py-10 ",children:(0,r.jsxs)("main",{children:[(0,r.jsx)("div",{className:"my-10 text-center sticky top-0 bg-white dark:bg-zinc-800 p-4",children:(0,r.jsx)("a",{href:"/",className:"text-blue-500 hover:underline",children:"Go back to TypingMind.com"})}),(0,r.jsx)("div",{className:"px-6",children:(0,r.jsx)(s.Z,{})})]})})]})})}},9008:function(e,t,n){e.exports=n(5443)},28368:function(e,t,n){"use strict";n.d(t,{p:function(){return A}});var r,o,s,a=n(67294),i=n(32984),l=n(12351),u=n(23784),c=n(19946),d=n(61363),p=n(64103),f=n(16567),h=n(14157),m=n(15466),y=n(73781);let w=null!=(s=a.startTransition)?s:function(e){e()};var g=((r=g||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),v=((o=v||{})[o.ToggleDisclosure=0]="ToggleDisclosure",o[o.CloseDisclosure=1]="CloseDisclosure",o[o.SetButtonId=2]="SetButtonId",o[o.SetPanelId=3]="SetPanelId",o[o.LinkPanel=4]="LinkPanel",o[o.UnlinkPanel=5]="UnlinkPanel",o);let b={0:e=>({...e,disclosureState:(0,i.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},x=(0,a.createContext)(null);function I(e){let t=(0,a.useContext)(x);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,I),t}return t}x.displayName="DisclosureContext";let k=(0,a.createContext)(null);k.displayName="DisclosureAPIContext";let P=(0,a.createContext)(null);function T(e,t){return(0,i.E)(t.type,b,e,t)}P.displayName="DisclosurePanelContext";let j=a.Fragment,E=l.AN.RenderStrategy|l.AN.Static,A=Object.assign((0,l.yV)(function(e,t){let{defaultOpen:n=!1,...r}=e,o=(0,a.useRef)(null),s=(0,u.T)(t,(0,u.h)(e=>{o.current=e},void 0===e.as||e.as===a.Fragment)),c=(0,a.useRef)(null),d=(0,a.useRef)(null),p=(0,a.useReducer)(T,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:d,panelRef:c,buttonId:null,panelId:null}),[{disclosureState:h,buttonId:w},g]=p,v=(0,y.z)(e=>{g({type:1});let t=(0,m.r)(o);if(!t||!w)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(w):t.getElementById(w);null==n||n.focus()}),b=(0,a.useMemo)(()=>({close:v}),[v]),I=(0,a.useMemo)(()=>({open:0===h,close:v}),[h,v]);return a.createElement(x.Provider,{value:p},a.createElement(k.Provider,{value:b},a.createElement(f.up,{value:(0,i.E)(h,{0:f.ZM.Open,1:f.ZM.Closed})},(0,l.sY)({ourProps:{ref:s},theirProps:r,slot:I,defaultTag:j,name:"Disclosure"}))))}),{Button:(0,l.yV)(function(e,t){let n=(0,c.M)(),{id:r=`headlessui-disclosure-button-${n}`,...o}=e,[s,i]=I("Disclosure.Button"),f=(0,a.useContext)(P),m=null!==f&&f===s.panelId,w=(0,a.useRef)(null),g=(0,u.T)(w,t,m?null:s.buttonRef);(0,a.useEffect)(()=>{if(!m)return i({type:2,buttonId:r}),()=>{i({type:2,buttonId:null})}},[r,i,m]);let v=(0,y.z)(e=>{var t;if(m){if(1===s.disclosureState)return;switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),i({type:0}),null==(t=s.buttonRef.current)||t.focus()}}else switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),i({type:0})}}),b=(0,y.z)(e=>{e.key===d.R.Space&&e.preventDefault()}),x=(0,y.z)(t=>{var n;(0,p.P)(t.currentTarget)||e.disabled||(m?(i({type:0}),null==(n=s.buttonRef.current)||n.focus()):i({type:0}))}),k=(0,a.useMemo)(()=>({open:0===s.disclosureState}),[s]),T=(0,h.f)(e,w),j=m?{ref:g,type:T,onKeyDown:v,onClick:x}:{ref:g,id:r,type:T,"aria-expanded":e.disabled?void 0:0===s.disclosureState,"aria-controls":s.linkedPanel?s.panelId:void 0,onKeyDown:v,onKeyUp:b,onClick:x};return(0,l.sY)({ourProps:j,theirProps:o,slot:k,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,l.yV)(function(e,t){let n=(0,c.M)(),{id:r=`headlessui-disclosure-panel-${n}`,...o}=e,[s,i]=I("Disclosure.Panel"),{close:d}=function e(t){let n=(0,a.useContext)(k);if(null===n){let n=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),p=(0,u.T)(t,s.panelRef,e=>{w(()=>i({type:e?4:5}))});(0,a.useEffect)(()=>(i({type:3,panelId:r}),()=>{i({type:3,panelId:null})}),[r,i]);let h=(0,f.oJ)(),m=null!==h?(h&f.ZM.Open)===f.ZM.Open:0===s.disclosureState,y=(0,a.useMemo)(()=>({open:0===s.disclosureState,close:d}),[s,d]);return a.createElement(P.Provider,{value:s.panelId},(0,l.sY)({ourProps:{ref:p,id:r},theirProps:o,slot:y,defaultTag:"div",features:E,visible:m,name:"Disclosure.Panel"}))})})},61363:function(e,t,n){"use strict";n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},73781:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var r=n(67294),o=n(3855);let s=function(e){let t=(0,o.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},19946:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var r,o=n(67294),s=n(16723),a=n(82180),i=n(77896);let l=null!=(r=o.useId)?r:function(){let e=(0,a.H)(),[t,n]=o.useState(e?()=>i.O.nextId():null);return(0,s.e)(()=>{null===t&&n(i.O.nextId())},[t]),null!=t?""+t:void 0}},16723:function(e,t,n){"use strict";n.d(t,{e:function(){return s}});var r=n(67294),o=n(77896);let s=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},3855:function(e,t,n){"use strict";n.d(t,{E:function(){return s}});var r=n(67294),o=n(16723);function s(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},14157:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var r=n(67294),o=n(16723);function s(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function a(e,t){let[n,a]=(0,r.useState)(()=>s(e));return(0,o.e)(()=>{a(s(e))},[e.type,e.as]),(0,o.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")},[n,t]),n}},82180:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var r=n(67294),o=n(77896);function s(){let[e,t]=(0,r.useState)(o.O.isHandoffComplete);return e&&!1===o.O.isHandoffComplete&&t(!1),(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>o.O.handoff(),[]),e}},23784:function(e,t,n){"use strict";n.d(t,{T:function(){return i},h:function(){return a}});var r=n(67294),o=n(73781);let s=Symbol();function a(e,t=!0){return Object.assign(e,{[s]:t})}function i(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,o.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[s]))?void 0:n}},16567:function(e,t,n){"use strict";n.d(t,{ZM:function(){return a},oJ:function(){return i},up:function(){return l}});var r,o=n(67294);let s=(0,o.createContext)(null);s.displayName="OpenClosedContext";var a=((r=a||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function i(){return(0,o.useContext)(s)}function l({value:e,children:t}){return o.createElement(s.Provider,{value:e},t)}},64103:function(e,t,n){"use strict";function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},44067:function(e,t,n){"use strict";function r(...e){return e.filter(Boolean).join(" ")}n.d(t,{A:function(){return r}})},77896:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var r=Object.defineProperty,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t,n)=>(o(e,"symbol"!=typeof t?t+"":t,n),n);let a=new class{constructor(){s(this,"current",this.detect()),s(this,"handoffState","pending"),s(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},32984:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:function(){return r}})},15466:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var r=n(77896);function o(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},12351:function(e,t,n){"use strict";n.d(t,{AN:function(){return l},l4:function(){return u},oA:function(){return h},sY:function(){return c},yV:function(){return f}});var r,o,s=n(67294),a=n(44067),i=n(32984),l=((r=l||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),u=((o=u||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:s=!0,name:a}){let l=p(t,e);if(s)return d(l,n,r,a);let u=null!=o?o:0;if(2&u){let{static:e=!1,...t}=l;if(e)return d(t,n,r,a)}if(1&u){let{unmount:e=!0,...t}=l;return(0,i.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,a)})}return d(l,n,r,a)}function d(e,t={},n,r){var o;let{as:i=n,children:l,refName:u="ref",...c}=m(e,["unmount","static"]),d=void 0!==e.ref?{[u]:e.ref}:{},f="function"==typeof l?l(t):l;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(t));let y={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(y["data-headlessui-state"]=n.join(" "))}if(i===s.Fragment&&Object.keys(h(c)).length>0){if(!(0,s.isValidElement)(f)||Array.isArray(f)&&f.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=(0,a.A)(null==(o=f.props)?void 0:o.className,c.className);return(0,s.cloneElement)(f,Object.assign({},p(f.props,h(m(c,["ref"]))),y,d,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(f.ref,d.ref),e?{className:e}:{}))}return(0,s.createElement)(i,Object.assign({},m(c,["ref"]),i!==s.Fragment&&d,i!==s.Fragment&&y),f)}function p(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function f(e){var t;return Object.assign((0,s.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function h(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function m(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=97908)}),_N_E=e.O()}]);