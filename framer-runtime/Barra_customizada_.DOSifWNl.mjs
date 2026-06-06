import{t as e}from"./rolldown-runtime.BvHXOKAc.mjs";import{F as t,L as n,T as r,V as i,l as a,s as o,z as s}from"./react.CbjND57Y.mjs";import{E as c,R as l}from"./motion.C1InUb56.mjs";import{Y as u,j as d,r as f}from"./framer.CvChf-qm.mjs";function p(e){let{scrollbarWidth:r,borderRadius:o,trackBackground:s,thumbBackground:u,thumbHoverBackground:d,thumbBorderColor:f,thumbHoverBorderColor:p,animationDuration:m}=e,h=l(),[g,_]=n(!1);return t(()=>{let e=document.createElement(`style`);e.innerHTML=`
            ::-webkit-scrollbar {
                width: ${r}px;
                border-radius: ${o}px;
            }
            ::-webkit-scrollbar-track {
                background: ${s};
            }
            ::-webkit-scrollbar-thumb {
                background: ${u};
                border: 3px solid ${f};
                border-radius: ${o}px;
                transition: width ${m}s ease-in-out;
            }
            ::-webkit-scrollbar-thumb:hover {
                background: ${d};
                border: 3px solid ${p};
                border-radius: ${o}px;
            }
        `,document.head.appendChild(e);let t=()=>{_(!0),h.start({width:r/2}),clearTimeout(i.scrollTimeout),i.scrollTimeout=setTimeout(()=>{_(!1),h.start({width:r})},100)};return i.addEventListener(`scroll`,t),()=>{document.head.removeChild(e),i.removeEventListener(`scroll`,t)}},[r,o,s,u,d,f,p,m,h]),a(c.div,{style:{width:`100%`,height:`100%`,backgroundColor:`transparent`},animate:h,children:`Scrollbar Customizer`})}var m=e((()=>{s(),o(),r(),u(),d(p,{scrollbarWidth:{type:f.Number,title:`Largura`,defaultValue:14},borderRadius:{type:f.Number,title:`Raio da Borda`,defaultValue:100},trackBackground:{type:f.Color,title:`Fundo do Track`,defaultValue:`#FFFFFF`},thumbBackground:{type:f.Color,title:`Fundo do Thumb`,defaultValue:`#39B49E`},thumbHoverBackground:{type:f.Color,title:`Fundo Hover do Thumb`,defaultValue:`#285888`},thumbBorderColor:{type:f.Color,title:`Cor da Borda do Thumb`,defaultValue:`#FFFFFF`},thumbHoverBorderColor:{type:f.Color,title:`Cor Hover da Borda do Thumb`,defaultValue:`#FFFFFF`},animationDuration:{type:f.Number,title:`Duração da Animação`,defaultValue:.3,description:`Duração da animação em segundos`},codeBy:{type:f.String,title:` `,defaultValue:`Code by @omatusaelhorch`,readOnly:!0}})}));export{m as n,p as t};
//# sourceMappingURL=Barra_customizada_.DOSifWNl.mjs.map