(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(8),s=a(2),c=a(6),o=a(1),l=(a(13),a(0)),u=function(e){var t=e.user,a=t.email,n=t.name;return Object(l.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},d=function(e){var t=e.todo,a=t.completed,n=t.title,i=t.user;return Object(l.jsxs)("article",{"data-id":t.id,className:"TodoInfo ".concat(a&&"TodoInfo--completed"),children:[Object(l.jsx)("h2",{className:"TodoInfo__title",children:n}),i&&Object(l.jsx)(u,{user:i})]})},m=function(e){var t=e.todos;return Object(l.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(l.jsx)(d,{todo:e},e.id)}))})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function b(e){return j.find((function(t){return t.id===e}))||null}var h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:b(e.userId)})}));function f(e){for(var t=[],a=0;a<e.length;a+=1)t.push(e[a].id);return t.sort((function(e,t){return t-e}))[0]}var O=function(){var e=Object(o.useState)(h),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),u=c[0],d=c[1],O=Object(o.useState)(0),p=Object(s.a)(O,2),v=p[0],x=p[1],y=Object(o.useState)(!1),S=Object(s.a)(y,2),N=S[0],g=S[1],I=Object(o.useState)(!1),C=Object(s.a)(I,2),_=C[0],k=C[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Add todo form"}),Object(l.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),g(!u),k(!v),u&&v){var t={id:f(h)+1,title:u,completed:!1,userId:Number(v),user:b(Number(v))};void 0!==t&&n([].concat(Object(r.a)(a),[t])),d(""),x(0)}},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("input",{type:"text","data-cy":"titleInput",value:u,onChange:function(e){d(e.target.value),g(!(e.target.value.length>0))},placeholder:"Enter a title"}),N&&Object(l.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("select",{"data-cy":"userSelect",value:v,onChange:function(e){_?k(!1):(k(!1),x(+e.target.value))},children:[Object(l.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),j.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),_&&Object(l.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(l.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(l.jsx)(m,{todos:a})]})};i.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.acc5d374.chunk.js.map