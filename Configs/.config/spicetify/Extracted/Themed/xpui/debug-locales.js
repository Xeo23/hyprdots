"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6658],{71777:(e,a,t)=>{t.r(a),t.d(a,{default:()=>b});t(99692);var s=t(50959),l=t(98900),i=t(25372),n=t(78860),o=t(57044),r=t(29482),c=t(55415);const d="SsxBZ9Nwxg30ZcXUcUcJ",h="HVN1FVVriodEnWgn1GZ4",u="legiK6gOuEtSJvxYKoXc",p="N6dpLHX_oZBYC1FQy8SA",g="krXyPxbq59r39DlZdHzv",x="_o0S4kMO8jLyHmiTwjxg",j="yuK7YlDkSnTHzZph5sQq";var m=t(11527);function y(){const[e,a]=(0,s.useState)(o.ZP.isEnabled());return(0,m.jsxs)("div",{children:[" ",(0,m.jsx)(r.D,{as:"h4",variant:"canon",semanticColor:"textBase",children:"Pseudo localization"}),(0,m.jsxs)("div",{children:[(0,m.jsxs)(r.D,{variant:"ballad",children:["Perform"," ",(0,m.jsx)("a",{href:"https://en.wikipedia.org/wiki/Pseudolocalization",children:"pseudolocalization"})," ","against the DOM.",(0,m.jsx)("br",{})]}),(0,m.jsx)(r.D,{variant:"viola",children:"In Accented English all Latin letters are replaced by accented Unicode counterparts which don't impair the readability of the content. This allows developers to quickly test if any given string is being correctly displayed in its 'translated' form. Additionally, simple heuristics are used to make certain words longer to better simulate the experience of international users."})]}),(0,m.jsx)("br",{}),(0,m.jsxs)("div",{className:j,children:[(0,m.jsx)(r.D,{as:"label",htmlFor:"pseudo-localization",variant:"ballad",children:"Toggle pseudo-localization"}),(0,m.jsx)(c.Z,{id:"pseudo-localization",value:e,onSelected:e=>{e?(a(!0),o.ZP.start()):(a(!1),o.ZP.stop(),window.location.reload())}})]})]})}var f=t(3510),v=t(13363);const b=()=>{const{settings:e}=(0,v.rV)(),a=(0,f.getIsEmployeeDesktopSettings)(e.values),t=(0,s.useMemo)((()=>({localeForTranslation:l.ag.getLocaleForTranslation(),localeForFormatting:l.ag.getLocaleForTranslation(),translations:l.ag.getTranslations()})),[]),[o,r]=(0,s.useState)(null);(0,s.useEffect)((()=>{const e={};return Promise.all(Object.keys(n.k1).map((async a=>{e[a]=await(0,i.q)(a)}))).then((()=>{r(e)})),()=>{l.ag.initialize(t)}}),[t]);const[c,j]=(0,s.useState)(null),b=l.ag.get.bind(l.ag);return a?(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)("h1",{className:h,children:"Locales"}),(0,m.jsx)("h3",{children:"You can use this tool to test if the Desktop client is able to properly render every locale with correct font-family within Desktop UI."}),(0,m.jsx)(y,{}),o?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("p",{children:"Choose a string key from the dropdown to test it"}),(0,m.jsxs)("select",{onChange:e=>{j(e.target.value)},children:[(0,m.jsx)("option",{selected:null===c,children:"Select a key"}),Object.keys(o[l.go.en]||{}).map((e=>(0,m.jsx)("option",{selected:c===e,children:e},e)))]})]}),(0,m.jsx)("div",{className:u,children:Object.entries(n.k1).map((([e,{displayName:a,displayNameEn:t}])=>(e in o&&l.ag.initialize({localeForTranslation:e,localeForFormatting:e,translations:o[e]}),(0,m.jsxs)("div",{className:p,children:[(0,m.jsxs)("h3",{children:[t," (",e,") (",a,")"]}),c?(0,m.jsx)("p",{className:g,children:e in o?b(c):"💥 Can't load dictionary 💥 "}):null]},e))))})]}):(0,m.jsx)("p",{children:"Please wait until we fetch all dictionaries"})]}):null}}}]);
//# sourceMappingURL=debug-locales.js.map