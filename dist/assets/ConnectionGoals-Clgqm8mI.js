import{c as d,w as t,u as e,g as h,d as w,h as C,i as L,f as _,j as f,k as m,l as p,m as k,q as u,t as y,v as V,x as b,y as N,o as i,a as n,b as r,I as T,E as G,e as l,z as E,A as O,B as F,F as H,C as I,r as g}from"./index-fypc6s9t.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";const P={class:"topbar-icon-container-left"},j={href:"/"},A={name:"ListPage",components:{IonPage:h,IonHeader:w,IonToolbar:C,IonTitle:L,IonContent:_,IonList:f,IonItem:m,IonLabel:p,IonInput:k,IonButton:u,IonCard:y,IonCardHeader:V,IonCardTitle:b,IonCardContent:N},data(){return{newEvent:{title:""},events:[],showEvents:!1}},methods:{saveEvent(){this.newEvent.title?(this.events.push({...this.newEvent}),localStorage.setItem("events",JSON.stringify(this.events)),this.newEvent={title:""},alert("Item saved successfully!"),this.showEvents=!0):alert("Please enter an item title.")},loadEvents(){const a=localStorage.getItem("events");a&&(this.events=JSON.parse(a))},toggleViewEvents(){this.showEvents||this.loadEvents(),this.showEvents=!this.showEvents},deleteEvent(a){this.events.splice(a,1),localStorage.setItem("events",JSON.stringify(this.events))}},mounted(){this.loadEvents()}},D=Object.assign(A,{setup(a){return(o,s)=>{const S=g("center"),B=g("ion-text");return i(),d(e(h),null,{default:t(()=>[n(e(w),null,{default:t(()=>[n(e(C),{style:{border:"solid 3px burlywood"}},{default:t(()=>[r("div",P,[r("a",j,[n(e(T),{class:"icon",icon:e(G)},null,8,["icon"])])]),n(S,null,{default:t(()=>s[1]||(s[1]=[r("h1",null,"Connection Goals",-1)])),_:1})]),_:1})]),_:1}),n(e(_),{class:"ion-padding",color:"light"},{default:t(()=>[n(e(f),{lines:"none"},{default:t(()=>[n(e(y),null,{default:t(()=>[n(e(V),null,{default:t(()=>[n(e(b),null,{default:t(()=>s[2]||(s[2]=[l("Add Goal")])),_:1})]),_:1}),n(e(N),null,{default:t(()=>[n(e(m),null,{default:t(()=>[n(e(p),{position:"stacked"},{default:t(()=>s[3]||(s[3]=[l("Item Title")])),_:1}),n(e(k),{modelValue:o.newEvent.title,"onUpdate:modelValue":s[0]||(s[0]=v=>o.newEvent.title=v),placeholder:"e.g., Meeting up with Friends"},null,8,["modelValue"])]),_:1}),n(e(u),{expand:"block",color:"success",class:"ion-margin-top",onClick:o.saveEvent},{default:t(()=>s[4]||(s[4]=[l(" Save Goal ")])),_:1},8,["onClick"])]),_:1})]),_:1}),n(e(u),{expand:"block",color:"primary",onClick:o.toggleViewEvents},{default:t(()=>[l(E(o.showEvents?"Hide List":"View List"),1)]),_:1},8,["onClick"]),o.showEvents&&o.events.length>0?(i(),d(e(f),{key:0},{default:t(()=>[(i(!0),O(H,null,F(o.events,(v,c)=>(i(),d(e(m),{key:c},{default:t(()=>[n(e(p),null,{default:t(()=>[r("h2",null,E(v.title),1)]),_:2},1024),n(e(u),{color:"danger",slot:"end",onClick:q=>o.deleteEvent(c)},{default:t(()=>s[5]||(s[5]=[l(" Delete ")])),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})):I("",!0),o.showEvents&&o.events.length===0?(i(),d(B,{key:1,class:"ion-text-center"},{default:t(()=>s[6]||(s[6]=[l(" No items added yet. ")])),_:1})):I("",!0)]),_:1})]),_:1})]),_:1})}}}),U=J(D,[["__scopeId","data-v-86816e29"]]);export{U as default};
