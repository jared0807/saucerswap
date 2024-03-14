"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{18403:function(t,e,n){n.d(e,{D:function(){return d},x:function(){return l}});var o=n(31886),r=n(51115),a=n(70794),i=n(38776),s=n(91402),u=n(618),c=n(36576),p=n(48764).lW;let d=(t,e,n,o)=>{let d,m;return 1===t.pools.length?(m=[{type:"tuple",value:[r.hX.fromString(t.tokenPath[0].address).toSolidityAddress(),r.hX.fromString(t.tokenPath[1].address).toSolidityAddress(),e.quotient.toString(),t.pools[0].fee.toFixed(0),(null==o?void 0:o.toString())||"0"]}],d=n===s.YL.EXACT_INPUT?"quoteExactInputSingle":"quoteExactOutputSingle"):((0,i.Z)(void 0===o,"MULTIHOP_PRICE_LIMIT"),m=[{type:"bytes",value:l(t,n===s.YL.EXACT_OUTPUT)},{type:"uInt256",value:new a.Z(e.quotient.toString())}],d=n===s.YL.EXACT_INPUT?"quoteExactInput":"quoteExactOutput"),{callData:"0x"+p.from((0,c.rR)(u.mq,d,m)).toString("hex"),contractId:u.mq,tradeTypeFunctionName:d,quoteParams:m}};function l(t,e){let n=t.input.wrapped,{path:a,types:i}=t.pools.reduce((t,e,n)=>{let{inputToken:o,path:a,types:i}=t,s=e.token0.equals(o)?e.token1:e.token0;return 0===n?{inputToken:s,types:["address","uint24","address"],path:["0x"+r.hX.fromString(o.address).toSolidityAddress(),e.fee,"0x"+r.hX.fromString(s.address).toSolidityAddress()]}:{inputToken:s,types:[...i,"uint24","address"],path:[...a,e.fee,"0x"+r.hX.fromString(s.address).toSolidityAddress()]}},{inputToken:n,path:[],types:[]});return e?(0,o.pack)(i.reverse(),a.reverse()):(0,o.pack)(i,a)}},13217:function(t,e,n){n.d(e,{nj:function(){return w}});var o=n(51115),r=n(85945),a=n(70794),i=n(55703),s=n(29871),u=n(91402),c=n(618),p=n(17210),d=n(4002),l=n(36576),m=n(18403),g=n(49004),T=n(4878),y=n(80608),h=n(65074);let w=2e5,f=t=>{let{settings:e}=(0,g.r)(),n=(0,p.F$)(t.trade.inputAmount.currency.wrapped.address),r=(0,p.F$)(t.trade.outputAmount.currency.wrapped.address),T=t.trade.routes[0].protocol,h=(0,y._)({getContracts:()=>{let s;if(void 0===t.isFeeOn)throw Error("Fee on transfer can't be undefined");if(!e.userWallet)throw Error("Missing active account");let{trade:p}=t,g=[];if(n&&r)throw Error("ETHER_IN_OUT");let T=(0,d.ZH)(e.slippage),y=new a.Z(p.maximumAmountIn(T).quotient.toString()),h=n?y:new a.Z(0),f=new a.Z(p.minimumAmountOut(T).quotient.toString()),S=p.routes[0],E=S.pools[0],x=r?o.hX.fromString(c.qJ).toSolidityAddress():(0,l.aA)(e);switch(S.path.length>1?g.push((0,m.x)(S,p.tradeType===u.YL.EXACT_OUTPUT),x,(new Date().getTime()+c.T3).toString()):g.push(o.hX.fromString(E.token0.address).toSolidityAddress(),o.hX.fromString(E.token1.address).toSolidityAddress(),E.fee.toFixed(0),x,(new Date().getTime()+c.T3).toString()),p.tradeType){case u.YL.EXACT_INPUT:s=S.path.length>1?"exactInput":"exactInputSingle",g.push(y.toFixed(0),f.toFixed(0));break;case u.YL.EXACT_OUTPUT:s=S.path.length>1?"exactOutput":"exactOutputSingle",g.push(f.toFixed(0),y.toFixed(0))}1===S.path.length&&g.push(E.sqrtRatioX96.toString());let k=[{type:i.R.ContractExecuteTransaction,contractId:c.qJ,functionName:s,gas:16e4*S.path.length+8e5,params:[{type:"tuple",value:g}],payable:h}];return(n||r)&&(k.push({type:i.R.ContractExecuteTransaction,contractId:c.qJ,functionName:"unwrapWHBAR",params:[{type:"uInt256",value:n?new a.Z(0):f},{type:"address",value:(0,l.aA)(e)}],gas:w}),k.push({type:i.R.ContractExecuteTransaction,contractId:c.qJ,functionName:"refundETH",params:[],gas:0})),k},contractId:c.qJ});return T===s.b.V3?h:()=>{let s;if(void 0===t.isFeeOn)throw Error("Fee on transfer can't be undefined");if(!e.userWallet)throw Error("Missing active account");let{isFeeOn:m,trade:g}=t,T=[],y=16e4,h=new a.Z(0);if(n&&r)throw Error("ETHER_IN_OUT");let w=(0,d.ZH)(e.slippage),f=new a.Z(g.maximumAmountIn(w).quotient.toString()),S=new a.Z(g.minimumAmountOut(w).quotient.toString()),E=g.routes[0],x=E.path.map(t=>t.address);switch(g.tradeType){case u.YL.EXACT_INPUT:n?(s=m?"swapExactETHForTokensSupportingFeeOnTransferTokens":"swapExactETHForTokens",T.push({type:"uInt256",value:S}),h=f):(s=r?m?"swapExactTokensForETHSupportingFeeOnTransferTokens":"swapExactTokensForETH":m?"swapExactTokensForTokensSupportingFeeOnTransferTokens":"swapExactTokensForTokens",T.push({type:"uInt256",value:f},{type:"uInt256",value:S}));break;case u.YL.EXACT_OUTPUT:if(m)throw Error("EXACT_OUT_FOT");n?(s="swapETHForExactTokens",T.push({type:"uInt256",value:S}),h=f,y=4e5):r?(s="swapTokensForExactETH",T.push({type:"uInt256",value:S},{type:"uInt256",value:f}),y=4e5):(s="swapTokensForExactTokens",T.push({type:"uInt256",value:S},{type:"uInt256",value:f}))}return T.push({type:"addressArray",value:x.map(t=>o.hX.fromString(t).toSolidityAddress())},{type:"address",value:(0,l.aA)(e)},{type:"uInt256",value:new Date().getTime()+c.T3}),{type:i.R.ContractExecuteTransaction,contractId:p.xq,functionName:s,gas:y*E.path.length+8e5,params:T,payable:h}}};e.ZP=(t,e)=>{let n=["signTransaction","swap"],o=(0,p.F$)(t.trade.inputAmount.currency.wrapped.address),a=(0,p.F$)(t.trade.outputAmount.currency.wrapped.address),u=f(t),d=t.trade.routes[0].protocol,l=(0,r.NL)(),{data:m}=(0,h.iV)(t.trade.inputAmount.currency.wrapped.address),{data:g}=(0,h.iV)(t.trade.outputAmount.currency.wrapped.address),y=(0,T.Z)(n,{...e,onSuccess:async(t,n,o)=>{var r;await (null==e?void 0:null===(r=e.onSuccess)||void 0===r?void 0:r.call(e,t,n,o)),setTimeout(async()=>{d===s.b.V3?l.invalidateQueries(["ticks"]):l.invalidateQueries(["pools"])},7e3)}},u),w=d===s.b.V3?c.qJ:p.xq;return{type:i.R.ContractExecuteTransaction,key:n,metadata:{contractId:w},description:"Swap ".concat(o?"HBAR":null==m?void 0:m.name," for ").concat(a?"HBAR":null==g?void 0:g.name),...y}}},71894:function(t,e,n){n.d(e,{Z:function(){return F}});var o=n(85945),r=n(70794),a=n(55703),i=n(47808),s=n(17210),u=n(4002),c=n(49004),p=n(67294),d=n(618),l=n(36576),m=n(16114),g=n(43385),T=n(65074),y=n(13217),h=n(80608),w=n(51115);n(4878);let f=(t,e)=>{if(!e.userWallet)throw Error("Missing active account");let{sqrtPriceX96:n,feeAmount:o,token0:i,token1:s}=t,u=[];return u.push({type:"address",value:w.hX.fromString(i.address).toSolidityAddress()},{type:"address",value:w.hX.fromString(s.address).toSolidityAddress()},{type:"uInt24",value:o},{type:"uInt160",value:new r.Z(n.toString())}),{type:a.R.ContractExecuteTransaction,contractId:d.D0[d.D0.length-1],functionName:S,gas:3e5,params:u,payable:new r.Z(0)}},S="createAndInitializePoolIfNecessary",E=(t,e)=>{if(!e.userWallet)throw Error("Missing active account");let{increaseLiquidityAmount:n,amount0Desired:o,amount1Desired:r,amount0Min:i,amount1Min:s,tokenSN:u}=t,c=[];c.push({type:"tuple",value:[u,o.toFixed(0),r.toFixed(0),i.toFixed(0),s.toFixed(0),(new Date().getTime()+d.T3).toString()]}),console.log("PARAMS",c);let p=d.VW.indexOf(t.nftTokenId);return{type:a.R.ContractExecuteTransaction,contractId:d.D0[p],functionName:x,gas:35e4,params:c,payable:n}},x="increaseLiquidity",k=(t,e)=>{if(!e.userWallet)throw Error("Missing active account");let{mintAmount:n,token0:o,token1:r,feeAmount:i,tickLower:s,tickUpper:u,amount0Desired:c,amount1Desired:p,amount0Min:m,amount1Min:g}=t,T=[];return T.push({type:"tuple",value:[w.hX.fromString(o.address).toSolidityAddress(),w.hX.fromString(r.address).toSolidityAddress(),i.toFixed(0),s.toFixed(0),u.toFixed(0),c.toFixed(0),p.toFixed(0),m.toFixed(0),g.toFixed(0),(0,l.aA)(e),(new Date().getTime()+d.T3).toString()]}),{type:a.R.ContractExecuteTransaction,contractId:d.D0[d.D0.length-1],functionName:I,gas:1e6,params:T,payable:n}},I="mint",A=d.UJ||25,v=t=>new r.Z(A).plus(1).div(t).multipliedBy(new r.Z(10).pow(T.k3.decimals)).decimalPlaces(0,r.Z.ROUND_UP);var F=(t,e)=>{let{settings:n}=(0,c.r)(),{position:T,addOptions:w}=t,{data:S}=(0,g.ZP)(),x=(0,s.F$)(T.pool.token0.address),I=(0,s.F$)(T.pool.token1.address),{data:A}=(0,m.Z)(),F=x||I,Z=(0,p.useMemo)(()=>{let t=[];return w.createPool&&t.push("createAndInitializePoolIfNecessary"),"mint"===w.type?t.push("mint"):"increaseLiquidity"===w.type&&t.push("increaseLiquidity"),F&&(t.push("unwrapWHBAR"),t.push("refundETH")),"Multicall: "+t.join(", ")},[w.createPool,w.type,F]),N=(0,o.NL)();return(0,h.Z)({getContracts:()=>{console.log("CREATING V2 POSITION WITH TICKS",T.tickLower.toFixed(3),T.tickUpper.toFixed(3));let t=[],e=(0,u.ZH)(n.slippage),{amount0:o,amount1:c}=T.mintAmounts,p=T.mintAmountsWithSlippage(w.slippageTolerance||e),m=p.amount0,g=p.amount1;if(w.createPool&&t.push(f({token0:T.pool.token0,token1:T.pool.token1,feeAmount:T.pool.fee,sqrtPriceX96:T.pool.sqrtRatioX96},n)),"mint"===w.type?(console.log("MINT",{token0:T.pool.token0,token1:T.pool.token1,feeAmount:T.pool.fee,tickLower:T.tickLower,tickUpper:T.tickUpper,amount0Desired:new r.Z(o.toString()),amount1Desired:new r.Z(c.toString()),amount0Min:new r.Z(m.toString()),amount1Min:new r.Z(g.toString()),mintAmount:new r.Z(0)}),console.log("MINTING SLIPPAGE DEBUG",(w.slippageTolerance||e).toFixed(3),m.toString(),o.toString(),g.toString(),c.toString()),t.push(k({token0:T.pool.token0,token1:T.pool.token1,feeAmount:T.pool.fee,tickLower:T.tickLower,tickUpper:T.tickUpper,amount0Desired:new r.Z(o.toString()),amount1Desired:new r.Z(c.toString()),amount0Min:new r.Z(m.toString()),amount1Min:new r.Z(g.toString()),mintAmount:new r.Z(0)},n))):"increaseLiquidity"===w.type&&(console.log("INCREASING"),t.push(E({tokenSN:w.tokenSN,nftTokenId:d.VW[d.VW.length-1],amount0Desired:new r.Z(o.toString()),amount1Desired:new r.Z(c.toString()),amount0Min:new r.Z(m.toString()),amount1Min:new r.Z(g.toString()),increaseLiquidityAmount:new r.Z(0)},n))),t.push({type:a.R.ContractExecuteTransaction,contractId:d.D0[d.D0.length-1],functionName:"refundETH",params:[],gas:0}),x||I){if(!n.userWallet)throw Error("Missing active account");t.push({type:a.R.ContractExecuteTransaction,contractId:d.D0[d.D0.length-1],functionName:"unwrapWHBAR",params:[{type:"uInt256",value:new r.Z(0)},{type:"address",value:(0,l.aA)(n)}],gas:y.nj})}let h=(0,s.aV)(T.pool)?x?o:c:i.xE,S=new r.Z(h.toString());if(A)console.log("EXCHANGE RATE",A.toFixed(3)),console.log("Add Fee",v(A).toFixed(3)),t[0].payable=S.plus(v(A));else throw Error("No exchange rate to calculate payable");return t[0].payable.isGreaterThan(0)&&t.push({type:a.R.ContractExecuteTransaction,contractId:d.D0[d.D0.length-1],functionName:"refundETH",params:[],gas:0}),t},description:Z,contractId:d.D0[d.D0.length-1]},{...e,onSuccess:async(t,n,o)=>{var r;await (null==e?void 0:null===(r=e.onSuccess)||void 0===r?void 0:r.call(e,t,n,o)),setTimeout(async()=>{w.tokenSN?await N.invalidateQueries(["myPositionV2",w.tokenSN]):N.invalidateQueries(["myPositionsV2"]),N.invalidateQueries(["poolsV2"])},5e3)}})}},80608:function(t,e,n){n.d(e,{_:function(){return p}});var o=n(70794),r=n(73303),a=n.n(r),i=n(55703),s=n(36576),u=n(4878);let c="multicall",p=t=>()=>{let e;let{contracts:n,getContracts:r,bytesArray:u,multicallCustomAmount:p,multicallCustomGas:d,contractId:l}=t,m=[],g=n||r(),T=a()(g,"gas");if(1===g.length)return g[0];if(g)e=g.map(t=>(0,s.rR)(t.contractId,t.functionName,t.params));else if(u)e=u;else throw Error("Requires bytesArray or contracts");return m.push({type:"bytesArray",value:e}),{type:i.R.ContractExecuteTransaction,contractId:l,functionName:c,gas:d||T,params:m,payable:p||(null==g?void 0:g.reduce((t,e)=>t.plus(e.payable||new o.Z(0)),new o.Z(0)))||new o.Z(0)}};e.Z=(t,e)=>{let n=["signTransaction",c],o=p(t),r=(0,u.Z)(n,e,o);return{type:i.R.ContractExecuteTransaction,key:n,metadata:{contractId:t.contractId},description:t.description||"Multicall",...r}}},29871:function(t,e,n){var o,r;n.d(e,{b:function(){return o}}),(r=o||(o={})).V2="V2",r.V3="V3",r.MIXED="MIXED"}}]);