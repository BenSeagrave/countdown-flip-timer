(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{22:function(n,e,t){"use strict";t.r(e);var i,r,o,a=t(0),s=t.n(a),c=t(9),d=t.n(c),h=t(3),l=t(2),b=t(4),m=t(1),p=function(n){var e=n.digit,t=n.unit,i=Object(a.useState)(!1),r=Object(l.a)(i,2),o=r[0],s=r[1],c=Object(a.useRef)();Object(a.useEffect)((function(){c.current!==e&&s(!0)}),[e]);var d=function(n){s(!1),c.current=e};return Object(m.jsxs)(j,{children:[Object(m.jsxs)("div",{className:"back",children:[Object(m.jsx)("div",{className:"top",children:Object(m.jsx)("p",{className:"digit",children:e})}),Object(m.jsx)("div",{className:"bottom",children:Object(m.jsx)("p",{className:"digit",children:c.current})})]}),Object(m.jsxs)("div",{className:"front",children:[Object(m.jsx)("div",{onAnimationEnd:d,className:"top ".concat(o?"active":""),children:Object(m.jsx)("p",{className:"digit",children:c.current})}),Object(m.jsx)("div",{onAnimationEnd:d,className:"bottom ".concat(o?"active":""),children:Object(m.jsx)("p",{className:"digit",children:e})})]}),Object(m.jsx)("p",{className:"unit",children:t})]})},j=b.b.div(i||(i=Object(h.a)(['\n  width: 18%;\n  max-width: 100px;\n  margin: 0 0.5rem;\n  position: relative;\n  text-align: center;\n\n  @media screen and (min-width: 50em) {\n      margin: 0 1.5rem;\n      max-width: 150px;\n  } \n  \n  .top {\n    background: #2C2C44;\n    height: 30px;\n    border-radius: 10px 10px 0 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    position: relative;\n    @media screen and (min-width: 50em) {\n      width: 150px;\n      height: 70px;\n\n    }\n    &::before {\n      content: "";\n      position: absolute;\n      width: 4px;\n      height: 4px;\n      background: var(--very-dark-black-blue);\n      left: 0;\n      bottom: 0%;\n      border-radius: 0 100% 0 0;\n\n      @media screen and (min-width: 50em) {\n        width: 8px;\n        height: 8px;\n      }\n    }\n    &::after {\n      content: "";\n      position: absolute;\n      width: 4px;\n      height: 4px;\n      background: var(--very-dark-black-blue);\n      border-radius: 100% 0 0 0;\n      right: 0%;\n      bottom: 0%;\n\n      @media screen and (min-width: 50em) {\n        width: 8px;\n        height: 8px;\n      }\n    }\n    .digit {\n      position: absolute;\n      top: 29%;\n      color: hsla(var(--soft-red-hsl), 0.75);\n    }\n  }\n  .bottom {\n    margin-top: 1px;\n    background: #34364F;\n    height: 30px;\n    width: 100%;\n    border-radius: 0 0 10px 10px;\n    display: flex;\n    justify-content: center;\n    overflow: hidden;\n    align-items: center;\n    position: relative;\n\n    @media screen and (min-width: 50em) {\n      width: 150px;\n      height: 70px;\n    }\n    &::before {\n      content: "";\n      position: absolute;\n      width: 4px;\n      height: 4px;\n      background: var(--very-dark-black-blue);\n      border-radius: 0 0 100% 0;\n      left: 0%;\n      top: 0%;\n\n      @media screen and (min-width: 50em) {\n        width: 8px;\n        height: 8px;\n      }\n    }\n    &::after {\n      content: "";\n      position: absolute;\n      width: 4px;\n      height: 4px;\n      background: var(--very-dark-black-blue);\n      border-radius: 0 0 0 100%;\n      right: 0%;\n      top: 0%;\n\n      @media screen and (min-width: 50em) {\n        width: 8px;\n        height: 8px;\n      }\n    }\n    .digit {\n      position: absolute;\n      bottom: 30%;\n    }\n  }\n  .front {\n    perspective: 1000px;\n    .top {\n      animation: none;\n      transform-origin: bottom;\n      &.active {\n        animation: "top-to-bottom" 0.8s 1;\n      }\n    }\n    .bottom {\n      transform-origin: top;\n      &.active {\n        animation: "bottom-to-top" 0.6s 1;\n      }\n    }\n  }\n  .back {\n    position: absolute;\n    top: 0;\n    width: 100%;\n\n  }\n  .unit {\n    margin-top: 10px;\n    font-size: 0.6rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: var(--grayish-blue);\n    letter-spacing: 0.2rem;\n    text-align: center;\n\n    @media screen and (min-width: 50em) {\n    font-size: 0.8rem;\n    letter-spacing: 0.5rem;\n    }\n  }\n  .digit {\n    color: var(--soft-red);\n    font-size: 2rem;\n    font-weight: bold;\n    @media screen and (min-width: 50em) {\n      font-size: 4.8rem;\n    }\n  }\n\n  \n']))),u=b.b.div(r||(r=Object(h.a)(["\n  position: fixed;\n  top: 90%;\n  justify-content: center;\n   svg {\n     margin: 0 15px;\n    &:hover {\n      cursor: pointer;\n    }\n     &:hover path {\n       fill: var(--soft-red);\n       pointer-events:all;\n     }\n   }\n"]))),x=function(){return Object(m.jsxs)(u,{children:[Object(m.jsx)("a",{href:"https://github.com/BenSeagrave",rel:"noreferrer",target:"_blank",children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{fill:"#8385A9",d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/ben-seagrave/",rel:"noreferrer",target:"_blank",children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{fill:"#8385A9",d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),Object(m.jsx)("a",{href:"https://twitter.com/benseagravedev",rel:"noreferrer",target:"_blank",children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{fill:"#8385A9",d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})})]})},g=function(n,e){var t=Object(a.useState)("1"),i=Object(l.a)(t,2),r=i[0],o=i[1],s=Object(a.useState)("2"),c=Object(l.a)(s,2),d=c[0],h=c[1],b=Object(a.useState)("3"),m=Object(l.a)(b,2),p=m[0],j=m[1],u=Object(a.useState)("4"),x=Object(l.a)(u,2),g=x[0],f=x[1],v=Object(a.useState)(!1),w=Object(l.a)(v,2),O=w[0],k=w[1];return Object(a.useEffect)((function(){var t=Math.floor((e-n)/1e3);if(t<0)return k(!0);var i=Math.floor(t/86400);t%=86400,o(("0"+i).slice(-2));var r=Math.floor(t/3600);t%=3600,h(("0"+r).slice(-2));var a=Math.floor(t/60);t%=60,j(("0"+a).slice(-2)),f(("0"+t%60).slice(-2))}),[n,e]),{days:r,hours:d,minutes:p,seconds:g,isFinished:O}};var f,v=b.b.div(o||(o=Object(h.a)(["\n  height: 100vh;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  \n  h1 {\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 0.5rem;\n    position: absolute;\n    top: 17%;\n    font-size: 0.8rem;\n    text-align: center;\n    line-height: 2rem;\n    @media screen and (min-width: 50em) {\n      font-size: 1.6rem;\n    }\n  }\n  \n  .timer {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n\n  \n"]))),w=function(){var n=Object(a.useState)(Date.now()),e=Object(l.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(new Date(2021,4,22)),o=Object(l.a)(r,1)[0];Object(a.useEffect)((function(){var n=setInterval((function(){i(Date.now())}),1e3);return function(){clearInterval(n)}}),[t]);var s=g(t,o),c=s.days,d=s.hours,h=s.minutes,b=s.seconds;return s.isFinished?Object(m.jsx)(v,{children:Object(m.jsx)("h1",{children:"Countdown complete!"})}):Object(m.jsxs)(v,{children:[Object(m.jsx)("h1",{children:"We're Launching Soon"}),Object(m.jsxs)("div",{className:"timer",children:[Object(m.jsx)(p,{digit:c,unit:"days"}),Object(m.jsx)(p,{digit:d,unit:"hours"}),Object(m.jsx)(p,{digit:h,unit:"minutes"}),Object(m.jsx)(p,{digit:b,unit:"seconds"})]}),Object(m.jsx)(x,{})]})},O=Object(b.a)(f||(f=Object(h.a)(['\n\n  :root {\n    --grayish-blue: hsl(237, 18%, 59%);\n    --soft-red: hsl(345, 95%, 68%);\n    --soft-red-hsl: 345, 95%, 68%;\n    --white: hsl(0, 0%, 100%);\n    --dark-desaturated-blue: hsl(236, 21%, 26%);\n    --very-dark-blue: hsl(235, 16%, 14%);\n    --very-dark-black-blue: hsl(234, 17%, 12%);\n  }\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body {\n    background: url("./pattern-hills.svg") bottom/100% repeat-x, url("./bg-stars.svg") top/100% 80% repeat, linear-gradient(to bottom, #1e1e28, #251d2c);\n    font-size: 14px;\n    font-family: \'Red Hat Text\', sans-serif;\n    overflow: hidden;\n  }\n\n  @keyframes top-to-bottom {\n  0% {\n            transform: rotate3d(0);\n  }\n  50% {\n            transform: rotate3d(-1, 0, 0, 90deg);\n  }\n  100% {\n            transform: rotate3d(-1, 0, 0, 90deg);\n  }\n}\n@keyframes bottom-to-top {\n  0% {\n            transform: rotate3d(1, 0, 0, 90deg);\n  }\n  50% {\n            transform: rotate3d(1, 0, 0, 90deg);\n  }\n  100% {\n            transform: rotate3d(0);\n  }\n}\n\n'])));d.a.render(Object(m.jsxs)(s.a.StrictMode,{children:[Object(m.jsx)(O,{}),Object(m.jsx)(w,{})]}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ba9ebaf9.chunk.js.map