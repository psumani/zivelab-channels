(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,n){"use strict";(function(e){var a=n(21),r=n(20);t.a=function(t){var n=Object(r.createMuiTheme)({direction:t.direction,nprogress:{color:"light"===t.paletteType?"#000":"#fff"},palette:Object(a.a)({},t.paletteColors,{type:t.paletteType})});return e.browser&&(window.theme=n),n}}).call(this,n(96))},143:function(e,t,n){"use strict";(function(e){var a=n(22),r=n(63),i=n(18),c=n.n(i),o=n(28),s=n(31),l=n(32),u=n(35),d=n(33),p=n(34),h=n(21),m=(n(66),n(0)),f=n.n(m),g=n(5),b=n.n(g),v=n(20),y=n(85),k=n(23),x=n(53),O=n(165),w=n.n(O),E=n(164),j=n.n(E),C=n(56),S=n.n(C),A=n(168),D=n.n(A),T=n(57),N=n.n(T),L=n(162),P=n.n(L),I=n(64),M=n.n(I),R=n(86),H=n.n(R),z=n(65),W=n.n(z),F=n(171),B=n.n(F),G=n(166),K=n.n(G),_=n(46),q=n.n(_),$=n(44),Z=n.n($),J=n(169),Y=n.n(J),U=n(170),V=n.n(U),X=n(172),Q=n.n(X),ee=n(109),te=n.n(ee),ne=n(144),ae=n.n(ne),re=n(145),ie=n.n(re),ce=n(146),oe=n.n(ce),se=n(167),le=n.n(se),ue=n(163),de=n.n(ue),pe=n(78),he=n(45),me=n(147),fe=n(173),ge=n(159),be=n(52),ve="getting-started-nav";e.browser&&console.log("%c\n    \n    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \n    \u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\n      \u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\n     \u2588\u2588\u2588\u2554\u255d  \u2588\u2588\u2551\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\n    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\n    \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u255d \n\n    Tip: you can access the documentation `theme` object directly in the console.\n","font-family:monospace;color:#1976d2;font-size:12px;");var ye=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={openDrawer:!1,openSnackbar:!1,snackbarMessage:"",selectedKey:ve,localIP:null,localDevices:[],remoteDevices:[],knownDevice:"192.168.0.15",scanDevices:!1,isLocalScan:!1,isRemoteScan:!1,scanCompleted:0,scanTotal:0},n.toggleDrawer=function(e){return function(){n.setState({openDrawer:e})}},n.handleTogglePaletteType=function(){var e="light"===n.props.reduxTheme.paletteType?"dark":"light";document.cookie="paletteType=".concat(e,";path=/;max-age=31536000"),n.props.dispatch({type:be.a.THEME_CHANGE,payload:{paletteType:e}})},n.handleSnackbarClose=function(e,t){"clickaway"!==t&&n.setState({openSnackbar:!1})},n.handleListItemClick=function(e,t){n.setState({selectedKey:t})},n.handleLocalClick=function(){n.findDevices(!0)},n.handleRemoteClick=function(){n.findDevices(!1)},n.handleAddKnownDevice=function(e){n.setState({knownDevice:e}),n.scanKnownDevice(e)},n.GettingStartedTitle=function(){return f.a.createElement(Z.a,{variant:"h6",color:"inherit",noWrap:!0},"Zive Channels")},n.ChannelTitle=function(e){var t=e.match.params,a=n.getAbout(t.id),r=a.model.startsWith("Zive")?a.model.split(" ").slice(1).join(" "):a.model,i=a.ipAddress;return f.a.createElement(Z.a,{variant:"h6",color:"inherit",noWrap:!0},r," (",i,") - Zive Channels")},n.channelPage=function(e){var t=e.match.params;return f.a.createElement(f.a.Fragment,null,f.a.createElement(ge.a,{ipAddress:t.id}))},n.gettingStartedLink=function(e){return f.a.createElement(y.b,Object.assign({to:"/"},e))},n.gettingStartedPage=function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement(fe.a,null))},n.componentDidMount=function(){n.getLocalIPAddressAsync()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"scanKnownDevice",value:function(){var e=Object(o.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadAboutAsync(t);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"findDevices",value:function(){var e=Object(o.a)(c.a.mark(function e(t){var n,a,r,i=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=t?"Scanning local devices...":"Scanning remote devices...",this.setState({openSnackbar:!0,snackbarMessage:n}),t||this.state.localIP){e.next=6;break}return e.next=6,this.getLocalIPAddressAsync();case 6:a=t?"169.254.17.1":this.state.localIP,r=Object(he.a)(a),this.setState({isLocalScan:t,isRemoteScan:!t,scanCompleted:0,scanTotal:r.length}),r.map(function(){var e=Object(o.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.loadAboutAsync(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()},{key:"getLocalIPAddressAsync",value:function(){var e=Object(o.a)(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(he.b)();case 3:(t=e.sent)&&(n=t.split(".").slice(0,3).join(".")+".15",this.setState({localIP:t,knownDevice:n})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"loadAboutAsync",value:function(){var e=Object(o.a)(c.a.mark(function e(t){var n,i,o,s,l,u,d;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="169"===t.split(".").slice(0,1),i=n?"localDevices":"remoteDevices",e.prev=2,o=new Request("http://"+t+"/about"),e.next=7,fetch(o);case 7:return s=e.sent,e.next=10,s.json();case 10:if(!(l=e.sent)){e.next=16;break}if(Object(he.c)(l.macAddress)){e.next=14;break}return e.abrupt("return");case 14:u={name:l.model,serialNumber:l.serialNumber,ipAddress:l.ipAddress,macAddress:l.macAddress,about:l},this.state[i].filter(function(e){return e.ipAddress===t}).length<=0&&this.setState(Object(a.a)({},i,[].concat(Object(r.a)(this.state[i]),[u])));case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(2),d=this.state[i].filter(function(e){return e.ipAddress===t}),this.setState(Object(a.a)({},i,this.state[i].filter(function(e){return e!==d})));case 22:return e.prev=22,this.setState({scanCompleted:this.state.scanCompleted+1}),e.finish(22);case 25:case"end":return e.stop()}},e,this,[[2,18,22,25]])}));return function(t){return e.apply(this,arguments)}}()},{key:"ScanProgress",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e?f.a.createElement(f.a.Fragment,null):f.a.createElement(f.a.Fragment,null,f.a.createElement(P.a,{variant:"determinate",value:t,color:"secondary"}))}},{key:"ListDevices",value:function(e){var t=this,n=function(e){return"/device/"+e},a=function(e){return function(t){return f.a.createElement(y.b,Object.assign({to:n(e)},t))}},r=function(e){return"nav-device-"+e.split(".").join("-")};return e?e.map(function(e){return f.a.createElement(f.a.Fragment,{key:e.ipAddress},f.a.createElement(S.a,{variant:"inset",key:(n=e.ipAddress,"nav-divider-"+n.split(".").join("-"))}),f.a.createElement(M.a,{button:!0,dense:!0,key:r(e.ipAddress),component:a(e.ipAddress),selected:t.state.selectedKey===e.ipAddress,onClick:function(n){return t.handleListItemClick(n,e.ipAddress)}},f.a.createElement(H.a,null,f.a.createElement(de.a,null)),f.a.createElement(W.a,{primary:e.name,secondary:e.ipAddress})));var n}):f.a.createElement(f.a.Fragment,null)}},{key:"getAbout",value:function(e){if(!e)return null;var t="169"===e.split(".").slice(0,1)?"localDevices":"remoteDevices";return this.state[t].find(function(t){return t.ipAddress===e}).about}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,r=t.reduxTheme,i=this.state,c=i.openDrawer,o=i.openSnackbar,s=i.snackbarMessage,l=this.state,u=l.localIP,d=l.localDevices,p=l.remoteDevices,h=this.state,m=h.isLocalScan,g=h.isRemoteScan,v=h.scanCompleted,x=h.scanTotal,O=x>0&&v<x,E=m&&O,C=g&&O,A=O?100*v/x:0;return f.a.createElement(y.a,null,f.a.createElement("div",{className:n.root},f.a.createElement(j.a,null),f.a.createElement(w.a,{position:"fixed",className:b()(n.appBar,Object(a.a)({},n.appBarShift,c))},f.a.createElement(K.a,{disableGutters:!c},f.a.createElement(N.a,{edge:"start",color:"inherit","aria-label":"Open drawer",onClick:this.toggleDrawer(!0),className:b()(n.menuButton,c&&n.hide)},f.a.createElement(le.a,null)),f.a.createElement(k.c,null,f.a.createElement(k.a,{path:"/",exact:!0,component:this.GettingStartedTitle}),f.a.createElement(k.a,{path:"/device/:id",exact:!0,component:this.ChannelTitle})),f.a.createElement("div",{className:n.grow}),f.a.createElement(q.a,{title:"Toggle theme",enterDelay:300},f.a.createElement(N.a,{color:"inherit",onClick:this.handleTogglePaletteType,"aria-label":"toggleTheme"},"light"===r.paletteType?f.a.createElement(ie.a,null):f.a.createElement(oe.a,null))),f.a.createElement(q.a,{title:"Github repository",enterDelay:300},f.a.createElement(N.a,{edge:"end",component:"a",color:"inherit",href:"https://github.com/zivelab/zivelab-channels","aria-label":"github"},f.a.createElement(ae.a,null))))),f.a.createElement(D.a,{className:n.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:n.drawerPaper}},f.a.createElement("div",{className:n.drawerHeader},f.a.createElement(N.a,{onClick:this.toggleDrawer(!1)},"ltr"===r.direction?f.a.createElement(Y.a,null):f.a.createElement(V.a,null))),f.a.createElement(S.a,{key:"nav-first-divider"}),f.a.createElement(M.a,{button:!0,dense:!0,key:ve,component:this.gettingStartedLink,selected:this.state.selectedKey===ve,onClick:function(t){return e.handleListItemClick(t,ve)}},f.a.createElement(W.a,{primary:"Getting Started"})),f.a.createElement(S.a,{key:"nav-second-divider"}),f.a.createElement(q.a,{title:"Click to scan local devices","aria-label":"Click to scan local devices"},f.a.createElement(M.a,{button:!0,dense:!0,key:"nav-local-devices",onClick:this.handleLocalClick,disabled:O},f.a.createElement(H.a,null,f.a.createElement(te.a,null)),f.a.createElement(W.a,{primary:"Scan My Devices",secondary:E?"scanning... "+v+"/"+x:d.length?"":"no devices found"}))),this.ScanProgress(!E,A),this.ListDevices(d),f.a.createElement(S.a,{key:"nav-third-divider"}),f.a.createElement(q.a,{title:"Click to scan remote devices","aria-label":"Click to scan remote devices"},f.a.createElement(M.a,{button:!0,dense:!0,key:"nav-remote-devices",onClick:this.handleRemoteClick,disabled:O},f.a.createElement(H.a,null,f.a.createElement(te.a,null)),f.a.createElement(W.a,{primary:"Scan Remote Devices",secondary:C?"scanning... "+v+"/"+x:p.length?u:"no devices found"}))),this.ScanProgress(!C,A),this.ListDevices(p),f.a.createElement(S.a,{key:"nav-last-divider"}),f.a.createElement(me.a,{classes:n,knownDevice:this.state.knownDevice,onClick:this.handleAddKnownDevice})),f.a.createElement("main",{className:b()(n.content,Object(a.a)({},n.contentShift,c))},f.a.createElement(k.c,null,f.a.createElement(k.a,{path:"/",exact:!0,component:this.gettingStartedPage}),f.a.createElement(k.a,{path:"/device/:id",exact:!0,component:this.channelPage}))),f.a.createElement(B.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:o,autoHideDuration:2e3,onClose:this.handleSnackbarClose,ContentProps:{"aria-describedby":"message-id"},message:f.a.createElement("span",{id:"message-id"},s),action:[f.a.createElement(N.a,{key:"close","aria-label":"Close",color:"inherit",className:n.close,onClick:this.handleSnackbarClose},f.a.createElement(Q.a,null))]})))}}]),t}(f.a.Component);t.a=Object(pe.a)(Object(x.b)(function(e){return{reduxTheme:e.theme}}),Object(v.withStyles)(function(e){return{"@global":{strong:{fontWeight:e.typography.fontWeightMedium}},root:{display:"flex"},grow:{flexGrow:1},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},badgeMargin:{margin:2*e.spacing.unit},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(h.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240,marginTop:"32px"},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},fab:{position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit},markdown:Object(h.a)({},e.typography.body1,{padding:"0 8px",margin:"32px"})}}))(ye)}).call(this,n(96))},147:function(e,t,n){"use strict";var a=n(31),r=n(32),i=n(35),c=n(33),o=n(34),s=n(17),l=n(0),u=n.n(l),d=n(106),p=n.n(d),h=n(150),m=n.n(h),f=n(157),g=n.n(f),b=n(152),v=n.n(b),y=n(153),k=n.n(y),x=n(151),O=n.n(x),w=n(148),E=n.n(w),j=n(154),C=n.n(j),S=n(156),A=n.n(S),D=n(155),T=n.n(D),N=n(46),L=n.n(N),P=n(149),I=n.n(P),M=n(45),R=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).initialize=function(e){var t=Object(M.d)(e);n.setState({knownDevice:e,validKnownDevice:t})},n.handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.handleChange=function(e){var t=e.target.value,a=Object(M.d)(t);console.log(t),n.setState({knownDevice:t,validKnownDevice:a})},n.handleClick=function(){n.handleClose(),n.props.onClick(n.state.knownDevice)},n.state={open:!1,knownDevice:"192.168.0.15",validKnownDevice:!0},n.initialize=n.initialize.bind(Object(s.a)(Object(s.a)(n))),n.handleOpen=n.handleOpen.bind(Object(s.a)(Object(s.a)(n))),n.handleClose=n.handleClose.bind(Object(s.a)(Object(s.a)(n))),n.handleChange=n.handleChange.bind(Object(s.a)(Object(s.a)(n))),n.handleClick=n.handleClick.bind(Object(s.a)(Object(s.a)(n))),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.initialize(this.props.knownDevice)}},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.open,a=t.knownDevice,r=t.validKnownDevice;return u.a.createElement(u.a.Fragment,null,u.a.createElement(L.a,{title:"Click to add known device","aria-label":"Click to add known device"},u.a.createElement(E.a,{"aria-label":"Add",className:e.fab,color:"primary",size:"medium",onClick:this.handleOpen},u.a.createElement(I.a,null))),u.a.createElement(m.a,{open:n,onClose:this.handleClose,"aria-labelledby":"form-dialog-known-device"},u.a.createElement(O.a,{id:"form-dialog-known-device"},"Add known device"),u.a.createElement(v.a,null,u.a.createElement(k.a,null,"Please enter the known IP address of your device here."),u.a.createElement("br",null),u.a.createElement(C.a,{required:!0,error:!r},u.a.createElement(T.a,null,"IP address"),u.a.createElement(A.a,{autoFocus:!0,id:"ipAddress-to-add",label:"IP address",value:a,onChange:this.handleChange,type:"text",fullWidth:!0}))),u.a.createElement(g.a,null,u.a.createElement(p.a,{onClick:this.handleClick,color:"primary",disabled:!r},"Add"))))}}]),t}(l.Component);t.a=R},158:function(e,t,n){e.exports=n.p+"static/media/gettingStarted.084dd3fa.md"},159:function(e,t,n){"use strict";var a=n(22),r=n(21),i=n(174),c=n(63),o=n(18),s=n.n(o),l=n(28),u=n(31),d=n(32),p=n(35),h=n(33),m=n(34),f=n(17),g=(n(66),n(0)),b=n.n(g),v=n(20),y=n(84),k=n.n(y),x=n(160),O=n.n(x),w=n(80),E=(new Date).getTime(),j={NotAssigned:"NotAssigned",Idle:"Idle",Running:"Running",Finished:"Finished",Stopped:"Stopped",RunningNoiseLevel:"RunningNoiseLevel"},C={initialFrequency:1e3,finalFrequency:1,density:10,iteration:1,currentRange:2,maxInitialDelay:12,skip:1,cycles:0},S=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={about:null,channel:null,cook:null,parameters:C,activeIndex:-1,auxData:[]},n.loadAboutAsync=n.loadAboutAsync.bind(Object(f.a)(Object(f.a)(n))),n.loadChannelAsync=n.loadChannelAsync.bind(Object(f.a)(Object(f.a)(n))),n.loadCookAsync=n.loadCookAsync.bind(Object(f.a)(Object(f.a)(n))),n.loadSamplesAsync=n.loadSamplesAsync.bind(Object(f.a)(Object(f.a)(n))),n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){clearInterval(this.timerID)}},{key:"componentDidMount",value:function(){var e=this;this.loadAboutAsync(),this.loadChannelAsync(),this.timerID=setInterval(function(){return e.loadChannelAsync},1e3)}},{key:"loadAboutAsync",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,n,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.ipAddress,e.prev=1,n="http://"+t+"/about",e.next=5,fetch(n);case 5:return a=e.sent,e.next=8,a.json();case 8:(r=e.sent)&&this.setState({about:r}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[1,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"loadChannelAsync",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,n,a,r,o,l,u,d,p,h;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.ipAddress,e.prev=1,n="http://"+t+"/channel",e.next=5,fetch(n);case 5:return a=e.sent,e.next=8,a.json();case 8:(r=e.sent)&&(o=Object.keys(j).find(function(e){return j[e]===r.state}),r.isIdle=o===j.Idle,r.isRunning=o===j.Running||o===j.Finished||o===j.Stopped,r.isRunningNoiseLevel=o===j.RunningNoiseLevel,l={time:(new Date).getTime()-E,voltage:r.auxVoltage,temperature:r.auxTemperature},this.state.auxData.length<200?this.setState({channel:r,auxData:[].concat(Object(c.a)(this.state.auxData),[l])}):(u=Object(i.a)(this.state.auxData),u[0],d=u.slice(1),this.setState({channel:r,auxData:[].concat(Object(c.a)(d),[l])})),r.lastStarted&&(p=r.lastStarted.ticks,h=r.lastStarted.count,this.state.cook&&this.state.cook.started.ticks===p&&this.state.cook.started.count===h||this.loadCookAsync())),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:return e.prev=15,e.finish(15);case 17:case"end":return e.stop()}},e,this,[[1,12,15,17]])}));return function(){return e.apply(this,arguments)}}()},{key:"loadCookAsync",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,n,a,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.ipAddress,e.prev=1,n="http://"+t+"/cook",e.next=5,fetch(n);case 5:return a=e.sent,e.next=8,a.json();case 8:(i=e.sent)&&(i.started.moment=O()(i.started.ticks-621355968e5),this.setState({cook:i,parameters:Object(r.a)({},i.parameters)})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[1,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"loadSamplesAsync",value:function(){var e=Object(l.a)(s.a.mark(function e(t){var n,i,c,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="http://"+this.props.ipAddress+"/sample?"+t.toString(),e.next=4,fetch(n);case 4:return i=e.sent,e.next=7,i.json();case 7:(c=e.sent)&&this.state.cook&&this.state.cook.data&&t>=0&&t<this.state.cook.data.length&&(o=this.state.cook.data.map(function(e,n){return n===t?e.samples=c:e}),this.setState({cook:Object(r.a)({},this.state.cook,Object(a.a)({},o,o))})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.about,a=t.channel,r=t.cook;return b.a.createElement(w.a,{className:e.root},b.a.createElement("div",{className:e.content},b.a.createElement("h2",null,"About"),n?b.a.createElement(k.a,{src:n,displayDataTypes:!1,collapsed:!0}):b.a.createElement("div",null),b.a.createElement("h2",null,"Channel"),a?b.a.createElement(k.a,{src:a,displayDataTypes:!1,collapsed:!0}):b.a.createElement("div",null),b.a.createElement("h2",null,"Cook"),r?b.a.createElement(k.a,{src:r,displayDataTypes:!1,collapsed:!0}):b.a.createElement("div",null)))}}]),t}(g.Component);t.a=Object(v.withStyles)(function(e){return{root:{marginBottom:100},content:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit,padding:2*e.spacing.unit}}})(S)},173:function(e,t,n){"use strict";var a=n(31),r=n(32),i=n(35),c=n(33),o=n(34),s=(n(66),n(0)),l=n.n(s),u=n(20),d=n(80),p=n(78),h=n(175),m=n(21),f=n(81),g=n(83),b=n.n(g),v=n(36);b.a.Lexer.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u2424/g,"\n"),this.token(e,!0)};var y=new b.a.Renderer;y.link=function(e,t,n){return'<a href="'.concat(e,'"').concat(' target="_blank" rel="noopener nofollow"',">").concat(n,"</a>")};var k={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,highlight:function(e,t){var n;switch(t){case"diff":n=v.b.languages.diff;break;case"css":n=v.b.languages.css;break;case"ts":case"tsx":n=v.b.languages.typescript;break;case"js":case"jsx":default:n=v.b.languages.jsx}return v.b.highlight(e,n)},renderer:y};var x=Object(u.withStyles)(function(e){return{root:{fontFamily:e.typography.fontFamily,fontSize:16,color:e.palette.text.primary,"& .anchor-link":{marginTop:-125,position:"absolute"},'& pre, & pre[class*="language-"]':{margin:"24px 0",padding:"12px 18px",backgroundColor:e.palette.background.paper,borderRadius:e.shape.borderRadius,overflow:"auto",WebkitOverflowScrolling:"touch"},"& code":{display:"inline-block",lineHeight:1.6,fontFamily:'Consolas, "Liberation Mono", Menlo, Courier, monospace',padding:"3px 6px",color:e.palette.text.primary,backgroundColor:e.palette.background.paper,fontSize:14},"& p code, & ul code, & pre code":{fontSize:14,lineHeight:1.6},"& h1":Object(m.a)({},e.typography.h2,{margin:"32px 0 16px"}),"& .description":Object(m.a)({},e.typography.h5,{margin:"0 0 40px"}),"& h2":Object(m.a)({},e.typography.h4,{margin:"32px 0 24px"}),"& h3":Object(m.a)({},e.typography.h5,{margin:"32px 0 24px"}),"& h4":Object(m.a)({},e.typography.h6,{margin:"24px 0 16px"}),"& h5":Object(m.a)({},e.typography.subtitle2,{margin:"24px 0 16px"}),"& p, & ul, & ol":{lineHeight:1.6},"& h1, & h2, & h3, & h4":{"& code":{fontSize:"inherit",lineHeight:"inherit",wordBreak:"break-word"},"& .anchor-link-style":{opacity:0,display:"none"},"&:hover .anchor-link-style":{display:"inline-block",opacity:1,padding:"0 8px",color:e.palette.text.hint,"&:hover":{color:e.palette.text.secondary},"& svg":{width:"0.55em",height:"0.55em",fill:"currentColor"}}},"& table":{width:"100%",display:"block",overflowX:"auto",WebkitOverflowScrolling:"touch",borderCollapse:"collapse",borderSpacing:0,overflow:"hidden","& .prop-name":{fontSize:13,fontFamily:'Consolas, "Liberation Mono", Menlo, monospace'},"& .required":{color:"light"===e.palette.type?"#006500":"#9bc89b"},"& .prop-type":{fontSize:13,fontFamily:'Consolas, "Liberation Mono", Menlo, monospace',color:"light"===e.palette.type?"#932981":"#dbb0d0"},"& .prop-default":{fontSize:13,fontFamily:'Consolas, "Liberation Mono", Menlo, monospace',borderBottom:"1px dotted ".concat(e.palette.text.hint)}},"& thead":{fontSize:14,fontWeight:e.typography.fontWeightMedium,color:e.palette.text.secondary},"& tbody":{fontSize:14,lineHeight:1.5,color:e.palette.text.primary},"& td":{borderBottom:"1px solid ".concat(e.palette.divider),padding:"8px 16px 8px 8px",textAlign:"left"},"& td:last-child":{paddingRight:24},"& td compact":{paddingRight:24},"& td code":{fontSize:13,lineHeight:1.6},"& th":{whiteSpace:"pre",borderBottom:"1px solid ".concat(e.palette.divider),fontWeight:e.typography.fontWeightMedium,padding:"0 16px 0 8px",textAlign:"left"},"& th:last-child":{paddingRight:24},"& tr":{height:48},"& thead tr":{height:64},"& strong":{fontWeight:e.typography.fontWeightMedium},"& blockquote":{borderLeft:"5px solid ".concat(e.palette.text.hint),backgroundColor:e.palette.background.paper,padding:"4px 24px",margin:"24px 0"},"& a, & a code":{color:e.palette.secondary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},"& img":{maxWidth:"100%"}}}},{flip:!1})(function(e){var t=e.classes,n=e.className,a=e.text,r=Object(h.a)(e,["classes","className","text"]);return l.a.createElement("div",Object.assign({className:Object(f.a)(t.root,"markdown-body",n),dangerouslySetInnerHTML:{__html:b()(a,k)}},r))}),O=/---[\r\n]([\s\S]*)[\r\n]---/,w=/^\s*$/;var E=Object(p.a)(Object(u.withStyles)(function(e){return{markdownElement:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit,padding:e.spacing.unit}}}))(function(e){var t=e.classes,n=e.markdown,a=n?function(e){return e.replace(O,"").split(/^{{|}}$/gm).filter(function(e){return!w.test(e)})}(n):[""];return l.a.createElement("div",null,a.map(function(e){return l.a.createElement(x,{className:t.markdownElement,key:e,text:e})}))}),j=n(158),C=n.n(j),S=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={md:""},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch(C.a).then(function(e){return e.text()}).then(function(t){e.setState({md:t})})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.md;return l.a.createElement(d.a,{className:e.root},l.a.createElement(E,{className:e.markdown,markdown:t}))}}]),t}(s.Component);t.a=Object(u.withStyles)(function(e){return{root:{marginBottom:100},markdown:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit,padding:2*e.spacing.unit}}})(S)},180:function(e,t,n){e.exports=n(347)},347:function(e,t,n){"use strict";n.r(t);n(66);var a=n(0),r=n.n(a),i=n(25),c=n.n(i),o=n(53),s=n(62),l=n(22),u=n(52),d=n(141),p=n.n(d),h=n(105),m=n.n(h),f=n(38),g={direction:"ltr",paletteType:"light",paletteColors:{primary:p.a,secondary:{main:Object(f.darken)(m.a.A400,.08)}}},b=Object(l.a)({},u.a.THEME_CHANGE,function(e,t){return{paletteType:t.payload.paletteType||e.paletteType,direction:t.payload.direction||e.direction,paletteColors:t.payload.paletteColors||e.paletteColors}});var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=e;return b[t.type]&&(n=b[t.type](e,t)),n},y=Object(s.c)(Object(s.b)({theme:v})),k=n(31),x=n(32),O=n(35),w=n(33),E=n(34),j=n(54),C=n(36),S=n(107);function A(e){var t=new RegExp("(?:(?:^|.*;*)".concat(e,"*=*([^;]*).*$)|^.*$"));return document.cookie.replace(t,"$1")}var D=Object(j.c)();function T(e){Object(C.d)("light"===e.paletteType?C.c:C.a),document.body.dir=e.direction}var N=function(e){function t(){var e,n;Object(k.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(E.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){T(this.props.reduxTheme);var e=this.props.reduxTheme,t=A("paletteType"),n=A("paletteColors");(t&&e.paletteType!==t||n&&JSON.stringify(e.paletteColors)!==n)&&this.props.dispatch({type:u.a.THEME_CHANGE,payload:{paletteType:t,paletteColors:n?JSON.parse(n):null}})}},{key:"componentDidUpdate",value:function(){T(this.props.reduxTheme)}},{key:"render",value:function(){var e=this.props.children,t=this.state.theme;return r.a.createElement(j.a,{generateClassName:D},r.a.createElement(j.b,{theme:t},e))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if("undefined"===typeof t.theme)return{prevProps:e,theme:Object(S.a)(e.reduxTheme)};var n=t.prevProps;return e.reduxTheme.paletteType!==n.reduxTheme.paletteType||e.reduxTheme.paletteColors!==n.reduxTheme.paletteColors||e.reduxTheme.direction!==n.reduxTheme.direction?{prevProps:e,theme:Object(S.a)(e.reduxTheme)}:null}}]),t}(r.a.Component),L=Object(o.b)(function(e){return{reduxTheme:e.theme}})(N),P=n(143);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{store:y},r.a.createElement(L,null,r.a.createElement(P.a,null))),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,t,n){"use strict";(function(e){n.d(t,"c",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"d",function(){return s});var a,r,i,c=n(142),o=n.n(c);n(220),n(221),n(222),n(223),n(224),n(225);function s(e){a.textContent=e}e.browser&&(r=n(226),i=n(227),(a=document.createElement("style")).setAttribute("data-prism","true"),document.head.appendChild(a)),t.b=o.a}).call(this,n(96))},45:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return o});var a={ZiveLab:["00:1b:c5:08:10","00:1b:c5:08:11","00:1b:c5:08:12","00:1b:c5:08:13","00:1b:c5:08:14","00:1b:c5:08:15","00:1b:c5:08:16","00:1b:c5:08:17","00:1b:c5:08:18","00:1b:c5:08:19","00:1b:c5:08:1a","00:1b:c5:08:1b","00:1b:c5:08:1c","00:1b:c5:08:1d","00:1b:c5:08:1e","00:1b:c5:08:1f"]};function r(){return new Promise(function(e,t){var n=window.webkitRTCPeerConnection||window.mozRTCPeerConnection;n||t("Your browser does not support this API");var a=new n({iceServers:[]});a.createDataChannel("",{reliable:!1}),a.onicecandidate=function(t){if(t.candidate){var n=function(e){var t="";return e.split("\r\n").forEach(function(e){if(~e.indexOf("a=candidate")){var n=e.split(" "),a=n[4];"host"===n[7]&&(t=a)}else if(~e.indexOf("c=")){var r=e.split(" ")[2];t=r}}),t}("a="+t.candidate.candidate);e(n)}},a.createOffer(function(e){a.setLocalDescription(e)},function(e){console.warn("offer failed",e)})})}function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!c(e))return null;var n=e.substr(0,e.lastIndexOf(".")+1);return t?Array.from({length:255},function(e,t){return n+(t+1)}):Array.from({length:253},function(e,t){return n+(t+2)})}function c(e){return!!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)||(alert("You have entered an invalid IP address!"),!1)}function o(e){return"ZiveLab"===function(e,t){var n=e.toLowerCase().split(":").slice(0,5).join(":");if(t&&a[t]&&a[t].indexOf(n)>-1)return t;if(-1===JSON.stringify(a).indexOf(n))return!1;for(var r in a)if(a[r].indexOf(n)>-1)return r}(e,"ZiveLab")}},52:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={THEME_CHANGE:"THEME_CHANGE",OPTIONS_CHANGE:"OPTIONS_CHANGE"}},66:function(e,t,n){"use strict";var a=n(54);Object(a.d)()},78:function(e,t,n){"use strict";function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}},function(e){return e})}n.d(t,"a",function(){return a})},80:function(e,t,n){"use strict";var a=n(22),r=n(0),i=n.n(r),c=n(81),o=n(20);t.a=Object(o.withStyles)(function(e){var t;return{root:(t={flex:"1 1 100%",maxWidth:"100%"},Object(a.a)(t,e.breakpoints.up("sm"),{paddingRight:1*e.spacing.unit}),Object(a.a)(t,e.breakpoints.up("lg"),{paddingLeft:1*e.spacing.unit,paddingRight:5*e.spacing.unit}),t)}})(function(e){var t=e.className,n=e.classes,a=e.children;return i.a.createElement("main",{className:Object(c.a)(n.root,t)},a)})}},[[180,1,2]]]);
//# sourceMappingURL=main.3fca3900.chunk.js.map