/*! For license information please see meanmenu.c8bb3e.js.LICENSE.txt */
(()=>{"use strict";var e={6747:(e,n,a)=>{a.d(n,{Z:()=>o});var t=a(7207),i=a.n(t)()((function(e){return e[1]}));i.push([e.id,"/*! #######################################################################\n\n\tMeanMenu 2.0.7\n\t--------\n\n\tTo be used with jquery.meanmenu.js by Chris Wharton (http://www.meanthemes.com/plugins/meanmenu/)\n\n####################################################################### */a.meanmenu-reveal{display:none}.mean-container .mean-bar{background:#0c1923;float:left;min-height:42px;padding:4px 0;position:relative;width:100%;z-index:999999}.mean-container a.meanmenu-reveal{color:#fff;cursor:pointer;display:block;font-family:Arial,Helvetica,sans-serif;font-size:1px;font-weight:700;height:22px;line-height:22px;padding:13px 13px 11px;position:absolute;right:0;text-decoration:none;text-indent:-9999em;top:0;width:22px}.mean-container a.meanmenu-reveal span{background:#fff;display:block;height:3px;margin-top:3px}.mean-container .mean-nav{background:#0c1923;float:left;margin-top:44px;width:100%}.mean-container .mean-nav ul{list-style-type:none;margin:0;padding:0;width:100%}.mean-container .mean-nav ul li{float:left;position:relative;width:100%}.mean-container .mean-nav ul li a{border-top:1px solid #383838;border-top:1px solid hsla(0,0%,100%,.5);color:#fff;display:block;float:left;margin:0;padding:1em 5%;text-align:left;text-decoration:none;text-transform:uppercase;width:90%}.mean-container .mean-nav ul li li a{border-top:1px solid #f1f1f1;border-top:1px solid hsla(0,0%,100%,.25);filter:alpha(opacity=75);opacity:.75;padding:1em 10%;text-shadow:none!important;visibility:visible;width:80%}.mean-container .mean-nav ul li.mean-last a{border-bottom:none;margin-bottom:0}.mean-container .mean-nav ul li li li a{padding:1em 15%;width:70%}.mean-container .mean-nav ul li li li li a{padding:1em 20%;width:60%}.mean-container .mean-nav ul li li li li li a{padding:1em 25%;width:50%}.mean-container .mean-nav ul li a:hover{background:#252525;background:hsla(0,0%,100%,.1)}.mean-container .mean-nav ul li a.mean-expand{background:hsla(0,0%,100%,.1);border:none!important;border-bottom:1px solid hsla(0,0%,100%,.2)!important;border-left:1px solid hsla(0,0%,100%,.4)!important;font-weight:700;height:32px;margin-top:1px;padding:12px!important;position:absolute;right:0;text-align:center;top:0;width:26px;z-index:2}.mean-container .mean-nav ul li a.mean-expand:hover{background:rgba(0,0,0,.9)}.mean-container .mean-push{clear:both;float:left}.mean-container .mean-push,.mean-nav .wrapper{margin:0;padding:0;width:100%}.mean-container .mean-bar,.mean-container .mean-bar *{box-sizing:content-box}.mean-remove{display:none!important}",""]);const o=i},7207:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var a=e(n);return n[2]?"@media ".concat(n[2]," {").concat(a,"}"):a})).join("")},n.i=function(e,a,t){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(t)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);t&&i[s[0]]||(a&&(s[2]?s[2]="".concat(a," and ").concat(s[2]):s[2]=a),n.push(s))}},n}},640:(e,n,a)=>{var t,i=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},o=function(){var e={};return function(n){if(void 0===e[n]){var a=document.querySelector(n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[n]=a}return e[n]}}(),r=[];function l(e){for(var n=-1,a=0;a<r.length;a++)if(r[a].identifier===e){n=a;break}return n}function s(e,n){for(var a={},t=[],i=0;i<e.length;i++){var o=e[i],s=n.base?o[0]+n.base:o[0],m=a[s]||0,c="".concat(s," ").concat(m);a[s]=m+1;var d=l(c),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(r[d].references++,r[d].updater(u)):r.push({identifier:c,updater:f(u,n),references:1}),t.push(c)}return t}function m(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=a.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var c,d=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function u(e,n,a,t){var i=a?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var o=document.createTextNode(i),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(o,r[n]):e.appendChild(o)}}function p(e,n,a){var t=a.css,i=a.media,o=a.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var h=null,v=0;function f(e,n){var a,t,i;if(n.singleton){var o=v++;a=h||(h=m(n)),t=u.bind(null,a,o,!1),i=u.bind(null,a,o,!0)}else a=m(n),t=p.bind(null,a,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var a=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<a.length;t++){var i=l(a[t]);r[i].references--}for(var o=s(e,n),m=0;m<a.length;m++){var c=l(a[m]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}a=o}}}},5311:e=>{e.exports=jQuery}},n={};function a(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,a),o.exports}a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),a.nc=void 0,(()=>{var e=a(640),n=a.n(e),t=a(6747),i={insert:"head",singleton:!1};n()(t.Z,i);t.Z.locals;var o,r=a(5311);(o=r).fn.meanmenu=function(e){var n={meanMenuTarget:r(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,meanDisplay:"block",removeElements:""};e=o.extend(n,e);var a=window.innerWidth||document.documentElement.clientWidth;return this.each((function(){var n=e.meanMenuTarget,t=e.meanMenuContainer,i=e.meanMenuClose,o=e.meanMenuCloseSize,l=e.meanMenuOpen,s=e.meanRevealPosition,m=e.meanRevealPositionDistance,c=e.meanRevealColour,d=e.meanScreenWidth,u=e.meanNavPush,p=".meanmenu-reveal",h=e.meanShowChildren,v=e.meanExpandableChildren,f=e.meanExpand,g=e.meanContract,b=e.meanRemoveAttrs,x=e.onePage,w=e.meanDisplay,y=e.removeElements,C=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))&&(C=!0),(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&r("html").css("overflow-y","scroll");var M="",k=function(){if("center"===s){var e=(window.innerWidth||document.documentElement.clientWidth)/2-22+"px";M="left:"+e+";right:auto;",C?r(".meanmenu-reveal").animate({left:e}):r(".meanmenu-reveal").css("left",e)}},A=!1,E=!1;"right"===s&&(M="right:"+m+";left:auto;"),"left"===s&&(M="left:"+m+";right:auto;"),k();var S="",P=function(){r(".mean-bar,.mean-push").remove(),r(t).removeClass("mean-container"),r(n).css("display",w),A=!1,E=!1,r(y).removeClass("mean-remove")},W=function(){var e="background:"+c+";color:"+c+";"+M;if(a<=d){r(y).addClass("mean-remove"),E=!0,r(t).addClass("mean-container"),r(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+e+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var s=r(n).html();r(".mean-nav").html(s),b&&r("nav.mean-nav ul, nav.mean-nav ul *").each((function(){r(this).is(".mean-remove")?r(this).attr("class","mean-remove"):r(this).removeAttr("class"),r(this).removeAttr("id")})),r(n).before('<div class="mean-push" />'),r(".mean-push").css("margin-top",u),r(n).hide(),r(".meanmenu-reveal").show(),r(p).html(l),S=r(p),r(".mean-nav ul").hide(),h?v?(r(".mean-nav ul ul").each((function(){r(this).children().length&&r(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+o+'">'+f+"</a>")})),r(".mean-expand").on("click",(function(e){e.preventDefault(),r(this).hasClass("mean-clicked")?(r(this).text(f),r(this).prev("ul").slideUp(300,(function(){}))):(r(this).text(g),r(this).prev("ul").slideDown(300,(function(){}))),r(this).toggleClass("mean-clicked")}))):r(".mean-nav ul ul").show():r(".mean-nav ul ul").hide(),r(".mean-nav ul li").last().addClass("mean-last"),S.removeClass("meanclose"),r(S).click((function(e){e.preventDefault(),!1===A?(S.css("text-align","center"),S.css("text-indent","0"),S.css("font-size",o),r(".mean-nav ul:first").slideDown(),A=!0):(r(".mean-nav ul:first").slideUp(),A=!1),S.toggleClass("meanclose"),r(S).is(".meanmenu-reveal.meanclose")?S.html(i):S.html(l),r(y).addClass("mean-remove")})),x&&r(".mean-nav ul > li > a:first-child").on("click",(function(){r(".mean-nav ul:first").slideUp(),A=!1,r(S).toggleClass("meanclose").html(l)}))}else P()};C||r(window).resize((function(){a=window.innerWidth||document.documentElement.clientWidth,P(),a<=d?(W(),k()):P()})),r(window).resize((function(){a=window.innerWidth||document.documentElement.clientWidth,C?(k(),a<=d?!1===E&&W():P()):(P(),a<=d&&(W(),k()))})),W()}))},r(document).ready((function(e){e(".rs-mean-menu").meanmenu({meanMenuOpen:'<span class="icon-bars2"></span>',meanMenuClose:'<span class="icon-x"></span>',meanMenuContainer:".f-mean-nav",meanScreenWidth:"768",meanExpand:"+",meanContract:"-"})}))})()})();