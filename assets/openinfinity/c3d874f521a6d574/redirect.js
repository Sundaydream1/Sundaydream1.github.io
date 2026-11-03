"use strict";(()=>{var t=document.body.dataset.to;if(t){let o=new URL(t,location.href);o.origin===location.origin&&location.replace(`${o.pathname}${o.search}${location.hash}`)}})();
