(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(26),a=(n(36),n(37),n(8)),r=n(3),s=n(10),l=n.n(s),i=["Name","Sex","Born","Died","Mother","Father"],o=["Name","Sex","Born","Died"],j=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},u=function(e,t){return e.find((function(e){return e.name===t}))};function d(e){return(null===e||void 0===e?void 0:e.toLowerCase().trim())||null}function b(e,t,n){var c=e!==d(n)?"fa-sort":t?"fa-sort-up":"fa-sort-down";return l()("fas",c)}var h=n(1),m=function(){return Object(h.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar-brand",children:[Object(h.jsx)(a.c,{to:"/",className:j,children:"Home"}),Object(h.jsx)(a.c,{to:"/people",className:j,children:"People"})]})})})},O=(n(39),function(){return Object(h.jsxs)("div",{"data-cy":"app",children:[Object(h.jsx)(m,{}),Object(h.jsx)("main",{className:"section",children:Object(h.jsx)(r.b,{})})]})}),x=function(){return Object(h.jsx)("h1",{className:"title",children:"Home Page"})},p=n(15),f=n(5),v=n(0),N=n(9),g=function(e){return e.Male="m",e.Female="f",e}({});function y(e,t){var n=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(f.a)(e,2),c=t[0],a=t[1];null===a?n.delete(c):Array.isArray(a)?(n.delete(c),a.forEach((function(e){n.append(c,e)}))):n.set(c,a)})),n.toString()}var w=n(27),S=["children","params"],k=function(e){var t=e.children,n=e.params,c=Object(w.a)(e,S),r=Object(a.d)(),s=Object(f.a)(r,1)[0];return Object(h.jsx)(a.b,Object(p.a)(Object(p.a)({to:{search:y(s,n)}},c),{},{children:t}))},F=["16","17","18","19","20"],A=function(){var e=Object(a.d)(),t=Object(f.a)(e,2),n=t[0],c=t[1],r=n.get("query")||"",s=n.getAll("centuries")||[],i=n.get("sex")||null,o=function(e){return s.includes(e)?s.filter((function(t){return t!==e})):[].concat(Object(N.a)(s),[e])};return Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(h.jsx)(k,{className:l()({"is-active":!i}),params:{sex:null},children:"All"}),Object(h.jsx)(k,{className:l()({"is-active":i===g.Male}),params:{sex:g.Male},children:"Male"}),Object(h.jsx)(k,{className:l()({"is-active":i===g.Female}),params:{sex:g.Female},children:"Female"})]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left",children:[Object(h.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:r,onChange:function(e){var t=e.target.value||null,a=y(n,{query:t});c(a)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(h.jsx)("div",{className:"level-left",children:F.map((function(e){return Object(h.jsx)(k,{params:{centuries:o(e)},"data-cy":"century",className:l()("button","mr-1",{"is-info":s.includes(e)}),children:e},e)}))}),Object(h.jsx)("div",{className:"level-right ml-4",children:Object(h.jsx)(k,{"data-cy":"centuryALL",className:l()("button","is-success",{"is-outlined":s.length}),params:{centuries:null},children:"All"})})]})}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)(k,{className:"button is-link is-outlined is-fullwidth",params:{centuries:null,sex:null,query:null},children:"Reset all filters"})})]})},M=(n(40),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),P=function(e){var t=e.person,n=t.slug,c=t.name,r=t.sex;return Object(h.jsx)(a.b,{to:"/people/".concat(n),className:l()({"has-text-danger":r===g.Female}),children:c})},L=function(e){var t=e.person,n=e.isSelected,c=void 0!==n&&n,a=t.sex,r=t.born,s=t.died,i=t.motherName,o=t.fatherName,j=t.mother,u=t.father;return Object(h.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":c}),children:[Object(h.jsx)("td",{children:Object(h.jsx)(P,{person:t})}),Object(h.jsx)("td",{children:a}),Object(h.jsx)("td",{children:r}),Object(h.jsx)("td",{children:s}),Object(h.jsx)("td",{children:j?Object(h.jsx)(P,{person:j}):i||"-"}),Object(h.jsx)("td",{children:u?Object(h.jsx)(P,{person:u}):o||"-"})]})},E=function(e){var t=e.people,n=Object(r.r)().slug,c=Object(a.d)(),s=Object(f.a)(c,1)[0],l=s.get("sort")||null,j=s.get("order")||null,u=function(e){var t=d(e);return l!==t?{sort:d(t),order:null}:j?{sort:null,order:null}:{sort:l,order:"desc"}};return Object(h.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:i.map((function(e){return Object(h.jsx)("th",{children:o.includes(e)?Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e,Object(h.jsx)(k,{params:u(e),children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:b(l,j,e)})})})]}):e},e)}))})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsx)(L,{person:e,isSelected:e.slug===n},e.slug)}))})]})},_=n(4),q=n(7),C="https://mate-academy.github.io/react_people-table/api/people.json";function T(e){return new Promise((function(t){return setTimeout(t,e)}))}function B(){return(B=Object(q.a)(Object(_.a)().mark((function e(){return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T(500).then((function(){return fetch(C)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=function(){var e=Object(v.useState)(!1),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(v.useState)(!0),s=Object(f.a)(r,2),l=s[0],i=s[1],o=Object(v.useState)([]),j=Object(f.a)(o,2),b=j[0],m=j[1];Object(v.useEffect)((function(){(function(){return B.apply(this,arguments)})().then((function(e){var t=e.map((function(t){return Object(p.a)(Object(p.a)({},t),{},{mother:u(e,t.motherName),father:u(e,t.fatherName)})}));m(t)})).catch((function(){c(!0)})).finally((function(){i(!1)}))}),[]);var O=!n&&!l&&!!b.length,x=!n&&!l&&!b.length,N=Object(a.d)(),g=Object(f.a)(N,1)[0],y=g.get("query")||"",w=g.getAll("centuries")||[],S=g.get("sex")||null,k=g.get("sort")||null,F=g.get("order")||null,P=!y&&!w.length&&!S&&!k,L=Object(v.useMemo)((function(){if(P)return b;var e=b.filter((function(e){return function(e){var t,n,c;if(!y)return!0;var a=e.name,r=e.motherName,s=e.fatherName,l=d(y);return(null===(t=d(a))||void 0===t?void 0:t.includes(l))||(null===(n=d(r))||void 0===n?void 0:n.includes(l))||(null===(c=d(s))||void 0===c?void 0:c.includes(l))}(e)})).filter((function(e){return!S||S===e.sex})).filter((function(e){return!w.length||w.includes((t=e.born,Math.ceil(t/100)).toString());var t}));return k&&e.sort((function(e,t){switch(k){case"name":case"sex":return e[k].localeCompare(t[k]);case"born":case"died":return e[k]-t[k];default:return 0}})),F&&e.reverse(),e}),[b,y,w,S]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"title",children:"People Page"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[O&&Object(h.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(h.jsx)(A,{})}),Object(h.jsx)("div",{className:"column",children:Object(h.jsxs)("div",{className:"box table-container",children:[l?Object(h.jsx)(M,{}):n&&Object(h.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),x&&Object(h.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),O&&(L.length?Object(h.jsx)(E,{people:L}):Object(h.jsx)("p",{children:"There are no people matching the current search criteria"}))]})})]})})]})},D=function(){return Object(h.jsx)("h1",{className:"title",children:"Page not found"})},H=function(){return Object(h.jsx)(a.a,{children:Object(h.jsx)(r.e,{children:Object(h.jsxs)(r.c,{path:"/",element:Object(h.jsx)(O,{}),children:[Object(h.jsx)(r.c,{path:"home",element:Object(h.jsx)(r.a,{to:"/",replace:!0})}),Object(h.jsx)(r.c,{index:!0,path:"/",element:Object(h.jsx)(x,{})}),Object(h.jsx)(r.c,{path:"people",children:Object(h.jsx)(r.c,{path:":slug?",element:Object(h.jsx)(R,{})})}),Object(h.jsx)(r.c,{path:"*",element:Object(h.jsx)(D,{})})]})})})};Object(c.createRoot)(document.getElementById("root")).render(Object(h.jsx)(H,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.6f6f1fbb.chunk.js.map