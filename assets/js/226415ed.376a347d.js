"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[1019],{3905:(a,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var i=n(67294);function t(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,i)}return n}function o(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){t(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function c(a,e){if(null==a)return{};var n,i,t=function(a,e){if(null==a)return{};var n,i,t={},r=Object.keys(a);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(t[n]=a[n]);return t}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}var s=i.createContext({}),l=function(a){var e=i.useContext(s),n=e;return a&&(n="function"==typeof a?a(e):o(o({},e),a)),n},u=function(a){var e=l(a.components);return i.createElement(s.Provider,{value:e},a.children)},d="mdxType",p={inlineCode:"code",wrapper:function(a){var e=a.children;return i.createElement(i.Fragment,{},e)}},g=i.forwardRef((function(a,e){var n=a.components,t=a.mdxType,r=a.originalType,s=a.parentName,u=c(a,["components","mdxType","originalType","parentName"]),d=l(n),g=t,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||r;return n?i.createElement(m,o(o({ref:e},u),{},{components:n})):i.createElement(m,o({ref:e},u))}));function m(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var r=n.length,o=new Array(r);o[0]=g;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=a,c[d]="string"==typeof a?a:t,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},82839:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(87462),t=(n(67294),n(3905));const r={},o="Asignar conversaciones",c={unversionedId:"configuracion-adicional/Asignar-conversaciones",id:"configuracion-adicional/Asignar-conversaciones",title:"Asignar conversaciones",description:'Cada conversaci\xf3n en Chat B\xfaho puede tener un asignado. Un asignado puede ser a\xf1adido manualmente a la conversaci\xf3n a trav\xe9s de la consola web o la API, o las organizaciones pueden optar por el sistema de asignaci\xf3n round-robin "Asignaci\xf3n equitativa grupal". Este documento explica c\xf3mo se puede asignar un agente a la conversaci\xf3n.',source:"@site/docs/configuracion-adicional/Asignar-conversaciones.md",sourceDirName:"configuracion-adicional",slug:"/configuracion-adicional/Asignar-conversaciones",permalink:"/buho/configuracion-adicional/Asignar-conversaciones",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Configuraci\xf3n adicional",permalink:"/buho/configuracion-adicional"},next:{title:"Asignar prioridad",permalink:"/buho/configuracion-adicional/Asignar-prioridad"}},s={},l=[{value:"Asignaci\xf3n manual",id:"asignaci\xf3n-manual",level:2},{value:"Auto asignaci\xf3n",id:"auto-asignaci\xf3n",level:2},{value:"Activar la asignaci\xf3n round-robin",id:"activar-la-asignaci\xf3n-round-robin",level:2}],u={toc:l},d="wrapper";function p(a){let{components:e,...r}=a;return(0,t.kt)(d,(0,i.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"asignar-conversaciones"},"Asignar conversaciones"),(0,t.kt)("p",null,"Cada conversaci\xf3n en Chat B\xfaho puede tener un asignado. Un asignado puede ser a\xf1adido manualmente a la conversaci\xf3n a trav\xe9s de la consola web o la API, o las organizaciones pueden optar por el sistema de asignaci\xf3n round-robin ",(0,t.kt)("strong",{parentName:"p"},'"Asignaci\xf3n equitativa grupal"'),". Este documento explica c\xf3mo se puede asignar un agente a la conversaci\xf3n."),(0,t.kt)("h2",{id:"asignaci\xf3n-manual"},"Asignaci\xf3n manual"),(0,t.kt)("p",null,"Una conversaci\xf3n puede ser asignada manualmente a 2 usuarios."),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Agentes que tienen acceso a la bandeja de entrada en la que se crea la conversaci\xf3n."),(0,t.kt)("li",{parentName:"ol"},"Los administradores, que pueden acceder a todas las conversaciones del sistema.\nPara asignar un agente o administrador a una conversaci\xf3n, un ",(0,t.kt)("strong",{parentName:"li"},"administrador/agente")," puede seleccionar al asignado en el desplegable denominado ",(0,t.kt)("strong",{parentName:"li"},'"Agente asignado"* de la secci\xf3n '),'"Detalles de la conversaci\xf3n"** en la barra lateral derecha, como se muestra a continuaci\xf3n.')),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Alt text",src:n(83173).Z,width:"391",height:"238"})),(0,t.kt)("h2",{id:"auto-asignaci\xf3n"},"Auto asignaci\xf3n"),(0,t.kt)("p",null,"Chat B\xfaho ofrece un sistema de auto-asignaci\xf3n de conversaciones. La asignaci\xf3n sigue la l\xf3gica mencionada a continuaci\xf3n."),(0,t.kt)("admonition",{title:"NOTA:",type:"info"},(0,t.kt)("p",{parentName:"admonition"},"La asignaci\xf3n round robin ",(0,t.kt)("strong",{parentName:"p"},'"Asignaci\xf3n equitativa"')," est\xe1 activada por defecto.")),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Si hay agentes en l\xednea que tienen acceso a la bandeja de entrada en la que se crea una conversaci\xf3n, el sistema distribuir\xe1 las conversaciones por igual entre los agentes en l\xednea."),(0,t.kt)("li",{parentName:"ol"},"Si todos los agentes est\xe1n desconectados, el sistema mantendr\xe1 las conversaciones como no asignadas.")),(0,t.kt)("h2",{id:"activar-la-asignaci\xf3n-round-robin"},"Activar la asignaci\xf3n round-robin"),(0,t.kt)("p",null,"Para habilitar la asignaci\xf3n round-robin en su bandeja de entrada, siga los siguientes pasos."),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Vaya a ",(0,t.kt)("strong",{parentName:"li"},"Configuraci\xf3n ->")," Bandejas de entrada."),(0,t.kt)("li",{parentName:"ol"},"Haga clic en el enlace de ",(0,t.kt)("strong",{parentName:"li"},"configuraci\xf3n de la bandeja de entrada")," que desee ",(0,t.kt)("strong",{parentName:"li"},"habilitar")," la asignaci\xf3n de round-robin."),(0,t.kt)("li",{parentName:"ol"},"Despl\xe1zate hacia abajo para ver la configuraci\xf3n de Round-robin, como se muestra a continuaci\xf3n.")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Alt text",src:n(63692).Z,width:"745",height:"105"})),(0,t.kt)("ol",{start:4},(0,t.kt)("li",{parentName:"ol"},"C\xe1mbialo a ",(0,t.kt)("strong",{parentName:"li"},'"Activado"')," y haz clic en ",(0,t.kt)("strong",{parentName:"li"},'"Actualizar".'))))}p.isMDXComponent=!0},83173:(a,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/Asignar-conversaciones-01-26e4eaf760022bc32b0f20d13076c434.png"},63692:(a,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/Asignar-conversaciones-02-c47366a7d14058986ac86cb221d144e5.png"}}]);