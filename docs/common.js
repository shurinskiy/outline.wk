!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(e,t,o){var r;r=function(){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=function(e){return Array.isArray(e)?e:[e]},n=function(e){return e instanceof Node},l=function(e,t){if(e&&t){e=function(e){return e instanceof NodeList}(e)?e:[e];for(var o=0;o<e.length&&!0!==t(e[o],o,e.length);o++);}},c=function(e){return console.error("[scroll-lock] ".concat(e))},i=function(e){if(Array.isArray(e))return e.join(", ")},a=function(e){var t=[];return l(e,(function(e){return t.push(e)})),t},s=function(e,t){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document;if(o&&-1!==a(r.querySelectorAll(t)).indexOf(e))return e;for(;(e=e.parentElement)&&-1===a(r.querySelectorAll(t)).indexOf(e););return e},u=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,r=-1!==a(o.querySelectorAll(t)).indexOf(e);return r},d=function(e){if(e)return"hidden"===getComputedStyle(e).overflow},f=function(e){if(e)return!!d(e)||e.scrollTop<=0},p=function(e){if(e){if(d(e))return!0;var t=e.scrollTop,o=e.scrollHeight;return t+e.offsetHeight>=o}},h=function(e){if(e)return!!d(e)||e.scrollLeft<=0},m=function(e){if(e){if(d(e))return!0;var t=e.scrollLeft,o=e.scrollWidth;return t+e.offsetWidth>=o}},b=function(e){return u(e,'textarea, [contenteditable="true"]')},g=function(e){return u(e,'input[type="range"]')};function y(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o.d(t,"disablePageScroll",(function(){return k})),o.d(t,"enablePageScroll",(function(){return w})),o.d(t,"getScrollState",(function(){return O})),o.d(t,"clearQueueScrollLocks",(function(){return P})),o.d(t,"getTargetScrollBarWidth",(function(){return L})),o.d(t,"getCurrentTargetScrollBarWidth",(function(){return _})),o.d(t,"getPageScrollBarWidth",(function(){return j})),o.d(t,"getCurrentPageScrollBarWidth",(function(){return E})),o.d(t,"addScrollableTarget",(function(){return T})),o.d(t,"removeScrollableTarget",(function(){return A})),o.d(t,"addScrollableSelector",(function(){return x})),o.d(t,"removeScrollableSelector",(function(){return C})),o.d(t,"addLockableTarget",(function(){return G})),o.d(t,"addLockableSelector",(function(){return M})),o.d(t,"setFillGapMethod",(function(){return F})),o.d(t,"addFillGapTarget",(function(){return W})),o.d(t,"removeFillGapTarget",(function(){return q})),o.d(t,"addFillGapSelector",(function(){return Y})),o.d(t,"removeFillGapSelector",(function(){return N})),o.d(t,"refillGaps",(function(){return D}));var v=["padding","margin","width","max-width","none"],S={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:v[0],startTouchY:0,startTouchX:0},k=function(e){S.queue<=0&&(S.scroll=!1,B(),Q()),T(e),S.queue++},w=function(e){S.queue>0&&S.queue--,S.queue<=0&&(S.scroll=!0,R(),X()),A(e)},O=function(){return S.scroll},P=function(){S.queue=0},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n(e)){var o=e.style.overflowY;t?O()||(e.style.overflowY=e.getAttribute("data-scroll-lock-saved-overflow-y-property")):e.style.overflowY="scroll";var r=_(e);return e.style.overflowY=o,r}return 0},_=function(e){if(n(e)){if(e===document.body){var t=document.documentElement.clientWidth;return window.innerWidth-t}var o=e.style.borderLeftWidth,r=e.style.borderRightWidth;e.style.borderLeftWidth="0px",e.style.borderRightWidth="0px";var l=e.offsetWidth-e.clientWidth;return e.style.borderLeftWidth=o,e.style.borderRightWidth=r,l}return 0},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return L(document.body,e)},E=function(){return _(document.body)},T=function(e){e&&r(e).map((function(e){l(e,(function(e){n(e)?e.setAttribute("data-scroll-lock-scrollable",""):c('"'.concat(e,'" is not a Element.'))}))}))},A=function(e){e&&r(e).map((function(e){l(e,(function(e){n(e)?e.removeAttribute("data-scroll-lock-scrollable"):c('"'.concat(e,'" is not a Element.'))}))}))},x=function(e){e&&r(e).map((function(e){S.scrollableSelectors.push(e)}))},C=function(e){e&&r(e).map((function(e){S.scrollableSelectors=S.scrollableSelectors.filter((function(t){return t!==e}))}))},G=function(e){e&&(r(e).map((function(e){l(e,(function(e){n(e)?e.setAttribute("data-scroll-lock-lockable",""):c('"'.concat(e,'" is not a Element.'))}))})),O()||B())},M=function(e){e&&(r(e).map((function(e){S.lockableSelectors.push(e)})),O()||B(),Y(e))},F=function(e){if(e)if(-1!==v.indexOf(e))S.fillGapMethod=e,D();else{var t=v.join(", ");c('"'.concat(e,'" method is not available!\nAvailable fill gap methods: ').concat(t,"."))}},W=function(e){e&&r(e).map((function(e){l(e,(function(e){n(e)?(e.setAttribute("data-scroll-lock-fill-gap",""),S.scroll||I(e)):c('"'.concat(e,'" is not a Element.'))}))}))},q=function(e){e&&r(e).map((function(e){l(e,(function(e){n(e)?(e.removeAttribute("data-scroll-lock-fill-gap"),S.scroll||Z(e)):c('"'.concat(e,'" is not a Element.'))}))}))},Y=function(e){e&&r(e).map((function(e){-1===S.fillGapSelectors.indexOf(e)&&(S.fillGapSelectors.push(e),S.scroll||$(e))}))},N=function(e){e&&r(e).map((function(e){S.fillGapSelectors=S.fillGapSelectors.filter((function(t){return t!==e})),S.scroll||V(e)}))},D=function(){S.scroll||Q()},B=function(){var e=i(S.lockableSelectors);U(e)},R=function(){var e=i(S.lockableSelectors);K(e)},U=function(e){var t=document.querySelectorAll(e);l(t,(function(e){z(e)}))},K=function(e){var t=document.querySelectorAll(e);l(t,(function(e){H(e)}))},z=function(e){if(n(e)&&"true"!==e.getAttribute("data-scroll-lock-locked")){var t=window.getComputedStyle(e);e.setAttribute("data-scroll-lock-saved-overflow-y-property",t.overflowY),e.setAttribute("data-scroll-lock-saved-inline-overflow-property",e.style.overflow),e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",e.style.overflowY),e.style.overflow="hidden",e.setAttribute("data-scroll-lock-locked","true")}},H=function(e){n(e)&&"true"===e.getAttribute("data-scroll-lock-locked")&&(e.style.overflow=e.getAttribute("data-scroll-lock-saved-inline-overflow-property"),e.style.overflowY=e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-saved-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-locked"))},Q=function(){S.fillGapSelectors.map((function(e){$(e)}))},X=function(){S.fillGapSelectors.map((function(e){V(e)}))},$=function(e){var t=document.querySelectorAll(e),o=-1!==S.lockableSelectors.indexOf(e);l(t,(function(e){I(e,o)}))},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n(e)){var o;if(""===e.getAttribute("data-scroll-lock-lockable")||t)o=L(e,!0);else{var r=s(e,i(S.lockableSelectors));o=L(r,!0)}"true"===e.getAttribute("data-scroll-lock-filled-gap")&&Z(e);var l=window.getComputedStyle(e);if(e.setAttribute("data-scroll-lock-filled-gap","true"),e.setAttribute("data-scroll-lock-current-fill-gap-method",S.fillGapMethod),"margin"===S.fillGapMethod){var c=parseFloat(l.marginRight);e.style.marginRight="".concat(c+o,"px")}else if("width"===S.fillGapMethod)e.style.width="calc(100% - ".concat(o,"px)");else if("max-width"===S.fillGapMethod)e.style.maxWidth="calc(100% - ".concat(o,"px)");else if("padding"===S.fillGapMethod){var a=parseFloat(l.paddingRight);e.style.paddingRight="".concat(a+o,"px")}}},V=function(e){var t=document.querySelectorAll(e);l(t,(function(e){Z(e)}))},Z=function(e){if(n(e)&&"true"===e.getAttribute("data-scroll-lock-filled-gap")){var t=e.getAttribute("data-scroll-lock-current-fill-gap-method");e.removeAttribute("data-scroll-lock-filled-gap"),e.removeAttribute("data-scroll-lock-current-fill-gap-method"),"margin"===t?e.style.marginRight="":"width"===t?e.style.width="":"max-width"===t?e.style.maxWidth="":"padding"===t&&(e.style.paddingRight="")}};"undefined"!=typeof window&&window.addEventListener("resize",(function(e){D()})),"undefined"!=typeof document&&(document.addEventListener("touchstart",(function(e){S.scroll||(S.startTouchY=e.touches[0].clientY,S.startTouchX=e.touches[0].clientX)})),document.addEventListener("touchmove",(function(e){if(!S.scroll){var t=S.startTouchY,o=S.startTouchX,r=e.touches[0].clientY,n=e.touches[0].clientX;if(e.touches.length<2){var l=i(S.scrollableSelectors),c={up:t<r,down:t>r,left:o<n,right:o>n},a={up:t+3<r,down:t-3>r,left:o+3<n,right:o-3>n};!function t(o){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o){var n=s(o,l,!1);if(g(o))return!1;if(r||b(o)&&s(o,l)||u(o,l)){var i=!1;h(o)&&m(o)?(c.up&&f(o)||c.down&&p(o))&&(i=!0):f(o)&&p(o)?(c.left&&h(o)||c.right&&m(o))&&(i=!0):(a.up&&f(o)||a.down&&p(o)||a.left&&h(o)||a.right&&m(o))&&(i=!0),i&&(n?t(n,!0):e.cancelable&&e.preventDefault())}else t(n)}else e.cancelable&&e.preventDefault()}(e.target)}}}),{passive:!1}),document.addEventListener("touchend",(function(e){S.scroll||(S.startTouchY=0,S.startTouchX=0)})));var J={hide:function(e){c('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'),k(e)},show:function(e){c('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'),w(e)},toggle:function(e){c('"toggle" is deprecated! Do not use it.'),O()?k():w(e)},getState:function(){return c('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'),O()},getWidth:function(){return c('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'),j()},getCurrentWidth:function(){return c('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'),E()},setScrollableTargets:function(e){c('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'),T(e)},setFillGapSelectors:function(e){c('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'),Y(e)},setFillGapTargets:function(e){c('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'),W(e)},clearQueue:function(){c('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'),P()}},ee=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){y(e,t,o[t])}))}return e}({disablePageScroll:k,enablePageScroll:w,getScrollState:O,clearQueueScrollLocks:P,getTargetScrollBarWidth:L,getCurrentTargetScrollBarWidth:_,getPageScrollBarWidth:j,getCurrentPageScrollBarWidth:E,addScrollableSelector:x,removeScrollableSelector:C,addScrollableTarget:T,removeScrollableTarget:A,addLockableSelector:M,addLockableTarget:G,addFillGapSelector:Y,removeFillGapSelector:N,addFillGapTarget:W,removeFillGapTarget:q,setFillGapMethod:F,refillGaps:D,_state:S},J);t.default=ee}]).default},e.exports=r()},function(e,t){var o;(o=Element.prototype).matches=o.matches||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector,o.closest=o.closest||function(e){return this?this.matches(e)?this:this.parentElement?this.parentElement.closest(e):null:null},function(e){var t=e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector;e.matches=e.matchesSelector=t||function(e){var t=document.querySelectorAll(e),o=this;return Array.prototype.some.call(t,(function(e){return e===o}))}}(Element.prototype)},function(e,t){$(".faq__item-question").on("click",(function(e){$(e.target).toggleClass("opened").next(".faq__item-answer").slideToggle()}))},function(e,t,o){"use strict";o.r(t);o(1);var r=o(0),n=o.n(r);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t,o){return(t=f(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function d(e,t,o){return t&&u(e.prototype,t),o&&u(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function f(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}var p,h,m,b,g;function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function S(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(Object(o),!0).forEach((function(t){k(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function k(e,t,o){return(t=L(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,L(r.key),r)}}function P(e,t,o){return t&&O(e.prototype,t),o&&O(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function L(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}h=.01*window.visualViewport.height,m=document.querySelector(".header"),b=m.querySelector(".header__navi"),g=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=function(){function o(e,t,r){s(this,o),!e||!e instanceof Element||!t||(this.options=i({class:"opened",globalClose:!0},r),this.init())}return d(o,[{key:"menuOpen",value:function(t){if(t&&(t.preventDefault(),t.stopPropagation()),e.classList.add("opened"),void 0!==this.options.scrollLock){var o=parseInt(getComputedStyle(e).maxWidth),r=this.options.scrollLock.getPageScrollBarWidth();Object.assign(e.style,{maxWidth:o+r+"px"}),this.options.scrollLock.disablePageScroll()}if("function"==typeof this.options.open)return this.options.open.call(e)}},{key:"menuClose",value:function(t){if(t&&t.stopPropagation(),e.classList.remove("".concat(this.options.class)),e.removeAttribute("style"),void 0!==this.options.scrollLock&&(this.options.scrollLock.clearQueueScrollLocks(),this.options.scrollLock.enablePageScroll()),"function"==typeof this.options.close)return this.options.close.call(e)}},{key:"omitToClose",value:function(e){return this.options.omitToClose.split(",").map((function(e){return e.trim()})).some((function(t){return!!e.target.closest("".concat(t))}))}},{key:"init",value:function(){var o=this;t.forEach((function(t){t.addEventListener("click",(function(t){e.classList.contains("".concat(o.options.class))?o.menuClose(t):o.menuOpen(t)}))})),this.options.globalClose&&["click","touchstart"].forEach((function(t){document.addEventListener(t,(function(t){var r=e.classList.contains("".concat(o.options.class)),n=t.target.closest(".".concat(e.className.split(" ")[0]));!r||n||o.omitToClose(t)||(t.preventDefault(),o.menuClose(t))}))}),{passive:!1})}}]),o}();return new r(e,t,o)}(b,m.querySelectorAll(".header__navi-toggle, .h-navi__close"),{scrollLock:n.a,omitToClose:".modal",class:"opened"}),b.addEventListener("swiped-left",(function(e){return g.menuClose(e)})),document.documentElement.style.setProperty("--vh","".concat(h,"px")),window.visualViewport.addEventListener("resize",(function(e){requestAnimationFrame((function(){document.documentElement.style.setProperty("--vh","".concat(.01*e.target.height,"px"))}))})),null===(p=document.querySelector(".aside__toggle"))||void 0===p||p.addEventListener("click",(function(e){return g.menuClose()})),$(window).on("scroll",(function(e){$(m)[($(e.target).scrollTop()>30?"add":"remove")+"Class"]("header_filled")}));!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(){function e(t){var o;w(this,e),this.props=S({class:"modal"},t),this.select=null!==(o=this.props.select)&&void 0!==o?o:"[data-".concat(this.props.class,"]"),this.modal=document.querySelector("#".concat(this.props.class,"__underlay")),this.body=document.querySelector(".".concat(this.props.class,"__content")),this.scrollLock=void 0!==this.props.scrollLock&&this.props.scrollLock,this._init()}return P(e,[{key:"close",value:function(){if(this.scrollLock&&(this.scrollLock.clearQueueScrollLocks(),this.scrollLock.enablePageScroll()),this.modal.className="".concat(this.props.class),this.modal.style.display="none",this.body.className="".concat(this.props.class,"__content"),this.body.innerHTML="","function"==typeof this.props.close)return this.props.close.call(this.body)}},{key:"open",value:function(e){var t,o=e.dataset["".concat(this.props.class)]||"error",r="#"==o?e.innerHTML:null===(t=document.querySelector("#"+o))||void 0===t?void 0:t.innerHTML;if(this.modal.className="".concat(this.props.class),this.modal.classList.add("#"!=o?"".concat(this.props.class,"_").concat(o):"".concat(this.props.class,"_self")),this.modal.style.display="block",this.body.innerHTML="",this.body.className="".concat(this.props.class,"__content"),this.body.insertAdjacentHTML("beforeend",null!=r?r:""),this.scrollLock&&this.scrollLock.disablePageScroll(),"function"==typeof this.props.open)return this.props.open.call(this.body,this)}},{key:"_underlay",value:function(){if(!document.querySelector("#".concat(this.props.class,"__underlay"))){var e=document.createElement("div"),t=document.createElement("div"),o=document.createElement("span"),r=document.createElement("div");e.className="".concat(this.props.class),e.id="".concat(this.props.class,"__underlay"),this.scrollLock&&e.setAttribute("data-scroll-lock-scrollable",""),t.className="".concat(this.props.class,"__body"),o.className="".concat(this.props.class,"__close"),r.className="".concat(this.props.class,"__content"),t.append(o),t.append(r),e.append(t),document.body.append(e),this.modal=e,this.body=r}}},{key:"_init",value:function(){var e=this;this._underlay(),document.addEventListener("click",(function(t){var o=t.target.closest(e.select);o&&o.dataset["".concat(e.props.class)]&&(t.preventDefault(),e.open(o))})),document.addEventListener("click",(function(t){(t.target==e.modal||t.target.classList.contains("".concat(e.props.class,"__close")))&&(t.preventDefault(),e.close())}))}}]),e}();new t(e)}({select:".hero__button, .form__button",scrollLock:n.a,open:function(e){}});var _,j={load:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"//api-maps.yandex.ru/2.1/?lang=en_RU",t=function(){var t=e.match(/[\\?&]ns=([^&#]*)/);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))};return this.promise||(this.promise=new Promise((function(t,o){var r=document.createElement("script");r.onload=t,r.onerror=o,r.type="text/javascript",r.src=e,document.body.appendChild(r)})).then((function(){var e=t();return e&&"ymaps"!==e&&(0,eval)("var ymaps = ".concat(e,";")),new Promise((function(e){return ymaps.ready(e)}))}))),this.promise}};_=document.querySelector(".footer__map"),j.load("https://api-maps.yandex.ru/2.1/?lang=ru_RU").then((function(e){var t=new e.Map(_,{center:[47.223767,39.714231],zoom:16,controls:["zoomControl"]},{zoomControlPosition:{right:"5%",top:100},zoomControlFloat:"none",searchControlProvider:"yandex#search"}),o=new e.Placemark([47.223767,39.714231],{balloonContentHeader:"Студия татуировки",balloonContentBody:"Ростов-на-Дону, Газетный пер., 55а",balloonContentFooter:"тел: +7 (989) 535-98-75",hintContent:"Студия татуировки"},{preset:"islands#blueGovernmentIcon"});t.behaviors.disable("scrollZoom"),t.geoObjects.add(o)})).catch((function(e){return console.log("Failed to load Yandex Maps",e)}));o(2)}]);