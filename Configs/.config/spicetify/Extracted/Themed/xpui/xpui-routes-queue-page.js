"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7521],{37480:(e,t,n)=>{n.d(t,{n:()=>P});n(95101),n(42826),n(99692),n(2178),n(3943),n(32548);var s=n(50959),i=n(84875),a=n.n(i),l=n(5311),o=n(29482),r=n(55246),c=n(93278),u=n(98900),d=n(49857),m=n(51825),g=n(43786);var x=n(70509),h=n(74055),p=n(71200);const v="main-topBar-contentArea",y="queue-tabBar-headerIsCentered",k="queue-tabBar-headerItem",C="queue-tabBar-moreButton",b="queue-tabBar-moreButtonActive",j="yxf_6IsQEmHjijEBUMTP",f="queue-tabBar-active",S="queue-tabBar-headerItemLink",N="queue-tabBar-header",I="queue-tabBar-chevron";var w=n(11527);const U=({items:e,activeItemId:t})=>(0,w.jsx)(h.v,{children:e.map((e=>e.disabled?(0,w.jsx)(p.s,{disabled:!0,role:"menuitemradio",className:j,onClick:e.handleClick,children:e.title},e.uri):(0,w.jsx)(p.s,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===t,className:({isActive:e})=>a()(j,{[f]:e}),onClick:e.handleClick,children:e.title},e.uri)))});var F=n(67119);const P=(0,s.memo)((function({isCentered:e,links:t,landmarkLabel:n,className:i}){const h=(0,s.useRef)(null),[p,j]=(0,s.useState)([]),[P,B]=(0,s.useState)(0),[E,q]=(0,s.useState)([]),L=function(){const[e,t]=(0,s.useState)(window.innerWidth),{scrollNodeChildRef:n}=(0,s.useContext)(m.VX),i=(0,d.y1)((e=>{e?.width&&t(e.width)}),250);return(0,g.y)({refOrElement:n,observeOnly:"width",onResize:i}),e}()??1/0,{pathname:D}=(0,l.TH)(),O=t.find((e=>e.to===D));return(0,s.useEffect)((()=>{h.current&&B(h.current.clientWidth)}),[L]),(0,s.useEffect)((()=>{if(!h.current)return;const e=Array.from(h.current.children).map((e=>e.clientWidth));j(e)}),[t]),(0,s.useEffect)((()=>{if(!h.current)return;if(p.slice(0,-1).reduce(((e,t)=>e+t),0)<=P)return void q([]);const e=p.reduce(((e,t)=>e>t?e:t),0),t=[];let n=e;p.forEach(((e,s)=>{P>=n+e?n+=e:t.push(s)})),q(t)}),[P,p]),(0,w.jsx)("nav",{className:a()(i,v),"aria-label":n,children:(0,w.jsxs)("ul",{className:e?y:N,ref:h,children:[t.filter(((e,t)=>!E.includes(t))).map((e=>{const t=e?.render??(e=>e);return(0,w.jsx)(s.Fragment,{children:t((0,w.jsx)("li",{className:k,children:e.disabled?(0,w.jsx)("div",{className:S,children:(0,w.jsx)(o.D,{variant:"mestoBold",children:e.title})}):(0,w.jsx)(F.O,{end:!0,className:({isActive:e})=>a()(S,{[f]:e}),to:e.to,onClick:e.handleClick,children:(0,w.jsx)(o.D,{variant:"mestoBold",children:e.title})})}))},e.to)})),E.length||0===p.length?(0,w.jsx)("li",{className:k,children:(0,w.jsx)(x.xV,{renderInline:!0,menu:(0,w.jsx)(U,{items:t.filter(((e,t)=>E.includes(t))),activeItemId:O?.itemId}),children:(e,t,n)=>(0,w.jsxs)("button",{className:a()(C,{[b]:O}),type:"button",onClick:t,ref:n,children:[(0,w.jsx)(o.D,{variant:"mestoBold",children:O?O.title:u.ag.get("more")}),e?(0,w.jsx)(r.U,{iconSize:16,className:I,"aria-hidden":"true"}):(0,w.jsx)(c.i,{iconSize:16,className:I,"aria-hidden":"true"})]})})}):null]})})}))},44445:(e,t,n)=>{n.d(t,{I:()=>g});var s=n(3421),i=n(50959),a=n(98900),l=n(37480),o=n(24135),r=n(96885),c=n(7969);const u="queue-tabBar-nav";var d=n(11527);const m=()=>{const e=(0,c.Y)(),t=(0,i.useCallback)((e=>(0,d.jsx)(r.v,{placement:"bottomEnd",arrow:"topStart",title:a.ag.get("pick-and-shuffle.upsell.title.queue"),children:e})),[]),n=(0,i.useMemo)((()=>[{title:a.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:t,disabled:e},{title:a.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,t]);return(0,d.jsx)(o.w,{children:(0,d.jsx)(l.n,{className:u,links:n})})},g=({children:e})=>{const t=(0,s.nF)();return(0,d.jsxs)("section",{className:"contentSpacing",children:[e,t&&(0,d.jsx)(m,{})]})}},58867:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ke});var s=n(50959),i=n(84875),a=n.n(i),l=n(29482),o=n(27898),r=n(20465),c=n(98900),u=n(27293),d=n(94989),m=n(37197),g=n(77532),x=(n(95101),n(42826),n(40587)),h=n(83541),p=n(29535),v=n(26314),y=n(81266),k=n(42189);var C=n(87292),b=n(11527);const j=({onEndSession:e,onClick:t})=>{const[n,i]=(0,s.useState)(!1),{logEndJam:a,logCancel:l}=(()=>{const{spec:e,logger:t}=(0,k.fU)(y.a,{});return{logEndJam:(0,s.useCallback)((n=>{t.logInteraction(n?e.endButtonFactory().keyStrokeStopHostingSocialListeningSession():e.endButtonFactory().hitStopHostingSocialListeningSession())}),[t,e]),logCancel:(0,s.useCallback)((n=>{t.logInteraction(n?e.cancelButtonFactory().keyStrokeUiHide():e.cancelButtonFactory().hitUiHide())}),[t,e])}})(),o=(0,s.useCallback)((e=>{t(e),i(!0)}),[t]),r=(0,s.useCallback)((async t=>{a((0,C.v)(t)),await e(),i(!1)}),[a,e]),u=(0,s.useCallback)((e=>{l((0,C.v)(e)),i(!1)}),[l]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p.P,{size:"small",onClick:o,children:c.ag.get("web-player.social-connect.end-session.end-session-button")}),(0,b.jsx)(v.Q,{isOpen:n,titleText:c.ag.get("web-player.social-connect.end-session.title"),descriptionText:c.ag.get("web-player.social-connect.end-session.sub-title"),confirmText:c.ag.get("web-player.social-connect.end-session.confirm"),cancelText:c.ag.get("web-player.social-connect.end-session.cancel"),onConfirm:r,onClose:u,"aria-label":c.ag.get("web-player.social-connect.end-session.title")})]})};var f=n(53169);const S=({onClick:e})=>{const t=(0,f.g)();return(0,b.jsx)(p.P,{size:"small",onClick:async n=>{e(n),await t()},children:c.ag.get("web-player.social-connect.invite-button")})};var N=n(79024);const I=({onLeaveSession:e,onClick:t})=>{const[n,i]=(0,s.useState)(!1),{logLeaveJam:a,logCancel:l}=(()=>{const{spec:e,logger:t}=(0,k.fU)(N.j,{});return{logLeaveJam:(0,s.useCallback)((n=>{t.logInteraction(n?e.leaveButtonFactory().keyStrokeLeaveSocialListeningSession():e.leaveButtonFactory().hitLeaveSocialListeningSession())}),[t,e]),logCancel:(0,s.useCallback)((n=>{t.logInteraction(n?e.cancelButtonFactory().keyStrokeUiHide():e.cancelButtonFactory().hitUiHide())}),[t,e])}})(),o=(0,s.useCallback)((e=>{t(e),i(!0)}),[t]),r=(0,s.useCallback)((async t=>{a((0,C.v)(t)),await e(),i(!1)}),[a,e]),u=(0,s.useCallback)((e=>{l((0,C.v)(e)),i(!1)}),[l]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p.P,{size:"small",onClick:o,children:c.ag.get("web-player.social-connect.leave-session.leave-session-button")}),(0,b.jsx)(v.Q,{isOpen:n,titleText:c.ag.get("web-player.social-connect.leave-session.title"),descriptionText:c.ag.get("web-player.social-connect.leave-session.sub-title"),confirmText:c.ag.get("web-player.social-connect.leave-session.leave-session-button"),cancelText:c.ag.get("web-player.social-connect.leave-session.cancel"),onConfirm:r,onClose:u,"aria-label":c.ag.get("web-player.social-connect.leave-session.leave-session-button")})]})};var w=n(96450),U=n(76395),F=n(81579);const P="aWQPeIBNMoU0Xqu1P_qo",B=e=>(0,b.jsx)(p.P,{...e,component:d.default}),E=({currentSession:e,username:t,onClick:n})=>{const{sessionMembers:s}=e,i=s.length+2>3?s.length-3:0,a=(0,F.N)(e,t,{userFirst:!0});return(0,b.jsxs)(B,{size:"small",className:P,to:w.V.PARTICIPANTS_PAGE,onClick:n,children:[(0,b.jsx)(U.o,{users:a,maxSlots:3,withoutOverflowBadge:!0}),i>0&&(0,b.jsx)(l.D,{variant:"violaBold",semanticColor:"textBase",children:`+${i}`})]})};var q=n(96060),L=n(38762);const D="_2ooZqm3FPtNKsgn9Yks",O="PCn7b7Zs2xPSYseEvUPQ",R=({className:e,emptyStateComponent:t})=>{const{currentSession:n,deleteSession:i,leaveSession:a,getShortInviteLink:o}=(0,h.A)(),r=(0,x.v9)((({session:e})=>e.user?.id)),{logFacePileClick:u,logInviteClick:d,logEndClick:m,logLeaveClick:g,UBIFragmentWithSpec:p}=(()=>{const{spec:e,logger:t,UBIFragment:n}=(0,k.fU)(q.h,{});return{logInviteClick:(0,s.useCallback)(((n,s,i)=>{const a=i?e.inviteButtonFactory().keyStrokeShare({entityToBeShared:n,shareId:s}):e.inviteButtonFactory().hitShare({entityToBeShared:n,shareId:s});t.logInteraction(a)}),[t,e]),logEndClick:(0,s.useCallback)((n=>{const s=n?e.endButtonFactory().keyStrokeUiReveal():e.endButtonFactory().hitUiReveal();t.logInteraction(s)}),[t,e]),logLeaveClick:(0,s.useCallback)((n=>{const s=n?e.leaveButtonFactory().keyStrokeUiReveal():e.leaveButtonFactory().hitUiReveal();t.logInteraction(s)}),[t,e]),logFacePileClick:(0,s.useCallback)((n=>{const s=(0,L.U7)().toURI(),i=n?e.facepileButtonFactory().keyStrokeUiNavigate({destination:s}):e.facepileButtonFactory().hitUiNavigate({destination:s});t.logInteraction(i)}),[t,e]),UBIFragmentWithSpec:(0,s.useCallback)((t=>(0,b.jsx)(n,{spec:e,...t})),[n,e])}})(),v=(0,s.useCallback)((e=>{u((0,C.v)(e))}),[u]),y=(0,s.useCallback)((async e=>{const t=await o();d(t?.spotifyUri??"",t?.shareId??"",(0,C.v)(e))}),[o,d]),f=(0,s.useCallback)((e=>{m((0,C.v)(e))}),[m]),N=(0,s.useCallback)((e=>{g((0,C.v)(e))}),[g]);if(!n?.active)return(0,b.jsx)(b.Fragment,{children:t??null});const w=n.sessionMembers.find((e=>e.id===n.sessionOwnerId));return(0,b.jsx)(p,{children:(0,b.jsxs)("div",{className:e,children:[(0,b.jsx)("div",{className:D,children:(0,b.jsx)(l.D,{as:"h1",variant:"canon",semanticColor:"textBase",children:c.ag.get("web-player.social-connect.session-info.title",{host:w?.displayName??""})})}),(0,b.jsxs)("div",{className:O,children:[(0,b.jsx)(E,{currentSession:n,username:r,onClick:v}),(0,b.jsx)(S,{onClick:y}),n.isSessionOwner?(0,b.jsx)(j,{onClick:f,onEndSession:i}):(0,b.jsx)(I,{onClick:N,onLeaveSession:a})]})]})})},T=e=>(0,b.jsx)(g.L,{onError:e=>{(0,m.vK)(e,"GroupSessionQueueHeader")},suspenseFallback:e.emptyStateComponent,children:(0,b.jsx)(R,{...e})});var Q=n(15192),A=n(72746),M=n(46227);const _=({onClick:e})=>(0,b.jsx)(p.P,{onClick:e,buttonSize:"sm",children:c.ag.get("queue.clear-queue")});var $=n(42982),G=n(45917),H=n(30068),J=(n(25671),n(65742));const W="i9rTNwKyT_NMDghd8q65",z="DXBMXJD8Zoj4V8MxIVTB",X="UEtqSfWDubkNdPIaEkfA",K="I_Rc74Je7W4sk6KAVR05",V=s.memo((function({onClose:e,onConfirm:t,isOpen:n,itemCount:i}){const o=(0,s.useCallback)((n=>{t(),e(n)}),[t,e]),r=c.ag.get("queue.confirm-title",i);return(0,b.jsx)(J.Z,{shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:e,contentLabel:r,isOpen:n,children:(0,b.jsxs)("div",{className:W,children:[(0,b.jsx)(l.D,{as:"h2",variant:"cello",className:z,children:r}),(0,b.jsx)(l.D,{as:"p",variant:"mesto",className:X,paddingBottom:$.g4,children:c.ag.get("queue.confirm-message")}),(0,b.jsxs)("div",{className:a()("encore-light-theme",K),children:[(0,b.jsx)(G.o,{onClick:e,children:c.ag.get("queue.cancel-button")}),(0,b.jsx)(H.D,{onClick:o,children:c.ag.get("queue.confirm-button")})]})]})})}));var Y=n(23975),Z=n(9252),ee=n(56608),te=n(22178),ne=n(67301),se=n(90278),ie=n(6215),ae=n(16917),le=n(86612),oe=n(43029);const re=s.memo((function({tracks:e,ariaLabel:t,contextUri:n,currentlyPlayingContextUri:i=n,rowNumberOffset:a=0,section:l,usePlayContextItem:o}){const r=(0,ne.o)(),u=(0,A.g)(),d=(0,s.useCallback)(((e,t)=>{r({intent:"remove-from-queue",type:"click"}),u.removeFromQueue(e).then(t)}),[u,r]),m=(0,s.useCallback)(((e,t)=>{if((0,ie.iw)(e)){const s=(0,le.X)(e.show?.images,{desiredSize:40});return(0,b.jsx)(oe.p,{index:t,rowNumberOffset:a,imgUrl:s?.url||"",uri:(0,se.$)(e),uid:e.uid??e.uri,contextUri:n,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:oe.j.EPISODE,section:l,usePlayContextItem:o,isAutoPlay:"autoplay"===e.provider},`${t}${a}${e.uid}`)}if((0,ie.G7)(e)){const s=(0,le.X)(e.images||void 0,{desiredSize:40});return(0,b.jsx)(oe.p,{index:t,rowNumberOffset:a,imgUrl:s?.url||"",uri:(0,se.$)(e),uid:e.uid??e.uri,contextUri:n,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:oe.j.CHAPTER,section:l,usePlayContextItem:o,isAutoPlay:"autoplay"===e.provider},`${t}${a}${e.uid}`)}if((0,ie.k6)(e)){const s=(0,le.X)(e.images||void 0,{desiredSize:40});return(0,b.jsx)(oe.p,{index:t,rowNumberOffset:a,imgUrl:s?.url||"",uri:e.uri,uid:e.uid??e.uri,contextUri:n,duration_ms:e.duration.milliseconds,name:e.advertiser??e.title??c.ag.get("ad-formats.advertisement"),artists:[],album:{name:"",uri:""},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:oe.j.AD,section:l,usePlayContextItem:o,isAutoPlay:"autoplay"===e.provider,isEnhanced:!1},`${t}${a}${e.uid}`)}if((0,ie.G_)(e)||(0,ie.RB)(e)){const s=(0,le.X)(e?.album?.images,{desiredSize:40}),r=e.type===ae.p.TRACK?e:null;return(0,b.jsx)(oe.p,{index:t,rowNumberOffset:a,imgUrl:s?.url||"",uri:(0,se.$)(e),uid:e.uid??e.uri,contextUri:n,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:r?.isExplicit??!1,isPlayable:!0,isMOGEFRestricted:r?.is19PlusOnly??!1,type:r?.isLocal?oe.j.LOCAL:oe.j.TRACK,section:l,usePlayContextItem:o,isAutoPlay:"autoplay"===e.provider,isEnhanced:(0,te.$)(e),trackContextUri:e.metadata?.context_uri??i},`${t}${a}${e.uid}`)}return(0,b.jsx)(ee.Lb,{height:`${ee.dN}px`})}),[a,n,i,l,o]),g=(0,s.useMemo)((()=>[ee.QD.INDEX,ee.QD.TITLE_AND_ARTIST,ee.QD.ALBUM,ee.QD.DURATION]),[]),x=(0,s.useCallback)((e=>e.uri),[]),h=(0,s.useCallback)((e=>e.uid??e.uri),[]);return(0,b.jsx)(ee.Pv,{ariaLabel:t,tracks:e,nrTracks:e.length,onRemove:d,renderRow:m,resolveUri:x,resolveUid:h,columns:g})}));var ce=n(63617);const ue="queue-queuePage-queuePage",de="queue-queuePage-header",me="queue-queuePage-subHeader",ge="queue-queuePage-nextFrom",xe="queue-queuePage-nextInQueue",he=()=>{const{uri:e,description:t,current:n,nextUp:i,queued:m,isEmpty:g,hasQueuedTracks:x,hasNextTracks:h}=(0,ce.y)(),{spec:p,logger:v,UBIFragment:y}=(0,k.fU)(o.z,{data:{identifier:r.Wg.NOWPLAYING_QUEUE,uri:e??""}}),C=(0,s.useMemo)((()=>p.nowPlayingSectionFactory()),[p]),j=(0,s.useMemo)((()=>p.nextInQueueSectionFactory()),[p]),f=(0,s.useMemo)((()=>p.nextFromSectionFactory()),[p]),S=(0,A.g)(),[N,I]=(0,s.useState)(!1),w=(0,s.useCallback)((()=>{I(!1)}),[I]),U=(0,s.useCallback)((()=>{S.clearQueue(),I(!1)}),[S]),F=(0,s.useCallback)((()=>{let e;const t=j.clearQueueButtonFactory();m.length>0&&(e=t.hitRemoveItemsFromQueue({numberOfItemsToRemoveFromQueue:m.length}),v.logInteraction(e))}),[v,j,m.length]),P=(0,s.useCallback)((async()=>{F(),I(!0)}),[F]),{usePlayContextItem:B}=(0,M.n)({uri:e??""},{featureIdentifier:"queue"}),E=(0,s.useCallback)((async()=>{if(!h)return;const t=p.nextFromSectionFactory().queueContextLinkFactory().hitUiNavigate({destination:e??""});v.logInteraction(t)}),[h,v,p,e]);return g?(0,b.jsx)(Y.Q,{}):(0,b.jsxs)("div",{className:ue,children:[(0,b.jsx)(u.$,{children:c.ag.get("queue.page-title")}),(0,b.jsx)(y,{spec:p,children:(0,b.jsx)(T,{className:de,emptyStateComponent:(0,b.jsx)(l.D,{as:"h1",variant:"canon",semanticColor:"textBase",className:de,children:c.ag.get("playback-control.queue")})})}),n&&e&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",className:me,children:c.ag.get("queue.now-playing")}),(0,b.jsx)(y,{spec:C,children:(0,b.jsx)(Q.JL,{value:"now-playing",children:(0,b.jsx)(re,{ariaLabel:c.ag.get("queue.now-playing"),tracks:[n],contextUri:e,section:Z.h.NowPlaying,usePlayContextItem:B})})})]}),x&&e&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:a()(xe,me),children:[(0,b.jsx)(l.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",children:c.ag.get("queue.next-in-queue")}),x&&(0,b.jsx)(_,{onClick:P})]}),(0,b.jsx)(y,{spec:j,children:(0,b.jsx)(Q.JL,{value:"next-in-queue",children:(0,b.jsx)(re,{ariaLabel:c.ag.get("queue.next-in-queue"),tracks:m,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",currentlyPlayingContextUri:e,section:Z.h.NextInQueue,usePlayContextItem:B})})})]}),h&&e&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",className:me,children:t&&!(0,ce.X)(n)?(0,b.jsxs)("span",{className:"standalone-ellipsis-one-line",children:[c.ag.get("queue.next-from")," ",(0,b.jsx)(d.Link,{className:ge,to:e,onClick:E,children:t})]}):c.ag.get("queue.next-up")}),(0,b.jsx)(y,{spec:f,children:(0,b.jsx)(Q.JL,{value:"next-up",children:(0,b.jsx)(re,{ariaLabel:c.ag.get("queue.next-up"),tracks:i,rowNumberOffset:1+(m?.length||0),contextUri:"spotify:app:queue:NextUp",currentlyPlayingContextUri:e,section:Z.h.NextUp,usePlayContextItem:B})})})]}),(0,b.jsx)(V,{itemCount:m?.length||0,isOpen:N,onClose:w,onConfirm:U})]})};var pe=n(44445),ve=n(7969),ye=n(26922);const ke=()=>(0,ve.Y)()?(0,b.jsx)(ye.InstrumentedRedirect,{to:"/history"}):(0,b.jsx)(pe.I,{children:(0,b.jsx)(s.Suspense,{fallback:null,children:(0,b.jsx)(he,{})})})}}]);
//# sourceMappingURL=xpui-routes-queue-page.js.map