System.register(["./index-legacy-rOnvHW9E.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js"],(function(e,t){"use strict";var n,l,a,o,d,s,i,u,r,c,f,v,h,g,m,p,E,b,_,w,y,I,k,C,x,S,D,V,j;return{setters:[e=>{n=e.c,l=e.w,a=e.u,o=e.g,d=e.d,s=e.h,i=e.i,u=e.f,r=e.j,c=e.k,f=e.l,v=e.m,h=e.n,g=e.q,m=e.t,p=e.v,E=e.x,b=e.y,_=e.o,w=e.a,y=e.b,I=e.e,k=e.z,C=e.A,x=e.B,S=e.F,D=e.C,V=e.r},e=>{j=e._}],execute:function(){var t=document.createElement("style");t.textContent="ion-header[data-v-f3bf8e9d]{--background: #f5f5dc}ion-title[data-v-f3bf8e9d]{font-size:1.5em}ion-content[data-v-f3bf8e9d]{--background: #e0ece4}ion-button[data-v-f3bf8e9d]{--background: #8fbc8f;margin-top:10px}ion-card[data-v-f3bf8e9d]{background:#e6e8e1}ion-item h2[data-v-f3bf8e9d]{font-weight:700}ion-item p[data-v-f3bf8e9d]{color:#5f6e5c}.topbar-icon-container-left[data-v-f3bf8e9d]{position:absolute;left:0}.icon[data-v-f3bf8e9d]{font-size:x-large;opacity:100%;margin:.415rem}.ion-text-center[data-v-f3bf8e9d]{text-align:center;font-size:1.2em;margin-top:20px}\n",document.head.appendChild(t);const z={name:"CalendarPage",components:{IonPage:o,IonHeader:d,IonToolbar:s,IonTitle:i,IonContent:u,IonList:r,IonItem:c,IonLabel:f,IonInput:v,IonDatetime:h,IonButton:g,IonCard:m,IonCardHeader:p,IonCardTitle:E,IonCardContent:b},data:()=>({newEvent:{title:"",date:""},events:[],showEvents:!1}),methods:{saveEvent(){this.newEvent.title&&this.newEvent.date?(this.events.push({...this.newEvent}),localStorage.setItem("events",JSON.stringify(this.events)),this.newEvent={title:"",date:""},alert("Event saved successfully!"),this.showEvents=!0):alert("Please fill in all fields.")},loadEvents(){const e=localStorage.getItem("events");e&&(this.events=JSON.parse(e))},toggleViewEvents(){this.showEvents||this.loadEvents(),this.showEvents=!this.showEvents},deleteEvent(e){this.events.splice(e,1),localStorage.setItem("events",JSON.stringify(this.events))},formatDate:e=>new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},mounted(){this.loadEvents()}};e("default",j(Object.assign(z,{setup:e=>(e,t)=>{const i=V("center"),j=V("ion-text");return _(),n(a(o),null,{default:l((()=>[w(a(d),null,{default:l((()=>[w(a(s),{style:{border:"solid 3px burlywood"}},{default:l((()=>[w(i,null,{default:l((()=>t[2]||(t[2]=[y("h1",null,"My Calendar",-1)]))),_:1})])),_:1})])),_:1}),w(a(u),{class:"ion-padding",color:"light"},{default:l((()=>[w(a(r),{lines:"none"},{default:l((()=>[w(a(m),null,{default:l((()=>[w(a(p),null,{default:l((()=>[w(a(E),null,{default:l((()=>t[3]||(t[3]=[I("Add Event")]))),_:1})])),_:1}),w(a(b),null,{default:l((()=>[w(a(c),null,{default:l((()=>[w(a(f),{position:"stacked"},{default:l((()=>t[4]||(t[4]=[I("Event Title")]))),_:1}),w(a(v),{modelValue:e.newEvent.title,"onUpdate:modelValue":t[0]||(t[0]=t=>e.newEvent.title=t),placeholder:"e.g., Study Session"},null,8,["modelValue"])])),_:1}),w(a(c),null,{default:l((()=>[w(a(f),{position:"stacked"},{default:l((()=>t[5]||(t[5]=[I("Date")]))),_:1}),w(a(h),{modelValue:e.newEvent.date,"onUpdate:modelValue":t[1]||(t[1]=t=>e.newEvent.date=t),"display-format":"MM/DD/YYYY",placeholder:"Select Date"},null,8,["modelValue"])])),_:1}),w(a(g),{expand:"block",color:"success",class:"ion-margin-top",onClick:e.saveEvent},{default:l((()=>t[6]||(t[6]=[I(" Save Event ")]))),_:1},8,["onClick"])])),_:1})])),_:1}),w(a(g),{expand:"block",color:"primary",onClick:e.toggleViewEvents},{default:l((()=>[I(k(e.showEvents?"Hide Events":"View Events"),1)])),_:1},8,["onClick"]),e.showEvents&&e.events.length>0?(_(),n(a(r),{key:0},{default:l((()=>[(_(!0),C(S,null,x(e.events,((o,d)=>(_(),n(a(c),{key:d},{default:l((()=>[w(a(f),null,{default:l((()=>[y("h2",null,k(o.title),1),y("p",null,k(e.formatDate(o.date)),1)])),_:2},1024),w(a(g),{color:"danger",slot:"end",onClick:t=>e.deleteEvent(d)},{default:l((()=>t[7]||(t[7]=[I(" Delete ")]))),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})):D("",!0),e.showEvents&&0===e.events.length?(_(),n(j,{key:1,class:"ion-text-center"},{default:l((()=>t[8]||(t[8]=[I(" No events added yet. ")]))),_:1})):D("",!0)])),_:1})])),_:1})])),_:1})}}),[["__scopeId","data-v-f3bf8e9d"]]))}}}));
