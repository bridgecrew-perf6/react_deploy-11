(this.webpackJsonpweb_app_1=this.webpackJsonpweb_app_1||[]).push([[0],{15:function(e,t,a){},28:function(e,t,a){e.exports=a(54)},33:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),o=(a(33),a(15),function(e){return l.a.createElement("div",{className:"Nav-main"},l.a.createElement("h1",{className:"App-header"},e.name))}),s=a(5),i=a(6),m=a(9),u=a(8),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);var n=(new Date).getFullYear();return(e=t.call(this)).State={year:n,name:"Pingifinit"},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"copy"},"\xa9 ",this.State.year,"  - All Right Reserved - ",this.State.name))}}]),a}(n.Component),E=a(12),h=a.n(E),b=(a(24),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={posts:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost/pingifinit_blog/Api/fetch_data/user").then((function(t){e.setState({posts:t.data})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container pt-5 pb-5"},l.a.createElement("table",{className:"table table-bordered table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Id"),l.a.createElement("td",null,"Name"),l.a.createElement("td",null,"Email"))),l.a.createElement("tbody",null,this.state.posts.map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",{id:t},e.id),l.a.createElement("td",null,e.fname),l.a.createElement("td",null,e.email))})))))}}]),a}(n.Component)),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getData=function(t){var a=t.target.value;e.setState({new_todo:a})},e.addTodo=function(t){t.preventDefault();var a=e.state.new_todo,n=e.state.todo;n.push(a),e.setState({todo:n}),e.setState({new_todo:""})},e.remove_this=function(t){var a=e.state.todo;a.splice(t,1),e.setState({todo:a})},e.state={todo:["nithin","do it"],new_todo:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container pt-4 pb-4"},l.a.createElement("form",{className:"row"},l.a.createElement("input",{type:"text",className:"form-control col-md-8",onChange:this.getData,value:this.state.new_todo,placeholder:"Enter TODO Contemt"}),l.a.createElement("button",{className:"btn btn-sm btn-success col-md-4",onClick:this.addTodo},"Add TODO")),l.a.createElement("h1",null,this.state.new_todo),l.a.createElement("table",{className:"table table-bordered mt-5 mb-5"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"s.No"),l.a.createElement("th",null,"TODO"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,this.state.todo.map((function(t,a){return l.a.createElement("tr",null,l.a.createElement("td",null,a+1),l.a.createElement("td",null,t),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){e.remove_this(a)}},"Delete")))})))))}}]),a}(n.Component),p=a(57),f=a(56),O=a(58),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={states:{}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.covid19india.org/state_district_wise.json").then((function(t){console.log(t.data),e.setState({states:t.data})}))}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.states);return l.a.createElement("div",null,t.map((function(t,a){var n=Object.keys(e.state.states[t].districtData);return l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(p.a.Header,null,l.a.createElement(f.a.Toggle,{as:O.a,variant:"link",eventKey:"0"},t)),l.a.createElement(f.a.Collapse,{eventKey:"0"},l.a.createElement(p.a.Body,null,l.a.createElement("table",{className:"table table-striped table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"S No"),l.a.createElement("th",null,"District"),l.a.createElement("th",null,"Total"),l.a.createElement("th",null,"Active"),l.a.createElement("th",null,"Recover"),l.a.createElement("th",null,"Death"))),l.a.createElement("tbody",null,n.map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,t),l.a.createElement("td",null,e),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null))}))))))))})))}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={covid_data:""},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container pt-5 pb-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement(p.a,{variant:"info",style:{width:"18rem"}},l.a.createElement(p.a.Body,null,l.a.createElement(p.a.Title,null,"India"),l.a.createElement(p.a.Subtitle,{className:"mb-2 text-muted"},"Card Subtitle"),l.a.createElement(p.a.Text,null,"Active Cases : 200000")))),l.a.createElement("div",{className:"col-md-4"}),l.a.createElement("div",{className:"col-md-4"}),l.a.createElement("div",{className:"col-md-12"},l.a.createElement(N,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o,{name:"pingifinit"}),l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(j,null),l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.ae9b7627.chunk.js.map