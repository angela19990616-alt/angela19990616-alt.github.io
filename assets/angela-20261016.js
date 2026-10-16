'use strict';
const projects=JSON.parse(document.getElementById('project-data').textContent);
const rows=[...document.querySelectorAll('.project-row')];
const filters=[...document.querySelectorAll('[data-filter]')];
let selected='bid';
function selectProject(id,updateHash=true){
 const p=projects.find(p=>p.id===id);if(!p)return;
 selected=id;rows.forEach(r=>r.setAttribute('aria-pressed',String(r.dataset.id===id)));
 for(const [key,val] of Object.entries({code:p.code,status:p.status,title:p.headline,description:p.description,limit:p.limit}))document.getElementById('detail-'+key).textContent=val;
 const flow=document.getElementById('detail-flow');flow.replaceChildren(...p.steps.map(s=>{const el=document.createElement('span');el.textContent=s;return el}));
 const link=document.getElementById('detail-link');link.hidden=!p.url;if(p.url)link.href=p.url;else link.removeAttribute('href');
 if(updateHash)history.replaceState(null,'','#project-'+id);
}
function filterProjects(category){
 filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===category)));
 const visible=projects.filter(p=>category==='all'||p.category===category);
 rows.forEach(r=>r.hidden=!visible.some(p=>p.id===r.dataset.id));
 if(!visible.some(p=>p.id===selected))selectProject(visible[0].id);
 document.getElementById('filter-count').textContent=`展示 ${visible.length} 个项目 · 点击项目展开内容`;
}
rows.forEach(row=>row.addEventListener('click',()=>selectProject(row.dataset.id)));
filters.forEach(button=>button.addEventListener('click',()=>filterProjects(button.dataset.filter)));
function restoreHash(){const id=location.hash.replace('#project-','');if(projects.some(p=>p.id===id)){filterProjects('all');selectProject(id,false)}}
window.addEventListener('hashchange',restoreHash);restoreHash();
const motion=document.getElementById('motion-toggle');
motion.addEventListener('click',()=>{const off=document.body.classList.toggle('motion-off');motion.setAttribute('aria-pressed',String(!off));motion.textContent=off?'播放动效 ▷':'暂停动效 Ⅱ'});
window.addEventListener('beforeprint',()=>document.querySelector('.plain-index').open=true);
