(function(l,h,y){"use strict";const p=/https:\/\/cdn.discordapp.com\/emojis\/(\d+).(webp|gif|png)/,f=s=>s.replace(/^[ \t]+/,"").replace(/[ \t]+$/,""),x=y.before("updateRows",h.ReactNative.NativeModules.DCDChatManager,([s,j,w])=>{const d=JSON.parse(j);for(const c of d)if(c.message&&c.changeType!==3){const{content:e,embeds:a}=c.message;if(!Array.isArray(e))continue;const g=e.findIndex(t=>t.type==="link"&&p.test(t.target));if(g===-1)continue;const N=[...e],m=e.splice(g).filter(t=>t.type!=="text"||t.content!==`
`),v=m.map(t=>p.exec(t.target)).filter(Boolean).map(([,t,n])=>[t,`https://cdn.discordapp.com/emojis/${t}.webp?size=160`,n==="gif"]),O=m.map(t=>t.target);if(!e.length){c.message.content=N;continue}for(let t=0;t<e.length;t++){const n=e[t];if(n.type!=="text")continue;const u=v.shift();if(!u)break;let o=n.content.indexOf("  ");if(o===-1&&(o=n.content.lastIndexOf(`
`)),o===-1)continue;const[k,r,S]=u,z=n.content.slice(0,o),A=n.content.slice(o);n.content=(t!==0?" ":"")+f(z)+" ",e.splice(t+1,0,{type:"customEmoji",id:k,alt:"<realmoji>",src:r,frozenSrc:S?r.replace("webp","gif"):r},{type:"text",content:" "+f(A)})}const i=e[e.length-1];i?.type==="text"&&(i.content===`
`?e.length=e.length-1:i.content=i.content.trimEnd());for(let t=0;t<a.length;t++){const n=a[t];n.type==="image"&&O.includes(n.url)&&a.splice(t--,1)}}return[s,JSON.stringify(d),w]}),b=()=>x();return l.onUnload=b,l})({},vendetta.metro.common,vendetta.patcher);
