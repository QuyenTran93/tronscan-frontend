(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1392:function(e,t,a){"use strict";a.d(t,"a",function(){return T});var n=a(1403),r=a.n(n),l=a(45),o=a.n(l),i=a(191),c=a.n(i),s=a(1384),u=a.n(s),m=a(2),p=a.n(m),d=a(30),f=a(5),g=a(13),b=a(14),h=a(21),w=a(19),x=a(20),E=a(0),v=a.n(E),y=a(3),k=a(15);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var T=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(h.a)(this,Object(w.a)(t).call(this,e))).loadDatas=Object(f.a)(p.a.mark(function e(){var t,n,r,l,o=arguments;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,n=o.length>1&&void 0!==o[1]?o[1]:40,r=a.state.filter,e.next=5,k.a.getTokens(N({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=N({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(N({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?N({},e,{name:v.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?v.a.createElement("span",{key:a,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:v.a.createElement("div",{className:"custom-filter-dropdown"},v.a.createElement(u.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch})," ",v.a.createElement(c.a,{type:"primary",onClick:a.onSearch}," ",Object(y.c)("search")," ")," ",v.a.createElement(c.a,{className:"btn-secondary ml-1",onClick:a.onReset}," ",Object(y.c)("reset")," ")," "),filterIcon:v.a.createElement(o.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],l=!0,i=!1,s=void 0;try{for(var m,p=e[Symbol.iterator]();!(l=(m=p.next()).done);l=!0){var d=m.value;if(d.sorter&&!d.filterDropdown){var f={sorter:t(d.key)};r.push(N({},d,{},f))}else if(!d.sorter&&d.filterDropdown){var g=N({},n);r.push(N({},d,{},g))}else if(d.sorter&&d.filterDropdown){var b=N({sorter:t(d.key)},n);r.push(N({},d,{},b))}else r.push(d)}}catch(h){i=!0,s=h}finally{try{l||null==p.return||p.return()}finally{if(i)throw s}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(x.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:N({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,l=e.column,o=e.bordered,i=e.pagination,c=void 0===i||i,s=e.scroll,u=e.locale,m=e.addr,p=e.transfers,d=(e.contractAddress,e.isPaddingTop,this.setColumn(l)),f=c?N({total:t},this.state.pagination):c;return v.a.createElement("div",null," ",m?v.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==p?" transfer-mt-100":" transfer-pt-100")},v.a.createElement(r.a,{bordered:o,columns:d,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:s,pagination:f,loading:a,onChange:this.handleTableChange})," "):v.a.createElement("div",{className:"card table_pos"},v.a.createElement(r.a,{bordered:o,columns:d,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:s,pagination:f,loading:a,onChange:this.handleTableChange})," ")," ")}}]),t}(E.Component)},1393:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAQAAABvygHQAAAClUlEQVR4AcWXRXLkMBSGJ7uhdV8gN8pR+gKhU6gxzMzMzMzMKAX2+cbVdqlJ7nTANf43gqq/nt7/yD/+w/eUq/yyUg2rXfkqX9WuGrZ2/qfcT9K9+lSRXJe4YF0Vvfo+RMhflW9Zxjt4Vfn8zZJS5akbSXZQNyrvfRtzVL56k2QP9abyyclE+UvVST4OVccvdys15cdpXay1xOHzUPlmeRxfttHCCCsc8/Ax3+alB5FWfAHhIEgtPcyww3VWkcBf16ffEUYQYZ4VRmmlFGGhjDZrt8IJj9m54NWXHOr9lNNJgAVnf8020/RQQxBBiDr6ODGmQ0KWqeLky0MEe0wgGEyx64Fj5gkhiHJosrVIk6bneB09SNYJ08xt0s0ldUTZoo0Ie4aaoCtR2hULhGJkx5RTmfDUA0qp4Txmcychi1ymwKlgyp96YYs16/izkQibSAsrhGjTlt/RSJC1VAf47cdXmpTsp0b7sQ/BNKMIRrhgkym6qSaAsNCOTEalbemwvTWIpXezMYogkRhRhUU1xjJlFvVtqqXDNumuvTWKpdFGOQPMs6dpuolylq7/boxUx6iLWDZqGU26nSTAjjFWbdIXM+mtI5aNKPNIjQ2E3qfgxfB8s1h3CDb1+TFhBtxSddcglFmsYwTHOmnLaXKtAGrYPaS0J22xNhHcOQHWSAU3SDdUGoLfLNY8Ueekj4i22QTlT0lTs1hzSEapteNV+9YNT7mGgmIWqzuWOdsEmEJmwnq89BVJMovVwBCnRGwPZ4AqMhZps1iljFNFvblrmYt05k5qF+UI5Vx9rKPqxuciliDE4Ucbn27RLmIJVj/eojO74JCxjw8THo49ngxoHo2SHg29no3n+kei+OM/Ep7+8njw/QOnF3WHklwUswAAAABJRU5ErkJggg=="},2012:function(e,t,a){"use strict";var n=a(191),r=a.n(n),l=a(1384),o=a.n(l),i=a(13),c=a(14),s=a(21),u=a(19),m=a(20),p=a(0),d=a.n(p),f=a(3),g=a(95),b=a.n(g);d.a.Component},3460:function(e,t,a){"use strict";a.r(t);var n,r=a(253),l=a.n(r),o=a(38),i=a.n(o),c=a(2),s=a.n(c),u=a(5),m=a(13),p=a(14),d=a(21),f=a(19),g=a(20),b=a(0),h=a.n(b),w=a(31),x=a(363),E=a(10),v=a(52),y=a.n(v),k=a(3),O=a(15),N=a(370),T=a(23),C=(a(2012),a(78)),S=a(1392),j=a(6),A=a(18),_=a(53),D=a(87),R=a(63),U=a(17),M=a.n(U),P=a(11),I=a.n(P),V=a(137),W=Object(V.a)(n=function(e){function t(e){var n;Object(m.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).loadPage=Object(u.a)(s.a.mark(function e(){var t,a,r,l,o,i,c,u=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.length>0&&void 0!==u[0]?u[0]:1,a=u.length>1&&void 0!==u[1]?u[1]:20,r=n.state.filter,l=n.props.intl,n.setState({loading:!0}),!r.name){e.next=11;break}return e.next=8,M.a.get(j.e+"/api/token?sort=rank&limit="+a+"&start="+(t-1)*a+"&status=ico&name="+r.name);case 8:o=e.sent,e.next=14;break;case 11:return e.next=13,M.a.get(j.e+"/api/token?sort=rank&limit="+a+"&start="+(t-1)*a+"&status=ico&showAll=2");case 13:o=e.sent;case 14:return i=o.data.total,0===(c=o.data.data).length&&C.toastr.warning(l.formatMessage({id:"warning"}),l.formatMessage({id:"record_not_found"})),n.setState({loading:!1,tokens:c,total:i}),e.abrupt("return",i);case 19:case"end":return e.stop()}},e)})),n.setSearch=function(){var e=i()(Object(N.a)(n.props.location,"search"));e.length>0?n.setState({filter:{name:"".concat(e)}}):n.setState({filter:{}})},n.onChange=function(e,t){n.loadPage(e,t)},n.searchName=function(e){e.length>0?n.setState({filter:{name:"%25".concat(e,"%25")}}):"#/tokens/view"!==window.location.hash?window.location.hash="#/tokens/view":n.setState({filter:{}})},n.onBuyInputChange=function(e,t,a){var r=n.props.intl;e>a&&(e=a),e=e.replace(/^0|[^\d*]/g,""),n.setState({buyAmount:e}),n.buyAmount.value=e;var l=e*t;n.priceTRX.innerHTML=r.formatNumber(l,{maximumFractionDigits:6})+" TRX"},n.preBuyTokens=function(e){var t=n.state,a=(t.buyAmount,t.amount,n.props);a.currentWallet;a.wallet.isOpen?n.setState({alert:h.a.createElement(y.a,{showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},h.a.createElement("div",{className:"mt-5 token-sweet-alert",style:{textAlign:"left"}},h.a.createElement("a",{style:{float:"right",marginTop:"-45px"},onClick:function(){n.setState({alert:null})}},h.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),h.a.createElement("h5",{style:{color:"black"}},Object(k.c)("buy_token_info")),0===e.remaining&&h.a.createElement("span",null," ",Object(k.c)("no_token_to_buy")),h.a.createElement("div",{className:"input-group mt-5"},h.a.createElement("input",{type:"number",ref:function(e){return n.buyAmount=e},className:"form-control",max:e.remaining,min:1,onKeyUp:function(e){e.target.value=e.target.value.replace(/^0|[^\d*]/g,"")},onChange:function(t){n.onBuyInputChange(t.target.value,e.trxNum/e.num*Math.pow(10,e.precision)/j.E,e.remaining)}})),h.a.createElement("div",{className:"text-center mt-3 text-muted"},h.a.createElement("b",null,"= ",h.a.createElement("span",{ref:function(e){return n.priceTRX=e}},"0 TRX"))),h.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.buyTokens(e)}},Object(k.c)("participate"))))}):n.setState({alert:h.a.createElement(y.a,{info:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},h.a.createElement("div",{className:"token-sweet-alert"},h.a.createElement("a",{className:"close",onClick:function(){n.setState({alert:null})}},h.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),h.a.createElement("span",null,Object(k.c)("login_first")),h.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(k.c)("OK"))))})},n.buyTokens=function(e){var t=e.trxNum/e.num*Math.pow(10,e.precision),a=n.state.buyAmount;if(!(a<=0)){var r=n.props,l=r.currentWallet,o=(r.wallet,a*(t/j.E));l.balance/j.E<o?n.setState({alert:h.a.createElement(y.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},h.a.createElement("div",{className:"mt-5 token-sweet-alert"},h.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},h.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),h.a.createElement("span",null,Object(k.c)("not_enough_trx_message")),h.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(k.c)("confirm"))))}):n.setState({alert:h.a.createElement(y.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},h.a.createElement("div",{className:"mt-5 token-sweet-alert"},h.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},h.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),h.a.createElement("p",{className:"ml-auto buy_confirm_message"},Object(k.c)("buy_confirm_message_1")),h.a.createElement("span",null,a," ",e.name," ",Object(k.b)("for")," ",parseFloat((a*(t/j.E)).toFixed(6))," TRX?"),h.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.confirmTransaction(e)}},Object(k.c)("confirm"))))})}},n.submit=function(){var e=Object(u.a)(s.a.mark(function e(t){var a,r,l,o,i,c,u,m,p,d,f,g,b,h,w;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.trxNum/t.num*Math.pow(10,t.precision),r=n.props,l=r.account,o=r.currentWallet,i=n.state.buyAmount,!I.a.get("islogin")&&"ACCOUNT_LEDGER"!==n.props.walletType.type&&"ACCOUNT_TRONLINK"!==n.props.walletType.type){e.next=32;break}if(u=n.props.tronWeb(),m=n.props.account.tronWeb,e.prev=6,"ACCOUNT_LEDGER"!==n.props.walletType.type){e.next=16;break}return e.next=10,u.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((i*a).toFixed(0)),n.props.walletType.address);case 10:return p=e.sent,e.next=13,Object(R.c)(p,u);case 13:d=e.sent,f=d.result,c=f;case 16:if("ACCOUNT_TRONLINK"!==n.props.walletType.type){e.next=25;break}return e.next=19,m.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((i*a).toFixed(0)),m.defaultAddress.hex).catch(function(e){return!1});case 19:return g=e.sent,e.next=22,Object(R.c)(g,m);case 22:b=e.sent,h=b.result,c=h;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(6),console.log(e.t0);case 30:e.next=36;break;case 32:return e.next=34,O.a.participateAsset(o.address,t.ownerAddress,t.id+"",parseInt((i*a).toFixed(0)))(l.key);case 34:w=e.sent,c=w.success;case 36:if(!c){e.next=42;break}return n.setState({activeToken:null,confirmedParticipate:!0,participateSuccess:c,buyAmount:0}),n.props.reloadWallet(),e.abrupt("return",!0);case 42:return e.abrupt("return",!1);case 43:case"end":return e.stop()}},e,null,[[6,27]])}));return function(t){return e.apply(this,arguments)}}(),n.confirmTransaction=function(){var e=Object(u.a)(s.a.mark(function e(t){var a,r,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,r=a.account,l=a.intl,n.state.buyAmount,n.setState({alert:h.a.createElement(y.a,{showConfirm:!1,showCancel:!1,cancelBtnBsStyle:"default",title:l.formatMessage({id:"transferring"}),style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}})}),window.gtag("event","participate",{event_category:"Token10",event_label:t.name,referrer:window.location.origin,value:r.address}),e.next=6,n.submit(t);case 6:if(!e.sent){e.next=10;break}n.setState({alert:h.a.createElement(y.a,{success:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},h.a.createElement("div",{className:"mt-5 token-sweet-alert"},h.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},h.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),h.a.createElement("h5",{style:{color:"black"}},Object(k.c)("transaction")," ",Object(k.c)("confirm")),h.a.createElement("span",null,Object(k.c)("success_receive")," ",t.name," ",Object(k.c)("tokens")),h.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(k.c)("OK"))))}),e.next=11;break;case 10:n.setState({alert:h.a.createElement(y.a,{danger:!0,title:"Error",onConfirm:function(){return n.setState({alert:null})}},Object(k.c)("fail_transaction"))});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.customizedColumn=function(){var e=n.props.intl,t=a(1393);return[{title:"#",dataIndex:"index",key:"index",align:"center",className:"ant_table _text_nowrap"},{title:l()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"40%",render:function(e,a,n){return h.a.createElement("div",{className:"table-imgtext"},a.imgUrl?h.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},1002e3==a.id?h.a.createElement("div",{className:"token-img-top"},h.a.createElement("img",{style:{width:"42px",height:"42px"},src:a.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}}),h.a.createElement("i",null)):h.a.createElement("img",{style:{width:"42px",height:"42px"},src:a.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}})):h.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},h.a.createElement("img",{style:{width:"42px",height:"42px"},src:t})),h.a.createElement("div",null,h.a.createElement("h5",null,h.a.createElement(T.f,{name:a.name,id:a.id,namePlus:a.name+" ("+a.abbr+")",address:a.ownerAddress})),h.a.createElement("p",{style:{wordBreak:"break-all"}},a.description)))}},{title:"ID",render:function(e,t,a){return h.a.createElement("div",null,t.id)},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"fund_raised"}),render:function(e,t,a){return h.a.createElement("div",null,h.a.createElement(E.c,{value:t.participated/j.E,maximumFractionDigits:1})," ","TRX")},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"issue_progress"}),dataIndex:"issuedPercentage",key:"issuedPercentage",render:function(e,t,a){return null===e&&(e=0),h.a.createElement("div",null,h.a.createElement(E.c,{value:e,maximumFractionDigits:1}),"%")},align:"center",className:"ant_table d-none d-sm-table-cell _text_nowrap"},{title:e.formatMessage({id:"end_time"}),dataIndex:"endTime",key:"endTime",align:"center",className:"ant_table _text_nowrap",render:function(e,t,a){return h.a.createElement("div",null,h.a.createElement(E.d,{value:t.endTime,units:"day"}))}},{title:e.formatMessage({id:"issuing_price"}),render:function(e,t,a){return h.a.createElement("div",null,h.a.createElement(E.c,{value:t.trxNum/t.num*Math.pow(10,t.precision)/j.E,maximumFractionDigits:6})," ","TRX")},align:"center",className:"ant_table"},{title:e.formatMessage({id:"participate"}),align:"center",render:function(e,t,a){return t.isBlack?h.a.createElement("button",{className:"btn btn-secondary btn-block btn-sm",disabled:!0},Object(k.c)("participate")):t.endTime<new Date||100===t.issuedPercentage?h.a.createElement("span",{style:{fontWeight:"normal"}},Object(k.c)("finish")):t.startTime>new Date?h.a.createElement("span",{style:{fontWeight:"normal"}},Object(k.c)("not_started")):h.a.createElement("button",{className:"btn btn-default btn-block btn-sm",onClick:function(){return n.preBuyTokens(t)}},Object(k.c)("participate"))},className:"ant_table"}]},n.state={tokens:[],buyAmount:0,loading:!1,total:0,amount:"",filter:{}};var r=i()(Object(N.a)(e.location,"search"));return r.length>0&&(n.state.filter.name="".concat(r)),n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.loadPage()}},{key:"componentDidUpdate",value:function(e,t){this.props.location!==e.location&&this.setSearch(),this.state.filter!==t.filter&&(console.log("SEARCH CHANGED!"),this.loadPage())}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=t.alert,r=t.loading,l=t.total,o=this.props,i=(o.match,o.intl),c=this.customizedColumn(),s=i.formatMessage({id:"view_total"})+" "+(l-1)+" "+i.formatMessage({id:"view_pass"});return h.a.createElement("main",{className:"container header-overlap token_black"},n,r&&h.a.createElement("div",{className:"loading-style"},h.a.createElement(D.b,null)),h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-12 table_pos"},l?h.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},s):"",h.a.createElement(S.a,{bordered:!0,loading:r,column:c,data:a,total:l,rowClassName:"table-row",onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),t}(b.Component))||n;var B={loadTokens:x.b,login:A.v,reloadWallet:_.c};t.default=Object(w.connect)(function(e){return{account:e.app.account,walletType:e.app.wallet,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},B)(Object(E.h)(W))}}]);