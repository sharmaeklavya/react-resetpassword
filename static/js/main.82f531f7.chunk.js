(this.webpackJsonppasswordreset2005=this.webpackJsonppasswordreset2005||[]).push([[0],{33:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a),n=s(17),c=s.n(n),i=s(7),l=s(2),d=s(4),o=s(0),m=r.a.createContext(),u=m,j=function(e){var t=e.children,s=Object(a.useState)(""),r=Object(d.a)(s,2),n=r[0],c=r[1],i=Object(a.useState)(""),l=Object(d.a)(i,2),u=l[0],j=l[1];return Object(o.jsx)(m.Provider,{value:{username:n,setUserName:c,useremail:u,setUserEmail:j},children:t})},b=s(8),p=s.n(b),h=s(10);var O=function(){var e=document.querySelector(".invalid"),t=document.querySelector(".valid"),s=Object(a.useState)(""),r=Object(d.a)(s,2),n=r[0],c=r[1],m=Object(l.f)(),u=function(){var e=Object(h.a)(p.a.mark((function e(t){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://noderesetpassword.herokuapp.com/forgotpassword",{method:"POST",body:JSON.stringify({email:n}),headers:{"Content-type":"application/json"}});case 3:s=e.sent,j(s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(s){200===s.status?(t.classList.remove("hidden"),setTimeout((function(){t.classList.add("hidden"),m.push("/")}),4e3)):(e.classList.remove("hidden"),setTimeout((function(){e.classList.add("hidden")}),1e3))};return Object(o.jsxs)("div",{className:"card card__",children:[Object(o.jsx)("span",{className:"title",children:"Forgot Password?"}),Object(o.jsx)("div",{className:"forgot-img",children:Object(o.jsx)("img",{src:"/imgs/key.jpeg",className:"card-img-top real-img",alt:"forgotpassword-img"})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("p",{className:"hidden invalid",children:Object(o.jsx)("small",{className:"text-danger",children:"Invalid email. Please try again."})}),Object(o.jsx)("p",{className:"hidden valid",children:Object(o.jsx)("small",{className:"text-success",children:"Please check your email to verify if it's really you."})}),Object(o.jsxs)("form",{className:"reset-form",onSubmit:u,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputEmail",children:"Username / Email"}),Object(o.jsx)("input",{type:"email",className:"form-control my-2",id:"inputEmail","aria-describedby":"emailHelp",required:!0,onChange:function(e){return c(e.target.value)}})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Reset"})]}),Object(o.jsx)("div",{className:"links",children:Object(o.jsx)(i.b,{to:"/",className:"link",children:"Sign in"})})]})]})};var x=function(e){var t=document.querySelector(".invalid"),s=document.querySelector(".valid"),r=document.querySelector(".unauthorized"),n=Object(l.f)(),c=Object(a.useState)(""),m=Object(d.a)(c,2),u=m[0],j=m[1],b=Object(a.useState)(""),O=Object(d.a)(b,2),x=O[0],g=O[1],v=function(){var t=Object(h.a)(p.a.mark((function t(s){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),void 0===f()){t.next=6;break}return t.next=4,fetch("https://noderesetpassword.herokuapp.com".concat(e.location.pathname),{method:"POST",body:JSON.stringify({password:f()}),headers:{"Content-type":"application/json"}});case 4:a=t.sent,N(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){if(u===x)return t.classList.add("hidden"),x;t.classList.remove("hidden")},N=function(e){200===e.status?(s.classList.remove("hidden"),r.classList.add("hidden"),setTimeout((function(){n.push("/")}),500)):(r.classList.remove("hidden"),s.classList.add("hidden"))};return Object(o.jsxs)("div",{className:"card card__",children:[Object(o.jsx)("p",{className:"title",children:"Update Password"}),Object(o.jsx)("div",{className:"reset-img",children:Object(o.jsx)("img",{src:"/imgs/key.jpeg",className:"card-img-top real-img",alt:"reset-password-img"})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("p",{className:"hidden invalid",children:Object(o.jsx)("small",{className:"text-danger",children:"Password do not match. Please try again."})}),Object(o.jsx)("p",{className:"hidden valid",children:Object(o.jsx)("small",{className:"text-success",children:"You have successfully registered your new password."})}),Object(o.jsx)("p",{className:"hidden unauthorized",children:Object(o.jsx)("small",{className:"text-danger",children:"Unauthorized Access. Verify your email again."})}),Object(o.jsxs)("form",{className:"reset-form",onSubmit:v,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputPass1",children:"New Password"}),Object(o.jsx)("input",{type:"password",className:"form-control my-2",id:"inputPass1","aria-describedby":"passHelp",required:!0,onChange:function(e){return j(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"inputPass2",children:"Repeat Password"}),Object(o.jsx)("input",{type:"password",className:"form-control my-2",id:"inputPass2","aria-describedby":"passHelp",required:!0,onChange:function(e){return g(e.target.value)}})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Reset"})]}),Object(o.jsx)("div",{className:"links",children:Object(o.jsx)(i.b,{to:"/forgotpassword",className:"link",children:"Forgot Password"})})]})]})};var g=function(){var e=document.querySelector(".invalid"),t=document.querySelector(".valid"),s=Object(a.useState)(""),r=Object(d.a)(s,2),n=r[0],c=r[1],m=Object(a.useState)(""),u=Object(d.a)(m,2),j=u[0],b=u[1],O=Object(a.useState)(""),x=Object(d.a)(O,2),g=x[0],v=x[1],f=Object(l.f)(),N=function(){var e=Object(h.a)(p.a.mark((function e(t){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://noderesetpassword.herokuapp.com/register",{method:"POST",body:JSON.stringify({fullname:n,email:j,password:g}),headers:{"Content-type":"application/json"}});case 3:s=e.sent,y(s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(s){200===s.status?(e.classList.add("hidden"),t.classList.remove("hidden"),setTimeout((function(){f.push("/")}),1500)):(e.classList.remove("hidden"),t.classList.add("hidden"))};return Object(o.jsxs)("div",{className:"card card__",children:[Object(o.jsx)("p",{className:"title",children:"Sign-up"}),Object(o.jsx)("div",{className:"welcome-img",children:Object(o.jsx)("img",{src:"/imgs/welcome.jpeg",className:"card-img-top real-img",alt:"login-img"})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("p",{className:"hidden invalid",children:Object(o.jsx)("small",{className:"text-danger",children:"User already registered. You may try logging in."})}),Object(o.jsx)("p",{className:"hidden valid",children:Object(o.jsx)("small",{className:"text-success",children:"Successfully registered."})}),Object(o.jsxs)("form",{className:"reset-form",onSubmit:N,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputFullName",children:"Full Name"}),Object(o.jsx)("input",{type:"text",className:"form-control my-2",id:"inputFullName","aria-describedby":"fullName",required:!0,onChange:function(e){return c(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputEmail",children:"Email"}),Object(o.jsx)("input",{type:"email",className:"form-control my-2",id:"inputEmail","aria-describedby":"emailHelp",required:!0,onChange:function(e){return b(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),Object(o.jsx)("input",{type:"password",className:"form-control my-2",id:"inputPassword","aria-describedby":"passHelp",required:!0,onChange:function(e){return v(e.target.value)}})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Register"})]}),Object(o.jsx)("div",{className:"links",children:Object(o.jsx)(i.b,{to:"/",className:"link",children:"Login"})})]})]})};var v=function(){var e=document.querySelector(".invalid"),t=Object(a.useContext)(u),s=Object(a.useState)(""),r=Object(d.a)(s,2),n=r[0],c=r[1],m=Object(a.useState)(""),j=Object(d.a)(m,2),b=j[0],O=j[1],x=Object(l.f)(),g=function(){var e=Object(h.a)(p.a.mark((function e(s){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,fetch("https://noderesetpassword.herokuapp.com/login",{method:"POST",body:JSON.stringify({email:n,password:b}),headers:{"Content-type":"application/json"}});case 3:return 200===(a=e.sent).status&&x.push("/dashboard"),e.next=7,a.json();case 7:r=e.sent,t.setUserName(r.name),t.setUserEmail(r.email),v(a);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(t){200===t.status?e.classList.add("hidden"):e.classList.remove("hidden")};return Object(o.jsxs)("div",{className:"card card__",children:[Object(o.jsx)("p",{className:"title",children:"Sign-in"}),Object(o.jsx)("div",{className:"login-img",children:Object(o.jsx)("img",{src:"/imgs/hello.jpeg",className:"card-img-top real-img",alt:"login-img"})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("p",{className:"hidden invalid",children:Object(o.jsx)("small",{className:"text-danger",children:"Invalid username or password"})}),Object(o.jsxs)("form",{className:"reset-form",onSubmit:g,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"inputEmail",children:"Username / Email"}),Object(o.jsx)("input",{type:"email",className:"form-control my-2",id:"inputEmail","aria-describedby":"emailHelp",required:!0,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),Object(o.jsx)("input",{type:"password",className:"form-control my-2",id:"inputPassword","aria-describedby":"passHelp",required:!0,onChange:function(e){return O(e.target.value)}})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Login"})]}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)(i.b,{to:"/forgot-password",className:"link",children:"Forgot Password"}),Object(o.jsx)(i.b,{to:"/register",className:"link",children:"Sign up"})]})]})]})};var f=function(){var e=Object(l.f)(),t=Object(a.useContext)(u),s=t.username,r=t.useremail;""!==s&&(localStorage.setItem("username",s),localStorage.setItem("useremail",r));var n=localStorage.getItem("username"),c=localStorage.getItem("useremail");return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("span",{className:"navbar-brand",children:["Welcome, ",n]}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(o.jsx)("li",{className:"nav-item active ",children:Object(o.jsxs)("span",{className:"nav-link",children:[" ",c]})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("button",{type:"button",className:"nav-link text-white btn btn-danger",id:"signout",onClick:function(){localStorage.setItem("username","Guest User"),localStorage.setItem("useremail",""),e.push("/")},children:"Sign out"})})]})})]})})};var N=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"text-center mt-5 text-white",children:[Object(o.jsx)("h1",{className:"h2 text-white",children:"404"}),Object(o.jsx)("p",{className:"h3 text-white",children:"Page Not Found!"})]})})};var y=function(){return Object(o.jsx)(i.a,{children:Object(o.jsx)("div",{className:"container px-0",children:Object(o.jsx)(j,{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/register",component:g,exact:!0}),Object(o.jsx)(l.a,{path:"/dashboard",component:f,exact:!0}),Object(o.jsx)(l.a,{path:"/forgot-password",component:O,exact:!0}),Object(o.jsx)(l.a,{path:"/reset-password/:randomstring",component:x,exact:!0}),Object(o.jsx)(l.a,{path:"/",component:v,exact:!0}),Object(o.jsx)(l.a,{path:"*",component:N})]})})})})},w=(s(33),s(34),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),a(e),r(e),n(e),c(e)}))});c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),w()}},[[35,1,2]]]);
//# sourceMappingURL=main.82f531f7.chunk.js.map