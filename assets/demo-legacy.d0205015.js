System.register(["./mobile-legacy.729b958c.js","./vendor-legacy.110a3ea1.js","./index-legacy.f7980f3d.js"],(function(e){"use strict";var l,o,a,c,u,d,t,n,x,h,b,m;return{setters:[function(e){l=e.c,o=e.T},function(e){a=e.k,c=e.a,u=e.s,d=e.r,t=e.o,n=e.c,x=e.f,h=e.i,b=e.t,m=e.j},function(){}],execute:function(){const{createDemo:k}=l("checkbox");var V=e("default",k({setup(e,l){const d=a(null),t=c({checkbox1:!0,checkbox2:!1,checkbox3:!1,checkbox4:!0,checkbox5:!1,checkbox6:!1,checkbox7:!1,checkbox8:!1,checkbox9:!1,checkbox10:!1,checkbox11:!1,checkbox12:!1,checkbox13:!1,checkbox14:!1,checkbox15:!1,checkbox16:!1,checkboxgroup1:["2","3"],checkboxgroup2:["2"],checkboxgroup3:["2"]});return{changeBox1:(e,l)=>{console.log(e,l)},changeBox2:(e,l)=>{console.log(e,l)},changeBox3:(e,l)=>{o.text(`您${e?"选中":"取消"}了${l}`)},changeBox4:e=>{o.text(""+(e.length?"全选":"取消全选"))},toggleAll:e=>{d.value.toggleAll(e)},group:d,...u(t)}}}));const f={class:"demo"},g=m("复选框"),p=m("复选框"),i=x("div",{style:{marginright:"10px"}},"当前选中值",-1),r=m("未选时禁用状态"),_=m("选中时禁用状态"),s=m("自定义尺寸25"),U=m("自定义尺寸10"),y=m("自定义图标"),v=m("change复选框"),C=m("组合复选框"),B=m("组合复选框"),j=m("组合复选框"),A=m("组合复选框"),G=x("div",{style:{marginright:"10px"}},"当前选中值",-1),z=m("组合复选框"),$=m("组合复选框"),D=m("组合复选框"),S=m("组合复选框"),T=m("组合复选框"),q=m("组合复选框"),w=m("全选"),E=m("取消");V.render=function(e,l,o,a,c,u){const m=d("nut-checkbox"),k=d("nut-cell"),V=d("nut-cell-group"),F=d("nut-checkboxgroup"),H=d("nut-button");return t(),n("div",f,[x(V,{title:"基本用法-左右"},{default:h((()=>[x(k,null,{default:h((()=>[x(m,{modelValue:e.checkbox1,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checkbox1=l),label:"复选框",onChange:e.changeBox1},{default:h((()=>[g])),_:1},8,["modelValue","onChange"])])),_:1}),x(k,null,{default:h((()=>[x(m,{modelValue:e.checkbox1,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checkbox1=l),"text-position":"left",onChange:e.changeBox1},{default:h((()=>[p])),_:1},8,["modelValue","onChange"])])),_:1}),x(k,null,{default:h((()=>[i,x("div",null,b(e.checkbox1),1)])),_:1})])),_:1}),x(V,{title:"禁用状态"},{default:h((()=>[x(k,null,{default:h((()=>[x(m,{modelValue:e.checkbox3,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checkbox3=l),disabled:""},{default:h((()=>[r])),_:1},8,["modelValue"])])),_:1}),x(k,null,{default:h((()=>[x(m,{modelValue:e.checkbox4,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checkbox4=l),disabled:""},{default:h((()=>[_])),_:1},8,["modelValue"])])),_:1})])),_:1}),x(V,{title:"自定义尺寸"},{default:h((()=>[x(k,null,{default:h((()=>[x(m,{modelValue:e.checkbox5,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checkbox5=l),"icon-size":"25"},{default:h((()=>[s])),_:1},8,["modelValue"])])),_:1}),x(k,null,{default:h((()=>[x(m,{modelValue:e.checkbox6,"onUpdate:modelValue":l[6]||(l[6]=l=>e.checkbox6=l),"icon-size":"10"},{default:h((()=>[U])),_:1},8,["modelValue"])])),_:1})])),_:1}),x(V,{title:"自定义图标"},{default:h((()=>[x(k,null,{default:h((()=>[x(m,{modelValue:e.checkbox7,"onUpdate:modelValue":l[7]||(l[7]=l=>e.checkbox7=l),"icon-name":"checklist","icon-active-name":"checklist"},{default:h((()=>[y])),_:1},8,["modelValue"])])),_:1})])),_:1}),x(V,{title:"点击触发change事件"},{default:h((()=>[x(k,null,{default:h((()=>[x(m,{modelValue:e.checkbox8,"onUpdate:modelValue":l[8]||(l[8]=l=>e.checkbox8=l),onChange:e.changeBox3},{default:h((()=>[v])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),x(V,{title:"checkboxGroup使用"},{default:h((()=>[x(k,null,{default:h((()=>[x(F,{modelValue:e.checkboxgroup1,"onUpdate:modelValue":l[13]||(l[13]=l=>e.checkboxgroup1=l)},{default:h((()=>[x(m,{modelValue:e.checkbox9,"onUpdate:modelValue":l[9]||(l[9]=l=>e.checkbox9=l),label:"1",style:{margin:"2px 20px 15px 0"}},{default:h((()=>[C])),_:1},8,["modelValue"]),x(m,{modelValue:e.checkbox10,"onUpdate:modelValue":l[10]||(l[10]=l=>e.checkbox10=l),label:"2"},{default:h((()=>[B])),_:1},8,["modelValue"]),x(m,{modelValue:e.checkbox11,"onUpdate:modelValue":l[11]||(l[11]=l=>e.checkbox11=l),label:"3",style:{margin:"2px 20px 0 0"}},{default:h((()=>[j])),_:1},8,["modelValue"]),x(m,{modelValue:e.checkbox12,"onUpdate:modelValue":l[12]||(l[12]=l=>e.checkbox12=l),label:"4"},{default:h((()=>[A])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),x(k,null,{default:h((()=>[G,x("div",null,b(e.checkboxgroup1),1)])),_:1})])),_:1}),x(V,{title:"checkboxGroup禁用"},{default:h((()=>[x(k,null,{default:h((()=>[x(F,{modelValue:e.checkboxgroup1,"onUpdate:modelValue":l[18]||(l[18]=l=>e.checkboxgroup1=l),disabled:""},{default:h((()=>[x(m,{modelValue:e.checkbox9,"onUpdate:modelValue":l[14]||(l[14]=l=>e.checkbox9=l),label:"1",style:{margin:"2px 20px 15px 0"}},{default:h((()=>[z])),_:1},8,["modelValue"]),x(m,{modelValue:e.checkbox10,"onUpdate:modelValue":l[15]||(l[15]=l=>e.checkbox10=l),label:"2"},{default:h((()=>[$])),_:1},8,["modelValue"]),x(m,{modelValue:e.checkbox11,"onUpdate:modelValue":l[16]||(l[16]=l=>e.checkbox11=l),label:"3",style:{margin:"2px 20px 0 0"}},{default:h((()=>[D])),_:1},8,["modelValue"]),x(m,{modelValue:e.checkbox12,"onUpdate:modelValue":l[17]||(l[17]=l=>e.checkbox12=l),label:"4"},{default:h((()=>[S])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1})])),_:1}),x(V,{title:"checkboxGroup 全选/取消"},{default:h((()=>[x(k,null,{default:h((()=>[x(F,{modelValue:e.checkboxgroup3,"onUpdate:modelValue":l[21]||(l[21]=l=>e.checkboxgroup3=l),ref:"group",onChange:e.changeBox4},{default:h((()=>[x(m,{modelValue:e.checkbox15,"onUpdate:modelValue":l[19]||(l[19]=l=>e.checkbox15=l),label:"1",style:{margin:"0 20px 0 0"}},{default:h((()=>[T])),_:1},8,["modelValue"]),x(m,{modelValue:e.checkbox16,"onUpdate:modelValue":l[20]||(l[20]=l=>e.checkbox16=l),label:"2"},{default:h((()=>[q])),_:1},8,["modelValue"])])),_:1},8,["modelValue","onChange"])])),_:1}),x(k,null,{default:h((()=>[x(H,{type:"primary",onClick:l[22]||(l[22]=l=>e.toggleAll(!0)),style:{margin:"0 20px 0 0"}},{default:h((()=>[w])),_:1}),x(H,{type:"info",onClick:l[23]||(l[23]=l=>e.toggleAll(!1))},{default:h((()=>[E])),_:1})])),_:1})])),_:1})])}}}}));