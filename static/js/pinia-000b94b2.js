import{i as t}from"./vue-demi-5b9a0fa5.js";import{e as a,r as s,m as e}from"./@vue-fca6b54b.js";
/*!
  * pinia v2.0.0-rc.10
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const c=Symbol();var o,r;function i(){const o=a(!0),r=o.run((()=>s({})));let i=[];const n=[],p=e({install(t){p._a=t,t.provide(c,p),t.config.globalProperties.$pinia=p,n.forEach((t=>i.push(t)))},use(a){return this._a||t?i.push(a):n.push(a),this},_p:i,_a:null,_e:o,_s:new Map,state:r});return p}(r=o||(o={})).direct="direct",r.patchObject="patch object",r.patchFunction="patch function";export{i as c};
