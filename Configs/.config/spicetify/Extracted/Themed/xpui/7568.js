"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7568],{77568:(e,t,s)=>{s.r(t),s.d(t,{LeavebehindAds:()=>g,default:()=>_});var a=s(50959),r=s(38762),n=s(61441),u=s(62129),i=s(16917),l=s(69483),c=s(97623),d=s(65171),o=s(10903),f=s(851),h=s(77001),b=s(11527);const v=d.Tg.EPISODE_PAGE,g=({leavebehinds:e,uri:t,seeAllPath:s})=>{const r=(0,a.useMemo)((()=>e.slice(0,h.d9)),[e]);return(0,b.jsx)(l.w,{entityType:"podcast",leavebehinds:r,surface:v,uri:t,seeAllButton:e.length>h.d9?(0,b.jsx)(c.j,{leavebehinds:e,surface:v,uri:t,pathname:s,state:{uri:t}}):null})};function _(e){const t=(0,n.x)(),s=(0,r.EC)(e.uri)?.id,l=(0,o.e)(s),{data:c,error:d,getLeavebehinds:_}=(0,f.Z)({surface:v,uri:e.uri}),p=(m=t?.item.type,(0,u.D)(m)===i.p.AD&&m===i.p.EPISODE);var m;(0,a.useEffect)((()=>{_()}),[_]),(0,a.useEffect)((()=>{p&&_()}),[p]);const y=(0,a.useMemo)((()=>c?(0,h.D7)(c,e.uri):[]),[c?.requestId]);return y.length<1||d?null:(0,b.jsx)(g,{uri:e.uri,leavebehinds:y,seeAllPath:l})}},97623:(e,t,s)=>{s.d(t,{j:()=>o});var a=s(22741),r=s(45917),n=s(31133),u=s(98900),i=s(42370),l=s(65171),c=s(77001),d=s(11527);const o=({leavebehinds:e,surface:t,uri:s,pathname:o,state:f})=>{const h=(0,i.s4)(),b=`${u.ag.get("view.see-all")} (${e.length<=c.fz?u.ag.formatNumber(e.length):u.ag.formatNumber(c.fz)})`;return(0,d.jsx)(a.rU,{to:o,state:f,children:(0,d.jsx)(r.o,{"data-testid":"leavebehinds-see-all",buttonSize:"sm",onClick:()=>{h.send((0,n.a)({leavebehind_request_id:e[0].requestId,event:"event_clicked",event_reason:"cta_see_all",surface:(0,l.OO)(t),uri:s}))},children:b})})}},851:(e,t,s)=>{s.d(t,{Z:()=>d});var a=s(50959),r=s(79288),n=s(42370),u=s(5750),i=s(57983),l=s(65171),c=s(77001);const d=function(e){const[t,s]=(0,a.useState)(),[d,o]=(0,a.useState)(!1),f=(0,n.s4)();return{data:t,error:d,getLeavebehinds:(0,a.useCallback)((async()=>{try{const t=await i.fi.getLeavebehindsData(u.b.getInstance(),(0,l.OO)(e.surface),e.uri);s(t.body)}catch(t){const s=t;f.send((0,r.v)({error_type:"fetchAdsFailure",error_message:s.name,http_error_code:s.status,surface:(0,l.OO)(e.surface),request_url:(0,c.eh)(),request_type:"leavebehindAds",ad_content_origin:"podcast"})),o(!0)}}),[f,e.surface,e.uri])}}}}]);
//# sourceMappingURL=7568.js.map