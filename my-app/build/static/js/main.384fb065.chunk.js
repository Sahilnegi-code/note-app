(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(30),r=n.n(c),s=(n(38),n(39),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))}),l=n(5),o=n(4),i=n(12),j=(n(40),n(0));var d=function(e){var t=e.setSearch,n=localStorage.getItem("userInfo");n=JSON.parse(n);var a=Object(o.l)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{class:"container",className:"header",children:Object(j.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light ",children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{class:"navbar-brand",className:"content",children:[" ",null==n?"User":n.name]}),n&&Object(j.jsxs)("span",{className:"user_img content",children:["     ",Object(j.jsx)("img",{alt:"",src:n.pic,style:{borderRadius:"100%",marginLeft:"0.5rem"}})," "]})]}),Object(j.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{class:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{class:"collapse navbar-collapse ",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{class:"navbar-nav  w-50 justify-content-end ",children:[Object(j.jsx)("li",{class:"nav-item active mr-4",children:Object(j.jsxs)("a",{href:"!#",class:"nav-link",children:[Object(j.jsx)(i.b,{to:"/mynotes",children:"  Notes  "}),Object(j.jsx)("span",{class:"sr-only",children:"(current)"})]})}),Object(j.jsxs)("li",{class:"nav-item dropdown ml-4",children:[Object(j.jsx)("a",{class:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink-333","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Dropdown"}),Object(j.jsx)("div",{class:"dropdown-menu dropdown-default","aria-labelledby":"navbarDropdownMenuLink-333",children:Object(j.jsx)("a",{class:"dropdown-item",onClick:function(){localStorage.removeItem("userInfo"),a("/login")},children:"Log Out"})})]})]}),Object(j.jsx)("form",{class:"form-inline my-2 my-lg-0 w-50 justify-content-end ",children:Object(j.jsx)("input",{class:"form-control mr-sm-2",onChange:function(e){return t(e.target.value)},type:"search",placeholder:"Search","aria-label":"Search"})})]})]})})})},u=(n(43),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main",children:Object(j.jsx)("div",{className:"container text-center",children:Object(j.jsx)("div",{style:{display:"flex",height:"100vh",justifyContent:"center",flexDirection:"column"},children:Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(j.jsxs)("div",{className:"text-intro",children:[Object(j.jsx)("h1",{class:"display-2   text-center",children:"Welcome to my Note App"}),Object(j.jsx)("p",{className:"text-center",children:" Kepping  Notes "})]}),Object(j.jsxs)("div",{className:"btnContainer w-100",children:[Object(j.jsx)("a",{href:"/login",children:Object(j.jsx)("button",{className:"btn btn-outline-success  m-3",children:"Login"})}),Object(j.jsx)("a",{href:"/register",children:Object(j.jsx)("button",{className:"btn btn-outline-danger  m-3 ",children:"Register"})})]})]})})})})})}),b=n(8),p=n(6),h=n.n(p),m=(n(44),function(e){var t=e.title;e.data;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"page",children:t&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h1",{className:"heading",style:{padding:"20px "},children:"Welcome to Notes App "})})})})})}),x=n(53),O=function(e){var t=e.search,n=Object(a.useState)([]),c=Object(l.a)(n,2),r=c[0],s=c[1],o=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("userInfo"),n=JSON.parse(n),a={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(n.token)}},e.prev=3,e.next=6,x.a.delete("http://localhost:5000/api/notes/".concat(t," "),a);case 6:d(a,n._id),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(3);case 11:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(b.a)(h.a.mark((function e(t,n){var a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/notes",t,n);case 2:a=e.sent,c=a.data,s(c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=localStorage.getItem("userInfo");e=JSON.parse(e);var t={headers:{Authorization:"Bearer ".concat(e.token)}};d(t,e._id)}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"mainback",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(m,{title:"hello"}),Object(j.jsx)(i.b,{to:"/createnote",children:Object(j.jsx)("button",{type:"button",className:"btn btn-secondary",children:"Create New Note"})}),r.filter((function(e){return e.title.toLowerCase().includes(t)})).map((function(e){return console.log("#multiCollapseExample".concat(e._id)),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"accordion my-4",id:"accordionExample",children:Object(j.jsxs)("div",{class:"card",children:[Object(j.jsxs)("div",{class:"card-header row",children:[Object(j.jsx)("div",{className:"col-6",children:Object(j.jsxs)("h4",{className:" text-body  ",children:["Title : ",Object(j.jsxs)("span",{className:" h2",children:[" ",e.title," "]})," "]})}),Object(j.jsx)("div",{className:"col-6 text-right",children:Object(j.jsx)("button",{type:"button","data-toggle":"collapse","data-target":"#multiCollapseExample".concat(e._id),"aria-expanded":"false","aria-controls":"multiCollapseExample".concat(e._id),className:"btn btn-primary ",children:"Open"})})]}),Object(j.jsx)("div",{className:"collapse multi-collapse",id:"multiCollapseExample".concat(e._id),children:Object(j.jsxs)("div",{class:"card-body",children:[Object(j.jsx)("h5",{class:"card-title",children:Object(j.jsxs)("h2",{class:" text-center p-2 ",children:["   ",e.category.toUpperCase()," "]})}),Object(j.jsx)("p",{className:"card-context bg-secondary",children:Object(j.jsxs)("p",{className:"text-white h3 text-body p-2",children:[" ",e.content," "]})}),Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("a",{href:"/note/".concat(e._id),class:"btn btn-success mx-2 ",children:" Edit "}),Object(j.jsx)("a",{class:"btn btn-danger",onClick:function(){return o(e._id)},children:"Delete"})]})]})})]})},e._id)})}))]})})})},f=function(e){var t=e.err;return Object(j.jsx)("div",{class:"alert alert-danger",role:"alert",children:t})},g=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{class:"spinner-border text-dark"})})},v=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),i=s[0],d=s[1],u=Object(a.useState)(""),p=Object(l.a)(u,2),m=p[0],O=p[1],v=Object(a.useState)(""),y=Object(l.a)(v,2),N=y[0],w=y[1],C=Object(a.useState)(""),S=Object(l.a)(C,2),I=S[0],k=S[1],F=Object(a.useState)(""),E=Object(l.a)(F,2),P=E[0],_=E[1],T=Object(a.useState)(""),D=Object(l.a)(T,2),L=D[0],A=D[1],J=Object(a.useState)(!1),B=Object(l.a)(J,2),q=B[0],z=B[1],H=Object(o.l)(),U=function(){var e=Object(b.a)(h.a.mark((function e(t){var a,c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(n),i===I){e.next=6;break}_("Password do not match"),e.next=23;break;case 6:return _(""),e.prev=7,a={headers:{"Content-type":"application/json"}},z(!0),e.next=12,x.a.post("/api/users",{name:m,email:n,pic:N,password:i},a);case 12:c=e.sent,r=c.data,z(!1),localStorage.setItem("userInfo",JSON.stringify(r)),H("/login"),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(7),z(!1),_("User Exist Already ");case 23:case"end":return e.stop()}}),e,null,[[7,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",style:{marginTop:"2rem",boxShadow:"0px 0px 2px #5C5696"},children:[P&&Object(j.jsx)(f,{err:P}),q&&Object(j.jsx)(g,{}),Object(j.jsxs)("form",{onSubmit:function(e){U(e)},children:[Object(j.jsxs)("div",{className:"form-group col-md-12",children:[Object(j.jsx)("label",{for:"inputAddress",children:"Name"}),Object(j.jsx)("input",{type:"text",onChange:function(e){return O(e.target.value)},value:m,className:"form-control",id:"inputAddress",placeholder:"Enter Name",required:!0})]}),Object(j.jsxs)("div",{className:"form-group col-md-12",children:[Object(j.jsx)("label",{for:"inputEmail4",children:"Email Address"}),Object(j.jsx)("input",{type:"email",className:"form-control",onChange:function(e){c(e.target.value)},value:n,placeholder:"Enter Email-id",id:"inputEmail4",required:!0})]}),Object(j.jsxs)("div",{className:"form-group col-md-12",children:[Object(j.jsx)("label",{for:"inputPassword4",children:"Password"}),Object(j.jsx)("input",{type:"password",onChange:function(e){return d(e.target.value)},value:i,placeholder:"Enter Password",class:"form-control",id:"inputPassword4",required:!0})]}),Object(j.jsxs)("div",{className:"form-group ",children:[Object(j.jsx)("label",{for:"inputPassword4",children:"Confirm Password"}),Object(j.jsx)("input",{type:"password",value:I,onChange:function(e){k(e.target.value)},placeholder:"Enter Password",class:"form-control",id:"inputPassword4",required:!0})]}),L&&Object(j.jsx)(f,{err:L}),Object(j.jsx)("label",{children:"Profile Pic"}),Object(j.jsxs)("div",{className:"custom-file mb-3",children:[Object(j.jsx)("input",{type:"file",class:"custom-file-input",id:"validatedCustomFile",onChange:function(e){!function(e){if(!e)return console.log("pics"),A("Pls Select an Image");if(console.log(e,"<---"),A(null),console.log(e.type),"image/jpeg"!==e.type&&"image/png"!==e.type)return A("Please select an Image");console.log("inside");var t=new FormData;t.append("file",e),t.append("upload_preset","Notes_app"),t.append("cloud_name","dyxs7sfix"),console.log(t),fetch("https://api.cloudinary.com/v1_1/dyxs7sfix/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){w(e.url.toString())})).catch((function(e){}))}(e.target.files[0])},required:!0}),Object(j.jsx)("label",{className:"custom-file-label",for:"validatedCustomFile",children:"Choose file..."}),Object(j.jsx)("div",{className:"invalid-feedback",children:"Example invalid custom file feedback"})]}),Object(j.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Sign in"})]}),Object(j.jsxs)("div",{className:"mt-4",children:[Object(j.jsx)("span",{children:"Have an account Login ? "}),Object(j.jsx)("a",{href:"http://google.com",children:"Login "})]})]})})},y=(n(49),function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),i=s[0],d=s[1],u=Object(a.useState)(!1),p=Object(l.a)(u,2),m=p[0],O=p[1],v=Object(a.useState)(""),y=Object(l.a)(v,2),N=y[0],w=y[1],C=Object(a.useState)({}),S=Object(l.a)(C,2),I=S[0],k=S[1],F=Object(o.l)(),E=function(){var e=Object(b.a)(h.a.mark((function e(t){var a,c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={headers:{"Content-type":"application/json"}},O(!0),w(!1),e.next=7,x.a.post("api/users/login",{email:n,password:i},a);case 7:c=e.sent,r=c.data,k(r),localStorage.setItem("userInfo",JSON.stringify(r)),O(!1),0!==Object.keys(I).length&&F("/mynotes",{replace:!0}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),w("Invalid Email Id or Password"),O(!1);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){localStorage.length>0&&localStorage.clear()}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"login_center",children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"login_container",children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:"heading",children:"Login"})}),N&&Object(j.jsx)(f,{err:N}),m&&Object(j.jsx)(g,{}),Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:E,children:[Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(j.jsx)("input",{type:"email",class:"form-control",onChange:function(e){c(e.target.value)},value:n,id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(j.jsx)("input",{type:"password",class:"form-control",onChange:function(e){d(e.target.value)},value:i,id:"exampleInputPassword1"})]}),Object(j.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})})]})})})})}),N=(n(50),function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),i=s[0],d=s[1],u=Object(a.useState)(""),p=Object(l.a)(u,2),m=p[0],O=p[1],f=Object(o.l)(),g=function(){var e=Object(b.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=localStorage.getItem("userInfo"),a=JSON.parse(a),e.prev=3,r={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.next=7,x.a.post("/api/notes/create",{title:n,content:i,category:m},r);case 7:f("/mynotes"),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:c(""),d(""),O("");case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"picContainer",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",padding:"20px"},children:Object(j.jsxs)("div",{class:"card",style:{width:"500px"},children:[Object(j.jsx)("h5",{class:"card-title",children:"Notes"}),Object(j.jsx)("div",{class:"card-body",children:Object(j.jsxs)("form",{onSubmit:g,children:[Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{for:"exampleFormControlInput1",children:"Title"}),Object(j.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter the title "})]}),Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{for:"exampleFormControlTextarea1",children:"Content"}),Object(j.jsx)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",value:i,placeholder:"Enter the Content",onChange:function(e){return d(e.target.value)},rows:"3"})]}),Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{for:"exampleFormControlInput1",children:"Category"}),Object(j.jsx)("input",{type:"text",value:m,onChange:function(e){return O(e.target.value)},class:"form-control",id:"exampleFormControlInput1",placeholder:"Type the category"})]}),Object(j.jsx)("a",{href:"!#",children:Object(j.jsx)("button",{className:"btn btn-outline-success  m-3",type:"submit",children:"Submit"})}),Object(j.jsx)("a",{href:"!#",children:Object(j.jsx)("button",{className:"btn btn-outline-danger  m-3 ",children:"Clear"})})]})})]})})})}),w=(n(51),function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),i=s[0],d=s[1],u=Object(a.useState)(""),p=Object(l.a)(u,2),m=p[0],O=p[1],f=Object(o.n)().id,g=Object(o.l)(),v=function(){var e=Object(b.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=localStorage.getItem("userInfo"),a=JSON.parse(a),e.prev=3,r={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.next=7,x.a.put("http://localhost:5000/api/notes/".concat(f),{title:n,content:i,category:m},r);case 7:g("/mynotes"),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:c(""),d(""),O("");case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/notes/".concat(f));case 2:t=e.sent,n=t.data,console.log(n,"check"),c(n.title),d(n.content),O(n.category);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsx)("div",{className:"card_container",children:Object(j.jsxs)("div",{className:"card",style:{width:"50rem",justifyContent:"center",margin:"1rem"},children:[Object(j.jsx)("h5",{class:"card-title",children:"Notes"}),Object(j.jsx)("div",{class:"card-body",children:Object(j.jsxs)("form",{onSubmit:v,children:[Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{for:"exampleFormControlInput1",children:"Title"}),Object(j.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter the title "})]}),Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{for:"exampleFormControlTextarea1",children:"Content"}),Object(j.jsx)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",value:i,placeholder:"Enter the Content",onChange:function(e){return d(e.target.value)},rows:"3"})]}),Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{for:"exampleFormControlInput1",children:"Category"}),Object(j.jsx)("input",{type:"text",value:m,onChange:function(e){return O(e.target.value)},class:"form-control",id:"exampleFormControlInput1",placeholder:"Type the category"})]}),Object(j.jsx)("a",{href:"!#",children:Object(j.jsx)("button",{className:"btn btn-outline-success  m-3",type:"submit",children:"Submit"})}),Object(j.jsx)("a",{href:"!#",children:Object(j.jsx)("button",{className:"btn btn-outline-danger  m-3 ",children:"Clear"})})]})})]})})});var C=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=window.location.pathname;return console.log(window.location.pathname),console.log(r),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{children:Object(j.jsxs)(i.a,{children:["/login"===window.location.pathname||"/"===window.location.pathname?"":Object(j.jsx)(d,{setSearch:c}),Object(j.jsx)("main",{style:{position:"relative",minHeight:"89vh"},children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(u,{})}),Object(j.jsx)(o.a,{path:"/login",element:Object(j.jsx)(y,{})}),Object(j.jsx)(o.a,{path:"/register",element:Object(j.jsx)(v,{})}),Object(j.jsx)(o.a,{path:"createnote",element:Object(j.jsx)(N,{})}),Object(j.jsx)(o.a,{path:"/note/:id",element:Object(j.jsx)(w,{})}),Object(j.jsx)(o.a,{path:"/mynotes",element:Object(j.jsx)(O,{search:n})})]})})]})})})};r.a.render(Object(j.jsx)(C,{}),document.getElementById("root")),s()}},[[52,1,2]]]);
//# sourceMappingURL=main.384fb065.chunk.js.map