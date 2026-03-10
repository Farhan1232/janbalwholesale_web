import{c as d,e as g,r as i,j as s,L as l,f as j}from"./index-Bnxl8mVY.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=d("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=d("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);function b({product:e,delay:o=0,animate:m=!0}){const{addToCart:h}=g(),[n,t]=i.useState(!1),[c,p]=i.useState(!1),x=a=>{a.preventDefault(),h(e),t(!0),setTimeout(()=>t(!1),2e3)};return s.jsxs("div",{className:`pc-card ${m?"animate-fade-up":""}`,style:{animationDelay:`${o}s`},children:[s.jsxs(l,{to:`/product/${e.slug}`,className:"pc-img-wrap",children:[s.jsx("img",{src:e.img,alt:e.name,className:"pc-img",loading:"lazy",onError:a=>{a.target.src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80"}}),s.jsx("span",{className:"pc-tag",children:e.tag}),s.jsx("button",{className:`pc-wish ${c?"wished":""}`,onClick:a=>{a.preventDefault(),p(!c)},"aria-label":"Wishlist",children:s.jsx(f,{size:15,fill:c?"#ef4444":"none",color:c?"#ef4444":"currentColor"})})]}),s.jsxs("div",{className:"pc-info",children:[s.jsx(l,{to:`/brand/${e.brandSlug}`,className:"pc-brand",children:e.brand}),s.jsx(l,{to:`/product/${e.slug}`,className:"pc-name",children:e.name}),e.colors&&e.colors.length>0&&s.jsx("div",{className:"pc-colors",children:e.colors.map((a,r)=>s.jsx("span",{className:"pc-color",style:{background:a},title:`Colour ${r+1}`},r))}),s.jsx("button",{className:`pc-add ${n?"added":""}`,onClick:x,children:n?s.jsxs(s.Fragment,{children:[s.jsx(u,{size:14})," Added!"]}):s.jsxs(s.Fragment,{children:[s.jsx(j,{size:14})," Add to Enquiry"]})})]})]})}export{u as C,b as P};
