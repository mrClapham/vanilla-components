const defaults ={
    headline: "headline",
    strapline: "strapline"
}
const template = ()=> {
    const {headline, strapline} = defaults;
    `<div>factory:${"headline"}</div><div>${"strapline"}</div>`
}

const render = (target, config)=>{
     target.innerHTML = template();
}

const proto = {create: (templete, render)=>{return render}, template: template, render: render}

export default (target, config)=>{
  return  { ...proto, config }
}