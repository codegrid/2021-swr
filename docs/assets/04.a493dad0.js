import{a as t,j as e,F as m}from"./jsx-runtime.bb3bed96.js";import{r as l,Z as s,X as f,a as g}from"./vendor.a5c86bc8.js";const u=()=>window.location.hash.replace(/^#!/,"")||"/",w=r=>window.location.hash="!"+r,F=()=>{const[r,n]=l.exports.useState(u());return l.exports.useEffect(()=>{const i=()=>n(u());return window.addEventListener("hashchange",i),()=>{window.removeEventListener("hashchange",i)}},[]),[r,w]},a=r=>fetch("https://hacker-news.firebaseio.com/v0"+r).then(n=>n.json()),v=()=>a("/topstories.json"),h=r=>a(`/item/${r}.json`),L=r=>a(`/user/${r}.json`),b=()=>{const{data:r,error:n}=s("/topstories",v),{data:i,error:o}=s(r?`/item/${r[0]}`:null,()=>h(r[0])),c=n||o,p=!(r&&i);return c?t("p",{children:["Error: ",c.message]}):p?e("p",{children:"..."}):t("div",{children:[t("section",{children:[t("h2",{children:["[",e("a",{href:`#!/${i.id}`,children:i.id}),"]"," ",i.title]}),t("div",{children:[t("span",{children:["\u{1F4DD} ",i.by]}),t("span",{children:["\u{1F17F}\uFE0F ",i.score]}),t("span",{children:["\u{1F4AC} ",i.descendants]}),t("span",{children:["\u{1F55B} ",new Date(i.time*1e3).toLocaleTimeString()]})]})]}),e("hr",{}),t("div",{children:[r.slice(1,10).map(d=>t("span",{children:["[",e("a",{href:`#!/${d}`,children:d}),"]",", "]},d)),"..."]})]})},D=({commentIds:r})=>t("div",{children:[e("h3",{children:"Top comments"}),!r||r.length===0?e("p",{children:"No comments."}):e("ul",{children:r.slice(0,3).map(n=>e("li",{children:e(E,{commentId:n})},n))})]}),E=({commentId:r})=>{const{data:n,error:i}=s(`/item/${r}`,()=>h(r)),o=!n;return i?t("p",{children:["Error: ",i.message]}):o?e("p",{children:"..."}):t("div",{children:[e("strong",{children:n.by})," at"," ",new Date(n.time*1e3).toLocaleString(),e("p",{dangerouslySetInnerHTML:{__html:n.text}})]})},S=({userId:r})=>{const[n,i]=l.exports.useState(!1);return t("div",{children:[e("h3",{children:"User profile"}),t("button",{onClick:()=>i(c=>!c),children:[n?"Hide":"Show"," details"]}),n&&e(j,{userId:r})]})},j=({userId:r})=>{const{data:n,error:i}=s(`/user/${r}`,()=>L(r)),o=!n;return i?t("p",{children:["Error: ",i.message]}):o?e("p",{children:"..."}):t("dl",{children:[e("dt",{children:"Id"}),e("dd",{children:n.id}),e("dt",{children:"About"}),e("dd",{dangerouslySetInnerHTML:{__html:n.about||"-"}}),e("dt",{children:"Created"}),e("dd",{children:new Date(n.created*1e3).toLocaleString()}),e("dt",{children:"Submitted"}),t("dd",{children:[n.submitted.length," item(s)"]})]})},C=({id:r})=>{const{data:n,error:i}=s(`/item/${r}`,()=>h(r)),o=!n;return i?t("p",{children:["Error: ",i.message]}):o?e("p",{children:"..."}):t("div",{children:[e("h2",{children:n.title}),t("div",{children:[t("span",{children:["\u{1F4DD} ",n.by]}),t("span",{children:["\u{1F17F}\uFE0F ",n.score]}),t("span",{children:["\u{1F4AC} ",n.descendants]}),t("span",{children:["\u{1F55B} ",new Date(n.time*1e3).toLocaleString()]}),t("span",{children:["\u{1F517} ",e("a",{href:n.url,children:n.url})]})]}),e("hr",{}),e(D,{commentIds:n.kids}),e("hr",{}),e(S,{userId:n.by}),e("hr",{}),e("a",{href:"#!/",children:"Back to list"})]})},x=()=>{const[r]=F();return t(m,{children:[e($,{}),e(f,{value:{refreshInterval:5e3},children:r==="/"?e(b,{}):e(C,{id:r})})]})},$=()=>e("header",{children:e("h1",{children:"\u{1F5DE} HackerNews - CodeGrid edition"})});g.exports.render(e(x,{}),document.getElementById("app"));