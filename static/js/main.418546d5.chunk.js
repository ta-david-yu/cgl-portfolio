(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,a){e.exports=a(276)},18:function(e,t,a){},276:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(22),o=a.n(r),l=a(5),m=a(6),s=a(9),c=a(7),g=a(2),d=a(8),h=a(1),p=a(29),u=a(69),v=a.n(u);function w(e){return function(t){function a(){var e,t;Object(l.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).state={width:0,height:0},t.updateWindowDimensions=function(){t.setState({width:window.innerWidth,height:window.innerHeight})},t}return Object(d.a)(a,t),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){return n.a.createElement(e,Object.assign({},this.props,{windowWidth:this.state.width,windowHeight:this.state.height,isMobileSized:this.state.width<=720}))}}]),a}(i.Component)}a(18);var b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleOnClick=a.handleOnClick.bind(Object(g.a)(a)),a.onPointerEnter=a.onPointerEnter.bind(Object(g.a)(a)),a.onPointerLeave=a.onPointerLeave.bind(Object(g.a)(a)),a.state={isHovered:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onPointerEnter",value:function(){this.setState({isHovered:!0})}},{key:"onPointerLeave",value:function(){this.setState({isHovered:!1})}},{key:"handleOnClick",value:function(e){this.props.onClick(this.props.information)}},{key:"render",value:function(){var e=this.props.information,t=""!==e.gif,a=e.img,i=e.gif,r=this.state.isHovered,o="work-img-cover"+(r?" hover":""),l=this.props.span;return n.a.createElement(h.a,{item:!0,lg:l,md:l,sm:l,xs:12},n.a.createElement(h.a,{container:!0,direction:"column",alignItems:"center"},n.a.createElement("div",{className:"work-box box-other",onClick:this.handleOnClick,onPointerEnter:this.onPointerEnter,onPointerLeave:this.onPointerLeave},n.a.createElement("div",{className:"work-img-container"},n.a.createElement("img",{alt:e.title,src:a,className:t?o:"work-img"}),t?n.a.createElement("img",{alt:e.title,src:i,className:"work-gif"}):n.a.createElement("div",{className:"work-gif"}),t&&(r?n.a.createElement("div",{className:"work-gif-note hover"},"GIF"):n.a.createElement("div",{className:"work-gif-note"},"GIF"))),n.a.createElement("div",{className:"work-title"},e.title),n.a.createElement("div",{className:"work-job"},e.job),n.a.createElement(h.a,{container:!0,direction:"row"},n.a.createElement(h.a,{item:!0,xs:3,className:"work-team"},n.a.createElement("img",{alt:e.team,src:"./img/person-x13.png",className:"team-icon"}),e.team),n.a.createElement(h.a,{item:!0,xs:6,className:"work-date"},e.date)))))}}]),t}(i.Component),k=a(71),y=a.n(k),E=w(function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={isVideoLoaded:!1,progressState:null,currentMedia:0},a.handleOnVideoProgress=a.handleOnVideoProgress.bind(Object(g.a)(a)),a.handleOnVideoReady=a.handleOnVideoReady.bind(Object(g.a)(a)),a.handleOnMediaRight=a.handleOnMediaRight.bind(Object(g.a)(a)),a.handleOnMediaLeft=a.handleOnMediaLeft.bind(Object(g.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleOnVideoProgress",value:function(e){var t=this.state;t.progressState=e,this.setState(t)}},{key:"handleOnVideoReady",value:function(e){var t=this.state;t.isVideoLoaded=!0,this.setState(t)}},{key:"handleOnMediaRight",value:function(e){var t=this.props.mediaTable.length;if(1!==t){var a=this.state;a.currentMedia=(a.currentMedia+1)%t,a.isVideoLoaded=!1,this.setState(a)}}},{key:"handleOnMediaLeft",value:function(e){var t=this.props.mediaTable.length;if(1!==t){var a=this.state;a.currentMedia=a.currentMedia-1,a.currentMedia<0&&(a.currentMedia+=t),a.isVideoLoaded=!1,this.setState(a)}}},{key:"generateMediaJSX",value:function(e){var t=this;this.mediaJSX=[];var a=this.props.windowWidth<1024?"sm-media":"lg-media",i=this.state.currentMedia,r=e.length;e.forEach(function(e){var o=null;"video"===e.type?o=n.a.createElement("div",{className:"modal-title-media "+a},n.a.createElement("img",{alt:"left-btn",src:"./img/left-arrow-inactive.png",className:"left-button",onClick:t.handleOnMediaLeft}),n.a.createElement("img",{alt:"right-btn",src:"./img/right-arrow-inactive.png",className:"right-button",onClick:t.handleOnMediaRight}),n.a.createElement("div",{className:"media-page-number"},i+1,"/",r),t.state.isVideoLoaded?n.a.createElement("span",{className:"modal-media-loading exit"},"loading video"):n.a.createElement("span",{className:"modal-media-loading"},"loading video"),n.a.createElement(y.a,{width:"100%",height:"100%",onProgress:t.handleOnVideoProgress,onReady:t.handleOnVideoReady,light:!1,url:e.src})):"image"===e.type&&(o=n.a.createElement("div",{className:"modal-title-media "+a},n.a.createElement("img",{alt:"left-btn",src:"./img/left-arrow-inactive.png",className:"left-button",onClick:t.handleOnMediaLeft}),n.a.createElement("img",{alt:"right-btn",src:"./img/right-arrow-inactive.png",className:"right-button",onClick:t.handleOnMediaRight}),n.a.createElement("span",{className:"media-page-number"},i+1,"/",r),n.a.createElement("img",{alt:"work-img",src:e.src,className:"modal-title-img "+a}))),t.mediaJSX.push(o)})}},{key:"render",value:function(){return this.generateMediaJSX(this.props.mediaTable),n.a.createElement("div",null,n.a.createElement(h.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},n.a.createElement("div",{className:"modal-game-title"},this.props.title),this.mediaJSX[this.state.currentMedia],n.a.createElement(h.a,{item:!0},n.a.createElement("div",{className:"work-title"},this.props.type),n.a.createElement("div",{className:"modal-date"},this.props.date),n.a.createElement("div",{className:"modal-team-size"},this.props.team))))}}]),t}(i.Component)),f=[{type:"game",title:"Gerritory",img:"./img/work/gerritory-preview.png",gif:"./img/work/gerritory-preview.gif",date:"2017.1 - NOW",job:"Designer, Programmer, Visual Design",team:"4",mediaTable:[{type:"video",src:"https://youtu.be/wZ_4xxnEhlU"},{type:"image",src:"./img/work/gerritory-media-00.png"},{type:"image",src:"./img/work/gerritory-media-01.png"},{type:"image",src:"./img/work/gerritory-media-02.png"},{type:"image",src:"./img/work/gerritory-media-03.png"},{type:"image",src:"./img/work/gerritory-media-04.png"}],modal:n.a.createElement("div",null)},{type:"game",title:"Eagle Simulator & Rolling Rocker",img:"./img/work/es-rr-preview.png",gif:"./img/work/es-rr-preview.gif",date:"2017.3 - 2017.4",job:"Designer, Programmer",team:"1",mediaTable:[{type:"image",src:"./img/work/es-rr-media-01.png"},{type:"image",src:"./img/work/es-rr-media-02.png"},{type:"image",src:"./img/work/es-rr-media-00.png"}],modal:n.a.createElement("div",null)},{type:"game",title:"Hee X Hoo",img:"./img/work/hee-hoo-preview.png",gif:"./img/work/hee-hoo-preview.gif",date:"GGJ 2018",job:"Level Designer, Programmer",team:"5",mediaTable:[{type:"image",src:"./img/work/hee-hoo-media-00.png"},{type:"image",src:"./img/work/hee-hoo-media-01.png"},{type:"image",src:"./img/work/hee-hoo-media-02.png"}],modal:n.a.createElement("div",null)},{type:"game",title:"Boomeranger",img:"./img/work/boomeranger-preview.png",gif:"./img/work/boomeranger-preview.gif",date:"2016.3 - 2016.6",job:"Designer, Programmer",team:"3",mediaTable:[{type:"image",src:"./img/work/boomeranger-media-00.png"},{type:"image",src:"./img/work/boomeranger-media-01.png"},{type:"image",src:"./img/work/boomeranger-media-02.png"},{type:"image",src:"./img/work/boomeranger-media-03.png"}],modal:n.a.createElement("div",null)},{type:"game",title:"Nothing Last Forever",img:"./img/work/nothing-last-forever-preview.png",gif:"./img/work/nothing-last-forever-preview.gif",date:"GGJ 2016",job:"Programmer",team:"5",mediaTable:[{type:"image",src:"./img/work/nothing-last-forever-media-00.png"},{type:"image",src:"./img/work/nothing-last-forever-media-01.png"},{type:"image",src:"./img/work/nothing-last-forever-media-02.png"}],modal:n.a.createElement("div",null)},{type:"tool",title:"DY Engine",img:"./img/work/_temp-preview.png",gif:"",date:"2017.9 - present",job:"Programmer",team:"1",mediaTable:[{type:"video",src:"https://youtu.be/wZ_4xxnEhlU"}],modal:n.a.createElement("div",null)},{type:"tool",title:"Many-Worlds Browsing for Control of Multibody Dynamics in Unity",img:"./img/work/_temp-preview.png",gif:"",date:"2017.6 - 2018.6",job:"Programmer",team:"2",mediaTable:[{type:"video",src:"https://youtu.be/wZ_4xxnEhlU"}],modal:n.a.createElement("div",null)},{type:"game",title:"Chain Destroyer",img:"./img/work/chain-destroyer-preview.png",gif:"./img/work/chain-destroyer-preview.gif",date:"2015.1 - 2015.1",job:"UI Programmer",team:"4",mediaTable:[{type:"image",src:"./img/work/chain-destroyer-media-00.png"},{type:"image",src:"./img/work/chain-destroyer-media-01.png"},{type:"image",src:"./img/work/chain-destroyer-media-02.png"}],modal:n.a.createElement("div",null)},{type:"game",title:"SurvivorQ",img:"./img/work/survivor-q-preview.png",gif:"./img/work/survivor-q-preview.gif",date:"2016.1 - 2016.1",job:"Designer, Programmer",team:"3",mediaTable:[{type:"image",src:"./img/work/survivor-q-media-00.png"},{type:"image",src:"./img/work/survivor-q-media-01.png"}],modal:n.a.createElement("div",null)}],O=w(function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={isModalShown:!1,work:null},a.openModal=a.openModal.bind(Object(g.a)(a)),a.closeModal=a.closeModal.bind(Object(g.a)(a)),a.generateWorksItem(e.currPage),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"openModal",value:function(e){var t=this.state;t.isModalShown=!0,t.work=e,this.setState(t)}},{key:"closeModal",value:function(){var e=this.state;e.isModalShown=!1,this.setState(e)}},{key:"generateWorksItem",value:function(e){var t=[];return f.forEach(function(a){a.type===e&&t.push(a)}),t}},{key:"render",value:function(){var e=this,t=this.props.currPage,a=this.generateWorksItem(t),i=a.length>=3?4:6,r=a.map(function(t){return n.a.createElement(b,{key:t.title,information:t,span:i,onClick:e.openModal})});return n.a.createElement("div",null,n.a.createElement(h.a,{container:!0,spacing:16,direction:"column",justify:"center",alignItems:"center"},n.a.createElement(h.a,{item:!0,xs:12},"game"===t&&n.a.createElement("div",{className:"page-title left show"},"games"),"tool"===t&&n.a.createElement("div",{className:"page-title right show"},"tools/other")),n.a.createElement(h.a,{item:!0,lg:7,md:10,sm:12,xs:12},n.a.createElement(h.a,{container:!0,spacing:16,direction:"row"},r))),n.a.createElement(v.a,{contentLabel:"work-modal",isOpen:this.state.isModalShown,onRequestClose:this.closeModal,shouldCloseOnOverlayClick:!0,className:(this.props.windowWidth<1024?"sm-modal-size":"lg-modal-size")+" modal box-other",overlayClassName:"modal-overlay",closeTimeoutMS:300},n.a.createElement("div",null,this.state.work&&n.a.createElement(E,{title:this.state.work.title,type:this.state.work.type,date:this.state.work.date,team:this.state.work.team,mediaTable:this.state.work.mediaTable}),this.state.work&&this.state.work.modalContent)))}}]),t}(i.Component)),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={isHovered:!1},a.handleOnClick=a.handleOnClick.bind(Object(g.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleOnClick",value:function(e){this.props.onClick(this.props.pageName)}},{key:"render",value:function(){var e=this.props.pageName,t=e+"-button".concat(this.props.isActive?" is-active":"");return n.a.createElement("img",{alt:e.concat("-tab"),src:"./img/game-button-active.png",className:t,onClick:this.handleOnClick})}}]),t}(i.Component),N=function(e){return n.a.createElement(h.a,{item:!0})},M=n.a.createElement("div",null,n.a.createElement("div",{className:"subheader-text"},"game developer, game programmer"),n.a.createElement("div",{className:"about-text"},n.a.createElement("p",null,"Currently working on ",n.a.createElement("a",{href:"https://partygoosestudio.wixsite.com/gerritorythegame"},"Gerritory"),", a multiplayer party game.",n.a.createElement("br",null),"Following are some of my works"))),C=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).changePage=a.changePage.bind(Object(g.a)(a));return a.state={currPage:"game"},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"changePage",value:function(e){this.setState({currPage:e})}},{key:"render",value:function(){var e=this.state.currPage;return n.a.createElement("div",null,n.a.createElement("div",{className:"top-content"},n.a.createElement(h.a,{container:!0,spacing:8,direction:"column",justify:"center",alignItems:"center"},n.a.createElement(N,null),n.a.createElement(N,null),n.a.createElement(N,null),n.a.createElement(N,null),n.a.createElement(h.a,{item:!0,xs:12},n.a.createElement("img",{alt:"ta-david-yu",src:"./img/ta-david-yu-mascot-x64.png",className:"logo"})),n.a.createElement(h.a,{item:!0,xs:12},n.a.createElement("div",{className:"header-text"},"ta david yu")),n.a.createElement(h.a,{item:!0},n.a.createElement("a",{href:"https://twitter.com/TaDavidYu"},n.a.createElement("img",{alt:"twitter",src:"./img/twitter-x26.png",className:"icon-26"})),n.a.createElement("a",{href:"https://www.facebook.com/david.yu.7739814"},n.a.createElement("img",{alt:"facebook",src:"./img/facebook-x26.png",className:"icon-26"})),n.a.createElement("a",{href:"https://github.com/ta-david-yu"},n.a.createElement("img",{alt:"github",src:"./img/github-x26.png",className:"icon-26"}))),n.a.createElement(h.a,{item:!0,lg:6,md:12,sm:12,xs:!0},n.a.createElement("div",{className:"center-align"},M)))),n.a.createElement("div",{className:"bot-content"},n.a.createElement(p.CSSTransition,{in:!0,appear:!0,timeout:600,classNames:"page-tab-transition"},n.a.createElement("div",{className:"center-align"},n.a.createElement(j,{pageName:"game",isActive:"game"===e,onClick:this.changePage}),n.a.createElement(j,{pageName:"tool",isActive:"tool"===e,onClick:this.changePage}))),n.a.createElement(p.TransitionGroup,null,n.a.createElement(p.CSSTransition,{key:e,appear:!0,timeout:{appear:600,enter:300,exit:0},classNames:e+"-page-transition"},n.a.createElement(O,{currPage:e})))),n.a.createElement("footer",null,"website by ",n.a.createElement("span",null),n.a.createElement("a",{className:"footer-link",href:"mailto: d366095@gmail.com"},"David Yu"),", fonts by ",n.a.createElement("span",null),n.a.createElement("a",{className:"footer-link",href:"http://daniellinssen.net/"},"Daniel Linssen")))}}]),t}(i.Component);o.a.render(n.a.createElement(C,null),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.418546d5.chunk.js.map