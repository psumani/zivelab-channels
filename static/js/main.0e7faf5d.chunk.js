(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports=a(256)},256:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),s=a(24),l=a(112),o=a(20),u=a.n(o),d=a(38),m=a(96),h=a(97),p=a(113),f=a(98),v=a(114),g=a(99),b=a(5),E=a.n(b),k=a(29),w=a(49),y=a.n(w),S=a(50),C=a.n(S),A=a(48),x=a.n(A),D=Object(k.createMuiTheme)({palette:{primary:{light:y.a[300],main:y.a[500],dark:y.a[700]},secondary:{light:C.a[300],main:C.a[500],dark:C.a[700]}},typography:{useNextVariants:!0}});var O=function(e){return function(t){return r.a.createElement(k.MuiThemeProvider,{theme:D},r.a.createElement(x.a,null),r.a.createElement(e,t))}},L=a(51),j=a(23),P=a(104),I=a.n(P),N=a(31),T=a.n(N),M=a(107),R=a.n(M),B=a(53),H=a.n(B),F=a(102),G=a.n(F),z=a(39),Z=a.n(z),K=a(52),W=a.n(K),q=a(40),J=a.n(q),V=a(110),Y=a.n(V),$=a(105),Q=a.n($),U=a(66),X=a.n(U),_=a(37),ee=a.n(_),te=a(64),ae=a.n(te),ne=a(108),re=a.n(ne),ie=a(109),ce=a.n(ie),se=a(111),le=a.n(se),oe=a(67),ue=a.n(oe),de=a(106),me=a.n(de),he=a(103),pe=a.n(he),fe={ZiveLab:["00:1b:c5:08:10","00:1b:c5:08:11","00:1b:c5:08:12","00:1b:c5:08:13","00:1b:c5:08:14","00:1b:c5:08:15","00:1b:c5:08:16","00:1b:c5:08:17","00:1b:c5:08:18","00:1b:c5:08:19","00:1b:c5:08:1a","00:1b:c5:08:1b","00:1b:c5:08:1c","00:1b:c5:08:1d","00:1b:c5:08:1e","00:1b:c5:08:1f"]};function ve(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!function(e){if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e))return!0;return alert("You have entered an invalid IP address!"),!1}(e))return null;var a=e.substr(0,e.lastIndexOf(".")+1);return t?Array.from({length:255},function(e,t){return a+(t+1)}):Array.from({length:253},function(e,t){return a+(t+2)})}function ge(e){return"ZiveLab"===function(e,t){var a=e.toLowerCase().split(":").slice(0,5).join(":");if(t&&fe[t]&&fe[t].indexOf(a)>-1)return t;if(-1===JSON.stringify(fe).indexOf(a))return!1;for(var n in fe)if(fe[n].indexOf(a)>-1)return n}(e,"ZiveLab")}var be="getting-started-nav",Ee=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).state={openDrawer:!1,openSnackbar:!1,snackbarMessage:"",selectedKey:be,localIP:null,localDevices:[],remoteDevices:[],scanDevices:!1,isLocalScan:!1,isRemoteScan:!1,scanCompleted:0,scanTotal:0},a.toggleDrawer=function(e){return function(){a.setState({openDrawer:e})}},a.handleSnackbarClose=function(e,t){"clickaway"!==t&&a.setState({openSnackbar:!1})},a.handleListItemClick=function(e,t){a.setState({selectedKey:t})},a.handleLocalClick=function(){a.findDevices(!0)},a.handleRemoteClick=function(){a.findDevices(!1)},a.GettingStartedHome=function(){return r.a.createElement("h1",null,"Getting Started")},a.GettingStartedTitle=function(){return r.a.createElement(ee.a,{variant:"h6",color:"inherit",noWrap:!0},"ZiveLab Channels v0.1.0")},a.DeviceTitle=function(e){var t=e.match.params;return r.a.createElement(ee.a,{variant:"h6",color:"inherit",noWrap:!0},"Device at ",t.id)},a.DeviceHome=function(e){var t=e.match.params,n=a.getAbout(t.id);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Device at ",t.id," will be rendered here"),r.a.createElement(ae.a,{src:n,displayDataTypes:!1}),r.a.createElement("h3",null,"ref"),r.a.createElement(ae.a,{src:{model:"Zive ZIM-SIF",description:"Impedance Meter",frequencyRanges:"4kHz to 0.1Hz",voltageRanges:"1000V/100V",currentRanges:"2A/400mA/200mA...400uA",temperatureSensor:"PT1000",macAddress:"00:1B:C5:08:11:00",ipAddress:"192.168.0.6",subnetMask:"255.255.255.0",router:"192.168.0.1",port:2e3,sifBoard:"1.0.0.0",sifFirmware:"1.0.1.1",sifSerialNumber:"IF19030001A",zimBoard:"1.1.0.0",zimFirmware:"0.0.1.0",zimSerialNumber:"IM19030001A"},displayDataTypes:!1}))},a.gettingStartedLink=function(e){return r.a.createElement(L.b,Object.assign({to:"/"},e))},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"findDevices",value:function(){var e=Object(d.a)(u.a.mark(function e(t){var a,n,r,i=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=t?"Scanning local devices...":"Scanning remote devices...",this.setState({openSnackbar:!0,snackbarMessage:a}),t||this.state.localIP){e.next=6;break}return e.next=6,this.getLocalIPAddressAsync();case 6:n=t?"169.254.17.1":this.state.localIP,r=ve(n),this.setState({isLocalScan:t,isRemoteScan:!t,scanCompleted:0,scanTotal:r.length}),r.map(function(){var e=Object(d.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.loadAboutAsync(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()},{key:"getLocalIPAddressAsync",value:function(){var e=Object(d.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(e,t){var a=window.webkitRTCPeerConnection||window.mozRTCPeerConnection;a||t("Your browser does not support this API");var n=new a({iceServers:[]});n.createDataChannel("",{reliable:!1}),n.onicecandidate=function(t){if(t.candidate){var a=function(e){var t="";return e.split("\r\n").forEach(function(e){if(~e.indexOf("a=candidate")){var a=e.split(" "),n=a[4];"host"===a[7]&&(t=n)}else if(~e.indexOf("c=")){var r=e.split(" ")[2];t=r}}),t}("a="+t.candidate.candidate);e(a)}},n.createOffer(function(e){n.setLocalDescription(e)},function(e){console.warn("offer failed",e)})});case 3:(t=e.sent)&&this.setState({localIP:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"loadAboutAsync",value:function(){var e=Object(d.a)(u.a.mark(function e(t){var a,n,r,i,c,o,d;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="169"===t.split(".").slice(0,1),n=a?"localDevices":"remoteDevices",e.prev=2,r=new Request("http://"+t+"/about"),e.next=7,fetch(r);case 7:return i=e.sent,e.next=10,i.json();case 10:if(!(c=e.sent)){e.next=16;break}if(ge(c.MacAddress)){e.next=14;break}return e.abrupt("return");case 14:o={name:c.Model||c.model,serialNumber:c.SerialNumber||c.serialNumber,ipAddress:c.IPAddress||c.ipAddress,macAddress:c.MacAddress||c.macAddress,about:c},this.state[n].filter(function(e){return e.ipAddress===t}).length<=0&&this.setState(Object(s.a)({},n,[].concat(Object(l.a)(this.state[n]),[o])));case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(2),d=this.state[n].filter(function(e){return e.ipAddress===t}),this.setState(Object(s.a)({},n,this.state[n].filter(function(e){return e!==d})));case 22:return e.prev=22,this.setState({scanCompleted:this.state.scanCompleted+1}),e.finish(22);case 25:case"end":return e.stop()}},e,this,[[2,18,22,25]])}));return function(t){return e.apply(this,arguments)}}()},{key:"ScanProgress",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{variant:"determinate",value:t,color:"secondary"}))}},{key:"ListDevices",value:function(e){var t=this,a=function(e){return"/device/"+e};return e?e.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,null),r.a.createElement(Z.a,{button:!0,key:e.ipAddress,component:(n=e.ipAddress,function(e){return r.a.createElement(L.b,Object.assign({to:a(n)},e))}),selected:t.state.selectedKey===e.ipAddress,onClick:function(a){return t.handleListItemClick(a,e.ipAddress)}},r.a.createElement(W.a,null,r.a.createElement(pe.a,null)),r.a.createElement(J.a,{primary:e.name,secondary:e.ipAddress})));var n}):r.a.createElement(r.a.Fragment,null)}},{key:"getAbout",value:function(e){if(!e)return null;var t="169"===e.split(".").slice(0,1)?"localDevices":"remoteDevices";return this.state[t].find(function(t){return t.ipAddress===e}).about}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.theme,i=this.state,c=i.openDrawer,l=i.openSnackbar,o=i.snackbarMessage,u=this.state,d=u.localIP,m=u.localDevices,h=u.remoteDevices,p=this.state,f=p.isLocalScan,v=p.isRemoteScan,g=p.scanCompleted,b=p.scanTotal,k=b>0&&g<b,w=f&&k,y=v&&k,S=k?100*g/b:0;return r.a.createElement(L.a,null,r.a.createElement("div",{className:a.root},r.a.createElement(x.a,null),r.a.createElement(I.a,{position:"fixed",className:E()(a.appBar,Object(s.a)({},a.appBarShift,c))},r.a.createElement(Q.a,{disableGutters:!c},r.a.createElement(H.a,{color:"inherit","aria-label":"Open drawer",onClick:this.toggleDrawer(!0),className:E()(a.menuButton,c&&a.hide)},r.a.createElement(me.a,null)),r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/",exact:!0,component:this.GettingStartedTitle}),r.a.createElement(j.a,{path:"/device/:id",exact:!0,component:this.DeviceTitle})))),r.a.createElement(R.a,{className:a.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(H.a,{onClick:this.toggleDrawer(!1)},"ltr"===n.direction?r.a.createElement(re.a,null):r.a.createElement(ce.a,null))),r.a.createElement(T.a,null),r.a.createElement(Z.a,{button:!0,key:be,component:this.gettingStartedLink,selected:this.state.selectedKey===be,onClick:function(t){return e.handleListItemClick(t,be)}},r.a.createElement(J.a,{primary:"Getting Started"})),r.a.createElement(T.a,null),r.a.createElement(X.a,{title:"Click to scan local devices","aria-label":"Click to scan local devices"},r.a.createElement(Z.a,{button:!0,key:"local-devices-nav",onClick:this.handleLocalClick,disabled:k},r.a.createElement(W.a,null,r.a.createElement(ue.a,null)),r.a.createElement(J.a,{primary:"My Devices",secondary:w?"scanning... "+g+"/"+b:m.length?"":"no devices found"}))),this.ScanProgress(!w,S),this.ListDevices(m),r.a.createElement(T.a,null),r.a.createElement(X.a,{title:"Click to scan remote devices","aria-label":"Click to scan remote devices"},r.a.createElement(Z.a,{button:!0,key:"remote-devices-nav",onClick:this.handleRemoteClick,disabled:k},r.a.createElement(W.a,null,r.a.createElement(ue.a,null)),r.a.createElement(J.a,{primary:"Remote Devices",secondary:y?"scanning... "+g+"/"+b:h.length?d:"no devices found"}))),this.ScanProgress(!y,S),this.ListDevices(h),r.a.createElement(T.a,null)),r.a.createElement("main",{className:E()(a.content,Object(s.a)({},a.contentShift,c))},r.a.createElement("div",{className:a.drawerHeader}),r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/",exact:!0,component:this.GettingStartedHome}),r.a.createElement(j.a,{path:"/device/:id",exact:!0,component:this.DeviceHome}))),r.a.createElement(Y.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:l,autoHideDuration:2e3,onClose:this.handleSnackbarClose,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},o),action:[r.a.createElement(H.a,{key:"close","aria-label":"Close",color:"inherit",className:a.close,onClick:this.handleSnackbarClose},r.a.createElement(le.a,null))]})))}}]),t}(r.a.Component),ke=O(Object(k.withStyles)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},badgeMargin:{margin:2*e.spacing.unit},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(g.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},{withTheme:!0})(Ee));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ke,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[115,1,2]]]);
//# sourceMappingURL=main.0e7faf5d.chunk.js.map