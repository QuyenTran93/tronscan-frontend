(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1393:function(e,a,t){"use strict";t.d(a,"a",function(){return T});var l=t(1411),n=t.n(l),r=t(55),o=t.n(r),s=t(252),p=t.n(s),c=t(1392),i=t.n(c),m=t(2),u=t.n(m),d=t(24),g=t(5),E=t(13),f=t(14),_=t(20),v=t(19),y=t(21),b=t(0),h=t.n(b),w=t(3),M=t(16);function O(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,l)}return t}function j(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?O(t,!0).forEach(function(a){Object(d.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var T=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(_.a)(this,Object(v.a)(a).call(this,e))).loadDatas=Object(g.a)(u.a.mark(function e(){var a,l,n,r,o=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>0&&void 0!==o[0]?o[0]:1,l=o.length>1&&void 0!==o[1]?o[1]:40,n=t.state.filter,e.next=5,M.a.getTokens(j({sort:"rank",limit:l,start:(a-1)*l},n));case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)})),t.handleTableChange=function(e,a,l){var n=j({},t.state.pagination);n.current=e.current,t.setState({pagination:n}),t.fetch(j({pageSize:e.pageSize,page:e.current,sortField:l.field,sortOrder:l.order},a))},t.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.setState({loading:!0}),t.props.onPageChange?(t.props.onPageChange(e.page,e.pageSize),t.setState({loading:!1})):t.setState({loading:!1})},t.onInputChange=function(e){t.setState({searchText:e.target.value})},t.onReset=function(){t.setState({searchText:""},function(){t.onSearch()})},t.onSearch=function(){var e=t.props.tableData,a=t.state.searchText,l=new RegExp(a,"gi");t.setState({filterDropdownVisible:!1,filtered:!!a,data:e.map(function(e){return e.name.match(l)?j({},e,{name:h.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(a,")|(?=").concat(a,")"),"i")).map(function(e,t){return e.toLowerCase()===a.toLowerCase()?h.a.createElement("span",{key:t,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},t.setColumn=function(e){function a(e){return function(a,t){return a[e]>t[e]?1:a[e]<t[e]?-1:0}}var l={filterDropdown:h.a.createElement("div",{className:"custom-filter-dropdown"},h.a.createElement(i.a,{ref:function(e){return t.searchInput=e},placeholder:"Search name",value:t.state.searchText,onChange:t.onInputChange,onPressEnter:t.onSearch})," ",h.a.createElement(p.a,{type:"primary",onClick:t.onSearch}," ",Object(w.c)("search")," ")," ",h.a.createElement(p.a,{className:"btn-secondary ml-1",onClick:t.onReset}," ",Object(w.c)("reset")," ")," "),filterIcon:h.a.createElement(o.a,{type:"filter",style:{color:t.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:t.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){t.setState({filterDropdownVisible:e},function(){t.searchInput&&t.searchInput.focus()})}},n=[],r=!0,s=!1,c=void 0;try{for(var m,u=e[Symbol.iterator]();!(r=(m=u.next()).done);r=!0){var d=m.value;if(d.sorter&&!d.filterDropdown){var g={sorter:a(d.key)};n.push(j({},d,{},g))}else if(!d.sorter&&d.filterDropdown){var E=j({},l);n.push(j({},d,{},E))}else if(d.sorter&&d.filterDropdown){var f=j({sorter:a(d.key)},l);n.push(j({},d,{},f))}else n.push(d)}}catch(_){s=!0,c=_}finally{try{r||null==u.return||u.return()}finally{if(s)throw c}}return n},t.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},t}return Object(y.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var a=this.props.current,t=this.state.pagination;e.current!=a&&this.setState({pagination:j({},t,{current:a})})}},{key:"render",value:function(){var e=this.props,a=e.total,t=e.loading,l=e.data,r=e.column,o=e.bordered,s=e.pagination,p=void 0===s||s,c=e.scroll,i=e.Footer,m=e.locale,u=e.addr,d=e.transfers,g=(e.contractAddress,e.isPaddingTop,this.setColumn(r)),E=p?j({total:a},this.state.pagination):p;return h.a.createElement("div",null," ",u?h.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==l.length?"table_pos_addr_data":"")+("address"==d?" transfer-mt-100":" transfer-pt-100")},h.a.createElement(n.a,{bordered:o,columns:g,rowKey:function(e,a){return a},dataSource:l,locale:m,scroll:c,footer:i,pagination:E,loading:t,onChange:this.handleTableChange})," "):h.a.createElement("div",{className:"card table_pos"},h.a.createElement(n.a,{bordered:o,columns:g,footer:i,rowKey:function(e,a){return a},dataSource:l,locale:m,scroll:c,pagination:E,loading:t,onChange:this.handleTableChange})," ")," ")}}]),a}(b.Component)},3497:function(e,a,t){"use strict";t.r(a);var l=t(253),n=t.n(l),r=t(2),o=t.n(r),s=t(5),p=t(13),c=t(14),i=t(20),m=t(19),u=t(21),d=t(0),g=t.n(d),E=t(3),f=t(16),_=t(64),v=t(1393),y=t(10),b=t(87),h=t(23),w=t(6),M=function(e){function a(){var e;return Object(p.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).onChange=function(a,t){e.load(a,t)},e.load=Object(s.a)(o.a.mark(function a(){var t,l,n,r,s,p,c,i,m,u,d,g,E=arguments;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=E.length>0&&void 0!==E[0]?E[0]:1,l=E.length>1&&void 0!==E[1]?E[1]:20,e.setState({loading:!0}),a.next=5,f.a.getProposalList({sort:"-number",limit:l,start:(t-1)*l});case 5:if(n=a.sent,r=n.proposal,s=n.total,p=["getMaintenanceTimeInterval","getAccountUpgradeCost","getCreateAccountFee","getTransactionFee","getAssetIssueFee","getWitnessPayPerBlock","getWitnessStandbyAllowance","getCreateNewAccountFeeInSystemContract","getCreateNewAccountBandwidthRate","getAllowCreationOfContracts","getRemoveThePowerOfTheGr","getEnergyFee","getExchangeCreateFee","getMaxCpuTimeOfOneTx","getAllowUpdateAccountName","getAllowSameTokenName","getAllowDelegateResource","getTotalEnergyLimit","getAllowTvmTransferTrc10","getTotalEnergyLimitNew","getAllowMultiSign","getAllowAdaptiveEnergy","getUpdateAccountPermissionFee","getMultiSignFee","getAllowProtoFilterNum","","getAllowTvmConstantinople","","","","getChangeDelegation","getWitness127PayPerBlock","getAllowTvmSolidity059","getAdaptiveResourceLimitTargetRatio"],c=[{id:"1000000",key:"getChargingSwitch"},{id:"1000001",key:"getSideChainGateWayList"},{id:"1000003",key:"getProposalExpireTime"},{id:"1000004",key:"getVoteWitnessSwitch"},{id:"1000007",key:"getFundInjectAddress"},{id:"1000008",key:"getFundDistributeEnableSwitch"},{id:"1000009",key:"getDayToSustainByFund"},{id:"1000010",key:"getPercentToPayWitness"}],w.v)for(i in r)for(m in r[i].paramters)r[i].paramters[m].proposalKey=p[r[i].paramters[m].key],r[i].paramters[m].proposalVal=r[i].paramters[m].value;else for(u in r)for(d in r[u].paramters)for(g in c)c[g].id==r[u].paramters[d].key&&(r[u].paramters[d].proposalKey=c[g].key,r[u].paramters[d].proposalVal=r[u].paramters[d].value);e.setState({loading:!1,dataSource:r,total:s,page:t});case 12:case"end":return a.stop()}},a)})),e.state={dataSource:[],total:0,loading:!1},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.load()}},{key:"getColumns",value:function(){var e=this.props.intl;this.state.dataSource;return[{title:n()(e.formatMessage({id:"propose_number"})),dataIndex:"index",key:"index",render:function(e,a,t){return"#"+a.proposalId}},{title:n()(e.formatMessage({id:"proposal_content_info"})),dataIndex:"proposalVal",key:"proposalVal",width:"40%",render:function(a,t,l){return g.a.createElement("div",null,t.paramters.map(function(a,l){return g.a.createElement("div",{key:l},w.v?g.a.createElement("div",null,"getMaintenanceTimeInterval"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_1"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal/36e5)," \xa0",g.a.createElement("span",null,e.formatMessage({id:"propose_hour"}))),"getAccountUpgradeCost"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_2"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal/w.E)," \xa0",g.a.createElement("span",null,"TRX")),"getCreateAccountFee"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_3"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal/w.E)," \xa0",g.a.createElement("span",null,"TRX")),"getTransactionFee"==t.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_4"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal)," \xa0",g.a.createElement("span",null,"Sun/byte")),"getAssetIssueFee"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_5"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal/w.E)," \xa0",g.a.createElement("span",null,"TRX")),"getWitnessPayPerBlock"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_6"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal/w.E)," \xa0",g.a.createElement("span",null,"TRX"))),"getWitnessStandbyAllowance"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_7"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal/w.E)," \xa0",g.a.createElement("span",null,"TRX")),"getCreateNewAccountFeeInSystemContract"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_8"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal/w.E)," \xa0",g.a.createElement("span",null,"TRX")),"getCreateNewAccountBandwidthRate"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_9"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal)," \xa0",g.a.createElement("span",null,"bandwith/byte")),"getAllowCreationOfContracts"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_10"})),g.a.createElement("span",null,Object(E.c)("propose_activate"))),"getRemoveThePowerOfTheGr"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_11"}))),"getEnergyFee"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_12"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal/w.E," TRX")),"getExchangeCreateFee"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_13"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal/w.E," TRX")),"getMaxCpuTimeOfOneTx"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_14"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal," ms")),"getAllowUpdateAccountName"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_15"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getAllowSameTokenName"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_16"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getAllowDelegateResource"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_17"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getTotalEnergyLimit"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_18"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal)),"getAllowTvmTransferTrc10"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_19"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getTotalEnergyLimitNew"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_18_1"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal)),"getTotalEnergyCurrentLimit"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_20"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal)),"getAllowMultiSign"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_21"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getAllowAdaptiveEnergy"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_22"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getTotalEnergyTargetLimit"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_23"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal),"/",g.a.createElement("span",null,Object(E.c)("propose_minute"))),"getTotalEnergyAverageUsage"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_24"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a.proposalVal?g.a.createElement("span",null,g.a.createElement("span",null,a.proposalVal),"/",g.a.createElement("span",null,Object(E.c)("propose_minute"))):g.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getUpdateAccountPermissionFee"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_25"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal/w.E)," \xa0",g.a.createElement("span",null,"TRX")),"getMultiSignFee"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_26"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal/w.E)," \xa0",g.a.createElement("span",null,"TRX")),"getAllowProtoFilterNum"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_27"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_activate")):g.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getAllowTvmConstantinople"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_28"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getChangeDelegation"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_30"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_activate")):g.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getWitness127PayPerBlock"==a.proposalKey&&g.a.createElement("div",{className:"mt-1"},g.a.createElement("span",null,e.formatMessage({id:"propose_31"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal/w.E)," \xa0",g.a.createElement("span",null,"TRX")),"getAllowTvmSolidity059"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_32"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getAdaptiveResourceLimitTargetRatio"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_33"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal))):g.a.createElement("div",null,"getChargingSwitch"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_1"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),"0"!=a.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_activate")):g.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getSideChainGateWayList"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_2"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal)),"getProposalExpireTime"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_3"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal)),"getVoteWitnessSwitch"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_4"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),"0"!=a.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_activate")):g.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getFundInjectAddress"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_5"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal)),"getFundDistributeEnableSwitch"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_6"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),"0"!=a.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_activate")):g.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getDayToSustainByFund"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_7"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal," ",Object(E.c)("day"))),"getPercentToPayWitness"==a.proposalKey&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_8"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a.proposalVal," %"))))}))}},{title:n()(e.formatMessage({id:"proposer"})),dataIndex:"name",key:"name",width:"15%",render:function(e,a,t){return a.proposer.name?g.a.createElement(h.a,{address:a.proposer.address},a.proposer.name):g.a.createElement(h.a,{address:a.proposer.address},a.proposer.address)}},{title:n()(e.formatMessage({id:"proposal_time_of_creation"})),dataIndex:"createTime",key:"createTime",width:"15%",render:function(e,a,t){return g.a.createElement("span",null,g.a.createElement(y.a,{value:Number(e)}),"\xa0",g.a.createElement(y.e,{value:Number(e),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}),"\xa0")}},{title:n()(e.formatMessage({id:"proposal_status"})),dataIndex:"state",key:"state",render:function(e,a,t){return g.a.createElement("div",null,"PENDING"==e&&g.a.createElement("div",null,g.a.createElement("span",{className:"badge badge-warning text-uppercase badge-success-radius"},Object(E.c)("proposal_voting"))),"DISAPPROVED"==e&&g.a.createElement("div",null,g.a.createElement("span",{className:"badge badge-danger text-uppercase badge-success-radius"},Object(E.c)("proposal_ineffective"))),"APPROVED"==e&&g.a.createElement("div",null,g.a.createElement("span",{className:"badge badge-success text-uppercase badge-success-radius"},Object(E.c)("proposal_effective"))),"CANCELED"==e&&g.a.createElement("div",null,g.a.createElement("span",{className:"badge badge-secondary text-uppercase badge-success-radius"},Object(E.c)("proposal_cancelled"))))}},{title:"",dataIndex:"details",key:"details",width:"12%",render:function(e,a,t){return g.a.createElement(_.a,{to:"/proposal/".concat(a.proposalId),className:"float-right text-primary btn btn-default btn-sm"},Object(E.c)("learn_more"))}}]}},{key:"proposalDetails",value:function(){var e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=(e.page,e.total),t=(e.pageSize,e.loading),l=e.dataSource,n=(e.emptyState,this.getColumns()),r=this.props.intl,o=(r.formatMessage({id:"view_total"}),r.formatMessage({id:"token_unit"}),{emptyText:r.formatMessage({id:"no_commission_proposed_found"})});return g.a.createElement("main",{className:"container header-overlap committee"},g.a.createElement("div",{className:"token_black table_pos"},t&&g.a.createElement("div",{className:"loading-style"},g.a.createElement(b.b,null)),!t&&g.a.createElement(v.a,{bordered:!0,column:n,data:l,total:l.length,locale:o})))}}]),a}(g.a.Component);a.default=Object(y.h)(M)}}]);