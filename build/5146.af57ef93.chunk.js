(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5146],{77228:(v,m,d)=>{var w,f;/*!
* JavaScript Cookie v2.2.1
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/(function(s){var l;if(w=s,f=typeof w=="function"?w.call(m,d,m,v):w,f!==void 0&&(v.exports=f),l=!0,v.exports=s(),l=!0,!l){var _=window.Cookies,n=window.Cookies=s();n.noConflict=function(){return window.Cookies=_,n}}})(function(){function s(){for(var n=0,i={};n<arguments.length;n++){var p=arguments[n];for(var g in p)i[g]=p[g]}return i}function l(n){return n.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function _(n){function i(){}function p(t,o,e){if(!(typeof document>"u")){e=s({path:"/"},i.defaults,e),typeof e.expires=="number"&&(e.expires=new Date(new Date*1+e.expires*864e5)),e.expires=e.expires?e.expires.toUTCString():"";try{var u=JSON.stringify(o);/^[\{\[]/.test(u)&&(o=u)}catch{}o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var c in e)e[c]&&(a+="; "+c,e[c]!==!0&&(a+="="+e[c].split(";")[0]));return document.cookie=t+"="+o+a}}function g(t,o){if(!(typeof document>"u")){for(var e={},u=document.cookie?document.cookie.split("; "):[],a=0;a<u.length;a++){var c=u[a].split("="),r=c.slice(1).join("=");!o&&r.charAt(0)==='"'&&(r=r.slice(1,-1));try{var E=l(c[0]);if(r=(n.read||n)(r,E)||l(r),o)try{r=JSON.parse(r)}catch{}if(e[E]=r,t===E)break}catch{}}return t?e[t]:e}}return i.set=p,i.get=function(t){return g(t,!1)},i.getJSON=function(t){return g(t,!0)},i.remove=function(t,o){p(t,"",s(o,{expires:-1}))},i.defaults={},i.withConverter=_,i}return _(function(){})})},75146:(v,m,d)=>{"use strict";d.r(m),d.d(m,{ADMIN_PERMISSIONS_EE:()=>p,ROUTES_EE:()=>g,SETTINGS_LINKS_EE:()=>t});var w=d(74081),f=d(27279),s=d(94050),l=d(77228),_=d(61020),n=d(51447);const i=()=>{const o=(0,n.$B)("/auth/login/:authResponse"),{formatMessage:e}=(0,_.Z)(),{push:u}=(0,n.k6)(),a=f.useCallback(()=>{u(`/auth/oops?info=${encodeURIComponent(e({id:"Auth.form.button.login.providers.error",defaultMessage:"We cannot connect you through the selected provider."}))}`)},[u,e]),{get:c}=(0,s.kY)(),r=f.useCallback(async()=>{try{const E=l.get("jwtToken");if(s.I8.clearAppStorage(),E){s.I8.setToken(E,!0);const I="/admin/users/me",{data:{data:S}}=await c(I);s.I8.setUserInfo(S,!0),l.remove("jwtToken"),u("/auth/login")}}catch{a()}},[c,u,a]);return f.useEffect(()=>{o?.params.authResponse==="error"&&a(),o?.params.authResponse==="success"&&r()},[o,r,a]),(0,w.jsx)(s.dO,{})},p={settings:{auditLogs:{main:[{action:"admin::audit-logs.read",subject:null}],read:[{action:"admin::audit-logs.read",subject:null}]},"review-workflows":{main:[{action:"admin::review-workflows.read",subject:null}],create:[{action:"admin::review-workflows.create",subject:null}],delete:[{action:"admin::review-workflows.delete",subject:null}],update:[{action:"admin::review-workflows.update",subject:null}]},sso:{main:[{action:"admin::provider-login.read",subject:null}],read:[{action:"admin::provider-login.read",subject:null}],update:[{action:"admin::provider-login.update",subject:null}]}}},g=[{Component:()=>({default:i}),to:"/auth/login/:authResponse",exact:!0}],t=()=>({global:[...window.strapi.features.isEnabled(window.strapi.features.SSO)?[{intlLabel:{id:"Settings.sso.title",defaultMessage:"Single Sign-On"},to:"/settings/single-sign-on",id:"sso"}]:[],...window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS)?[{intlLabel:{id:"Settings.review-workflows.page.title",defaultMessage:"Review Workflows"},to:"/settings/review-workflows",id:"review-workflows"}]:[]],admin:[...window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS)?[{intlLabel:{id:"global.auditLogs",defaultMessage:"Audit Logs"},to:"/settings/audit-logs?pageSize=50&page=1&sort=date:DESC",id:"auditLogs"}]:[]]})}}]);