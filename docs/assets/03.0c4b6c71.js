import{a as n,F as a,j as e}from"./jsx-runtime.3e8da310.js";import{r as o,Z as i,a as c}from"./vendor.a4a64b53.js";const d=r=>fetch("https://hacker-news.firebaseio.com/v0"+r).then(t=>t.json()),m=()=>{const{data:r,error:t}=i("/maxitem.json",d);return t?n("p",{children:["Error: ",t.message]}):r?e("div",{children:e("pre",{children:JSON.stringify(r,null,2)})}):e("p",{children:"Loading..."})},p=()=>{const[r,t]=o.exports.useState([Date.now()]);return n(a,{children:[e("button",{onClick:()=>t([...r,Date.now()]),children:"UPDATE"}),e("button",{onClick:()=>t([]),children:"FLUSH"}),e("hr",{}),r.map(s=>e(m,{},s))]})};c.exports.render(e(p,{}),document.getElementById("app"));