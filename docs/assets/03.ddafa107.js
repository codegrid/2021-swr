import{a as s,F as o,j as e}from"./jsx-runtime.3e8da310.js";import{r as a,Z as c,a as i}from"./vendor.a4a64b53.js";const m=t=>fetch("https://hacker-news.firebaseio.com/v0"+t).then(n=>n.json()),p=()=>{const t=c("/maxitem.json",m);return e("div",{children:e("pre",{children:JSON.stringify(t,null,2)})})},d=()=>{const[t,n]=a.exports.useState([Date.now()]);return s(o,{children:[e("button",{onClick:()=>n([...t,Date.now()]),children:"UPDATE"}),e("button",{onClick:()=>n([]),children:"FLUSH"}),e("hr",{}),t.map(r=>e(p,{},r))]})};i.exports.render(e(d,{}),document.getElementById("app"));