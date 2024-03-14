"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[375],{64345:function(e,t,n){var i=n(85893),r=n(87357),o=n(15861),a=n(55891);t.Z=e=>{let{height:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{sx:{position:"absolute",animation:"textFadeIn 125ms ease-in","@keyframes textFadeIn":{from:{opacity:0},to:{opacity:1}},animationDuration:"250ms"},children:(0,i.jsx)(o.Z,{variant:"h3",fontWeight:"bold",children:"Data Unavailable"})}),(0,i.jsx)(a.Z,{height:t,animate:!1})]})}},55891:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(85893),r=n(12657),o=n(2734),a=n(87357),l=n(15861);function s(e){let{width:t,height:n,message:s,animate:u=!0}=e,c=(0,o.Z)(),d=n/2+45,m="";if(d)for(let e=0;e<10;e++)m+="M ".concat(416*e," ").concat(d," Q ").concat(416*e+104," ").concat(d-70,", ").concat(416*e+208," ").concat(d," T ").concat(416*e+416," ").concat(d);return(0,i.jsxs)(a.Z,{width:"100%",overflow:"hidden",position:"relative",children:[(0,i.jsx)(a.Z,{sx:{animation:u?"wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite":"unset",display:"flex","@keyframes wave":{"0%":{marginLeft:0},"100%":{marginLeft:"-832px"}}},children:(0,i.jsx)("svg",{"data-cy":"missing-chart",width:t||"100%",height:n,style:{minWidth:"100%",fontSize:12,fontWeight:400},children:(0,i.jsx)("path",{d:m,stroke:c.palette.grey[500],fill:"transparent",strokeWidth:"2"})})}),(0,i.jsxs)(a.Z,{display:"flex",flexDirection:"row",alignItems:"center",position:"absolute",bottom:"10px",children:[s&&(0,i.jsx)(r.Z,{color:"secondary"}),(0,i.jsx)(l.Z,{sx:{ml:2},color:"text.primary",children:s})]})]})}},9789:function(e,t,n){var i=n(85893),r=n(2734),o=n(87357),a=n(15861),l=n(98396),s=n(55414),u=n(32594),c=n(98649),d=n(89163),m=n(26978),h=n(67294),f=n(69794),v=n(55891),g=n(56648),p=n(99599),x=n(69926),y=n(64345),k=n(22839),j=n(20821),Z=n(49925),w=n(9358);let O={time:0,value:0},M=e=>{var t,n,i,r;let{height:o,values:a,frequency:s,timeWindow:c}=e,d=null!==(i=null==a?void 0:a[0])&&void 0!==i?i:O,v=null!==(r=null==a?void 0:a[a.length-1])&&void 0!==r?r:O,g=Math.max(o-j.nO,0),p=Math.max(g-j.aX.top-j.aX.bottom,0),x=(0,h.useRef)(),[y,k]=(0,h.useState)((null==x?void 0:null===(t=x.current)||void 0===t?void 0:t.offsetWidth)||0),[w,M]=(0,h.useState)(v),b=(0,h.useMemo)(()=>({time:v.time,value:a.reduce((e,t)=>e+t.value,0),isTotal:!0}),[v]);(0,h.useEffect)(()=>{M(b)},[v]),(0,h.useEffect)(()=>{if(!y){var e,t;k(null!==(t=null==x?void 0:null===(e=x.current)||void 0===e?void 0:e.offsetWidth)&&void 0!==t?t:y)}},[null==x?void 0:null===(n=x.current)||void 0===n?void 0:n.offsetWidth]),(0,h.useEffect)(()=>{function e(){var e,t;k(null!==(t=null==x?void 0:null===(e=x.current)||void 0===e?void 0:e.offsetWidth)&&void 0!==t?t:y)}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let D=(0,h.useMemo)(()=>(0,m.tiA)().domain(a.map(e=>e.time.toString())).range([0,y]).padding(.4),[d.time,v.time,y]),S=(0,h.useMemo)(()=>(0,m.BYU)().domain((0,Z.V)(null!=a?a:[],"bar")).range([p,0]),[a,p]),W=(0,h.useMemo)(()=>e=>D(e.time.toString()),[D]),E=(0,h.useMemo)(()=>e=>S(e.value),[S]),F=(0,l.Z)(e=>e.breakpoints.down("sm")),[L,T,A]=(0,h.useMemo)(()=>{let e=(v.time.valueOf()-d.time.valueOf())/24,t=new Date((d.time.valueOf()+e)*1e3),n=new Date((v.time.valueOf()-e)*1e3),i=s===j.wF.DAY?{timeZone:"UTC"}:{},r=s===j.wF.DAY?(0,j.Zd)(void 0,i):(0,j.sQ)();switch(c){case f.UB.HOUR:var o;return[(0,j.OF)(),(0,j.sQ)(),(null!==(o=m.rzb.every(5))&&void 0!==o?o:m.rzb).range(t,n,F?4:2).map(e=>e.valueOf()/1e3).map(e=>e.toString())];case f.UB.DAY:return[(0,j.OF)(),(0,j.sQ)(),m.lME.range(t,n,F?8:4).map(e=>e.valueOf()/1e3).map(e=>e.toString())];case f.UB.WEEK:return[(0,j.wc)(F,void 0,i),r,(s===j.wF.HOUR?m.rr1:m.AN4).range(t,n,1).map(e=>e.valueOf()/1e3).map(e=>e.toString())];case f.UB.MONTH:return[(0,j.Te)(F,void 0,i),r,(s===j.wF.HOUR?m.rr1:m.AN4).range(t,n,7).map(e=>e.valueOf()/1e3).map(e=>e.toString())];default:let l=m.meP.range(t,n,F?2:1).map(e=>e.valueOf()/1e3).map(e=>{if("WEEK"===s){var t,n;return null!==(n=null===(t=a.find(t=>t.time>=e))||void 0===t?void 0:t.time)&&void 0!==n?n:e}return e}).map(e=>e.toString());return[(0,j.v4)(F||l.length>4,void 0,i),r,l]}},[v.time,s,F,d.time,c]),[U,z]=(0,h.useState)(null),Y=.75*y,R=(0,j.YD)(d.value,w.value),H=(0,j.oW)(R),N=(0,j.y7)(R),I=function(e){let t=e.domain(),n=e(t[0]),i=e.step();return function(e){return t[Math.max(0,Math.min(Math.floor((e-n)/i),t.length-1))]}}(D),B=D.bandwidth();return{ref:x,delta:R,graphHeight:g,displayValue:w,formattedDelta:H,handleHover:(0,h.useCallback)(e=>{if(!a)return;let{x:t}=(0,u.Z)(e)||{x:0},n=I(t),i=(0,m.b4o)(a.map(e=>e.time),n,1),r=a[i-1],o=a[i],l=r;(null==o?void 0:o.time)&&(l=n.valueOf()-r.time.valueOf()>o.time.valueOf()-n.valueOf()?o:r),l&&(z(D(l.time.toString())+Math.floor(B/2)),M(l))},[D,a]),resetDisplay:(0,h.useCallback)(()=>{z(null),M(b)},[z,M,b]),getX:W,getY:E,crosshair:U,timeScale:D,tickFormatter:L,ticks:A,crosshairAtEdge:!!U&&U>Y,crosshairDateFormatter:T,rdScale:S,width:y,graphInnerHeight:p,barWidth:B,arrow:N}};t.Z=e=>{let{height:t=j.Hx,values:n,frequency:l,timeWindow:u,isLoading:m=!1,showChart:f=!0,priceFormatter:Z=k.T4,hideBottomAxis:O=!1}=e,b=(0,r.Z)(),{scale:D}=(0,x.q_)({from:{scale:0},to:{scale:1}}),S=(0,x.q)(c.Z),W=(0,h.useMemo)(()=>{if(!w.Qs[l]||!n.length)return n;let e=[],t=0;for(let i=n[0].time;i<=n[n.length-1].time;i+=w.Qs[l])n[t].time===i?(e.push(n[t]),t++):e.push({time:i,value:0});return e},[l,n]),{displayValue:E,ref:F,graphHeight:L,handleHover:T,resetDisplay:A,getX:U,getY:z,crosshair:Y,timeScale:R,tickFormatter:H,ticks:N,crosshairAtEdge:I,crosshairDateFormatter:B,rdScale:V,width:X,graphInnerHeight:C,barWidth:P,arrow:Q}=M({height:t,values:W,frequency:l,timeWindow:u});return(0,i.jsx)(o.Z,{width:"100%",height:"100%",children:f?(0,i.jsxs)(i.Fragment,{children:[E&&!m&&(0,i.jsx)(o.Z,{sx:{position:"absolute",animation:"textFadeIn 125ms ease-in","@keyframes textFadeIn":{from:{opacity:0},to:{opacity:1}},animationDuration:"250ms"},children:(0,i.jsx)(a.Z,{fontSize:20,fontWeight:500,mb:2,children:Z(null==E?void 0:E.value)})}),(0,i.jsx)("div",{style:{width:"100%"},ref:F}),m?(0,i.jsx)(v.Z,{height:L,message:"Loading..."}):(0,i.jsx)("div",{style:{width:"100%",height:L},children:(0,i.jsxs)("svg",{"data-cy":"price-chart",width:"100%",height:L,style:{minWidth:"100%"},children:[(0,i.jsx)(p.Z,{top:j.aX.top,children:W.map((e,t)=>{var n;let r=U(e),o=C-(null!==(n=z(e))&&void 0!==n?n:0);return(0,i.jsx)(S,{x:r,y:D.to(e=>C-e*o),height:D.to(e=>e*o),width:P,fill:b.palette.primary.main},"bar-".concat(t))})}),null!==Y?(0,i.jsxs)("g",{children:[(0,i.jsx)(s.Z,{scale:R,stroke:b.palette.custom.dividerGrey,tickFormat:H,tickStroke:b.palette.custom.grey,tickLength:4,hideTicks:!0,tickTransform:"translate(0 -5)",tickValues:N,top:L-1,tickLabelProps:()=>({fill:b.palette.custom.grey,fontSize:12,textAnchor:"middle",transform:"translate(0 -24)"})}),(0,i.jsx)("text",{x:Y+(I?-4:4),y:j.aX.crosshair+10,textAnchor:I?"end":"start",fontSize:12,fill:b.palette.custom.grey,children:B(E.time)}),(0,i.jsx)(d.Z,{from:{x:Y,y:j.aX.crosshair},to:{x:Y,y:L-j.aX.bottom},stroke:b.palette.custom.grey,strokeWidth:1,pointerEvents:"none",strokeDasharray:"4,4"}),(0,i.jsx)(g.Z,{left:Y,top:V(E.value)+j.aX.top,size:50,fill:b.palette.primary.main,stroke:b.palette.custom.grey,strokeWidth:.5})]}):(0,i.jsx)(s.Z,{hideAxisLine:O,scale:R,stroke:b.palette.custom.dividerGrey,tickFormat:H,tickLength:4,tickTransform:"translate(0 -5)",tickValues:N,top:L-1,tickLabelProps:()=>({fill:b.palette.custom.grey,fontSize:12,textAnchor:"middle",transform:"translate(0 -24)"})}),!X&&(0,i.jsx)("line",{x1:0,y1:L-1,x2:"100%",y2:L-1,fill:"transparent",shapeRendering:"crispEdges",stroke:b.palette.custom.dividerGrey,strokeWidth:1}),(0,i.jsx)("rect",{x:0,y:0,width:X,height:L,fill:"transparent",onTouchStart:T,onTouchMove:T,onMouseMove:T,onMouseLeave:A})]})})]}):(0,i.jsx)(y.Z,{height:t})})}},20821:function(e,t,n){n.d(t,{wF:function(){return W},Hx:function(){return b},aX:function(){return D},nO:function(){return S},YD:function(){return L},sQ:function(){return Y},ZP:function(){return V},oW:function(){return T},y7:function(){return A},OF:function(){return z},Te:function(){return H},v4:function(){return I},Zd:function(){return N},wc:function(){return B}});var i=n(85893),r=n(2734),o=n(87357),a=n(15861),l=n(98396),s=n(55414),u=n(32594),c=n(26978),d=n(67294),m=n(69794),h=n(55891),f=n(23618),v=n(60047),g=n(56648),p=n(89163),x=n(64345),y=n(49925),k=n(22839),j=n(99599),Z=n(19856),w=n(69926);let O={duration:800,easing:c.p4T};var M=d.memo(function(e){let{data:t,getX:n,getY:o,marginTop:a,curve:l,color:s,strokeWidth:u,onRest:c}=e,m=(0,d.useRef)(null),[h,f]=(0,d.useState)(0),[v,g]=(0,d.useState)(!1),[p,x]=(0,d.useState)(!1),y=(0,w.q_)({frame:v?0:1,config:O,onRest:()=>{g(!1),x(!0),null==c||c()},onResolve:()=>{}});(0,d.useEffect)(()=>{if(m.current){let e=m.current.getTotalLength();e!==h&&f(e),!(e>0)||v||p||g(!0)}});let k=(0,r.Z)(),M=null!=s?s:k.palette.primary.main;return(0,i.jsx)(j.Z,{top:a,children:(0,i.jsx)(Z.Z,{curve:l,x:n,y:o,children:e=>{let{path:n}=e,r=n(t)||"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w.q.path,{d:r,ref:m,strokeWidth:u,strokeOpacity:p?1:0,fill:"none",stroke:M}),v&&0!==h&&(0,i.jsx)(w.q.path,{d:r,strokeWidth:u,fill:"none",stroke:M,strokeDashoffset:y.frame.to(e=>e*h),strokeDasharray:h})]})}})})});let b=400,D={top:70,bottom:48,crosshair:72},S=0,W={FIVEMIN:"FIVEMIN",DAY:"DAY",HOUR:"HOUR"},E={time:0,value:0},F=e=>{var t,n,i,r;let{height:o,values:a,frequency:s,timeWindow:h}=e,f=null!==(i=null==a?void 0:a[0])&&void 0!==i?i:E,v=null!==(r=null==a?void 0:a[a.length-1])&&void 0!==r?r:E,g=Math.max(o-S,0),p=Math.max(g-D.top-D.bottom,0),x=(0,d.useRef)(),[k,j]=(0,d.useState)((null==x?void 0:null===(t=x.current)||void 0===t?void 0:t.offsetWidth)||0),[Z,w]=(0,d.useState)(f);(0,d.useEffect)(()=>{w(v)},[v]),(0,d.useEffect)(()=>{if(!k){var e,t;j(null!==(t=null==x?void 0:null===(e=x.current)||void 0===e?void 0:e.offsetWidth)&&void 0!==t?t:k)}},[null==x?void 0:null===(n=x.current)||void 0===n?void 0:n.offsetWidth]),(0,d.useEffect)(()=>{function e(){var e,t;j(null!==(t=null==x?void 0:null===(e=x.current)||void 0===e?void 0:e.offsetWidth)&&void 0!==t?t:k)}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let O=(0,d.useMemo)(()=>(0,c.BYU)().domain([f.time,v.time]).range([0,k]),[f.time,v.time,k]),M=(0,d.useMemo)(()=>(0,c.BYU)().domain((0,y.V)(null!=a?a:[])).range([p,0]),[a,p]),b=s===W.HOUR?1:.9,F=(0,d.useMemo)(()=>e=>O(e.time),[O]),U=(0,d.useMemo)(()=>e=>M(e.value),[M]),R=(0,d.useMemo)(()=>c.YY7.tension(b),[b]),V=(0,l.Z)(e=>e.breakpoints.down("sm")),[X,C,P]=(0,d.useMemo)(()=>{let e=(v.time.valueOf()-f.time.valueOf())/24,t=new Date((f.time.valueOf()+e)*1e3),n=new Date((v.time.valueOf()-e)*1e3),i=s===W.DAY?{timeZone:"UTC"}:{},r=s===W.DAY?N(void 0,i):Y();switch(h){case m.UB.HOUR:var o;return[z(),Y(),(null!==(o=c.rzb.every(5))&&void 0!==o?o:c.rzb).range(t,n,V?4:2).map(e=>e.valueOf()/1e3)];case m.UB.DAY:return[z(),Y(),c.lME.range(t,n,V?8:4).map(e=>e.valueOf()/1e3)];case m.UB.WEEK:return[B(V,void 0,i),r,(s===W.HOUR?c.rr1:c.AN4).range(t,n,1).map(e=>e.valueOf()/1e3)];case m.UB.MONTH:return[H(V,void 0,i),r,(s===W.HOUR?c.rr1:c.AN4).range(t,n,7).map(e=>e.valueOf()/1e3)];default:let a=c.meP.range(t,n,V?2:1).map(e=>e.valueOf()/1e3);return[I(V||a.length>4,void 0,i),r,a]}},[v.time,s,V,f.time,h]),[Q,G]=(0,d.useState)(null),_=.75*k,q=L(f.value,Z.value),K=T(q),J=A(q);return{ref:x,delta:q,graphHeight:g,displayValue:Z,formattedDelta:K,handleHover:(0,d.useCallback)(e=>{if(!a)return;let{x:t}=(0,u.Z)(e)||{x:0},n=O.invert(t),i=(0,c.b4o)(a.map(e=>e.time),n,1),r=a[i-1],o=a[i],l=r;(null==o?void 0:o.time)&&(l=n.valueOf()-r.time.valueOf()>o.time.valueOf()-n.valueOf()?o:r),l&&(G(O(l.time)),w(l))},[O,a]),resetDisplay:(0,d.useCallback)(()=>{G(null),w(v)},[G,w,v]),getX:F,getY:U,curve:R,crosshair:Q,timeScale:O,tickFormatter:X,ticks:P,crosshairAtEdge:!!Q&&Q>_,crosshairDateFormatter:C,rdScale:M,width:k,arrow:J}};function L(e,t){return(t/e-1)*100}function T(e){return null==e||e===1/0||isNaN(e)?"-":(0>Math.sign(e)?"-":"+")+Math.abs(e).toFixed(2)+"%"}function A(e){if(!(null==e||e===1/0||isNaN(e)))return 0>Math.sign(e)?(0,i.jsx)(v.Z,{fontSize:"inherit",color:"error"}):(0,i.jsx)(f.Z,{fontSize:"inherit",color:"success"})}let U=(e,t,n)=>new Date(1e3*e.valueOf()).toLocaleTimeString(t,{...n}),z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",t=arguments.length>1?arguments[1]:void 0;return n=>U(n,e,{hour:"numeric",minute:"numeric",hour12:!0,...t})},Y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",t=arguments.length>1?arguments[1]:void 0;return n=>U(n,e,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0,...t})},R=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n=arguments.length>2?arguments[2]:void 0;return new Date(1e3*e.valueOf()).toLocaleDateString(t,{...n})},H=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n=arguments.length>2?arguments[2]:void 0;return i=>R(i,t,{month:e?"short":"long",day:"numeric",...n})},N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",t=arguments.length>1?arguments[1]:void 0;return n=>R(n,e,{month:"short",year:"numeric",day:"numeric",...t})},I=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n=arguments.length>2?arguments[2]:void 0;return i=>{let r=new Date(1e3*i.valueOf());return 1!==r.getDate()&&(r=r.getDate()>=15?new Date(r.getFullYear(),r.getMonth()+1,1):new Date(r.getFullYear(),r.getMonth(),1)),r.toLocaleDateString(t,{month:e?"short":"long",...n})}},B=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n=arguments.length>2?arguments[2]:void 0;return i=>R(i,t,{weekday:e?"short":"long",...n})};var V=e=>{let{height:t=b,values:n,frequency:l,timeWindow:u,isLoading:c=!1,showChart:d=!0,priceFormatter:m=k.T4,hideBottomAxis:f=!1,onRest:v}=e,y=(0,r.Z)(),{displayValue:j,ref:Z,delta:w,graphHeight:O,formattedDelta:S,handleHover:W,resetDisplay:E,getX:L,getY:T,curve:A,crosshair:U,timeScale:z,tickFormatter:Y,ticks:R,crosshairAtEdge:H,crosshairDateFormatter:N,rdScale:I,width:B,arrow:V}=F({height:t,values:n,frequency:l,timeWindow:u});return(0,i.jsx)(o.Z,{width:"100%",height:"100%",children:d?(0,i.jsxs)(i.Fragment,{children:[j&&!c&&(0,i.jsxs)(o.Z,{sx:{position:"absolute",animation:"textFadeIn 125ms ease-in","@keyframes textFadeIn":{from:{opacity:0},to:{opacity:1}},animationDuration:"250ms"},children:[(0,i.jsx)(a.Z,{fontSize:20,fontWeight:500,mb:2,children:m(null==j?void 0:j.value)}),(0,i.jsxs)(o.Z,{display:"flex",flexDirection:"row",alignItems:"center",children:[(0,i.jsx)(a.Z,{color:0>Math.sign(w)?"error.main":"success.main",children:S}),V]})]}),(0,i.jsx)("div",{style:{width:"100%"},ref:Z}),c?(0,i.jsx)(h.Z,{height:O,message:"Loading..."}):(0,i.jsx)("div",{style:{width:"100%",height:O},children:(0,i.jsxs)("svg",{"data-cy":"price-chart",width:"100%",height:O,style:{minWidth:"100%"},children:[(0,i.jsx)(M,{data:n,getX:L,getY:T,marginTop:D.top,curve:A,strokeWidth:2,onRest:v}),null!==U?(0,i.jsxs)("g",{children:[(0,i.jsx)(s.Z,{scale:z,stroke:y.palette.custom.dividerGrey,tickFormat:Y,tickStroke:y.palette.custom.grey,tickLength:4,hideTicks:!0,tickTransform:"translate(0 -5)",tickValues:R,top:O-1,tickLabelProps:()=>({fill:y.palette.custom.grey,fontSize:12,textAnchor:"middle",transform:"translate(5 -24)"})}),(0,i.jsx)("text",{x:U+(H?-4:4),y:D.crosshair+10,textAnchor:H?"end":"start",fontSize:12,fill:y.palette.custom.grey,children:N(j.time)}),(0,i.jsx)(p.Z,{from:{x:U,y:D.crosshair},to:{x:U,y:O},stroke:y.palette.custom.grey,strokeWidth:1,pointerEvents:"none",strokeDasharray:"4,4"}),(0,i.jsx)(g.Z,{left:U,top:I(j.value)+D.top,size:50,fill:y.palette.primary.main,stroke:y.palette.custom.grey,strokeWidth:.5})]}):(0,i.jsx)(s.Z,{hideAxisLine:f,scale:z,stroke:y.palette.custom.dividerGrey,tickFormat:Y,tickLength:4,tickTransform:"translate(0 -5)",tickValues:R,top:O-1,tickLabelProps:()=>({fill:y.palette.custom.grey,fontSize:12,textAnchor:"middle",transform:"translate(5 -24)"})}),!B&&(0,i.jsx)("line",{x1:0,y1:O-1,x2:"100%",y2:O-1,fill:"transparent",shapeRendering:"crispEdges",stroke:y.palette.custom.dividerGrey,strokeWidth:1}),(0,i.jsx)("rect",{x:0,y:0,width:B,height:O,fill:"transparent",onTouchStart:W,onTouchMove:W,onMouseMove:W,onMouseLeave:E})]})})]}):(0,i.jsx)(x.Z,{height:t})})}},49925:function(e,t,n){n.d(t,{V:function(){return i}}),n(85893),n(26978),n(67294);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"line",n=e.map(e=>e.value);return["bar"===t?0:Math.min(...n),Math.max(...n)]}},86877:function(e,t,n){n.d(t,{Z:function(){return i}});function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>!!e,n=e.findIndex(t);return e.slice(n,e.length)}}}]);