(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),s=a.n(l),r=a(3),i=a(4),o=a(7),b=a(6),u=a(5),d=a.n(u),m=(a(13),function(e){var t=e.tabs,a=e.selectedTab,n=e.onTabSelected;return c.a.createElement("div",{className:"tabs"},c.a.createElement("ul",{className:"tabs__list"},t.map((function(e){var t=e.id,l=e.title;return c.a.createElement("li",{key:t,className:"tabs__item"},c.a.createElement("a",{className:d()("tabs__link",{"tabs__link--active":t===a.id}),onClick:function(e){e.preventDefault(),n(t)}},l))}))),c.a.createElement("p",{className:"tabs__content"},a.content))}),f=(a(14),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),p=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:f[0]},e.setSelectedTab=function(t){e.setState({selectedTab:f.find((function(e){return e.id===t}))})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.selectedTab;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected tab is\xa0",e.title),c.a.createElement(m,{tabs:f,selectedTab:e,onTabSelected:this.setSelectedTab}))}}]),a}(c.a.Component);s.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.b2682209.chunk.js.map