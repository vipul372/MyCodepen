(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{16:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),o=n(9),s=n.n(o),i=(n(16),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))}),r=n(3),l=(n(17),n(18),n(19),n(20),n(21),n(10)),u=n(11),j=n(8),b=n(1),d=function(e){var t=e.displayName,n=e.language,c=e.value,o=e.onChange,s=Object(a.useState)(!0),i=Object(r.a)(s,2),d=i[0],p=i[1];return Object(b.jsxs)("div",{className:"editor-container ".concat(d?"":"collapsed"),children:[Object(b.jsxs)("div",{className:"editor-title",children:[t,Object(b.jsx)("button",{type:"button",className:"expand-collapse-btn",onClick:function(){p((function(e){return!e}))},children:Object(b.jsx)(u.a,{icon:d?j.a:j.b})})]}),Object(b.jsx)(l.Controlled,{className:"code-mirror-wrapper",onBeforeChange:function(e,t,n){o(n)},value:c,options:{lineWrapping:!0,lineNumbers:!0,lint:!0,mode:n,theme:"material"}})]})};n(28);var p=function(e,t){var n="Codepen-clone"+e,c=Object(a.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),o=Object(r.a)(c,2),s=o[0],i=o[1];return Object(a.useEffect)((function(){localStorage.setItem(n,JSON.stringify(s))}),[n,s]),[s,i]},m=function(){var e=p("html",""),t=Object(r.a)(e,2),n=t[0],c=t[1],o=p("css",""),s=Object(r.a)(o,2),i=s[0],l=s[1],u=p("js",""),j=Object(r.a)(u,2),m=j[0],O=j[1],f=Object(a.useState)(""),g=Object(r.a)(f,2),h=g[0],v=g[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){v("\n        <html>\n          <body>".concat(n,"</body>\n          <style>").concat(i,"</style>\n          <script>").concat(m,"<\/script>\n        </html>\n      "))}),250);return function(){return clearTimeout(e)}}),[n,i,m]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"pane top-pane",children:[Object(b.jsx)(d,{displayName:"HTML",language:"xml",value:n,onChange:c}),Object(b.jsx)(d,{displayName:"CSS",language:"css",value:i,onChange:l}),Object(b.jsx)(d,{displayName:"JavaScript",language:"javascript",value:m,onChange:O})]}),Object(b.jsx)("div",{className:"pane",children:Object(b.jsx)("iframe",{srcDoc:h,title:"Output",sandbox:"allow-script",frameBorder:"0",width:"100%",height:"100%"})})]})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),i()}},[[29,1,2]]]);
//# sourceMappingURL=main.9c783ab9.chunk.js.map