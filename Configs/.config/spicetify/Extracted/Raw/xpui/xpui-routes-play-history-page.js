"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[708],{37480:(e,i,t)=>{t.d(i,{n:()=>T});t(95101),t(42826),t(99692),t(2178),t(3943),t(32548);var s=t(50959),r=t(84875),n=t.n(r),a=t(5311),l=t(29482),c=t(55246),d=t(93278),o=t(98900),u=t(49857),m=t(51825),x=t(43786);var h=t(70509),j=t(74055),p=t(71200);const g="main-topBar-contentArea",v="queue-tabBar-headerIsCentered",y="queue-tabBar-headerItem",f="queue-tabBar-moreButton",k="queue-tabBar-moreButtonActive",b="yxf_6IsQEmHjijEBUMTP",N="queue-tabBar-active",w="queue-tabBar-headerItemLink",C="queue-tabBar-header",I="queue-tabBar-chevron";var E=t(11527);const R=({items:e,activeItemId:i})=>(0,E.jsx)(j.v,{children:e.map((e=>e.disabled?(0,E.jsx)(p.s,{disabled:!0,role:"menuitemradio",className:b,onClick:e.handleClick,children:e.title},e.uri):(0,E.jsx)(p.s,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===i,className:({isActive:e})=>n()(b,{[N]:e}),onClick:e.handleClick,children:e.title},e.uri)))});var A=t(67119);const T=(0,s.memo)((function({isCentered:e,links:i,landmarkLabel:t,className:r}){const j=(0,s.useRef)(null),[p,b]=(0,s.useState)([]),[T,U]=(0,s.useState)(0),[D,O]=(0,s.useState)([]),S=function(){const[e,i]=(0,s.useState)(window.innerWidth),{scrollNodeChildRef:t}=(0,s.useContext)(m.VX),r=(0,u.y1)((e=>{e?.width&&i(e.width)}),250);return(0,x.y)({refOrElement:t,observeOnly:"width",onResize:r}),e}()??1/0,{pathname:B}=(0,a.TH)(),_=i.find((e=>e.to===B));return(0,s.useEffect)((()=>{j.current&&U(j.current.clientWidth)}),[S]),(0,s.useEffect)((()=>{if(!j.current)return;const e=Array.from(j.current.children).map((e=>e.clientWidth));b(e)}),[i]),(0,s.useEffect)((()=>{if(!j.current)return;if(p.slice(0,-1).reduce(((e,i)=>e+i),0)<=T)return void O([]);const e=p.reduce(((e,i)=>e>i?e:i),0),i=[];let t=e;p.forEach(((e,s)=>{T>=t+e?t+=e:i.push(s)})),O(i)}),[T,p]),(0,E.jsx)("nav",{className:n()(r,g),"aria-label":t,children:(0,E.jsxs)("ul",{className:e?v:C,ref:j,children:[i.filter(((e,i)=>!D.includes(i))).map((e=>{const i=e?.render??(e=>e);return(0,E.jsx)(s.Fragment,{children:i((0,E.jsx)("li",{className:y,children:e.disabled?(0,E.jsx)("div",{className:w,children:(0,E.jsx)(l.D,{variant:"mestoBold",children:e.title})}):(0,E.jsx)(A.O,{end:!0,className:({isActive:e})=>n()(w,{[N]:e}),to:e.to,onClick:e.handleClick,children:(0,E.jsx)(l.D,{variant:"mestoBold",children:e.title})})}))},e.to)})),D.length||0===p.length?(0,E.jsx)("li",{className:y,children:(0,E.jsx)(h.xV,{renderInline:!0,menu:(0,E.jsx)(R,{items:i.filter(((e,i)=>D.includes(i))),activeItemId:_?.itemId}),children:(e,i,t)=>(0,E.jsxs)("button",{className:n()(f,{[k]:_}),type:"button",onClick:i,ref:t,children:[(0,E.jsx)(l.D,{variant:"mestoBold",children:_?_.title:o.ag.get("more")}),e?(0,E.jsx)(c.U,{iconSize:16,className:I,"aria-hidden":"true"}):(0,E.jsx)(d.i,{iconSize:16,className:I,"aria-hidden":"true"})]})})}):null]})})}))},44445:(e,i,t)=>{t.d(i,{I:()=>x});var s=t(3421),r=t(50959),n=t(98900),a=t(37480),l=t(24135),c=t(96885),d=t(7969);const o="queue-tabBar-nav";var u=t(11527);const m=()=>{const e=(0,d.Y)(),i=(0,r.useCallback)((e=>(0,u.jsx)(c.v,{placement:"bottomEnd",arrow:"topStart",title:n.ag.get("pick-and-shuffle.upsell.title.queue"),children:e})),[]),t=(0,r.useMemo)((()=>[{title:n.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:i,disabled:e},{title:n.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,i]);return(0,u.jsx)(l.w,{children:(0,u.jsx)(a.n,{className:o,links:t})})},x=({children:e})=>{const i=(0,s.nF)();return(0,u.jsxs)("section",{className:"contentSpacing",children:[e,i&&(0,u.jsx)(m,{})]})}},21864:(e,i,t)=>{t.r(i),t.d(i,{default:()=>K});var s=t(3421),r=t(29482),n=t(98900),a=t(69505),l=t(50067),c=t(11527);const d=()=>(0,c.jsxs)("div",{className:l.Z.emptyContainer,children:[(0,c.jsx)(a.Y,{iconSize:64,"aria-hidden":"true"}),(0,c.jsx)(r.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:l.Z.emptyContainerTitle,children:n.ag.get("history.empty-title")}),(0,c.jsx)("p",{children:n.ag.get("history.empty-description")})]});var o=t(50959),u=t(56608),m=t(90278),x=t(15192),h=t(6215),j=t(16917),p=t(93462),g=t(86612),v=t(38762),y=t(13645),f=t(43514),k=t(56545),b=t(35292),N=t(53917),w=t(88258),C=t(55272),I=t(92197),E=t(46304),R=t(98226),A=t(19451),T=t(46227),U=t(80319),D=t(66650),O=t(54930),S=t(96613);const B=o.memo((function({uri:e,name:i,duration_ms:t,index:s,imgUrl:r,artists:a,album:l,isExplicit:d,isMOGEFRestricted:o,contextItem:u,type:m}){const{isActive:h,isPlaying:p,triggerPlay:g,togglePlay:B}=(0,T.n)({uri:e,pages:[{items:[{...u}]}]},{featureIdentifier:"history"}),_=m===j.p.TRACK,M=m===j.p.EPISODE,G=m===j.p.CHAPTER,L=(0,A._)(e),P=(0,O.k)(e),{badges:F,hasBadges:K}=(0,U.r)({downloadAvailability:L,isExplicit:d,isMOGEFRestricted:o}),Q=a?.map((e=>e.name)).join(n.ag.getSeparator())||"";let W;return M?W=(0,c.jsx)(y.k,{uri:e,contextUri:e,showUri:l.uri}):G?W=(0,c.jsx)(D.r,{uri:e}):_&&(0,v.dB)(e)?W=(0,c.jsx)(f.N,{uri:e,contextUri:e}):_&&(W=(0,c.jsx)(k.$,{uri:e,contextUri:e,albumUri:l.uri,artists:a})),(0,c.jsx)(x.JL,{value:"row",index:s,children:(0,c.jsx)(C._,{menu:W,children:(0,c.jsxs)(w.c,{uri:e,contextUri:e,index:s,ariaRowIndex:s,onTriggerPlay:()=>{g()},isActive:h,isPlayable:P,ageRestricted:o,dragMetadata:{name:i,createdBy:Q},children:[(0,c.jsxs)(b.vZ,{ariaColIndex:0,children:[(0,c.jsx)(b.VG,{uri:e,src:r,isPlaying:p,isActive:h,isLocked:!1,onClick:()=>{B()},isEpisode:(0,v.hn)(e),playAriaLabel:n.ag.get("tracklist.a11y.play",i,Q)}),(0,c.jsxs)(b.vm,{children:[(0,c.jsx)(b.Wh,{titleText:i,children:i}),K&&(0,c.jsxs)(b.g3,{children:[F.download&&(0,c.jsx)(I.G,{}),F.explicit&&(0,c.jsx)(E.N,{}),F.nineteen&&(0,c.jsx)(R.X,{className:N.Z.nineteen,size:16})]}),(0,c.jsx)(b.K9,{children:(0,v.wj)(e)?(0,c.jsx)(b.T6,{artists:a}):a[0]?.name??""})]})]}),(0,c.jsx)(b.UA,{ariaColIndex:2,children:(0,c.jsx)(b.BM,{nonInteractive:(0,v.dB)(e),uri:l.uri,name:l.name,creatorUri:a?.[0]?.uri,children:l.name})}),(0,c.jsxs)(b.mU,{ariaColIndex:1,children:[!G&&(0,c.jsx)(S.f,{uri:e,type:m}),(0,c.jsx)(b.A$,{duration:t}),(0,c.jsx)(b.Zv,{menu:W,label:n.ag.get("more.label.track",i,Q)})]})]})})})}),((e,i)=>e.uri===i.uri)),_=o.memo((function({items:e}){const i=(0,o.useCallback)(((e,i)=>{const t=(0,g.X)(e.images??[],{desiredSize:40});return(0,h.G_)(e)?(0,c.jsx)(B,{index:i,uri:e.isLocal?e.uri:(0,m.$)(e),name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.album,artists:e.artists,isExplicit:e.isExplicit??!1,isMOGEFRestricted:e.is19PlusOnly??!1,contextItem:e,type:j.p.TRACK},i+e.uri):(0,h.iw)(e)?(0,c.jsx)(B,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.show,artists:[],isExplicit:!1,isMOGEFRestricted:!1,contextItem:e,type:j.p.EPISODE},i+e.uri):(0,h.G7)(e)?(0,c.jsx)(B,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.book,artists:[],isExplicit:!1,isMOGEFRestricted:!1,contextItem:e,type:j.p.CHAPTER},i+e.uri):((0,h.k6)(e)||(0,h.RB)(e)||(0,p._)(e),(0,c.jsx)(u.hU,{height:`${u.dN}px`}))}),[]),t=(0,o.useMemo)((()=>[u.QD.TITLE_AND_ARTIST,u.QD.ALBUM_OR_PODCAST,u.QD.DURATION]),[]),s=(0,o.useCallback)((e=>e.uri),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(x.JL,{value:"play-history-tracklist",children:(0,c.jsx)(u.Pv,{ariaLabel:"play-history",hasHeaderRow:!0,columns:t,renderRow:i,resolveUri:s,tracks:e,nrTracks:e.length,rowPlaceholder:u.hU,limit:50})})})})),M="dt3fysZYdQ6hhWfpmjAu",G="n6LsTkKvpO88xeRyRTdw",L=()=>{const{isLoading:e,data:i}=(0,s.U5)();return e?null:i?.items.length?(0,c.jsxs)("div",{className:M,children:[(0,c.jsx)(r.D,{as:"h1",variant:"canon",semanticColor:"textBase",className:G,children:n.ag.get("view.recently-played")}),(0,c.jsx)(_,{items:i.items})]}):(0,c.jsx)(d,{})};var P=t(44445),F=t(26922);const K=()=>(0,s.nF)()?(0,c.jsx)(P.I,{children:(0,c.jsx)(L,{})}):(0,c.jsx)(F.InstrumentedRedirect,{to:"/"})}}]);
//# sourceMappingURL=xpui-routes-play-history-page.js.map