(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4ae00308"],{2593:function(e,t,i){"use strict";(function(e){i("96cf");var n=i("3b8d"),a=i("2db2");t.a={mixins:[a.a],data:function(){return{wait:0}},computed:{buttonDisabled:function(){var e=this.send,t=this.wait;return!(!e&&0===t)},sended:{get:function(){return this.$store.state.user.session.sended_email},set:function(e){this.$store.state.user.session.sended_email=e}}},mounted:function(){this.sended&&this.actionReSend()},methods:{actionReSend:function(){var e=this;this.sended=!0,this.wait=60,setTimeout((function(){clearInterval(e.WaitInterval),e.sended=!1,e.wait=0}),6e4),this.WaitInterval=setInterval((function(){e.wait--}),1e3)},reSendEmail:function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var i,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=this.$store.state.user.email,t.next=4,new e("auth").post("identity/users/email/generate_code",{email:i}).then((function(){return n.actionReSend()})).catch((function(e){return e}));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}}}).call(this,i("1e6b").ApiClient)},"920a":function(e,t,i){"use strict";i.r(t);var n=i("2593").a,a=i("2877"),s=Object(a.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("z-content",{staticClass:"page-auth"},[n("div",{staticClass:"auth-box"},[n("div",[n("form",{staticClass:"confirm-email",on:{submit:function(t){return t.preventDefault(),e.reSendEmail(t)}}},[n("h3",{staticClass:"title"},[e._v("\n          Email Verification\n        ")]),n("div",{staticClass:"desc"},[e._v("\n          We have sent an activation email to "+e._s(e.$store.state.user.email)+".\n          Please follow click the link inside to complete your activation. If\n          you have not received the email. Please Resend Email\n        ")]),n("div",{staticClass:"icon-email"},[n("img",{attrs:{src:i("e1c0")}})]),n("div",{staticClass:"not-receive-note"},[n("h3",[e._v("If you haven't received the email for a long time, please：")]),n("ul",[n("li",[e._v("• Make sure the email address you provided is correct.")]),n("li",[e._v("• Check your Spam or Junk mail folders.")]),n("li",[e._v("\n              • Add NameEX to your email address whitelist.\n              "),n("a",{attrs:{href:"#",target:"_blank"}},[e._v("Learn more")])]),n("li",[e._v("• Make sure your email is functioning normally.")])])]),n("button",{attrs:{type:"submit",disabled:e.buttonDisabled}},[n("span",[e._v("Resend Email")]),e.sended&&0!=e.wait?n("span",[e._v("("+e._s(e.wait)+")")]):e._e()])])])])])}),[],!1,null,null,null);t.default=s.exports},e1c0:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAABQBAMAAAApXgzAAAAAGFBMVEW+w83////m6OzGytPu8PLW2d/O0tne4ebFtq84AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA70lEQVRYhe2SywrCMBBFL7amvxFSbLdBi26L9bEVH3Sr4mMbKujvm0mFrtRxKcxhoO2Qk5lOAgiCIAiCIPwnEWdRT+NolvSy6pLGpEimhlFirmGReHXrui33KFCj7z6ILcVI0yYaUdYtjilKUHzBRi+9N3btNmWoPqT8ndE96f0V7oqqn1BY/8jPKX3umHoM5YKuqoqS6+b2i55hiKDjsEc7uh90vzzf1QNLB1H63ARINpr97xlwuVwzrxf25HNXmkbJmXwYOjXcNl9BeSe2Ph5QmqXPjHEv3YaITLNAkjNu3Rvo9Fh3XhAEQRCEv+cJahMhDHJYX2QAAAAASUVORK5CYII="}}]);