"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1014],{11014:(e,t,a)=>{a.r(t),a.d(t,{SNACKBAR_ID:()=>S,default:()=>w});var i=a(50959),r=a(95206),n=a(35821),o=a(47767),s=a(98900),c=(a(99692),a(22741)),l=a(92622),d=a(29482),u=a(30068);const f="dRD7dgAMZVRuTdelaf6B",g="sFr9SHK1H3ZYdz2_jWqY",m="AckhtqapSIpyTPpQGw7y";var h=a(11527);const b="dialog-robot";const p=()=>{const[e,t]=(0,i.useState)(!0);return e?(0,h.jsx)(l.l,{"data-testid":b,id:b,"aria-label":"Dialog robot",dialogTitle:s.ag.get("user-fraud-verification.dialog-alert.title"),colorSet:"invertedLight",className:f,body:(0,h.jsx)(d.D,{as:"p",children:(a=s.ag.get("user-fraud-verification.dialog-alert.describe"),r=e=>(0,h.jsx)(c.rU,{to:"/playlist/37i9dQZF1DWUcRrhkfhG22",className:g,children:e},e),a.split(/(\{0\}.*)\{1\}/).map((e=>e.startsWith("{0}")?r(e.split("{0}")[1]):e)))}),footer:(0,h.jsx)(u.D,{className:m,onClick:()=>t(!1),children:s.ag.get("user-fraud-verification.dialog-alert.ok")})}):null;var a,r};var v=a(39017),_=a(21978),I=a(5750),T=a(55844),k=a(39253),x=a(42370);var y=a(26314),N=a(75719);const S="snackbar-user-fraud-verification",w=({verificationId:e})=>{const t=(0,i.useRef)(Date.now()),[a,c]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),[u,f]=(0,i.useState)(!1),g=(0,x.s4)(),m=(()=>{const e=(0,x.s4)(),{mutate:t}=(0,v.useMutation)({mutationFn:e=>{const t=I.b.getInstance();return(0,T.h)(t,e)},onError:(t,a)=>{e.send((0,_.b)({id:a,method:"IN_APP_VERIFICATION_V0",error_message:t instanceof k.m?t.message:null,http_method:"put",http_path:`/verification/${a}`}))}});return t})(),{isTrustedRef:b,isTrustedFn:w}=(0,N.L)(),A=async(a,i)=>{const r=Date.now()-t.current,{type:n}=i;await w(i),g.send((0,o.h)({id:e,method:"IN_APP_VERIFICATION_V0",action:a,interaction_details:{reaction_time:`${r}`,event_triggered:JSON.stringify({type:n,isTrusted:b.current})}})),e&&m(e)};return l?null:u?(0,h.jsx)(p,{}):a?(0,h.jsx)(r.A9,{"data-testid":S,className:(0,n.Mg)("announcement"),showSnackbar:!0,children:s.ag.get("user-fraud-verification.snackbar.message")}):(0,h.jsx)(y.Q,{"aria-label":s.ag.get("user-fraud-verification.confirm-dialog.title"),titleText:s.ag.get("user-fraud-verification.confirm-dialog.title"),descriptionText:s.ag.get("user-fraud-verification.confirm-dialog.description"),onConfirm:e=>{A("human",e),c(!0)},onClose:e=>{A("robot",e),f(!0)},onOutside:e=>{A("robot",e),d(!0)},confirmText:s.ag.get("user-fraud-verification.confirm-dialog.confirm"),confirmLabel:s.ag.get("user-fraud-verification.confirm-dialog.label"),cancelText:s.ag.get("user-fraud-verification.confirm-dialog.cancel")})}}}]);
//# sourceMappingURL=1014.js.map