window.Tilda=window.Tilda||{},function(){function e(){var e=navigator.userAgent.toLowerCase(),e=-1!==e.indexOf("msie")&&parseInt(e.split("msie")[1]);8!==e&&9!==e||(a=document.querySelectorAll(".t-btn"),Array.prototype.forEach.call(a,function(e){var t=e.getAttribute("href");e.querySelector("table")&&t&&-1===t.indexOf("#popup:")&&-1===t.indexOf("#price:")&&e.addEventListener("click",function(e){var t=e.target.getAttribute("href");e.preventDefault(),window.location.href=t})}));try{var t=document.getElementById("allrecords"),r=t?t.getAttribute("data-tilda-cookie"):null;t&&"no"===r||Tilda.saveUTM()}catch(e){}var a=document.querySelectorAll(".r");function i(e){if(e.target.closest("a.js-click-stat")||e.target.closest(".js-click-zero-stat")){var t=e.target.closest("a.js-click-stat")||e.target.closest(".js-click-zero-stat"),r=t.getAttribute("data-tilda-event-name"),a=t.textContent,d=t.getAttribute("href")||"",c=t.getAttribute("target");if(r||(r="/tilda/click/"+((t=t.closest(".r"))?t.getAttribute("id"):"")+"/?url="+d),Tilda.sendEventToStatistics(r,a),"http"===d.substring(0,4))return window.setTimeout(function(){var e,t="",r="";if("_blank"===c){if(-1!==d.indexOf("?")&&(d=(t=d.split("?"))[0],-1!==(t=t[1]).indexOf("#")&&(t=t.split("#"),d=d+"#"+t[1],t=t[0]),t=t.split("&")),document.getElementById("tildaredirectform")?(document.getElementById("tildaredirectform").setAttribute("method","GET"),document.getElementById("tildaredirectform").setAttribute("action",d)):document.body.insertAdjacentHTML("beforeend",'<form id="tildaredirectform" target="_blank" method="GET" action="'+d+'" style="display:none;"></form>'),r="",0<t.length)for(var a in t)(e=t[a].split("="))&&0<e.length&&(r+='<input type="hidden" name="'+e[0]+'" value="'+(e[1]||"")+'">');var i=document.getElementById("tildaredirectform");i&&(i.innerHTML=r,i.submit())}else window.location.href=d},300),e.preventDefault(),!1}}Array.prototype.forEach.call(a,function(e){e.removeEventListener("click",i),e.addEventListener("click",i)});a=document.querySelectorAll("input.js-amount");Array.prototype.forEach.call(a,function(e){var t=(t=e.value).replace(/,/g,".");t=parseFloat(t.replace(/[^0-9\.]/g,"")),e.value=t})}Tilda.sendEcommerceEvent=function(e,t){if(void 0===t||0===t.length)return!1;if(void 0===e||"add"!==e&&"remove"!==e&&"purchase"!==e&&"detail"!==e)return!1;for(var r,a,i,d="",c=0,o=[],n="",m="",l="",u=0;u<t.length;u++){""<d&&(d+=", "),d+=(i=t[u]).name,c+=i.price,a="",void 0!==i.options&&0<i.options.length&&Array.prototype.forEach.call(i.options,function(e){a+=e.option+": "+e.variant+"; "});var s={name:i.name,price:i.price,variant:a,quantity:1};i.id&&0<i.id&&(id=i.id,s.id=i.id),i.uid&&0<i.uid&&(m=i.uid,s.uid=i.uid),i.recid&&0<i.recid&&(n=i.recid,s.recid=i.recid),i.lid&&0<i.lid&&(l=i.lid,s.lid=i.lid),i.sku&&0<i.sku&&(s.sku=i.sku),o[o.length]=s}"add"!==e&&"remove"!==e||(r="/tilda/cart/"+e+"/",0<n&&(r+=""+n),0<m?r+="-u"+m:0<l&&(r+="-"+l)),"detail"===e&&(r="/tilda/product/detail/",0<m?r+=m+"/":(0<n&&(r+="r"+n),0<l&&(r+="-l"+l))),"purchase"===e&&(r="/tilda/rec"+n+"/payment/"),(s={ecommerce:{}}).ecommerce[e]={products:o},Tilda.sendEventToStatistics(r,d,s,c)},Tilda.sendEventToStatistics=function(e,t,r,a){var i="/"===e.substring(0,1),d=[];(w=document.getElementById("allrecords"))&&(m=null!==w.getAttribute("data-fb-event")?w.getAttribute("data-fb-event"):void 0!==$("#allrecords").data("fb-event")?$("#allrecords").data("fb-event"):null);var c=!(!m||"nosend"!==m),o=w?w.getAttribute("data-vk-event"):null;w&&(o=null!==w.getAttribute("data-vk-event")?w.getAttribute("data-vk-event"):void 0!==$("#allrecords").data("vk-event")?$("#allrecords").data("vk-event"):null);var n,m=!(!o||"nosend"!==o),l="",o=document.querySelector(".t706"),l=w.getAttribute("data-tilda-currency")?w.getAttribute("data-tilda-currency"):o&&o.getAttribute("data-project-currency-code")?o.getAttribute("data-project-currency-code"):"RUB";if(r=r||window.location.href,0<(a=a?parseFloat(a):0))if(window.dataLayer||(window.dataLayer=[]),-1!==e.indexOf("/tilda/")&&-1!==e.indexOf("/payment/")&&window.tildaForm&&""<window.tildaForm.orderIdForStat)r={ecommerce:{purchase:{actionField:{id:window.tildaForm.orderIdForStat,revenue:window.tildaForm.amountForStat},products:window.tildaForm.arProductsForStat}}},window.tildaForm.tildapayment&&window.tildaForm.tildapayment.promocode&&(r.ecommerce.purchase.actionField.coupon=window.tildaForm.tildapayment.promocode),r.event="purchase";else if(r&&r.ecommerce&&(r.ecommerce.add&&r.ecommerce.add.products?d=r.ecommerce.add.products:r.ecommerce.remove&&r.ecommerce.remove.products?d=r.ecommerce.remove.products:r.ecommerce.detail&&r.ecommerce.detail.products&&(d=r.ecommerce.detail.products),d&&0<d.length)){for(var u=0;u<d.length;u++)d[u].id||(d[u].sku?d[u].id=d[u].sku:d[u].uid?d[u].id=d[u].uid:d[u].recid&&d[u].lid&&(d[u].id=d[u].recid+"_"+d[u].lid));r.ecommerce.add&&r.ecommerce.add.products?(r.ecommerce.add.products=d,r.event="addToCart"):r.ecommerce.remove&&r.ecommerce.remove.products?(r.ecommerce.remove.products=d,r.event="removeFromCart"):r.ecommerce.detail&&r.ecommerce.detail.products?(r.ecommerce.detail.products=d,r.event="viewProduct"):(i?(r.event="pageView",r.eventAction=e):r.event=e,r.title=t,r.value=a)}void 0!==window.dataLayer&&(i?0<a?r&&r.ecommerce?window.dataLayer.push(r):window.dataLayer.push({event:"pageView",eventAction:e,title:t,value:a,product:r}):window.dataLayer.push({event:"pageView",eventAction:e,title:t,referer:r}):r&&r.ecommerce?window.dataLayer.push(r):window.dataLayer.push({event:e,eventAction:t,value:a,referer:r}));try{window.gtagTrackerID&&"gtag"===window.mainTracker&&(i?r&&r.event?"purchase"===r.event?gtag("event","purchase",{transaction_id:r.ecommerce.purchase.actionField.id,value:parseFloat(a).toFixed(2),currency:l,items:r.ecommerce.purchase.products}):"addToCart"===r.event&&r.ecommerce.add?gtag("event","add_to_cart",{items:r.ecommerce.add.products}):"removeFromCart"===r.event&&r.ecommerce.remove?gtag("event","remove_from_cart",{items:r.ecommerce.remove.products}):"viewProduct"===r.event&&r.ecommerce.detail&&gtag("event","view_item",{items:r.ecommerce.detail.products}):gtag("config",window.gtagTrackerID,{page_title:t,page_path:e}):gtag("event",e,{event_category:"tilda",event_label:t,value:a}))}catch(e){}if(window.ga&&"tilda"!==window.mainTracker&&"gtag"!==window.mainTracker)if(i)if(r&&r.event){try{if(window.Tilda.isLoadGAEcommerce||(window.Tilda.isLoadGAEcommerce=!0,ga("require","ec")),ga("set","currencyCode",l),"purchase"===r.event){for(var s=r.ecommerce.purchase.products.length,p=0;p<s;p++)g=r.ecommerce.purchase.products[p],ga("ec:addProduct",{id:g.id||p,name:g.name,price:parseFloat(g.price).toFixed(2),quantity:g.quantity});ga("ec:setAction","purchase",{id:r.ecommerce.purchase.actionField.id,revenue:parseFloat(a).toFixed(2)})}else if("addToCart"===r.event&&r.ecommerce.add){for(s=r.ecommerce.add.products.length,p=0;p<s;p++)g=r.ecommerce.add.products[p],ga("ec:addProduct",{id:g.id||p,name:g.name,price:parseFloat(g.price).toFixed(2),quantity:g.quantity});ga("ec:setAction","add")}else if("removeFromCart"===r.event&&r.ecommerce.remove){for(s=r.ecommerce.remove.products.length,p=0;p<s;p++)g=r.ecommerce.remove.products[p],ga("ec:addProduct",{id:g.id||p,name:g.name,price:parseFloat(g.price).toFixed(2),quantity:g.quantity});ga("ec:setAction","remove")}else if("viewProduct"===r.event&&r.ecommerce.detail){for(s=r.ecommerce.detail.products.length,p=0;p<s;p++)g=r.ecommerce.detail.products[p],ga("ec:addProduct",{id:g.id||p,name:g.name,price:parseFloat(g.price).toFixed(2),quantity:g.quantity});ga("ec:setAction","detail")}}catch(e){}ga("send",{hitType:"pageview",page:e,title:t,params:r})}else ga("send",{hitType:"pageview",page:e,title:t});else ga("send",{hitType:"event",eventCategory:"tilda",eventAction:e,eventLabel:t,eventValue:a});if(window.mainMetrikaId&&0<window.mainMetrikaId&&"function"==typeof ym&&(i?(n={title:t},0<a&&(n.params={order_price:a},l&&(n.params.currency=l)),ym(window.mainMetrikaId,"hit",e,n)):0<a?(n={order_price:a},l&&(n.currency=l),ym(window.mainMetrikaId,"reachGoal",e,n)):ym(window.mainMetrikaId,"reachGoal",e)),""<window.mainMetrika&&window[window.mainMetrika]&&(i?0<a?window[window.mainMetrika].hit(e,{title:t,order_price:a,params:r}):window[window.mainMetrika].hit(e,{title:t}):0<a?window[window.mainMetrika].reachGoal(e,{title:t,params:r,order_price:a}):window[window.mainMetrika].reachGoal(e,{title:t,referer:r})),void 0!==window.fbq&&!1==c)try{if(i)if(-1===e.indexOf("tilda/")||-1===e.indexOf("/payment/")&&-1===e.indexOf("/submitted/"))if(r&&r.event&&0<a)if("addToCart"===r.event&&r.ecommerce.add){for(var s=r.ecommerce.add.products.length,v=[],p=0;p<s;p++)g=r.ecommerce.add.products[p],v.push(g.id||g.uid||g.name);window.fbq("track","AddToCart",{content_ids:v,content_type:"product",value:a,currency:l})}else if("viewProduct"===r.event&&r.ecommerce.detail){for(s=r.ecommerce.detail.products.length,v=[],p=0;p<s;p++)g=r.ecommerce.detail.products[p],v.push(g.id||g.uid||g.name);window.fbq("track","ViewContent",{content_ids:v,content_type:"product",value:a,currency:l})}else e.indexOf("tilda/popup"),window.fbq("track","ViewContent",{content_name:t,content_category:e});else e.indexOf("tilda/popup"),window.fbq("track","ViewContent",{content_name:t,content_category:e});else 0<a&&l?window.fbq("track","InitiateCheckout",{content_name:t,content_category:e,value:a,currency:l}):window.fbq("track","Lead",{content_name:t,content_category:e});else window.fbq("track",e,{content_name:t,value:a})}catch(e){}if(void 0!==window.VK&&void 0!==window.VK.Retargeting&&!1==m)try{if(i){var w,g,f=(w=document.getElementById("allrecords"))?w.getAttribute("data-vk-price-list-id"):null,y=f&&parseInt(f)||0,f="",h=!1;if(r&&r.event)if(h={products:[],currency_code:"",total_price:0},"purchase"===r.event&&r.ecommerce.purchase)if(0<a&&0<y){h.currency_code=l;for(s=r.ecommerce.purchase.products.length,v=[],p=0;p<s;p++)g=r.ecommerce.purchase.products[p],h.products.push({id:g.id||g.uid||g.name,price:g.price||0}),h.total_price=a;f="init_checkout"}else f="t-purchase";else if("addToCart"===r.event&&r.ecommerce.add)if(0<a&&0<y){h.currency_code=l;for(s=r.ecommerce.add.products.length,v=[],p=0;p<s;p++)g=r.ecommerce.add.products[p],h.products.push({id:g.id||g.uid||g.name,price:g.price||0}),h.total_price=a;f="add_to_cart"}else f="t-add-to-cart",r.ecommerce.add[0]&&r.ecommerce.add[0].uid&&(f+="-"+r.ecommerce.add[0].uid);else if("viewProduct"===r.event&&r.ecommerce.detail)if(0<a&&0<y){h.currency_code=l;for(s=r.ecommerce.detail.products.length,v=[],p=0;p<s;p++)g=r.ecommerce.detail.products[p],h.products.push({id:g.id||g.uid||g.name,price:g.price||0}),h.total_price=a;f="view_product"}else f="t-view-product",r.ecommerce.detail[0]&&r.ecommerce.detail[0].uid&&(f+="-"+r.ecommerce.detail[0].uid);else if("removeFromCart"===r.event&&r.ecommerce.remmove)if(0<a&&0<y){h.currency_code=l;for(s=r.ecommerce.remove.products.length,v=[],p=0;p<s;p++)g=r.ecommerce.remove.products[p],h.products.push({id:g.id||g.uid||g.name,price:g.price||0}),h.total_price=a;f="remove_from_cart"}else f="t-remove-product",r.ecommerce.remove[0]&&r.ecommerce.remove[0].uid&&(f+="-"+r.ecommerce.remove[0].uid);else f=r.event;else f=-1!==e.indexOf("tilda/")&&-1!==e.indexOf("/payment/")?"t-purchase-"+e.replace("/tilda/","").replace("tilda/","").replace("/payment/",""):-1!==e.indexOf("tilda/")&&-1!==e.indexOf("/submitted/")?"t-lead-"+e.replace("/tilda/","").replace("tilda/","").replace("/submitted/",""):-1!==e.indexOf("tilda/popup")||-1!==e.indexOf("tilda/click")?"t-"+e.replace("/tilda/","").replace("/","-"):"t-"+e.replace("/","-");0<y&&h&&h.currency_code?(VK.Retargeting.Event("purchase"),VK.Retargeting.ProductEvent(y,f,h)):(VK.Retargeting.Event(f),"t-purchase"===f.substring(0,10)?VK.Goal("purchase"):"t-lead"===f.substring(0,6)&&VK.Goal("lead"))}else VK.Retargeting.Event(e)}catch(e){}"0"<window.mainMailruId&&(m=window._tmr||(window._tmr=[]),i?0<a?m.push({id:""+window.mainMailruId,type:"pageView",url:e,value:a,start:(new Date).getTime()}):m.push({id:""+window.mainMailruId,type:"pageView",url:e,start:(new Date).getTime()}):0<a?m.push({id:""+window.mainMailruId,type:"reachGoal",goal:e,value:a}):m.push({id:""+window.mainMailruId,type:"reachGoal",goal:e})),"function"==typeof window.tildastat&&(i?(0<e.indexOf("payment")&&-1<e.indexOf("tilda/form")&&(e=e.replace("tilda/form","tilda/rec")),window.tildastat("pageview",{page:e})):window.tildastat("pageview",{page:"/tilda/event/"+e}))},Tilda.saveUTM=function(){try{var e=window.location.href,t="",r="";if(-1!==e.toLowerCase().indexOf("utm_")&&"string"==typeof(t=(t=(e=e.toLowerCase()).split("?"))[1])){var a,i=t.split("&");for(a in i)"utm_"===i[a].split("=")[0].substring(0,4)&&(r=r+i[a]+"|||");0<r.length&&((t=new Date).setDate(t.getDate()+30),document.cookie="TILDAUTM="+encodeURIComponent(r)+"; path=/; expires="+t.toUTCString())}}catch(e){}},"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)}();
