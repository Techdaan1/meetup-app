(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(13),r=n.n(c),i=(n(19),n(6)),o=n(7),l=n(9),u=n(8),h=(n(20),n(24)),d=n(25),j=n(0),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={event:{},collapsed:!0},e.handleClick=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed;return Object(j.jsxs)(h.a,{className:"event",children:[Object(j.jsx)(h.a.Header,{className:"summary",children:e.summary}),Object(j.jsxs)(h.a.Body,{className:"event-body",children:[Object(j.jsxs)("p",{className:"start-date",children:[e.start.dateTime," (",e.start.timeZone,")"]}),Object(j.jsxs)("p",{className:"location",children:["@",e.summary," | ",e.location]}),!t&&Object(j.jsxs)("div",{className:"extra-details ".concat(this.state.collapsed?"hide":"show"),children:[Object(j.jsx)("br",{}),Object(j.jsx)("h6",{className:"about",children:"About Event"}),Object(j.jsx)("a",{href:e.htmlLink,target:"_blank",rel:"noreferrer",children:"See deatails on Google calendar"}),Object(j.jsx)("p",{className:"event-description",children:e.description})]}),Object(j.jsx)(d.a,{variant:"light",size:"md",id:"eventButton",className:"".concat(t?"show":"hide","-details"),onClick:this.handleClick,children:t?"Show Details":"Hide-Details"})]})]})}}]),n}(a.Component),p=b,O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(j.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(p,{event:e})},e.id)}))})}}]),n}(a.Component),m=O,v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"CitySearch",children:[Object(j.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),Object(j.jsxs)("ul",{className:"suggestions",children:[this.state.suggestions.map((function(t){return Object(j.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(j.jsx)("li",{children:Object(j.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),f=v,x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{}),Object(j.jsx)(m,{})]})}}]),n}(a.Component),g=x;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),y()}},[[22,1,2]]]);
//# sourceMappingURL=main.e76a4743.chunk.js.map