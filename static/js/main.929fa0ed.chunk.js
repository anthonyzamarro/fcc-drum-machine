(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/snare.29931dfa.mp3"},19:function(e,t,a){e.exports=a.p+"static/media/crash.ab3cc766.mp3"},20:function(e,t,a){e.exports=a.p+"static/media/bass.5e9cce80.wav"},21:function(e,t,a){e.exports=a.p+"static/media/floor-tom.01c7d131.wav"},22:function(e,t,a){e.exports=a.p+"static/media/tom-tom.b40f796f.wav"},23:function(e,t,a){e.exports=a.p+"static/media/ride.3a196551.wav"},24:function(e,t,a){e.exports=a.p+"static/media/hi-hat.f84399ad.wav"},25:function(e,t,a){e.exports=a.p+"static/media/hi-hat-closed.0d385804.mp3"},26:function(e,t,a){e.exports=a.p+"static/media/gong.5010ef2a.wav"},27:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),o=(a(32),a(3)),d=a(4),s=a(8),u=a(5),l=a(9),m=a(2),p=a(7);var y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={current:"active"},a.handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a.handleKeyPress=a.handleKeyPress.bind(Object(m.a)(Object(m.a)(a))),a}return Object(l.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"handleClick",value:function(e,t){var a=this;e.target.children[0].currentTime=0,e.target.children[0].play(),e.persist(),e.target.classList.add(this.state.current),setTimeout(function(){e.target.classList.remove(a.state.current)},100),this.props.itemClicked(t)}},{key:"handleKeyPress",value:function(e){var t=this;this.props.drumData.drumData.forEach(function(a){if(e.keyCode===a.keyCode){var n=document.querySelector("#key-".concat(a.key));n.children[0].currentTime=0,n.click(),n.classList.add(t.state.current),setTimeout(function(){n.classList.remove(t.state.current)},100),t.props.itemPressed(a)}})}},{key:"render",value:function(){var e=this,t=this.props.drumData.drumData.map(function(t){return i.a.createElement("li",{key:t.id,onClick:function(a){return e.handleClick(a,t)},id:"key-".concat(t.key),className:"drum-pad",tabIndex:"0"},t.key,i.a.createElement("audio",{src:t.audio,className:"clip",id:t.key}))});return i.a.createElement("div",{className:"display-drums-container"},i.a.createElement("ul",null,t))}}]),t}(n.Component);var h=Object(p.b)(function(e){return{drumData:e}},function(e){return{itemClicked:function(t){e({type:"DRUM_CLICKED",payload:t})},itemPressed:function(t){e({type:"DRUM_PRESSED",payload:t})}}})(y),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=null===this.props.data.drumz?"Start Playing!":this.props.data.drumz.type;return i.a.createElement("div",{className:"drums-info-container"},i.a.createElement("h1",null,e))}}]),t}(n.Component);var f=Object(p.b)(function(e){return{data:e}},null)(k),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App drum-machine-container",id:"drum-machine"},i.a.createElement("div",{className:"display-container",id:"display"},i.a.createElement(f,null),i.a.createElement(h,null)))}}]),t}(n.Component),b=a(6),C=a(18),j=a.n(C),O=a(19),E=a.n(O),w=a(20),D=a.n(w),g=a(21),x=a.n(g),P=a(22),K=a.n(P),L=a(23),S=a.n(L),R=a(24),N=a.n(R),M=a(25),T=a.n(M),U=a(26),I=a.n(U);var W=Object(b.b)({drumData:function(){return[{id:1,key:"Q",keyCode:81,type:"Snare",audio:j.a},{id:2,key:"W",keyCode:87,type:"Crash",audio:E.a},{id:3,key:"E",keyCode:69,type:"Kick drum",audio:D.a},{id:4,key:"A",keyCode:65,type:"Floor tom",audio:x.a},{id:5,key:"S",keyCode:83,type:"Tom-tom",audio:K.a},{id:6,key:"D",keyCode:68,type:"Ride",audio:S.a},{id:7,key:"Z",keyCode:90,type:"Hi-hat",audio:N.a},{id:8,key:"X",keyCode:88,type:"Closed hi-hat",audio:T.a},{id:9,key:"C",keyCode:67,type:"Gong",audio:I.a}]},drumz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DRUM_CLICKED":case"DRUM_PRESSED":return Object.assign({c:4,d:5},t.payload);default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=Object(b.c)(W);c.a.render(i.a.createElement(p.a,{store:_},i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.929fa0ed.chunk.js.map