const defaults ={
    headline: "headline def",
    strapline: "strapline"
}
const template = ()=> {
    const {headline, strapline} = defaults;
   return  `<div>factory:<br/>${headline}</div><div>${"strapline"}</div>`
}

const render = (target, config)=>{
   return  target.innerHTML = template();
}

const proto = {create: (targ, config)=>{ render(targ, config)}, template: template, render: render}

export default (target, config)=>{
  return  { ...proto, config }
}