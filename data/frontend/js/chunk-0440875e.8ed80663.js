(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0440875e"],{"8ab2":function(e,t,a){"use strict";a.r(t);var n=a("ba3b").a,i=a("2877"),s=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("z-content",{staticClass:"page-auth"},[a("div",{staticClass:"auth-box"},[a("div",[a("h3",{staticClass:"title"},[e._v("Forgot Password")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.ForgotPassword(t)}}},[a("auth-input",{attrs:{name:"email","class-name":{ierror:e.validEmail(e.email),g:e.email},"label-class":{berror:e.validEmail(e.email)},placeholder:"Email","label-need":!0,"enable-vaild":e.validEmail(e.email),"error-text":e.translation("email")},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("button",{attrs:{type:"submit",disabled:e.validEmail(e.email,!0)||!e.captcha_response||e.sended&&0!=e.wait}},[a("span",[e._v("Forgot Password")]),e.sended&&0!=e.wait?a("span",[e._v("("+e._s(e.wait)+")")]):e._e()])],1)])])])}),[],!1,null,null,null);t.default=s.exports},ba3b:function(e,t,a){"use strict";(function(e,n){a("96cf");var i=a("3b8d"),s=(a("9190"),a("2db2")),r=a("5118");t.a={mixins:[s.a],data:function(){return{sended:!1,email:"",captcha_response:"",loading:!1,wait:0,WaitInterval:null}},methods:{ForgotPassword:function(){var t=Object(i.a)(regeneratorRuntime.mark((function t(){var a,i,s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.email,i=this.captcha_response,this.loading=!0,t.prev=2,t.next=5,new e("auth").post("/identity/users/password/generate_code",{email:a,captcha_response:i});case 5:n.runNotice("success","Password reset link has been sent to your email"),this.sended=!0,this.wait=60,Object(r.setTimeout)((function(){clearInterval(s.WaitInterval),s.sended=!1,s.wait=0}),6e4),this.WaitInterval=Object(r.setInterval)((function(){s.wait--}),1e3),t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(2),t.abrupt("return",t.t0);case 15:case"end":return t.stop()}}),t,this,[[2,12]])})));return function(){return t.apply(this,arguments)}}()}}}).call(this,a("1e6b").ApiClient,a("ddc4"))}}]);