"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6474],{96474:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var s=a(50959),n=a(79409),i=(a(99692),a(29482)),r=a(79709),d=a(81100),o=a(92932),l=a(31133),c=a(38762),h=a(98900),u=a(94989),v=a(42370),g=a(65171),_=a(3536),b=a(77001);const f="hfqIVj1Uq2_MEUCyMms_",m="eZiwIWjLcgezw4G4FF4U";var x=a(11527);const w="40px",p=({leavebehinds:e})=>{let t;return 1===e.length&&(t=(0,x.jsx)(i.D,{variant:"mestoBold",semanticColor:"textBase",children:e[0].advertiser})),2===e.length&&(t=h.ag.get("podcast-ads.recent_ads_just_two",(0,x.jsx)(i.D,{variant:"mestoBold",semanticColor:"textBase",children:e[0].advertiser}),(0,x.jsx)(i.D,{variant:"mestoBold",semanticColor:"textBase",children:e[1].advertiser}))),e.length>2&&(t=h.ag.get("podcast-ads.recent_ads_more_than_two",(0,x.jsx)(i.D,{variant:"mestoBold",semanticColor:"textBase",children:e[0].advertiser}),(0,x.jsx)(i.D,{variant:"mestoBold",semanticColor:"textBase",children:e[1].advertiser}))),(0,x.jsxs)(i.D,{variant:"mesto",semanticColor:"textSubdued","data-testid":"show-leavebehinds-text",children:[h.ag.get("podcast-ads.recent_ads_from"),t]})},j=({leavebehinds:e,uri:t,surface:a})=>{const n=(0,v.s4)();if((0,s.useEffect)((()=>{t&&e.length>0&&n.send((0,l.a)({leavebehind_request_id:e[0].requestId,event:"event_viewed",event_reason:`viewed_on_${(0,g.OO)(a).toLowerCase()}`,surface:(0,g.OO)(a),uri:t}))}),[n,e,t,a]),0===e.length)return null;const o=(0,c.EC)(t)?.id,j=1===e.length?e[0].clickthroughUrl:(0,_.D)(o),C=b.Jw,B=e.length>C,k=e.length-(C-1),I=e.slice(0,B?C-1:C);return(0,x.jsx)(u.default,{to:j,pathname:e.length>1?j:void 0,state:{uri:t},className:m,onClick:()=>n.send((0,l.a)({leavebehind_request_id:e[0].requestId,event:"event_clicked",event_reason:"cta_see_all",surface:(0,g.OO)(a),uri:t})),"data-testid":"show-leavebehinds-container",children:(0,x.jsx)(r.w,{layout:"wide",variant:"tinted",size:"xl",id:"show-leavebehinds",title:(0,x.jsxs)("div",{className:f,"data-testid":"show-leavebehinds-logos-container",children:[I.map((e=>(0,x.jsx)(d.d,{"data-testid":"show-leavebehind-image",src:e.displayImage.src,alt:e.displayImage.alt,imageHeight:w,imageWidth:w},e.adId))),B?(0,x.jsx)(y,{"data-testid":"show-leavebehinds-more-count-indicator",variant:"tinted",minBlockSize:w,borderRadius:"4px",padding:"6px",children:(0,x.jsx)(i.D,{variant:"ballad","data-testid":"show-leavebehinds-more-count-indicator-text",children:h.ag.get("podcast-ads.show_more_indicator",k)})}):null]}),body:(0,x.jsx)(p,{leavebehinds:e})})})};var y=(0,n.ZP)(o.x).withConfig({displayName:"LeavebehindsPreview___StyledBox",componentId:"sc-f5rbik-0"})({backgroundColor:"#121212",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"}),C=a(851);const B=g.Tg.SHOW_PAGE;function k({uri:e}){const{data:t,error:a,getLeavebehinds:n}=(0,C.Z)({surface:B,uri:e});(0,s.useEffect)((()=>{n()}),[n]);const i=(0,s.useMemo)((()=>t?(0,b.D7)(t,e):[]),[t?.requestId]);return a||t?.leavebehindAds&&t?.leavebehindAds?.length<1?null:(0,x.jsx)(j,{leavebehinds:i,uri:e,surface:B})}},851:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(50959),n=a(79288),i=a(42370),r=a(5750),d=a(57983),o=a(65171),l=a(77001);const c=function(e){const[t,a]=(0,s.useState)(),[c,h]=(0,s.useState)(!1),u=(0,i.s4)();return{data:t,error:c,getLeavebehinds:(0,s.useCallback)((async()=>{try{const t=await d.fi.getLeavebehindsData(r.b.getInstance(),(0,o.OO)(e.surface),e.uri);a(t.body)}catch(t){const a=t;u.send((0,n.v)({error_type:"fetchAdsFailure",error_message:a.name,http_error_code:a.status,surface:(0,o.OO)(e.surface),request_url:(0,l.eh)(),request_type:"leavebehindAds",ad_content_origin:"podcast"})),h(!0)}}),[u,e.surface,e.uri])}}}}]);
//# sourceMappingURL=6474.js.map